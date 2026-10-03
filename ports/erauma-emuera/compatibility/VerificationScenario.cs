using System.Diagnostics;
using System.IO.Compression;
using System.Security.Cryptography;
using System.Text.Json;
using System.Text.Json.Nodes;
using System.Text.RegularExpressions;

namespace EraUma.Compatibility;

/// <summary>Exercises unchanged game menus with isolated, menu-generated saved games.</summary>
public static class VerificationScenario
{
    const uint RandomSeed = 17;
    const string MetricsExpression = "({target:era.get('flag:当前互动角色'),speed:era.get('base:3:速度'),energy:era.get('base:0:精力'),turn:era.get('flag:当前回合数'),trainingWeeks:era.get('cflag:3:育成回合计时'),registration:__require('system/sys-calc-base-cflag').sys_reg_race(3),history:__require('data/race/model/race-history').get(3).get_entries()})";

    public static string Run(string source, string engine, string kojo, string fixtures, string saveDirectory, bool restoreOnly = false)
    {
        var clock = Stopwatch.StartNew();
        var checks = new List<string>();
        var metrics = new Dictionary<string, JsonElement>();
        long startupMs = 0, trainingMs = 0, raceMs = 0, saveMs = 0, reloadMs = 0;
        var directory = Path.GetFullPath(saveDirectory);
        var originalRoot = Path.GetFullPath(source).TrimEnd(Path.DirectorySeparatorChar);
        if (directory.Equals(originalRoot, StringComparison.OrdinalIgnoreCase) || directory.StartsWith(originalRoot + Path.DirectorySeparatorChar, StringComparison.OrdinalIgnoreCase))
            throw new ArgumentException("Verification saves must be outside the original source directory.");
        Directory.CreateDirectory(directory);

        void Check(bool value, string name)
        {
            if (!value) throw new InvalidOperationException("Verification failed: " + name);
            checks.Add(name);
        }

        Session Create(bool start)
        {
            var elapsed = Stopwatch.StartNew();
            var session = new Session(directory, () => 0, _ => { }, true);
            session.LoadGame(source, engine, kojo, start);
            if (start && startupMs == 0) startupMs = elapsed.ElapsedMilliseconds;
            else reloadMs += elapsed.ElapsedMilliseconds;
            if (session.State == "error") throw new InvalidOperationException("Game startup failed: " + session.Error);
            return session;
        }

        void ComparePersisted(int slot, string expected, string name)
        {
            var fresh = Create(false);
            var elapsed = Stopwatch.StartNew();
            fresh.Start($"if(!await era.loadData({slot}))throw Error('checkpoint load failed');");
            Check(fresh.State == "done" && JsonNode.DeepEquals(JsonNode.Parse(expected), JsonNode.Parse(fresh.EvaluateJson("__game.data"))), name);
            reloadMs += elapsed.ElapsedMilliseconds;
        }

        void TitleLoad(Walker walk, int slot)
        {
            var elapsed = Stopwatch.StartNew();
            walk.TitleLoad(slot);
            reloadMs += elapsed.ElapsedMilliseconds;
        }

        void Save(Walker walk, int slot)
        {
            var elapsed = Stopwatch.StartNew();
            walk.Save(slot);
            saveMs += elapsed.ElapsedMilliseconds;
        }

        if (restoreOnly)
        {
            var expected = File.ReadAllText(Path.Combine(directory, "checkpoint.json"));
            var checkpoint = ReadSave(directory, 6);
            Check(JsonNode.DeepEquals(JsonNode.Parse(expected), JsonNode.Parse(checkpoint)), "saved checkpoint file is unchanged across process restart");
            ComparePersisted(6, expected, "complete original save restores exactly in a fresh JavaScript engine");
            var expectedMetrics = Parse(File.ReadAllText(Path.Combine(directory, "checkpoint-metrics.json")));
            metrics["persisted"] = expectedMetrics;
            var session = Create(true);
            var walk = new Walker(session);
            TitleLoad(walk, 6);
            var restored = Parse(session.EvaluateJson(MetricsExpression));
            metrics["restoredMenu"] = restored;
            Check(Number(restored, "speed") == Number(expectedMetrics, "speed") && JsonNode.DeepEquals(JsonNode.Parse(restored.GetProperty("history").GetRawText()), JsonNode.Parse(expectedMetrics.GetProperty("history").GetRawText())), "original title and load menus retain trained attributes and race history");
            var before = session.EvaluateJson("__game.data");
            walk.Choose(205);
            walk.ReturnToMain();
            Check(session.EvaluateJson("__game.data") != before, "rest action continues after a separate process reload");
            session.Quit();
            Check(session.State == "done" && session.Error == "", "original quit ends the restored session normally");
            return Report();
        }

        var fixtureRoot = Directory.Exists(Path.Combine(fixtures, "sav")) ? Path.Combine(fixtures, "sav") : fixtures;
        var targetSav = Path.Combine(directory, "sav");
        if (Path.GetFullPath(fixtureRoot).TrimEnd(Path.DirectorySeparatorChar).Equals(Path.GetFullPath(targetSav).TrimEnd(Path.DirectorySeparatorChar), StringComparison.OrdinalIgnoreCase))
            throw new ArgumentException("Verification must copy fixtures into a separate save directory.");
        Directory.CreateDirectory(targetSav);
        foreach (var name in new[] { "global.sav", "save1.sav", "save2.sav", "save3.sav", "save4.sav" })
            File.Copy(Path.Combine(fixtureRoot, name), Path.Combine(targetSav, name), true);
        Check(true, "menu-generated fixtures copied into isolated saves");

        var game = Create(true);
        var driver = new Walker(game);
        TitleLoad(driver, 1);
        var trainingBefore = Parse(game.EvaluateJson(MetricsExpression));
        metrics["trainingBefore"] = trainingBefore;
        Check(driver.Main && Number(trainingBefore, "target") == 3, "original title and load menus restore Teio training fixture");
        Seed(game);
        var trainingClock = Stopwatch.StartNew();
        driver.Choose(101);
        driver.SkipText();
        Check(driver.Has(200), "original training menu exposes speed training");
        driver.Choose(200);
        driver.SkipText();
        // The first training may include the original guided-training event choices.
        driver.ReturnToMain();
        trainingMs = trainingClock.ElapsedMilliseconds;
        var trainingAfter = Parse(game.EvaluateJson(MetricsExpression));
        metrics["trainingAfter"] = trainingAfter;
        Check(Number(trainingAfter, "speed") > Number(trainingBefore, "speed"), "speed training increases the original character attribute");
        Check(Number(trainingAfter, "energy") < Number(trainingBefore, "energy"), "speed training consumes original player energy");

        Save(driver, 5);
        var savedTraining = ReadSave(directory, 5);
        ComparePersisted(5, savedTraining, "training save restores all persisted state in a fresh JavaScript engine");
        var reloadedGame = Create(true);
        driver = new Walker(reloadedGame);
        TitleLoad(driver, 5);
        Check(Number(Parse(reloadedGame.EvaluateJson(MetricsExpression)), "speed") == Number(trainingAfter, "speed"), "original load menu retains completed speed training");
        var restedBefore = reloadedGame.EvaluateJson("__game.data");
        driver.Choose(205);
        driver.ReturnToMain();
        Check(reloadedGame.EvaluateJson("__game.data") != restedBefore, "original rest action continues after menu-based training reload");

        var raceLoadClock = Stopwatch.StartNew();
        driver.Choose(406);
        driver.SkipText();
        driver.Choose(3);
        driver.ReturnToMain();
        reloadMs += raceLoadClock.ElapsedMilliseconds;
        Seed(reloadedGame);
        var raceBefore = Parse(reloadedGame.EvaluateJson(MetricsExpression));
        metrics["raceBefore"] = raceBefore;
        Check(Number(raceBefore.GetProperty("registration").GetProperty("curr"), "race") == 0, "original load menu restores registered debut race");
        driver.ConfigureRaceSummary();
        var raceClock = Stopwatch.StartNew();
        driver.Choose(102);
        driver.SkipText();
        Check(driver.Has(100), "original race preview reaches setup");
        driver.Choose(100);
        driver.SkipText();
        if (driver.Has(3))
        {
            driver.Choose(3);
            driver.SkipText();
        }
        Check(driver.Has(0) && driver.Has(1) && driver.Has(2), "original race simulation reaches result playback controls");
        driver.Choose(0);
        driver.SkipText();
        Check(driver.Has(3) && driver.Has(99), "original race result exposes statistic choices");
        driver.Choose(3);
        driver.SkipText();
        Check(driver.ChartSeen, "original speed statistic chart is rendered through the compatibility adapter");
        driver.Choose(99);
        driver.SkipText();
        if (driver.Has(3) && driver.Has(999))
        {
            driver.Choose(3);
            driver.SkipText();
        }
        driver.ReturnToMain();
        raceMs = raceClock.ElapsedMilliseconds;
        var raceAfter = Parse(reloadedGame.EvaluateJson(MetricsExpression));
        metrics["raceAfter"] = raceAfter;
        Check(driver.Main, "original race and event flow returns to the main menu");
        Check(Number(raceAfter.GetProperty("registration").GetProperty("curr"), "race") == -1, "completed race clears original registration");
        Check(driver.Rank is >= 1 and <= 20, "original race rank summary is printed");
        var history = raceAfter.GetProperty("history").EnumerateArray().ToArray();
        Check(driver.Rank != 1 || history.Any(e => Number(e, "race") == 0 && Number(e, "rank") == 1), "winning debut result is retained by the original RaceHistory rules");
        metrics["rankSummary"] = Parse(JsonSerializer.Serialize(new { rank = driver.Rank, resultRecorded = history.Any(e => Number(e, "race") == 0), chart = driver.ChartSeen }));

        Save(driver, 6);
        var persisted = ReadSave(directory, 6);
        ComparePersisted(6, persisted, "post-race original save restores complete persisted state");
        // Read the saved bytes: the save menu can mutate transient flags after it serializes.
        File.WriteAllText(Path.Combine(directory, "checkpoint.json"), persisted);
        var checkpointSession = Create(false);
        checkpointSession.Start("if(!await era.loadData(6))throw Error('checkpoint metrics load failed');");
        Check(checkpointSession.State == "done", "persisted checkpoint metrics are readable");
        var checkpointMetrics = checkpointSession.EvaluateJson(MetricsExpression);
        File.WriteAllText(Path.Combine(directory, "checkpoint-metrics.json"), checkpointMetrics);
        metrics["persisted"] = Parse(checkpointMetrics);
        reloadedGame.Quit();
        Check(reloadedGame.State == "done" && reloadedGame.Error == "", "original quit ends the scenario normally");
        return Report();

        string Report() => JsonSerializer.Serialize(new
        {
            passed = true,
            restoreOnly,
            checks,
            metrics,
            elapsedMs = clock.ElapsedMilliseconds,
            startupMs,
            trainingMs,
            raceMs,
            saveMs,
            reloadMs,
            workingSet = Environment.WorkingSet,
            randomSeed = RandomSeed,
            saveDirectory = directory,
            checkpointSha256 = Convert.ToHexString(SHA256.HashData(File.ReadAllBytes(Path.Combine(directory, "sav", "save6.sav")))).ToLowerInvariant(),
            scope = "Unchanged original training, race, save and load menus; no story transcript retained."
        }, new JsonSerializerOptions { WriteIndented = true });
    }

