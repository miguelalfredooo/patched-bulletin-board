#!/usr/bin/env node
/**
 * momentum-image-to-ascii.js
 * Convert PNG renders back to ASCII art using p5.js renderAsciiGrid methodology
 * Creates "deconstructed" pure ASCII versions from the colored PNGs
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const COVERS_DIR = '/Users/blackmachete/projects/bulletin-board/covers';
const OUTPUT_DIR = '/Users/blackmachete/projects/bulletin-board/covers/ascii-deconstructed';

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
  ULTRA_LOW: { width: 32, height: 32 },
  LOW: { width: 42, height: 15 },      // Match our governance width/height
  MEDIUM: { width: 64, height: 48 },
  HIGH: { width: 80, height: 60 },
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
 * Convert image buffer to ASCII art
 */
async function imageToAscii(imagePath, resolution = 'LOW', charSet = 'BOLD') {
  try {
    // Resize image to target resolution
    const dims = RESOLUTIONS[resolution];
    const resized = await sharp(imagePath)
      .resize(dims.width, dims.height, { fit: 'cover' })
      .raw()
      .toBuffer({ resolveWithObject: true });

    const { data, info } = resized;
    const { width, height, channels } = info;

    // Convert pixels to brightness
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
        ascii += char;
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
 * Process all momentum PNG files and generate ASCII versions
 */
async function generateAsciiDeconstructed() {
  console.log('🎨 Converting Momentum PNGs to ASCII...\n');

  // Find all momentum PNG files
  const files = fs.readdirSync(COVERS_DIR)
    .filter(f => f.startsWith('momentum-006-') && f.endsWith('.png'))
    .sort();

  console.log(`Found ${files.length} PNG renders\n`);

  // Group by section for organization
  const bySection = {};
  for (const file of files) {
    const match = file.match(/momentum-006-(\d+-[\w-]+)-momentum-/);
    if (match) {
      const section = match[1];
      if (!bySection[section]) bySection[section] = [];
      bySection[section].push(file);
    }
  }

  let processed = 0;

  // Process each section
  for (const [section, sectionFiles] of Object.entries(bySection)) {
    console.log(`\n📍 Section: ${section}`);

    for (const file of sectionFiles) {
      const filepath = path.join(COVERS_DIR, file);
      const match = file.match(/momentum-006-[\d-]+-(momentum-[\w-]+)\.png/);
      const scheme = match ? match[1] : 'unknown';

      // Generate ASCII in different resolutions
      const lowRes = await imageToAscii(filepath, 'LOW', 'BOLD');

      if (lowRes) {
        // Save as text file
        const outputFile = file.replace('.png', `-ascii-${scheme}.txt`);
        const outputPath = path.join(OUTPUT_DIR, outputFile);
        fs.writeFileSync(outputPath, lowRes);

        console.log(`  ✓ ${outputFile}`);
        processed++;
      }
    }
  }

  console.log(`\n✨ Generated ${processed} ASCII deconstructed versions!`);
  console.log(`\nOutput directory: ${OUTPUT_DIR}`);
  console.log('\nThese ASCII versions strip color and reduce to pure structure.');
  console.log('Perfect for text-only delivery alongside the color PNGs.');
}

generateAsciiDeconstructed().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
