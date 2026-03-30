import React from "react";
import { changeLocale, useIntl } from "gatsby-plugin-intl";

const LOCALE_PREFIX_REGEX = /^\/(?:en|es)(?=\/|$)/;

const stripAllLocalePrefixes = (pathname: string): string => {
  let sanitizedPath = pathname;

  while (LOCALE_PREFIX_REGEX.test(sanitizedPath)) {
    sanitizedPath = sanitizedPath.replace(LOCALE_PREFIX_REGEX, "");
  }

  if (!sanitizedPath) {
    return "/";
  }

  return sanitizedPath.startsWith("/") ? sanitizedPath : `/${sanitizedPath}`;
};

const LanguageSelector: React.FC = () => {
  const intl = useIntl();
  const currentLocale = intl.locale;

  const otherLocale = currentLocale === "en" ? "es" : "en";

  const handleChangeLocale = () => {
    if (typeof window === "undefined") {
      return;
    }

    const targetPath = stripAllLocalePrefixes(window.location.pathname);
    changeLocale(otherLocale, targetPath);
  };

  return (
    <div>
      <button
        onClick={handleChangeLocale}
        style={{
          background: "transparent",
          border: "none",
          color: "#e64863",
          cursor: "pointer",
          fontSize: "20px",
          padding: "0.5rem 0.75rem",
        }}
      >
        {otherLocale === "en" ? "🇺🇸 English" : "🇪🇸 Español"}
      </button>
    </div>
  );
};

export default LanguageSelector;
