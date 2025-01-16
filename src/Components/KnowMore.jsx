import React from "react";
import IosPicture from "../Assets/Images/ios_picture.png";

function KnowMore() {
  return (
    <div className="know-more internal-link">
      <div className="ios-picture">
        <img src={IosPicture} alt="ios picture" />
        <h2>
          Colin <br />
          LALLAURET
        </h2>
      </div>
      <p className="text">
        Hello, moi c’est Colin. Actuellement ? <br />
        Je suis étudiant en <u>BUT MMI</u> <i>(3ème année)</i> et alternant en
        développement web. <em>En savoir plus</em>
      </p>
      <div className="availability">
        <div className="dot"></div>
        <span>Disponible maintenant</span>
      </div>
    </div>
  );
}

export default KnowMore;
