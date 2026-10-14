param(
    [Parameter(Mandatory=$true)][string]$RuntimePath,
    [string]$OutputRoot
)
$ErrorActionPreference='Stop'
Set-StrictMode -Version Latest
$portPath=Split-Path $PSScriptRoot
$repoPath=(Resolve-Path -LiteralPath (Join-Path $portPath '..\..')).Path
$RuntimePath=(Resolve-Path -LiteralPath $RuntimePath).Path
if(!$OutputRoot){$OutputRoot=Join-Path $repoPath '..\..\outputs'}
$outputPath=[IO.Path]::GetFullPath((Join-Path $OutputRoot ('korean-pack-'+[guid]::NewGuid().ToString('N').Substring(0,8))))
[IO.Directory]::CreateDirectory($outputPath)|Out-Null
$pluginPath=Join-Path $RuntimePath 'Plugins'
$references=@('EraUma.Compatibility','Jint','Acornima')
function Xml([string]$value){[Security.SecurityElement]::Escape($value)}
$project="<Project Sdk='Microsoft.NET.Sdk'><PropertyGroup><OutputType>Exe</OutputType><TargetFramework>net10.0</TargetFramework><ImplicitUsings>enable</ImplicitUsings><Nullable>enable</Nullable></PropertyGroup><ItemGroup>"
foreach($name in $references){
    $dll=Join-Path $pluginPath ($name+'.dll')
    if(!(Test-Path -LiteralPath $dll)){throw ('Missing shipped DLL: '+$name)}
    $project+="<Reference Include='$(Xml $name)'><HintPath>$(Xml $dll)</HintPath></Reference>"
}
$testSource=Join-Path $portPath 'tests\KoreanPackVerification.cs'
$project+="<Compile Include='$(Xml $testSource)' Link='KoreanPackVerification.cs'/></ItemGroup></Project>"
[IO.File]::WriteAllText((Join-Path $outputPath 'KoreanPackProbe.csproj'),$project,[Text.UTF8Encoding]::new($false))
[IO.File]::WriteAllText((Join-Path $outputPath 'Program.cs'),'KoreanPackVerification.Run(args[0],args[1]);',[Text.UTF8Encoding]::new($false))
dotnet run --project (Join-Path $outputPath 'KoreanPackProbe.csproj') -c Release -- $RuntimePath $outputPath
if($LASTEXITCODE -ne 0){throw 'Korean package integration regression failed'}
$loaded=Join-Path $outputPath 'bin\Release\net10.0'
foreach($name in $references){
    if((Get-FileHash -LiteralPath (Join-Path $pluginPath ($name+'.dll'))).Hash -ne (Get-FileHash -LiteralPath (Join-Path $loaded ($name+'.dll'))).Hash){throw ('Test DLL does not match shipped DLL: '+$name)}
}
'Verified against the exact shipped DLLs.'
