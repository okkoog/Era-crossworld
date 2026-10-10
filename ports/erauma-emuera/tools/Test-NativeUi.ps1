param(
    [string]$EngineSource,
    [string]$OutputRoot,
    [string]$AudioPath,
    [int]$TimeoutSeconds=45
)
$ErrorActionPreference='Stop'
Set-StrictMode -Version Latest
$portPath=Split-Path $PSScriptRoot
$repoPath=(Resolve-Path -LiteralPath (Join-Path $portPath '..\..')).Path
if(!$EngineSource){$EngineSource=Join-Path $repoPath '..\erauma-deps\emuera-src'}
if(!$OutputRoot){$OutputRoot=Join-Path $repoPath '..\..\outputs'}
if(!$AudioPath){$AudioPath=Join-Path $portPath 'artifacts\resources\res\audio\凯旋门-比赛.mp3'}
$AudioPath=(Resolve-Path -LiteralPath $AudioPath).Path
$engineAssembly=(Resolve-Path -LiteralPath (Join-Path $EngineSource 'Emuera\artifacts\bin\Emuera\release-naudio\Emuera.dll')).Path
$reference=Join-Path $repoPath 'test\ERA_CrossWorld_Runtime_Test_0.4.3'
$referenceExe=Join-Path $reference 'Emuera.NET 1824+v24+EMv18+EEv56.exe'
$outputPath=[IO.Path]::GetFullPath((Join-Path $OutputRoot ('native-ui-audio-'+[Guid]::NewGuid().ToString('N').Substring(0,8))))
$runtimePath=Join-Path $outputPath 'runtime'
$pluginPath=Join-Path $runtimePath 'Plugins'
[IO.Directory]::CreateDirectory($pluginPath) | Out-Null
[IO.Directory]::CreateDirectory((Join-Path $runtimePath 'CSV')) | Out-Null
[IO.Directory]::CreateDirectory((Join-Path $runtimePath 'ERB')) | Out-Null
Copy-Item -LiteralPath $referenceExe -Destination (Join-Path $runtimePath 'Emuera.exe')
Copy-Item -LiteralPath (Join-Path $portPath 'bootstrap\Gamebase.csv') -Destination (Join-Path $runtimePath 'CSV\Gamebase.csv')
Copy-Item -LiteralPath (Join-Path $portPath 'bootstrap\default.config') -Destination (Join-Path $runtimePath 'CSV\_default.config')
Get-ChildItem -LiteralPath (Join-Path $portPath 'plugin\bin\Release\net10.0-windows') -Filter '*.dll' | Copy-Item -Destination $pluginPath
[IO.File]::WriteAllText((Join-Path $pluginPath 'audio-path.txt'),$AudioPath)
[IO.File]::WriteAllText((Join-Path $runtimePath 'pluginsAware.txt'),'Native UI and audio verification plugin knowingly packaged for this test.')
$probeSource=@'
using System.Collections;
using System.Drawing;
using System.Reflection;
using System.Text.Json;
using MinorShift.Emuera.Runtime.Utils.PluginSystem;
using EraUma.Plugin;

