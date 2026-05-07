/**
 * archive-browser.js
 * Handles /archive command and archive:N callback queries
 * Usage:
 *   node archive-browser.js <index>                          — send new message
 *   node archive-browser.js <index> <chat_id> <message_id>  — edit existing message
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const TOKEN = '8662552111:AAHpfxCGoM6PGbEg4msbSm3bEE6Ucf5o1O0';
const CHAT_ID = process.argv[3] || process.env.CHAT_ID || '7774590281';
const MESSAGE_ID = process.argv[4] || null;
const ARCHIVE_PATH = path.join(__dirname, '../ASCII-ARCHIVE.md');
const STATE_FILE = '/tmp/dbb-archive-state.json';

// Save telegram message_id after a send so callbacks can edit in place
function saveState(chatId, telegramMsgId) {
  fs.writeFileSync(STATE_FILE, JSON.stringify({ chatId, messageId: telegramMsgId }));
}

// Load last known telegram message_id
function loadState() {
  try { return JSON.parse(fs.readFileSync(STATE_FILE, 'utf8')); }
  catch { return null; }
}

// Parse all pieces from archive
function loadPieces() {
  const content = fs.readFileSync(ARCHIVE_PATH, 'utf8');
  const pieces = [];
  const issueBlocks = content.split(/^## Issue /m).slice(1);
  for (const block of issueBlocks) {
    const issueMatch = block.match(/^(\d+) — ([^\n]+)/);
    if (!issueMatch) continue;
    const [, issueNum, theme] = issueMatch;
    const sectionBlocks = block.split(/^### /m).slice(1);
    for (const sec of sectionBlocks) {
      const secMatch = sec.match(/^(\d+) — ([^\n(]+)/);
      if (!secMatch) continue;
      const section = secMatch[2].trim();
      const codeMatch = sec.match(/```\n([\s\S]*?)\n```/);
      if (!codeMatch) continue;
      pieces.push({
        issueNum,
        theme: theme.trim(),
        section,
        art: codeMatch[1]
      });
    }
  }
  return pieces;
}

// Send a piece at index N with nav buttons
function sendPiece(i) {
  const pieces = loadPieces();
  const total = pieces.length;

  // Clamp and wrap
  i = ((i % total) + total) % total;

  const p = pieces[i];
  const prev = i === 0 ? total - 1 : i - 1;
  const next = i === total - 1 ? 0 : i + 1;

  // Random — different from current
  let rand = Math.floor(Math.random() * (total - 1));
  if (rand >= i) rand++;

  const text =
    `━━━━━━━━━━━━━━━━━━━━━━━\n` +
    `Issue ${p.issueNum} — ${p.theme} · ${p.section}\n` +
    `━━━━━━━━━━━━━━━━━━━━━━━\n\n` +
    `\`\`\`\n${p.art}\n\`\`\`\n\n` +
    `${i + 1} / ${total}`;

  const body = JSON.stringify({
    chat_id: CHAT_ID,
    text,
    parse_mode: 'Markdown',
    reply_markup: {
      inline_keyboard: [[
        { text: '← Prev', callback_data: `archive:${prev}` },
        { text: '🎲 Random', callback_data: `archive:${rand}` },
        { text: 'Next →', callback_data: `archive:${next}` }
      ]]
    }
  });

  // Use editMessageText if we have a saved state, otherwise sendMessage
  const state = loadState();
  const editMsgId = MESSAGE_ID || (state && state.chatId === CHAT_ID ? state.messageId : null);
  const endpoint = editMsgId ? '/editMessageText' : '/sendMessage';
  const bodyObj = JSON.parse(body);
  if (editMsgId) bodyObj.message_id = parseInt(editMsgId, 10);
  const finalBody = JSON.stringify(bodyObj);

  return new Promise((resolve, reject) => {
    const req = https.request({
      hostname: 'api.telegram.org',
      path: `/bot${TOKEN}${endpoint}`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(finalBody)
      }
    }, res => {
      let data = '';
      res.on('data', d => data += d);
      res.on('end', () => {
        const result = JSON.parse(data);
        if (result.ok) {
          const action = editMsgId ? 'Edited' : 'Sent';
          // Save Telegram message_id for future edits
          const tgMsgId = result.result?.message_id;
          if (tgMsgId) saveState(CHAT_ID, tgMsgId);
          console.log(`${action} piece ${i + 1}/${total}: ${p.issueNum} — ${p.theme} · ${p.section} (msg_id: ${editMsgId || tgMsgId})`);
          resolve(result);
        } else {
          console.error('Telegram error:', result);
          reject(result);
        }
      });
    });
    req.on('error', reject);
    req.write(finalBody);
    req.end();
  });
}

// CLI: node archive-browser.js <index>
const index = parseInt(process.argv[2] || '0', 10);
sendPiece(index).catch(console.error);
