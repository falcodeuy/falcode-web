import React from "react";
import CardHowWeWork from "../components/card-how-we-work";
import { StaticImage } from "gatsby-plugin-image";
import { useIntl } from "gatsby-plugin-intl";

const HowWeWork: React.FC = () => {
  const intl = useIntl();

  const tags = [
    intl.formatMessage({ id: "tags.tag1" }),
    intl.formatMessage({ id: "tags.tag2" }),
    intl.formatMessage({ id: "tags.tag3" }),
    intl.formatMessage({ id: "tags.tag4" }),
    intl.formatMessage({ id: "tags.tag5" }),
    intl.formatMessage({ id: "tags.tag6" }),
    intl.formatMessage({ id: "tags.tag7" }),
    intl.formatMessage({ id: "tags.tag8" }),
    intl.formatMessage({ id: "tags.tag9" }),
  ];

  return (
    <section className=''>
      <div className='section-padding'>
        <h1 className='title is-outfit has-text-dark has-text-centered mb-6 title-secondary-size'>
          {intl.formatMessage({ id: "subTitle" })}
          <span className='has-text-primary'>
            {intl.formatMessage({ id: "subTitleHighlight" })}
          </span>
          {intl.formatMessage({ id: "subTitleContinuation" })}
        </h1>

        <div className='columns is-mobile is-multiline my-0'>
          <CardHowWeWork
            title={intl.formatMessage({ id: "card1Title" })}
            content={intl.formatMessage({ id: "card1Content" })}
            image={
              <StaticImage
                className='badge-card-position'
                src='../images/lightbulb.png'
                alt='icon'
              />
            }
          />
          <CardHowWeWork
            title={intl.formatMessage({ id: "card2Title" })}
            content={intl.formatMessage({ id: "card2Content" })}
            image={
              <StaticImage
                className='badge-card-position'
                src='../images/badge.png'
                alt='icon'
              />
            }
          />
          <CardHowWeWork
            title={intl.formatMessage({ id: "card4Title" })}
            content={intl.formatMessage({ id: "card4Content" })}
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
          {intl.formatMessage({ id: "offerTitle" })}
          <span className='has-text-primary'>
            {intl.formatMessage({ id: "offerTitleHighlight" })}
          </span>
          {intl.formatMessage({ id: "offerTitleContinuation" })}
        </h1>

        <div>
          <h1 className='is-size-6 mb-4'>
            {intl.formatMessage({ id: "solutions" })}
          </h1>

          <div className='columns is-mobile is-multiline'>
            {tags.map((tag: string, index: number) => (
              <div className='column is-narrow' key={index}>
                <span className='tag is-dark is-rounded is-size-6'>{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
