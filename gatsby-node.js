const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const languages = ["en", "es"];

  languages.forEach((lang) => {
    createPage({
      path: lang === "en" ? "/" : `/${lang}`,
      component: path.resolve("./src/pages/index.tsx"),
      context: {
        language: lang,
      },
    });
  });
};
