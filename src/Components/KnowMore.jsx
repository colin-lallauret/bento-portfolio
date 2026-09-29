import React from "react";
import IosPicture from "../Assets/Images/ios_picture.webp";
import { Link } from "react-router-dom";

function KnowMore() {
  return (
    <div className="know-more internal-link">
      <div className="ios-picture">
        <img
          src={IosPicture}
          alt="Avatar de Colin Lallauret"
          loading="lazy"
          height="104"
          width="104"
        />
        <h1>
          Colin <br />
          LALLAURET
        </h1>
      </div>
      <p className="text">
        Hello, moi c’est Colin. Actuellement ? <br />
        Je suis étudiant en <u>Master Création Numérique</u> <i>(M2)</i>{" "}
        parcours DEDI . <Link to="/moi">En savoir plus</Link>
      </p>
      <div className="availability">
        <div className="dot"></div>
        <span>À la recherche d’un stage</span>
      </div>
    </div>
  );
}

export default KnowMore;
