import React, { useEffect } from "react";
import Header from "../../Regions/Header";
import { Link } from "react-router-dom";
import transition from "../../../transition";
import FavIcon from "../../../Assets/Favicon/favicon.ico";
import FavIconOutline from "../../../Assets/Favicon/outlinefavicon.ico";

import Image1 from "../../../Assets/Images/Full_img/run/1.png";
import Image2 from "../../../Assets/Images/Full_img/run/2.png";
import Image3 from "../../../Assets/Images/Full_img/run/3.png";

import Reactt from "../../../Assets/Images/Icons/Logiciels/react.png";
import Vite from "../../../Assets/Images/Icons/Logiciels/vite.png";

import Arrow from "../../../Assets/Images/arrow.svg";

function Runner() {
  useEffect(() => {
    document.title = "Runner (projet) — Colin LALLAURET";

    const handleVisibilityChange = () => {
      const favicon = document.querySelector("link[rel='icon']");
      if (document.visibilityState === "hidden") {
        document.title = "Où allez-vous ? 💻✨";
        favicon.href = FavIconOutline;
      } else {
        document.title = "Runner (projet) — Colin LALLAURET";
        favicon.href = FavIcon;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

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
            <p className="tag">Mini-Projet</p>
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
              Développement d’un jeu de type Runner en React + Vite. L’objectif
              était de travailler sur les mécaniques fondamentales : saut,
              détection des collisions, système de points, augmentation
              progressive de la difficulté et relance rapide du jeu.
            </p>
            <div>
              <h4>Déroulé du projet</h4>
              <p>
                <b>Compréhension de l&apos;environnement :</b> Installation du
                projet, analyse des fichiers et assets fournis.
              </p>
              <p>
                <b>Développement :</b> Implémentation des inputs pour le saut,
                détection des collisions, gestion du game over, système de score
                et sauvegarde du meilleur score.
              </p>
              <p>
                <b>Optimisation :</b> Augmentation de la difficulté dynamique en
                fonction du temps de jeu (vitesse accrue et apparition plus
                fréquente d’obstacles).
              </p>
            </div>
            <div>
              <h4>Acquis</h4>
              <p>
                <b>Hard skill :</b> Développement en React + Vite, Gestion des
                événements et des collisions, Optimisation et équilibrage de la
                difficulté
              </p>
              <p>
                <b>Soft skills :</b> Gestion du stress et de la pression, Prise
                de décision rapide, Débogage et amélioration continue
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
            <img src={Arrow} alt="arrow" />
            Projet précédent (Portfolio)
          </Link>
          <Link to="/projet/web/webdoc-mmi" className="btn-next-project">
            <img src={Arrow} alt="arrow" />
            Projet suivant (Webdoc MMI)
          </Link>
        </div>
      </main>
    </>
  );
}

export default transition(Runner);
