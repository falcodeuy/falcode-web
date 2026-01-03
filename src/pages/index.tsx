import React, { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css";
import "../styles/main.scss";
import type { HeadFC, PageProps } from "gatsby";
import Header from "../components/header";
import ContactUs from "../sections/contact-us";
import Footer from "../components/footer";
import Splash from "../sections/splash";
import HowWeWork from "../sections/how-we-work";
import Products from "../sections/products";
import Technologies from "../sections/technologies";
import { StaticImage } from "gatsby-plugin-image";

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

export const Head: HeadFC = () => (
  <>
    <title>Falcode</title>
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
  </>
);
