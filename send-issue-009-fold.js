#!/usr/bin/env node
/**
 * send-issue-009-fold.js
 * Send Issue 009: FOLD to Telegram
 * Follows gallery/catalog pattern with breathing room
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
    // HEADER
    `═══════════════════════════════════════════════════════════════
  Design By Bulletin™ — Issue 009
  FOLD — Compression, Layers, Unfolding
═══════════════════════════════════════════════════════════════

🎨 THEME: Fold
📊 EDITORIAL MIX: Music 60% | Visual 85% | Research 70% | Process 80% | Theme 90% | AI Culture 50%`,

    // SECTION 1 — HEAVY OPENING
    `SECTION 1 — Compressed State`,

    `\`\`\`
╔════════════════════════════════════════════╗
║  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  ║
║  ▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▓  ║
║  ▓░  ╔══════════════════════════════╗░▓  ║
║  ▓░  ║  Everything compressed      ║░▓  ║
║  ▓░  ║  into single forms           ║░▓  ║
║  ▓░  ║  Layers upon layers          ║░▓  ║
║  ▓░  ║  Hidden within folds         ║░▓  ║
║  ▓░  ╚══════════════════════════════╝░▓  ║
║  ▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▓  ║
║  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  ║
╚════════════════════════════════════════════╝
\`\`\``,

    // BREATHING ROOM
    `◆`,

    // SECTION 2 — LIGHT
    `SECTION 2 — First Opening`,

    `\`\`\`
  ◆
  │
  ▓
 ╱ ╲
\`\`\``,

    // BREATHING ROOM
    `◆`,

    // SECTION 3 — MEDIUM
    `SECTION 3 — Unfolding Pattern`,

    `\`\`\`
╔──────────────┬──────────────╗
║  Layer 1     │ Layer 2      ║
║  ▓▓▓▓▓▓▓▓    │ ░░░░░░░░    ║
║              │              ║
║  Fold along  │ Mirror       ║
║  the crease  │ and reflect  ║
╚──────────────┴──────────────╝
\`\`\``,

    // BREATHING ROOM
    `◆`,

    // SECTION 4 — HEAVY
    `SECTION 4 — Nested Chambers`,

    `\`\`\`
╔════════════════════════════════════╗
║  ┌──────────────────────────────┐  ║
║  │  ┌────────────────────────┐  │  ║
║  │  │  ┌──────────────────┐  │  │  ║
║  │  │  │  ┌────────────┐  │  │  │  ║
║  │  │  │  │  ◆  Core  │  │  │  │  ║
║  │  │  │  └────────────┘  │  │  │  ║
║  │  │  └──────────────────┘  │  │  ║
║  │  └────────────────────────┘  │  ║
║  └──────────────────────────────┘  ║
╚════════════════════════════════════╝
\`\`\``,

    // BREATHING ROOM
    `◆`,

    // SECTION 5 — MINIMAL
    `SECTION 5 — Breath`,

    `\`\`\`
    ◆
\`\`\``,

    // BREATHING ROOM
    `◆`,

    // SECTION 6 — TYPOGRAPHY
    `SECTION 6 — Crease Line`,

    `\`\`\`
─────────────────────────────────────

           WHERE FOLD HAPPENS

─────────────────────────────────────
\`\`\``,

    // BREATHING ROOM
    `◆`,

    // SECTION 7 — HEAVY
    `SECTION 7 — Radiating Unfold`,

    `\`\`\`
        ╱╲
       ╱  ╲
      ╱    ╲
     ╱      ╲
    ╱  ▓▓▓▓  ╲
   ╱  ▓░░░▓  ╲
  ╱  ▓░▓▓░▓  ╲
 ╱  ▓░░░░░▓  ╲
╱   ▓▓▓▓▓▓▓  ╲
\`\`\``,

    // BREATHING ROOM
    `◆`,

    // SECTION 8 — SPARSE
    `SECTION 8 — Moment of Separation`,

    `\`\`\`
  ░ ░ ░
   ░ ░
    ░
\`\`\``,

    // BREATHING ROOM
    `◆`,

    // SECTION 9 — CLIMAX
    `SECTION 9 — Complete Unfolding`,

    `\`\`\`
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▓
▓░  ┌────────────────────────────────┐  ░▓
▓░  │  Everything laid bare          │  ░▓
▓░  │  No more compression           │  ░▓
▓░  │  All layers revealed           │  ░▓
▓░  │  Unfolded completely          │  ░▓
▓░  │                                │  ░▓
▓░  │  But the pattern remains       │  ░▓
▓░  │  Waiting to be folded again    │  ░▓
▓░  └────────────────────────────────┘  ░▓
▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▓
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
\`\`\``,

    // BREATHING ROOM
    `◆`,

    // SECTION 10 — MEDIUM
    `SECTION 10 — Refold`,

    `\`\`\`
╔──────────────┬──────────────╗
║  Outward     │  Inward      ║
║              │              ║
║  ░░░░░░░░░░  │  ▓▓▓▓▓▓▓▓▓▓  ║
║  exposed     │  returned    ║
║              │              ║
╚──────────────┴──────────────╝
\`\`\``,

    // BREATHING ROOM
    `◆`,

    // SECTION 11 — LIGHT CLOSE
    `SECTION 11 — Folded Again`,

    `\`\`\`
  ◆
 ▓▓▓
▓▓▓▓▓
\`\`\``,

    // CLOSING
    `─────────────────────────────────────────────────────────────

A fold is not a break. It is compression and revelation in sequence.
When you fold paper, nothing is destroyed—it is hidden temporarily,
waiting to be revealed. The pattern remains intact beneath the surface.

In design, in code, in thought: compression reveals structure.
What matters is what cannot be removed, what survives the fold.

═══════════════════════════════════════════════════════════════
  End Issue 009 — Fold
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
