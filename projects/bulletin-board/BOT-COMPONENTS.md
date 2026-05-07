# Design By Bulletin™ — Bot Components System

## Component 1: Hero Cover Template

The hero cover is the branded opening of every issue. It appears at the top of ACT 1 (Visual Preview).

### Template Structure

```
██████╗ ██████╗ ██████╗ ™
██╔══██╗██╔══██╗██╔══██╗
██║  ██║██████╔╝██████╔╝
██║  ██║██╔══██╗██╔══██╗
██████╔╝██████╔╝██████╔╝
╚═════╝ ╚═════╝ ╚═════╝

Design By Bulletin™
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Issue [NUMBER]
[THEME NAME]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[PUBLICATION DATE]
```

### Component Breakdown

| Part | Content | Fixed | Variable |
|------|---------|-------|----------|
| **Logo** | `██████╗ ██████╗ ██████╗ ™` | ✅ Fixed | — |
| **Logo Lines 2-6** | Box drawing characters | ✅ Fixed | — |
| **Masthead** | `Design By Bulletin™` | ✅ Fixed | — |
| **Top Divider** | `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━` | ✅ Fixed | — |
| **Issue Number** | `Issue 006` | ❌ Variable | Changes per issue |
| **Theme Name** | `Momentum` | ❌ Variable | Changes per issue |
| **Bottom Divider** | `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━` | ✅ Fixed | — |
| **Publication Date** | `May 9, 2026` | ❌ Variable | Changes per issue |

### Usage Rules

1. **Always include the hero cover** at the start of ACT 1
2. **Comes before all section ASCII art** (sections 1-11)
3. **Must be inside code block** when sent to Telegram (for monospace rendering)
4. **Logo and dividers are identical** across all issues — never change them
5. **Only update:** Issue number, theme name, and publication date

### Example Variations

**Issue 001 — Presence (May 5, 2026):**
```
██████╗ ██████╗ ██████╗ ™
██╔══██╗██╔══██╗██╔══██╗
██║  ██║██████╔╝██████╔╝
██║  ██║██╔══██╗██╔══██╗
██████╔╝██████╔╝██████╔╝
╚═════╝ ╚═════╝ ╚═════╝

Design By Bulletin™
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Issue 001
Presence
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
May 5, 2026
```

**Issue 010 — Worn (May 12, 2026):**
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
Worn
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
May 12, 2026
```

### Font Requirements

- **Font:** Monospace (Courier, Courier New, or equivalent)
- **Size:** Standard terminal/code block size
- **Rendering:** Telegram code blocks preserve alignment automatically
- **Width:** ~38 characters (optimized for Telegram mobile + desktop)

### Bot Delivery

**In `/preview` command:** Hero cover is first thing in code block
**In `/digest` command:** Hero cover is first thing in code block
**Wrapping:** Always inside triple backticks (```)

### Current Implementation

- ✅ All 10 issues (001-010) use standardized hero template
- ✅ Consistent branding across all deliveries
- ✅ Logo and dividers never change
- ✅ Only metadata (issue #, theme, date) updates per issue

### File Locations

Hero template appears in each issue file:
- `/projects/bulletin-board/ISSUE-[#]-[theme]-complete.md`
- Located immediately after `## ACT 1 — VISUAL PREVIEW` header
- Lines 9-23 (approximately)

---

## Next Components

(To be documented)
- Component 2: Section ASCII Art (11 per issue)
- Component 3: Editorial Grid (ACT 2 sections)
- Component 4: Closing Sentence
- Component 5: Metadata Footer

---

**Status:** Component 1 documented and consistent across all 10 issues
**Date Created:** 2026-05-07
**Last Updated:** 2026-05-07
