param(
    [string]$PluginDirectory,
    [string]$OutputRoot,
    [int]$TimeoutSeconds=120,
    [switch]$ExpectFailure
)
$ErrorActionPreference='Stop'
$portPath=Split-Path $PSScriptRoot
$repoPath=(Resolve-Path -LiteralPath (Join-Path $portPath '..\..')).Path
if(!$PluginDirectory){$PluginDirectory=Join-Path $portPath 'plugin\bin\Release\net10.0-windows'}
if(!$OutputRoot){$OutputRoot=Join-Path $repoPath '..\..\outputs'}
$outputPath=[IO.Path]::GetFullPath((Join-Path $OutputRoot ('input-echo-'+[Guid]::NewGuid().ToString('N').Substring(0,8))))
$runtimePath=Join-Path $outputPath 'runtime'
$pluginPath=Join-Path $runtimePath 'Plugins'
$engineAssembly=(Resolve-Path -LiteralPath (Join-Path $repoPath '..\erauma-deps\emuera-src\Emuera\artifacts\bin\Emuera\release-naudio\Emuera.dll')).Path
$runtimeSource=Join-Path $portPath 'artifacts\runtime-Game'
[IO.Directory]::CreateDirectory($pluginPath) | Out-Null
[IO.Directory]::CreateDirectory((Join-Path $runtimePath 'ERB')) | Out-Null
Copy-Item -LiteralPath (Join-Path $runtimeSource 'Emuera.exe') -Destination $runtimePath
Copy-Item -LiteralPath (Join-Path $runtimeSource 'CSV') -Destination $runtimePath -Recurse
Get-ChildItem -LiteralPath $PluginDirectory -Filter '*.dll' | Copy-Item -Destination $pluginPath
[IO.File]::WriteAllText((Join-Path $runtimePath 'pluginsAware.txt'),'Original game INPUTS echo regression probe knowingly packaged for this test.')
$paths=Get-Content -LiteralPath (Join-Path $runtimeSource 'game-paths.json') -Raw | ConvertFrom-Json -AsHashtable
foreach($key in @($paths.Keys)){$paths[$key]=[IO.Path]::GetFullPath($paths[$key],$runtimeSource)}
$paths.fixtures=Join-Path $portPath 'tests\fixtures'
$paths | ConvertTo-Json | Set-Content -LiteralPath (Join-Path $runtimePath 'game-paths.json') -Encoding utf8
$probeSource=@'
using System.Collections;
using System.Data;
using System.Reflection;
using System.Text.Json;
using System.Windows.Forms;
using MinorShift.Emuera.Runtime.Utils.PluginSystem;
using EraUma.Plugin;
using EraUma.Compatibility;

