# ASCII Art Asset Guide — Quick Reference

**Master location:** `/Users/blackmachete/projects/patched-editorial/projects/bulletin-board/ascii-art-library/`

---

## Directory Structure

```
ascii-art-library/
├── 001/ through 010/
│   ├── source/     (11 original ASCII files per issue)
│   ├── expanded/   (11 centered hero versions per issue)
│   └── compact/    (22 left/right variations per issue)
├── README.md
└── VARIATION-EXAMPLES.md
```

---

## Finding Assets

### By Issue + Section

**Original art (Issue 6, Art section):**
```bash
cat ascii-art-library/006/source/issue-006-art-neon.txt
```

**Hero display (Issue 10, Painting section):**
```bash
cat ascii-art-library/010/expanded/issue-010-painting-expanded-neon.txt
```

**Compact layout (Issue 7, Culture section, left-aligned):**
```bash
cat ascii-art-library/007/compact/issue-007-culture-compact-left-neon.txt
```

### All sections for an issue

**All Issue 006 hero versions:**
```bash
ls ascii-art-library/006/expanded/
```

**All Issue 009 original files:**
```bash
ls ascii-art-library/009/source/
```

### All sections with same name

**All "Art" sections across issues:**
```bash
find ascii-art-library -name "*-art-*.txt"
```

**All compact versions:**
```bash
find ascii-art-library -path "*/compact/*" -name "*.txt"
```

---

## File Naming Convention

```
issue-[NNN]-[SECTION]-[VARIATION]-neon.txt
```

**Components:**
- `[NNN]` — Issue number (001-010, zero-padded)
- `[SECTION]` — Section name (art, painting, culture, etc.)
- `[VARIATION]` — Layout type:
  - (none) — Original source file
  - `-expanded` — Hero centered version
  - `-compact-left` — Compact with text right
  - `-compact-right` — Compact with text left

**Examples:**
- `issue-001-art-neon.txt` → Original, Issue 1, Art
- `issue-006-painting-expanded-neon.txt` → Hero, Issue 6, Painting
- `issue-010-culture-compact-left-neon.txt` → Compact-left, Issue 10, Culture

---

## Sections (11 per issue)

1. art
2. painting
3. illustration
4. sculpture
5. culture
6. photography
7. art-history
8. opinions
9. design-tools
10. product-process
11. visual-brand

---

## Variation Types

### Source (Original)
- **Lines:** Variable (5-13 lines)
- **Width:** 40-50 characters
- **Centered:** No (original alignment)
- **Use:** Reference, minimal layouts, embedded text

**Location:** `NNN/source/issue-NNN-[section]-neon.txt`

### Expanded (Hero)
- **Lines:** 14 (padded to fixed height)
- **Width:** 80 characters
- **Centered:** Yes (strong visual presence)
- **Use:** Featured display, gallery, hero sections, Telegram code blocks

**Location:** `NNN/expanded/issue-NNN-[section]-expanded-neon.txt`

### Compact-Left
- **Lines:** 9 (compact height)
- **Format:** ASCII left | **Section Name** right
- **Width:** 80+ characters
- **Use:** Left-to-right flow, alternating layouts, mobile

**Location:** `NNN/compact/issue-NNN-[section]-compact-left-neon.txt`

### Compact-Right
- **Lines:** 9 (compact height)
- **Format:** **Section Name** left | ASCII right
- **Width:** 80+ characters
- **Use:** Right-balance, mirror layouts, sidebars

**Location:** `NNN/compact/issue-NNN-[section]-compact-right-neon.txt`

---

## Usage in Bot Commands

### `/preview` or `/act 1`
**Fetch:** All 11 sections from `expanded/` for hero display
```bash
# Get all Issue 006 hero ASCII for preview
ls ascii-art-library/006/expanded/issue-006-*.txt
```

### `/digest` or `/today`
**Fetch:** All 11 sections from `expanded/` for visual preview
**Plus:** ACT 2 prose sections from ISSUE-*.md files

### Gallery feature (future)
**Fetch:** Issue-based browsing from `compact/` or `expanded/`
```bash
# User selects Issue 7, gets all 11 cultural sections
ls ascii-art-library/007/expanded/
```

---

## Integration Points

- **Bot AGENTS.md:** References this location in file locations section
- **BOT-COMPONENTS.md:** Complete specification of Component 2
- **VARIATION-EXAMPLES.md:** Visual examples for design reference
- **README.md:** Organization guide and quick lookup table

---

## Asset Statistics

| Category | Count |
|----------|-------|
| Issues | 10 |
| Sections per issue | 11 |
| Source files per issue | 11 |
| Expanded files per issue | 11 |
| Compact files per issue | 22 (11 left + 11 right) |
| **Files per issue** | **44** |
| **Total files** | **440** |

---

**Last updated:** 2026-05-07  
**Status:** Complete and ready for integration
