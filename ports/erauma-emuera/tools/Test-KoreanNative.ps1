param(
    [Parameter(Mandatory=$true)][string]$RuntimePath,
    [string]$OutputRoot,
    [int]$TimeoutSeconds=120
)
$ErrorActionPreference='Stop'
Set-StrictMode -Version Latest
$portPath=Split-Path $PSScriptRoot
$repoPath=(Resolve-Path -LiteralPath (Join-Path $portPath '..\..')).Path
$runtimeSource=(Resolve-Path -LiteralPath $RuntimePath).Path
if(!$OutputRoot){$OutputRoot=Join-Path $repoPath '..\..\outputs'}
$outputPath=[IO.Path]::GetFullPath((Join-Path $OutputRoot ('korean-native-'+[Guid]::NewGuid().ToString('N').Substring(0,8))))
$probeRuntimePath=Join-Path $outputPath 'runtime'
$pluginPath=Join-Path $probeRuntimePath 'Plugins'
$engineAssembly=(Resolve-Path -LiteralPath (Join-Path $repoPath '..\erauma-deps\emuera-src\Emuera\artifacts\bin\Emuera\release-naudio\Emuera.dll')).Path
$referenceExe=Join-Path $repoPath 'test\ERA_CrossWorld_Runtime_Test_0.4.3\Emuera.NET 1824+v24+EMv18+EEv56.exe'
$referenceHash=(Get-FileHash -LiteralPath $referenceExe -Algorithm SHA256).Hash
$runtimeHash=(Get-FileHash -LiteralPath (Join-Path $runtimeSource 'Emuera.exe') -Algorithm SHA256).Hash
if($runtimeHash -ne $referenceHash){throw 'Korean probe requires the exact distributed Emuera executable.'}
[IO.Directory]::CreateDirectory($pluginPath)|Out-Null
[IO.Directory]::CreateDirectory((Join-Path $probeRuntimePath 'ERB'))|Out-Null
Copy-Item -LiteralPath (Join-Path $runtimeSource 'Emuera.exe') -Destination $probeRuntimePath
Copy-Item -LiteralPath (Join-Path $runtimeSource 'CSV') -Destination $probeRuntimePath -Recurse
$dllNames=@('EraUma.Plugin.dll','EraUma.Compatibility.dll','Jint.dll','Acornima.dll')
$dllHashes=[ordered]@{}
foreach($name in $dllNames){
    $sourceDll=Join-Path $runtimeSource ('Plugins\'+$name)
    Copy-Item -LiteralPath $sourceDll -Destination $pluginPath
    $dllHashes[$name]=(Get-FileHash -LiteralPath $sourceDll -Algorithm SHA256).Hash
    if((Get-FileHash -LiteralPath (Join-Path $pluginPath $name) -Algorithm SHA256).Hash -ne $dllHashes[$name]){throw "Probe DLL copy differs: $name"}
}
$paths=Get-Content -LiteralPath (Join-Path $runtimeSource 'game-paths.json') -Raw|ConvertFrom-Json -AsHashtable
foreach($key in @($paths.Keys)){$paths[$key]=[IO.Path]::GetFullPath($paths[$key],$runtimeSource)}
if(!$paths.ContainsKey('languages') -or !(Test-Path -LiteralPath (Join-Path $paths.languages 'ko-KR\entry.js'))){throw 'Package Korean language entry is missing.'}
$paths|ConvertTo-Json|Set-Content -LiteralPath (Join-Path $probeRuntimePath 'game-paths.json') -Encoding utf8
[IO.File]::WriteAllText((Join-Path $probeRuntimePath 'pluginsAware.txt'),'Owned Korean package validation; production binaries unchanged, isolated saves, no desktop capture or OS input.')
$probeSource=@'
using System.Collections;
using System.Drawing;
using System.Drawing.Imaging;
using System.Reflection;
using System.Security.Cryptography;
using System.Text.Json;
using System.Windows.Forms;
using MinorShift.Emuera.Runtime.Utils.PluginSystem;
using EraUma.Plugin;
using EraUma.Compatibility;

public sealed class PluginManifest:PluginManifestAbstract {
 public PluginManifest(){methods.Add(new KoreanNativeProbe());}
 public override string PluginName=>"Korean portable package validation";
 public override string PluginDescription=>"Actual production Bridge menu, Korean locale persistence and native canvas";
 public override string PluginVersion=>"1";
 public override string PluginAuthor=>"local";
}
public sealed class KoreanNativeProbe:IPluginMethod {
 static readonly BindingFlags Flags=BindingFlags.Instance|BindingFlags.Public|BindingFlags.NonPublic;
 static object? Get(object o,string n)=>o.GetType().GetProperty(n,Flags)?.GetValue(o)??o.GetType().GetField(n,Flags)?.GetValue(o);
 static void Set(object o,string n,object value){
  var f=o.GetType().GetField(n,Flags);if(f is not null){f.SetValue(o,value);return;}
  var p=o.GetType().GetProperty(n,Flags);if(p?.SetMethod is not null){p.SetValue(o,value);return;}
  throw new Exception("No writable field/property "+n);
 }
 static object? Call(object o,string n,params object[] values)=>o.GetType().GetMethod(n,Flags)?.Invoke(o,values);
 Bridge bridge=new();
 System.Windows.Forms.Timer? timer;
 readonly List<string> checks=[];
 readonly List<object> screens=[];
 object console=null!;
 PictureBox picture=null!;
 readonly string root=Path.GetFullPath(Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location)!,".."));
 Session Game=>(Session)Get(bridge,"session")!;
 public string Name=>"KoreanNativeProbe";
 public string Description=>"Production Korean menus without desktop input";
 void Check(bool value,string name){if(!value)throw new Exception(name);checks.Add(name);}
 void Action(string action,string input=""){
  PluginMethodParameter[] a=[new(action),new(input),new(0L),new("")];bridge.Execute(a);
  if(a[2].intValue<0)throw new Exception("Bridge "+action+": "+a[3].strValue);
  if(a[3].strValue!="")throw new Exception("Bridge returned error: "+a[3].strValue);
 }
 string StringValue(string expression)=>JsonSerializer.Deserialize<string>(Game.EvaluateJson(expression))!;
 long[] CurrentChoices()=>JsonSerializer.Deserialize<long[]>(Game.EvaluateJson("__screen.flat().filter(e=>e[0]==='button'&&e[3]===__buttonEpoch).map(e=>e[2])"))!;
 void SettleNarrative(string stage){
  for(int step=0;step<300;step++){
   if(Game.State=="input"&&!Game.WaitingForContinue){Check(Game.Error=="",stage+": original narrative settles without errors");return;}
   if(Game.State=="timer")Action("ui-advance");
   else if(Game.State=="input"&&Game.WaitingForContinue)Action("resume","");
   else throw new Exception(stage+": unexpected production session state "+Game.State+" "+Game.Error);
  }
  throw new Exception(stage+": original narrative exceeds 300 bounded advances");
 }
 sealed record NativeButton(long Id,string Text,long Generation,int Width);
 NativeButton[] NativeButtons(){
  var found=new List<NativeButton>();
  void Walk(object line){
   foreach(var button in (IEnumerable)Get(line,"Buttons")!){
    var parts=((IEnumerable)Get(button,"StrArray")!).Cast<object>().ToArray();
    if((bool)Get(button,"IsButton")!)found.Add(new(Convert.ToInt64(Get(button,"Input")),string.Concat(parts.Select(p=>Get(p,"Text") as string)),Convert.ToInt64(Get(button,"Generation")),Convert.ToInt32(Get(button,"Width"))));
    foreach(var part in parts)if(Get(part,"Children") is IEnumerable children)foreach(var child in children)Walk(child);
   }
  }
  foreach(var line in (IEnumerable)Get(console,"displayLineList")!)Walk(line);
  return found.ToArray();
 }
 string NativeText(){
  var text=new System.Text.StringBuilder();
  void Walk(object line){foreach(var button in (IEnumerable)Get(line,"Buttons")!)foreach(var part in (IEnumerable)Get(button,"StrArray")!){text.Append(Get(part,"Text") as string);if(Get(part,"Children") is IEnumerable children)foreach(var child in children)Walk(child);}text.AppendLine();}
  foreach(var line in (IEnumerable)Get(console,"displayLineList")!)Walk(line);
  return text.ToString();
 }
 void Capture(string name){
  picture.Refresh();
  using var bitmap=new Bitmap(picture.ClientSize.Width,picture.ClientSize.Height);
  using(var graphics=Graphics.FromImage(bitmap)){
   var clip=new Rectangle(Point.Empty,picture.ClientSize);graphics.SetClip(clip);
   picture.GetType().GetMethod("OnPaint",Flags)!.Invoke(picture,[new PaintEventArgs(graphics,clip)]);
  }
  var path=Path.Combine(root,"results",name+".png");bitmap.Save(path,ImageFormat.Png);
  int visiblePixels=0;var background=Color.FromArgb(18,24,33).ToArgb();
  for(int y=0;y<bitmap.Height;y+=2)for(int x=0;x<bitmap.Width;x+=2)if(bitmap.GetPixel(x,y).ToArgb()!=background)visiblePixels++;
  Check(visiblePixels>500,"Native canvas has rendered content: "+name);
  File.WriteAllText(Path.Combine(root,"results",name+"-text.txt"),NativeText());
  File.WriteAllText(Path.Combine(root,"results",name+"-layout.json"),Game.EvaluateJson("__screen.map(g=>g.layout||null)"));
  screens.Add(new{name,path,width=bitmap.Width,height=bitmap.Height,visiblePixels,sha256=Convert.ToHexString(SHA256.HashData(File.ReadAllBytes(path))),buttons=NativeButtons()});
 }
 void CheckKoreanTitle(){
  Check(Game.State=="input"&&Game.Error=="","Original title menu is waiting normally");
  Check(StringValue("__require('i18n/selector').lan()") == "ko-KR","Selected runtime locale is Korean");
  var expectedNew=StringValue("__require('i18n/selector').i18n().tt_new_game");
  var expectedLoad=StringValue("__require('i18n/selector').i18n().tt_load_game");
  Check(expectedNew.Any(c=>c>='가'&&c<='힣')&&expectedLoad.Any(c=>c>='가'&&c<='힣'),"Korean title values contain Hangul");
  var buttons=NativeButtons();
  Check(Enumerable.Range(1,8).All(id=>buttons.Any(b=>b.Id==id&&b.Width>0)),"All eight original title choices have native button IDs and widths");
  Check(buttons.Any(b=>b.Id==1&&b.Text.Contains(expectedNew))&&buttons.Any(b=>b.Id==2&&b.Text.Contains(expectedLoad)),"Korean title choices reach actual native text parts");
  var hostButtons=JsonSerializer.Deserialize<long[]>(Game.EvaluateJson("__screen.flat().filter(e=>e[0]==='button'&&e[3]===__buttonEpoch).map(e=>e[2])"))!;
  Check(Enumerable.Range(1,8).All(id=>hostButtons.Contains(id)),"Native IDs match current original-host title choices");
 }
 void DisposeBridge(){foreach(var name in new[]{"audio","images","uiRenderer"})if(Get(bridge,name) is IDisposable disposable)disposable.Dispose();}
 void Run(){
  Directory.CreateDirectory(Path.Combine(root,"results"));
  console=Get(Get(PluginManager.GetInstance(),"expressionMediator")!,"Console")!;
  var window=(Form)Get(console,"Window")!;picture=(PictureBox)Get(window,"MainPicBox")!;
  window.Opacity=0;window.Show();
  var previousState=Get(console,"state")!;Set(console,"state",Enum.Parse(previousState.GetType(),"Running"));
  try{
   Action("game");Check(Game.State=="input"&&Game.Error=="","Full Korean package initializes through production game action");
   Action("resume","1");Action("resume","7");
   var languageButtons=NativeButtons();
   Check(languageButtons.Any(b=>b.Id==5&&b.Text.Contains("한국어")),"Original language menu exposes Korean as choice five");
   Action("resume","5");CheckKoreanTitle();Capture("korean-title");
   var globalPath=Path.Combine(root,"sav-game","sav","global.sav");
   using(var global=JsonDocument.Parse(File.ReadAllText(globalPath)))Check(global.RootElement.GetProperty("3").GetString()=="ko-KR","Original global save persists the Korean locale");
   Game.Quit();DisposeBridge();bridge=new();Action("game");
   Check(StringValue("__require('i18n/selector').lan()") == "ko-KR","A new production Bridge restores Korean from isolated global save");
   var accept=StringValue("__require('i18n/selector').i18n().tt_disclaimer_accept");
   Check(NativeButtons().Any(b=>b.Id==1&&b.Text.Contains(accept)),"Restart disclaimer renders the saved Korean locale");
   Action("resume","1");CheckKoreanTitle();Capture("korean-title-restored");
   Action("resume","1");
   var prompt=StringValue("__require('i18n/selector').i18n().new_game.intro_input_name");
   Check(Game.State=="input"&&NativeText().Contains(prompt),"Original new-game name entry renders Korean text");Capture("korean-new-game-name");
   Action("resume","Trainer");
   Check(Game.State=="input"&&NativeButtons().Any(b=>b.Id==1),"Original name entry advances to native character-setting choices");
   Check(NativeText().Contains(StringValue("__require('i18n/selector').i18n().new_game.intro_select_sex")),"Character-setting prompt renders Korean text");Capture("korean-new-game-character");
   Action("resume","1");Action("resume","1");Action("resume","0");
   Check(Game.State=="input"&&CurrentChoices().Contains(2),"Original settings advance to the default-appearance choice");
   Action("resume","2");
   var confirmationIds=new long[]{1,2,3,4,99};
   Check(Game.State=="input"&&Game.Error==""&&confirmationIds.All(id=>CurrentChoices().Contains(id)),"Default appearance reaches all original confirmation actions without get_hair_color failure");
   Check(confirmationIds.All(id=>NativeButtons().Any(b=>b.Id==id&&b.Width>0)),"Default-appearance confirmation actions have actual native button widths");
   Check(NativeText().Contains(StringValue("__require('i18n/selector').i18n().new_game.cus_final_header")),"Default-appearance confirmation renders its current-language header");
   Capture("korean-new-game-default-confirmation");
   Action("resume","1");SettleNarrative("New-game introduction");
   Check(Game.State=="input"&&CurrentChoices().Contains(205)&&CurrentChoices().Contains(405),"Confirmed Korean new game reaches the original homepage actions");
   Check(NativeButtons().Any(b=>b.Id==205&&b.Width>0),"Homepage rest action has a native button");
   Capture("korean-new-game-homepage");
   Action("resume","205");SettleNarrative("Neutral rest action");
   Check(Game.State=="input"&&Game.Error==""&&CurrentChoices().Contains(205)&&CurrentChoices().Contains(405),"Neutral rest action returns to the original homepage without runtime errors");
   Capture("korean-new-game-after-rest");
   var binaries=new Dictionary<string,string>();
   foreach(var name in new[]{"EraUma.Plugin.dll","EraUma.Compatibility.dll","Jint.dll","Acornima.dll"})binaries[name]=Convert.ToHexString(SHA256.HashData(File.ReadAllBytes(Path.Combine(root,"Plugins",name))));
   File.WriteAllText(Path.Combine(root,"korean-native.json"),JsonSerializer.Serialize(new{pass=true,scope="Actual distributed Emuera with production Bridge: original language-menu selection, persisted Korean locale restoration, full default-appearance new-game route through confirmation and homepage, neutral rest action, native button/text parts and managed canvas PNG. Isolated saves; no desktop capture, OS input or human play.",checks,screens,state=Game.State,error=Game.Error,engine=typeof(PluginManager).Assembly.FullName,loadedPlugin=typeof(Bridge).Assembly.Location,loadedCompatibility=typeof(Session).Assembly.Location,binaries},new JsonSerializerOptions{WriteIndented=true}));
  }finally{DisposeBridge();Set(console,"state",previousState);}
 }
 public void Execute(PluginMethodParameter[] a){
  try{
   if(a[0].strValue=="arm"){
    timer=new(){Interval=50};timer.Tick+=(s,e)=>{
     var c=Get(Get(PluginManager.GetInstance(),"expressionMediator")!,"Console")!;
     if(Get(c,"state")?.ToString()!="WaitInput")return;timer.Stop();
     try{Run();Call(c,"PressEnterKey",false,"",true);}catch(Exception error){File.WriteAllText(Path.Combine(root,"error.txt"),error.ToString());}
    };timer.Start();
   }
   a[2].intValue=1;
  }catch(Exception error){File.WriteAllText(Path.Combine(root,"error.txt"),error.ToString());a[2].intValue=-1;a[3].strValue=error.ToString();}
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
[IO.File]::WriteAllText((Join-Path $outputPath 'KoreanNativeProbe.csproj'),$project)
$buildOutput=& dotnet build (Join-Path $outputPath 'KoreanNativeProbe.csproj') -c Release --nologo -v:q 2>&1
$buildOutput|Set-Content -LiteralPath (Join-Path $outputPath 'build.txt') -Encoding utf8
if($LASTEXITCODE -ne 0){throw "Korean native probe build failed: $outputPath\build.txt"}
Copy-Item -LiteralPath (Join-Path $outputPath 'bin\Release\net10.0-windows\KoreanNativeProbe.dll') -Destination $pluginPath
$erb=@'
@SYSTEM_TITLE
#DIM STATE
#DIMS MESSAGE
CALLSHARP KoreanNativeProbe("arm","",STATE,MESSAGE)
WAIT
QUIT
'@
[IO.File]::WriteAllText((Join-Path $probeRuntimePath 'ERB\Probe.ERB'),$erb,[Text.UTF8Encoding]::new($true))
$testProcess=Start-Process -FilePath (Join-Path $probeRuntimePath 'Emuera.exe') -WorkingDirectory $probeRuntimePath -WindowStyle Hidden -PassThru
$reportPath=Join-Path $probeRuntimePath 'korean-native.json'
$errorPath=Join-Path $probeRuntimePath 'error.txt'
try{
    $deadline=[DateTime]::UtcNow.AddSeconds($TimeoutSeconds)
    while(!(Test-Path -LiteralPath $reportPath) -and !(Test-Path -LiteralPath $errorPath)){
        if($testProcess.HasExited){throw "Owned Korean probe exited before reporting: $($testProcess.ExitCode); evidence: $outputPath"}
        if([DateTime]::UtcNow -gt $deadline){throw "Korean native probe timed out; evidence: $outputPath"}
        Start-Sleep -Milliseconds 150
    }
    if(Test-Path -LiteralPath $errorPath){throw [IO.File]::ReadAllText($errorPath)}
    $report=Get-Content -LiteralPath $reportPath -Raw|ConvertFrom-Json
    foreach($name in $dllNames){if($report.binaries.$name -ne $dllHashes[$name]){throw "Loaded production DLL differs: $name"}}
    $summary=[ordered]@{pass=$report.pass;scope=$report.scope;checks=$report.checks;screens=@($report.screens|Select-Object name,path,width,height,visiblePixels,sha256);state=$report.state;error=$report.error;engineExeSha256=$runtimeHash;productionDllSha256=$dllHashes;loadedPlugin=$report.loadedPlugin;loadedCompatibility=$report.loadedCompatibility;evidenceDirectory=$outputPath}
    $summary|ConvertTo-Json -Depth 8|Set-Content -LiteralPath (Join-Path $outputPath 'summary.json') -Encoding utf8
    if(!$report.pass){throw "Korean native package validation failed: $outputPath"}
    $summary|ConvertTo-Json -Depth 8
}finally{
    # Stop only the owned isolated process, never another running game instance.
    if(!$testProcess.HasExited){Stop-Process -Id $testProcess.Id;$testProcess.WaitForExit()}
}
