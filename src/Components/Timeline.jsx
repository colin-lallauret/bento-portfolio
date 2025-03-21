import React from "react";

import { Link } from "react-router-dom";

function Timeline() {
  return (
    <div className="timeline">
      <section>
        <article className="now">
          <Link to="/moi#but-mmi">
            <div className="content">
              <h3>
                BUT MMI<em>**</em>
              </h3>
              <p>Parcours développement web et dispositifs interactifs</p>
              <p>
                <span>Développement web</span>
                <span>Audiovisuel</span>
                <span>Communication</span>
              </p>
            </div>
            <div className="time">
              <h4>
                2025
                <br />
                —
                <br />
                2022
              </h4>
            </div>
          </Link>
        </article>
        <article>
          <Link to="/moi#but-info">
            <div className="content">
              <h3>
                BUT<em>*</em> Informatique
              </h3>
              <p>
                <span>Développement web</span>
                <span>Algorithmie</span>
                <span>Programmation</span>
              </p>
            </div>
            <div className="time">
              <h4>2022</h4>
            </div>
          </Link>
        </article>
        <article>
          <Link to="/moi#bac">
            <div className="content">
              <h3>Baccalauréat série générale</h3>
              <p>
                <span>Numérique et Sciences Informatique</span>
                <span>Sciences Économiques et Sociales</span>
              </p>
            </div>
            <div className="time">
              <h4>2021</h4>
            </div>
          </Link>
        </article>
        <div style={{ clear: "both" }}></div>
      </section>
    </div>
  );
}

export default Timeline;
