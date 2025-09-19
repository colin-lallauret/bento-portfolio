import React from "react";
import IosPicture from "../Assets/Images/ios_picture.webp";
import { Link } from "react-router-dom";

function KnowMore() {
  const getAvailability = () => {
    const currentHour = new Date().getHours();
    return currentHour >= 9 && currentHour < 17
      ? "Disponible maintenant"
      : "Indisponible actuellement (9h - 17h)";
  };

  return (
    <div className="know-more internal-link">
      <div className="ios-picture">
        <img
          src={IosPicture}
          alt="ios picture"
          loading="lazy"
          height="104"
          width="104"
        />
        <h2>
          Colin <br />
          LALLAURET
        </h2>
      </div>
      <p className="text">
        Hello, moi c’est Colin. Actuellement ? <br />
        Je suis étudiant en <u>Master Création Numérique</u> <i>(1er année)</i>{" "}
        parcours DEDI . <Link to="/moi">En savoir plus</Link>
      </p>
      <div className="availability">
        <div
          className={`dot ${
            getAvailability() === "Indisponible actuellement (9h - 17h)"
              ? "red"
              : ""
          }`}
        ></div>
        <span>{getAvailability()}</span>
      </div>
    </div>
  );
}

export default KnowMore;
