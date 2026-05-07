#!/usr/bin/env node
/**
 * format-momentum-telegram.js
 * Complete Issue 006 formatted for Telegram delivery — all 5 versions
 * Includes: Pure ASCII art + PNG references + Editorial content
 */

const fs = require('fs');
const path = require('path');

// Issue 006 Metadata
const ISSUE = {
  number: 6,
  date: '2026-05-09',
  theme: 'Momentum',
  closingSentence: 'Momentum is not a direction — it\'s a state of permission.',
};

// 11 Section Content
const sections = [
  {
    num: 1,
    title: 'Art',
    source: 'MoMA: "Speed and Motion in Contemporary Practice"',
    narrative: 'Kinetic sculptures reframe stillness as laziness, acceleration as intention.',
    link: 'https://moma.org/explore/collection',
  },
  {
    num: 2,
    title: 'Painting',
    source: 'Frieze New York: Emerging Abstractionists',
    narrative: 'Gestural mark-making at 140 BPM — brushwork as percussion.',
    link: 'https://friezeartfair.com/exhibitions',
  },
  {
    num: 3,
    title: 'Illustration',
    source: "It's Nice That: Motion Design Experiments",
    narrative: 'Static frames suggesting velocity through optical density gradients.',
    link: 'https://www.itsnicethat.com',
  },
  {
    num: 4,
    title: 'Sculpture',
    source: 'Artforum: Kinetic Systems',
    narrative: 'Engineering as aesthetic — motors, pulleys, and the visible cost of speed.',
    link: 'https://www.artforum.com',
  },
  {
    num: 5,
    title: 'Culture',
    source: 'The New Yorker: Acceleration Culture',
    narrative: 'Why moving fast feels like permission to move at all.',
    link: 'https://www.newyorker.com',
  },
  {
    num: 6,
    title: 'Photography',
    source: 'Photography Is Magic: Motion Blur Studies',
    narrative: 'Shutter speed as editorial decision — what blurs, what holds still.',
    link: 'https://www.photographyismagic.com',
  },
  {
    num: 7,
    title: 'Art History',
    source: 'Reflex: Futurism Reconsidered',
    narrative: 'Speed as political statement, still relevant a century later.',
    link: 'https://www.reflex-mag.com',
  },
  {
    num: 8,
    title: 'Opinions',
    source: 'Wired: The Algorithmic Pace Problem',
    narrative: 'When iteration cycles compress, what gets lost in the acceleration.',
    link: 'https://www.wired.com',
  },
  {
    num: 9,
    title: 'Design & AI Tools',
    source: 'Designer Notes: Models at Scale',
    narrative: 'AI amplifies iteration velocity — 100 variants in an afternoon.',
    link: 'https://www.designernotes.com',
  },
  {
    num: 10,
    title: 'Product & Process',
    source: 'Design Observer: Agile Aesthetics',
    narrative: 'Two-week sprints shape visual language. What does haste look like?',
    link: 'https://designobserver.com',
  },
  {
    num: 11,
    title: 'Visual & Brand',
    source: 'Brand New: Identity Systems at Speed',
    narrative: 'Modular design as permission to move fast without losing coherence.',
    link: 'https://www.underconsideration.com/brandnew',
  },
];

const colorSchemes = [
  { key: 'momentum-neon', name: 'Neon (Cyan + Hot Pink)' },
  { key: 'momentum-orange-navy', name: 'Orange-Navy' },
  { key: 'momentum-green-purple', name: 'Green-Purple' },
  { key: 'momentum-pink-cyan', name: 'Pink-Cyan' },
  { key: 'momentum-gold-silver', name: 'Gold-Silver' },
];

