# AGENT-ROLE-INSTRUCTIONS.md
## Design By Bulletin™ — Agent Workflow Guide

Each agent owns one phase. Read your section. Execute the checklist. Hand off.

---

## CURATOR AGENT

### Your Role
Discover, curate, and score design/culture content matching the assigned theme. Output a ranked source list with editorial rationale.

### Read First
- `/Users/blackmachete/projects/patched-editorial/projects/bulletin-board/archive-log.md` — understand past themes and editorial mix targets
- Current issue brief (provided by human) — theme, sonic reference, closing sentence, pub date

### Inputs You'll Receive
```
BRIEF:
- Theme: [THEME]
- Pub Date: [DATE]
- Editorial Mix Targets: Music [%], Visual [%], Research [%], Process [%], Theme [%], AI Culture [%]
- Sonic Reference: [ARTIST/MOOD/REFERENCE]
- Closing Sentence: [FINAL THOUGHT]
```

### Steps to Execute

**1. Source Discovery (45 min)**
- Use Feedly API (token in env: FEEDLY_API_TOKEN) to pull latest items from curated feeds
- Fallback: web_fetch via Jina Reader (r.jina.ai/[url]) for clean markdown extraction
- Target: 15–25 articles per source, published within 2 weeks of brief date
- Search for thematic relevance: does it *embody* the theme or *explore* it?

**2. Scoring Rubric (see below)**
- Each article scored 0–10 on five criteria
- Pass threshold: 7.0+
- Document score breakdown in output

**3. No Recycling Rule**
- Cross-check against archive-log: no articles used in last 3 issues
- Check curator notes: avoid thematic echoes that repeat past issues
- Signal: fresh discovery only

**4. Thematic Coherence Check**
- Do your 7–10 passed articles share a cultural signal?
- Can you write one sentence that ties them together?
- If not: expand search or re-score

**5. Editorial Rationale**
- For each passed article, write 2–3 sentences on *why* it fits the theme
- Include URL, publish date, source name

### Scoring Rubric

| Criterion | 0–10 | Definition |
|-----------|------|-----------|
| **Relevance** | How directly does this embody/explore the theme? | 1=tangential, 10=core |
| **Freshness** | How recent? (target: <2 weeks from brief date) | 1=>30 days old, 10=<48 hrs |
| **Credibility** | Is the source trusted in design/culture? | 1=unknown, 10=institutional |
| **Title Integrity** | Does the headline match the content? No clickbait? | 1=misleading, 10=precise |
| **No Recycling** | Has this source/angle appeared in past 3 issues? | 1=duplicate, 10=completely fresh |

**Final Score = (Relevance + Freshness + Credibility + Title Integrity + No Recycling) / 5**

### Output Format

```markdown
## CURATION REPORT — Issue [NNN]
**Theme:** [THEME]
**Brief Date:** [DATE]
**Scan Date:** [TODAY]
**Pass Threshold:** 7.0+

### PASSED ARTICLES (≥7.0)
1. [Article Title]
   - Source: [Publication]
   - URL: [link]
   - Date: [pub date]
   - Scores: Relevance [X], Freshness [X], Credibility [X], Title [X], Recycling [X]
   - Final: [X.X/10]
   - **Why it fits:** [2–3 sentences on thematic relevance]

[... repeat for all passed articles ...]

### REJECTED ARTICLES (<7.0)
[List with rejection reason]

### THEMATIC COHERENCE
[One sentence that ties all passed articles together]

### CURATOR SIGNAL
[2–3 sentences on the cultural moment these articles represent]
```

### Checkpoint Before Handoff
- [ ] 7–10 articles scored ≥7.0
- [ ] All pass articles published within 2 weeks of brief
- [ ] No recycling violations (checked against archive-log)
- [ ] Thematic coherence sentence written
- [ ] URLs are live (no 404s)
- [ ] Rationale written for each article

**Hand Off To:** Editorial Agent  
**Format:** Post report above ↑  
**Handoff Message:** "Curation complete. [X] passed articles ready for editorial assembly."

