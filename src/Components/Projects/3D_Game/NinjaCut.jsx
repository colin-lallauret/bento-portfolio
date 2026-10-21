import React from "react";
import Header from "../../Regions/Header";
import { Link } from "react-router-dom";
import transition from "../../../transition";

import Image1 from "../../../Assets/Images/Full_img/ninjacut/1.png";
import Image2 from "../../../Assets/Images/Full_img/ninjacut/2.png";
import Image3 from "../../../Assets/Images/Full_img/ninjacut/3.png";

import Unity from "../../../Assets/Images/Icons/Logiciels/unity.png";

import Arrow from "../../../Assets/Images/arrow.svg";
import { useLang, usePageTitle } from "../../../i18n";

function NinjaCut() {
  const { t } = useLang();
  usePageTitle(
    "NinjaCut (projet) — Colin LALLAURET",
    "NinjaCut (project) — Colin LALLAURET",
  );

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
            <h3>NinjaCut</h3>
            <p>
              {t(
                <>
                  Inspiré du célèbre jeu mobile &quot;Fruit Ninja&quot;,
                  l’objectif était de créer une version similaire dans Unity. Ce
                  projet visait à comprendre la mécanique du jeu et à la
                  transposer en un jeu interactif, avec différents niveaux de
                  difficulté et un système de score.
                </>,
                <>
                  Inspired by the famous mobile game &quot;Fruit Ninja&quot;,
                  the goal was to build a similar version in Unity. The project
                  aimed to understand the game’s mechanics and turn them into an
                  interactive game with several difficulty levels and a scoring
                  system.
                </>,
              )}
            </p>
            <div>
              <h4>{t("Déroulé du projet", "How it went")}</h4>
              <p>
                {t(
                  <>
                    <b>Compréhension de l&apos;environnement :</b> Analyse des
                    assets fournis pour comprendre la logique du jeu.
                  </>,
                  <>
                    <b>Understanding the environment:</b> Analysing the provided
                    assets to understand the game logic.
                  </>,
                )}
              </p>
              <p>
                {t(
                  <>
                    <b>Développement :</b> Création de l&apos;écran de démarrage
                    avec 3 niveaux de difficulté, gestion des trajectoires
                    aléatoires des fruits, détection des bonus/malus en fonction
                    des objets touchés. Mise en place de l&apos;écran de game
                    over avec possibilité de relance rapide et gestion du
                    système de score.
                  </>,
                  <>
                    <b>Development:</b> Creating the start screen with 3
                    difficulty levels, handling random fruit trajectories, and
                    detecting bonuses/penalties based on the objects hit.
                    Building the game over screen with quick restart and the
                    scoring system.
                  </>,
                )}
              </p>
              <p>
                {t(
                  <>
                    <b>Tests & fix :</b> Tests des différents niveaux de
                    difficulté et correction des problèmes liés à la trajectoire
                    aléatoire des gameobjects.
                  </>,
                  <>
                    <b>Tests & fixes:</b> Testing the difficulty levels and
                    fixing issues with the random trajectories of game objects.
                  </>,
                )}
              </p>
            </div>
            <div>
              <h4>{t("Acquis", "Skills gained")}</h4>
              <p>
                {t(
                  <>
                    <b>Hard skills :</b> Développement de jeux vidéo,
                    programmation en Unity, gestion des mécaniques de gameplay.
                  </>,
                  <>
                    <b>Hard skills:</b> Video game development, Unity
                    programming, gameplay mechanics.
                  </>,
                )}
              </p>
              <p>
                {t(
                  <>
                    <b>Soft skills :</b> Résolution de problèmes, gestion de
                    projet, réactivité face aux imprévus.
                  </>,
                  <>
                    <b>Soft skills:</b> Problem solving, project management,
                    responsiveness to the unexpected.
                  </>,
                )}
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
            <img className="icon-adaptive" src={Arrow} alt="" />
            {t("Projet précédent", "Previous project")} (Minecraft VR)
          </Link>
          <Link to="/projet/ui-ux/bleep" className="btn-next-project">
            <img className="icon-adaptive" src={Arrow} alt="" />
            {t("Projet suivant", "Next project")} (Bleep)
          </Link>
        </div>
      </main>
    </>
  );
}

export default transition(NinjaCut);
