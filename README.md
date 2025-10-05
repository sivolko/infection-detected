<div align="center">

# 🛡️ Infection Detected

### High-Performance Cybersecurity Blog Platform

*A platform for security engineers, threat hunters, and CTF players to share knowledge and experience*

[![Lighthouse Score](https://img.shields.io/badge/Lighthouse-90+-brightgreen?style=for-the-badge&logo=lighthouse)](https://pagespeed.web.dev/)
[![Jekyll](https://img.shields.io/badge/Jekyll-4.4.1-red?style=for-the-badge&logo=jekyll)](https://jekyllrb.com/)
[![Firebase](https://img.shields.io/badge/Firebase-Hosting-orange?style=for-the-badge&logo=firebase)](https://firebase.google.com/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=for-the-badge)](CONTRIBUTING.md)

[🚀 Live Demo](https://infection-detected.web.app) • [📖 Documentation](docs/) • [🤝 Contributing](CONTRIBUTING.md) • [🐛 Report Bug](https://github.com/sivolko/infection-detected/issues)

---

</div>

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Architecture](#-architecture)
- [Quick Start](#-quick-start)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [Development](#-development)
- [Deployment](#-deployment)
- [Performance](#-performance)
- [Documentation](#-documentation)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 Overview

**Infection Detected** is a modern, high-performance cybersecurity blog platform built with Jekyll. It combines the simplicity of static site generation with the power of Progressive Web Apps (PWA) to deliver a fast, reliable, and engaging reading experience.

### Why Infection Detected?

- **⚡ Blazing Fast**: 90+ Lighthouse score, sub-3s load times
- **📱 Progressive Web App**: Installable, works offline, app-like experience
- **🔒 Secure by Design**: Static site architecture with modern security headers
- **🌐 Global CDN**: Firebase hosting with worldwide edge locations
- **♿ Accessible**: WCAG 2.1 compliant with ARIA support
- **🎨 Beautiful UI**: Dark mode, responsive design, smooth animations
- **📈 SEO Optimized**: Structured data, sitemaps, meta tags

---

## ✨ Features

### Core Features

```
┌─────────────────────────────────────────────────────────────┐
│                    KEY FEATURES                             │
├─────────────────────────────────────────────────────────────┤
│ 🚀  Performance      │  📱  Progressive Web App             │
│  • 90+ Lighthouse    │   • Offline support                  │
│  • < 3s load time    │   • Installable                      │
│  • Optimized assets  │   • Service Worker caching           │
│  • Lazy loading      │   • App-like experience              │
├──────────────────────┼──────────────────────────────────────┤
│ 🎨  User Experience  │  🔍  SEO & Discovery                 │
│  • Dark/Light mode   │   • Structured data                  │
│  • Responsive design │   • XML sitemap                      │
│  • Image zoom        │   • RSS/Atom feeds                   │
│  • Smooth scrolling  │   • Social meta tags                 │
│  • Search function   │   • robots.txt                       │
├──────────────────────┼──────────────────────────────────────┤
│ 🔒  Security         │  🛠️  Developer Experience            │
│  • HTTPS enforced    │   • Live reload                      │
│  • Security headers  │   • CI/CD automation                 │
│  • No vulnerabilities│   • One-command deployment           │
│  • Content Security  │   • Comprehensive docs               │
└─────────────────────────────────────────────────────────────┘
```

### Content Features

- **📝 Rich Markdown Support**: Write posts in Markdown with code highlighting
- **🏷️ Tag System**: Organize content with tags and categories
- **🔗 Related Posts**: Automatic content recommendations
- **💬 Social Sharing**: Share to Twitter, LinkedIn, Facebook
- **📊 Analytics**: Google Analytics 4 integration
- **🖼️ Image Optimization**: Automatic lazy loading and compression

---

## 🏗️ Architecture

```
┌────────────────────────────────────────────────────────────────┐
│                  SYSTEM ARCHITECTURE                           │
└────────────────────────────────────────────────────────────────┘

  Content (Markdown)  ──┐
  Layouts (Liquid)    ──┤
  Styles (SCSS)       ──┼──>  Jekyll Build  ──>  Static Site
  Scripts (JS)        ──┤                          (_site/)
  Images & Assets     ──┘                              │
                                                       │
                            GitHub Actions CI/CD  <────┘
                                     │
                                     │ Deploy
                                     ▼
                            Firebase Hosting + CDN
                                     │
                                     │ Serve
                                     ▼
                          End Users (with PWA cache)
```

**Key Architectural Decisions:**

- **Static Site Generation**: Pre-rendered HTML for optimal performance and security
- **Progressive Enhancement**: Core content accessible without JavaScript
- **Mobile-First Design**: Responsive across all device sizes
- **Modular JavaScript**: Clean, maintainable code with separation of concerns

📖 **[View Detailed Architecture →](docs/ARCHITECTURE.md)**

---

## 🚀 Quick Start

### Prerequisites

- Ruby 3.3.0+ ([Install via rbenv](https://github.com/rbenv/rbenv))
- Node.js 18+ ([Install via nvm](https://github.com/nvm-sh/nvm))
- Bundler (`gem install bundler`)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/sivolko/infection-detected.git
cd infection-detected

# 2. Install dependencies
bundle install
npm install

# 3. Optimize images (important for performance!)
npm run optimize:images

# 4. Start development server
npm run serve
```

The site will be available at `http://localhost:4000` with live reload enabled.

### Create Your First Post

```bash
# Create a new post file in _posts/
touch _posts/2025-01-10-my-first-post.md
```

Add front matter and content:

```markdown
---
layout: post
title: "My First Cybersecurity Post"
description: "Learn about the latest security trends"
date: 2025-01-10
tags: [security, tutorial]
image: /assets/images/my-post.jpg
---

Your content here...
```

---

## 🛠️ Technology Stack

### Core Technologies

| Category | Technology | Purpose |
|----------|------------|---------|
| **Static Site Generator** | Jekyll 4.4.1 | Content rendering and site generation |
| **Language** | Ruby 3.3.0 | Jekyll runtime |
| **Template Engine** | Liquid | Dynamic content in templates |
| **Styling** | SCSS/SASS | CSS with variables and mixins |
| **JavaScript** | ES6+ | Interactive functionality |
| **Build Tools** | npm, Bundler | Package and dependency management |

### Infrastructure

| Service | Purpose |
|---------|---------|
| **Firebase Hosting** | Static file hosting with global CDN |
| **GitHub Actions** | CI/CD automation |
| **Google Analytics** | Traffic and user analytics |

### Key Libraries

- **Ionicons** - Icon library
- **Lightense.js** - Image lightbox functionality
- **Simple Jekyll Search** - Client-side search
- **LazyLoad** - Image lazy loading

📦 **[View Complete Dependencies →](package.json)**

---

## 📁 Project Structure

```
infection-detected/
├── 📝 _posts/                   # Blog posts (Markdown)
│   └── YYYY-MM-DD-title.md
│
├── 🎨 _layouts/                 # Page templates
│   ├── default.html
│   ├── post.html
│   └── page.html
│
├── 🧩 _includes/                # Reusable components
│   ├── head.html
│   ├── header.html
│   ├── footer.html
│   └── ...
│
├── 💅 _sass/                    # SCSS stylesheets
│   ├── _variables.scss
│   ├── _base.scss
│   └── ...
│
├── 📦 assets/                   # Static assets
│   ├── css/
│   ├── js/
│   ├── images/
│   └── favicon/
│
├── 📚 docs/                     # Documentation
│   ├── ARCHITECTURE.md
│   ├── DEVELOPMENT_GUIDE.md
│   └── ...
│
├── ⚙️ _config.yml               # Jekyll configuration
├── 📄 package.json              # npm dependencies
├── 📄 Gemfile                   # Ruby dependencies
├── 🔥 firebase.json             # Firebase hosting config
└── 📱 manifest.json             # PWA manifest
```

---

## 💻 Development

### Available Commands

```bash
# Development
npm run serve              # Start dev server with live reload
npm run serve:drafts       # Include draft posts
npm run build:dev          # Development build

# Production
npm run build              # Production build with optimization
npm run clean              # Clean build artifacts

# Optimization
npm run optimize:images    # Compress and optimize images
npm run minify:js          # Minify JavaScript files
npm run minify:css         # Optimize CSS

# Quality
npm run check              # Run Jekyll doctor
npm run test               # Run tests (if configured)

# Deployment
npm run deploy             # Deploy to Firebase (production)
npm run deploy:preview     # Deploy to preview channel
```

### Development Workflow

1. **Start Dev Server**: `npm run serve`
2. **Make Changes**: Edit files in `_posts/`, `_layouts/`, `_sass/`, etc.
3. **Auto-Reload**: Browser automatically refreshes
4. **Test Locally**: Verify changes at `localhost:4000`
5. **Commit & Push**: Changes automatically deployed via CI/CD

### Writing Posts

Posts go in `_posts/` with format: `YYYY-MM-DD-title.md`

**Front Matter Template:**

```yaml
---
layout: post
title: "Your Post Title"
description: "Brief description for SEO"
date: 2025-01-10
tags: [security, malware, tutorial]
image: /assets/images/post-image.jpg
author: Your Name
featured: true  # Optional: feature on homepage
---
```

📖 **[Complete Development Guide →](docs/DEVELOPMENT_GUIDE.md)**

---

## 🚢 Deployment

### Automatic Deployment (Recommended)

Push to `main` branch triggers automatic deployment via GitHub Actions:

```bash
git add .
git commit -m "Add new post"
git push origin main
```

**Deployment Flow:**
1. Code pushed to GitHub
2. GitHub Actions triggered
3. Jekyll builds site
4. Assets optimized
5. Deployed to Firebase
6. Live in ~2-3 minutes

### Manual Deployment

```bash
# Build and deploy
npm run build
npm run deploy

# Or deploy preview
npm run deploy:preview
```

### Configuration Required

Set up Firebase secrets in GitHub:
- `FIREBASE_SERVICE_ACCOUNT_INFECTION_DETECTED`

📖 **[Deployment Guide →](docs/DEPLOYMENT_FIX.md)**

---

## ⚡ Performance

### Metrics

```
┌─────────────────────────────────────────────────────┐
│           LIGHTHOUSE PERFORMANCE SCORE              │
├─────────────────────────────────────────────────────┤
│                                                     │
│  Performance:       90+  ████████████████████  90%  │
│  Accessibility:     95+  █████████████████████ 95%  │
│  Best Practices:   100   ██████████████████████100% │
│  SEO:              100   ██████████████████████100% │
│                                                     │
└─────────────────────────────────────────────────────┘

Core Web Vitals:
• LCP (Largest Contentful Paint):  < 2.5s   ✅
• FID (First Input Delay):         < 100ms  ✅
• CLS (Cumulative Layout Shift):   < 0.1    ✅

Load Times:
• First Contentful Paint: 1.2s
• Time to Interactive:    2.5s
• Total Page Size:        < 500KB
```

### Optimization Techniques

- ✅ Static site pre-rendering
- ✅ Asset minification (JS, CSS)
- ✅ Image compression & lazy loading
- ✅ Service Worker caching
- ✅ CDN distribution
- ✅ HTTP/2 & Gzip/Brotli compression
- ✅ Critical CSS inlining
- ✅ Deferred JavaScript execution

📖 **[Performance Guide →](docs/QUICK_PERFORMANCE_GUIDE.md)**

---

## 📚 Documentation

Comprehensive documentation is available in the [`docs/`](docs/) directory:

| Document | Description |
|----------|-------------|
| [📖 Documentation Index](docs/README.md) | Complete documentation overview |
| [🏗️ Architecture](docs/ARCHITECTURE.md) | **NEW!** System architecture and design |
| [🚀 Quick Start](docs/QUICK_START.md) | Get running in 5 minutes |
| [🛠️ Development Guide](docs/DEVELOPMENT_GUIDE.md) | Complete development documentation |
| [⚡ Performance Guide](docs/QUICK_PERFORMANCE_GUIDE.md) | Performance optimization tips |
| [🚢 Deployment](docs/DEPLOYMENT_FIX.md) | CI/CD and deployment setup |
| [📝 Code Optimization](docs/CODE_OPTIMIZATION_SUMMARY.md) | Code improvements overview |

---

## 🤝 Contributing

We welcome contributions from the community! Whether it's:

- 🐛 Bug reports
- 💡 Feature requests
- 📝 Documentation improvements
- 🎨 Design enhancements
- ✨ Code contributions

### How to Contribute

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

📖 **[Contributing Guidelines →](CONTRIBUTING.md)**

### Development Setup for Contributors

```bash
# Fork and clone
git clone https://github.com/YOUR-USERNAME/infection-detected.git
cd infection-detected

# Add upstream remote
git remote add upstream https://github.com/sivolko/infection-detected.git

# Install and run
bundle install && npm install
npm run serve
```

---

## 📊 Project Stats

- **Performance Score**: 90+ (Lighthouse)
- **Load Time**: < 3 seconds
- **Image Optimization**: 97% size reduction
- **Security Score**: A+ (Mozilla Observatory)
- **Accessibility**: WCAG 2.1 AA compliant

---

## 🌟 Acknowledgments

Built with these amazing open-source projects:

- [Jekyll](https://jekyllrb.com/) - Static site generator
- [Firebase](https://firebase.google.com/) - Hosting and deployment
- [Ionicons](https://ionic.io/ionicons) - Icon library
- [Lightense.js](https://sparanoid.com/work/lightense-images/) - Image lightbox

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 Shubhendu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files...
```

---

## 📞 Contact & Support

- **Author**: Shubhendu
- **GitHub**: [@sivolko](https://github.com/sivolko)
- **Issues**: [GitHub Issues](https://github.com/sivolko/infection-detected/issues)
- **Website**: [infection-detected.web.app](https://infection-detected.web.app)

---

<div align="center">

### 🛡️ Made with ❤️ for the Cybersecurity Community

**[⬆ Back to Top](#-infection-detected)**

---

**If you find this project helpful, please consider giving it a ⭐!**

[![Star on GitHub](https://img.shields.io/github/stars/sivolko/infection-detected?style=social)](https://github.com/sivolko/infection-detected)

</div>
