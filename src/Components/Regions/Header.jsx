import React from "react";
import { Link, useNavigate } from "react-router-dom";

import Logo from "../../Assets/Images/Logo/logo-black.svg";

import Home from "../../Assets/Images/Mobile/home.svg";
import Me from "../../Assets/Images/Mobile/me.svg";
import Project from "../../Assets/Images/Mobile/project.svg";
import Mail from "../../Assets/Images/Mobile/mail2.svg";
import CV from "../../Assets/Images/Mobile/cv2.svg";
import LinkedIn from "../../Assets/Images/Mobile/linkedin2.svg";

const Header = () => {
  const navigate = useNavigate();

  const handleRandomClick = () => {
    const urls = [
      "/projet/ui-ux/bleep",
      "/projet/ui-ux/cnt",
      "/projet/ui-ux/kult",
      "/projet/web/webdoc-mmi",
      "/projet/web/runner",
      "/projet/web/portfolio",
      "/projet/3d-game/minecraft-vr",
      "/projet/3d-game/ile-perdu",
      "/projet/3d-game/ninjacut",
    ];
    const randomUrl = urls[Math.floor(Math.random() * urls.length)];
    navigate(randomUrl);
  };

  return (
    <>
      <a href="#main-content" className="skip-link">
        Aller au contenu
      </a>
      <a
        href="https://cal.com/colin-lallauret/30min"
        target="_blank"
        rel="noopener noreferrer"
        className="hero-info"
      >
        🧑‍💻🔍 À la recherche d’un stage de fin d’études{" "}
        <div className="text-info">(prendre un rdv)</div>
      </a>
      <header>
        <Link to="/" className="logo-wrapper" aria-label="Accueil">
          <div className="logo">
            <img src={Logo} alt="Colin Lallauret" />
          </div>
        </Link>
        <nav className="menu" aria-label="Navigation principale">
          <Link to="/" aria-current={location.pathname === "/" ? "page" : undefined}>
            <div
              className={`item ${location.pathname === "/" ? "active" : ""}`}
            >
              Tous
            </div>
          </Link>
          <Link
            to="/moi"
            aria-current={location.pathname === "/moi" ? "page" : undefined}
          >
            <div
              className={`item ${location.pathname === "/moi" ? "active" : ""}`}
            >
              À propos ?
            </div>
          </Link>
          {/* <button
          className={`item ${
            location.pathname.startsWith("/projet") ? "active" : ""
          }`}
          onClick={handleRandomClick}
        >
          Projets
        </button> */}
          <Link
            to="/projets"
            aria-current={location.pathname === "/projets" ? "page" : undefined}
          >
            <div
              className={`item ${
                location.pathname === "/projets" ? "active" : ""
              }`}
            >
              Projets
            </div>
          </Link>
        </nav>

        <nav className="mobile-menu" aria-label="Navigation principale">
          <div className="pages">
            <Link to="/" aria-current={location.pathname === "/" ? "page" : undefined}>
              <div
                className={`btn ${location.pathname === "/" ? "active" : ""}`}
              >
                <img src={Home} alt="Home" />
              </div>
            </Link>
            <Link
              to="/moi"
              aria-current={location.pathname === "/moi" ? "page" : undefined}
            >
              <div
                className={`btn ${
                  location.pathname === "/moi" ? "active" : ""
                }`}
              >
                <img src={Me} alt="Me" />
              </div>
            </Link>
            {/* <button
            className={`btn ${
              location.pathname.startsWith("/projet") ? "active" : ""
            }`}
            onClick={handleRandomClick}
          >
            <img src={Project} alt="Project" />
          </button> */}
            <Link
              to="/projets"
              aria-current={location.pathname === "/projets" ? "page" : undefined}
            >
              <div
                className={`btn ${
                  location.pathname === "/projets" ? "active" : ""
                }`}
              >
                <img src={Project} alt="Project" />
              </div>
            </Link>
          </div>
          <div className="separator"></div>
          <div className="links">
            <a className="btn" href="mailto:colinlallauret1@gmail.com">
              <img src={Mail} alt="Mail" />
            </a>
            <button
              className="btn"
              aria-label="Ouvrir le CV"
              onClick={() => window.open("/CV2025_ColinLALLAURET.pdf")}
            >
              <img src={CV} alt="" />
            </button>
            <a
              className="btn"
              href="https://www.linkedin.com/in/colinlallauret/"
            >
              <img src={LinkedIn} alt="LinkedIn" />
            </a>
          </div>
        </nav>

        <div className="empty"></div>
      </header>
    </>
  );
};

export default Header;
