import * as React from 'react';
import '../styles/main.scss';
import { Link, type HeadFC, type PageProps } from 'gatsby';
import CardHowWeWork from '../components/CardHowWeWork';
import { StaticImage } from 'gatsby-plugin-image';

const pageStyles = {
  color: '#232129',
  padding: '0px 20px',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const headingAccentStyles = {
  color: '#663399',
};
const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: '#8A6534',
  padding: 4,
  backgroundColor: '#FFF4DB',
  fontSize: '1.25rem',
  borderRadius: 4,
};
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
};
const doclistStyles = {
  paddingLeft: 0,
};
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
};

const linkStyle = {
  color: '#8954A8',
  fontWeight: 'bold',
  fontSize: 16,
  verticalAlign: '5%',
};

const docLinkStyle = {
  ...linkStyle,
  listStyleType: 'none',
  display: `inline-block`,
  marginBottom: 24,
  marginRight: 12,
};

const descriptionStyle = {
  color: '#232129',
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
};

const docLinks = [
  {
    text: 'TypeScript Documentation',
    url: 'https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/',
    color: '#8954A8',
  },
  {
    text: 'GraphQL Typegen Documentation',
    url: 'https://www.gatsbyjs.com/docs/how-to/local-development/graphql-typegen/',
    color: '#8954A8',
  },
];

const badgeStyle = {
  color: '#fff',
  backgroundColor: '#088413',
  border: '1px solid #088413',
  fontSize: 11,
  fontWeight: 'bold',
  letterSpacing: 1,
  borderRadius: 4,
  padding: '4px 6px',
  display: 'inline-block',
  position: 'relative' as 'relative',
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
};

const links = [
  {
    text: 'Tutorial',
    url: 'https://www.gatsbyjs.com/docs/tutorial/getting-started/',
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: '#E95800',
  },
  {
    text: 'How to Guides',
    url: 'https://www.gatsbyjs.com/docs/how-to/',
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: '#1099A8',
  },
  {
    text: 'Reference Guides',
    url: 'https://www.gatsbyjs.com/docs/reference/',
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: '#BC027F',
  },
  {
    text: 'Conceptual Guides',
    url: 'https://www.gatsbyjs.com/docs/conceptual/',
    description:
      'Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.',
    color: '#0D96F2',
  },
  {
    text: 'Plugin Library',
    url: 'https://www.gatsbyjs.com/plugins',
    description:
      'Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.',
    color: '#8EB814',
  },
  {
    text: 'Build and Host',
    url: 'https://www.gatsbyjs.com/cloud',
    badge: true,
    description:
      'Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!',
    color: '#663399',
  },
];

