#!/usr/bin/env node
/**
 * send-issue-005-signal.js
 * Send Issue 005 Signal to Telegram with code block formatting
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

async function sendSignalIssue() {
  try {
    console.log('📨 Sending Issue 005 Signal with code block verification...\n');

    // Message 1 — Opening
    console.log('[1] Opening banner...');
    await sendMessage(`═══════════════════════════════════════════════════════════
Design By Bulletin™ — Issue 005: SIGNAL
2026-05-08
═══════════════════════════════════════════════════════════

In a world of noise, clarity is rebellion.

Full issue: Visual preview + Editorial + Theme`);
    await delay(800);

    // Message 2 — Pure text issue with code blocks
    console.log('[2] Pure text issue with ASCII art in code blocks...');
    const issueContent = fs.readFileSync(`${PROJECT_DIR}/ISSUE-005-signal.txt`, 'utf8');
    await sendMessage(issueContent);
    await delay(800);

    // Message 3 — Theme
    console.log('[3] Theme & closing...');
    await sendMessage(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SIGNAL — Issue 005

Theme: Signal

Editorial Mix:
  Music: 65%
  Visual: 90%
  Research: 55%
  Process: 70%
  Theme: 75%
  AI Culture: 65%

Sonic Reference:
  Minimal electronic, industrial production
  Sharp attacks, 110–140 BPM, percussive

Cultural Thread:
  Visual authority as declaration.
  Typography + color + geometry.
  Design systems as enablers.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
    await delay(500);

    console.log('\n✅ Issue 005 Signal sent with code block formatting!\n');
    console.log('📊 SUMMARY');
    console.log('   - 1 opening banner');
    console.log('   - 1 pure text issue (ASCII art in code blocks + 11 sections)');
    console.log('   - 1 theme & closing');
    console.log('\n✨ ASCII art should display in Telegram with default monospace font');

  } catch (err) {
    console.error('❌ Error:', err.message);
    process.exit(1);
  }
}

sendSignalIssue();
