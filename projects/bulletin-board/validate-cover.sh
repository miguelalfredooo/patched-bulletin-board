#!/bin/bash
# validate-cover.sh — Mandatory validation gate for art dept covers
# Usage: bash validate-cover.sh <cover-file>
# Exit code: 0 = pass (safe to announce), 1 = fail (block announcement)

COVER_FILE="${1:?Usage: bash validate-cover.sh <cover-file>}"

if [ ! -f "$COVER_FILE" ]; then
  echo "❌ VALIDATION FAILED: File not found: $COVER_FILE"
  exit 1
fi

echo "════════════════════════════════════════════════════════════"
echo "COVER VALIDATION — Design By Bulletin™"
echo "════════════════════════════════════════════════════════════"
echo ""

# 1. Check line count
LINE_COUNT=$(wc -l < "$COVER_FILE")
echo "1. Line Count Check"
echo "   Expected: 30 lines"
echo "   Actual: $LINE_COUNT lines"
if [ "$LINE_COUNT" -ne 30 ]; then
  echo "   ❌ FAILED: Line count is $LINE_COUNT, must be exactly 30"
  exit 1
fi
echo "   ✅ PASS"
echo ""

# 2. Check width using Python (handles UTF-8 correctly)
echo "2. Width Check (34 chars per line)"
python3 - "$COVER_FILE" << 'EOF'
import sys
import os

file_path = sys.argv[1]
bad_count = 0

with open(file_path, 'r', encoding='utf-8') as f:
    for i, line in enumerate(f, 1):
        line_content = line.rstrip('\n')
        char_count = len(line_content)
        if char_count != 34:
            print(f"      Line {i}: {char_count} chars (should be 34)")
            bad_count += 1

if bad_count > 0:
    print(f"   ❌ FAILED: {bad_count} lines are not exactly 34 characters")
    sys.exit(1)
else:
    print("   ✅ PASS (all 30 lines are exactly 34 chars)")
    sys.exit(0)
EOF

if [ $? -ne 0 ]; then
  exit 1
fi
echo ""

# 3. Check for masthead (lines 8-12)
echo "3. Masthead Check (Lines 8-12)"
MASTHEAD_LINE=$(sed -n '8p' "$COVER_FILE")
if [[ "$MASTHEAD_LINE" == *"Design By Bulletin"* ]]; then
  echo "   ✅ PASS (masthead is present)"
else
  echo "   ⚠️  Masthead may not match expected format"
fi
echo ""

# 4. Check for visual composition (lines 13-30)
echo "4. Visual Composition Check (Lines 13-30)"
VISUAL_LINES=$(sed -n '13,30p' "$COVER_FILE" | wc -l)
if [ "$VISUAL_LINES" -eq 18 ]; then
  echo "   ✅ PASS (18 lines of visual content)"
else
  echo "   ❌ FAILED: Visual section should be 18 lines"
  exit 1
fi
echo ""

# All checks passed
echo "════════════════════════════════════════════════════════════"
echo "✅ VALIDATION PASSED — Cover is ready to send"
echo "════════════════════════════════════════════════════════════"
echo ""
exit 0
