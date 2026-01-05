import React, { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css";
import "../styles/main.scss";
import type { HeadFC, PageProps } from "gatsby";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import ContactUs from "../sections/ContactUs";
import { useIntl } from "gatsby-plugin-intl";

interface TeamMember {
  id: string;
  nameKey: string;
  roleKey: string;
  descriptionKey: string;
  placeholder: string;
}

const teamMembers: TeamMember[] = [
  {
    id: "member1",
    nameKey: "team.member1.name",
    roleKey: "team.member1.role",
    descriptionKey: "team.member1.description",
    placeholder: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: "member2",
    nameKey: "team.member2.name",
    roleKey: "team.member2.role",
    descriptionKey: "team.member2.description",
    placeholder: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: "member3",
    nameKey: "team.member3.name",
    roleKey: "team.member3.role",
    descriptionKey: "team.member3.description",
    placeholder: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: "member4",
    nameKey: "team.member4.name",
    roleKey: "team.member4.role",
    descriptionKey: "team.member4.description",
    placeholder: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
  }
];

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
                key={member.id} 
                className="column is-6-tablet is-3-desktop"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-square">
                      <img 
                        src={member.placeholder} 
                        alt={intl.formatMessage({ id: member.nameKey })}
                      />
                    </figure>
                  </div>
                  <div className="card-content has-text-centered">
                    <p className="title is-5 is-outfit has-text-dark mb-1">
                      {intl.formatMessage({ id: member.nameKey })}
                    </p>
                    <p className="subtitle is-6 has-text-primary mb-3">
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

        <section className="has-background-light">
          <div className="section-padding">
            <h2 className="title is-outfit has-text-dark has-text-centered is-3 mb-5" data-aos="fade-up">
              {intl.formatMessage({ id: "team.valuesTitle" })}
            </h2>
            <div className="columns is-multiline is-centered">
              <div className="column is-4" data-aos="zoom-in" data-aos-delay="100">
                <div className="box has-text-centered">
                  <span className="is-size-1">🚀</span>
                  <p className="title is-5 is-outfit has-text-dark mt-3">{intl.formatMessage({ id: "team.value1.title" })}</p>
                  <p className="has-text-grey-dark">{intl.formatMessage({ id: "team.value1.description" })}</p>
                </div>
              </div>
              <div className="column is-4" data-aos="zoom-in" data-aos-delay="200">
                <div className="box has-text-centered">
                  <span className="is-size-1">💡</span>
                  <p className="title is-5 is-outfit has-text-dark mt-3">{intl.formatMessage({ id: "team.value2.title" })}</p>
                  <p className="has-text-grey-dark">{intl.formatMessage({ id: "team.value2.description" })}</p>
                </div>
              </div>
              <div className="column is-4" data-aos="zoom-in" data-aos-delay="300">
                <div className="box has-text-centered">
                  <span className="is-size-1">🤝</span>
                  <p className="title is-5 is-outfit has-text-dark mt-3">{intl.formatMessage({ id: "team.value3.title" })}</p>
                  <p className="has-text-grey-dark">{intl.formatMessage({ id: "team.value3.description" })}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContactUs />
      </main>
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
      title={isSpanish ? "Equipo - Falcode" : "Team - Falcode"}
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
