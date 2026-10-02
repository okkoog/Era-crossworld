param(
    [string]$OutputRoot,
    [string]$RuntimePath,
    [string]$PackageName,
    [string]$ResourceRoot,
    [string]$NuGetRoot,
    [string]$KoreanSourceRepository,
    [string]$KoreanSourceCommit,
    [string]$KoreanKojoRoot
)
$ErrorActionPreference='Stop'
Set-StrictMode -Version Latest
$portPath=Split-Path $PSScriptRoot
$repoPath=(Resolve-Path (Join-Path $portPath '..\..')).Path
if (!$OutputRoot) { $OutputRoot=Join-Path $repoPath '..\..\outputs' }
if (!$RuntimePath) { $RuntimePath=Join-Path $portPath 'artifacts\runtime-Game' }
if (!$PackageName) { $PackageName='erauma-emuera-portable-'+(Get-Date -Format 'yyyyMMdd-HHmmss')+'-'+[guid]::NewGuid().ToString('N').Substring(0,8) }
if ($PackageName -notmatch '^[A-Za-z0-9][A-Za-z0-9._-]{0,99}$') { throw 'PackageName must be a simple folder name.' }
if (!$NuGetRoot) {
    $NuGetRoot=$env:NUGET_PACKAGES
    if (!$NuGetRoot) { $NuGetRoot=Join-Path $env:USERPROFILE '.nuget\packages' }
}
$RuntimePath=(Resolve-Path -LiteralPath $RuntimePath).Path
$OutputRoot=[IO.Path]::GetFullPath($OutputRoot)
$packageRoot=Join-Path $OutputRoot $PackageName
$archivePath=Join-Path $OutputRoot ($PackageName+'.zip')
if ((Test-Path -LiteralPath $packageRoot) -or (Test-Path -LiteralPath $archivePath)) { throw 'Output already exists. Choose a fresh PackageName; existing files are never removed.' }

