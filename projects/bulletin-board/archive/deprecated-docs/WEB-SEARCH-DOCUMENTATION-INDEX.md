# Web Search Integration Documentation — Complete Index

**Created:** May 8, 2026  
**Purpose:** Understand how web search integrates into the Design By Bulletin™ 6-section workflow

---

## Start Here

### **If you want the short answer:**
→ Read: `WEB-SEARCH-IN-WORKFLOW.md`
   - Timeline: When search happens (7:30 AM) → Processing (8:00-9:15 AM) → Rendering (12:00-6:45 PM) → Publishing (8:00 PM)
   - Where each happens in workflow
   - What subscriber sees in final magazine

### **If you want a visual diagram:**
→ Read: `WORKFLOW-DIAGRAM-SIMPLE.md`
   - ASCII flow chart showing all steps
   - Where search happens at each stage
   - How 40-60 pieces become 14 curated pieces become 6 articles
   - What gets rendered to Telegram

---

## Complete Documentation

### **1. Agent Workflow with Web Search Integration**
**File:** `AGENT-FLOW-WITH-WEB-SEARCH.md` (27 KB)

**Contains:**
- Complete flow diagram for all 6 agents
- Where web search enters (Art Department, 7:30 AM)
- How it flows through each agent
- How results appear in final issue
- Timeline and dependencies

**Read if:** You want to understand the complete system flow and when each agent receives data

**Key sections:**
- Art Department: Run web search (Step 2), Evaluate (Step 3), Select (Step 4), Annotate (Step 5), Build narrative (Step 6)
- Assignment Editor: Maps curation to commissions
- Managing Editor: Writes articles informed by curated pieces
- Editorial Director: Validates curation is visible
- Bot: Publishes to Telegram

---

### **2. Data Flow Between Agents**
**File:** `DATA-FLOW-HANDOFF.md` (12 KB)

**Contains:**
- What files are created/passed at each stage
- Exact JSON structure of search results
- Exact structure of curation report
- Exact structure of commission briefs
- What appears in final issue files

**Read if:** You want to understand data structure and what gets passed between agents

**Key sections:**
- Handoff 1: Editorial Brief → Art Dept
- Handoff 2: Web Search Results → Art Dept
- Handoff 3: Curation Report → Assignment Editor
- Handoff 4: Commission Briefs → Managing Editor
- Handoff 5: Issue Files → Editorial Director
- Handoff 6: Approved Issue → Bot → Telegram

---

### **3. Web Search in Workflow (Direct Answer)**
**File:** `WEB-SEARCH-IN-WORKFLOW.md` (11 KB)

**Contains:**
- Layer 1: Where search happens (7:30 AM, Art Department)
- Layer 2: Where search is processed (8:00-9:15 AM, evaluation + curation)
- Layer 3: Where rendered to issue (12:00-6:45 PM, Managing Editor writing)
- Layer 4: Where rendered to Telegram (8:00 PM, Bot publishing)
- Complete timeline
- What's rendered vs what's not
- Key insight: Search is input, not output

**Read if:** You want the direct answer to "where does search happen and get rendered?"

**Key insight:** 
- Search provides raw material (40-60 pieces)
- Art Department curates (14 pieces selected)
- Managing Editor writes with sources (articles citing sources)
- Subscriber sees curated, sourced articles (not raw search)

---

### **4. Web Search Setup & Integration**
**File:** `WEB-SEARCH-INTEGRATION-GUIDE.md` (11 KB)

**Contains:**
- Available search providers (Exa, Tavily, Brave, etc.)
- Search provider comparison
- Implementation steps (3 phases)
- Curation search script pseudocode
- Search query templates by section
- Configuration template
- Benefits summary

**Read if:** You want to implement web search integration

**Search providers ranked for design:**
1. Exa (semantic, AI-powered) — Best for design intent
2. Tavily (research-focused) — Best for sources
3. Perplexity (AI synthesis) — Best for AI answers
4. Web (default) — Best for broad coverage

**Section 6 specific queries:**
- "objects making craft material culture design"
- "craftsmanship materials objects design"
- "material objects cultural significance artifacts"
- "maker culture craft materials design"

