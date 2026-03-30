import React, { useMemo, useState } from "react";
import { graphql, Link, type HeadFC, type PageProps } from "gatsby";
import "../styles/main.scss";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SEO from "../components/SEO";

interface BlogListContext {
  language: "en" | "es";
  postsPerPage?: number;
}

interface BlogListData {
  allMarkdownRemark: {
    nodes: Array<{
      id: string;
      excerpt: string;
      fields: {
        slug: string;
      };
      frontmatter: {
        title: string;
        date: string;
        description?: string;
        tags?: string[];
      };
    }>;
  };
}

const BlogListTemplate: React.FC<PageProps<BlogListData, BlogListContext>> = ({
  data,
  pageContext,
}) => {
  const { language, postsPerPage = 6 } = pageContext;
  const posts = data.allMarkdownRemark.nodes;
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const allTags = useMemo(
    () =>
      Array.from(
        new Set(posts.flatMap((post) => post.frontmatter.tags || []).map((tag) => tag.toLowerCase()))
      ).sort(),
    [posts]
  );
  const filteredPosts = useMemo(() => {
    if (selectedTags.length === 0) {
      return posts;
    }

    return posts.filter((post) => {
      const tags = (post.frontmatter.tags || []).map((tag) => tag.toLowerCase());
      return selectedTags.every((selectedTag) => tags.includes(selectedTag));
    });
  }, [posts, selectedTags]);
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
    setCurrentPage(1);
  };

  return (
    <>
      <Header />
      <main className="section section-padding">
        <div className="container">
          <h1 className="title is-outfit">{language === "es" ? "Blog" : "Blog"}</h1>
          <p className="mb-6">
            {language === "es"
              ? "Articulos sobre software, IA y estrategia digital."
              : "Articles about software, AI and digital strategy."}
          </p>

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
              {language === "es" ? "Limpiar filtros" : "Clear filters"}
            </button>
          </div>

          <div className="columns is-multiline">
            {paginatedPosts.map((post) => (
              <article key={post.id} className="column is-12">
                <div className="box">
                  <p className="is-size-7 has-text-grey mb-2">{post.frontmatter.date}</p>
                  <h2 className="title is-4 mb-3">
                    <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
                  </h2>
                  <p className="mb-4">{post.frontmatter.description || post.excerpt}</p>
                  <p className="is-size-7 mb-3">
                    {(post.frontmatter.tags || []).map((tag) => (
                      <span key={tag} className="blog-tag-chip blog-tag-chip--readonly mr-2">
                        #{tag}
                      </span>
                    ))}
                  </p>
                  <Link to={post.fields.slug}>
                    {language === "es" ? "Leer articulo" : "Read article"}
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <nav className="pagination is-centered mt-6" role="navigation" aria-label="pagination">
            <ul className="pagination-list">
              {Array.from({ length: totalPages }).map((_, index) => {
                const page = index + 1;
                return (
                  <li key={page}>
                    <button
                      className={`pagination-link ${currentPage === page ? "is-current" : ""}`}
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </main>
      <Footer />
    </>
  );
};

export const query = graphql`
  query BlogListPage($language: String!) {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: {
        frontmatter: { draft: { ne: true }, lang: { eq: $language }, date: { ne: null }, title: { ne: null } }
      }
    ) {
      nodes {
        id
        excerpt(pruneLength: 180)
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "YYYY-MM-DD")
          description
          tags
        }
      }
    }
  }
`;

export default BlogListTemplate;

export const Head: HeadFC<BlogListData, BlogListContext> = ({ pageContext }) => {
  const lang = pageContext.language || "es";
  const title = lang === "es" ? "Blog de Falcode" : "Falcode Blog";
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
