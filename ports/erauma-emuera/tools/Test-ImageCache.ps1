param(
    [string]$PluginDirectory,
    [string]$EngineSource,
    [string]$OutputRoot,
    [int]$TimeoutSeconds=90
)
$ErrorActionPreference='Stop'
Set-StrictMode -Version Latest
$portPath=Split-Path $PSScriptRoot
$repoPath=(Resolve-Path -LiteralPath (Join-Path $portPath '..\..')).Path
if(!$PluginDirectory){$PluginDirectory=Join-Path $portPath 'plugin\bin\Release\net10.0-windows'}
if(!$EngineSource){$EngineSource=Join-Path $repoPath '..\erauma-deps\emuera-src'}
if(!$OutputRoot){$OutputRoot=Join-Path $repoPath '..\..\outputs'}
$engineAssembly=(Resolve-Path -LiteralPath (Join-Path $EngineSource 'Emuera\artifacts\bin\Emuera\release-naudio\Emuera.dll')).Path
$referenceExe=(Resolve-Path -LiteralPath (Join-Path $repoPath 'test\ERA_CrossWorld_Runtime_Test_0.4.3\Emuera.NET 1824+v24+EMv18+EEv56.exe')).Path
$outputPath=[IO.Path]::GetFullPath((Join-Path $OutputRoot ('image-cache-'+[Guid]::NewGuid().ToString('N').Substring(0,8))))
$runtimePath=Join-Path $outputPath 'runtime'
$pluginPath=Join-Path $runtimePath 'Plugins'
[IO.Directory]::CreateDirectory($pluginPath)|Out-Null
[IO.Directory]::CreateDirectory((Join-Path $runtimePath 'ERB'))|Out-Null
[IO.Directory]::CreateDirectory((Join-Path $runtimePath 'CSV'))|Out-Null
Copy-Item -LiteralPath $referenceExe -Destination (Join-Path $runtimePath 'Emuera.exe')
Copy-Item -LiteralPath (Join-Path $portPath 'bootstrap\Gamebase.csv') -Destination (Join-Path $runtimePath 'CSV\Gamebase.csv')
Copy-Item -LiteralPath (Join-Path $portPath 'bootstrap\default.config') -Destination (Join-Path $runtimePath 'CSV\_default.config')
Get-ChildItem -LiteralPath $PluginDirectory -Filter '*.dll'|Copy-Item -Destination $pluginPath
[IO.File]::WriteAllText((Join-Path $runtimePath 'pluginsAware.txt'),'Owned native image-cache lifetime test; tiny local fixtures, no desktop capture or OS input.')
$probeSource=@'
using System.Collections;
using System.Drawing;
using System.Drawing.Imaging;
using System.Reflection;
using System.Text.Json;
using System.Windows.Forms;
using MinorShift.Emuera.Runtime.Utils.PluginSystem;
using EraUma.Plugin;

