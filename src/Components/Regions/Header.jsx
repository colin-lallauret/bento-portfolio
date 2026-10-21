import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLang } from "../../i18n";
import LangSwitcher from "../LangSwitcher";

import Logo from "../../Assets/Images/Logo/logo-black.svg";

import Home from "../../Assets/Images/Mobile/home.svg";
import Me from "../../Assets/Images/Mobile/me.svg";
import Project from "../../Assets/Images/Mobile/project.svg";
import Mail from "../../Assets/Images/Mobile/mail2.svg";
import CV from "../../Assets/Images/Mobile/cv2.svg";
import LinkedIn from "../../Assets/Images/Mobile/linkedin2.svg";

const Header = () => {
  const navigate = useNavigate();
  const { t } = useLang();

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
        {t("Aller au contenu", "Skip to content")}
      </a>
      <a
        href="https://cal.com/colin-lallauret/30min"
        target="_blank"
        rel="noopener noreferrer"
        className="hero-info"
      >
        🧑‍💻🔍{" "}
        {t(
          "À la recherche d’un stage de fin d’études",
          "Looking for a final-year internship",
        )}{" "}
        <div className="text-info">
          {t("(prendre un rdv)", "(book a call)")}
        </div>
      </a>
      <header>
        <Link to="/" className="logo-wrapper" aria-label={t("Accueil", "Home")}>
          <div className="logo">
            <img className="icon-adaptive" src={Logo} alt="Colin Lallauret" />
          </div>
        </Link>
        <nav
          className="menu"
          aria-label={t("Navigation principale", "Main navigation")}
        >
          <Link
            to="/"
            aria-current={location.pathname === "/" ? "page" : undefined}
          >
            <div
              className={`item ${location.pathname === "/" ? "active" : ""}`}
            >
              {t("Tous", "All")}
            </div>
          </Link>
          <Link
            to="/moi"
            aria-current={location.pathname === "/moi" ? "page" : undefined}
          >
            <div
              className={`item ${location.pathname === "/moi" ? "active" : ""}`}
            >
              {t("À propos ?", "About me?")}
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
            aria-current={
              location.pathname.startsWith("/projet") ? "page" : undefined
            }
          >
            <div
              className={`item ${
                location.pathname.startsWith("/projet") ? "active" : ""
              }`}
            >
              {t("Projets", "Projects")}
            </div>
          </Link>
        </nav>

        <nav
          className="mobile-menu"
          aria-label={t("Navigation principale", "Main navigation")}
        >
          <div className="pages">
            <Link
              to="/"
              aria-current={location.pathname === "/" ? "page" : undefined}
            >
              <div
                className={`btn ${location.pathname === "/" ? "active" : ""}`}
              >
                <img src={Home} alt={t("Accueil", "Home")} />
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
                <img src={Me} alt={t("À propos", "About me")} />
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
              aria-current={
                location.pathname.startsWith("/projet") ? "page" : undefined
              }
            >
              <div
                className={`btn ${
                  location.pathname.startsWith("/projet") ? "active" : ""
                }`}
              >
                <img src={Project} alt={t("Projets", "Projects")} />
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
              aria-label={t("Ouvrir le CV", "Open my resume")}
              onClick={() => window.open("/CV2026_ColinLALLAURET.pdf")}
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

        <LangSwitcher />
      </header>
    </>
  );
};

export default Header;
