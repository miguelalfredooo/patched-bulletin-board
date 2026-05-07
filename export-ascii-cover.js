#!/usr/bin/env node
/**
 * export-ascii-cover.js
 * Convert image to colored ASCII art cover PNG with brightened colors
 * Settings: HIGH resolution (80×60), MEDIUM charset, 12-32px font, 1.3x saturation
 * Usage: node export-ascii-cover.js <input-image> [output-filename] [font-size]
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const ASCII_SETS = {
  MEDIUM: '$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\\|()1{}[]?-_+~<>i!lI;:,^`\'. ',
};

// Scale ASCII resolution based on font size to maintain detail
const FONT_SIZE_RESOLUTIONS = {
  8: { width: 64, height: 48 },
  9: { width: 72, height: 54 },
  10: { width: 76, height: 57 },
  11: { width: 78, height: 59 },
  12: { width: 80, height: 60 },
  14: { width: 90, height: 68 },
  16: { width: 100, height: 75 },
  18: { width: 110, height: 83 },
  20: { width: 120, height: 90 },
  24: { width: 140, height: 105 },
  28: { width: 150, height: 112 },
  32: { width: 160, height: 120 },
};

function calculateBrightness(r, g, b) {
  return (r * 299 + g * 587 + b * 114) / 1000;
}

function getAsciiChar(brightness, charSet) {
  const index = Math.floor((brightness / 255) * (charSet.length - 1));
  return charSet.charAt(charSet.length - 1 - index) || ' ';
}

async function boostColorSaturation(r, g, b, saturation = 1.3) {
  // Boost color intensity for brighter output
  return [
    Math.min(255, Math.round(r * saturation)),
    Math.min(255, Math.round(g * saturation)),
    Math.min(255, Math.round(b * saturation)),
  ];
}

async function exportAsciiCover(inputPath, outputFilename = null, fontSize = 12) {
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

    const charset = 'MEDIUM';
    const lineHeight = 1.1;
    const charWidth = fontSize * 0.6;
    const charHeightActual = fontSize * lineHeight;

    // Get resolution for this font size (auto-scales with font)
    const dims = FONT_SIZE_RESOLUTIONS[fontSize] || FONT_SIZE_RESOLUTIONS[12];
    const charSet = ASCII_SETS[charset];

    // Resize image to ASCII resolution
    const resized = await sharp(imageBuffer)
      .resize(dims.width, dims.height, { fit: 'cover' })
      .raw()
      .toBuffer({ resolveWithObject: true });

    const { data, info } = resized;
    const { width, height, channels } = info;

    console.log(`🎨 Converting to ASCII (${width}×${height}) with color sampling...`);

    // Build SVG with colored characters
    const svgWidth = width * charWidth;
    const svgHeight = height * charHeightActual;
    const padding = 40;

    let svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${svgWidth + padding * 2}" height="${svgHeight + padding * 2}" viewBox="0 0 ${svgWidth + padding * 2} ${svgHeight + padding * 2}">
  <defs>
    <style>
      text { font-family: 'Courier New', monospace; font-size: ${fontSize}px; line-height: ${lineHeight}; }
    </style>
  </defs>
  <rect width="${svgWidth + padding * 2}" height="${svgHeight + padding * 2}" fill="#0a0a0a"/>
  <g transform="translate(${padding}, ${padding})">`;

    let charIndex = 0;
    let xOffset = 0;
    let yOffset = 0;

    for (let i = 0; i < data.length; i += 4) {
      let r = data[i];
      let g = data[i + 1];
      let b = data[i + 2];

      // Boost color saturation for brighter output
      const saturation = 1.3;
      r = Math.min(255, Math.round(r * saturation));
      g = Math.min(255, Math.round(g * saturation));
      b = Math.min(255, Math.round(b * saturation));

      const brightness = calculateBrightness(data[i], data[i + 1], data[i + 2]);
      const char = getAsciiChar(brightness, charSet);

      // New line
      if (charIndex > 0 && charIndex % width === 0) {
        xOffset = 0;
        yOffset += charHeightActual;
      }

      // Add colored character
      if (char !== ' ') {
        const rgbColor = `rgb(${r},${g},${b})`;
        const safeChar = char
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');

        svgContent += `<text x="${xOffset}" y="${yOffset + fontSize}" fill="${rgbColor}">${safeChar}</text>`;
      }

      xOffset += charWidth;
      charIndex++;
    }

    svgContent += `
  </g>
</svg>`;

    // Convert SVG to PNG
    console.log(`📝 Rendering SVG to PNG...`);

    const outputPath = outputFilename
      ? path.join('/Users/blackmachete/projects/bulletin-board/covers', outputFilename)
      : path.join('/Users/blackmachete/projects/bulletin-board/covers', `momentum-006-cover.png`);

    await sharp(Buffer.from(svgContent))
      .png()
      .toFile(outputPath);

    console.log(`✅ ASCII cover exported!`);
    console.log(`   File: ${outputPath}`);
    console.log(`   ASCII Resolution: ${width}×${height} characters (auto-scaled for ${fontSize}px)`);
    console.log(`   Charset: MEDIUM`);
    console.log(`   Font: ${fontSize}px Courier New`);
    console.log(`   Color Saturation: 1.3x (brightened)`);
    console.log(`   Output Size: ${svgWidth + padding * 2}×${svgHeight + padding * 2}px`);

    return outputPath;

  } catch (err) {
    console.error(`❌ Error: ${err.message}`);
    process.exit(1);
  }
}

// Main
const args = process.argv.slice(2);
if (args.length === 0) {
  console.log(`Usage: node export-ascii-cover.js <input-image> [output-filename] [font-size]`);
  console.log(`\nExample:`);
  console.log(`  node export-ascii-cover.js covers/momentum-006-midjourney.png`);
  console.log(`  node export-ascii-cover.js covers/momentum-006-midjourney.png momentum-006-cover.png 16`);
  console.log(`\nDefaults: HIGH resolution (80×60), MEDIUM charset, 12px font, 1.3x color saturation`);
  console.log(`Font sizes: 8, 12, 14, 16, 18, 20, 24, 28, 32px`);
  process.exit(0);
}

const inputPath = args[0];
const outputFilename = args[1];
const fontSize = args[2] ? parseInt(args[2]) : 12;

exportAsciiCover(inputPath, outputFilename, fontSize);
