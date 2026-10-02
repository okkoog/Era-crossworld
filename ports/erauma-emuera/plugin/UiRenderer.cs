using System.Drawing;
using System.Drawing.Imaging;
using System.Drawing.Text;
using System.Globalization;
using System.Reflection;
using System.Text;
using System.Text.Json;
using System.Text.RegularExpressions;
using System.Windows.Forms;
using MinorShift.Emuera.Runtime.Utils.PluginSystem;

namespace EraUma.Plugin;

/// <summary>Translates the original 24-column UI into the pinned engine's HTML dialect.</summary>
public sealed class UiRenderer : IDisposable
{
    readonly PluginManager api;
    readonly Func<JsonElement,int,int,string?> resolveSprite;
    readonly Func<string,long> registerUrl;
    readonly List<UiCell> cells=[];
    readonly Dictionary<(string Text,int Width,int Size,int LineHeight,string Font),int> measurements=new();
    readonly Dictionary<(string Name,int Size),Font> measureFonts=new();
    int fontSize=18,lineHeight=26,defaultWidth=24,defaultOffset;
    string fontName="Malgun Gothic";
    public UiLayout? LastLayout {get;private set;}
    public sealed record UiCell(string Type,int X,int Y,int Width,int Height,string Text,long? Button,string? Sprite);
    public sealed record UiLayout(string Html,int Width,int Height,int LogicalLines,IReadOnlyList<UiCell> Cells);
    public UiRenderer(PluginManager api,Func<JsonElement,int,int,string?> resolveSprite,Func<string,long> registerUrl)
    {this.api=api;this.resolveSprite=resolveSprite;this.registerUrl=registerUrl;}

    /// <returns>Number of native logical lines emitted, including reserved vertical space.</returns>
    public int Render(string json)
    {
        var console=NativeImages.EngineConsole();var count=console.GetType().GetProperty("LineCount")!;
        long before=(long)count.GetValue(console)!;
        var layout=Build(json);
        api.PrintHtml(layout.Html);
        // Native divs do not increase the console's fixed line advance. Reserve their height.
        for(int i=1;i<layout.LogicalLines;i++)api.PrintNewLine();
        return checked((int)((long)count.GetValue(console)!-before));
    }
    public UiLayout Build(string json)
    {
        using var document=JsonDocument.Parse(json);
        var root=document.RootElement;
        fontSize=Math.Clamp(NativeImages.EngineConfig("FontSize",18),10,48);
        lineHeight=Math.Max(fontSize,NativeImages.EngineConfig("LineHeight",26));
        var configType=typeof(PluginManager).Assembly.GetType("MinorShift.Emuera.Runtime.Config.Config");
        fontName=configType?.GetProperty("FontName",BindingFlags.Static|BindingFlags.Public)?.GetValue(null) as string??"Malgun Gothic";
        int width=Math.Clamp(NativeImages.EngineConfig("WindowX",1100)-28,240,2048);
        // CLIENTWIDTH is the actual console viewport and reflects a user's resized window.
        try {long previous=api.GetIntVar("RESULT");try{api.ExecuteLine("RESULT = CLIENTWIDTH()");width=Math.Clamp((int)api.GetIntVar("RESULT")-16,240,2048);}finally{api.SetIntVar("RESULT",previous);}}catch{ }
        cells.Clear();
        var html=new StringBuilder("<nobr>");
        var settings=Merge(null,Property(root,"config"));
        defaultWidth=Math.Clamp(Number(settings,"width",24),1,24);
        defaultOffset=Math.Clamp(Number(settings,"offset",0),0,23);
        bool inactive=Bool(root,"inactive")||(Property(root,"current").ValueKind==JsonValueKind.False);
        int height=Grid(Property(root,"columns"),0,0,width,settings,inactive,html);
        // A non-empty root keeps zero-width native div nodes on a real display line.
        html.Append(" </nobr>");
        height=Math.Max(lineHeight,height);
        int lines=(height+lineHeight-1)/lineHeight;
        return LastLayout=new UiLayout(html.ToString(),width,height,lines,cells.ToArray());
    }

