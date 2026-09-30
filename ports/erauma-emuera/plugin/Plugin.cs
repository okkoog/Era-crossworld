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
    public override string PluginVersion => "0.2.0";
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
                case "game":case "timer-game":
                    var paths=JsonSerializer.Deserialize<Dictionary<string,string>>(File.ReadAllText(Path.Combine(root,"game-paths.json")))!;
                    session=new Session(Path.Combine(root,"sav-game"),()=>api.GetIntVar("GLOBAL",0),x=>api.SetIntVar("GLOBAL",x,0),true);
                    session.LoadGame(Path.GetFullPath(paths["source"],root),Path.GetFullPath(paths["engine"],root),Path.GetFullPath(paths["kojo"],root),start:args[0].strValue=="game");
                    if(args[0].strValue=="timer-game")session.Start(File.ReadAllText(Path.Combine(root,"probe.js")));
                    break;
                case "resume":
                    (session??throw new InvalidOperationException("Session not started")).Resume(args[1].strValue);break;
                case "tick":
                    (session??throw new InvalidOperationException("Session not started")).Pump();break;
                case "exit":
                    if(session?.State is "input" or "timer")throw new InvalidOperationException("Finish the game session before exiting");
                    var ui=SynchronizationContext.Current??throw new InvalidOperationException("Emuera UI context is unavailable");
                    ui.Post(_=>System.Windows.Forms.Application.ExitThread(),null);break;
                case "skip-text":
                    for(var n=0;n<100 && session?.State=="input" && lastButtons.Length==0;n++) {
                        session.Resume("");
                        Render(session.Drain());
                    }
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
                        state=session?.State,error=session?.Error,diagnostics=session?.Diagnostics,global0=api.GetIntVar("GLOBAL",0),erbVerdict=args[1].strValue,lastButtons,
                        engine=typeof(PluginManager).Assembly.FullName,jsRuntime=typeof(Jint.Engine).Assembly.FullName,
                        mode=File.Exists(Path.Combine(root,"verification-mode.txt"))?File.ReadAllText(Path.Combine(root,"verification-mode.txt")):"automatic test"
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
                else { api.Print(item.Text); if(item.Kind=="line"||item.Kind=="diagnostic")api.PrintNewLine(); }
              }
            }
            args[2].intValue=session?.State switch {"input"=>session.HasTimers?4:1,"timer"=>3,"done"=>2,"error"=>-1,_=>0};
            args[3].strValue=session?.Error??"";
        }
        catch(Exception error) { args[2].intValue=-1;args[3].strValue=error.ToString(); }
    }
}
