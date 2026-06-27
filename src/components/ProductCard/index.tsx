import React from "react";
import { useIntl } from "gatsby-plugin-intl";
import SeeProjectLink from "./SeeProjectLink";
import { ProductCardProps } from "./types";

const ProductCard: React.FC<ProductCardProps> = ({
  titleId,
  descriptionId,
  image,
  imagePosition = "right",
  size = "small",
  imageClassName,
  reversed = false,
  link,
}) => {
  const intl = useIntl();

  const columnSize =
    size === "small"
      ? "is-12-mobile is-12-tablet is-12-desktop is-5-widescreen is-5-fullhd"
      : "is-12-mobile is-12-tablet is-12-desktop is-7-widescreen is-7-fullhd";

  const contentColumnClasses =
    size === "large"
      ? "column py-0 is-size-6 is-12-mobile is-6-tablet"
      : "column py-0 is-size-6";

  const imageColumnClasses =
    size === "large"
      ? "column is-12-mobile is-6-tablet has-text-centered is-relative image-column"
      : "column is-12-mobile is-4-tablet has-text-centered is-relative image-column";

  const ContentSection = (
    <div className={contentColumnClasses}>
      <div className={`container-content-padding is-12-mobile is-8-tablet`}>
        <h3 className="title is-outfit has-text-primary px-3 mb-4 is-size-4">
          {intl.formatMessage({ id: titleId })}
        </h3>
        <p className="content-card-size px-3">
          {intl.formatMessage({ id: descriptionId })}
        </p>
        <SeeProjectLink link={link} />
      </div>
    </div>
  );

  const ImageSection = (
    <div className={imageColumnClasses}>
      <div
        className={`${size === "large" ? "computer-image-position" : "phone-image-position"}${imageClassName ? ` ${imageClassName}` : ""}`}
      >
        {image}
      </div>
    </div>
  );

  return (
    <div className={`column ${columnSize}`}>
      <div className="has-background-light container-product">
        <div className={`columns is-mobile is-multiline ${reversed ? "reverse-columns" : ""}`}>
          {imagePosition === "left" ? (
            <>
              {ImageSection}
              {ContentSection}
            </>
          ) : (
            <>
              {ContentSection}
              {ImageSection}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
