using System.Drawing.Drawing2D;
using System.Drawing.Imaging;
using System.Text.Json;
using System.Globalization;

namespace EraUma.Plugin;
// Projects the unchanged Chart.js datasets; every original point is plotted.
public static class NativeCharts
{
    public static Bitmap Draw(JsonElement item,int width,int height)
    {
        var data=item.TryGetProperty("data",out var d)?d:item;
        width=Math.Clamp(width,320,1600);height=Math.Clamp(height,280,700);
        var bitmap=new Bitmap(width,height,PixelFormat.Format32bppArgb);
        using var graphics=Graphics.FromImage(bitmap);
        graphics.Clear(Color.FromArgb(25,34,46));graphics.SmoothingMode=SmoothingMode.AntiAlias;
        using var font=new Font("ＭＳ ゴシック",12,FontStyle.Regular,GraphicsUnit.Pixel);
        using var foreground=new SolidBrush(Color.FromArgb(215,224,235));
        using var grid=new Pen(Color.FromArgb(48,62,78));
        if(!data.TryGetProperty("datasets",out var datasets)){graphics.DrawString("—",font,foreground,20,20);return bitmap;}
        var series=datasets.EnumerateArray().Select(s=>(s,points:s.GetProperty("data").EnumerateArray().Select((p,i)=>new PointF(i,Value(p))).ToArray())).ToArray();
        var valid=series.SelectMany(s=>s.points).Where(p=>float.IsFinite(p.Y)).ToArray();
        if(valid.Length==0)return bitmap;
        float min=valid.Min(p=>p.Y),max=valid.Max(p=>p.Y);if(max==min)max=min+1;
        float range=max-min;min-=range*.04f;max+=range*.04f;
        int count=series.Max(s=>s.points.Length),legendRows=(series.Length+3)/4;
        var plot=new RectangleF(66,18,width-88,height-58-legendRows*21);
        for(int tick=0;tick<=5;tick++)
        {
            float y=plot.Bottom-tick*plot.Height/5;
            graphics.DrawLine(grid,plot.Left,y,plot.Right,y);
            graphics.DrawString((min+(max-min)*tick/5).ToString("0.##"),font,foreground,3,y-6);
        }
        var labels=data.TryGetProperty("labels",out var labelArray)?labelArray.EnumerateArray().ToArray():[];
        int tickCount=Math.Min(5,Math.Max(1,count));
        for(int tick=0;tick<tickCount;tick++)
        {
            int index=tickCount==1?0:(int)Math.Round((count-1)*tick/(double)(tickCount-1));float x=plot.Left+plot.Width*index/Math.Max(1,count-1);
            graphics.DrawLine(grid,x,plot.Top,x,plot.Bottom);
            var label=index<labels.Length?labels[index].ToString():index.ToString();
            float labelWidth=graphics.MeasureString(label,font).Width;
            graphics.DrawString(label,font,foreground,Math.Clamp(x-labelWidth/2,0,Math.Max(0,width-labelWidth)),plot.Bottom+8);
        }
        var colors=new[]{Color.FromArgb(125,211,252),Color.FromArgb(250,204,21),Color.FromArgb(167,243,208),Color.FromArgb(249,168,212),Color.FromArgb(196,181,253),Color.FromArgb(251,146,60)};
        for(int i=0;i<series.Length;i++)
        {
            var s=series[i];Color color=colors[i%colors.Length];
            if(s.s.TryGetProperty("borderColor",out var css)&&css.ValueKind==JsonValueKind.String)
                try {color=ColorTranslator.FromHtml(css.GetString()!);}catch(ArgumentException){}
            using var pen=new Pen(color,1.6f);
            PointF? previous=null;
            foreach(var p in s.points)
            {
                if(!float.IsFinite(p.Y)){previous=null;continue;}
                var next=new PointF(plot.Left+p.X*plot.Width/Math.Max(1,count-1),plot.Bottom-(p.Y-min)*plot.Height/(max-min));
                if(previous is PointF before){
                    if(s.s.TryGetProperty("stepped",out var stepped)&&stepped.ValueKind is JsonValueKind.True or JsonValueKind.String){graphics.DrawLine(pen,before,new PointF(next.X,before.Y));graphics.DrawLine(pen,new PointF(next.X,before.Y),next);}
                    else graphics.DrawLine(pen,before,next);
                }previous=next;
            }
            int lx=66+(i%4)*(width-88)/4,ly=(int)plot.Bottom+32+(i/4)*21;
            graphics.DrawLine(pen,lx,ly+6,lx+17,ly+6);
            var name=s.s.TryGetProperty("label",out var label)?label.ToString():i.ToString();
            graphics.DrawString(name,font,foreground,new RectangleF(lx+22,ly,(width-88)/4-24,21));
        }
        return bitmap;
    }
    static float Value(JsonElement value)
    {
        if(value.ValueKind==JsonValueKind.Object&&value.TryGetProperty("y",out var y))value=y;
        // The original race simulator serializes its sampled values with toFixed(2).
        if(value.ValueKind==JsonValueKind.Number&&value.TryGetSingle(out var result))return result;
        return value.ValueKind==JsonValueKind.String&&float.TryParse(value.GetString(),NumberStyles.Float,CultureInfo.InvariantCulture,out result)?result:float.NaN;
    }
}