public sealed class PluginManifest:PluginManifestAbstract {
 public PluginManifest(){methods.Add(new ImageCacheProbe());}
 public override string PluginName=>"Owned image-cache regression";
 public override string PluginDescription=>"Native graphics lifetime and image reuse";
 public override string PluginVersion=>"1";
 public override string PluginAuthor=>"local";
}
public sealed class ImageCacheProbe:IPluginMethod {
 static readonly BindingFlags Flags=BindingFlags.Instance|BindingFlags.Static|BindingFlags.Public|BindingFlags.NonPublic;
 static object? Get(object o,string n)=>o.GetType().GetProperty(n,Flags)?.GetValue(o)??o.GetType().GetField(n,Flags)?.GetValue(o);
 static object? Call(object o,string n,params object?[] values)=>o.GetType().GetMethod(n,Flags)!.Invoke(o,values);
 readonly Type contents=typeof(PluginManager).Assembly.GetType("MinorShift.Emuera.UI.Game.Image.AppContents",true)!;
 readonly List<object> checks=[];
 NativeImages images=null!;
 object console=null!;
 int peakRegistered;
 readonly string root=Path.GetFullPath(Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location)!,".."));
 public string Name=>"ImageCacheProbe";
 public string Description=>"Owned engine image cache regressions";
 object? Native(string method,params object?[] args)=>contents.GetMethod(method,Flags)!.Invoke(null,args);
 IDictionary Cache=>(IDictionary)Get(images,"cache")!;
 object Entry(string key)=>Cache[key]??throw new Exception("Missing cache entry "+key);
 object Graphic(string key)=>Get(Entry(key),"Graphics")!;
 object Sprite(string name)=>Native("GetSprite",name)??throw new Exception("Missing native sprite "+name);
 static bool Created(object graphics)=>(bool)Get(graphics,"IsCreated")!;
 static int Pixel(object graphics)=>((Bitmap)Get(graphics,"RealBitmap")!).GetPixel(1,1).ToArgb();
 void Check(bool pass,string name,object? observed=null){
  peakRegistered=Math.Max(peakRegistered,images.RegisteredCount);
  checks.Add(new{name,pass,registered=images.RegisteredCount,observed});
  File.AppendAllText(Path.Combine(root,"progress.txt"),(pass?"PASS ":"FAIL ")+name+"\n");
  if(!pass)throw new Exception(name);
 }
 void Begin(bool retainRows)=>Call(images,"BeginUpdate",retainRows);
 void End()=>Call(images,"EndUpdate");
 bool Try(string key,out string name,out Size size){
  object?[] values=[key,null,null];bool present=(bool)typeof(NativeImages).GetMethod("TryGetRegistered",Flags)!.Invoke(images,values)!;
  name=(string)values[1]!;size=(Size)values[2]!;return present;
 }
 string Register(string key,Color color){using var bitmap=new Bitmap(8,8,PixelFormat.Format32bppArgb);using(var draw=Graphics.FromImage(bitmap))draw.Clear(color);return images.Register(bitmap,key);}
 string[] Keys()=>Cache.Keys.Cast<string>().Order().ToArray();
 void Clear(){Call(console,"CBG_Clear");images.Clear();}
 void Run(){
  console=Get(Get(PluginManager.GetInstance(),"expressionMediator")!,"Console")!;
  var window=(Form)Get(console,"Window")!;
  window.Opacity=0;
  images=new NativeImages(root);
  try {
   Directory.CreateDirectory(Path.Combine(root,"results"));
   File.WriteAllText(Path.Combine(root,"progress.txt"),"");
   Begin(false);var red=Register("red",Color.Red);var blue=Register("blue",Color.Blue);End();
   var redSprite=Sprite(red);var redGraphic=Graphic("red");var blueGraphic=Graphic("blue");
   Begin(false);var redAgain=Register("red",Color.Lime);var blueAgain=Register("blue",Color.Gold);End();
   Check(redAgain==red&&blueAgain==blue&&ReferenceEquals(redSprite,Sprite(red))&&ReferenceEquals(redGraphic,Graphic("red"))&&Pixel(redGraphic)==Color.Red.ToArgb(),"full frame reuses identical native sprites and pixels",new{red,blue});
   Begin(false);Check(Try("red",out var retained,out var size)&&retained==red&&size==new Size(8,8),"lookup pins the live sprite in a replacement frame");End();
   Check(images.RegisteredCount==1&&!Created(blueGraphic)&&ReferenceEquals(redSprite,Sprite(red))&&Created(redGraphic),"unused image is released while referenced sprite stays alive");
   Begin(false);Try("red",out _,out _);var green=Register("green",Color.Lime);End();
   Check(green==blue&&red!=green&&ReferenceEquals(redSprite,Sprite(red))&&Pixel(redGraphic)==Color.Red.ToArgb()&&Pixel(Graphic("green"))==Color.Lime.ToArgb(),"free slot reuse preserves the live sprite",new{oldUnused=blue,reused=green,live=red});
   Begin(true);var yellow=Register("yellow",Color.Yellow);End();
   Check(images.RegisteredCount==3&&Created(redGraphic)&&Try("green",out _,out _),"partial frame pins retained rows");
   Begin(true);End();
   Check(images.RegisteredCount==3&&ReferenceEquals(redSprite,Sprite(red))&&Sprite(yellow) is not null,"append frame keeps unvisited existing sprites");

   Clear();int totalHistory=0;
   for(int frame=0;frame<180;frame++){
    Begin(false);
    for(int item=0;item<4;item++){Register("history:"+frame+":"+item,Color.FromArgb(255,frame%256,item*50,100));totalHistory++;}
    End();peakRegistered=Math.Max(peakRegistered,images.RegisteredCount);
    if(images.RegisteredCount!=4)throw new Exception("History retained unused sprites at frame "+frame);
   }
   Check(totalHistory==720&&images.RegisteredCount==4,"720 historical image keys stay bounded to the current 4 images",new{frames=180,totalHistory});
   Clear();Begin(false);
   for(int slot=0;slot<128;slot++)Register("capacity-old:"+slot,Color.Red);
   End();Check(images.RegisteredCount==128,"all 128 native image slots can be occupied");
   Begin(false);
   for(int slot=0;slot<128;slot++)Register("capacity-new:"+slot,Color.Blue);
   End();
   Check(images.RegisteredCount==128&&Keys().All(key=>key.StartsWith("capacity-new:"))&&Keys().All(key=>Created(Graphic(key))&&Pixel(Graphic(key))==Color.Blue.ToArgb()),"full replacement reclaims unreferenced slots at capacity");

   Clear();var fixture=Path.Combine(root,"tiny-fixture.png");
   using(var tiny=new Bitmap(8,8)){using(var draw=Graphics.FromImage(tiny))draw.Clear(Color.DarkSlateBlue);tiny.Save(fixture,ImageFormat.Png);}
   using var image=JsonDocument.Parse(JsonSerializer.Serialize(new{type="image",images=new[]{new{src=fixture,width=8,height=8,posX=0,posY=0}}}));
   Begin(false);var resolved=images.Resolve(image.RootElement,8,8);End();var resolvedKey=Keys().Single();var resolvedGraphic=Graphic(resolvedKey);
   Begin(false);var resolvedAgain=images.Resolve(image.RootElement,8,8);End();
   Check(resolved is not null&&resolvedAgain==resolved&&ReferenceEquals(resolvedGraphic,Graphic(resolvedKey))&&Pixel(resolvedGraphic)==Color.DarkSlateBlue.ToArgb(),"Resolve reuses an owned PNG fixture without rebuilding the native bitmap");
   Clear();using var background=JsonDocument.Parse(JsonSerializer.Serialize(new{back=new{url=fixture,opacity=1}}));
   Begin(false);images.SetBackground(background.RootElement);End();
   var oldBackgroundKey=Keys().Single();var oldBackgroundGraphic=Graphic(oldBackgroundKey);
   bool BackgroundCreated()=>((IEnumerable)Get(console,"cbgList")!).Cast<object>().Where(item=>Convert.ToInt32(Get(item,"zdepth"))!=0).All(item=>Get(item,"Img") is object sprite&&(bool)Get(sprite,"IsCreated")!);
   Check(images.RegisteredCount==1&&Created(oldBackgroundGraphic)&&BackgroundCreated(),"CBG background holds a live cached graphic");
   Begin(false);Register("row-with-background",Color.Gold);End();
   Check(images.RegisteredCount==2&&ReferenceEquals(oldBackgroundGraphic,Graphic(oldBackgroundKey))&&Created(oldBackgroundGraphic)&&BackgroundCreated(),"full row replacement keeps the current background pinned");
   Begin(false);images.SetBackground(background.RootElement);End();
   Check(images.RegisteredCount==1&&ReferenceEquals(oldBackgroundGraphic,Graphic(oldBackgroundKey)),"same background state reuses its native graphic");
   var picture=(PictureBox)Get(window,"MainPicBox")!;var beforeSize=picture.Size;
   window.ClientSize=new Size(window.ClientSize.Width+64,window.ClientSize.Height+32);window.PerformLayout();
   Begin(false);images.SetBackground(background.RootElement);End();
   var resizedBackgroundKey=Keys().Single();var resizedGraphic=Graphic(resizedBackgroundKey);
   Check(resizedBackgroundKey!=oldBackgroundKey&&!Created(oldBackgroundGraphic)&&Created(resizedGraphic)&&((Bitmap)Get(resizedGraphic,"RealBitmap")!).Size==picture.Size&&BackgroundCreated(),"resize changes the background key and releases the old-sized graphic",new{beforeWidth=beforeSize.Width,beforeHeight=beforeSize.Height,afterWidth=picture.Width,afterHeight=picture.Height});
   Begin(false);using(var empty=JsonDocument.Parse("{}"))images.SetBackground(empty.RootElement);End();
   Check(images.RegisteredCount==0&&!Created(resizedGraphic),"removing the background releases its pinned graphic");

   Clear();Begin(false);var unloadedName=Register("after-unload",Color.Red);End();var unloadedGraphic=Graphic("after-unload");var unloadedSprite=Sprite(unloadedName);
   Native("UnloadGraphicList");
   Check(!Created(unloadedGraphic)&&!Try("after-unload",out var emptyName,out var emptySize)&&emptyName==""&&emptySize==Size.Empty&&images.RegisteredCount==0,"unloaded engine graphics are rejected by the cache");
   Begin(false);var recreatedName=Register("after-unload",Color.Lime);End();
   Check(recreatedName==unloadedName&&Created(Graphic("after-unload"))&&!ReferenceEquals(unloadedGraphic,Graphic("after-unload"))&&!ReferenceEquals(unloadedSprite,Sprite(recreatedName))&&Pixel(Graphic("after-unload"))==Color.Lime.ToArgb(),"same key is recreated after the engine unloads graphics");
   Clear();Begin(false);var disposedName=Register("after-sprite-dispose",Color.Blue);End();var disposedGraphic=Graphic("after-sprite-dispose");var disposedSprite=Sprite(disposedName);
   Native("SpriteDispose",disposedName);
   Check(Created(disposedGraphic)&&!Try("after-sprite-dispose",out _,out _)&&!Created(disposedGraphic)&&images.RegisteredCount==0,"missing native sprite invalidates a still-created cached graphic");
   Begin(false);var recreatedSpriteName=Register("after-sprite-dispose",Color.Yellow);End();
   Check(recreatedSpriteName==disposedName&&!ReferenceEquals(disposedSprite,Sprite(recreatedSpriteName))&&Pixel(Graphic("after-sprite-dispose"))==Color.Yellow.ToArgb(),"disposed sprite is recreated rather than returned from stale cache");
   var currentSprite=Sprite(recreatedSpriteName);var currentGraphic=Graphic("after-sprite-dispose");
   Native("CreateSpriteG",recreatedSpriteName,currentGraphic,new Rectangle(0,0,8,8));
   Check(!ReferenceEquals(currentSprite,Sprite(recreatedSpriteName))&&!Try("after-sprite-dispose",out _,out _)&&images.RegisteredCount==0,"replaced native sprite identity invalidates the cache");
   Clear();Check(images.RegisteredCount==0&&images.Warnings.Count==0,"cache clears owned graphics without image warnings");
   File.WriteAllText(Path.Combine(root,"results","verification.json"),JsonSerializer.Serialize(new{pass=true,scope="owned exact-engine native image lifetime",checks,peakRegistered,totalHistory,fixtures="owned 8x8 PNG and generated 8x8 bitmaps",warnings=images.Warnings,engine=typeof(PluginManager).Assembly.FullName},new JsonSerializerOptions{WriteIndented=true}));
  }finally{Call(console,"CBG_Clear");images.Dispose();}
 }
 public void Execute(PluginMethodParameter[] args){
  try{Run();args[0].intValue=1;}
  catch(Exception error){Directory.CreateDirectory(Path.Combine(root,"results"));File.WriteAllText(Path.Combine(root,"results","verification.json"),JsonSerializer.Serialize(new{pass=false,error=error.ToString(),checks,peakRegistered},new JsonSerializerOptions{WriteIndented=true}));args[0].intValue=-1;}
 }
}
'@
[IO.File]::WriteAllText((Join-Path $outputPath 'Probe.cs'),$probeSource,[Text.UTF8Encoding]::new($false))
$engineReference=[Security.SecurityElement]::Escape($engineAssembly)
$pluginReference=[Security.SecurityElement]::Escape((Join-Path $pluginPath 'EraUma.Plugin.dll'))
$project=@"
<Project Sdk="Microsoft.NET.Sdk"><PropertyGroup><TargetFramework>net10.0-windows</TargetFramework><UseWindowsForms>true</UseWindowsForms><ImplicitUsings>enable</ImplicitUsings><Nullable>enable</Nullable><NuGetAudit>false</NuGetAudit><AssemblySearchPaths>{HintPathFromItem};{TargetFrameworkDirectory};{RawFileName}</AssemblySearchPaths></PropertyGroup><ItemGroup><Compile Remove="runtime/**/*.cs"/><Reference Include="Emuera"><HintPath>$engineReference</HintPath><Private>false</Private></Reference><Reference Include="EraUma.Plugin"><HintPath>$pluginReference</HintPath><Private>false</Private></Reference></ItemGroup></Project>
"@
[IO.File]::WriteAllText((Join-Path $outputPath 'ImageCacheProbe.csproj'),$project)
$buildOutput=& dotnet build (Join-Path $outputPath 'ImageCacheProbe.csproj') -c Release --nologo -v:q 2>&1
$buildOutput|Set-Content -LiteralPath (Join-Path $outputPath 'build.txt') -Encoding utf8
if($LASTEXITCODE -ne 0){throw "Native image cache probe build failed: $outputPath\build.txt"}
Copy-Item -LiteralPath (Join-Path $outputPath 'bin\Release\net10.0-windows\ImageCacheProbe.dll') -Destination $pluginPath
$erb="@SYSTEM_TITLE`n#DIM VERDICT`nCALLSHARP ImageCacheProbe(VERDICT)`nPRINTFORML Image cache result: {VERDICT}`nQUIT`n"
[IO.File]::WriteAllText((Join-Path $runtimePath 'ERB\Probe.ERB'),$erb,[Text.UTF8Encoding]::new($true))
$runtimeHash=(Get-FileHash -LiteralPath (Join-Path $runtimePath 'Emuera.exe') -Algorithm SHA256).Hash
if($runtimeHash -ne (Get-FileHash -LiteralPath $referenceExe -Algorithm SHA256).Hash){throw 'Exact distributed runtime hash differs'}
$reportPath=Join-Path $runtimePath 'results\verification.json'
$testProcess=Start-Process -FilePath (Join-Path $runtimePath 'Emuera.exe') -WorkingDirectory $runtimePath -WindowStyle Hidden -PassThru
try {
    $deadline=[DateTime]::UtcNow.AddSeconds($TimeoutSeconds)
    while(!(Test-Path -LiteralPath $reportPath)){
        if($testProcess.HasExited){throw "Owned Emuera process exited before reporting: $($testProcess.ExitCode)"}
        if([DateTime]::UtcNow -gt $deadline){throw "Native image cache probe timed out; evidence: $outputPath"}
        Start-Sleep -Milliseconds 100
    }
    $report=Get-Content -LiteralPath $reportPath -Raw|ConvertFrom-Json
    $report|Add-Member -NotePropertyName engineExeSha256 -NotePropertyValue $runtimeHash
    $report|Add-Member -NotePropertyName pluginDllSha256 -NotePropertyValue (Get-FileHash -LiteralPath (Join-Path $pluginPath 'EraUma.Plugin.dll') -Algorithm SHA256).Hash
    $report|Add-Member -NotePropertyName evidenceDirectory -NotePropertyValue $outputPath
    $report|ConvertTo-Json -Depth 30|Set-Content -LiteralPath (Join-Path $outputPath 'image-cache-summary.json') -Encoding utf8
    if(!$report.pass){throw "Native image cache failed: $outputPath; $($report.error)"}
    Write-Output "PASS: Native image cache lifetime ($($report.checks.Count) checks). Evidence: $outputPath"
} finally {
    # Stop only this isolated test process; no user window or OS input is touched.
    if(!$testProcess.HasExited){Stop-Process -Id $testProcess.Id;$testProcess.WaitForExit()}
}
