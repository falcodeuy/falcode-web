import React from "react";
import CardHowWeWork from "../components/card-how-we-work";
import { StaticImage } from "gatsby-plugin-image";

const HowWeWork: React.FC = () => {
  return (
    <section className="">
      <div className="section-padding">
        <h1 className="title-how-we-work">¿Cómo trabajamos en Falcode?</h1>
        <h1 className="title is-outfit has-text-dark has-text-centered mb-6 title-secondary-size">
          Buscamos ser{" "}
          <span className="has-text-primary">socios tecnológicos</span>, te
          acompañamos en cada etapa del proyecto y más allá
        </h1>

        <div className="columns is-mobile is-multiline container-cards my-0">
          <CardHowWeWork
            title={"Ideamos la mejor estrategia"}
            content={
              "Phasellus euismod diam ut quam dictum dignissim. Vivamus scelerisque nisl nisl, in bibendum erat dictum sit amet."
            }
            image={
              <StaticImage
                className="badge-card-position"
                src="../images/lightbulb.png"
                alt="icon"
              />
            }
          />
          <CardHowWeWork
            title={"Aseguramos la calidad"}
            content={
              "Phasellus euismod diam ut quam dictum dignissim. Vivamus scelerisque nisl nisl, in bibendum erat dictum sit amet."
            }
            image={
              <StaticImage
                className="badge-card-position"
                src="../images/badge.png"
                alt="icon"
              />
            }
          />
          <CardHowWeWork
            title={"Seleccionamos el talento"}
            content={
              "Phasellus euismod diam ut quam dictum dignissim. Vivamus scelerisque nisl nisl, in bibendum erat dictum sit amet."
            }
            image={
              <StaticImage
                className="badge-card-position"
                src="../images/sniper.png"
                alt="icon"
              />
            }
          />
          <CardHowWeWork
            title={"Creamos soluciones top"}
            content={
              "Phasellus euismod diam ut quam dictum dignissim. Vivamus scelerisque nisl nisl, in bibendum erat dictum sit amet."
            }
            image={
              <StaticImage
                className="badge-card-position"
                src="../images/rocket.png"
                alt="icon"
              />
            }
          />
        </div>

        <div className="has-background-light divider"></div>

        <h1 className="title is-outfit has-text-dark title-type-project title-secondary-size">
          Como <span className="has-text-primary">socios tecnológicos</span>{" "}
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
  );
};

export default HowWeWork;
