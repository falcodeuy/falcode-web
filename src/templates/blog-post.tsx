import React from "react";
import { graphql, Link, type HeadFC, type PageProps } from "gatsby";
import { GatsbyImage, getImage, type IGatsbyImageData } from "gatsby-plugin-image";
import { useIntl } from "gatsby-plugin-intl";
import BlogPostView, {
  normalizeBlogAuthors,
  normalizeBlogReferences,
  type BlogPostRelatedPost,
} from "../components/BlogPostView";
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
      postGroup: string;
    };
    frontmatter: {
      title: string;
      description?: string;
      date: string;
      updatedAt?: string;
      tags?: string[];
      relatedPosts?: string[];
      author?: unknown;
      authors?: unknown;
      references?: unknown;
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
  allBlogPosts: {
    nodes: Array<{
      id: string;
      fields: {
        slug: string;
        lang: string;
      };
      frontmatter: {
        title: string;
        description?: string;
        date?: string;
      };
    }>;
  };
}

const BlogPostTemplate: React.FC<PageProps<BlogPostData>> = ({ data }) => {
  const intl = useIntl();
  const post = data.markdownRemark;
  const languageNames: Record<string, string> = {
    es: intl.formatMessage({ id: "blog.post.language.es", defaultMessage: "Spanish" }),
    en: intl.formatMessage({ id: "blog.post.language.en", defaultMessage: "English" }),
  };
  const currentLanguageName = languageNames[post.fields.lang] || post.fields.lang.toUpperCase();
  const translations = data.allMarkdownRemark.nodes.filter((node) => node.id !== post.id);
  const primaryTranslation = translations[0];
  const translationCtaText = intl.formatMessage({
    id: `blog.post.translationCta.${post.fields.lang}`,
    defaultMessage: "Read translated version",
  });
  const backToBlogHref = `/${post.fields.lang}/blog/`;
  const featuredImage = getImage(post.frontmatter.featuredImage || null);
  const authorItems = normalizeBlogAuthors(post.frontmatter.author ?? post.frontmatter.authors);
  const referenceItems = normalizeBlogReferences(post.frontmatter.references);
  const manualRelatedPostSlugs = (post.frontmatter.relatedPosts ?? [])
    .map((value) => value.trim())
    .filter(Boolean);
  const postsBySlug = new Map(
    data.allBlogPosts.nodes.map((node) => [node.fields.slug, node]),
  );
  const manualRelatedPosts: BlogPostRelatedPost[] = manualRelatedPostSlugs
    .map((slug) => postsBySlug.get(slug))
    .filter((node): node is NonNullable<typeof node> => Boolean(node))
    .filter((node) => node.id !== post.id && node.fields.lang === post.fields.lang)
    .slice(0, 3)
    .map((node) => ({
      slug: node.fields.slug,
      title: node.frontmatter.title,
      description: node.frontmatter.description,
      publishedDate: node.frontmatter.date,
    }));
  const relatedPosts = manualRelatedPosts;

  return (
    <>
      <Header />
      <BlogPostView
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        tags={post.frontmatter.tags}
        authors={authorItems}
        references={referenceItems}
        relatedPosts={relatedPosts}
        articleLang={post.fields.lang}
        publishedDate={post.frontmatter.date}
        updatedDate={post.frontmatter.updatedAt}
        featuredImageSlot={
          featuredImage ? <GatsbyImage image={featuredImage} alt={post.frontmatter.title} /> : null
        }
        body={<div dangerouslySetInnerHTML={{ __html: post.html }} />}
        labels={{
          backToBlog: intl.formatMessage({ id: "blog.post.backToBlog", defaultMessage: "Back to blog" }),
          originalLanguage: intl.formatMessage({
            id: "blog.post.originalLanguage",
            defaultMessage: "Original language",
          }),
          published: intl.formatMessage({ id: "blog.post.published", defaultMessage: "Published" }),
          updated: intl.formatMessage({ id: "blog.post.updated", defaultMessage: "Updated" }),
          authors: intl.formatMessage({ id: "blog.post.authors", defaultMessage: "Authors" }),
          references: intl.formatMessage({
            id: "blog.post.references",
            defaultMessage: "Credits & sources",
          }),
          relatedPosts: intl.formatMessage({
            id: "blog.post.relatedPosts",
            defaultMessage: "Related posts",
          }),
          readArticle: intl.formatMessage({
            id: "blog.post.readArticle",
            defaultMessage: "Read article",
          }),
          linkedInProfile: intl.formatMessage({
            id: "blog.post.linkedInProfile",
            defaultMessage: "LinkedIn profile",
          }),
          githubProfile: intl.formatMessage({
            id: "blog.post.githubProfile",
            defaultMessage: "GitHub profile",
          }),
          closingLine: intl.formatMessage({
            id: "blog.post.closingLine",
            defaultMessage: "Written with love by humans with mechanical keyboards at Falcode",
          }),
        }}
        languageChipInner={
          <>
            {currentLanguageName}
            {primaryTranslation ? " - " : null}
            {primaryTranslation ? (
              <Link className="has-text-link blog-language-link" to={primaryTranslation.fields.slug}>
                {translationCtaText}
              </Link>
            ) : null}
          </>
        }
        backToBlogHref={backToBlogHref}
      />
      <Footer />
    </>
  );
};

export const query = graphql`
  query BlogPostById($id: String!, $postGroup: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 180)
      fields {
        slug
        lang
        postGroup
      }
      frontmatter {
        title
        description
        date(formatString: "YYYY-MM-DD")
        updatedAt(formatString: "YYYY-MM-DD")
        tags
        relatedPosts
        author
        authors
        references
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
        frontmatter: { date: { ne: null }, title: { ne: null } }
        fields: { postGroup: { eq: $postGroup } }
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
    allBlogPosts: allMarkdownRemark(filter: { frontmatter: { date: { ne: null }, title: { ne: null } } }) {
      nodes {
        id
        fields {
          slug
          lang
        }
        frontmatter {
          title
          description
          date(formatString: "YYYY-MM-DD")
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
  );
};
