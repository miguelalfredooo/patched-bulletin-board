#!/bin/sh
# send-pngs-curl.sh — send all rendered PNGs to Telegram via curl
# POSIX sh compatible (no bash 4 associative arrays)

TOKEN="8662552111:AAHpfxCGoM6PGbEg4msbSm3bEE6Ucf5o1O0"
CHAT_ID="7774590281"
DIR="/tmp/dbb-momentum"

send_photo() {
  FILE="$1"
  CAPTION="$2"
  echo "Sending: $(basename $FILE) — $CAPTION"
  curl -s -X POST "https://api.telegram.org/bot${TOKEN}/sendPhoto" \
    -F "chat_id=${CHAT_ID}" \
    -F "caption=${CAPTION}" \
    -F "photo=@${FILE}" > /dev/null
  sleep 0.8
}

send_photo "$DIR/theme.png"               "Issue 006 — MOMENTUM"
send_photo "$DIR/art.png"                 "ART — Theaster Gates"
send_photo "$DIR/painting.png"            "PAINTING — Amy Sillman"
send_photo "$DIR/illustration.png"        "ILLUSTRATION — Olimpia Zagnoli"
send_photo "$DIR/sculpture.png"           "SCULPTURE — Richard Serra"
send_photo "$DIR/culture.png"             "CULTURE — The Futurists"
send_photo "$DIR/photography.png"         "PHOTOGRAPHY — Daido Moriyama"
send_photo "$DIR/art-history.png"         "ART HISTORY — Giacomo Balla 1912"
send_photo "$DIR/opinions.png"            "OPINIONS — Paul Virilio"
send_photo "$DIR/design---ai-tools.png"   "DESIGN & AI TOOLS — Figma"
send_photo "$DIR/product---process.png"   "PRODUCT & PROCESS — Iteration"
send_photo "$DIR/visual---brand.png"      "VISUAL & BRAND — XRI Rebrand"
send_photo "$DIR/music.png"               "MUSIC — Shackleton / Blood on My Hands"
send_photo "$DIR/closing.png"             "Design By Bulletin™ — Issue 006"

echo "Done."
