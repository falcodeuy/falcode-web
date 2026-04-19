import React from "react";
import { Link } from "gatsby";
import "../styles/main.scss";

export interface BlogPostViewLabels {
  backToBlog: string;
  originalLanguage: string;
  published: string;
  updated: string;
  authors?: string;
  references?: string;
}

export interface BlogPostReference {
  title: string;
  url?: string;
  detail?: string;
}

export interface BlogPostViewProps {
  title: string;
  description?: string | null;
  tags?: string[];
  authors?: string[];
  references?: BlogPostReference[];
  articleLang: string;
  publishedDate?: string | null;
  updatedDate?: string | null;
  featuredImageSlot?: React.ReactNode;
  body: React.ReactNode;
  labels: BlogPostViewLabels;
  languageChipInner: React.ReactNode;
  backToBlogHref?: string;
  previewBanner?: React.ReactNode;
}

const BlogPostView: React.FC<BlogPostViewProps> = ({
  title,
  description,
  tags = [],
  authors = [],
  references = [],
  articleLang,
  publishedDate,
  updatedDate,
  featuredImageSlot,
  body,
  labels,
  languageChipInner,
  backToBlogHref,
  previewBanner,
}) => {
  const authorsLabel = labels.authors ?? "Authors";
  const showAuthors = authors.length > 0;
  const referenceItems = normalizeBlogReferences(references);
  const showReferences = referenceItems.length > 0;
  const referencesHeading = labels.references ?? "Credits & sources";

  return (
    <main className="section section-padding blog-page">
      <div className="container content">
        {previewBanner}
        {backToBlogHref ? (
          <Link className="blog-back-link mb-4 is-inline-flex" to={backToBlogHref}>
            <span className="icon is-small">
              <i className="fas fa-arrow-left" aria-hidden="true" />
            </span>
            <span>{labels.backToBlog}</span>
          </Link>
        ) : null}
        <h1 className="mb-2 title is-outfit">{title}</h1>
        {description ? <p className="is-size-5 has-text-grey mb-4">{description}</p> : null}
        {featuredImageSlot ? <div className="mb-5">{featuredImageSlot}</div> : null}
        <div className="is-flex is-align-items-center is-flex-wrap-wrap mb-5" style={{ gap: "0.75rem" }}>
          <span className="blog-tag-chip blog-tag-chip--readonly">
            <span className="icon is-small">
              <i className="fas fa-language" aria-hidden="true" />
            </span>
            <span>
              {labels.originalLanguage}: {languageChipInner}
            </span>
          </span>
          {publishedDate ? (
            <span className="blog-tag-chip blog-tag-chip--readonly">
              <span className="icon is-small">
                <i className="fas fa-calendar-alt" aria-hidden="true" />
              </span>
              <span>
                {labels.published}: {publishedDate}
              </span>
            </span>
          ) : null}
          {updatedDate ? (
            <span className="blog-tag-chip blog-tag-chip--readonly">
              <span className="icon is-small">
                <i className="fas fa-clock" aria-hidden="true" />
              </span>
              <span>
                {labels.updated}: {updatedDate}
              </span>
            </span>
          ) : null}
          {showAuthors ? (
            <span className="blog-tag-chip blog-tag-chip--readonly">
              <span className="icon is-small">
                <i className="fas fa-user" aria-hidden="true" />
              </span>
              <span>
                {authorsLabel}: {authors.join(", ")}
              </span>
            </span>
          ) : null}
        </div>
        {tags.length > 0 ? (
          <div className="mb-5 is-flex is-flex-wrap-wrap is-align-items-center" style={{ gap: "0.5rem" }}>
            {tags.map((tag) => (
              <span key={tag} className="blog-tag-chip blog-tag-chip--readonly">
                #{tag}
              </span>
            ))}
          </div>
        ) : null}
        <article lang={articleLang} translate="yes">
          {body}
        </article>
        {showReferences ? (
          <div className="blog-post-endmatter">
            <section aria-labelledby="blog-post-references-heading">
              <h2 id="blog-post-references-heading" className="title is-5 is-outfit mb-3">
                {referencesHeading}
              </h2>
              <ul className="blog-post-endmatter__list">
                {referenceItems.map((item, index) => (
                  <li key={`${index}-${item.title}`}>
                    {item.url ? (
                      <a href={item.url} target="_blank" rel="noopener noreferrer">
                        {item.title}
                      </a>
                    ) : (
                      <span className="has-text-weight-semibold">{item.title}</span>
                    )}
                    {item.detail ? (
                      <div className="is-size-7 has-text-grey blog-post-endmatter__detail">{item.detail}</div>
                    ) : null}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        ) : null}
      </div>
    </main>
  );
};

export default BlogPostView;

export function normalizeBlogReferences(references: unknown): BlogPostReference[] {
  if (!references || !Array.isArray(references)) {
    return [];
  }
  return references
    .map((entry): BlogPostReference | null => {
      if (entry == null || typeof entry !== "object") {
        return null;
      }
      const rawTitle = (entry as { title?: unknown }).title;
      const title = typeof rawTitle === "string" ? rawTitle.trim() : "";
      if (!title) {
        return null;
      }
      const rawUrl = (entry as { url?: unknown }).url;
      const url = typeof rawUrl === "string" && rawUrl.trim() ? rawUrl.trim() : undefined;
      const rawDetail = (entry as { detail?: unknown }).detail;
      const detail =
        typeof rawDetail === "string" && rawDetail.trim() ? rawDetail.trim() : undefined;
      const item: BlogPostReference = { title };
      if (url) {
        item.url = url;
      }
      if (detail) {
        item.detail = detail;
      }
      return item;
    })
    .filter((value): value is BlogPostReference => value !== null);
}

export function flattenRemarkAuthors(authors: unknown): string[] {
  if (!authors || !Array.isArray(authors)) {
    return [];
  }
  return authors
    .map((entry) => {
      if (entry == null) {
        return null;
      }
      if (typeof entry === "string") {
        return entry;
      }
      if (typeof entry === "object" && entry !== null && "author" in entry) {
        const value = (entry as { author?: string | null }).author;
        return value ?? null;
      }
      return null;
    })
    .filter((value): value is string => Boolean(value));
}
