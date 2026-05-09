# ASCII Art Asset Extraction Guide

Extract individual ASCII art pieces from issues for use as standalone layout objects.

---

## Why Separate ASCII Art Objects?

Currently, each issue's ACT 1 contains all 11 ASCII sections combined. For layout design, you need:
- **Individual pieces** — One per section (11 per issue)
- **Consistent dimensions** — Fixed width monospace rendering
- **Standalone delivery** — Not dependent on issue context

---

## How to Extract ASCII as Individual Assets

### Method 1: Direct File Access

Each ASCII piece exists as a standalone `.txt` file:

```bash
projects/bulletin-board/ascii-art-library/issue-[#]-[section]-neon.txt
```

Example structure:
```
ascii-art-library/
├── issue-007-art-neon.txt              → Section 1, Issue 007
├── issue-007-painting-neon.txt         → Section 2, Issue 007
├── issue-007-illustration-neon.txt     → Section 3, Issue 007
├── issue-007-sculpture-neon.txt        → Section 4, Issue 007
├── issue-007-culture-neon.txt          → Section 5, Issue 007
├── issue-007-photography-neon.txt      → Section 6, Issue 007
├── issue-007-art-history-neon.txt      → Section 7, Issue 007
├── issue-007-opinions-neon.txt         → Section 8, Issue 007
├── issue-007-design-tools-neon.txt     → Section 9, Issue 007
├── issue-007-product-process-neon.txt  → Section 10, Issue 007
└── issue-007-visual-brand-neon.txt     → Section 11, Issue 007
```

### Method 2: Markdown Extraction

Extract from issue markdown using section headers:

```markdown
# From ISSUE-007-interval-complete.md

### Section 1 — Art
```
[ASCII piece]
```

### Section 2 — Painting
```
[ASCII piece]
```
```

Each `### Section X` block contains one standalone piece.

---

## Asset Properties

### Dimensions
- **Width:** ~40-50 characters (consistent monospace)
- **Height:** 15 lines (padded for consistent aspect ratio)
- **Aspect Ratio:** Approx 1:3 (wider than tall)
- **Format:** Pure ASCII text, UTF-8 encoded

### File Naming
```
issue-[ISSUE#]-[SECTION-NAME]-neon.txt
```

Examples:
- `issue-007-art-neon.txt`
- `issue-007-painting-neon.txt`
- `issue-001-culture-neon.txt`

### Sections (11 per issue)
1. Art
2. Painting
3. Illustration
4. Sculpture
5. Culture
6. Photography
7. Art History (art-history)
8. Opinions
9. Design & AI Tools (design-tools)
10. Product & Process (product-process)
11. Visual & Brand (visual-brand)

---

## Usage Examples

### As Telegram Inline Asset
```
User: /ascii 007 1
Bot: 
"""
[Displays Section 1 ASCII from Issue 007]
"""
```

### As Layout Component
```html
<div class="ascii-asset issue-007-section-1">
  <pre>[content of issue-007-art-neon.txt]</pre>
</div>
```

### In Design Documents
```markdown
## Issue 007 Visual Grid

[Section 1 - Art]
```
[ASCII from issue-007-art-neon.txt]
```

[Section 2 - Painting]
```
[ASCII from issue-007-painting-neon.txt]
```
```

---

## CSS for Layout Display

```css
/* ASCII Asset Container */
.ascii-asset {
  font-family: 'Courier New', monospace;
  font-size: 12px;
  line-height: 1.4;
  white-space: pre;
  overflow-x: auto;
  background: #f5f5f5;
  border: 1px solid #ddd;
  padding: 12px;
  max-width: 500px;
  aspect-ratio: auto 50 / 15;  /* Approximate aspect ratio */
}

/* Grid of 11 sections per issue */
.ascii-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
}

.ascii-grid .ascii-asset {
  max-width: 100%;
}
```

---

## Current Issue Availability

| Issue | Theme | Files | Status |
|-------|-------|-------|--------|
| 001 | Presence | 11 | ✅ Ready |
| 002 | The Mark | 11 | ✅ Ready |
| 003 | Handmade | 11 | ✅ Ready |
| 004 | Traces | 11 | ✅ Ready |
| 005 | Signal | 11 | ✅ Ready |
| 006 | Momentum | 11 | ✅ Ready |
| 007 | Interval | 11 | ✅ Ready |
| 008 | Threshold | 11 | ✅ Ready |
| 009 | Material | 11 | ✅ Ready |
| 010 | Worn | 11 | ✅ Ready |

**Total: 110 ASCII art assets available**

---

## Bot Command Suggestion

Add these commands to bot for asset extraction:

```
/ascii [issue] [section]     → Individual ASCII piece
/ascii [issue] full          → All 11 sections (grid)
/ascii [issue] gallery       → Visual gallery of all 11
/ascii list                  → All available assets
```

Example:
```
/ascii 007 1        → Returns: issue-007-art-neon.txt
/ascii 007 2        → Returns: issue-007-painting-neon.txt
/ascii 007 full     → Returns: All 11 sections as grid
```

---

## Layout Gallery Concept

**Planned Feature:** Slideshow gallery where users can browse ASCII art independently from editorial content.

```
Design By Bulletin™ — ASCII Gallery

Issue 007: Interval

[Grid of 11 ASCII pieces]

← Prev | Issue Selector | Next →

Section 1: Art
[ASCII]
Rate | Save | Share
```

---

## Storage Structure

```
projects/bulletin-board/
├── ISSUE-[#]-[theme]-complete.md     [Full issue: ACT 1 + ACT 2]
│                                      (contains all 11 sections combined)
│
└── ascii-art-library/
    ├── issue-[#]-[section]-neon.txt   [Individual assets]
    ├── issue-[#]-[section]-neon.txt   (one file per section)
    └── ...                             (11 files per issue)
```

The same ASCII content exists in **two forms**:
1. **Combined in issue markdown** — for reading ACT 1 as one visual preview
2. **Individual .txt files** — for extraction and layout use

---

## Why the Codeblock Merging Happens

When the bot delivers `/preview` or `/digest`, it combines all 11 sections into the ACT 1 view. This is intentional for reading flow, but the **individual files remain separate** in the asset library.

**For layout use:** Reference the `.txt` files directly, not the combined markdown.

---

## Next Steps

1. **Bot Enhancement:** Add `/ascii` commands to extract individual pieces
2. **Gallery Feature:** Create slideshow viewer for ASCII browsing
3. **Layout Integration:** Use individual assets in design templates
4. **Asset Versioning:** Track ASCII variants (color, themed, etc.)

---

**Last Updated:** 2026-05-07
**Total Assets:** 110 ASCII pieces across 10 issues
**Format:** Pure text UTF-8, monospace optimized
