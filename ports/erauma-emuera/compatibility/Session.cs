using Jint;
using System.Reflection;
using System.Text.Json;
using System.IO.Compression;

namespace EraUma.Compatibility;

public record OutputEvent(string Kind, string Text, long Button = 0);

// All calls are made by the same ERB thread. INPUTS happens outside CALLSHARP.
public sealed class Session
{
    readonly Engine engine;
    readonly Queue<OutputEvent> output = new();
    readonly List<OutputEvent> diagnostics=[];
    readonly string saveDirectory;
    string? hostError;
    long timerOffset;
    bool gameLoaded;
    public ResourceCatalogReport? Resources { get; private set; }
    public Session(string saveDirectory, Func<long> readGlobal, Action<long> writeGlobal, bool gameProfile=false)
    {
        this.saveDirectory = Path.GetFullPath(saveDirectory);
        engine = new Engine(o => o.LimitMemory(gameProfile?2_000_000_000:256_000_000).MaxStatements(gameProfile?20_000_000:2_000_000).TimeoutInterval(TimeSpan.FromSeconds(gameProfile?180:10)).CatchClrExceptions(e=>e is IOException or InvalidDataException or UnauthorizedAccessException));
        engine.SetValue("__emit", new Action<string,string,double>((kind,text,id) => {
            var item=new OutputEvent(kind,text,checked((long)id));
            if(kind=="diagnostic"){diagnostics.Add(item);if(diagnostics.Count>128)diagnostics.RemoveAt(0);}
            if(kind=="clear"){output.Clear();output.Enqueue(item);foreach(var warning in diagnostics)output.Enqueue(warning);}
            else output.Enqueue(item);
        }));
        engine.SetValue("__readGlobal", readGlobal);
        engine.SetValue("__writeGlobal", new Action<double>(value => {
            if (!double.IsFinite(value) || Math.Truncate(value) != value || Math.Abs(value)>9_007_199_254_740_991d)
                throw new ArgumentOutOfRangeException(nameof(value), "Mapped GLOBAL must be a safe integer");
            writeGlobal(checked((long)value));
        }));
        engine.SetValue("__save", new Action<string>(Save));
        engine.SetValue("__load", new Func<string>(Load));
        engine.SetValue("__now",new Func<double>(()=>DateTimeOffset.UtcNow.ToUnixTimeMilliseconds()+timerOffset));
        engine.SetValue("__fileExists",new Func<string,bool>(p=>File.Exists(GamePath(p))||Directory.Exists(GamePath(p))));
        engine.SetValue("__readFile",new Func<string,string>(p=>File.ReadAllText(GamePath(p))));
        engine.SetValue("__writeFile",new Action<string,string>((p,text)=>AtomicWrite(GamePath(p),System.Text.Encoding.UTF8.GetBytes(text))));
        engine.SetValue("__mkdir",new Action<string>(p=>Directory.CreateDirectory(GamePath(p))));
        engine.SetValue("__removeFile",new Action<string>(p=>File.Delete(GamePath(p))));
        engine.SetValue("__gzipSave",new Action<string,string>((text,p)=>{
            using var result=new MemoryStream();
            using(var gzip=new GZipStream(result,CompressionLevel.Optimal,true)) {var bytes=System.Text.Encoding.UTF8.GetBytes(text);gzip.Write(bytes);}
            AtomicWrite(GamePath(p),result.ToArray());
        }));
        engine.SetValue("__gzipLoad",new Action<string,string>((p,target)=>{
            using var file=File.OpenRead(GamePath(p));using var gzip=new GZipStream(file,CompressionMode.Decompress);
            using var reader=new StreamReader(gzip);AtomicWrite(GamePath(target),System.Text.Encoding.UTF8.GetBytes(reader.ReadToEnd()));
        }));
        using var stream = Assembly.GetExecutingAssembly().GetManifestResourceStream("EraUma.Compatibility.era-host.js")!;
        using var reader = new StreamReader(stream);
        engine.Execute(reader.ReadToEnd());
    }
    public void Start(string script) { hostError=null; Run(()=>engine.Execute("__start(async function(){\n"+script+"\n});")); }
    public void Resume(string input) => Run(()=>engine.Invoke("__resume", input));
    public void Quit() => Run(()=>engine.Execute("try{era.quit();}catch(error){if(!__exitRequested)throw error;}if(!__exitRequested)throw Error('Quit was not requested');__state='done';__pending=null;__timers.clear();"));
    public void Pump() {
        Run(()=>engine.Invoke("__pumpTimers"));
        // Emuera gives newly printed buttons a new input generation. Refresh all active
        // choices together after a timer changes the screen so earlier choices stay clickable.
        if(gameLoaded&&output.Count>0)Run(()=>engine.Invoke("__redraw"));
    }
    public void AdvanceTimers(long milliseconds) { if(milliseconds<0)throw new ArgumentOutOfRangeException(nameof(milliseconds));timerOffset=checked(timerOffset+milliseconds);Pump(); }
    public bool HasTimers => engine.Evaluate("__timers.size>0").AsBoolean();
    public bool WaitingForContinue => gameLoaded&&State=="input"&&engine.Evaluate("__inputUsesContinue()").AsBoolean();
    public IReadOnlyList<OutputEvent> Diagnostics => diagnostics.ToArray();
    void Run(Action action) { try { action(); engine.Advanced.ProcessTasks(); } catch(Exception error) { hostError=error.ToString(); } }
    public string State {get { if(hostError is not null)return "error";var state=engine.Evaluate("__state").AsString();return state=="running"&&HasTimers?"timer":state; }}
    public string Error => hostError ?? engine.Evaluate("__error").AsString();
    public IReadOnlyList<OutputEvent> Drain()
    {
        var items = output.ToArray(); output.Clear(); return items;
    }
    public string EvaluateJson(string expression) => engine.Evaluate("JSON.stringify("+expression+")").AsString();
    public void Execute(string script) { engine.Execute(script);engine.Advanced.ProcessTasks(); }
    public void LoadGame(string sourceDirectory, string engineDirectory, string? generatedDirectory=null, bool start=true,
        string? resourceRoot=null, string? httpCacheDirectory=null, bool downloadHttp=false, string? languagePackDirectory=null, bool presentationDelays=false)
    {
        var source=Path.GetFullPath(sourceDirectory);
        var upstream=Path.GetFullPath(engineDirectory);
        var generated=Path.GetFullPath(generatedDirectory??Path.Combine(upstream,"..","..","artifacts","kojo"));
        var languagePacks=Path.GetFullPath(languagePackDirectory??Path.Combine(source,"language-packs"));
        var extraLanguages=Directory.Exists(languagePacks)?Directory.GetDirectories(languagePacks)
            .Where(p=>File.Exists(Path.Combine(p,"entry.js")))
            .Select(Path.GetFileName).Where(p=>p is not null && System.Text.RegularExpressions.Regex.IsMatch(p,"^[a-z]{2}-[A-Z]{2}$")).ToArray():[];
        engine.SetValue("__languagePacks",JsonSerializer.Serialize(extraLanguages));
        engine.SetValue("__presentationDelays",presentationDelays);
        engine.SetValue("__source", new Func<string,string>(id=> {
            var root=id.StartsWith("language-packs/")?languagePacks:(id.StartsWith("engine/")?upstream:(id.EndsWith(".kojo.js")?generated:Path.Combine(source,"ere")));
            var relative=id.StartsWith("language-packs/")?id[15..]:(id.StartsWith("engine/")?id[7..]:id);
            var path=Path.GetFullPath(Path.Combine(root,relative));
            if(!path.StartsWith(root+Path.DirectorySeparatorChar,StringComparison.OrdinalIgnoreCase)) throw new IOException("Module outside source root");
            return File.ReadAllText(path);
        }));
        Resources=ResourceCatalog.Load(source,resourceRoot,httpCacheDirectory,downloadHttp);
        engine.Execute("var __tables="+File.ReadAllText(Path.Combine(source,"build","static.json"))+";var __resources="+Resources.Json+";");
        using var stream=Assembly.GetExecutingAssembly().GetManifestResourceStream("EraUma.Compatibility.game-host.js")!;
        using var reader=new StreamReader(stream);
        Execute(reader.ReadToEnd());
        gameLoaded=true;
        Start(start?"await era.loadGlobal(); await __require('main.js')();":"await era.loadGlobal();");
    }
    string GamePath(string path)
    {
        if(!path.StartsWith("game/",StringComparison.Ordinal))throw new IOException("Only game save paths are permitted");
        var result=Path.GetFullPath(Path.Combine(saveDirectory,path[5..]));
        if(!result.StartsWith(saveDirectory+Path.DirectorySeparatorChar,StringComparison.OrdinalIgnoreCase))throw new IOException("Save path escapes root");
        return result;
    }
    static void AtomicWrite(string path, byte[] bytes) {Directory.CreateDirectory(Path.GetDirectoryName(path)!);File.WriteAllBytes(path+".tmp",bytes);File.Move(path+".tmp",path,true);}
    void Save(string value)
    {
        Directory.CreateDirectory(saveDirectory);
        var temp = Path.Combine(saveDirectory,"compat-test.json.tmp");
        File.WriteAllText(temp,value);
        File.Move(temp,Path.Combine(saveDirectory,"compat-test.json"),true);
    }
    string Load() => File.ReadAllText(Path.Combine(saveDirectory,"compat-test.json"));
}