public sealed class PluginManifest:PluginManifestAbstract
{
 public PluginManifest(){methods.Add(new InputEchoProbe());}
 public override string PluginName=>"Original game INPUTS regression";
 public override string PluginDescription=>"Managed engine input path and multi-frame native canvas";
 public override string PluginVersion=>"1";
 public override string PluginAuthor=>"local";
}
public sealed class InputEchoProbe:IPluginMethod
{
 readonly Bridge bridge=new();
 readonly List<object> frames=[];
 readonly List<long> echoLineDeltas=[];
 System.Windows.Forms.Timer? timer;
 int frame;
 string root=Path.GetFullPath(Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location)!,".."));
 public string Name=>"InputEchoProbe";
 public string Description=>"Original game with real ERB INPUTS waits";
 static object? Get(object o,string n)=>o.GetType().GetProperty(n,BindingFlags.Public|BindingFlags.NonPublic|BindingFlags.Instance)?.GetValue(o)??o.GetType().GetField(n,BindingFlags.Public|BindingFlags.NonPublic|BindingFlags.Instance)?.GetValue(o);
 object Console(){var mediator=typeof(PluginManager).GetField("expressionMediator",BindingFlags.Instance|BindingFlags.NonPublic)!.GetValue(PluginManager.GetInstance())!;return Get(mediator,"Console")!;}
 Session Game=>(Session)Get(bridge,"session")!;
 long Count=>Convert.ToInt64(Get(Console(),"LineCount"));
 void Action(string action,string value=""){
  PluginMethodParameter[] a=[new(action),new(value),new(0L),new("")];bridge.Execute(a);
  if(a[2].intValue<0)throw new Exception(a[3].strValue);
 }
 void Capture(){
  string name="recruit-"+frame++;Action("capture",name);
  var rows=((IEnumerable)Get(bridge,"nativeRows")!).Cast<object>().ToArray();
  int owned=rows.Sum(r=>Convert.ToInt32(Get(r,"Lines")))+Convert.ToInt32(Get(bridge,"tailPadding"));
  var type=typeof(PluginManager).Assembly.GetType("MinorShift.Emuera.Runtime.Utils.EvilMask.ConsoleEscapedParts",true)!;
  var dt=(DataTable)type.GetField("dt",BindingFlags.Static|BindingFlags.NonPublic)!.GetValue(null)!;
  var lineOwners=dt.Rows.Cast<DataRow>().GroupBy(r=>Convert.ToInt32(r["line"])).ToDictionary(g=>g.Key.ToString(),g=>g.Count());
  frames.Add(new{name,actualLines=Count,ownedLines=owned,untrackedLines=Count-owned,escapedParts=dt.Rows.Count,escapedLineOwners=lineOwners,screen=JsonDocument.Parse(Game.EvaluateJson("__screen.map(g=>g.layout||null)")).RootElement.Clone(),redraw=new{full=Get(bridge,"fullFrames"),partial=Get(bridge,"partialFrames"),preserved=Get(bridge,"preservedLines")}});
 }
 public void Execute(PluginMethodParameter[] args){
  try{
   switch(args[0].strValue){
    case "prepare":
     Action("ui-game");Action("resume","1");Action("skip-text");Action("resume","2");Action("skip-text");Action("resume","1");Action("ui-return-main");
     // Load the original recruitment function with the fixture's game state.
     // 301 is the trainer office; 999 alone also exists in the main menu.
     Game.Quit();
     Game.Start("era.set('flag:当前互动角色',0);await __require('page/page-recruit-rand.js')();");
     Action("tick");Action("skip-text");
     var choices=(long[])Get(bridge,"lastButtons")!;
     if(!choices.Contains(999)||!choices.Any(n=>n>=2000&&n<2200))throw new Exception("Original recruitment menu was not reached: "+Game.EvaluateJson("__currentButtons()"));
     Capture();break;
    case "arm":
     timer?.Dispose();timer=new(){Interval=120};string input=args[1].strValue;long before=Count;
     timer.Tick+=(s,e)=>{
      var c=Console();
      if(Get(c,"NowInputType")?.ToString()!="StrValue")return;
      timer.Stop();
      try{c.GetType().GetMethod("PressEnterKey")!.Invoke(c,[false,input,true]);}
      catch(Exception error){File.WriteAllText(Path.Combine(root,"error.txt"),error.ToString());}
     };timer.Start();break;
    case "resume":
     var previous=frames[^1];long previousCount=(long)previous.GetType().GetProperty("actualLines")!.GetValue(previous)!;
     echoLineDeltas.Add(Count-previousCount);Action("resume",args[1].strValue);Capture();break;
    case "finish":
     var untracked=frames.Select(f=>(long)f.GetType().GetProperty("untrackedLines")!.GetValue(f)!).ToArray();
     bool pass=untracked.All(n=>n==0)&&echoLineDeltas.All(n=>n==1)&&frames.Count==4;
     File.WriteAllText(Path.Combine(root,"input-echo.json"),JsonSerializer.Serialize(new{pass,scope="Original recruitment UI with real ERB INPUTS waits, managed engine PressEnterKey and native OnPaint captures; no OS input or desktop capture",echoLineDeltas,untracked,frames},new JsonSerializerOptions{WriteIndented=true}));break;
   }
   args[2].intValue=1;
  }catch(Exception error){File.WriteAllText(Path.Combine(root,"error.txt"),error.ToString());args[2].intValue=-1;args[3].strValue=error.ToString();}
 }
}
'@
[IO.File]::WriteAllText((Join-Path $outputPath 'Probe.cs'),$probeSource,[Text.UTF8Encoding]::new($false))
$engineReference=[Security.SecurityElement]::Escape($engineAssembly)
$pluginReference=[Security.SecurityElement]::Escape((Join-Path $pluginPath 'EraUma.Plugin.dll'))
$compatibilityReference=[Security.SecurityElement]::Escape((Join-Path $pluginPath 'EraUma.Compatibility.dll'))
$project=@"
<Project Sdk="Microsoft.NET.Sdk"><PropertyGroup><TargetFramework>net10.0-windows</TargetFramework><UseWindowsForms>true</UseWindowsForms><ImplicitUsings>enable</ImplicitUsings><Nullable>enable</Nullable><AssemblySearchPaths>{HintPathFromItem};{TargetFrameworkDirectory};{RawFileName}</AssemblySearchPaths></PropertyGroup><ItemGroup><Compile Remove="runtime/**/*.cs"/><Reference Include="Emuera"><HintPath>$engineReference</HintPath><Private>false</Private></Reference><Reference Include="EraUma.Plugin"><HintPath>$pluginReference</HintPath><Private>false</Private></Reference><Reference Include="EraUma.Compatibility"><HintPath>$compatibilityReference</HintPath><Private>false</Private></Reference></ItemGroup></Project>
"@
[IO.File]::WriteAllText((Join-Path $outputPath 'InputEchoProbe.csproj'),$project)
$buildOutput=& dotnet build (Join-Path $outputPath 'InputEchoProbe.csproj') -c Release --nologo -v:q 2>&1
$buildOutput | Set-Content -LiteralPath (Join-Path $outputPath 'build.txt') -Encoding utf8
if($LASTEXITCODE -ne 0){throw "Input echo probe build failed: $outputPath\build.txt"}
Copy-Item -LiteralPath (Join-Path $outputPath 'bin\Release\net10.0-windows\InputEchoProbe.dll') -Destination $pluginPath
$erb=@'
@SYSTEM_TITLE
#DIM STATE
#DIMS MESSAGE
CALLSHARP InputEchoProbe("prepare","",STATE,MESSAGE)
CALLSHARP InputEchoProbe("arm","invalid",STATE,MESSAGE)
INPUTS
CALLSHARP InputEchoProbe("resume",RESULTS,STATE,MESSAGE)
CALLSHARP InputEchoProbe("arm","invalid",STATE,MESSAGE)
INPUTS
CALLSHARP InputEchoProbe("resume",RESULTS,STATE,MESSAGE)
CALLSHARP InputEchoProbe("arm","invalid",STATE,MESSAGE)
INPUTS
CALLSHARP InputEchoProbe("resume",RESULTS,STATE,MESSAGE)
CALLSHARP InputEchoProbe("finish","",STATE,MESSAGE)
QUIT
'@
[IO.File]::WriteAllText((Join-Path $runtimePath 'ERB\Probe.ERB'),$erb,[Text.UTF8Encoding]::new($true))
$testProcess=Start-Process -FilePath (Join-Path $runtimePath 'Emuera.exe') -WorkingDirectory $runtimePath -WindowStyle Hidden -PassThru
$reportPath=Join-Path $runtimePath 'input-echo.json'
$errorPath=Join-Path $runtimePath 'error.txt'
try {
 $deadline=[DateTime]::UtcNow.AddSeconds($TimeoutSeconds)
 while(!(Test-Path -LiteralPath $reportPath) -and !(Test-Path -LiteralPath $errorPath)){
  if($testProcess.HasExited){throw "Owned Emuera process exited before reporting: $($testProcess.ExitCode); evidence: $outputPath"}
  if([DateTime]::UtcNow -gt $deadline){throw "INPUTS probe timed out; evidence: $outputPath"}
  Start-Sleep -Milliseconds 150
 }
 if(Test-Path -LiteralPath $errorPath){throw [IO.File]::ReadAllText($errorPath)}
 $report=Get-Content -LiteralPath $reportPath -Raw | ConvertFrom-Json
 $summary=[ordered]@{pass=$report.pass;scope=$report.scope;echoLineDeltas=$report.echoLineDeltas;untracked=$report.untracked;pluginDllSha256=(Get-FileHash -LiteralPath (Join-Path $pluginPath 'EraUma.Plugin.dll') -Algorithm SHA256).Hash;evidenceDirectory=$outputPath}
 $summary | ConvertTo-Json -Depth 8 | Set-Content -LiteralPath (Join-Path $outputPath 'summary.json') -Encoding utf8
 $summary | ConvertTo-Json -Depth 8
 if([bool]$report.pass -eq [bool]$ExpectFailure){throw "Unexpected INPUTS regression verdict; evidence: $outputPath"}
} finally {
 if(!$testProcess.HasExited){Stop-Process -Id $testProcess.Id; $testProcess.WaitForExit()}
}
