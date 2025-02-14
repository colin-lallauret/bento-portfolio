import React from "react";

import Webdoc from "../Assets/Images/Projects/Webdoc.png";
import Runner from "../Assets/Images/Projects/Runner.png";
import Portfolio from "../Assets/Images/Projects/Portfolio.png";

function ProjectWeb() {
  return (
    <>
      <div className="project-item left">
        <img src={Webdoc} alt="Webdoc MMI" />
        <div className="project-text">
          <h5>Webdoc MMI</h5>
          <p>
            Le développement du site web de la formation MMI à Lannion, sous la
            forme d’un « Webdoc », une réalisation faite en équipe.
          </p>
          <div className="tags">
            <span>From scratch</span>
            <span>PHP</span>
            <span>Équipe</span>
          </div>
        </div>
      </div>
      <div className="separator"></div>
      <div className="project-item right">
        <div className="project-text">
          <h5>Runner</h5>
          <p>
            La conception technique d’un jeu de type Runner, où esquiver les
            obstacles est l’objectif pour accumuler le plus de points.
          </p>
          <div className="tags">
            <span>Game</span>
            <span>React</span>
            <span>Mini-Projet</span>
          </div>
        </div>
        <img src={Runner} alt="Runner" />
      </div>
      <div className="separator"></div>

      <div className="project-item left">
        <img src={Portfolio} alt="Portfolio" />
        <div className="project-text">
          <h5>Portfolio</h5>
          <p>
            La réalisation de mon nouveau portfolio, en passant du développement
            à la rédaction de contenu jusqu'à sa mise en ligne.
          </p>
          <div className="tags">
            <span>React</span>
            <span>Vercel</span>
            <span>Bento</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectWeb;
