import React, { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css";
import "../styles/main.scss";
import type { HeadFC, PageProps } from "gatsby";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GoToTopButton from "../components/GoToTopButton";
import SEO from "../components/SEO";
import ContactUs from "../sections/ContactUs";
import { useIntl } from "gatsby-plugin-intl";

interface TeamMember {
  name: string;
  roleKey: string;
  descriptionKey: string;
  placeholder: string;
}

type ValueIconType = "innovation" | "growth" | "collaboration";

const teamMembers: TeamMember[] = [
  {
    name: "Crhistyan Silva",
    roleKey: "team.member1.role",
    descriptionKey: "team.member1.description",
    placeholder: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Fausto Márquez",
    roleKey: "team.member2.role",
    descriptionKey: "team.member2.description",
    placeholder: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Leando Paz",
    roleKey: "team.member3.role",
    descriptionKey: "team.member3.description",
    placeholder: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face"
  }
];

const ValueIcon: React.FC<{ type: ValueIconType }> = ({ type }) => {
  if (type === "innovation") {
    return (
      <svg
        width="56"
        height="56"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="11" />
        <path d="M12 6.5a3.5 3.5 0 0 0-2.2 6.2c.5.4.8 1 1 1.6h2.4c.2-.6.5-1.2 1-1.6A3.5 3.5 0 0 0 12 6.5Z" />
        <path d="M10.8 16h2.4" />
        <path d="M11 18h2" />
      </svg>
    );
  }

  if (type === "growth") {
    return (
      <svg
        width="56"
        height="56"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="11" />
        <path d="M7.5 15.5 12 11l2.5 2.5L17 11" />
        <path d="M14.5 11H17v2.5" />
      </svg>
    );
  }

  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="11" />
      <circle cx="9" cy="10" r="1.75" />
      <circle cx="15" cy="10" r="1.75" />
      <path d="M6.5 16a3 3 0 0 1 3-3h5a3 3 0 0 1 3 3" />
    </svg>
  );
};

const TeamPage: React.FC<PageProps> = () => {
  const intl = useIntl();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Header />
      <main className="pt-6">
        <section className="section-padding">
          <h1 className="title is-outfit has-text-dark has-text-centered is-2" data-aos="fade-up">
            {intl.formatMessage({ id: "team.title" })}
          </h1>
          <p className="subtitle has-text-centered has-text-grey-dark" data-aos="fade-up" data-aos-delay="100">
            {intl.formatMessage({ id: "team.subtitle" })}
          </p>
        </section>

        <section className="section-padding pt-0">
          <div className="columns is-multiline is-centered">
            {teamMembers.map((member, index) => (
              <div 
                key={member.name} 
                className="column is-6-tablet is-3-desktop"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-square">
                      <img 
                        src={member.placeholder} 
                        alt={member.name}
                      />
                    </figure>
                  </div>
                  <div className="card-content has-text-centered">
                    <p className="title is-5 is-outfit has-text-dark mb-1">
                      {member.name}
                    </p>
                    <p className="is-size-6 has-text-primary mb-3">
                      {intl.formatMessage({ id: member.roleKey })}
                    </p>
                    <p className="is-size-6 has-text-grey-dark">
                      {intl.formatMessage({ id: member.descriptionKey })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="has-background-light py-6">
          <div className="section-padding mb-6">
            <h2 className="title is-outfit has-text-dark has-text-centered is-3" data-aos="fade-up">
              {intl.formatMessage({ id: "team.valuesTitle" })}
            </h2>
            <div className="columns is-multiline is-centered">
              <div className="column is-4" data-aos="zoom-in" data-aos-delay="100">
                <div className="box has-text-centered">
                  <span className="has-text-primary is-inline-flex">
                    <ValueIcon type="innovation" />
                  </span>
                  <p className="title is-5 is-outfit has-text-dark mt-3">{intl.formatMessage({ id: "team.value1.title" })}</p>
                  <p className="has-text-grey-dark">{intl.formatMessage({ id: "team.value1.description" })}</p>
                </div>
              </div>
              <div className="column is-4" data-aos="zoom-in" data-aos-delay="200">
                <div className="box has-text-centered">
                  <span className="has-text-primary is-inline-flex">
                    <ValueIcon type="growth" />
                  </span>
                  <p className="title is-5 is-outfit has-text-dark mt-3">{intl.formatMessage({ id: "team.value2.title" })}</p>
                  <p className="has-text-grey-dark">{intl.formatMessage({ id: "team.value2.description" })}</p>
                </div>
              </div>
              <div className="column is-4" data-aos="zoom-in" data-aos-delay="300">
                <div className="box has-text-centered">
                  <span className="has-text-primary is-inline-flex">
                    <ValueIcon type="collaboration" />
                  </span>
                  <p className="title is-5 is-outfit has-text-dark mt-3">{intl.formatMessage({ id: "team.value3.title" })}</p>
                  <p className="has-text-grey-dark">{intl.formatMessage({ id: "team.value3.description" })}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContactUs />
      </main>
      <GoToTopButton />
      <Footer />
    </>
  );
};

export default TeamPage;

export const Head: HeadFC = ({ pageContext }) => {
  const lang = (pageContext as { intl?: { language?: string } })?.intl?.language || "es";
  const isSpanish = lang === "es";

  const keywords = isSpanish
    ? [
        "equipo falcode",
        "nosotros",
        "desarrolladores",
        "equipo tecnológico",
        "expertos en software",
      ]
    : [
        "falcode team",
        "about us",
        "developers",
        "technology team",
        "software experts",
      ];

  return (
    <SEO
      title={isSpanish ? "Equipo" : "Team"}
      description={
        isSpanish
          ? "Conoce al equipo detrás de Falcode. Expertos apasionados por la tecnología."
          : "Meet the team behind Falcode. Experts passionate about technology."
      }
      lang={lang}
      pathname="/team"
      keywords={keywords}
    />
  );
};
