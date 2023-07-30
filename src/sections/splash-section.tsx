import React from "react";

const Splash: React.FC = () => {
  return (
    <section className="has-background-light">
      <div className="section-padding">
        <h1 className="title is-outfit has-text-primary is-marginless title-splash-size">
          Somos socios
        </h1>
        <h1 className="title is-outfit has-text-primary mb-3 title-splash-size">
          tecnológicos
        </h1>

        <div className="columns is-mobile">
          <div className="column is-10-mobile is-8-tablet is-6-widescreen is-4-desktop">
            <p className="splash-content-size">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              non ullamcorper leo. Duis aliquet, ex non ultricies fringilla,
              turpis enim cursus felis.
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
  );
};

export default Splash;
