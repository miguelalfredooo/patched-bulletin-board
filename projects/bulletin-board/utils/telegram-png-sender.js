// telegram-png-sender.js — Design by Bulletin
// Sends ASCII art rendered as PNG to Telegram via buffer.
// Usage: sendAsciiPng(asciiText, botToken, chatId, options)

const { renderAsciiImage } = require('./ascii-render');
const https = require('https');

/**
 * Send ASCII art as a PNG image to Telegram.
 *
 * @param {string} asciiText — the raw ASCII art
 * @param {string} botToken — Telegram bot token
 * @param {string|number} chatId — Telegram chat ID
 * @param {object} options
 *   @param {string} [options.theme='default'] — theme name
 *   @param {number} [options.fontSize=14] — font size
 *   @param {string} [options.caption] — optional image caption
 * @returns {Promise<object>} Telegram API response
 */
async function sendAsciiPng(asciiText, botToken, chatId, options = {}) {
  const pngBuffer = await renderAsciiImage(asciiText, {
    theme: options.theme || 'default',
    fontSize: options.fontSize || 14,
    scale: options.scale || 2,
  });

  const base64Data = pngBuffer.toString('base64');
  const boundary = 'Boundary' + Date.now();

  // Build multipart form data manually (sharp PNG as file upload)
  let body = '';
  body += `--${boundary}\r\n`;
  body += 'Content-Disposition: form-data; name="chat_id"\r\n\r\n';
  body += `${chatId}\r\n`;

  if (options.caption) {
    body += `--${boundary}\r\n`;
    body += 'Content-Disposition: form-data; name="caption"\r\n\r\n';
    body += `${options.caption}\r\n`;
  }

  body += `--${boundary}\r\n`;
  body += 'Content-Disposition: form-data; name="photo"; filename="ascii.png"\r\n';
  body += 'Content-Type: image/png\r\n\r\n';

  const bodyStart = Buffer.from(body);
  const bodyEnd = Buffer.from(`\r\n--${boundary}--\r\n`);
  const payload = Buffer.concat([bodyStart, pngBuffer, bodyEnd]);

  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.telegram.org',
      port: 443,
      path: `/bot${botToken}/sendPhoto`,
      method: 'POST',
      headers: {
        'Content-Type': `multipart/form-data; boundary=${boundary}`,
        'Content-Length': payload.length,
      },
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          if (parsed.ok) {
            resolve(parsed.result);
          } else {
            reject(new Error(`Telegram API error: ${parsed.description}`));
          }
        } catch (e) {
          reject(new Error(`Failed to parse Telegram response: ${e.message}`));
        }
      });
    });

    req.on('error', reject);
    req.write(payload);
    req.end();
  });
}

/**
 * Quick test: render and log base64 (useful for debugging).
 */
async function testRenderOnly(asciiText, options = {}) {
  const buf = await renderAsciiImage(asciiText, options);
  return {
    sizeBytes: buf.length,
    base64: buf.toString('base64'),
  };
}

module.exports = { sendAsciiPng, testRenderOnly };
