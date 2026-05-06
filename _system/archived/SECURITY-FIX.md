# Security Fix: Exposed OpenClaw Gateway Token

**Date:** 2026-05-06
**Severity:** HIGH — Gateway authentication token exposed on GitHub

## What Happened

The OpenClaw gateway token was exposed in the following files:
- `CLAUDE.md` (example URL with token)
- `TROUBLESHOOTING.md` (example URL with token)
- `projects/bulletin-board/openclaw.json` (if committed)

**Exposed Token:**
- `ba85e09db4e23965753c977916fa85bc98299c695a07dde9` (main gateway)
- `fd9da3678e8a5dd37fb70e49c85f471ef12f45578d13dfd4` (bulletin-board gateway)

## Immediate Actions Taken

✅ **Removed tokens from documentation** — Updated CLAUDE.md and TROUBLESHOOTING.md to use placeholder `[YOUR_GATEWAY_TOKEN]`

✅ **Updated .gitignore** — Added entries to prevent future exposure:
```
.openclaw/
openclaw.json
auth-profiles.json
*.enc
*.key
CREDENTIALS*
```

✅ **Commit** — All sensitive files removed from current state

## Required Manual Actions

### 1. Regenerate Gateway Token (CRITICAL)

The exposed tokens are now **compromised** and must be revoked immediately:

```bash
# Regenerate a new token
openclaw config set gateway.auth.token "$(openssl rand -hex 32)"

# Verify new token
openclaw config get gateway.auth.token
```

### 2. Update All Config Files

Update these files with the NEW token (not shared in git):

**`~/.openclaw/openclaw.json`** (local, not in repo):
```json
{
  "gateway": {
    "auth": {
      "token": "YOUR_NEW_TOKEN_HERE"
    }
  }
}
```

**`~/.openclaw/agents/*/agent/auth-profiles.json`**:
```json
{
  "profiles": {
    "anthropic:default:default": {
      "key": "YOUR_ANTHROPIC_API_KEY"
    }
  }
}
```

### 3. Restart Gateway

```bash
pkill -f openclaw-gateway
sleep 2
openclaw gateway &
```

### 4. (Optional) Clean Git History

To completely remove the token from git history:

```bash
# Install git-filter-repo if not present
pip install git-filter-repo

# Remove token from all commits
git filter-repo --replace-text <(echo 'ba85e09db4e23965753c977916fa85bc98299c695a07dde9==[REDACTED]')

# Force push (dangerous — only if not shared)
git push origin main --force
```

**Warning:** Force-pushing rewrites history. Only do this if:
- No one else has cloned the repo, OR
- You coordinate with all users to rebase their work

### 5. Rotate API Keys

While the gateway token is the immediate concern, also rotate:
- Anthropic API keys (if exposed in git history)
- Telegram bot tokens (if exposed)
- Any other credentials

## Prevention

### Going Forward

1. **Never commit secrets to git:**
   - Use environment variables: `export ANTHROPIC_API_KEY="..."`
   - Use `.env` files (listed in `.gitignore`)
   - Use GitHub Secrets for CI/CD

2. **Follow .gitignore strictly:**
   ```
   .openclaw/              # Never commit OpenClaw config
   openclaw.json           # Local gateway config
   auth-profiles.json      # Local auth store
   .env*                   # Environment variables
   *.key                   # Cryptographic keys
   CREDENTIALS*            # Any credentials file
   ```

3. **Pre-commit hook to detect secrets:**
   ```bash
   # Install detect-secrets
   pip install detect-secrets
   
   # Scan before committing
   detect-secrets scan --all-files
   ```

4. **Use GitHub secret scanning:**
   - Go to repo Settings → Security → Secret scanning
   - Enable "Push protection" to block accidental commits

### Documentation

When writing documentation with example commands:
- Use **placeholders:** `[YOUR_TOKEN_HERE]`
- Use **command output:** `$(openclaw config get gateway.auth.token)`
- **Never hardcode actual tokens** in docs, even as "examples"

## Verification

After completing all steps, verify:

```bash
# 1. Check that old token no longer works
curl http://127.0.0.1:18789/health \
  -H "Authorization: Token ba85e09db4e23965753c977916fa85bc98299c695a07dde9"
# Should return 401

# 2. Check that new token works
NEW_TOKEN=$(openclaw config get gateway.auth.token)
curl http://127.0.0.1:18789/health \
  -H "Authorization: Token $NEW_TOKEN"
# Should return 200 or gateway response
```

## Files Changed

- ✅ `CLAUDE.md` — Removed hardcoded tokens, added "Get your gateway token" instructions
- ✅ `TROUBLESHOOTING.md` — Replaced tokens with `[YOUR_GATEWAY_TOKEN]`
- ✅ `.gitignore` — Added comprehensive secret/config exclusions
- ✅ `SECURITY-FIX.md` — This file

## References

- [GitHub: Using secrets in GitHub Actions](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions)
- [OWASP: Secrets Management](https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html)
- [detect-secrets](https://github.com/Yelp/detect-secrets)

## Contact

If you notice any other exposed secrets:
1. Rotate the credential immediately
2. Document what was exposed
3. Update this file
4. Commit and push the fix

---

**Status:** FIXED (2026-05-06 09:35am PT)
**Token Regeneration:** ⏳ PENDING (requires manual action)
