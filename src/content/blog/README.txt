Blog authoring guide
====================

Create one `.md` file per post in this directory.

Required frontmatter:

---
title: "Post title"
description: "Short summary"
date: "2026-03-20"
updatedAt: "2026-03-20"
lang: "es" # "es" or "en"
translationKey: "my-post" # optional; same value across translated versions
tags:
  - "gatsby"
  - "seo"
draft: false
---

Slug is generated from the file name.

Examples:
- `es-mi-post.md` -> `/es/blog/es-mi-post/`
- `en-my-post.md` -> `/en/blog/en-my-post/`

If you publish translations, use the same `translationKey` in each language file.
If you publish in only one language, omit `translationKey`.
