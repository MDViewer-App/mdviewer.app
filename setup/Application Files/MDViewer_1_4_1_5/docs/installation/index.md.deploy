# 📁 Installation Guide

**Get MDViewer installed and running on your system**

---

## 🖥️ **System Requirements**

### **Minimum Requirements**
- **Operating System**: Windows 10 (version 1809) or later
- **Architecture**: x64, x86, or ARM64
- **.NET Runtime**: .NET 8.0 Runtime (automatically installed if missing)
- **WebView2**: Microsoft Edge WebView2 (pre-installed on most systems)
- **Memory**: 256 MB RAM available
- **Storage**: 50 MB free disk space

### **Recommended Requirements**
- **Operating System**: Windows 11 or Windows 10 (latest version)
- **Memory**: 512 MB RAM available
- **Storage**: 100 MB free disk space for better performance
- **Display**: 1024x768 or higher resolution

### **Optional Dependencies**
- **Pandoc**: For Word document export (automatic installation attempted)
- **PowerShell**: For enhanced export functionality (usually pre-installed)

---

## 📦 **Installation Methods**

### **🔧 Method 1: MSI Installer (Recommended)**

The easiest way to install MDViewer with full integration.

#### **Download & Install**
1. Download `MDViewer-v1.3.0-Setup.msi` from the [Releases page](https://github.com/noc-cnrit/mdviewer/releases)
2. Double-click the MSI file to start installation
3. Follow the installation wizard prompts
4. Choose installation location (defaults to `%LOCALAPPDATA%\MDViewer`)
5. Select optional components (Desktop shortcut, file associations)
6. Click "Install" to complete the process

#### **What's Included**
- ✅ MDViewer application with all dependencies
- ✅ WebView2 runtime components for all architectures
- ✅ Start Menu shortcuts
- ✅ Optional desktop shortcut
- ✅ File associations for `.md` and `.markdown` files
- ✅ "Open with MDViewer" context menu entries
- ✅ Automatic updates to recent version

#### **Post-Installation**
- Find MDViewer in Start Menu → MDViewer
- Right-click any `.md` file to see "Open with MDViewer" option
- Run `MDViewer.exe filename.md` from command line

---

### **📁 Method 2: Portable Version**

Perfect for USB drives, network shares, or no-install environments.

#### **Download & Setup**
1. Download `MDViewer-v1.3.0-Portable.zip` from releases
2. Extract to your preferred location (USB drive, Documents, etc.)
3. No installation required - just run `MDViewer.exe`

#### **What's Included**
- ✅ Complete MDViewer application
- ✅ All required dependencies bundled
- ✅ WebView2 runtime components
- ✅ README.txt with setup instructions
- ✅ Self-contained - no registry changes

#### **Manual File Association** (Optional)
1. Right-click any `.md` file
2. Choose "Open with" → "Choose another app"
3. Browse to the portable folder and select `MDViewer.exe`
4. Check "Always use this app" for automatic association

---

### **⚙️ Method 3: Build from Source**

For developers and advanced users who want to customize or contribute.

#### **Prerequisites**
- Visual Studio 2022 or .NET 8 SDK
- Git for source code download
- Windows 10+ development environment

#### **Build Steps**
```bash
# Clone the repository
git clone https://github.com/noc-cnrit/mdviewer.git
cd mdviewer

# Build the application
dotnet build --configuration Release

# Run the application
cd MDViewer\bin\Release\net8.0-windows
MDViewer.exe
```

#### **Development Setup**
See the [Development Guide](../development/index.md) for detailed build instructions and contribution guidelines.

---

## 🔧 **Configuration**

### **File Associations**

#### **Automatic (MSI Installer)**
The MSI installer automatically sets up file associations with respect for existing defaults:
- Adds "Open with MDViewer" to context menu
- Preserves VS Code or other existing default editors
- Registers for `.md` and `.markdown` file extensions

#### **Manual Configuration**
For portable installations or custom setups:

1. **Windows Settings Method**:
   - Open Settings → Apps → Default apps
   - Scroll to "Set defaults by file type"
   - Find `.md` and set MDViewer as default (optional)

2. **Registry Method** (Advanced):
   ```
   [HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\FileExts\.md\OpenWithList]
   "a"="MDViewer.exe"
   ```

### **External Editor Integration**

Configure your preferred editor for seamless editing workflow:

#### **Automatic Detection**
MDViewer automatically detects and configures common editors:
- Visual Studio Code
- Notepad++
- Visual Studio
- Sublime Text
- Atom

#### **Manual Configuration**
1. Go to `Edit → Configure Editor` in MDViewer
2. Choose "System Default" or browse for your editor
3. Settings are saved in `%LOCALAPPDATA%\MDViewer\settings.json`

---

## 🚀 **Verification**

### **Test Installation**
1. **Open MDViewer**: Find it in Start Menu or run the executable
2. **Welcome Screen**: Should display the MDViewer welcome message
3. **Open File**: Use `File → Open` to open any `.md` file
4. **Test Features**: Try zoom, navigation, and export functions

### **Verify File Associations**
1. Right-click any `.md` file in Windows Explorer
2. Look for "Open with MDViewer" in the context menu
3. Test opening files directly from the context menu

### **Check Dependencies**
- **WebView2**: Should work automatically on Windows 10+
- **.NET 8**: Will prompt for installation if missing
- **Export Features**: PDF export should work out of the box

---

## 🔄 **Upgrading**

### **From Previous Versions**
1. **MSI Installation**: Run the new MSI installer - it will automatically upgrade
2. **Portable Version**: Extract new version to replace old files
3. **Settings Preservation**: All settings and recent files are preserved

### **Migration Notes**
- Settings from v1.0+ are fully compatible
- Recent files list is maintained across upgrades
- Window position and zoom settings are preserved

---

## 🛠️ **Troubleshooting**

### **Common Issues**

#### **"Application failed to start"**
- **Cause**: Missing .NET 8 Runtime
- **Solution**: Download and install .NET 8 Runtime from Microsoft

#### **"WebView2 not found"**
- **Cause**: Missing WebView2 Runtime (rare on modern Windows)
- **Solution**: Download WebView2 Runtime from Microsoft Edge website

#### **"Export failed"**
- **Cause**: Missing Pandoc for Word export
- **Solution**: Install Pandoc manually or use PDF export only

#### **File associations not working**
- **Cause**: Permission issues or conflicting software
- **Solution**: Run installer as administrator or configure manually

### **Getting Help**
- Check the [FAQ](../user-guide/faq.md) for common questions
- Visit [Troubleshooting Guide](../user-guide/troubleshooting.md) for detailed solutions
- Report issues or get support at support@cnrit.com

---

## 🎯 **Next Steps**

After installation:
1. Read the [User Guide](../user-guide/index.md) to learn the basics
2. Explore [Features](../features/index.md) to discover capabilities
3. Check out [Examples](../examples/index.md) for practical use cases
4. Configure [External Editors](../user-guide/external-editors.md) for your workflow

*Installation complete? Start with the [User Guide](../user-guide/index.md) to begin using MDViewer effectively!*

