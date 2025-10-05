# Contributing to Infection Detected

First off, thank you for considering contributing to Infection Detected! 🎉

The following is a set of guidelines for contributing to this project. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

---

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Enhancements](#suggesting-enhancements)
  - [Writing Blog Posts](#writing-blog-posts)
  - [Code Contributions](#code-contributions)
- [Development Setup](#development-setup)
- [Style Guidelines](#style-guidelines)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Pull Request Process](#pull-request-process)

---

## 🤝 Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

### Our Standards

- **Be respectful**: Treat everyone with respect and kindness
- **Be collaborative**: Work together towards common goals
- **Be inclusive**: Welcome diverse perspectives and experiences
- **Be patient**: Remember that everyone was once a beginner
- **Give constructive feedback**: Help others learn and improve

---

## 🚀 How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the issue list as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

**Bug Report Template:**

```markdown
**Describe the bug**
A clear and concise description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected behavior**
A clear description of what you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Environment:**
 - OS: [e.g. Windows, macOS, Linux]
 - Browser: [e.g. Chrome 96, Firefox 95]
 - Ruby Version: [e.g. 3.3.0]
 - Node Version: [e.g. 18.20.0]

**Additional context**
Add any other context about the problem here.
```

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

- **Clear title** - Use a clear and descriptive title
- **Detailed description** - Provide a step-by-step description of the suggested enhancement
- **Current vs. proposed** - Explain the current behavior and the proposed behavior
- **Why it's useful** - Explain why this enhancement would be useful
- **Examples** - Include screenshots, mockups, or code examples if possible

### Writing Blog Posts

Want to contribute a blog post? Great! Here's how:

1. **Fork the repository**
2. **Create a new branch**: `git checkout -b post/your-post-slug`
3. **Create your post**: `_posts/YYYY-MM-DD-your-post-slug.md`

```markdown
---
layout: post
title: "Your Awesome Post Title"
date: 2025-10-05 12:00:00 +0530
description: "SEO-friendly description (120-160 chars)"
image: /assets/images/your-image.jpg
tags: [security, tutorial, ctf]
author: Your Name
featured: false
popular: false
---

Your content here using Markdown...
```

4. **Add images**: Place in `assets/images/` and optimize them
5. **Test locally**: `npm run serve`
6. **Submit PR**: See [Pull Request Process](#pull-request-process)

**Blog Post Guidelines:**
- ✅ Technical accuracy is paramount
- ✅ Include code examples with syntax highlighting
- ✅ Optimize images before committing
- ✅ Use proper Markdown formatting
- ✅ Add relevant tags
- ✅ Keep paragraphs concise and scannable
- ✅ Include a table of contents for long posts

### Code Contributions

Contributing code? Awesome! Follow these steps:

1. **Check existing issues** or create a new one to discuss your changes
2. **Fork the repository**
3. **Create a feature branch**: `git checkout -b feature/amazing-feature`
4. **Make your changes**
5. **Test thoroughly**: Run `npm run check` and test locally
6. **Commit your changes**: Follow [commit guidelines](#commit-message-guidelines)
7. **Push to your fork**: `git push origin feature/amazing-feature`
8. **Open a Pull Request**

---

## 🛠️ Development Setup

### Prerequisites

```bash
# Required
- Ruby ~> 3.3.0
- Node.js >= 18.0.0
- Bundler
- Git

# Optional
- ImageMagick (for image optimization)
```

### Initial Setup

```bash
# 1. Fork and clone the repository
git clone https://github.com/YOUR_USERNAME/infection-detected.git
cd infection-detected

# 2. Install Ruby dependencies
bundle install

# 3. Install Node dependencies
npm install

# 4. Start development server
npm run serve

# 5. Open in browser
# Visit http://127.0.0.1:4000/
```

### Development Workflow

```bash
# Create a new branch
git checkout -b feature/my-feature

# Make changes and test
npm run serve

# Run checks
npm run check

# Commit with conventional commits
git commit -m "feat: add amazing feature"

# Push to your fork
git push origin feature/my-feature

# Open a Pull Request on GitHub
```

---

## 📝 Style Guidelines

### Code Style

**Jekyll/Liquid Templates:**
```liquid
{% if condition %}
  <div class="container">
    {{ content }}
  </div>
{% endif %}
```

**SCSS:**
```scss
.component {
  property: value;
  
  &__element {
    property: value;
  }
  
  &--modifier {
    property: value;
  }
}
```

**JavaScript:**
```javascript
// Use modern ES6+ syntax
const myFunction = (param) => {
  // Clear, concise comments
  return result;
};
```

### File Naming Conventions

- **Blog posts**: `YYYY-MM-DD-post-title-slug.md`
- **Components**: `component-name.html`
- **Stylesheets**: `_component-name.scss`
- **JavaScript**: `module-name.js`
- **Images**: `descriptive-name.jpg` (lowercase, hyphens)

### Directory Structure Rules

```
_includes/     → Reusable HTML components
_layouts/      → Page templates
_sass/         → SCSS partials (prefix with _)
assets/css/    → Compiled CSS (don't edit directly)
assets/js/     → JavaScript modules
assets/images/ → Optimized images only
docs/          → Documentation (not built)
```

---

## 📝 Commit Message Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/):

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Code style changes (formatting, no logic change)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks
- `ci`: CI/CD changes

### Examples

```bash
# Feature
git commit -m "feat(posts): add social sharing buttons"

# Bug fix
git commit -m "fix(images): resolve lazy loading on Safari"

# Documentation
git commit -m "docs(readme): update installation instructions"

# Performance
git commit -m "perf(images): optimize image compression script"

# Refactor
git commit -m "refactor(css): reorganize SCSS file structure"
```

### Best Practices

- Use present tense: "add feature" not "added feature"
- Use imperative mood: "move cursor to" not "moves cursor to"
- Keep subject line under 50 characters
- Capitalize the subject line
- Don't end subject line with a period
- Separate subject from body with a blank line
- Wrap body at 72 characters
- Use body to explain *what* and *why*, not *how*

---

## 🔀 Pull Request Process

### Before Submitting

- [ ] Test your changes locally
- [ ] Run `npm run check` to verify Jekyll build
- [ ] Optimize any added images
- [ ] Update documentation if needed
- [ ] Ensure code follows style guidelines
- [ ] Write descriptive commit messages
- [ ] Rebase on latest main branch

### PR Template

```markdown
## Description
Brief description of what this PR does.

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Code refactoring

## Testing
- [ ] Tested locally
- [ ] Verified on multiple browsers
- [ ] Checked mobile responsiveness
- [ ] Ran `npm run check`

## Screenshots
If applicable, add screenshots.

## Related Issues
Closes #123
```

### Review Process

1. **Automated checks** must pass (if CI/CD is configured)
2. **Code review** by at least one maintainer
3. **Testing** verification
4. **Documentation** review if applicable
5. **Approval** and merge

### After Merging

- **Delete your branch**: Keep the repository clean
- **Update your fork**: Sync with upstream
- **Celebrate**: You're awesome! 🎉

---

## 🖼️ Image Guidelines

### Before Adding Images

1. **Optimize first**: Run `npm run optimize:images`
2. **Use appropriate formats**:
   - Photos: JPG (quality 85%)
   - Graphics: PNG or SVG
   - Consider WebP for better compression
3. **Size limits**:
   - Blog post images: Max 1200px width
   - Thumbnails: Max 400px width
   - File size: < 200KB per image
4. **Naming**: Use descriptive, lowercase, hyphenated names

### Image Optimization

```bash
# Optimize all images
npm run optimize:images

# Manual optimization with ImageMagick
convert input.jpg -strip -interlace Plane -quality 85 -resize 1200> output.jpg

# WebP conversion
cwebp -q 85 input.jpg -o output.webp
```

---

## ✅ Checklist for Contributors

### For Code Changes
- [ ] Code follows project style guidelines
- [ ] Self-review of code completed
- [ ] Comments added for complex logic
- [ ] Documentation updated
- [ ] No new warnings generated
- [ ] Tests added/updated (if applicable)
- [ ] All tests pass locally
- [ ] Dependent changes merged

### For Blog Posts
- [ ] Front matter properly formatted
- [ ] Images optimized and added
- [ ] Post renders correctly locally
- [ ] Links are valid
- [ ] Tags are relevant
- [ ] SEO description added
- [ ] Spelling and grammar checked

### For Documentation
- [ ] Information is accurate
- [ ] Examples are tested
- [ ] Formatting is consistent
- [ ] Links are valid
- [ ] Table of contents updated (if needed)

---

## 🤔 Questions?

- **General questions**: Open a [GitHub Discussion](https://github.com/sivolko/infection-detected/discussions)
- **Bug reports**: Open an [Issue](https://github.com/sivolko/infection-detected/issues)
- **Security issues**: Email the maintainer directly

---

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

## 🙏 Thank You!

Your contributions make this project better for everyone. Thank you for taking the time to contribute! 🎉

---

<div align="center">

**[Back to README](./README.md)** | **[View Documentation](./docs/)**

Made with ❤️ by the Infection Detected community

</div>
