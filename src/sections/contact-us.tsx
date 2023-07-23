import React from "react";

const ContactUs: React.FC = () => {
  return (
    <section
      className="is-flex is-align-items-center is-justify-content-center p-4 has-background-dark"
      // style={{ height: "760px" }}
    >
      <div className="columns is-mobile is-multiline is-0 m-0 ">
        <div className="column is-12-mobile is-12-tablet is-6-desktop pb-0">
          <div className="columns is-mobile mb-4 is-centered">
            <div className="column is-8-mobile is-12-tablet is-8-desktop pb-0">
              <h1 className="title is-outfit is-3 is-size-1-tablet is-size-1-desktop has-text-primary title-contact-us">
                Contáctanos y empecemos a trabajar juntos en un gran proyecto
              </h1>
            </div>
          </div>
        </div>

        <div className="column is-12-mobile is-12-tablet is-6-desktop pb-0">
          <div className="field">
            <label className="label has-text-white">Nombre</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="e.g Alex Smith"
                style={{ borderRadius: "8px", height: "48px" }}
              />
            </div>
          </div>

          <div className="field">
            <label className="label has-text-white">Email</label>
            <div className="control">
              <input
                className="input"
                type="email"
                placeholder="e.g. alexsmith@gmail.com"
                style={{ borderRadius: "8px", height: "48px" }}
              />
            </div>
          </div>

          <div className="field">
            <label className="label has-text-white">Mensaje</label>

            <div className="control">
              <textarea
                className="textarea has-fixed-size"
                placeholder="e.g. Hello world"
                rows={8}
                style={{ borderRadius: "8px" }}
              ></textarea>
            </div>
          </div>
          <div className="container-button-send-form">
            <button className="button is-primary custom-btn">Contactar</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
