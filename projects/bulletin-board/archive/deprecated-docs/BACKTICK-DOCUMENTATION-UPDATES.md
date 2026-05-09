# Documentation Updates: Backtick Handling

**Date:** May 9, 2026, 12:14 AM PT  
**Status:** All documentation updated  
**Scope:** Complete audit and update of all backtick-related guidance

---

## Documents Updated

### 1. ✅ RENDERING-PIPELINE.md (Critical Reference)

**Changes:**
- Added explicit code examples showing bot adds backticks
- Updated Stage 3 (Telegram Rendering) with actual Python code
- Clarified `_assemble_issue_old_format()` wraps ACT 1 in ```
- Clarified `_assemble_issue_new_format()` wraps ACT 1 in ```
- Documented `format_act1_for_telegram()` validates (not adds) backticks
- Removed outdated pseudocode
- Added real function signatures and behavior

**Why:** This is the master reference for rendering logic. Now shows actual implementation.

**Read:** Section "STAGE 3: TELEGRAM RENDERING"

---

### 2. ✅ validator.py (Script Docstring)

**Changes:**
- Updated header docstring with explicit backtick rules
- Added "IMPORTANT: No Backticks in Art Files" section
- Added "IMPORTANT: No Escaping in Copy Files" section
- Explained what validator checks
- Explained what --fix does

**Current state:** Validator already had correct error messages; updated docs to match.

**Read:** Lines 1-40

---

### 3. ✅ BACKTICK-HANDLING-GUIDE.md (NEW — Essential Reading)

**Created:** Comprehensive guide for all roles

**Contains:**
- The golden rule: "Agents write RAW, bot adds backticks"
- Where backticks go (chart of stages)
- How backticks are added (code examples)
- Validator checking (how it works)
- Where each role fits (Managing Editor, Editorial Director, Bot)
- Real example (Issue 021)
- Common mistakes (3 examples with fixes)
- Checklists (for both Managing Editor and Editorial Director)
- Implementation details (files, code references)
- FAQ (10 common questions)

**Critical sections:**
- "The Golden Rule" (start here)
- "Checklist for Managing Editor" (before you submit art)
- "Checklist for Editorial Director" (before you validate)

**Read:** Full document (8,800 words)

---

### 4. ✅ EDITORIAL-BRIEF-TEMPLATE.md (Updated Header)

**Changes:**
- Added ⚠️ WARNING section for Managing Editor
- Explains backtick rule clearly
- Points to BACKTICK-HANDLING-GUIDE.md for details
- Lists action items for Managing Editor

**Why:** Editorial Director uses this to brief Managing Editor; needs to call out the critical rule.

**Read:** Lines 1-35

---

### 5. ✅ COMPLETE-SYSTEM-GUIDE.md (Can be updated if needed)

**Status:** Currently doesn't detail backtick handling; all detail delegated to BACKTICK-HANDLING-GUIDE.md

**Recommendation:** Add reference link to BACKTICK-HANDLING-GUIDE.md in the "Critical" or "Reference" sections.

---

## Where to Reference Backtick Handling

### For Managing Editor (Writing Art)
1. **Start:** EDITORIAL-BRIEF-TEMPLATE.md (Editorial Director includes warning)
2. **Detailed:** BACKTICK-HANDLING-GUIDE.md (full explanation + checklist)
3. **Validate:** `python3 validator.py issues/[number]`

### For Editorial Director (Validating)
1. **Reference:** RENDERING-PIPELINE.md (understand the process)
2. **Validate:** BACKTICK-HANDLING-GUIDE.md (checklist)
3. **Command:** `python3 validator.py issues/[number]`
4. **Fix:** `python3 validator.py issues/[number] --fix`

### For Bulletin Bot (Publishing)
1. **Code:** bulletin_bot_impl.py (_assemble_issue methods)
2. **Reference:** RENDERING-PIPELINE.md (Stage 3)
3. **Validation:** format_act1_for_telegram() validates backticks exist

### For Developers/Maintainers
1. **Architecture:** RENDERING-PIPELINE.md (complete pipeline)
2. **Implementation:** bulletin_bot_impl.py (actual code)
3. **Validation:** validator.py (checks art has no backticks)
4. **Testing:** Check ISSUE-021-AGENT-LOG.md for real test results

