import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useIntl } from "gatsby-plugin-intl";
import { handleScrollClick } from "../utils/scroll";
import ProductCard from "../components/product-card";

const Products: React.FC = () => {
  const intl = useIntl();

  return (
    <section id="products" className="has-background-dark">
      <section className="curved"></section>
      <div className="section-padding">
        <h1 className="title is-outfit is-size-1-desktop has-text-light mb-5">
          {intl.formatMessage({ id: "successStories" })}
        </h1>

        <div className="columns is-mobile is-multiline columns-margin columns-gap">
          <ProductCard
            titleId="zalonTitle"
            descriptionId="zalonDescription"
            imagePosition="right"
            size="small"
            imageClassName="image-1-transform"
            image={
              <StaticImage
                src="../images/zalon-cellphone.png"
                alt="Zalon app"
              />
            }
          />

          <ProductCard
            titleId="famileTitle"
            descriptionId="famileDescription"
            imagePosition="right"
            size="large"
            imageClassName="image-2-transform"
            image={
              <StaticImage
                src="../images/laptop-famile.png"
                alt="Famile platform"
              />
            }
          />
        </div>

        <div className="columns is-mobile is-multiline columns-margin columns-gap reverse-columns">
          <ProductCard
            titleId="manungoTitle"
            descriptionId="manungoDescription"
            imagePosition="left"
            size="large"
            reversed
            imageClassName="image-3-transform"
            image={
              <StaticImage
                src="../images/monitor-mac.svg"
                alt="Famile backoffice"
              />
            }
          />

          <ProductCard
            titleId="zalonDesignTitle"
            descriptionId="zalonDesignDescription"
            imagePosition="left"
            size="small"
            imageClassName="image-4-transform"
            image={
              <StaticImage
                src="../images/rocket-mobile.svg"
                alt="Zalon design"
              />
            }
          />
        </div>

        <div className="has-background-primary container-summary">
          <div className="columns is-mobile is-multiline columns-margin">
            <div className="column is-12-mobile is-12-tablet is-7-desktop py-0">
              <div className="container-content-padding">
                <p className="has-text-white px-3">
                  {intl.formatMessage({ id: "summaryText" })}
                </p>
                <div className="button-flexible mt-5">
                  <a
                    href="#contact-us"
                    className="button is-dark custom-btn"
                    onClick={(e) => handleScrollClick(e, "contact-us")}
                  >
                    {intl.formatMessage({ id: "contactUs" })}
                  </a>
                </div>
              </div>
            </div>

            <div className="column is-12-mobile is-12-tablet is-5-desktop py-0">
              <div className="container-falcon">
                <StaticImage src="../images/falcon.svg" alt="Falcon mascot" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="triangle"></section>
    </section>
  );
};

export default Products;
