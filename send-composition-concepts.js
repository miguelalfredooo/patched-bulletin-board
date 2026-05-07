#!/usr/bin/env node
/**
 * send-composition-concepts.js
 * Send three core composition concepts to Telegram
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
    // INTRO
    `═══════════════════════════════════════════════════════════════
THREE CORE COMPOSITION CONCEPTS
═══════════════════════════════════════════════════════════════

From ASCII-COMPOSITION-GUIDE.md & SECTION-IDENTIFICATION-TEMPLATE.md`,

    // CONCEPT 1: NEGATIVE SPACE
    `CONCEPT 1 — NEGATIVE SPACE AS DESIGN

"In ASCII art, emptiness is a tool. Use it to make the full
sections feel heavier, to guide the eye, to give the reader
permission to pause."

EXAMPLE: Intentional Void (Powerful)`,

    `\`\`\`
        │
        │
    ◊   │   ◊
        │
        │
\`\`\``,

    `VS. Crowded Space (Weak)`,

    `\`\`\`
╭───────────────────────────────╮
│ ◊◊◊◊◊◊◊ ◊◊◊◊◊◊◊ ◊◊◊◊◊◊◊ ◊◊◊ │
│ ◊ stuff stuff stuff stuff ◊   │
╰───────────────────────────────╯
\`\`\``,

    `The empty version carries MORE weight because the eye has
permission to rest. Emptiness creates emphasis.`,

    // BREATHING ROOM
    `◇`,

    // CONCEPT 2: WEIGHT COUNTERBALANCING
    `CONCEPT 2 — WEIGHT COUNTERBALANCING

"Heavy sections (dense ASCII, intricate borders) need breathing
room. Light sections (sparse elements, negative space) can anchor
the page and reset the reader's attention."

GOOD RHYTHM: Heavy → Light → Medium → Light → Very Heavy`,

    `\`\`\`
╔════════════════════════════════════╗  ← HEAVY (dense)
║  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  ║
║  ▓░ Complex nested form ░▓  ║
║  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  ║
╚════════════════════════════════════╝

        ◆                          ← LIGHT (sparse)
        │
        ▓
       ╱ ╲

╔──────────────┬──────────────╗    ← MEDIUM (balanced)
║  Layer 1     │ Layer 2      ║
║  ▓▓▓▓▓▓▓▓    │ ░░░░░░░░    ║
╚──────────────┴──────────────╝

    ░ ░ ░                      ← LIGHT (reset)
     ░ ░
      ░

▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  ← VERY HEAVY (climax)
▓░░░░░░░░░░░░░░░░░░░░░░░░░░▓
▓░  Full expansion, maximum  ░▓
▓░  visual weight. After     ░▓
▓░  light sections, impact.  ░▓
▓░░░░░░░░░░░░░░░░░░░░░░░░░░▓
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
\`\`\``,

    `Pattern: Never stack two heavy pieces. Always reset with light
sections. This creates natural pause points for the eye.`,

    // BREATHING ROOM
    `◇`,

    // CONCEPT 3: GALLERY PATTERN
    `CONCEPT 3 — GALLERY/CATALOG PATTERN (Three-Part Module)

"Professional ASCII collections use a repeating three-part
modular structure. This teaches the reader the pattern and
creates natural pause points."

STRUCTURE: Header → Art (Variable Scale) → Breathing Room`,

    `\`\`\`
═══════════════════════════════════════════════════════════════
  SECTION [#] — [Theme]
═══════════════════════════════════════════════════════════════

[ASCII ART BLOCK]
[Variable scale: 3-50 lines, no two consecutive same size]

[Breathing room — empty space before next section]
\`\`\``,

    `WHY THIS WORKS:

✓ Modular repetition teaches reader the pattern
✓ Variable scale (3 lines → 40 lines → 8 lines) prevents fatigue
✓ Breathing room creates natural pause points
✓ Asymmetric spacing feels organic (not rigid grid)
✓ Weight counterbalancing maintains interest

This is the GALLERY FEELING (composed, intentional) not the
GRID FEELING (formulaic, predictable).`,

    // CLOSING
    `═══════════════════════════════════════════════════════════════

These three concepts work together:

1. NEGATIVE SPACE makes individual sections more powerful
2. WEIGHT COUNTERBALANCING creates rhythm across all sections
3. GALLERY PATTERN provides structure + breathing room

Applied to 11-section issues, they create a composed publication
that feels intentional, not crammed.`,
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
