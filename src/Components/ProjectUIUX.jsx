import React from "react";

import CnT from "../Assets/Images/Projects/CnT.png";
import Bleep from "../Assets/Images/Projects/Bleep.png";
import Kult from "../Assets/Images/Projects/Kult.png";

function ProjectUIUX() {
  return (
    <>
      <div className="project-item left">
        <img src={CnT} alt="C&T" />
        <div className="project-text">
          <h5>C&T</h5>
          <p>
            La création d’une page type d’un site réalisant des articles en
            ligne et la rédaction de son contenu portant sur le Search Engine
            Optimization.
          </p>
          <div className="tags">
            <span>SEO</span>
            <span>Figma</span>
            <span>Article</span>
          </div>
        </div>
      </div>
      <div className="separator"></div>
      <div className="project-item right">
        <div className="project-text">
          <h5>BLEEP.</h5>
          <p>
            La simplification et l’accessibilité mises en oeuvre pour réaliser
            une application « mailbox » sécurisée sur la blockchain.
          </p>
          <div className="tags">
            <span>Mobile</span>
            <span>Email</span>
            <span>Figma</span>
          </div>
        </div>
        <img src={Bleep} alt="Bleep" />
      </div>
      <div className="separator"></div>

      <div className="project-item left">
        <img src={Kult} alt="Kult" />
        <div className="project-text">
          <h5>KULT’</h5>
          <p>
            Le design d’une application pour faciliter les sorties culturelles
            dans le Trégor.
          </p>
          <div className="tags">
            <span>Réservation</span>
            <span>Figma</span>
            <span>Mobile</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectUIUX;
