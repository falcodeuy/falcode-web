import React from "react";
import { useIntl } from "gatsby-plugin-intl";
import { scrollToSection } from "../utils/scroll";

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

        <div className='splash-subtitle-container'>
          <p className='splash-content-size' data-aos='fade-down'>
            {intl.formatMessage({ id: "mainSubtitle" })}
          </p>
        </div>

        <div className='button-flexible'>
          <button 
            className='button is-primary custom-btn zoom-bounce' 
            onClick={() => scrollToSection('how-we-work')}
          >
            {intl.formatMessage({ id: "discoverOurProposal" })}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Splash;
