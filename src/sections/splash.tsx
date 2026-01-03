import React from "react";
import { useIntl } from "gatsby-plugin-intl";

const Splash: React.FC = () => {
  const intl = useIntl();
  return (
    <section className='has-background-light'>
      <div className='section-padding has-text-centered-mobile'>
        <h1 className='title is-outfit has-text-primary is-marginless title-splash-size' data-aos='fade-down'>
          {intl.formatMessage({ id: "weArePartners" })}
        </h1>
        <h1 className='title is-outfit has-text-primary mb-3 title-splash-size' data-aos='fade-down'>
          {intl.formatMessage({ id: "technology" })}
        </h1>

        <div className='columns is-mobile'>
          <div className='column is-10-mobile is-8-tablet is-6-widescreen is-4-desktop'>
            <p className='splash-content-size' data-aos='fade-down'>
              {intl.formatMessage({ id: "mainSubtitle" })}
            </p>
          </div>
        </div>

        <div className='button-flexible'>
          <button className='button is-primary custom-btn zoom-bounce' onClick={() => {
            document.getElementById('how-we-work')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            {intl.formatMessage({ id: "discoverOurProposal" })}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Splash;
