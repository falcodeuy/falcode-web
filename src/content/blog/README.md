Blog authoring guide
====================

Use one directory per blog post inside `src/content/blog`.

Slug and language rules
-----------------------

- Slug comes from the post directory name.
- Language comes from `lang` frontmatter (recommended) and should match file name (`es.md` or `en.md`).
- URLs are generated as `/<lang>/blog/<post-directory>/`.
- Translations are detected automatically when `es.md` and `en.md` exist in the same directory.

Examples:

- `mcp-getting-started/es.md` -> `/es/blog/mcp-getting-started/`
- `mcp-getting-started/en.md` -> `/en/blog/mcp-getting-started/`
- `seo-tecnico-sitios-headless/es.md` -> `/es/blog/seo-tecnico-sitios-headless/`

Recommended structure:

```txt
src/content/blog/
  mcp-getting-started/
    es.md
    en.md
    cover.jpg
    images/
      architecture.png
  seo-tecnico-sitios-headless/
    es.md
```

Required frontmatter
--------------------

```yaml
---
title: "Post title"
description: "Short summary"
date: "2026-03-20"
updatedAt: "2026-03-20"
lang: "es" # "es" or "en"
tags:
  - "gatsby"
  - "seo"
draft: false
---
```

Images
------

This project supports:

1) Featured image (`featuredImage` in frontmatter, optional)
2) Inline markdown images

Rules:

- Do not use a shared blog images folder.
- Keep each post image inside the same post directory.
- Use relative paths from each markdown file.

Featured image example:

```yaml
---
title: "My post"
description: "Short summary"
date: "2026-03-20"
updatedAt: "2026-03-20"
lang: "en"
featuredImage: "./cover.jpg"
draft: false
---
```

Inline image examples:

```md
![Architecture diagram](./cover.jpg)
![Flow](./images/mcp-architecture.png)
```

Notes:

- `featuredImage` renders automatically at the top of the post.
- Inline markdown images are optimized at build time.
- Prefer `.jpg`, `.png`, `.webp`, or `.avif`.
- SVG/GIF are not processed by Sharp the same way as raster images.
