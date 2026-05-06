# Security Standards — All Projects

**MANDATORY for all projects** — new and old. Every project must follow these standards.

---

## TL;DR — The Rules

**NEVER commit to git:**
- API keys, tokens, passwords
- `.openclaw/` config directories
- `*.env*` files
- Database credentials
- Private keys, certificates
- Any file with `SECRET`, `CREDENTIALS`, `KEY`, `TOKEN` in the name

**ALWAYS use:**
- Environment variables for secrets
- Placeholders in documentation: `[YOUR_TOKEN_HERE]`
- Dynamic references: `$(openssl rand -hex 32)`
- `.gitignore` rules below

**ALWAYS test before commit:**
```bash
git diff --cached | grep -iE "secret|api.?key|password|token"
```

---

## Standard .gitignore (All Projects)

**Every project MUST have this in `.gitignore`:**

```gitignore
# Secrets & Credentials
.env
.env.local
.env.*.local
.env.production
*.enc
*.key
*.pem
CREDENTIALS*
SECRET*
TOKENS*
.credentials
auth-profiles.json

# System/Config (may contain secrets)
.openclaw/
openclaw.json
.aws/
.gcloud/
.docker/
.ssh/

# Session/Local state (may contain tokens)
.sessions/
sessions/
*.session
.cache/
.tmp/

# IDE/Tool configs (may contain credentials)
.idea/
.vscode/config
.vscode/settings
.env.local.json
settings.local.json

# Common secrets files
config/secrets.*
config/credentials.*
.secrets/
secrets/
private/
confidential/

# OS/Build artifacts
node_modules/
.DS_Store
.cache/
dist/
build/
*.log

# Patterns
*.key.json
*_token*
*-credentials*
*-secret*
```

Copy this verbatim to all projects. Do not customize or remove rules.

---

## Standard Template: Documentation With Secrets

When you write documentation that references tokens, API keys, etc.:

❌ **WRONG:**
```markdown
# Setup

Add this to your ~/.zshrc:
export ANTHROPIC_API_KEY="sk-ant-v7-abc123xyz789..."

# Connect to gateway
curl http://127.0.0.1:18789/#token=ba85e09db4e23965753c977916fa85bc98299c695a07dde9
```

✅ **RIGHT:**
```markdown
# Setup

1. Get your Anthropic API key from https://console.anthropic.com/
2. Add to your ~/.zshrc:
   ```bash
   export ANTHROPIC_API_KEY="your-actual-key-here"
   ```

3. Get your gateway token:
   ```bash
   openclaw config get gateway.auth.token
   ```

4. Connect to gateway using your token:
   ```
   http://127.0.0.1:18789/#token=[GATEWAY_TOKEN_FROM_STEP_3]
   ```

Or use the token directly:
```bash
GATEWAY_TOKEN=$(openclaw config get gateway.auth.token)
curl http://127.0.0.1:18789/ -H "Authorization: Token $GATEWAY_TOKEN"
```
```

**Pattern:**
- Show HOW to get the secret (command/url)
- Use `[PLACEHOLDER]` for actual values
- Use `$(command)` for dynamic values
- NEVER paste real tokens/keys

---

## Standard .gitignore Placement

Place in:
1. **Repository root** — `repo/.gitignore` (primary)
2. **Subdirectories** — if they have their own git repos
3. **Project directories** — `projects/project-name/.gitignore`

All should reference the same rules. Use symlinks if needed:
```bash
ln -s ../../.gitignore projects/my-project/.gitignore
```

---

## Standard Pre-Commit Hook (Optional but Recommended)

Create `~/.git-hooks/pre-commit`:

```bash
#!/bin/bash
# Prevent commits of secrets

set -e

# Patterns that should NEVER be committed
FORBIDDEN_PATTERNS=(
    "ANTHROPIC_API_KEY="
    "api.?key.*="
    "sk-ant-"
    "sk-[a-z0-9]"
    "password.*="
    "token.*="
    "secret.*="
    "credentials.*="
    "\[YOUR_"
)

# Check staged files
echo "🔐 Checking for secrets in staged changes..."

for pattern in "${FORBIDDEN_PATTERNS[@]}"; do
    if git diff --cached | grep -iE "$pattern" > /dev/null; then
        echo "❌ BLOCKED: Found pattern '$pattern' in staged changes"
        echo "   This looks like a secret. Do not commit."
        exit 1
    fi
done

echo "✅ No secrets detected"
exit 0
```

Install globally:
```bash
mkdir -p ~/.git-hooks
chmod +x ~/.git-hooks/pre-commit

# Configure git to use it
git config --global core.hooksPath ~/.git-hooks
```

---

## Standard Checklist Before Every Commit

**Before `git push`, verify:**

- [ ] No `.env` files staged
- [ ] No `openclaw.json` with tokens staged
- [ ] No `auth-profiles.json` staged
- [ ] `git diff --cached` shows no API keys
- [ ] Documentation uses `[PLACEHOLDERS]` not real tokens
- [ ] `.gitignore` includes all sensitive patterns
- [ ] No hardcoded credentials in code comments

