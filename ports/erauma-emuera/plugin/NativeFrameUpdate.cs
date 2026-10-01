using System.Drawing.Imaging;
using System.Reflection;
using System.Windows.Forms;

namespace EraUma.Plugin;

// The pinned engine's ClearDisplay forces a paint even with REDRAW disabled.
// Keep the previous complete canvas visible until all rows, images and padding
// are ready. Ordinary native painting (including selection and scrolling) is
// restored before the single committed frame is painted.
internal sealed class NativeFrameUpdate : IDisposable
{
    readonly object console;
    readonly MethodInfo setRedraw;
    readonly MethodInfo refresh;
    readonly long previousRedraw;
    readonly PictureBox canvas;
    readonly PaintEventHandler nativePaint;
    readonly PaintEventHandler retainedPaint;
    readonly Bitmap previousFrame;
    bool disposed;

    public NativeFrameUpdate(object console)
    {
        this.console=console;
        var type=console.GetType();
        setRedraw=type.GetMethod("SetRedraw")!;
        refresh=type.GetMethod("RefreshStrings")!;
        previousRedraw=type.GetProperty("Redraw")!.GetValue(console)!.ToString()=="None"?0:1;
        var window=type.GetField("window",BindingFlags.Instance|BindingFlags.NonPublic)!.GetValue(console)!;
        canvas=(PictureBox)window.GetType().GetProperty("MainPicBox")!.GetValue(window)!;
        nativePaint=window.GetType().GetMethod("mainPicBox_Paint",BindingFlags.Instance|BindingFlags.NonPublic)!
            .CreateDelegate<PaintEventHandler>(window);
        previousFrame=new Bitmap(Math.Max(1,canvas.ClientSize.Width),Math.Max(1,canvas.ClientSize.Height),PixelFormat.Format32bppPArgb);
        try
        {
            using(var graphics=Graphics.FromImage(previousFrame))
            {
                graphics.SetClip(new Rectangle(Point.Empty,previousFrame.Size));
                type.GetMethod("OnPaint")!.Invoke(console,[graphics]);
            }
            retainedPaint=(_,e)=>e.Graphics.DrawImageUnscaled(previousFrame,0,0);
            canvas.Paint-=nativePaint;
            canvas.Paint+=retainedPaint;
            try { setRedraw.Invoke(console,[0L]); }
            catch { canvas.Paint-=retainedPaint;canvas.Paint+=nativePaint;throw; }
        }
        catch { previousFrame.Dispose();throw; }
    }

    public void Dispose()
    {
        if(disposed)return;
        disposed=true;
        canvas.Paint-=retainedPaint;
        canvas.Paint+=nativePaint;
        try
        {
            setRedraw.Invoke(console,[previousRedraw]);
            refresh.Invoke(console,[true]);
        }
        finally { previousFrame.Dispose(); }
    }
}
