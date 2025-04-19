import React, { useEffect } from "react";
import Header from "../../Regions/Header";
import { Link } from "react-router-dom";
import transition from "../../../transition";
import FavIcon from "../../../Assets/Favicon/favicon.ico";
import FavIconOutline from "../../../Assets/Favicon/outlinefavicon.ico";

import Image1 from "../../../Assets/Images/Full_img/laval/1.mp4";
import Image2 from "../../../Assets/Images/Full_img/laval/2.jpg";
import Image3 from "../../../Assets/Images/Full_img/laval/3.jpg";

import Unity from "../../../Assets/Images/Icons/Logiciels/unity.png";
import MetaQuest from "../../../Assets/Images/Icons/Logiciels/metaquest.png";
import Blender from "../../../Assets/Images/Icons/Logiciels/blender.png";

import Arrow from "../../../Assets/Images/arrow.svg";

function LavalVirtual() {
  useEffect(() => {
    document.title = "NinjaCut (projet) — Colin LALLAURET";

    const handleVisibilityChange = () => {
      const favicon = document.querySelector("link[rel='icon']");
      if (document.visibilityState === "hidden") {
        document.title = "Où allez-vous ? 💻✨";
        favicon.href = FavIconOutline;
      } else {
        document.title = "Laval Virtual (projet) — Colin LALLAURET";
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
            <h1>Laval Virtual</h1>
            <p>#Hackaton</p>
          </div>
          <div className="tags">
            <p className="tag">Hackaton</p>
            <p className="tag">30 heures</p>
            <p className="tag">VR / AR</p>
          </div>
        </div>
        <div className="img-wrapper">
          <video className="video" controls loop muted>
            <source src={Image1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="img-group">
            <img className="img-laval" src={Image2} alt="rdm" />
            <img className="img-laval" src={Image3} alt="rdm" />
          </div>
        </div>
        <div className="content-wrapper">
          <div className="text">
            <h3>Hackaton de Laval Virtual</h3>
            <p>
              30 heures, 10 équipes, 1 gagnant !<br />
              Écoles et étudiants de différents pays viennent s’affronter dans
              une compétition unique : un marathon technologique de 30 heures,
              appelé « hackathon » !<br />
            </p>
            <div>
              <h4>Déroulé de l&apos;événement</h4>
              <p>
                <b>Début Lundi à 8h30 (07/04/2025) :</b> Jeu de course en VR, 1
                participant par équipe dans l&apos;objectif de réaliser un
                classement entre les différentes équipes qui participent au
                hackathon.
              </p>
              <p>
                <b>Choix du sujet :</b>...
              </p>
              <p>
                <b>Choix du matériel et installation :</b>...
              </p>
              <p>
                <b>Brainstorming :</b>...
              </p>
              <p>
                <b>Phase de création :</b>...
              </p>
              <p>
                <b>Les présentations :</b>...
              </p>
              <p>
                <b>Discours de fin :</b>...
              </p>
            </div>
            <div>
              <h4>Acquis</h4>
              <p>
                <b>Hard skills :</b>...
              </p>
              <p>
                <b>Soft skills :</b>...
              </p>
            </div>
          </div>
          <div className="info-wrapper">
            <div className="used">
              <img src={Unity} alt="rdm" />
              <img src={MetaQuest} alt="rdm" />
              <img src={Blender} alt="rdm" />
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

export default transition(LavalVirtual);
