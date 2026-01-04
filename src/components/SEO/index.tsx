import React from "react";
import { useStaticQuery, graphql } from "gatsby";

interface SEOProps {
  title?: string;
  description?: string;
  pathname?: string;
  image?: string;
  lang?: string;
  keywords?: string[];
  children?: React.ReactNode;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  pathname,
  image,
  lang = "es",
  keywords: keywordsProp,
  children,
}) => {
  const { site } = useStaticQuery(graphql`
    query SEO {
      site {
        siteMetadata {
          title
          description
          siteUrl
          author
          image
          keywords
        }
      }
    }
  `);

  const {
    title: defaultTitle,
    description: defaultDescription,
    siteUrl,
    author,
    image: defaultImage,
    keywords,
  } = site.siteMetadata;

  const seo = {
    title: title ? `${title} | ${defaultTitle}` : defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ""}`,
    image: `${siteUrl}${image || defaultImage}`,
    keywords: (keywordsProp || keywords)?.join(", ") || "",
  };

  return (
    <>
      {/* Primary Meta Tags */}
      <html lang={lang} />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={seo.url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:site_name" content={defaultTitle} />
      <meta property="og:locale" content={lang === "es" ? "es_ES" : "en_US"} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={author} />

      {/* Hreflang for multilingual SEO */}
      <link rel="alternate" hrefLang="es" href={`${siteUrl}/es${pathname || ""}`} />
      <link rel="alternate" hrefLang="en" href={`${siteUrl}/en${pathname || ""}`} />
      <link rel="alternate" hrefLang="x-default" href={`${siteUrl}/es${pathname || ""}`} />

      {/* Structured Data - Organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Falcode",
          url: siteUrl,
          logo: `${siteUrl}/icons/icon-512x512.png`,
          description: defaultDescription,
          sameAs: [],
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer service",
            availableLanguage: ["Spanish", "English"],
          },
        })}
      </script>

      {/* Structured Data - WebSite with SearchAction */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Falcode",
          url: siteUrl,
          potentialAction: {
            "@type": "SearchAction",
            target: `${siteUrl}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string",
          },
        })}
      </script>

      {children}
    </>
  );
};

export default SEO;
