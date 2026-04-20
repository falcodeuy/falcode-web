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
  relatedPosts?: string;
  readArticle?: string;
  linkedInProfile?: string;
  githubProfile?: string;
  closingLine?: string;
}

export interface BlogPostAuthor {
  name: string;
  linkedin?: string;
  github?: string;
}

const AUTHOR_SOCIALS: Record<string, { linkedin?: string; github?: string }> = {
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

export interface BlogPostReference {
  title: string;
  url?: string;
  detail?: string;
}

export interface BlogPostRelatedPost {
  slug: string;
  title: string;
  description?: string | null;
  publishedDate?: string | null;
}

export interface BlogPostViewProps {
  title: string;
  description?: string | null;
  tags?: string[];
  authors?: BlogPostAuthor[];
  references?: BlogPostReference[];
  relatedPosts?: BlogPostRelatedPost[];
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

function AuthorSocialLink({
  href,
  variant,
  label,
}: {
  href: string;
  variant: "linkedin" | "github";
  label: string;
}) {
  const iconClass = variant === "linkedin" ? "fab fa-linkedin" : "fab fa-github";
  return (
    <a
      className="is-inline-flex is-align-items-center ml-1"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      <span className="icon is-small">
        <i className={iconClass} aria-hidden="true" />
      </span>
    </a>
  );
}

const BlogPostView: React.FC<BlogPostViewProps> = ({
  title,
  description,
  tags = [],
  authors = [],
  references = [],
  relatedPosts = [],
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
  const authorItems = authors;
  const showAuthors = authorItems.length > 0;
  const referenceItems = normalizeBlogReferences(references);
  const showReferences = referenceItems.length > 0;
  const referencesHeading = labels.references ?? "Sources & credits";
  const linkedInLabel = labels.linkedInProfile ?? "LinkedIn profile";
  const githubLabel = labels.githubProfile ?? "GitHub profile";
  const relatedPostsHeading = labels.relatedPosts ?? "Related posts";
  const readArticleLabel = labels.readArticle ?? "Read article";
  const closingLine =
    labels.closingLine ??
    "Written with love by humans with mechanical keyboards at Falcode";
  const falcodeName = "Falcode";
  const closingLineParts = closingLine.split(falcodeName);
  const hasFalcodeInClosingLine = closingLineParts.length > 1;
  const showEndmatter = showAuthors || showReferences;
  const showUpdatedDate = Boolean(updatedDate && updatedDate !== publishedDate);

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
        {featuredImageSlot ? <div className="mt-4 mb-3">{featuredImageSlot}</div> : null}
        {description ? <p className="is-size-5 has-text-grey mb-4">{description}</p> : null}
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
          {showUpdatedDate ? (
            <span className="blog-tag-chip blog-tag-chip--readonly">
              <span className="icon is-small">
                <i className="fas fa-clock" aria-hidden="true" />
              </span>
              <span>
                {labels.updated}: {updatedDate}
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
        {showEndmatter ? (
          <div className="mt-6">
            <hr className="my-4" />
            {showAuthors ? (
              <section
                className={showReferences ? "blog-post-endmatter__authors mb-5" : "blog-post-endmatter__authors"}
                aria-labelledby="blog-post-authors-heading"
              >
                <h2 id="blog-post-authors-heading" className="title is-5 is-outfit mb-3">
                  {authorsLabel}
                </h2>
                <div className="is-flex is-flex-wrap-wrap is-align-items-center">
                  {authorItems.map((author, index) => (
                    <div
                      key={`${index}-${author.name}`}
                      className="blog-tag-chip blog-tag-chip--readonly is-inline-flex is-align-items-center mr-2 mb-2"
                    >
                      <span>{author.name}</span>
                      {author.linkedin ? (
                        <AuthorSocialLink
                          href={author.linkedin}
                          variant="linkedin"
                          label={`${linkedInLabel}: ${author.name}`}
                        />
                      ) : null}
                      {author.github ? (
                        <AuthorSocialLink
                          href={author.github}
                          variant="github"
                          label={`${githubLabel}: ${author.name}`}
                        />
                      ) : null}
                    </div>
                  ))}
                </div>
              </section>
            ) : null}
            {showReferences ? (
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
                        <span>{item.title}</span>
                      )}
                      {item.detail ? (
                        <div className="is-size-7 has-text-grey blog-post-endmatter__detail">{item.detail}</div>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}
          </div>
        ) : null}
        {relatedPosts.length > 0 ? (
          <section className="mt-6" aria-labelledby="blog-related-posts-heading">
            <h2 id="blog-related-posts-heading" className="title is-4 is-outfit mb-4">
              {relatedPostsHeading}
            </h2>
            <div className="columns is-multiline">
              {relatedPosts.map((relatedPost) => (
                <div key={relatedPost.slug} className="column is-12-mobile is-6-tablet is-4-desktop">
                  <Link to={relatedPost.slug} className="card is-block is-fullheight">
                    <div className="card-content is-flex is-flex-direction-column is-fullheight">
                      <h3 className="title is-6 is-outfit mb-2">{relatedPost.title}</h3>
                      {relatedPost.description ? (
                        <p className="has-text-grey is-size-7 mb-3">{relatedPost.description}</p>
                      ) : null}
                      <div className="is-flex is-justify-content-space-between is-align-items-center mt-auto">
                        {relatedPost.publishedDate ? (
                          <span className="has-text-grey is-size-7">{relatedPost.publishedDate}</span>
                        ) : (
                          <span />
                        )}
                        <span className="has-text-link is-size-7 has-text-weight-bold is-inline-flex is-align-items-center">
                          {readArticleLabel}
                          <span className="icon is-small ml-1">
                            <i className="fas fa-arrow-right" aria-hidden="true" />
                          </span>
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </section>
        ) : null}
        <p className="has-text-grey has-text-weight-semibold is-size-7 has-text-centered mt-6" aria-label={closingLine}>
          <span>
            {hasFalcodeInClosingLine ? (
              <>
                {closingLineParts[0]}
                <a
                  className="has-text-link"
                  href="https://falcode.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {falcodeName}
                </a>
                {closingLineParts.slice(1).join(falcodeName)}
              </>
            ) : (
              <>
                {closingLine}{" "}
                <a
                  className="blog-post-closing-line__brand"
                  href="https://falcode.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {falcodeName}
                </a>
              </>
            )}
          </span>
          <span aria-hidden="true">❤️</span>
        </p>
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

function normalizeOptionalUrl(value: unknown): string | undefined {
  if (typeof value !== "string") {
    return undefined;
  }
  const t = value.trim();
  if (!t) {
    return undefined;
  }
  if (/^https?:\/\//i.test(t)) {
    return t;
  }
  return `https://${t.replace(/^\/+/, "")}`;
}

function enrichAuthorWithPreset(author: BlogPostAuthor): BlogPostAuthor {
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

export function normalizeBlogAuthors(authors: unknown): BlogPostAuthor[] {
  if (!authors) {
    return [];
  }
  const source = Array.isArray(authors) ? authors : [authors];
  return source
    .map((entry): BlogPostAuthor | null => {
      if (entry == null) {
        return null;
      }
      if (typeof entry === "string") {
        const name = entry.trim();
        return name ? enrichAuthorWithPreset({ name }) : null;
      }
      if (typeof entry !== "object") {
        return null;
      }
      const fromAuthor = (entry as { author?: unknown }).author;
      const fromName = (entry as { name?: unknown }).name;
      const rawName =
        typeof fromAuthor === "string" ? fromAuthor : typeof fromName === "string" ? fromName : "";
      const name = rawName.trim();
      if (!name) {
        return null;
      }
      const item: BlogPostAuthor = { name };
      const linkedin = normalizeOptionalUrl((entry as { linkedin?: unknown }).linkedin);
      const github = normalizeOptionalUrl((entry as { github?: unknown }).github);
      if (linkedin) {
        item.linkedin = linkedin;
      }
      if (github) {
        item.github = github;
      }
      return enrichAuthorWithPreset(item);
    })
    .filter((value): value is BlogPostAuthor => value !== null);
}
