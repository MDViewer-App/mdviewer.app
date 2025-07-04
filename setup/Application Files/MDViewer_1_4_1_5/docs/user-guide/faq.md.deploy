# ❓ Frequently Asked Questions

**Common questions and answers about MDViewer**

---

## 🚀 **Getting Started**

### **Q: How do I open a markdown file?**
A: There are several ways:
- Use `File → Open` (Ctrl+O) to browse for files
- Drag and drop `.md` files onto the MDViewer window
- Right-click any `.md` file and select "Open with MDViewer"
- Run `MDViewer.exe filename.md` from command line

### **Q: What file formats does MDViewer support?**
A: MDViewer supports:
- `.md` files (standard markdown)
- `.markdown` files (extended markdown)
- Both formats support full GitHub-style markdown with syntax highlighting

### **Q: Can I use MDViewer without installing it?**
A: Yes! Use the portable version:
- Download the portable ZIP file
- Extract anywhere (USB drive, network share, etc.)
- Run `MDViewer.exe` directly - no installation required

---

## 🧭 **Navigation Features**

### **Q: How does the smart navigation work?**
A: MDViewer automatically:
- Finds index files (`index.md`, `readme.md`) in subdirectories
- Creates navigation headers with local file menus
- Shows related files in the footer
- Processes all internal markdown links for seamless navigation

### **Q: Why are some directory links not clickable?**
A: Directory links are only clickable when:
- The directory contains at least one markdown file
- MDViewer can find an appropriate target file (index, readme, or first available .md file)
- The target file actually exists

### **Q: Can I customize the navigation behavior?**
A: Currently navigation is automatic, but you can:
- Create `index.md` files in directories for preferred entry points
- Use `readme.md` as fallback index files
- Organize files alphabetically for predictable navigation

---

## 📄 **Export Features**

### **Q: PDF export isn't working. What should I do?**
A: Try these solutions:
1. **Wait longer**: PDF export downloads Chromium on first use (may take 2-3 minutes)
2. **Check internet**: Chromium download requires internet connection
3. **Run as admin**: Try running MDViewer as administrator
4. **Antivirus**: Temporarily disable antivirus that might block Chromium download

### **Q: Word export fails with "Pandoc not found" error**
A: Install Pandoc manually:
1. Visit [pandoc.org](https://pandoc.org/installing.html)
2. Download and install Pandoc for Windows
3. Restart MDViewer and try Word export again
4. Alternative: Use PDF export which works without additional software

### **Q: Where are exported files saved?**
A: Exports are saved in the same directory as the source markdown file:
- PDF: `filename.pdf`
- Word: `filename.docx`

---

## ⚙️ **Settings & Configuration**

### **Q: How do I change the default editor?**
A: Use `Edit → Configure Editor`:
- Choose "System Default" to use Windows default
- MDViewer auto-detects VS Code, Notepad++, etc.
- Settings are saved in `%LOCALAPPDATA%\MDViewer\settings.json`

### **Q: Where are my settings stored?**
A: Settings are stored in:
```
%LOCALAPPDATA%\MDViewer\settings.json
```
This includes window position, zoom level, recent files, and editor preferences.

### **Q: How do I reset all settings?**
A: Close MDViewer and delete the settings file:
```
%LOCALAPPDATA%\MDViewer\settings.json
```
MDViewer will recreate default settings on next startup.

---

## 🔧 **Troubleshooting**

### **Q: MDViewer won't start - "Application failed to start"**
A: This usually means missing .NET 8 Runtime:
1. Download .NET 8 Runtime from Microsoft
2. Install and restart your computer
3. Try running MDViewer again

### **Q: "WebView2 not found" error**
A: Install WebView2 Runtime:
1. Visit Microsoft Edge WebView2 download page
2. Download the "Evergreen Standalone Installer"
3. Install and restart MDViewer

### **Q: Files open in other applications instead of MDViewer**
A: Check file associations:
1. Right-click any `.md` file
2. Choose "Open with" → "Choose another app"
3. Select MDViewer.exe and check "Always use this app"

### **Q: Navigation links show but don't work**
A: Try these solutions:
1. **Refresh**: Press F5 to reload the document
2. **Check paths**: Ensure linked files actually exist
3. **Relative links**: Make sure links use relative paths (not absolute)

---

## 📁 **File Management**

### **Q: How many recent files does MDViewer remember?**
A: MDViewer tracks the last 10 opened files. Missing files are automatically removed from the list.

### **Q: Can I open multiple markdown files at once?**
A: Currently MDViewer opens one file at a time. You can:
- Use navigation links to move between related files
- Use the local file menu to switch between files in the same directory
- Open multiple MDViewer instances for different files

### **Q: Does MDViewer modify my markdown files?**
A: No! MDViewer is read-only:
- Never modifies source files
- Only reads content for display
- Navigation features are generated dynamically
- Use external editor integration for editing

---

## 🎨 **Display & Appearance**

### **Q: How do I change the zoom level?**
A: Use these methods:
- Menu: `View → Zoom In/Out/Reset`
- Keyboard: `Ctrl++`, `Ctrl+-`, `Ctrl+0`
- Zoom level is saved automatically between sessions

### **Q: Can I change the appearance/theme?**
A: Currently MDViewer uses GitHub-style CSS. Custom themes are planned for future releases.

### **Q: Text is too small/large on high-DPI displays**
A: Try these solutions:
1. Use zoom controls (Ctrl+/- or View menu)
2. Adjust Windows display scaling
3. Set zoom level and it will be remembered

---

## 🔗 **Integration**

### **Q: Can I use MDViewer with Git repositories?**
A: Absolutely! MDViewer is perfect for:
- README files and documentation
- Project wikis and knowledge bases
- Technical documentation repositories
- Works great with relative links between files

### **Q: Does MDViewer work with network drives?**
A: Yes, but:
- Performance may be slower on network drives
- Ensure you have read access to all linked files
- PDF export may be slower due to file I/O

### **Q: Can I integrate MDViewer with my IDE?**
A: Yes:
- Set MDViewer as the default markdown viewer
- Configure external editor to point back to your IDE
- Use command line: `MDViewer.exe filename.md`

---

## 💡 **Tips & Best Practices**

### **Q: What's the best way to organize documentation projects?**
A: Follow these patterns:
- Use `index.md` in the root directory
- Create `index.md` or `readme.md` in subdirectories
- Use relative links between related documents
- Keep related files in the same directory for local navigation

### **Q: How can I improve navigation in large projects?**
A: Try these techniques:
- Use `Tools → Generate Index` for automatic directory indexes
- Create clear directory structures with descriptive names
- Use breadcrumb navigation to understand file locations
- Add cross-references between related documents

### **Q: Any keyboard shortcuts I should know?**
A: Essential shortcuts:
- `Ctrl+O`: Open file
- `Ctrl+P`: Print
- `Ctrl++/-/0`: Zoom in/out/reset
- `F5`: Refresh current document
- `Alt+F4`: Exit application

---

*Still have questions? Check the [Troubleshooting Guide](troubleshooting.md) or contact support@cnrit.com for assistance.*

