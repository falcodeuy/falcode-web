import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useIntl } from "gatsby-plugin-intl";

export default function WorkWithUs() {
  const intl = useIntl();

  return (
    <div className="section-padding">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        height="696"
        viewBox="0 0 680 696"
        className="card-work-with-us --mobile"
        fill="none"
      >
        <rect
          width="680"
          height="648"
          className="card__background"
          rx="8"
          transform="matrix(1 0 0 -1 0 696)"
          fill="#151427"
        />
        <path
          d="M512.555 48H8C3.58172 48 0 51.5817 0 56V410H680C680 264.973 615.005 135.127 512.555 48Z"
          fill="#E8536D"
          className="card__highlight"
        />
        <foreignObject
          key="image"
          d="M49 0H483V410H49V0Z"
          width="434"
          height="410"
        >
          <StaticImage
            className="card__image"
            key="mobileImage"
            src="../images/work-with-us-picture.png"
            alt="Work with us"
          />
        </foreignObject>
        <foreignObject key="content" x="30" y="439" width="620" height="228">
          <div className="card_content">
            <h1 className="title is-outfit is-4 is-size-3-tablet is-size-2-desktop has-text-primary">
              {intl.formatMessage({ id: "work_with_us.title" })}
            </h1>
            <p className="has-text-white is-size-4-desktop">
              {intl.formatMessage({ id: "work_with_us.content" })}
            </p>
            <div className="container-button-work-with-us">
              <button className="button is-primary custom-btn">
                {intl.formatMessage({ id: "work_with_us.button" })}
              </button>
            </div>
          </div>
        </foreignObject>
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 1427 664"
        className="card-work-with-us --desktop"
        fill="none"
      >
        <rect
          className="card__background"
          width="1414"
          height="640"
          rx="8"
          transform="matrix(1 0 0 -1 13 664)"
          fill="#151427"
        />
        <path
          className="card__highlight"
          d="M328.555 24H17C12.5818 24 9 27.5817 9 32V656C9 660.419 12.5817 664 17 664H568.49C571.724 634.783 573.395 604.946 573.395 574.626C573.395 342.761 475.672 139.225 328.555 24Z"
          fill="#E8536D"
        />
        <foreignObject
          key="image"
          d="M0 0H658V664H0V0Z"
          width="658"
          height="664"
        >
          <StaticImage
            key="desktopImage"
            className="card__image"
            src="../images/work-with-us-picture.png"
            alt="Work with us"
          />
        </foreignObject>
        <foreignObject key="content" x="732" y="141" width="571" height="406">
          <div className="card_content">
            <h1 className="title is-outfit is-4 is-size-3-tablet is-size-2-desktop has-text-primary">
              {intl.formatMessage({ id: "work_with_us.title" })}
            </h1>
            <p className="has-text-white is-size-4-desktop">
              {intl.formatMessage({ id: "work_with_us.content" })}
            </p>
            <div className="container-button-work-with-us">
              <button className="button is-primary custom-btn">
                {intl.formatMessage({ id: "work_with_us.button" })}
              </button>
            </div>
          </div>
        </foreignObject>
      </svg>
    </div>
  );
}
