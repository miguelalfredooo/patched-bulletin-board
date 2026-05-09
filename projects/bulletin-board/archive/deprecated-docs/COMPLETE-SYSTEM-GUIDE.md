# Design By Bulletin™ — Complete System Guide

**Date:** May 8, 2026, 11:55 PM PT  
**Version:** 2.0 (6-section + web search + validation gate)  
**Status:** Production Ready

---

## Quick Navigation

### **I want to...**
- **Create a new issue** → Start here: [Editorial Director Quick Start](#editorial-director-quick-start)
- **Understand the workflow** → Read: [Complete Workflow](#complete-workflow)
- **Integrate web search** → See: [Web Search Integration](#web-search-integration)
- **Understand validation gate** → See: [Validation Gate](#validation-gate)
- **Know how sections work** → See: [6-Section Structure](#6-section-structure)
- **Understand agent roles** → See: [Agent Roles](#agent-roles)

---

## System Overview

### What This Is
Design By Bulletin™ is an **editorial system that publishes a daily design magazine to Telegram**. 6 agents work together in a defined workflow:

1. **Editorial Director** — Sets vision, writes brief, validates
2. **Art Department** — Curates design sources via web search
3. **Assignment Editor** — Maps curation to sections, commissions writers
4. **Managing Editor** — Writes 6 sections + creates visuals
5. **Editorial Director (Validation)** — Validates all 6 sections pass before publishing
6. **Bulletin Bot** — Publishes to Telegram subscribers

### What's New (2.0)
- ✅ **6-section structure** (not 11) — Visual, Cultural, Critical, Tools, Systems, Material
- ✅ **Web search integration** — Automated source discovery for each section
- ✅ **Validation gate** — Bot cannot publish until issue passes validation + gets approval
- ✅ **Section 6: Material Culture Studies** — New section on objects, craft, making
- ✅ **Flat file structure** — 18 files per issue (not 24)
- ✅ **Faster production** — 10-11 hours (not 12.5)

---

## Complete Workflow

```
Day 0 (6 PM PT)
───────────────
Editorial Director writes Editorial Brief
  ├─ Theme
  ├─ 6 section angles
  ├─ Web search keywords
  └─ Visual direction
  
  Sends to: All agents

Day 1 (7:30 AM PT)
──────────────────
Art Department runs web search
  
  Command:
  python art-department-search.py \
    --theme "[Theme]" \
    --provider "exa" \
    --sections 6
  
  Output: 40-60 pieces organized by section
  
  ↓ (8:00-9:15 AM)
  
Art Department evaluates & curates
  
  Evaluates all 40-60 pieces
  Selects 14-16 best pieces
  Annotates each (why/insight/connection)
  Organizes by 6 sections
  Writes editorial insight
  
  Output: art-department-report.md
  Signal: checkpoint.py signal art-department 021 "14 pieces curated"

Day 1 (9:15 AM PT)
──────────────────
Assignment Editor receives curation report
  
  For each section:
  ├─ Reads 2-4 curated pieces
  ├─ Understands why they were selected
  └─ Creates commission brief with sources
  
  Output: commissions.md (6 briefs with sources)
  Signal: checkpoint.py signal assignment 021 "6 commissions ready"

Day 1 (12:00 PM - 6:45 PM PT)
──────────────────────────────
Managing Editor receives commissions
  
  For each section:
  ├─ Reads commission brief + sources
  ├─ Writes 250-300 word article
  ├─ Cites curated sources
  └─ Creates ASCII visual
  
  First: python scaffold.py issues/021 --sections 6
  Then: Write 01-06-SECTION-COPY.md (6 articles)
  Then: Create 01-06-SECTION-ART.txt (6 visuals)
  Then: Create 00-COVER-ART.txt
  Then: Create 07-METADATA-FOOTER.txt
  
  Output: 18 total files
  Signal: checkpoint.py signal managing 021 "All 6 sections complete, 18/18 files done"

Day 1 (7:00 PM PT)
──────────────────
Editorial Director validates ⭐ VALIDATION GATE
  
  REQUIRED (all 3 must pass):
  ✓ python3 validator.py issues/021
    Expected: ✓ VALID (18 files, 6 sections)
  
  ✓ python3 test-uniqueness.py issues/021
    Expected: ✓ NO DUPLICATES
  
  ✓ /admin-preview 021
    Expected: All 6 sections render correctly
  
  IF ALL PASS:
    python checkpoint.py signal editorial 021 "Validation passed - approved for publishing"
    → GATE OPENS ✓
  
  IF ANY FAIL:
    python checkpoint.py signal editorial 021 "Revisions needed: [what to fix]"
    → GATE LOCKED ✗
    → Issue cannot publish until revisions made + validation re-run
  
  Signal: checkpoint.py signal editorial 021 "Validation passed - approved for publishing"

Day 1 (7:45 PM PT)
──────────────────
Bot checks validation gate
  
  Bot automatically checks at publish time:
  ✓ Does editorial-checkpoint.md exist?
  ✓ Does it contain "approved for publishing"?
  ✓ Is issue still valid?
  
  IF gate is OPEN:
    → Bot proceeds to publish
  
  IF gate is LOCKED:
    → Bot blocks publishing
    → Issue is NOT sent to subscribers
    → Notification sent to Editorial Director

Day 1 (8:00 PM PT)
──────────────────
Bot publishes (if gate is open)
  
  Bot loads all 18 files
  Renders 6-section magazine
  Sends to Telegram subscribers
  
  Subscribers see:
  Design By Bulletin™ — Issue 021
  [6-section magazine with Section 6 on material culture]
  
  Signal: checkpoint.py signal publishing 021 "Issue published to subscribers"
```

---

## 6-Section Structure

### New Sections (Issue 021+)

| # | Section | Focus | Web Search Angle |
|---|---------|-------|------------------|
| 1 | Visual Thinking | Design perspective, visual craft | How do designers perceive [theme]? |
| 2 | Cultural Context | Cultural movements, identity, society | What cultural meaning does [theme] carry? |
| 3 | Critical Thinking | Theory, history, historical perspective | How has [theme] evolved in design? |
| 4 | Tools & Innovation | Technology, AI, tools, processes | What tools help explore [theme]? |
| 5 | Systems & Application | Product, systems, real-world application | How is [theme] applied in practice? |
| 6 | Material Culture Studies ⭐ | Objects, materiality, craft, making | What objects/artifacts embody [theme]? |

**Why 6 instead of 11:**
- ✅ Less redundancy
- ✅ Deeper exploration per section
- ✅ Clearer thinking frameworks
- ✅ Better editorial coherence
- ✅ Faster production (10-11 hrs vs 12.5 hrs)

---

## Web Search Integration

### How It Works

1. **Editorial Director writes brief** (includes web search angles for each section)
2. **Art Department runs search** (automated, 2-3 minutes)
   ```bash
   python art-department-search.py --theme "Material Culture" --provider "exa"
   ```
3. **Art Department evaluates** (manual, human curation)
4. **40-60 pieces** → curated down to **14-16 pieces**
5. **Managing Editor writes** articles informed by curated sources
6. **Subscribers see** final magazine with curated sources cited

### Web Search Queries by Section

**Section 1: Visual Thinking**
- How do designers perceive [theme]?
- [Theme] visual properties and perception

**Section 2: Cultural Context**
- [Theme] cultural meaning and identity
- [Theme] across cultures and societies

**Section 3: Critical Thinking**
- [Theme] history and evolution in design
- Design theory about [theme]

**Section 4: Tools & Innovation**
- [Theme] technology and tools
- Innovation in [theme] exploration

**Section 5: Systems & Application**
- [Theme] in product systems
- [Theme] real-world application and constraints

**Section 6: Material Culture Studies ⭐**
- [Theme] objects and artifacts
- [Theme] craftsmanship and making
- [Theme] material culture design

### Search Providers (Ranked for Design)

1. **Exa** — Semantic AI search (best for design intent)
2. **Tavily** — Research-focused with citations
3. **Perplexity** — AI synthesis with answers
4. **Web** — Default general search

---

## Validation Gate

### What It Does

**Prevents bot from publishing until issue passes validation.**

```
Editorial Director validates Issue 021
  ├─ python3 validator.py issues/021 → ✓ VALID
  ├─ python3 test-uniqueness.py issues/021 → ✓ NO DUPLICATES
  ├─ /admin-preview 021 → ✓ Renders correctly
  │
  └─ Signals approval:
     python checkpoint.py signal editorial 021 "Validation passed - approved for publishing"
     
     → Creates: issues/021/CHECKPOINTS/editorial-checkpoint.md
     → Contains: "approved for publishing"
     
     → GATE OPENS ✓

Bot checks gate at 7:45 PM
  ├─ Is editorial-checkpoint.md present?
  ├─ Does it contain "approved for publishing"?
  ├─ Is issue still valid?
  │
  └─ If YES to all three:
     → GATE OPEN
     → Bot publishes at 8:00 PM
     
     If NO to any:
     → GATE LOCKED
     → Bot blocks publishing
     → Issue cannot reach subscribers
```

### What Gets Blocked

- ❌ Invalid issues (missing files, broken structure)
- ❌ Duplicate content
- ❌ Unrendered content
- ❌ Unapproved issues (no checkpoint signal)

---

## Agent Roles

### Editorial Director

**Role:** Set vision, validate before publishing

**Timeline:**
- Day 0, 6:00 PM: Write brief
- Day 1, 7:00 PM: Validate all 3 checks
- Day 1, 7:00 PM: Signal approval or revisions

**Commands:**
```bash
# Write brief
nano issues/021/editorial-brief.md

# Validate (REQUIRED - all 3 must pass)
python3 validator.py issues/021
python3 test-uniqueness.py issues/021
/admin-preview 021

# Signal approval (if all pass)
python checkpoint.py signal editorial 021 "Validation passed - approved for publishing"

# Signal revisions (if any fail)
python checkpoint.py signal editorial 021 "Revisions needed: [what to fix]"
```

### Art Department

**Role:** Curate sources via web search

**Timeline:**
- Day 1, 7:30 AM: Read brief
- Day 1, 7:30 AM: Run web search
- Day 1, 8:00-9:15 AM: Evaluate, select, annotate

**Commands:**
```bash
# Read workspace AGENTS.md
cat /Users/blackmachete/.openclaw/workspace-bulletin-art-department/AGENTS.md

# Run web search (outputs: web-search-results.json)
python art-department-search.py --theme "Material Culture" --provider "exa"

# Evaluate & curate (creates: art-department-report.md)
# [Manual process: read 40-60 pieces, select 14-16, annotate each]

# Signal completion
python checkpoint.py signal art-department 021 "14 pieces curated"
```

### Assignment Editor

**Role:** Map curation to sections, create commissions

**Timeline:**
- Day 1, 9:15 AM: Receive curation report
- Day 1, 9:15-11:00 AM: Create 6 commissions

**Commands:**
```bash
# Read workspace AGENTS.md
cat /Users/blackmachete/.openclaw/workspace-bulletin-assignment/AGENTS.md

# For each section:
# ├─ Read 2-4 curated pieces from art-department-report.md
# ├─ Create commission brief with sources
# └─ Include: angle, sources, word count, tone

# Create: issues/021/commissions.md (6 briefs)

# Signal completion
python checkpoint.py signal assignment 021 "6 commissions ready"
```

### Managing Editor

**Role:** Write 6 sections, create visuals

**Timeline:**
- Day 1, 12:00 PM: Receive commissions
- Day 1, 12:00-6:45 PM: Write + create visuals

**Commands:**
```bash
# Read workspace AGENTS.md
cat /Users/blackmachete/.openclaw/workspace-bulletin-managing/AGENTS.md

# Create issue structure (18 files)
python scaffold.py issues/021 --sections 6 --theme "Material Culture"

# Write 6 articles (01-06-SECTION-COPY.md)
# Create 6 visuals (01-06-SECTION-ART.txt)
# Create cover (00-COVER-ART.txt)
# Create footer (07-METADATA-FOOTER.txt)

# Signal completion
python checkpoint.py signal managing 021 "All 6 sections complete, 18/18 files done"
```

### Bulletin Bot

**Role:** Publish to Telegram

**Timeline:**
- Day 1, 7:45 PM: Check validation gate
- Day 1, 8:00 PM: Publish (if gate open)

**How it works:**
```
Bot receives request: /sendme 021

Bot checks gate:
  ├─ Is editorial-checkpoint.md present?
  ├─ Does it contain "approved for publishing"?
  ├─ Is issue valid?

If gate OPEN:
  ├─ Load all 18 files
  ├─ Render 6-section magazine
  └─ Send to Telegram

If gate LOCKED:
  └─ Block publishing, return error
```

---

## File Structure

### Issue Directory (18 Files)

```
issues/021/
├── 00-COVER-ART.txt                    (1 file)
├── 01-SECTION-ART.txt
├── 01-SECTION-COPY.md
├── 02-SECTION-ART.txt
├── 02-SECTION-COPY.md
├── 03-SECTION-ART.txt
├── 03-SECTION-COPY.md
├── 04-SECTION-ART.txt
├── 04-SECTION-COPY.md
├── 05-SECTION-ART.txt
├── 05-SECTION-COPY.md
├── 06-SECTION-ART.txt                  (Material Culture)
├── 06-SECTION-COPY.md                  (Material Culture)
├── 07-METADATA-FOOTER.txt              (1 file)
├── manifest.json                       (1 file)
└── CHECKPOINTS/                        (Workflow tracking)
    ├── art-department-checkpoint.md
    ├── assignment-checkpoint.md
    ├── managing-checkpoint.md
    ├── editorial-checkpoint.md         ← VALIDATION GATE HERE
    └── publishing-checkpoint.md

Total: 18 files + checkpoints
```

### Manifest Structure (New Format)

```json
{
  "issue": 21,
  "theme": "Material Culture",
  "date": "2026-05-09",
  "status": "created",
  "structure": "flat",
  "sections": 6
}
```

---

## Key Statistics

| Metric | Before (11-section) | After (6-section) | Change |
|--------|-------------------|------------------|--------|
| Sections per issue | 11 | 6 | −45% |
| Files per issue | 24 | 18 | −25% |
| Production time | 12.5 hours | 10-11 hours | −15% |
| Material focus | Scattered | Dedicated section | Explicit |
| Curation depth | Broad | Deep + structured | Better |
| Validation | Manual | Automated gate | Safer |
| Web search | None | Integrated | Better sources |

---

## Quick Start by Role

### **Editorial Director: Create Issue 021**

```bash
# 1. Write brief
nano issues/021/editorial-brief.md

# Include:
# - Theme
# - 6 section angles
# - Web search keywords for Art Dept
# - Visual direction

# 2. Send to agents (via message/email)
# Content: "Brief ready at issues/021/editorial-brief.md"

# 3. At 7:00 PM, validate:
python3 validator.py issues/021
python3 test-uniqueness.py issues/021
/admin-preview 021

# 4. If all pass:
python checkpoint.py signal editorial 021 "Validation passed - approved for publishing"
# → Bot publishes at 8:00 PM

# 4. If any fail:
python checkpoint.py signal editorial 021 "Revisions needed: [describe]"
# → Issue blocked, Managing Editor notified
```

### **Art Department: Curate**

```bash
# 1. Read brief
cat issues/021/editorial-brief.md

# 2. Run web search
python art-department-search.py --theme "Material Culture" --provider "exa"

# 3. Evaluate & curate (manual)
# - Review 40-60 pieces
# - Select 14-16 best
# - Annotate each (why/insight/connection)
# - Organize by 6 sections

# 4. Create report
nano issues/021/art-department-report.md

# 5. Signal completion
python checkpoint.py signal art-department 021 "14 pieces curated"
```

### **Assignment Editor: Commission**

```bash
# 1. Read curation report
cat issues/021/art-department-report.md

# 2. Create 6 commissions
nano issues/021/commissions.md

# Include for each section:
# - Curated sources (with links)
# - Section angle
# - Word count: 250-300
# - Tone guidance

# 3. Signal completion
python checkpoint.py signal assignment 021 "6 commissions ready"
```

### **Managing Editor: Write**

```bash
# 1. Create structure
python scaffold.py issues/021 --sections 6 --theme "Material Culture"

# 2. Read commissions
cat issues/021/commissions.md

# 3. Write 6 articles (one per section)
nano issues/021/01-SECTION-COPY.md
nano issues/021/02-SECTION-COPY.md
# ... etc, 01-06

# 4. Create 6 visuals (one per section)
nano issues/021/01-SECTION-ART.txt
# ... etc, 01-06

# 5. Create cover & footer
nano issues/021/00-COVER-ART.txt
nano issues/021/07-METADATA-FOOTER.txt

# 6. Signal completion
python checkpoint.py signal managing 021 "All 6 sections complete, 18/18 files done"
```

### **Editorial Director: Validate & Publish**

```bash
# 1. Validate (ALL 3 REQUIRED)
python3 validator.py issues/021
# Expected: ✓ VALID

python3 test-uniqueness.py issues/021
# Expected: ✓ NO DUPLICATES

/admin-preview 021
# Expected: All 6 sections render

# 2. Check curation delivered on vision
# - Does Section 6 focus on material culture? ✓
# - Are all 6 sections present? ✓
# - Does overall feel cohesive? ✓

# 3. If all good:
python checkpoint.py signal editorial 021 "Validation passed - approved for publishing"
# → GATE OPENS
# → Bot publishes at 8:00 PM

# 3. If issues:
python checkpoint.py signal editorial 021 "Revisions needed: [describe issue]"
# → GATE LOCKED
# → Issue blocked until fixed
```

---

## Documentation Index

### Core System
- **README.md** — System overview
- **COMPLETE-SYSTEM-GUIDE.md** — This file (everything)
- **QUICK-START.md** — Command reference by role

### Workflow & Structure
- **AGENT-FLOW-WITH-WEB-SEARCH.md** — Complete agent workflow with search
- **DATA-FLOW-HANDOFF.md** — What data passes between agents
- **WORKFLOW-DIAGRAM-SIMPLE.md** — Visual flow chart
- **WEB-SEARCH-IN-WORKFLOW.md** — Where search happens and is rendered

### Web Search
- **WEB-SEARCH-INTEGRATION-GUIDE.md** — Setup and implementation
- **6SECTION-AND-WEB-SEARCH.md** — Section mapping to search
- **WEB-SEARCH-DOCUMENTATION-INDEX.md** — Navigation guide

### Validation
- **VALIDATION-GATE.md** — Gate design document
- **VALIDATION-GATE-WORKFLOW.md** — How gate works in practice

### Templates
- **EDITORIAL-BRIEF-TEMPLATE.md** — Write your brief here
- **ART-DEPARTMENT-REPORT-TEMPLATE-6SECTIONS.md** — Curation report
- **COMMISSION-TEMPLATE.md** — Commission briefs
- **SECTION-STRUCTURE.md** — 6-section reference

---

## Status

✅ **6-section structure** — Complete  
✅ **Web search integration** — Planned, documented  
✅ **Validation gate** — Implemented  
✅ **Bot code** — Updated and tested  
✅ **All documentation** — Complete and consolidated  
✅ **Ready for Issue 021** — Yes

---

## Next Steps

1. **This week:**
   - Review this guide
   - Set up web search provider (Exa or Tavily)
   
2. **Next week:**
   - Create Issue 021 editorial brief
   - Run complete workflow test
   
3. **Ongoing:**
   - Create new issues using this workflow
   - Monitor validation gate (ensures quality)
   - Refine web search queries as needed

---

**System is production-ready. Use this guide for all new issues.**

*Design By Bulletin™ — Complete System Guide v2.0*  
*May 8, 2026*
