# Dinamo Font Downloader

Browser-based script to download WOFF2 fonts from Dinamo's CDN (abcdinamo.com).

## ⚠️ Important Notice

**These fonts are commercial products protected by copyright.** This tool is intended for:
- Licensed users who need offline access
- Evaluation purposes (trial fonts available at [abcdinamo.com/form/request-trial-fonts](https://abcdinamo.com/form/request-trial-fonts))
- Educational purposes

Please purchase a license at [abcdinamo.com](https://abcdinamo.com/) for commercial use.

## Features

- 🚀 Downloads 100+ WOFF2 fonts from Dinamo's CDN
- 📦 Organized by font family
- ⚡ Batch downloading with configurable speed
- 🔍 Filter fonts by family
- 📊 Progress tracking and summary
- 🎨 Supports all Dinamo typeface families

## Font Families Included

- **Diatype** (Mono, Semi-Mono, Extended, Expanded, Condensed, Compressed)
- **Monument Grotesk**
- **Camera / Camera Rounded**
- **Ginto / Ginto Rounded**
- **Publisher Rounded**
- **Walter**
- **Gramercy**
- **Daily**
- **Connect**
- **Asfalt**
- **Honeymoon**
- **Solar**
- **Pelikan**
- **Laica**
- **ROM**
- **Marist**
- **Language variants**: Thai, Hebrew, Georgian, Arabic, Armenian, Cyrillic, Greek, Devanagari
- And more...

## Quick Start

### Method 1: Auto-Download (Recommended)

1. **Open Chrome** and navigate to: https://abcdinamo.com/typefaces/diatype

2. **Open DevTools**:
   - Windows/Linux: `F12` or `Ctrl+Shift+I`
   - macOS: `Cmd+Option+I`

3. **Go to Console tab**

4. **Edit configuration** (optional):
   - Open `config.js` in a text editor
   - Adjust settings like output directory, filters, batch size
   - Save changes

5. **Copy and paste BOTH files in order**:
   ```javascript
   // First, paste config.js contents
   // Then, paste download_fonts.js contents
   ```

6. **Press Enter** to run the script

7. **Wait for completion** - fonts will download automatically to your Downloads folder

### Method 2: Custom Configuration

1. Edit `config.js` with your preferred settings:

```javascript
const CONFIG = {
  // Save to specific directory
  outputDirectory: './my-fonts',

  // Only download specific families
  filterFamilies: ['Diatype', 'Monument'],

  // Exclude language variants
  excludeFamilies: ['Thai', 'Arabic'],

  // Download 20 at a time (faster)
  batchSize: 20,

  // Don't auto-download (get base64 instead)
  autoDownload: false
};
```

2. Follow Method 1 steps 1-6

## Configuration

Edit `config.js` to customize:

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `outputDirectory` | string | `'./fonts'` | Where to save fonts (if not auto-downloading) |
| `organizeByFamily` | boolean | `true` | Create subdirectories for each family |
| `batchSize` | number | `10` | Fonts to download simultaneously (5-20 recommended) |
| `batchDelay` | number | `100` | Delay between batches in ms |
| `autoDownload` | boolean | `true` | Trigger browser download prompts |
| `verbose` | boolean | `true` | Show detailed progress |
| `showSummary` | boolean | `true` | Show summary at end |
| `filterFamilies` | array | `[]` | Only download these families |
| `excludeFamilies` | array | `[]` | Exclude these families |

## Output

### Auto-Download Mode (`autoDownload: true`)
- Fonts download directly to your browser's Downloads folder
- Each font prompts for download approval
- Files named like: `ABCDiatype-Regular.woff2`

### Base64 Mode (`autoDownload: false`)
- Data stored in `window.FONT_DOWNLOAD_RESULTS` variable
- Each font includes:
  - `filename`: Font file name
  - `family`: Font family name
  - `size`: File size in bytes
  - `data`: Base64-encoded font data
  - `url`: Source URL

Access results in console:
```javascript
// View all results
console.log(FONT_DOWNLOAD_RESULTS);

// Download successful fonts as JSON
copy(JSON.stringify(FONT_DOWNLOAD_RESULTS.filter(r => r.success), null, 2));
```

## Examples

### Download Only Diatype Fonts

```javascript
const CONFIG = {
  filterFamilies: ['Diatype'],
  autoDownload: true
};
```

### Exclude Language Variants

```javascript
const CONFIG = {
  excludeFamilies: ['Thai', 'Hebrew', 'Arabic', 'Georgian', 'Armenian', 'Devanagari'],
  autoDownload: true
};
```

### Fast Download (More Concurrent)

```javascript
const CONFIG = {
  batchSize: 20,
  batchDelay: 50,
  autoDownload: true
};
```

### Get Base64 Data (No Downloads)

```javascript
const CONFIG = {
  autoDownload: false,
  verbose: true
};
// Results in window.FONT_DOWNLOAD_RESULTS
```

## Troubleshooting

### Fonts Not Downloading
- Ensure you're on https://abcdinamo.com/typefaces/diatype
- Check browser console for errors
- Try reducing `batchSize` to 5

### "Failed to Fetch" Errors
- CDN may be rate-limiting
- Increase `batchDelay` to 500ms
- Reduce `batchSize` to 5

### All Downloads Fail (403 Forbidden)
- Fonts require proper licensing
- Some fonts may not be publicly accessible
- Check if you're on the correct page

### Script Not Working
- Make sure to paste `config.js` BEFORE `download_fonts.js`
- Check for JavaScript errors in console
- Try refreshing the page and running again

## Tips

1. **First Time?** Use default settings and download all fonts to see what's available

2. **Specific Fonts?** Use `filterFamilies` to download only what you need

3. **Slow Connection?** Reduce `batchSize` to 5

4. **Fast Connection?** Increase `batchSize` to 15-20

5. **Organize Later?** Set `organizeByFamily: false` for flat structure

## File Structure

After download (with `organizeByFamily: true`):

```
fonts/
├── Diatype/
│   ├── ABCDiatype-Regular.woff2
│   ├── ABCDiatype-Bold.woff2
│   └── ...
├── Monument/
│   ├── ABCMonumentGrotesk-Regular.woff2
│   └── ...
└── Camera/
    ├── ABCCamera-Medium.woff2
    └── ...
```

## Advanced: Add Custom Fonts

Edit `CUSTOM_FONTS` in `config.js`:

```javascript
const CUSTOM_FONTS = {
  "MyCustomFont": [
    "https://cdn.abcdinamo.com/fonts/static/MyFont/MyFont-Regular.woff2",
    "https://cdn.abcdinamo.com/fonts/static/MyFont/MyFont-Bold.woff2"
  ]
};
```

## Browser Compatibility

- ✅ Chrome/Edge (recommended)
- ✅ Firefox
- ⚠️ Safari (may have issues with bulk downloads)

Tested on Chrome 120+.

## Legal

These fonts are commercial products. This tool:
- Does not bypass DRM or encryption
- Only accesses publicly available CDN URLs
- Requires legitimate access to abcdinamo.com

**For commercial use, purchase a license:** https://abcdinamo.com/

## License

This script is provided as-is for educational and evaluation purposes.

## Credits

Created by Claude Code
Font URLs sourced from abcdinamo.com

---

**Need trial fonts?** Request at: https://abcdinamo.com/form/request-trial-fonts
