import React, { useEffect } from "react";
import Header from "../../Regions/Header";
import { Link } from "react-router-dom";
import transition from "../../../transition";
import FavIcon from "../../../Assets/Favicon/favicon.ico";
import FavIconOutline from "../../../Assets/Favicon/outlinefavicon.ico";

import Image1 from "../../../Assets/Images/Full_img/portfolio/1.png";
import Image2 from "../../../Assets/Images/Full_img/portfolio/2.png";
import Image3 from "../../../Assets/Images/Full_img/portfolio/3.png";

import Reactt from "../../../Assets/Images/Icons/Logiciels/react.png";
import Vite from "../../../Assets/Images/Icons/Logiciels/vite.png";
import Scss from "../../../Assets/Images/Icons/Logiciels/scss.png";
import Vercel from "../../../Assets/Images/Icons/Logiciels/vercel.png";
import Infomaniak from "../../../Assets/Images/Icons/Logiciels/infomaniak.png";

import Arrow from "../../../Assets/Images/arrow.svg";

function Portfolio() {
  useEffect(() => {
    document.title = "Portfolio (projet) — Colin LALLAURET";

    const handleVisibilityChange = () => {
      const favicon = document.querySelector("link[rel='icon']");
      if (document.visibilityState === "hidden") {
        document.title = "Où allez-vous ? 💻✨";
        favicon.href = FavIconOutline;
      } else {
        document.title = "Portfolio (projet) — Colin LALLAURET";
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
            <h1>Portfolio</h1>
            <p>#Web</p>
          </div>
          <div className="tags">
            <p className="tag">React</p>
            <p className="tag">Vercel</p>
            <p className="tag">Bento</p>
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
            <h3>Portfolio</h3>
            <p>
              Après un premier site portfolio en MMI (2023), j’ai décidé de
              repartir de zéro pour concevoir une version plus professionnelle
              et reflétant mieux mes compétences actuelles. Ce nouveau site
              vitrine devait allier design moderne et performances optimales.
            </p>
            <div>
              <h4>Déroulé du projet</h4>
              <p>
                <b>Analyse :</b> Étude des portfolios existants pour identifier
                les meilleures pratiques.
              </p>
              <p>
                <b>Création :</b> Définition d’une identité visuelle et
                conception des maquettes desktop et mobile.
              </p>
              <p>
                <b>Rédaction :</b> Rédaction des pages principales (Accueil, À
                propos, Projets).
              </p>
              <p>
                <b>Développement :</b> Intégration from scratch avec Vite +
                React.
              </p>
              <p>
                <b>Hébergement :</b> Déploiement via Vercel et Infomaniak.
              </p>
            </div>
            <div>
              <h4>Acquis</h4>
              <p>
                <b>Hard skill :</b> Développement front-end (React, SCSS),
                Hébergement et déploiement web, Rédaction et structuration de
                contenu
              </p>
              <p>
                <b>Soft skills :</b> Gestion du temps et autonomie, Créativité
                et sens du détail, Capacité d’apprentissage rapide
              </p>
            </div>
          </div>
          <div className="info-wrapper">
            <div className="used">
              <img src={Reactt} alt="rdm" />
              <img src={Vite} alt="rdm" />
              <img src={Scss} alt="rdm" />
              <img src={Vercel} alt="rdm" />
              <img src={Infomaniak} alt="rdm" />
            </div>
          </div>
        </div>
        <div className="btns-wrapper">
          <Link to="/projet/ui-ux/kult" className="btn-next-project">
            <img src={Arrow} alt="arrow" />
            Projet précédent (Kult)
          </Link>
          <Link to="/projet/web/runner" className="btn-next-project">
            <img src={Arrow} alt="arrow" />
            Projet suivant (Runner)
          </Link>
        </div>
      </main>
    </>
  );
}

export default transition(Portfolio);