function formatIssue(schemeName, schemeKey) {
  const output = [];

  // Header
  output.push(`
═══════════════════════════════════════
  Design By Bulletin™ — Issue 006
  ${ISSUE.date}
═══════════════════════════════════════

🎨 COLOR SCHEME: ${schemeName}

`);

  // Act 1 — Visual Preview
  output.push(`ACT 1 — VISUAL PREVIEW (8:00am PT)
────────────────────────────────────────

[PNG Rendering - Monochromatic Hero Masthead]
Files: momentum-006-*-${schemeKey}.png (all 11 sections)

`);

  // Pure ASCII Art Versions
  output.push(`PURE ASCII ARTWORK (Text Format)
────────────────────────────────────────

Section 1 — Art (Format A):
\`\`\`
    ╭─────────────┮
    │ ∟∟∟ ▓▓▓ ∟ │
    │ █ ▀▀▀ █   │
    │ ▀ ███ ▀   │
    │   ███     │
    │ ▀▀ █ ▀▀   │
    ╰─────────────╯
\`\`\`

Section 2 — Painting (Format B):
\`\`\`
╔═══════════════════╗
║ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ║
║ ▓░░░░░░░░░░░▓▓ ║
║ ▓░ ███ ░░░░░▓▓ ║
║ ▓░ █▀█ ░░░░░▓▓ ║
║ ▓░ ███ ░░░░░▓▓ ║
║ ▓░░░░░░░░░░░▓▓ ║
║ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ║
╚═══════════════════╝
\`\`\`

Section 3 — Illustration (Format D):
\`\`\`
╭──────────┐ ◆
│ ◇◆◇◆◇◆◇  │ ◆◆
│◆ ▀█▀ ▀█ │ ◆◆◆
│◇ █▄█ █▄ │ ◆
│◆◇◆◇◆◇◆  │
╰──────────┘
\`\`\`

Section 4 — Sculpture (Format C):
\`\`\`
  ███╗   ███╗
  ████╗ ████║
  █╔═██╗██╔═╝
  █║ ██║██║
  █║██╔╝██║
  ██╚═╝ ╚═╝
\`\`\`

Section 5 — Culture (Format E):
\`\`\`
⠿⠾⠽⠻⠟⠯⠷⠾⠿⠾⠽⠻⠟⠯⠷⠾
⠿ ░▒▓█████▓▒░ ⠿ ░▒▓ ⠿
⠾ █░░░░░░░░█ ⠾ ░▒▓ ⠾
⠽ █░ ◊◊◊ ░█ ⠽ ░▒▓ ⠽
⠻ █░░░░░░░░█ ⠻ ░▒▓ ⠻
⠟ ░▒▓█████▓▒░ ⠟ ░▒▓ ⠟
⠯⠷⠾⠿⠾⠽⠻⠟⠯⠷⠾⠽⠻⠟⠯⠷⠾
\`\`\`

Section 6 — Photography (Format A):
\`\`\`
    ╔═══════════╗
    ║ ◇━━━━━━━◇ ║
    ║ █  ⠿⠾  █ ║
    ║ █ ⠽⠻⠟ █ ║
    ║ █  ⠯⠷  █ ║
    ║ ◇━━━━━━━◇ ║
    ╚═══════════╝
\`\`\`

Section 7 — Art History (Format B):
\`\`\`
┌─────────────────┐
│ ╭╮ ╔╗ ╭╮ ┌─┐ │
│ ││ ║║ ││ │░│ │
│ ╰╯ ╚╝ ╰╯ └─┘ │
│ ╔════════════╗ │
│ ║ ▓▒░░░░▒▓ ║ │
│ ╚════════════╝ │
└─────────────────┘
\`\`\`

Section 8 — Opinions (Format C):
\`\`\`
  █████╗ ██╗████╗
  ██╔══╝ ██║██╔═╝
  ██║    ██║██║
  ██║    ██║██║
  ╚█████╗██║██║
   ╚════╝╚═╝╚═╝
\`\`\`

Section 9 — Design & AI Tools (Format D):
\`\`\`
 ╔══════════╗  ◆
 ║ ▄▄▄▄▄▄  ║  ◆◆
 ║ █    █  ║  ◆◆◆
 ║ █ ▀▀ █  ║  ◆
 ║ █▄▄▄▄█  ║
 ╚══════════╝
\`\`\`

Section 10 — Product & Process (Format E):
\`\`\`
⠿⠾⠽⠻⠟⠯⠷⠾⠿⠾⠽⠻⠟⠯⠷⠾
⠿ ░▒▓█████▓▒░ ⠿ ░▒▓ ⠿
⠾ █░░░░░░░░█ ⠾ ░▒▓ ⠾
⠽ █░ ◊◊◊ ░█ ⠽ ░▒▓ ⠽
⠻ █░░░░░░░░█ ⠻ ░▒▓ ⠻
⠟ ░▒▓█████▓▒░ ⠟ ░▒▓ ⠟
⠯⠷⠾⠿⠾⠽⠻⠟⠯⠷⠾⠽⠻⠟⠯⠷⠾
\`\`\`

Section 11 — Visual & Brand (Format A):
\`\`\`
▀▀▀█████▀▀▀ ▀▀▀█████▀▀▀
█████░░░█████ █░░░█
█░░░░░░░░░░█ █░░░█
█░ ▓▓▓▓ ░░█ █░░░█
█░░░░░░░░░░█ █░░░█
█████▓▓▓█████ █████
\`\`\`

`);

  // Act 2 — Full Editorial Content
  output.push(`ACT 2 — FULL EDITION (8:30am PT)
────────────────────────────────────────\n`);

  for (const sec of sections) {
    output.push(`
${sec.num}. ${sec.title}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📍 [PNG] momentum-006-${sec.num < 10 ? '0' : ''}${sec.num}-*-${schemeKey}.png

**${sec.source}**
${sec.narrative}

🔗 ${sec.link}
`);
  }

  // Closing
  output.push(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**"${ISSUE.closingSentence}"**

[COVER IMAGE - Midjourney: Isometric neon composition]

═══════════════════════════════════════
Design By Bulletin™ — All versions ready
═══════════════════════════════════════
`);

  return output.join('');
}

// Generate all 5 versions
console.log('📝 Formatting Issue 006 — All 5 Color Versions\n');

for (const scheme of colorSchemes) {
  const formatted = formatIssue(scheme.name, scheme.key);
  const filename = `ISSUE-006-${scheme.key}.txt`;
  const filepath = path.join(
    '/Users/blackmachete/projects/bulletin-board',
    filename
  );
  fs.writeFileSync(filepath, formatted);
  console.log(`✓ ${filename}`);
}

console.log('\n✨ All 5 complete issues formatted and ready!');
console.log('\nFiles created:');
colorSchemes.forEach(s => {
  console.log(`  • ISSUE-006-${s.key}.txt`);
});
console.log('\nEach file contains:');
console.log('  • Act 1 — Visual preview info');
console.log('  • Pure ASCII art (all 11 sections in text)');
console.log('  • Act 2 — Full editorial content');
console.log('  • 11 sections with source + narrative + link');
console.log('  • PNG file references for image delivery');
