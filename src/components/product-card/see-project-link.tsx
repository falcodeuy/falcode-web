import React from "react";
import { Link } from "gatsby";
import { useIntl } from "gatsby-plugin-intl";

const SeeProjectLink: React.FC = () => {
  const intl = useIntl();

  return (
    <Link to="" className="px-3">
      <span className="icon-text mt-3">
        <span className="title is-outfit is-6 has-text-primary span-see-project">
          {intl.formatMessage({ id: "seeProject" })}
        </span>
        <span className="icon has-text-primary is-marginless">
          <i className="fas fa-chevron-right fa-sm arrow-icon-margin-right"></i>
        </span>
      </span>
    </Link>
  );
};

export default SeeProjectLink;
