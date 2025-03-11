const path = require('path');
const inquirer = require('inquirer');
const { createProjectDirectory, writeFileToDisk } = require('./utils/fileSystem');
const { generateManifest } = require('./generators/manifestGenerator');
const { generateHtml } = require('./generators/htmlGenerator');
const { generateServiceWorker } = require('./generators/serviceWorkerGenerator');
const { generateIcon } = require('./generators/iconGenerator');
const { generatePlatformMeta } = require('./utils/platformHelpers');

/**
 * Run the CLI application
 * Handles user input and coordinates file generation
 */
async function runCLI() {
    try {
        // Ask for project details
        const answers = await inquirer.prompt([
            {
                type: 'input',
                name: 'projectName',
                message: 'What is your project name?',
                default: 'My PWA'
            },
            {
                type: 'input',
                name: 'iconColor',
                message: 'What color should the icon be? (hex code or color name)',
                default: '#3498db'
            },
            {
                type: 'checkbox',
                name: 'iconSupports',
                message: 'Which platforms should the icon support?',
                choices: ['iOS', 'Android', 'Desktop'],
                default: ['iOS', 'Android', 'Desktop']
            }
        ]);

        const { projectName, iconColor, iconSupports } = answers;

        // Create sanitised project name for directory and cache naming
        const sanitizedName = projectName.replace(/\s+/g, '-').toLowerCase();

        // Create output directory
        const outputDir = path.join(process.cwd(), sanitizedName);
        createProjectDirectory(outputDir);

        // Generate the icon
        const iconPath = 'icon.png'; // Relative path within the project
        const fullIconPath = path.join(outputDir, iconPath);
        generateIcon(iconColor, 512, fullIconPath);
        console.log(`✅ Generated icon: ${fullIconPath}`);

        // Generate manifest.json
        const manifest = generateManifest(projectName, `./${iconPath}`);
        await writeFileToDisk(
            path.join(outputDir, 'manifest.json'),
            JSON.stringify(manifest, null, 2)
        );
        console.log(`✅ Generated manifest.json`);

        // Generate platform-specific meta tags
        const platformMeta = generatePlatformMeta(iconSupports, `./${iconPath}`);

        // Generate index.html
        const htmlContent = generateHtml(projectName, platformMeta);
        await writeFileToDisk(path.join(outputDir, 'index.html'), htmlContent);
        console.log(`✅ Generated index.html`);

        // Generate sw.js
        const swContent = generateServiceWorker(sanitizedName);
        await writeFileToDisk(path.join(outputDir, 'sw.js'), swContent);
        console.log(`✅ Generated sw.js`);

        console.log(`\n🎉 PWA files generated successfully in: ${outputDir}`);
        console.log(`\nTo use your PWA:`);
        console.log(`1. Navigate to the directory: cd ${path.relative(process.cwd(), outputDir)}`);
        console.log(`2. Serve with a static file server, e.g.: npx serve`);
    } catch (error) {
        console.error('Error in CLI:', error);
        throw error;
    }
}

module.exports = { runCLI };