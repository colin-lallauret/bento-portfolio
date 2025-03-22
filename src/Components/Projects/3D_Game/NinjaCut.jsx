import React, { useEffect } from "react";
import Header from "../../Regions/Header";
import { Link } from "react-router-dom";
import transition from "../../../transition";
import FavIcon from "../../../Assets/Favicon/favicon.ico";
import FavIconOutline from "../../../Assets/Favicon/outlinefavicon.ico";

import Image1 from "../../../Assets/Images/Full_img/ninjacut/1.png";
import Image2 from "../../../Assets/Images/Full_img/ninjacut/2.png";
import Image3 from "../../../Assets/Images/Full_img/ninjacut/3.png";

import Unity from "../../../Assets/Images/Icons/Logiciels/unity.png";

import Arrow from "../../../Assets/Images/arrow.svg";

function NinjaCut() {
  useEffect(() => {
    document.title = "NinjaCut (projet) — Colin LALLAURET";

    const handleVisibilityChange = () => {
      const favicon = document.querySelector("link[rel='icon']");
      if (document.visibilityState === "hidden") {
        document.title = "Où allez-vous ? 💻✨";
        favicon.href = FavIconOutline;
      } else {
        document.title = "NinjaCut (projet) — Colin LALLAURET";
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
            <h1>NinjaCut</h1>
            <p>#3D / Game</p>
          </div>
          <div className="tags">
            <p className="tag">Game</p>
            <p className="tag">Unity</p>
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
            <h3>NinjaCut</h3>
            <p>
              Inspiré du célèbre jeu mobile &quot;Fruit Ninja&quot;, l’objectif
              était de créer une version similaire dans Unity. Ce projet visait
              à comprendre la mécanique du jeu et à la transposer en un jeu
              interactif, avec différents niveaux de difficulté et un système de
              score.
            </p>
            <div>
              <h4>Déroulé du projet</h4>
              <p>
                <b>Compréhension de l&apos;environnement :</b> Analyse des
                assets fournis pour comprendre la logique du jeu.
              </p>
              <p>
                <b>Développement :</b> Création de l&apos;écran de démarrage
                avec 3 niveaux de difficulté, gestion des trajectoires
                aléatoires des fruits, détection des bonus/malus en fonction des
                objets touchés. Mise en place de l&apos;écran de game over avec
                possibilité de relance rapide et gestion du système de score.
              </p>
              <p>
                <b>Tests & fix :</b> Tests des différents niveaux de difficulté
                et correction des problèmes liés à la trajectoire aléatoire des
                gameobjects.
              </p>
            </div>
            <div>
              <h4>Acquis</h4>
              <p>
                <b>Hard skills :</b> Développement de jeux vidéo, programmation
                en Unity, gestion des mécaniques de gameplay.
              </p>
              <p>
                <b>Soft skills :</b> Résolution de problèmes, gestion de projet,
                réactivité face aux imprévus.
              </p>
            </div>
          </div>
          <div className="info-wrapper">
            <div className="used">
              <img src={Unity} alt="rdm" />
            </div>
          </div>
        </div>
        <div className="btns-wrapper">
          <Link to="/projet/3d-game/minecraft-vr" className="btn-next-project">
            <img src={Arrow} alt="arrow" />
            Projet précédent (Minecraft VR)
          </Link>
          <Link to="/projet/ui-ux/bleep" className="btn-next-project">
            <img src={Arrow} alt="arrow" />
            Projet suivant (Bleep)
          </Link>
        </div>
      </main>
    </>
  );
}

export default transition(NinjaCut);
