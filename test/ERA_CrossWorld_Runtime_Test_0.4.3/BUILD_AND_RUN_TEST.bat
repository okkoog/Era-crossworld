@echo off
setlocal
cd /d "%~dp0"

call BUILD_PLUGIN.bat
if errorlevel 1 exit /b

start "" "Emuera.NET 1824+v24+EMv18+EEv56.exe"
