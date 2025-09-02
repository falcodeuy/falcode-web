import React from "react";
import { useIntl } from "gatsby-plugin-intl";

const Splash: React.FC = () => {
  const intl = useIntl();
  return (
    <section className='has-background-light'>
      <div className='section-padding'>
        <h1 className='title is-outfit has-text-primary is-marginless title-splash-size'>
          {intl.formatMessage({ id: "weArePartners" })}
        </h1>
        <h1 className='title is-outfit has-text-primary mb-3 title-splash-size'>
          {intl.formatMessage({ id: "technology" })}
        </h1>

        <div className='columns is-mobile'>
          <div className='column is-10-mobile is-8-tablet is-6-widescreen is-4-desktop'>
            <p className='splash-content-size'>
              {intl.formatMessage({ id: "mainSubtitle" })}
            </p>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Splash;
