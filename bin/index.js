#!/usr/bin/env node

// Main entry point for the CLI application
const { runCLI } = require('../src/cli');

// Run the CLI
runCLI()
    .then(() => {
        process.exit(0);
    })
    .catch(error => {
        console.error('Error generating PWA files:', error);
        process.exit(1);
    });