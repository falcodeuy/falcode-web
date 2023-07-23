import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const WorkWithUs: React.FC = () => {
  return (
    <section
      className="is-flex is-align-items-center is-justify-content-center p-4"
      style={{ height: "760px" }}
    >
      <div
        className="columns is-mobile is-multiline is-0 has-background-dark m-0 card-work-with-us"
        style={{ borderRadius: "8px" }}
      >
        <div className="column is-12-mobile is-12-tablet is-6-desktop p-0 is-relative">
          <StaticImage
            src="../images/intersect.svg"
            alt="Descripción de la imagen"
          />
          <StaticImage
            src="../images/developer-boy.svg"
            alt="Descripción de la imagen"
            className="developer-boy-style"
          />
        </div>
        <div className="column is-12-mobile is-12-tablet is-6-desktop p-4">
          {/* <div className="p-4 has-background-dark"> */}
          <div className="columns is-mobile mb-4">
            <div className="column is-8-mobile is-12-tablet is-8-desktop pb-0">
              <h1 className="title is-outfit is-4 is-size-3-tablet is-size-2-desktop has-text-primary">
                We are dev first, we care about you.
              </h1>
            </div>
          </div>

          <div className="columns is-mobile">
            <div className="column is-12-mobile is-11-tablet is-9-desktop pb-0">
              <p className="has-text-white is-size-4-desktop">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.
              </p>
            </div>
          </div>

          <div className="container-button-work-with-us">
            <button className="button is-primary custom-btn">
              Trabaja con nosotros
            </button>
          </div>
        </div>
      </div>
      {/* </div> */}

      {/* <div className="card" style={{ borderRadius: "8px" }}>
          <div className="card-image">
            
            <div className="has-background-dark">
              <StaticImage
                src="../images/intersect.svg"
                alt="Descripción de la imagen"
              />
            </div>
          </div>
          <div className="card-content p-4 has-background-dark">
            <div className="columns is-mobile mb-4">
              <div className="column is-8-mobile pb-0">
                <h1 className="title is-outfit is-4 has-text-primary">
                  We are dev first, we care about you.
                </h1>
              </div>
            </div>

            <p className="has-text-white">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.
            </p>

            <div className="is-flex is-flex is-align-items-center is-justify-content-center my-5">
              <button className="button is-primary custom-btn">
                Trabaja con nosotros
              </button>
            </div>
          </div>
        </div> */}
    </section>
  );
};

export default WorkWithUs;
