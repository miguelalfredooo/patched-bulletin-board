# Design By Bulletin™ — Documentation Index

**Last Updated:** May 8, 2026, 11:58 PM PT  
**System Version:** 2.0 (6-section + web search + validation gate)

---

## Start Here

### **I just want to understand the system**
→ Read: **[COMPLETE-SYSTEM-GUIDE.md](COMPLETE-SYSTEM-GUIDE.md)** (17 KB)
- Complete workflow
- 6-section structure
- Web search integration
- Validation gate
- Agent roles
- Quick start by role

### **I want quick commands to copy-paste**
→ Read: **[QUICK-START.md](QUICK-START.md)** (10 KB)
- Commands by agent role
- Timeline reference
- Common workflows

### **I want a visual flowchart**
→ Read: **[WORKFLOW-DIAGRAM-SIMPLE.md](WORKFLOW-DIAGRAM-SIMPLE.md)** (18 KB)
- ASCII diagrams
- Agent handoffs
- Data flow visualization

---

## Core Documentation

### System Overview
| File | Size | Purpose |
|------|------|---------|
| **COMPLETE-SYSTEM-GUIDE.md** | 17 KB | Everything you need to know |
| **README.md** | 7 KB | System overview + status |
| **START-HERE.md** | 11 KB | Getting started guide |

### Agent Workflow
| File | Size | Purpose |
|------|------|---------|
| **AGENT-FLOW-WITH-WEB-SEARCH.md** | 27 KB | Complete workflow with all agents |
| **DATA-FLOW-HANDOFF.md** | 12 KB | What data passes between agents |
| **WORKFLOW-DIAGRAM-SIMPLE.md** | 18 KB | Visual flowchart + diagrams |

### Web Search Integration
| File | Size | Purpose |
|------|------|---------|
| **WEB-SEARCH-INTEGRATION-GUIDE.md** | 11 KB | Setup + implementation |
| **WEB-SEARCH-IN-WORKFLOW.md** | 11 KB | Where search happens + is rendered |
| **6SECTION-AND-WEB-SEARCH.md** | 10 KB | Mapping sections to search queries |
| **WEB-SEARCH-DOCUMENTATION-INDEX.md** | 11 KB | Web search nav guide |

### Validation Gate
| File | Size | Purpose |
|------|------|---------|
| **VALIDATION-GATE.md** | 9 KB | Gate design + implementation |
| **VALIDATION-GATE-WORKFLOW.md** | 9 KB | How gate works in practice |

### 6-Section Structure
| File | Size | Purpose |
|------|------|---------|
| **SECTION-STRUCTURE.md** | 10 KB | Complete section reference |
| **EDITORIAL-BRIEF-TEMPLATE.md** | 15 KB | Template + curation guidance |

### System Updates (Session History)
| File | Size | Purpose |
|------|------|---------|
| **UPDATE-SUMMARY-6SECTIONS-COMPLETE.md** | 9 KB | Implementation log |
| **6-SECTION-CONVERSION-COMPLETE.md** | 10 KB | Conversion report |
| **FINAL-STATUS-SUMMARY.md** | 12 KB | Overall status |

---

## Reference Documentation

### Templates (Copy + Fill)
| File | Use For |
|------|---------|
| **EDITORIAL-BRIEF-TEMPLATE.md** | Editorial Director: Write your brief |
| **ART-DEPARTMENT-REPORT-TEMPLATE-6SECTIONS.md** | Art Dept: Report template |
| **COMMISSION-TEMPLATE.md** | Assignment Editor: Create commissions |

### Specifications
| File | Reference |
|------|-----------|
| **MANIFEST.md** | Manifest JSON structure |
| **FILE-STRUCTURE-REFERENCE.md** | File naming + organization |
| **RENDERING-PIPELINE.md** | How content renders to Telegram |

---

## Navigation by Role

### **Editorial Director**

