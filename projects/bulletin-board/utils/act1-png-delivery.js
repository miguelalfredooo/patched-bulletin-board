// act1-png-delivery.js — Design by Bulletin
// Integrates PNG rendering into Act 1 (visual preview) delivery for Telegram.
// Sends the ASCII visual edition as a styled PNG image instead of code blocks.

const { renderAsciiImage } = require('./ascii-render');

/**
 * Generate Act 1 ASCII content (11 pieces + masthead + closing sentence).
 * This should be called after composition but before rendering.
 *
 * Returns the full Act 1 text that will be rendered to PNG.
 */
function buildAct1ASCII(pieces, closingSentence) {
  // pieces = array of 11 ASCII strings
  // closingSentence = final sentence (e.g., "Full edition in 30 minutes.")

  const masthead = `
██████╗ ██████╗ ██████╗ ™
██╔══██╗██╔══██╗██╔══██╗
██║  ██║██████╔╝██████╔╝
██║  ██║██╔══██╗██╔══██╗
██████╔╝██████╔╝██████╔╝
╚═════╝ ╚═════╝ ╚═════╝

Design By Bulletin™
━━━━━━━━━━━━━━━━━━━━━━━`;

  const spacer = '\n\n';

  // Build full Act 1
  let content = masthead;

  for (const piece of pieces) {
    content += spacer + piece;
  }

  content += spacer + closingSentence;
  content += spacer + 'Full edition in 30 minutes.';

  return content;
}

/**
 * Render Act 1 ASCII to PNG buffer.
 *
 * @param {string} act1ASCII — the full Act 1 ASCII text (from buildAct1ASCII)
 * @param {object} options
 *   @param {string} [options.theme='default'] — color theme
 *   @param {number} [options.fontSize=13] — font size (smaller for compact fit)
 * @returns {Promise<Buffer>} PNG image buffer
 */
async function renderAct1PNG(act1ASCII, options = {}) {
  const theme = options.theme || 'default';
  const fontSize = options.fontSize || 13;  // slightly smaller for density

  return renderAsciiImage(act1ASCII, {
    theme,
    fontSize,
    scale: 2,  // retina
  });
}

/**
 * Prepare Act 1 for Telegram delivery.
 * Returns an object with the PNG buffer and metadata.
 *
 * @param {string} act1ASCII — full Act 1 ASCII text
 * @param {object} options — rendering options (theme, fontSize)
 * @returns {Promise<object>} { buffer, sizeBytes, caption }
 */
async function prepareAct1Delivery(act1ASCII, options = {}) {
  const pngBuffer = await renderAct1PNG(act1ASCII, options);

  return {
    buffer: pngBuffer,
    sizeBytes: pngBuffer.length,
    base64: pngBuffer.toString('base64'),
    caption: 'Design By Bulletin™ — Daily Preview',
    mimeType: 'image/png',
  };
}

/**
 * Example: Build and render a sample Act 1.
 * Used for testing the integration.
 */
async function testAct1Delivery() {
  const samplePieces = [
    '╭─────────────╮\n│   Piece 1   │\n╰─────────────╯',
    '┌─────────────┐\n│   Piece 2   │\n└─────────────┘',
    '┏━━━━━━━━━━━━━┓\n┃   Piece 3   ┃\n┗━━━━━━━━━━━━━┛',
    '▄▄▄▄▄▄▄▄▄▄▄▄▄\n  Piece 4    \n▀▀▀▀▀▀▀▀▀▀▀▀▀',
    '░░░░░░░░░░░░░\n░ Piece 5   ░\n░░░░░░░░░░░░░',
    '┃ Piece 6    ┃',
    '┇ Piece 7    ┇',
    '╱ Piece 8    ╲',
    '╲ Piece 9    ╱',
    '═════════════\n Piece 10    \n═════════════',
    '▀▄▀▄▀▄▀▄▀▄▀\n Piece 11   ',
  ];

  const closingSentence = 'Something shifts today.';

  const act1 = buildAct1ASCII(samplePieces, closingSentence);
  console.log('Act 1 content built. Length:', act1.length, 'chars');
  console.log('\nFirst 200 chars:\n', act1.substring(0, 200));

  const delivery = await prepareAct1Delivery(act1, { theme: 'default' });

  console.log('\nAct 1 PNG prepared:');
  console.log('  Size:', delivery.sizeBytes, 'bytes');
  console.log('  Base64 length:', delivery.base64.length);
  console.log('  Caption:', delivery.caption);
  console.log('\nReady to send to Telegram via:');
  console.log('  telegram.sendPhoto(chatId, buffer, { caption: delivery.caption })');

  return delivery;
}

module.exports = {
  buildAct1ASCII,
  renderAct1PNG,
  prepareAct1Delivery,
  testAct1Delivery,
};
