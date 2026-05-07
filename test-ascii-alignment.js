#!/usr/bin/env node
/**
 * test-ascii-alignment.js
 * Send a few ASCII samples to verify alignment on Telegram
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
  const tests = [
    {
      name: 'Test 1: Heavy Nested (from ASCII Styles)',
      code: `╔════════════════════════════════════╗
║  ╔════════════════════════════╗  ║
║  ║  ╔════════════════════╗  ║  ║
║  ║  ║  ╔════════════╗  ║  ║  ║
║  ║  ║  ║  ▓▓▓▓▓▓▓  ║  ║  ║  ║
║  ║  ║  ╚════════════╝  ║  ║  ║
║  ║  ╚════════════════════╝  ║  ║
║  ╚════════════════════════════╝  ║
╚════════════════════════════════════╝`
    },
    {
      name: 'Test 2: Diamond Form (from ASCII Styles)',
      code: `       ╱╲
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
       ╲╱`
    },
    {
      name: 'Test 3: Orion Constellation (from CONSTELLATIONS-v2)',
      code: `╔════════════════════════════════════╗
║    ★         ★                    ║
║     ╲       ╱                     ║
║      .─────.                      ║
║       │ ◆ │                       ║
║       │ . │                       ║
║      .─────.                      ║
║     ╱       ╲                     ║
║    ★         ★                    ║
╚════════════════════════════════════╝`
    }
  ];

  console.log(`Testing ${tests.length} ASCII samples for alignment...\n`);

  for (let i = 0; i < tests.length; i++) {
    try {
      const message = `*${tests[i].name}*\n\n\`\`\`\n${tests[i].code}\n\`\`\``;
      console.log(`[${i + 1}/${tests.length}] Sending ${tests[i].name}...`);
      const result = await sendMessage(message);
      if (result.ok) {
        console.log(`✓ Test ${i + 1} sent\n`);
      } else {
        console.error(`✗ Test ${i + 1} failed:`, result.description);
      }
      await delay(500);
    } catch (err) {
      console.error(`✗ Error sending test ${i + 1}:`, err.message);
    }
  }

  console.log('Alignment tests sent. Check Telegram to verify monospace rendering and column alignment.');
}

main().catch(console.error);
