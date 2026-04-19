import React from "react";
import { Link } from "gatsby";
import "../styles/main.scss";

export interface BlogPostViewLabels {
  backToBlog: string;
  originalLanguage: string;
  published: string;
  updated: string;
  authors?: string;
}

export interface BlogPostViewProps {
  title: string;
  description?: string | null;
  tags?: string[];
  authors?: string[];
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
      </div>
    </main>
  );
};

export default BlogPostView;

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
