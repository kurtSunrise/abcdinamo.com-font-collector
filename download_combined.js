/**
 * Dinamo Font Downloader - COMBINED VERSION
 *
 * Single-file version with everything included.
 * Just copy, paste, and run!
 *
 * INSTRUCTIONS:
 * 1. Open https://abcdinamo.com/typefaces/diatype in Chrome
 * 2. Open Chrome DevTools (F12 or Cmd+Option+I)
 * 3. Go to the Console tab
 * 4. Copy and paste this entire file
 * 5. Press Enter to run
 * 6. Edit the CONFIG object below if you want to customize (optional)
 * 7. Wait for download to complete
 */

(async function downloadDinamoFonts() {
    'use strict';

    // ═════════════════════════════════════════════════════════════════════
    // ⚙️  CONFIGURATION - Edit these values to customize behavior
    // ═════════════════════════════════════════════════════════════════════

    const CONFIG = {
        // Download Settings
        autoDownload: true,              // true = download files, false = return base64
        batchSize: 10,                    // Number of fonts to download at once (5-20 recommended)
        batchDelay: 100,                  // Delay between batches in ms (100-500 recommended)

        // Filtering
        filterFamilies: [],               // Only download these families, e.g., ['Diatype', 'Monument']
        excludeFamilies: [],              // Exclude these families, e.g., ['Thai', 'Arabic']

        // Display
        verbose: true,                    // Show detailed progress for each font
        showSummary: true                 // Show summary at the end
    };

    // ═════════════════════════════════════════════════════════════════════
    // 📦 FONT URLs - All fonts to download
    // ═════════════════════════════════════════════════════════════════════

    const fontUrls = [
        "https://cdn.abcdinamo.com/css/fonts/ABCMonumentGrotesk-Regular.woff2",
        "https://cdn.abcdinamo.com/css/fonts/ABCMonumentGroteskMono-Regular.woff2",
        "https://cdn.abcdinamo.com/css/fonts/DinamoLoading-Regular.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Publisher-Rounded/Publisher-Rounded-Mix/ABCPublisherRoundedMix-Medium.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Camera-Rounded/Camera-Rounded/ABCCameraRounded-Medium.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Bingo/ABC-Bingo/ABCBingo-Regular.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Stefan/ABCStefan-Simple.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Bubblegum/ABCBubblegum-Regular.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Diatype-Thai/Diatype-Thai/ABCDiatypeThai-Regular.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Diatype-Hebrew/Diatype-Hebrew/ABCDiatypeHebrew-Regular.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Diatype-Georgian/Diatype-Georgian/ABCDiatypeGeorgian-Regular.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Diatype-Devanagari/Diatype-Devanagari/ABCDiatypeDevanagari-Regular.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Diatype-Armenian/Diatype-Armenian/ABCDiatypeArmenian-Regular.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Diatype-Arabic/Diatype-Arabic/ABCDiatypeArabic-Regular.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Solar/Solar/ABCSolar-Medium.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Pelikan/Pelikan/ABCPelikan-Regular.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Diatype-Cyrillic/Diatype-Cyrillic/ABCDiatypeCyrillic-Regular.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Diatype/Diatype-Semi-Mono/ABCDiatypeSemi-Mono-UltraItalic.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Diatype/Diatype-Semi-Mono/ABCDiatypeSemi-Mono-Ultra.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Diatype/Diatype-Semi-Mono/ABCDiatypeSemi-Mono-HeavyItalic.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Diatype/Diatype-Semi-Mono/ABCDiatypeSemi-Mono-Heavy.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Diatype/Diatype-Semi-Mono/ABCDiatypeSemi-Mono-BlackItalic.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Diatype/Diatype-Semi-Mono/ABCDiatypeSemi-Mono-Black.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Diatype/Diatype-Mono/ABCDiatypeMono-UltraItalic.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Diatype/Diatype-Mono/ABCDiatypeMono-Ultra.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Diatype/Diatype-Mono/ABCDiatypeMono-HeavyItalic.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Diatype/Diatype-Mono/ABCDiatypeMono-Heavy.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Diatype/Diatype-Mono/ABCDiatypeMono-BlackItalic.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Diatype/Diatype-Mono/ABCDiatypeMono-Black.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Walter/Walter-Neue/ABCWalterNeue-Regular.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Gramercy/Gramercy/ABCGramercy-Regular.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Ginto-Rounded/Ginto-Rounded/ABCGintoRounded-Regular.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Daily/Daily-Slab/ABCDailySlab-Regular.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Connect/Connect/ABCConnect-Phillips.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Asfalt/Asfalt-Compressed/ABCAsfalt-CompressedRegular.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Honeymoon/Honeymoon/ABCHoneymoon-Regular.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Diatype-Greek/Diatype-Greek/ABCDiatypeGreek-Regular.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Laica/Laica/ABCLaica-Regular.woff2",
        "https://cdn.abcdinamo.com/fonts/static/ROM/ROM/ABCROM-Regular.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Diatype-Rounded/Diatype-Rounded/ABCDiatypeRounded-Regular.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Diatype-Extra/Diatype-Mono-Condensed/ABCDiatypeMonoCondensed-Regular.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Diatype/Diatype-Extended/ABCDiatypeExtended-ThinItalic.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Diatype/Diatype-Extended/ABCDiatypeExtended-Thin.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Diatype/Diatype-Extended/ABCDiatypeExtended-RegularItalic.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Diatype/Diatype-Extended/ABCDiatypeExtended-Regular.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Diatype/Diatype-Extended/ABCDiatypeExtended-MediumItalic.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Diatype/Diatype-Extended/ABCDiatypeExtended-Medium.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Diatype/Diatype-Extended/ABCDiatypeExtended-LightItalic.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Diatype/Diatype-Extended/ABCDiatypeExtended-Light.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Diatype/Diatype-Extended/ABCDiatypeExtended-BoldItalic.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Diatype/Diatype-Extended/ABCDiatypeExtended-Bold.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Diatype/Diatype-Expanded/ABCDiatypeExpanded-ThinItalic.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Diatype/Diatype-Expanded/ABCDiatypeExpanded-Thin.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Diatype/Diatype-Expanded/ABCDiatypeExpanded-RegularItalic.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Diatype/Diatype-Expanded/ABCDiatypeExpanded-Regular.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Diatype/Diatype-Expanded/ABCDiatypeExpanded-MediumItalic.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Diatype/Diatype-Expanded/ABCDiatypeExpanded-Medium.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Diatype/Diatype-Expanded/ABCDiatypeExpanded-LightItalic.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Diatype/Diatype-Expanded/ABCDiatypeExpanded-Light.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Diatype/Diatype-Expanded/ABCDiatypeExpanded-BoldItalic.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Diatype/Diatype-Expanded/ABCDiatypeExpanded-Bold.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Diatype/Diatype-Condensed/ABCDiatypeCondensed-ThinItalic.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Diatype/Diatype-Condensed/ABCDiatypeCondensed-Thin.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Diatype/Diatype-Condensed/ABCDiatypeCondensed-RegularItalic.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Diatype/Diatype-Condensed/ABCDiatypeCondensed-Regular.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Diatype/Diatype-Condensed/ABCDiatypeCondensed-MediumItalic.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Diatype/Diatype-Condensed/ABCDiatypeCondensed-Medium.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Diatype/Diatype-Condensed/ABCDiatypeCondensed-LightItalic.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Diatype/Diatype-Condensed/ABCDiatypeCondensed-Light.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Diatype/Diatype-Condensed/ABCDiatypeCondensed-BoldItalic.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Diatype/Diatype-Condensed/ABCDiatypeCondensed-Bold.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Diatype/Diatype-Compressed/ABCDiatypeCompressed-ThinItalic.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Diatype/Diatype-Compressed/ABCDiatypeCompressed-Thin.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Diatype/Diatype-Compressed/ABCDiatypeCompressed-RegularItalic.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Diatype/Diatype-Compressed/ABCDiatypeCompressed-Regular.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Diatype/Diatype-Compressed/ABCDiatypeCompressed-MediumItalic.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Diatype/Diatype-Compressed/ABCDiatypeCompressed-Medium.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Diatype/Diatype-Compressed/ABCDiatypeCompressed-LightItalic.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Diatype/Diatype-Compressed/ABCDiatypeCompressed-Light.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Diatype/Diatype-Compressed/ABCDiatypeCompressed-BoldItalic.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Diatype/Diatype-Compressed/ABCDiatypeCompressed-Bold.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Marist/ABCMarist-Regular.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Diatype/Diatype/ABCDiatype-Heavy.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Diatype/Diatype/ABCDiatype-HeavyItalic.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Diatype/Diatype/ABCDiatype-BlackItalic.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Diatype/Diatype/ABCDiatype-UltraItalic.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Diatype/Diatype/ABCDiatype-Black.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Diatype/Diatype/ABCDiatype-Ultra.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Gaisyr/Gaisyr/ABCGaisyr-Regular.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Otto/ABCOtto-Regular.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Helveesti/Helveesti/ABCHelveesti-Regular.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Oracle/Oracle/ABCOracle-Regular.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Camera/Camera/ABCCamera-Medium.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Gravity/ABCGravity-Normal.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Arizona/Arizona-Serif/ABCArizonaSerif-Regular.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Repro/Repro/ABCRepro-Regular.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Social/Social/ABCSocial-Regular.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Marfa/Marfa/ABCMarfa-Regular.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Estragon/ABCEstragon-Regular.woff2",
        "https://cdn.abcdinamo.com/fonts/static/Synt/Synt/ABCSynt-Regular.woff2"
    ];

    // ═════════════════════════════════════════════════════════════════════
    // 🔧 HELPER FUNCTIONS
    // ═════════════════════════════════════════════════════════════════════

    function getFontFamily(url) {
        try {
            const pathPart = url.split('/fonts/static/').pop() || url.split('/').pop();
            const parts = pathPart.split('/');
            return parts.length > 1 ? parts[0] : '';
        } catch (e) {
            return '';
        }
    }

    function getFilename(url) {
        return url.split('/').pop();
    }

    function shouldDownload(url) {
        const family = getFontFamily(url);
        const filename = getFilename(url);

        if (CONFIG.filterFamilies.length > 0) {
            const matches = CONFIG.filterFamilies.some(filter =>
                family.includes(filter) || filename.includes(filter)
            );
            if (!matches) return false;
        }

        if (CONFIG.excludeFamilies.length > 0) {
            const matches = CONFIG.excludeFamilies.some(filter =>
                family.includes(filter) || filename.includes(filter)
            );
            if (matches) return false;
        }

        return true;
    }

    async function downloadFont(url) {
        try {
            if (!shouldDownload(url)) {
                if (CONFIG.verbose) {
                    console.log(`⊘ Skipped (filtered): ${getFilename(url)}`);
                }
                return { success: false, url, error: 'Filtered', skipped: true };
            }

            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }

            const blob = await response.blob();
            const arrayBuffer = await blob.arrayBuffer();
            const base64 = btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)));

            const filename = getFilename(url);
            const family = getFontFamily(url);
            const size = blob.size;

            if (CONFIG.autoDownload) {
                const a = document.createElement('a');
                a.href = URL.createObjectURL(blob);
                a.download = filename;
                a.click();
                URL.revokeObjectURL(a.href);
            }

            if (CONFIG.verbose) {
                const sizeStr = (size / 1024).toFixed(1) + ' KB';
                console.log(`✓ ${filename} (${sizeStr})${family ? ' [' + family + ']' : ''}`);
            }

            return {
                success: true,
                url,
                data: base64,
                filename,
                family,
                size
            };

        } catch (error) {
            if (CONFIG.verbose) {
                console.log(`✗ Failed: ${getFilename(url)} - ${error.message}`);
            }
            return {
                success: false,
                url,
                error: error.message
            };
        }
    }

    async function downloadAllFonts() {
        const filteredUrls = fontUrls.filter(shouldDownload);
        const total = filteredUrls.length;

        console.log('╔═══════════════════════════════════════════════════════╗');
        console.log('║     Dinamo Font Downloader - Quick Edition            ║');
        console.log('╚═══════════════════════════════════════════════════════╝');
        console.log(`  Total fonts: ${fontUrls.length}`);
        console.log(`  After filters: ${total}`);
        console.log(`  Batch size: ${CONFIG.batchSize}`);
        console.log(`  Auto-download: ${CONFIG.autoDownload ? 'ON' : 'OFF'}`);
        console.log('─────────────────────────────────────────────────────────\n');

        const results = [];
        let completed = 0;

        for (let i = 0; i < filteredUrls.length; i += CONFIG.batchSize) {
            const batch = filteredUrls.slice(i, i + CONFIG.batchSize);
            const batchNum = Math.floor(i / CONFIG.batchSize) + 1;
            const totalBatches = Math.ceil(filteredUrls.length / CONFIG.batchSize);

            console.log(`[Batch ${batchNum}/${totalBatches}] Downloading ${batch.length} fonts...`);

            const batchResults = await Promise.all(batch.map(downloadFont));
            results.push(...batchResults);
            completed += batch.length;

            console.log(`  Progress: ${completed}/${total} fonts completed\n`);

            if (i + CONFIG.batchSize < filteredUrls.length) {
                await new Promise(r => setTimeout(r, CONFIG.batchDelay));
            }
        }

        return results;
    }

    // ═════════════════════════════════════════════════════════════════════
    // 🚀 START DOWNLOAD
    // ═════════════════════════════════════════════════════════════════════

    const results = await downloadAllFonts();

    if (CONFIG.showSummary) {
        const successful = results.filter(r => r.success && !r.skipped);
        const failed = results.filter(r => !r.success && !r.skipped);
        const skipped = results.filter(r => r.skipped);
        const totalSize = successful.reduce((sum, r) => sum + (r.size || 0), 0);

        console.log('\n╔═══════════════════════════════════════════════════════╗');
        console.log('║              DOWNLOAD SUMMARY                         ║');
        console.log('╚═══════════════════════════════════════════════════════╝');
        console.log(`  ✓ Successful: ${successful.length} (${(totalSize / 1024 / 1024).toFixed(2)} MB)`);
        console.log(`  ✗ Failed: ${failed.length}`);
        if (skipped.length > 0) {
            console.log(`  ⊘ Skipped: ${skipped.length}`);
        }
        console.log('─────────────────────────────────────────────────────────');

        if (failed.length > 0) {
            console.log('\nFailed downloads:');
            failed.forEach(f => {
                console.log(`  ${getFilename(f.url)}: ${f.error}`);
            });
        }

        if (!CONFIG.autoDownload) {
            console.log('\n💡 Tip: Access results via variable: FONT_DOWNLOAD_RESULTS');
            window.FONT_DOWNLOAD_RESULTS = results;
        }
    }

    return results;
})();
