using EraUma.Compatibility;
using MinorShift.Emuera.Runtime.Utils.PluginSystem;
using System.Reflection;
using System.Text.Json;

namespace EraUma.Plugin;
public sealed class PluginManifest : PluginManifestAbstract
{
    public PluginManifest() { methods.Add(new Bridge()); }
    public override string PluginName => "EraUma Emuera.NET";
    public override string PluginDescription => "Standalone original eraUma game through a managed JavaScript bridge.";
    public override string PluginVersion => "0.3.1";
    public override string PluginAuthor => "ERA CrossWorld";
}
public sealed class Bridge : IPluginMethod
{
    Session? session;
    long[] lastButtons=[];
    readonly Dictionary<long,string> urls=new();
    long nextUrl=-900000;
    NativeImages? images;
    NativeAudio? audio;
    int tailPadding;
    long renderedLineCount=-1;
    int discardedInputEchoLines;
    readonly List<NativeRow> nativeRows=[];
    int fullFrames,partialFrames,preservedLines;
    int frameWidth,frameHeight;
    string lastActionError="";
    string? lastOpenedUrl;
    sealed record NativeRow(string Key,int Lines,bool Interactive);
    static (string Key,bool Interactive) RowIdentity(OutputEvent item)
    {
        if(item.Kind=="button")return (item.Kind+":"+item.Button+":"+item.Text,true);
        if(item.Kind!="row-start")return (item.Kind+":"+item.Text,false);
        using var json=JsonDocument.Parse(item.Text);
        bool Interactive(JsonElement value){
            if(value.ValueKind==JsonValueKind.Array)return value.EnumerateArray().Any(Interactive);
            if(value.ValueKind!=JsonValueKind.Object)return false;
            if(value.TryGetProperty("type",out var type)&&type.GetString()=="button")return true;
            if(value.TryGetProperty("url",out var url)&&url.ValueKind==JsonValueKind.String&&!string.IsNullOrEmpty(url.GetString()))return true;
            return value.EnumerateObject().Any(p=>Interactive(p.Value));
        }
        bool active=Interactive(json.RootElement);
        // Epoch changes only affect choices. An unchanged static header can stay on screen.
        var key=active?item.Text:string.Join("|",json.RootElement.EnumerateObject().Where(p=>p.Name!="inactive").Select(p=>p.Name+":"+p.Value.GetRawText()));
        return ("row:"+key,active);
    }
    readonly string root=Path.GetFullPath(Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location)!,".."));
    public string Name => "EraUmaBridge";
    public string Description => "start/resume/status/report via reference arguments";
    public void Execute(PluginMethodParameter[] args)
    {
        if(args.Length!=4) throw new ArgumentException("Expected action, input, state reference, message reference");
        var api=PluginManager.GetInstance();
        if(args[0].strValue!="report")lastActionError="";
        images??=new NativeImages(root);
        audio??=new NativeAudio();
        try
        {
            switch(args[0].strValue)
            {
                case "input-kind":
                    args[2].intValue=session?.WaitingForContinue==true?1:0;
                    args[3].strValue="";return;
                case "start":
                    session=new Session(Path.Combine(root,"sav"),()=>api.GetIntVar("GLOBAL",0),x=>api.SetIntVar("GLOBAL",x,0));
                    session.Start(File.ReadAllText(Path.Combine(root,"probe.js")));break;
                case "game":case "timer-game":
                    var paths=JsonSerializer.Deserialize<Dictionary<string,string>>(File.ReadAllText(Path.Combine(root,"game-paths.json")))!;
                    session=new Session(Path.Combine(root,"sav-game"),()=>api.GetIntVar("GLOBAL",0),x=>api.SetIntVar("GLOBAL",x,0),true);
                    session.LoadGame(Path.GetFullPath(paths["source"],root),Path.GetFullPath(paths["engine"],root),Path.GetFullPath(paths["kojo"],root),start:args[0].strValue=="game",
                        resourceRoot:Path.GetFullPath(paths.GetValueOrDefault("resources","game"),root),httpCacheDirectory:Path.Combine(root,"image-cache"),
                        languagePackDirectory:Path.GetFullPath(paths.GetValueOrDefault("languages","game/language-packs"),root),presentationDelays:true);
                    if(args[0].strValue=="timer-game")session.Start(File.ReadAllText(Path.Combine(root,"probe.js")));
                    break;
                case "ui-game":
                    var uiPaths=JsonSerializer.Deserialize<Dictionary<string,string>>(File.ReadAllText(Path.Combine(root,"game-paths.json")))!;
                    var uiSave=Path.Combine(root,"sav-ui-"+Guid.NewGuid().ToString("N"));
                    var fixture=Path.GetFullPath(uiPaths.GetValueOrDefault("fixtures","../../tests/fixtures"),root);
                    Directory.CreateDirectory(Path.Combine(uiSave,"sav"));
                    foreach(var file in Directory.GetFiles(Path.Combine(fixture,"sav"),"*.sav"))File.Copy(file,Path.Combine(uiSave,"sav",Path.GetFileName(file)));
                    session=new Session(uiSave,()=>api.GetIntVar("GLOBAL",0),x=>api.SetIntVar("GLOBAL",x,0),true);
                    session.LoadGame(Path.GetFullPath(uiPaths["source"],root),Path.GetFullPath(uiPaths["engine"],root),Path.GetFullPath(uiPaths["kojo"],root),
                        resourceRoot:Path.GetFullPath(uiPaths.GetValueOrDefault("resources","game"),root),presentationDelays:true);
                    break;
                case "capture":
                    if(!System.Text.RegularExpressions.Regex.IsMatch(args[1].strValue,"^[A-Za-z0-9_-]{1,60}$"))throw new ArgumentException("Invalid capture name");
                    UiRenderer.CaptureCurrentWindow(Path.Combine(root,"results","screen-"+args[1].strValue+".png"));
                    File.WriteAllText(Path.Combine(root,"results","layout-"+args[1].strValue+".json"),session!.EvaluateJson("__screen.map(row=>row.layout||null)"));
                    break;
                case "ui-advance":session!.AdvanceTimers(500);break;
                case "resume":
                    if(long.TryParse(args[1].strValue,out var urlId)&&urls.TryGetValue(urlId,out var url)){
                        System.Diagnostics.Process.Start(new System.Diagnostics.ProcessStartInfo(url){UseShellExecute=true});
                        lastOpenedUrl=url;
                        session!.Execute("__redraw();");
                        break;
                    }
                    (session??throw new InvalidOperationException("Session not started")).Resume(args[1].strValue);break;
                case "ui-open-resource":
                    var resourceLink=urls.FirstOrDefault(x=>x.Value=="https://umaera.gitgud.site/data/uma-resource/full.html");
                    if(resourceLink.Key==0)throw new InvalidOperationException("Original resource download link is unavailable");
                    System.Diagnostics.Process.Start(new System.Diagnostics.ProcessStartInfo(resourceLink.Value){UseShellExecute=true});
                    lastOpenedUrl=resourceLink.Value;session!.Execute("__redraw();");break;
                case "tick":
                    (session??throw new InvalidOperationException("Session not started")).Pump();break;
                case "exit":
                    if(session?.State is "input" or "timer")throw new InvalidOperationException("Finish the game session before exiting");
                    var ui=SynchronizationContext.Current??throw new InvalidOperationException("Emuera UI context is unavailable");
                    audio.Dispose();images.Dispose();
                    ui.Post(_=>System.Windows.Forms.Application.ExitThread(),null);break;
                case "skip-text":
                    for(var n=0;n<300;n++) {
                        if(session?.State=="timer")session.AdvanceTimers(10_000);
                        else if(session?.State=="input"&&(lastButtons.Length==0||session.EvaluateJson("!!__inputConfig.any")=="true"))session.Resume("");
                        else break;
                        Render(session.Drain());
                    }
                    break;
                case "ui-return-main":
                    for(int n=0;n<150;n++){
                        if(lastButtons.Contains(405)&&lastButtons.Contains(205))break;
                        if(session?.State=="timer")session.AdvanceTimers(10_000);
                        else if(session?.State=="input"){
                            var values=lastButtons.Distinct().ToArray();
                            var pick=values.Contains(999)?999:values.Contains(1099)?1099:values.Contains(99)?99:values.Contains(3)?3:values.Contains(1)?1:values.Where(x=>x>=0&&x<=300).DefaultIfEmpty(long.MinValue).Min();
                            if(values.Length==0)session.Resume("");
                            else if(pick!=long.MinValue)session.Resume(pick.ToString(System.Globalization.CultureInfo.InvariantCulture));
                            else throw new InvalidOperationException("No bounded original acknowledgment: "+string.Join(',',values));
                        }else throw new InvalidOperationException("UI verification cannot continue: "+session?.Error);
                        Render(session.Drain());
                    }
                    if(!lastButtons.Contains(405)||!lastButtons.Contains(205))throw new InvalidOperationException("UI verification did not return to main");
                    break;
                case "assert-menu":
                    if(session?.State!="input" || !lastButtons.Contains(205))throw new InvalidOperationException("Original main menu not reached");
                    break;
                case "assert-timer-buttons":
                    if(session?.State!="input"||!lastButtons.Contains(1)||!lastButtons.Contains(3))throw new InvalidOperationException("Both early and late timer choices must remain active");
                    break;
                case "assert-timer-finish":
                    if(session?.State!="done"||session.EvaluateJson("era.get('global:0')")!="103")throw new InvalidOperationException("Timer choice did not update original game data");
                    break;
                case "checkpoint-save":
                    if(session?.State!="input")throw new InvalidOperationException("Game not waiting for input");
                    session.Execute("var __saved=false;era.saveData(6,'runtime checkpoint').then(ok=>__saved=ok);");
                    if(session.EvaluateJson("__saved")!="true")throw new IOException("Checkpoint save failed");
                    File.WriteAllText(Path.Combine(root,"checkpoint.json"),session.EvaluateJson("__game.data"));
                    break;
                case "checkpoint-load":
                    var restorePaths=JsonSerializer.Deserialize<Dictionary<string,string>>(File.ReadAllText(Path.Combine(root,"game-paths.json")))!;
                    session=new Session(Path.Combine(root,"sav-game"),()=>api.GetIntVar("GLOBAL",0),x=>api.SetIntVar("GLOBAL",x,0),true);
                    session.LoadGame(Path.GetFullPath(restorePaths["source"],root),Path.GetFullPath(restorePaths["engine"],root),Path.GetFullPath(restorePaths["kojo"],root),start:false);
                    session.Start("if(!await era.loadData(6))throw Error('load failed');");
                    if(session.State!="done" || session.EvaluateJson("__game.data")!=File.ReadAllText(Path.Combine(root,"checkpoint.json")))throw new IOException("Restored checkpoint differs");
                    break;
                case "scenario":case "scenario-restore":
                    var scenarioPaths=JsonSerializer.Deserialize<Dictionary<string,string>>(File.ReadAllText(Path.Combine(root,"game-paths.json")))!;
                    var result=VerificationScenario.Run(Path.GetFullPath(scenarioPaths["source"],root),Path.GetFullPath(scenarioPaths["engine"],root),
                        Path.GetFullPath(scenarioPaths["kojo"],root),Path.GetFullPath(scenarioPaths["fixtures"],root),
                        Path.GetFullPath(scenarioPaths["verificationSave"],root),args[0].strValue=="scenario-restore");
                    Directory.CreateDirectory(Path.Combine(root,"results"));
                    File.WriteAllText(Path.Combine(root,"results",args[0].strValue+".json"),result);
                    session=new Session(Path.Combine(root,"sav"),()=>api.GetIntVar("GLOBAL",0),x=>api.SetIntVar("GLOBAL",x,0));
                    session.Start("era.println('Original gameplay regression passed');");break;
                case "report":
                    Directory.CreateDirectory(Path.Combine(root,"results"));
                    File.WriteAllText(Path.Combine(root,"results","runtime.json"),JsonSerializer.Serialize(new {
                        state=session?.State,error=session?.Error,bridgeError=lastActionError,diagnostics=session?.Diagnostics,global0=api.GetIntVar("GLOBAL",0),erbVerdict=args[1].strValue,lastButtons,
                        resources=session?.Resources,imageWarnings=images.Warnings,audioWarnings=audio.Warnings,audioOutput=audio.OutputDevice,nativeImages=images.RegisteredCount,urlButtons=urls,
                        redraw=new{fullFrames,partialFrames,preservedLines,discardedInputEchoLines},
                        lastOpenedUrl,
                        engine=typeof(PluginManager).Assembly.FullName,jsRuntime=typeof(Jint.Engine).Assembly.FullName,
                        mode=File.Exists(Path.Combine(root,"verification-mode.txt"))?File.ReadAllText(Path.Combine(root,"verification-mode.txt")):"automatic test"
                    },new JsonSerializerOptions{WriteIndented=true}));break;
                default:throw new ArgumentException("Unknown action");
            }
            Render(session?.Drain()??Array.Empty<OutputEvent>());
            void Render(IReadOnlyList<OutputEvent> items)
            {
              var renderer=new UiRenderer(api,images.Resolve,RegisterUrl);
              bool inRow=false;
              var console=NativeImages.EngineConsole();
              // INPUTS/TINPUTS prints the accepted native input after our frame.
              // Those echo lines are not part of the original game's logical rows.
              // Remove them before removing padding or calculating a retained prefix.
              // Otherwise each real input leaves an old image/button row behind.
              if(items.Count>0&&renderedLineCount>=0){
                long actual=(long)console.GetType().GetProperty("LineCount")!.GetValue(console)!;
                if(actual>renderedLineCount){
                  int extra=checked((int)(actual-renderedLineCount));
                  console.GetType().GetMethod("deleteLine")!.Invoke(console,[extra]);
                  discardedInputEchoLines+=extra;
                }else if(actual<renderedLineCount){nativeRows.Clear();tailPadding=0;}
              }
              if(items.Count>0&&tailPadding>0){console.GetType().GetMethod("deleteLine")!.Invoke(console,[tailPadding]);tailPadding=0;}
              var newRows=new List<NativeRow>();
              int viewWidth=(int)console.GetType().GetProperty("ClientWidth")!.GetValue(console)!;
              int viewHeight=(int)console.GetType().GetProperty("ClientHeight")!.GetValue(console)!;
              bool replace=items.Any(x=>x.Kind=="clear");
              int preserve=0,rowIndex=0;
              if(replace){
                bool nested=false;
                foreach(var item in items){
                  if(item.Kind=="clear"){newRows.Clear();nested=false;continue;}
                  if(item.Kind=="row-end"){nested=false;continue;}
                  if(nested)continue;
                  if(item.Kind=="row-start")nested=true;
                  if(item.Kind is "audio" or "background" or "title")continue;
                  var identity=RowIdentity(item);newRows.Add(new(identity.Key,0,identity.Interactive));
                }
                if(images.RegisteredCount<96&&frameWidth==viewWidth&&frameHeight==viewHeight){
                  while(preserve<Math.Min(nativeRows.Count,newRows.Count)&&!newRows[preserve].Interactive&&nativeRows[preserve].Key==newRows[preserve].Key){newRows[preserve]=newRows[preserve] with{Lines=nativeRows[preserve].Lines};preserve++;}
                }
                if(preserve>0){
                  int retained=nativeRows.Take(preserve).Sum(x=>x.Lines);
                  int remove=nativeRows.Skip(preserve).Sum(x=>x.Lines);
                  if(remove>0)console.GetType().GetMethod("deleteLine")!.Invoke(console,[remove]);
                  partialFrames++;preservedLines+=retained;
                }else fullFrames++;
              }
              if(items.Count>0)lastButtons=items.Where(x=>x.Kind=="button").Select(x=>x.Button).ToArray();
              foreach(var item in items) {
                if(item.Kind=="clear") {if(preserve==0){api.ClearDisplay();images.Clear();urls.Clear();nextUrl=-900000;}inRow=false;}
                else if(item.Kind=="row-start") {PrintRow(item,()=>renderer.Render(item.Text));inRow=true;}
                else if(item.Kind=="row-end")inRow=false;
                else if(inRow)continue;
                else if(item.Kind=="audio"){using var state=JsonDocument.Parse(item.Text);audio.Apply(state.RootElement);}
                else if(item.Kind=="background"){using var state=JsonDocument.Parse(item.Text);images.SetBackground(state.RootElement);}
                else if(item.Kind=="title"){foreach(System.Windows.Forms.Form form in System.Windows.Forms.Application.OpenForms)if(form.GetType().Assembly==typeof(PluginManager).Assembly)form.Text=item.Text+" · Emuera.NET";}
                else if(item.Kind=="notice"){PrintRow(item,()=>api.PrintHtml("<font color='#7DD3FC'>"+System.Net.WebUtility.HtmlEncode(item.Text)+"</font>"));}
                else if(item.Kind=="button") {PrintRow(item,()=>{api.PrintButton("["+item.Button+"] "+item.Text,item.Button);api.PrintNewLine();});}
                else {PrintRow(item,()=>{api.Print(item.Text);if(item.Kind=="line"||item.Kind=="diagnostic")api.PrintNewLine();});}
              }
              api.FlushConsole();
              if(items.Count>0){nativeRows.Clear();if(replace)nativeRows.AddRange(newRows);frameWidth=viewWidth;frameHeight=viewHeight;}
              // Emuera bottom-aligns short console histories. Keep game screens at the top
              // using owned blank lines, removed before the next frame or appended output.
              if(items.Count>0&&session?.Resources is not null){
                var height=(int)console.GetType().GetProperty("ClientHeight")!.GetValue(console)!;
                var count=(long)console.GetType().GetProperty("LineCount")!.GetValue(console)!;
                var visible=Math.Max(1,height/NativeImages.EngineConfig("LineHeight",26));
                tailPadding=Math.Max(0,visible-checked((int)count));
                for(int n=0;n<tailPadding;n++)api.PrintNewLine();
                api.FlushConsole();
              }
              if(items.Count>0)renderedLineCount=(long)console.GetType().GetProperty("LineCount")!.GetValue(console)!;
              void PrintRow(OutputEvent item,Action draw){
                int index=rowIndex++;
                if(replace&&index<preserve)return;
                long before=(long)console.GetType().GetProperty("LineCount")!.GetValue(console)!;
                draw();api.FlushConsole();
                if(replace&&index<newRows.Count)newRows[index]=newRows[index] with{Lines=checked((int)((long)console.GetType().GetProperty("LineCount")!.GetValue(console)!-before))};
              }
              long RegisterUrl(string value){
                if(!Uri.TryCreate(value,UriKind.Absolute,out var uri)||uri.Scheme is not ("http" or "https")||!string.IsNullOrEmpty(uri.UserInfo))return 0;
                var existing=urls.FirstOrDefault(x=>x.Value==uri.AbsoluteUri);
                if(existing.Key!=0)return existing.Key;
                var id=nextUrl--;urls[id]=uri.AbsoluteUri;return id;
              }
            }
            args[2].intValue=session?.State switch {"input"=>session.HasTimers?4:1,"timer"=>3,"done"=>2,"error"=>-1,_=>0};
            args[3].strValue=session?.Error??"";
        }
        catch(Exception error) {lastActionError=error.ToString();args[2].intValue=-1;args[3].strValue=lastActionError;}
    }
}
