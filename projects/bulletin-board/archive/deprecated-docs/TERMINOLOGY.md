# Terminology Reference — Design By Bulletin™

**Last Updated:** 2026-05-08

---

## Primary Terms

### Issue
**Definition:** A complete Design By Bulletin™ publication unit (e.g., Issue 017).

**Usage:**
- "Publish Issue 017"
- "Issue 017: Discovery"
- "Create an Issue"
- Primary reference for the whole thing

### Art
**Definition:** ASCII visual files for an Issue.

**Usage:**
- "Write the art for Section 1"
- "The art file is named 01-SECTION-ART.txt"
- "Art files contain no backticks"

**File type:** `NN-SECTION-ART.txt`

### Copy
**Definition:** Written content (markdown) files for an Issue.

**Usage:**
- "Write the copy for Section 1"
- "The copy file is named 01-SECTION-COPY.md"
- "Copy files have no escaping"

**File type:** `NN-SECTION-COPY.md`

### Section
**Definition:** One paired unit of art and copy.

**Usage:**
- "Section 1 has art and copy"
- "Create all 11 sections"
- "Section numbering is 01–11"

**Structure:** `NN-SECTION-ART.txt` + `NN-SECTION-COPY.md`

---

## Process Terms

### Publishing
**Definition:** Sending an Issue to Telegram subscribers via Bulletin Bot.

**Usage:**
- "Publish Issue 017"
- "Ready to publish"
- "Publishing takes 7 messages (cover + sections + footer)"

### Validation
**Definition:** Checking Issue structure with validator.py before publishing.

**Usage:**
- "Run validation on Issue 017"
- "Validation passed ✅"
- "Fix validation errors"

**Command:** `python validator.py issues/017`

### Rendering
**Definition:** Converting raw art/copy files to Telegram MarkdownV2 format.

**Usage:**
- "Bot applies rendering to the Issue"
- "Rendering adds backticks to art files"
- "Rendering escapes copy files for MarkdownV2"

---

## Old vs. New Terminology

| Old | New | Context |
|-----|-----|---------|
| ACT 1 | ART | File type, section visual |
| ACT 2 | COPY | File type, written content |
| Prose | Copy | Written content |
| manifest.json | (removed) | No longer used |
| act-1/ | (removed) | No longer used |
| act-2/ | (removed) | No longer used |

---

## File Naming Convention

```
issues/[number]/
├── 00-COVER-ART.txt              ← Always named this way
├── NN-SECTION-ART.txt            ← Art for section NN
├── NN-SECTION-COPY.md            ← Copy for section NN
└── [last+1]-METADATA-FOOTER.txt  ← Numbered after last section
```

**Key points:**
- Cover: Always `00-COVER-ART.txt`
- Sections: `01`, `02`, `03`, ... up to N
- Footer: `[N+1]-METADATA-FOOTER.txt`
- Art files: `.txt` extension
- Copy files: `.md` extension

---

## Structural Terms

### Cover Art
**Definition:** The opening visual for an Issue (logo + masthead + theme visual).

**File:** `00-COVER-ART.txt`

**Contains:**
- DBB logo (text art)
- Design By Bulletin™ masthead
- Issue number
- Theme name
- Publication date
- Theme-specific visual

### Metadata Footer
**Definition:** Closing visual with quote summarizing the Issue.

**File:** `[N+1]-METADATA-FOOTER.txt`

**Contains:**
- DBB logo (text art)
- Design By Bulletin™ masthead
- Issue number
- Theme name
- Publication date
- Closing quote (1 powerful sentence)

---

## Agent Terms

### Managing Editor Creates
- Art files (`NN-SECTION-ART.txt`)
- Copy files (`NN-SECTION-COPY.md`)
- Cover art (`00-COVER-ART.txt`)
- Metadata footer (`NN-METADATA-FOOTER.txt`)

**Deliverable:** An Issue with complete art and copy for all sections

### Editorial Director Validates
- Runs `python validator.py issues/[number]`
- Checks structure (all sections present, no formatting errors)
- Previews with `/admin-preview [number]`
- Approves for publishing

**Deliverable:** ✅ VALID Issue ready for Bot

### Bulletin Bot Publishes
- Reads raw art/copy files
- Applies code blocks to art
- Escapes copy for MarkdownV2
- Sends 7 Telegram messages (cover + sections + footer)

**Deliverable:** Issue published to subscribers on Telegram

---

## Common Phrases

| Phrase | Meaning |
|--------|---------|
| "Create Issue 017" | Write all art and copy for the Issue |
| "Validate Issue 017" | Run validator.py and check for errors |
| "Publish Issue 017" | Send to Telegram subscribers |
| "The art for Section 1" | The ASCII visual in `01-SECTION-ART.txt` |
| "The copy for Section 1" | The markdown text in `01-SECTION-COPY.md` |
| "Issue is ✅ VALID" | All sections present, no backticks, no escaping |
| "Issue is ❌ INVALID" | Validation found errors (backticks, missing files, etc.) |

---

## When to Use Which Term

**Talking to users/subscribers:**
- "Read Issue 017"
- "Issue 017: Discovery"
- "New Issue published"

**Talking to agents:**
- "Write the art and copy for Section 5"
- "Create Issue 017"
- "All sections ready? Let's validate"

**Talking about workflow:**
- "Curator → Assignment → Managing (creates Issue) → Editorial (validates) → Bot (publishes)"

**Technical documentation:**
- Art file: `NN-SECTION-ART.txt`
- Copy file: `NN-SECTION-COPY.md`
- Validation: `python validator.py issues/[number]`

---

## Summary

**You never say:** ACT 1, ACT 2, prose, manifest, nested folders

**You say:** Issue, art, copy, section, publish, validate, cover, footer

**Primary reference:** "Issue 017" (encompasses all art, copy, and metadata)
