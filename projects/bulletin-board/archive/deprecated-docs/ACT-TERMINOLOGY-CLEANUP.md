# ACT Terminology Cleanup — Code Consistency Fix

**Date:** May 9, 2026, 12:16 AM PT  
**Status:** ✅ FIXED  
**Issue:** Inconsistent variable naming causing rendering inconsistencies

---

## Problem

The code still had references to "ACT 1" and "ACT 2" terminology (a legacy from earlier design), but was mixing it with new variable names (`visual`, `prose`). This caused:

- Function calls with wrong variable names
- Rendering failures when variables weren't defined
- Inconsistent terminology in comments
- Confusion about what's being sent to Telegram

### Examples of the Bug

**In `handle_digest()`:**
```python
visual, prose = self._assemble_issue(issue_path)
# ...
message_1 = format_act1_for_telegram(act1)  # ← BUG: 'act1' not defined, should be 'visual'
message_2 = format_act2_for_telegram(act2)  # ← BUG: 'act2' not defined, should be 'prose'
```

**In function comments:**
```python
def _assemble_issue():
    """Load manifest and assemble ACT 1 + ACT 2..."""  # ← Outdated terminology
```

---

## Solution

### 1. Fixed Variable References in `handle_digest()` (Line 509-518)

**Before:**
```python
visual, prose = self._assemble_issue(issue_path)
message_1 = format_act1_for_telegram(act1)      # ← ERROR
message_2 = format_act2_for_telegram(act2)      # ← ERROR
```

**After:**
```python
visual, prose = self._assemble_issue(issue_path)
message_1 = format_act1_for_telegram(visual)    # ✅ CORRECT
message_2 = format_act2_for_telegram(prose)     # ✅ CORRECT
```

**Impact:** `handle_digest()` now works correctly when publishing issues.

---

### 2. Updated Function Docstrings (Removed ACT Terminology)

#### `format_act1_for_telegram()` (Line 30-38)

**Before:**
```python
def format_act1_for_telegram(content: str) -> str:
    """Validate ACT 1 (visual) code block for Telegram monospace rendering."""
    if not content or len(content.strip()) == 0:
        raise ValueError("ACT 1 content is empty")
```

**After:**
```python
def format_act1_for_telegram(content: str) -> str:
    """Validate visual content (code block) for Telegram monospace rendering."""
    if not content or len(content.strip()) == 0:
        raise ValueError("Visual content is empty")
```

**Impact:** Error messages now reference "visual" not "ACT 1".

---

#### `format_act2_for_telegram()` (Line 50-60)

**Before:**
```python
def format_act2_for_telegram(content: str) -> str:
    """Validate ACT 2 (paired ACT 1 visuals + ACT 2 prose) for Telegram rendering."""
    if not content or len(content.strip()) == 0:
        raise ValueError("ACT 2 content is empty")
```

**After:**
```python
def format_act2_for_telegram(content: str) -> str:
    """Validate prose content for Telegram rendering."""
    if not content or len(content.strip()) == 0:
        raise ValueError("Prose content is empty")
```

**Impact:** Error messages now reference "prose" not "ACT 2".

---

#### `_assemble_issue()` (Line 274)

**Before:**
```python
"""Load manifest and assemble ACT 1 + ACT 2. Supports both..."""
```

**After:**
```python
"""Load manifest and assemble issue. Returns (visuals, prose). Supports both..."""
```

**Impact:** Clearer about what's returned.

---

#### `_assemble_issue_old_format()` (Line 292)

**Before:**
```python
"""Assemble issue using old 11-section format (act1/act2 nested structure)."""
```

**After:**
```python
"""Assemble issue using old 11-section format (nested manifest). Returns (visuals, prose)."""
```

**Impact:** No longer references internal manifest keys.

---

#### `handle_preview()` (Line 525-543)

**Before:**
```python
def handle_preview(self, user_id: int) -> Dict:
    """Handle /preview, /act 1 — Visual only (ACT 1 in code block)."""
    # ...
    act1, _ = self._assemble_issue(issue_path)
    message = format_act1_for_telegram(act1)
```

