#!/bin/bash

# Production Build Script with Comprehensive Minification
# This script builds the site and optimizes all assets for maximum performance

set -e  # Exit on error

echo "========================================"
echo "  Production Build & Optimization"
echo "========================================"
echo ""

# Step 1: Clean previous builds
echo "📦 Step 1/6: Cleaning previous builds..."
bundle exec jekyll clean
rm -f _site/assets/js/*.min.js 2>/dev/null || true
echo "✓ Clean complete"
echo ""

# Step 2: Build Jekyll site
echo "🏗️  Step 2/6: Building Jekyll site..."
JEKYLL_ENV=production bundle exec jekyll build --config _config.yml,_config_prod.yml
echo "✓ Jekyll build complete"
echo ""

# Step 3: Minify JavaScript
echo "📦 Step 3/6: Minifying JavaScript..."
if command -v terser &> /dev/null; then
    # Minify app.js
    if [ -f "_site/assets/js/app.js" ]; then
        terser _site/assets/js/app.js \
            --compress passes=2,drop_console=true,pure_funcs=[console.log,console.info] \
            --mangle \
            --output _site/assets/js/app.min.js
        SIZE_BEFORE=$(wc -c < "_site/assets/js/app.js")
        SIZE_AFTER=$(wc -c < "_site/assets/js/app.min.js")
        SAVINGS=$((SIZE_BEFORE - SIZE_AFTER))
        echo "  ✓ app.js: $(numfmt --to=iec $SIZE_BEFORE) → $(numfmt --to=iec $SIZE_AFTER) (saved $(numfmt --to=iec $SAVINGS))"
    fi
    
    # Minify scripts.js
    if [ -f "_site/assets/js/scripts.js" ]; then
        terser _site/assets/js/scripts.js \
            --compress passes=2 \
            --mangle \
            --output _site/assets/js/scripts.min.js
        SIZE_BEFORE=$(wc -c < "_site/assets/js/scripts.js")
        SIZE_AFTER=$(wc -c < "_site/assets/js/scripts.min.js")
        SAVINGS=$((SIZE_BEFORE - SIZE_AFTER))
        echo "  ✓ scripts.js: $(numfmt --to=iec $SIZE_BEFORE) → $(numfmt --to=iec $SIZE_AFTER) (saved $(numfmt --to=iec $SAVINGS))"
    fi
    
    # Minify simple-jekyll-search
    if [ -f "_site/assets/js/simple-jekyll-search.min.js" ]; then
        terser _site/assets/js/simple-jekyll-search.min.js \
            --compress passes=2 \
            --mangle \
            --output _site/assets/js/simple-jekyll-search.min.js
        echo "  ✓ simple-jekyll-search.min.js optimized"
    fi
else
    echo "  ⚠️  Terser not found. Run: npm install -g terser"
fi
echo ""

# Step 4: Minify CSS (already done by Jekyll sass compression)
echo "📦 Step 4/6: Verifying CSS minification..."
if [ -f "_site/assets/css/main.css" ]; then
    SIZE=$(wc -c < "_site/assets/css/main.css")
    echo "  ✓ main.css: $(numfmt --to=iec $SIZE) (minified by Jekyll)"
fi
echo ""

# Step 5: Optimize images (if not already done)
echo "🖼️  Step 5/6: Checking image optimization..."
if [ -f "assets/images/01.jpg" ]; then
    SIZE=$(wc -c < "assets/images/01.jpg")
    if [ $SIZE -gt 2000000 ]; then  # If larger than 2MB
        echo "  ⚠️  Large images detected. Run: npm run optimize:images"
    else
        echo "  ✓ Images already optimized"
    fi
else
    echo "  ℹ️  No images to optimize"
fi
echo ""

# Step 6: Generate report
echo "📊 Step 6/6: Build Summary"
echo "----------------------------------------"
echo "Site built to: _site/"
echo ""
echo "File sizes:"
if [ -f "_site/index.html" ]; then
    echo "  HTML: $(du -sh _site/*.html | awk '{print $1}')"
fi
if [ -f "_site/assets/css/main.css" ]; then
    echo "  CSS:  $(du -sh _site/assets/css/main.css | awk '{print $1}')"
fi
if [ -d "_site/assets/js" ]; then
    echo "  JS:   $(du -sh _site/assets/js/*.min.js 2>/dev/null | awk '{sum+=$1} END {print sum"K"}' || echo 'N/A')"
fi
echo ""
echo "Total site size: $(du -sh _site | awk '{print $1}')"
echo ""

echo "========================================"
echo "  ✅ Production build complete!"
echo "========================================"
echo ""
echo "Next steps:"
echo "  1. Test locally: cd _site && python3 -m http.server 8000"
echo "  2. Run Lighthouse: lighthouse http://localhost:8000"
echo "  3. Deploy: npm run deploy"
echo ""
