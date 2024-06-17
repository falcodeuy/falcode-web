import React from "react";
import CardHowWeWork from "../components/card-how-we-work";
import { StaticImage } from "gatsby-plugin-image";

const HowWeWork: React.FC = () => {
  return (
    <section className=''>
      <div className='section-padding'>
        <h1 className='title-how-we-work'>¿Cómo trabajamos en Falcode?</h1>
        <h1 className='title is-outfit has-text-dark has-text-centered mb-6 title-secondary-size'>
          Buscamos ser{" "}
          <span className='has-text-primary'>socios tecnológicos</span>, te
          acompañamos en cada etapa del proyecto y más allá
        </h1>

        <div className='columns is-mobile is-multiline my-0'>
          <CardHowWeWork
            title={"Ideamos la mejor estrategia"}
            content={
              "Cada plan que diseñamos está cuidadosamente elaborado para aprovechar tus fortalezas y trabajamos contigo para entender tus necesidades, garantizando que siempre estés un paso adelante en tu camino hacia el logro de tus objetivos."
            }
            image={
              <StaticImage
                className='badge-card-position'
                src='../images/lightbulb.png'
                alt='icon'
              />
            }
          />
          <CardHowWeWork
            title={"Aseguramos la calidad"}
            content={
              "Contamos con un equipo de expertos altamente capacitados que trabajan rigurosamente para garantizar que cada solución cumpla con los más altos estándares de calidad."
            }
            image={
              <StaticImage
                className='badge-card-position'
                src='../images/badge.png'
                alt='icon'
              />
            }
          />
          <CardHowWeWork
            title={"Seleccionamos el talento"}
            content={
              "Nuestra empresa se enorgullece de ser líderes en el desarrollo de soluciones innovadoras para nuestros clientes. Con nuestro enfoque creativo y nuestros años de experiencia, aseguramos que nuestra solución cumplirá con todas tus necesidades y expectativas."
            }
            image={
              <StaticImage
                className='badge-card-position'
                src='../images/sniper.png'
                alt='icon'
              />
            }
          />
          <CardHowWeWork
            title={"Creamos soluciones top"}
            content={
              "Nuestra empresa se enorgullece de ser líderes en el desarrollo de soluciones innovadoras para nuestros clientes. Con nuestro enfoque creativo y nuestros años de experiencia, aseguramos que nuestra solución cumplirá con todas tus necesidades y expectativas."
            }
            image={
              <StaticImage
                className='badge-card-position'
                src='../images/rocket.png'
                alt='icon'
              />
            }
          />
        </div>

        <div className='has-background-light divider'></div>

        <h1 className='title is-outfit has-text-dark title-type-project title-secondary-size'>
          Como <span className='has-text-primary'>socios tecnológicos</span>{" "}
          ofrecemos nuestra habilidad para planificar, organizar y construir
          proyectos innovadores de alto impacto.
        </h1>

        <div>
          <h1 className='is-size-6 mb-4'>Nuestras soluciones abarcan:</h1>

          <div className='columns is-mobile is-multiline'>
            <div className='column is-narrow'>
              <span className='tag is-dark is-rounded is-size-6'>
                Desarrollo Web
              </span>
            </div>
            <div className='column is-narrow'>
              <span className='tag is-dark is-rounded is-size-6'>
                Aplicaciones Móbiles
              </span>
            </div>
            <div className='column is-narrow'>
              <span className='tag is-dark is-rounded is-size-6'>
                Inteligencia artificial
              </span>
            </div>
            <div className='column is-narrow'>
              <span className='tag is-dark is-rounded is-size-6'>
                Procesamientos de imágenes
              </span>
            </div>
            <div className='column is-narrow'>
              <span className='tag is-dark is-rounded is-size-6'>
                Analisis de datos
              </span>
            </div>
            <div className='column is-narrow'>
              <span className='tag is-dark is-rounded is-size-6'>
                Gestión de proyectos
              </span>
            </div>
            <div className='column is-narrow'>
              <span className='tag is-dark is-rounded is-size-6'>
                Tecnologias en la nube
              </span>
            </div>
            <div className='column is-narrow'>
              <span className='tag is-dark is-rounded is-size-6'>
                Gestión de infracstructura
              </span>
            </div>
            <div className='column is-narrow'>
              <span className='tag is-dark is-rounded is-size-6'>
                Optimización de procesos
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
