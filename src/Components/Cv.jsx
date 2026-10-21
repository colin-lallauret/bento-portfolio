import React from "react";

import Download from "../Assets/Images/download.png";
import Visuel from "../Assets/Images/visuel.svg";
import { useLang } from "../i18n";

function Cv() {
  const { t } = useLang();
  return (
    <div className="cv">
      <div className="cv-content">
        <span>{new Date().getFullYear()} CV</span>
        <p>RESUME</p>
      </div>
      <div className="cv-btns">
        <a href="/CV2026_ColinLALLAURET.pdf" download>
          <img
            className="icon-adaptive"
            src={Download}
            alt={t("Télécharger le CV", "Download my resume")}
            height="28"
            width="28"
          />
        </a>
        <button
          onClick={() => window.open("/CV2026_ColinLALLAURET.pdf", "_blank")}
        >
          <img
            className="icon-adaptive"
            src={Visuel}
            alt={t("Voir le CV", "View my resume")}
          />
        </button>
      </div>
    </div>
  );
}

export default Cv;
