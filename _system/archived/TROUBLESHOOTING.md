# TROUBLESHOOTING — Archive Pipeline & Agents

**Single source of truth for known issues and solutions specific to the Archive pipeline.**

---

## Pipeline Issues

### Coda (Archivist) Reports Incomplete

**Symptom:** `archivist-report.md` is sparse, missing category analysis, or shows "No images found"

**Root cause:** Either `images/selects/` directory is missing or `archive-log.md` is malformed

**Solution:**
1. Verify directory exists:
```bash
ls -la openclaw-artifacts/images/selects/
```
If missing, create it:
```bash
mkdir -p /Users/blackmachete/openclaw-artifacts/images/selects/
```

2. Verify `archive-log.md` format:
   - Entries are append-only
   - Each entry has: DATE, FILE, CATEGORY, PROMPT SUMMARY, CURATOR NOTE
   - File names match pattern: `gen_[category]_[number].jpg`

3. Re-run Coda. It should scan fresh state.

---

### Maeve (Archeologist) Can't Find VISUAL-DNA.md

**Symptom:** "Error: VISUAL-DNA.md not found" or prompt generation fails at start

**Root cause:** Path reference is wrong, or `VISUAL-DNA.md` doesn't exist

**Solution:**
1. Verify file exists:
```bash
ls /Users/blackmachete/openclaw-artifacts/VISUAL-DNA.md
```

2. If missing, check backup locations:
```bash
find /Users/blackmachete -name "VISUAL-DNA*" 2>/dev/null
```

3. If file was moved or deleted, restore from git or recreate from `MEMORY.md` aesthetic notes.

---

### Maeve Generates Weak Prompts

**Symptom:** Victor keeps redirecting Maeve's candidates, or prompts read as "too generic," "too documentary," or "missing visual specificity"

**Root cause:** Maeve not fully reading VISUAL-DNA before generating, or not grounding concept in specific cultural/historical context

**Solution:**
1. **Force re-read before generation** — Maeve must read `VISUAL-DNA.md` line-by-line, not from memory
   
2. **Check NEVER LIST fails:**
   - ❌ Reads as archaeology textbook? Rewrite to be "imagined and devotional"
   - ❌ Uses emotional adjectives ("haunting," "mysterious," "dramatic")? Remove them
   - ❌ Missing surface texture, lighting, material, composition, atmosphere? Add all five

3. **Strengthen cultural grounding:**
   - Don't say "ancient vessel" → say "imagined neolithic threshold object informed by Scandinavian astronomical markers and ceremonial geometry"
   - Ground in *specific* practice or belief, not generic "ancient"
   - Never mention grounding in the prompt itself — let VISUAL-DNA speak

4. **Check color + material + lighting:**
   - Is every color intentional and serving emotion/narrative? (not accidental)
   - Is material specified (stone, ceramic, bone, metal, unknown)? 
   - Is lighting warming and atmospheric or sharp/documentary? (should be warming)

---

### Victor Keeps Redirecting

**Symptom:** Every Maeve candidate gets "REDIRECT" decision, with feedback like "category imbalanced" or "aesthetic drift detected"

**This is not a failure.** Victor is enforcing collection balance and coherence. However:

**Root cause:** Maeve is proposing same category repeatedly, or candidate doesn't fit collection arc

**Solution:**
1. **Read Victor's REDIRECT feedback carefully** — he specifies exactly which category to explore instead and why

2. **For category imbalance:**
   - Read Coda's last `archivist-report.md` 
   - Victor will have flagged underrepresented categories
   - Propose from that category next

3. **For aesthetic drift:**
   - Maeve's visual language is drifting from VISUAL-DNA
   - Go back to VISUAL-DNA.md and re-align
   - Victor will re-evaluate

**Normal workflow when redirects happen:**
1. Victor issues REDIRECT with category and context
2. Maeve generates new candidate using Victor's feedback
3. Victor re-evaluates
4. Repeat until APPROVED

This is the system working correctly, not a bug.

---

## Coda-Specific Issues

### Coda Won't Load on Main / Redirects to Webchat

**Symptom:** Browser shows "401 Unauthorized" for control-ui-config.json, or Coda loads but immediately redirects to webchat. Other agents (Maeve, Victor) load fine.

**Root cause:** Stale device registration or corrupted session state in `~/.openclaw/devices` or `~/.openclaw/agents/coda/sessions/`

**Solution:**

1. **Clear device and session state:**
```bash
rm -rf ~/.openclaw/devices ~/.openclaw/agents/coda/sessions
```

