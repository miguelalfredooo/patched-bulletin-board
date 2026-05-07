#!/usr/bin/env node
/**
 * generate-momentum-all-versions.js
 * Complete Issue 006 Momentum — all 11 sections × 5 color schemes
 */

const fs = require('fs');
const path = require('path');
const { renderAsciiImage } = require('./utils/ascii-render');

const COVERS_DIR = '/Users/blackmachete/projects/bulletin-board/covers';

// Ensure covers directory exists
if (!fs.existsSync(COVERS_DIR)) {
  fs.mkdirSync(COVERS_DIR, { recursive: true });
}

// 11 Governance ASCII pieces for Momentum Issue 006
// Format sequence: A→B→D→C→E→A→B→C→D→E→A (no consecutive repeats)
const pieces = {
  '1-art': { // Format A — Classic Object
    section: 'Art',
    format: 'A',
    ascii: `
    ╭─────────────┮
    │ ∟∟∟ ▓▓▓ ∟ │
    │ █ ▀▀▀ █   │
    │ ▀ ███ ▀   │
    │   ███     │
    │ ▀▀ █ ▀▀   │
    ╰─────────────╯
    `.trim(),
  },

  '2-painting': { // Format B — Geometric Frame
    section: 'Painting',
    format: 'B',
    ascii: `
╔═══════════════════╗
║ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ║
║ ▓░░░░░░░░░░░▓▓ ║
║ ▓░ ███ ░░░░░▓▓ ║
║ ▓░ █▀█ ░░░░░▓▓ ║
║ ▓░ ███ ░░░░░▓▓ ║
║ ▓░░░░░░░░░░░▓▓ ║
║ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ║
╚═══════════════════╝
    `.trim(),
  },

  '3-illustration': { // Format D — Two Column
    section: 'Illustration',
    format: 'D',
    ascii: `
╭──────────┐ ◆
│ ◇◆◇◆◇◆◇  │ ◆◆
│◆ ▀█▀ ▀█ │ ◆◆◆
│◇ █▄█ █▄ │ ◆
│◆◇◆◇◆◇◆  │
╰──────────┘
    `.trim(),
  },

  '4-sculpture': { // Format C — Typographic
    section: 'Sculpture',
    format: 'C',
    ascii: `
  ███╗   ███╗
  ████╗ ████║
  █╔═██╗██╔═╝
  █║ ██║██║
  █║██╔╝██║
  ██╚═╝ ╚═╝
    `.trim(),
  },

  '5-culture': { // Format E — Full Spread
    section: 'Culture',
    format: 'E',
    ascii: `
⠿⠾⠽⠻⠟⠯⠷⠾⠿⠾⠽⠻⠟⠯⠷⠾
⠿ ░▒▓█████▓▒░ ⠿ ░▒▓ ⠿
⠾ █░░░░░░░░█ ⠾ ░▒▓ ⠾
⠽ █░ ◊◊◊ ░█ ⠽ ░▒▓ ⠽
⠻ █░░░░░░░░█ ⠻ ░▒▓ ⠻
⠟ ░▒▓█████▓▒░ ⠟ ░▒▓ ⠟
⠯⠷⠾⠿⠾⠽⠻⠟⠯⠷⠾⠽⠻⠟⠯⠷⠾
    `.trim(),
  },

  '6-photography': { // Format A — Classic Object
    section: 'Photography',
    format: 'A',
    ascii: `
    ╔═══════════╗
    ║ ◇━━━━━━━◇ ║
    ║ █  ⠿⠾  █ ║
    ║ █ ⠽⠻⠟ █ ║
    ║ █  ⠯⠷  █ ║
    ║ ◇━━━━━━━◇ ║
    ╚═══════════╝
    `.trim(),
  },

  '7-art-history': { // Format B — Geometric Frame
    section: 'Art History',
    format: 'B',
    ascii: `
┌─────────────────┐
│ ╭╮ ╔╗ ╭╮ ┌─┐ │
│ ││ ║║ ││ │░│ │
│ ╰╯ ╚╝ ╰╯ └─┘ │
│ ╔════════════╗ │
│ ║ ▓▒░░░░▒▓ ║ │
│ ╚════════════╝ │
└─────────────────┘
    `.trim(),
  },

  '8-opinions': { // Format C — Typographic
    section: 'Opinions',
    format: 'C',
    ascii: `
  █████╗ ██╗████╗
  ██╔══╝ ██║██╔═╝
  ██║    ██║██║
  ██║    ██║██║
  ╚█████╗██║██║
   ╚════╝╚═╝╚═╝
    `.trim(),
  },

  '9-design-tools': { // Format D — Two Column
    section: 'Design & AI Tools',
    format: 'D',
    ascii: `
 ╔══════════╗  ◆
 ║ ▄▄▄▄▄▄  ║  ◆◆
 ║ █    █  ║  ◆◆◆
 ║ █ ▀▀ █  ║  ◆
 ║ █▄▄▄▄█  ║
 ╚══════════╝
    `.trim(),
  },

  '10-product-process': { // Format E — Full Spread
    section: 'Product & Process',
    format: 'E',
    ascii: `
⠿⠾⠽⠻⠟⠯⠷⠾⠿⠾⠽⠻⠟⠯⠷⠾
⠿ ░▒▓█████▓▒░ ⠿ ░▒▓ ⠿
⠾ █░░░░░░░░█ ⠾ ░▒▓ ⠾
⠽ █░ ◊◊◊ ░█ ⠽ ░▒▓ ⠽
⠻ █░░░░░░░░█ ⠻ ░▒▓ ⠻
⠟ ░▒▓█████▓▒░ ⠟ ░▒▓ ⠟
⠯⠷⠾⠿⠾⠽⠻⠟⠯⠷⠾⠽⠻⠟⠯⠷⠾
    `.trim(),
  },

  '11-visual-brand': { // Format A — Classic Object (final)
    section: 'Visual & Brand',
    format: 'A',
    ascii: `
▀▀▀█████▀▀▀ ▀▀▀█████▀▀▀
█████░░░█████ █░░░█
█░░░░░░░░░░█ █░░░█
█░ ▓▓▓▓ ░░█ █░░░█
█░░░░░░░░░░█ █░░░█
█████▓▓▓█████ █████
    `.trim(),
  },
};

