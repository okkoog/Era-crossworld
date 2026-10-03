using EraUma.Compatibility;
using System.Text.Json;

static class Driver
{
    public static void Run(string source,string engine,string? saveDirectory=null)
    {
        var directory=saveDirectory??Path.Combine(Path.GetTempPath(),"erauma-driver-"+Guid.NewGuid());
        var session=new Session(directory,()=>0,_=>{},true);
        session.LoadGame(source,engine);
        IReadOnlyList<OutputEvent> last=session.Drain();
        void Print() => Console.WriteLine(JsonSerializer.Serialize(new{state=session.State,error=session.Error,saveDirectory=directory,output=last.Where(e=>e.Kind=="button")},new JsonSerializerOptions{Encoder=System.Text.Encodings.Web.JavaScriptEncoder.UnsafeRelaxedJsonEscaping}));
        void Input(string value){session.Resume(value);last=session.Drain();}
        void Intro(){for(var n=0;n<300&&session.State=="input"&&!last.Any(e=>e.Kind=="button");n++)Input("");}
        Print();
        string? command;
        while((command=Console.ReadLine())!=null){
            try{
                if(command=="@exit")break;
                if(command.StartsWith("@eval ")){Console.WriteLine(session.EvaluateJson(command[6..]));continue;}
                if(command.StartsWith("@tick ")){session.AdvanceTimers(long.Parse(command[6..]));last=session.Drain();Print();continue;}
                if(command=="@new") {foreach(var value in new[]{"1","1","Trainer","1","1","0","2","1"})Input(value);Intro();}
                else if(command=="@intro")Intro();
                else Input(command);
                Print();
            }catch(Exception error){Console.WriteLine(JsonSerializer.Serialize(new{error=error.ToString()}));}
        }
    }
}
