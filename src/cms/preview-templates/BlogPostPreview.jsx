import React from "react";
import BlogPostView from "../../components/BlogPostView";
import en from "../../intl/en.json";
import es from "../../intl/es.json";

const AUTHOR_SOCIALS = {
  "Fausto Márquez": {
    linkedin: "https://www.linkedin.com/in/faustom721",
    github: "https://github.com/faustom721",
  },
  "Crhistyan Silva": {
    linkedin: "https://www.linkedin.com/in/crhistyan-silva-650719149/",
    github: "https://github.com/CrhistyanSilva",
  },
  "Leandro Paz": {
    linkedin: "https://www.linkedin.com/in/leandro-paz-fructos",
    github: "https://github.com/leopaz95",
  },
};

function decapReferencesFromList(list) {
  if (!list || typeof list.toArray !== "function") {
    return [];
  }
  return list
    .toArray()
    .map((item) => {
      if (item == null) {
        return null;
      }
      if (typeof item.get === "function") {
        const title = item.get("title");
        if (title == null || !String(title).trim()) {
          return null;
        }
        const titleStr = String(title).trim();
        const urlRaw = item.get("url");
        const url = urlRaw != null && String(urlRaw).trim() ? String(urlRaw).trim() : undefined;
        const detailRaw = item.get("detail");
        const detail =
          detailRaw != null && String(detailRaw).trim() ? String(detailRaw).trim() : undefined;
        return { title: titleStr, url, detail };
      }
      return null;
    })
    .filter(Boolean);
}

function ensureHttpUrl(value) {
  const t = String(value).trim();
  if (!t) {
    return undefined;
  }
  if (/^https?:\/\//i.test(t)) {
    return t;
  }
  return `https://${t.replace(/^\/+/, "")}`;
}

function enrichAuthorWithPreset(author) {
  if (!author || !author.name) {
    return author;
  }
  const preset = AUTHOR_SOCIALS[author.name];
  if (!preset) {
    return author;
  }
  return {
    ...author,
    linkedin: author.linkedin ?? preset.linkedin,
    github: author.github ?? preset.github,
  };
}

function decapAuthorsFromList(list) {
  if (!list || typeof list.toArray !== "function") {
    return [];
  }
  return list
    .toArray()
    .map((item) => {
      if (item == null) {
        return null;
      }
      if (typeof item.get === "function") {
        const authorValue = item.get("author");
        const nestedAuthor =
          authorValue && typeof authorValue.get === "function" ? authorValue : null;
        const nameRaw = nestedAuthor ? nestedAuthor.get("name") : authorValue;
        const name = nameRaw != null && String(nameRaw).trim() ? String(nameRaw).trim() : "";
        if (!name) {
          return null;
        }
        const linkedinRaw = nestedAuthor ? nestedAuthor.get("linkedin") : item.get("linkedin");
        const githubRaw = nestedAuthor ? nestedAuthor.get("github") : item.get("github");
        const linkedin =
          linkedinRaw != null && String(linkedinRaw).trim()
            ? ensureHttpUrl(String(linkedinRaw))
            : undefined;
        const github =
          githubRaw != null && String(githubRaw).trim() ? ensureHttpUrl(String(githubRaw)) : undefined;
        const out = { name };
        if (linkedin) {
          out.linkedin = linkedin;
        }
        if (github) {
          out.github = github;
        }
        return enrichAuthorWithPreset(out);
      }
      if (typeof item === "string" && item.trim()) {
        return enrichAuthorWithPreset({ name: item.trim() });
      }
      return null;
    })
    .filter(Boolean);
}

function decapAuthorFromObject(author) {
  if (!author || typeof author.get !== "function") {
    return [];
  }
  const nameRaw = author.get("name") ?? author.get("author");
  const name = nameRaw != null && String(nameRaw).trim() ? String(nameRaw).trim() : "";
  if (!name) {
    return [];
  }
  const linkedinRaw = author.get("linkedin");
  const githubRaw = author.get("github");
  const linkedin =
    linkedinRaw != null && String(linkedinRaw).trim() ? ensureHttpUrl(String(linkedinRaw)) : undefined;
  const github =
    githubRaw != null && String(githubRaw).trim() ? ensureHttpUrl(String(githubRaw)) : undefined;
  const out = { name };
  if (linkedin) {
    out.linkedin = linkedin;
  }
  if (github) {
    out.github = github;
  }
  return [enrichAuthorWithPreset(out)];
}

function decapListToStrings(list) {
  if (!list || typeof list.toArray !== "function") {
    return [];
  }
  return list
    .toArray()
    .map((item) => {
      if (item == null) {
        return null;
      }
      if (typeof item === "string") {
        return item;
      }
      if (typeof item.get === "function") {
        const tag = item.get("tag");
        if (tag != null) {
          return String(tag);
        }
        return String(item.get("name") || "").trim() || null;
      }
      return String(item);
    })
    .filter(Boolean);
}

function formatPreviewDate(value) {
  if (value == null || value === "") {
    return null;
  }
  if (typeof value === "object" && typeof value.toDate === "function") {
    return value.toDate().toISOString().slice(0, 10);
  }
  if (value instanceof Date) {
    return value.toISOString().slice(0, 10);
  }
  const s = String(value);
  if (/^\d{4}-\d{2}-\d{2}/.test(s)) {
    return s.slice(0, 10);
  }
  return s;
}

const BlogPostPreview = ({ entry, widgetFor, getAsset }) => {
  const title = entry.getIn(["data", "title"]) || "Untitled post";
  const description = entry.getIn(["data", "description"]);
  const dateRaw = entry.getIn(["data", "date"]);
  const updatedAtRaw = entry.getIn(["data", "updatedAt"]);
  const lang = entry.getIn(["data", "lang"]) || "en";
  const tags = decapListToStrings(entry.getIn(["data", "tags"]));
  const authorFromSingleField = decapAuthorFromObject(entry.getIn(["data", "author"]));
  const authors =
    authorFromSingleField.length > 0
      ? authorFromSingleField
      : decapAuthorsFromList(entry.getIn(["data", "authors"]));
  const references = decapReferencesFromList(entry.getIn(["data", "references"]));
  const featuredImage = entry.getIn(["data", "featuredImage"]);
  const featuredImageUrl = featuredImage ? getAsset(featuredImage)?.toString() : null;

  const messages = lang === "en" ? en : es;
  const p = messages.blog.post;
  const publishedDate = formatPreviewDate(dateRaw);
  const updatedDate = formatPreviewDate(updatedAtRaw);
  const languageName = p.language[lang] || lang.toUpperCase();

  return (
    <BlogPostView
      title={title}
      description={description}
      tags={tags}
      authors={authors}
      references={references}
      articleLang={lang}
      publishedDate={publishedDate}
      updatedDate={updatedDate}
      featuredImageSlot={
        featuredImageUrl ? (
          <img
            src={featuredImageUrl}
            alt={title}
            style={{ width: "100%", height: "auto", borderRadius: "12px", maxHeight: "480px", objectFit: "cover" }}
          />
        ) : null
      }
      body={widgetFor("body")}
      labels={{
        backToBlog: p.backToBlog,
        originalLanguage: p.originalLanguage,
        published: p.published,
        updated: p.updated,
        authors: p.authors,
        references: p.references,
        linkedInProfile: p.linkedInProfile,
        githubProfile: p.githubProfile,
      }}
      languageChipInner={languageName}
      previewBanner={
        <div className="notification is-warning is-light mb-4">
          <strong>👀 Draft preview</strong>
        </div>
      }
    />
  );
};

export default BlogPostPreview;
