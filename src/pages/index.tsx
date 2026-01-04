import React, { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css";
import "../styles/main.scss";
import type { HeadFC, PageProps } from "gatsby";
import Header from "../components/Header";
import ContactUs from "../sections/ContactUs";
import Footer from "../components/Footer";
import Splash from "../sections/Splash";
import HowWeWork from "../sections/HowWeWork";
import Products from "../sections/Products2";
import Technologies from "../sections/Technologies2";
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