---

### **5. 6-Section Structure + Web Search**
**File:** `6SECTION-AND-WEB-SEARCH.md` (10 KB)

**Contains:**
- 6 section names + web search angles for each
- Issue 021 example (Material Culture theme)
- Example search results breakdown
- Example Art Department selections
- File structure
- Benefits (faster curation, better sourcing)
- Quick command reference

**Read if:** You want to see how 6 sections map to web search queries

**Example for Section 6:**
```
Section 6: Material Culture Studies
Web Search Queries:
- {theme} objects materials craft
- {theme} making materiality culture
- {theme} craftsmanship design
- {theme} material artifacts
```

---

## Quick Reference by Role

### **Editorial Director**
Files to read:
1. `WEB-SEARCH-IN-WORKFLOW.md` — Understand timeline
2. `WORKFLOW-DIAGRAM-SIMPLE.md` — Visual overview
3. `AGENT-FLOW-WITH-WEB-SEARCH.md` — Where validation happens

**Key facts:**
- Search runs at 7:30 AM (before your validation)
- Curation visible in final articles you validate at 7:00 PM
- Check that Section 6 is deep and sourced

---

### **Art Department**
Files to read:
1. `WEB-SEARCH-IN-WORKFLOW.md` — Layer 1 & 2 (search + processing)
2. `AGENT-FLOW-WITH-WEB-SEARCH.md` — Steps 1-7
3. `DATA-FLOW-HANDOFF.md` — What you output
4. `6SECTION-AND-WEB-SEARCH.md` — Search queries by section

**Key facts:**
- You run search at 7:30 AM
- You evaluate + curate 8:00-9:15 AM
- You output curation report with 14 pieces + annotations
- Section 6: Select 4 best pieces on objects/craft/making

---

### **Assignment Editor**
Files to read:
1. `DATA-FLOW-HANDOFF.md` — Handoff 3 (what you receive)
2. `AGENT-FLOW-WITH-WEB-SEARCH.md` — Assignment Editor section
3. `WEB-SEARCH-IN-WORKFLOW.md` — How curation maps to commissions

**Key facts:**
- You receive curation report with 14 curated pieces + sources
- You create 6 commission briefs that reference these sources
- Section 6 brief: Include all 4 curated pieces, emphasize craft/objects

---

### **Managing Editor**
Files to read:
1. `WEB-SEARCH-IN-WORKFLOW.md` — Layer 3 (rendering to issue)
2. `DATA-FLOW-HANDOFF.md` — Handoff 4 (what you receive)
3. `AGENT-FLOW-WITH-WEB-SEARCH.md` — Managing Editor section

**Key facts:**
- You receive commission briefs with sources from web search curation
- You write 6 articles informed by these curated sources
- You cite sources explicitly in the prose
- Section 6: Write article citing all 4 web search sources

---

### **Bot Developer**
Files to read:
1. `DATA-FLOW-HANDOFF.md` — Handoff 5-6 (what bot receives + publishes)
2. `AGENT-FLOW-WITH-WEB-SEARCH.md` — Bot Publishing section
3. `WEB-SEARCH-IN-WORKFLOW.md` — Layer 4 (rendering to Telegram)

**Key facts:**
- Bot loads 18 issue files (all informed by web search curation)
- Bot assembles Section 6 with visual + article citing 4 sources
- Bot publishes to Telegram
- Subscribers see complete magazine with curation visible

---

## Timeline Reference

```
6:00 PM (Day 0)  → Editorial Director writes brief
7:30 AM (Day 1)  → Art Dept runs web search (40-60 pieces)
8:00-9:15 AM     → Art Dept curates (14 pieces selected + annotated)
9:15-11:00 AM    → Assignment Editor creates commissions (6 briefs with sources)
12:00-6:45 PM    → Managing Editor writes articles (citing sources)
7:00 PM          → Editorial Director validates (checks curation is visible)
8:00 PM          → Bot publishes to Telegram (subscribers see final issue)
```

---

## File Locations

