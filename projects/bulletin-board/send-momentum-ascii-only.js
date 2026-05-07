#!/usr/bin/env node
/**
 * send-momentum-ascii-only.js
 * Issue 006 Momentum — Pure ASCII text to Telegram (no files, no colors)
 */

const fs = require('fs');
const https = require('https');

const BOT_TOKEN = '8662552111:AAHpfxCGoM6PGbEg4msbSm3bEE6Ucf5o1O0';
const CHAT_ID = '7774590281';
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
 * Delay between messages
 */
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Send ASCII-only delivery
 */
async function sendAsciiOnly() {
  console.log('🚀 ISSUE 006 MOMENTUM — PURE ASCII TEXT DELIVERY\n');

  try {
    // Read the pure ASCII issue (with editorial content)
    const issuePath = `${PROJECT_DIR}/ISSUE-006-momentum-neon.txt`;
    const issueContent = fs.readFileSync(issuePath, 'utf8');

    console.log('📨 Sending pure ASCII to Telegram...');

    // Send as single message (or split if too long)
    const lines = issueContent.split('\n');
    let currentMessage = '';
    let messageCount = 0;

    for (const line of lines) {
      currentMessage += line + '\n';

      // Telegram message limit is ~4096 characters
      if (currentMessage.length > 3500 || line.includes('COVER IMAGE')) {
        await sendMessage(currentMessage);
        messageCount++;
        console.log(`   ✅ Message ${messageCount} sent`);
        currentMessage = '';
        await delay(500);
      }
    }

    // Send any remaining content
    if (currentMessage.trim()) {
      await sendMessage(currentMessage);
      messageCount++;
      console.log(`   ✅ Message ${messageCount} sent`);
    }

    console.log(`\n✅ Delivery complete!`);
    console.log(`\n📊 SUMMARY`);
    console.log(`   Messages sent: ${messageCount}`);
    console.log(`   Format: Pure ASCII text (no files, no colors)`);
    console.log(`   Content: 11 sections with editorial + closing`);

  } catch (err) {
    console.error('❌ Error:', err.message);
    process.exit(1);
  }
}

sendAsciiOnly();
