import React, { useEffect } from "react";
import Header from "../../Regions/Header";
import { Link } from "react-router-dom";
import transition from "../../../transition";
import FavIcon from "../../../Assets/Favicon/favicon.ico";
import FavIconOutline from "../../../Assets/Favicon/outlinefavicon.ico";

import Image1 from "../../../Assets/Images/Full_img/kult/1.png";
import Image2 from "../../../Assets/Images/Full_img/kult/2.png";
import Image3 from "../../../Assets/Images/Full_img/kult/3.png";

import Figma from "../../../Assets/Images/Icons/Logiciels/figma.png";

import Arrow from "../../../Assets/Images/arrow.svg";

function Kult() {
  useEffect(() => {
    document.title = "Kult (projet) — Colin LALLAURET";

    const handleVisibilityChange = () => {
      const favicon = document.querySelector("link[rel='icon']");
      if (document.visibilityState === "hidden") {
        document.title = "Où allez-vous ? 💻✨";
        favicon.href = FavIconOutline;
      } else {
        document.title = "Kult (projet) — Colin LALLAURET";
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
            <h1>Kult</h1>
            <p>#UI / UX Design</p>
          </div>
          <div className="tags">
            <p className="tag">Réservation</p>
            <p className="tag">Figma</p>
            <p className="tag">Mobile</p>
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
            <h3>Kult&apos;</h3>
            <p>
              Nous avons développé un concept d&apos;application visant à
              centraliser tous les événements culturels du Trégor.
              L&apos;application permettrait aux utilisateurs de découvrir
              facilement les événements à venir, de filtrer les résultats selon
              leurs préférences et d&apos;accéder rapidement aux informations
              essentielles.
            </p>
            <div>
              <h4>Déroulé du projet</h4>
              <p>
                <b>Analyse :</b> Étude des solutions existantes et
                identification des besoins non couverts.
              </p>
              <p>
                <b>Création :</b> Conception du flow utilisateur, des wireframes
                et de l&apos;identité visuelle (nom, couleurs, typographie).
              </p>
              <p>
                <b>Maquettage :</b> Réalisation des écrans clés, de
                l&apos;accueil aux filtres de recherche, en passant par les
                catalogues d&apos;événements et la page de réservation.
              </p>
            </div>
            <div>
              <h4>Acquis</h4>
              <p>
                <b>Hard skills :</b> UX/UI Design, Wireframing et prototypage,
                Recherche et analyse utilisateur
              </p>
              <p>
                <b>Soft skills :</b> Gestion de projet, Esprit d&apos;analyse,
                Collaboration interdisciplinaire
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
          <Link to="/projet/ui-ux/cnt" className="btn-next-project">
            <img src={Arrow} alt="arrow" />
            Projet précédent (C&T)
          </Link>
          <Link to="/projet/web/portfolio" className="btn-next-project">
            <img src={Arrow} alt="arrow" />
            Projet suivant (Portfolio)
          </Link>
        </div>
      </main>
    </>
  );
}

export default transition(Kult);
