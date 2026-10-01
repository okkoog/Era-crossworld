param(
    [Parameter(Mandatory=$true)][string]$ResourceRoot,
    [string]$ArchivePath,
    [switch]$Download,
    [ValidatePattern('^\d{8}$')][string]$Version='20260923',
    [long]$MaximumFileBytes=104857600,
    [long]$MaximumArchiveBytes=1073741824,
    [long]$MaximumExpandedBytes=2147483648
)
$ErrorActionPreference='Stop'
$ProgressPreference='SilentlyContinue'
# This installer writes runtime resources only. Original sources and saves are never extraction targets.
$MaximumFileBytes=[Math]::Min([long]104857600,[Math]::Max([long]1,$MaximumFileBytes))
$MaximumArchiveBytes=[Math]::Min([long]2147483648,[Math]::Max([long]1,$MaximumArchiveBytes))
$MaximumExpandedBytes=[Math]::Min([long]2147483648,[Math]::Max([long]1,$MaximumExpandedBytes))
$root=[IO.Path]::GetFullPath($ResourceRoot)
$res=[IO.Path]::GetFullPath([IO.Path]::Combine($root,'res'))
$prefix=$res.TrimEnd([IO.Path]::DirectorySeparatorChar)+[IO.Path]::DirectorySeparatorChar
$repo=[IO.Path]::GetFullPath([IO.Path]::Combine($PSScriptRoot,'../../..'))
$sourcePrefix=[IO.Path]::Combine($repo,'sources').TrimEnd([IO.Path]::DirectorySeparatorChar)+[IO.Path]::DirectorySeparatorChar
if(($root+[IO.Path]::DirectorySeparatorChar).StartsWith($sourcePrefix,[StringComparison]::OrdinalIgnoreCase)) {
    throw 'Use a runtime resource directory outside the preserved sources directory.'
}
[IO.Directory]::CreateDirectory($root)|Out-Null
$officialUrl="https://gitgud.io/api/v4/projects/43042/repository/archive.zip?sha=$Version&include_lfs_blobs=true"
if($Download) {
    if($ArchivePath) { throw 'Choose either -Download or a local -ArchivePath.' }
    $ArchivePath=[IO.Path]::Combine($root,"uma-resource-$Version.zip")
    if(-not [IO.File]::Exists($ArchivePath)) {
        $temporary=[IO.Path]::Combine($root,"download-$([Guid]::NewGuid().ToString('N')).tmp")
        $client=[Net.Http.HttpClient]::new()
        $client.Timeout=[TimeSpan]::FromMinutes(15)
        $client.DefaultRequestHeaders.UserAgent.ParseAdd('EraUma-Emuera/0.2')
        $cancel=[Threading.CancellationTokenSource]::new([TimeSpan]::FromMinutes(15))
        try {
            $response=$client.GetAsync($officialUrl,[Net.Http.HttpCompletionOption]::ResponseHeadersRead,$cancel.Token).GetAwaiter().GetResult()
            try {
                $response.EnsureSuccessStatusCode()|Out-Null
                if($response.Content.Headers.ContentLength -gt $MaximumArchiveBytes) { throw 'Resource ZIP exceeds the archive limit.' }
                $inputStream=$response.Content.ReadAsStreamAsync($cancel.Token).GetAwaiter().GetResult()
                $outputStream=[IO.FileStream]::new($temporary,[IO.FileMode]::CreateNew,[IO.FileAccess]::Write,[IO.FileShare]::Read)
                try {
                    $buffer=[byte[]]::new(1048576)
                    [long]$received=0
                    [long]$nextProgress=67108864
                    while(($read=$inputStream.ReadAsync($buffer,0,$buffer.Length,$cancel.Token).GetAwaiter().GetResult()) -gt 0) {
                        $received+=$read
                        if($received -gt $MaximumArchiveBytes) { throw 'Resource ZIP exceeds the archive limit.' }
                        $outputStream.Write($buffer,0,$read)
                        if($received -ge $nextProgress) { Write-Host "Downloaded $([Math]::Round($received/1MB)) MB"; $nextProgress+=67108864 }
                    }
                    if($received -eq 0) { throw 'Downloaded resource ZIP is empty.' }
                } finally { $outputStream.Dispose(); $inputStream.Dispose() }
                [IO.File]::Move($temporary,$ArchivePath)
            } finally { $response.Dispose() }
        } finally {
            $cancel.Dispose(); $client.Dispose()
            if([IO.File]::Exists($temporary)) { [IO.File]::Delete($temporary) }
        }
    }
} elseif(-not $ArchivePath) { throw 'Supply a local -ArchivePath or explicitly use -Download for the official resource archive.' }
$archive=[IO.Path]::GetFullPath($ArchivePath)
if((Get-Item -LiteralPath $archive).Length -gt $MaximumArchiveBytes) { throw 'Resource ZIP exceeds the archive limit.' }
$zip=[IO.Compression.ZipFile]::OpenRead($archive)
$allowedFolders=@('audio','ero','filters','others','race','sportswear','uniform-summer','uniform-winter')
$allowedFiles=@('.nomedia','game.csv','logo.png','title.png','资源包注意事项.txt')
$skipped=[Collections.Generic.List[object]]::new()
$plans=[Collections.Generic.List[object]]::new()
$names=[Collections.Generic.HashSet[string]]::new([StringComparer]::OrdinalIgnoreCase)
[long]$expanded=0
try {
    if($zip.Entries.Count -gt 50000) { throw 'Resource ZIP contains too many entries.' }
    foreach($entry in $zip.Entries) {
        $name=$entry.FullName.Replace('\','/')
        if($name.EndsWith('/')) { continue }
        if($name.StartsWith('/') -or $name.Contains(':') -or ($name.Split('/') -contains '..')) { throw "Unsafe ZIP path: $name" }
        if(($entry.ExternalAttributes -shr 16 -band 61440) -eq 40960) { throw "ZIP symbolic link is not allowed: $name" }
        $parts=$name.Split('/')
        if($parts[0] -eq 'res') { $relative=($parts|Select-Object -Skip 1)-join '/' }
        elseif($parts[0] -match '^uma-resource-[^/]+$') { $relative=($parts|Select-Object -Skip 1)-join '/' }
        else { $relative=$name }
        if($relative.StartsWith('res/')) { $relative=$relative.Substring(4) }
        $first=$relative.Split('/')[0]
        if(($allowedFolders -notcontains $first) -and ($allowedFiles -notcontains $relative)) {
            $skipped.Add([pscustomobject]@{path=$name;reason='not a resource package file'}); continue
        }
        if($entry.Length -gt $MaximumFileBytes) { $skipped.Add([pscustomobject]@{path=$name;reason='exceeds 100 MB file limit';bytes=$entry.Length}); continue }
        $expanded+=$entry.Length
        if($expanded -gt $MaximumExpandedBytes) { throw 'Resource ZIP exceeds the expanded size limit.' }
        $destination=[IO.Path]::GetFullPath([IO.Path]::Combine($res,$relative.Replace('/',[IO.Path]::DirectorySeparatorChar)))
        if(-not $destination.StartsWith($prefix,[StringComparison]::OrdinalIgnoreCase)) { throw "ZIP path escapes res/: $name" }
        if(-not $names.Add($destination)) { throw "Duplicate ZIP destination: $relative" }
        $plans.Add([pscustomobject]@{entry=$entry;path=$destination;relative=$relative})
    }
    if($plans.Count -eq 0) { throw 'ZIP contains no recognized erauma resources.' }
    # Validate every destination before writing. Refuse junctions/symlinks in an existing cache tree.
    foreach($plan in $plans) {
        $cursor=$plan.path
        while($cursor -and $cursor.StartsWith($root,[StringComparison]::OrdinalIgnoreCase)) {
            if(Test-Path -LiteralPath $cursor) {
                $item=Get-Item -LiteralPath $cursor -Force
                if($item.Attributes -band [IO.FileAttributes]::ReparsePoint) { throw "Resource destination is a link: $cursor" }
            }
            $cursor=[IO.Path]::GetDirectoryName($cursor)
        }
    }
    foreach($plan in $plans) {
        [IO.Directory]::CreateDirectory([IO.Path]::GetDirectoryName($plan.path))|Out-Null
        $temporary=$plan.path+'.install-'+[Guid]::NewGuid().ToString('N')
        try {
            $inputStream=$plan.entry.Open()
            $outputStream=[IO.FileStream]::new($temporary,[IO.FileMode]::CreateNew,[IO.FileAccess]::Write,[IO.FileShare]::None)
            try {
                $buffer=[byte[]]::new(65536)
                [long]$written=0
                while(($read=$inputStream.Read($buffer,0,$buffer.Length)) -gt 0) {
                    $written+=$read
                    if($written -gt $MaximumFileBytes -or $written -gt $plan.entry.Length) { throw "ZIP stream exceeds file limit: $($plan.relative)" }
                    $outputStream.Write($buffer,0,$read)
                }
            } finally { $outputStream.Dispose(); $inputStream.Dispose() }
            if((Get-Item -LiteralPath $temporary).Length -ne $plan.entry.Length) { throw "ZIP size mismatch: $($plan.relative)" }
            [IO.File]::Move($temporary,$plan.path,$true)
        } finally { if([IO.File]::Exists($temporary)) { [IO.File]::Delete($temporary) } }
    }
} finally { $zip.Dispose() }
$report=[ordered]@{
    version=$Version; officialUrl=$officialUrl; archive=$archive
    archiveSha256=(Get-FileHash -LiteralPath $archive -Algorithm SHA256).Hash.ToLowerInvariant()
    resourceRoot=$root; installedFiles=$plans.Count; expandedBytes=$expanded; skipped=@($skipped)
}
$json=$report|ConvertTo-Json -Depth 8
[IO.File]::WriteAllText([IO.Path]::Combine($root,'resource-install.json'),$json,[Text.Encoding]::UTF8)
$json
