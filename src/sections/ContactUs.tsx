import { StaticImage } from "gatsby-plugin-image";
import { useIntl } from "gatsby-plugin-intl";
import React, { useState } from "react";

const ContactUs: React.FC = () => {
  const intl = useIntl();
  const [result, setResult] = useState<"idle" | "loading" | "success" | "error">("idle");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("loading");

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "3761718e-53f6-435d-a26c-e10b08b7d548");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("success");
      event.currentTarget.reset();
    } else {
      setResult("error");
    }
  };

  return (
    <section id="contact-us" className='has-background-dark'>
      <div className='section-padding is-flex is-align-items-center is-justify-content-center'>
        <div className='columns is-mobile is-multiline m-0'>
          <div className='column is-12-mobile is-12-tablet is-6-desktop'>
            <div className='columns is-mobile mb-4 is-centered'>
              <div className='column is-8-mobile is-12-tablet is-8-desktop'>
                <h2 className='title is-outfit is-3 is-size-1-tablet is-size-1-desktop has-text-primary has-text-centered-touch'>
                  {intl.formatMessage({ id: "contactUsTitle" })}
                </h2>
              </div>
            </div>
          </div>

          <div className='column is-12-mobile is-12-tablet is-6-desktop'>
            <form onSubmit={onSubmit}>
              <div className='field'>
                <label className='label has-text-white'>
                  {intl.formatMessage({ id: "nameLabel" })}
                </label>
                <div className='control'>
                  <input
                    className='input input-inline'
                    type='text'
                    name='name'
                    required
                  />
                </div>
              </div>

              <div className='field'>
                <label className='label has-text-white'>
                  {intl.formatMessage({ id: "emailLabel" })}
                </label>
                <div className='control'>
                  <input
                    className='input input-inline'
                    type='email'
                    name='email'
                    required
                  />
                </div>
              </div>

              <div className='field'>
                <label className='label has-text-white'>
                  {intl.formatMessage({ id: "messageLabel" })}
                </label>

                <div className='control'>
                  <textarea
                    className='textarea has-fixed-size input-border'
                    rows={8}
                    name='message'
                    required
                  ></textarea>
                </div>
              </div>

              <div className='container-button-send-form'>
                <button 
                  type='submit' 
                  className='button is-primary custom-btn'
                  disabled={result === "loading"}
                >
                  {result === "loading" 
                    ? intl.formatMessage({ id: "contactButtonSending" })
                    : intl.formatMessage({ id: "contactButton" })
                  }
                </button>
              </div>

              {result === "success" && (
                <p className='has-text-success mt-3 has-text-right'>
                  {intl.formatMessage({ id: "contactSuccess" })}
                </p>
              )}
              {result === "error" && (
                <p className='has-text-danger mt-3 has-text-right'>
                  {intl.formatMessage({ id: "contactError" })}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      <StaticImage
        src='../images/feather-left.svg'
        alt='icon'
        className='feather-left'
      />
      <StaticImage
        src='../images/feather-top-right.svg'
        alt='icon'
        className='feather-top-right'
      />
      <StaticImage
        src='../images/feather-bottom-right.svg'
        alt='icon'
        className='feather-bottom-right'
      />
    </section>
  );
};

export default ContactUs;
