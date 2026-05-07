# Design By Bulletin™ — Official Cover Template

## Purpose
Standard cover format for all Design By Bulletin™ issues. Combines the official logo, magazine name, and issue metadata in a centered, elegant layout.

## Template File
**Location:** `COVER-TEMPLATE.txt`

**Variables:**
- `{ISSUE_NUMBER}` — e.g., `010`
- `{ISSUE_NAME}` — e.g., `Aperture — Opening, Revealing, Closing`
- `{MONTH}` — e.g., `May`
- `{DAY}` — e.g., `7`
- `{YEAR}` — e.g., `2026`

## How to Use

### Step 1: Copy the template
```bash
cp COVER-TEMPLATE.txt ISSUE-XXX-THEME-cover.txt
```

### Step 2: Replace variables
Open the new file and substitute:
- `{ISSUE_NUMBER}` with the issue number (e.g., `010`)
- `{ISSUE_NAME}` with the full theme line (e.g., `Aperture — Opening, Revealing, Closing`)
- `{MONTH}` with the month name (e.g., `May`)
- `{DAY}` with the day (e.g., `7`)
- `{YEAR}` with the year (e.g., `2026`)

### Step 3: Save with issue naming convention
Files should follow: `ISSUE-NNN-THEME-cover.txt` or embed in the main issue file.

---

## Examples

### Issue 010 — Aperture
```
██████╗ ██████╗ ██████╗ ™
██╔══██╗██╔══██╗██╔══██╗
██║  ██║██████╔╝██████╔╝
██║  ██║██╔══██╗██╔══██╗
██████╔╝██████╔╝██████╔╝
╚═════╝ ╚═════╝ ╚═════╝
Design By Bulletin™
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Issue 010
Aperture — Opening, Revealing, Closing
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
May 7, 2026
```

### Issue 009 — Material
```
██████╗ ██████╗ ██████╗ ™
██╔══██╗██╔══██╗██╔══██╗
██║  ██║██████╔╝██████╔╝
██║  ██║██╔══██╗██╔══██╗
██████╔╝██████╔╝██████╔╝
╚═════╝ ╚═════╝ ╚═════╝
Design By Bulletin™
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Issue 009
Material
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
May 7, 2026
```

### Issue 008 — Threshold
```
██████╗ ██████╗ ██████╗ ™
██╔══██╗██╔══██╗██╔══██╗
██║  ██║██████╔╝██████╔╝
██║  ██║██╔══██╗██╔══██╗
██████╔╝██████╔╝██████╔╝
╚═════╝ ╚═════╝ ╚═════╝
Design By Bulletin™
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Issue 008
Threshold
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
May 7, 2026
```

---

## Design Notes

### Logo (DDP)
- Official Design By Bulletin monogram in ASCII box-drawing
- Always rendered at full width as shown
- Trademark symbol (™) integrated on first line

### Dividers
- Heavy horizontal rules (`━`) separate sections
- Creates visual hierarchy: Logo → Title → Issue Info
- Width matches logo for visual balance

### Typography
- Magazine name: `Design By Bulletin™` (always exact)
- Issue number and name on separate lines for hierarchy
- Publication date: bottom right, single line
- Font: Monospace (code blocks in all contexts)

### Spacing
- Dividers directly follow sections (no blank lines)
- Tight layout creates visual cohesion and emphasis
- Logo separated by one blank line for breathing room

---

## Telegram Bot Integration

The bot's `/start` and `digest` commands display covers using this template.
Stored in: `/projects/bulletin-board/` alongside issue files for bot access.

When displayed in Telegram:
- Wrap entire cover in triple backticks for code block: ` ```...``` `
- Preserves monospace formatting and ASCII rendering
- Ensures alignment across devices

---

**Template Version:** 1.0  
**Created:** May 7, 2026  
**Status:** Official standard
