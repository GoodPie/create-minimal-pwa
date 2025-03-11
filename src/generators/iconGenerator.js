const { createCanvas } = require('canvas');
const fs = require('fs');

/**
 * Generates a simple square icon with the specified color
 *
 * @param {string} color - The color of the icon (hex or name)
 * @param {number} size - The size of the icon in pixels
 * @param {string} outputPath - The path to save the icon
 */
function generateIcon(color, size, outputPath) {
    // Create a canvas with the specified size
    const canvas = createCanvas(size, size);
    const ctx = canvas.getContext('2d');

    // Fill with the specified color
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, size, size);

    // Save the image to a file
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(outputPath, buffer);
}

module.exports = { generateIcon };