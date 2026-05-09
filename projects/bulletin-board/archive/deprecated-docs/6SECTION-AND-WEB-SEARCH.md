# Design By Bulletin™ — 6-Section Structure + Web Search Integration

**Date:** May 8, 2026  
**Status:** Ready for Issue 021 implementation

---

## The Complete Workflow: 6 Sections + Web Search

### Editorial Brief → Web Search → Curation → Assignment → Managing → Publishing

```
Day 0 (6 PM PT):
  Editorial Director writes brief for Theme
  ↓ Include: Theme + 6 section angles + search keywords
  
Day 1 (7:30 AM PT):
  ├─ Run automated web search
  │  python art-department-search.py --theme "[Theme]" --provider "exa"
  │
  ├─ Get 40-60 results organized by section:
  │  • Section 1: Visual Thinking (12 pieces)
  │  • Section 2: Cultural Context (10 pieces)
  │  • Section 3: Critical Thinking (12 pieces)
  │  • Section 4: Tools & Innovation (9 pieces)
  │  • Section 5: Systems & Application (8 pieces)
  │  • Section 6: Material Culture Studies (14 pieces) ⭐
  │
  ├─ Art Department evaluates & selects best 14-16
  │  (Focus Section 6: "What objects/materials embody this theme?")
  │
  ├─ Write curation report with sources
  │  Signal: checkpoint.py signal art-department "14 pieces curated"
  │
  9:15 AM PT: Assignment Editor creates 6 commissions (one per section)
  │  Include Section 6 brief: "Focus on objects, materials, craft, making"
  │
  12:00 PM PT: Managing Editor writes 6 sections
  │  Including Section 6 on materials/objects/craft
  │
  7:00 PM PT: Editorial Director validates 6 sections
  │  Verify Section 6 completes narrative on materials
  │
  8:00 PM PT: Bot publishes 6-section issue
  │  All sections render, including Material Culture
```

---

## 6 Sections for Any Theme + Web Search Queries

### Section 1: Visual Thinking
**Focus:** Design perspective, visual craft  
**Web Search Queries:**
- `{theme} design visual perception`
- `{theme} aesthetic visual craft`
- `{theme} visual communication design`

### Section 2: Cultural Context
**Focus:** Cultural movements, identity, society  
**Web Search Queries:**
- `{theme} culture society design`
- `{theme} cultural identity meaning`
- `{theme} cultural movements design`

### Section 3: Critical Thinking
**Focus:** Theory, history, historical perspective  
**Web Search Queries:**
- `{theme} design history theory`
- `{theme} design thinking philosophy`
- `{theme} historical design perspective`

### Section 4: Tools & Innovation
**Focus:** Technology, AI, tools, processes  
**Web Search Queries:**
- `{theme} technology tools innovation`
- `{theme} AI design process`
- `{theme} digital tools design`

### Section 5: Systems & Application
**Focus:** Product, systems, real-world application  
**Web Search Queries:**
- `{theme} product systems application`
- `{theme} design systems implementation`
- `{theme} real-world design application`

### Section 6: Material Culture Studies ⭐
**Focus:** Objects, materiality, craft, making  
**Web Search Queries:**
- `{theme} objects materials craft`
- `{theme} making materiality culture`
- `{theme} objects cultural significance`
- `{theme} craftsmanship design`
- `{theme} material artifacts`

---

## Issue 021 Example: Material Culture Theme

### Editorial Brief excerpt:
```
Theme: Material Culture
Main question: How do materials shape design thinking?

Search angles for Art Department:
- Visual: How do we perceive materials visually?
- Cultural: What makes materials culturally significant?
- Critical: How has material understanding evolved in design?
- Tools: Technology for analyzing and exploring materials
- Systems: How are materials chosen and specified in practice?
- Material Culture: What do objects and artifacts teach us about making?
```

### Automated Search Results (40-60 pieces):
```
✓ Section 1: Visual Thinking
  ├─ "The Language of Surfaces" - Design Observer
  ├─ "Texture in Product Design" - Eye on Design
  └─ "Material Beauty" - It's Nice That

✓ Section 2: Cultural Context
  ├─ "Indigenous Materials and Craft" - Design Museum
  ├─ "Material Tradition in Japanese Design" - Design Week
  └─ "Sustainable Materials as Cultural Choice" - Dezeen

✓ Section 3: Critical Thinking
  ├─ "History of Material Innovation" - Design History Society
  ├─ "From Craft to Industry" - Cooper Hewitt
  └─ "Material Literacy in Design" - Print Magazine

✓ Section 4: Tools & Innovation
  ├─ "Digital Tools for Material Exploration" - Core77
  ├─ "AI and Material Selection" - FastCo Design
  └─ "3D Material Database Tools" - Azure Magazine

✓ Section 5: Systems & Application
  ├─ "Material Specification in Product Design" - IDEO Blog
  ├─ "Supply Chain and Material Choice" - Business of Design
  └─ "Real-world Constraints in Material Selection" - Design Council

✓ Section 6: Material Culture Studies ⭐
  ├─ "The Craft Renaissance" - Craftsmanship Matters
  ├─ "Making: Understanding Objects" - Object Lessons
  ├─ "Materiality and Hand-Making" - Craft Quarterly
  ├─ "What Objects Teach Design" - Design Museum
  └─ "Artisan Practices and Modern Design" - Monocle

Total: 58 pieces across 6 sections
Art Department curates: 14-16 best pieces
```