2. **Restart gateway:**
```bash
openclaw gateway restart
```

3. **Clear browser completely:**
   - DevTools → **Storage** → **Clear site data for localhost:18789**
   - DevTools → **Service Workers** → **Unregister**
   - Browser cache: **Shift+Cmd+Delete**
   - Close tab completely and open new tab

4. **Load with token:**
```
http://127.0.0.1:18789/#token=[YOUR_GATEWAY_TOKEN]
```

Coda should now load as default agent on "main."

**Why this works:** The gateway rebuilds device pairing and session state from scratch, clearing any corruption from previous restarts or failed initializations.

**Prevention:** Restart gateway cleanly (`openclaw gateway restart`, not `pkill`) to avoid stale device state.

---

### Coda Missing Bootstrap Files

**Symptom:** Coda loads but has no SOUL, AGENTS instructions, or appears blank

**Root cause:** Missing bootstrap files in `~/.openclaw/workspace-coda/`

**Solution:** Verify these files exist:
- `IDENTITY.md` ✅
- `SOUL.md` ✅
- `AGENTS.md` ✅
- `USER.md` ✅
- `MEMORY.md` ✅

If any are missing, copy from a working agent (Maeve/Victor) and customize for Coda's role.

---

## Agent Communication Issues

### Agents Not Seeing Each Other's Output

**Symptom:** Maeve says "I can't read the archivist-report.md that Coda just created" or Victor can't find `archeologist-candidate.md`

**Root cause:** File written to wrong location, or agent reading from stale cache

**Solution:**
1. **Verify file locations after each agent:**
   - Coda outputs: `archivist-report.md` (in `openclaw-artifacts/`)
   - Maeve outputs: `archeologist-candidate.md` (in `openclaw-artifacts/`)
   - Victor reads both, plus `archive-log.md`

2. **Clear any cached reads:**
   - If agent claims file doesn't exist but you can see it, restart the agent
   - Force re-read by having agent explicitly list directory:
   ```bash
   ls -la openclaw-artifacts/ | grep -E "archivist|archeologist|curator"
   ```

3. **Check file permissions:**
   - Agents need read access to all input files
   - Verify: `ls -l openclaw-artifacts/archivist-report.md` shows `-rw-r--r--` or similar

---

### Transcription/Formatting Errors in Reports

**Symptom:** Archivist report is malformed, missing sections, or has corrupted text

**Root cause:** Agent encountered error while writing or reading files with special characters

**Solution:**
1. **For archivist-report.md:**
   - Delete the malformed file
   - Re-run Coda from scratch
   - Coda will regenerate fresh report

2. **For archeologist-candidate.md or curator-decision.md:**
   - Check if the prompt text contains backticks or markdown formatting that breaks the output
   - Victor/Maeve should escape special characters in prompts
   - Re-run the agent to regenerate

---

## Stylistic Lens Issues

### ANDERSON-SYMMETRY-LENS Not Applied

**Symptom:** Prompt generated but doesn't show symmetry, centered composition, or narrow palette

**Root cause:** Lens tag not included in generation request, or Maeve didn't read the lens file before generating

**Solution:**
1. **Include lens tag explicitly:**
   - Generation request must say: `[ANDERSON-SYMMETRY-LENS: ON]`
   - Maeve checks for this tag before generating
   - If tag is absent, lens is off by default

2. **Verify Maeve read the lens:**
   - Maeve should report in output: "ANDERSON-SYMMETRY-LENS: ON applied"
   - Check the NEVER LIST for Anderson-specific checks (dead-center, bilateral symmetry, planimetric angle, narrow palette)

3. **If lens didn't apply but tag was present:**
   - Verify `ANDERSON-SYMMETRY-LENS.md` exists in `openclaw-artifacts/`
   - Maeve reads it after SOUL-MAEVE.md and before VISUAL-DNA.md

---

### Lens Conflicts with VISUAL-DNA

**Symptom:** Lens and VISUAL-DNA seem to contradict (e.g., "perfect symmetry" vs "irregular with intention")

**This is intentional.** The lens is a *constraint* added on top of VISUAL-DNA, not a replacement.

**Solution:**
- When both are active, lens *defines* composition while VISUAL-DNA defines emotional tone
- Example: perfect bilateral symmetry (lens) + wonder + emotional resonance (VISUAL-DNA) = constructed artifice enabling emotion
- If a conflict genuinely breaks the prompt, Victor redirects with feedback

---

## File & Directory Issues

### Missing images/selects/ Directory

**Symptom:** Coda says "No images directory found" or Curator can't verify generated images

