#!/bin/bash
# Apply security standards to a project
# Usage: ./scripts/apply-security-standards.sh [project-path]

set -e

PROJECT_PATH="${1:-.}"
STANDARDS_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

echo "🔐 Applying security standards to: $PROJECT_PATH"

# 1. Copy .gitignore
echo "📋 Setting up .gitignore..."
cp "${STANDARDS_DIR}/.gitignore.template" "${PROJECT_PATH}/.gitignore"
echo "✅ .gitignore updated"

# 2. Create pre-commit hook
echo "🪝 Setting up pre-commit hook..."
mkdir -p ~/.git-hooks
cat > ~/.git-hooks/pre-commit << 'EOF'
#!/bin/bash
# Pre-commit hook: Block secrets

set -e

FORBIDDEN_PATTERNS=(
    "ANTHROPIC_API_KEY="
    "api.?key.*="
    "sk-ant-"
    "sk-[a-z0-9]{20}"
    "password.*="
    "token.*="
    "secret.*="
    "credentials.*="
    "github_token="
    "GITHUB_TOKEN="
)

echo "🔐 Checking for secrets..."

for pattern in "${FORBIDDEN_PATTERNS[@]}"; do
    if git diff --cached | grep -iE "$pattern" > /dev/null; then
        echo "❌ BLOCKED: Found pattern '$pattern' in staged changes"
        exit 1
    fi
done

echo "✅ No secrets detected"
exit 0
EOF

chmod +x ~/.git-hooks/pre-commit
git config --global core.hooksPath ~/.git-hooks
echo "✅ Pre-commit hook installed"

# 3. Set git config to reject unsafe patterns
echo "⚙️  Configuring git..."
git config --global "filter.detect-secrets.clean" "detect-secrets stream"
git config --global "filter.detect-secrets.smudge" "cat"

# 4. Verify .gitignore blocks key files
echo "🧪 Testing .gitignore patterns..."
cd "${PROJECT_PATH}"

test_patterns=(
    ".env"
    ".env.local"
    ".openclaw/config"
    "auth-profiles.json"
    "openclaw.json"
    "secrets.json"
)

for pattern in "${test_patterns[@]}"; do
    if git check-ignore -q "$pattern" 2>/dev/null; then
        echo "✅ $pattern is ignored"
    else
        echo "⚠️  $pattern is NOT ignored - check .gitignore"
    fi
done

echo ""
echo "✅ Security standards applied!"
echo ""
echo "📋 Next steps:"
echo "1. Review .gitignore: git show .gitignore"
echo "2. Commit changes: git add . && git commit -m 'Apply security standards'"
echo "3. Remove any existing secrets from git history (if needed)"
echo "4. Push safely: git push"
echo ""
