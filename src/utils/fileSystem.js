const fs = require('fs');
const path = require('path');

/**
 * Creates a project directory if it doesn't exist
 *
 * @param {string} dirPath - The path to the directory
 * @throws {Error} If the directory cannot be created
 */
function createProjectDirectory(dirPath) {
    if (!fs.existsSync(dirPath)) {
        try {
            fs.mkdirSync(dirPath, { recursive: true });
        } catch (error) {
            throw new Error(`Failed to create directory: ${dirPath}. ${error.message}`);
        }
    }
}

/**
 * Writes content to a file
 *
 * @param {string} filePath - The path to the file
 * @param {string} content - The content to write
 * @returns {Promise} - A promise that resolves when the file is written
 */
function writeFileToDisk(filePath, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, content, 'utf8', (err) => {
            if (err) {
                reject(new Error(`Failed to write file: ${filePath}. ${err.message}`));
            } else {
                resolve();
            }
        });
    });
}

module.exports = { createProjectDirectory, writeFileToDisk };