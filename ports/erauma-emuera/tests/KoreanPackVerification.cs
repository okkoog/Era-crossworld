using EraUma.Compatibility;
using System.Text.Json;

// Exercises the shipped language pack with the exact shipped compatibility DLL.
// It does not replace, translate, or rewrite any game module.
static class KoreanPackVerification
{
    public static void Run(string runtime, string reportDirectory)
    {
        runtime = Path.GetFullPath(runtime);
        reportDirectory = Path.GetFullPath(reportDirectory);
        Directory.CreateDirectory(reportDirectory);
        var paths = JsonSerializer.Deserialize<Dictionary<string, string>>(File.ReadAllText(Path.Combine(runtime, "game-paths.json")))!;
        string PathFor(string key) => Path.GetFullPath(Path.Combine(runtime, paths[key]));
        var checks = new List<string>();
        void Check(bool condition, string name)
        {
            if (!condition) throw new InvalidOperationException(name);
            checks.Add(name);
        }
        Session Load(string save, bool start)
        {
            var game = new Session(save, () => 0, _ => { }, true);
            game.LoadGame(PathFor("source"), PathFor("engine"), PathFor("kojo"), start,
                resourceRoot: PathFor("resources"), languagePackDirectory: PathFor("languages"));
            Check(game.State != "error" && game.Error == "", "Packaged session initializes: " + game.Error);
            return game;
        }
        string Text(IReadOnlyList<OutputEvent> frame) => string.Join("\n", frame.Select(e => e.Text));
        void Resume(Session game, string value)
        {
            Check(game.State == "input", "Expected input boundary before " + value);
            game.Resume(value);
            Check(game.State != "error" && game.Error == "", "Input resumes without module errors: " + value + " " + game.Error);
        }

        var save = Path.Combine(reportDirectory, "isolated-saves");
        var main = Load(save, true);
        main.Drain();
        Resume(main, "1");
        main.Drain();
        Resume(main, "7");
        var frame = main.Drain();
        Check(frame.Any(e => e.Kind == "button" && e.Button == 5 && e.Text == "한국어"), "Production language menu exposes Korean choice 5");
        Resume(main, "5");
        frame = main.Drain();
        Check(main.EvaluateJson("__require('i18n/selector').lan()") == "\"ko-KR\"", "Menu selects ko-KR");
        Check(frame.Any(e => e.Kind == "button" && e.Button == 1 && e.Text == "새 게임") && frame.Any(e => e.Kind == "button" && e.Button == 2 && e.Text == "불러오기"), "Actual title menu emits Korean labels");
        Check(main.EvaluateJson("era.get('global:3')") == "\"ko-KR\"" && File.Exists(Path.Combine(save, "sav", "global.sav")), "Production language selection saves the locale");
        Check(main.EvaluateJson("__require('i18n/selector').lans()") == "[\"zh-CN\",\"en-US\",\"ru-RU\",\"ja-JP\",\"ko-KR\"]", "All four original locales remain available");
        main.Quit();

        var restored = Load(save, true);
        Check(restored.EvaluateJson("__require('i18n/selector').lan()") == "\"ko-KR\"", "Fresh session restores the saved Korean locale");
        Check(Text(restored.Drain()).Contains("면책 사항"), "Fresh-session disclaimer uses Korean");
        restored.Quit();

        var scenes = Load(Path.Combine(reportDirectory, "isolated-scenes"), false);
        scenes.Execute("var selector=__require('i18n/selector');selector.set_lan('ko-KR');__game.global[3]='ko-KR';var random=__require('i18n/ko-KR/timon/others/random'),jp=__require('i18n/ja-JP/timon/others/random'),__eventResult=null;var trainer={get_colored_name:()=>({content:'Trainer',color:'#12abcd'})},chara={get_colored_name:()=>({content:'Chara',color:'#ef1234'})};");
        Check(scenes.EvaluateJson("Object.keys(random).length") == "38", "All 38 current random-scene keys are retained");
        Check(scenes.EvaluateJson("Object.keys(jp).filter(k=>random[k]===jp[k]).length") == "21", "Untouched 21 scenes retain Japanese function fallback");
        Check(scenes.EvaluateJson("[random.god_coin.title,random.breakfast.title,random.wind_welcome.title,random.kamen_rider.title]") == "[\"세 여신상의 소원의 우물\",\"「아침 식사」\",\"바람이 찾아오다\",\"가면(?)라이더!\"]", "All four reused event titles load in Jint");
        var branchReports = new List<object>();
        void Scene(string name, string call, string[] choices, string? result, string[] expected, bool disabledThird = false)
        {
            var events = new List<OutputEvent>();
            int choice = 0, boundaries = 0;
            bool disabledObserved = false;
            scenes.Start("await era.clear();__eventResult=await random." + call + ";");
            while (scenes.State == "input" && boundaries++ < 30)
            {
                var current = scenes.Drain();
                events.AddRange(current);
                if (scenes.WaitingForContinue) scenes.Resume("");
                else
                {
                    if (disabledThird && choice == 1)
                    {
                        Check(!current.Any(e => e.Kind == "button" && e.Button == 3), name + ": unavailable costume remains disabled");
                        disabledObserved = true;
                    }
                    Check(choice < choices.Length, name + ": no unexpected choice boundary");
                    scenes.Resume(choices[choice++]);
                }
            }
            events.AddRange(scenes.Drain());
            Check(scenes.State == "done" && scenes.Error == "", name + ": scene completes in shipped Jint: " + scenes.Error);
            Check(choice == choices.Length && (!disabledThird || disabledObserved), name + ": expected choice structure retained");
            if (result != null) Check(scenes.EvaluateJson("__eventResult") == result, name + ": original return value retained");
            var text = Text(events);
            foreach (var literal in expected) Check(text.Contains(literal), name + ": expected translated/fallback output: " + literal);
            branchReports.Add(new { name, boundaries, choices = choice, result });
        }
        const string coin = "동전이나 하나 던져서 소원을 빌어 볼까...";
        Scene("god-red", "god_coin({},0.1,340)", [], null, [coin, "열정적인, 붉은 목소리……"]);
        Scene("god-blue", "god_coin({},0.1,341)", [], null, [coin, "포용적인, 푸른 목소리……"]);
        Scene("god-yellow", "god_coin({},0.1,342)", [], null, [coin, "엄격한, 노란 목소리……"]);
        Scene("god-no-goddess", "god_coin({},0.1,undefined)", [], null, [coin, "아…… 이거 어쩌면 될지도……?"]);
        Scene("god-realization", "god_coin({},0.6,340)", [], null, [coin, "아…… 이거 어쩌면 될지도……?"]);
        Scene("god-nothing", "god_coin({},0.8,340)", [], null, [coin, "역시 아무 일도 일어나지 않았다……"]);
        Scene("god-double", "god_coin({},0.95,340)", [], null, [coin, "줍는 순간 두 개가 되었다!"]);
        Scene("breakfast", "breakfast(chara,trainer)", [], null, ["トレーナー室へ入ると、", "Trainer", "Chara", "그 우유 병의 포장…… 왠지 낯익은데……", "……분명 착각이겠지."]);
        Scene("wind-normal", "wind_welcome(trainer,false)", ["1"], "[1]", ["Trainer", "의 몸 옆을 스치는 산들바람이 운동장 잔디의 상쾌한 향기를 실어 온다."]);
        Scene("wind-race", "wind_welcome(trainer,true)", ["2"], "[2]", ["「오늘 레이스도 순조롭게 진행되길」(??? 호감도+50)"]);
        Scene("rider-decline", "kamen_rider(trainer,false)", ["2"], "[2]", ["「가면라이더 흉내 내기, 따뜻한 마음 전하기～」"]);
        Scene("rider-carrot", "kamen_rider(trainer,false)", ["1", "1"], "[1,1]", ["店主は ", "Trainer", "대호평이었다! 왠지 낯익은 학생들도 보이는 것 같은데?!"]);
        Scene("rider-magic", "kamen_rider(trainer,false)", ["1", "2"], "[1,2]", ["반응이 아주 좋다! 비록 이 옷은 입기가 꽤 힘들지만……"]);
        Scene("rider-mask", "kamen_rider(trainer,false)", ["1", "3"], "[1,3]", ["가게 마스코트로서의 효과는 좋지만, 뭔가 잃어버린 것 같은 기분이 든다……"]);
        Scene("rider-disabled", "kamen_rider(trainer,true)", ["1", "2"], "[1,2]", ["반응이 아주 좋다! 비록 이 옷은 입기가 꽤 힘들지만……"], true);
        Check(scenes.Diagnostics.Count == 0, "Language initialization and all scenes produce no missing-module diagnostics");
        scenes.Quit();
        var summary = new { pass = true, date = "2026-10-02", scope = "Exact shipped Jint DLL: production locale selection and restart persistence; four changed scenes in 15 isolated branch cases, Japanese fallback and returns. Not human play or FPS measurement.", checks, branchReports };
        var json = JsonSerializer.Serialize(summary, new JsonSerializerOptions { WriteIndented = true, Encoder = System.Text.Encodings.Web.JavaScriptEncoder.UnsafeRelaxedJsonEscaping });
        File.WriteAllText(Path.Combine(reportDirectory, "korean-pack-summary.json"), json);
        Console.WriteLine(JsonSerializer.Serialize(new { pass = true, checks = checks.Count, branchCases = branchReports.Count, report = Path.Combine(reportDirectory, "korean-pack-summary.json") }));
    }
}
