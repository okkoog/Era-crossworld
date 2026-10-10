param([string]$RuntimePath,[string]$ResourceRoot,[switch]$NoResources,[switch]$OpenResourcePage)
$ErrorActionPreference='Stop'
$portPath=Split-Path $PSScriptRoot
if(!$RuntimePath){$RuntimePath=Join-Path $portPath 'artifacts\runtime-Game'}
$runtimeSource=(Resolve-Path -LiteralPath $RuntimePath).Path
$runtimePath=Join-Path $portPath ('artifacts\runtime-UiScreens-'+[Guid]::NewGuid().ToString('N').Substring(0,8))
[IO.Directory]::CreateDirectory((Join-Path $runtimePath 'Plugins')) | Out-Null
[IO.Directory]::CreateDirectory((Join-Path $runtimePath 'ERB')) | Out-Null
Copy-Item -LiteralPath (Join-Path $runtimeSource 'Emuera.exe') -Destination $runtimePath
Copy-Item -LiteralPath (Join-Path $runtimeSource 'CSV') -Destination $runtimePath -Recurse
Copy-Item -LiteralPath (Join-Path $portPath 'bootstrap\default.config') -Destination (Join-Path $runtimePath 'CSV\_default.config')
Get-ChildItem -LiteralPath (Join-Path $portPath 'plugin\bin\Release\net10.0-windows') -Filter '*.dll' | Copy-Item -Destination (Join-Path $runtimePath 'Plugins')
Copy-Item -LiteralPath (Join-Path $runtimeSource 'pluginsAware.txt') -Destination $runtimePath
$paths=Get-Content -LiteralPath (Join-Path $runtimeSource 'game-paths.json') -Raw | ConvertFrom-Json -AsHashtable
foreach($key in @($paths.Keys)){$paths[$key]=[IO.Path]::GetFullPath($paths[$key],$runtimeSource)}
$paths.fixtures=Join-Path $portPath 'tests\fixtures'
if($NoResources){$paths.resources=Join-Path $runtimePath 'no-res'}
elseif($ResourceRoot){$paths.resources=[IO.Path]::GetFullPath($ResourceRoot)}
else{$paths.resources=Join-Path $portPath 'artifacts\resources'}
$paths | ConvertTo-Json | Set-Content -LiteralPath (Join-Path $runtimePath 'game-paths.json') -Encoding utf8
$erb=[Collections.Generic.List[string]]::new()
foreach($line in Get-Content -LiteralPath (Join-Path $portPath 'bootstrap\UiScreens.ERB')){
    $erb.Add($line)
    if($OpenResourcePage -and $line -match '"capture","title"'){$erb.Add('CALLSHARP EraUmaBridge("ui-open-resource","",STATE,MESSAGE)')}
    if($line.StartsWith('CALLSHARP') -and $line -notmatch '"report"'){
        $erb.Add('IF STATE < 0');$erb.Add('PRINTFORML %MESSAGE%')
        $erb.Add('CALLSHARP EraUmaBridge("report","FAIL: original UI frame recording",STATE,MESSAGE)')
        $erb.Add('QUIT');$erb.Add('ENDIF')
    }
}
[IO.File]::WriteAllLines((Join-Path $runtimePath 'ERB\Probe.ERB'),$erb,[Text.UTF8Encoding]::new($true))
$runtimePath | Set-Content -LiteralPath (Join-Path $portPath 'artifacts\ui-runtime-path.txt') -Encoding utf8
$reportPath=Join-Path $runtimePath 'results\runtime.json'
$testProcess=Start-Process -FilePath (Join-Path $runtimePath 'Emuera.exe') -WorkingDirectory $runtimePath -WindowStyle Hidden -PassThru
try{
    $deadline=[DateTime]::UtcNow.AddMinutes(4)
    while(!(Test-Path -LiteralPath $reportPath)){
        if($testProcess.HasExited){throw "UI runtime exited before report: $runtimePath"}
        if([DateTime]::UtcNow -gt $deadline){throw "UI runtime timed out: $runtimePath"}
        Start-Sleep -Milliseconds 250
    }
    $report=Get-Content -LiteralPath $reportPath -Raw | ConvertFrom-Json
    if($report.error -or $report.bridgeError -or $report.erbVerdict -notlike 'PASS:*'){throw "UI runtime failed: $runtimePath / $($report.bridgeError) $($report.error)"}
    $expected=@('disclaimer','title','new-game-name','new-game-character','new-game-custom','new-game-load','load','main','main-invalid-input','training','character-info','items','out','shop-event','shop','race-registration','save','race-preview','race-playback','race-progress-start','race-progress-next','race-result','race-speed-chart')
    foreach($name in $expected){if(!(Test-Path -LiteralPath (Join-Path $runtimePath "results\screen-$name.png"))){throw "Missing canvas: $name"}}
    if($report.redraw.partialFrames -le 0 -or $report.redraw.preservedLines -le 0){throw 'Unchanged native rows were not retained'}
    if($report.imageWarnings.Count -ne 0 -or $report.audioWarnings.Count -ne 0){throw 'UI resource warnings occurred'}
    if($OpenResourcePage -and $report.lastOpenedUrl -ne 'https://umaera.gitgud.site/data/uma-resource/full.html'){throw 'Original resource URL was not opened'}
    $progressStart=Get-Content -LiteralPath (Join-Path $runtimePath 'results\layout-race-progress-start.json') -Raw
    $progressNext=Get-Content -LiteralPath (Join-Path $runtimePath 'results\layout-race-progress-next.json') -Raw
    if($progressStart -eq $progressNext){throw 'Race animation did not advance'}
    $chartLayout=Get-Content -LiteralPath (Join-Path $runtimePath 'results\layout-race-speed-chart.json') -Raw
    if($chartLayout -notmatch '"type":"chart"' -or $chartLayout -notmatch '"datasets"'){throw 'Original race chart was not reached'}
    $shopLayout=Get-Content -LiteralPath (Join-Path $runtimePath 'results\layout-shop.json') -Raw
    if($shopLayout -notmatch '"accelerator":998'){throw 'Original shop menu was not reached'}
    $summary=@{date='2026-10-01';scope='Original game menu canvas and input regressions; not human play';runtime=$runtimePath;noResources=[bool]$NoResources;screens=$expected;state=$report.state;error=$report.error;redraw=$report.redraw;nativeImages=$report.nativeImages;audioOutput=$report.audioOutput;imageWarnings=$report.imageWarnings;audioWarnings=$report.audioWarnings;resourceImages=$report.resources.AvailableImages;resourceAudio=$report.resources.AvailableAudio;lastOpenedUrl=$report.lastOpenedUrl}
    $summary | ConvertTo-Json -Depth 6 | Set-Content -LiteralPath (Join-Path $runtimePath 'results\ui-summary.json') -Encoding utf8
    $summary | ConvertTo-Json -Depth 6
}finally{if(!$testProcess.HasExited){Stop-Process -Id $testProcess.Id;$testProcess.WaitForExit()}}
