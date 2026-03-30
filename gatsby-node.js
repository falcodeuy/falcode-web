const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

const POSTS_PER_PAGE = 6;

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type !== "MarkdownRemark") {
    return;
  }

  const baseSlug = createFilePath({ node, getNode, basePath: "content/blog" }).replace(
    /^\/|\/$/g,
    ""
  );
  const language = node.frontmatter?.lang || "es";
  const translationKey = node.frontmatter?.translationKey || baseSlug;

  createNodeField({
    node,
    name: "slug",
    value: `/${language}/blog/${baseSlug}/`,
  });

  createNodeField({
    node,
    name: "lang",
    value: language,
  });

  createNodeField({
    node,
    name: "translationKey",
    value: translationKey,
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const languages = ["en", "es"];

  const blogPostTemplate = path.resolve("./src/templates/blog-post.tsx");
  const blogListTemplate = path.resolve("./src/templates/blog-list.tsx");

  const result = await graphql(`
    query BlogPagesQuery {
      allMarkdownRemark(
        sort: { frontmatter: { date: DESC } }
        filter: { frontmatter: { draft: { ne: true }, date: { ne: null }, title: { ne: null } } }
      ) {
        nodes {
          id
          fields {
            slug
            lang
            translationKey
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const posts = result.data.allMarkdownRemark.nodes;

  languages.forEach((lang) => {
    createPage({
      path: lang === "en" ? "/" : `/${lang}`,
      component: path.resolve("./src/pages/index.tsx"),
      context: {
        language: lang,
      },
    });

    createPage({
      path: `/${lang}/blog/`,
      component: blogListTemplate,
      context: {
        language: lang,
        postsPerPage: POSTS_PER_PAGE,
      },
    });
  });

  posts.forEach((post) => {
    createPage({
      path: post.fields.slug,
      component: blogPostTemplate,
      context: {
        id: post.id,
        language: post.fields.lang,
        translationKey: post.fields.translationKey,
      },
    });
  });
};
