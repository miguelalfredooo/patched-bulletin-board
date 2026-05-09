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

## Dimensions (No Exceptions)

**Cover:**
- Exactly 34 characters wide (every line)
- Exactly 30 lines tall
- 6 logo + 1 blank + 5 masthead + 18 visual

**Sections:**
- Exactly 34 characters wide (every line)
- ≤15 lines tall
- Prefer 7-12 for balance with copy

**Every line padded to exact width with trailing spaces.**

---

## Validation Script

**File:** `validate-cover.sh`

**Usage:**
```bash
bash validate-cover.sh /issues/[NUMBER]/00-COVER-ART.txt
```

**What it checks:**
1. Line count (30 lines for cover)
2. Width (34 chars per line)
3. Logo (exact DBB logo present)
4. Masthead (exact format + filled in)
5. Visual (18 lines of actual art)
6. Delivery format (info only)

**Output:**
- ✅ VALIDATION PASSED = safe to announce
- ❌ FAILED = fix and run again

**Exit code:**
- 0 = pass
- 1 = fail

---

## Asset Files

**DBB-LOGO-MASTHEAD-ASSET.txt** — Copy-paste ready logo and masthead templates

Use this file. Don't recreate the logo or masthead from memory or by hand.

---

## Manual Validation (if script unavailable)

**Check line count:**
```bash
wc -l /issues/[NUMBER]/00-COVER-ART.txt
# Should output: 30
```

**Check width:**
```bash
awk 'length($0) != 34 {print "Line " NR ": " length($0) " chars (WRONG)"}' /issues/[NUMBER]/00-COVER-ART.txt
# Should output nothing (all lines are 34 chars)
```

**Check logo (line 1):**
```bash
sed -n '1p' /issues/[NUMBER]/00-COVER-ART.txt | head -c 20
# Should start with: ██████╗ ██████╗ ██████╗
```

**Check masthead (line 8):**
```bash
sed -n '8p' /issues/[NUMBER]/00-COVER-ART.txt | head -c 19
# Should be: Design By Bulletin™
```

If all checks pass, validation passed.

---

## That's It

No philosophy. No lengthy explanations. Just the rules, the script, and how to use them.

For operational details, read: AGENT-BRIEF.md (Art Department section)
For role understanding, read: AGENT-RESPONSIBILITIES.md