    int Grid(JsonElement columns,int x,int y,int width,Dictionary<string,JsonElement> inherited,bool inactive,StringBuilder html)
    {
        if(columns.ValueKind!=JsonValueKind.Array)return 0;
        int used=0,rowY=y;
        var row=new List<(JsonElement Item,int Units,int Offset)>();
        int gutter=Math.Clamp(Number(inherited,"gutter",0),0,32);
        foreach(var item in columns.EnumerateArray())
        {
            if(item.ValueKind!=JsonValueKind.Object)continue;
            var own=Property(item,"config");
            int units=Math.Clamp(Number(own,"width",defaultWidth),1,24),offset=Math.Clamp(Number(own,"offset",defaultOffset),0,23);
            if(used+offset+units>24&&used>0)FlushRow();
            offset=Math.Min(offset,24-units);row.Add((item,units,offset));used+=offset+units;
            if(used>=24)FlushRow();
        }
        FlushRow();return rowY-y;
        void FlushRow()
        {
            if(row.Count==0)return;
            int position=0,rowHeight=0;
            var rendered=new List<(string Html,int Height,int CellStart,int CellCount)>();
            foreach(var col in row)
            {
                position+=col.Offset;
                int cellX=x+(int)Math.Round(width*position/24d)+gutter/2;
                int cellWidth=Math.Max(1,x+(int)Math.Round(width*(position+col.Units)/24d)-cellX-gutter/2);
                var settings=Merge(inherited,Property(col.Item,"config"));var fragment=new StringBuilder();int start=cells.Count;
                int childHeight=Property(col.Item,"columns").ValueKind==JsonValueKind.Array?
                    Grid(Property(col.Item,"columns"),cellX,rowY,cellWidth,settings,inactive,fragment):Leaf(col.Item,cellX,rowY,cellWidth,settings,inactive,fragment);
                rendered.Add((fragment.ToString(),childHeight,start,cells.Count-start));rowHeight=Math.Max(rowHeight,childHeight);position+=col.Units;
            }
            double spare=width*(24-position)/24d;
            string justify=Text(inherited,"horizontalAlign","start"),vertical=Text(inherited,"verticalAlign","top");
            for(int i=0;i<rendered.Count;i++)
            {
                var part=rendered[i];
                int dx=(int)Math.Round(justify switch{"center"=>spare/2,"end" or "right"=>spare,"space-between" when rendered.Count>1=>spare*i/(rendered.Count-1),"space-around"=>spare*(i+.5)/rendered.Count,"space-evenly"=>spare*(i+1)/(rendered.Count+1),_=>0});
                int dy=vertical switch{"middle" or "center"=>(rowHeight-part.Height)/2,"bottom"=>rowHeight-part.Height,_=>0};
                html.Append(ShiftDivs(part.Html,dx,dy));
                for(int c=part.CellStart;c<part.CellStart+part.CellCount;c++)cells[c]=cells[c] with{X=cells[c].X+dx,Y=cells[c].Y+dy};
            }
            rowY+=rowHeight;row.Clear();used=0;
        }
    }
    static string ShiftDivs(string html,int dx,int dy)=>dx==0&&dy==0?html:Regex.Replace(html,@"<div rect='(-?\d+)px,(-?\d+)px,",match=>"<div rect='"+(int.Parse(match.Groups[1].Value)+dx)+"px,"+(int.Parse(match.Groups[2].Value)+dy)+"px,");

