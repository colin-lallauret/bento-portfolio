import React from "react";

function ProjectUIUX() {
  return (
    <>
      <div className="project-item left">
        <img src="https://picsum.photos/100" alt="Project 1" />
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
        <img src="https://picsum.photos/100" alt="Project 2" />
      </div>
      <div className="separator"></div>

      <div className="project-item left">
        <img src="https://picsum.photos/100" alt="Project 3" />
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
