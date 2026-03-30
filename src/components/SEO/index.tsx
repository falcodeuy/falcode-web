import React from "react";
import { useStaticQuery, graphql } from "gatsby";

interface SEOProps {
  title?: string;
  description?: string;
  pathname?: string;
  image?: string;
  lang?: string;
  keywords?: string[];
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  structuredData?: Record<string, unknown>;
  children?: React.ReactNode;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  pathname,
  image,
  lang = "es",
  keywords: keywordsProp,
  type = "website",
  publishedTime,
  modifiedTime,
  structuredData,
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
          companyName
          location
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
    companyName,
    location,
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
      <meta
        name="robots"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <link rel="canonical" href={seo.url} />
      <link rel="alternate" type="application/rss+xml" title="Falcode RSS" href={`${siteUrl}/rss.xml`} />
      <link rel="alternate" type="text/plain" title="Falcode llms" href={`${siteUrl}/llms.txt`} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:site_name" content={defaultTitle} />
      <meta property="og:locale" content={lang === "es" ? "es_ES" : "en_US"} />
      {publishedTime ? <meta property="article:published_time" content={publishedTime} /> : null}
      {modifiedTime ? <meta property="article:modified_time" content={modifiedTime} /> : null}

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
          "@type": "LocalBusiness",
          name: companyName || "Falcode",
          url: siteUrl,
          logo: `${siteUrl}/icons/icon-512x512.png`,
          description: defaultDescription,
          areaServed: location || "Montevideo, Uruguay",
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
          name: companyName || "Falcode",
          url: siteUrl,
          potentialAction: {
            "@type": "SearchAction",
            target: `${siteUrl}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string",
          },
        })}
      </script>

      {structuredData ? (
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      ) : null}

      {children}
    </>
  );
};

export default SEO;