public sealed class PluginManifest:PluginManifestAbstract
{public PluginManifest(){methods.Add(new UiProbe());}public override string PluginName=>"Native UI verification";public override string PluginDescription=>"Local HTML rendering probe";public override string PluginVersion=>"1";public override string PluginAuthor=>"local";}
public sealed class UiProbe:IPluginMethod
{
 public string Name=>"UiProbe";public string Description=>"Native UI verification";
 static object? Get(object o,string n)=>o.GetType().GetProperty(n,BindingFlags.Public|BindingFlags.NonPublic|BindingFlags.Instance)?.GetValue(o)??o.GetType().GetField(n,BindingFlags.Public|BindingFlags.NonPublic|BindingFlags.Instance)?.GetValue(o);
 public void Execute(PluginMethodParameter[] args)
 {
  var api=PluginManager.GetInstance();var root=Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location)!;
  var manager=typeof(PluginManager).GetField("expressionMediator",BindingFlags.Instance|BindingFlags.NonPublic)!.GetValue(api)!;var console=Get(manager,"Console")!;
  try{
   File.WriteAllText(Path.Combine(root,"stage.txt"),"start\n");File.Delete(Path.Combine(root,"error.txt"));
   api.ClearDisplay();using var images=new NativeImages(root);long id=-900000;var urls=new Dictionary<long,string>();
   var renderer=new UiRenderer(api,images.Resolve,url=>{urls[id]=url;return id--;});
   var runs=new List<object>();
   void Render(string row){File.AppendAllText(Path.Combine(root,"stage.txt"),"before row "+runs.Count+"\n");long before=Convert.ToInt64(Get(console,"LineCount"));int expected=renderer.Render(row);long delta=Convert.ToInt64(Get(console,"LineCount"))-before;if(delta!=expected)throw new Exception("Logical lines mismatch: "+delta+" != "+expected);runs.Add(new{expected,actual=delta,renderer.LastLayout});File.AppendAllText(Path.Combine(root,"stage.txt"),"after row "+runs.Count+"\n");}
   Render("""{"columns":[{"type":"text","content":[{"content":"eraUma","fontSize":"2rem","fontWeight":"bold","color":"#facc15"},{"isBr":1},{"content":"Native 24-column menu","color":"#7dd3fc"}]}],"config":{}}""");
   Render("""{"columns":[{"type":"button","accelerator":1,"content":"New game","config":{"width":6}},{"type":"button","accelerator":2,"content":"Load","config":{"width":6}},{"type":"button","accelerator":3,"content":"Gallery","config":{"width":6}},{"type":"button","accelerator":4,"content":"Settings","config":{"width":6}},{"type":"button","accelerator":5,"content":"Unavailable","config":{"width":6,"disabled":true,"title":"Disabled choice"}},{"type":"button","accelerator":6,"content":"Link style","config":{"width":6,"isButton":false}}],"config":{}}""");
   Render("""{"columns":[{"columns":[{"type":"text","content":[{"content":"Speed ","fontWeight":"bold"},{"content":"1200","color":"rgb(120,240,170)"}],"config":{"width":12}},{"type":"text","content":"Stamina 700","config":{"width":12}}],"config":{"width":12}},{"columns":[{"type":"text","content":"Power 900","config":{"width":12}},{"type":"text","content":"Wisdom 600","config":{"width":12}}],"config":{"width":12}}],"config":{}}""");
   Render("""{"columns":[{"type":"text","content":[{"content":"Project page","url":"https://github.com/okkoog/Era-crossworld","title":"Website"},{"isBlank":3},{"content":"bold and italic","fontWeight":"bold","fontStyle":"italic"}]}],"config":{}}""");
   Render("""{"columns":[{"type":"progress","percentage":65,"inContent":"Energy 65%","outContent":"Training","config":{"barWidth":18,"color":"#22c55e"}}],"config":{}}""");
   Render("""{"columns":[{"type":"text","content":"Centered default width"}],"config":{"width":12,"offset":6}}""");
   if(renderer.LastLayout!.Cells[0].X!=Convert.ToInt32(Math.Round(renderer.LastLayout.Width/4d)))throw new Exception("Default width/offset not preserved");
   Render("""{"columns":[{"type":"text","content":"Left","config":{"width":6}},{"type":"text","content":"Right","config":{"width":6}}],"config":{"horizontalAlign":"space-around"}}""");
   if(renderer.LastLayout!.Cells[0].X<=0||renderer.LastLayout.Cells[1].X<=renderer.LastLayout.Width/2)throw new Exception("Horizontal spacing not preserved");
   Render("""{"columns":[{"type":"text","content":"Large heading","config":{"width":12,"fontSize":"2rem"}},{"type":"text","content":"Vertically centered","config":{"width":12}}],"config":{"verticalAlign":"middle"}}""");
   if(renderer.LastLayout!.Cells[1].Y<=0)throw new Exception("Vertical alignment not preserved");
   File.AppendAllText(Path.Combine(root,"stage.txt"),"capture menu\n");api.FlushConsole(true);UiRenderer.CaptureCurrentWindow(Path.Combine(root,"menu.png"));File.AppendAllText(Path.Combine(root,"stage.txt"),"menu captured\n");
   var buttons=new List<object>();var hitIds=new List<long>();
   var lines=(IEnumerable)Get(console,"displayLineList")!;
   foreach(var line in lines)Walk(line,0,0);
   void Walk(object line,int y,int level){foreach(var button in (IEnumerable)Get(line,"Buttons")!){if((bool)Get(button,"IsButton")!){long bid=(long)Get(button,"Input")!;buttons.Add(new{id=bid,x=Get(button,"PointX"),width=Get(button,"Width"),generation=Get(button,"Generation"),title=Get(button,"Title")});}foreach(var part in (IEnumerable)Get(button,"StrArray")!){if(Get(part,"Children") is IEnumerable children){int childY=0;foreach(var child in children){foreach(var cb in (IEnumerable)Get(child,"Buttons")!){if((bool)Get(cb,"IsButton")!){int px=Convert.ToInt32(Get(cb,"PointX"))+Math.Max(1,Convert.ToInt32(Get(cb,"Width"))/2);int top=Convert.ToInt32(Get(part,"Top"))+childY+9;var hit=part.GetType().GetMethod("TestChildHitbox")!.Invoke(part,[px,top,0]);if(hit!=null&&(bool)Get(hit,"IsButton")!)hitIds.Add((long)Get(hit,"Input")!);}}Walk(child,childY,level+1);childY+=26;}}}}}
   if(!Enumerable.Range(1,4).All(n=>hitIds.Contains(n))||hitIds.Contains(5)||!hitIds.Contains(6)||!hitIds.Contains(-900000))throw new Exception("Native button hitbox verification failed: "+string.Join(",",hitIds));
   var nativeIds=buttons.Select(x=>(long)x.GetType().GetProperty("id")!.GetValue(x)!).ToArray();
   var progressChecks=new List<object>();
   bool progressPass=true;
   void Progress(string name,double percentage,int barHeight,int units,int offset,int barUnits,string css)
   {
    api.ClearDisplay();
    Render(JsonSerializer.Serialize(new{columns=new[]{new{type="progress",percentage,inContent="",outContent="",config=new{width=units,offset,barWidth=barUnits,height=barHeight,color=css}}},config=new{}}));
    var cell=renderer.LastLayout!.Cells.Single();
    int barWidth=(int)Math.Round(cell.Width*barUnits/24d),expectedFill=(int)Math.Round(barWidth*percentage/100);
    var path=Path.Combine(root,name+".png");api.FlushConsole(true);UiRenderer.CaptureCurrentWindow(path);
    using var bitmap=new Bitmap(path);int fillColor=ColorTranslator.FromHtml(css).ToArgb(),trackColor=ColorTranslator.FromHtml("#334155").ToArgb();
    int fillPixels=0,trackPixels=0,fillMaxRun=0,trackMaxRun=0;
    for(int y=0;y<bitmap.Height;y++){int fillRun=0,trackRun=0;for(int x=0;x<bitmap.Width;x++){int pixel=bitmap.GetPixel(x,y).ToArgb();if(pixel==fillColor){fillPixels++;fillRun++;fillMaxRun=Math.Max(fillMaxRun,fillRun);}else fillRun=0;if(pixel==trackColor){trackPixels++;trackRun++;trackMaxRun=Math.Max(trackMaxRun,trackRun);}else trackRun=0;}}
    bool fillMatches=expectedFill==0?fillPixels==0:fillPixels>expectedFill*barHeight*.7&&Math.Abs(fillMaxRun-expectedFill)<=3;
    int expectedTrack=barWidth-expectedFill;
    bool trackMatches=expectedTrack==0?trackPixels==0:trackPixels>expectedTrack*barHeight*.7&&Math.Abs(trackMaxRun-expectedTrack)<=3;
    bool pass=fillMatches&&trackMatches;progressPass&=pass;
    progressChecks.Add(new{name,pass,percentage,barHeight,barWidth,expectedFill,expectedTrack,fillPixels,trackPixels,fillMaxRun,trackMaxRun,path});
   }
   Progress("progress-65",65,24,24,0,18,"#22C55E");
   Progress("progress-0",0,24,24,0,24,"#F97316");
   Progress("progress-100",100,24,24,0,24,"#A855F7");
   Progress("progress-thin",37,6,24,0,24,"#38BDF8");
   Progress("progress-offset",42,24,12,6,12,"#22C55E");
   api.ClearDisplay();
   using(var baseImage=new Bitmap(120,120)){using var g=Graphics.FromImage(baseImage);g.Clear(Color.DarkSlateBlue);g.FillEllipse(Brushes.Gold,20,20,80,80);baseImage.Save(Path.Combine(root,"base.png"));}
   using(var overlay=new Bitmap(120,120)){using var g=Graphics.FromImage(overlay);g.FillRectangle(Brushes.Red,45,45,30,30);overlay.Save(Path.Combine(root,"overlay.png"));}
   Render(JsonSerializer.Serialize(new{columns=new[]{new{type="image",images=new[]{new{src=Path.Combine(root,"base.png"),width=120,height=120,posX=0,posY=0},new{src=Path.Combine(root,"overlay.png"),width=120,height=120,posX=0,posY=0}},config=new{width=6}}},config=new{}}));
   Render("""{"columns":[{"type":"chart","data":{"labels":["Jan","Feb","Mar","Apr"],"datasets":[{"label":"Speed","data":["10.00","40.00","30.00","80.00"],"borderColor":"#facc15"},{"label":"Power","data":[70,30,60,40],"borderColor":"#7dd3fc"}]},"options":{},"config":{"height":360}}],"config":{}}""");
   api.FlushConsole(true);UiRenderer.CaptureCurrentWindow(Path.Combine(root,"assets.png"));
   var chartCell=renderer.LastLayout!.Cells.Single();
   var displayLines=((IEnumerable)Get(console,"displayLineList")!).Cast<object>().ToArray();
   bool HasChartSprite(object line){foreach(var button in (IEnumerable)Get(line,"Buttons")!)foreach(var part in (IEnumerable)Get(button,"StrArray")!){if((Get(part,"ResourceName") as string)==chartCell.Sprite)return true;if(Get(part,"Children") is IEnumerable children)foreach(var child in children)if(HasChartSprite(child))return true;}return false;}
   int chartLineNo=Convert.ToInt32(Get(displayLines.First(HasChartSprite),"LineNo"));
   int chartY=(int)console.GetType().GetMethod("GetLinePointY")!.Invoke(console,[chartLineNo])!;
   using var chartCanvas=new Bitmap(Path.Combine(root,"assets.png"));
   // Inspect the plot interior, excluding the legend, labels and the image above it.
   var chartBounds=Rectangle.Intersect(new Rectangle(chartCell.X+68,chartY+chartCell.Y+20,chartCell.Width-92,chartCell.Height-85),new Rectangle(0,0,chartCanvas.Width,chartCanvas.Height));
   int chartBrightPixels=0,chartStringSeriesPixels=0,chartNumericSeriesPixels=0;
   for(int y=chartBounds.Top;y<chartBounds.Bottom;y++)for(int x=chartBounds.Left;x<chartBounds.Right;x++){var pixel=chartCanvas.GetPixel(x,y);if(pixel.R>100||pixel.G>100||pixel.B>100)chartBrightPixels++;if(pixel.R>180&&pixel.G>140&&pixel.B<80)chartStringSeriesPixels++;if(pixel.R<160&&pixel.G>150&&pixel.B>200)chartNumericSeriesPixels++;}
   bool chartPass=chartBrightPixels>300&&chartStringSeriesPixels>100&&chartNumericSeriesPixels>100;
   var chartCheck=new{pass=chartPass,sourceValueKind="numeric strings (toFixed(2)) + JSON numbers",chartLineNo,chartY,bounds=new{x=chartBounds.X,y=chartBounds.Y,width=chartBounds.Width,height=chartBounds.Height},chartBrightPixels,chartStringSeriesPixels,chartNumericSeriesPixels};
   var soundType=typeof(PluginManager).Assembly.GetType("MinorShift.Emuera.Runtime.Utils.Sound")!;
   var mixerType=typeof(PluginManager).Assembly.GetType("MinorShift.Emuera.Runtime.Utils.SoundMixer");
   var observations=new List<object>();
   bool backendErrorsPass=true,mutedVolumePreserved=true;
   object? Sound(NativeAudio a)=>Get(a,"sound");
   object? Player(NativeAudio a)=>Sound(a) is object s?Get(s,"player"):null;
   object? Stream(NativeAudio a)=>Sound(a) is object s?Get(s,"stream"):null;
   void Pump(int milliseconds){var end=DateTime.UtcNow.AddMilliseconds(milliseconds);do{System.Windows.Forms.Application.DoEvents();Thread.Sleep(20);}while(DateTime.UtcNow<end);}
   double Position(NativeAudio a){if(Stream(a) is object stream)return Convert.ToDouble(Get(stream,"Position"));dynamic? player=Player(a);return player is null?0:(double)player.controls.currentPosition;}
   bool Playing(NativeAudio a)=>Sound(a) is object s&&(bool)soundType.GetMethod("isPlaying")!.Invoke(s,null)!;
   string[] Providers(NativeAudio a){var names=new HashSet<string>();var seen=new HashSet<object>(ReferenceEqualityComparer.Instance);void Walk(object? o,int depth){if(o is null||depth>8||!seen.Add(o))return;var t=o.GetType();names.Add(t.FullName!);if(!(t.FullName!.StartsWith("NAudio")||t==soundType))return;foreach(var f in t.GetFields(BindingFlags.Instance|BindingFlags.Public|BindingFlags.NonPublic)){if(!f.FieldType.IsPrimitive&&f.FieldType!=typeof(string))Walk(f.GetValue(o),depth+1);}}Walk(Sound(a),0);return names.Order().ToArray();}
   object Observe(string phase,NativeAudio a){var output=mixerType?.GetField("output",BindingFlags.Static|BindingFlags.NonPublic)?.GetValue(null);var tracker=mixerType?.GetField("deviceTracker",BindingFlags.Static|BindingFlags.NonPublic)?.GetValue(null);var device=tracker is null?null:Get(tracker,"Device");dynamic? player=Player(a);int? wmpVolume=player is null?(int?)null:(int)player.settings.volume,wmpErrorCount=player is null?(int?)null:(int)player.error.errorCount;backendErrorsPass&=wmpErrorCount.GetValueOrDefault()==0;mutedVolumePreserved&=wmpVolume.GetValueOrDefault()==0;return new{phase,a.Opened,a.OutputDevice,playing=Playing(a),position=Position(a),paused=Get(a,"paused"),decoder=Stream(a)?.GetType().FullName,outputState=output is null?null:Get(output,"PlaybackState")?.ToString(),deviceName=device is null?null:Get(device,"FriendlyName")?.ToString(),deviceState=device is null?null:Get(device,"State")?.ToString(),playerState=player is null?null:((object)player.playState).ToString(),wmpVolume,wmpErrorCount,warnings=a.Warnings.ToArray(),providers=Providers(a)};}
   using var audio=new NativeAudio();
   bool constructorWithoutPlayback=!audio.Opened&&audio.Warnings.Count==0;
   var audioPath=File.ReadAllText(Path.Combine(root,"audio-path.txt"));
   void Apply(long rev,string action,bool loop=false){using var state=JsonDocument.Parse(JsonSerializer.Serialize(new{revision=rev,action,path=audioPath,config=new{loop},volume=0}));audio.Apply(state.RootElement);}
   var volumeChecks=new List<object>();bool volumePass=true;
   bool LoopMode(){dynamic? player=Player(audio);return player is null?Providers(audio).Any(p=>p=="NAudio.Extras.LoopStream"):(bool)player.settings.getMode("loop");}
   void Volume(long rev,string phase,bool expectedPaused,bool expectedLoop)
   {
    var soundBefore=Sound(audio);double positionBefore=Position(audio);bool pausedBefore=(bool)Get(audio,"paused")!,loopBefore=LoopMode();
    // Volume snapshots include the original path/config, as game-host redraws do.
    // This catches a regression that falls through to reopening the same track.
    Apply(rev,"volume",expectedLoop);Pump(150);
    double positionAfter=Position(audio);bool sameSound=ReferenceEquals(soundBefore,Sound(audio)),pausedAfter=(bool)Get(audio,"paused")!,loopAfter=LoopMode();
    long appliedRevision=Convert.ToInt64(Get(audio,"revision"));
    bool pass=sameSound&&audio.Opened&&appliedRevision==rev&&positionAfter>=positionBefore&&(!expectedPaused||positionAfter==positionBefore)&&pausedBefore==expectedPaused&&pausedAfter==expectedPaused&&loopBefore==expectedLoop&&loopAfter==expectedLoop&&Playing(audio)==!expectedPaused;
    volumePass&=pass;volumeChecks.Add(new{phase,pass,revision=rev,appliedRevision,sameSound,positionBefore,positionAfter,pausedBefore,pausedAfter,loopBefore,loopAfter});observations.Add(Observe(phase,audio));
   }
   Apply(1,"play");Pump(350);observations.Add(Observe("play",audio));
   bool audioOpened=audio.Opened;if(!audioOpened)throw new Exception("Native audio did not open: "+string.Join(",",audio.Warnings));
   var playStart=Position(audio);Pump(350);var playEnd=Position(audio);bool advances=playEnd>playStart&&Playing(audio);
   Volume(2,"volume-playing",false,false);
   Apply(3,"pause");Pump(150);var pausedStart=Position(audio);Pump(350);var pausedEnd=Position(audio);bool pausePreservesDecoder=pausedStart==pausedEnd&&!Playing(audio)&&audio.Opened;observations.Add(Observe("pause",audio));
   Volume(4,"volume-paused",true,false);
   Apply(5,"resume");Pump(350);bool resumes=Position(audio)>pausedEnd&&Playing(audio);observations.Add(Observe("resume",audio));
   Apply(6,"play",true);Pump(150);Apply(7,"pause");Pump(150);bool loopConfigured;
   Volume(8,"volume-paused-loop",true,true);
   var providers=Providers(audio);double loopStart;
   if(Stream(audio) is object nativeStream){loopConfigured=providers.Any(p=>p=="NAudio.Extras.LoopStream");var total=(TimeSpan)Get(nativeStream,"TotalTime")!;nativeStream.GetType().GetProperty("CurrentTime")!.SetValue(nativeStream,total-TimeSpan.FromMilliseconds(200));loopStart=Position(audio);}
   else{dynamic player=Player(audio)!;loopConfigured=(bool)player.settings.getMode("loop");player.controls.currentPosition=Math.Max(0,(double)player.currentMedia.duration-.2);loopStart=Position(audio);}
   Apply(9,"resume");Pump(800);var loopEnd=Position(audio);bool loopBoundary=loopEnd<loopStart&&Playing(audio);observations.Add(Observe("loop-boundary",audio));
   audio.Dispose();bool audioClosed=!audio.Opened;observations.Add(Observe("disposed",audio));
   bool audioPass=constructorWithoutPlayback&&advances&&pausePreservesDecoder&&resumes&&loopConfigured&&loopBoundary&&audioClosed&&audio.Warnings.Count==0&&backendErrorsPass&&mutedVolumePreserved&&volumePass;
   File.WriteAllText(Path.Combine(root,"verification.json"),JsonSerializer.Serialize(new{pass=audioPass&&progressPass&&chartPass,runs,buttons,nativeIds,hitIds,urls,nativeImages=images.RegisteredCount,imageWarnings=images.Warnings,chartPass,chartCheck,progressPass,progressChecks,audioPass,volumePass,volumeChecks,backendErrorsPass,mutedVolumePreserved,constructorWithoutPlayback,audioOpened,advances,playStart,playEnd,pausePreservesDecoder,pausedStart,pausedEnd,resumes,loopConfigured,loopBoundary,loopStart,loopEnd,audioClosed,audioWarnings=audio.Warnings,audioVolume=0,audioPath,observations,audibilityVerified=false,engine=typeof(PluginManager).Assembly.FullName},new JsonSerializerOptions{WriteIndented=true}));
   if(!audioPass||!progressPass||!chartPass)throw new Exception("Native UI/audio checks failed; see verification.json");
   args[0].intValue=1;
  }catch(Exception error){File.WriteAllText(Path.Combine(root,"error.txt"),error.ToString());args[0].intValue=-1;}
 }
}

