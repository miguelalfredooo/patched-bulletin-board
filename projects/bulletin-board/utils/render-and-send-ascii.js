#!/usr/bin/env node
// render-and-send-ascii.js
// Quick utility to render ASCII art to PNG and output metadata for Telegram delivery.
//
// Usage:
//   node utils/render-and-send-ascii.js --text "ASCII ART HERE" --theme default --output /tmp/ascii.png
//   node utils/render-and-send-ascii.js --file path/to/ascii.txt --theme midnight --base64

const fs = require('fs');
const path = require('path');
const { renderAsciiImage, renderAsciiFile } = require('./ascii-render');

async function main() {
  const args = process.argv.slice(2);
  let asciiText = null;
  let theme = 'default';
  let fontSize = 14;
  let scale = 2;
  let outputMode = 'file'; // 'file' or 'base64'
  let outputPath = null;

  // Parse arguments
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === '--text') {
      asciiText = args[++i];
    } else if (arg === '--file') {
      const filePath = args[++i];
      asciiText = fs.readFileSync(filePath, 'utf8');
    } else if (arg === '--theme') {
      theme = args[++i];
    } else if (arg === '--font-size') {
      fontSize = parseInt(args[++i]);
    } else if (arg === '--scale') {
      scale = parseInt(args[++i]);
    } else if (arg === '--output') {
      outputPath = args[++i];
      outputMode = 'file';
    } else if (arg === '--base64') {
      outputMode = 'base64';
    } else if (arg === '--help') {
      console.log(`
render-and-send-ascii.js — Render ASCII art to PNG for Telegram

Usage:
  node utils/render-and-send-ascii.js [options]

Options:
  --text TEXT              ASCII art text (inline)
  --file PATH              Read ASCII art from file
  --theme THEME            Color theme: default, midnight, editorial (default: default)
  --font-size SIZE         Font size in px (default: 14)
  --scale FACTOR           Retina scale factor (default: 2)
  --output PATH            Save PNG to file (default: /tmp/ascii-[timestamp].png)
  --base64                 Output base64-encoded PNG to stdout instead of file
  --help                   Show this help

Output Modes:
  File:   Saves PNG to disk, outputs file path to stdout
  Base64: Outputs base64-encoded PNG suitable for Telegram message tool

Examples:
  # Save to file
  node utils/render-and-send-ascii.js --file ./ascii.txt --theme editorial

  # Get base64 for Telegram message tool
  node utils/render-and-send-ascii.js --text "Hello\\nWorld" --base64
      `);
      process.exit(0);
    }
  }

  if (!asciiText) {
    console.error('Error: No ASCII art provided. Use --text or --file.');
    process.exit(1);
  }

  try {
    if (outputMode === 'base64') {
      // Output base64-encoded PNG
      const buf = await renderAsciiImage(asciiText, { theme, fontSize, scale });
      const b64 = buf.toString('base64');
      console.log(b64);
    } else {
      // Save to file
      const file = outputPath || path.join('/tmp', `ascii-${Date.now()}.png`);
      const filePath = await renderAsciiFile(asciiText, {
        theme,
        fontSize,
        scale,
        outPath: file,
      });
      console.log(filePath);
    }
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  }
}

main();
