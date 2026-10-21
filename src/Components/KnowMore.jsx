import React from "react";
import ProfilePicture from "../Assets/Images/profile_picture.webp";
import { Link } from "react-router-dom";
import { useLang } from "../i18n";

function KnowMore() {
  const { t } = useLang();
  return (
    <div className="know-more internal-link">
      <div className="ios-picture">
        <img
          src={ProfilePicture}
          alt={t("Photo de Colin Lallauret", "Photo of Colin Lallauret")}
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
        {t(
          <>
            Hello, moi c’est Colin. Actuellement ? <br />
            Je suis étudiant en <u>Master Création Numérique</u> <i>(M2)</i>{" "}
            parcours DEDI . <Link to="/moi">En savoir plus</Link>
          </>,
          <>
            Hi, I’m Colin. Right now? <br />
            I’m a student in a <u>Master’s in Digital Creation</u> <i>(M2)</i>,
            DEDI track. <Link to="/moi">Learn more</Link>
          </>,
        )}
      </p>
      <div className="availability">
        <div className="dot"></div>
        <span>
          {t("À la recherche d’un stage", "Looking for an internship")}
        </span>
      </div>
    </div>
  );
}

export default KnowMore;
