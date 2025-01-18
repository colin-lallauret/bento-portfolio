import React from "react";

import Html from "../Assets/Images/Software/html.svg";
import Css from "../Assets/Images/Software/css.svg";
import JavaScript from "../Assets/Images/Software/javascript.svg";
import Php from "../Assets/Images/Software/php.svg";
import Twig from "../Assets/Images/Software/twig.svg";
import Scss from "../Assets/Images/Software/scss.svg";
import ReactLogo from "../Assets/Images/Software/react.svg";
import Symfony from "../Assets/Images/Software/symfony.svg";

function Software() {
  return (
    <div className="software">
      <div className="logo-slider">
        <div className="img-wrapper">
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              <div className="img-container">
                <img src={Html} alt="Html" />
              </div>
              <div className="img-container">
                <img src={Css} alt="Css" />
              </div>
              <div className="img-container">
                <img src={JavaScript} alt="JavaScript" />
              </div>
              <div className="img-container">
                <img src={Php} alt="Php" />
              </div>
              <div className="img-container">
                <img src={Twig} alt="Twig" />
              </div>
              <div className="img-container">
                <img src={Scss} alt="Scss" />
              </div>
              <div className="img-container">
                <img src={ReactLogo} alt="React" />
              </div>
              <div className="img-container">
                <img src={Symfony} alt="Symfony" />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="software-text">
        <span>J'UTILISE ACTUELLEMENT</span>
        <p>ET J'❤️ ÇA</p>
      </div>
    </div>
  );
}

export default Software;
