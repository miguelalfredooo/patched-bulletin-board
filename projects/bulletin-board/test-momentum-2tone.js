#!/usr/bin/env node
/**
 * test-momentum-2tone.js — Sample renders for 2-3 tone Momentum ASCII schemes
 * Tests alignment fixes and intentional color role mapping
 */

const fs = require('fs');
const path = require('path');
const { renderAsciiImage } = require('./utils/ascii-render');
const { renderText } = require('./utils/figlet');

const COVERS_DIR = '/Users/blackmachete/projects/bulletin-board/covers';

// Ensure covers directory exists
if (!fs.existsSync(COVERS_DIR)) {
  fs.mkdirSync(COVERS_DIR, { recursive: true });
}

// Sample ASCII pieces with varying character complexity
const samples = {
  simple: `
╔═══════════════╗
║ M O M E N T ║
║     U M      ║
║   ⠿⠾⠽⠻⠟  ║
║   ⠯⠷⠾⠿   ║
╚═══════════════╝
`.trim(),

  geometric: `
███████████████
█░░░░░░░░░░░░░█
█░ ◇◆◇◆◇◆◇ ░█
█░ ▀▀▀▀▀▀▀▀ ░█
█░░░░░░░░░░░░░█
███████████████
`.trim(),

  halftone: `
⠿⠾⠽⠻⠟⠯⠷⠾⠿
⠀ ░▒▓█████▓▒░ ⠀
⠿ █░░░░░░░░█ ⠿
⠾ █░ ◊◊◊ ░█ ⠾
⠽ █░░░░░░░░█ ⠽
⠻ ░▒▓█████▓▒░ ⠻
⠟⠯⠷⠾⠿⠾⠽⠻⠟
`.trim(),

  mixed: `
╭──────────────╮
│ ⠿⠾⠽⠻⠟⠯ │
│ ▀ ░▒▓█░ ▀   │
│ █▌ ◇◆◇ █▌   │
│ ▀ ░▒▓█░ ▀   │
╰──────────────╯
`.trim(),
};

// Typography sample with figlet
async function generateTypographySample() {
  try {
    const momentumText = renderText('MOMENTUM', 'theme', 2);
    return momentumText;
  } catch (e) {
    console.error('Typography render failed:', e.message);
    return `
  MOMENTUM
  ━━━━━━━━━━━━
    `.trim();
  }
}

// Render samples with each 2-3 tone scheme
async function renderAllSamples() {
  const schemes = [
    'momentum-neon',
    'momentum-orange-navy',
    'momentum-green-purple',
    'momentum-pink-cyan',
    'momentum-gold-silver',
  ];

  console.log('🎨 Rendering 2-3 tone Momentum samples...\n');

  // Get typography sample
  const typographySample = await generateTypographySample();

  for (const scheme of schemes) {
    console.log(`\n• ${scheme}`);

    // Render each sample with this scheme
    const sampleKeys = Object.keys(samples);
    for (let i = 0; i < sampleKeys.length; i++) {
      const key = sampleKeys[i];
      const ascii = samples[key];

      try {
        const buffer = await renderAsciiImage(ascii, {
          theme: scheme,
          fontSize: 13,
          scale: 2,
          monochromatic: false,
        });

        const filename = `momentum-sample-${scheme}-${key}.png`;
        const filepath = path.join(COVERS_DIR, filename);
        fs.writeFileSync(filepath, buffer);
        console.log(`  ✓ ${key}`);
      } catch (e) {
        console.error(`  ✗ ${key}: ${e.message}`);
      }
    }

    // Render typography sample
    try {
      const buffer = await renderAsciiImage(typographySample, {
        theme: scheme,
        fontSize: 12,
        scale: 2,
        monochromatic: false,
      });

      const filename = `momentum-sample-${scheme}-typography.png`;
      const filepath = path.join(COVERS_DIR, filename);
      fs.writeFileSync(filepath, buffer);
      console.log(`  ✓ typography`);
    } catch (e) {
      console.error(`  ✗ typography: ${e.message}`);
    }
  }

  console.log('\n✨ All samples rendered to covers/ directory');
  console.log('\nColor schemes:');
  console.log('  • momentum-neon — Cyan + Hot Pink (80s energy)');
  console.log('  • momentum-orange-navy — Orange + Navy (warm/cool depth)');
  console.log('  • momentum-green-purple — Green + Purple (synth kinetic)');
  console.log('  • momentum-pink-cyan — Pink + Cyan (magenta-forward)');
  console.log('  • momentum-gold-silver — Gold + Silver (elegant kinetic)');
}

renderAllSamples().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
