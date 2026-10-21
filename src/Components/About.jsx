import React from "react";

import MyPicture from "../Assets/Images/photo.png";
import LinkedIn from "../Assets/Images/linkedin.svg";
import Github from "../Assets/Images/github.svg";
import Mail from "../Assets/Images/mail.svg";
import Cv from "../Assets/Images/cv.svg";
import { useLang } from "../i18n";

function About() {
  const { t } = useLang();
  return (
    <div className="container about" id="about">
      <h1 className="visually-hidden">Colin Lallauret — UI/UX Designer</h1>
      <div className="title">
        <span>
          {t(
            <>BESOINS D’UN PEU PLUS D’INFORMATION SUR MOI ?</>,
            <>WANT TO KNOW A BIT MORE ABOUT ME?</>,
          )}
        </span>
        <p>{t("À PROPOS", "ABOUT ME")}</p>
      </div>
      <div className="about-wrapper">
        <div className="picture-wrapper">
          <div className="availability">
            <div className="text-pulse">
              <div className="dot"></div>
              <span>
                {t("À la recherche d’un stage", "Looking for an internship")}
              </span>
            </div>
            <a href="https://cal.com/colin-lallauret" target="_blank">
              {t("Prendre contact", "Get in touch")}
            </a>
          </div>
          <div className="picture">
            <img
              src={MyPicture}
              alt={t("Photo de Colin Lallauret", "Photo of Colin Lallauret")}
            />
          </div>
        </div>
        <div className="text">
          <div className="paragraphs">
            <p>
              {t(
                <>
                  <em>Touche-à-tout assumé.</em> Grandi avec le web, stimulé par
                  la nouveauté.
                </>,
                <>
                  <em>Proud jack of all trades.</em> Grew up with the web,
                  driven by novelty.
                </>,
              )}
            </p>
            <p>
              {t(
                <>
                  Certains se consacrent à une seule passion toute leur vie.
                  Moi, je fonctionne par <em>vagues d’hyperfocus</em> : un sujet
                  m’intrigue, j’épluche des dizaines de vidéos, de podcasts et
                  de comparatifs, j’expérimente, j’assimile tout à 200 %… et je
                  repars avec une corde de plus à mon arc.
                </>,
                <>
                  Some people devote their whole life to a single passion. I
                  work in <em>waves of hyperfocus</em>: a topic grabs me, I dig
                  through dozens of videos, podcasts and comparisons, I
                  experiment, I take it all in at 200%… and I come out with one
                  more string to my bow.
                </>,
              )}
            </p>
            <p>
              {t(
                <>
                  Que ce soit le <em>café</em>, l’<em>IA</em>, le <em>sport</em>
                  , les <em>drones FPV</em>, les <em>jeux vidéo</em>, la{" "}
                  <em>nutrition</em>... : peu importe le terrain de jeu, j’ai
                  besoin de mettre les mains dedans pour comprendre.
                </>,
                <>
                  Whether it’s <em>coffee</em>, <em>AI</em>, <em>sport</em>,{" "}
                  <em>FPV drones</em>, <em>video games</em> or{" "}
                  <em>nutrition</em>... whatever the playground, I need to get
                  my hands dirty to understand.
                </>,
              )}
            </p>
            <p className="quote">
              {t(
                <>
                  « Ne soyez pas quelqu’un qui sait tout, soyez quelqu’un qui
                  apprend tout. » - Satya Nadella
                </>,
                <>
                  “Don’t be a know-it-all, be a learn-it-all.” - Satya Nadella
                </>,
              )}
            </p>
          </div>
          <div className="btns">
            <div className="external">
              <a href="https://www.linkedin.com/in/colinlallauret/">
                <img className="icon-adaptive" src={LinkedIn} alt="LinkedIn" />
              </a>
              <a href="https://github.com/colin-lallauret">
                <img className="icon-adaptive" src={Github} alt="Github" />
              </a>
              <a href="mailto:colinlallauret1@gmail.com">
                <img className="icon-adaptive" src={Mail} alt="Mail" />
              </a>
              <a href="/CV2026_ColinLALLAURET.pdf" download>
                <img
                  className="icon-adaptive"
                  src={Cv}
                  alt={t("Télécharger le CV", "Download my resume")}
                />
              </a>
            </div>
            <div className="internal">
              <a href="#studies">{t("Formations", "Education")}</a>
              <a href="#experiences">{t("Expériences", "Experience")}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
