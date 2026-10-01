param([string]$OutputRoot,[int]$TimeoutSeconds=120)
$ErrorActionPreference='Stop'
$portPath=Split-Path $PSScriptRoot
$repoPath=(Resolve-Path -LiteralPath (Join-Path $portPath '..\..')).Path
if(!$OutputRoot){$OutputRoot=Join-Path $repoPath '..\..\outputs'}
$outputPath=[IO.Path]::GetFullPath((Join-Path $OutputRoot ('continue-input-'+[Guid]::NewGuid().ToString('N').Substring(0,8))))
$runtimePath=Join-Path $outputPath 'runtime'
$pluginPath=Join-Path $runtimePath 'Plugins'
[IO.Directory]::CreateDirectory($pluginPath)|Out-Null
[IO.Directory]::CreateDirectory((Join-Path $runtimePath 'ERB'))|Out-Null
$runtimeSource=Join-Path $portPath 'artifacts\runtime-Game'
Copy-Item -LiteralPath (Join-Path $runtimeSource 'Emuera.exe') -Destination $runtimePath
Copy-Item -LiteralPath (Join-Path $runtimeSource 'CSV') -Destination $runtimePath -Recurse
Get-ChildItem -LiteralPath (Join-Path $portPath 'plugin\bin\Release\net10.0-windows') -Filter '*.dll'|Copy-Item -Destination $pluginPath
[IO.File]::WriteAllText((Join-Path $runtimePath 'pluginsAware.txt'),'Owned managed engine input regression plugin.')
$paths=Get-Content -LiteralPath (Join-Path $runtimeSource 'game-paths.json') -Raw|ConvertFrom-Json -AsHashtable
foreach($key in @($paths.Keys)){$paths[$key]=[IO.Path]::GetFullPath($paths[$key],$runtimeSource)}
$paths|ConvertTo-Json|Set-Content -LiteralPath (Join-Path $runtimePath 'game-paths.json') -Encoding utf8
$probeSource=@'
using System.Collections;
using System.Diagnostics;
using System.Drawing;
using System.Reflection;
using System.Text.Json;
using System.Windows.Forms;
using MinorShift.Emuera.Runtime.Utils.PluginSystem;
using EraUma.Plugin;
using EraUma.Compatibility;
public sealed class PluginManifest:PluginManifestAbstract {
 public PluginManifest(){methods.Add(new ContinueInputProbe());}
 public override string PluginName=>"Continue input regression";
 public override string PluginDescription=>"Owned managed input methods and production ERB loop";
 public override string PluginVersion=>"1";
 public override string PluginAuthor=>"local";
}
public sealed class ContinueInputProbe:IPluginMethod {
 public string Name=>"ContinueInputProbe";
 public string Description=>"Production WAIT/TWAIT/INPUTS/TINPUTS regression";
 static readonly BindingFlags Flags=BindingFlags.Instance|BindingFlags.Public|BindingFlags.NonPublic;
 static object? Get(object o,string n)=>o.GetType().GetProperty(n,Flags)?.GetValue(o)??o.GetType().GetField(n,Flags)?.GetValue(o);
 static object? Call(object o,string n,params object[] a)=>o.GetType().GetMethod(n,Flags)?.Invoke(o,a);
 readonly Bridge bridge=new();
 readonly List<object> observations=[];
 readonly List<int> accepted=[];
 readonly Stopwatch stageClock=new();
 System.Windows.Forms.Timer? timer;
 Session? game;
 int armedStage=-99,timedPolls;
 bool negativePassed;
 readonly string root=Path.GetFullPath(Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location)!,".."));
 object Console(){var m=Get(PluginManager.GetInstance(),"expressionMediator")!;return Get(m,"Console")!;}
 void Error(Exception e){File.WriteAllText(Path.Combine(root,"error.txt"),e.ToString());}
 public void Execute(PluginMethodParameter[] a){
  try{
   switch(a[0].strValue){
    case "negative":
     PluginManager.GetInstance().Print("Blank click negative control");PluginManager.GetInstance().PrintNewLine();
     Arm(-1);a[2].intValue=1;return;
    case "negative-finish":if(!negativePassed)throw new Exception("INPUTS negative control unexpectedly accepted blank click");a[2].intValue=1;return;
    case "prepare":
     var p=JsonSerializer.Deserialize<Dictionary<string,string>>(File.ReadAllText(Path.Combine(root,"game-paths.json")))!;
     game=new Session(Path.Combine(root,"sav-probe"),()=>0,_=>{},true);
     game.LoadGame(p["source"],p["engine"],p["kojo"],start:false,resourceRoot:p["resources"],presentationDelays:true);
     typeof(Bridge).GetField("session",Flags)!.SetValue(bridge,game);
     game.Execute("var __probeStage=0,__probeResults=[];");
     game.Start("""
      await era.clear();era.print('Narrative click');await era.input({any:true});__probeResults.push('continue');
      __probeStage=1;era.print('Timed narrative click');var timer=setTimeout(()=>{},10000);await era.input({any:true});clearTimeout(timer);__probeResults.push('timed');
      __probeStage=2;await era.clear();era.printButton('Choose seven',7);var value=await era.input();if(value!==7)throw Error('Wrong numeric choice');__probeResults.push(value);
      __probeStage=3;await era.clear();era.print('Name');value=await era.input({rule:'.+'});if(value!=='Trainer')throw Error('Wrong name');__probeResults.push(value);
      __probeStage=4;await era.clear();era.printButton('Any with choice',8);value=await era.input({any:true});if(value!==8)throw Error('Any discarded active choice');__probeResults.push(value);
      __probeStage=5;await era.clear();era.printButton('Timed choice',9);timer=setTimeout(()=>{},10000);value=await era.input();clearTimeout(timer);if(value!==9)throw Error('Wrong timed choice');__probeResults.push(value);
      __probeStage=6;await era.clear();era.print([{content:'Resource link',url:'https://umaera.gitgud.site/data/uma-resource/full.html'}]);value=await era.input({any:true});__probeResults.push(value);
      __probeStage=7;era.quit();
      """);
     a[0].strValue="tick";bridge.Execute(a);return;
    case "arm":Arm(int.Parse(game!.EvaluateJson("__probeStage")));a[2].intValue=1;return;
    case "tick":if(game?.State=="input"&&game.EvaluateJson("__probeStage")=="1")timedPolls++;break;
    case "resume":
     int previous=int.Parse(game!.EvaluateJson("__probeStage"));bridge.Execute(a);
     if(game.State=="error")throw new Exception(game.Error);
     int next=int.Parse(game.EvaluateJson("__probeStage"));
     if(next==previous)throw new Exception("Input did not advance stage "+previous);
     accepted.Add(previous);return;
    case "finish":
     timer?.Dispose();
     bool pass=negativePassed&&accepted.SequenceEqual(Enumerable.Range(0,7))&&timedPolls>=1&&game!.State=="done"&&game.Error=="";
     File.WriteAllText(Path.Combine(root,"continue-input.json"),JsonSerializer.Serialize(new{pass,negativePassed,timedPolls,accepted,results=JsonDocument.Parse(game!.EvaluateJson("__probeResults")).RootElement.Clone(),observations,scope="Production Game.ERB loop with original host and owned MainWindow/EmueraConsole managed methods; no OS input, desktop capture or human play"},new JsonSerializerOptions{WriteIndented=true}));
     a[2].intValue=pass?1:-1;return;
   }
   bridge.Execute(a);
  }catch(Exception e){Error(e);a[2].intValue=-1;a[3].strValue=e.ToString();}
 }
 void Arm(int stage){
  if(armedStage==stage&&timer is not null)return;
  timer?.Dispose();armedStage=stage;stageClock.Restart();
  timer=new(){Interval=15};timer.Tick+=(s,e)=>Tick(stage);timer.Start();
 }
 void Tick(int stage){
  var c=Console();if(Get(c,"state")?.ToString()!="WaitInput")return;
  // The engine starts timed input after its first canvas paint. Hidden owned
  // processes need the same OnPaint path, otherwise TWAIT never times out.
  if(Get(c,"need_settimer") is true)UiRenderer.CaptureCurrentWindow(Path.Combine(root,"timed-input.png"));
  if(stage==1&&stageClock.ElapsedMilliseconds<160)return;
  timer!.Stop();timer.Dispose();timer=null;
  try{
   var w=Get(c,"Window")!;var pic=(Control)Get(w,"MainPicBox")!;
   string inputType=Get(c,"NowInputType")!.ToString()!;
   bool wait=(bool)Get(c,"IsWaitingEnterKey")!;
   if(stage is -1 or 0 or 1){
    var p=new Point(pic.ClientSize.Width-20,pic.ClientSize.Height-20);Call(c,"MoveMouse",p);
    if(Get(c,"SelectedString") is not null)throw new Exception("Blank canvas unexpectedly selects a choice");
    if(stage>=0&&!wait)throw new Exception("Narrative is not waiting for EnterKey: "+inputType);
    observations.Add(new{stage,inputType,waitingEnter=wait,blankSelected=true,action="owned blank left-click handler"});
    Call(w,"mainPicBox_MouseDown",pic,new MouseEventArgs(MouseButtons.Left,1,p.X,p.Y,0));
    if(stage==-1){
     negativePassed=Get(c,"state")?.ToString()=="WaitInput"&&inputType=="StrValue"&&!wait;
     observations.Add(new{stage,blankClickBlocked=negativePassed});
     Call(c,"PressEnterKey",false,"",true);
    }
    return;
   }
   if(wait||inputType!="StrValue")throw new Exception("Value input replaced by a continuation wait: "+stage);
   if(stage is 3 or 6){
    observations.Add(new{stage,inputType,waitingEnter=wait,action="owned text input"});
    ((RichTextBox)Get(w,"richTextBox1")!).Text=stage==3?"Trainer":"URL preserved";
    Call(w,"PressEnterKey",false,false);return;
   }
   string expected=(stage==2?7:stage==4?8:9).ToString();Point? selected=null;
   foreach(var line in (IEnumerable)Get(c,"displayLineList")!){
    int y=Convert.ToInt32(Call(c,"GetLinePointY",Convert.ToInt32(Get(line,"LineNo"))));Walk(line,y);
   }
   void Walk(object line,int y){
    foreach(var b in (IEnumerable)Get(line,"Buttons")!){
     if((bool)Get(b,"IsButton")!&&Get(b,"Inputs")?.ToString()==expected){
      var p=new Point(Convert.ToInt32(Get(b,"PointX"))+Math.Max(1,Convert.ToInt32(Get(b,"Width"))/2),y+9);
      Call(c,"MoveMouse",p);if(Get(c,"SelectedString")?.ToString()==expected)selected=p;
     }
     foreach(var part in (IEnumerable)Get(b,"StrArray")!){
      if(Get(part,"Children") is IEnumerable children){
       int cy=y+Convert.ToInt32(Get(part,"Top"));foreach(var child in children){Walk(child,cy);cy+=26;}
      }
     }
    }
   }
   if(selected is not Point point)throw new Exception("Current numeric button not clickable: "+stage);
   observations.Add(new{stage,inputType,waitingEnter=wait,selected=expected,action="owned numeric left-click handler"});
   Call(c,"MoveMouse",point);Call(w,"mainPicBox_MouseDown",pic,new MouseEventArgs(MouseButtons.Left,1,point.X,point.Y,0));
  }catch(Exception e){Error(e);}
 }
}
'@
[IO.File]::WriteAllText((Join-Path $outputPath 'Probe.cs'),$probeSource,[Text.UTF8Encoding]::new($false))
$engineAssembly=(Resolve-Path -LiteralPath (Join-Path $repoPath '..\erauma-deps\emuera-src\Emuera\artifacts\bin\Emuera\release-naudio\Emuera.dll')).Path
$references=@{Emuera=$engineAssembly;'EraUma.Plugin'=(Join-Path $pluginPath 'EraUma.Plugin.dll');'EraUma.Compatibility'=(Join-Path $pluginPath 'EraUma.Compatibility.dll')}
$items=($references.GetEnumerator()|ForEach-Object {'<Reference Include="'+$_.Key+'"><HintPath>'+[Security.SecurityElement]::Escape($_.Value)+'</HintPath><Private>false</Private></Reference>'}) -join ''
$project='<Project Sdk="Microsoft.NET.Sdk"><PropertyGroup><TargetFramework>net10.0-windows</TargetFramework><UseWindowsForms>true</UseWindowsForms><ImplicitUsings>enable</ImplicitUsings><Nullable>enable</Nullable><AssemblySearchPaths>{HintPathFromItem};{TargetFrameworkDirectory};{RawFileName}</AssemblySearchPaths></PropertyGroup><ItemGroup><Compile Remove="runtime/**/*.cs"/>'+$items+'</ItemGroup></Project>'
[IO.File]::WriteAllText((Join-Path $outputPath 'ContinueInputProbe.csproj'),$project)
$buildOutput=& dotnet build (Join-Path $outputPath 'ContinueInputProbe.csproj') -c Release --nologo -v:q 2>&1
$buildOutput|Set-Content -LiteralPath (Join-Path $outputPath 'build.txt') -Encoding utf8
if($LASTEXITCODE -ne 0){throw "Probe build failed: $outputPath\build.txt"}
Copy-Item -LiteralPath (Join-Path $outputPath 'bin\Release\net10.0-windows\ContinueInputProbe.dll') -Destination $pluginPath
# Only test-method routing and arming callbacks differ from the production loop.
$nl=[Environment]::NewLine
$erb=[IO.File]::ReadAllText((Join-Path $portPath 'bootstrap\Game.ERB'))
$erb=$erb.Replace('EraUmaBridge','ContinueInputProbe').Replace('("game",','("prepare",')
$erb=$erb.Substring(0,$erb.IndexOf('PRINTFORML %MESSAGE%'))+'CALLSHARP ContinueInputProbe("finish","",STATE,MESSAGE)'+$nl+'QUIT'+$nl
$erb=[regex]::Replace($erb,'(?m)^(\s*)(TWAIT |TINPUTS |WAIT\r?$|INPUTS\r?$)','$1CALLSHARP ContinueInputProbe("arm","",STATE,MESSAGE)'+$nl+'$1$2')
$control='CALLSHARP ContinueInputProbe("negative","",STATE,MESSAGE)'+$nl+'INPUTS'+$nl+'CALLSHARP ContinueInputProbe("negative-finish","",STATE,MESSAGE)'+$nl
$erb=$erb.Replace('CALLSHARP ContinueInputProbe("prepare"',$control+'CALLSHARP ContinueInputProbe("prepare"')
[IO.File]::WriteAllText((Join-Path $runtimePath 'ERB\Probe.ERB'),$erb,[Text.UTF8Encoding]::new($true))
$owned=Start-Process -FilePath (Join-Path $runtimePath 'Emuera.exe') -WorkingDirectory $runtimePath -WindowStyle Hidden -PassThru
$reportPath=Join-Path $runtimePath 'continue-input.json'
$errorPath=Join-Path $runtimePath 'error.txt'
try{
 $deadline=[DateTime]::UtcNow.AddSeconds($TimeoutSeconds)
 while(!(Test-Path -LiteralPath $reportPath)-and !(Test-Path -LiteralPath $errorPath)){
  if($owned.HasExited){throw "Owned input process exited before report: $outputPath"}
  if([DateTime]::UtcNow -gt $deadline){throw "Continue input probe timed out: $outputPath"}
  Start-Sleep -Milliseconds 150
 }
 if(Test-Path -LiteralPath $errorPath){throw [IO.File]::ReadAllText($errorPath)}
 $report=Get-Content -LiteralPath $reportPath -Raw|ConvertFrom-Json
 $report|ConvertTo-Json -Depth 10
 if(!$report.pass){throw "Continue input probe failed: $outputPath"}
}finally{if(!$owned.HasExited){Stop-Process -Id $owned.Id;$owned.WaitForExit()}}
