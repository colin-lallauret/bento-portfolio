import React from "react";

import MyPicture from "../Assets/Images/photo.png";
import LinkedIn from "../Assets/Images/linkedin.svg";
import Github from "../Assets/Images/github.svg";
import Mail from "../Assets/Images/mail.svg";
import Cv from "../Assets/Images/cv.svg";

function About() {
  return (
    <div className="container about" id="about">
      <h1 className="visually-hidden">Colin Lallauret — UI/UX Designer</h1>
      <div className="title">
        <span>BESOINS D’UN PEU PLUS D’INFORMATION SUR MOI ?</span>
        <p>À PROPOS</p>
      </div>
      <div className="about-wrapper">
        <div className="picture-wrapper">
          <div className="availability">
            <div className="text-pulse">
              <div className="dot"></div>
              <span>À la recherche d’un stage</span>
            </div>
            <a href="https://cal.com/colin-lallauret" target="_blank">
              Prendre contact
            </a>
          </div>
          <div className="picture">
            <img src={MyPicture} alt="picture" />
          </div>
        </div>
        <div className="text">
          <div className="paragraphs">
            <p>
              <em>Touche-à-tout assumé.</em> Grandi avec le web, stimulé par
              la nouveauté.
            </p>
            <p>
              Certains se consacrent à une seule passion toute leur vie.
              Moi, je fonctionne par <em>vagues d’hyperfocus</em> : un sujet
              m’intrigue, j’épluche des dizaines de vidéos, de podcasts et
              de comparatifs, j’expérimente, j’assimile tout à 200 %… et je
              repars avec une corde de plus à mon arc.
            </p>
            <p>
              Que ce soit le <em>café</em>, l’<em>IA</em>, le{" "}
              <em>sport</em>, les <em>drones FPV</em>, les{" "}
              <em>jeux vidéo</em>, la <em>nutrition</em>... : peu importe le
              terrain de jeu, j’ai besoin de mettre les mains dedans pour
              comprendre.
            </p>
            <p className="quote">
              « Ne soyez pas quelqu’un qui sait tout, soyez quelqu’un qui
              apprend tout. » - Satya Nadella
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
              <a href="/CV2026_ColinLALLAURET.pdf" download>
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
