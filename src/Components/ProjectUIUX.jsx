import React from "react";
import { Link } from "react-router-dom";

import CnT from "../Assets/Images/Projects/CnT.webp";
import Bleep from "../Assets/Images/Projects/Bleep.webp";
import Kult from "../Assets/Images/Projects/Kult.webp";

function ProjectUIUX() {
  return (
    <>
      <Link to="/projet/ui-ux/cnt" className="project-item left">
        <img src={CnT} alt="C&T" loading="lazy" width="252" height="150" />
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
      </Link>
      <div className="separator"></div>
      <Link to="/projet/ui-ux/bleep" className="project-item right">
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
        <img src={Bleep} alt="Bleep" loading="lazy" width="252" height="150" />
      </Link>
      <div className="separator"></div>

      <Link to="/projet/ui-ux/kult" className="project-item left">
        <img src={Kult} alt="Kult" loading="lazy" width="252" height="150" />
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
      </Link>
    </>
  );
}

export default ProjectUIUX;
