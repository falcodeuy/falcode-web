import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Footer: React.FC = () => {
  return (
    <footer className='p-4 has-background-dark'>
      <div className='columns is-mobile is-multiline is-0 m-0 mb-6'>
        <div
          className='column is-12-mobile is-4-tablet is-4-desktop pb-0'
          style={{ marginBottom: "40px" }}
        >
          <StaticImage
            src='../images/falcode-logo-footer.svg'
            alt='Falcode footer logo'
          />
        </div>

        <div
          className='column is-12-mobile is-4-tablet is-4-desktop pb-0'
          style={{ marginBottom: "40px" }}
        >
          <ul className='has-text-white'>
            <li style={{ marginBottom: "32px" }}>
              <i className='fas fa-envelope mr-3'></i> correo@example.com
            </li>
            <li style={{ marginBottom: "32px" }}>
              <i className='fas fa-map-marker-alt mr-3'></i> Montevideo, Uruguay
            </li>
          </ul>
        </div>

        <div className='column is-12-mobile is-4-tablet is-4-desktop pb-0'>
          <div className='field is-grouped is-grouped-multiline'>
            <div className='control'>
              <a
                href='https://github.com/falcodeuy'
                className='icon is-medium mr-5 is-size-3 has-text-white'
              >
                <i className='fab fa-github'></i>
              </a>
            </div>
            <div className='control'>
              <a
                href='https://www.linkedin.com/company/falcode'
                className='icon is-medium mr-5 is-size-3 has-text-white'
              >
                <i className='fab fa-linkedin'></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className='container-signature'>
        <p className='has-text-white'>Falcode © 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