    static JsonElement Parse(string json)
    {
        using var document = JsonDocument.Parse(json);
        return document.RootElement.Clone();
    }

    static double Number(JsonElement value, string key) => value.GetProperty(key).GetDouble();

    static void Seed(Session session) => session.Execute($"var __scenarioSeed={RandomSeed};Math.random=function(){{__scenarioSeed^=__scenarioSeed<<13;__scenarioSeed^=__scenarioSeed>>>17;__scenarioSeed^=__scenarioSeed<<5;return (__scenarioSeed>>>0)/4294967296;}};");

    static string ReadSave(string directory, int slot)
    {
        using var file = File.OpenRead(Path.Combine(directory, "sav", $"save{slot}.sav"));
        var first = file.ReadByte();
        var second = file.ReadByte();
        file.Position = 0;
        if (first == 0x1f && second == 0x8b)
        {
            using var gzip = new GZipStream(file, CompressionMode.Decompress);
            using var reader = new StreamReader(gzip);
            return reader.ReadToEnd();
        }
        using var text = new StreamReader(file);
        return text.ReadToEnd();
    }

    sealed class Walker
    {
        readonly Session session;
        IReadOnlyList<OutputEvent> last = [];
        Regex? rankPattern;
        public bool ChartSeen { get; private set; }
        public int? Rank { get; private set; }
        public bool Main => Has(405) && Has(205);
        public bool Has(long button) => last.Any(e => e.Kind == "button" && e.Button == button);

