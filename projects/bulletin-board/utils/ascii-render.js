// ascii-render.js — Design by Bulletin
// Renders ASCII art as a styled PNG image for Telegram delivery.
// Toggle: use renderAsciiImage(text, options) for image mode,
// or wrap in a code block for standard text mode.
//
// Dependencies: sharp (already installed)

const sharp = require('sharp');
const path = require('path');
const os = require('os');

// ── Default theme ────────────────────────────────────────────────
const THEMES = {
  default: {
    bg:        '#0a0a0a',   // near-black background
    text:      '#e8e8e0',   // warm off-white
    accent:    '#c8b89a',   // warm sand — for braille/halftone chars
    dim:       '#4a4a42',   // muted — for sparse/dot chars
    highlight: '#d4a853',   // gold — optional accent row
  },
  midnight: {
    bg:        '#07080f',
    text:      '#b8c4d8',
    accent:    '#6a8caf',
    dim:       '#2a3040',
    highlight: '#4a7ab5',
  },
  editorial: {
    bg:        '#faf8f2',   // warm paper
    text:      '#1a1a18',   // ink
    accent:    '#8a6a3a',   // warm brown
    dim:       '#c8c4b8',
    highlight: '#5a3e1b',
  },
};

// Characters that get accent color (braille halftone, dense fills)
const ACCENT_CHARS = /[⠀-⣿█▓▒░▄▀▌▐]/u;
// Characters that get dim color (sparse/dot)
const DIM_CHARS = /[·\.\`'~\-\s]/;

/**
 * Colorize a single character based on its visual weight.
 * If monochromatic is true, all characters use the same color.
 */
function charColor(ch, theme, monochromatic = false) {
  if (monochromatic) return theme.text;
  if (ACCENT_CHARS.test(ch)) return theme.accent;
  if (DIM_CHARS.test(ch)) return theme.dim;
  return theme.text;
}

/**
 * Escape a string for safe SVG text content.
 */
function svgEscape(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * Build an SVG document from ASCII art text.
 * Each character is individually colored based on its visual weight, or monochromatic if specified.
 *
 * @param {boolean} [monochromatic=false] \u2014 if true, all characters use theme.text color
 */
function buildSvg(asciiText, theme, fontSize = 14, fontFamily = 'monospace', monochromatic = false) {
  const lines = asciiText.split('\n');
  // Remove trailing empty lines
  while (lines.length && lines[lines.length - 1].trim() === '') lines.pop();

  const charWidth = fontSize * 0.601;  // monospace char aspect ratio
  const lineHeight = fontSize * 1.5;
  const padX = fontSize * 1.2;
  const padY = fontSize * 1.2;

  const maxCols = Math.max(...lines.map(l => l.length));
  const svgWidth  = Math.ceil(maxCols * charWidth + padX * 2);
  const svgHeight = Math.ceil(lines.length * lineHeight + padY * 2);

  let tspans = '';
  lines.forEach((line, lineIdx) => {
    const y = padY + (lineIdx + 1) * lineHeight;
    // Build per-character tspans for coloring
    let x = padX;
    for (const ch of line) {
      const color = charColor(ch, theme, monochromatic);
      const escaped = svgEscape(ch === ' ' ? '\u00A0' : ch);
      tspans += `<tspan x="${x.toFixed(1)}" y="${y.toFixed(1)}" fill="${color}">${escaped}</tspan>`;
      x += charWidth;
    }
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${svgWidth}" height="${svgHeight}">
  <rect width="100%" height="100%" fill="${theme.bg}"/>
  <text
    font-family="${fontFamily}"
    font-size="${fontSize}px"
    font-weight="normal"
    letter-spacing="0"
    xml:space="preserve"
  >${tspans}</text>
</svg>`;
}

/**
 * Render ASCII art to a PNG buffer.
 *
 * @param {string} asciiText  — the raw ASCII art string
 * @param {object} options
 *   @param {string} [options.theme='default']   — theme name or custom theme object
 *   @param {number} [options.fontSize=14]       — font size in px
 *   @param {number} [options.scale=2]           — retina scale factor
 *   @param {boolean} [options.monochromatic=false] — if true, all chars use single color
 * @returns {Promise<Buffer>}  PNG image buffer
 */
async function renderAsciiImage(asciiText, options = {}) {
  const themeName = options.theme || 'default';
  const theme = typeof themeName === 'object' ? themeName : (THEMES[themeName] || THEMES.default);
  const fontSize = options.fontSize || 14;
  const scale = options.scale || 2;
  const monochromatic = options.monochromatic || false;

  const svg = buildSvg(asciiText, theme, fontSize, 'monospace', monochromatic);
  const scaledSvg = svg.replace(
    /width="(\d+(?:\.\d+)?)" height="(\d+(?:\.\d+)?)"/,
    (_, w, h) => `width="${Math.round(+w * scale)}" height="${Math.round(+h * scale)}" viewBox="0 0 ${w} ${h}"`
  );

  const pngBuffer = await sharp(Buffer.from(scaledSvg))
    .png({ compressionLevel: 9 })
    .toBuffer();

  return pngBuffer;
}

/**
 * Render ASCII art to a PNG file and return the file path.
 * Writes to a temp file by default.
 */
async function renderAsciiFile(asciiText, options = {}) {
  const buf = await renderAsciiImage(asciiText, options);
  const outPath = options.outPath || path.join(os.tmpdir(), `dbb-ascii-${Date.now()}.png`);
  require('fs').writeFileSync(outPath, buf);
  return outPath;
}

module.exports = { renderAsciiImage, renderAsciiFile, THEMES, buildSvg };
