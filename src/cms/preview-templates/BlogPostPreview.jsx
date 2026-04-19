import React from "react";
import BlogPostView from "../../components/BlogPostView";
import en from "../../intl/en.json";
import es from "../../intl/es.json";

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
        const author = item.get("author");
        if (author != null) {
          return String(author);
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
  const lang = entry.getIn(["data", "lang"]) || "es";
  const tags = decapListToStrings(entry.getIn(["data", "tags"]));
  const authors = decapListToStrings(entry.getIn(["data", "authors"]));
  const references = decapReferencesFromList(entry.getIn(["data", "references"]));
  const featuredImage = entry.getIn(["data", "featuredImage"]);
  const featuredImageUrl = featuredImage ? getAsset(featuredImage)?.toString() : null;

  const messages = lang === "en" ? en : es;
  const p = messages.blog.post;
  const publishedDate = formatPreviewDate(dateRaw);
  const updatedDate = formatPreviewDate(updatedAtRaw) || publishedDate;
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
