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

  // ── Intentional 2-3 tone schemes (for Momentum) ────────────────────
  // Neon Cyan + Hot Pink: High-contrast 80s energy
  'momentum-neon': {
    bg:        '#0a0a0a',
    structural: '#00ffff',  // Cyan — geometry/structure
    emphasis:   '#ff1493',  // Hot pink — weight/focal points
    gradient:   '#00ffff',  // Cyan — halftone/texture
    detail:     '#0088ff',  // Deeper blue — sparse elements
    text:       '#00ffff',  // Cyan fallback
  },

  // Electric Orange + Deep Navy: Warm/cool depth
  'momentum-orange-navy': {
    bg:        '#0f0f0f',
    structural: '#ff8800',  // Orange — primary geometry
    emphasis:   '#003388',  // Deep navy — weight/depth
    gradient:   '#ff8800',  // Orange — texture/movement
    detail:     '#003388',  // Navy — subtlety
    text:       '#ffff00',  // Bright yellow — text accent
  },

  // Acid Green + Electric Purple: Synth-forward kinetic
  'momentum-green-purple': {
    bg:        '#000000',
    structural: '#00ff00',  // Neon green — pure energy
    emphasis:   '#aa00ff',  // Electric purple — counterpoint
    gradient:   '#00ff00',  // Green — high visibility
    detail:     '#aa00ff',  // Purple — mystery/depth
    text:       '#00ff00',  // Green primary
  },

  // Hot Pink + Cyan (reversed): Magenta-forward alternative
  'momentum-pink-cyan': {
    bg:        '#050505',
    structural: '#ff00aa',  // Hot pink — primary structure
    emphasis:   '#00ffff',  // Cyan — punch/accent
    gradient:   '#ff00aa',  // Pink — gradient/motion
    detail:     '#00ffff',  // Cyan — detail refinement
    text:       '#ff00aa',  // Pink primary
  },

  // Warm Gold + Cool Silver: Elegant kinetic
  'momentum-gold-silver': {
    bg:        '#1a1515',
    structural: '#ffcc00',  // Gold — warmth/energy
    emphasis:   '#cccccc',  // Silver — cool structure
    gradient:   '#ffcc00',  // Gold — movement/texture
    detail:     '#888888',  // Dark gray — subtle detail
    text:       '#ffcc00',  // Gold primary
  },
};

// Character role classes for intelligent 2-3 tone coloring
const STRUCTURAL_CHARS = /[─│╭╮╯╰├┤┬┴┼╔╗╚╝╠╡╢╣╤╥╦╧╨╩═║╓╖╙╜╕╗╘╙╚◇◆●○]/;  // Geometry/structure
const DENSE_CHARS = /[█▓▒░]/;          // Heavy fills — visual weight
const HALFTONE_CHARS = /[⠀-⣿]/u;      // Braille gradient — texture
const SPARSE_CHARS = /[·\.\`'~\-]/;    // Light detail
const BLOCK_CHARS = /[▀▄▌▐]/;          // Half-blocks — transitions

/**
 * Intelligent character coloring based on role and visual weight.
 * Supports custom theme objects with color roles: structural, emphasis, gradient, detail, text.
 */
function charColor(ch, theme, monochromatic = false) {
  if (monochromatic) return theme.text;

  // If theme has role-based colors, use them
  if (theme.structural && STRUCTURAL_CHARS.test(ch)) return theme.structural;
  if (theme.emphasis && (DENSE_CHARS.test(ch) || BLOCK_CHARS.test(ch))) return theme.emphasis;
  if (theme.gradient && HALFTONE_CHARS.test(ch)) return theme.gradient;
  if (theme.detail && SPARSE_CHARS.test(ch)) return theme.detail;

  // Fallback to old accent/dim system for backwards compatibility
  if (theme.accent && /[⠀-⣿█▓▒░▄▀▌▐]/u.test(ch)) return theme.accent;
  if (theme.dim && /[·\.\`'~\-\s]/.test(ch)) return theme.dim;

  return theme.text || '#e8e8e0';
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
 * Uses line-based rendering with role-based coloring for proper monospace alignment.
 * Renders per-character colors by grouping consecutive same-color chars into single tspans.
 *
 * @param {boolean} [monochromatic=false] \u2014 if true, all characters use theme.text color
 */
function buildSvg(asciiText, theme, fontSize = 14, fontFamily = 'monospace', monochromatic = false) {
  const lines = asciiText.split('\n');
  // Remove trailing empty lines
  while (lines.length && lines[lines.length - 1].trim() === '') lines.pop();

  // SVG text metrics for monospace
  const lineHeight = fontSize * 1.5;
  const padX = fontSize * 0.8;
  const padY = fontSize * 0.8;

  const maxCols = Math.max(...lines.map(l => l.length));
  const charWidth = fontSize * 0.6;  // Typical monospace ratio
  const svgWidth = Math.ceil(maxCols * charWidth + padX * 2);
  const svgHeight = Math.ceil(lines.length * lineHeight + padY * 2);

  let textElements = '';
  lines.forEach((line, lineIdx) => {
    const y = padY + (lineIdx + 1.2) * lineHeight;

    // Group consecutive characters with same color
    const colorGroups = [];
    let currentColor = null;
    let currentText = '';

    for (const ch of line) {
      const color = charColor(ch, theme, monochromatic);
      if (color !== currentColor && currentText) {
        colorGroups.push({ color: currentColor, text: currentText });
        currentText = '';
      }
      currentColor = color;
      currentText += (ch === ' ' ? '\u00A0' : ch);
    }
    if (currentText) {
      colorGroups.push({ color: currentColor, text: currentText });
    }

    // Build tspans for each color group, preserving monospace alignment
    let tspanHtml = '';
    for (const group of colorGroups) {
      const escaped = svgEscape(group.text);
      tspanHtml += `<tspan fill="${group.color}">${escaped}</tspan>`;
    }

    // Single <text> element per line for proper monospace rendering
    textElements += `<text x="${padX}" y="${y}" font-family="${fontFamily}" font-size="${fontSize}px" letter-spacing="0" xml:space="preserve">${tspanHtml}</text>`;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${svgWidth}" height="${svgHeight}">
  <rect width="100%" height="100%" fill="${theme.bg}"/>
  ${textElements}
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
