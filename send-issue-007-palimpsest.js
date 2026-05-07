#!/usr/bin/env node
/**
 * send-issue-007-palimpsest.js
 * Send Issue 007 Palimpsest to Telegram with code block formatting
 */

const fs = require('fs');
const https = require('https');

const BOT_TOKEN = '8662552111:AAHpfxCGoM6PGbEg4msbSm3bEE6Ucf5o1O0';
const CHAT_ID = '7774590281';
const PROJECT_DIR = '/Users/blackmachete/projects/patched-editorial';

async function sendMessage(text) {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify({
      chat_id: CHAT_ID,
      text: text,
      parse_mode: 'Markdown',
    });

    const options = {
      hostname: 'api.telegram.org',
      port: 443,
      path: `/bot${BOT_TOKEN}/sendMessage`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': payload.length,
      },
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
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

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function sendPalimpsestIssue() {
  try {
    console.log('📨 Sending Issue 007 Palimpsest with code block formatting...\n');

    // Message 1 — Opening
    console.log('[1] Opening banner...');
    await sendMessage(`═══════════════════════════════════════════════════════════
Design By Bulletin™ — Issue 007: PALIMPSEST
2026-05-10
═══════════════════════════════════════════════════════════

Every surface is a palimpsest. We write because we know we're writing over.

Full issue: Visual preview + Editorial + Theme`);
    await delay(800);

    // Message 2 — Pure text issue with code blocks
    console.log('[2] Pure text issue with ASCII art in code blocks...');
    const issueContent = fs.readFileSync(`${PROJECT_DIR}/ISSUE-007-palimpsest.txt`, 'utf8');
    await sendMessage(issueContent);
    await delay(800);

    // Message 3 — Theme
    console.log('[3] Theme & closing...');
    await sendMessage(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PALIMPSEST — Issue 007

Theme: Palimpsest

Editorial Mix:
  Music: 55%
  Visual: 75%
  Research: 70%
  Process: 80%
  Theme: 85%
  AI Culture: 45%

Sonic Reference:
  Ambient with metallic textures
  Field recordings of decay and restoration
  Sparse, contemplative, 80–100 BPM

Cultural Thread:
  Erasure as visibility.
  Material memory and historical layering.
  Design as conversation with what came before.
  The old always showing through the new.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
    await delay(500);

    console.log('\n✅ Issue 007 Palimpsest sent with code block formatting!\n');
    console.log('📊 SUMMARY');
    console.log('   - 1 opening banner');
    console.log('   - 1 pure text issue (ASCII art in code blocks + 11 sections)');
    console.log('   - 1 theme & closing');
    console.log('\n✨ ASCII art displays in Telegram with default monospace font');

  } catch (err) {
    console.error('❌ Error:', err.message);
    process.exit(1);
  }
}

sendPalimpsestIssue();