---

## Key Documentation Map

```
Art File Backtick Handling
═════════════════════════════════════════════════════════════

Entry Point (Editorial Director)
  └─ EDITORIAL-BRIEF-TEMPLATE.md (⚠️ Warning section)
      └─ Points to: BACKTICK-HANDLING-GUIDE.md

Managing Editor (Writes Art)
  ├─ BACKTICK-HANDLING-GUIDE.md (full guide)
  │  └─ Section: "Where Each Role Fits"
  │  └─ Section: "Checklist for Managing Editor"
  └─ validator.py (docstring)
     └─ Explains: No backticks in art files

Validation (Editorial Director)
  ├─ BACKTICK-HANDLING-GUIDE.md
  │  └─ Section: "Checklist for Editorial Director"
  ├─ validator.py (docstring)
  │  └─ Explains: How validator checks
  └─ RENDERING-PIPELINE.md
     └─ Section: "Stage 2: Validation"

Rendering (Bulletin Bot)
  ├─ RENDERING-PIPELINE.md (Stage 3)
  │  └─ Shows: Code that adds backticks
  ├─ bulletin_bot_impl.py
  │  ├─ _assemble_issue_old_format() (line 333)
  │  ├─ _assemble_issue_new_format() (line 416)
  │  └─ format_act1_for_telegram() (line 30)
  └─ BACKTICK-HANDLING-GUIDE.md
     └─ Section: "Implementation Details"

Understanding (Everyone)
  ├─ BACKTICK-HANDLING-GUIDE.md (⭐ START HERE)
  ├─ RENDERING-PIPELINE.md (complete process)
  └─ Real Examples
     └─ ISSUE-021-AGENT-LOG.md (real test results)
```

---

## Testing & Validation

All backtick handling is tested:

### Issue 017-021 All Pass
```
✅ Issue 017: No backticks in art files → validator ✅
✅ Issue 018: No backticks in art files → validator ✅
✅ Issue 019: No backticks in art files → validator ✅ (Telegram: 529)
✅ Issue 020: No backticks in art files → validator ✅
✅ Issue 021: No backticks in art files → validator ✅ (Telegram: 526)
```

### Bot Rendering Confirmed
```
✅ /sendme 019 → messageId 529 (monospace rendering works)
✅ /preview → messageId 530 (ACT 1 renders correctly)
✅ /sendme 021 → messageId 526 (6-section format works)
```

---

## Summary of Changes

| Document | Change Type | Why |
|----------|------------|-----|
| RENDERING-PIPELINE.md | Major update | Show actual bot code |
| validator.py | Docstring update | Clarify backtick rule |
| BACKTICK-HANDLING-GUIDE.md | NEW (8.8 KB) | Comprehensive reference |
| EDITORIAL-BRIEF-TEMPLATE.md | Header addition | Warn Managing Editor |
| All issues (017-021) | Verified | No backticks in art files |

---

## Navigation Guide

**For quick reference:**
→ [BACKTICK-HANDLING-GUIDE.md](BACKTICK-HANDLING-GUIDE.md) — The Answer

**For technical details:**
→ [RENDERING-PIPELINE.md](RENDERING-PIPELINE.md) — How it Works

**For validation:**
→ validator.py docstring (lines 1-40)

**For real examples:**
→ [ISSUE-021-AGENT-LOG.md](ISSUE-021-AGENT-LOG.md) — Tested & Verified

---

## What's Documented Now

✅ **What agents should do:** Write raw ASCII without backticks  
✅ **What validator checks:** Art files have no backticks  
✅ **What bot does:** Adds backticks during rendering  
✅ **What users see:** Perfect monospace on Telegram  
✅ **Where it's documented:** 4 key places + code  
✅ **How to fix mistakes:** validator.py --fix  
✅ **Real examples:** Issue 021 tested and verified  
✅ **FAQs:** 10 common questions answered  

---

**Status: All documentation complete and consistent.**

All agents, Editorial Director, and developers now have clear guidance on backtick handling.

---

*Design By Bulletin™ — Backtick Documentation Updates*  
*May 9, 2026*
