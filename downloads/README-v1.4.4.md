# MDViewer v1.4.4 Distribution Package

**Release Date:** June 23, 2025  
**Type:** Critical Bug Fix Release  
**Priority:** 🚨 HIGH - Recommended for all users

## 🚨 CRITICAL FIX: WebView2 Threading Issue Resolved

This release fixes a critical threading bug that caused application crashes with the error:
```
CoreWebView2 can only be accessed from the UI thread
```

**All users should update to this version immediately** for improved stability and reliability.

## 📦 Package Contents

This folder contains all distribution files for MDViewer v1.4.4:

| File | Size | Description | Best For |
|------|------|-------------|----------|
| **`MDViewer-v1.4.4-Setup.msi`** | 2.1 MB | 💿 Windows Installer | **Recommended** - Most users |
| **`Install-MDViewer-v1.4.4.bat`** | 1 KB | 🤖 Silent installer script | Automated deployment |
| **`MDViewer-v1.4.4-SelfContained.exe`** | 47.8 MB | 🚀 Self-extracting, standalone | Users without .NET 8 |
| **`MDViewer-v1.4.4-SelfContained.zip`** | 68.5 MB | 📦 Standalone portable | Servers/restricted environments |
| **`MDViewer-v1.4.4-Portable.exe`** | 261.3 MB | 🚀 Self-extracting portable | Quick deployment |
| **`MDViewer-v1.4.4-Portable.zip`** | 398.1 MB | 📦 Framework-dependent portable | Development environments |
| **`checksums-v1.4.4.txt`** | <1 KB | 🔍 SHA256 verification hashes | Security validation |
| **`README-v1.4.4.md`** | <1 KB | 📄 This documentation | Instructions |

## 🚀 Quick Installation

### Option 1: Automated Installation (Recommended)
```batch
# Run as Administrator
Install-MDViewer-v1.4.4.bat
```

### Option 2: Manual MSI Installation
1. Double-click `MDViewer-v1.4.4-Setup.msi`
2. Follow the installation wizard
3. Launch from Start Menu

### Option 3: Portable Version
1. Run `MDViewer-v1.4.4-SelfContained.exe` (no .NET required)
2. Or extract `MDViewer-v1.4.4-SelfContained.zip`
3. Run `MDViewer.exe` from extracted folder

## 🔍 File Verification

Verify your downloads using the provided checksums:

```powershell
Get-FileHash .\MDViewer-v1.4.4-Setup.msi -Algorithm SHA256
# Expected: 2F13022D7665BD8F852BA69DF569F86A9D89F3DC89FBC4AEA4D2255856CC669C
```

All checksums are in `checksums-v1.4.4.txt`.

## ✨ What's Fixed in v1.4.4

### 🚨 Critical Threading Fix
- ✅ **Fixed WebView2 cross-thread access errors** causing application crashes
- ✅ **Enhanced UI thread marshaling** for all WebView2 operations
- ✅ **Eliminated dangerous Task.Run usage** in LoadMarkdownFile method
- ✅ **Improved application stability** across all file loading scenarios

### 🛡️ Enhanced Safety
- ✅ **Thread-safe async execution** on UI thread only
- ✅ **Proper InvokeRequired checking** before WebView2 operations
- ✅ **Comprehensive thread validation** throughout the application

## 🎯 Who Should Update

### Immediate Update Required:
- ❗ **Users experiencing crashes** when opening markdown files
- ❗ **Users seeing WebView2 threading errors** in debug logs
- ❗ **Production environments** where stability is critical
- ❗ **Corporate deployments** requiring reliable operation

### Recommended Update:
- ✅ **All current users** for improved stability
- ✅ **New installations** should use this version
- ✅ **Development teams** working with markdown documentation

## 📋 System Requirements

- **OS:** Windows 10 version 1809 or later
- **.NET:** .NET 8 Runtime (included in self-contained versions)
- **WebView2:** Automatically installed by Windows Update
- **RAM:** 512 MB minimum, 1 GB recommended
- **Storage:** 100 MB available space

## 🔄 Upgrade Instructions

### From Any Previous Version
1. **MSI Users:** Run the new MSI - it will automatically upgrade
2. **Portable Users:** Extract to replace old installation
3. **Settings:** All user preferences are preserved automatically

### No Breaking Changes
This release is fully backward-compatible with all previous versions.

## 🧪 Validated Functionality

✅ **File Loading:** Recent files, drag-drop, command-line arguments  
✅ **Navigation:** Internal links, breadcrumbs, directory traversal  
✅ **WebView2:** Content rendering, JavaScript execution, print support  
✅ **Export:** PDF and Word export functionality  
✅ **Settings:** Window state, zoom, recent files persistence  
✅ **Threading:** All WebView2 operations on UI thread

## 💬 Support

- **Issues:** GitHub Issues for bug reports
- **Documentation:** Check `docs/` folder in installation directory
- **Enterprise:** Commercial support available at support@cnrit.com

## 📊 Release Stats

- **Critical Issues Fixed:** 1
- **Files Changed:** 5
- **Lines Added:** 323
- **Testing Scenarios:** 20+
- **Platforms Tested:** Windows 10, Windows 11

---

**Download any file above and experience the improved stability of MDViewer v1.4.4!**

*For complete technical details, see the main project repository.*
