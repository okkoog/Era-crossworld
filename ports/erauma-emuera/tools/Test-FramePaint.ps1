param(
    [string]$PluginDirectory,
    [string]$RuntimePath,
    [string]$OutputRoot,
    [int]$TimeoutSeconds=120,
    [switch]$ExpectFailure,
    [switch]$OriginalRace
)
$ErrorActionPreference='Stop'
$portPath=Split-Path $PSScriptRoot
$repoPath=(Resolve-Path -LiteralPath (Join-Path $portPath '..\..')).Path
if(!$RuntimePath){$RuntimePath=Join-Path $portPath 'artifacts\runtime-Game'}
else{$RuntimePath=(Resolve-Path -LiteralPath $RuntimePath).Path}
if(!$PluginDirectory){
 if($PSBoundParameters.ContainsKey('RuntimePath')){$PluginDirectory=Join-Path $RuntimePath 'Plugins'}
 else{$PluginDirectory=Join-Path $portPath 'plugin\bin\Release\net10.0-windows'}
}
if(!$OutputRoot){$OutputRoot=Join-Path $repoPath '..\..\outputs'}
$outputPath=[IO.Path]::GetFullPath((Join-Path $OutputRoot ('frame-paint-'+[Guid]::NewGuid().ToString('N').Substring(0,8))))
$probeRuntimePath=Join-Path $outputPath 'runtime'
$pluginPath=Join-Path $probeRuntimePath 'Plugins'
$engineAssembly=(Resolve-Path -LiteralPath (Join-Path $repoPath '..\erauma-deps\emuera-src\Emuera\artifacts\bin\Emuera\release-naudio\Emuera.dll')).Path
$runtimeSource=$RuntimePath
[IO.Directory]::CreateDirectory($pluginPath)|Out-Null
[IO.Directory]::CreateDirectory((Join-Path $probeRuntimePath 'ERB'))|Out-Null
Copy-Item -LiteralPath (Join-Path $runtimeSource 'Emuera.exe') -Destination $probeRuntimePath
Copy-Item -LiteralPath (Join-Path $runtimeSource 'CSV') -Destination $probeRuntimePath -Recurse
Get-ChildItem -LiteralPath $PluginDirectory -Filter '*.dll'|Copy-Item -Destination $pluginPath
[IO.File]::WriteAllText((Join-Path $probeRuntimePath 'pluginsAware.txt'),'Owned native paint-event regression test; no desktop capture or OS input.')
$paths=Get-Content -LiteralPath (Join-Path $runtimeSource 'game-paths.json') -Raw|ConvertFrom-Json -AsHashtable
foreach($key in @($paths.Keys)){$paths[$key]=[IO.Path]::GetFullPath($paths[$key],$runtimeSource)}
$paths.fixtures=Join-Path $portPath 'tests\fixtures'
$paths|ConvertTo-Json|Set-Content -LiteralPath (Join-Path $probeRuntimePath 'game-paths.json') -Encoding utf8
$probeSource=@'
using System.Drawing;
using System.Drawing.Imaging;
using System.ComponentModel;
using System.Reflection;
using System.Security.Cryptography;
using System.Text.Json;
using System.Windows.Forms;
using MinorShift.Emuera.Runtime.Utils.PluginSystem;
using EraUma.Plugin;
using EraUma.Compatibility;

