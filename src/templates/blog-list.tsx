import React, { useMemo, useState } from "react";
import { graphql, Link, type HeadFC, type PageProps } from "gatsby";
import { GatsbyImage, getImage, type IGatsbyImageData } from "gatsby-plugin-image";
import { useIntl } from "gatsby-plugin-intl";
import "../styles/main.scss";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SEO from "../components/SEO";

interface BlogListContext {
  language?: "en" | "es";
  intl?: {
    language?: "en" | "es";
  };
  postsPerPage?: number;
}

interface BlogListData {
  allMarkdownRemark: {
    nodes: Array<{
      id: string;
      excerpt: string;
      fields: {
        slug: string;
        postGroup: string;
      };
      frontmatter: {
        title: string;
        date: string;
        description?: string;
        lang: "en" | "es";
        tags?: string[];
        featuredImage?: {
          childImageSharp?: {
            gatsbyImageData: IGatsbyImageData;
          };
        };
      };
    }>;
  };
}

const BlogListTemplate: React.FC<PageProps<BlogListData, BlogListContext>> = ({
  data,
  pageContext,
}) => {
  const intl = useIntl();
  const language = pageContext.language || pageContext.intl?.language || "es";
  const { postsPerPage = 6 } = pageContext;
  const posts = useMemo(() => {
    const postsByGroup = new Map<string, BlogListData["allMarkdownRemark"]["nodes"][number]>();

    data.allMarkdownRemark.nodes.forEach((post) => {
      const groupKey = post.fields.postGroup || post.fields.slug;
      const currentSelection = postsByGroup.get(groupKey);

      if (!currentSelection) {
        postsByGroup.set(groupKey, post);
        return;
      }

      if (currentSelection.frontmatter.lang !== language && post.frontmatter.lang === language) {
        postsByGroup.set(groupKey, post);
      }
    });

    return Array.from(postsByGroup.values());
  }, [data.allMarkdownRemark.nodes, language]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [titleQuery, setTitleQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const allTags = useMemo(
    () =>
      Array.from(
        new Set(posts.flatMap((post) => post.frontmatter.tags || []).map((tag) => tag.toLowerCase()))
      ).sort(),
    [posts]
  );
  const filteredPosts = useMemo(() => {
    let list = posts;

    if (selectedTags.length > 0) {
      list = list.filter((post) => {
        const tags = (post.frontmatter.tags || []).map((tag) => tag.toLowerCase());
        return selectedTags.every((selectedTag) => tags.includes(selectedTag));
      });
    }

    const q = titleQuery.trim().toLowerCase();
    if (q) {
      list = list.filter((post) => post.frontmatter.title.toLowerCase().includes(q));
    }

    return list;
  }, [posts, selectedTags, titleQuery]);
  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / postsPerPage));
  const paginatedPosts = filteredPosts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

  const toggleTag = (tag: string) => {
    setCurrentPage(1);
    setSelectedTags((currentTags) =>
      currentTags.includes(tag) ? currentTags.filter((currentTag) => currentTag !== tag) : [...currentTags, tag]
    );
  };

  const clearFilter = () => {
    setSelectedTags([]);
    setTitleQuery("");
    setCurrentPage(1);
  };

  return (
    <>
      <Header />
      <main className="section section-padding blog-page">
        <div className="container">
          <div className="blog-list-header mb-5">
            <h1 className="title is-outfit blog-list-header__title">
              {intl.formatMessage({ id: "blog.list.title", defaultMessage: "The Falcode Blog" })}
            </h1>
            <div className="field blog-list-search">
              <div className="control">
                <input
                  id="blog-list-title-search"
                  type="search"
                  className="input"
                  value={titleQuery}
                  onChange={(event) => {
                    setCurrentPage(1);
                    setTitleQuery(event.target.value);
                  }}
                  placeholder={intl.formatMessage({
                    id: "blog.list.searchPlaceholder",
                    defaultMessage: "Search by title…",
                  })}
                  aria-label={intl.formatMessage({
                    id: "blog.list.searchAriaLabel",
                    defaultMessage: "Search blog posts by title",
                  })}
                />
              </div>
            </div>
          </div>

          <div className="mb-5 is-flex is-flex-wrap-wrap is-align-items-center" style={{ gap: "0.5rem" }}>
            {allTags.map((tag) => (
              <button
                key={tag}
                type="button"
                className={`blog-tag-chip ${selectedTags.includes(tag) ? "blog-tag-chip--active" : ""}`}
                onClick={() => toggleTag(tag)}
              >
                #{tag}
              </button>
            ))}
            <button type="button" className="blog-clear-filters-btn" onClick={clearFilter}>
              {intl.formatMessage({
                id: "blog.list.clearFilters",
                defaultMessage: "Clear filters",
              })}
            </button>
          </div>

          {paginatedPosts.length === 0 ? (
            <p className="has-text-grey mb-5">
              {intl.formatMessage({
                id: "blog.list.noResults",
              })}
            </p>
          ) : null}

          <div className="blog-list-grid">
            {paginatedPosts.map((post) => {
              const cardImage = getImage(post.frontmatter.featuredImage || null);

              return (
                <article key={post.id} className="blog-list-grid__item">
                  <Link to={post.fields.slug} className="box is-block blog-list-card">
                    {cardImage ? (
                      <div className="blog-list-card__image">
                        <GatsbyImage image={cardImage} alt={post.frontmatter.title} />
                      </div>
                    ) : null}
                    <div className="blog-list-card__body">
                      <p className="is-size-7 has-text-grey mb-2">{post.frontmatter.date}</p>
                      <h2 className="title is-4 mb-3">{post.frontmatter.title}</h2>
                      <p className="mb-4">{post.frontmatter.description || post.excerpt}</p>
                      <p className="is-size-7 mb-3">
                        {(post.frontmatter.tags || []).map((tag) => (
                          <span key={tag} className="blog-tag-chip blog-tag-chip--readonly mr-2">
                            #{tag}
                          </span>
                        ))}
                      </p>
                    </div>
                  </Link>
                </article>
              );
            })}
          </div>

          {totalPages > 1 ? (
            <nav className="blog-pagination mt-6" role="navigation" aria-label="pagination">
              {currentPage > 1 ? (
                <button
                  type="button"
                  className="blog-pagination__control"
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  {intl.formatMessage({
                    id: "blog.list.pagination.previous",
                    defaultMessage: "Previous",
                  })}
                </button>
              ) : null}

              <ul className="blog-pagination__list">
                {Array.from({ length: totalPages }).map((_, index) => {
                  const page = index + 1;
                  return (
                    <li key={page}>
                      <button
                        type="button"
                        className={`blog-pagination__page ${currentPage === page ? "blog-pagination__page--active" : ""}`}
                        onClick={() => setCurrentPage(page)}
                      >
                        {page}
                      </button>
                    </li>
                  );
                })}
              </ul>

              {currentPage < totalPages ? (
                <button
                  type="button"
                  className="blog-pagination__control"
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  {intl.formatMessage({
                    id: "blog.list.pagination.next",
                    defaultMessage: "Next",
                  })}
                </button>
              ) : null}
            </nav>
          ) : null}
        </div>
      </main>
      <Footer />
    </>
  );
};

export const query = graphql`
  query BlogListPage {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { date: { ne: null }, title: { ne: null } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 180)
        fields {
          slug
          postGroup
        }
        frontmatter {
          title
          date(formatString: "YYYY-MM-DD")
          description
          lang
          tags
          featuredImage {
            childImageSharp {
              gatsbyImageData(
                width: 1200
                quality: 80
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  }
`;

export default BlogListTemplate;

export const Head: HeadFC<BlogListData, BlogListContext> = ({ pageContext }) => {
  const lang = pageContext.language || pageContext.intl?.language || "es";
  const title = "Falcode Blog";
  const description =
    lang === "es"
      ? "Ideas practicas sobre desarrollo, IA, AWS y producto digital."
      : "Practical insights about development, AI, AWS and digital products.";
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: title,
    description,
    inLanguage: lang,
    url: `https://falcode.dev/${lang}/blog/`,
  };

  return (
    <SEO
      title={title}
      description={description}
      pathname={`/${lang}/blog/`}
      lang={lang}
      keywords={["blog", "software", "inteligencia artificial", "aws", "desarrollo web"]}
      structuredData={structuredData}
    />
  );
};