**Solution:**
```bash
mkdir -p /Users/blackmachete/openclaw-artifacts/images/selects/
```

Ensure it exists before running Coda.

---

### Archive Log Entries Not Appending

**Symptom:** `archive-log.md` doesn't update after Victor approves a piece

**Root cause:** Victor's LOG ENTRY section wasn't copied correctly, or file permissions prevent appending

**Solution:**
1. Verify file is writable:
```bash
ls -l /Users/blackmachete/openclaw-artifacts/archive-log.md
```
Should show `-rw-r--r--` or `-rw-------`. If read-only (`-r--r--r--`), fix:
```bash
chmod 644 /Users/blackmachete/openclaw-artifacts/archive-log.md
```

2. Manually append entry if automation failed:
   - Copy the LOG ENTRY from Victor's decision
   - Open `archive-log.md`
   - Scroll to `## Generated Pieces` section
   - Paste entry at the end
   - Save

---

### Agent Reports Overwriting Old Data

**Symptom:** Previous archivist report disappeared after Coda ran again, or candidate files got deleted

**This is intentional.** Coda overwrites `archivist-report.md` every run (fresh state). Victor's decisions are append-only.

**Solution:**
- `archivist-report.md` — regenerates fresh each time (overwrites previous)
- `archive-log.md` — append-only, never deleted
- `archeologist-candidate.md` — overwrites when Maeve generates new candidate
- `curator-decision.md` — could append or overwrite depending on workflow (clarify with Victor)

If you need to preserve old reports for reference:
```bash
cp archivist-report.md archivist-report-2026-05-06.md
```

---

## Authentication & Environment Issues

### Agents Can't Access Anthropic API

**Symptom:** "No API key found" or "Unauthorized: anthropic provider not configured"

**Root cause:** See `/Users/blackmachete/openclaw-artifacts/CLAUDE.md` troubleshooting section

**Quick fix:**
1. Ensure `$ANTHROPIC_API_KEY` is in environment:
```bash
echo $ANTHROPIC_API_KEY
```

2. If empty, source `.zshrc`:
```bash
source ~/.zshrc
```

3. If agents are running in isolation, they may need local auth-profiles.json (see CLAUDE.md "Agent Auth Store" section)

---

## OpenClaw Gateway Issues

**For gateway, multi-agent auth, bonjour plugin, WebSocket connection, or port issues:**

**See:** `/Users/blackmachete/openclaw-artifacts/CLAUDE.md`

All OpenClaw-level troubleshooting is documented there. This file covers pipeline-specific issues only.

---

## Debugging Workflow

**If something breaks:**

1. **Identify which agent failed:**
   - Coda: Check `archivist-report.md` incomplete or missing
   - Maeve: Check `archeologist-candidate.md` incomplete or with errors
   - Victor: Check `curator-decision.md` missing or malformed

2. **Check output file location:**
```bash
ls -la openclaw-artifacts/ | grep -E "archivist|archeologist|curator"
```

3. **Check file permissions:**
```bash
ls -l openclaw-artifacts/*.md
```

4. **Read the agent's error message carefully:**
   - Note exact file path it couldn't find
   - Note exact error (not found, permission denied, parse error, etc.)

5. **Verify dependencies are readable:**
   - Coda needs: `images/selects/` + `archive-log.md`
   - Maeve needs: `VISUAL-DNA.md` + `archivist-report.md` + (optional lens files)
   - Victor needs: `archive-log.md` + `archivist-report.md` + `archeologist-candidate.md`

6. **If still stuck:**
   - Restart gateway: `pkill -f openclaw-gateway && sleep 2 && openclaw gateway &`
   - Clear agent state: `rm -rf ~/.openclaw/agents/coda/sessions/` (etc. for each agent)
   - Re-run from Coda step one

---

## When to Escalate

**These issues require Alfred's input:**
- Project aesthetic is drifting (Victor's assessment, but Alfred decides direction)
- Category imbalance isn't fixable by Victor's redirects (workflow may need adjustment)
- Archive goal needs timeline adjustment
- New feature request (new lens, new category, new workflow phase)

**These you can fix yourself:**
- File location/permission issues
- Malformed reports (delete and regenerate)
- Lens not applying (ensure tag is present, file exists)
- Agent missing output (check dependencies, re-run agent)

---

**Last updated:** 2026-05-06

**Related files:**
- `ANDERSON-SYMMETRY-LENS.md` — lens framework
- `/Users/blackmachete/openclaw-artifacts/CLAUDE.md` — OpenClaw setup & troubleshooting
