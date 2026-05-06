# CRITICAL: Security Remediation — All Local Projects

**Status:** URGENT — Actual API keys found in git history

## Exposed Secrets Found

| Project | Issue | Files |
|---------|-------|-------|
| **alfredo-studio** | ⚠️ Actual API key in history | Multiple commits |
| **bulletin-board** | ⚠️ Actual API key + config file | `openclaw.json` committed |
| **carrier** | ⚠️ Actual API key in history | Multiple commits |
| **nooooowhere-club** | ⚠️ Actual API key + .env file | `.env.test` committed |
| **openclaw-mission-control** | ⚠️ Actual API key + .env file | `backend/.env.test` committed |
| **santurce** | ⚠️ Actual API key in history | Multiple commits |

---

## Immediate Actions Required

### Step 1: Regenerate ALL Exposed Credentials

**ANTHROPIC API KEY:**
1. Go to https://console.anthropic.com/
2. Revoke all old API keys
3. Generate new API key
4. Update `~/.zshrc`: `export ANTHROPIC_API_KEY="new-key-here"`
5. Reload shell: `source ~/.zshrc`

**OPENCLAW GATEWAY TOKEN:**
```bash
openclaw config set gateway.auth.token "$(openssl rand -hex 32)"
```

**Other services** (if using):
- OpenAI: https://platform.openai.com/account/api-keys (revoke old, create new)
- Anthropic: New key generated above
- Any other API: Check each repo and regenerate

### Step 2: Apply Security Standards to All Projects

Run this to protect all local repos:

```bash
#!/bin/bash
PROJECTS=(
  "/Users/blackmachete/alfredo-studio"
  "/Users/blackmachete/bulletin-board"
  "/Users/blackmachete/carrier"
  "/Users/blackmachete/nooooowhere-club"
  "/Users/blackmachete/openclaw-mission-control"
  "/Users/blackmachete/santurce"
)

for repo in "${PROJECTS[@]}"; do
  echo "🔐 Securing $repo..."
  cp /Users/blackmachete/openclaw-artifacts/.gitignore.template "$repo/.gitignore"
  cd "$repo"
  git add .gitignore
  git commit -m "SECURITY: Add comprehensive .gitignore to block secrets" || echo "Nothing to commit"
  echo "✅ $repo secured"
done
```

### Step 3: Remove Secrets from Git History

**For each project with exposed keys:**

```bash
cd /path/to/project

# Install git-filter-repo
pip install git-filter-repo

# Remove the actual API key (replace with yours)
git filter-repo --replace-text <(echo 'sk-ant-actual-key-here==[REDACTED]')

# Force push (⚠️ requires everyone to rebase)
git push origin --force-with-lease main
```

**IMPORTANT:** If others have cloned, they must rebase:
```bash
cd their-clone
git fetch origin
git rebase origin/main
```

### Step 4: Commit .gitignore Updates

For each project:
```bash
cd /path/to/project
cp /Users/blackmachete/openclaw-artifacts/.gitignore.template .gitignore
git add .gitignore
git commit -m "SECURITY: Apply mandatory .gitignore to block future secret exposure"
git push
```

### Step 5: Remove Committed Config Files

**From each project, remove files that shouldn't be committed:**

```bash
# For bulletin-board (remove openclaw.json)
cd /Users/blackmachete/bulletin-board
git rm --cached openclaw.json
git commit -m "SECURITY: Remove openclaw.json from tracking (add to .gitignore)"
git push

# For nooooowhere-club and openclaw-mission-control (remove .env files)
git rm --cached .env.test backend/.env.test
git commit -m "SECURITY: Remove .env.test files from tracking"
git push
```

### Step 6: Verify & Document

After each project is fixed:
```bash
cd /path/to/project

# Verify .gitignore is in place
git ls-files | grep -E "\.env|auth-profiles|openclaw\.json"
# Should show: (nothing)

# Verify no secrets in last 10 commits
git log -10 --all -p | grep -E "sk-ant-|ANTHROPIC_API_KEY" || echo "✅ Clean"
```

---

## Automated Remediation Script

Save as `~/secure-all-projects.sh`:

