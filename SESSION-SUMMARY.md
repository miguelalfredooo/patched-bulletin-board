# Session Summary — ovni_o_culto Pipeline Setup

**Date:** 2026-05-06  
**Status:** Ready for testing (after context window fix)

## Current Setup

### Project Structure
- **Workspace:** `/Users/blackmachete/openclaw-artifacts`
- **Archive:** `/Users/blackmachete/ovni_o_culto/`
- **State:** `~/.openclaw/`
- **Bootstrap files:** SOUL.md, IDENTITY.md, AGENTS.md, USER.md (all updated for ovni_o_culto)

### Three-Agent Pipeline
1. **Coda (Archivist)** — Scans archive, reports state
2. **Maeve (Archeologist)** — Generates prompt candidates
3. **Victor (Curator)** — Approves/redirects decisions

All agent files updated with "Report to Alfred" sections for chat visibility.

### Model Configuration
- **Primary:** `lmstudio/mistralai/ministral-3-14b-reasoning` (local, 256k context window)
- **Fallback:** `anthropic/claude-sonnet-4-6` (Anthropic API)
- **Config:** `~/.openclaw/openclaw.json`

### Known Issues & Fixes

**CRITICAL: LM Studio Context Window**
- Problem: LM Studio defaults to 4096 token context, but Coda's prompt is ~20,875 tokens
- Error: `"n_keep: 20875 >= n_ctx: 4096"`
- Fix: 
  1. Open LM Studio app
  2. Unload Mistral 3 14B Reasoning (click Eject or Unload)
  3. Go to Settings → increase Context Window from 4096 to **16384** (or 32768)
  4. Reload the model
  5. Start Local Server
  6. Verify: `curl -s http://localhost:1234/v1/models | jq .`

**Memory Warning** (can ignore if Mistral still loads):
- LM Studio may warn about 33.58 GB memory requirement
- M4 Mac has ~12GB free, but model runs fine with partial offload
- Not a blocker

### After Reboot Checklist

```bash
# 1. Start LM Studio
# - Go to Local Server
# - Make sure Mistral 3 14B is loaded with 16384+ context window
# - Click Start Server

# 2. Verify LM Studio is responding
curl -s http://localhost:1234/v1/models | jq .

# 3. Start OpenClaw gateway
source ~/.zshrc
openclaw gateway &
sleep 5

# 4. Verify models
openclaw models list

# 5. Access chat
# http://127.0.0.1:18789/

# 6. Test pipeline
# Ask Coda to generate archive report
```

### Files Updated
- `/Users/blackmachete/openclaw-artifacts/SOUL.md` — Coda's personality
- `/Users/blackmachete/openclaw-artifacts/IDENTITY.md` — Name, role, vibe
- `/Users/blackmachete/openclaw-artifacts/AGENTS.md` — Operating instructions + "Report to Alfred"
- `/Users/blackmachete/openclaw-artifacts/USER.md` — Alfred context
- `/Users/blackmachete/ovni_o_culto/agents/archivist.md` — Coda's workflow + Report to Alfred
- `/Users/blackmachete/ovni_o_culto/agents/archeologist.md` — Maeve's workflow + aesthetic core
- `/Users/blackmachete/ovni_o_culto/agents/curator.md` — Victor's workflow + caption format
- `/Users/blackmachete/.openclaw/openclaw.json` — Gateway config (Mistral + Anthropic)

### Next Steps (After Reboot)
1. Fix context window in LM Studio
2. Run pipeline test: Coda → Maeve → Victor
3. Generate first prompt candidate for ovni_o_culto
4. Review and iterate

### Reference Docs
- Auth fix: `/Users/blackmachete/openclaw-artifacts/AUTH-FIX.md`
- Visual DNA: `/Users/blackmachete/openclaw-artifacts/VISUAL-DNA.md`
- Pipeline: `/Users/blackmachete/ovni_o_culto/agents/pipeline.md`
