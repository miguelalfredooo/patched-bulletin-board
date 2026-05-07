# ASCII Art PNG Rendering for Telegram

Render ASCII art as styled PNG images for rich Telegram delivery. Uses SVG + sharp (cairo) for pixel-perfect rendering.

---

## System Overview

**Pipeline:** ASCII text → SVG with per-character coloring → PNG via sharp → Base64 or file for Telegram

**Dependencies:** sharp (already installed) with cairo + pango + freetype

**Themes:** Three built-in color schemes (default, midnight, editorial)

---

## Quick Start

### Render to PNG Buffer

```javascript
const { renderAsciiImage } = require('./utils/ascii-render');

const asciiText = `
██████╗ ██████╗ ██████╗ ™
██╔══██╗██╔══██╗██╔══██╗
██║  ██║██████╔╝██████╔╝
██║  ██║██╔══██╗██╔══██╗
██████╔╝██████╔╝██████╔╝
╚═════╝ ╚═════╝ ╚═════╝
`;

const pngBuffer = await renderAsciiImage(asciiText, {
  theme: 'default',    // or 'midnight', 'editorial'
  fontSize: 14,
  scale: 2,            // retina (2x pixels)
});

console.log('PNG:', pngBuffer.length, 'bytes');
```

### Render to File

```javascript
const { renderAsciiFile } = require('./utils/ascii-render');

const filePath = await renderAsciiFile(asciiText, {
  theme: 'editorial',
  fontSize: 16,
  outPath: '/tmp/my-ascii.png'
});

console.log('Saved:', filePath);
```

### Send to Telegram

```javascript
const { sendAsciiPng } = require('./utils/telegram-png-sender');

await sendAsciiPng(asciiText, BOT_TOKEN, CHAT_ID, {
  theme: 'default',
  caption: 'Issue Preview'
});
```

### CLI Usage

```bash
# Save to file
node utils/render-and-send-ascii.js --file ascii.txt --theme editorial --output out.png

# Get base64 for Telegram message tool
node utils/render-and-send-ascii.js --text "Hello World" --base64

# Help
node utils/render-and-send-ascii.js --help
```

---

## Themes

### Default (Dark)
- **Background:** #0a0a0a (near-black)
- **Text:** #e8e8e0 (warm off-white)
- **Accent:** #c8b89a (sand — for braille/dense chars)
- **Dim:** #4a4a42 (muted — for sparse chars)
- **Best for:** Dark mode, Telegram dark theme

### Midnight (Cool)
- **Background:** #07080f (navy)
- **Text:** #b8c4d8 (cool blue-white)
- **Accent:** #6a8caf (cool blue)
- **Dim:** #2a3040 (navy-gray)
- **Best for:** Cool aesthetic, high contrast

### Editorial (Light)
- **Background:** #faf8f2 (warm paper)
- **Text:** #1a1a18 (ink)
- **Accent:** #8a6a3a (warm brown)
- **Dim:** #c8c4b8 (light gray)
- **Best for:** Light mode, print-like feel, high accessibility

---

## Character Coloring

Characters are colored based on their visual weight:

```javascript
// Accent chars (braille, block fills, dense patterns)
[⠀-⣿█▓▒░▄▀▌▐] → accent color

// Dim chars (sparse, dots, whitespace)
[·.`'~\- ] → dim color

// Everything else → text color
```

This creates visual depth — dense ASCII gets warm accent colors, sparse areas stay muted.

---

## Parameters Reference

### `renderAsciiImage(asciiText, options)`

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| theme | string/object | 'default' | Theme name or custom theme object |
| fontSize | number | 14 | Font size in pixels |
| scale | number | 2 | Retina scaling (2x for crisp edges) |

Returns: `Promise<Buffer>` — PNG image buffer

### `renderAsciiFile(asciiText, options)`

Same options as `renderAsciiImage`, plus:

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| outPath | string | `/tmp/dbb-ascii-[timestamp].png` | Output file path |

Returns: `Promise<string>` — file path

### `sendAsciiPng(asciiText, botToken, chatId, options)`

Same rendering options as above, plus:

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| caption | string | undefined | Optional Telegram photo caption |

Returns: `Promise<object>` — Telegram API response

---

## Advanced Usage

### Custom Theme

```javascript
const customTheme = {
  bg:        '#ffffff',   // white
  text:      '#000000',   // black
  accent:    '#ff0000',   // red
  dim:       '#cccccc',   // light gray
  highlight: '#0000ff',   // blue
};