```bash
#!/bin/bash
set -e

PROJECTS=(
  "/Users/blackmachete/alfredo-studio"
  "/Users/blackmachete/bulletin-board"
  "/Users/blackmachete/carrier"
  "/Users/blackmachete/nooooowhere-club"
  "/Users/blackmachete/openclaw-mission-control"
  "/Users/blackmachete/santurce"
)

STANDARDS_DIR="/Users/blackmachete/openclaw-artifacts"

echo "🔐 SECURITY REMEDIATION: Applying standards to all projects"
echo ""

for repo in "${PROJECTS[@]}"; do
  REPO_NAME=$(basename "$repo")
  echo "═══════════════════════════════════════"
  echo "Processing: $REPO_NAME"
  echo "═══════════════════════════════════════"
  
  cd "$repo"
  
  # 1. Copy .gitignore
  echo "📋 Applying .gitignore..."
  cp "$STANDARDS_DIR/.gitignore.template" .gitignore
  
  # 2. Check for committed secrets
  echo "🔍 Scanning for exposed secrets..."
  if git ls-files | grep -qE "\.env|auth-profiles|openclaw\.json"; then
    echo "⚠️  Found tracked secret files:"
    git ls-files | grep -E "\.env|auth-profiles|openclaw\.json"
    echo "   Removing from tracking..."
    git rm --cached $(git ls-files | grep -E "\.env|auth-profiles|openclaw\.json") || true
  fi
  
  # 3. Commit changes
  if [ -n "$(git status --porcelain)" ]; then
    echo "💾 Committing security fixes..."
    git add .gitignore
    git commit -m "SECURITY: Apply mandatory .gitignore and remove tracked secrets" || echo "Nothing to commit"
    echo "📤 Pushing..."
    git push origin main || echo "⚠️  Push failed - may need manual intervention"
  fi
  
  echo "✅ $REPO_NAME secured"
  echo ""
done

echo "═══════════════════════════════════════"
echo "✅ All projects secured"
echo "═══════════════════════════════════════"
echo ""
echo "📋 Next steps:"
echo "1. Regenerate API keys at https://console.anthropic.com/"
echo "2. Update ~/.zshrc with new ANTHROPIC_API_KEY"
echo "3. Run 'openclaw config set gateway.auth.token' with new token"
echo "4. Run git filter-repo for each project to remove keys from history"
echo "5. Notify team members to rebase if they've cloned"
```

Run it:
```bash
chmod +x ~/secure-all-projects.sh
~/secure-all-projects.sh
```

---

## Checklist: Complete Remediation

### Before Cleanup
- [ ] Regenerate Anthropic API key
- [ ] Regenerate OpenClaw gateway token
- [ ] Regenerate any other API keys used
- [ ] Notify team members (if any) about security incident
- [ ] Back up any .env files locally for reference

### For Each Project
- [ ] Copy .gitignore.template
- [ ] Remove committed .env files
- [ ] Commit .gitignore update
- [ ] (Optional) Use git-filter-repo to remove keys from history
- [ ] Verify git ls-files shows no .env/openclaw.json
- [ ] Verify last 10 commits have no API keys

### After Cleanup
- [ ] All projects have .gitignore
- [ ] All committed .env files removed
- [ ] Pre-commit hook installed globally
- [ ] GitHub repos updated with clean commits
- [ ] SECURITY-STANDARDS.md in place
- [ ] Team educated on secret management

---

## Prevention

Going forward:
1. **Use environment variables:** `export ANTHROPIC_API_KEY="..."`
2. **Use .env files locally** (in .gitignore)
3. **Never commit secrets** to git
4. **Use pre-commit hook** to block accidental commits
5. **Use GitHub secret scanning** in Settings

---

## Timeline

- **2026-05-06 09:35am** — Security audit completed, secrets found
- **2026-05-06 10:00am** — SECURITY-REMEDIATION.md created
- **2026-05-06 10:15am** — Apply standards to all projects (you do this)
- **2026-05-06 10:30am** — Verify all projects clean
- **2026-05-06 11:00am** — git-filter-repo cleanup (optional but recommended)

---

**CRITICAL:** Do not commit new changes to any project until API keys are regenerated and .gitignore is in place.