public sealed class PluginManifest:PluginManifestAbstract {
 public PluginManifest(){methods.Add(new FramePaintProbe());}
 public override string PluginName=>"Native frame paint regression";
 public override string PluginDescription=>"Paint-event observations on an owned invisible test form";
 public override string PluginVersion=>"1";
 public override string PluginAuthor=>"local";
}
public sealed class FramePaintProbe:IPluginMethod {
 const bool OriginalRace=__ORIGINAL_RACE__;
 static readonly BindingFlags Flags=BindingFlags.Instance|BindingFlags.Public|BindingFlags.NonPublic;
 static object? Get(object o,string n)=>o.GetType().GetProperty(n,Flags)?.GetValue(o)??o.GetType().GetField(n,Flags)?.GetValue(o);
 static void Set(object o,string n,object value){
  var f=o.GetType().GetField(n,Flags);
  if(f is not null){f.SetValue(o,value);return;}
  var p=o.GetType().GetProperty(n,Flags);
  if(p?.SetMethod is not null){p.SetValue(o,value);return;}
  throw new Exception("No writable field/property "+n+" on "+o.GetType()+"; fields: "+string.Join(',',o.GetType().GetFields(Flags).Select(f=>f.Name)));
 }
 static object? Call(object o,string n,params object[] values)=>o.GetType().GetMethod(n,Flags)?.Invoke(o,values);
 readonly Bridge bridge=new();
 readonly List<object> cases=[];
 readonly List<PaintSample> paints=[];
 System.Windows.Forms.Timer? timer;
 Session game=null!;
 object console=null!;
 PictureBox picture=null!;
 string? measuring;
 bool capturing;
 int images;
 readonly string root=Path.GetFullPath(Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location)!,".."));
 public string Name=>"FramePaintProbe";
 public string Description=>"Atomic paint transactions on exact distributed engine";
 sealed record PaintSample(int Number,long LogicalLines,int ScrollValue,int ScrollMaximum,string PixelSha256,string? Image);
 long Lines=>Convert.ToInt64(Get(console,"LineCount"));
 void Action(string action,string input=""){
  PluginMethodParameter[] a=[new(action),new(input),new(0L),new("")];bridge.Execute(a);
  if(a[2].intValue<0)throw new Exception(a[3].strValue);
 }
 string Canvas(string? name=null){
  File.AppendAllText(Path.Combine(root,"progress.txt"),"\nCanvas begin "+name);
  capturing=true;
  try{
   using var bitmap=new Bitmap(picture.ClientSize.Width,picture.ClientSize.Height);
   using(var graphics=Graphics.FromImage(bitmap)){
    var clip=new Rectangle(Point.Empty,picture.ClientSize);graphics.SetClip(clip);
    picture.GetType().GetMethod("OnPaint",Flags)!.Invoke(picture,[new PaintEventArgs(graphics,clip)]);
   }
   File.AppendAllText(Path.Combine(root,"progress.txt"),"\nCanvas drawn "+name);
   using var data=new MemoryStream();bitmap.Save(data,ImageFormat.Png);
   if(name is not null)File.WriteAllBytes(Path.Combine(root,"results",name),data.ToArray());
   return Convert.ToHexString(SHA256.HashData(data.ToArray()));
  }finally{capturing=false;}
 }
 void Observe(object? sender,PaintEventArgs e){
  if(capturing||measuring is null)return;
  var scroll=(ScrollBar)Get(Get(console,"Window")!,"ScrollBar")!;
  string? image=images++<40?$"paint-{measuring}-{paints.Count:D2}.png":null;
  paints.Add(new(paints.Count,Lines,scroll.Value,scroll.Maximum,Canvas(image),image));
 }
 Delegate[] PaintHandlers(){
  var key=typeof(Control).GetFields(BindingFlags.NonPublic|BindingFlags.Static)
   .Single(f=>f.Name.Contains("paintEvent",StringComparison.OrdinalIgnoreCase)).GetValue(null)!;
  var list=(EventHandlerList)typeof(Control).GetProperty("Events",Flags)!.GetValue(picture)!;
  return list[key]?.GetInvocationList()??[];
 }
 void Measure(string label,Action change){
  File.AppendAllText(Path.Combine(root,"progress.txt"),"\nMeasure begin "+label);
  paints.Clear();long before=Lines;string beforeHash=Canvas("before-"+label+".png");
  measuring=label;
  try{change();}finally{measuring=null;}
  File.AppendAllText(Path.Combine(root,"progress.txt"),"\nChange done "+label);
  long after=Lines;string afterHash=Canvas("after-"+label+".png");
  var observed=paints.ToArray();
  int incomplete=observed.Count(p=>p.PixelSha256!=beforeHash&&p.PixelSha256!=afterHash);
  cases.Add(new{label,beforeLines=before,afterLines=after,beforePixelSha256=beforeHash,afterPixelSha256=afterHash,changed=beforeHash!=afterHash,paintCount=observed.Length,intermediatePaints=incomplete,logicalPaintLines=observed.Select(p=>p.LogicalLines).ToArray(),observed});
 }
 void StartScene(){
  game.Quit();game.Start("""
   const head=(title,color)=>era.printMultiColumns([{type:'text',content:title,config:{color,width:12}},{type:'progress',percentage:75,inContent:'status',config:{width:12}}]);
   const body=phase=>{for(let n=0;n<6;n++)era.printMultiColumns([{type:'text',content:phase+' paragraph '+n,config:{width:20,offset:2}}]);};
   await era.clear();head('Previous complete frame','#FACC15');body('old');await era.input({any:true});
   await era.clear();head('Stable complete header','#22D3EE');body('new');await era.input({any:true});
   await era.clear();head('Stable complete header','#22D3EE');body('changed');await era.input({any:true});
   era.print('Appended complete text');await era.input({any:true});
   era.print('Timer starts');await era.delay(1000);era.print('Timer completed');await era.input({any:true});era.quit();
   """);Action("tick");picture.Refresh();
  if(game.State!="input")throw new Exception("Initial original-host input not reached: "+game.Error);
 }
 void StartOriginalRace(){
  Action("ui-game");game=(Session)Get(bridge,"session")!;
  Action("resume","1");Action("skip-text");Action("resume","2");Action("skip-text");Action("resume","1");Action("ui-return-main");
  Action("resume","406");Action("skip-text");Action("resume","3");Action("ui-return-main");
  Action("resume","102");Action("skip-text");Action("resume","100");Action("skip-text");Action("resume","3");Action("skip-text");
  Action("resume","1");
  if(!game.HasTimers||!game.EvaluateJson("__screen.map(g=>g.layout||null)").Contains("progress"))
   throw new Exception("Original race did not enter playback: "+game.State+" timers="+game.HasTimers+" "+game.Error);
 }
 void Run(){
  File.WriteAllText(Path.Combine(root,"progress.txt"),"Run entered");
  console=Get(Get(PluginManager.GetInstance(),"expressionMediator")!,"Console")!;
  var window=(Form)Get(console,"Window")!;
  picture=(PictureBox)Get(window,"MainPicBox")!;
  // An invisible owned form still exercises normal Refresh/Paint dispatch.
  // The managed OnPaint call above uses this control's current native/gated
  // Paint delegate chain, and never copies desktop pixels or sends messages.
  window.Opacity=0;window.Show();picture.Paint+=Observe;
  File.AppendAllText(Path.Combine(root,"progress.txt"),"\nOwned form shown");
  Directory.CreateDirectory(Path.Combine(root,"results"));
  var handlersBefore=PaintHandlers();
  var paths=JsonSerializer.Deserialize<Dictionary<string,string>>(File.ReadAllText(Path.Combine(root,"game-paths.json")))!;
  if(!OriginalRace){
   game=new Session(Path.Combine(root,"sav-probe"),()=>0,_=>{},true);
   game.LoadGame(paths["source"],paths["engine"],paths["kojo"],start:false,resourceRoot:paths["resources"],presentationDelays:true);
   File.AppendAllText(Path.Combine(root,"progress.txt"),"\nOriginal host loaded");
   typeof(Bridge).GetField("session",Flags)!.SetValue(bridge,game);
  }
  var previousState=Get(console,"state")!;
  var previousMs=Get(console,"msPerFrame")!;
  Set(console,"state",Enum.Parse(previousState.GetType(),"Running"));
  File.AppendAllText(Path.Combine(root,"progress.txt"),"\nEngine test state running");
  try{
   if(OriginalRace){
    StartOriginalRace();
    for(int n=0;n<20;n++)Measure("original-race-"+n,()=>Action("ui-advance"));
   }else{
    StartScene();File.AppendAllText(Path.Combine(root,"progress.txt"),"\nInitial frame rendered");Measure("normal-full",()=>Action("resume"));
    Measure("normal-partial",()=>Action("resume"));
    Set(console,"msPerFrame",0u);
    StartScene();Measure("stress-full",()=>Action("resume"));
    Measure("stress-partial",()=>Action("resume"));
    Measure("stress-append",()=>Action("resume"));
    Measure("timer-start",()=>Action("resume"));
    if(game.State!="timer"||!game.HasTimers)throw new Exception("Original presentation delay did not suspend");
    Measure("timer-complete",()=>{game.AdvanceTimers(1100);Action("tick");});
    if(game.State!="input"||!game.EvaluateJson("__screen").Contains("Timer completed"))throw new Exception("Original presentation delay did not complete");
    // Backlog rendering bypasses REDRAW=0 in the pinned engine. Its retained
    // bitmap fallback must still guard both full and partial replacement.
    StartScene();
    var scroll=(ScrollBar)Get(window,"ScrollBar")!;
    scroll.Value=Math.Max(scroll.Minimum,scroll.Maximum-2);
    if(scroll.Value==scroll.Maximum)throw new Exception("Backlog fixture did not scroll");
    Measure("backlog-full",()=>Action("resume"));
    scroll.Value=Math.Max(scroll.Minimum,scroll.Maximum-2);
    Measure("backlog-partial",()=>Action("resume"));
   }
  }finally{Set(console,"msPerFrame",previousMs);Set(console,"state",previousState);}
  var handlersAfter=PaintHandlers();
  bool handlerRestoration=handlersBefore.Length==handlersAfter.Length&&handlersAfter.Count(d=>d.Method.Name=="mainPicBox_Paint")==1;
  paints.Clear();string finalHash=Canvas("final.png");measuring="post-commit-refresh";
  try{for(int n=0;n<3;n++)picture.Refresh();}finally{measuring=null;picture.Paint-=Observe;}
  var laterRefreshes=paints.ToArray();
  bool nativeRefreshRestored=laterRefreshes.Length==3&&laterRefreshes.All(p=>p.PixelSha256==finalHash);
  bool changes=cases.All(c=>(bool)c.GetType().GetProperty("changed")!.GetValue(c)!);
  bool observedAll=cases.All(c=>(int)c.GetType().GetProperty("paintCount")!.GetValue(c)!>0);
  int intermediate=cases.Sum(c=>(int)c.GetType().GetProperty("intermediatePaints")!.GetValue(c)!);
  bool pass=changes&&observedAll&&intermediate==0&&handlerRestoration&&nativeRefreshRestored;
  string scope="Exact distributed Emuera engine Paint callbacks; current registered native/gated PictureBox.OnPaint chain into an owned bitmap, no desktop capture, OS input or window messages. Instrumented callbacks render to PNG and can slow a paint. "+
   (OriginalRace?"Original race uses the original save fixture, registration and playback modules with 20 virtual time advances of 500 ms; this is not real-time human race play.":"Stress cases set only the owned console frame throttle to zero to observe every requested paint. Other cases retain normal timing. The presentation delay is advanced virtually; real native timer input is verified separately.");
  File.WriteAllText(Path.Combine(root,"frame-paint.json"),JsonSerializer.Serialize(new{pass,mode=OriginalRace?"original-race":"frame-transitions",changes,observedAll,intermediatePaints=intermediate,timerAdvanced=true,handlerRestoration,nativeRefreshRestored,handlerCountBefore=handlersBefore.Length,handlerCountAfter=handlersAfter.Length,laterRefreshes,normalMsPerFrame=previousMs,cases,scope},new JsonSerializerOptions{WriteIndented=true}));
 }
 public void Execute(PluginMethodParameter[] a){
  try{
   if(a[0].strValue=="arm"){
    timer=new(){Interval=50};timer.Tick+=(s,e)=>{
     var c=Get(Get(PluginManager.GetInstance(),"expressionMediator")!,"Console")!;
     if(Get(c,"state")?.ToString()!="WaitInput")return;
     timer.Stop();
     try{Run();Call(c,"PressEnterKey",false,"",true);}
     catch(Exception error){File.WriteAllText(Path.Combine(root,"error.txt"),error.ToString());}
    };timer.Start();
   }
   a[2].intValue=1;
  }catch(Exception error){File.WriteAllText(Path.Combine(root,"error.txt"),error.ToString());a[2].intValue=-1;a[3].strValue=error.ToString();}
 }
}
'@
$probeSource=$probeSource.Replace('__ORIGINAL_RACE__',([bool]$OriginalRace).ToString().ToLowerInvariant())
[IO.File]::WriteAllText((Join-Path $outputPath 'Probe.cs'),$probeSource,[Text.UTF8Encoding]::new($false))
$engineReference=[Security.SecurityElement]::Escape($engineAssembly)
$pluginReference=[Security.SecurityElement]::Escape((Join-Path $pluginPath 'EraUma.Plugin.dll'))
$compatibilityReference=[Security.SecurityElement]::Escape((Join-Path $pluginPath 'EraUma.Compatibility.dll'))
$project=@"
<Project Sdk="Microsoft.NET.Sdk"><PropertyGroup><TargetFramework>net10.0-windows</TargetFramework><UseWindowsForms>true</UseWindowsForms><ImplicitUsings>enable</ImplicitUsings><Nullable>enable</Nullable><AssemblySearchPaths>{HintPathFromItem};{TargetFrameworkDirectory};{RawFileName}</AssemblySearchPaths></PropertyGroup><ItemGroup><Compile Remove="runtime/**/*.cs"/><Reference Include="Emuera"><HintPath>$engineReference</HintPath><Private>false</Private></Reference><Reference Include="EraUma.Plugin"><HintPath>$pluginReference</HintPath><Private>false</Private></Reference><Reference Include="EraUma.Compatibility"><HintPath>$compatibilityReference</HintPath><Private>false</Private></Reference></ItemGroup></Project>
"@
[IO.File]::WriteAllText((Join-Path $outputPath 'FramePaintProbe.csproj'),$project)
$buildOutput=& dotnet build (Join-Path $outputPath 'FramePaintProbe.csproj') -c Release --nologo -v:q 2>&1
$buildOutput|Set-Content -LiteralPath (Join-Path $outputPath 'build.txt') -Encoding utf8
if($LASTEXITCODE -ne 0){throw "Frame paint probe build failed: $outputPath\build.txt"}
Copy-Item -LiteralPath (Join-Path $outputPath 'bin\Release\net10.0-windows\FramePaintProbe.dll') -Destination $pluginPath
$erb=@'
@SYSTEM_TITLE
#DIM STATE
#DIMS MESSAGE
CALLSHARP FramePaintProbe("arm","",STATE,MESSAGE)
WAIT
QUIT
'@
[IO.File]::WriteAllText((Join-Path $probeRuntimePath 'ERB\Probe.ERB'),$erb,[Text.UTF8Encoding]::new($true))
$testProcess=Start-Process -FilePath (Join-Path $probeRuntimePath 'Emuera.exe') -WorkingDirectory $probeRuntimePath -WindowStyle Hidden -PassThru
$reportPath=Join-Path $probeRuntimePath 'frame-paint.json'
$errorPath=Join-Path $probeRuntimePath 'error.txt'
try{
 $deadline=[DateTime]::UtcNow.AddSeconds($TimeoutSeconds)
 while(!(Test-Path -LiteralPath $reportPath) -and !(Test-Path -LiteralPath $errorPath)){
  if($testProcess.HasExited){throw "Owned Emuera process exited before reporting: $($testProcess.ExitCode); evidence: $outputPath"}
  if([DateTime]::UtcNow -gt $deadline){throw "Native paint probe timed out; evidence: $outputPath"}
  Start-Sleep -Milliseconds 150
 }
 if(Test-Path -LiteralPath $errorPath){throw [IO.File]::ReadAllText($errorPath)}
 $report=Get-Content -LiteralPath $reportPath -Raw|ConvertFrom-Json
 $summary=[ordered]@{pass=$report.pass;mode=$report.mode;scope=$report.scope;changes=$report.changes;observedAll=$report.observedAll;intermediatePaints=$report.intermediatePaints;timerAdvanced=$report.timerAdvanced;handlerRestoration=$report.handlerRestoration;nativeRefreshRestored=$report.nativeRefreshRestored;handlerCountBefore=$report.handlerCountBefore;handlerCountAfter=$report.handlerCountAfter;cases=@($report.cases|Select-Object label,paintCount,intermediatePaints,logicalPaintLines);pluginDllSha256=(Get-FileHash -LiteralPath (Join-Path $pluginPath 'EraUma.Plugin.dll') -Algorithm SHA256).Hash;evidenceDirectory=$outputPath}
 $summary|ConvertTo-Json -Depth 8|Set-Content -LiteralPath (Join-Path $outputPath 'summary.json') -Encoding utf8
 $summary|ConvertTo-Json -Depth 8
 if([bool]$report.pass -eq [bool]$ExpectFailure){throw "Unexpected native frame paint verdict; evidence: $outputPath"}
}finally{
 if(!$testProcess.HasExited){Stop-Process -Id $testProcess.Id;$testProcess.WaitForExit()}
}
