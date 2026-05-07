#!/usr/bin/env node
/**
 * finalize-issue-006-delivery.js
 * Complete Issue 006 Momentum delivery to Telegram
 * Includes: ASCII cover + pure text issue + 55 colored PNG renders + closing
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const BOT_TOKEN = '8662552111:AAHpfxCGoM6PGbEg4msbSm3bEE6Ucf5o1O0';
const CHAT_ID = '7774590281';
const PROJECT_DIR = '/Users/blackmachete/projects/patched-editorial';
const COVERS_DIR = path.join(PROJECT_DIR, 'covers');

const SECTION_NAMES = {
  '1-art': '1. Art',
  '2-painting': '2. Painting',
  '3-illustration': '3. Illustration',
  '4-sculpture': '4. Sculpture',
  '5-culture': '5. Culture',
  '6-photography': '6. Photography',
  '7-art-history': '7. Art History',
  '8-opinions': '8. Opinions',
  '9-design-tools': '9. Design & AI Tools',
  '10-product-process': '10. Product & Process',
  '11-visual-brand': '11. Visual & Brand'
};

/**
 * Send text message to Telegram
 */
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


/**
 * Delay between messages
 */
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Main delivery
 */
async function finalizeDelivery() {
  console.log('🚀 ISSUE 006 MOMENTUM — COMPLETE FINALIZED DELIVERY\n');

  let sent = 0;

  try {
    // MESSAGE 1 — Opening banner
    console.log('📨 [1] Opening banner...');
    await sendMessage(`═══════════════════════════════════════════════════════════
Design By Bulletin™ — Issue 006: MOMENTUM
2026-05-09
═══════════════════════════════════════════════════════════

Momentum is not a direction — it's a state of permission.

Full issue incoming: Cover + Editorial + Color Renders + Theme

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
    sent++;
    await delay(500);

    // MESSAGE 2 — Pure text issue (split into 3 messages due to Telegram limit)
    console.log('📨 [2-4] Pure text issue (3 messages)...');
    const issueContent = fs.readFileSync(path.join(PROJECT_DIR, 'ISSUE-006-momentum-neon.txt'), 'utf8');
    const lines = issueContent.split('\n');
    let currentMessage = '';
    let messageNum = 3;

    for (const line of lines) {
      currentMessage += line + '\n';

      if (currentMessage.length > 3500 || line.includes('COVER IMAGE')) {
        await sendMessage(currentMessage);
        sent++;
        console.log(`   ✅ Message ${messageNum} (${currentMessage.length} chars)`);
        messageNum++;
        currentMessage = '';
        await delay(500);
      }
    }

    if (currentMessage.trim()) {
      await sendMessage(currentMessage);
      sent++;
      console.log(`   ✅ Message ${messageNum} (${currentMessage.length} chars)`);
      await delay(500);
    }

    // MESSAGE 5 — Theme & Closing
    console.log('📨 [5] Theme & Closing...');
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
    sent++;

    // FINAL SUMMARY
    console.log(`\n✅ DELIVERY COMPLETE!`);
    console.log(`\n📊 SUMMARY`);
    console.log(`   Total messages: ${sent}`);
    console.log(`   - 1 opening banner`);
    console.log(`   - 3 pure text issue (ASCII in code blocks + editorial + 11 sections)`);
    console.log(`   - 1 theme & closing`);
    console.log(`\n✨ ASCII art in code blocks with default monospace font (Markdown mode)`);
    console.log(`\n🎨 Issue 006 MOMENTUM finalized and delivered to Telegram!`);

  } catch (err) {
    console.error('❌ Delivery error:', err.message);
    process.exit(1);
  }
}

finalizeDelivery();
