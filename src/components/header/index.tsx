import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import LanguageSelector from "../language-selector";
import { useIntl } from "gatsby-plugin-intl";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const intl = useIntl();

  return (
    <nav
      className='navbar padding-navbar'
      role='navigation'
      aria-label='main navigation'
    >
      <div className='navbar-brand'>
        <a className='navbar-item' href='#'>
          <StaticImage
            src='../../images/falcode-logo-navbar.svg'
            alt='Descripción de la imagen'
          />
        </a>

        <a
          role='button'
          className={`navbar-burger ${
            isMenuOpen ? "is-active" : ""
          } has-text-dark`}
          aria-label='menu'
          aria-expanded={isMenuOpen ? "true" : "false"}
          onClick={handleMenuToggle}
          data-target='navbarBasicExample'
          style={{ cursor: "pointer" }}
        >
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </a>
      </div>

      <div
        id='navbarBasicExample'
        className={`navbar-menu ${isMenuOpen ? "is-active" : ""}`}
      >
        <div className='navbar-end gap-tab'>
          <a 
            href='#how-we-work' 
            className='navbar-item has-text-dark link-redirect-margin'
            onClick={(e) => scrollToSection(e, "how-we-work")}
          >
            {intl.formatMessage({ id: "menu.aboutUs" })}
          </a>

          <a 
            href='#technologies' 
            className='navbar-item has-text-dark link-redirect-margin'
            onClick={(e) => scrollToSection(e, "technologies")}
          >
            {intl.formatMessage({ id: "menu.services" })}
          </a>

          <a 
            href='#products' 
            className='navbar-item has-text-dark link-redirect-margin'
            onClick={(e) => scrollToSection(e, "products")}
          >
            {intl.formatMessage({ id: "menu.successCases" })}
          </a>

          <div className='navbar-item container-button-navbar'>
            <button 
              className='button is-primary header-btn'
              onClick={() => {
                const element = document.getElementById("contact-us");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                  setIsMenuOpen(false);
                }
              }}
            >
              {intl.formatMessage({ id: "contactButtonText" })}
            </button>
          </div>

          <LanguageSelector />
        </div>
      </div>
    </nav>
  );
};

export default Header;