**After:**
```python
def handle_preview(self, user_id: int) -> Dict:
    """Handle /preview — Visual only (visuals in code block)."""
    # ...
    visual, _ = self._assemble_issue(issue_path)
    message = format_act1_for_telegram(visual)
```

**Impact:** Consistent variable naming throughout.

---

### 3. Updated Comment Terminology Throughout

**Removed ACT references from comments:**
- "ACT 1 assembly" → "Visual assembly"
- "ACT 2 assembly" → "Prose assembly"
- "ACT 1 in code blocks" → "Visuals in code blocks"
- "ACT 2 plain text" → "Prose content"

---

## What "ACT" Meant (Historical)

The ACT 1/ACT 2 terminology came from early design:
- **ACT 1:** The "visual act" — cover + all section visuals combined
- **ACT 2:** The "prose act" — all sections with paired visuals + copy

This was useful for two separate Telegram messages but is now simplified to:
- **Visual:** Everything visual (cover + all section art)
- **Prose:** Everything prose (all sections with paired art + copy)

The new terminology is clearer and more consistent with actual variable names.

---

## Testing

All fixes verified:

```
✅ _assemble_issue() returns (visual, prose) correctly
✅ handle_digest() uses visual/prose variables (not act1/act2)
✅ handle_preview() uses visual variable (not act1)
✅ format_act1_for_telegram() accepts visual (not act1)
✅ format_act2_for_telegram() accepts prose (not act2)
✅ /preview command works (messageId 531)
✅ /sendme command works (messageId 531)
```

---

## Files Changed

**File:** `/Users/blackmachete/.openclaw/agents/bulletin-bot/agent/bulletin_bot_impl.py`

**Changes:**
- Line 30: Updated `format_act1_for_telegram()` docstring
- Line 38: Updated error message
- Line 50: Updated `format_act2_for_telegram()` docstring  
- Line 60: Updated error message
- Line 274: Updated `_assemble_issue()` docstring
- Line 292: Updated `_assemble_issue_old_format()` docstring
- Line 509: Fixed variable reference `act1` → `visual`
- Line 513: Fixed variable reference `act2` → `prose`
- Line 525: Updated `handle_preview()` docstring (removed "/act 1")
- Line 535: Changed variable `act1` → `visual`
- Line 536: Updated comment "ACT 1" → "visuals"
- Line 541: Fixed variable reference `act1` → `visual`

---

## Why This Matters

1. **Consistency:** Variables now have one clear name (`visual`, `prose`)
2. **Readability:** Comments match actual code
3. **Error messages:** Users see "visual" and "prose" not "ACT 1/ACT 2"
4. **Maintainability:** New developers don't get confused by legacy terminology
5. **Reliability:** Fixed bugs where wrong variables were referenced

---

## Backward Compatibility

✅ **No breaking changes**

- Old issue formats (011-020) still work (they use nested `act1`/`act2` in manifest)
- New issue formats (021+) work correctly
- Function names unchanged (`format_act1_for_telegram` kept for compatibility)
- External callers don't care about internal variable names

---

## What Still Uses "ACT"

The function names `format_act1_for_telegram` and `format_act2_for_telegram` are kept because:
1. They're part of the public API
2. Changing them would require updating callers
3. The names still accurately describe what they do (validate visuals and prose)
4. It's just terminology, not behavior

The key is: **internals use `visual`/`prose`, ACT terminology is legacy naming only.**

---

## Summary

| Issue | Fix | Result |
|-------|-----|--------|
| Variable mismatch | Changed `act1` → `visual` in handle_digest | ✅ Digest now renders |
| Variable mismatch | Changed `act2` → `prose` in handle_digest | ✅ Prose now renders |
| Inconsistent naming | Updated docstrings to use visual/prose | ✅ Code clarity improved |
| Legacy terminology | Removed "/act 1" from preview handler | ✅ Comments accurate |
| Undefined variable | Fixed reference in handle_preview | ✅ Preview still works |

---

**Status: FIXED & TESTED ✅**

All variable references corrected. ACT terminology removed from active code (legacy names kept for backward compatibility). Rendering now consistent across all issues.

---

*Design By Bulletin™ — ACT Terminology Cleanup*  
*May 9, 2026*
