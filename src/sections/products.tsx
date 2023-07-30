import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const Products: React.FC = () => {
  return (
    <section className="has-background-dark">
      <div className="section-padding">
        <h1
          className="title is-outfit is-4 has-text-light"
          style={{ marginBottom: 32 }}
        >
          Casos de éxito
        </h1>
        <div className="columns is-mobile is-multiline columns-margin columns-gap">
          <div className="column is-12-mobile is-12-tablet is-4-desktop is-5-widescreen is-5-fullhd">
            <div
              className="has-background-light"
              style={{ borderRadius: 8, position: "relative" }}
            >
              <div className="columns is-mobile is-multiline">
                <div className="column is-8-mobile is-6-tablet is-8-widescreen is-7-fullhd py-0">
                  <div className="container-content-padding pr-0">
                    <div className="columns is-mobile ">
                      <div className="column is-12-mobile is-7-tablet is-10-widescreen is-9-fullhd px-3 pb-0">
                        <h1 className="title is-outfit has-text-primary title-cards-size">
                          Duis autem vel eum iriure
                        </h1>
                      </div>
                    </div>

                    <div className="columns is-mobile mt-3">
                      <div className="column is-12-mobile is-12-tablet is-12-desktop px-3 pt-0">
                        <p className="content-card-size">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod tincidunt ut
                          laoreet dolore magna aliquam erat volutpat.
                        </p>
                      </div>
                    </div>
                    <Link to="">
                      <span className="icon-text mt-3">
                        <span className="title is-outfit is-6 has-text-primary span-see-project">
                          Ver proyecto
                        </span>
                        <span className="icon has-text-primary is-marginless">
                          <i
                            className="fas fa-chevron-right fa-sm"
                            style={{ marginRight: 3 }}
                          ></i>
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>

                <div className="column is-4-mobile is-6-tablet is-4-widescreen is-5-fullhd has-text-centered is-relative">
                  <StaticImage
                    src="../images/spotify-mobile.png"
                    alt="icon"
                    style={{ position: "absolute", top: -35, left: 20 }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="column is-12-mobile is-12-tablet is-8-desktop is-7-widescreen is-7-fullhd">
            <div
              className="has-background-light"
              style={{ borderRadius: 8, position: "relative" }}
            >
              <div className="columns is-mobile is-multiline">
                <div className="column is-12-mobile is-12-tablet is-7-widescreen is-7-fullhd py-0">
                  <div className="container-content-padding pr-0">
                    <div className="columns is-mobile ">
                      <div className="column is-12-mobile is-12-tablet is-12-widescreen is-12-fullhd px-3 pb-0">
                        <h1 className="title is-outfit has-text-primary title-cards-size">
                          Exerci tation ullamcorper suscipit lobortis
                        </h1>
                      </div>
                    </div>

                    <div className="columns is-mobile mt-3">
                      <div className="column is-12-mobile is-10-tablet is-12-widescreen is-12-fullhd px-3 pt-0">
                        <p className="content-card-size">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod tincidunt ut
                          laoreet dolore magna aliquam erat volutpat. Ut wisi
                          enim ad minim veniam, quis nostrud exerci tation
                          ullamcorper.
                        </p>
                      </div>
                    </div>
                    <Link to="">
                      <span className="icon-text mt-3">
                        <span
                          className="title is-outfit is-6 has-text-primary span-see-project"
                          style={{ fontWeight: 800 }}
                        >
                          Ver proyecto
                        </span>
                        <span className="icon has-text-primary is-marginless">
                          <i
                            className="fas fa-chevron-right fa-sm"
                            style={{ marginRight: 3 }}
                          ></i>
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>

                <div className="column is-12-mobile is-12-tablet is-5-widescreen is-5-fullhd has-text-centered pt-0 is-relative">
                  <StaticImage
                    src="../images/laptop.svg"
                    alt="icon"
                    className="images-position"
                    // style={{ position: 'absolute', top: -25, right: 0 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="columns is-mobile is-multiline columns-margin columns-gap reverse-columns">
          <div className="column is-12-mobile is-12-tablet is-8-desktop is-7-widescreen is-7-fullhd">
            <div
              className="has-background-light"
              style={{ borderRadius: 8, position: "relative" }}
            >
              <div className="columns is-mobile is-multiline reverse-columns">
                <div className="column is-12-mobile is-12-tablet is-5-widescreen is-4-fullhd has-text-centered pt-0 is-relative">
                  <StaticImage
                    src="../images/monitor-mac.svg"
                    alt="icon"
                    className="images-position"
                    // style={{ position: 'absolute', top: -25, left: 0 }}
                  />
                </div>
                <div className="column is-12-mobile is-12-tablet is-7-widescreen is-8-fullhd py-0">
                  <div className="container-content-padding">
                    <div className="columns is-mobile ">
                      <div className="column is-12-mobile is-12-tablet is-12-widescreen is-12-fullhd px-3 pb-0">
                        <h1 className="title is-outfit has-text-primary title-cards-size">
                          Exerci tation ullamcorper suscipit lobortis
                        </h1>
                      </div>
                    </div>

                    <div className="columns is-mobile mt-3">
                      <div className="column is-12-mobile is-10-tablet is-12-widescreen is-12-fullhd px-3 pt-0">
                        <p className="content-card-size">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod tincidunt ut
                          laoreet dolore magna aliquam erat volutpat. Ut wisi
                          enim ad minim veniam, quis nostrud exerci tation
                          ullamcorper.
                        </p>
                      </div>
                    </div>
                    <Link to="">
                      <span className="icon-text mt-3">
                        <span
                          className="title is-outfit is-6 has-text-primary span-see-project"
                          style={{ fontWeight: 800 }}
                        >
                          Ver proyecto
                        </span>
                        <span className="icon has-text-primary is-marginless">
                          <i
                            className="fas fa-chevron-right fa-sm"
                            style={{ marginRight: 3 }}
                          ></i>
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="column is-12-mobile is-12-tablet is-4-desktop is-5-widescreen is-5-fullhd">
            <div
              className="has-background-light"
              style={{ borderRadius: 8, position: "relative" }}
            >
              <div className="columns is-mobile is-multiline">
                <div className="column is-4-mobile is-4-tablet is-4-widescreen is-4-fullhd has-text-centered is-relative">
                  <StaticImage
                    src="../images/rocket-mobile.svg"
                    alt="icon"
                    style={{ position: "absolute", top: -25, left: 30 }}
                  />
                </div>

                <div className="column is-8-mobile is-8-tablet is-8-widescreen is-8-fullhd py-0">
                  <div className="container-content-padding pl-0">
                    <div className="columns is-mobile ">
                      <div className="column is-12-mobile is-4-tablet is-10-widescreen is-8-fullhd px-3 pb-0">
                        <h1 className="title is-outfit has-text-primary title-cards-size">
                          Duis autem vel eum iriure
                        </h1>
                      </div>
                    </div>

                    <div className="columns is-mobile mt-3">
                      <div className="column is-12-mobile is-8-tablet is-12-widescreen is-12-fullhd px-3 pt-0">
                        <p className="content-card-size">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod tincidunt ut
                          laoreet dolore magna aliquam erat volutpat.
                        </p>
                      </div>
                    </div>
                    <Link to="">
                      <span className="icon-text mt-3">
                        <span
                          className="title is-outfit is-6 has-text-primary span-see-project"
                          style={{ fontWeight: 800 }}
                        >
                          Ver proyecto
                        </span>
                        <span className="icon has-text-primary is-marginless">
                          <i
                            className="fas fa-chevron-right fa-sm"
                            style={{ marginRight: 3 }}
                          ></i>
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="has-background-primary"
          style={{ borderRadius: 8, position: "relative" }}
        >
          <div className="columns is-mobile is-multiline columns-margin">
            <div className="column is-12-mobile is-12-tablet is-8-desktop py-0">
              <div className="container-content-padding">
                {/* <div className="columns is-mobile ">
                        <div className="column is-12-mobile is-8-tablet is-8-desktop px-3 pb-0">
                          <h1 className="title is-outfit is-4 has-text-primary">
                            Exerci tation ullamcorper suscipit lobortis
                          </h1>
                        </div>
                      </div> */}

                <div className="columns is-mobile mt-3">
                  <div className="column is-12-mobile is-12-tablet is-12-desktop px-3 pt-0">
                    <p className="has-text-white">
                      Aspiramos a ser aliados en el despliegue de ideas, la
                      expansión de la creatividad y la concreción de conceptos
                      ambiciosos en proyectos tangibles. Trabajamos arduamente
                      para orquestar las distintas partes involucradas en cada
                      proyecto, con el objetivo de brindar soluciones ingeniosas
                      que terminen beneficiando a la sociedad.
                    </p>
                  </div>
                </div>
                <div className="button-flexible button-contact-us-margin">
                  <button className="button is-dark custom-btn ">
                    Contáctanos
                  </button>
                </div>
              </div>
            </div>

            <div className="column is-12-mobile is-12-tablet is-4-desktop has-text-centered pt-0 is-relative">
              <StaticImage
                // className='laptop'
                src="../images/monitor-mac.svg"
                alt="icon"
                // style={{ position: 'absolute', top: -16, right: 0 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
