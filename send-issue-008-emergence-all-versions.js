#!/usr/bin/env node
/**
 * send-issue-008-emergence-all-versions.js
 * Send all three versions of Issue 008: EMERGENCE to Telegram
 * V1: Bauhaus Grid, V2: Composition, V3: Typography as Design
 */

const https = require('https');
const fs = require('fs');

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

async function sendCodeBlock(text) {
  return sendMessage('```\n' + text + '\n```', 'MarkdownV2');
}

async function main() {
  console.log('📮 Sending Issue 008: EMERGENCE (All Three Versions) to Telegram...\n');

  try {
    // OPENING BANNER
    console.log('📢 Sending opening banner...');
    await sendMessage(
      '═════════════════════════════════════\n' +
      'Design By Bulletin™\n' +
      'Issue 008: EMERGENCE\n' +
      'Three Compositional Approaches\n' +
      '═════════════════════════════════════\n\n' +
      '🎨 THEME: Emergence\n' +
      '📊 MIX: Music 70% | Visual 80% | Research 65% | Process 75% | Theme 85% | AI Culture 55%\n\n' +
      'Three complete versions showing different design approaches:\n' +
      '• V1: Bauhaus Grid (Strict Discipline)\n' +
      '• V2: Composition (Rhythm & Breathing)\n' +
      '• V3: Typography as Design (Text-Driven)'
    );
    await delay(800);

    // VERSION 1: BAUHAUS GRID
    console.log('📝 Sending Version 1: Bauhaus Grid...');
    await sendMessage('═══════════════════════════════════════════════════════════════\n*VERSION 1: BAUHAUS GRID*\n═══════════════════════════════════════════════════════════════\n\nGeometric discipline. Invisible grid. Every element serves clarity.\nForm follows function. Modularity. Hierarchy through contrast.\n\n*Sections 1-11 with strict compositional discipline:*', 'MarkdownV2');
    await delay(800);

    // V1 Section Samples
    const v1Content = fs.readFileSync('./ISSUE-008-emergence-v1-bauhaus-grid.txt', 'utf8');
    const v1Sections = v1Content.match(/SECTION \d+ —.*?(?=SECTION \d+|ACT 2|End Issue)/gs) || [];

    for (let i = 0; i < Math.min(3, v1Sections.length); i++) {
      const section = v1Sections[i].substring(0, 500) + '...';
      await sendCodeBlock(section);
      await delay(600);
    }

    await sendMessage('*(Full V1 text: ISSUE-008-emergence-v1-bauhaus-grid.txt)*', 'MarkdownV2');
    await delay(1000);

    // VERSION 2: COMPOSITION
    console.log('📝 Sending Version 2: Composition...');
    await sendMessage('═══════════════════════════════════════════════════════════════\n*VERSION 2: COMPOSITION*\n═══════════════════════════════════════════════════════════════\n\nRhythm and pacing. Breathing room controls reading speed.\nNegative space as design. Visual weight variation. Emotional rhythm.\n\n*Sections pace from dense → sparse → building → climax:*', 'MarkdownV2');
    await delay(800);

    const v2Content = fs.readFileSync('./ISSUE-008-emergence-v2-composition.txt', 'utf8');
    const v2Sections = v2Content.match(/SECTION \d+ —.*?(?=SECTION \d+|ACT 2|End Issue)/gs) || [];

    for (let i = 0; i < Math.min(3, v2Sections.length); i++) {
      const section = v2Sections[i].substring(0, 500) + '...';
      await sendCodeBlock(section);
      await delay(600);
    }

    await sendMessage('*(Full V2 text: ISSUE-008-emergence-v2-composition.txt)*', 'MarkdownV2');
    await delay(1000);

    // VERSION 3: TYPOGRAPHY
    console.log('📝 Sending Version 3: Typography as Design...');
    await sendMessage('═══════════════════════════════════════════════════════════════\n*VERSION 3: TYPOGRAPHY AS DESIGN*\n═══════════════════════════════════════════════════════════════\n\nText-driven composition. Headers as narrative elements.\nQuestions guide engagement. ASCII as accent, not primary.\nVoice and perspective central.\n\n*Sections flow as narrative arc with thematic headers:*', 'MarkdownV2');
    await delay(800);

    const v3Content = fs.readFileSync('./ISSUE-008-emergence-v3-typography.txt', 'utf8');
    const v3Sections = v3Content.match(/SECTION \d+ —.*?(?=SECTION \d+|ACT 2|End Issue)/gs) || [];

    for (let i = 0; i < Math.min(3, v3Sections.length); i++) {
      const section = v3Sections[i].substring(0, 500) + '...';
      await sendCodeBlock(section);
      await delay(600);
    }

    await sendMessage('*(Full V3 text: ISSUE-008-emergence-v3-typography.txt)*', 'MarkdownV2');
    await delay(1000);

    // COMPARISON & GUIDANCE
    console.log('📊 Sending comparison guide...');
    await sendMessage(
      '═══════════════════════════════════════════════════════════════\n' +
      '*COMPARISON: WHICH VERSION TO USE?*\n' +
      '═══════════════════════════════════════════════════════════════\n\n' +
      '*V1: Bauhaus Grid* → When structure is the message\n' +
      '• Geometric discipline\n' +
      '• Technical/process content\n' +
      '• Modularity & consistency paramount\n\n' +
      '*V2: Composition* → When pacing matters\n' +
      '• Emotional rhythm\n' +
      '• Narrative/temporal content\n' +
      '• Breathing room as design\n\n' +
      '*V3: Typography* → When voice matters\n' +
      '• Narrative drive\n' +
      '• Philosophical/reflective content\n' +
      '• Questions & engagement\n\n' +
      'See ISSUE-008-COMPARISON.md for full analysis.'
    );
    await delay(800);

    // CLOSING
    console.log('✅ Sending closing message...');
    await sendMessage(
      '═══════════════════════════════════════════════════════════════\n' +
      '*DESIGN PRINCIPLES AT WORK*\n' +
      '═══════════════════════════════════════════════════════════════\n\n' +
      'All three versions demonstrate:\n' +
      '✓ Bauhaus principles (grid, hierarchy, reduction, balance, modularity)\n' +
      '✓ ASCII composition (rhythm, breathing, weight distribution)\n' +
      '✓ Typography as design (hierarchy, section identification, voice)\n\n' +
      'Each takes a different approach to the same content.\n' +
      'Each applies the principles differently.\n' +
      'Each creates a distinct reading experience.\n\n' +
      '🎨 *The art is in knowing which approach serves your content.*'
    );
    await delay(800);

    console.log('\n✅ All messages sent successfully!');
    console.log('📂 Full versions saved in project folder:');
    console.log('   • ISSUE-008-emergence-v1-bauhaus-grid.txt');
    console.log('   • ISSUE-008-emergence-v2-composition.txt');
    console.log('   • ISSUE-008-emergence-v3-typography.txt');
    console.log('   • ISSUE-008-COMPARISON.md');

  } catch (err) {
    console.error('❌ Error:', err.message);
    process.exit(1);
  }
}

main();
