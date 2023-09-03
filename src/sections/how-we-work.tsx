import React from "react";
import CardHowWeWork from "../components/card-how-we-work";
import { StaticImage } from "gatsby-plugin-image";
import { useIntl } from "gatsby-plugin-intl";

const HowWeWork: React.FC = () => {
  const intl = useIntl();

  return (
    <section className="">
      <div className="section-padding">
        <h1 className="title-how-we-work">
          {intl.formatMessage({ id: "how_we_work.title_1" })}
        </h1>
        <h1 className="title is-outfit has-text-dark has-text-centered mb-6 title-secondary-size">
          {intl.formatMessage({ id: "how_we_work.title_2.part_1" })}{" "}
          <span className="has-text-primary">
            {intl.formatMessage({ id: "how_we_work.title_2.part_2" })}
          </span>
          , {intl.formatMessage({ id: "how_we_work.title_2.part_3" })}
        </h1>

        <div className="columns is-mobile is-multiline container-cards my-0">
          <CardHowWeWork
            title={intl.formatMessage({ id: "how_we_work.card_1.title" })}
            content={intl.formatMessage({ id: "how_we_work.card_1.content" })}
            image={
              <StaticImage
                className="badge-card-position"
                src="../images/lightbulb.png"
                alt="icon"
              />
            }
          />
          <CardHowWeWork
            title={intl.formatMessage({ id: "how_we_work.card_2.title" })}
            content={intl.formatMessage({ id: "how_we_work.card_2.content" })}
            image={
              <StaticImage
                className="badge-card-position"
                src="../images/badge.png"
                alt="icon"
              />
            }
          />
          <CardHowWeWork
            title={intl.formatMessage({ id: "how_we_work.card_3.title" })}
            content={intl.formatMessage({ id: "how_we_work.card_3.content" })}
            image={
              <StaticImage
                className="badge-card-position"
                src="../images/sniper.png"
                alt="icon"
              />
            }
          />
          <CardHowWeWork
            title={intl.formatMessage({ id: "how_we_work.card_4.title" })}
            content={intl.formatMessage({ id: "how_we_work.card_4.content" })}
            image={
              <StaticImage
                className="badge-card-position"
                src="../images/rocket.png"
                alt="icon"
              />
            }
          />
        </div>

        <div className="has-background-light divider"></div>

        <h1 className="title is-outfit has-text-dark title-type-project title-secondary-size">
          {intl.formatMessage({ id: "how_we_work.title_3.part_1" })}{" "}
          <span className="has-text-primary">
            {intl.formatMessage({ id: "how_we_work.title_3.part_2" })}
          </span>{" "}
          {intl.formatMessage({ id: "how_we_work.title_3.part_3" })}
        </h1>

        <div>
          <h1 className="is-size-6 mb-4">
            {intl.formatMessage({ id: "how_we_work.subtitle" })}:
          </h1>

          <div className="columns is-mobile is-multiline">
            <div className="column is-narrow">
              <span className="tag is-dark is-rounded is-size-6">
                {intl.formatMessage({ id: "how_we_work.chip_1" })}
              </span>
            </div>
            <div className="column is-narrow">
              <span className="tag is-dark is-rounded is-size-6">
                {intl.formatMessage({ id: "how_we_work.chip_2" })}
              </span>
            </div>
            <div className="column is-narrow">
              <span className="tag is-dark is-rounded is-size-6">
                {intl.formatMessage({ id: "how_we_work.chip_2" })}
              </span>
            </div>
            <div className="column is-narrow">
              <span className="tag is-dark is-rounded is-size-6">
                {intl.formatMessage({ id: "how_we_work.chip_3" })}
              </span>
            </div>
            <div className="column is-narrow">
              <span className="tag is-dark is-rounded is-size-6">
                {intl.formatMessage({ id: "how_we_work.chip_3" })}
              </span>
            </div>
            <div className="column is-narrow">
              <span className="tag is-dark is-rounded is-size-6">
                {intl.formatMessage({ id: "how_we_work.chip_1" })}
              </span>
            </div>
            <div className="column is-narrow">
              <span className="tag is-dark is-rounded is-size-6">
                {intl.formatMessage({ id: "how_we_work.chip_2" })}
              </span>
            </div>
            <div className="column is-narrow">
              <span className="tag is-dark is-rounded is-size-6">
                {intl.formatMessage({ id: "how_we_work.chip_1" })}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
