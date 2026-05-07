<style>
body, code, pre, p, h1, h2, h3, h4, h5, h6, li, table {
  font-family: 'Courier New', Courier, monospace;
}
</style>

# Tools — Design By Bulletin™

Production scripts and utilities for creating and delivering issues.

---

## ASCII Cover Generation

### ascii-cover-generator.html
**Browser-based interactive tool**

Convert images to styled ASCII art covers with real-time preview and color sampling.

**Usage:**
1. Open in browser: `file:///Users/blackmachete/projects/bulletin-board/covers/ascii-cover-generator.html`
2. Upload source image (Midjourney, p5.js, screenshot, etc.)
3. Adjust settings:
   - Resolution: ULTRA_LOW (32×32) → HIGH (80×60)
   - Charset: MINIMAL, LOW, MEDIUM, BOLD
   - Font Size: 8px → 32px
4. Click "Convert to ASCII"
5. Preview shows colored ASCII art (colors sampled from source)
6. Click "Download as PNG" to save as cover

**Settings guide:**
- **Low resolution (ULTRA_LOW/LOW):** Simple, bold, abstract
- **High resolution (MEDIUM/HIGH):** Detailed, intricate, nuanced
- **Font size:** Larger fonts auto-scale ASCII resolution to maintain detail
- **Character set:** BOLD for maximum detail, MINIMAL for bold simplicity

**Output:** PNG file with styled ASCII art

---

### export-ascii-cover.js
**CLI script for automated cover generation**

Convert source images to ASCII PNG covers with standardized settings.

**Usage:**
```bash
node export-ascii-cover.js <input-image> [output-filename] [font-size]

# Examples:
node export-ascii-cover.js covers/momentum-006-midjourney.png
node export-ascii-cover.js covers/momentum-006-midjourney.png momentum-006-cover.png 20
```

**Parameters:**
- `input-image` (required): Path to source image file
- `output-filename` (optional): Custom output name (default: `momentum-006-cover.png`)
- `font-size` (optional): 8–32px (default: 12px)

**Auto-scaling:**
- Font size automatically scales ASCII resolution to maintain detail
- 12px = 80×60 characters
- 20px = 120×90 characters
- 32px = 160×120 characters

**Output settings:**
- Resolution: HIGH (80×60 base)
- Charset: MEDIUM
- Color saturation: 1.3x (brightened)
- Background: Black (#0a0a0a)
- Font: Courier New, monospace

---

## Issue Delivery

### finalize-issue-006-delivery.js
**Complete issue delivery to Telegram**

Send full issue to Telegram: cover image + pure text + theme metadata.

**Usage:**
```bash
node finalize-issue-006-delivery.js
```

**Delivery sequence:**
1. Opening banner (text message)
2. ASCII cover image (photo)
3. Pure text issue split into 3 messages (due to Telegram 4096 char limit)
4. Theme & editorial mix (closing message)

**Total messages:** 6

**Requirements:**
- `covers/momentum-006-cover.png` (existing ASCII cover)
- `ISSUE-006-momentum-neon.txt` (pure text issue)
- Valid Telegram bot token and chat ID

---

### send-issue-text-only.js
**Text-only delivery**

Send pure text issue content to Telegram without cover image or renders.

**Usage:**
```bash
node send-issue-text-only.js
```

**Delivery:**
- Opening banner
- Pure text issue (all 11 sections)
- Theme & closing

**Total messages:** 3

---

## Content Generation

### momentum-image-to-ascii-color.js
**Generate colored ASCII variants from PNG renders**

Convert PNG images to ASCII text files with ANSI 24-bit color codes.

**Usage:**
```bash
node momentum-image-to-ascii-color.js
```

**Input:** All `momentum-006-*.png` files in `/covers/` directory

**Output:**
- `.txt` files with ANSI color codes (one per PNG)
- Colors sampled from source image (each character gets RGB from corresponding pixel)
- Resolution: 42×15 characters (Telegram-safe width)
- Charset: BOLD

**Location:** `/covers/ascii-color/`

---

## Telegram Bot

**Bot Token:** `8662552111:AAHpfxCGoM6PGbEg4msbSm3bEE6Ucf5o1O0`

**Chat ID:** `7774590281` (Alfred)

**Methods:**
- `sendMessage()` — Plain text messages
- `sendPhoto()` — Image files with captions
- `sendDocument()` — Text files

**Constraints:**
- Max message length: 4096 characters
- Auto-split handled by scripts for text > 3500 chars
- Code block formatting required for ASCII preservation

---

## Issue 006 Momentum — Complete Workflow

### Step 1: Generate Cover
```bash
# Via browser:
open covers/ascii-cover-generator.html
# → Upload Midjourney image
# → Adjust settings (HIGH resolution, MEDIUM charset, 20px font recommended)
# → Download PNG

# Or via CLI:
node export-ascii-cover.js covers/momentum-006-midjourney.png momentum-006-cover.png 20
```

### Step 2: Prepare Pure Text Issue
- Create/finalize `ISSUE-006-momentum-neon.txt` with:
  - Act 1 visual notice
  - 11 sections (title, 1-sentence narrative, source link each)
  - Act 2 closing

### Step 3: Define Theme Metadata
- Editorial Mix: Music, Visual, Research, Process, Theme, AI Culture (percentages)
- Sonic Reference: BPM range, instruments, mood
- Cultural Thread: Key concepts, historical context

### Step 4: Deliver to Telegram
```bash
node finalize-issue-006-delivery.js
```

---

## Dependencies

All scripts require Node.js with:
- `sharp` — Image processing and SVG-to-PNG conversion
- `https` — Native Telegram API communication

**Install:**
```bash
npm install sharp
```

---

## File Structure

```
bulletin-board/
├── covers/
│   ├── ascii-cover-generator.html       [Interactive converter]
│   ├── momentum-006-cover.png           [Final ASCII cover PNG]
│   ├── momentum-006-midjourney.png      [Source Midjourney image]
│   └── ascii-color/                     [Colored ASCII variants]
│       └── momentum-006-*-ascii-color.txt
│
├── export-ascii-cover.js                [CLI cover generator]
├── finalize-issue-006-delivery.js       [Complete delivery script]
├── send-issue-text-only.js              [Text-only delivery]
├── momentum-image-to-ascii-color.js     [Colored ASCII generator]
│
├── ISSUE-006-momentum-neon.txt          [Pure text issue]
├── ISSUE-006-momentum-*.txt             [5 scheme variants]
│
└── DESIGN-BY-BULLETIN.md                [System overview]
```

---

## Notes

- All scripts use hardcoded paths — update if moving project directory
- Telegram bot credentials are in scripts — keep secure
- ASCII cover generator auto-scales resolution with font size (maintains detail)
- Color saturation is 1.3x boosted for visibility on dark backgrounds
