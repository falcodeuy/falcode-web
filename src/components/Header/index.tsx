import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import LanguageSelector from "../LanguageSelector";
import { useIntl, Link } from "gatsby-plugin-intl";
import { handleScrollClick } from "../../utils/scroll";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const intl = useIntl();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav
      className='navbar padding-navbar'
      role='navigation'
      aria-label='main navigation'
    >
      <div className='navbar-brand'>
        <Link className='navbar-item' to='/'>
          <StaticImage
            src='../../images/falcode-logo-navbar.svg'
            alt='Logo de Falcode'
          />
        </Link>

        <button
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
        </button>
      </div>

      <div
        id='navbarBasicExample'
        className={`navbar-menu ${isMenuOpen ? "is-active" : ""}`}
      >
        <div className='navbar-end gap-tab'>
          <Link 
            to='/team' 
            className='navbar-item has-text-dark link-redirect-margin'
            onClick={closeMenu}
          >
            {intl.formatMessage({ id: "menu.aboutUs" })}
          </Link>

          <Link
            to='#technologies'
            className='navbar-item has-text-dark link-redirect-margin'
            onClick={(e) => handleScrollClick(e, "technologies", closeMenu)}
          >
            {intl.formatMessage({ id: "menu.services" })}
          </Link>

          <Link
            to='#products'
            className='navbar-item has-text-dark link-redirect-margin'
            onClick={(e) => handleScrollClick(e, "products", closeMenu)}
          >
            {intl.formatMessage({ id: "menu.successCases" })}
          </Link>

          <Link
            to='/blog/'
            className='navbar-item has-text-dark link-redirect-margin'
            onClick={closeMenu}
          >
            Blog
          </Link>

          <div className='navbar-item container-button-navbar'>
            <button 
              className='button is-primary header-btn'
              onClick={(e) => handleScrollClick(e, "contact-us", closeMenu)}
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
