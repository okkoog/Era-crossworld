param([string]$Runtime=(Join-Path $PSScriptRoot '..\artifacts\runtime-PlayAutomatic'))
$ErrorActionPreference='Stop'
$runtimePath=(Resolve-Path $Runtime).Path
$portPath=Split-Path $PSScriptRoot
$erbPath=Join-Path $runtimePath 'ERB\Probe.ERB'
$originalErb=[IO.File]::ReadAllBytes($erbPath)
function Invoke-Phase([string]$Template,[string]$Evidence) {
    Copy-Item -LiteralPath (Join-Path $portPath "bootstrap\$Template") -Destination $erbPath
    $reportPath=Join-Path $runtimePath 'results\runtime.json'
    if(Test-Path -LiteralPath $reportPath){Remove-Item -LiteralPath $reportPath}
    $testProcess=Start-Process -FilePath "$runtimePath\Emuera.exe" -WorkingDirectory $runtimePath -WindowStyle Hidden -PassThru
    try {
        $deadline=[DateTime]::UtcNow.AddMinutes(4)
        while(!(Test-Path -LiteralPath $reportPath)){
            if($testProcess.HasExited){throw "Emuera exited before reporting: $($testProcess.ExitCode)"}
            if([DateTime]::UtcNow -gt $deadline){throw 'Emuera report timed out'}
            Start-Sleep -Milliseconds 250
        }
        $report=Get-Content -LiteralPath $reportPath -Raw | ConvertFrom-Json
        if($report.erbVerdict -notlike 'PASS:*' -or $report.error){throw "Runtime failed: $($report | ConvertTo-Json -Compress)"}
        Copy-Item -LiteralPath $reportPath -Destination (Join-Path $runtimePath "results\$Evidence.json")
        Write-Output $report.erbVerdict
    } finally {
        # QUIT may leave the engine's final screen open. Stop only the process this test created.
        if(!$testProcess.HasExited){Stop-Process -Id $testProcess.Id; $testProcess.WaitForExit()}
    }
}
try {
    Invoke-Phase 'Probe.ERB' 'bridge'
    Invoke-Phase 'PlayProbe.ERB' 'play'
    Invoke-Phase 'RestoreProbe.ERB' 'restart-restore'
} finally {[IO.File]::WriteAllBytes($erbPath,$originalErb)}
