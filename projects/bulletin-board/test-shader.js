#!/usr/bin/env node

/**
 * Test shader system with sample image processing
 */

const { processImage, PRESETS, paramsFromMouse } = require('./utils/shader');
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const TEST_DIR = './test-output';

async function main() {
  console.log('🎨 Bulletin Board Shader System Test\n');

  // Create test output directory
  if (!fs.existsSync(TEST_DIR)) {
    fs.mkdirSync(TEST_DIR, { recursive: true });
  }

  // Create a simple test image (gradient + geometric shapes)
  console.log('📸 Generating test image...');
  const testImagePath = path.join(TEST_DIR, 'test-input.png');

  // Create a 400×300 test image with gradients and shapes
  const svgImage = `
    <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#FF006E;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#FB5607;stop-opacity:1" />
        </linearGradient>
        <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#3A86FF;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#8338EC;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="url(#grad1)"/>
      <circle cx="200" cy="150" r="80" fill="url(#grad2)" opacity="0.7"/>
      <rect x="50" y="50" width="100" height="100" fill="#FFBE0B" opacity="0.6"/>
      <polygon points="300,50 350,150 300,150" fill="#00D9FF" opacity="0.8"/>
      <text x="200" y="280" text-anchor="middle" font-size="24" fill="white" font-weight="bold">Test Pattern</text>
    </svg>
  `;

  await sharp(Buffer.from(svgImage))
    .png()
    .toFile(testImagePath);

  console.log(`   ✓ Created: ${testImagePath}\n`);

  // Test each preset
  console.log('🔧 Processing with presets...\n');

  for (const [presetName, presetParams] of Object.entries(PRESETS)) {
    const outputPath = path.join(TEST_DIR, `shader-${presetName}.png`);
    console.log(`   Processing: ${presetName}`);
    console.log(`     pixelSize: ${presetParams.pixelSize}, colorLevels: ${presetParams.colorLevels}, ditherAmount: ${presetParams.ditherAmount.toFixed(2)}`);

    const start = Date.now();
    const result = await processImage(testImagePath, presetName);
    const duration = Date.now() - start;

    fs.writeFileSync(outputPath, result);
    console.log(`     ✓ Saved: ${outputPath} (${duration}ms)\n`);
  }

  // Test mouse-driven parameters
  console.log('🖱️  Processing with mouse positions...\n');

  const mousePositions = [
    { name: 'top-left', nx: 0.2, ny: 0.2 },
    { name: 'center', nx: 0.5, ny: 0.5 },
    { name: 'bottom-right', nx: 0.8, ny: 0.8 },
  ];

  for (const pos of mousePositions) {
    const outputPath = path.join(TEST_DIR, `shader-mouse-${pos.name}.png`);
    console.log(`   Processing: mouse at (${pos.nx}, ${pos.ny})`);

    const params = {
      ...paramsFromMouse(pos.nx, pos.ny),
    };
    console.log(`     pixelSize: ${params.pixelSize}, colorLevels: ${params.colorLevels}`);

    const start = Date.now();
    const result = await processImage(testImagePath, params);
    const duration = Date.now() - start;

    fs.writeFileSync(outputPath, result);
    console.log(`     ✓ Saved: ${outputPath} (${duration}ms)\n`);
  }

  console.log('✅ Shader system test complete!\n');
  console.log(`📁 Output directory: ${TEST_DIR}/`);
  console.log('   - test-input.png (original)');
  console.log('   - shader-*.png (processed with different presets)');
  console.log('   - shader-mouse-*.png (mouse-driven parameters)\n');
}

main().catch((err) => {
  console.error('❌ Error:', err.message);
  process.exit(1);
});
