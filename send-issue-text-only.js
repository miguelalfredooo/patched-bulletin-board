#!/usr/bin/env node
/**
 * send-issue-text-only.js
 * Send pure text issue content to Telegram
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

async function sendTextIssue() {
  try {
    console.log('📨 Sending Issue 006 Momentum text content...\n');

    // Message 1 — Opening
    console.log('[1] Opening banner...');
    await sendMessage(`═══════════════════════════════════════════════════════════
Design By Bulletin™ — Issue 006: MOMENTUM
2026-05-09
═══════════════════════════════════════════════════════════

Momentum is not a direction — it's a state of permission.

Full issue: Cover + Editorial + Theme`);
    await delay(800);

    // Message 2 — Pure text issue
    console.log('[2] Pure text issue...');
    const issueContent = fs.readFileSync(`${PROJECT_DIR}/ISSUE-006-momentum-neon.txt`, 'utf8');
    await sendMessage(issueContent);
    await delay(800);

    // Message 3 — Theme
    console.log('[3] Theme & closing...');
    await sendMessage(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

MOMENTUM — Issue 006

Theme: Momentum

Editorial Mix:
  Music: 75%
  Visual: 85%
  Research: 60%
  Process: 50%
  Theme: 70%
  AI Culture: 65%

Sonic Reference:
  High-BPM electronic, industrial percussion, synth surge
  140–160 BPM

Cultural Thread:
  Velocity as cultural acceleration.
  Tools as engines. Speed obsession resurfaces.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
    await delay(500);

    console.log('\n✅ Text content sent!\n');
    console.log('📊 SUMMARY');
    console.log('   - 1 opening banner');
    console.log('   - 1 pure text issue (11 sections + editorial)');
    console.log('   - 1 theme & closing');

  } catch (err) {
    console.error('❌ Error:', err.message);
    process.exit(1);
  }
}

sendTextIssue();