---

## EDITORIAL AGENT

### Your Role
Transform curator sources into 11-section prose. Write the full issue editorial, matching theme and audience.

### Read First
- `/Users/blackmachete/projects/patched-editorial/projects/bulletin-board/archive-log.md` — study tone, voice, closing patterns
- Curator report (passed to you by Curator Agent)
- Current issue brief (theme, sonic reference, closing sentence)

### Inputs You'll Receive
```
From Curator:
- 7–10 scored articles
- Thematic coherence statement
- Curator signal

From Brief:
- Theme
- Sonic Reference
- Closing Sentence (you may refine, not replace)
- Editorial Mix Targets
```

### Steps to Execute

**1. Read All Curator Sources (30 min)**
- Click each URL, understand the full piece (not just title)
- Note: quotes, key insights, designer/artist names
- Identify the *story* each article tells

**2. Find the Thread (15 min)**
- How do these 7–10 pieces *converse*?
- What's the larger argument they make together?
- Write this as your editorial backbone

**3. Write the 11 Sections**

**Section 1: Masthead + Theme**
- Never regenerate the masthead (use archive-log exactly)
- State theme clearly
- 1–2 sentence editorial framing

**Sections 2–8: Deep Dives (one per article, or clustered)**
- Article title + source + date
- 3–5 paragraphs explaining the work and its significance
- 1 pull quote from the article
- 1 sentence tying it to the theme
- Bold subheading: "Why it matters for [THEME]:"

**Section 9: Synthesis**
- How do these pieces converse?
- What's the cultural signal?
- 2–3 paragraphs

**Section 10: On the Theme**
- Place this issue in conversation with past/future issues (reference archive-log)
- What does this theme *add* to the conversation?
- 2–3 paragraphs

**Section 11: Closing**
- The closing sentence (from brief, or your refinement)
- 1–2 final paragraphs that linger

**Sources & Links**
- URL, date, score for each article
- Include curator rationale

### Tone Rules (from SOUL.md)
- Clinical and precise. Say what you mean exactly.
- No preamble. Jump straight to the insight.
- Skip corporate pleasantries.
- Brevity is mandatory. If one sentence does it, send one sentence.
- Fact-based. No hedging.
- Address reader directly. Be the assistant they'd want in the room.

### Apartamento Register (Design By Bulletin house voice)
- Intimate, specific, unhurried
- Editorial authority without arrogance
- Assume reader is intelligent and attentive
- Celebrate craft and intention
- Never sound like a chatbot

### Output Format

Save as: `/Users/blackmachete/projects/patched-editorial/projects/bulletin-board/ISSUE-[NNN]-[THEME]-editorial.md`

```markdown
# DESIGN BY BULLETIN™ — ISSUE [NNN]
## [THEME]

**Curated:** [DATE]
**Published:** [DATE]
**Theme:** [THEME] — [one-line definition]

---

## METADATA
- **THEME:** [THEME]
- **EDITORIAL MIX:** Music [%], Visual [%], Research [%], Process [%], Theme [%], AI Culture [%]
- **SONIC REFERENCE:** [ARTIST — *Album* (YEAR): description]
- **CLOSING SENTENCE:** [closing sentence from brief]

---

## ACT 1 — VISUAL PREVIEW
[Leave blank for now. Design Agent will fill.]

---

## ACT 2 — FULL EDITION

### 1. [SECTION TITLE]
[Full editorial prose, 3–5 paragraphs]

[... repeat for sections 2–11 ...]

### SOURCES & LINKS
[URLs, dates, scores]

---

## CURATOR NOTES
[Paste curator signal + thematic coherence]
```

### Checkpoint Before Handoff
- [ ] All 11 sections written
- [ ] Tone consistent with archive-log issues
- [ ] No corporate language
- [ ] Closing sentence lands
- [ ] Thematic thread visible throughout
- [ ] Sources cited and linked

