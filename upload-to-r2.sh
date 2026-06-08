#!/bin/bash
# Uploads all WordPress media directly to Cloudflare R2
# Prerequisites: rclone configured with R2 (see README)
# Run: bash upload-to-r2.sh /path/to/wp-content/uploads

UPLOADS_DIR="${1:-./wp-content/uploads}"
BUCKET="r2:integrain/images"

if [ ! -d "$UPLOADS_DIR" ]; then
  echo "❌ Uploads folder not found: $UPLOADS_DIR"
  echo "Usage: bash upload-to-r2.sh /path/to/wp-content/uploads"
  exit 1
fi

echo "📤 Uploading from $UPLOADS_DIR to $BUCKET ..."
echo ""

# Sync all images (flatten year/month subfolders into /images/)
rclone copy "$UPLOADS_DIR" "$BUCKET" \
  --include "*.jpg" \
  --include "*.jpeg" \
  --include "*.png" \
  --include "*.svg" \
  --include "*.webp" \
  --exclude "**/*-scaled.*" \
  --exclude "**/*-150x150.*" \
  --exclude "**/*-300x*.*" \
  --exclude "**/*-768x*.*" \
  --transfers 10 \
  --progress

echo ""
echo "✅ Done. Images available at:"
echo "   https://pub-cdc8320e15f144d09aa5d89f402c22d0.r2.dev/images/"
