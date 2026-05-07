# ASCII Art Standards — Design By Bulletin™

## Core Principle: Uniform Width Alignment

When an issue contains **multiple ASCII art codeblocks** (e.g., visual sections, illustrations, diagrams), all blocks in that collection must have the **same width** for consistent Telegram UI rendering.

**Rule:** Width = maximum width of any block in the collection + padding

---

## Why This Matters

### The Problem
ASCII art blocks with inconsistent widths create jagged edges in Telegram:
```
╔════════════════════════════════════════════════════════╗  (50 chars)
║  Block 1                                               ║
╚════════════════════════════════════════════════════════╝

╔═══════════════════════════════════════════════════════════════════╗  (70 chars)
║  Block 2 — much wider, breaks alignment                          ║
╚═══════════════════════════════════════════════════════════════════╝

╔═══════════════════════════════════════════════════════════════════╗  (70 chars)
║  Block 3 — now right-aligned correctly                           ║
╚═══════════════════════════════════════════════════════════════════╝
```

Telegram's monospace rendering makes the alignment inconsistent and hard to read.

### The Solution
All blocks the same width = flush alignment in Telegram:
```
╔═════════════════════════════════════════════════════════════════════════╗  (80 chars)
║  Block 1                                                                  ║
╚═════════════════════════════════════════════════════════════════════════╝

╔═════════════════════════════════════════════════════════════════════════╗  (80 chars)
║  Block 2 — now aligned                                                   ║
╚═════════════════════════════════════════════════════════════════════════╝

╔═════════════════════════════════════════════════════════════════════════╗  (80 chars)
║  Block 3 — consistent flush                                              ║
╚═════════════════════════════════════════════════════════════════════════╝
```

---

## Process

### Step 1: Identify All Blocks in Collection
Count all ASCII art sections/blocks in the issue.

**Example:** Issue 010 has 11 visual blocks (Sections 1–11)

### Step 2: Find Maximum Width
Measure the character width of each block (including borders, padding, content).

```
Section 1 (Canvas on Easel):        32 chars wide
Section 2 (Nested Boxes):           44 chars wide
Section 3 (Two Column):             50 chars wide  ← MAXIMUM
Section 4 (Typographic):            36 chars wide
Section 5 (Full Spread):            48 chars wide
... (repeat for all sections)
```

**Maximum width: 50 characters**

### Step 3: Apply Uniform Width
Resize/pad all blocks to match the maximum width:
- Shorter blocks: add right-padding
- Centered content: add equal padding left & right
- Bordered blocks: expand frame to new width
- Text lines: pad with spaces to match width

### Step 4: Verify Alignment
Test in Telegram code block to confirm flush rendering:
```
```
[paste all blocks here in code block]
```
```

All blocks should have clean left and right edges, no ragging.

---

## Common Patterns

### Pattern 1: Box-Drawing Borders
When blocks use `┌─┐`, `│`, `└─┘` borders:

**Before (inconsistent widths):**
```
┌────────────────────┐
│ 30 char wide       │
└────────────────────┘

┌──────────────────────────────┐
│ 40 char wide                 │
└──────────────────────────────┘
```

**After (uniform 40 chars):**
```
┌──────────────────────────────┐
│ 30 char, padded to 40        │
└──────────────────────────────┘

┌──────────────────────────────┐
│ 40 char wide                 │
└──────────────────────────────┘
```

### Pattern 2: Full-Width Blocks
Blocks designed to span entire width:

**Before:**
```
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  (38 chars)
░  Content area                     ░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░

╭─────────────────────────────────────────╮  (50 chars)
│ Wider content area                      │
╰─────────────────────────────────────────╯
```

**After (uniform 50 chars):**
```
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  (50 chars)
░  Content area                                    ░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░

╭─────────────────────────────────────────────────╮  (50 chars)
│ Wider content area                              │
╰─────────────────────────────────────────────────╯
```

### Pattern 3: Two-Column Blocks
Side-by-side layouts must be measured together:

**Before:**
```
╭──────────────╮ ╭───────────────╮
│ Left: 16ch   │ │ Right: 17ch   │
╰──────────────╯ ╰───────────────╯

(Total: 34 chars with space)
```

**After (if this is max):**
```
╭──────────────╮ ╭───────────────╮
│ Left: 16ch   │ │ Right: 17ch   │
╰──────────────╯ ╰───────────────╯

(Keep at 34 chars; ensure all other blocks pad to 34)
```

---

## Tools & Validation

### Measuring Width
In most editors: Enable ruler or use a monospace font with character counter.

**Command-line check:**
```bash
# Get max width of all blocks
cat ISSUE-010-*.txt | grep -E '^[^A-Z]' | awk '{print length}' | sort -n | tail -1
```

### Visual Testing
Telegram rendering test:
1. Copy entire issue to a Telegram code block
2. Check that all ASCII sections have clean edges (no ragging)
3. All left borders align vertically
4. All right borders align vertically

---

## Examples from Issues

### Issue 010 — Aperture
All 11 sections standardized to **42 characters** wide for clean Telegram display.

### Issue 008 — Threshold
All visual blocks (Art, Painting, Illustration, etc.) aligned to **48 characters** wide.

### Issue 007 — Interval
Braille halftone and text blocks padded to **55 characters** for full-spread effect.

---

## Implementation Checklist

When creating or editing ASCII art for an issue:

- [ ] Identify all ASCII blocks in the collection
- [ ] Measure each block's character width
- [ ] Determine maximum width
- [ ] Resize/pad all blocks to max width
- [ ] Verify consistent left alignment
- [ ] Verify consistent right alignment
- [ ] Test in Telegram code block
- [ ] Confirm no character overflow or ragging

---

## Future Issues

Apply these standards to all future issues:
- Multi-section visual presentations (Act 1, visual previews)
- Comparative layouts
- Gallery-style compositions
- Any collection of related ASCII blocks

**Telegram-first design:** ASCII art standards exist to ensure clean, professional rendering in the primary distribution channel.

---

**Standard Version:** 1.0  
**Created:** 2026-05-07  
**Status:** Official guideline for all issues
