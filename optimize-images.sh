#!/bin/bash

# Image Optimization Script for Jekyll Blog
# This script optimizes all images in the assets/images directory

set -e

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

IMAGE_DIR="assets/images"
BACKUP_DIR="assets/images_backup_$(date +%Y%m%d_%H%M%S)"

echo -e "${GREEN}=== Image Optimization Script ===${NC}"
echo ""

# Check if imagemagick is installed
if ! command -v convert &> /dev/null; then
    echo -e "${RED}Error: ImageMagick is not installed${NC}"
    echo "Install it with: sudo apt-get install imagemagick (Ubuntu/Debian)"
    echo "Or: brew install imagemagick (macOS)"
    exit 1
fi

# Create backup
echo -e "${YELLOW}Creating backup of images...${NC}"
mkdir -p "$BACKUP_DIR"
cp -r "$IMAGE_DIR/"* "$BACKUP_DIR/" 2>/dev/null || true
echo -e "${GREEN}✓ Backup created at $BACKUP_DIR${NC}"
echo ""

# Optimize JPG/JPEG images
echo -e "${YELLOW}Optimizing JPG/JPEG images...${NC}"
find "$IMAGE_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" \) | while read -r img; do
    size_before=$(du -h "$img" | cut -f1)
    
    # Get image dimensions
    dimensions=$(identify -format "%wx%h" "$img" 2>/dev/null || echo "unknown")
    
    # Optimize based on size and purpose
    if [[ "$img" == *"authors"* ]]; then
        # Author images - smaller size needed
        convert "$img" -strip -interlace Plane -quality 85 -resize '400x400>' "$img.tmp"
    elif [[ "$img" == *"og-image"* ]] || [[ "$img" == *"01.jpg"* ]]; then
        # OG images - 1200x630 recommended
        convert "$img" -strip -interlace Plane -quality 85 -resize '1200x630^' -gravity center -extent 1200x630 "$img.tmp"
    else
        # Regular blog images
        convert "$img" -strip -interlace Plane -quality 85 -resize '1200>' "$img.tmp"
    fi
    
    mv "$img.tmp" "$img"
    size_after=$(du -h "$img" | cut -f1)
    echo -e "  ${GREEN}✓${NC} $img: $size_before → $size_after"
done

# Optimize PNG images
echo ""
echo -e "${YELLOW}Optimizing PNG images...${NC}"
find "$IMAGE_DIR" -type f -iname "*.png" | while read -r img; do
    size_before=$(du -h "$img" | cut -f1)
    
    # Skip favicon images (they need specific sizes)
    if [[ "$img" == *"favicon"* ]]; then
        echo -e "  ${YELLOW}⊘${NC} $img: Skipped (favicon)"
        continue
    fi
    
    convert "$img" -strip "$img.tmp"
    mv "$img.tmp" "$img"
    size_after=$(du -h "$img" | cut -f1)
    echo -e "  ${GREEN}✓${NC} $img: $size_before → $size_after"
done

echo ""
echo -e "${GREEN}=== Optimization Complete ===${NC}"
echo ""
echo "Recommendations:"
echo "1. Check the optimized images to ensure quality is acceptable"
echo "2. If satisfied, you can delete the backup: rm -rf $BACKUP_DIR"
echo "3. If not satisfied, restore from backup: cp -r $BACKUP_DIR/* $IMAGE_DIR/"
echo ""
echo -e "${YELLOW}Note: For better compression, consider using WebP format:${NC}"
echo "  cwebp -q 85 input.jpg -o output.webp"
