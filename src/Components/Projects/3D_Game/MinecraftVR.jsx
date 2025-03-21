import React, { useEffect } from "react";
import Header from "../../Regions/Header";
import { Link } from "react-router-dom";
import transition from "../../../transition";
import FavIcon from "../../../Assets/Favicon/favicon.ico";
import FavIconOutline from "../../../Assets/Favicon/outlinefavicon.ico";

import Image1 from "../../../Assets/Images/Full_img/minecraft/1.png";
import Image2 from "../../../Assets/Images/Full_img/minecraft/2.png";
import Image3 from "../../../Assets/Images/Full_img/minecraft/3.png";

import Unity from "../../../Assets/Images/Icons/Logiciels/unity.png";
import MetaQuest from "../../../Assets/Images/Icons/Logiciels/metaquest.png";

import Arrow from "../../../Assets/Images/arrow.svg";

function MinecraftVR() {
  useEffect(() => {
    document.title = "Minecraft VR (projet) — Colin LALLAURET";

    const handleVisibilityChange = () => {
      const favicon = document.querySelector("link[rel='icon']");
      if (document.visibilityState === "hidden") {
        document.title = "Où allez-vous ? 💻✨";
        favicon.href = FavIconOutline;
      } else {
        document.title = "Minecraft VR (projet) — Colin LALLAURET";
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
            <h1>Minecraft VR</h1>
            <p>#3D / Game</p>
          </div>
          <div className="tags">
            <p className="tag">Unity</p>
            <p className="tag">VR</p>
            <p className="tag">Interaction</p>
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
            <h3>MinecraftVR</h3>
            <p>
              Dans le cadre d&apos;une ressource de Dispositif Interactif,
              j&apos;ai réalisé ma première expérience de Réalité Virtuelle en
              créant un concept simple. L&apos;objectif était de comprendre les
              aspects matériels nécessaires et le développement derrière la
              création d&apos;un tel projet, notamment pour explorer la manière
              dont on peut concevoir un environnement interactif en VR.
            </p>
            <div>
              <h4>Déroulé du projet</h4>
              <p>
                <b>Idéalisation :</b> Recherche d&apos;un thème pour mon
                environnement virtuel et réflexion sur une idée de quête à
                intégrer dans ce monde.
              </p>
              <p>
                <b>Développement :</b> Création d&apos;un environnement de base
                avec sol, murs et ciel. Ajout d&apos;interactions de base
                (locomotion, grab, téléportation, escalade). Conception
                d&apos;une quête consistant à rechercher une clé pour
                déverrouiller une porte, sur un thème inspiré de Minecraft.
              </p>
              <p>
                <b>Tests :</b> Déploiement de l&apos;environnement virtuel dans
                le casque Meta Quest 3 et présentation d&apos;une démo de mon
                &quot;jeu&quot; devant ma promotion.
              </p>
            </div>
            <div>
              <h4>Acquis</h4>
              <p>
                <b>Hard skill :</b> Conception d&apos;environnement VR,
                développement d&apos;interactions en réalité virtuelle,
                programmation en Unity.
              </p>
              <p>
                <b>Soft skills :</b> Créativité, gestion de projet, présentation
                publique.
              </p>
            </div>
          </div>
          <div className="info-wrapper">
            <div className="used">
              <img src={Unity} alt="rdm" />
              <img src={MetaQuest} alt="rdm" />
            </div>
          </div>
        </div>
        <div className="btns-wrapper">
          <Link to="/projet/3d-game/ile-perdu" className="btn-next-project">
            <img src={Arrow} alt="arrow" />
            Projet précédent (Île Perdu)
          </Link>
          <Link to="/projet/3d-game/ninjacut" className="btn-next-project">
            <img src={Arrow} alt="arrow" />
            Projet suivant (NinjaCut)
          </Link>
        </div>
      </main>
    </>
  );
}

export default transition(MinecraftVR);
