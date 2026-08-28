using MinorShift.Emuera.Runtime.Utils.PluginSystem;
using System;
using System.Data;

namespace CrossWorld.RuntimeTest.Plugin
{
    public class PluginManifest : PluginManifestAbstract
    {
        public PluginManifest()
        {
            methods.Add(new PingMethod());
            methods.Add(new PrintMethod());
            methods.Add(new GlobalVariableMethod());
            methods.Add(new DataTableMethod());
            methods.Add(new ComputeMethod());
        }

        public override string PluginName => "CrossWorld Runtime Test Plugin";
        public override string PluginDescription => "CALLSHARP bridge validation plugin for ERA CrossWorld.";
        public override string PluginVersion => "0.4.3";
        public override string PluginAuthor => "ERA CrossWorld";
    }

    public class PingMethod : IPluginMethod
    {
        public string Name => "CWRT4Ping";
        public string Description => "Tests integer/string reference arguments.";

        public void Execute(PluginMethodParameter[] args)
        {
            if (args.Length > 0)
                args[0].intValue = 424242;
            if (args.Length > 1)
                args[1].strValue = "CrossWorld C# plugin OK";
        }
    }

    public class PrintMethod : IPluginMethod
    {
        public string Name => "CWRT4Print";
        public string Description => "Tests PluginManager output API.";

        public void Execute(PluginMethodParameter[] args)
        {
            var api = PluginManager.GetInstance();
            api.Print("[C# API] PluginManager.Print reached Emuera successfully.");
            api.PrintNewLine();
        }
    }

    public class GlobalVariableMethod : IPluginMethod
    {
        public string Name => "CWRT4GlobalVar";
        public string Description => "Directly reads/writes built-in GLOBAL:0.";

        public void Execute(PluginMethodParameter[] args)
        {
            var api = PluginManager.GetInstance();

            long before = api.GetIntVar("GLOBAL", 0);
            long after = before + 1000;
            api.SetIntVar("GLOBAL", after, 0);

            if (args.Length > 0)
                args[0].intValue = before;
            if (args.Length > 1)
                args[1].intValue = after;
        }
    }

    public class DataTableMethod : IPluginMethod
    {
        public string Name => "CWRT4DataTable";
        public string Description => "Directly modifies an ERB-created DataTable.";

        public void Execute(PluginMethodParameter[] args)
        {
            var api = PluginManager.GetInstance();
            DataTable table = api.GetDataTable("cwrt4_db");

            long before = Convert.ToInt64(table.Rows[0]["value"]);
            long after = before + 1000;
            table.Rows[0]["value"] = after;

            if (args.Length > 0)
                args[0].intValue = before;
            if (args.Length > 1)
                args[1].intValue = after;
        }
    }

    public class ComputeMethod : IPluginMethod
    {
        public string Name => "CWRT4Compute";
        public string Description => "Runs a deterministic integer workload in C#.";

        public void Execute(PluginMethodParameter[] args)
        {
            long iterations = args.Length > 0 ? args[0].intValue : 0;
            const long mod = 1_000_000_007L;
            long checksum = 0;

            for (long i = 1; i <= iterations; i++)
                checksum = (checksum + (i * 37L + 17L)) % mod;

            if (args.Length > 1)
                args[1].intValue = checksum;
        }
    }
}
