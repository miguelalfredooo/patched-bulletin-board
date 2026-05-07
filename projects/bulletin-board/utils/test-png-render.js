#!/usr/bin/env node
// test-png-render.js
// Test PNG rendering of ASCII art.
// Usage: node utils/test-png-render.js

const { renderAsciiImage, renderAsciiFile, THEMES } = require('./ascii-render');
const fs = require('fs');
const path = require('path');

const MASTHEAD = `
██████╗ ██████╗ ██████╗ ™
██╔══██╗██╔══██╗██╔══██╗
██║  ██║██████╔╝██████╔╝
██║  ██║██╔══██╗██╔══██╗
██████╔╝██████╔╝██████╔╝
╚═════╝ ╚═════╝ ╚═════╝

Design By Bulletin™
━━━━━━━━━━━━━━━━━━━━━━━
`.trim();

const SAMPLE_ASCII = `
    ╭─────────────────────╮
    │  The Ritual in Tools │
    ╰─────────────────────╯

    ░░░░░░░░░░░░░░░░░░░░
    ░░░░░░░░░░░░░░░░░░░░
    ░░░░    ░░░░░░░░░░░░░
    ░░░░  ░░ ░░░░░░░░░░░░
    ░░░░  ░░ ░░░░░░░░░░░░
    ░░░░    ░░░░░░░░░░░░░
    ░░░░░░░░░░░░░░░░░░░░
    ░░░░░░░░░░░░░░░░░░░░
`.trim();

async function test() {
  console.log('PNG Rendering Test Suite\n');

  const tests = [
    { name: 'Masthead (default theme)', ascii: MASTHEAD, theme: 'default', fontSize: 16 },
    { name: 'Masthead (editorial theme)', ascii: MASTHEAD, theme: 'editorial', fontSize: 16 },
    { name: 'Sample ASCII (midnight theme)', ascii: SAMPLE_ASCII, theme: 'midnight', fontSize: 14 },
  ];

  for (const test of tests) {
    try {
      console.log(`Testing: ${test.name}`);

      // Render to buffer
      const buf = await renderAsciiImage(test.ascii, {
        theme: test.theme,
        fontSize: test.fontSize,
        scale: 2,
      });

      console.log(`  ✓ Rendered: ${buf.length} bytes`);

      // Render to file
      const fileName = `dbb-test-${test.name.replace(/\s+/g, '-').toLowerCase()}.png`;
      const filePath = path.join('/tmp', fileName);
      await renderAsciiFile(test.ascii, {
        theme: test.theme,
        fontSize: test.fontSize,
        scale: 2,
        outPath: filePath,
      });

      const fileSize = fs.statSync(filePath).size;
      console.log(`  ✓ Saved to: /tmp/${fileName} (${fileSize} bytes)`);

      // Show base64 sample
      const b64 = buf.toString('base64');
      console.log(`  ✓ Base64 (first 80 chars): ${b64.substring(0, 80)}...`);
      console.log();
    } catch (err) {
      console.error(`  ✗ Error: ${err.message}\n`);
    }
  }

  console.log('Available themes:');
  Object.keys(THEMES).forEach(name => {
    console.log(`  - ${name}`);
  });

  console.log('\nTest complete. PNG files in /tmp/ are ready for Telegram delivery.');
}

test().catch(console.error);
