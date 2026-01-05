import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useIntl } from "gatsby-plugin-intl";

const Footer: React.FC = () => {
  const intl = useIntl();

  return (
    <footer className='p-4 has-background-dark'>
      <div className='columns p-3 mt-4 mx-auto'>
        <div className='column is-12-mobile is-4-tablet pb-0 mb-6'>
          <div className='is-flex is-justify-content-center'>
            <StaticImage
              src='../../images/falcode-logo-footer.svg'
              alt='Falcode logo'
            />
          </div>
        </div>

        <div className='column is-12-mobile is-4-tablet pb-0 mb-6 '>
          <div className='is-flex is-justify-content-center'>
            <ul className='has-text-white'>
              <li className='mb-5'>
                <i className='fas fa-envelope mr-3'></i> hi@falcode.dev
              </li>
              <li className='mb-5'>
                <i className='fas fa-map-marker-alt mr-3'></i> Montevideo, Uruguay
              </li>
              <li className='mb-5'>
                <a
                  href='https://docs.falcode.dev/'
                  className='has-text-white'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className='fas fa-book mr-3'></i> {intl.formatMessage({ id: "docsForDevs" })}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='column is-12-mobile is-4-tablet pb-0'>
          <div className='is-flex is-justify-content-center'>
            <div className='control'>
              <a
                href='https://github.com/falcodeuy'
                className='icon is-medium mr-5 is-size-3 has-text-white'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fab fa-github'></i>
              </a>
            </div>
            <div className='control'>
              <a
                href='https://www.linkedin.com/company/falcode'
                className='icon is-medium is-size-3 has-text-white'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fab fa-linkedin'></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className='container-signature'>
        <p className='has-text-white'>Falcode © {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
