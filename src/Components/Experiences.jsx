import React from "react";

function Experiences() {
  return (
    <div className="experiences internal-link">
      <div className="dev-web">
        <div className="up-title">
          <span>2 ANS</span>
          <p>EXPÉRIENCE</p>
        </div>

        <div className="exp">
          <div className="title">
            <p>Développeur web</p>
            <span>(en alternance)</span>
          </div>

          <div className="company">
            <p>Groupe Vidon</p>
            <span>2023 - 2025</span>
          </div>
        </div>
      </div>

      <div className="separator"></div>

      <div className="summer-job">
        <div className="up-title">
          <span>LE MONDE PROFESSIONNEL</span>
          <p>JOBS D’ÉTÉ</p>
        </div>

        <div className="exp">
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
        </div>

        <div className="exp">
          <div className="title">
            <p>Vendeur / Livreur en porte à porte</p>
          </div>

          <div className="company">
            <p>SARL Deligel</p>
            <span>juin - août 2022</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
