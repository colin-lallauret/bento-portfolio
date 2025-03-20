import React from "react";

import Download from "../Assets/Images/download.png";
import Visuel from "../Assets/Images/visuel.svg";

function Cv() {
  return (
    <div className="cv">
      <div className="cv-content">
        <span>2025 CV</span>
        <p>RESUME</p>
      </div>
      <div className="cv-btns">
        <a href="/CV2025_ColinLALLAURET.pdf" download>
          <img src={Download} alt="download" height="28" width="28" />
        </a>
        <button
          onClick={() => window.open("/CV2025_ColinLALLAURET.pdf", "_blank")}
        >
          <img src={Visuel} alt="visuel" />
        </button>
      </div>
    </div>
  );
}

export default Cv;
