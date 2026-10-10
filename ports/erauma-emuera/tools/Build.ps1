param(
    [Parameter(Mandatory=$true)][string]$EngineSource,
    [ValidateSet('Automatic','Interactive','Game','GameAutomatic','PlayAutomatic')][string]$Mode='Interactive'
)
$ErrorActionPreference='Stop'
$portPath=Split-Path $PSScriptRoot
$repoPath=(Resolve-Path (Join-Path $portPath '..\..')).Path
$enginePath=(Resolve-Path $EngineSource).Path
$expectedCommit='25c23dc8f425347738783e5ef322561d48c9f155'
$actualCommit=git -c "safe.directory=$enginePath" -C $enginePath rev-parse HEAD
if ($LASTEXITCODE -ne 0 -or $actualCommit -ne $expectedCommit) { throw "Expected Emuera source commit $expectedCommit" }
dotnet build (Join-Path $enginePath 'Emuera\Emuera.csproj') -c Release-NAudio -p:Platform=x64 --nologo -v:q
if($LASTEXITCODE -ne 0){throw 'Engine build failed'}
$assembly=(Join-Path $enginePath 'Emuera\artifacts\bin\Emuera\release-naudio\Emuera.dll')
dotnet build (Join-Path $portPath 'plugin\EraUma.Plugin.csproj') -c Release "-p:EmueraAssembly=$assembly" --nologo -v:q
if($LASTEXITCODE -ne 0){throw 'Plugin build failed'}
$runtimePath=Join-Path $portPath "artifacts\runtime-$Mode"
New-Item -ItemType Directory -Force "$runtimePath\ERB","$runtimePath\CSV","$runtimePath\Plugins" | Out-Null
$reference=Join-Path $repoPath 'test\ERA_CrossWorld_Runtime_Test_0.4.3'
Copy-Item -LiteralPath (Join-Path $reference 'Emuera.NET 1824+v24+EMv18+EEv56.exe') -Destination "$runtimePath\Emuera.exe"
Copy-Item "$reference\CSV\*" -Destination "$runtimePath\CSV"
Copy-Item -LiteralPath "$portPath\bootstrap\Gamebase.csv" -Destination "$runtimePath\CSV\Gamebase.csv"
Copy-Item -LiteralPath "$portPath\bootstrap\default.config" -Destination "$runtimePath\CSV\_default.config"
Copy-Item "$portPath\plugin\bin\Release\net10.0-windows\*.dll" -Destination "$runtimePath\Plugins"
Copy-Item "$portPath\bootstrap\probe.js" -Destination $runtimePath
$erb=[IO.File]::ReadAllText("$portPath\bootstrap\Probe.ERB")
if($Mode -in @('Game','GameAutomatic','PlayAutomatic')){
    if(!(Test-Path "$portPath\artifacts\kojo")){throw 'Compile kojo using tools/build-kojo.cjs first'}
    $template=switch($Mode){ 'Game' {'Game.ERB'} 'GameAutomatic' {'GameProbe.ERB'} 'PlayAutomatic' {'PlayProbe.ERB'} }
    $erb=[IO.File]::ReadAllText("$portPath\bootstrap\$template")
    @{source=(Join-Path $repoPath 'sources\erauma');engine="$portPath\third_party\ere";kojo="$portPath\artifacts\kojo";resources="$portPath\artifacts\resources"} |
        ConvertTo-Json | Set-Content "$runtimePath\game-paths.json" -Encoding utf8
}
if($Mode -eq 'Interactive'){
    $erb=[IO.File]::ReadAllText("$portPath\bootstrap\InteractiveProbe.ERB")
    Copy-Item "$portPath\bootstrap\interactive.js" -Destination "$runtimePath\probe.js"
}
[IO.File]::WriteAllText("$runtimePath\verification-mode.txt",$Mode)
[IO.File]::WriteAllText("$runtimePath\ERB\Probe.ERB",$erb,[Text.UTF8Encoding]::new($true))
[IO.File]::WriteAllText("$runtimePath\pluginsAware.txt",'Compatibility plugin knowingly packaged for this test.')
Write-Output "Built: $runtimePath\Emuera.exe ($Mode)"
