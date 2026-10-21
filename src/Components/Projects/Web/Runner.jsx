import React from "react";
import Header from "../../Regions/Header";
import { Link } from "react-router-dom";
import transition from "../../../transition";

import Image1 from "../../../Assets/Images/Full_img/run/1.png";
import Image2 from "../../../Assets/Images/Full_img/run/2.png";
import Image3 from "../../../Assets/Images/Full_img/run/3.png";

import Reactt from "../../../Assets/Images/Icons/Logiciels/react.png";
import Vite from "../../../Assets/Images/Icons/Logiciels/vite.png";

import Arrow from "../../../Assets/Images/arrow.svg";
import { useLang, usePageTitle } from "../../../i18n";

function Runner() {
  const { t } = useLang();
  usePageTitle(
    "Runner (projet) — Colin LALLAURET",
    "Runner (project) — Colin LALLAURET",
  );

  return (
    <>
      <Header />
      <main className="project">
        <div className="title-wrapper">
          <div className="title">
            <h1>Runner</h1>
            <p>#Web</p>
          </div>
          <div className="tags">
            <p className="tag">Game</p>
            <p className="tag">React</p>
            <p className="tag">{t("Mini-Projet", "Mini-project")}</p>
          </div>
        </div>
        <div className="img-wrapper">
          <img src={Image1} alt="rdm" />
          <div className="img-group">
            <img src={Image2} alt="rdm" />
            <img src={Image3} alt="rdm" />
          </div>
        </div>
        <div className="content-wrapper">
          <div className="text">
            <h3>Runner</h3>
            <p>
              {t(
                <>
                  Développement d’un jeu de type Runner en React + Vite.
                  L’objectif était de travailler sur les mécaniques
                  fondamentales : saut, détection des collisions, système de
                  points, augmentation progressive de la difficulté et relance
                  rapide du jeu.
                </>,
                <>
                  Developing a runner game in React + Vite. The goal was to work
                  on the core mechanics: jumping, collision detection, a scoring
                  system, gradually increasing difficulty and quick restarts.
                </>,
              )}
            </p>
            <div>
              <h4>{t("Déroulé du projet", "How it went")}</h4>
              <p>
                {t(
                  <>
                    <b>Compréhension de l&apos;environnement :</b> Installation
                    du projet, analyse des fichiers et assets fournis.
                  </>,
                  <>
                    <b>Understanding the environment:</b> Setting up the project
                    and going through the provided files and assets.
                  </>,
                )}
              </p>
              <p>
                {t(
                  <>
                    <b>Développement :</b> Implémentation des inputs pour le
                    saut, détection des collisions, gestion du game over,
                    système de score et sauvegarde du meilleur score.
                  </>,
                  <>
                    <b>Development:</b> Implementing jump inputs, collision
                    detection, game over handling, the scoring system and saving
                    the high score.
                  </>,
                )}
              </p>
              <p>
                {t(
                  <>
                    <b>Optimisation :</b> Augmentation de la difficulté
                    dynamique en fonction du temps de jeu (vitesse accrue et
                    apparition plus fréquente d’obstacles).
                  </>,
                  <>
                    <b>Optimisation:</b> Dynamic difficulty that ramps up with
                    play time (higher speed and more frequent obstacles).
                  </>,
                )}
              </p>
            </div>
            <div>
              <h4>{t("Acquis", "Skills gained")}</h4>
              <p>
                {t(
                  <>
                    <b>Hard skills :</b> Développement en React + Vite, Gestion
                    des événements et des collisions, Optimisation et
                    équilibrage de la difficulté
                  </>,
                  <>
                    <b>Hard skills:</b> React + Vite development, Event and
                    collision handling, Difficulty tuning and balancing
                  </>,
                )}
              </p>
              <p>
                {t(
                  <>
                    <b>Soft skills :</b> Gestion du stress et de la pression,
                    Prise de décision rapide, Débogage et amélioration continue
                  </>,
                  <>
                    <b>Soft skills:</b> Handling stress and pressure, Quick
                    decision-making, Debugging and continuous improvement
                  </>,
                )}
              </p>
            </div>
          </div>
          <div className="info-wrapper">
            <div className="used">
              <img src={Reactt} alt="rdm" />
              <img src={Vite} alt="rdm" />
            </div>
          </div>
        </div>
        <div className="btns-wrapper">
          <Link to="/projet/web/portfolio" className="btn-next-project">
            <img className="icon-adaptive" src={Arrow} alt="" />
            {t("Projet précédent", "Previous project")} (Portfolio)
          </Link>
          <Link to="/projet/web/webdoc-mmi" className="btn-next-project">
            <img className="icon-adaptive" src={Arrow} alt="" />
            {t("Projet suivant", "Next project")} (Webdoc MMI)
          </Link>
        </div>
      </main>
    </>
  );
}

export default transition(Runner);
