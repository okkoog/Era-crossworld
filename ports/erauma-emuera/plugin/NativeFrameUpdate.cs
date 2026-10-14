using System.Drawing.Imaging;
using System.Collections;
using System.Reflection;
using System.Windows.Forms;

namespace EraUma.Plugin;

// The pinned engine's ClearDisplay ends with a forced window.Refresh. Perform
// its data reset here without that paint, then commit once after rows/padding.
// Backlog mode ignores REDRAW, so retain the old bitmap gate only in that case.
internal sealed class NativeFrameUpdate : IDisposable
{
    readonly object console;
    readonly MethodInfo setRedraw;
    readonly MethodInfo refresh;
    readonly long previousRedraw;
    readonly PictureBox canvas;
    readonly PaintEventHandler nativePaint;
    readonly PaintEventHandler? retainedPaint;
    readonly Bitmap? previousFrame;
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
        var scroll=(ScrollBar)window.GetType().GetProperty("ScrollBar")!.GetValue(window)!;
        try
        {
            if(scroll.Value!=scroll.Maximum){
            previousFrame=new Bitmap(Math.Max(1,canvas.ClientSize.Width),Math.Max(1,canvas.ClientSize.Height),PixelFormat.Format32bppPArgb);
            using(var graphics=Graphics.FromImage(previousFrame))
            {
                graphics.SetClip(new Rectangle(Point.Empty,previousFrame.Size));
                type.GetMethod("OnPaint")!.Invoke(console,[graphics]);
            }
            retainedPaint=(_,e)=>e.Graphics.DrawImageUnscaled(previousFrame,0,0);
            canvas.Paint-=nativePaint;
            canvas.Paint+=retainedPaint;
            }
            try { setRedraw.Invoke(console,[0L]); }
            catch { if(retainedPaint is not null){canvas.Paint-=retainedPaint;canvas.Paint+=nativePaint;}throw; }
        }
        catch { previousFrame?.Dispose();throw; }
    }

    public void ClearDisplay()
    {
        // Keep this reset identical to EmueraConsole.Print.cs:45–63 in the
        // pinned engine, except for its final forced paint. No OS messages or
        // alternate game rules are involved. Escaped parts and clipboard history
        // must be cleared together with both native display lists and counters.
        var type=console.GetType();const BindingFlags fields=BindingFlags.Instance|BindingFlags.Public|BindingFlags.NonPublic;
        var clipboard=type.GetField("CBProc",fields)!.GetValue(console)!;
        clipboard.GetType().GetMethod("ClearScreen")!.Invoke(clipboard,null);
        ((IList)type.GetField("displayLineList",fields)!.GetValue(console)!).Clear();
        ((IList)type.GetField("_htmlElementList",fields)!.GetValue(console)!).Clear();
        type.Assembly.GetType("MinorShift.Emuera.Runtime.Utils.EvilMask.ConsoleEscapedParts",true)!.GetMethod("Clear")!.Invoke(null,null);
        type.GetField("logicalLineCount",fields)!.SetValue(console,0L);
        type.GetField("deletedLines",fields)!.SetValue(console,0);
        type.GetField("lineNo",fields)!.SetValue(console,0);
        type.GetField("lastDrawnLineNo",fields)!.SetValue(console,-1);
        type.GetMethod("verticalScrollBarUpdate",fields)!.Invoke(console,null);
    }

    public void Dispose()
    {
        if(disposed)return;
        disposed=true;
        if(retainedPaint is not null){canvas.Paint-=retainedPaint;canvas.Paint+=nativePaint;}
        try
        {
            setRedraw.Invoke(console,[previousRedraw]);
            refresh.Invoke(console,[true]);
        }
        finally { previousFrame?.Dispose(); }
    }
}
