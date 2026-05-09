#!/bin/bash
# dbb-bot.sh
# Design By Bulletin™ Bot — Reads archive-log.md and publishes finalized issues to Telegram
# Usage: bash dbb-bot.sh [--publish-all] [--issue NUMBER]
# Cron: Run hourly or on-demand via OpenClaw

set -e

REPO_ROOT=~/projects/patched-editorial/projects/bulletin-board
ARCHIVE_LOG="$REPO_ROOT/archive-log.md"
BOT_STATE="$REPO_ROOT/.bot-published.txt"
TELEGRAM_TARGET="7774590281"

# Ensure state file exists
if [ ! -f "$BOT_STATE" ]; then
  echo "# Bot publication history" > "$BOT_STATE"
fi

# Function: Check if issue already published
is_published() {
  local issue=$1
  grep -q "^$issue$" "$BOT_STATE"
}

# Function: Mark issue as published
mark_published() {
  local issue=$1
  echo "$issue" >> "$BOT_STATE"
}

# Function: Get issue theme from archive log
get_theme() {
  local issue=$1
  grep "^| $issue |" "$ARCHIVE_LOG" | awk -F'|' '{print $3}' | xargs
}

# Function: Build and send cover + all 11 sections
publish_issue() {
  local issue=$1
  local theme
  theme=$(get_theme "$issue")
  
  if [ -z "$theme" ]; then
    echo "❌ Issue $issue not found in archive log"
    return 1
  fi
  
  local issue_dir="$REPO_ROOT/issues/$issue"
  
  if [ ! -d "$issue_dir" ]; then
    echo "❌ Issue directory not found: $issue_dir"
    return 1
  fi
  
  echo "📤 Publishing Issue $issue ($theme)..."
  
  # Send cover
  local cover_file="$issue_dir/00-COVER-ART.txt"
  if [ -f "$cover_file" ]; then
    local cover_content
    cover_content=$(cat "$cover_file")
    
    openclaw message send \
      --channel telegram \
      --target "$TELEGRAM_TARGET" \
      --message "$(printf "Issue %s — %s\n\n\`\`\`\n%s\n\`\`\`\n\n✅ Validation PASSED\n✅ Status: FINALIZED" "$issue" "$theme" "$cover_content")"
    
    echo "✅ Cover sent"
  else
    echo "⚠️ Cover file not found: $cover_file"
  fi
  
  # Send all 11 sections
  for i in {01..11}; do
    local art_file="$issue_dir/${i}-SECTION-ART.txt"
    local copy_file="$issue_dir/${i}-SECTION-COPY.md"
    
    if [ -f "$art_file" ] && [ -f "$copy_file" ]; then
      local art_content
      local copy_content
      art_content=$(cat "$art_file")
      copy_content=$(cat "$copy_file")
      
      # Extract section title from copy file (first line)
      local section_title
      section_title=$(head -1 "$copy_file" | sed 's/^# //' | sed 's/ — .*//')
      
      openclaw message send \
        --channel telegram \
        --target "$TELEGRAM_TARGET" \
        --message "$(printf "Section %d: %s\n\n\`\`\`\n%s\n\`\`\`\n\n%s" "$i" "$section_title" "$art_content" "$copy_content")"
      
      echo "✅ Section $i sent"
      sleep 1  # Rate limiting
    fi
  done
  
  # Send footer
  local footer_file="$issue_dir/12-METADATA-FOOTER.txt"
  if [ -f "$footer_file" ]; then
    local footer_content
    footer_content=$(cat "$footer_file")
    
    openclaw message send \
      --channel telegram \
      --target "$TELEGRAM_TARGET" \
      --message "$(printf "\n\n*%s*\n\n—\n\nIssue %s published • Design By Bulletin™" "$footer_content" "$issue")"
    
    echo "✅ Footer sent"
  fi
  
  mark_published "$issue"
  echo "✅ Issue $issue published successfully"
}

# Function: Publish all finalized issues not yet published
publish_all_pending() {
  echo "🔍 Scanning archive log for finalized issues..."
  
  # Extract all issues marked as "finalized" with "✅ PASS"
  local issues
  issues=$(grep "finalized.*✅ PASS" "$ARCHIVE_LOG" | awk -F'|' '{print $2}' | xargs | tr ' ' '\n' | sort -rn)
  
  if [ -z "$issues" ]; then
    echo "No finalized issues found"
    return 0
  fi
  
  local count=0
  while IFS= read -r issue; do
    if ! is_published "$issue"; then
      publish_issue "$issue"
      ((count++))
      sleep 2  # Delay between issues
    fi
  done <<< "$issues"
  
  if [ $count -eq 0 ]; then
    echo "✅ All finalized issues already published"
  else
    echo "✅ Published $count new issue(s)"
  fi
}

# Function: Publish specific issue
publish_specific() {
  local issue=$1
  if is_published "$issue"; then
    echo "⚠️ Issue $issue already published"
    return 0
  fi
  publish_issue "$issue"
}

# Main
case "${1:-}" in
  --publish-all)
    publish_all_pending
    ;;
  --issue)
    if [ -z "$2" ]; then
      echo "Usage: bash dbb-bot.sh --issue NUMBER"
      exit 1
    fi
    publish_specific "$2"
    ;;
  --status)
    echo "📋 Published Issues:"
    cat "$BOT_STATE" | grep -v "^#"
    ;;
  --reset)
    echo "# Bot publication history" > "$BOT_STATE"
    echo "✅ Publication history cleared"
    ;;
  *)
    publish_all_pending
    ;;
esac

echo "✅ Bot check complete"