```bash
# One-liner check
git diff --cached | grep -iE "secret|api.?key|password|token|sk-ant-|CREDENTIALS|\.env" && echo "⚠️ DANGER: Found secret pattern" && exit 1 || echo "✅ Safe to commit"
```

---

## Incident Response: Exposed Secret

If a secret is committed and pushed:

1. **Immediately regenerate** the credential:
   ```bash
   # Example: OpenClaw token
   openclaw config set gateway.auth.token "$(openssl rand -hex 32)"
   
   # Example: API key
   # Go to the service (Anthropic, etc.) and generate new key
   ```

2. **Remove from documentation** where it was exposed

3. **Purge from git history:**
   ```bash
   pip install git-filter-repo
   git filter-repo --replace-text <(echo 'exposed_secret==[REDACTED]')
   git push origin --force-with-lease main
   ```

4. **Notify stakeholders** if others have cloned the repo (they need to rebase)

5. **Document in `SECURITY-FIX.md`** what happened and how you fixed it

---

## Secrets Storage Hierarchy

**Order of preference** (best → worst):

1. **Environment variables** (best)
   ```bash
   export ANTHROPIC_API_KEY="..."
   openclaw agent --agent coda -m "test"
   ```

2. **`.env` file** (in .gitignore)
   ```
   # .env (never committed)
   ANTHROPIC_API_KEY=sk-ant-...
   ```
   Load in shell: `source .env`

3. **GitHub Secrets** (for CI/CD)
   - Repo Settings → Secrets and variables → Actions
   - Reference: `${{ secrets.MY_SECRET }}`

4. **System keychain** (macOS/Linux)
   ```bash
   security add-generic-password -a claude -s "anthropic-key" -w "sk-ant-..."
   security find-generic-password -a claude -s "anthropic-key" -w
   ```

5. **Encrypted files** (if secret is large)
   - Encrypt with GPG: `gpg --symmetric file.json`
   - Commit `.gpg` file
   - Store passphrase in GitHub Secrets or `.env`

**NEVER:** Hardcode in code, docs, or commit messages.

---

## Specific Projects — Security Checklist

### openclaw-artifacts

- [ ] `.openclaw/` is in `.gitignore` ✅
- [ ] `openclaw.json` with tokens is NOT committed ✅
- [ ] `auth-profiles.json` is NOT committed ✅
- [ ] Documentation uses `[YOUR_TOKEN]` placeholders ✅
- [ ] `SECURITY-FIX.md` documents the incident
- [ ] Pre-commit hook installed

### bulletin-board

- [ ] Inherits `.gitignore` from parent or has own copy ✅
- [ ] No tokens in `DESIGN-BY-BULLETIN.md` or other docs ✅
- [ ] No credentials in `AGENT-WORKFLOWS.md` ✅
- [ ] `COLLABORATION-SPACE.md` uses placeholders ✅

### New Projects

- [ ] Copy `.gitignore` from standard above
- [ ] Add to `SECURITY-STANDARDS.md` checklist
- [ ] Never commit `.env`, config files with secrets
- [ ] Use placeholders in all documentation
- [ ] Set up pre-commit hook
- [ ] Document secrets management in project README

---

## Shared Responsibility

**For every commit:**
- Developer: Don't include secrets
- Reviewer: Check `git diff` for patterns
- CI/CD: Run secret detection

**For every project:**
- Maintainer: Keep `.gitignore` updated
- Team: Use `.env` files locally
- Security: Monitor for patterns

---

## Tools for Automated Detection

### Option 1: detect-secrets (Python)

```bash
pip install detect-secrets

# Scan entire repo
detect-secrets scan --all-files

# Update baseline after adding legitimate secrets to docs
detect-secrets scan --all-files --baseline .secrets.baseline
```

### Option 2: git-secrets (Bash)

```bash
brew install git-secrets

# Add patterns to block
git secrets --add 'sk-ant-'
git secrets --add '\$ANTHROPIC_API_KEY'

# Install hook
git secrets --install
```

### Option 3: GitHub Secret Scanning

Enable in repo Settings:
- Settings → Security → Secret scanning
- Enable "Push protection" to block commits

---

## Reference

- [OWASP: Secrets Management](https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html)
- [GitHub: Using secrets in GitHub Actions](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions)
- [detect-secrets](https://github.com/Yelp/detect-secrets)
- [git-secrets](https://github.com/awslabs/git-secrets)

---

## Enforcement

**These standards are NOT optional.**

Every project must:
1. Use the standard `.gitignore`
2. Document secrets as `[PLACEHOLDERS]`
3. Never commit credentials
4. Pass pre-commit checks

Violations will:
- Block pull requests
- Trigger incident response
- Require git history rewrite
- Notify all stakeholders

---

**Last updated:** 2026-05-06
**Status:** MANDATORY — All projects must comply
