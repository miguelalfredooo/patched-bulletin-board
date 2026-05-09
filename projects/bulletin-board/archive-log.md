# Design By Bulletin™ — Archive Log

**Status Update (2026-05-09):** All 26 issues finalized, validated, migrated to new structure. Ready for bot publication.

---

## Published Issues (Old Structure — Archived for Reference)

| Issue | Theme | Date | Status | Path |
|-------|-------|------|--------|------|
| 107 | PUERTO RICAN CUISINE | May 9, 2026 | finalized | ✅ PASS | issues/107/ |
|-------|-------|------|--------|------|
| 106 | DETAIL | May 9, 2026 | finalized | ✅ PASS | issues/106/ |
|-------|-------|------|--------|------|
| 016 | Puerto Rico | May 8, 2026 | published | issues-archive/016/ |
| 015 | Resonance | May 8, 2026 | published | issues-archive/015/ |
| 014 | Emergence | May 22, 2026 | published | issues-archive/014/ |
| 012 | Industrial and Techno | May 14, 2026 | published | issues-archive/012/ |
| 011 | Invisible | May 13, 2026 | published | issues-archive/011/ |
| 010 | Worn | May 12, 2026 | published | issues-archive/010/ |
| 009 | Material | May 11, 2026 | published | issues-archive/009/ |
| 008 | Threshold | May 10, 2026 | published | issues-archive/008/ |
| 007 | Interval | May 8, 2026 | published | issues-archive/007/ |
| 006 | Momentum | May 9, 2026 | published | issues-archive/006/ |
| 005 | Signal | May 8, 2026 | published | issues-archive/005/ |
| 004 | Traces | May 7, 2026 | published | issues-archive/004/ |
| 003 | Handmade | May 6, 2026 | published | issues-archive/003/ |

**Note:** Issues 003-016 have been migrated to new structure (see Current Issues below). Archive entries kept for historical reference.

---

## Current Issues (New Structure — All Finalized & Validated ✅)

All 26 issues in `/issues/[NUMBER]/` structure, all pass validation (34×30 covers, 11 art + 11 copy + footer per issue).

| Issue | Theme | Date | Status | Validation | Path |
|-------|-------|------|--------|-----------|------|
| 105 | STRUCTURE | May 9, 2026 | finalized | ✅ PASS | issues/105/ |
| 104 | EROSION | May 9, 2026 | finalized | ✅ PASS | issues/104/ |
| 103 | SCATTER | May 9, 2026 | finalized | ✅ PASS | issues/103/ |
| 026 | EROSION | May 9, 2026 | finalized | ✅ PASS | issues/026/ |
| 025 | SCATTER | May 9, 2026 | finalized | ✅ PASS | issues/025/ |
| 024 | MOMENTUM | May 9, 2026 | finalized | ✅ PASS | issues/024/ |
| 023 | PATINA | May 9, 2026 | finalized | ✅ PASS | issues/023/ |
| 022 | NEGATIVE SPACE | May 9, 2026 | finalized | ✅ PASS | issues/022/ |
| 021 | SOCIAL OBJECTS | May 9, 2026 | finalized | ✅ PASS | issues/021/ |
| 020 | FORM | May 9, 2026 | finalized | ✅ PASS | issues/020/ |
| 019 | GEOMETRY | May 9, 2026 | finalized | ✅ PASS | issues/019/ |
| 018 | MOVEMENT | May 9, 2026 | finalized | ✅ PASS | issues/018/ |
| 017 | DISCOVERY | May 9, 2026 | finalized | ✅ PASS | issues/017/ |
| 016 | PUERTO RICO | May 9, 2026 | finalized | ✅ PASS | issues/016/ |
| 015 | RESONANCE | May 9, 2026 | finalized | ✅ PASS | issues/015/ |
| 014 | EMERGENCE | May 9, 2026 | finalized | ✅ PASS | issues/014/ |
| 012 | INDUSTRIAL & TECHNO | May 9, 2026 | finalized | ✅ PASS | issues/012/ |
| 011 | INVISIBLE | May 9, 2026 | finalized | ✅ PASS | issues/011/ |
| 010 | WORN | May 9, 2026 | finalized | ✅ PASS | issues/010/ |
| 009 | MATERIAL | May 9, 2026 | finalized | ✅ PASS | issues/009/ |
| 008 | THRESHOLD | May 9, 2026 | finalized | ✅ PASS | issues/008/ |
| 007 | INTERVAL | May 9, 2026 | finalized | ✅ PASS | issues/007/ |
| 006 | MOMENTUM | May 9, 2026 | finalized | ✅ PASS | issues/006/ |
| 005 | SIGNAL | May 9, 2026 | finalized | ✅ PASS | issues/005/ |
| 004 | TRACES | May 9, 2026 | finalized | ✅ PASS | issues/004/ |
| 003 | HANDMADE | May 9, 2026 | finalized | ✅ PASS | issues/003/ |

