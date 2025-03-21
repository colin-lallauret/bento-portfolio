import React, { useEffect } from "react";
import Header from "../../Regions/Header";
import { Link } from "react-router-dom";
import transition from "../../../transition";
import FavIcon from "../../../Assets/Favicon/favicon.ico";
import FavIconOutline from "../../../Assets/Favicon/outlinefavicon.ico";

import Image1 from "../../../Assets/Images/Full_img/ile/1.png";
import Image2 from "../../../Assets/Images/Full_img/ile/2.png";
import Image3 from "../../../Assets/Images/Full_img/ile/3.png";

import Blender from "../../../Assets/Images/Icons/Logiciels/blender.png";

import Arrow from "../../../Assets/Images/arrow.svg";

function IlePerdu() {
  useEffect(() => {
    document.title = "Ile Perdu (projet) — Colin LALLAURET";

    const handleVisibilityChange = () => {
      const favicon = document.querySelector("link[rel='icon']");
      if (document.visibilityState === "hidden") {
        document.title = "Où allez-vous ? 💻✨";
        favicon.href = FavIconOutline;
      } else {
        document.title = "Ile Perdu (projet) — Colin LALLAURET";
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
            <h1>Ile perdu</h1>
            <p>#3D / Game</p>
          </div>
          <div className="tags">
            <p className="tag">Blender</p>
            <p className="tag">3D</p>
            <p className="tag">Créativité</p>
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
            <h3>Ile perdu</h3>
            <p>
              L&apos;objectif de ce projet était de créer un rendu en 360° sous
              forme de &quot;Showcase Loop&quot; dans Blender. J&apos;ai choisi
              de réaliser une île au style pirate, en concevant chaque objet de
              la scène manuellement pour offrir un rendu immersif et détaillé.
            </p>
            <div>
              <h4>Déroulé du projet</h4>
              <p>
                <b>Imagination :</b> Réflexion sur le thème, l’histoire et le
                style visuel de la réalisation. Choix d’une ambiance de pirate
                pour l’île.
              </p>
              <p>
                <b>Réalisation :</b> Création de l’île à partir de zéro,
                modélisation et texturisation de chaque objet de la scène.
              </p>
              <p>
                <b>Rendu :</b> Production d’un rendu vidéo en boucle infinie
                pour mettre en avant l’île et ses détails dans un environnement
                360°.
              </p>
            </div>
            <div>
              <h4>Acquis</h4>
              <p>
                <b>Hard skill :</b> Réflexion sur le thème, l’histoire et le
                style visuel de la réalisation. Choix d’une ambiance de pirate
                pour l’île.
              </p>
              <p>
                <b>Soft skills :</b> Création de l’île à partir de zéro,
                modélisation et texturisation de chaque objet de la scène.
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
            <img src={Arrow} alt="arrow" />
            Projet précédent (Webdoc MMI)
          </Link>
          <Link to="/projet/3d-game/minecraft-vr" className="btn-next-project">
            <img src={Arrow} alt="arrow" />
            Projet suivant (Minecraft VR)
          </Link>
        </div>
      </main>
    </>
  );
}

export default transition(IlePerdu);