**Quick Start:**
→ [COMPLETE-SYSTEM-GUIDE.md#editorial-director-quick-start](COMPLETE-SYSTEM-GUIDE.md)

**Full Reference:**
1. Read: [COMPLETE-SYSTEM-GUIDE.md](COMPLETE-SYSTEM-GUIDE.md) (overall system)
2. Read: [EDITORIAL-BRIEF-TEMPLATE.md](EDITORIAL-BRIEF-TEMPLATE.md) (write your brief)
3. Reference: [VALIDATION-GATE-WORKFLOW.md](VALIDATION-GATE-WORKFLOW.md) (validation process)

**Agent Workspace:**
- `/Users/blackmachete/.openclaw/workspace-bulletin-editorial/AGENTS.md`

**Key Files:**
- Create: `issues/021/editorial-brief.md`
- Run: `python3 validator.py issues/021`
- Signal: `python checkpoint.py signal editorial 021 "Validation passed - approved for publishing"`

---

### **Art Department**

**Quick Start:**
→ [COMPLETE-SYSTEM-GUIDE.md#art-department-curate](COMPLETE-SYSTEM-GUIDE.md)

**Full Reference:**
1. Read: [COMPLETE-SYSTEM-GUIDE.md](COMPLETE-SYSTEM-GUIDE.md) (overall system)
2. Read: [WEB-SEARCH-INTEGRATION-GUIDE.md](WEB-SEARCH-INTEGRATION-GUIDE.md) (web search setup)
3. Reference: [6SECTION-AND-WEB-SEARCH.md](6SECTION-AND-WEB-SEARCH.md) (section mapping)
4. Reference: [ART-DEPARTMENT-REPORT-TEMPLATE-6SECTIONS.md](ART-DEPARTMENT-REPORT-TEMPLATE-6SECTIONS.md)

**Agent Workspace:**
- `/Users/blackmachete/.openclaw/workspace-bulletin-art-department/AGENTS.md`

**Key Commands:**
- Run: `python art-department-search.py --theme "Material Culture" --provider "exa"`
- Create: `issues/021/art-department-report.md`
- Signal: `python checkpoint.py signal art-department 021 "14 pieces curated"`

---

### **Assignment Editor**

**Quick Start:**
→ [COMPLETE-SYSTEM-GUIDE.md#assignment-editor-commission](COMPLETE-SYSTEM-GUIDE.md)

**Full Reference:**
1. Read: [COMPLETE-SYSTEM-GUIDE.md](COMPLETE-SYSTEM-GUIDE.md) (overall system)
2. Reference: [DATA-FLOW-HANDOFF.md](DATA-FLOW-HANDOFF.md) (what you receive)
3. Reference: [COMMISSION-TEMPLATE.md](COMMISSION-TEMPLATE.md)

**Agent Workspace:**
- `/Users/blackmachete/.openclaw/workspace-bulletin-assignment/AGENTS.md`

**Key Files:**
- Receive: `issues/021/art-department-report.md`
- Create: `issues/021/commissions.md`
- Signal: `python checkpoint.py signal assignment 021 "6 commissions ready"`

---

### **Managing Editor**

**Quick Start:**
→ [COMPLETE-SYSTEM-GUIDE.md#managing-editor-write](COMPLETE-SYSTEM-GUIDE.md)

**Full Reference:**
1. Read: [COMPLETE-SYSTEM-GUIDE.md](COMPLETE-SYSTEM-GUIDE.md) (overall system)
2. Reference: [SECTION-STRUCTURE.md](SECTION-STRUCTURE.md) (section guidance)
3. Reference: [DATA-FLOW-HANDOFF.md](DATA-FLOW-HANDOFF.md) (what you receive)

**Agent Workspace:**
- `/Users/blackmachete/.openclaw/workspace-bulletin-managing/AGENTS.md`

**Key Commands:**
- Run: `python scaffold.py issues/021 --sections 6 --theme "Material Culture"`
- Create: `01-06-SECTION-COPY.md` (6 articles)
- Create: `01-06-SECTION-ART.txt` (6 visuals)
- Signal: `python checkpoint.py signal managing 021 "All 6 sections complete, 18/18 files done"`

---

### **Bulletin Bot**

**Reference:**
- Code: `/Users/blackmachete/.openclaw/agents/bulletin-bot/agent/bulletin_bot_impl.py`
- Docs: `/Users/blackmachete/.openclaw/workspace-bulletin-bot/AGENTS.md`

**Key Logic:**
- Gate check: `check_validation_gate(issue_num)`
- Assembly: `_assemble_issue(issue_path)`
- Publishing: `handle_digest(user_id)`

---

## File Organization

### By Topic
**System Design:**
- COMPLETE-SYSTEM-GUIDE.md
- README.md
- START-HERE.md

**Workflow:**
- AGENT-FLOW-WITH-WEB-SEARCH.md
- DATA-FLOW-HANDOFF.md
- WORKFLOW-DIAGRAM-SIMPLE.md

**Web Search:**
- WEB-SEARCH-INTEGRATION-GUIDE.md
- WEB-SEARCH-IN-WORKFLOW.md
- 6SECTION-AND-WEB-SEARCH.md
- WEB-SEARCH-DOCUMENTATION-INDEX.md

**Validation:**
- VALIDATION-GATE.md
- VALIDATION-GATE-WORKFLOW.md

**Structure:**
- SECTION-STRUCTURE.md
- EDITORIAL-BRIEF-TEMPLATE.md
- FILE-STRUCTURE-REFERENCE.md

**Templates:**
- EDITORIAL-BRIEF-TEMPLATE.md
- ART-DEPARTMENT-REPORT-TEMPLATE-6SECTIONS.md
- COMMISSION-TEMPLATE.md

**History:**
- UPDATE-SUMMARY-6SECTIONS-COMPLETE.md
- 6-SECTION-CONVERSION-COMPLETE.md
- FINAL-STATUS-SUMMARY.md
- ISSUE-021-TEST-COMMANDS.md

---

## Reading Paths

### **Path 1: I'm new, explain the system**
1. [README.md](README.md) — 5 min read
2. [COMPLETE-SYSTEM-GUIDE.md](COMPLETE-SYSTEM-GUIDE.md) — 15 min read
3. [WORKFLOW-DIAGRAM-SIMPLE.md](WORKFLOW-DIAGRAM-SIMPLE.md) — 5 min read

**Total:** 25 minutes. You now understand how the system works.

### **Path 2: I'm Editorial Director, how do I create an issue?**
1. [COMPLETE-SYSTEM-GUIDE.md#editorial-director-quick-start](COMPLETE-SYSTEM-GUIDE.md) — 5 min
2. [EDITORIAL-BRIEF-TEMPLATE.md](EDITORIAL-BRIEF-TEMPLATE.md) — 5 min (use as template)
3. [VALIDATION-GATE-WORKFLOW.md](VALIDATION-GATE-WORKFLOW.md) — 5 min

**Total:** 15 minutes. You can now create Issue 021.

### **Path 3: I'm Art Department, how do I use web search?**
1. [COMPLETE-SYSTEM-GUIDE.md#web-search-integration](COMPLETE-SYSTEM-GUIDE.md) — 5 min
2. [WEB-SEARCH-INTEGRATION-GUIDE.md](WEB-SEARCH-INTEGRATION-GUIDE.md) — 10 min
3. [6SECTION-AND-WEB-SEARCH.md](6SECTION-AND-WEB-SEARCH.md) — 10 min

**Total:** 25 minutes. You understand web search integration.

### **Path 4: Deep dive - understand the complete workflow**
1. [COMPLETE-SYSTEM-GUIDE.md](COMPLETE-SYSTEM-GUIDE.md) — 20 min
2. [AGENT-FLOW-WITH-WEB-SEARCH.md](AGENT-FLOW-WITH-WEB-SEARCH.md) — 20 min
3. [DATA-FLOW-HANDOFF.md](DATA-FLOW-HANDOFF.md) — 15 min
4. [WORKFLOW-DIAGRAM-SIMPLE.md](WORKFLOW-DIAGRAM-SIMPLE.md) — 10 min

**Total:** 65 minutes. You understand everything about the system.

---

## Quick Links

### Commands
**Run web search:**
```bash
python art-department-search.py --theme "[Theme]" --provider "exa"
```

**Validate issue:**
```bash
python3 validator.py issues/021
```

**Create issue scaffold:**
```bash
python scaffold.py issues/021 --sections 6 --theme "[Theme]"
```

**Signal checkpoint:**
```bash
python checkpoint.py signal [agent] 021 "[message]"
```

### Key Files to Create
- `issues/021/editorial-brief.md` — Editorial Director
- `issues/021/art-department-report.md` — Art Department
- `issues/021/commissions.md` — Assignment Editor
- `issues/021/01-06-SECTION-COPY.md` — Managing Editor
- `issues/021/01-06-SECTION-ART.txt` — Managing Editor

### Validation Checklist
```bash
[ ] python3 validator.py issues/021 → ✓ VALID
[ ] python3 test-uniqueness.py issues/021 → ✓ NO DUPLICATES
[ ] /admin-preview 021 → ✓ Renders correctly
[ ] python checkpoint.py signal editorial 021 "Validation passed - approved for publishing"
[ ] Bot publishes at 8:00 PM
```

---

## Status

✅ All documentation complete  
✅ System ready for Issue 021  
✅ Validation gate implemented  
✅ Web search integration planned  
✅ 6-section structure deployed  

**Next:** Create Issue 021 using [COMPLETE-SYSTEM-GUIDE.md](COMPLETE-SYSTEM-GUIDE.md)

---

*Design By Bulletin™ Documentation Index*  
*v2.0 — May 8, 2026*
