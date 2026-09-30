using EraUma.Compatibility;
using System.Diagnostics;
using System.Text.Json;
var directory=Path.Combine(Path.GetTempPath(),"erauma-probe-"+Guid.NewGuid());
if(args.Length>=3&&args[0]=="--driver"){Driver.Run(args[1],args[2],args.Length>3?args[3]:null);return;}
if(args.Length>=6&&args[0]=="--scenario"){
    Console.WriteLine(VerificationScenario.Run(args[1],args[2],args[3],args[4],args[5],args.Length>6&&args[6]=="restore"));return;
}
long global=7; var timer=Stopwatch.StartNew();
var session=new Session(directory,()=>global,x=>global=x,args.Length>0 && (args[0]=="--game" || args[0]=="--play"));
if(args.Length>=3&&args[0]=="--api"){
    session.LoadGame(args[1],args[2],start:false);
    session.Start("era.print('first');era.printMultiColumns([{type:'text',content:'second'},{type:'button',content:'old',accelerator:8}]);await era.clear(1);");
    Check(session.State=="done"&&session.EvaluateJson("era.getLineCount()")=="1","partial clear counts a multi-column row as one logical line");
    Check(session.Drain().Last().Text=="first","partial clear retains preceding text");
    session.Start("era.replaceText('replacement');await era.clear(0);");
    Check(session.EvaluateJson("era.getLineCount()")=="1"&&session.Drain().Last().Text=="replacement","replace updates final row; clear zero retains it");
    session.Execute("var selection=-1,freeText=null;");
    session.Start("era.printButton('allowed',4);selection=await era.input();era.print('next');freeText=await era.input();");
    session.Drain();session.Resume("9");
    Check(session.State=="input"&&session.EvaluateJson("selection")=="-1","reject absent button value");
    session.Resume("4");
    Check(session.State=="input"&&!session.Drain().Any(e=>e.Kind=="button"),"previous buttons disabled at next input boundary");
    session.Resume("Trainer");
    Check(session.State=="done"&&session.EvaluateJson("freeText")=="\"Trainer\"","string input after button input");
    session.Start("var name=await era.input({rule:'[A-Z]{2}'});");session.Resume("xABx");
    Check(session.State=="input","regular expression anchored like original renderer");
    session.Resume("AB");Check(session.State=="done","valid regular expression input resumes");
    session.Start("await era.clear();era.allowWait=false;await era.waitAnyKey();");
    Check(session.State=="done"&&session.EvaluateJson("era.getLineCount()")=="0","empty waitAnyKey and full clear semantics");
    session.Start("era.print('top');era.setToBottom();await era.clear(1);");
    Check(session.EvaluateJson("era.getLineCount()")=="1"&&session.Drain().Last().Text=="top","setToBottom adds a logical row");
    session.Execute("var obsolete=false,replaced=false;");
    session.Start("era.input({any:true,useRule:false,hideInput:true}).then(()=>obsolete=true);await era.delay(5);await era.input({any:true,useRule:false});replaced=true;");
    session.Resume("");
    Check(session.State=="done"&&session.EvaluateJson("[obsolete,replaced]")=="[false,true]","new input replaces non-awaited input like Electron");
    session.Execute("var timerSelection=-1,timerCancelled=false;");
    session.Start("await era.clear();era.printButton('early',1);setTimeout(()=>era.printButton('late',3),10000);const cancelled=setTimeout(()=>timerCancelled=true,10000);clearTimeout(cancelled);timerSelection=await era.input();");
    session.Drain();session.AdvanceTimers(9000);
    Check(session.State=="input"&&session.HasTimers&&!session.Drain().Any(e=>e.Kind=="button"&&e.Button==3),"timer keeps delayed choice hidden");
    session.AdvanceTimers(1100);
    var timerFrame=session.Drain();
    Check(timerFrame.Any(e=>e.Kind=="button"&&e.Button==3)&&!session.HasTimers,"timer adds choice while input is pending");
    Check(timerFrame.Any(e=>e.Kind=="button"&&e.Button==1),"timer redraw preserves previously active choices in the same native input generation");
    session.Resume("3");
    Check(session.State=="done"&&session.EvaluateJson("[timerSelection,timerCancelled]")=="[3,false]","late choice accepted and cancelled callback not run");
    session.Execute("var loaded=true;");session.Start("loaded=await era.loadData(49);await era.clear();era.print('still running');");
    Check(session.State=="done"&&session.EvaluateJson("loaded")=="false"&&session.Drain().Any(e=>e.Kind=="diagnostic"),"load error returns false and diagnostics survive redraw");
    Directory.CreateDirectory(Path.Combine(directory,"sav"));
    foreach(var invalid in new[]{"not JSON","{\"code\":-1,\"version\":999999}","{\"version\":1}"}) {
        File.WriteAllText(Path.Combine(directory,"sav","save49.sav"),invalid);
        session.Start("loaded=await era.loadData(49);era.print('recovered');");
        Check(session.State=="done"&&session.EvaluateJson("loaded")=="false","corrupt, foreign or obsolete save is rejected without stopping the game: "+session.Error);
    }
    session.Start("await era.proxyKojo({}).missing();era.print('continued');");
    Check(session.State=="done"&&session.Diagnostics.Count>=2,"missing kojo reports diagnostic without changing control flow");
    session.Start("await era.clear();era.notify('notice retained');era.print('temporary');await era.clear();");
    Check(session.State=="done"&&session.EvaluateJson("era.getLineCount()")=="0"&&session.Drain().Any(e=>e.Text.Contains("notice retained")),"notifications survive redraw without changing logical line count");
    Console.WriteLine(JsonSerializer.Serialize(new{elapsedMs=timer.ElapsedMilliseconds,scope="original API screen and input regressions"}));return;
}
if(args.Length>=3 && args[0]=="--play")
{
    session.LoadGame(args[1],args[2]);
    var output=session.Drain();
    void Input(string input) { Check(session.State=="input","input boundary");session.Resume(input);output=session.Drain();Check(session.State=="input","game resumed: "+session.Error); }
    void WaitMenu() { for(var n=0;n<100 && !output.Any(x=>x.Kind=="button");n++)Input(""); }
    foreach(var input in new[]{"1","1","Trainer","1","1","0","2","1"}) Input(input);
    WaitMenu();
    Check(output.Any(x=>x.Kind=="button"&&x.Button==205),"original new game main menu");
    var before=session.EvaluateJson("__game.data");
    Input("205");WaitMenu();
    Check(output.Any(x=>x.Kind=="button"&&x.Button==205),"neutral rest action returns to main menu");
    var after=session.EvaluateJson("__game.data");
    Check(before!=after,"original action changes game state");
    session.Execute("var saved=false;era.saveData(6,'play checkpoint').then(ok=>saved=ok);");
    Check(session.EvaluateJson("saved")=="true","actual play checkpoint saved");
    var checkpoint=session.EvaluateJson("__game.data");
    var fresh=new Session(directory,()=>global,x=>global=x,true);
    fresh.LoadGame(args[1],args[2],start:false);
    fresh.Start("if(!await era.loadData(6))throw Error('load failed');");
    Check(fresh.State=="done"&&fresh.EvaluateJson("__game.data")==checkpoint,"complete game state restored in fresh JS engine");
    fresh.Start("era.quit();throw Error('unreachable');");
    Check(fresh.State=="done"&&fresh.Error=="","original quit becomes normal session completion");
    Console.WriteLine(JsonSerializer.Serialize(new{elapsedMs=timer.ElapsedMilliseconds,workingSet=Environment.WorkingSet,scope="original new game, neutral rest, save, fresh-engine load"}));return;
}
if(args.Length>=3 && args[0]=="--save")
{
    foreach(var compressed in new[]{false,true})
    {
        var first=new Session(directory,()=>global,x=>global=x);
        first.LoadGame(args[1],args[2],start:false);
        first.Start("__game.config.system.saveCompressedData="+(compressed?"true":"false")+";era.set('flag:16',321);era.set('global:3','en-US');era.set('flag:128',{nested:[1,'two',true]});if(!await era.saveData(5,'roundtrip'))throw Error('save failed');");
        Check(first.State=="done","original save API "+compressed+" "+first.Error);
        var bytes=File.ReadAllBytes(Path.Combine(directory,"sav","save5.sav"));
        Check((bytes[0]==0x1f&&bytes[1]==0x8b)==compressed,"gzip header "+compressed);
        var fresh=new Session(directory,()=>global,x=>global=x);
        fresh.LoadGame(args[1],args[2],start:false);
        fresh.Start("if(!await era.loadData(5))throw Error('load failed');");
        Check(fresh.State=="done"&&fresh.EvaluateJson("era.get('flag:16')")=="321","fresh engine original load "+compressed);
        Check(fresh.EvaluateJson("era.get('flag:128')")=="{\"nested\":[1,\"two\",true]}","nested JS value roundtrip "+compressed);
        Check(fresh.EvaluateJson("era.get('global:3')")=="\"en-US\"","original global.sav roundtrip "+compressed);
    }
    Console.WriteLine(JsonSerializer.Serialize(new{elapsedMs=timer.ElapsedMilliseconds,scope="upstream save API in fresh C# JS sessions; no original Electron run"}));return;
}
if(args.Length>=3 && args[0]=="--game")
{
    try {
        session.LoadGame(args[1],args[2]);
        var last=session.Drain();
        Console.WriteLine(JsonSerializer.Serialize(new {phase="load",state=session.State,error=session.Error,elapsedMs=timer.ElapsedMilliseconds,workingSet=Environment.WorkingSet,output=last}));
        for(var i=3;i<args.Length && session.State=="input";i++) {
            if(args[i]=="@intro") {
                for(var n=0;n<100 && session.State=="input" && !last.Any(x=>x.Kind=="button");n++) {
                    session.Resume("");last=session.Drain();
                    Console.WriteLine(JsonSerializer.Serialize(new {phase="intro-wait",state=session.State,error=session.Error,output=last}));
                }
                continue;
            }
            session.Resume(args[i]);
            last=session.Drain();
            Console.WriteLine(JsonSerializer.Serialize(new {phase="resume",input=args[i],state=session.State,error=session.Error,output=last}));
        }
        if(session.State=="error")Environment.ExitCode=1;
    } catch(Exception error) {Console.WriteLine(error);Environment.ExitCode=1;}
    return;
}
void Check(bool ok,string name) { if(!ok) throw new Exception("FAIL "+name); Console.WriteLine("PASS "+name); }
Check(session.EvaluateJson("(function test(a,b){return a+b;})(2,3)")=="5","JavaScript 2+3");
session.Start("era.print('eraUma compatibility test'); era.printButton('Continue',1); era.set('global:3','zh-CN'); era.set('flag:1',{n:9}); const n=await era.input(); era.add('global:0',n); era.println(era.get('global:0')); await era.saveData(0);");
Check(session.State=="input","async suspended without blocking host");
Check(session.Drain().Count==2,"text and button output");
Check(session.EvaluateJson("era.get('global:3')")=="\"zh-CN\"","string global is not coerced to integer");
session.Resume("5");
Check(session.State=="done" && global==12,"input resumes JS and updates mapped GLOBAL");
var second=new Session(directory,()=>global,x=>global=x);global=0;
second.Start("await era.loadData(0); era.println(era.get('flag:1').n);");
Check(second.State=="done"&&global==12&&second.Drain()[0].Text=="9","save/load into fresh engine");
second.Start("await era.input(); await era.input(); era.println('twice');");
second.Resume("first");Check(second.State=="input","second input suspension");
second.Resume("second");Check(second.State=="done","second input resume");
second.Start("era.get('staticcflag:1:1');");Check(second.State=="error","unsupported API fails explicitly");
second.Start("era.set('global:0',1.5);");Check(second.State=="error","integer mapping rejects fractional value");
Console.WriteLine(JsonSerializer.Serialize(new { elapsedMs=timer.ElapsedMilliseconds, workingSet=Environment.WorkingSet, saveDirectory=directory, scope="host tests only; not Emuera runtime or game boot" }));
