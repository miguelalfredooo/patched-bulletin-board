#!/usr/bin/env node
/**
 * send-issue-007-palimpsest.js
 * Issue 007 — Palimpsest — all ASCII at 38 chars wide, MarkdownV2
 */

const https = require('https');

const BOT_TOKEN = '8662552111:AAHpfxCGoM6PGbEg4msbSm3bEE6Ucf5o1O0';
const CHAT_ID = '7774590281';

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function sendMessage(text, parseMode = null) {
  return new Promise((resolve, reject) => {
    const body = { chat_id: CHAT_ID, text };
    if (parseMode) body.parse_mode = parseMode;
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
        const parsed = JSON.parse(data);
        if (!parsed.ok) console.error('Telegram error:', parsed.description);
        resolve(parsed);
      });
    });
    req.on('error', reject);
    req.write(payload);
    req.end();
  });
}

async function cb(art) {
  return sendMessage('```\n' + art + '\n```', 'MarkdownV2');
}

async function main() {
  console.log('📨 Sending Issue 007 — Palimpsest (38-char width)\n');

  // ── MASTHEAD ──
  await cb(
`██████╗ ██████╗ ██████╗ ™
██╔══██╗██╔══██╗██╔══██╗
██║  ██║██████╔╝██████╔╝
██║  ██║██╔══██╗██╔══██╗
██████╔╝██████╔╝██████╔╝
╚═════╝ ╚═════╝ ╚═════╝

Design By Bulletin™
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Saturday, May 10, 2026
Theme: Palimpsest`
  );
  await delay(600);

  // ── 1. ART — Format A: Canvas on easel ──
  await cb(
`        ╭───────────────────────╮
        │  ▓▓▒▒░░░░░░░░▒▒▓▓▓▓  │
        │  ▓▒░               ░▒▓│
        │  ▓▒░  ┌───────────┐░▒▓│
        │  ▓▒░  │░▒▒▓▓▓▒▒░ │░▒▓│
        │  ▓▒░  │▒░  ▄▄▄  ░▒│░▒▓│
        │  ▓▒░  │▒░  █▄█  ░▒│░▒▓│
        │  ▓▒░  │░▒▒▓▓▓▒▒░ │░▒▓│
        │  ▓▒░  └───────────┘░▒▓│
        │  ▓▓▒▒░░░░░░░░▒▒▓▓▓▓  │
        ╰──────────┬────────────╯
                   │
              ──────┴──────`
  );
  await delay(500);

  // ── 2. PAINTING — Format B: Geometric Frame ──
  await cb(
`╔══════════════════════════════════════╗
║  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  ║
║  ▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒  ║
║  ▒░  ▄▄▄▄  ▄▄▄▄  ▄▄▄▄  ▄▄▄▄  ░▒  ║
║  ▒░  █  █  █  █  █  █  █  █  ░▒  ║
║  ▒░  █▄▄█  █▄▄█  █▄▄█  █▄▄█  ░▒  ║
║  ▒░  ░░░░  ░░░░  ░░░░  ░░░░  ░▒  ║
║  ▒░  ▄▄▄▄  ▄▄▄▄  ▄▄▄▄  ▄▄▄▄  ░▒  ║
║  ▒░  █  █  █  █  █  █  █  █  ░▒  ║
║  ▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒  ║
║  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  ║
╚══════════════════════════════════════╝`
  );
  await delay(500);

  // ── 3. ILLUSTRATION — Format D: Two Column ──
  await cb(
`╭────────────────────╮ ╭─────────────╮
│  ⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿  │ │ ◇━━━━━━━━━◇ │
│  ⠿  ╔════════╗ ⠿  │ │ ▒  ░░░░░  ▒ │
│  ⠿  ║ · · ·  ║ ⠿  │ │ ▒  ░▒▓▒░  ▒ │
│  ⠿  ║ · · ·  ║ ⠿  │ │ ▒  ░▒▓▒░  ▒ │
│  ⠿  ║ · · ·  ║ ⠿  │ │ ▒  ░░░░░  ▒ │
│  ⠿  ╚════════╝ ⠿  │ │ ▒  ░▒▓▒░  ▒ │
│  ✏  ──────────────  │ │ ◇━━━━━━━━━◇ │
╰────────────────────╯ ╰─────────────╯`
  );
  await delay(500);

  // ── 4. SCULPTURE — Format C: Typographic ──
  await cb(
`███████╗ ██████╗ ██████╗ ██╗
██╔════╝██╔═══██╗██╔══██╗██║
█████╗  ██║   ██║██████╔╝██║
██╔══╝  ██║   ██║██╔══██╗██║
██║     ╚██████╔╝██║  ██║██║
╚═╝      ╚═════╝ ╚═╝  ╚═╝╚═╝`
  );
  await delay(500);

  // ── 5. CULTURE — Format E: Full Spread ──
  await cb(
`░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░  ▄▄▄  ▄▄▄  ▄▄▄  ▄▄▄  ▄▄▄  ▄▄▄  ░░
░  █▀█  █▀█  █▀█  █▀█  █▀█  █▀█  ░░
░  █▄█  █▄█  █▄█  █▄█  █▄█  █▄█  ░░
░  ───────────────────────────── ░░
░  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ ░░
░  ▒░░░░░░░░░░░░░░░░░░░░░░░░░░░▒ ░░
░  ▒░  layer upon layer upon   ░▒ ░░
░  ▒░  every surface recalls   ░▒ ░░
░  ▒░░░░░░░░░░░░░░░░░░░░░░░░░░░▒ ░░
░  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ ░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░`
  );
  await delay(500);

  // ── 6. PHOTOGRAPHY — Format E: Braille halftone ──
  await cb(
`⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿
⠿  ░░▒▒▓▓██████████▓▓▒▒░░  ⠿  ░▒▓  ⠿
⠿  ▒░░░░░░░░░░░░░░░░░░░▒  ⠿  ░▒▓  ⠿
⠿  ▒░  ╔═════════════╗ ░▒  ⠿  ░▒  ⠿
⠿  ▒░  ║  ◉          ║ ░▒  ⠿  ░▒  ⠿
⠿  ▒░  ║      ◉      ║ ░▒  ⠿  ░▒  ⠿
⠿  ▒░  ║          ◉  ║ ░▒  ⠿  ░▒  ⠿
⠿  ▒░  ╚═════════════╝ ░▒  ⠿  ░▒  ⠿
⠿  ▒░░░░░░░░░░░░░░░░░░░▒  ⠿  ░▒▓  ⠿
⠿  ░░▒▒▓▓██████████▓▓▒▒░░  ⠿  ░▒▓  ⠿
⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿`
  );
  await delay(500);

  // ── 7. ART HISTORY — Format B: Geometric Frame ──
  await cb(
`┌──────────────────────────────────────┐
│  ╭──╮  ╔══╗  ╭──╮  ┌──┐  ╔══╗  ╭╮  │
│  │  │  ║  ║  │  │  │▒▒│  ║  ║  ││  │
│  ╰──╯  ╚══╝  ╰──╯  └──┘  ╚══╝  ╰╯  │
│  ────────────────────────────────── │
│  ╔══════════════════════════════╗   │
│  ║  ▓▓▒░  p a l i m p s e s t  ░▒▓ ║│
│  ╚══════════════════════════════╝   │
└──────────────────────────────────────┘`
  );
  await delay(500);

  // ── 8. OPINIONS — Format A: Typewriter ──
  await cb(
`┌────────────────────────────────────┐
│ ┌──┐┌──┐┌──┐┌──┐┌──┐┌──┐┌──┐┌──┐ │
│ │Q ││W ││E ││R ││T ││Y ││U ││I │ │
│ └──┘└──┘└──┘└──┘└──┘└──┘└──┘└──┘ │
│ ┌──┐┌──┐┌──┐┌──┐┌──┐┌──┐┌──┐     │
│ │A ││S ││D ││F ││G ││H ││J │     │
│ └──┘└──┘└──┘└──┘└──┘└──┘└──┘     │
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
└─────────────────┬──────────────────┘
         ══════════╧══════════`
  );
  await delay(500);

  // ── 9. DESIGN & AI TOOLS — Format D: Two Column ──
  await cb(
`╭───────────────────╮ ╭──────────────╮
│ ┏━━━━━━━━━━━━━━━┓ │ │  [ agent ]   │
│ ┃ canvas        ┃ │ │      ↕       │
│ ┃  → → → → →   ┃ │ │  [ skill ]   │
│ ┃       ↓       ┃ │ │      ↕       │
│ ┃  ← ← MCP     ┃ │ │  [ write ]   │
│ ┗━━━━━━━━━━━━━━━┛ │ │      ↕       │
│ Figma · May 2026  │ │ Claude Dsgn  │
╰───────────────────╯ ╰──────────────╯`
  );
  await delay(500);

  // ── 10. PRODUCT & PROCESS — Format B: Geometric Frame ──
  await cb(
`╔══════════════════════════════════════╗
║  ┌────────────────────────────────┐  ║
║  │  v1 ──→ v2 ──→ v3 ──→ v4 →   │  ║
║  │   ↑                       ↓   │  ║
║  │  old          constraints      │  ║
║  │   └─────────────────────────┘  │  ║
║  └────────────────────────────────┘  ║
║                                      ║
║  ▒░  every decision leaves a mark ░▒ ║
╚══════════════════════════════════════╝`
  );
  await delay(500);

  // ── 11. VISUAL & BRAND — Format D: Two Column ──
  await cb(
`╭────────────────────╮ ╭─────────────╮
│  ██╗  ██╗ ██████╗  │ │  ▄▄  ▄▄  ▄▄ │
│  ██║  ██║ ██╔══██╗ │ │  ▀▀  ▀▀  ▀▀ │
│  ███████║ ██████╔╝ │ │  ──  ──  ── │
│  ██╔══██║ ██╔══██╗ │ │  ▄▄  ▄▄  ▄▄ │
│  ██║  ██║ ██║  ██║ │ │  ▀▀  ▀▀  ▀▀ │
│  ╚═╝  ╚═╝ ╚═╝  ╚═╝ │ │  mark·sys   │
╰────────────────────╯ ╰─────────────╯`
  );
  await delay(500);

  // ── CLOSING ──
  await sendMessage(
    'Every surface is a palimpsest\\. We write because we know we\'re writing over\\.\n\n⤵ Full edition arrives in 30 minutes\\.',
    'MarkdownV2'
  );

  console.log('\n✅ Done — 13 messages sent at 38-char width');
  process.exit(0);
}

main().catch(err => { console.error(err); process.exit(1); });
