import React from "react";
import Header from "../../Regions/Header";
import { Link } from "react-router-dom";
import transition from "../../../transition";

import Image1 from "../../../Assets/Images/Full_img/ile/1.png";
import Image2 from "../../../Assets/Images/Full_img/ile/2.png";
import Image3 from "../../../Assets/Images/Full_img/ile/3.png";

import Blender from "../../../Assets/Images/Icons/Logiciels/blender.png";

import Arrow from "../../../Assets/Images/arrow.svg";
import { useLang, usePageTitle } from "../../../i18n";

function IlePerdu() {
  const { t } = useLang();
  usePageTitle(
    "Ile Perdu (projet) — Colin LALLAURET",
    "Lost Island (project) — Colin LALLAURET",
  );

  return (
    <>
      <Header />
      <main className="project">
        <div className="title-wrapper">
          <div className="title">
            <h1>{t("Ile perdu", "Lost Island")}</h1>
            <p>#3D / Game</p>
          </div>
          <div className="tags">
            <p className="tag">Blender</p>
            <p className="tag">3D</p>
            <p className="tag">{t("Créativité", "Creativity")}</p>
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
            <h3>{t("Ile perdu", "Lost Island")}</h3>
            <p>
              {t(
                <>
                  L&apos;objectif de ce projet était de créer un rendu en 360°
                  sous forme de &quot;Showcase Loop&quot; dans Blender.
                  J&apos;ai choisi de réaliser une île au style pirate, en
                  concevant chaque objet de la scène manuellement pour offrir un
                  rendu immersif et détaillé.
                </>,
                <>
                  The goal of this project was to create a 360° render as a
                  &quot;Showcase Loop&quot; in Blender. I chose to build a
                  pirate-style island, modelling every object in the scene by
                  hand for an immersive, detailed render.
                </>,
              )}
            </p>
            <div>
              <h4>{t("Déroulé du projet", "How it went")}</h4>
              <p>
                {t(
                  <>
                    <b>Imagination :</b> Réflexion sur le thème, l’histoire et
                    le style visuel de la réalisation. Choix d’une ambiance de
                    pirate pour l’île.
                  </>,
                  <>
                    <b>Imagination:</b> Thinking about the theme, story and
                    visual style of the piece. Choosing a pirate atmosphere for
                    the island.
                  </>,
                )}
              </p>
              <p>
                {t(
                  <>
                    <b>Réalisation :</b> Création de l’île à partir de zéro,
                    modélisation et texturisation de chaque objet de la scène.
                  </>,
                  <>
                    <b>Production:</b> Building the island from scratch,
                    modelling and texturing every object in the scene.
                  </>,
                )}
              </p>
              <p>
                {t(
                  <>
                    <b>Rendu :</b> Production d’un rendu vidéo en boucle infinie
                    pour mettre en avant l’île et ses détails dans un
                    environnement 360°.
                  </>,
                  <>
                    <b>Rendering:</b> Producing an endlessly looping video
                    render to showcase the island and its details in a 360°
                    environment.
                  </>,
                )}
              </p>
            </div>
            <div>
              <h4>{t("Acquis", "Skills gained")}</h4>
              <p>
                {t(
                  <>
                    <b>Hard skills :</b> Réflexion sur le thème, l’histoire et
                    le style visuel de la réalisation. Choix d’une ambiance de
                    pirate pour l’île.
                  </>,
                  <>
                    <b>Hard skills:</b> Thinking about the theme, story and
                    visual style of the piece. Choosing a pirate atmosphere for
                    the island.
                  </>,
                )}
              </p>
              <p>
                {t(
                  <>
                    <b>Soft skills :</b> Création de l’île à partir de zéro,
                    modélisation et texturisation de chaque objet de la scène.
                  </>,
                  <>
                    <b>Soft skills:</b> Building the island from scratch,
                    modelling and texturing every object in the scene.
                  </>,
                )}
              </p>
            </div>
          </div>
          <div className="info-wrapper">
            <div className="used">
              <img src={Blender} alt="rdm" />
            </div>
          </div>
        </div>
        <div className="btns-wrapper">
          <Link to="/projet/web/webdoc-mmi" className="btn-next-project">
            <img className="icon-adaptive" src={Arrow} alt="" />
            {t("Projet précédent", "Previous project")} (Webdoc MMI)
          </Link>
          <Link to="/projet/3d-game/minecraft-vr" className="btn-next-project">
            <img className="icon-adaptive" src={Arrow} alt="" />
            {t("Projet suivant", "Next project")} (Minecraft VR)
          </Link>
        </div>
      </main>
    </>
  );
}

export default transition(IlePerdu);