        public Walker(Session session)
        {
            this.session = session;
            Read();
        }

        public void ConfigureRaceSummary()
        {
            var name = JsonSerializer.Deserialize<string>(session.EvaluateJson("__require('utils/chara-talk-factory').get_chara_talk(3).name"))!;
            var template = JsonSerializer.Deserialize<string>(session.EvaluateJson("__text(__require('i18n/selector').i18n().get_ui_race_result('__NAME__','__RACE__',__require('i18n/selector').i18n().race.result_template.replace('%RANK%','__RANK__')))"))!;
            rankPattern = new Regex(Regex.Escape(template).Replace("__NAME__", Regex.Escape(name)).Replace("__RACE__", ".+?").Replace("__RANK__", "([0-9]+)"));
            ChartSeen = false;
            Rank = null;
        }

        void Read()
        {
            last = session.Drain();
            foreach (var item in last)
            {
                ChartSeen |= item.Text.StartsWith("[chart data] ", StringComparison.Ordinal);
                var match = rankPattern?.Match(item.Text);
                if (match?.Success == true) Rank = int.Parse(match.Groups[1].Value);
            }
            if (session.State == "error") throw new InvalidOperationException("Original game execution failed: " + session.Error);
        }

        void Input(string text)
        {
            if (session.State != "input") throw new InvalidOperationException("Expected original input boundary; state=" + session.State);
            session.Resume(text);
            Read();
        }