$koreanRequested=([bool]$KoreanSourceRepository -or [bool]$KoreanSourceCommit -or [bool]$KoreanKojoRoot)
$koreanProvenance=$null
if ($koreanRequested) {
    if (!$KoreanSourceRepository -or !$KoreanSourceCommit -or !$KoreanKojoRoot) { throw 'KoreanSourceRepository, KoreanSourceCommit and KoreanKojoRoot must be supplied together.' }
    if ($KoreanSourceCommit -notmatch '^[0-9a-fA-F]{40}$') { throw 'KoreanSourceCommit must be a full Git commit SHA.' }
    $KoreanSourceRepository=(Resolve-Path -LiteralPath $KoreanSourceRepository).Path
    $KoreanKojoRoot=(Resolve-Path -LiteralPath $KoreanKojoRoot).Path
    $koreanHead=git -C $KoreanSourceRepository rev-parse HEAD
    if ($LASTEXITCODE -ne 0 -or $koreanHead.Trim() -ne $KoreanSourceCommit) { throw 'Korean source HEAD does not match KoreanSourceCommit.' }
    $koreanScope=@('sources/erauma/ere/i18n/ko-KR','sources/erauma/package.json')
    $koreanStatus=git -C $KoreanSourceRepository status --porcelain --untracked-files=all -- $koreanScope
    if ($LASTEXITCODE -ne 0 -or $koreanStatus) { throw 'Korean source files must be clean at the recorded commit.' }
    $baseScope=@('sources/erauma/ere',':!sources/erauma/ere/i18n/ko-KR',':!sources/erauma/ere/i18n/selector.js')
    git -C $repoPath diff --quiet HEAD $KoreanSourceCommit -- $baseScope
    if ($LASTEXITCODE -ne 0) { throw 'Korean source changes game files outside the Korean language pack and language selector.' }
    git -C $repoPath diff --quiet HEAD -- 'sources/erauma/ere' ':!sources/erauma/ere/i18n/ko-KR' 'sources/erauma/package.json'
    if ($LASTEXITCODE -ne 0) { throw 'Base game files must match the current repository commit.' }
    $koreanSourcePath=Join-Path $KoreanSourceRepository 'sources\erauma\ere\i18n\ko-KR'
    if (!(Test-Path -LiteralPath (Join-Path $koreanSourcePath 'entry.js'))) { throw 'Korean source is missing ere/i18n/ko-KR/entry.js.' }
    $baseSourcePackage=Get-Content -LiteralPath (Join-Path $repoPath 'sources\erauma\package.json') -Raw | ConvertFrom-Json
    $koreanSourcePackage=Get-Content -LiteralPath (Join-Path $KoreanSourceRepository 'sources\erauma\package.json') -Raw | ConvertFrom-Json
    if ($baseSourcePackage.version -ne $koreanSourcePackage.version) { throw 'Korean language pack and base game source versions differ.' }
    $koreanCompiledPath=Join-Path $KoreanKojoRoot 'i18n\ko-KR'
    if (!(Test-Path -LiteralPath $koreanCompiledPath)) { throw 'KoreanKojoRoot is missing i18n/ko-KR.' }
    $koreanKojoFiles=@(Get-ChildItem -LiteralPath $koreanSourcePath -Recurse -File -Force -Filter '*.kojo')
    $koreanCompiledFiles=@(Get-ChildItem -LiteralPath $koreanCompiledPath -Recurse -File -Force -Filter '*.kojo.js')
    if ($koreanKojoFiles.Count -ne 31 -or $koreanCompiledFiles.Count -ne $koreanKojoFiles.Count) { throw 'Korean source and compiled Kojo must each contain the reviewed 31 files.' }
    foreach ($sourceKojo in $koreanKojoFiles) {
        $relative=$sourceKojo.FullName.Substring($koreanSourcePath.Length+1)
        if (!(Test-Path -LiteralPath (Join-Path $koreanCompiledPath ($relative+'.js')) -PathType Leaf)) { throw "Missing compiled Korean Kojo: $relative" }
    }
    $koreanProvenance=@{
        format='erauma-emuera-language-provenance-v1';distributionVersion='0.3.3-ko1';baseRuntimeVersion='0.3.3'
        language='ko-KR';sourceRepository='okkoog/Era-crossworld';sourceCommit=$koreanHead.Trim()
        sourcePath='sources/erauma/ere/i18n/ko-KR';sourceVersion=$koreanSourcePackage.version
        sourceFiles=@(Get-ChildItem -LiteralPath $koreanSourcePath -Recurse -File -Force).Count
        sourceKojoFiles=$koreanKojoFiles.Count;compiledKojoFiles=$koreanCompiledFiles.Count
        entryPath='game/language-packs/ko-KR/entry.js';packagedSourcePath='game/erauma/ere/i18n/ko-KR';packagedKojoPath='game/kojo/i18n/ko-KR'
        fallbackPolicy='Existing Korean translations and reviewed text reuse are included; untranslated scenes and unmatched output calls retain Japanese fallback.'
        gameSelectorPolicy='The base game language selector is unchanged; the runtime loads the Korean language pack wrapper.'
    }
}

