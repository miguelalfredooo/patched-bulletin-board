#!/usr/bin/env node
/**
 * send-momentum-colored-ascii.js
 * Issue 006 Momentum — Colored ASCII (ANSI codes reflect source image colors)
 * Sends 55 colored ASCII files (11 sections × 5 schemes) to Telegram
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const BOT_TOKEN = '8662552111:AAHpfxCGoM6PGbEg4msbSm3bEE6Ucf5o1O0';
const CHAT_ID = '7774590281';
const ASCII_COLOR_DIR = '/Users/blackmachete/projects/bulletin-board/covers/ascii-color';

const SECTION_NAMES = {
  '1-art': 'Art',
  '2-painting': 'Painting',
  '3-illustration': 'Illustration',
  '4-sculpture': 'Sculpture',
  '5-culture': 'Culture',
  '6-photography': 'Photography',
  '7-art-history': 'Art History',
  '8-opinions': 'Opinions',
  '9-design-tools': 'Design & AI Tools',
  '10-product-process': 'Product & Process',
  '11-visual-brand': 'Visual & Brand'
};

const SCHEME_LABELS = {
  'neon': 'Neon (Cyan + Hot Pink)',
  'orange-navy': 'Orange-Navy',
  'green-purple': 'Green-Purple',
  'pink-cyan': 'Pink-Cyan',
  'gold-silver': 'Gold-Silver'
};

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
 * Delay between messages
 */
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Send colored ASCII delivery
 */
async function sendColoredAscii() {
  console.log('🎨 ISSUE 006 MOMENTUM — COLORED ASCII (ANSI) DELIVERY\n');

  const sections = [
    '1-art', '2-painting', '3-illustration', '4-sculpture', '5-culture',
    '6-photography', '7-art-history', '8-opinions', '9-design-tools',
    '10-product-process', '11-visual-brand'
  ];

  const schemes = ['neon', 'orange-navy', 'green-purple', 'pink-cyan', 'gold-silver'];

  let sent = 0;

  try {
    // Opening message
    console.log('📨 Opening banner...');
    await sendMessage(`🎨 ISSUE 006 MOMENTUM — COLORED ASCII VARIANTS

Pure ASCII characters with colors sampled from source images.
Each character's color reflects the pixel beneath it.

Sending 55 variants across 11 sections and 5 color schemes...`);
    sent++;
    await delay(500);

    // Send section by section
    for (const section of sections) {
      const sectionName = SECTION_NAMES[section];
      console.log(`📨 Sending ${sectionName}...`);

      let message = `🎨 ${sectionName}\n\n`;

      for (const scheme of schemes) {
        const filename = `momentum-006-${section}-momentum-${scheme}-ascii-color.txt`;
        const filepath = path.join(ASCII_COLOR_DIR, filename);

        if (fs.existsSync(filepath)) {
          const asciiContent = fs.readFileSync(filepath, 'utf8');
          const schemeLabel = SCHEME_LABELS[scheme];

          // Build message with scheme label and ASCII content
          message += `📍 ${schemeLabel}\n${asciiContent}\n\n`;
        }
      }

      // Send the section message
      await sendMessage(message);
      sent++;
      console.log(`   ✅ ${sectionName} sent (5 schemes)`);
      await delay(800);
    }

    // Closing message
    console.log('📨 Closing message...');
    await sendMessage(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Momentum is not a direction — it's a state of permission.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Format: Colored ASCII with ANSI 24-bit color codes
Charset: BOLD (█▓▒░$@B%8&WM#*...)
Resolution: 42×15 characters (Telegram-safe)
Colors: Sampled from source PNG renders`);
    sent++;

    console.log(`\n✅ Delivery complete!`);
    console.log(`\n📊 SUMMARY`);
    console.log(`   Messages sent: ${sent}`);
    console.log(`   Sections: 11`);
    console.log(`   Schemes per section: 5`);
    console.log(`   Total ASCII files: 55`);
    console.log(`   Format: Colored ASCII with ANSI codes`);

  } catch (err) {
    console.error('❌ Error:', err.message);
    process.exit(1);
  }
}

sendColoredAscii();