        public void Choose(long button)
        {
            if (!Has(button)) throw new InvalidOperationException($"Original button {button} is unavailable. Enabled values: " + string.Join(',', last.Where(e => e.Kind == "button").Select(e => e.Button)));
            Input(button.ToString(System.Globalization.CultureInfo.InvariantCulture));
        }

        public void SkipText()
        {
            for (var count = 0; count < 300; count++)
            {
                if (session.State == "timer")
                {
                    session.AdvanceTimers(10_000);
                    Read();
                }
                else if (session.State == "input" && !last.Any(e => e.Kind == "button")) Input("");
                else return;
            }
            throw new InvalidOperationException("Original text flow exceeded the bounded input count.");
        }

        public void TitleLoad(int slot)
        {
            Choose(1);
            SkipText();
            Choose(2);
            SkipText();
            Choose(slot);
            ReturnToMain();
        }

        public void ReturnToMain()
        {
            for (var count = 0; count < 100; count++)
            {
                SkipText();
                if (Main) return;
                var choices = last.Where(e => e.Kind == "button").Select(e => e.Button).Distinct().ToArray();
                if (choices.Length == 0) throw new InvalidOperationException("Game ended before returning to the main menu.");
                // Existing event buttons only: favor the target racer and neutral acknowledgments.
                var choice = choices.Contains(3) ? 3 : choices.Contains(1) ? 1 : choices.Contains(999) ? 999 : choices.Contains(99) ? 99 : choices.Where(x => x >= 0 && x <= 300).DefaultIfEmpty(long.MinValue).Min();
                if (choice == long.MinValue) throw new InvalidOperationException("No supported acknowledgment in original event menu.");
                Choose(choice);
            }
            throw new InvalidOperationException("Race/event flow did not return to the main menu within the bounded input count.");
        }

        public void Save(int slot)
        {
            Choose(405);
            SkipText();
            Choose(slot);
            SkipText();
            if (Has(0) && Has(100))
            {
                Choose(0);
                SkipText();
            }
            Choose(99);
            ReturnToMain();
        }
    }
}
