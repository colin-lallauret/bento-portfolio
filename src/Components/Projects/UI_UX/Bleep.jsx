import React, { useEffect } from "react";
import Header from "../../Regions/Header";
import { Link } from "react-router-dom";
import transition from "../../../transition";
import FavIcon from "../../../Assets/Favicon/favicon.ico";
import FavIconOutline from "../../../Assets/Favicon/outlinefavicon.ico";

import Image1 from "../../../Assets/Images/Full_img/bleep/1.png";
import Image2 from "../../../Assets/Images/Full_img/bleep/2.png";
import Image3 from "../../../Assets/Images/Full_img/bleep/3.png";

import Figma from "../../../Assets/Images/Icons/Logiciels/figma.png";

import Arrow from "../../../Assets/Images/arrow.svg";

function Bleep() {
  useEffect(() => {
    document.title = "Bleep (projet) — Colin LALLAURET";

    const handleVisibilityChange = () => {
      const favicon = document.querySelector("link[rel='icon']");
      if (document.visibilityState === "hidden") {
        document.title = "Où allez-vous ? 💻✨";
        favicon.href = FavIconOutline;
      } else {
        document.title = "Bleep (projet) — Colin LALLAURET";
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
            <h1>Bleep</h1>
            <p>#UI / UX Design</p>
          </div>
          <div className="tags">
            <p className="tag">Mobile</p>
            <p className="tag">Email</p>
            <p className="tag">Figma</p>
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
            <h3>Bleep</h3>
            <p>
              L&apos;objectif de ce projet était de repenser l&apos;expérience
              des emails en proposant des améliorations notables. Nous avons
              cherché à optimiser la confidentialité, la gestion et
              l&apos;efficacité des emails en imaginant des concepts innovants
              visant à moderniser les boîtes mail actuelles tout en apportant
              une meilleure expérience utilisateur.
            </p>
            <div>
              <h4>Déroulé du projet</h4>
              <p>
                <b>Analyse :</b> Étude des fonctionnalités des boîtes mail
                actuelles et de leurs limites.
              </p>
              <p>
                <b>Proposition des concepts :</b> Présentation de trois idées :
                chiffrement de bout en bout, compression automatique et gestion
                de projet. Après un oral, le premier concept a été retenu.
              </p>
              <p>
                <b>Approfondissement des recherches :</b> Étude approfondie du
                besoin utilisateur et phase d&apos;idéation du concept.
              </p>
              <p>
                <b>Réalisation d&apos;un parcours utilisateur :</b> Simulation
                complète de l&apos;utilisation de notre application, du
                déverrouillage du téléphone jusqu&apos;à la lecture et
                l&apos;envoi sécurisé d&apos;un email.
              </p>
            </div>
            <div>
              <h4>Acquis</h4>
              <p>
                <b>Hard skills :</b> Analyse UX/UI, Sécurité et chiffrement des
                données, Conception d’expérience utilisateur
              </p>
              <p>
                <b>Soft skills :</b> Créativité, Prise de parole en public,
                Esprit critique et prise de décision
              </p>
            </div>
          </div>
          <div className="info-wrapper">
            <div className="group-solo">
              <h3>Réaliser en groupe</h3>
              <p>Colin LALLAURET (moi)</p>
              <p>Théo LE GOURRIEREC</p>
            </div>
            <div className="used">
              <img src={Figma} alt="rdm" />
            </div>
          </div>
        </div>
        <div className="btns-wrapper">
          <Link to="/projet/3d-game/ninjacut" className="btn-next-project">
            <img src={Arrow} alt="arrow" />
            Projet précédent (NinjaCut)
          </Link>
          <Link to="/projet/ui-ux/cnt" className="btn-next-project">
            <img src={Arrow} alt="arrow" />
            Projet suivant (C&T)
          </Link>
        </div>
      </main>
    </>
  );
}

export default transition(Bleep);