const IndexPage: React.FC<PageProps> = () => {
  return (
    // NavBar
    <main>
      <section className="has-background-light">
        {/* <div className="columns is-multiline is-mobile">
          <div className="column has-background-primary has-text-centered  is-6-mobile is-6-tablet is-4-desktop">
          1
        </div>
        <div className="column has-background-primary has-text-centered is-6-mobile is-6-tablet is-4-desktop">
          2
        </div>
        <div className="column has-background-primary has-text-centered is-6-mobile is-6-tablet is-4-desktop">
          3
        </div>
        <div className="column has-background-primary has-text-centered is-6-mobile is-6-tablet is-4-desktop">
          4
        </div>
          <div className="columns is-multiline is-mobile">
            <div className="column is-12-mobile is-6-tablet is-4-desktop">
              <h1 className="title is-3 has-text-primary">Somos socios</h1>
            </div>
            <div className="column is-12-mobile is-6-tablet is-4-desktop">
              <h1 className="title is-3 has-text-primary">tecnológicos</h1>
            </div>
          </div>
        </div> */}
        <div className="p-4">
          <h1 className="title is-outfit is-2 has-text-primary is-marginless">
            Somos socios
          </h1>
          <h1 className="title is-outfit is-2 has-text-primary mb-3">
            tecnológicos
          </h1>
          {/* <br />
          <br /> */}
          <div className="columns is-mobile">
            <div className="column is-10-mobile is-6-tablet is-4-desktop">
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas non ullamcorper leo. Duis aliquet, ex non ultricies
                fringilla, turpis enim cursus felis.
              </p>
            </div>
          </div>

          <div className="button-flexible">
            <button className="button is-primary custom-btn">
              Descubre nuestra propuesta
            </button>
          </div>
        </div>
      </section>

      <section className="">
        <div className="p-4">
          <h1 className="is-size-6 has-text-centered mb-4">
            ¿Cómo trabajamos en Falcode?
          </h1>
          <h1 className="title is-outfit is-4 has-text-dark has-text-centered mb-6">
            Buscamos ser{' '}
            <span className="has-text-primary">socios tecnológicos</span>, te
            acompañamos en cada etapa del proyecto y más allá
          </h1>

          <div className="columns is-mobile is-multiline container-cards my-0">
            {/* <div className="column is-12-mobile is-6-tablet is-3-desktop">
              <div
                className="has-background-light"
                style={{ borderRadius: 8, position: "relative" }}
              >
                <StaticImage
                  src="../images/lightbulb.png"
                  alt="lightbulb"
                  style={{ position: "absolute", top: -27, left: 32.66 }}
                />
                <div className="px-5 py-5">
                  <h1 className="title is-outfit is-4 has-text-primary is-marginless mt-5">
                    Ideamos la
                  </h1>
                  <h1 className="title is-outfit is-4 has-text-primary mb-3">
                    mejor estrategia
                  </h1>
                  
                  <div className="columns is-mobile">
                    <div className="column is-12-mobile is-6-tablet is-4-desktop">
                      <p className="">
                        Phasellus euismod diam ut quam dictum dignissim. Vivamus
                        scelerisque nisl nisl, in bibendum erat dictum sit amet.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <CardHowWeWork
              title={'Ideamos la mejor estrategia'}
              content={
                'Phasellus euismod diam ut quam dictum dignissim. Vivamus scelerisque nisl nisl, in bibendum erat dictum sit amet.'
              }
              image={
                <StaticImage
                  src="../images/lightbulb.png"
                  alt="icon"
                  style={{ position: 'absolute', top: -27, left: 22 }}
                />
              }
            />
            <CardHowWeWork
              title={'Aseguramos la calidad'}
              content={
                'Phasellus euismod diam ut quam dictum dignissim. Vivamus scelerisque nisl nisl, in bibendum erat dictum sit amet.'
              }
              image={
                <StaticImage
                  src="../images/badge.png"
                  alt="icon"
                  style={{ position: 'absolute', top: -27, left: 22 }}
                />
              }
            />
            <CardHowWeWork
              title={'Seleccionamos el talento'}
              content={
                'Phasellus euismod diam ut quam dictum dignissim. Vivamus scelerisque nisl nisl, in bibendum erat dictum sit amet.'
              }
              image={
                <StaticImage
                  src="../images/sniper.png"
                  alt="icon"
                  style={{ position: 'absolute', top: -27, left: 22 }}
                />
              }
            />
            <CardHowWeWork
              title={'Creamos soluciones top'}
              content={
                'Phasellus euismod diam ut quam dictum dignissim. Vivamus scelerisque nisl nisl, in bibendum erat dictum sit amet.'
              }
              image={
                <StaticImage
                  src="../images/rocket.png"
                  alt="icon"
                  style={{ position: 'absolute', top: -27, left: 22 }}
                />
              }
            />
          </div>

          <div
            className="has-background-light"
            style={{ height: '2px', marginTop: -25 }}
          ></div>

          <h1
            className="title is-outfit is-4 has-text-dark"
            style={{ marginTop: 32 }}
          >
            Como <span className="has-text-primary">socios tecnológicos</span>{' '}
            ofrecemos nuestra habilidad para planificar, organizar y construir
            proyectos innovadores de alto impacto.
          </h1>

          <div>
            <h1 className="is-size-6 mb-4">Nuestras soluciones abarcan:</h1>

            <div className="columns is-mobile is-multiline">
              <div className="column is-narrow">
                <span className="tag is-dark is-rounded is-size-6">
                  Desarrollo Web
                </span>
              </div>
              <div className="column is-narrow">
                <span className="tag is-dark is-rounded is-size-6">
                  Aplicaciones Móbiles
                </span>
              </div>
              <div className="column is-narrow">
                <span className="tag is-dark is-rounded is-size-6">
                  Aplicaciones Móbiles
                </span>
              </div>
              <div className="column is-narrow">
                <span className="tag is-dark is-rounded is-size-6">
                  Consultoría
                </span>
              </div>
              <div className="column is-narrow">
                <span className="tag is-dark is-rounded is-size-6">
                  Consultoría
                </span>
              </div>
              <div className="column is-narrow">
                <span className="tag is-dark is-rounded is-size-6">
                  Desarrollo Web
                </span>
              </div>
              <div className="column is-narrow">
                <span className="tag is-dark is-rounded is-size-6">
                  Aplicaciones Móbiles
                </span>
              </div>
              <div className="column is-narrow">
                <span className="tag is-dark is-rounded is-size-6">
                  Desarrollo Web
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="has-background-dark">
        <div className="p-4">
          <h1 className="title is-outfit is-4 has-text-light mb-4">
            Casos de éxito
          </h1>
          <div className="columns is-mobile is-multiline my-0">
            <div className="column is-12-mobile is-12-tablet is-4-desktop">
              <div
                className="has-background-light"
                style={{ borderRadius: 8, position: 'relative' }}
              >
                <StaticImage
                  src="../images/spotify-mobile.png"
                  alt="icon"
                  style={{ position: 'absolute', top: -16, right: 0 }}
                />

                <div className="p-4">
                  <div className="columns is-mobile ">
                    <div className="column is-7-mobile is-8-tablet is-8-desktop px-3 pb-0">
                      <h1 className="title is-outfit is-4 has-text-primary">
                        Duis autem vel eum iriure
                      </h1>
                    </div>
                  </div>

                  <div className="columns is-mobile mt-3">
                    <div className="column is-7-mobile is-12-tablet is-12-desktop px-3 pt-0">
                      <p className="is-size-7">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat.
                      </p>
                    </div>
                  </div>
                  <Link to="">
                    <span className="icon-text mt-3">
                      <span
                        className="title is-outfit is-6 has-text-primary is-underlined"
                        style={{ fontWeight: 800 }}
                      >
                        Ver proyecto
                      </span>
                      <span className="icon has-text-primary is-marginless">
                        <i className="fas fa-chevron-right is-size-7"></i>
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="column is-12-mobile is-12-tablet is-8-desktop">
              <div
                className="has-background-light"
                style={{ borderRadius: 8, position: 'relative' }}
              >
                <div className="columns is-mobile is-multiline">
                  <div className="column is-12-mobile is-12-tablet is-8-desktop pb-0">
                    <div className="p-4">
                      <div className="columns is-mobile ">
                        <div className="column is-12-mobile is-8-tablet is-8-desktop px-3 pb-0">
                          <h1 className="title is-outfit is-4 has-text-primary">
                            Exerci tation ullamcorper suscipit lobortis
                          </h1>
                        </div>
                      </div>

                      <div className="columns is-mobile mt-3">
                        <div className="column is-12-mobile is-12-tablet is-12-desktop px-3 pt-0">
                          <p className="is-size-7">
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
                            className="title is-outfit is-6 has-text-primary is-underlined"
                            style={{ fontWeight: 800 }}
                          >
                            Ver proyecto
                          </span>
                          <span className="icon has-text-primary is-marginless">
                            <i className="fas fa-chevron-right is-size-7"></i>
                          </span>
                        </span>
                      </Link>
                    </div>
                  </div>

                  <div className="column is-12-mobile is-12-tablet is-8-desktop has-text-centered pt-0 is-relative">
                    <StaticImage
                      // className='laptop'
                      src="../images/laptop.svg"
                      alt="icon"
                      // style={{ position: 'absolute', top: -16, right: 0 }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-12-mobile is-12-tablet is-8-desktop">
              <div
                className="has-background-light"
                style={{ borderRadius: 8, position: 'relative' }}
              >
                <div className="columns is-mobile is-multiline">
                  <div className="column is-4-mobile is-12-tablet is-8-desktop has-text-centered is-relative">
                    <StaticImage
                      // className='laptop'
                      src="../images/rocket-mobile.svg"
                      alt="icon"
                      style={{ position: 'absolute', top: 15, right: 0 }}
                    />
                  </div>
                  <div className="column is-8-mobile is-12-tablet is-8-desktop ">
                    <div className="p-4">
                      <div className="columns is-mobile ">
                        <div className="column is-12-mobile is-8-tablet is-8-desktop px-3 pb-0">
                          <h1 className="title is-outfit is-4 has-text-primary">
                            Duis autem vel eum iriure
                          </h1>
                        </div>
                      </div>

                      <div className="columns is-mobile mt-3">
                        <div className="column is-12-mobile is-12-tablet is-12-desktop px-3 pt-0">
                          <p className="is-size-7">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat.
                          </p>
                        </div>
                      </div>
                      <Link to="">
                        <span className="icon-text mt-3">
                          <span
                            className="title is-outfit is-6 has-text-primary is-underlined"
                            style={{ fontWeight: 800 }}
                          >
                            Ver proyecto
                          </span>
                          <span className="icon has-text-primary is-marginless">
                            <i className="fas fa-chevron-right is-size-7"></i>
                          </span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="column is-12-mobile is-12-tablet is-8-desktop">
              <div
                className="has-background-light"
                style={{ borderRadius: 8, position: 'relative' }}
              >
                <div className="columns is-mobile is-multiline">
                  <div className="column is-12-mobile is-12-tablet is-8-desktop pb-0">
                    <div className="p-4">
                      <div className="columns is-mobile ">
                        <div className="column is-12-mobile is-8-tablet is-8-desktop px-3 pb-0">
                          <h1 className="title is-outfit is-4 has-text-primary">
                            Exerci tation ullamcorper suscipit lobortis
                          </h1>
                        </div>
                      </div>

                      <div className="columns is-mobile mt-3">
                        <div className="column is-12-mobile is-12-tablet is-12-desktop px-3 pt-0">
                          <p className="is-size-7">
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
                            className="title is-outfit is-6 has-text-primary is-underlined"
                            style={{ fontWeight: 800 }}
                          >
                            Ver proyecto
                          </span>
                          <span className="icon has-text-primary is-marginless">
                            <i className="fas fa-chevron-right is-size-7"></i>
                          </span>
                        </span>
                      </Link>
                    </div>
                  </div>

                  <div className="column is-12-mobile is-12-tablet is-8-desktop has-text-centered pt-0 is-relative">
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
          </div>

          <div
            className="has-background-primary"
            style={{ borderRadius: 8, position: 'relative' }}
          >
            <div className="columns is-mobile is-multiline">
              <div className="column is-12-mobile is-12-tablet is-8-desktop pb-0">
                <div className="p-4">
                  {/* <div className="columns is-mobile ">
                        <div className="column is-12-mobile is-8-tablet is-8-desktop px-3 pb-0">
                          <h1 className="title is-outfit is-4 has-text-primary">
                            Exerci tation ullamcorper suscipit lobortis
                          </h1>
                        </div>
                      </div> */}

                  <div className="columns is-mobile mt-3">
                    <div className="column is-12-mobile is-12-tablet is-12-desktop px-3 pt-0">
                      <p className="is-size-6 has-text-white">
                        Aspiramos a ser aliados en el despliegue de ideas, la
                        expansión de la creatividad y la concreción de conceptos
                        ambiciosos en proyectos tangibles. Trabajamos arduamente
                        para orquestar las distintas partes involucradas en cada
                        proyecto, con el objetivo de brindar soluciones
                        ingeniosas que terminen beneficiando a la sociedad.
                      </p>
                    </div>
                  </div>
                  <div className="button-flexible">
                    <button className="button is-dark custom-btn ">
                      Contáctanos
                    </button>
                  </div>
                </div>
              </div>

              <div className="column is-12-mobile is-12-tablet is-8-desktop has-text-centered pt-0 is-relative">
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
    </main>
    // Footer
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
