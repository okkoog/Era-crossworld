@echo off
setlocal EnableExtensions
cd /d "%~dp0"

set "COMMIT=25c23dc8f425347738783e5ef322561d48c9f155"
set "SRC_DIR=engine_src\emuera.em-%COMMIT%"
set "SRC_ZIP=engine_src\emuera.em-%COMMIT%.zip"
set "SRC_URL=https://gitlab.com/EvilMask/emuera.em/-/archive/25c23dc8f425347738783e5ef322561d48c9f155/emuera.em-25c23dc8f425347738783e5ef322561d48c9f155.zip"

echo ============================================================
echo ERA CrossWorld Runtime Test 0.4.1 - C# Plugin Build
echo ============================================================
echo.

where dotnet >nul 2>nul
if errorlevel 1 (
  echo [STOP] dotnet was not found.
  pause
  exit /b 10
)

dotnet --list-sdks | findstr /R /B "10\." >nul
if errorlevel 1 (
  echo [STOP] .NET 10 SDK was not found.
  pause
  exit /b 11
)

if not exist "%SRC_DIR%\Emuera\Emuera.csproj" (
  echo [DOWNLOAD] Exact Emuera source commit:
  echo %COMMIT%
  echo.
  powershell -NoProfile -ExecutionPolicy Bypass -Command ^
    "$ProgressPreference='SilentlyContinue'; Invoke-WebRequest -Uri '%SRC_URL%' -OutFile '%SRC_ZIP%'"
  if errorlevel 1 (
    echo [FAIL] Could not download the official Emuera source archive.
    pause
    exit /b 20
  )

  echo [EXTRACT] Emuera source
  powershell -NoProfile -ExecutionPolicy Bypass -Command ^
    "Expand-Archive -Path '%SRC_ZIP%' -DestinationPath 'engine_src' -Force"
  if errorlevel 1 (
    echo [FAIL] Could not extract the Emuera source archive.
    pause
    exit /b 21
  )
)

if not exist "%SRC_DIR%\Emuera\Emuera.csproj" (
  echo [FAIL] Exact Emuera source project was not found after extraction.
  echo Expected: %SRC_DIR%\Emuera\Emuera.csproj
  pause
  exit /b 22
)

echo.
echo [BUILD] Plugin with official ProjectReference / Release-NAudio
dotnet build "plugin_src\CrossWorld.RuntimeTest.Plugin\CrossWorld.RuntimeTest.Plugin.csproj" -c Release-NAudio -p:Platform=x64
if errorlevel 1 (
  echo.
  echo [FAIL] Plugin build failed.
  echo Please send this build window.
  pause
  exit /b 30
)

if not exist "plugins\CrossWorld.RuntimeTest.Plugin.dll" (
  echo [FAIL] Build succeeded but plugin DLL was not copied.
  pause
  exit /b 31
)

echo.
echo [PASS] Plugin DLL built:
echo plugins\CrossWorld.RuntimeTest.Plugin.dll
echo.
pause
exit /b 0
