import React from "react";
import { Link } from "react-router-dom";

function Experiences() {
  return (
    <div className="experiences internal-link">
      <div className="dev-web">
        <div className="up-title">
          <span>2 ANS</span>
          <p>EXPÉRIENCE</p>
        </div>

        <Link to="/moi#stage-rennes" className="exp">
          <div className="title">
            <p>UI/UX Designer</p>
            <span>(en Stage)</span>
          </div>

          <div className="company">
            <p>Université de Rennes</p>
            <span>juillet 2025</span>
          </div>
        </Link>

        <Link to="/moi#groupe-vidon" className="exp">
          <div className="title">
            <p>Développeur web</p>
            <span>(en alternance)</span>
          </div>

          <div className="company">
            <p>Groupe Vidon</p>
            <span>2023 - 2025</span>
          </div>
        </Link>
      </div>

      <div className="separator"></div>

      <div className="summer-job">
        <div className="up-title">
          <span>LE MONDE PROFESSIONNEL</span>
          <p>JOBS D’ÉTÉ</p>
        </div>

        <Link to="/moi#vieilles-charrues" className="exp">
          <div className="title">
            <p>Agent de propreté événementiel</p>
          </div>

          <div className="company">
            <p>
              Association <br />
              <i>« Les Vieilles Charrues »</i>
            </p>
            <span>juillet 2023</span>
          </div>
        </Link>

        <Link to="/moi#deligel" className="exp">
          <div className="title">
            <p>Vendeur / Livreur en porte à porte</p>
          </div>

          <div className="company">
            <p>SARL Deligel</p>
            <span>juin - août 2022</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Experiences;
