# Content Checks — Quality Validation

**Purpose:** Catch common content issues before validation (word count, links, section names, etc).

**Status:** ✅ Ready to use

**Time to run:** 1 second

---

## Usage

### Basic Check
```bash
python checks.py issues/017
```

Shows warnings and errors.

### With Suggestions
```bash
python checks.py issues/017 --fix-suggestions
```

Shows warnings + actionable suggestions for fixing them.

---

## What It Checks

### 1. Section Names (Error if wrong)
Validates section names match the locked list:
- Art
- Painting
- Illustration
- Sculpture
- Culture
- Photography
- Art History
- Opinions
- Design & AI Tools
- Product & Process
- Visual & Brand

**Example error:**
```
Section 01: Section name 'Visual' not in locked list
```

**Fix:** Use "Art" or "Visual & Brand" (whichever fits the content)

---

### 2. Word Count (Warning if short/long)
Target: 60-120 words per section

**Too short:**
```
Section 01: Too short: 45 words (target: 60-120)
```

**Too long:**
```
Section 02: Too long: 135 words (target: 60-120)
```

**Fix:** Add or remove sentences as needed

---

### 3. Source Links (Error if missing)
Every section needs at least 1 source link

**Error:**
```
Section 01: No source links found (need at least 1)
```

**Fix:** Add URL: `https://example.com/source`

---

### 4. Link Format (Warning if malformed)
Checks basic URL validity

**Warning:**
```
Section 01: Invalid URL format: htp://wrong-url.com
```

**Fix:** Use correct format: `https://example.com/page`

---

## Exit Codes

**0** — All checks passed ✅

**1** — Warnings found (fixable, non-blocking)

**2** — Errors found (blocking, must fix before publishing)

---

## Example Outputs

### All Checks Pass
```
📋 Content Checks — Issue 017

✅ All checks passed!
```

### With Warnings
```
📋 Content Checks — Issue 017

⚠️  WARNINGS (3)

   Section 01: Too short: 45 words (target: 60-120)
   Section 02: No section name found (should be **Section Name**)
   Section 03: Invalid URL format: http://example.com

ℹ️  3 warnings (non-blocking)
```

### With Errors
```
📋 Content Checks — Issue 017

❌ ERRORS (2)

   Section 01: No source links found (need at least 1)
   Section 02: Section name 'Unknown' not in locked list

⚠️  2 blocking errors
```

### With Suggestions
```
📋 Content Checks — Issue 017

⚠️  WARNINGS (3)

   Section 01: Too short: 45 words (target: 60-120)
   Section 02: Section name 'Unknown' not in locked list
   Section 03: Invalid URL format

ℹ️  3 warnings (non-blocking)

💡 Suggestions:

   Section 01: Add 1-2 more sentences
   Section 02: Use one of the locked section names
   Section 03: Fix link format (should start with https://)
```

---

## Workflow Integration

**While writing:**
```bash
python checks.py issues/017 --fix-suggestions
```

Catch issues as you write, fix them immediately.

**Before validation:**
```bash
python checks.py issues/017
# Should show: ✅ All checks passed!

python validator.py issues/017
# Then run full validator
```

**Complete flow:**
```bash
python scaffold.py issues/017 --theme "Discovery"
# Write content...
python checks.py issues/017 --fix-suggestions  # Fix issues
python progress.py issues/017                  # Check completion
python validator.py issues/017                 # Final validation
/admin-send-issue 017                          # Publish
```

---

## Check Details

### Section Names
Validates that section names match the locked 11-section structure.

**Why locked?** Consistency across Issues. Readers expect the same sections each time.

**Section list** (in order):
1. Art
2. Painting
3. Illustration
4. Sculpture
5. Culture
6. Photography
7. Art History
8. Opinions
9. Design & AI Tools
10. Product & Process
11. Visual & Brand

---

### Word Count
**Minimum:** 60 words (need substance)
**Maximum:** 120 words (need brevity)

Why this range?
- Too short (<60): Feels incomplete, not enough detail
- Too long (>120): Loses reader attention, verbose
- 60-120: Perfect for editorial voice (warm, specific, concise)

**Counted as:** Words in the section (excluding bold headers and URLs)

---

### Source Links
Every section needs 1-2 source links

**Why required?** Readers want to explore further. Links prove editorial integrity.

**Format:** Plain URLs starting with `https://`
```
https://example.com/article
https://example.com/reference
```

**Don't use:** Markdown links, shortened URLs, or plain text descriptions

---

### Link Validation
Basic URL format checking:
- Starts with `http://` or `https://`
- Has domain name (e.g., `example.com`)
- Valid characters (no spaces, etc.)

**Does NOT** check:
- Whether link is actually accessible (that's a separate network check)
- Whether content is still available
- Link expiration

---

## Common Issues & Fixes

### "Too short: 45 words"
**Problem:** Section is under 60 words

**Solutions:**
- Add 1-2 more sentences
- Expand examples
- Add more specificity (name artists, works, publications)
- Include a concrete detail

### "Too long: 145 words"
**Problem:** Section is over 120 words

**Solutions:**
- Cut unnecessary adjectives
- Remove examples that don't add value
- Shorten sentences
- Delete one sentence

### "Section name 'Unknown' not in locked list"
**Problem:** Using a custom section name

**Solutions:**
- Use one of the 11 locked section names
- Review SECTION-GUIDELINES.md to understand each section
- Rethink whether content fits a different section

### "No source links found"
**Problem:** Section has no URLs

**Solutions:**
- Add 1-2 source links at the end
- Make sure links work (start with https://)
- Format as plain URLs (not markdown links)

### "Invalid URL format"
**Problem:** URL is malformed

**Solutions:**
- Check spelling (https, not htp)
- Make sure URL includes domain (https://example.com, not https://example)
- Remove trailing punctuation if present

---

## Tips for Clean Content

1. **Run checks often** while writing (not just at the end)
2. **Fix as you go** — don't accumulate warnings
3. **Use SECTION-GUIDELINES.md** as reference while writing
4. **Read your copy aloud** — catches awkward phrasing
5. **Verify links work** before committing (manual check)
6. **Check section names** against the locked list before writing

---

## Integration with Other Tools

**scaffold.py** → Creates structure
**checks.py** → Validates content quality
**progress.py** → Tracks completion
**validator.py** → Validates file structure
**/admin-send-issue** → Publishes

Run in this order:
1. Scaffold
2. Write (run checks often)
3. Check progress
4. Validate structure
5. Publish

---

## Summary

**Quick content quality check:** `python checks.py issues/017`
**With fix suggestions:** `python checks.py issues/017 --fix-suggestions`
**Before publishing:** Make sure you see ✅ All checks passed!