    int Leaf(JsonElement item,int x,int y,int width,Dictionary<string,JsonElement> settings,bool inactive,StringBuilder html)
    {
        string type=Text(item,"type","text"),color=ColorValue(Text(settings,"color","#D7E0EB"),"#D7E0EB");
        string align=Alignment(Text(settings,"align","left"));
        string text="",body="";long? accelerator=null;string? sprite=null;
        int height=lineHeight;
        if(type is "image" or "image.whole" or "chart")
        {
            int imageWidth=width;
            int imageHeight=type=="chart"?Math.Clamp(Number(settings,"height",360),200,600):ImageHeight(item,width,settings);
            sprite=resolveSprite(item,imageWidth,imageHeight);
            if(sprite!=null){body="<img src='"+Escape(sprite)+"' width='"+imageWidth+"px' height='"+imageHeight+"px'>";height=imageHeight+4;}
            else {body=" ";height=lineHeight;}
        }
        else if(type=="progress")
        {
            double percentage=Math.Clamp(Double(item,"percentage",0),0,100);
            int barWidth=(int)Math.Round(width*Math.Clamp(Number(settings,"barWidth",24),1,24)/24d);
            int barHeight=Math.Clamp(Number(settings,"height",24),6,30);
            // The engine draws divs only through its escaped-part path. A wrapper
            // taller than one native line reaches that path; the shape inside it
            // keeps the requested bar height, including bars thinner than a line.
            height=Math.Max(lineHeight+1,barHeight+4);
            string label=Rich(Property(item,"inContent"),settings,false,out string inText);
            string outside=Rich(Property(item,"outContent"),settings,false,out string outText);
            text=inText+" "+percentage.ToString("0.#",CultureInfo.InvariantCulture)+"% "+outText;
            string RectangleBody(int shapeWidth,string paint)=>"<shape type='rect' param='0px,0px,"+shapeWidth+"px,"+barHeight+"px' color='"+paint+"'>";
            Div(html,x,y,barWidth,height,null,RectangleBody(barWidth,"#334155"),0);
            int fill=(int)Math.Round(barWidth*percentage/100);
            if(fill>0)Div(html,x,y,fill,height,null,RectangleBody(fill,ColorValue(Text(settings,"color","#38BDF8"),"#38BDF8")),-1);
            string fontColor=ColorValue(Text(settings,"fontColor","#FFFFFF"),"#FFFFFF");
            Div(html,x,y,barWidth,height,null,"<p align='center'><font color='"+fontColor+"'>"+label+"</font></p>",-2);
            if(barWidth<width)Div(html,x+barWidth,y,width-barWidth,height,null,"<p align='left'>"+outside+"</p>",-2);
            cells.Add(new(type,x,y,width,height,text,null,null));return height;
        }
        else if(type=="divider")
        {
            text=Text(settings,"content","");
            body="<font color='#64748B'>"+Escape(new string('─',Math.Max(2,width/fontSize/2)))+" "+Escape(text)+"</font>";
        }
        else
        {
            bool button=type=="button";
            body=Rich(Property(item,"content"),settings,button,out text);
            if(button)
            {
                bool disabled=inactive||Bool(settings,"disabled");
                string value=Scalar(Property(item,"accelerator"));
                if(long.TryParse(value,out long id))accelerator=id;
                string prefix=value.Length==0?"":"["+value+"] ";text=prefix+text;
                string title=Text(settings,"title",disabled?"Unavailable":"");
                body=Escape(prefix)+body;
                body=disabled?"<nonbutton title='"+Escape(title)+"'><font color='#7D8795'>"+StripFont(body)+"</font></nonbutton>":"<button value='"+Escape(value)+"' title='"+Escape(title)+"'>"+body+"</button>";
                if(disabled)accelerator=null;
                align=Alignment(Text(settings,"inTextAlign","center"));
            }
            int maximumSize=MaximumFontSize(Property(item,"content"),settings);
            height=Measure(text,width,maximumSize);
            // HTML font tags cannot change size in this engine. Rasterize only styled text,
            // keeping every interactive label as a real native button or hyperlink.
            if(!button&&text.Length>0&&maximumSize!=fontSize&&
                !body.Contains("<button")&&resolveSprite.Target is NativeImages nativeImages)
            {
                string key="richtext:"+item.GetRawText()+":"+JsonSerializer.Serialize(settings)+":"+width+":"+fontSize+":"+lineHeight+":"+fontName;
                if(!nativeImages.TryGetRegistered(key,out sprite,out var bitmapSize)){
                    using var bitmap=RichBitmap(Property(item,"content"),settings,width);
                    sprite=nativeImages.Register(bitmap,key);bitmapSize=bitmap.Size;
                }
                height=bitmapSize.Height+4;
                body="<img src='"+Escape(sprite)+"' width='"+bitmapSize.Width+"px' height='"+bitmapSize.Height+"px'>";
            }
            if(Number(settings,"height",0)>0)height=Math.Max(height,Number(settings,"height",0));
        }
        // Empty grid cells reserve their full layout space without adding native
        // escaped divs. Interactive/tooltip cells still need native hit boxes.
        if(type=="text"&&text.Length==0&&sprite is null&&!body.Contains("<button")&&!body.Contains("<nonbutton")){
            cells.Add(new(type,x,y,width,height,text,accelerator,sprite));return height;
        }
        body="<font color='"+color+"'>"+body+"</font>";
        Div(html,x,y,width,height,null,"<p align='"+align+"'>"+body+"</p>",0);
        cells.Add(new(type,x,y,width,height,text,accelerator,sprite));return height;
    }

