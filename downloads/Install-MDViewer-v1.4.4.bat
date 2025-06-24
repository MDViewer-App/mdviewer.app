@echo off
echo Installing MDViewer v1.4.4...
echo.

REM Check if MSI exists
if not exist "MDViewer-v1.4.4-Setup.msi" (
    echo ERROR: MDViewer-v1.4.4-Setup.msi not found in current directory
    echo Please ensure the MSI file is in the same directory as this batch file.
    pause
    exit /b 1
)

REM Install the MSI
echo Running installer...
msiexec /i "MDViewer-v1.4.4-Setup.msi" /passive /norestart

if %errorlevel% neq 0 (
    echo ERROR: Installation failed with error code %errorlevel%
    echo.
    echo You can also try running the MSI directly:
    echo   MDViewer-v1.4.4-Setup.msi
    pause
    exit /b %errorlevel%
)

echo.
echo ✅ MDViewer v1.4.4 installed successfully!
echo.
echo 🚨 CRITICAL UPDATE: This version fixes WebView2 threading crashes!
echo.
echo You can now:
echo - Launch MDViewer from the Start Menu
echo - Double-click .md files to open them with MDViewer
echo - Right-click .md files and select "Open with MDViewer"
echo.
echo What's new in v1.4.4:
echo ✅ Fixed WebView2 cross-thread access errors causing crashes
echo ✅ Enhanced UI thread marshaling for improved stability
echo ✅ Eliminated dangerous Task.Run usage in file loading
echo ✅ Comprehensive threading safety improvements
echo.
pause
