import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useIntl } from "gatsby-plugin-intl";
import ProductCard from "../components/ProductCard";

const Products: React.FC = () => {
  const intl = useIntl();

  return (
    <section id="products" className="has-background-dark">
      <section className="curved"></section>
      <div className="section-padding">
        <h2 className="title is-outfit is-size-1-desktop has-text-light mb-5">
          {intl.formatMessage({ id: "successStories" })}
        </h2>

        <div className="columns is-mobile is-multiline columns-margin columns-gap">
          <ProductCard
            titleId="zalonTitle"
            descriptionId="zalonDescription"
            link="https://agenda.zalon.app"
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
            link="https://famil-e.cl"
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
            link="https://manungo.cl"
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
            titleId="showappTitle"
            descriptionId="showappDescription"
            link="https://showapp.com.uy"
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
                  {intl.formatMessage({ id: "sellingText1" })}
                </p>
                <p className="has-text-white px-3 pt-4">
                  {intl.formatMessage({ id: "sellingText2" })}
                </p>
                <div className="columns is-vcentered mt-5 px-3">
                  <div className="column is-2 height-100">
                    <StaticImage
                      src="../images/aws-partner-badge.png"
                      alt="AWS Partner"
                      height={120}
                    />
                  </div>
                  <div className="column is-10">
                    <span className="has-text-white is-size-6 is-italic">
                      {intl.formatMessage({ id: "awsPartnerText" })}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="column is-12-mobile is-12-tablet is-5-desktop py-0">
              <div className="container-falcon">
                <StaticImage src="../images/falcon.svg" alt="Falkey" />
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