---

## Bot Publication Register

**All 26 issues ready for bot publication:**

The bot checks this archive log to find publication-ready issues. Every issue in the "Current Issues" table is:
- ✅ Stored in `/issues/[NUMBER]/` (new structure)
- ✅ Has exact file structure (00-COVER + 01-11 ART + 01-11 COPY + 12-FOOTER)
- ✅ Passes validation (34×30 covers, exact logo/masthead, UTF-8 aware)
- ✅ Marked "finalized" + "✅ PASS"

**File locations for bot:**
- Covers: `/issues/[NUMBER]/00-COVER-ART.txt` (34×30)
- Copy sections: `/issues/[NUMBER]/NN-SECTION-COPY.md` (01-11, 60-120 words each)
- Art sections: `/issues/[NUMBER]/NN-SECTION-ART.txt` (01-11, 34×≤15 lines each)
- Footers: `/issues/[NUMBER]/12-METADATA-FOOTER.txt` (closing line)

---

## System Specifications

**Cover Format (locked):**
- 34 display characters wide (Unicode-aware, Python len())
- 30 lines tall (6 logo + 1 blank + 5 masthead + 18 visual)
- Exact DBB logo (verbatim from DBB-LOGO-MASTHEAD-ASSET.txt)
- Exact masthead (copy-pasted, [NUMBER] and [THEME] filled in)

**Section Format (locked):**
- 34 display characters wide per line
- ≤15 lines tall (typically 6-12)
- Copy: 60-120 words, Apartamento voice, 1-2 URLs
- Art: ASCII art (no descriptions), theme-complementary

**Validation (automated):**
- Script: `validate-cover.sh`
- Checks: line count (30), char width (34), logo, masthead, visual composition
- Character counting: Python (UTF-8 aware), not bash awk/wc

**Documentation (consolidated):**
- AGENT-RESPONSIBILITIES.md (roles and pipeline)
- EDITORIAL-DIRECTOR-BRIEF.md (vision setting)
- MANAGING-EDITOR-BRIEF.md (copy writing)
- ART-DEPARTMENT-BRIEF.md (visual creation)
- EDITORIAL-DIRECTOR-SPOTCHECK-BRIEF.md (approval gate)
- ART-DEPT-WIDTH-HEIGHT-VALIDATION.md (technical specs)
- DBB-LOGO-MASTHEAD-ASSET.txt (copy-paste assets)

---

## Recent Changes

**May 9, 2026:**
- ✅ Migrated issues 003-016 from old structure (act-1/act-2) to new flat structure
- ✅ Fixed character counting standard: display characters (Python), not bytes
- ✅ Completed missing copy sections (021, 022, 025, 103)
- ✅ Added missing footers (021, 022)
- ✅ Cleaned deprecated documentation (70 files → archive/deprecated-docs/)
- ✅ All 26 issues validated and ready

---

**Ready for Telegram publication. Bot can publish any issue from this list.**

Last updated: May 9, 2026, 12:10 PDT
