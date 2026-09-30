using EraUma.Compatibility;
using MinorShift.Emuera.Runtime.Utils.PluginSystem;
using System.Reflection;
using System.Text.Json;

namespace EraUma.Plugin;
public sealed class PluginManifest : PluginManifestAbstract
{
    public PluginManifest() { methods.Add(new Bridge()); }
    public override string PluginName => "EraUma compatibility probe";
    public override string PluginDescription => "Managed JavaScript bridge; not a playable eraUma port.";
    public override string PluginVersion => "0.1.0";
    public override string PluginAuthor => "ERA CrossWorld";
}
public sealed class Bridge : IPluginMethod
{
    Session? session;
    long[] lastButtons=[];
    readonly string root=Path.GetFullPath(Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location)!,".."));
    public string Name => "EraUmaBridge";
    public string Description => "start/resume/status/report via reference arguments";
    public void Execute(PluginMethodParameter[] args)
    {
        if(args.Length!=4) throw new ArgumentException("Expected action, input, state reference, message reference");
        var api=PluginManager.GetInstance();
        try
        {
            switch(args[0].strValue)
            {
                case "start":
                    session=new Session(Path.Combine(root,"sav"),()=>api.GetIntVar("GLOBAL",0),x=>api.SetIntVar("GLOBAL",x,0));
                    session.Start(File.ReadAllText(Path.Combine(root,"probe.js")));break;
                case "game":
                    var paths=JsonSerializer.Deserialize<Dictionary<string,string>>(File.ReadAllText(Path.Combine(root,"game-paths.json")))!;
                    session=new Session(Path.Combine(root,"sav-game"),()=>api.GetIntVar("GLOBAL",0),x=>api.SetIntVar("GLOBAL",x,0),true);
                    session.LoadGame(Path.GetFullPath(paths["source"],root),Path.GetFullPath(paths["engine"],root),Path.GetFullPath(paths["kojo"],root));break;
                case "resume":
                    (session??throw new InvalidOperationException("Session not started")).Resume(args[1].strValue);break;
                case "skip-text":
                    for(var n=0;n<100 && session?.State=="input" && lastButtons.Length==0;n++) {
                        session.Resume("");
                        Render(session.Drain());
                    }
                    break;
                case "assert-menu":
                    if(session?.State!="input" || !lastButtons.Contains(205))throw new InvalidOperationException("Original main menu not reached");
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
                case "report":
                    Directory.CreateDirectory(Path.Combine(root,"results"));
                    File.WriteAllText(Path.Combine(root,"results","runtime.json"),JsonSerializer.Serialize(new {
                        state=session?.State,error=session?.Error,global0=api.GetIntVar("GLOBAL",0),erbVerdict=args[1].strValue,lastButtons,
                        engine=typeof(PluginManager).Assembly.FullName,jsRuntime=typeof(Jint.Engine).Assembly.FullName,
                        mode="ERB automatic input injection; interactive INPUTS requires manual check"
                    },new JsonSerializerOptions{WriteIndented=true}));break;
                default:throw new ArgumentException("Unknown action");
            }
            Render(session?.Drain()??Array.Empty<OutputEvent>());
            void Render(IReadOnlyList<OutputEvent> items)
            {
              if(items.Count>0)lastButtons=items.Where(x=>x.Kind=="button").Select(x=>x.Button).ToArray();
              foreach(var item in items) {
                if(item.Kind=="clear") api.ClearDisplay();
                else if(item.Kind=="button") { api.PrintButton(item.Text,item.Button);api.PrintNewLine(); }
                else { api.Print(item.Text); if(item.Kind=="line")api.PrintNewLine(); }
              }
            }
            args[2].intValue=session?.State switch {"input"=>1,"done"=>2,"error"=>-1,_=>0};
            args[3].strValue=session?.Error??"";
        }
        catch(Exception error) { args[2].intValue=-1;args[3].strValue=error.ToString(); }
    }
}
