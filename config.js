/**
 * Dinamo Font Downloader - Configuration
 *
 * Edit these values to customize where fonts are downloaded and how they're organized
 */

const CONFIG = {
  // ============================================================================
  // DOWNLOAD SETTINGS
  // ============================================================================

  // Where to save the downloaded fonts (relative path from current directory)
  // Default: current directory
  outputDirectory: './fonts',

  // Organize fonts into subdirectories by font family?
  // true: fonts/Diatype/ABCDiatype-Regular.woff2
  // false: fonts/ABCDiatype-Regular.woff2
  organizeByFamily: true,

  // ============================================================================
  // BATCH SETTINGS
  // ============================================================================

  // Number of fonts to download simultaneously
  // Higher = faster but may overwhelm the browser
  // Recommended: 5-10
  batchSize: 10,

  // Delay between batches in milliseconds
  // Helps prevent overwhelming the browser or CDN
  // Recommended: 100-500
  batchDelay: 100,

  // ============================================================================
  // BEHAVIOR SETTINGS
  // ============================================================================

  // Automatically trigger downloads (creates file download prompts)
  // true: Browser will prompt to save each font
  // false: Returns base64 data to console (for programmatic use)
  autoDownload: true,

  // Create organized directory structure for auto-downloads
  // Only applicable if organizeByFamily is true
  createSubdirectories: true,

  // ============================================================================
  // LOGGING SETTINGS
  // ============================================================================

  // Show detailed progress for each font
  verbose: true,

  // Show summary at the end
  showSummary: true,

  // ============================================================================
  // FILTER SETTINGS (Optional)
  // ============================================================================

  // Only download specific font families
  // Leave empty to download all fonts
  // Example: ['Diatype', 'Monument'] to only download Diatype and Monument fonts
  filterFamilies: [],

  // Exclude specific font families
  // Example: ['Thai', 'Arabic'] to exclude language-specific fonts
  excludeFamilies: []
};

// ============================================================================
// ADVANCED: Custom URL mappings
// ============================================================================
// Add custom font URLs here that aren't in the default list
// Format: "FontFamilyName": ["URL1", "URL2", ...]
const CUSTOM_FONTS = {
  // Example:
  // "MyCustomFont": [
  //   "https://cdn.abcdinamo.com/fonts/static/MyFont/MyFont-Regular.woff2",
  //   "https://cdn.abcdinamo.com/fonts/static/MyFont/MyFont-Bold.woff2"
  // ]
};
