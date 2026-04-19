# Falcode - Organizational Website

<p align="center">
  <img alt="Falcode Logo" src="src/images/falcode-logo-navbar.svg" width="200" />
</p>
<p align="center">
  This is the organizational website of Falcode, built with Gatsby and TypeScript.
</p>

## 🌐 Deployment

This website is deployed on **Cloudflare Pages**.

**🌍 Live Site:** [www.falcode.dev](https://www.falcode.dev)

## 🚀 Development

To start the development server:

```bash
# Install dependencies
npm install

# Start development server
npm run start
```

Your site will be running at [http://localhost:9999](http://localhost:9999).

## 🛠️ Tech Stack

- **Gatsby** - React-based static site. [gatsbyjs.com](https://www.gatsbyjs.com/)
- **TypeScript** - Type-safe JavaScript. [typescriptlang.org](https://www.typescriptlang.org/)
- **Bulma** - Modern CSS framework based on Flexbox. [bulma.io](https://bulma.io/)
- **SASS** - CSS preprocessor for styling. [sass-lang.com](https://sass-lang.com/)
- **AOS** - Animate on scroll library. [aos.github.io](https://aos.github.io/)
- **Web3Forms** - Handling contact form without backend. [web3forms.com](https://web3forms.com/)
- **Decap CMS** - Git-based content management for blog posts and drafts. [decapcms.org](https://decapcms.org/)

## ✍️ Content Management

Blog content is managed with **Decap CMS** via the `/admin` panel.

## 📁 Project Structure

- `src/pages/` - Main page components
- `src/sections/` - Website sections
- `src/components/` - Reusable components
- `src/styles/` - SASS stylesheets
- `src/intl/` - Internationalization files
- `content/blog/` - Published blog posts (Decap CMS writes here)
- `src/content/blog-draft/` - Blog drafts (when work in progress)