const colorSchemes = [
  'momentum-neon',
  'momentum-orange-navy',
  'momentum-green-purple',
  'momentum-pink-cyan',
  'momentum-gold-silver',
];

const schemeNames = {
  'momentum-neon': 'Neon (Cyan + Hot Pink)',
  'momentum-orange-navy': 'Orange-Navy',
  'momentum-green-purple': 'Green-Purple',
  'momentum-pink-cyan': 'Pink-Cyan',
  'momentum-gold-silver': 'Gold-Silver',
};

async function renderAllVersions() {
  console.log('🎨 Generating Issue 006 Momentum — All 5 Color Versions\n');
  console.log('11 sections × 5 color schemes = 55 PNG renders\n');

  for (const scheme of colorSchemes) {
    console.log(`\n📍 ${schemeNames[scheme]}`);
    const sectionNames = Object.keys(pieces);

    for (const key of sectionNames) {
      const piece = pieces[key];
      try {
        const buffer = await renderAsciiImage(piece.ascii, {
          theme: scheme,
          fontSize: 12,
          scale: 2,
          monochromatic: false,
        });

        const filename = `momentum-006-${key}-${scheme}.png`;
        const filepath = path.join(COVERS_DIR, filename);
        fs.writeFileSync(filepath, buffer);
        process.stdout.write('.');
      } catch (e) {
        process.stdout.write('✗');
      }
    }
    console.log(' ✓');
  }

  console.log('\n\n✨ All 55 renders complete!');
  console.log('\nFile structure:');
  console.log('  momentum-006-{section}-{scheme}.png');
  console.log('\nSections: art, painting, illustration, sculpture, culture,');
  console.log('          photography, art-history, opinions, design-tools,');
  console.log('          product-process, visual-brand');
  console.log('\nSchemes: neon, orange-navy, green-purple, pink-cyan, gold-silver');
}

renderAllVersions().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
