import React from "react";
import { graphql, Link, type HeadFC, type PageProps } from "gatsby";
import { GatsbyImage, getImage, type IGatsbyImageData } from "gatsby-plugin-image";
import "../styles/main.scss";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SEO from "../components/SEO";

interface BlogPostData {
  markdownRemark: {
    id: string;
    html: string;
    excerpt: string;
    fields: {
      slug: string;
      lang: string;
      translationKey: string;
    };
    frontmatter: {
      title: string;
      description?: string;
      date: string;
      updatedAt?: string;
      tags?: string[];
      featuredImage?: {
        childImageSharp?: {
          gatsbyImageData: IGatsbyImageData;
        };
      };
    };
  };
  allMarkdownRemark: {
    nodes: Array<{
      id: string;
      fields: {
        slug: string;
        lang: string;
      };
      frontmatter: {
        title: string;
      };
    }>;
  };
}

const BlogPostTemplate: React.FC<PageProps<BlogPostData>> = ({ data }) => {
  const post = data.markdownRemark;
  const languageNames: Record<string, string> = {
    es: "Español",
    en: "English",
  };
  const currentLanguageName = languageNames[post.fields.lang] || post.fields.lang.toUpperCase();
  const translations = data.allMarkdownRemark.nodes.filter((node) => node.id !== post.id);
  const primaryTranslation = translations[0];
  const translationCtaText =
    post.fields.lang === "es" ? "Read English version" : "Leer version en espanol";
  const backToBlogHref = `/${post.fields.lang}/blog/`;
  const featuredImage = getImage(post.frontmatter.featuredImage || null);

  return (
    <>
      <Header />
      <main className="section section-padding blog-page">
        <div className="container content">
          <Link className="blog-back-link mb-4 is-inline-flex" to={backToBlogHref}>
            <span className="icon is-small">
              <i className="fas fa-arrow-left" aria-hidden="true" />
            </span>
            <span>{post.fields.lang === "es" ? "Volver al blog" : "Back to blog"}</span>
          </Link>
          <h1 className="title is-outfit">{post.frontmatter.title}</h1>
          {post.frontmatter.description ? (
            <p className="is-size-5 has-text-grey mb-4">{post.frontmatter.description}</p>
          ) : null}
          {featuredImage ? (
            <div className="mb-5">
              <GatsbyImage image={featuredImage} alt={post.frontmatter.title} />
            </div>
          ) : null}
          <div className="is-flex is-align-items-center is-flex-wrap-wrap mb-5" style={{ gap: "0.75rem" }}>
            <span className="blog-tag-chip blog-tag-chip--readonly">
              <span className="icon is-small">
                <i className="fas fa-language" aria-hidden="true" />
              </span>
              <span>
                {post.fields.lang === "es" ? "Idioma original" : "Original language"}:{" "}
                {currentLanguageName}
                {primaryTranslation
                  ? " - "
                  : null}
                {primaryTranslation ? (
                  <Link
                    className="has-text-link blog-language-link"
                    to={`/${primaryTranslation.fields.lang}${primaryTranslation.fields.slug}`}
                  >
                    {translationCtaText}
                  </Link>
                ) : null}
              </span>
            </span>
            <span className="blog-tag-chip blog-tag-chip--readonly">
              <span className="icon is-small">
                <i className="fas fa-calendar-alt" aria-hidden="true" />
              </span>
              <span>
                {post.fields.lang === "es" ? "Publicado" : "Published"}: {post.frontmatter.date}
              </span>
            </span>
            <span className="blog-tag-chip blog-tag-chip--readonly">
              <span className="icon is-small">
                <i className="fas fa-clock" aria-hidden="true" />
              </span>
              <span>
                {post.fields.lang === "es" ? "Actualizado" : "Updated"}:{" "}
                {post.frontmatter.updatedAt || post.frontmatter.date}
              </span>
            </span>
          </div>
          <div className="mb-5 is-flex is-flex-wrap-wrap is-align-items-center" style={{ gap: "0.5rem" }}>
            {(post.frontmatter.tags || []).map((tag) => (
              <span key={tag} className="blog-tag-chip blog-tag-chip--readonly">
                #{tag}
              </span>
            ))}
          </div>
          <article lang={post.fields.lang} translate="yes">
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
};

export const query = graphql`
  query BlogPostById($id: String!, $translationKey: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 180)
      fields {
        slug
        lang
        translationKey
      }
      frontmatter {
        title
        description
        date(formatString: "YYYY-MM-DD")
        updatedAt(formatString: "YYYY-MM-DD")
        tags
        featuredImage {
          childImageSharp {
            gatsbyImageData(
              width: 1200
              quality: 85
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
    allMarkdownRemark(
      filter: {
        frontmatter: { draft: { ne: true }, date: { ne: null }, title: { ne: null } }
        fields: { translationKey: { eq: $translationKey } }
      }
      sort: { fields: { lang: ASC } }
    ) {
      nodes {
        id
        fields {
          slug
          lang
        }
        frontmatter {
          title
        }
      }
    }
  }
`;

export default BlogPostTemplate;

export const Head: HeadFC<BlogPostData> = ({ data }) => {
  const post = data.markdownRemark;
  const lang = post.fields.lang || "es";
  const description = post.frontmatter.description || post.excerpt;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.frontmatter.title,
    description,
    datePublished: post.frontmatter.date,
    dateModified: post.frontmatter.updatedAt || post.frontmatter.date,
    inLanguage: lang,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://falcode.dev${post.fields.slug}`,
    },
    articleSection: post.frontmatter.tags?.[0],
    keywords: post.frontmatter.tags,
    author: {
      "@type": "Organization",
      name: "Falcode",
    },
    publisher: {
      "@type": "Organization",
      name: "Falcode",
      logo: {
        "@type": "ImageObject",
        url: "https://falcode.dev/icons/icon-512x512.png",
      },
    },
  };

  return (
    <SEO
      title={post.frontmatter.title}
      description={description}
      pathname={post.fields.slug}
      lang={lang}
      type="article"
      publishedTime={post.frontmatter.date}
      modifiedTime={post.frontmatter.updatedAt || post.frontmatter.date}
      keywords={post.frontmatter.tags}
      structuredData={structuredData}
    />
