import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Falcode`,
    description: `Impulsa el crecimiento de tu negocio con soluciones tecnológicas a medida. Desarrollo web, apps móviles, IA y más.`,
    siteUrl: `https://falcode.dev`,
    author: `@falcode`,
    image: `/icons/icon-512x512.png`,
    keywords: [
      "desarrollo web",
      "aplicaciones móviles",
      "software a medida",
      "inteligencia artificial",
      "consultoría tecnológica",
      "AWS partners",
      "desarrollo de sistemas",
    ],
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  pathPrefix: "/",
  plugins: [
    "gatsby-plugin-image",
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          includePaths: ["./node_modules"],
        },
      },
    },
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: ["GA-TRACKING_ID"],
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              nodes {
                path
              }
            }
          }
        `,
        serialize: ({ path }: { path: string }) => ({
          url: path,
          changefreq: "weekly",
          priority: path === "/" || path === "/es/" || path === "/en/" ? 1.0 : 0.7,
        }),
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://falcode.dev",
        sitemap: "https://falcode.dev/sitemap-index.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`en`, `es`],
        defaultLanguage: `es`,
        redirect: true,
      },
    },
  ],
};

export default config;
