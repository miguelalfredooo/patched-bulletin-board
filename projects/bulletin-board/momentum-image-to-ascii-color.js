#!/usr/bin/env node
/**
 * momentum-image-to-ascii-color.js
 * Convert PNG renders to ASCII with colors from source image
 * Pure ASCII text, but colored to reflect the original image
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const COVERS_DIR = '/Users/blackmachete/projects/bulletin-board/covers';
const OUTPUT_DIR = '/Users/blackmachete/projects/bulletin-board/covers/ascii-color';

// Ensure output directory
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// ASCII character sets (ordered dark to light)
const ASCII_SETS = {
  MINIMAL: ' .-=+*#█',
  LOW: '@#*+=-:. ',
  MEDIUM: '$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\\|()1{}[]?-_+~<>i!lI;:,^`\'. ',
  BOLD: '█▓▒░$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\\|()1{}[]?-_+~<>i!lI;:,^`\'. ',
};

const RESOLUTIONS = {
  LOW: { width: 42, height: 15 },      // Telegram-safe width
  MEDIUM: { width: 64, height: 48 },
};

/**
 * Get ASCII character for brightness level
 */
function getAsciiChar(brightness, charSet) {
  const index = Math.floor((brightness / 255) * (charSet.length - 1));
  return charSet.charAt(charSet.length - 1 - index) || ' ';
}

/**
 * Calculate brightness of a pixel (0-255)
 */
function calculateBrightness(r, g, b) {
  return (r * 299 + g * 587 + b * 114) / 1000;
}

/**
 * Convert RGB to ANSI 24-bit color code
 */
function rgbToAnsi24(r, g, b) {
  return `\x1b[38;2;${r};${g};${b}m`;
}

/**
 * Reset ANSI color
 */
function ansiReset() {
  return '\x1b[0m';
}

/**
 * Convert image to colored ASCII
 */
async function imageToColoredAscii(imagePath, resolution = 'LOW', charSet = 'BOLD') {
  try {
    // Resize image to target resolution
    const dims = RESOLUTIONS[resolution];
    const resized = await sharp(imagePath)
      .resize(dims.width, dims.height, { fit: 'cover' })
      .raw()
      .toBuffer({ resolveWithObject: true });

    const { data, info } = resized;
    const { width, height, channels } = info;

    // Convert pixels to ASCII with color
    let ascii = '';
    const charSetStr = ASCII_SETS[charSet];

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const pixelIdx = (y * width + x) * channels;
        const r = data[pixelIdx];
        const g = data[pixelIdx + 1];
        const b = data[pixelIdx + 2];

        const brightness = calculateBrightness(r, g, b);
        const char = getAsciiChar(brightness, charSetStr);

        // Build colored character
        const colorCode = rgbToAnsi24(r, g, b);
        ascii += colorCode + char + ansiReset();
      }
      ascii += '\n';
    }

    return ascii;
  } catch (err) {
    console.error(`Error processing ${imagePath}:`, err.message);
    return null;
  }
}

/**
 * Process all momentum PNG files
 */
async function generateColoredAscii() {
  console.log('🎨 Converting Momentum PNGs to Colored ASCII...\n');

  // Find all momentum PNG files
  const files = fs.readdirSync(COVERS_DIR)
    .filter(f => f.startsWith('momentum-006-') && f.endsWith('.png'))
    .sort();

  console.log(`Found ${files.length} PNG renders\n`);

  let processed = 0;

  for (const file of files) {
    const filepath = path.join(COVERS_DIR, file);
    const match = file.match(/momentum-006-(.+)-momentum-(.+)\.png/);

    if (match) {
      const section = match[1];
      const scheme = match[2];

      // Generate colored ASCII
      const colored = await imageToColoredAscii(filepath, 'LOW', 'BOLD');

      if (colored) {
        // Save as text file with ANSI color codes
        const outputFile = `momentum-006-${section}-${scheme}-ascii-color.txt`;
        const outputPath = path.join(OUTPUT_DIR, outputFile);
        fs.writeFileSync(outputPath, colored);

        console.log(`✓ ${outputFile}`);
        processed++;
      }
    }
  }

  console.log(`\n✨ Generated ${processed} colored ASCII versions!`);
  console.log(`\nOutput directory: ${OUTPUT_DIR}`);
  console.log('\nFormat: .txt with ANSI color codes (for terminal/Telegram)');
}

generateColoredAscii().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
