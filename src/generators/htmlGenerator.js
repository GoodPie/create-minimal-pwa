/**
 * Generates the index.html file content
 *
 * @param {string} name - The name of the PWA
 * @param {string} platformSpecificMeta - Platform-specific meta tags
 * @returns {string} - The HTML content
 */
function generateHtml(name, platformSpecificMeta = '') {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#000000">
  <link rel="manifest" href="./manifest.json">
  <link rel="icon" href="./icon.png">
  ${platformSpecificMeta}
  <title>${name}</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 20px;
      text-align: center;
    }
  </style>
</head>
<body>
  <h1>${name}</h1>
  <p>Welcome to your Progressive Web App!</p>
  <p>To verify this is working, please check the console for the message "Service Worker Registered!"</p>

  <script>
    // Register the service worker
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
          .then(reg => console.log('Service worker registered!', reg))
          .catch(err => console.log('Service worker registration failed:', err));
      });
    }
  </script>
</body>
</html>`;
}

module.exports = { generateHtml };