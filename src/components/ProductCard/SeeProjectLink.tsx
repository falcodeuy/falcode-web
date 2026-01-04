import React from "react";
import { useIntl } from "gatsby-plugin-intl";

interface SeeProjectLinkProps {
  link?: string;
}

const SeeProjectLink: React.FC<SeeProjectLinkProps> = ({ link }) => {
  const intl = useIntl();

  if (!link) return null;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="px-3">
      <span className="icon-text mt-3">
        <span className="title is-outfit is-6 has-text-primary span-see-project">
          {intl.formatMessage({ id: "seeProject" })}
        </span>
        <span className="icon has-text-primary is-marginless">
          <i className="fas fa-chevron-right fa-sm arrow-icon-margin-right"></i>
        </span>
      </span>
    </a>
  );
};

export default SeeProjectLink;
