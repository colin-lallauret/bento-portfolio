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
    <header>
      <Link to="/" className="logo-wrapper">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
      </Link>
      <div className="menu">
        <Link to="/">
          <div className={`item ${location.pathname === "/" ? "active" : ""}`}>
            Tous
          </div>
        </Link>
        <Link to="/moi">
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
        <Link to="/projets">
          <div
            className={`item ${
              location.pathname === "/projets" ? "active" : ""
            }`}
          >
            Projets
          </div>
        </Link>
      </div>

      <div className="mobile-menu">
        <div className="pages">
          <Link to="/">
            <div className={`btn ${location.pathname === "/" ? "active" : ""}`}>
              <img src={Home} alt="Home" />
            </div>
          </Link>
          <Link to="/moi">
            <div
              className={`btn ${location.pathname === "/moi" ? "active" : ""}`}
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
          <Link to="/projets">
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
            onClick={() => window.open("/CV2025_ColinLALLAURET.pdf")}
          >
            <img src={CV} alt="Cv" />
          </button>
          <a className="btn" href="https://www.linkedin.com/in/colinlallauret/">
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
        </div>
      </div>

      <div className="empty"></div>
    </header>
  );
};

export default Header;
