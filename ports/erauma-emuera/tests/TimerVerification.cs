using EraUma.Compatibility;
using System.Diagnostics;
using System.Text.Json;

static class TimerVerification
{
    public static void Run(string source, string engine)
    {
        var save=Path.Combine(Path.GetTempPath(),"erauma-timers-"+Guid.NewGuid());
        long global=0;
        var timer=new Session(save,()=>global,value=>global=value);
        void Check(bool ok,string name){if(!ok)throw new Exception("FAIL "+name);Console.WriteLine("PASS "+name);}
        timer.Execute("var testClock=1000;__now=()=>testClock;var events=[],slow;");
        Check(timer.NextTimerDelayMilliseconds==50,"no timer has a positive fallback");
        timer.Start("slow=setTimeout(()=>events.push('slow'),100);setTimeout(()=>events.push('fast'),16.6667);await new Promise(resolve=>setTimeout(resolve,150));");
        Check(timer.NextTimerDelayMilliseconds==17,"earliest fractional deadline rounds up to 17 ms");
        timer.Execute("testClock=1016;");timer.Pump();
        Check(timer.EvaluateJson("events")=="[]"&&timer.NextTimerDelayMilliseconds==1,"timer cannot fire before its original deadline");
        timer.Execute("testClock=1016.6667;");timer.Pump();
        Check(timer.EvaluateJson("events")=="[\"fast\"]"&&timer.NextTimerDelayMilliseconds==84,"next wait uses the remaining deadline");
        timer.Execute("clearTimeout(slow);");
        Check(timer.NextTimerDelayMilliseconds==134,"cancelled earliest timer is excluded");
        timer.Execute("testClock=1200;");
        Check(timer.NextTimerDelayMilliseconds==1,"overdue timer never becomes an indefinite zero wait");
        timer.Pump();Check(timer.State=="done"&&!timer.HasTimers,"overdue timer completes normally");
        timer.Start("await new Promise(resolve=>setTimeout(resolve,16.6667));events.push('first chain');await new Promise(resolve=>setTimeout(resolve,40));events.push('second chain');");
        timer.Execute("testClock=1217;");timer.Pump();
        Check(timer.State=="timer"&&timer.NextTimerDelayMilliseconds==40,"promise continuation exposes its newly scheduled deadline");
        timer.Execute("testClock=1256;");timer.Pump();
        Check(timer.State=="timer"&&timer.NextTimerDelayMilliseconds==1,"chained original timer is not advanced prematurely");
        timer.Execute("testClock=1257;");timer.Pump();
        Check(timer.State=="done"&&timer.EvaluateJson("events.slice(-2)")=="[\"first chain\",\"second chain\"]","chained delay completes in original order");
        timer.Execute("var huge=setTimeout(()=>{},Number.MAX_VALUE);");
        Check(timer.NextTimerDelayMilliseconds==int.MaxValue,"very distant deadline is clamped to native wait range");
        timer.Execute("clearTimeout(huge);");

        var real=new Session(save,()=>global,value=>global=value);
        var elapsed=Stopwatch.StartNew();
        real.Start("await new Promise(resolve=>setTimeout(resolve,40));");
        Check(real.NextTimerDelayMilliseconds is >=1 and <=40,"production clock returns remaining real delay");
        while(real.HasTimers&&elapsed.ElapsedMilliseconds<1000){Thread.Sleep((int)real.NextTimerDelayMilliseconds);real.Pump();}
        Check(real.State=="done"&&elapsed.ElapsedMilliseconds>=40&&elapsed.ElapsedMilliseconds<1000,"adaptive wait follows elapsed wall time without virtual advance");
        var realDelayElapsedMs=elapsed.ElapsedMilliseconds;

        var game=new Session(save,()=>global,value=>global=value,true);
        game.LoadGame(source,engine,start:false,presentationDelays:true);game.Drain();
        game.Execute("var redrawCalls=0;const redrawOriginal=__redraw;__redraw=function(){redrawCalls++;return redrawOriginal();};var picked=-1;");
        game.Start("await era.clear();era.printButton('early',1);setTimeout(()=>era.printButton('late',3),10000);picked=await era.input({hideInput:true});");
        game.Drain();var before=int.Parse(game.EvaluateJson("redrawCalls"));game.AdvanceTimers(10000);var append=game.Drain();
        Check(int.Parse(game.EvaluateJson("redrawCalls"))==before+1,"append-only timed choice still redraws all active choices");
        Check(append.Any(e=>e.Kind=="button"&&e.Button==1)&&append.Any(e=>e.Kind=="button"&&e.Button==3),"early and late choices share the native input frame");
        game.Resume("3");game.Drain();Check(game.State=="done"&&game.EvaluateJson("picked")=="3","appended timed choice remains accepted");
        game.Start("await era.clear();era.printButton('early',1);era.print('old');setTimeout(()=>era.replaceText('replacement'),10000);picked=await era.input({hideInput:true});");
        game.Drain();before=int.Parse(game.EvaluateJson("redrawCalls"));game.AdvanceTimers(10000);var replacement=game.Drain();
        Check(int.Parse(game.EvaluateJson("redrawCalls"))==before+1,"complete replacement frame is serialized once");
        Check(replacement.Count(e=>e.Kind=="clear")==1&&replacement.Any(e=>e.Kind=="button"&&e.Button==1)&&replacement.Any(e=>e.Text=="replacement"),"replacement retains active choices and final content");
        game.Resume("1");game.Drain();Check(game.State=="done"&&game.EvaluateJson("picked")=="1","choice still works after replacement frame");
        game.Start("await era.clear();era.printButton('accepted',1);era.print('old');setTimeout(()=>{era.replaceText('replacement');__resume('1');},10000);await era.input({hideInput:true});era.print('after accepted');await era.delay(10000);");
        game.Drain();before=int.Parse(game.EvaluateJson("redrawCalls"));game.AdvanceTimers(10000);var changedEpoch=game.Drain();
        Check(int.Parse(game.EvaluateJson("redrawCalls"))==before+2,"input epoch changed after replacement requires a final redraw");
        Check(!changedEpoch.Any(e=>e.Kind=="button")&&changedEpoch.Any(e=>e.Text=="after accepted"),"accepted old choices are disabled in the completed frame");
        game.AdvanceTimers(10000);game.Drain();Check(game.State=="done","input-epoch regression completes");
        Console.WriteLine(JsonSerializer.Serialize(new{scope="adaptive host deadlines and timer frame input generations",realDelayElapsedMs}));
    }
}
