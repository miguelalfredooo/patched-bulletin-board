# Design By Bulletin™ — Deployment Guide

Quick reference for deploying new issues to the magazine and bot.

---

## Quick Deployment Workflow

### 1. Create New Issue (5 min)

```bash
# Create the issue markdown file
cat > projects/bulletin-board/ISSUE-[#]-[theme]-complete.md << 'EOF'
# Design By Bulletin™ — Issue [#]
## Theme: [Theme Name]
## Date: [Mon DD, YYYY]

---

## ACT 1 — VISUAL PREVIEW
[ASCII header + 11 section blocks]

---

## ACT 2 — FULL EDITION
[11 editorial sections with sources]

**CLOSING SENTENCE:**
"[Your closing sentence]"
EOF
```

### 2. Generate ASCII Art (2 min)

```bash
# Create 11 ASCII art files in ascii-art-library/
for i in {1..11}; do
  cat > projects/bulletin-board/ascii-art-library/issue-[#]-[section-name]-neon.txt << 'EOF'
[ASCII art content - 15+ lines]
EOF
done
```

### 3. Update Archive Log (2 min)

Edit `projects/bulletin-board/archive-log.md`:
- Add entry at top (newest first)
- Include all metadata fields
- Match closing sentence exactly from issue file

### 4. Verify Files (2 min)

```bash
# Check issue file exists
ls -l projects/bulletin-board/ISSUE-[#]-*.md

# Check ASCII files exist (should be 11)
ls projects/bulletin-board/ascii-art-library/issue-[#]-*.txt | wc -l

# Check archive log entry
grep "## Issue \[#\]" projects/bulletin-board/archive-log.md
```

### 5. Test Bot Access (2 min)

```bash
# Verify bot can read the file
cat projects/bulletin-board/ISSUE-[#]-*.md | head -30

# Verify ASCII art renders
cat projects/bulletin-board/ascii-art-library/issue-[#]-art-neon.txt
```

### 6. Commit & Deploy (1 min)

```bash
# Stage all files
git add projects/bulletin-board/ISSUE-[#]-*.md \
         projects/bulletin-board/ascii-art-library/issue-[#]-*.txt \
         projects/bulletin-board/archive-log.md

# Commit with clear message
git commit -m "Create Issue [#] — [Theme]"

# Verify on main branch
git log --oneline -1
```

---

## Validation Checklist (Quick)

Before deploying, run through these in 30 seconds:

- [ ] Issue file exists: `ISSUE-[#]-[theme]-complete.md`
- [ ] 11 ASCII files in `ascii-art-library/`: `issue-[#]-*.txt`
- [ ] Archive log has entry for Issue [#]
- [ ] Closing sentence matches between issue file and archive log
- [ ] Git commit is on `main` branch
- [ ] No syntax errors in markdown

---

## Common Files Reference

| File | Purpose | Example |
|------|---------|---------|
| `ISSUE-[#]-[theme]-complete.md` | Full issue (ACT 1 + ACT 2) | `ISSUE-007-interval-complete.md` |
| `issue-[#]-[section]-neon.txt` | ASCII art for one section | `issue-007-art-neon.txt` |
| `archive-log.md` | Issue metadata & history | Contains all issue summaries |
| `README.md` | Project overview | Issue table, quick reference |
| `ASCII-ART-CATALOG.md` | Visual asset inventory | Complete list of all ASCII files |

---

## Issue File Template

```markdown
# Design By Bulletin™ — Issue [#]
## Theme: [Theme Name]
## Date: [Month Day, Year]

---

## ACT 1 — VISUAL PREVIEW

[Hero cover with logo]

### Section 1 — Art
```
[ASCII art content]
```

### Section 2 — Painting
```
[ASCII art content]
```

[... continue for all 11 sections ...]

---

## ACT 2 — FULL EDITION

**Art — [Title]**
[Description of art section and cultural context]
*[Source: Citation]*

**Painting — [Title]**
[Description]
*[Source: Citation]*

[... continue for all 11 sections ...]

---

**CLOSING SENTENCE:**
"[Your one sentence that captures the theme]"

---

*Published: [Month Day, Year]*
*Theme: [Theme] — [One sentence summary]*
```

---

## Archive Log Template

```markdown
## Issue [#] — YYYY-MM-DD
- **THEME:** [Theme Name]
- **EDITORIAL MIX:** Music X%, Visual X%, Research X%, Process X%, Theme X%, AI Culture X%
- **SONIC REFERENCE:** [Artist/Genre — Year]: [description]
- **RENDERING:** Text-only markdown
- **CLOSING SENTENCE:** "[exact closing sentence]"
- **STATUS:** Published YYYY-MM-DD
- **CURATOR NOTE:** [editorial observation about this issue]
```

---

## Dependencies Checklist

Every issue **must have** these to work with the bot:

1. **Issue File** (`ISSUE-[#]-*.md`)
   - Located: `projects/bulletin-board/`
   - Content: Full ACT 1 + ACT 2
   - Bot reads: Yes

2. **ASCII Art Files** (11 total, `issue-[#]-*.txt`)
   - Located: `projects/bulletin-board/ascii-art-library/`
   - Naming: `issue-[#]-[section-name]-neon.txt`
   - Bot reads: Yes (for ACT 1 preview)

3. **Archive Log Entry** (in `archive-log.md`)
   - Located: `projects/bulletin-board/archive-log.md`
   - Info: Metadata, closing sentence, curator notes
   - Bot reads: Yes (for metadata)

4. **README Updates**
   - Located: `README.md` (root) + `projects/bulletin-board/README.md`
   - Updates: Issue table, issue count
   - Bot reads: No (human reference)

Without ANY of these, the bot cannot fully serve the issue.

---

## Debugging Checklist

If the bot can't serve an issue:

- [ ] File exists and is readable: `ls -l ISSUE-[#]-*.md`
- [ ] Markdown syntax is valid: Open in editor, check for errors
- [ ] Archive log entry exists: `grep "Issue \[#\]" archive-log.md`
- [ ] ASCII files exist: `ls issue-[#]-*.txt | wc -l` (should be 11)
- [ ] Closing sentence matches: Compare issue file ↔ archive log (exact match required)
- [ ] File permissions: `chmod 644 ISSUE-[#]-*.md issue-[#]-*.txt`
- [ ] Git committed: `git log --oneline | head -5`

---

## Performance Notes

- Avg time to create and deploy one issue: **15 minutes**
  - Content creation: 7 min
  - ASCII art generation: 3 min
  - Archive + verification: 3 min
  - Git commit + test: 2 min

- Bot read time: < 1 second
- ASCII rendering time: < 0.5 seconds
- Total bot latency: < 2 seconds from user request to delivery

---

## Rollback Procedure

If something goes wrong:

```bash
# See recent commits
git log --oneline -10

# Revert the latest issue release
git revert HEAD

# Or reset to previous state
git reset --hard HEAD~1

# Verify old issues still work
git log --oneline | grep "Issue"
```

---

**Last Updated:** 2026-05-07
**Version:** 1.0
