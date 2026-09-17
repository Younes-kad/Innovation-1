@echo off
setlocal
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  for /d %%D in ("%LOCALAPPDATA%\FootholdTools\node-*-win-x64") do set "PATH=%%D;%PATH%"
)
where node >nul 2>nul
if errorlevel 1 (
  echo Installer Node.js LTS og proev igen.
  exit /b 1
)
if not exist node_modules (
  call npm.cmd install
  if errorlevel 1 exit /b 1
)
call npm.cmd start