    int ImageHeight(JsonElement item,int width,Dictionary<string,JsonElement> settings)
    {
        int explicitHeight=Number(settings,"height",0);
        if(explicitHeight>0)return Math.Clamp(explicitHeight,1,1400);
        int naturalWidth=0,naturalHeight=0;
        var images=Property(item,"images");
        if(images.ValueKind==JsonValueKind.Array)foreach(var image in images.EnumerateArray())
        {
            int w=Number(image,"width",0),h=Number(image,"height",0);
            if((w<=0||h<=0)&&File.Exists(Text(image,"src")))
            {
                // The public image helper supports both native PNG and the engine's WebP decoder.
                if(resolveSprite.Target is NativeImages nativeImages&&nativeImages.TryGetSize(Text(image,"src"),out var size)){w=size.Width;h=size.Height;}
            }
            naturalWidth=Math.Max(naturalWidth,w+Number(image,"posX",0));naturalHeight=Math.Max(naturalHeight,h+Number(image,"posY",0));
        }
        return naturalWidth>0&&naturalHeight>0?Math.Clamp((int)Math.Ceiling(width*(double)naturalHeight/naturalWidth),1,1400):Math.Min(width,240);
    }
    int Measure(string text,int width,int requestedSize)
    {
        if(string.IsNullOrEmpty(text))return lineHeight;
        var key=(text,width,requestedSize,lineHeight,fontName);
        if(measurements.TryGetValue(key,out var cached))return cached;
        if(!measureFonts.TryGetValue((fontName,requestedSize),out var font)){
            if(measureFonts.Count>=32){foreach(var old in measureFonts.Values)old.Dispose();measureFonts.Clear();}
            font=new Font(fontName,requestedSize,FontStyle.Regular,GraphicsUnit.Pixel);measureFonts[(fontName,requestedSize)]=font;
        }
        var measured=TextRenderer.MeasureText(text,font,new Size(Math.Max(1,width-6),32767),TextFormatFlags.WordBreak|TextFormatFlags.NoPadding|TextFormatFlags.NoPrefix);
        int physical=Math.Max(1,(int)Math.Ceiling(measured.Height/(double)font.Height));
        int height=Math.Max(lineHeight,physical*Math.Max(lineHeight,font.Height)+2);
        if(measurements.Count>=2048)measurements.Clear();
        measurements[key]=height;return height;
    }
    public void Dispose(){foreach(var font in measureFonts.Values)font.Dispose();measureFonts.Clear();measurements.Clear();}
    int MaximumFontSize(JsonElement content,Dictionary<string,JsonElement> settings)
    {
        int largest=FontPixels(settings);
        if(content.ValueKind==JsonValueKind.Array)foreach(var part in content.EnumerateArray())largest=Math.Max(largest,MaximumFontSize(part,settings));
        else if(content.ValueKind==JsonValueKind.Object)largest=Math.Max(largest,MaximumFontSize(Property(content,"content"),Merge(settings,content)));
        return largest;
    }
    int FontPixels(Dictionary<string,JsonElement> settings)
    {
        if(!settings.TryGetValue("fontSize",out var value))return fontSize;
        if(value.ValueKind==JsonValueKind.Number)return Math.Clamp(NumberValue(value,fontSize),8,96);
        string size=Scalar(value);var match=Regex.Match(size,@"^(\d+(?:\.\d+)?)\s*(rem|em|px)?$");
        if(!match.Success)return fontSize;
        double n=double.Parse(match.Groups[1].Value,CultureInfo.InvariantCulture);
        return Math.Clamp((int)Math.Ceiling(n*(match.Groups[2].Value is "rem" or "em"?fontSize:1)),8,96);
    }
    Bitmap RichBitmap(JsonElement content,Dictionary<string,JsonElement> settings,int width)
    {
        var spans=new List<(string Text,Dictionary<string,JsonElement> Settings)>();Collect(content,settings,0);
        var positions=new List<(string Text,float X,int Y,Font Font,Color Color)>();var fonts=new List<Font>();
        using var measureBitmap=new Bitmap(1,1);using var measure=Graphics.FromImage(measureBitmap);
        using var format=(StringFormat)StringFormat.GenericTypographic.Clone();format.FormatFlags|=StringFormatFlags.MeasureTrailingSpaces;
        float x=0;int y=0,rowHeight=lineHeight;
        try
        {
            foreach(var span in spans)
            {
                FontStyle style=FontStyle.Regular;
                if(Text(span.Settings,"fontWeight","") is "bold" or "bolder"||Number(span.Settings,"fontWeight",0)>=600)style|=FontStyle.Bold;
                if(Text(span.Settings,"fontStyle","")=="italic")style|=FontStyle.Italic;
                var font=new Font(fontName,FontPixels(span.Settings),style,GraphicsUnit.Pixel);fonts.Add(font);
                var color=ColorTranslator.FromHtml(ColorValue(Text(span.Settings,"color","#D7E0EB"),"#D7E0EB"));
                var elements=StringInfo.GetTextElementEnumerator(span.Text.Replace("\r",""));
                while(elements.MoveNext())
                {
                    var glyph=elements.GetTextElement();
                    if(glyph=="\n"){y+=rowHeight;x=0;rowHeight=lineHeight;continue;}
                    float glyphWidth=measure.MeasureString(glyph,font,int.MaxValue,format).Width;
                    if(x>0&&x+glyphWidth>width){y+=rowHeight;x=0;rowHeight=lineHeight;}
                    rowHeight=Math.Max(rowHeight,font.Height+2);positions.Add((glyph,x,y,font,color));x+=glyphWidth;
                }
            }
            var bitmap=new Bitmap(width,Math.Clamp(y+rowHeight,1,8192),PixelFormat.Format32bppArgb);
            using var draw=Graphics.FromImage(bitmap);draw.TextRenderingHint=TextRenderingHint.AntiAliasGridFit;
            foreach(var glyph in positions){using var brush=new SolidBrush(glyph.Color);draw.DrawString(glyph.Text,glyph.Font,brush,glyph.X,glyph.Y,format);}
            return bitmap;
        }
        finally{foreach(var font in fonts)font.Dispose();}
        void Collect(JsonElement node,Dictionary<string,JsonElement> inherited,int depth)
        {
            if(depth>32)return;
            if(node.ValueKind==JsonValueKind.Array){foreach(var child in node.EnumerateArray())Collect(child,inherited,depth+1);}
            else if(node.ValueKind!=JsonValueKind.Object)spans.Add((Scalar(node),inherited));
            else if(Bool(node,"isBr")||Number(node,"isBr",0)>0)spans.Add((new string('\n',Math.Clamp(Number(node,"isBr",Number(node,"count",1)),1,100)),inherited));
            else if(Bool(node,"isBlank")||Number(node,"isBlank",0)>0)spans.Add((new string(' ',Math.Clamp(Number(node,"isBlank",Number(node,"count",1)),1,1000)),inherited));
            else if(Bool(node,"isDivider"))spans.Add(("─",inherited));
            else Collect(Property(node,"content"),Merge(inherited,node),depth+1);
        }
    }

