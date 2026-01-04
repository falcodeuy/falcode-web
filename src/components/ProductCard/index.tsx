import React from "react";
import { useIntl } from "gatsby-plugin-intl";
import SeeProjectLink from "./SeeProjectLink";
import { ProductCardProps } from "./types";

const ProductCard: React.FC<ProductCardProps> = ({
  titleId,
  descriptionId,
  image,
  imageClassName,
  imagePosition = "right",
  size = "small",
  reversed = false,
  link,
}) => {
  const intl = useIntl();

  const columnSize = size === "small" 
    ? "is-12-mobile is-12-tablet is-12-desktop is-5-widescreen is-5-fullhd"
    : "is-12-mobile is-12-tablet is-12-desktop is-7-widescreen is-7-fullhd";

  const contentColSize = imagePosition === "right" 
    ? (size === "small" 
        ? "is-8-mobile is-6-tablet is-8-widescreen is-8-fullhd" 
        : "is-12-mobile is-12-tablet is-7-widescreen is-7-fullhd")
    : (size === "small"
        ? "is-8-mobile is-8-tablet is-8-widescreen is-8-fullhd"
        : "is-12-mobile is-12-tablet is-7-widescreen is-8-fullhd");

  const imageColSize = imagePosition === "right"
    ? (size === "small"
        ? "is-4-mobile is-6-tablet is-4-widescreen is-4-fullhd"
        : "is-12-mobile is-12-tablet is-5-widescreen is-5-fullhd")
    : (size === "small"
        ? "is-4-mobile is-4-tablet is-4-widescreen is-4-fullhd"
        : "is-12-mobile is-12-tablet is-5-widescreen is-4-fullhd");

  const contentPadding = imagePosition === "right" ? "pr-0" : (size === "large" ? "" : "pl-0");

  const ContentSection = (
    <div className={`column ${contentColSize} py-0`}>
      <div className={`container-content-padding ${contentPadding}`}>
        <h3 className="title is-outfit has-text-primary title-cards-size px-3 mb-4">
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
    <div className={`column ${imageColSize} has-text-centered is-relative ${imagePosition === "right" ? "" : "p-0"} ${imageClassName}`}>
      {image}
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
