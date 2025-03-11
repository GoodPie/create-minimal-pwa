/**
 * Generates platform-specific meta tags for the HTML head
 *
 * @param {string[]} platforms - The platforms to support (iOS, Android, Desktop)
 * @param {string} iconPath - The path to the icon
 * @returns {string} - Platform-specific meta tags as HTML string
 */
function generatePlatformMeta(platforms, iconPath) {
    let meta = '';

    if (platforms.includes('iOS')) {
        meta += `<meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">
  <meta name="apple-mobile-web-app-title" content="PWA App">
  <link rel="apple-touch-icon" href="${iconPath}">\n  `;
    }

    // Android-specific meta could be added here if needed

    // Desktop-specific meta could be added here if needed

    return meta.trim();
}

module.exports = { generatePlatformMeta };