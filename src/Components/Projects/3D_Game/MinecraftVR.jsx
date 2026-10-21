import React from "react";
import Header from "../../Regions/Header";
import { Link } from "react-router-dom";
import transition from "../../../transition";

import Image1 from "../../../Assets/Images/Full_img/minecraft/1.png";
import Image2 from "../../../Assets/Images/Full_img/minecraft/2.png";
import Image3 from "../../../Assets/Images/Full_img/minecraft/3.png";

import Unity from "../../../Assets/Images/Icons/Logiciels/unity.png";
import MetaQuest from "../../../Assets/Images/Icons/Logiciels/metaquest.png";

import Arrow from "../../../Assets/Images/arrow.svg";
import { useLang, usePageTitle } from "../../../i18n";

function MinecraftVR() {
  const { t } = useLang();
  usePageTitle(
    "Minecraft VR (projet) — Colin LALLAURET",
    "Minecraft VR (project) — Colin LALLAURET",
  );

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
              {t(
                <>
                  Dans le cadre d&apos;une ressource de Dispositif Interactif,
                  j&apos;ai réalisé ma première expérience de Réalité Virtuelle
                  en créant un concept simple. L&apos;objectif était de
                  comprendre les aspects matériels nécessaires et le
                  développement derrière la création d&apos;un tel projet,
                  notamment pour explorer la manière dont on peut concevoir un
                  environnement interactif en VR.
                </>,
                <>
                  As part of an Interactive Media course, I built my first
                  Virtual Reality experience around a simple concept. The goal
                  was to understand the hardware involved and the development
                  behind such a project, and to explore how to design an
                  interactive VR environment.
                </>,
              )}
            </p>
            <div>
              <h4>{t("Déroulé du projet", "How it went")}</h4>
              <p>
                {t(
                  <>
                    <b>Idéalisation :</b> Recherche d&apos;un thème pour mon
                    environnement virtuel et réflexion sur une idée de quête à
                    intégrer dans ce monde.
                  </>,
                  <>
                    <b>Ideation:</b> Finding a theme for my virtual environment
                    and coming up with a quest to build into that world.
                  </>,
                )}
              </p>
              <p>
                {t(
                  <>
                    <b>Développement :</b> Création d&apos;un environnement de
                    base avec sol, murs et ciel. Ajout d&apos;interactions de
                    base (locomotion, grab, téléportation, escalade). Conception
                    d&apos;une quête consistant à rechercher une clé pour
                    déverrouiller une porte, sur un thème inspiré de Minecraft.
                  </>,
                  <>
                    <b>Development:</b> Building a basic environment with floor,
                    walls and sky. Adding core interactions (locomotion, grab,
                    teleportation, climbing). Designing a quest to find a key
                    that unlocks a door, with a Minecraft-inspired theme.
                  </>,
                )}
              </p>
              <p>
                {t(
                  <>
                    <b>Tests :</b> Déploiement de l&apos;environnement virtuel
                    dans le casque Meta Quest 3 et présentation d&apos;une démo
                    de mon &quot;jeu&quot; devant ma promotion.
                  </>,
                  <>
                    <b>Testing:</b> Deploying the virtual environment to a Meta
                    Quest 3 headset and demoing my &quot;game&quot; to my class.
                  </>,
                )}
              </p>
            </div>
            <div>
              <h4>{t("Acquis", "Skills gained")}</h4>
              <p>
                {t(
                  <>
                    <b>Hard skills :</b> Conception d&apos;environnement VR,
                    développement d&apos;interactions en réalité virtuelle,
                    programmation en Unity.
                  </>,
                  <>
                    <b>Hard skills:</b> VR environment design, developing
                    virtual reality interactions, Unity programming.
                  </>,
                )}
              </p>
              <p>
                {t(
                  <>
                    <b>Soft skills :</b> Créativité, gestion de projet,
                    présentation publique.
                  </>,
                  <>
                    <b>Soft skills:</b> Creativity, project management, public
                    presenting.
                  </>,
                )}
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
            <img className="icon-adaptive" src={Arrow} alt="" />
            {t("Projet précédent", "Previous project")} (
            {t("Île Perdu", "Lost Island")})
          </Link>
          <Link to="/projet/3d-game/ninjacut" className="btn-next-project">
            <img className="icon-adaptive" src={Arrow} alt="" />
            {t("Projet suivant", "Next project")} (NinjaCut)
          </Link>
        </div>
      </main>
    </>
  );
}

export default transition(MinecraftVR);
