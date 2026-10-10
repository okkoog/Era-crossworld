param(
 [string]$RuntimePath,
 [string]$PluginDirectory,
 [string]$OutputRoot,
 [int]$Samples=30,
 [int]$Warmup=8,
 [int]$TimeoutSeconds=300,
 [switch]$SkipScheduling
)
$ErrorActionPreference='Stop'
if($Samples -lt 10 -or $Samples -gt 150 -or $Warmup -lt 0 -or $Warmup -gt 30){throw 'Samples must be 10..150 and Warmup 0..30.'}
$portPath=Split-Path $PSScriptRoot
$repoPath=(Resolve-Path -LiteralPath (Join-Path $portPath '..\..')).Path
if(!$OutputRoot){$OutputRoot=[IO.Path]::GetFullPath((Join-Path $repoPath '..\..\outputs'))}
[IO.Directory]::CreateDirectory($OutputRoot)|Out-Null
$template=[IO.File]::ReadAllText((Join-Path $PSScriptRoot 'Test-FramePaint.ps1'))
$template=$template.Replace('$portPath=Split-Path $PSScriptRoot',('$portPath='''+$portPath.Replace("'","''")+''''))
$measureSource=@'
using System.Diagnostics;
using System.Drawing;
using System.Drawing.Imaging;
using System.Reflection;
using System.Text.Json;
using System.Windows.Forms;
using MinorShift.Emuera.Runtime.Utils.PluginSystem;
using EraUma.Plugin;
using EraUma.Compatibility;

public sealed class PluginManifest:PluginManifestAbstract {
 public PluginManifest(){methods.Add(new FramePaintProbe());}
 public override string PluginName=>"Owned original race performance probe";
 public override string PluginDescription=>"Low overhead timing and native frame attribution";
 public override string PluginVersion=>"2";
 public override string PluginAuthor=>"local";
}
public sealed class FramePaintProbe:IPluginMethod {
 const int Samples=__SAMPLES__,Warmup=__WARMUP__;
 static readonly bool SkipScheduling=__SKIP_SCHEDULING__;
 const string FrontendTimingMode="__FRONTEND_TIMING_MODE__";
 const int FixedFrontendWaitMs=__FIXED_FRONTEND_WAIT_MS__;
 static readonly BindingFlags Flags=BindingFlags.Instance|BindingFlags.Public|BindingFlags.NonPublic;
 static object? Get(object o,string n)=>o.GetType().GetProperty(n,Flags)?.GetValue(o)??o.GetType().GetField(n,Flags)?.GetValue(o);
 static void Set(object o,string n,object value){var f=o.GetType().GetField(n,Flags);if(f is not null)f.SetValue(o,value);else o.GetType().GetProperty(n,Flags)!.SetValue(o,value);}
 static object? Call(object o,string n,params object[] values)=>o.GetType().GetMethod(n,Flags)?.Invoke(o,values);
 readonly Bridge bridge=new();
 readonly List<object> phases=[];
 readonly List<object> nativeCycles=[];
 readonly List<double> nativeFrameIntervals=[];
 readonly List<double> requestedNativeWaits=[];
 readonly Stopwatch nativeClock=new();
 System.Windows.Forms.Timer? timer;
 Session game=null!;
 object console=null!;
 ConstructorInfo frameConstructor=null!;
 MethodInfo nativeOnPaint=null!;
 long paintCount,insideBridgePaints,outsideBridgePaints;
 bool insideBridge;
 int realFrames;
 double previousFrameMs;
 bool recordingNative;
 readonly string root=Path.GetFullPath(Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location)!,".."));
 public string Name=>"FramePaintProbe";
 public string Description=>"Original race low overhead performance measurement";
 void Action(string action,string input=""){
  PluginMethodParameter[] a=[new(action),new(input),new(0L),new("")];
  insideBridge=true;try{bridge.Execute(a);}finally{insideBridge=false;}
  if(a[2].intValue<0)throw new Exception(a[3].strValue);
 }
 long Frames=>Convert.ToInt64(Get(bridge,"fullFrames"))+Convert.ToInt64(Get(bridge,"partialFrames"));
 long Lines=>Convert.ToInt64(Get(console,"LineCount"));
 IDisposable Frame()=> (IDisposable)frameConstructor.Invoke([console]);
 void StartRace(){
  Action("ui-game");game=(Session)Get(bridge,"session")!;
  Action("resume","1");Action("skip-text");Action("resume","2");Action("skip-text");Action("resume","1");Action("ui-return-main");
  Action("resume","406");Action("skip-text");Action("resume","3");Action("ui-return-main");
  Action("resume","102");Action("skip-text");Action("resume","100");Action("skip-text");Action("resume","3");Action("skip-text");
  Action("resume","3");
  if(!game.HasTimers||!game.EvaluateJson("__screen.map(g=>g.layout||null)").Contains("progress"))throw new Exception("Original race did not start: "+game.Error);
 }
 static object Stats(IEnumerable<double> source){
  var values=source.Order().ToArray();if(values.Length==0)return new{count=0};
  return new{count=values.Length,minMs=values.Min(),medianMs=values[values.Length/2],p95Ms=values[(int)Math.Ceiling(values.Length*.95)-1],maxMs=values.Max(),meanMs=values.Average()};
 }
 void WholeUpdates(){
  var costs=new List<double>();var samples=new List<object>();
  for(int n=0;n<Warmup+Samples;n++){
   long beforePaint=paintCount,beforeFrame=Frames,beforeAllocation=GC.GetAllocatedBytesForCurrentThread();
   var watch=Stopwatch.StartNew();Action("ui-advance");watch.Stop();
   if(game.State=="error"||!game.HasTimers)throw new Exception("Race left playback at "+n+": "+game.Error);
   if(n<Warmup)continue;
   costs.Add(watch.Elapsed.TotalMilliseconds);
   samples.Add(new{index=n-Warmup,totalMs=watch.Elapsed.TotalMilliseconds,nativePaintEvents=paintCount-beforePaint,renderedFrames=Frames-beforeFrame,allocatedManagedBytesOnCallingThread=GC.GetAllocatedBytesForCurrentThread()-beforeAllocation});
  }
  phases.Add(new{mode="whole-bridge-update",warmupFrames=Warmup,measuredFrames=Samples,virtualAdvanceMs=500,total=Stats(costs),samples,note="Whole production Bridge.ui-advance action includes original JS timer pump and native rendering. No frontend scheduling wait is included."});
 }
 void FinerAttribution(){
  var api=PluginManager.GetInstance();var images=(NativeImages)Get(bridge,"images")!;
  var renderer=new UiRenderer(api,images.Resolve,_=>-900000);
  using var json=JsonDocument.Parse(game.EvaluateJson("__screen.map(g=>g.layout||null)"));
  var rows=json.RootElement.EnumerateArray().Where(x=>x.ValueKind==JsonValueKind.Object).Select(x=>x.GetRawText()).ToArray();
  File.WriteAllText(Path.Combine(root,"frozen-race-layouts.json"),"["+string.Join(',',rows)+"]");
  using var bitmap=new Bitmap(Convert.ToInt32(Get(console,"ClientWidth")),Convert.ToInt32(Get(console,"ClientHeight")),PixelFormat.Format32bppPArgb);
  using var graphics=Graphics.FromImage(bitmap);graphics.SetClip(new Rectangle(Point.Empty,bitmap.Size));
  var paints=new List<double>();var snapshots=new List<double>();var commits=new List<double>();var warmBuilds=new List<double>();
  for(int n=0;n<Warmup+Samples;n++){
   graphics.SetClip(new Rectangle(Point.Empty,bitmap.Size));
   var watch=Stopwatch.StartNew();nativeOnPaint.Invoke(console,[graphics]);watch.Stop();if(n>=Warmup)paints.Add(watch.Elapsed.TotalMilliseconds);
  }
  for(int n=0;n<Warmup+Samples;n++){
   var watch=Stopwatch.StartNew();var frame=Frame();watch.Stop();double snapshot=watch.Elapsed.TotalMilliseconds;
   watch.Restart();frame.Dispose();watch.Stop();if(n>=Warmup){snapshots.Add(snapshot);commits.Add(watch.Elapsed.TotalMilliseconds);}
  }
  for(int n=0;n<Warmup+Samples;n++){
   var watch=Stopwatch.StartNew();foreach(var row in rows)renderer.Build(row);watch.Stop();if(n>=Warmup)warmBuilds.Add(watch.Elapsed.TotalMilliseconds);
  }
  phases.Add(new{mode="frozen-race-components",warmupFrames=Warmup,measuredFrames=Samples,rowGroups=rows.Length,nativeOnPaintOnly=Stats(paints),snapshotConstructorOnly=Stats(snapshots),snapshotDisposeCommitOnly=Stats(commits),warmImageCacheBuildOnly=Stats(warmBuilds),note="Frozen original race frame. Native OnPaint uses a reused owned bitmap without capture or encoding. Constructor timing measures the selected NativeFrameUpdate implementation, including a previous-frame snapshot only when that implementation requires one. Dispose includes native forced commit painting. Warm Build includes cache hits and existing sprite handles; it omits full-frame cache invalidation."});
  var coldSamples=new List<object>();var ctorTimes=new List<double>();var clearTimes=new List<double>();var buildTimes=new List<double>();var htmlTimes=new List<double>();var disposeTimes=new List<double>();var totalTimes=new List<double>();
  var config=typeof(PluginManager).Assembly.GetType("MinorShift.Emuera.Runtime.Config.Config");
  int lineHeight=Convert.ToInt32(config?.GetProperty("LineHeight",BindingFlags.Public|BindingFlags.Static)?.GetValue(null)??26);
  int visibleLines=Math.Max(1,Convert.ToInt32(Get(console,"ClientHeight"))/Math.Max(1,lineHeight));
  for(int n=0;n<Warmup+Samples;n++){
   var total=Stopwatch.StartNew();var watch=Stopwatch.StartNew();var frame=Frame();watch.Stop();double ctor=watch.Elapsed.TotalMilliseconds;
   double clear=0,build=0,html=0,dispose=0;
   try{
    watch.Restart();
    var quietClear=frame.GetType().GetMethod("ClearDisplay",Flags);
    if(quietClear is not null)quietClear.Invoke(frame,null);else api.ClearDisplay();
    images.Clear();watch.Stop();clear=watch.Elapsed.TotalMilliseconds;
    watch.Restart();var layouts=rows.Select(renderer.Build).ToArray();watch.Stop();build=watch.Elapsed.TotalMilliseconds;
    watch.Restart();foreach(var layout in layouts){api.PrintHtml(layout.Html);for(int line=1;line<layout.LogicalLines;line++)api.PrintNewLine();api.FlushConsole();}
    for(long line=Lines;line<visibleLines;line++)api.PrintNewLine();api.FlushConsole();watch.Stop();html=watch.Elapsed.TotalMilliseconds;
   }finally{watch.Restart();frame.Dispose();watch.Stop();dispose=watch.Elapsed.TotalMilliseconds;}
   total.Stop();if(n<Warmup)continue;
   ctorTimes.Add(ctor);clearTimes.Add(clear);buildTimes.Add(build);htmlTimes.Add(html);disposeTimes.Add(dispose);totalTimes.Add(total.Elapsed.TotalMilliseconds);
   coldSamples.Add(new{index=n-Warmup,snapshotCtorMs=ctor,clearDisplayAndImageCacheMs=clear,coldImageCacheBuildMs=build,nativeHtmlAndPaddingMs=html,finalCommitMs=dispose,totalMs=total.Elapsed.TotalMilliseconds});
  }
  phases.Add(new{mode="forced-cold-image-cache-frame",warmupFrames=Warmup,measuredFrames=Samples,rowGroups=rows.Length,clearMethod=frameConstructor.DeclaringType!.GetMethod("ClearDisplay",Flags) is null?"PluginManager.ClearDisplay":"NativeFrameUpdate.ClearDisplay",snapshotCtor=Stats(ctorTimes),clearDisplayAndImageCache=Stats(clearTimes),coldImageCacheBuild=Stats(buildTimes),nativeHtmlAndPadding=Stats(htmlTimes),finalCommit=Stats(disposeTimes),total=Stats(totalTimes),samples=coldSamples,note="Diagnostic reconstruction of the frozen original race frame with explicit images.Clear every iteration, mirroring the 0.3.2 full-replacement cache policy. It uses the selected NativeFrameUpdate.ClearDisplay when available, otherwise the legacy engine ClearDisplay. Its forced cold-cache cost remains a diagnostic after production cache retention is improved. It does not measure original JS computation or real-clock scheduling."});
 }
 void RunCosts(){
  console=Get(Get(PluginManager.GetInstance(),"expressionMediator")!,"Console")!;
  var window=(Form)Get(console,"Window")!;var picture=(PictureBox)Get(window,"MainPicBox")!;
  window.Opacity=0;window.Show();picture.Paint+=(_,_)=>{paintCount++;if(insideBridge)insideBridgePaints++;else outsideBridgePaints++;};
  var frameType=typeof(Bridge).Assembly.GetType("EraUma.Plugin.NativeFrameUpdate",true)!;
  frameConstructor=frameType.GetConstructor(Flags,null,[typeof(object)],null)??throw new Exception("NativeFrameUpdate(object) constructor is unavailable");
  nativeOnPaint=console.GetType().GetMethod("OnPaint")!;
  var oldState=Get(console,"state")!;Set(console,"state",Enum.Parse(oldState.GetType(),"Running"));
  try{StartRace();WholeUpdates();FinerAttribution();}
  finally{Set(console,"state",oldState);}
  File.WriteAllText(Path.Combine(root,"costs.json"),JsonSerializer.Serialize(new{phases},new JsonSerializerOptions{WriteIndented=true}));
  if(SkipScheduling)Finish();
 }
 void Finish(){
  recordingNative=false;nativeClock.Stop();
  var report=new{pass=true,mode="low-overhead-original-race-performance",phases,nativeScheduling=SkipScheduling?null:new{speedChoice=3,originalDelayMs=250.0/15,frontendTimingMode=FrontendTimingMode,fixedFrontendWaitMs=FixedFrontendWaitMs>=0?(int?)FixedFrontendWaitMs:null,observedRequestedWaitMs=Stats(requestedNativeWaits),cycleCount=nativeCycles.Count,actualRenderedFrames=realFrames,warmupFrameIntervalsExcluded=Warmup,elapsedMs=nativeClock.Elapsed.TotalMilliseconds,committedFramesPerSecond=realFrames/nativeClock.Elapsed.TotalSeconds,nativePaintEvents=paintCount,nativePaintEventsPerSecond=paintCount/nativeClock.Elapsed.TotalSeconds,paintsInsideBridge=insideBridgePaints,paintsOutsideBridge=outsideBridgePaints,outsideBridgePaintsPerSecond=outsideBridgePaints/nativeClock.Elapsed.TotalSeconds,steadyFrameIntervals=Stats(nativeFrameIntervals.Skip(Warmup)),nativeCycles},
   engineFrameThrottleMs=Get(console,"msPerFrame"),canvasWidth=Get(console,"ClientWidth"),canvasHeight=Get(console,"ClientHeight"),
   scope="Exact selected packaged DLL and distributed engine, original race fixture and modules at fastest speed 3. Invisible owned form with ordinary native painting. Paint observers only count events; no PNG, hashing, recursive capture, desktop capture or OS input. Virtual time is used for per-update cost measurements only. Frozen-frame diagnostics separate paint, snapshot, warm layout conversion and deliberately cold image-cache reconstruction. Optional scheduling follows the selected runtime's production Game.ERB with real clock. Paints outside Bridge include frontend input refreshes and any animation timer; they are not a pure interpolation FPS count. Local machine load and hidden-window presentation affect results; this is not a dedicated-engine comparison or a universal FPS limit."};
  string json=JsonSerializer.Serialize(report,new JsonSerializerOptions{WriteIndented=true});
  File.WriteAllText(Path.Combine(root,"performance.json"),json);File.WriteAllText(Path.Combine(root,"frame-paint.json"),json);
 }
 public void Execute(PluginMethodParameter[] a){
  try{
   if(a[0].strValue=="arm"){
    timer=new(){Interval=50};timer.Tick+=(s,e)=>{
     var c=Get(Get(PluginManager.GetInstance(),"expressionMediator")!,"Console")!;
     if(Get(c,"state")?.ToString()!="WaitInput")return;timer.Stop();
     try{RunCosts();Call(c,"PressEnterKey",false,"",true);}catch(Exception error){File.WriteAllText(Path.Combine(root,"error.txt"),error.ToString());}
    };timer.Start();a[2].intValue=1;return;
   }
   if(a[0].strValue=="prepare-native"){
    if(SkipScheduling){a[2].intValue=2;return;}
    StartRace();nativeClock.Restart();recordingNative=true;previousFrameMs=0;paintCount=insideBridgePaints=outsideBridgePaints=0;
    a[0].strValue="tick";insideBridge=true;try{bridge.Execute(a);}finally{insideBridge=false;}return;
   }
   if(a[0].strValue=="tick"&&recordingNative){
    long before=Frames,beforePaint=paintCount;double begin=nativeClock.Elapsed.TotalMilliseconds;
    var watch=Stopwatch.StartNew();insideBridge=true;try{bridge.Execute(a);}finally{insideBridge=false;}watch.Stop();double now=nativeClock.Elapsed.TotalMilliseconds;
    bool changed=Frames>before;
    nativeCycles.Add(new{cycle=nativeCycles.Count,beginMs=begin,requestedWaitMs=requestedNativeWaits.Count>0?requestedNativeWaits[^1]:FixedFrontendWaitMs>=0?(double?)FixedFrontendWaitMs:null,bridgeExecuteMs=watch.Elapsed.TotalMilliseconds,rendered=changed,paintEvents=paintCount-beforePaint});
    if(changed){nativeFrameIntervals.Add(now-previousFrameMs);previousFrameMs=now;realFrames++;}
    if(realFrames>=Samples+Warmup||nativeCycles.Count>=500){Finish();a[2].intValue=2;}return;
   }
   if(a[0].strValue=="timer-delay"&&recordingNative){
    insideBridge=true;try{bridge.Execute(a);}finally{insideBridge=false;}
    requestedNativeWaits.Add(a[2].intValue);return;
   }
   insideBridge=true;try{bridge.Execute(a);}finally{insideBridge=false;}
  }catch(Exception error){File.WriteAllText(Path.Combine(root,"error.txt"),error.ToString());a[2].intValue=-1;a[3].strValue=error.ToString();}
 }
}
'@
$measureSource=$measureSource.Replace('__SAMPLES__',[string]$Samples).Replace('__WARMUP__',[string]$Warmup).Replace('__SKIP_SCHEDULING__',([bool]$SkipScheduling).ToString().ToLowerInvariant())
$replacement='$probeSource=@' + "'`n" + $measureSource + "`n'@"
$generated=[Text.RegularExpressions.Regex]::Replace($template,'(?s)\$probeSource=@''\r?\n.*?\r?\n''@',[Text.RegularExpressions.MatchEvaluator]{param($match)$replacement})
$erbRuntime=if($RuntimePath){$RuntimePath}else{Join-Path $portPath 'artifacts\runtime-Game'}
$productionErbPath=Join-Path $erbRuntime 'ERB\Game.ERB'
if(!(Test-Path -LiteralPath $productionErbPath)){$productionErbPath=Join-Path $erbRuntime 'ERB\Probe.ERB'}
if(!(Test-Path -LiteralPath $productionErbPath)){$productionErbPath=Join-Path $portPath 'bootstrap\Game.ERB'}
$productionErb=[IO.File]::ReadAllText($productionErbPath).Replace('EraUmaBridge','FramePaintProbe').Replace('("game",""','("prepare-native",""')
$adaptiveTiming=$productionErb.Contains('("timer-delay"')
$fixedWait=[Text.RegularExpressions.Regex]::Match($productionErb,'(?:AWAIT|TWAIT|TINPUTS)\s+([0-9]+)')
$fixedWaitValue=if($adaptiveTiming -or !$fixedWait.Success){-1}else{[int]$fixedWait.Groups[1].Value}
$timingMode=if($adaptiveTiming){'earliest-timer-deadline'}else{'fixed-frontend-wait'}
$generated=$generated.Replace('__FRONTEND_TIMING_MODE__',$timingMode).Replace('__FIXED_FRONTEND_WAIT_MS__',[string]$fixedWaitValue)
$productionErb=$productionErb.Replace('CALLSHARP FramePaintProbe("prepare-native"',('CALLSHARP FramePaintProbe("arm","",STATE,MESSAGE)' + "`nWAIT`n" + 'CALLSHARP FramePaintProbe("prepare-native"'))
$generated=[Text.RegularExpressions.Regex]::Replace($generated,'(?s)\$erb=@''\r?\n.*?\r?\n''@',[Text.RegularExpressions.MatchEvaluator]{param($match)'$erb=@' + "'`n" + $productionErb + "`n'@"})
$performanceSummary=' $summary=[ordered]@{pass=$report.pass;mode=$report.mode;scope=$report.scope;phases=@($report.phases | Select-Object * -ExcludeProperty samples);nativeScheduling=$report.nativeScheduling | Select-Object * -ExcludeProperty nativeCycles;pluginDllSha256=(Get-FileHash -LiteralPath (Join-Path $pluginPath ''EraUma.Plugin.dll'') -Algorithm SHA256).Hash;evidenceDirectory=$outputPath}'
$generated=[Text.RegularExpressions.Regex]::Replace($generated,'(?m)^\s*\$summary=\[ordered\]@\{[^\r\n]*\}',[Text.RegularExpressions.MatchEvaluator]{param($match)$performanceSummary})
$generatedPath=Join-Path $OutputRoot ('race-performance-runner-'+[Guid]::NewGuid().ToString('N').Substring(0,8)+'.ps1')
[IO.File]::WriteAllText($generatedPath,$generated,[Text.UTF8Encoding]::new($false))
$arguments=@{OutputRoot=$OutputRoot;TimeoutSeconds=$TimeoutSeconds}
if($RuntimePath){$arguments.RuntimePath=$RuntimePath}
if($PluginDirectory){$arguments.PluginDirectory=$PluginDirectory}
& $generatedPath @arguments
