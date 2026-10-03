using EraUma.Compatibility;
using System.Text.Json;

static class UiVerification
{
    public static void Run(string source,string engine,string resources)
    {
        var checks=new List<string>();
        void Check(bool value,string name){if(!value)throw new InvalidOperationException(name);checks.Add(name);}
        string root=Path.Combine(Path.GetTempPath(),"erauma-ui-"+Guid.NewGuid().ToString("N"));
        string languageRoot=Path.Combine(root,"language-packs");
        Directory.CreateDirectory(Path.Combine(languageRoot,"ko-KR"));
        File.WriteAllText(Path.Combine(languageRoot,"ko-KR","entry.js"),"module.exports=class extends require('#/i18n/ja-JP/entry'){language='한국어 테스트';speed='검증용 속도';};");
        // This small extension exists only in the isolated test, never in the delivered game.
        var offline=ResourceCatalog.Load(source,Path.Combine(root,"no-res"));
        Check(offline.AvailableImages==0&&offline.AvailableAudio==0,"No resource pack yields a safe empty catalog");
        var installed=ResourceCatalog.Load(source,resources);
        Check(installed.MetadataImages==2786&&installed.AvailableImages==2786&&installed.MissingImages==0,"All 2786 official image names resolve");
        Check(installed.MetadataAudio==22&&installed.AvailableAudio==22&&installed.CsvFiles==66&&installed.Warnings.Count==0,"All 22 audio names and 66 CSV mappings resolve without warnings");
        var game=new Session(Path.Combine(root,"save"),()=>0,_=>{},true);
        game.LoadGame(source,engine,start:false,resourceRoot:Path.Combine(root,"no-res"),languagePackDirectory:languageRoot);
        Check(game.State=="done"&&game.Error=="","Original game API starts without installed resources");
        game.Execute("var selector=__require('i18n/selector');selector.set_lan('ko-KR');");
        Check(game.EvaluateJson("selector.lans()") == "[\"zh-CN\",\"en-US\",\"ru-RU\",\"ja-JP\",\"ko-KR\"]","Independent pack adds a locale without replacing original locales");
        Check(JsonSerializer.Deserialize<string>(game.EvaluateJson("selector.__('speed')"))=="검증용 속도"&&JsonSerializer.Deserialize<string>(game.EvaluateJson("selector.i18n().speed"))=="검증용 속도","Both original translation APIs use independent pack values");
        game.Execute("selector.set_lan('ja-JP');__game.global[3]='ja-JP';");
        Check(JsonSerializer.Deserialize<string>(game.EvaluateJson("selector.i18n().speed"))=="スピード","Switching back restores original Japanese language pack");
        game.Start("await era.clear();era.printMultiColumns([{type:'text',content:selector.i18n().speed,config:{color:'#ff00ff',width:6,offset:2}},{type:'button',content:'choice',accelerator:7,config:{width:6}},{type:'progress',percentage:35,inContent:'ratio'}]);await era.input();");
        var frame=game.Drain();
        using(var row=JsonDocument.Parse(frame.Single(e=>e.Kind=="row-start").Text)){
            var column=row.RootElement.GetProperty("columns")[0];
            Check(column.GetProperty("config").GetProperty("width").GetInt32()==6&&column.GetProperty("config").GetProperty("offset").GetInt32()==2&&column.GetProperty("content").GetString()=="スピード","Original grid geometry and translated text reach renderer unchanged");
        }
        for(int i=0;i<20;i++){game.Resume("invalid");frame=game.Drain();}
        Check(game.State=="input"&&frame.Count(e=>e.Kind=="notice")==1&&!frame.Any(e=>e.Text.StartsWith("Enter a value")),"Repeated invalid input replaces one localized notice without prompt spam");
        game.Resume("7");Check(game.State=="done","Original numeric choice resumes the pending game input");
        game.Start("await era.input({any:true});");frame=game.Drain();
        using(var row=JsonDocument.Parse(frame.First(e=>e.Kind=="row-start").Text))Check(row.RootElement.GetProperty("inactive").GetBoolean(),"Old choice rows become inactive at the next input boundary");
        Check(game.WaitingForContinue,"Narrative input without active choices accepts click-to-continue");
        game.Resume("");
        game.Start("await era.clear();era.printButton('choice',9);await era.input({any:true});");game.Drain();
        Check(!game.WaitingForContinue,"An active numeric choice remains a value input even when any is allowed");game.Resume("9");
        game.Start("await era.clear();era.print('name');await era.input({rule:'.+'});");game.Drain();
        Check(!game.WaitingForContinue,"Free text entry is not replaced by a click-to-continue wait");game.Resume("Trainer");
        game.Start("await era.clear();era.print('name');await era.input({any:true,rule:'.+'});");game.Drain();
        Check(!game.WaitingForContinue,"Any-key input with an active rule keeps value entry");game.Resume("Trainer");
        game.Start("await era.clear();era.print([{content:'resource',url:'https://umaera.gitgud.site/data/uma-resource/full.html'}]);await era.input({any:true});");game.Drain();
        Check(!game.WaitingForContinue,"A current URL keeps native value input so the link stays clickable");game.Resume("");
        game.Start("await era.clear();era.printLineChart({data:{labels:[0,1,2],datasets:[{label:'race',data:['4.00','9.00','2.00']}]},options:{}});await era.input({any:true});");
        Check(game.State=="input"&&game.Error=="","Chart output starts normally: "+game.Error);
        frame=game.Drain();
        using(var row=JsonDocument.Parse(frame.First(e=>e.Kind=="row-start").Text)){
            var chart=row.RootElement.GetProperty("columns")[0];
            Check(chart.GetProperty("type").GetString()=="chart"&&chart.GetProperty("data").GetProperty("datasets")[0].GetProperty("data").GetArrayLength()==3,"Native chart receives every original dataset point");
        }
        game.Resume("");
        game.Execute("__presentationDelays=true;");
        game.Start("await era.clear();era.print('before animation');await era.delay(10000);era.print('after animation');");
        game.Drain();
        Check(game.State=="timer"&&game.HasTimers,"Interactive presentation delay suspends without blocking the host");
        game.AdvanceTimers(9000);game.Drain();
        Check(game.State=="timer","Animation remains pending before its original deadline");
        game.AdvanceTimers(1100);
        Check(game.State=="done"&&game.Drain().Any(e=>e.Kind=="line"&&e.Text=="after animation"),"Timer resumes original animated output after its deadline");
        Console.WriteLine(JsonSerializer.Serialize(new{checks,date="2026-10-01",scope="Resource, UI event and independent i18n pack regressions; not human play",installedImages=installed.AvailableImages,installedAudio=installed.AvailableAudio}));
    }
}
