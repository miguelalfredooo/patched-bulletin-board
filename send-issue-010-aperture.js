#!/usr/bin/env node
/**
 * send-issue-010-aperture.js
 * Send Issue 010: APERTURE to Telegram
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
  const messages = [
    `═══════════════════════════════════════════════════════════════
  Design By Bulletin™ — Issue 010
  APERTURE — Opening, Revealing, Closing
═══════════════════════════════════════════════════════════════

🎨 THEME: Aperture
📊 EDITORIAL MIX: Music 75% | Visual 90% | Research 55% | Process 85% | Theme 88% | AI Culture 60%`,

    `SECTION 1 — Sealed`,

    `\`\`\`
╔════════════════════════════════════════════╗
║  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  ║
║  ▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▓  ║
║  ▓░  ╔══════════════════════════════╗░▓  ║
║  ▓░  ║  Closed. Impenetrable.       ║░▓  ║
║  ▓░  ║  No light. No passage.       ║░▓  ║
║  ▓░  ║  Everything contained.       ║░▓  ║
║  ▓░  ║  Waiting to open.            ║░▓  ║
║  ▓░  ╚══════════════════════════════╝░▓  ║
║  ▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▓  ║
║  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  ║
╚════════════════════════════════════════════╝
\`\`\``,

    `◇`,

    `SECTION 2 — First Crack`,

    `\`\`\`
  ◇
  │
  │
\`\`\``,

    `◇`,

    `SECTION 3 — Threshold`,

    `\`\`\`
╔──────────────┬──────────────╗
║  Sealed      │ Opening      ║
║              │              ║
║  ▓▓▓▓▓▓▓▓    │ ░░░░░░░░    ║
║              │              ║
╚──────────────┴──────────────╝
\`\`\``,

    `◇`,

    `SECTION 4 — Iris Opens`,

    `\`\`\`
        ╭─────────────╮
       ╱               ╲
      ╱   ░░░░░░░░░░   ╲
     ╱    ░░░░░░░░░░░░   ╲
    ╱     ░░  opening  ░░   ╲
     ╲    ░░░░░░░░░░░░   ╱
      ╲   ░░░░░░░░░░   ╱
       ╲               ╱
        ╰─────────────╯
\`\`\``,

    `◇`,

    `SECTION 5 — Breath`,

    `\`\`\`
  ◆
\`\`\``,

    `◇`,

    `SECTION 6 — Light Pours In`,

    `\`\`\`
───────────────────────────────────────

    THE INTERIOR BECOMES VISIBLE

───────────────────────────────────────
\`\`\``,

    `◇`,

    `SECTION 7 — Expanding View`,

    `\`\`\`
        ╱╲
       ╱  ╲
      ╱▓▓▓▓▓╲
     ╱▓░░░░░▓╲
    ╱▓░░░░░░░▓╲
   ╱▓░ revealed░▓╲
  ╱▓░░░░░░░░░░░▓╲
 ╱▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓╲
\`\`\``,

    `◇`,

    `SECTION 8 — Pause at Peak`,

    `\`\`\`
      ◆
     ◆ ◆
    ◆   ◆
\`\`\``,

    `◇`,

    `SECTION 9 — Full Aperture`,

    `\`\`\`
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░                                        ░
░  ╔════════════════════════════════╗  ░
░  ║  Everything visible now        ║  ░
░  ║  Nothing hidden. No secrets.   ║  ░
░  ║  The aperture at maximum.      ║  ░
░  ║  Light pours through.          ║  ░
░  ║  All interior revealed.        ║  ░
░  ║                                ║  ░
░  ║  But it cannot stay open.      ║  ░
░  ║  Apertures always close again. ║  ░
░  ╚════════════════════════════════╝  ░
░                                        ░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
\`\`\``,

    `◇`,

    `SECTION 10 — Closing`,

    `\`\`\`
╔──────────────┬──────────────╗
║  Fading      │ Sealing      ║
║              │              ║
║  ░░░░░░░░    │ ▓▓▓▓▓▓▓▓    ║
║  light dims  │ returns      ║
╚──────────────┴──────────────╝
\`\`\``,

    `◇`,

    `SECTION 11 — Sealed Again`,

    `\`\`\`
  ▓
 ▓▓▓
▓▓▓▓▓
\`\`\``,

    `─────────────────────────────────────────────────────────────

An aperture controls what passes through. It opens to reveal,
closes to contain. The cycle is eternal.

In design, apertures are moments of access. A well-composed
aperture lets the viewer see what matters, for as long as it
matters, then closes gently.

This issue demonstrates variable scale and weight counterbalancing:
sealed → opening → threshold → iris → breath → light → expanding →
peak → full open → closing → sealed.

Scale varies throughout. No two consecutive sections repeat.
The composition breathes.

═══════════════════════════════════════════════════════════════
  End Issue 010 — Aperture
═══════════════════════════════════════════════════════════════`,
  ];

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
