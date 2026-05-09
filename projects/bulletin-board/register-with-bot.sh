#!/bin/bash
# register-with-bot.sh
# Automatically register a validated issue with the bot via archive-log.md
# Run this when an issue passes validation and is approved for publication

ISSUE_NUM=${1:?Usage: bash register-with-bot.sh <ISSUE_NUMBER> <THEME>}
THEME=${2:?Usage: bash register-with-bot.sh <ISSUE_NUMBER> <THEME>}

ARCHIVE_LOG=~/projects/patched-editorial/projects/bulletin-board/archive-log.md

if [ ! -f "$ARCHIVE_LOG" ]; then
  echo "❌ Archive log not found: $ARCHIVE_LOG"
  exit 1
fi

# Read current log
content=$(cat "$ARCHIVE_LOG")

# Check if issue already registered
if grep -q "^| $ISSUE_NUM |" <<< "$content"; then
  echo "⚠️ Issue $ISSUE_NUM already registered"
  exit 0
fi

# Insert new entry in Current Issues table (after header, keep descending order)
# Find the Current Issues section and insert after the table header
python3 << PYTHON_EOF
import re

issue_num = "$ISSUE_NUM"
theme = "$THEME"

with open("$ARCHIVE_LOG", "r") as f:
    lines = f.readlines()

updated = []
inserted = False

for i, line in enumerate(lines):
    # Look for the Current Issues table header
    if "| Issue | Theme | Date |" in line and not inserted:
        # Add the header
        updated.append(line)
        # Add the separator
        updated.append(lines[i+1])
        # Add new entry (issues are in descending order)
        new_entry = f"| {issue_num} | {theme} | May 9, 2026 | finalized | ✅ PASS | issues/{issue_num}/ |\n"
        updated.append(new_entry)
        inserted = True
        # Skip the original separator line
        continue
    elif inserted and i == len(lines) - 1:
        # We've already inserted, just append the rest
        updated.append(line)
    elif not inserted or i > 1:
        updated.append(line)

with open("$ARCHIVE_LOG", "w") as f:
    f.writelines(updated)

print(f"✅ Issue {issue_num} registered in archive log")
PYTHON_EOF

echo ""
echo "Bot is now aware of Issue $ISSUE_NUM"
echo "Status: finalized | ✅ PASS | Location: issues/$ISSUE_NUM/"
