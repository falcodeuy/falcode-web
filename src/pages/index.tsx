import React, { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css";
import "../styles/main.scss";
import type { HeadFC, PageProps } from "gatsby";
import Header from "../components/Header2";
import ContactUs from "../sections/ContactUs";
import Footer from "../components/Footer2";
import Splash from "../sections/Splash";
import HowWeWork from "../sections/HowWeWork";
import Products from "../sections/Products";
import Technologies from "../sections/Technologies";
import { StaticImage } from "gatsby-plugin-image";
import SEO from "../components/SEO";

const IndexPage: React.FC<PageProps> = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Splash />
        <div>
          <div className='container-falcon has-background-light pb-6 dynamic-margin-top'>
            <StaticImage
              src='../images/falcon.svg'
              alt='icon'
              className='falcon-image'
            />
          </div>

          <Technologies />
        </div>
        <HowWeWork />
        <Products />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = ({ pageContext }) => {
  const lang = (pageContext as { intl?: { language?: string } })?.intl?.language || "es";
  const isSpanish = lang === "es";

  const keywords = isSpanish
    ? [
        "desarrollo web",
        "aplicaciones móviles",
        "software a medida",
        "inteligencia artificial",
        "consultoría tecnológica",
        "AWS partners",
        "desarrollo de sistemas",
      ]
    : [
        "web development",
        "mobile applications",
        "custom software",
        "artificial intelligence",
        "technology consulting",
        "AWS partners",
        "systems development",
      ];

  return (
    <SEO
      title={isSpanish ? "Falcode: Tus Socios Tecnológicos" : "Falcode: Your Technology Partner"}
      description={
        isSpanish
          ? "Impulsa el crecimiento de tu negocio con soluciones tecnológicas a medida. Desarrollo web, apps móviles, inteligencia artificial y más."
          : "Boost your business growth with tailored technology solutions. Web development, mobile apps, artificial intelligence and more."
      }
      lang={lang}
      pathname="/"
      keywords={keywords}
    >
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
      />
    </SEO>
  );
};
