using System.Drawing.Drawing2D;
using System.Drawing.Imaging;
using System.Reflection;
using System.Security.Cryptography;
using System.Text;
using System.Text.Json;
using MinorShift.Emuera.Runtime.Utils.PluginSystem;

namespace EraUma.Plugin;

// These narrow reflection calls register bitmaps with the pinned engine's sprite store.
// No desktop capture or input automation is involved.
public sealed class NativeImages : IDisposable
{
    const int Capacity=128;
    readonly Type contents=typeof(PluginManager).Assembly.GetType("MinorShift.Emuera.UI.Game.Image.AppContents",true)!;
    readonly Type graphicsType=typeof(PluginManager).Assembly.GetType("MinorShift.Emuera.UI.Game.Image.GraphicsImage",true)!;
    readonly Dictionary<string,string> cache=new();
    readonly List<(string Name,object Graphics)> owned=[];
    public List<string> Warnings {get;}=[];
    public int RegisteredCount=>owned.Count;
    public NativeImages(string root) { }
    static object? Call(Type type,object? target,string method,params object?[] args)=>type.GetMethod(method,BindingFlags.Public|BindingFlags.NonPublic|BindingFlags.Static|BindingFlags.Instance)!.Invoke(target,args);
    public string Register(Bitmap bitmap,string key)
    {
        if(cache.TryGetValue(key,out var existing))return existing;
        if(owned.Count>=Capacity)throw new InvalidOperationException("Screen image capacity exceeded");
        var name="ERAUMA_PORT_"+owned.Count;
        var graphics=Call(contents,null,"GetGraphics",970000+owned.Count)!;
        Call(graphicsType,graphics,"GCreateFromF",bitmap,false);
        Call(contents,null,"CreateSpriteG",name,graphics,new Rectangle(0,0,bitmap.Width,bitmap.Height));
        owned.Add((name,graphics));cache[key]=name;return name;
    }
    public bool TryGetSize(string path,out Size size)
    {
        try { using var bitmap=Load(path);size=bitmap.Size;return true; }
        catch(Exception error){Warn(error);size=Size.Empty;return false;}
    }
    static Bitmap Load(string path)
    {
        if(!Path.IsPathFullyQualified(path)||!File.Exists(path))throw new IOException("Image file is unavailable");
        var loader=typeof(PluginManager).Assembly.GetType("MinorShift.Emuera.UI.Game.Image.ImgUtils",true)!;
        return (Bitmap)(Call(loader,null,"LoadImage",path)??throw new IOException("Image decoder returned no bitmap"));
    }
    static int Int(JsonElement obj,string key,int fallback=0)=>obj.TryGetProperty(key,out var value)&&value.TryGetInt32(out var n)?n:fallback;
    static string Text(JsonElement obj,string key,string fallback="")=>obj.TryGetProperty(key,out var value)&&value.ValueKind==JsonValueKind.String?value.GetString()!:fallback;
    public string? Resolve(JsonElement item,int width,int height)
    {
        if(Text(item,"type")=="chart")
        {
            using var chart=NativeCharts.Draw(item,width,height);
            return Register(chart,"chart:"+item.GetRawText()+":"+width+":"+height);
        }
        if(!item.TryGetProperty("images",out var images)||images.ValueKind!=JsonValueKind.Array||images.GetArrayLength()==0)return null;
        width=Math.Clamp(width,1,2048);height=Math.Clamp(height,1,2048);
        var key=Convert.ToHexString(SHA256.HashData(Encoding.UTF8.GetBytes(item.GetRawText()+width+":"+height)));
        if(cache.TryGetValue(key,out var existing))return existing;
        try
        {
            var layers=new List<(Bitmap Bitmap,Rectangle Source,Rectangle Target)>();
            try
            {
                bool whole=Text(item,"type")=="image.whole";
                foreach(var image in images.EnumerateArray())
                {
                    var path=Text(image,"src");if(!File.Exists(path))continue;
                    var bitmap=Load(path);
                    var source=whole?new Rectangle(Point.Empty,bitmap.Size):new Rectangle(Int(image,"x"),Int(image,"y"),Int(image,"width",bitmap.Width),Int(image,"height",bitmap.Height));
                    source=Rectangle.Intersect(source,new Rectangle(Point.Empty,bitmap.Size));
                    if(source.Width<=0||source.Height<=0){bitmap.Dispose();continue;}
                    layers.Add((bitmap,source,new Rectangle(whole?0:Int(image,"posX"),whole?0:Int(image,"posY"),source.Width,source.Height)));
                }
                if(layers.Count==0)return null;
                int naturalWidth=layers.Max(l=>l.Target.Right),naturalHeight=layers.Max(l=>l.Target.Bottom);
                if(naturalWidth<=0||naturalHeight<=0)return null;
                using var canvas=new Bitmap(width,height,PixelFormat.Format32bppArgb);
                using var draw=Graphics.FromImage(canvas);
                draw.InterpolationMode=InterpolationMode.HighQualityBicubic;
                float scale=Math.Min((float)width/naturalWidth,(float)height/naturalHeight);
                foreach(var layer in layers)
                {
                    var dest=new RectangleF((width-naturalWidth*scale)/2+layer.Target.X*scale,(height-naturalHeight*scale)/2+layer.Target.Y*scale,layer.Target.Width*scale,layer.Target.Height*scale);
                    draw.DrawImage(layer.Bitmap,dest,layer.Source,GraphicsUnit.Pixel);
                }
                return Register(canvas,key);
            }
            finally { foreach(var layer in layers)layer.Bitmap.Dispose(); }
        }
        catch(Exception error){Warn(error);return null;}
    }
    public void SetBackground(JsonElement state)
    {
        try
        {
            var console=EngineConsole();console.GetType().GetMethod("CBG_Clear")!.Invoke(console,null);
            int width=EngineConfig("WindowX",1100),height=EngineConfig("WindowY",800);
            foreach(var (key,depth) in new[]{("back",100),("overlay",-100)})
            {
                if(!state.TryGetProperty(key,out var layer)||!layer.TryGetProperty("url",out var url)||url.ValueKind!=JsonValueKind.String||!File.Exists(url.GetString()))continue;
                using var source=Load(url.GetString()!);
                using var bitmap=new Bitmap(width,height,PixelFormat.Format32bppArgb);
                using var draw=Graphics.FromImage(bitmap);
                var opacity=layer.TryGetProperty("opacity",out var alpha)&&alpha.TryGetDouble(out var a)?Math.Clamp(a,0,1):1;
                using var attributes=new ImageAttributes();attributes.SetColorMatrix(new ColorMatrix{Matrix33=(float)opacity});
                draw.DrawImage(source,new Rectangle(0,0,width,height),0,0,source.Width,source.Height,GraphicsUnit.Pixel,attributes);
                var sprite=Register(bitmap,"background:"+key+":"+layer.GetRawText());
                var graphics=owned.First(x=>x.Name==sprite).Graphics;
                console.GetType().GetMethod("CBG_SetGraphics")!.Invoke(console,[graphics,0,0,depth]);
            }
        }catch(Exception error){Warn(error);}
    }
    internal static object EngineConsole()
    {
        var manager=PluginManager.GetInstance();
        var field=typeof(PluginManager).GetField("expressionMediator",BindingFlags.Instance|BindingFlags.NonPublic)!;
        var mediator=field.GetValue(manager)!;
        return mediator.GetType().GetField("Console")!.GetValue(mediator)!;
    }
    internal static int EngineConfig(string name,int fallback)
    {
        var type=typeof(PluginManager).Assembly.GetType("MinorShift.Emuera.Runtime.Config.Config",true)!;
        return (int?)type.GetProperty(name,BindingFlags.Static|BindingFlags.Public)?.GetValue(null)??fallback;
    }
    void Warn(Exception error){if(Warnings.Count<100)Warnings.Add((error is TargetInvocationException?error.InnerException:error)?.Message??error.Message);}
    public void Clear()
    {
        foreach(var item in owned){Call(contents,null,"SpriteDispose",item.Name);Call(graphicsType,item.Graphics,"GDispose");}
        owned.Clear();cache.Clear();
    }
    public void Dispose()=>Clear();
}
