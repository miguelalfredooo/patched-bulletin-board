#!/usr/bin/env node
/**
 * send-momentum-full-delivery.js
 * Sends Issue 006 Momentum — All 4 versions to Telegram
 * Uses existing telegram-png-sender utility
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const BOT_TOKEN = '8662552111:AAHpfxCGoM6PGbEg4msbSm3bEE6Ucf5o1O0';
const CHAT_ID = '7774590281';
const COVERS_DIR = '/Users/blackmachete/projects/bulletin-board/covers';
const PROJECT_DIR = '/Users/blackmachete/projects/bulletin-board';

/**
 * Send text message to Telegram
 */
async function sendMessage(text) {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify({
      chat_id: CHAT_ID,
      text: text,
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
 * Send photo to Telegram
 */
async function sendPhoto(filePath, caption = '') {
  return new Promise((resolve, reject) => {
    const fileBuffer = fs.readFileSync(filePath);
    const boundary = 'Boundary' + Date.now();

    let body = '';
    body += `--${boundary}\r\n`;
    body += 'Content-Disposition: form-data; name="chat_id"\r\n\r\n';
    body += `${CHAT_ID}\r\n`;

    if (caption) {
      body += `--${boundary}\r\n`;
      body += 'Content-Disposition: form-data; name="caption"\r\n\r\n';
      body += `${caption}\r\n`;
    }

    body += `--${boundary}\r\n`;
    body += 'Content-Disposition: form-data; name="photo"; filename="image.png"\r\n';
    body += 'Content-Type: image/png\r\n\r\n';

    const bodyStart = Buffer.from(body);
    const bodyEnd = Buffer.from(`\r\n--${boundary}--\r\n`);
    const payload = Buffer.concat([bodyStart, fileBuffer, bodyEnd]);

    const options = {
      hostname: 'api.telegram.org',
      port: 443,
      path: `/bot${BOT_TOKEN}/sendPhoto`,
      method: 'POST',
      headers: {
        'Content-Type': `multipart/form-data; boundary=${boundary}`,
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
 * Send document/text file
 */
async function sendDocument(filePath, caption = '') {
  return new Promise((resolve, reject) => {
    const fileBuffer = fs.readFileSync(filePath);
    const boundary = 'Boundary' + Date.now();
    const filename = path.basename(filePath);

    let body = '';
    body += `--${boundary}\r\n`;
    body += 'Content-Disposition: form-data; name="chat_id"\r\n\r\n';
    body += `${CHAT_ID}\r\n`;

    if (caption) {
      body += `--${boundary}\r\n`;
      body += 'Content-Disposition: form-data; name="caption"\r\n\r\n';
      body += `${caption}\r\n`;
    }

    body += `--${boundary}\r\n`;
    body += `Content-Disposition: form-data; name="document"; filename="${filename}"\r\n`;
    body += 'Content-Type: text/plain\r\n\r\n';

    const bodyStart = Buffer.from(body);
    const bodyEnd = Buffer.from(`\r\n--${boundary}--\r\n`);
    const payload = Buffer.concat([bodyStart, fileBuffer, bodyEnd]);

    const options = {
      hostname: 'api.telegram.org',
      port: 443,
      path: `/bot${BOT_TOKEN}/sendDocument`,
      method: 'POST',
      headers: {
        'Content-Type': `multipart/form-data; boundary=${boundary}`,
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
 * Main delivery sequence
 */
async function executeFullDelivery() {
  console.log('🚀 ISSUE 006 MOMENTUM — FULL DELIVERY TO TELEGRAM\n');

  let sent = 0;
  let failed = 0;

  try {
    // MESSAGE 1 — Opening banner
    console.log('📨 [1/32] Opening banner...');
    await sendMessage(`═══════════════════════════════════════════════════════════
Design By Bulletin™ — Issue 006: MOMENTUM
2026-05-09
═══════════════════════════════════════════════════════════

⚡ Four complete visual versions incoming.
🎨 V1: Pure Text ASCII
🎨 V2: Color PNG Renders (5 schemes, 55 total)
🎨 V3: ASCII Deconstructed
🎨 V4: Cover as ASCII

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
    sent++;
    await delay(500);

    // VERSION 1 — Pure text (Neon scheme)
    console.log('📨 [2/32] V1 Pure Text (Neon)...');
    const issueNeon = fs.readFileSync(`${PROJECT_DIR}/ISSUE-006-momentum-neon.txt`, 'utf8');
    await sendMessage(issueNeon);
    sent++;
    await delay(500);

    // VERSION 2 — Color PNGs (by section, all schemes)
    console.log('📨 [3-13/32] V2 Color PNGs (55 renders)...');
    const sections = [
      '1-art', '2-painting', '3-illustration', '4-sculpture', '5-culture',
      '6-photography', '7-art-history', '8-opinions', '9-design-tools',
      '10-product-process', '11-visual-brand'
    ];

    const schemes = ['neon', 'orange-navy', 'green-purple', 'pink-cyan', 'gold-silver'];

    let msgNum = 3;
    for (const section of sections) {
      console.log(`  📨 [${msgNum}/32] Section: ${section}...`);

      for (const scheme of schemes) {
        const filename = `momentum-006-${section}-momentum-${scheme}.png`;
        const filepath = path.join(COVERS_DIR, filename);

        if (fs.existsSync(filepath)) {
          const sectionName = section.split('-')[1].toUpperCase();
          const schemeLabel = scheme.charAt(0).toUpperCase() + scheme.slice(1);

          await sendPhoto(filepath, `🎨 ${sectionName} — ${schemeLabel}`);
          sent++;
          await delay(300);
        }
      }
      msgNum++;
    }

    // VERSION 3 — ASCII Deconstructed (skip for now — pure text only)
    console.log('📨 [14-24/32] V3 ASCII Deconstructed (skipped)...');
    // User preference: pure text ASCII only, no colored variants

    // VERSION 4 — Placeholder (user generates via converter)
    console.log('📨 [25/32] V4 Cover as ASCII (instructions)...');
    await sendMessage(`🎨 Cover as ASCII

To generate the cover as ASCII:

1. Open converter: /covers/v4-ascii-cover/converter.html
2. Upload the p5.js-processed screenshot
3. Select resolution: LOW (42×15)
4. Select charset: BOLD
5. Click Convert → Download

Then send the generated .txt file for V4 delivery.`);
    sent++;
    await delay(500);

    // MESSAGE 26 — Closing & Theme
    console.log('📨 [26/32] Closing message...');
    await sendMessage(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

"Momentum is not a direction — it's a state of permission."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Theme: Momentum

Editorial Mix: Music 75%, Visual 85%, Research 60%,
              Process 50%, Theme 70%, AI Culture 65%

Sonic Reference: High-BPM electronic, industrial percussion,
                synth surge (140–160 BPM)

Cultural Thread: Velocity as cultural acceleration.
                Tools as engines. Speed obsession resurfaces.`);
    sent++;
    await delay(500);

    // Final summary
    console.log('✅ Delivery complete!');
    console.log(`\n📊 SUMMARY`);
    console.log(`   Sent: ${sent} messages`);
    console.log(`   Failed: ${failed}`);
    console.log(`\n🎨 Issue 006 MOMENTUM delivered to Telegram!`);

  } catch (err) {
    console.error('❌ Delivery error:', err.message);
    process.exit(1);
  }
}

// Run delivery
executeFullDelivery();
