import React from "react";
import { Link, useIntl } from "gatsby-plugin-intl";

const LanguageSelector: React.FC = () => {
  const intl = useIntl();
  const currentLocale = intl.locale;

  const otherLocale = currentLocale === "en" ? "es" : "en";

  const redirectTo = () => {
    window.location.href = `/${otherLocale}`;
  };

  return (
    <div>
      <button
        onClick={redirectTo}
        style={{
          background: "transparent",
          border: "none",
          color: "#e64863",
          cursor: "pointer",
          fontSize: "20px",
          padding: "0.5rem 0.75rem",
        }}
      >
        {otherLocale === "en" ? "English" : "Español"}
      </button>
    </div>
  );
};

export default LanguageSelector;
