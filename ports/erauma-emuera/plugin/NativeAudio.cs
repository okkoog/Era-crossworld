using System.Reflection;
using System.Text.Json;
using MinorShift.Emuera.Runtime.Utils.PluginSystem;

namespace EraUma.Plugin;
/// <summary>Uses the pinned engine's decoder and audio mixer without adding another runtime.</summary>
public sealed class NativeAudio : IDisposable
{
    readonly Type? soundType=typeof(PluginManager).Assembly.GetType("MinorShift.Emuera.Runtime.Utils.Sound");
    readonly Type? mixerType=typeof(PluginManager).Assembly.GetType("MinorShift.Emuera.Runtime.Utils.SoundMixer");
    object? sound;
    string? current;
    bool paused;
    long revision=-1;
    public List<string> Warnings {get;}=[];
    public bool Opened=>current is not null;
    public string? OutputDevice=>mixerType?.GetField("output",BindingFlags.Static|BindingFlags.NonPublic)?.GetValue(null)?.GetType().Name??(Opened?"WindowsMediaPlayer":null);
    public void Apply(JsonElement state)
    {
        try
        {
            var requested=state.TryGetProperty("revision",out var stamp)?stamp.GetInt64():0;
            if(requested==revision)return;
            revision=requested;
            var action=state.GetProperty("action").GetString();
            if(action=="volume"){if(Opened&&state.TryGetProperty("volume",out var level))Call("setVolume",Math.Clamp((int)level.GetDouble(),0,100));return;}
            // Removing a mixer input pauses it without closing or seeking its decoder.
            if(action=="pause"){if(Opened&&!paused){Mixer("StopSound");paused=true;}return;}
            if(action=="resume"){if(Opened&&paused){Mixer("PlaySound");paused=false;}return;}
            if(!state.TryGetProperty("path",out var path)||!File.Exists(path.GetString()))return;
            Close();sound=Activator.CreateInstance(soundType??throw new NotSupportedException("Engine audio backend is unavailable"),nonPublic:true)!;
            var volume=state.TryGetProperty("volume",out var v)&&v.TryGetDouble(out var n)?Math.Clamp(n,0,100):100;
            Call("setVolume",(int)volume);
            var loop=state.TryGetProperty("config",out var config)&&config.TryGetProperty("loop",out var l)&&l.ValueKind==JsonValueKind.True;
            Call("play",path.GetString()!,loop?-1:1);
            current=path.GetString();paused=false;
        }
        catch(Exception error){while(error is TargetInvocationException {InnerException:not null} invocation)error=invocation.InnerException!;if(Warnings.Count<32)Warnings.Add(error.Message);Close();}
    }
    void Call(string method,params object[] args)=>soundType!.GetMethod(method,BindingFlags.Instance|BindingFlags.Public)!.Invoke(sound,args);
    void Mixer(string method)
    {
        if(mixerType is not null){mixerType.GetMethod(method,BindingFlags.Static|BindingFlags.Public)!.Invoke(null,[sound]);return;}
        dynamic player=soundType!.GetField("player",BindingFlags.Instance|BindingFlags.NonPublic)!.GetValue(sound)!;
        if(method=="StopSound")player.controls.pause();else player.controls.play();
    }
    void Close(){if(sound is not null){try{Call("close");}catch{ }sound=null;}current=null;paused=false;}
    public void Dispose()=>Close();
}
