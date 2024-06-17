import React from "react";
import "../styles/main.scss";
import type { HeadFC, PageProps } from "gatsby";
import Header from "../components/header";
import WorkWithUs from "../sections/work-with-us";
import ContactUs from "../sections/contact-us";
import Footer from "../components/footer";
import Splash from "../sections/splash";
import HowWeWork from "../sections/how-we-work";
import Products from "../sections/products";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Header />
      <main>
        <Splash />
        <div>
          <div className='container-falcon has-background-light'>
            <StaticImage
              src='../images/falcon.svg'
              alt='icon'
              className='falcon-image'
            />
          </div>

          <StaticImage
            src='../images/stack-tecnologies.svg'
            alt='icon'
            className='container-stack-tecnologies'
          />
        </div>
        <HowWeWork />
        <Products />
        <WorkWithUs />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Falcode</title>;
