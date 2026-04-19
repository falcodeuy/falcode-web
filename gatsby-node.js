const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

const POSTS_PER_PAGE = 6;

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type MarkdownRemarkFields {
      slug: String
      lang: String
      postGroup: String
    }

    type MarkdownRemark implements Node {
      fields: MarkdownRemarkFields
      frontmatter: MarkdownRemarkFrontmatter
    }

    type MarkdownRemarkFrontmatter @dontInfer {
      title: String
      description: String
      date: Date @dateformat
      updatedAt: Date @dateformat
      lang: String
      tags: [String]
      authors: JSON
      references: JSON
      featuredImage: File @fileByRelativePath
    }
  `);
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type !== "MarkdownRemark") {
    return;
  }

  const relativePath = createFilePath({ node, getNode, basePath: "content/blog" }).replace(/^\/|\/$/g, "");
  const [postGroup, languageFromFile] = relativePath.split("/");
  const language = node.frontmatter?.lang || languageFromFile || "es";

  createNodeField({
    node,
    name: "slug",
    value: `/${language}/blog/${postGroup}/`,
  });

  createNodeField({
    node,
    name: "lang",
    value: language,
  });

  createNodeField({
    node,
    name: "postGroup",
    value: postGroup,
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
        filter: { frontmatter: { date: { ne: null }, title: { ne: null } } }
      ) {
        nodes {
          id
          fields {
            slug
            lang
            postGroup
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

  });

  languages.forEach((lang) => {
    createPage({
      path: `/${lang}/blog/`,
      component: blogListTemplate,
      context: {
        language: lang,
        postsPerPage: POSTS_PER_PAGE,
      },
    });
  });

  createPage({
    path: `/blog/`,
    component: blogListTemplate,
    context: {
      language: "es",
      postsPerPage: POSTS_PER_PAGE,
    },
  });

  posts.forEach((post) => {
    createPage({
      path: post.fields.slug,
      component: blogPostTemplate,
      context: {
        id: post.id,
        language: post.fields.lang,
        postGroup: post.fields.postGroup,
        slugGroupPattern: `/\\/blog\\/${post.fields.postGroup}\\/$/`,
      },
    });
  });
};
