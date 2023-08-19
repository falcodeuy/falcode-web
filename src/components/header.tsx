import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className="navbar padding-navbar"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="#">
          <StaticImage
            src="../images/falcode-logo-navbar.svg"
            alt="Descripción de la imagen"
          />
        </a>

        <a
          role="button"
          className={`navbar-burger ${
            isMenuOpen ? "is-active" : ""
          } has-text-dark`}
          aria-label="menu"
          aria-expanded={isMenuOpen ? "true" : "false"}
          onClick={handleMenuToggle}
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        className={`navbar-menu ${isMenuOpen ? "is-active" : ""}`}
      >
        <div className="navbar-end gap-tab">
          <a className="navbar-item has-text-dark link-redirect-margin">
            Nosotros
          </a>

          <a className="navbar-item has-text-dark link-redirect-margin">
            Servicios
          </a>

          <a className="navbar-item has-text-dark link-redirect-margin">
            Casos de éxito
          </a>

          <a className="navbar-item has-text-dark link-redirect-margin">
            Para Devs
          </a>

          <div className="navbar-item container-button-navbar">
            <button className="button is-primary header-btn">Contactar</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
