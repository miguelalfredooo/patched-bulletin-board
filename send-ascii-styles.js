#!/usr/bin/env node
/**
 * send-ascii-styles.js
 * Send ASCII styles exploration to Telegram
 */

const https = require('https');

const BOT_TOKEN = '8662552111:AAHpfxCGoM6PGbEg4msbSm3bEE6Ucf5o1O0';
const CHAT_ID = '7774590281';

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function sendMessage(text) {
  return new Promise((resolve, reject) => {
    const body = { chat_id: CHAT_ID, text };
    const payload = JSON.stringify(body);
    const options = {
      hostname: 'api.telegram.org',
      port: 443,
      path: `/bot${BOT_TOKEN}/sendMessage`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload),
      },
    };
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          if (!parsed.ok) console.error('Telegram error:', parsed.description);
          resolve(parsed);
        } catch (e) {
          reject(e);
        }
      });
    });
    req.on('error', reject);
    req.write(payload);
    req.end();
  });
}

async function main() {
  const styles = [
    { name: 'HEAVY NESTED', code: `╔════════════════════════════════════╗
║  ╔════════════════════════════╗  ║
║  ║  ╔════════════════════╗  ║  ║
║  ║  ║  ╔════════════╗  ║  ║  ║
║  ║  ║  ║  ▓▓▓▓▓▓▓  ║  ║  ║  ║
║  ║  ║  ╚════════════╝  ║  ║  ║
║  ║  ╚════════════════════╝  ║  ║
║  ╚════════════════════════════╝  ║
╚════════════════════════════════════╝` },
    { name: 'RADIATING EXPANSION', code: `      ◆
     ◆◆◆
    ◆◆◆◆◆
   ◆◆◆◆◆◆◆
  ◆◆◆◆◆◆◆◆◆
 ◆◆◆◆◆◆◆◆◆◆◆
◆◆◆◆◆◆◆◆◆◆◆◆◆` },
    { name: 'SPARSE GEOMETRIC', code: `    ┌───┐
   ╱     ╲
  ╱       ╲
 ╱         ╲
╱           ╲
│           │
└───────────┘` },
    { name: 'ORGANIC FLOWING', code: `      ╭─────╮
    ╭╱       ╲╮
   ╱           ╲
  │             │
  │             │
   ╲           ╱
    ╰╲       ╱╯
      ╰─────╯` },
    { name: 'TEXTURED GRADIENT', code: `░░░░░░░░░░░░░░░░░░░░░░░░
░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░
░▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒░
░▒▓███████████████▓▒░
░▒▓███████████████▓▒░
░▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒░
░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░
░░░░░░░░░░░░░░░░░░░░░░░░` },
    { name: 'DOUBLE BORDER', code: `┏━━━━━━━━━━━━━━━━━━━━━┓
┃ ╔═════════════════╗ ┃
┃ ║  content here  ║ ┃
┃ ║  layered box   ║ ┃
┃ ║  with borders  ║ ┃
┃ ╚═════════════════╝ ┃
┗━━━━━━━━━━━━━━━━━━━━━┛` },
    { name: 'PILLAR STRUCTURE', code: `║  ║  ║  ║  ║  ║
║  ║  ║  ║  ║  ║
╠═╬═╬═╬═╬═╬═╬═╣
║  ║  ║  ║  ║  ║
║  ║  ║  ║  ║  ║
╚═╩═╩═╩═╩═╩═╩═╝` },
    { name: 'ASYMMETRIC BALANCE', code: `    ╭────────────────╮
    │ ╭────────────╮ │
    │ │            │ │
╔═══╧═╫────────────╫═╧═══╗
║     │ Object     │     ║
╚═════╫────────────╫═════╝
      │ ╭────────╮ │
      │ │        │ │
      ╰─┴────────┴─╯` },
    { name: 'CONCENTRIC CIRCLES', code: `      ╭───────────╮
     ╱             ╲
    ╱   ╭─────╮   ╲
   ╱   ╱       ╲   ╲
  │   │    ◆    │   │
   ╲   ╲       ╱   ╱
    ╲   ╰─────╯   ╱
     ╲             ╱
      ╰───────────╯` },
    { name: 'STACKED BOXES', code: `╔═══════════════╗
║               ║
║  Topmost      ║
║               ║
╠═══════════════╣
║               ║
║  Middle       ║
║               ║
╠═══════════════╣
║               ║
║  Bottom       ║
║               ║
╚═══════════════╝` },
    { name: 'TRIANGULAR COMPOSITION', code: `        ▓
       ▓▓▓
      ▓▓▓▓▓
     ▓▓▓▓▓▓▓
    ▓▓▓▓▓▓▓▓▓
   ▓▓▓▓▓▓▓▓▓▓▓
  ▓▓▓▓▓▓▓▓▓▓▓▓▓` },
    { name: 'DIAMOND FORM', code: `       ╱╲
      ╱  ╲
     ╱    ╲
    ╱  ◆   ╲
   ╱        ╲
  ╱          ╲
 ╱            ╲
╱              ╲
╲              ╱
 ╲            ╱
  ╲          ╱
   ╲        ╱
    ╲      ╱
     ╲    ╱
      ╲  ╱
       ╲╱` },
    { name: 'WAVE PATTERN', code: `╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲
  ░░░░░░░░░░░░░░
╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲` },
    { name: 'SPIRAL INWARD', code: `╔════════════════════╗
║ ┌──────────────┐  ║
║ │ ┌────────┐  │  ║
║ │ │ ┌──┐  │  │  ║
║ │ │ │◆ │  │  │  ║
║ │ │ └──┘  │  │  ║
║ │ └────────┘  │  ║
║ └──────────────┘  ║
╚════════════════════╝` },
    { name: 'SHADOW EFFECT', code: `  ╭─────────╮
  │◇◇◇◇◇◇◇ │
  │◇░░░░░◇ │
 ╱│◇░░░░░◇ │╲
│ │◇░░░░░◇ │ │
│ │◇◇◇◇◇◇◇ │ │
│ ╰─────────╯ │
╰─────────────╯` },
    { name: 'PLUS/CROSS', code: `      │
      │
      ▓
      │
      │
──────●──────
      │
      │
      ▓
      │
      │` },
    { name: 'STARBURST', code: `    ●╱│╲●
    ╱ │ ╲
   ●  │  ●
───────●───────
   ●  │  ●
    ╲ │ ╱
    ●╲│╱●` },
    { name: 'MINIMAL FRAME', code: `┌──────────────────────┐
│                      │
│                      │
│                      │
│                      │
└──────────────────────┘` },
    { name: 'CENTERED FOCAL', code: `



        ◆




` },
    { name: 'OPEN AIR', code: `




        ◆




` },
  ];

  const messages = [
    '═══════════════════════════════════════════════════════════════\n  ASCII STYLES EXPLORATION — 20 Distinct Approaches\n═══════════════════════════════════════════════════════════════\n\nBreadth of visual styles, no narrative. Pure ASCII composition.',
  ];

  for (const style of styles) {
    messages.push(`\n${style.name}\n\n\`\`\`\n${style.code}\n\`\`\``);
  }

  messages.push('\n═══════════════════════════════════════════════════════════════\n\nCategories:\n\nHEAVY: nested, gradient, stacked\nLIGHT: sparse geometric, minimal frame\nMEDIUM: double border, pillar, asymmetric\nFOCAL: centered, concentric, diamond\nMOVEMENT: radiating, wave, spiral, starburst\nEXTREME: open air, full density');

  console.log(`Sending ${messages.length} messages to Telegram...`);

  for (let i = 0; i < messages.length; i++) {
    try {
      console.log(`[${i + 1}/${messages.length}] Sending...`);
      const result = await sendMessage(messages[i]);
      if (result.ok) {
        console.log(`✓ Message ${i + 1} sent`);
      } else {
        console.error(`✗ Message ${i + 1} failed:`, result.description);
      }
      await delay(500);
    } catch (err) {
      console.error(`✗ Error sending message ${i + 1}:`, err.message);
    }
  }

  console.log('Done!');
}

main().catch(console.error);