'@
[IO.File]::WriteAllText((Join-Path $outputPath 'Probe.cs'),$probeSource,[Text.UTF8Encoding]::new($false))
$engineReference=[Security.SecurityElement]::Escape($engineAssembly)
$pluginReference=[Security.SecurityElement]::Escape((Join-Path $pluginPath 'EraUma.Plugin.dll'))
$project=@"
<Project Sdk="Microsoft.NET.Sdk"><PropertyGroup><TargetFramework>net10.0-windows</TargetFramework><UseWindowsForms>true</UseWindowsForms><ImplicitUsings>enable</ImplicitUsings><Nullable>enable</Nullable><AssemblySearchPaths>{HintPathFromItem};{TargetFrameworkDirectory};{RawFileName}</AssemblySearchPaths></PropertyGroup><ItemGroup><Compile Remove="runtime/**/*.cs"/><Reference Include="Emuera"><HintPath>$engineReference</HintPath><Private>false</Private></Reference><Reference Include="EraUma.Plugin"><HintPath>$pluginReference</HintPath><Private>false</Private></Reference></ItemGroup></Project>
"@
[IO.File]::WriteAllText((Join-Path $outputPath 'UiProbe.csproj'),$project)
$buildOutput=& dotnet build (Join-Path $outputPath 'UiProbe.csproj') -c Release --nologo -v:q 2>&1
$buildOutput | Set-Content -LiteralPath (Join-Path $outputPath 'build.txt') -Encoding utf8
if($LASTEXITCODE -ne 0){throw "Native UI probe build failed: $outputPath\build.txt"}
Copy-Item -LiteralPath (Join-Path $outputPath 'bin\Release\net10.0-windows\UiProbe.dll') -Destination $pluginPath
$erb="@SYSTEM_TITLE`n#DIM VERDICT`nCALLSHARP UiProbe(VERDICT)`nPRINTFORML Renderer result: {VERDICT}`nQUIT`n"
[IO.File]::WriteAllText((Join-Path $runtimePath 'ERB\Probe.ERB'),$erb,[Text.UTF8Encoding]::new($true))
$referenceHash=(Get-FileHash -LiteralPath $referenceExe -Algorithm SHA256).Hash
$runtimeHash=(Get-FileHash -LiteralPath (Join-Path $runtimePath 'Emuera.exe') -Algorithm SHA256).Hash
if($referenceHash -ne $runtimeHash){throw 'Exact bundled runtime hash differs'}
$testProcess=Start-Process -FilePath (Join-Path $runtimePath 'Emuera.exe') -WorkingDirectory $runtimePath -WindowStyle Hidden -PassThru
$reportPath=Join-Path $pluginPath 'verification.json'
$errorPath=Join-Path $pluginPath 'error.txt'
try {
    $deadline=[DateTime]::UtcNow.AddSeconds($TimeoutSeconds)
    while(!(Test-Path -LiteralPath $reportPath) -and !(Test-Path -LiteralPath $errorPath)){
        if($testProcess.HasExited){throw "Owned Emuera process exited before reporting: $($testProcess.ExitCode)"}
        if([DateTime]::UtcNow -gt $deadline){throw "Native UI probe timed out; evidence: $outputPath"}
        Start-Sleep -Milliseconds 150
    }
    if((Test-Path -LiteralPath $errorPath) -and !(Test-Path -LiteralPath $reportPath)){throw [IO.File]::ReadAllText($errorPath)}
    $report=Get-Content -LiteralPath $reportPath -Raw | ConvertFrom-Json
    $report | Add-Member -NotePropertyName engineExeSha256 -NotePropertyValue $runtimeHash
    $report | Add-Member -NotePropertyName pluginDllSha256 -NotePropertyValue (Get-FileHash -LiteralPath (Join-Path $pluginPath 'EraUma.Plugin.dll') -Algorithm SHA256).Hash
    $report | Add-Member -NotePropertyName audioSha256 -NotePropertyValue (Get-FileHash -LiteralPath $AudioPath -Algorithm SHA256).Hash
    $report | Add-Member -NotePropertyName evidenceDirectory -NotePropertyValue $outputPath
    if(Test-Path -LiteralPath $errorPath){$report | Add-Member -NotePropertyName probeError -NotePropertyValue ([IO.File]::ReadAllText($errorPath))}
    $report | ConvertTo-Json -Depth 30 | Set-Content -LiteralPath (Join-Path $outputPath 'native-ui-summary.json') -Encoding utf8
    if(!$report.pass){throw "Native UI/audio failed: $outputPath"}
    Write-Output "PASS: Native UI and audio lifecycle. Evidence: $outputPath"
} finally {
    # Only this isolated test's owned process is stopped. No OS UI input is sent.
    if(!$testProcess.HasExited){Stop-Process -Id $testProcess.Id; $testProcess.WaitForExit()}
}