$reference=Join-Path $repoPath 'test\ERA_CrossWorld_Runtime_Test_0.4.3'
$referenceExe=Join-Path $reference 'Emuera.NET 1824+v24+EMv18+EEv56.exe'
$runtimeExe=Join-Path $RuntimePath 'Emuera.exe'
$referenceHash=(Get-FileHash -LiteralPath $referenceExe -Algorithm SHA256).Hash
if ((Get-FileHash -LiteralPath $runtimeExe -Algorithm SHA256).Hash -ne $referenceHash) { throw 'Emuera.exe differs from the exact bundled CrossWorld runtime.' }
if ([IO.File]::ReadAllText((Join-Path $RuntimePath 'ERB\Probe.ERB')) -cne [IO.File]::ReadAllText((Join-Path $portPath 'bootstrap\Game.ERB'))) { throw 'Package requires Build.ps1 -Mode Game, not an automatic verification bootstrap.' }
$pluginFiles=@('EraUma.Plugin.dll','EraUma.Compatibility.dll','Jint.dll','Acornima.dll')
foreach ($pluginFile in $pluginFiles) {
    $builtFile=Join-Path $portPath ('plugin\bin\Release\net10.0-windows\'+$pluginFile)
    $runtimeFile=Join-Path $RuntimePath ('Plugins\'+$pluginFile)
    if ((Get-FileHash -LiteralPath $builtFile -Algorithm SHA256).Hash -ne (Get-FileHash -LiteralPath $runtimeFile -Algorithm SHA256).Hash) { throw "Stale runtime DLL: $pluginFile. Run Build.ps1 -Mode Game again." }
}
$lock=Get-Content -LiteralPath (Join-Path $portPath 'compatibility\packages.lock.json') -Raw | ConvertFrom-Json
if ($lock.dependencies.'net10.0'.Jint.resolved -ne '4.16.4' -or $lock.dependencies.'net10.0'.Acornima.resolved -ne '1.7.0') { throw 'Update the packaging licenses and notices when NuGet versions change.' }
$packageSpecs=@(@{id='jint';version='4.16.4';license='BSD-2-Clause'},@{id='acornima';version='1.7.0';license='BSD-3-Clause'})
foreach ($spec in $packageSpecs) {
    [xml]$nuspec=Get-Content -LiteralPath (Join-Path $NuGetRoot ($spec.id+'\'+$spec.version+'\'+$spec.id+'.nuspec')) -Raw
    if ($nuspec.package.metadata.version -ne $spec.version -or $nuspec.package.metadata.license.InnerText -ne $spec.license) { throw "Unexpected NuGet metadata for $($spec.id)." }
}
if (!(Test-Path -LiteralPath (Join-Path $portPath 'artifacts\kojo'))) { throw 'Compile kojo using tools/build-kojo.cjs first.' }

New-Item -ItemType Directory -Path $packageRoot | Out-Null
$exclusions=[Collections.Generic.List[string]]::new()
function Copy-PackageFile([string]$Source,[string]$Destination) {
    $item=Get-Item -LiteralPath $Source -Force
    if ($item.PSIsContainer) { throw "Expected a file: $Source" }
    if ($item.Attributes -band [IO.FileAttributes]::ReparsePoint) { throw "Links are not copied: $Source" }
    $target=Join-Path $packageRoot $Destination
    [IO.Directory]::CreateDirectory((Split-Path $target)) | Out-Null
    [IO.File]::Copy($item.FullName,$target,$false)
}
function Copy-PackageTree([string]$Source,[string]$Destination,[string[]]$Extensions=@(),[string[]]$ExcludedSubtrees=@()) {
    $sourceRoot=(Resolve-Path -LiteralPath $Source).Path.TrimEnd('\','/')
    if ((Get-Item -LiteralPath $sourceRoot -Force).Attributes -band [IO.FileAttributes]::ReparsePoint) { throw "Links are not copied: $Source" }
    foreach ($item in Get-ChildItem -LiteralPath $sourceRoot -Force -Recurse) {
        $relative=$item.FullName.Substring($sourceRoot.Length+1).Replace('\','/')
        if (@($ExcludedSubtrees | Where-Object { $relative -eq $_ -or $relative.StartsWith($_+'/',[StringComparison]::OrdinalIgnoreCase) }).Count -gt 0) { continue }
        if ($item.Attributes -band [IO.FileAttributes]::ReparsePoint) { throw "Links are not copied: $($item.FullName)" }
        if ($item.PSIsContainer) { continue }
        if ($relative -match '(^|/)(\.git|node_modules|bin|obj|artifacts|results|sav|saves)(/|$)' -or $item.Name -match '^\.env($|\.)|\.sav$') {
            $exclusions.Add(($Destination+'/'+$relative).Replace('\','/'))
            continue
        }
        if ($Extensions.Count -gt 0 -and $item.Extension.ToLowerInvariant() -notin $Extensions -and $item.Name -ne 'packages.lock.json') { continue }
        Copy-PackageFile $item.FullName (Join-Path $Destination $relative)
    }
}

# Runtime allowlist: user saves, reports and automatic-test checkpoints never enter the package.
Copy-PackageFile $runtimeExe 'Emuera.exe'
Copy-PackageTree (Join-Path $RuntimePath 'CSV') 'CSV'
if ($koreanRequested) {
    $gamebasePath=Join-Path $packageRoot 'CSV\Gamebase.csv'
    $gamebase=[IO.File]::ReadAllText($gamebasePath)
    $gamebase=[regex]::Replace($gamebase,'(?m)^バージョン名,.*$','バージョン名,eraUma Emuera.NET 0.3.3-ko1')
    $gamebase=[regex]::Replace($gamebase,'(?m)^タイトル,.*$','タイトル,[0.3.3-ko1] era말딸 — 한국어 재사용팩')
    [IO.File]::WriteAllText($gamebasePath,$gamebase,[Text.UTF8Encoding]::new($false))
}
Copy-PackageTree (Join-Path $RuntimePath 'ERB') 'ERB'
foreach ($pluginFile in $pluginFiles) { Copy-PackageFile (Join-Path $RuntimePath ('Plugins\'+$pluginFile)) ('Plugins\'+$pluginFile) }
Copy-PackageFile (Join-Path $RuntimePath 'pluginsAware.txt') 'pluginsAware.txt'
if ($koreanRequested) { Copy-PackageTree (Join-Path $repoPath 'sources\erauma\ere') 'game\erauma\ere' @() @('i18n/ko-KR') }
else { Copy-PackageTree (Join-Path $repoPath 'sources\erauma\ere') 'game\erauma\ere' }
Copy-PackageFile (Join-Path $repoPath 'sources\erauma\build\static.json') 'game\erauma\build\static.json'
Copy-PackageFile (Join-Path $repoPath 'sources\erauma\LICENSE') 'game\erauma\LICENSE'
Copy-PackageFile (Join-Path $repoPath 'sources\erauma\package.json') 'game\erauma\package.json'
if ($koreanRequested) {
    Copy-PackageTree $koreanSourcePath 'game\erauma\ere\i18n\ko-KR'
}
if (!$ResourceRoot) {
    $installed=Join-Path $portPath 'artifacts\resources'
    if (Test-Path -LiteralPath (Join-Path $installed 'res')) { $ResourceRoot=$installed }
}
if ($ResourceRoot) {
    $resourcePath=(Resolve-Path -LiteralPath $ResourceRoot).Path
    if (Test-Path -LiteralPath (Join-Path $resourcePath 'res')) { $resourcePath=Join-Path $resourcePath 'res' }
    Copy-PackageTree $resourcePath 'game\res'
    if (Test-Path -LiteralPath (Join-Path $ResourceRoot 'resource-install.json')) {
        $installation=Get-Content -LiteralPath (Join-Path $ResourceRoot 'resource-install.json') -Raw | ConvertFrom-Json
        $provenance=@{version=$installation.version;officialUrl=$installation.officialUrl;archiveSha256=$installation.archiveSha256;installedFiles=$installation.installedFiles;expandedBytes=$installation.expandedBytes;skipped=$installation.skipped}
        [IO.File]::WriteAllText((Join-Path $packageRoot 'resource-provenance.json'),($provenance | ConvertTo-Json -Depth 8),[Text.UTF8Encoding]::new($false))
    }
}
Copy-PackageTree (Join-Path $portPath 'third_party\ere') 'game\engine'
if ($koreanRequested) { Copy-PackageTree (Join-Path $portPath 'artifacts\kojo') 'game\kojo' @() @('i18n/ko-KR') }
else { Copy-PackageTree (Join-Path $portPath 'artifacts\kojo') 'game\kojo' }
[IO.Directory]::CreateDirectory((Join-Path $packageRoot 'game\language-packs')) | Out-Null
if ($koreanRequested) {
    foreach ($compiledKojo in $koreanCompiledFiles) {
        $relative=$compiledKojo.FullName.Substring($koreanCompiledPath.Length+1)
        Copy-PackageFile $compiledKojo.FullName (Join-Path 'game\kojo\i18n\ko-KR' $relative)
    }
    $koreanEntryPath=Join-Path $packageRoot $koreanProvenance.entryPath
    [IO.Directory]::CreateDirectory((Split-Path $koreanEntryPath)) | Out-Null
    [IO.File]::WriteAllText($koreanEntryPath,"module.exports = require('#/i18n/ko-KR/entry');`n",[Text.UTF8Encoding]::new($false))
    [IO.File]::WriteAllText((Join-Path $packageRoot 'language-provenance.json'),($koreanProvenance | ConvertTo-Json -Depth 8),[Text.UTF8Encoding]::new($false))
}
foreach ($sourceFolder in @('compatibility','plugin','bootstrap','tests','tools')) {
    Copy-PackageTree (Join-Path $portPath $sourceFolder) ('adapter-source\'+$sourceFolder) @('.cs','.js','.csproj','.erb','.ps1','.cjs','.py','.md','.json','.csv','.config')
}
Copy-PackageFile (Join-Path $portPath 'README.md') 'adapter-source\README.md'
Copy-PackageTree (Join-Path $portPath 'packaging') 'adapter-source\packaging'
foreach ($document in @('ERAUMA_ENGINE_DEPENDENCIES.md','ERAUMA_COMPATIBILITY_API.md','ERAUMA_PORTING_STATUS.md','ERAUMA_KNOWN_ISSUES.md','API_USAGE.md','ERAUMA_UI_STATUS.md','ERAUMA_SECOND_WORK_ORDER.md','ERAUMA_KOREAN_PACK.md')) {
    Copy-PackageFile (Join-Path $portPath ('docs\'+$document)) ('docs\'+$document)
    Copy-PackageFile (Join-Path $portPath ('docs\'+$document)) ('adapter-source\docs\'+$document)
}
# Reviewed summaries and software-canvas examples are deliverables; raw runtime
# reports and user/test saves remain excluded by the runtime allowlist above.
foreach($evidenceVersion in @('0.3','0.3.1','0.3.2','0.3.3','0.3.3-ko1')) {
    $evidenceRelative='docs\evidence\'+$evidenceVersion
    $evidenceRoot=Join-Path $portPath $evidenceRelative
    if (Test-Path -LiteralPath $evidenceRoot) {
        Copy-PackageTree $evidenceRoot $evidenceRelative @('.md','.json','.png')
        Copy-PackageTree $evidenceRoot ('adapter-source\'+$evidenceRelative) @('.md','.json','.png')
    }
}
Copy-PackageTree (Join-Path $reference 'LICENSE') 'licenses\Emuera'
Copy-PackageTree (Join-Path $portPath 'packaging\licenses') 'licenses'
foreach ($spec in $packageSpecs) {
    Copy-PackageFile (Join-Path $NuGetRoot ($spec.id+'\'+$spec.version+'\'+$spec.id+'.nuspec')) ('licenses\'+$spec.id+'-'+$spec.version+'.nuspec')
}
Copy-PackageFile (Join-Path $portPath 'packaging\README_PORTABLE.md') 'README.md'
Copy-PackageFile (Join-Path $portPath 'packaging\THIRD_PARTY_NOTICES.md') 'THIRD_PARTY_NOTICES.md'
$paths=@{source='game/erauma';engine='game/engine';kojo='game/kojo';resources='game';languages='game/language-packs'}
[IO.File]::WriteAllText((Join-Path $packageRoot 'game-paths.json'),($paths | ConvertTo-Json),[Text.UTF8Encoding]::new($false))

$manifestFiles=@(Get-ChildItem -LiteralPath $packageRoot -Recurse -File -Force | Sort-Object FullName | ForEach-Object {
    @{path=$_.FullName.Substring($packageRoot.Length+1).Replace('\','/');bytes=$_.Length;sha256=(Get-FileHash -LiteralPath $_.FullName -Algorithm SHA256).Hash}
})
$commit=git -C $repoPath rev-parse HEAD
if ($LASTEXITCODE -ne 0) { throw 'Could not record repository commit.' }
$manifest=@{
    format='erauma-emuera-package-v1';createdUtc=[DateTime]::UtcNow.ToString('o');repositoryCommit=$commit.Trim()
    sourceStatus='Package reflects current local files; file hashes are authoritative, including uncommitted adapter changes.'
    requirements=@('Windows x64','.NET 10 Windows Desktop Runtime');gameExecutionNeedsNode=$false;gameExecutionNeedsElectron=$false
    paths=$paths;runtimeExeSha256=$referenceHash;nuget=@{Jint='4.16.4';Acornima='1.7.0'}
    resourcePackIncluded=[bool]$ResourceRoot
    excludedPolicy=@('User saves and sav-game/','Raw runtime results/ and checkpoints','All .env files','Git metadata','node_modules/','build bin/ and obj/','Original Electron engine/common submodules','Verification probe.js and automatic ERB')
    excludedFiles=@($exclusions | Sort-Object -Unique);files=$manifestFiles
}
if ($koreanRequested) { $manifest.languagePack=$koreanProvenance }
[IO.File]::WriteAllText((Join-Path $packageRoot 'package-manifest.json'),($manifest | ConvertTo-Json -Depth 8),[Text.UTF8Encoding]::new($false))
$manifestItem=Get-Item -LiteralPath (Join-Path $packageRoot 'package-manifest.json')
$zipFiles=@($manifestFiles)+@(@{path='package-manifest.json';bytes=$manifestItem.Length;sha256=(Get-FileHash -LiteralPath $manifestItem.FullName -Algorithm SHA256).Hash})
Add-Type -AssemblyName System.IO.Compression.FileSystem
[IO.Compression.ZipFile]::CreateFromDirectory($packageRoot,$archivePath,[IO.Compression.CompressionLevel]::Optimal,$true)
$zip=[IO.Compression.ZipFile]::OpenRead($archivePath)
try {
    $entries=@($zip.Entries | Where-Object {$_.Name})
    if ($entries.Count -ne $zipFiles.Count) { throw 'ZIP file count differs from the staged package.' }
    foreach ($file in $zipFiles) {
        $entry=$zip.GetEntry($PackageName+'/'+$file.path)
        if (!$entry -or $entry.Length -ne $file.bytes) { throw "ZIP entry differs: $($file.path)" }
        $stream=$entry.Open()
        $sha=[Security.Cryptography.SHA256]::Create()
        try { $zipFileHash=[BitConverter]::ToString($sha.ComputeHash($stream)).Replace('-','') }
        finally { $stream.Dispose();$sha.Dispose() }
        if ($zipFileHash -ne $file.sha256) { throw "ZIP hash differs: $($file.path)" }
    }
} finally { $zip.Dispose() }
foreach ($value in $paths.Values) {
    if ([IO.Path]::IsPathRooted($value) -or !(Test-Path -LiteralPath (Join-Path $packageRoot $value))) { throw "Not a portable game path: $value" }
}
$report=@{
    packageDirectory=$packageRoot;archive=$archivePath;sha256=(Get-FileHash -LiteralPath $archivePath -Algorithm SHA256).Hash
    files=$zipFiles.Count;bytes=(Get-Item -LiteralPath $archivePath).Length;runtimeExeSha256=$referenceHash
    allZipEntryHashesVerified=$true;relativeGamePathsVerified=$true
}
$report | ConvertTo-Json