    string Rich(JsonElement value,Dictionary<string,JsonElement> inherited,bool inButton,out string plain)
    {
        var text=new StringBuilder();var html=new StringBuilder();
        Append(value,inherited,html,text,0,inButton);plain=text.ToString();string output=html.ToString();
        if((Text(inherited,"fontWeight","") is "bold" or "bolder"||Number(inherited,"fontWeight",0)>=600)&&!output.Contains("<b>"))output="<b>"+output+"</b>";
        if(Text(inherited,"fontStyle","")=="italic"&&!output.Contains("<i>"))output="<i>"+output+"</i>";
        return output;
        void Append(JsonElement node,Dictionary<string,JsonElement> setting,StringBuilder target,StringBuilder printable,int depth,bool insideInteractive)
        {
            if(depth>32)return;
            if(node.ValueKind==JsonValueKind.Array){foreach(var child in node.EnumerateArray())Append(child,setting,target,printable,depth+1,insideInteractive);return;}
            if(node.ValueKind!=JsonValueKind.Object)
            {
                string str=Scalar(node);printable.Append(str);string primitiveHtml=Escape(str).Replace("&#10;","<br>");
                if(Text(setting,"fontWeight","") is "bold" or "bolder"||Number(setting,"fontWeight",0)>=600)primitiveHtml="<b>"+primitiveHtml+"</b>";
                if(Text(setting,"fontStyle","")=="italic")primitiveHtml="<i>"+primitiveHtml+"</i>";
                target.Append(primitiveHtml);return;
            }
            if(Bool(node,"isBlank")||Number(node,"isBlank",0)>0){string spaces=new(' ',Math.Clamp(Number(node,"isBlank",Number(node,"count",1)),1,1000));printable.Append(spaces);target.Append(string.Concat(Enumerable.Repeat("&nbsp;",spaces.Length)));return;}
            if(Bool(node,"isBr")||Number(node,"isBr",0)>0){int count=Math.Clamp(Number(node,"isBr",Number(node,"count",1)),1,100);printable.Append(new string('\n',count));target.Append(string.Concat(Enumerable.Repeat("<br>",count)));return;}
            if(Bool(node,"isDivider")){printable.Append("─");target.Append("─");return;}
            var local=Merge(setting,node);
            string url=Text(node,"url"),title=Text(node,"title",url);
            var content=new StringBuilder();Append(Property(node,"content"),local,content,printable,depth+1,insideInteractive||url.Length>0||title.Length>0);
            string fragment=content.ToString();
            bool bold=Text(local,"fontWeight","") is "bold" or "bolder"||Number(local,"fontWeight",0)>=600;
            bool italic=Text(local,"fontStyle","")=="italic";
            if(bold&&!fragment.Contains("<b>"))fragment="<b>"+fragment+"</b>";if(italic&&!fragment.Contains("<i>"))fragment="<i>"+fragment+"</i>";
            string color=ColorValue(Text(local,"color","#D7E0EB"),"#D7E0EB");fragment="<font color='"+color+"'>"+fragment+"</font>";
            if(url.Length>0&&!insideInteractive)
            {
                long id=registerUrl(url);
                fragment=id!=0?"<button value='"+id.ToString(CultureInfo.InvariantCulture)+"' title='"+Escape(title)+"'><u>"+fragment+"</u></button>":"<nonbutton title='"+Escape(title)+"'>"+fragment+"</nonbutton>";
            }
            else if(title.Length>0&&!insideInteractive)fragment="<nonbutton title='"+Escape(title)+"'>"+fragment+"</nonbutton>";
            target.Append(fragment);
        }
    }
    static void Div(StringBuilder html,int x,int y,int width,int height,string? color,string body,int depth)
    {
        html.Append("<div rect='").Append(x).Append("px,").Append(y).Append("px,").Append(width).Append("px,").Append(height).Append("px' depth='").Append(depth).Append("'");
        if(color!=null)html.Append(" color='").Append(color).Append("'");
        html.Append('>').Append(body.Length==0?" ":body).Append("</div>");
    }
    static string StripFont(string body)=>Regex.Replace(body,"</?font(?:\\s[^>]*)?>","");
    static string Alignment(string align)=>align is "center" or "right"?align:"left";
    static JsonElement Property(JsonElement value,string name)=>value.ValueKind==JsonValueKind.Object&&value.TryGetProperty(name,out var result)?result:default;
    static string Scalar(JsonElement value)=>value.ValueKind switch {JsonValueKind.String=>value.GetString()??"",JsonValueKind.Number=>value.GetRawText(),JsonValueKind.True=>"true",JsonValueKind.False=>"false",_=>""};
    static string Text(JsonElement obj,string name,string fallback="")=>Property(obj,name).ValueKind==JsonValueKind.String?Property(obj,name).GetString()!:fallback;
    static string Text(Dictionary<string,JsonElement> obj,string name,string fallback="")=>obj.TryGetValue(name,out var value)&&value.ValueKind==JsonValueKind.String?value.GetString()!:fallback;
    static int Number(JsonElement obj,string name,int fallback=0)=>NumberValue(Property(obj,name),fallback);
    static int Number(Dictionary<string,JsonElement> obj,string name,int fallback=0)=>obj.TryGetValue(name,out var value)?NumberValue(value,fallback):fallback;
    static int NumberValue(JsonElement value,int fallback)=>value.ValueKind==JsonValueKind.Number&&value.TryGetDouble(out var d)?(int)Math.Clamp(d,int.MinValue,int.MaxValue):int.TryParse(Scalar(value),out var n)?n:fallback;
    static double Double(JsonElement obj,string name,double fallback)=>Property(obj,name).ValueKind==JsonValueKind.Number&&Property(obj,name).TryGetDouble(out var d)?d:fallback;
    static bool Bool(JsonElement obj,string name)=>Property(obj,name).ValueKind==JsonValueKind.True;
    static bool Bool(Dictionary<string,JsonElement> obj,string name)=>obj.TryGetValue(name,out var value)&&(value.ValueKind==JsonValueKind.True||(value.ValueKind==JsonValueKind.Number&&value.TryGetDouble(out var n)&&n!=0));
    static Dictionary<string,JsonElement> Merge(Dictionary<string,JsonElement>? inherited,JsonElement own)
    {var result=inherited==null?new Dictionary<string,JsonElement>():new(inherited);if(own.ValueKind==JsonValueKind.Object)foreach(var value in own.EnumerateObject())result[value.Name]=value.Value;return result;}
    static string ColorValue(string value,string fallback)
    {
        if(Regex.IsMatch(value,"^#[0-9a-fA-F]{3}$"))return "#"+string.Concat(value.Skip(1).Select(c=>new string(c,2)));
        if(Regex.IsMatch(value,"^#[0-9a-fA-F]{6}$"))return value;
        var rgb=Regex.Match(value,@"^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)");
        if(rgb.Success)return "#"+string.Concat(Enumerable.Range(1,3).Select(i=>Math.Clamp(int.Parse(rgb.Groups[i].Value),0,255).ToString("X2")));
        try{var c=ColorTranslator.FromHtml(value);if(c.A>0)return "#"+c.R.ToString("X2")+c.G.ToString("X2")+c.B.ToString("X2");}catch{ }return fallback;
    }
    public static string Escape(string text)=>text.Replace("&","&amp;").Replace("<","&lt;").Replace(">","&gt;").Replace("\"","&quot;").Replace("'","&apos;").Replace("\r","").Replace("\n","&#10;");

    /// <summary>Exports the engine's own native canvas, without desktop capture or window messages.</summary>
    public static string CaptureCurrentWindow(string path)
    {
        var console=NativeImages.EngineConsole();var type=console.GetType();
        int width=(int)type.GetProperty("ClientWidth")!.GetValue(console)!;
        int height=(int)type.GetProperty("ClientHeight")!.GetValue(console)!;
        Directory.CreateDirectory(Path.GetDirectoryName(Path.GetFullPath(path))!);
        type.GetMethod("verticalScrollBarUpdate",BindingFlags.Instance|BindingFlags.NonPublic)?.Invoke(console,null);
        using var bitmap=new Bitmap(width,height);using var graphics=Graphics.FromImage(bitmap);
        graphics.SetClip(new Rectangle(0,0,width,height));
        // Calling OnPaint directly also surfaces drawing errors to the probe's exception handler.
        type.GetMethod("OnPaint")!.Invoke(console,[graphics]);bitmap.Save(path,ImageFormat.Png);return path;
    }
}
