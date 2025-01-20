import React from "react";

import MyPicture from "../Assets/Images/mypicture.png";
import LinkedIn from "../Assets/Images/linkedin.svg";
import Github from "../Assets/Images/github.svg";
import Mail from "../Assets/Images/mail.svg";
import Cv from "../Assets/Images/cv.svg";

function About() {
  return (
    <div className="container about" id="about">
      <div className="title">
        <span>BESOINS D’UN PEU PLUS D’INFORMATION SUR MOI ?</span>
        <p>À PROPOS</p>
      </div>
      <div className="about-wrapper">
        <div className="picture-wrapper">
          <div className="availability">
            <div className="text-pulse">
              <div className="dot"></div>
              <span>Disponible</span>
            </div>
            <a href="#">Prendre contact</a>
          </div>
          <div className="picture">
            <img src={MyPicture} alt="picture" />
          </div>
        </div>
        <div className="text">
          <div className="paragraphs">
            <p>
              Hello, moi c’est <em>Colin</em> j’ai 21 ans et je suis étudiant en
              troisième année d’un <em>B</em>achelor <em>U</em>
              niversitaire <em>T</em>echnologique en <em>M</em>étiers du{" "}
              <em>M</em>ultimédia et de l’<em>I</em>nternet que je réalise en
              alternance en tant que développeur web.
            </p>
            <p>
              <em>Créatif, rigoureux et organisé.</em> Je suis actuellement à la
              recherche d’une école (BAC+5) qui sera capable de m’accompagner
              aussi bien <em>humainement</em> que <em>techniquement</em> pour ma
              dernière étape avant le monde professionnel.
            </p>
          </div>
          <div className="btns">
            <div className="external">
              <a href="https://www.linkedin.com/in/colinlallauret/">
                <img src={LinkedIn} alt="LinkedIn" />
              </a>
              <a href="https://github.com/colin-lallauret">
                <img src={Github} alt="Github" />
              </a>
              <a href="mailto:colinlallauret1@gmail.com">
                <img src={Mail} alt="Mail" />
              </a>
              <a href="/CV2025_ColinLALLAURET.pdf" download>
                <img src={Cv} alt="Cv" />
              </a>
            </div>
            <div className="internal">
              <a href="#studies">Formations</a>
              <a href="#experiences">Expériences</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
