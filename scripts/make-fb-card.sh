#!/usr/bin/env bash
# make-fb-card.sh — Generate a branded 1200x630 Facebook card PNG for a blog post.
#
# Usage:  make-fb-card.sh <slug> <title> [out_path]
#
# Default out_path: public/blog-cards/<slug>.png
#
# Brand: cream background + bronze accent stripe + serif title + logo footer.
# Font: DejaVu Serif Bold (system). Upgrade target: Fraunces (HHBN brand font).

set -euo pipefail

PROJECT=/opt/aionui/projects/healing-hands-by-nate
SLUG="${1:?slug required}"
TITLE="${2:?title required}"
OUT="${3:-$PROJECT/public/blog-cards/$SLUG.png}"

CREAM="#f5f0e8"
STONE_DARK="#1c1917"
STONE_MUTED="#57534e"
BRONZE="#a16207"
FONT_SERIF="/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf"
FONT_SANS="/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
LOGO="$PROJECT/public/photos/logo-horizontal.jpg"

mkdir -p "$(dirname "$OUT")"

# Wrap title to a max line length (rough char-count caret-style). ImageMagick
# can wrap with caption: but we want explicit control over line breaks so the
# layout never blows out the safe area.
WRAPPED=$(echo "$TITLE" | fold -s -w 28 | head -4)

# Build the card:
#  - 1200x630 cream canvas
#  - Bronze accent bar on the left (12px wide, full height)
#  - Big serif title block, left-aligned, vertically centered-ish
#  - Footer: "HEALING HANDS BY NATE · UNION, MO" in small sans uppercase
#  - Logo composited bottom-right
magick -size 1200x630 xc:"$CREAM" \
  -fill "$BRONZE" -draw "rectangle 0,0 14,630" \
  -font "$FONT_SERIF" -fill "$STONE_DARK" -pointsize 64 \
  -gravity NorthWest -annotate +80+130 "$WRAPPED" \
  -font "$FONT_SANS" -fill "$STONE_MUTED" -pointsize 22 \
  -gravity SouthWest -annotate +80+60 "HEALING HANDS BY NATE   ·   UNION, MO" \
  "$OUT.tmp.png"

# Composite the logo (resized) bottom-right if present
if [ -f "$LOGO" ]; then
  magick "$OUT.tmp.png" \
    \( "$LOGO" -resize 240x \) \
    -gravity SouthEast -geometry +60+50 -composite \
    "$OUT"
  rm -f "$OUT.tmp.png"
else
  mv "$OUT.tmp.png" "$OUT"
fi

echo "[make-fb-card] generated: $OUT ($(identify -format '%wx%h' "$OUT"))"