### Documentation Files
All files in: `/Users/blackmachete/projects/patched-editorial/projects/bulletin-board/`

```
WEB-SEARCH-DOCUMENTATION-INDEX.md      (this file)
WEB-SEARCH-IN-WORKFLOW.md              (direct answer)
WEB-SEARCH-INTEGRATION-GUIDE.md        (setup guide)
WORKFLOW-DIAGRAM-SIMPLE.md             (visual diagram)
AGENT-FLOW-WITH-WEB-SEARCH.md          (complete flow)
DATA-FLOW-HANDOFF.md                   (data structures)
6SECTION-AND-WEB-SEARCH.md             (section mapping)
```

### Code Files
```
art-department-search.py               (to be created)
bulletin_bot_impl.py                   (bot code - updated)
scaffold.py                            (issue creator - already 6 sections)
validator.py                           (validation tool)
checkpoint.py                          (workflow tracking)
```

### Issue Files (Example: Issue 021)
```
issues/021/
├── web-search-results.json            (40-60 pieces from search)
├── art-department-report.md           (14 curated pieces + annotations)
├── commissions.md                     (6 commissions with sources)
├── 00-COVER-ART.txt                   (created by Managing Editor)
├── 01-06-SECTION-ART.txt              (6 visuals created by Managing Editor)
├── 01-06-SECTION-COPY.md              (6 articles citing web sources)
├── 07-METADATA-FOOTER.txt             (footer created by Managing Editor)
└── manifest.json                      (metadata)
```

---

## Next Steps

1. **This week:**
   - Read: `WEB-SEARCH-IN-WORKFLOW.md` (direct answer)
   - Review: `WORKFLOW-DIAGRAM-SIMPLE.md` (visual overview)

2. **Next week:**
   - Set up OpenClaw web search provider (Exa or Tavily)
   - Create: `art-department-search.py` script

3. **Issue 021 test:**
   - Run complete workflow with Material Culture theme
   - Monitor: How web search improves curation
   - Verify: Section 6 is deep and sourced

---

## Quick Questions Answered

**Q: When does web search happen?**
A: 7:30 AM, when Art Department runs `python art-department-search.py`

**Q: What does web search output?**
A: `web-search-results.json` with 40-60 pieces organized by section

**Q: Who processes the search results?**
A: Art Department curator (human) evaluates, selects, and annotates

**Q: How many pieces from search make it to the final issue?**
A: 14 curated pieces (out of 40-60 searched) → 6 articles for 6 sections

**Q: Do subscribers see raw search results?**
A: No. They see curated, sourced articles informed by search

**Q: How are sources cited?**
A: In prose within articles (not as footnotes or bibliography)

**Q: What makes Section 6 special?**
A: Web search specifically targets "objects," "craft," "making," "material culture" + Art Dept selects 4 best pieces for that section

**Q: Can the system work without web search?**
A: Yes, but faster discovery + better sourcing with it

---

## Related Files (6-Section System)

- `UPDATE-SUMMARY-6SECTIONS-COMPLETE.md` — 6-section conversion details
- `ISSUE-021-TEST-COMMANDS.md` — Testing procedures
- `6-SECTION-CONVERSION-COMPLETE.md` — Completion report
- `FINAL-STATUS-SUMMARY.md` — Overall status

---

## Summary

**Web search is:**
- ✅ Automated discovery (40-60 pieces)
- ✅ Section-organized (pre-sorted by angle)
- ✅ Human-curated (not algorithmic)
- ✅ Source-rich (each piece linked)
- ✅ Editorial-informed (selected by taste)
- ✅ Rendered in final articles (visible to readers)
- ✅ Part of complete workflow (search → curation → writing → publishing)

**Section 6 benefits:**
- ✅ Specialized search for "objects," "craft," "making"
- ✅ Deeper sourcing on material culture topics
- ✅ 4 pieces selected (vs 2 for other sections)
- ✅ Clearer editorial perspective
- ✅ More substantive final article

---

*This index helps you navigate the web search documentation for Design By Bulletin™*

*Start with `WEB-SEARCH-IN-WORKFLOW.md` for the direct answer.*
