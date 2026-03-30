import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Link } from "gatsby";
import { useIntl } from "gatsby-plugin-intl";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GoToTopButton from "../components/GoToTopButton";
import SEO from "../components/SEO";
import "../styles/main.scss";

const NotFoundPage: React.FC<PageProps> = () => {
  const intl = useIntl();
  const title = intl.formatMessage({ id: "notFound.title", defaultMessage: "Page not found" });
  const description = intl.formatMessage({
    id: "notFound.description",
    defaultMessage: "Sorry, we couldn't find what you were looking for.",
  });
  const cta = intl.formatMessage({ id: "notFound.cta", defaultMessage: "Back to homepage" });

  return (
    <>
      <Header />
      <main className="section has-background-light">
        <section className="section-padding">
          <div className="container">
            <div className="columns is-vcentered is-variable is-8 is-centered">
              <div className="column is-12-tablet is-8-desktop has-text-centered">
                <p className="has-text-primary has-text-weight-semibold mb-2">404</p>
                <h1 className="title is-outfit is-spaced mb-4">{title}</h1>
                <p className="subtitle mb-5">{description}</p>
                <Link to="/" className="button is-primary custom-btn">
                  {cta}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <GoToTopButton />
      <Footer />
    </>
  );
};

export default NotFoundPage;

export const Head: HeadFC<PageProps> = ({ pageContext }) => {
  const lang =
    (pageContext as { intl?: { language?: string } })?.intl?.language || "es";

  return (
    <SEO
      title={
        lang === "es"
          ? "Falcode - Página no encontrada"
          : "Falcode - Page not found"
      }
      description={
        lang === "es"
          ? "Lo sentimos, la página que buscas no existe."
          : "Sorry, the page you are looking for does not exist."
      }
      lang={lang}
      pathname="/404/"
    />
  );
};