const buf = await renderAsciiImage(asciiText, {
  theme: customTheme,
  fontSize: 12,
});
```

### High-Resolution Output

```javascript
// 3x scale for print or large displays
const buf = await renderAsciiImage(asciiText, {
  theme: 'editorial',
  fontSize: 14,
  scale: 3,  // 3x pixels
});
```

### Batch Processing

```javascript
const sections = [
  { text: act1Ascii, theme: 'default', name: 'act1.png' },
  { text: act2Ascii, theme: 'default', name: 'act2.png' },
];

for (const section of sections) {
  await renderAsciiFile(section.text, {
    theme: section.theme,
    outPath: `/tmp/${section.name}`,
  });
}
```

---

## Telegram Integration

### Via Message Tool (Base64)

```javascript
const { renderAsciiImage } = require('./utils/ascii-render');

async function sendTelegramPNG(asciiText) {
  const buffer = await renderAsciiImage(asciiText, { theme: 'default' });
  const base64 = buffer.toString('base64');
  
  // Use with Telegram message tool:
  // message(..., { media: { photo: base64 } })
  return base64;
}
```

### Via Telegram Bot API (Direct)

```javascript
const { sendAsciiPng } = require('./utils/telegram-png-sender');

// Send directly to Telegram
await sendAsciiPng(asciiText, botToken, chatId, {
  theme: 'editorial',
  caption: 'Daily Issue Preview',
});
```

---

## Testing

Run the full test suite:

```bash
node utils/test-png-render.js
```

This renders 3 test images with different themes and saves them to `/tmp/`:
- dbb-test-masthead-(default-theme).png
- dbb-test-masthead-(editorial-theme).png
- dbb-test-sample-ascii-(midnight-theme).png

---

## Technical Details

### SVG Rendering

1. ASCII text split into lines
2. Each character becomes an SVG `<tspan>` with individual x, y, fill color
3. Monospace character width calculated: `fontSize * 0.601`
4. Line height: `fontSize * 1.5`
5. Padding: `fontSize * 1.2` on all sides

### PNG Conversion

- SVG string → Buffer
- Sharp uses cairo for rendering
- Compression level: 9 (maximum)
- Output: PNG (8-bit RGB or RGBA)

### Character Encoding

- Regular ASCII: unchanged
- Non-breaking spaces: ` ` (preserved in monospace)
- Unicode blocks/braille: full UTF-8 support

---

## Size Reference

Typical PNG sizes for Act 1 preview (11 ASCII pieces, ~600 chars total):

| Theme | Size (bytes) | Notes |
|-------|--------------|-------|
| default | 12–15 KB | ~80% of file is PNG metadata |
| midnight | 12–15 KB | Similar compression |
| editorial | 12–15 KB | White bg slightly more compressible |

Telegram accepts photos up to 20 MB, so PNG rendering is not a bottleneck.

---

## Troubleshooting

**Sharp not found:** `npm install sharp` (already in package.json)

**Cairo missing:** Sharp includes prebuilt cairo. If unavailable:
- Linux: `apt-get install libcairo2-dev`
- macOS: Should be included via Homebrew

**PNG too large:** Reduce scale or fontSize:
```javascript
// Smaller output
{ fontSize: 12, scale: 1 }
```

**Theme colors not right:** Ensure hex color format is `#RRGGBB`:
```javascript
// Correct
{ bg: '#0a0a0a', text: '#e8e8e0' }

// Wrong
{ bg: '10, 10, 10', text: 'off-white' }
```

---

## Files

- `utils/ascii-render.js` — Core rendering engine
- `utils/telegram-png-sender.js` — Telegram API integration
- `utils/render-and-send-ascii.js` — CLI utility
- `utils/test-png-render.js` — Test suite

---

## Future

- [ ] Dynamic theme generation from color palettes
- [ ] Telegram media group support (combine multiple PNGs)
- [ ] Web platform PNG display with archive
- [ ] Quality presets (print, screen, mobile)

---

## See Also

- **SHADER-SYSTEM.md** — Image filtering (distinct from PNG rendering)
- **BULLETIN-BOT.md** — Telegram bot configuration
- **ASCII-VISUAL-DNA.md** — ASCII art specifications
