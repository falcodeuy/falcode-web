import * as React from "react";
import "../styles/main.scss";
import type { HeadFC, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const headingAccentStyles = {
  color: "#663399",
};
const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
};
const doclistStyles = {
  paddingLeft: 0,
};
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
};

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
};

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  display: `inline-block`,
  marginBottom: 24,
  marginRight: 12,
};

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
};

const docLinks = [
  {
    text: "TypeScript Documentation",
    url: "https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/",
    color: "#8954A8",
  },
  {
    text: "GraphQL Typegen Documentation",
    url: "https://www.gatsbyjs.com/docs/how-to/local-development/graphql-typegen/",
    color: "#8954A8",
  },
];

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative" as "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
};

const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/getting-started/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
];

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <section
        className="is-flex is-align-items-center is-justify-content-center p-4"
        style={{ height: "760px" }}
      >
        <div
          className="columns is-mobile is-multiline is-0 has-background-dark m-0 card-work-with-us"
          style={{ borderRadius: "8px" }}
        >
          <div className="column is-12-mobile is-12-tablet is-6-desktop p-0 is-relative">
            <StaticImage
              src="../images/intersect.svg"
              alt="Descripción de la imagen"
            />
            <StaticImage
              src="../images/developer-boy.svg"
              alt="Descripción de la imagen"
              className="developer-boy-style"
            />
          </div>
          <div className="column is-12-mobile is-12-tablet is-6-desktop p-4">
            {/* <div className="p-4 has-background-dark"> */}
            <div className="columns is-mobile mb-4">
              <div className="column is-8-mobile is-12-tablet is-8-desktop pb-0">
                <h1 className="title is-outfit is-4 is-size-3-tablet is-size-2-desktop has-text-primary">
                  We are dev first, we care about you.
                </h1>
              </div>
            </div>

            <div className="columns is-mobile">
              <div className="column is-12-mobile is-11-tablet is-9-desktop pb-0">
                <p className="has-text-white is-size-4-desktop">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat.
                </p>
              </div>
            </div>

            <div className="container-button-work-with-us">
              <button className="button is-primary custom-btn">
                Trabaja con nosotros
              </button>
            </div>
          </div>
        </div>
        {/* </div> */}

        {/* <div className="card" style={{ borderRadius: "8px" }}>
          <div className="card-image">
            
            <div className="has-background-dark">
              <StaticImage
                src="../images/intersect.svg"
                alt="Descripción de la imagen"
              />
            </div>
          </div>
          <div className="card-content p-4 has-background-dark">
            <div className="columns is-mobile mb-4">
              <div className="column is-8-mobile pb-0">
                <h1 className="title is-outfit is-4 has-text-primary">
                  We are dev first, we care about you.
                </h1>
              </div>
            </div>

            <p className="has-text-white">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.
            </p>

            <div className="is-flex is-flex is-align-items-center is-justify-content-center my-5">
              <button className="button is-primary custom-btn">
                Trabaja con nosotros
              </button>
            </div>
          </div>
        </div> */}
      </section>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
