# Configuration Examples

This document provides common configuration examples for the Dinamo Font Downloader.

## Example 1: Download Only Diatype Fonts

Edit `config.js`:

```javascript
const CONFIG = {
    autoDownload: true,
    batchSize: 10,
    batchDelay: 100,
    filterFamilies: ['Diatype'],
    excludeFamilies: [],
    verbose: true,
    showSummary: true
};
```

Or edit `download_combined.js`:

```javascript
const CONFIG = {
    autoDownload: true,
    batchSize: 10,
    batchDelay: 100,
    filterFamilies: ['Diatype'],  // ← Only Diatype
    excludeFamilies: [],
    verbose: true,
    showSummary: true
};
```

## Example 2: Exclude Language Variants

Download everything except Thai, Hebrew, Arabic, etc.:

```javascript
const CONFIG = {
    autoDownload: true,
    batchSize: 10,
    batchDelay: 100,
    filterFamilies: [],
    excludeFamilies: ['Thai', 'Hebrew', 'Georgian', 'Arabic', 'Armenian', 'Devanagari', 'Cyrillic', 'Greek'],
    verbose: true,
    showSummary: true
};
```

## Example 3: Fast Download (Good Internet)

Increase batch size and reduce delay:

```javascript
const CONFIG = {
    autoDownload: true,
    batchSize: 20,      // Download 20 at once
    batchDelay: 50,     // Only 50ms delay
    filterFamilies: [],
    excludeFamilies: [],
    verbose: true,
    showSummary: true
};
```

## Example 4: Slow/Stable Download

Decrease batch size for slower connections:

```javascript
const CONFIG = {
    autoDownload: true,
    batchSize: 5,       // Only 5 at once
    batchDelay: 500,    // 500ms delay between batches
    filterFamilies: [],
    excludeFamilies: [],
    verbose: true,
    showSummary: true
};
```

## Example 5: Get Base64 Data (No Downloads)

For programmatic use or processing later:

```javascript
const CONFIG = {
    autoDownload: false,    // Don't trigger downloads
    batchSize: 10,
    batchDelay: 100,
    filterFamilies: [],
    excludeFamilies: [],
    verbose: true,
    showSummary: true
};
```

After running, access results:

```javascript
// In browser console:
console.log(FONT_DOWNLOAD_RESULTS);

// Download as JSON file:
copy(JSON.stringify(FONT_DOWNLOAD_RESULTS.filter(r => r.success), null, 2));
```

## Example 6: Multiple Specific Families

Download only Monument, Camera, and Gramercy:

```javascript
const CONFIG = {
    autoDownload: true,
    batchSize: 10,
    batchDelay: 100,
    filterFamilies: ['Monument', 'Camera', 'Gramercy'],
    excludeFamilies: [],
    verbose: true,
    showSummary: true
};
```

## Example 7: Quiet Mode (Less Output)

```javascript
const CONFIG = {
    autoDownload: true,
    batchSize: 10,
    batchDelay: 100,
    filterFamilies: [],
    excludeFamilies: [],
    verbose: false,       // No per-font output
    showSummary: true     // Just show summary
};
```

## Example 8: Complete Custom Setup

Everything customized:

```javascript
const CONFIG = {
    // Download Settings
    autoDownload: true,
    batchSize: 15,
    batchDelay: 150,

    // Only want Diatype variants, exclude languages
    filterFamilies: ['Diatype'],
    excludeFamilies: ['Thai', 'Hebrew', 'Arabic', 'Georgian', 'Armenian', 'Devanagari', 'Greek'],

    // Show progress but be concise
    verbose: true,
    showSummary: true
};
```

## Using Results Programmatically

When `autoDownload: false`, access the downloaded data:

```javascript
// Get all successful downloads
const successful = FONT_DOWNLOAD_RESULTS.filter(r => r.success);

// Get fonts by family
const diatypeFonts = successful.filter(r => r.family.includes('Diatype'));

// Calculate total size
const totalSize = successful.reduce((sum, r) => sum + r.size, 0);
console.log(`Total: ${(totalSize / 1024 / 1024).toFixed(2)} MB`);

// Convert base64 back to blob (for saving manually)
function base64ToBlob(base64, filename) {
    const binaryString = atob(base64);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    const blob = new Blob([bytes], {type: 'font/woff2'});
    return blob;
}

// Example: Save a specific font manually
const fontData = FONT_DOWNLOAD_RESULTS[0];
if (fontData.success) {
    const blob = base64ToBlob(fontData.data, fontData.filename);
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fontData.filename;
    a.click();
}
```

## Adding Custom Font URLs

Edit `CUSTOM_FONTS` in `config.js`:

```javascript
const CUSTOM_FONTS = {
    "MyCustomFont": [
        "https://cdn.abcdinamo.com/fonts/static/MyFont/MyFont-Regular.woff2",
        "https://cdn.abcdinamo.com/fonts/static/MyFont/MyFont-Bold.woff2"
    ],
    "AnotherFont": [
        "https://cdn.abcdinamo.com/fonts/static/Another/Another-Medium.woff2"
    ]
};
```

These will be automatically included in the download.

## Quick Presets

Copy-paste these into your config:

### Minimal (Quiet & Fast)
```javascript
const CONFIG = { autoDownload: true, batchSize: 20, batchDelay: 50, filterFamilies: [], excludeFamilies: [], verbose: false, showSummary: true };
```

### Diatype Only (Standard)
```javascript
const CONFIG = { autoDownload: true, batchSize: 10, batchDelay: 100, filterFamilies: ['Diatype'], excludeFamilies: ['Thai', 'Hebrew', 'Arabic'], verbose: true, showSummary: true };
```

### Everything (Slow & Stable)
```javascript
const CONFIG = { autoDownload: true, batchSize: 5, batchDelay: 500, filterFamilies: [], excludeFamilies: [], verbose: true, showSummary: true };
```

### Data Only (No Downloads)
```javascript
const CONFIG = { autoDownload: false, batchSize: 10, batchDelay: 100, filterFamilies: [], excludeFamilies: [], verbose: true, showSummary: true };
```

## Tips

1. **First time?** Use default settings to see what's available
2. **Slow internet?** Reduce `batchSize` to 5 and increase `batchDelay` to 500
3. **Fast internet?** Increase `batchSize` to 20 and reduce `batchDelay` to 50
4. **Specific fonts?** Use `filterFamilies` to target what you need
5. **Too many languages?** Use `excludeFamilies` to skip them
6. **Processing later?** Set `autoDownload: false` and access `FONT_DOWNLOAD_RESULTS`

## Troubleshooting Configurations

### Downloads timing out
```javascript
// Slower, more stable
const CONFIG = { batchSize: 3, batchDelay: 1000 };
```

### Browser crashing
```javascript
// Much slower, safer
const CONFIG = { batchSize: 2, batchDelay: 2000 };
```

### All fonts failing with 403
- Check you're on https://abcdinamo.com/typefaces/diatype
- Try refreshing the page
- Some fonts may not be publicly accessible

### Too many download prompts
```javascript
// Get data first, download manually later
const CONFIG = { autoDownload: false };
// Then access FONT_DOWNLOAD_RESULTS
```
