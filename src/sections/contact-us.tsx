import { StaticImage } from "gatsby-plugin-image";
import { useIntl } from "gatsby-plugin-intl";
import React from "react";

const ContactUs: React.FC = () => {
  const intl = useIntl();

  return (
    <section className="has-background-dark">
      <div className="section-padding is-flex is-align-items-center is-justify-content-center">
        <div className="columns is-mobile is-multiline is-0 m-0 ">
          <div className="column is-12-mobile is-12-tablet is-6-desktop pb-0">
            <div className="columns is-mobile mb-4 is-centered">
              <div className="column is-8-mobile is-12-tablet is-8-desktop pb-0">
                <h1 className="title is-outfit is-3 is-size-1-tablet is-size-1-desktop has-text-primary title-contact-us">
                  {intl.formatMessage({ id: "contact_us.title" })}
                </h1>
              </div>
            </div>
          </div>

          <div className="column is-12-mobile is-12-tablet is-6-desktop pb-0">
            <div className="field">
              <label className="label has-text-white">
                {intl.formatMessage({ id: "contact_us.form.name" })}
              </label>
              <div className="control">
                <input
                  className="input input-inline"
                  type="text"
                  placeholder="e.g Alex Smith"
                />
              </div>
            </div>

            <div className="field">
              <label className="label has-text-white">
                {intl.formatMessage({ id: "contact_us.form.email" })}
              </label>
              <div className="control">
                <input
                  className="input input-inline"
                  type="email"
                  placeholder="e.g. alexsmith@gmail.com"
                />
              </div>
            </div>

            <div className="field">
              <label className="label has-text-white">
                {intl.formatMessage({ id: "contact_us.form.message" })}
              </label>

              <div className="control">
                <textarea
                  className="textarea has-fixed-size input-border"
                  placeholder="e.g. Hello world"
                  rows={8}
                ></textarea>
              </div>
            </div>
            <div className="container-button-send-form">
              <button className="button is-primary custom-btn">
                {intl.formatMessage({ id: "contact_us.form.button" })}
              </button>
            </div>
          </div>
        </div>
      </div>
      <StaticImage
        src="../images/feather-left.svg"
        alt="icon"
        className="feather-left"
      />
      <StaticImage
        src="../images/feather-top-right.svg"
        alt="icon"
        className="feather-top-right"
      />
      <StaticImage
        src="../images/feather-bottom-right.svg"
        alt="icon"
        className="feather-bottom-right"
      />
    </section>
  );
};

export default ContactUs;