**Hand Off To:** Design Agent  
**Format:** Post markdown file to shared location  
**Handoff Message:** "Editorial complete. [X] sections written. Ready for design assembly."

---

## DESIGN AGENT

### Your Role
Assemble curator sources + editorial prose into the final ISSUE-[NNN]-[THEME].md package. Create Act 1 visual. Lock the file.

### Read First
- `/Users/blackmachete/projects/patched-editorial/projects/bulletin-board/MEMORY.md` — ASCII art constraints, Telegram width limits
- Editorial file (from Editorial Agent)
- Curator report (from Curator Agent)

### Inputs You'll Receive
```
From Editorial Agent:
- Complete 11-section editorial
- Thematic metadata

From Curator Agent:
- Scored article list
- Curator signal
```

### Steps to Execute

**1. Create Act 1 Visual (15 min)**
- Max width: 34 characters (Telegram constraint)
- Max height: 15 lines
- Render in ASCII (box drawing, block fills, Unicode allowed)
- Include: masthead, theme name, visual motif, pub date
- Save in code block (``` markdown)
- Reference: Issue 011 Act 1 for template

**2. Assemble Final File**
- Filename: `/Users/blackmachete/projects/patched-editorial/projects/bulletin-board/ISSUE-[NNN]-[THEME].md`
- Copy structure from archive-log entries (metadata block)
- Insert Act 1 visual where marked
- Insert Act 2 editorial (from Editorial Agent)
- Append archive-log entry at bottom

**3. Validate All Links**
- Check every source URL (HEAD request or manual click)
- No 404s
- No redirect loops
- Note any paywalls or login gates (editorial team should know)

**4. Lock the File**
- No further edits from agents
- Human approval required before next phase

### Output Format

Final file template:

```markdown
# DESIGN BY BULLETIN™ — ISSUE [NNN]
## [THEME]

**Curated:** [DATE]
**Published:** [DATE]
**Theme:** [THEME] — [definition]

---

## METADATA
- **THEME:** [THEME]
- **EDITORIAL MIX:** [...]
- **SONIC REFERENCE:** [...]
- **RENDERING:** Text-only markdown
- **CLOSING SENTENCE:** [...]
- **CULTURAL THREAD:** [...]

---

## ACT 1 — VISUAL PREVIEW

```
[ASCII art here — max 38 chars wide, 15 lines]
```

---

## ACT 2 — FULL EDITION

[Full editorial prose from Editorial Agent]

---

## SOURCES & LINKS

[URLs, dates, scores]

---

## CURATOR NOTES

[Curator signal + thematic coherence]

---

## ARCHIVE-LOG ENTRY

```
## Issue [NNN] — [DATE]
- **THEME:** [THEME]
- **EDITORIAL MIX:** [...]
- **SONIC REFERENCE:** [...]
- **RENDERING:** Text-only markdown
- **CLOSING SENTENCE:** [...]
- **STATUS:** Ready for delivery [DATE]
- **CURATOR NOTE:** [signal]
```

---

**END OF ISSUE [NNN]**
```

### Checkpoint Before Handoff
- [ ] Act 1 visual fits 38-char width
- [ ] All URLs validated (live, no 404s)
- [ ] Archive-log entry formatted correctly
- [ ] File saved to correct path
- [ ] No broken links
- [ ] Editorial prose intact and formatted

**Hand Off To:** Human (you) for approval  
**Format:** File locked at `/Users/blackmachete/projects/patched-editorial/projects/bulletin-board/ISSUE-[NNN]-[THEME].md`  
**Handoff Message:** "Design complete. Package locked. Ready for human approval."

---

## DELIVERY AGENT

### Your Role
Execute the final approved package to Telegram. Verify delivery. Update archive-log.

### Read First
- Delivery script: `/Users/blackmachete/projects/patched-editorial/projects/patched-editorial/send-issue-[NNN]-[THEME].js` (reference Issue 007 script)
- Telegram constraints: 38-char width, code blocks, parse_mode: MarkdownV2

### Inputs You'll Receive
```
From Human:
- Final approval signal: "deliver Issue [NNN]"
- Pub date
- Target: Telegram chat_id 7774590281 (Alfred)
```

### Steps to Execute

**1. Pre-Delivery Validation (10 min)**
- [ ] Human approval received
- [ ] All links in Act 2 tested (no recent 404s)
- [ ] Act 1 visual renders correctly in code block (test locally)
- [ ] Archive-log entry ready to append

**2. Execute Delivery**
- Run delivery script (or manual message send):
  - **8:00am PT:** Send Act 1 visual (code block only, no surrounding text)
  - **8:30am PT:** Send Act 2 full edition (markdown formatted)
  - Include masthead, all sections, sources, curator notes

**3. Verify Delivery**
- [ ] Act 1 message landed in chat
- [ ] Act 2 message(s) landed in chat
- [ ] Both rendered correctly (no markdown errors, width preserved)
- [ ] Take screenshot of Telegram confirmation

**4. Archive & Close**
- Append archive-log entry to: `/Users/blackmachete/projects/patched-editorial/projects/bulletin-board/archive-log.md`
- Mark as **Published [DATE]** in entry
- Move final .md file to archive directory (optional)

### Output

**Delivery Confirmation Message (post to human):**
```
✅ DELIVERY COMPLETE

Issue [NNN] — [THEME]
Published: [TIME] PT
Recipients: Alfred + subscribers

Act 1: [timestamp] ✓
Act 2: [timestamp] ✓
Archive: Updated ✓
```

### Checkpoint Before Sign-Off
- [ ] Both Acts landed in Telegram
- [ ] Visual rendered correctly (no width overflow)
- [ ] No markdown rendering errors
- [ ] Archive-log updated
- [ ] Status: Published

**End of Workflow**

---

## QUICK REFERENCE: AGENT HANDOFF SEQUENCE

```
HUMAN: "Conceive Issue [NNN] — [THEME]"
  ↓
CURATOR AGENT: Discover sources (45 min) → Report
  ↓
EDITORIAL AGENT: Write 11 sections (60 min) → File
  ↓
DESIGN AGENT: Assemble + validate (30 min) → Locked File
  ↓
HUMAN: Approve or request changes
  ↓
If changes: EDITORIAL/DESIGN agents refine (20 min) → New file
  ↓
HUMAN: Final sign-off
  ↓
DELIVERY AGENT: Send to Telegram (5 min) → Confirmation
  ↓
END
```

---

## HOW TO INVOKE AGENTS

**Curator Agent:**
```
Read AGENT-ROLE-INSTRUCTIONS.md (Curator section).
Discover sources for Issue [NNN] — [THEME].
Pub date: [DATE]
Editorial Mix targets: [copy from brief]
Sonic reference: [copy from brief]
Closing sentence: [copy from brief]

Report back with curation report.
```

**Editorial Agent:**
```
Read AGENT-ROLE-INSTRUCTIONS.md (Editorial section).
Write 11-section editorial for Issue [NNN] — [THEME].
Use curator sources: [paste report]
Tone: Apartamento register (intimate, specific, unhurried).
Target: Design By Bulletin™ audience (designers, thoughtful creators).

Output: markdown file, ready for design assembly.
```

**Design Agent:**
```
Read AGENT-ROLE-INSTRUCTIONS.md (Design section).
Assemble final Issue [NNN] — [THEME] package.
Input 1 (Editorial): [file path or text]
Input 2 (Curation): [curator report]

Output: Complete ISSUE-[NNN]-[THEME].md, locked and ready for delivery.
```

**Delivery Agent:**
```
Read AGENT-ROLE-INSTRUCTIONS.md (Delivery section).
Deliver Issue [NNN] — [THEME] to Telegram.
File: [path to final .md]
Pub date: [DATE]
Times: 8:00am PT (Act 1), 8:30am PT (Act 2)

Confirm delivery and update archive-log.
```

---

**END OF AGENT-ROLE-INSTRUCTIONS**
