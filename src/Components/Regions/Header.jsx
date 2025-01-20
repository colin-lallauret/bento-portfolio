import React from "react";
import { Link, useLocation } from "react-router-dom";

import Logo from "../../Assets/Images/Logo/logo-black.svg";

const Header = () => {
  const location = useLocation();

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
            Moi ?
          </div>
        </Link>
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
      <div className="empty"></div>
    </header>
  );
};

export default Header;
