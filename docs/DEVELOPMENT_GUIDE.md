# Infection Detected - Development Guide

## 🚀 Quick Start

### Prerequisites
- Ruby ~> 3.3.0
- Node.js >= 18.0.0
- Bundler
- ImageMagick (optional, for image optimization)

### Installation

```bash
# Install Ruby dependencies
bundle install

# Install Node dependencies
npm install

# Serve locally with live reload
npm run serve
```

## 📁 Project Structure

```
infection-detected/
├── _includes/          # Reusable HTML components
├── _layouts/           # Page layouts
├── _posts/             # Blog posts
├── _sass/              # SCSS stylesheets
├── assets/             # Static assets
│   ├── css/
│   ├── images/
│   └── js/
├── _config.yml         # Jekyll configuration
└── package.json        # Node scripts
```

## 🛠️ Development Commands

```bash
# Development
npm run serve           # Start dev server with live reload
npm run serve:drafts    # Include draft posts
npm run build:dev       # Build for development

# Production
npm run build           # Build for production
npm run deploy          # Deploy to Firebase
npm run deploy:preview  # Deploy to preview channel

# Maintenance
npm run clean           # Clean build files
npm run optimize:images # Optimize images
npm run check           # Run Jekyll doctor
```

## 🖼️ Image Optimization

### Critical: Optimize Large Images

The project includes two 29MB images that need optimization:
- `assets/images/01.jpg`
- `assets/images/authors/shubhendu.jpg`

Run the optimization script:

```bash
npm run optimize:images
```

This will:
- Backup original images
- Resize and compress images appropriately
- Maintain quality while reducing file size by 90%+

### Manual Optimization

For individual images:

```bash
# Using ImageMagick
convert input.jpg -strip -interlace Plane -quality 85 -resize 1200> output.jpg

# Using cwebp (WebP format - better compression)
cwebp -q 85 input.jpg -o output.webp
```

### Image Guidelines

- **Blog post images**: Max 1200px width, 85% quality
- **Author avatars**: 400x400px, 85% quality
- **OG images**: 1200x630px, 85% quality
- **Format**: Use WebP with JPG fallback when possible

## 🎨 Theming

The blog supports dark mode with automatic theme switching:

```javascript
// Theme is stored in localStorage
localStorage.setItem('theme', 'dark');  // Enable dark mode
localStorage.removeItem('theme');        // Enable light mode
```

## 📝 Writing Posts

Create a new post in `_posts/`:

```markdown
---
layout: post
title: "Your Post Title"
date: 2025-10-05
description: "A brief description for SEO"
tags: [security, tutorial]
image: /assets/images/your-image.jpg
---

Your content here...
```

## 🔍 SEO Optimization

Each post should include:
- `title`: Clear, descriptive title
- `description`: 120-160 characters
- `image`: Featured image for social sharing
- `tags`: Relevant tags for categorization

## 🚦 Performance Best Practices

1. **Images**: Always use lazy loading with the `lazy` class
2. **Scripts**: All scripts are deferred by default
3. **CSS**: Critical CSS is inlined, rest is loaded async
4. **Caching**: Service worker provides offline support
5. **Fonts**: Fonts are loaded asynchronously

## 📱 PWA Features

The blog is a Progressive Web App with:
- Offline support
- Service worker caching
- Manifest for installability
- Optimized for mobile

## 🐛 Troubleshooting

### Build Errors

```bash
# Clean and rebuild
npm run clean
npm run build:dev
```

### Ruby Version Issues

```bash
# Use rbenv or rvm
rbenv install 3.3.0
rbenv local 3.3.0
```

### Node Version Issues

```bash
# Use nvm
nvm install 18
nvm use 18
```

## 📊 Analytics

Google Analytics 4 is configured. Update `_config.yml`:

```yaml
google_analytics: "G-YOUR-ID-HERE"
```

## 🔐 Security

- Keep dependencies updated: `bundle update`, `npm update`
- Review Dependabot alerts
- Use environment variables for sensitive data

## 📦 Deployment

### Firebase Hosting

```bash
# First time setup
firebase login
firebase init hosting

# Deploy
npm run deploy

# Preview before deploying
npm run deploy:preview
```

### Other Platforms

The build output in `_site/` can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- AWS S3

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally
5. Submit a pull request

## 📄 License

MIT License - feel free to use this project as a template for your own blog.

## 🆘 Support

For issues and questions:
- GitHub Issues: [Report a bug](https://github.com/sivolko/infection-detected/issues)
- Documentation: Check this guide first

---

Made with ❤️ by Shubhendu
