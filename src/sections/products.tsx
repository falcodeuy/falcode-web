import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { useIntl } from "gatsby-plugin-intl";
import React from "react";

const Products: React.FC = () => {
  const intl = useIntl();
  return (
    <section className='has-background-dark'>
      <section className='curved'></section>
      <div className='section-padding'>
        <h1 className='title is-outfit is-4 has-text-light title-margin-bottom'>
          {intl.formatMessage({ id: "successStories" })}
        </h1>
        <div className='columns is-mobile is-multiline columns-margin columns-gap'>
          <div className='column is-12-mobile is-12-tablet is-12-desktop is-5-widescreen is-5-fullhd'>
            <div className='has-background-light container-product'>
              <div className='columns is-mobile is-multiline'>
                <div className='column is-8-mobile is-6-tablet is-8-widescreen is-8-fullhd py-0'>
                  <div className='container-content-padding pr-0'>
                    <div className='columns is-mobile '>
                      <div className='column is-12-mobile is-7-tablet is-10-widescreen is-9-fullhd px-3 pb-0'>
                        <h1 className='title is-outfit has-text-primary title-cards-size'>
                          {intl.formatMessage({ id: "zalonTitle" })}
                        </h1>
                      </div>
                    </div>

                    <div className='columns is-mobile mt-3'>
                      <div className='column is-12-mobile is-12-tablet is-12-desktop px-3 pt-0'>
                        <p className='content-card-size'>
                          {intl.formatMessage({ id: "zalonDescription" })}
                        </p>
                      </div>
                    </div>
                    <Link to=''>
                      <span className='icon-text mt-3'>
                        <span className='title is-outfit is-6 has-text-primary span-see-project'>
                          {intl.formatMessage({ id: "seeProject" })}
                        </span>
                        <span className='icon has-text-primary is-marginless'>
                          <i className='fas fa-chevron-right fa-sm arrow-icon-margin-right'></i>
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>

                <div className='column is-4-mobile is-6-tablet is-4-widescreen is-4-fullhd has-text-centered is-relative'>
                  <StaticImage
                    src='../images/zalon-cellphone.png'
                    alt='icon'
                    className='image-1-transform'
                  />
                </div>
              </div>
            </div>
          </div>

          <div className='column is-12-mobile is-12-tablet is-12-desktop is-7-widescreen is-7-fullhd'>
            <div className='has-background-light container-product'>
              <div className='columns is-mobile is-multiline'>
                <div className='column is-12-mobile is-12-tablet is-7-widescreen is-7-fullhd py-0'>
                  <div className='container-content-padding pr-0'>
                    <div className='columns is-mobile '>
                      <div className='column is-12-mobile is-12-tablet is-12-widescreen is-12-fullhd px-3 pb-0'>
                        <h1 className='title is-outfit has-text-primary title-cards-size'>
                          {intl.formatMessage({ id: "famileTitle" })}
                        </h1>
                      </div>
                    </div>

                    <div className='columns is-mobile mt-3'>
                      <div className='column is-12-mobile is-10-tablet is-12-widescreen is-12-fullhd px-3 pt-0'>
                        <p className='content-card-size'>
                          {intl.formatMessage({ id: "famileDescription" })}
                        </p>
                      </div>
                    </div>
                    <Link to=''>
                      <span className='icon-text mt-3'>
                        <span className='title is-outfit is-6 has-text-primary span-see-project'>
                          {intl.formatMessage({ id: "seeProject" })}
                        </span>
                        <span className='icon has-text-primary is-marginless'>
                          <i className='fas fa-chevron-right fa-sm arrow-icon-margin-right'></i>
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>

                <div className='column is-12-mobile is-12-tablet is-5-widescreen is-5-fullhd has-text-centered p-0 is-relative'>
                  <StaticImage
                    src='../images/laptop-famile.png'
                    alt='icon'
                    className='image-2-transform'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='columns is-mobile is-multiline columns-margin columns-gap reverse-columns'>
          <div className='column is-12-mobile is-12-tablet is-12-desktop is-7-widescreen is-7-fullhd'>
            <div className='has-background-light container-product'>
              <div className='columns is-mobile is-multiline reverse-columns'>
                <div className='column is-12-mobile is-12-tablet is-5-widescreen is-4-fullhd has-text-centered p-0 is-relative'>
                  <StaticImage
                    src='../images/monitor-mac.svg'
                    alt='icon'
                    className='image-3-transform'
                  />
                </div>
                <div className='column is-12-mobile is-12-tablet is-7-widescreen is-8-fullhd py-0'>
                  <div className='container-content-padding'>
                    <div className='columns is-mobile '>
                      <div className='column is-12-mobile is-12-tablet is-12-widescreen is-12-fullhd px-3 pb-0'>
                        <h1 className='title is-outfit has-text-primary title-cards-size'>
                          {intl.formatMessage({ id: "familebackofficeTitle" })}
                        </h1>
                      </div>
                    </div>

                    <div className='columns is-mobile mt-3'>
                      <div className='column is-12-mobile is-10-tablet is-12-widescreen is-12-fullhd px-3 pt-0'>
                        <p className='content-card-size'>
                          {intl.formatMessage({
                            id: "famileBackofficeDescription",
                          })}
                        </p>
                      </div>
                    </div>
                    <Link to=''>
                      <span className='icon-text mt-3'>
                        <span className='title is-outfit is-6 has-text-primary span-see-project'>
                          {intl.formatMessage({ id: "seeProject" })}
                        </span>
                        <span className='icon has-text-primary is-marginless'>
                          <i className='fas fa-chevron-right fa-sm arrow-icon-margin-right'></i>
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='column is-12-mobile is-12-tablet is-12-desktop is-5-widescreen is-5-fullhd'>
            <div className='has-background-light container-product'>
              <div className='columns is-mobile is-multiline'>
                <div className='column is-4-mobile is-4-tablet is-4-widescreen is-4-fullhd has-text-centered is-relative'>
                  <StaticImage
                    src='../images/rocket-mobile.svg'
                    alt='icon'
                    className='image-4-transform'
                  />
                </div>

                <div className='column is-8-mobile is-8-tablet is-8-widescreen is-8-fullhd py-0'>
                  <div className='container-content-padding pl-0'>
                    <div className='columns is-mobile '>
                      <div className='column is-12-mobile is-4-tablet is-10-widescreen is-8-fullhd px-3 pb-0'>
                        <h1 className='title is-outfit has-text-primary title-cards-size'>
                          {intl.formatMessage({ id: "zalonDesignTitle" })}
                        </h1>
                      </div>
                    </div>

                    <div className='columns is-mobile mt-3'>
                      <div className='column is-12-mobile is-8-tablet is-12-widescreen is-12-fullhd px-3 pt-0'>
                        <p className='content-card-size'>
                          {intl.formatMessage({
                            id: "zalonDesignDescription",
                          })}
                        </p>
                      </div>
                    </div>
                    <Link to=''>
                      <span className='icon-text mt-3'>
                        <span className='title is-outfit is-6 has-text-primary span-see-project'>
                          {intl.formatMessage({ id: "seeProject" })}
                        </span>
                        <span className='icon has-text-primary is-marginless'>
                          <i className='fas fa-chevron-right fa-sm arrow-icon-margin-right'></i>
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='has-background-primary container-summary'>
          <div className='columns is-mobile is-multiline columns-margin'>
            <div className='column is-12-mobile is-12-tablet is-7-desktop py-0'>
              <div className='container-content-padding'>
                <div className='columns is-mobile mt-3'>
                  <div className='column is-12-mobile is-12-tablet is-12-desktop px-3 pt-0'>
                    <p className='has-text-white'>
                      {intl.formatMessage({ id: "summaryText" })}
                    </p>
                  </div>
                </div>
                <div className='button-flexible button-contact-us-margin'>
                  <button className='button is-dark custom-btn '>
                    {intl.formatMessage({ id: "contactUs" })}
                  </button>
                </div>
              </div>
            </div>

            <div className='column is-12-mobile is-12-tablet is-5-desktop py-0'>
              <div className='container-falcon'>
                <StaticImage src='../images/falcon.svg' alt='icon' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className='triangle'></section>
    </section>
  );
};

export default Products;
