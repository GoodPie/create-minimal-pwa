# Create Minimal PWA

![GitHub](https://img.shields.io/github/license/robertcoopercode/create-minimal-pwa)
![npm](https://img.shields.io/npm/v/create-minimal-pwa)
![npm](https://img.shields.io/npm/dt/create-minimal-pwa)

A simple CLI tool to generate the minimal required files for a Progressive Web App (PWA).

## Features

- Generates all the required files for a minimal PWA:
    - `manifest.json` - Web app manifest with basic configuration
    - `index.html` - Simple HTML file with service worker registration
    - `sw.js` - Service worker for offline functionality
    - `icon.png` - Basic square icon with your chosen colour
- Customizable project name, icon colour, and platform support
- Interactive CLI interface
- Zero configuration - just run and answer prompts

## Installation & Usage

## Running the tool

To run the tool, use npx:

```bash
npx create-minimal-pwa
```
## Installation

To install the tool globally:

```bash
npm install -g create-minimal-pwa
```

Then run the tool:

```bash
create-minimal-pwa
```

```bash

## How It Works

When you run the tool, you'll be prompted for:

1. **Project name** - The name of your PWA
2. **Icon color** - Color for the generated icon (hex code or color name)
3. **Platform support** - Which platforms the icon should support (iOS, Android, Desktop)

The tool will then generate a directory with your project name containing all required PWA files.

## Generated Files

### manifest.json

Contains the basic metadata for your PWA:

```json
{
  "name": "Your PWA Name",
  "short_name": "PWA Name",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#000000",
  "icons": [
    {
      "src": "./icon.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "./icon.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

### index.html

A simple HTML file with:
- Proper meta tags
- Manifest link
- Service worker registration
- Platform-specific meta tags (based on your selections)

### sw.js

A basic service worker that:
- Caches core application files
- Serves files from cache when offline
- Manages cache updates

### icon.png

A simple square icon in your chosen colour.

## Testing Your PWA

After generating the files:

```bash
cd your-project-name
npx serve
```

Then open your browser to the displayed URL (usually http://localhost:3000).

To verify PWA functionality:

1. Open Chrome DevTools
2. Go to the "Application" tab
3. Check the "Manifest" and "Service Workers" sections

## Requirements

- Node.js >= 18
- For the canvas dependency (used to generate the icon), you might need additional system libraries:
    - **Ubuntu/Debian**: `sudo apt-get install build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev`
    - **macOS**: `brew install pkg-config cairo pango libpng jpeg giflib librsvg`
    - **Windows**: See the [node-canvas wiki](https://github.com/Automattic/node-canvas/wiki/Installation:-Windows)

## Development

### Project Structure

```
create-minimal-pwa/
├── bin/
│   └── index.js            # Main executable entry point
├── src/
│   ├── cli.js              # Command-line interface and user input handling
│   ├── generators/
│   │   ├── iconGenerator.js        # Icon generation logic
│   │   ├── manifestGenerator.js    # Manifest.json generation
│   │   ├── htmlGenerator.js        # Index.html generation 
│   │   └── serviceWorkerGenerator.js # Service worker generation
│   └── utils/
│       ├── fileSystem.js           # File system operations
│       └── platformHelpers.js      # Platform-specific helpers
├── package.json
└── README.md
```


## Acknowledgments

- [Progressive Web Apps](https://web.dev/progressive-web-apps/) - For inspiration and standards
- [node-canvas](https://github.com/Automattic/node-canvas) - For icon generation
- [inquirer](https://github.com/SBoudrias/Inquirer.js) - For the interactive CLI