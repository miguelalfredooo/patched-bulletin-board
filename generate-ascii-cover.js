#!/usr/bin/env node
/**
 * generate-ascii-cover.js
 * Convert an image to ASCII art and render as PNG cover
 * Usage: node generate-ascii-cover.js <input-image-path> [output-filename]
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const ASCII_SETS = {
  MINIMAL: ' .-=+*#█',
  LOW: '@#*+=-:. ',
  MEDIUM: '$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\\|()1{}[]?-_+~<>i!lI;:,^`\'. ',
  BOLD: '█▓▒░$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\\|()1{}[]?-_+~<>i!lI;:,^`\'. ',
};

const RESOLUTIONS = {
  ULTRA_LOW: { width: 32, height: 32 },
  LOW: { width: 42, height: 15 },
  MEDIUM: { width: 64, height: 48 },
  HIGH: { width: 80, height: 60 },
};

function calculateBrightness(r, g, b) {
  return (r * 299 + g * 587 + b * 114) / 1000;
}

function getAsciiChar(brightness, charSet) {
  const index = Math.floor((brightness / 255) * (charSet.length - 1));
  return charSet.charAt(charSet.length - 1 - index) || ' ';
}

async function convertImageToAsciiPng(inputPath, outputFilename = null) {
  try {
    // Validate input
    if (!fs.existsSync(inputPath)) {
      throw new Error(`Input file not found: ${inputPath}`);
    }

    console.log(`📸 Loading image: ${inputPath}`);

    // Read and get image metadata
    const imageBuffer = fs.readFileSync(inputPath);
    const metadata = await sharp(imageBuffer).metadata();
    console.log(`   Dimensions: ${metadata.width}×${metadata.height}px`);

    const resolution = 'LOW'; // 42×15 for cover
    const charset = 'BOLD';
    const fontSize = 10;
    const lineHeight = 1.1;

    const dims = RESOLUTIONS[resolution];
    const charSet = ASCII_SETS[charset];

    // Resize image to ASCII resolution
    const resized = await sharp(imageBuffer)
      .resize(dims.width, dims.height, { fit: 'cover' })
      .raw()
      .toBuffer({ resolveWithObject: true });

    const { data, info } = resized;
    const { width, height, channels } = info;

    // Convert to ASCII
    console.log(`🎨 Converting to ASCII (${width}×${height})...`);

    let asciiOutput = '';
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const pixelIdx = (y * width + x) * channels;
        const r = data[pixelIdx];
        const g = data[pixelIdx + 1];
        const b = data[pixelIdx + 2];

        const brightness = calculateBrightness(r, g, b);
        const char = getAsciiChar(brightness, charSet);
        asciiOutput += char;
      }
      asciiOutput += '\n';
    }

    // Generate SVG with styled ASCII
    console.log(`📝 Rendering ASCII as SVG...`);

    const charWidth = fontSize * 0.6;
    const charHeightActual = fontSize * lineHeight;
    const svgWidth = width * charWidth;
    const svgHeight = height * charHeightActual;
    const padding = 40;

    let svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${svgWidth + padding * 2}" height="${svgHeight + padding * 2}" viewBox="0 0 ${svgWidth + padding * 2} ${svgHeight + padding * 2}">
  <defs>
    <style>
      text { font-family: 'Courier New', monospace; font-size: ${fontSize}px; line-height: ${lineHeight}; fill: #e8e8e0; }
    </style>
  </defs>
  <rect width="${svgWidth + padding * 2}" height="${svgHeight + padding * 2}" fill="#0a0a0a"/>
  <g transform="translate(${padding}, ${padding})">`;

    const lines = asciiOutput.split('\n');
    for (let y = 0; y < lines.length; y++) {
      const line = lines[y];
      const yPos = y * charHeightActual;

      // Split line by consecutive same characters for better rendering
      let currentChar = '';
      let currentX = 0;

      for (let x = 0; x < line.length; x++) {
        const char = line[x];
        const xPos = x * charWidth;

        if (char === ' ') {
          currentX++;
        } else {
          svgContent += `<text x="${currentX * charWidth}" y="${yPos + fontSize}">${char.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</text>`;
          currentX++;
        }
      }
    }

    svgContent += `
  </g>
</svg>`;

    // Convert SVG to PNG
    console.log(`🖼️  Converting to PNG...`);

    const outputPath = outputFilename
      ? path.join('/Users/blackmachete/projects/patched-editorial/covers', outputFilename)
      : path.join('/Users/blackmachete/projects/patched-editorial/covers', `momentum-006-ascii-cover-${new Date().toISOString().split('T')[0]}.png`);

    await sharp(Buffer.from(svgContent))
      .png()
      .toFile(outputPath);

    console.log(`✅ ASCII cover generated!`);
    console.log(`   Output: ${outputPath}`);
    console.log(`   ASCII: ${width}×${height} characters`);
    console.log(`   Cover: ${svgWidth + padding * 2}×${svgHeight + padding * 2}px`);

    return outputPath;

  } catch (err) {
    console.error(`❌ Error: ${err.message}`);
    process.exit(1);
  }
}

// Main
const args = process.argv.slice(2);
if (args.length === 0) {
  console.log(`Usage: node generate-ascii-cover.js <input-image> [output-filename]`);
  console.log(`\nExample:`);
  console.log(`  node generate-ascii-cover.js covers/momentum-006-midjourney.png momentum-006-ascii-cover.png`);
  console.log(`\nSupported formats: PNG, JPG, WebP, GIF, SVG`);
  process.exit(0);
}

const inputPath = args[0];
const outputFilename = args[1] || 'momentum-006-ascii-cover.png';

convertImageToAsciiPng(inputPath, outputFilename);
