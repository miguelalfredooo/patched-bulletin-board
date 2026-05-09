# Design By Bulletin™ — Rendering Pipeline

**Version:** 3.0 (System Improvements, May 9, 2026)  
**Date:** 2026-05-08  
**Updated:** System improvements from Issue 023 test  
**Status:** REQUIRED FOR ALL AGENTS  
**Enforced:** Agents, Editorial Director, Bulletin Bot

⚠️ **READ FIRST:** Before building an issue, use AGENT-BRIEF-TEMPLATE.md. For verification, use EDITORIAL-SPOT-CHECK-PROCEDURE.md.

---

## FUNDAMENTAL RULES

**Design Department creates actual ASCII art. Editorial verifies. Bot formats for Telegram.**

- ✅ **Design writes** actual ASCII art (34 chars FIXED width × 15 lines max for sections; 34×30 FIXED for cover; no placeholders) → writes to NN-SECTION-ART.txt files
- ✅ **Design self-validates** before handing to Editorial → confirms all constraints met
- ✅ **Editorial spot-checks** (2-3 files) → confirms no placeholders remain
- ✅ **Editorial approves** → only after Design is complete and verified
- ✅ **Bot formats** → applies Telegram formatting (MarkdownV2, code blocks, escaping)
- ❌ **No placeholder text** in art files (Design's responsibility to replace with actual ASCII)
- ❌ **Editorial does not create** art (Design's job)
- ❌ **Agents do NOT** wrap in backticks, escape special chars, or apply parse_mode (Bot does that)

---

## Three-Stage Pipeline

```
Stage 1: Agent Output (Raw) — DESIGN OWNS ART CREATION
   ↓
   Managing Editor → writes all prose copy (NN-SECTION-COPY.md)
   Design Department → creates all ASCII art (NN-SECTION-ART.txt)
                          [DESIGN IS FULLY RESPONSIBLE]
   
   CRITICAL: Design must create actual ASCII visuals:
   - **Cover (00-COVER-ART.txt):** 34 chars FIXED width × 30 lines FIXED height
   - **Sections (01-11-SECTION-ART.txt):** 34 chars FIXED width × 15 lines max
   - Every line must be exactly 34 characters (pad with spaces)
   - Cover must be exactly 30 lines (no more, no less)
   - Placeholder descriptions are NOT acceptable.
   - Design must self-validate BEFORE handing to Editorial.
   
   Design delivers: All 11 files with ACTUAL ASCII (not descriptions)
   Editorial receives: Complete work ready for spot-check
   
   Output: Raw ASCII (art files from Design) + raw markdown (copy files)
   
Stage 2: Validation (Editorial Spot-Check) — TWO-GATE SYSTEM
   ↓
   Gate 1: Design Self-Validation (BEFORE handoff)
   - Design verifies: All 11 art files contain actual ASCII
   - Design checks: All constraints met (36×15, formats, no placeholders)
   - Design confirms: "Ready for Editorial approval"
   - If Design finds issues: Design fixes them. Do NOT hand to Editorial.
   
   Gate 2: Editorial Spot-Check (AFTER Design delivery)
   - Editorial reads 2-3 art files (quick verification)
   - Editorial confirms: No placeholder text remains
   - Editorial confirms: Actual ASCII visuals present
   
   If Editorial spots placeholder text:
   ✗ REJECT back to Design
   ✗ Design must complete actual ASCII
   ✗ Design resubmits with new self-validation
   
Stage 3: Telegram Rendering (Format)
   ↓
   Bulletin Bot publishes Issue:
   - Code block wrapping for art files
   - MarkdownV2 escaping for copy files
   - Proper formatting and spacing
   - parse_mode="MarkdownV2" for all sends
```

---

## Issue Structure

All issues follow this flat file structure:

```
issues/[number]/
├── 00-COVER-ART.txt        ← Logo + masthead + theme visual (raw)
├── 01-SECTION-ART.txt      ← Section 1 art (raw, no backticks)
├── 01-SECTION-COPY.md      ← Section 1 copy (raw, no escaping)
├── 02-SECTION-ART.txt
├── 02-SECTION-COPY.md
├── 03-SECTION-ART.txt
├── 03-SECTION-COPY.md
... (repeat for all sections)
└── [N+1]-METADATA-FOOTER.txt ← Closing quote + metadata (raw)
```

**Key Properties:**
- One cover art file (00-COVER-ART.txt)
- One art file per section (NN-SECTION-ART.txt)
- One copy file per section (NN-SECTION-COPY.md)
- One metadata footer file at the end
- All paths are flat (no subdirectories)
- Numbering is sequential and continuous

**For an 11-section issue:**
- Files 00-COVER (1 file)
- Files 01-11 art (11 files)
- Files 01-11 copy (11 files)
- File 12-METADATA-FOOTER (1 file)
- **Total: 24 files**

---

## STAGE 1: AGENT OUTPUT FORMAT

### For Art Files

**File:** `issues/[number]/NN-SECTION-ART.txt`

**Content (PLAIN, no backticks):**
```
◈────◈
│    │
│ ◆▲ │
│    │
◈────◈
```

**Rules:**
- ❌ NO triple backticks (``` ... ```)
- ❌ NO special char escaping
- ✅ Plain monospace ASCII, exactly as it should render
- ✅ Section visual only (no headers, no prose)

### For Copy Files

**File:** `issues/[number]/NN-SECTION-COPY.md`

**Content (PLAIN prose, NO escaping):**
```
**Visual & Brand**

Visible authorship claims, brands that announce presence subtly, 
marks that prove someone was here thinking. The signature as substance.

https://www.underconsideration.com/brandnew
https://example.com/reference
```

**Rules:**
- ❌ NO backslash escapes (\_like_this\_)
- ❌ NO code block markers (```)
- ✅ Write naturally, as you would in any article
- ✅ Section title as bold markdown: `**Section Name**`
- ✅ 2-4 sentences of copy
- ✅ Links as plain URLs (https://...)
- ✅ Quotes, punctuation, symbols—write normally

### For Cover Art

**File:** `issues/[number]/00-COVER-ART.txt`

**Content (PLAIN, no backticks):**
```
██████╗ ██████╗ ██████╗ ™
██╔══██╗██╔══██╗██╔══██╗
██║  ██║██████╔╝██████╔╝
██║  ██║██╔══██╗██╔══██╗
██████╔╝██████╔╝██████╔╝
╚═════╝ ╚═════╝ ╚═════╝

Design By Bulletin™
━━━━━━━━━━━━━━━━━━━━━━━━━
Issue XXX
THEME NAME • DATE
━━━━━━━━━━━━━━━━━━━━━━━━━

[Theme-specific visual ASCII art here]

        THEME IN CAPS
```

**Rules:**
- ❌ NO backticks
- ✅ Logo (DBB text art)
- ✅ Masthead (divider, issue #, theme, date)
- ✅ Theme visual (custom ASCII)
- ✅ Theme name in caps at bottom

### For Metadata Footer

**File:** `issues/[number]/NN-METADATA-FOOTER.txt`

**Content (PLAIN):**
```
██████╗ ██████╗ ██████╗ ™
██╔══██╗██╔══██╗██╔══██╗
██║  ██║██████╔╝██████╔╝
██║  ██║██╔══██╗██╔══██╗
██████╔╝██████╔╝██████╔╝
╚═════╝ ╚═════╝ ╚═════╝

Design By Bulletin™
━━━━━━━━━━━━━━━━━━━━━━━━━
Issue XXX
THEME NAME • DATE
━━━━━━━━━━━━━━━━━━━━━━━━━
"A single powerful closing quote that captures the essence of the issue."
```

**Rules:**
- ❌ NO backticks
- ✅ Logo + masthead (same as cover)
- ✅ Single closing quote (1 sentence, powerful, thematic)

---

## STAGE 2: VALIDATION (Editorial Director)

Editorial Director checks:

```python
def validate_issue(issue_path: Path) -> bool:
    """Validate issue structure before sending to Telegram."""
    
    # 1. Check cover exists
    cover = issue_path / "00-COVER-ART.txt"
    if not cover.exists():
        raise ValueError(f"Missing cover: {cover}")
    
    # 2. Check all sections have both art and copy
    section_count = 0
    for num in range(1, 50):  # Check up to 50 sections (flexible)
        art_file = issue_path / f"{num:02d}-SECTION-ART.txt"
        copy_file = issue_path / f"{num:02d}-SECTION-COPY.md"
        
        has_art = art_file.exists()
        has_copy = copy_file.exists()
        
        if has_art and has_copy:
            section_count += 1
            # Check for backticks in art
            art_content = art_file.read_text()
            if "```" in art_content:
                raise ValueError(f"Art file has backticks (remove them): {art_file}")
            
            # CRITICAL: Check for placeholder text in art (REJECT if found)
            placeholder_patterns = [
                "visual representation",
                "[Add ASCII art",
                "[Section",
                "visual description"
            ]
            for pattern in placeholder_patterns:
                if pattern.lower() in art_content.lower():
                    raise ValueError(f"Art file has PLACEHOLDER TEXT (not actual ASCII): {art_file}\nContent: {art_content[:100]}\n✗ Design must create actual ASCII visuals before announcing completion.")
            
            # Check for escaping in copy
            copy_content = copy_file.read_text()
            if has_escaping(copy_content):
                raise ValueError(f"Copy file is pre-escaped (remove escapes): {copy_file}")
        
        elif has_art or has_copy:
            raise ValueError(f"Section {num:02d} incomplete: both art AND copy required")
    
    if section_count == 0:
        raise ValueError("No sections found")
    
    # 3. Check metadata footer exists
    footer = issue_path / f"{section_count+1:02d}-METADATA-FOOTER.txt"
    if not footer.exists():
        raise ValueError(f"Missing metadata footer: {footer}")
    
    return True

def has_escaping(text: str) -> bool:
    """Check if text has MarkdownV2 escaping (backslash before special char)."""
    escape_pattern = r'\\[_*\[\]()~`>#+=\-|{}.!]'
    return bool(re.search(escape_pattern, text))
```

**When validation passes:**
- ✅ Issue is ready for Telegram rendering
- ✅ Bot can safely apply formatting
- ❌ If validation fails, STOP—don't send to Telegram

---

## STAGE 3: TELEGRAM RENDERING (Bulletin Bot)

Bot transforms raw content into Telegram MarkdownV2 format.

### Assembly (Flat Structure)

The bot assembles issues in two methods:

#### For 11-section format (Issues 001-020): Individual Messages Per Section

**CRITICAL FIX:** Each section sends as TWO separate Telegram messages:
1. Section visual in its own code block
2. Section prose below it (MarkdownV2)

Do NOT merge all visuals into one giant code block.

**Correct format:**
```
Message 1: Cover visual (```...```)
Message 2: Masthead visual (```...```)
Message 3: Section 01 visual (```...```)
Message 4: Section 01 prose (MarkdownV2)
Message 5: Section 02 visual (```...```)
Message 6: Section 02 prose (MarkdownV2)
... (repeat for sections 03-11)
```

**Why separate messages?**
- Code blocks work best under ~600 chars wide
- Monospace rendering stays clean per section
- Prose formatting (bold, links, escaping) stays separate from ASCII
- User can read/scroll naturally

**Implementation:**
```python
# Send cover
send_telegram(f"```\n{cover_art}\n```")

# For each section 01-11:
for section in sections:
    # Send visual in code block
    send_telegram(f"```\n{section.art}\n```")
    
    # Send prose with MarkdownV2 escaping
    prose = f"**{section.title}**\n\n{section.copy}"
    prose_escaped = escape_markdownv2(prose)
    send_telegram(prose_escaped, parse_mode="MarkdownV2")
```

**ACT 2 (Alternative: All prose at once):**
```python
act2_parts = []
for section in manifest.get("act2", {}).get("sections", []):
    # Load art visual
    ascii_content = art_file.read_text().strip()
    # Strip backticks if somehow present (shouldn't be)
    if ascii_content.startswith("```"):
        ascii_content = ascii_content[3:]
    if ascii_content.endswith("```"):
        ascii_content = ascii_content[:-3]
    
    # Add backticks for code block
    section_parts.append(f"```\n{ascii_content.strip()}\n```")
    
    # Add prose (no escaping here - bot handles at send time)
    prose_content = copy_file.read_text().strip()
    section_parts.append(prose_content)
    
    act2_parts.append("\n\n".join(section_parts))

act2 = "\n\n".join(act2_parts)
return act1, act2  # Ready for Telegram
```

#### For 6-section format (Issues 021+): `_assemble_issue_new_format()`

**ACT 1 (Visuals only):**
```python
act1_parts = []
# Load cover + all 6 section visuals (no backticks in files)
act1_raw = "\n\n".join(act1_parts)
act1 = f"```\n{act1_raw}\n```"  # ← Wrap in backticks
return act1  # Ready for Telegram
```

**ACT 2 (Sections with paired art + prose):**
```python
act2_parts = []
for i in range(1, section_count + 1):
    section_parts = []
    
    # Load section visual
    ascii_content = art_file.read_text().strip()
    # Add backticks for code block
    section_parts.append(f"```\n{ascii_content.strip()}\n```")
    
    # Load section prose (no escaping - bot handles at send time)
    prose_content = copy_file.read_text().strip()
    section_parts.append(prose_content)
    
    act2_parts.append("\n\n".join(section_parts))

# Load footer
act2_parts.append(footer_file.read_text().strip())
act2 = "\n\n".join(act2_parts)
return act1, act2  # Ready for Telegram
```

### Format Validation

```python
def format_act1_for_telegram(content: str) -> str:
    """
    Validate ACT 1 (visual) code block for Telegram monospace rendering.
    
    Content MUST already have backticks added by _assemble_issue().
    This function validates structure, does NOT add backticks.
    """
    if not content or len(content.strip()) == 0:
        raise ValueError("ACT 1 content is empty")
    
    # Validate backticks are present and correct
    if not content.startswith("```\n"):
        raise ValueError("Message must start with triple backticks followed by newline")
    if not content.endswith("\n```"):
        raise ValueError("Message must end with newline followed by triple backticks")
    if content.count("```") != 2:  # Opening + closing pair
        raise ValueError(f"Message must have exactly 2 backtick pairs, got {content.count('```')}")
    
    return content  # Return as-is (already formatted)
```

### Telegram Sending

**Implementation:** `BulletinBot.handle_digest()` and `BulletinBot.handle_preview()`

```python
def handle_digest(self, user_id: int) -> Dict:
    """Send complete issue (ACT 1 + ACT 2) to Telegram."""
    issue_path = self._get_latest_issue_path()
    
    # Assemble issue (adds backticks)
    act1, act2 = self._assemble_issue(issue_path)
    
    # Validate format
    message_1 = format_act1_for_telegram(act1)  # Validates backticks exist
    message_2 = format_act2_for_telegram(act2)  # Validates prose format
    
    # Return for sending
    return {
        "command": "digest",
        "messages": [
            {"message": message_1, "parse_mode": "MarkdownV2"},  # ACT 1 with ```
            {"message": message_2, "parse_mode": "MarkdownV2"}   # ACT 2 with sections
        ]
    }

def handle_preview(self, user_id: int) -> Dict:
    """Send visuals only (ACT 1) to Telegram."""
    issue_path = self._get_latest_issue_path()
    
    # Assemble and validate
    act1, _ = self._assemble_issue(issue_path)
    message = format_act1_for_telegram(act1)  # Validates backticks exist
    
    return {
        "message": message,
        "parse_mode": "MarkdownV2"  # Critical: always this value
    }
```

**Key points:**
- ✅ ACT 1 contains backticks: ``...code...``
- ✅ ACT 2 contains section art with backticks + prose without escaping (yet)
- ✅ Escaping is applied by Telegram message tool when sending
- ✅ parse_mode="MarkdownV2" tells Telegram to respect backticks as code block
- ✅ Result: Cover art in monospace + sections with paired art (monospace) + copy (plain)

**Telegram rendering with MarkdownV2:**
- ✅ Text wrapped in ``` renders in monospace (gray box)
- ✅ Text outside ``` renders as plain text
- ✅ Special characters in plain text are escaped by message tool
- ✅ Special characters inside code blocks are preserved as-is
- ✅ Perfect alignment and formatting preserved

---

## Example: Issue 017 (5 sections)

### STAGE 1: Agent Output (Raw)

Managing Editor creates the art and copy files:

**File:** `issues/017/00-COVER-ART.txt`
```
██████╗ ██████╗ ██████╗ ™
██╔══██╗██╔══██╗██╔══██╗
██║  ██║██████╔╝██████╔╝
██║  ██║██╔══██╗██╔══██╗
██████╔╝██████╔╝██████╔╝
╚═════╝ ╚═════╝ ╚═════╝

Design By Bulletin™
━━━━━━━━━━━━━━━━━━━━━━━━━
Issue 017
Discovery • May 8, 2026
━━━━━━━━━━━━━━━━━━━━━━━━━

     ▪
    ▪ ▪
   ▪ ▪ ▪

      DISCOVERY
```

**File:** `issues/017/01-SECTION-ART.txt`
```
◈────◈
│ ◆◆ │
│  ▲ │
◈────◈
```

**File:** `issues/017/01-SECTION-COPY.md`
```
**Visual**

Design as discovery. What happens when you look closely at what's already here?

https://www.example.com/visual
```

(Repeat 02-05 for other sections)

**File:** `issues/017/06-METADATA-FOOTER.txt`
```
██████╗ ██████╗ ██████╗ ™
██╔══██╗██╔══██╗██╔══██╗
██║  ██║██████╔╝██████╔╝
██║  ██║██╔══██╗██╔══██╗
██████╔╝██████╔╝██████╔╝
╚═════╝ ╚═════╝ ╚═════╝

Design By Bulletin™
━━━━━━━━━━━━━━━━━━━━━━━━━
Issue 017
Discovery • May 8, 2026
━━━━━━━━━━━━━━━━━━━━━━━━━
"Discovery is remembering that everything was made by someone."
```

### STAGE 2: Validation

Editorial Director validates Issue 017:

```bash
python validator.py issues/017
# Result: ✅ VALID
#   Issue 017: Discovery
#   All 5 sections present and correctly structured
```

### STAGE 3: Telegram Rendering

Bulletin Bot publishes Issue 017 to Telegram:
1. Cover message (code block with logo + masthead)
2. Section 1: art (code block) + copy (escaped, plain text)
3. Section 2: art + copy
4. Section 3: art + copy
5. Section 4: art + copy
6. Section 5: art + copy
7. Footer message (code block with closing quote)

**7 Telegram messages**, properly formatted and ready for subscribers.

---

## Validation Checklist

### For Agents (Managing Editor)

- [ ] Output raw content (no backticks, no escapes)
- [ ] Write art as pure ASCII (no formatting)
- [ ] Write copy naturally (special chars are fine)
- [ ] Create both art AND copy for each section
- [ ] Number files sequentially (01, 02, 03, etc.)
- [ ] Include cover art (00-COVER-ART.txt)
- [ ] Include metadata footer

### For Editorial Director

- [ ] Run validation: `python validator.py issues/[number]`
- [ ] Result: ✅ VALID
- [ ] Preview with `/admin-preview [number]`
- [ ] Only send if validation passes

### For Bulletin Bot

- [ ] Read raw art and copy files
- [ ] Wrap art in code blocks (this is where backticks are added)
- [ ] Escape copy for MarkdownV2 (this is where escaping happens)
- [ ] Send multiple messages (one per section + cover + footer)
- [ ] Always use `parse_mode="MarkdownV2"`

---

## Summary

**NEVER do formatting in the agent layer.** Agents output raw content. The Bulletin Bot applies formatting at send time.

This prevents:
- ✅ Double-escaping (agent escapes + bot escapes)
- ✅ Backtick confusion (wrapped multiple times)
- ✅ Inconsistent formatting (one source of truth)
- ✅ Maintenance nightmares (rules in one place)

**One pipeline. Three stages. Clean separation of concerns.**
