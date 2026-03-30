Blog authoring guide
====================

Create one `.md` file per post in this directory.

Required frontmatter:

```yaml
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
```

Slug is generated from the file name.

Examples:
- `es-mi-post.md` -> `/es/blog/es-mi-post/`
- `en-my-post.md` -> `/en/blog/en-my-post/`

If you publish translations, use the same `translationKey` in each language file.
If you publish in only one language, omit `translationKey`.

Images
------

This project supports two image types in blog posts:

1) Featured image (frontmatter, optional)
2) Inline images in markdown body

How to organize files:

- Keep each post image in the same folder as the `.md` file, or in a relative subfolder.
- Always use relative paths from the markdown file location.

Featured image example:

```yaml
---
title: "My post"
description: "Short summary"
date: "2026-03-20"
updatedAt: "2026-03-20"
lang: "en"
featuredImage: "./images/my-post-cover.jpg"
draft: false
---
```

Inline image example:

```md
![Architecture diagram](./images/mcp-architecture.png)
```

Notes:

- `featuredImage` is rendered automatically at the top of the post.
- Inline markdown images are optimized by Gatsby during build.
- Prefer `.jpg`, `.png`, `.webp`, or `.avif`.
- SVG/GIF are not processed by Sharp the same way as raster images.
