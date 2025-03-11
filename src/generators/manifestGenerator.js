/**
 * Generates the manifest.json file content
 *
 * @param {string} name - The name of the PWA
 * @param {string} iconPath - The path to the icon file
 * @returns {object} - The manifest object
 */
function generateManifest(name, iconPath) {
    return {
        name: name,
        short_name: name,
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
            {
                src: iconPath,
                sizes: '192x192',
                type: 'image/png'
            },
            {
                src: iconPath,
                sizes: '512x512',
                type: 'image/png'
            }
        ]
    };
}

module.exports = { generateManifest };