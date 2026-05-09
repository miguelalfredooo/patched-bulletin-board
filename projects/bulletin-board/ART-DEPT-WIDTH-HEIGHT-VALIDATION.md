# Art Department — Width, Height & Validation

**Technical reference for art department. Start with AGENT-BRIEF.md for role and responsibilities.**

---

## NO EXCEPTIONS RULE

**Every cover MUST include the exact logo and masthead. Copy verbatim from DBB-LOGO-MASTHEAD-ASSET.txt.**

If a cover doesn't have these exact lines, it fails validation. Period.

---

## Logo (6 lines) — COPY EXACTLY

```
██████╗ ██████╗ ██████╗ ™
██╔══██╗██╔══██╗██╔══██╗
██║  ██║██████╔╝██████╔╝
██║  ██║██╔══██╗██╔══██╗
██████╔╝██████╔╝██████╔╝
╚═════╝ ╚═════╝ ╚═════╝
```

---

## Masthead (5 lines) — COPY & FILL IN [ISSUE#] AND [THEME]

```
Design By Bulletin™
━━━━━━━━━━━━━━━━━━━━━━━
Issue [ISSUE#]
[THEME] • May 9, 2026
━━━━━━━━━━━━━━━━━━━━━━━
```

---

## CRITICAL: Character Counting Is Display Width, Not Bytes

**All widths measured in display characters** (visual width on screen when rendered in monospace font).

Unicode multi-byte characters = 1 display character each:
- `██` = 1 character (not 3 bytes)
- `━` = 1 character (not 3 bytes)
- `™` = 1 character (not 2 bytes)
- `★` = 1 character (not 3 bytes)
- `•` = 1 character (not 3 bytes)
- `◆` = 1 character (not 3 bytes)
- Regular ASCII: a-z, 0-9, space = 1 character = 1 byte

**When we say "34 chars wide," we mean 34 display characters, not 34 bytes.**

Every line must be padded to exactly 34 display characters with trailing spaces.

---

## Dimensions (No Exceptions)

**Cover:**
- Exactly 34 display characters wide (every line)
- Exactly 30 lines tall
- 6 logo + 1 blank + 5 masthead + 18 visual

**Sections:**
- Exactly 34 display characters wide (every line)
- ≤15 lines tall
- Prefer 7-12 for balance with copy

**Every line padded to exact width with trailing spaces.**

---

## How to Count Display Characters (Correctly)

**Python (use this):**
```python
with open('00-COVER-ART.txt', 'r', encoding='utf-8') as f:
    for i, line in enumerate(f, 1):
        line_content = line.rstrip('\n')
        char_count = len(line_content)  # Display character count
        if char_count != 34:
            print(f"Line {i}: {char_count} chars (should be 34)")
```

**Bash `awk` (wrong for Unicode):**
```bash
awk 'length($0) != 34 {print}' /issues/[NUMBER]/00-COVER-ART.txt
# ❌ This counts bytes, not display characters
# Will fail for lines with Unicode symbols
```

**Bash `wc -c` (wrong):**
```bash
wc -c < /issues/[NUMBER]/00-COVER-ART.txt
# ❌ This counts bytes in entire file, not per-line display width
```

---

## Validation Script

**File:** `validate-cover.sh`

**Usage:**
```bash
bash validate-cover.sh /issues/[NUMBER]/00-COVER-ART.txt
```

**What it checks:**
1. Line count (30 lines for cover)
2. Width (34 display characters per line, using Python)
3. Logo (exact DBB logo present)
4. Masthead (exact format + filled in)
5. Visual (18 lines of actual art)

**Output:**
- ✅ VALIDATION PASSED = safe to announce
- ❌ FAILED = fix and run again

**Exit code:**
- 0 = pass
- 1 = fail

**This is the authoritative validation tool. Use it.**

---

## Asset Files

**DBB-LOGO-MASTHEAD-ASSET.txt** — Copy-paste ready logo and masthead templates

Use this file. Don't recreate the logo or masthead from memory or by hand.

---

## How to Ensure Correct Padding

When creating ASCII art with Unicode characters:

1. **Write your visual content first** (the actual art)
2. **Count display characters** using Python `len()`:
   ```python
   visual_line = "★ ★ ★ ★ ★"
   print(len(visual_line))  # Shows actual display width
   ```
3. **Pad to 34** with trailing spaces:
   ```python
   padded_line = visual_line + (" " * (34 - len(visual_line)))
   ```
4. **Verify** with validate-cover.sh before announcing

---

## That's It

No philosophy. No lengthy explanations. Just the rules, the script, and how to use them.

For operational details, read: AGENT-BRIEF.md (Art Department section)
For role understanding, read: AGENT-RESPONSIBILITIES.md
