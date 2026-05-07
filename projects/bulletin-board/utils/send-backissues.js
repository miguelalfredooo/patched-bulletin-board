// send-backissues.js — render + send back issues 002–005 as PNGs

const { renderAsciiImage } = require('./ascii-render');
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const TOKEN = '8662552111:AAHpfxCGoM6PGbEg4msbSm3bEE6Ucf5o1O0';
const CHAT_ID = '7774590281';
const DIR = '/tmp/dbb-backissues';
if (!fs.existsSync(DIR)) fs.mkdirSync(DIR);

const issues = [
  {
    number: '005',
    theme: 'SIGNAL',
    renderTheme: 'default',
    pieces: [
      {
        label: 'theme',
        art: `
  ███████╗██╗ ██████╗ ███╗  ██╗ █████╗ ██╗
  ██╔════╝██║██╔════╝ ████╗ ██║██╔══██╗██║
  ███████╗██║██║  ███╗██╔██╗██║███████║██║
  ╚════██║██║██║   ██║██║╚████║██╔══██║██║
  ███████║██║╚██████╔╝██║ ╚███║██║  ██║███████╗
  ╚══════╝╚═╝ ╚═════╝ ╚═╝  ╚══╝╚═╝  ╚═╝╚══════╝`,
        caption: 'Issue 005 — SIGNAL',
      },
      {
        label: 'art',
        art: `
  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·
  ·  ┌─────────────────────┐  ·
  ·  │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │  ·
  ·  │ ▓░░░░░░░░░░░░░░░▓ │  ·
  ·  │ ▓░  ─────────  ░▓ │  ·
  ·  │ ▓░  │ ● ● ● │  ░▓ │  ·
  ·  │ ▓░  ─────────  ░▓ │  ·
  ·  │ ▓░░░░░░░░░░░░░░░▓ │  ·
  ·  │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │  ·
  ·  └─────────────────────┘  ·`,
        caption: 'ART — Signal',
      },
      {
        label: 'photography',
        renderTheme: 'midnight',
        art: `
  ⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿
  ⠿⠿⠿⠿⠿⠿⠿⠶⠶⠶⠶⠶⠿⠿⠿⠿⠿⠿⠿⠿⠿
  ⠿⠿⠿⠿⠿⠶⠶⠤⠤⠤⠤⠤⠶⠶⠿⠿⠿⠿⠿⠿⠿
  ⠿⠿⠿⠿⠶⠤⠀⠀⠀⠀⠀⠀⠀⠤⠶⠿⠿⠿⠿⠿⠿
  ⠿⠿⠿⠶⠤⠀⠀⠀⣠⣴⣦⡀⠀⠀⠤⠶⠿⠿⠿⠿⠿
  ⠿⠿⠿⠶⠤⠀⠀⣾⣿⣿⣿⣷⠀⠀⠤⠶⠿⠿⠿⠿⠿
  ⠿⠿⠿⠿⠶⠤⠀⠈⠻⠿⠟⠁⠀⠤⠶⠿⠿⠿⠿⠿⠿
  ⠿⠿⠿⠿⠿⠶⠶⠤⠤⠤⠤⠤⠶⠶⠿⠿⠿⠿⠿⠿⠿
  ⠿⠿⠿⠿⠿⠿⠿⠶⠶⠶⠶⠶⠿⠿⠿⠿⠿⠿⠿⠿⠿`,
        caption: 'PHOTOGRAPHY — Signal',
      },
      {
        label: 'closing',
        monochromatic: true,
        art: `
  ·  ·  ·  ·  ·  ·  ·  ·  ·
  In a world of noise,
  clarity is rebellion.
  ·  ·  ·  ·  ·  ·  ·  ·  ·`,
        caption: 'Design By Bulletin™ — Issue 005',
      },
    ],
  },
  {
    number: '004',
    theme: 'TRACES',
    renderTheme: 'midnight',
    pieces: [
      {
        label: 'theme',
        art: `
  ████████╗██████╗  █████╗  ██████╗███████╗███████╗
  ╚══██╔══╝██╔══██╗██╔══██╗██╔════╝██╔════╝██╔════╝
     ██║   ██████╔╝███████║██║     █████╗  ███████╗
     ██║   ██╔══██╗██╔══██║██║     ██╔══╝  ╚════██║
     ██║   ██║  ██║██║  ██║╚██████╗███████╗███████║
     ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝╚══════╝╚══════╝`,
        caption: 'Issue 004 — TRACES',
      },
      {
        label: 'art-history',
        art: `
  ╔══════════════════════════╗
  ║  FINGERPRINT             ║
  ║  ──────────────────────  ║
  ║   ·  ·  ╭───╮  ·  ·     ║
  ║   · ╭───╯░░░╰───╮ ·     ║
  ║   ╭─╯ ░▒▓███▓▒░ ╰─╮     ║
  ║   │ ░▒▓█████████▓░ │     ║
  ║   ╰─╮ ░▒▓███▓▒░ ╭─╯     ║
  ║   · ╰───╮░░░╭───╯ ·     ║
  ║   ·  ·  ╰───╯  ·  ·     ║
  ╚══════════════════════════╝`,
        caption: 'ART HISTORY — Traces',
      },
      {
        label: 'music',
        renderTheme: 'midnight',
        art: `
  ⠀⠀⠀⣀⣀⣀⣀⣀⣀⣀⣀⣀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⣿⣿⡿⠿⠿⠿⠿⠿⢿⣿⣿⠀⠀⠀⠀⠀⠀
  ⠀⠀⣿⡏⠀⠀⠀⠀⠀⠀⠀⢹⣿⠀⠀⠀⠀⠀⠀
  ⠀⠀⣿⡇⠀⠀·  ·  ·⠀⠀⢸⣿⠀⠀⠀⠀⠀⠀
  ⠀⠀⣿⡇⠀⠀⠀⠀⠀⠀⠀⢸⣿⠀⠀⠀⠀⠀⠀
  ⠀⠀⣿⣧⣤⣤⣤⣤⣤⣤⣤⣼⣿⠀⠀⠀⠀⠀⠀
  ⠀⠀⠙⠛⠛⠛⠛⠛⠛⠛⠛⠛⠋⠀⠀⠀⠀⠀⠀`,
        caption: 'MUSIC — Traces',
      },
      {
        label: 'closing',
        monochromatic: true,
        art: `
  ·  ·  ·  ·  ·  ·  ·  ·  ·
  We are always leaving traces.
  The question is whether
  anyone reads them.
  ·  ·  ·  ·  ·  ·  ·  ·  ·`,
        caption: 'Design By Bulletin™ — Issue 004',
      },
    ],
  },
  {
    number: '003',
    theme: 'HANDMADE',
    renderTheme: 'default',
    pieces: [
      {
        label: 'theme',
        art: `
  ██╗  ██╗ █████╗ ███╗  ██╗██████╗ ███╗   ███╗ █████╗ ██████╗ ███████╗
  ██║  ██║██╔══██╗████╗ ██║██╔══██╗████╗ ████║██╔══██╗██╔══██╗██╔════╝
  ███████║███████║██╔██╗██║██║  ██║██╔████╔██║███████║██║  ██║█████╗
  ██╔══██║██╔══██║██║╚████║██║  ██║██║╚██╔╝██║██╔══██║██║  ██║██╔══╝
  ██║  ██║██║  ██║██║ ╚███║██████╔╝██║ ╚═╝ ██║██║  ██║██████╔╝███████╗
  ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚══╝╚═════╝ ╚═╝     ╚═╝╚═╝  ╚═╝╚═════╝ ╚══════╝`,
        caption: 'Issue 003 — HANDMADE',
      },
      {
        label: 'culture',
        art: `
  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·
  · ╭────────────────────────╮ ·
  · │  ░░░░░░░░░░░░░░░░░░░  │ ·
  · │  ░  ▒▒▒▒▒▒▒▒▒▒▒▒  ░  │ ·
  · │  ░  ▒  ▓▓▓▓▓▓▓▓  ▒  ░  │ ·
  · │  ░  ▒  ▓ [hand] ▓  ▒  ░  │ ·
  · │  ░  ▒  ▓▓▓▓▓▓▓▓  ▒  ░  │ ·
  · │  ░  ▒▒▒▒▒▒▒▒▒▒▒▒  ░  │ ·
  · │  ░░░░░░░░░░░░░░░░░░░  │ ·
  · ╰────────────────────────╯ ·`,
        caption: 'CULTURE — Lo-fi Rebellion',
      },
      {
        label: 'closing',
        monochromatic: true,
        art: `
  ·  ·  ·  ·  ·  ·  ·  ·  ·
  The machine can't feel
  the thumb leave a ridge
  in the clay.
  ·  ·  ·  ·  ·  ·  ·  ·  ·`,
        caption: 'Design By Bulletin™ — Issue 003',
      },
    ],
  },
  {
    number: '002',
    theme: 'THE MARK',
    renderTheme: 'default',
    pieces: [
      {
        label: 'theme',
        art: `
  ████████╗██╗  ██╗███████╗    ███╗   ███╗ █████╗ ██████╗ ██╗  ██╗
  ╚══██╔══╝██║  ██║██╔════╝    ████╗ ████║██╔══██╗██╔══██╗██║ ██╔╝
     ██║   ███████║█████╗      ██╔████╔██║███████║██████╔╝█████╔╝
     ██║   ██╔══██║██╔══╝      ██║╚██╔╝██║██╔══██║██╔══██╗██╔═██╗
     ██║   ██║  ██║███████╗    ██║ ╚═╝ ██║██║  ██║██║  ██║██║  ██╗
     ╚═╝   ╚═╝  ╚═╝╚══════╝   ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝`,
        caption: 'Issue 002 — THE MARK',
      },
      {
        label: 'art',
        art: `
  ╔══════════════════════════╗
  ║   ░░░░░░░░░░░░░░░░░░░   ║
  ║   ░  ┌──────────────┐░  ║
  ║   ░  │▓▓▓▓▓▓▓▓▓▓▓▓▓│░  ║
  ║   ░  │▓  ·  ●  ·  ▓│░  ║
  ║   ░  │▓▓▓▓▓▓▓▓▓▓▓▓▓│░  ║
  ║   ░  └──────────────┘░  ║
  ║   ░░░░░░░░░░░░░░░░░░░   ║
  ╚══════════════════════════╝`,
        caption: 'ART — The White Glove',
      },
      {
        label: 'closing',
        monochromatic: true,
        art: `
  ·  ·  ·  ·  ·  ·  ·  ·  ·
  The archive is always
  the argument.
  ·  ·  ·  ·  ·  ·  ·  ·  ·`,
        caption: 'Design By Bulletin™ — Issue 002',
      },
    ],
  },
];

async function renderAndSend() {
  for (const issue of issues) {
    console.error(`\n── Issue ${issue.number}: ${issue.theme} ──`);
    for (const piece of issue.pieces) {
      const t = piece.renderTheme || issue.renderTheme || 'default';
      const buf = await renderAsciiImage(piece.art, {
        theme: t,
        scale: 2,
        fontSize: 14,
        monochromatic: piece.monochromatic || false,
      });
      const filename = `issue${issue.number}-${piece.label}.png`;
      const filepath = path.join(DIR, filename);
      fs.writeFileSync(filepath, buf);
      console.error(`  rendered: ${filename} (${buf.length}b)`);

      // Send via curl
      const cmd = `curl -s -X POST "https://api.telegram.org/bot${TOKEN}/sendPhoto" \
        -F "chat_id=${CHAT_ID}" \
        -F "caption=${piece.caption}" \
        -F "photo=@${filepath}" > /dev/null`;
      execSync(cmd);
      console.error(`  sent: ${piece.caption}`);
      // Flood limit pause
      await new Promise(r => setTimeout(r, 900));
    }
  }
  console.error('\nAll done.');
}

renderAndSend().catch(e => { console.error(e.stack); process.exit(1); });
