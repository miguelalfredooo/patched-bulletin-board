/**
 * callback-poller.js
 * Standalone long-poll loop that handles archive:N callback queries
 * from Telegram, independent of OpenClaw.
 *
 * Run once: node utils/callback-poller.js
 * Runs as a background daemon.
 */

const https = require('https');
const { execSync } = require('child_process');

const TOKEN = '8662552111:AAHpfxCGoM6PGbEg4msbSm3bEE6Ucf5o1O0';
const ARCHIVE_SCRIPT = `${__dirname}/archive-browser.js`;

let offset = 0;

function tgRequest(method, params = {}) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify(params);
    const req = https.request({
      hostname: 'api.telegram.org',
      path: `/bot${TOKEN}/${method}`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(body)
      }
    }, res => {
      let data = '';
      res.on('data', d => data += d);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); }
        catch { resolve({ ok: false }); }
      });
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

async function poll() {
  try {
    const res = await tgRequest('getUpdates', {
      offset,
      timeout: 30,
      allowed_updates: ['callback_query']
    });

    if (!res.ok || !res.result?.length) return;

    for (const update of res.result) {
      offset = update.update_id + 1;

      const cb = update.callback_query;
      if (!cb) continue;

      const data = cb.data ?? '';
      const match = data.match(/^archive:(\d+)$/);
      if (!match) continue;

      const index = match[1];
      const chatId = String(cb.message?.chat?.id ?? '7774590281');

      console.log(`[archive-poller] callback archive:${index} from ${chatId}`);

      // Answer the callback immediately (removes loading spinner on button)
      await tgRequest('answerCallbackQuery', { callback_query_id: cb.id });

      // Run archive browser — edits message in place
      try {
        execSync(`node ${ARCHIVE_SCRIPT} ${index} ${chatId}`, { stdio: 'inherit' });
      } catch (err) {
        console.error('[archive-poller] error running archive-browser:', err.message);
      }
    }
  } catch (err) {
    console.error('[archive-poller] poll error:', err.message);
  }
}

async function run() {
  console.log('[archive-poller] started — listening for archive:N callbacks');
  while (true) {
    await poll();
    // Small breathing room between polls
    await new Promise(r => setTimeout(r, 100));
  }
}

run();