### Art Department's Choice (14 pieces):
```
Section 1: Visual Thinking (2)
  1. "The Language of Surfaces" - Design Observer
  2. "Texture in Product Design" - Eye on Design

Section 2: Cultural Context (2)
  3. "Indigenous Materials and Craft" - Design Museum
  4. "Sustainable Materials as Cultural Choice" - Dezeen

Section 3: Critical Thinking (2)
  5. "History of Material Innovation" - Design History Society
  6. "Material Literacy in Design" - Print Magazine

Section 4: Tools & Innovation (2)
  7. "Digital Tools for Material Exploration" - Core77
  8. "AI and Material Selection" - FastCo Design

Section 5: Systems & Application (2)
  9. "Material Specification in Product Design" - IDEO Blog
  10. "Supply Chain and Material Choice" - Business of Design

Section 6: Material Culture Studies (4) ⭐
  11. "The Craft Renaissance" - Craftsmanship Matters
  12. "Making: Understanding Objects" - Object Lessons
  13. "What Objects Teach Design" - Design Museum
  14. "Artisan Practices and Modern Design" - Monocle
```

---

## Files You'll Need

### For Web Search Integration:
- `WEB-SEARCH-INTEGRATION-GUIDE.md` — Full setup guide
- `art-department-search.py` — Script to run automated search (to be created)

### For 6-Section Structure:
- `UPDATE-SUMMARY-6SECTIONS-COMPLETE.md` — Implementation details
- `ISSUE-021-TEST-COMMANDS.md` — Step-by-step test workflow
- `6-SECTION-CONVERSION-COMPLETE.md` — Completion report

### Updated Documentation:
- `README.md` — Updated section counts
- `EDITORIAL-BRIEF-TEMPLATE.md` — 6-section structure with Material Culture
- All workspace AGENTS.md files — Updated for 6 sections

---

## Quick Command Reference

### For Art Department (with web search):

```bash
# 1. Run web search for theme
python art-department-search.py \
  --theme "Material Culture" \
  --issue 021 \
  --provider "exa"  # or "tavily"

# 2. Outputs: issues/021/web-search-results.json
#    with 40-60 pieces organized by section

# 3. Review and curate 14-16 best pieces
#    Write: issues/021/art-department-curation.md

# 4. Signal completion
python checkpoint.py signal art-department 021 "14 pieces curated"
```

### For Issue 021 Complete Workflow:

```bash
# Day 0: Editorial brief ready
# Day 1: Art Department runs search + curates

# 9:15 AM: Assignment Editor creates commissions
python checkpoint.py signal assignment 021 "6 commissions ready"

# 12:00 PM: Managing Editor writes all 6 sections
python scaffold.py issues/021 --sections 6 --theme "Material Culture"
# ... writes 6 SECTION-COPY.md + 6 SECTION-ART.txt + cover + footer

# 7:00 PM: Editorial Director validates
python validator.py issues/021  # ✓ VALID (6 sections, 18 files)

# 8:00 PM: Bot publishes
# All 6 sections render to Telegram
```

---

## Why This Works Better

### Without Web Search:
- Art Department manually scans 20+ design sources
- Hit or miss on relevant pieces
- ~90 minutes to find 14-16 pieces
- May miss emerging voices or new sources

### With Web Search:
- Automated discovery of 40-60 pieces in 2 minutes
- Organized by section angle (Machine helps curator)
- Art Department focuses on evaluation, not hunting
- ~30 minutes to select 14-16 best pieces
- Discovers new sources and patterns
- **Result:** Better curation in less time

### Section 6: Material Culture Studies
- Web search queries specifically target "objects," "craft," "making"
- Finds artisan, maker, and material culture content
- Surfaces academic and cultural perspectives
- More pieces discovered = better selection
- Dedicated to material thinking

---

## Next Steps

1. **Configure OpenClaw web search** (choose Exa or Tavily)
2. **Create `art-department-search.py`** script
3. **Test with Issue 021** using Material Culture theme
4. **Evaluate results** and refine search queries
5. **Integrate into daily workflow** for ongoing use

---

## Files Summary

| File | Purpose | Status |
|------|---------|--------|
| `UPDATE-SUMMARY-6SECTIONS-COMPLETE.md` | Implementation log | ✅ Complete |
| `6-SECTION-CONVERSION-COMPLETE.md` | Completion report | ✅ Complete |
| `ISSUE-021-TEST-COMMANDS.md` | Testing guide | ✅ Complete |
| `WEB-SEARCH-INTEGRATION-GUIDE.md` | Web search setup | ✅ Complete |
| `6SECTION-AND-WEB-SEARCH.md` | This file — combined guide | ✅ Complete |
| `bulletin_bot_impl.py` | Bot code (updated) | ✅ Complete |
| `art-department-search.py` | Web search script | ⏳ To create |

---

## Go Forward

**System is ready for Issue 021 with:**
- ✅ 6-section structure (including Material Culture)
- ✅ Bot code updated and tested
- ✅ All documentation updated
- ✅ Agent guidance clarified
- ⏳ Web search integration planned

**Next immediate step:** Create `art-department-search.py` and test with Issue 021 workflow.

---

*Ready for implementation*  
*May 8, 2026*
