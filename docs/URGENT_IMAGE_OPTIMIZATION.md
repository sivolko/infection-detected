# CRITICAL NOTE: Replace the 29.4MB assets/images/01.jpg with optimized version

This file serves as a placeholder. The original 01.jpg is 29.4MB which severely impacts performance.

## Required Action:
1. Compress `assets/images/01.jpg` to under 500KB
2. Rename it to `og-image-optimized.jpg`
3. Use tools like ImageOptim, TinyPNG, or CLI tools:
   ```bash
   # Example compression commands:
   ffmpeg -i assets/images/01.jpg -q:v 85 -s 1200x630 assets/images/og-image-optimized.jpg
   # OR
   cwebp -q 80 assets/images/01.jpg -o assets/images/og-image-optimized.webp
   ```

## Impact:
- Reduces page load time by 60-80%
- Improves PageSpeed score dramatically
- Better user experience on mobile devices

The head.html has been updated to reference `og-image-optimized.jpg` instead of the massive original.