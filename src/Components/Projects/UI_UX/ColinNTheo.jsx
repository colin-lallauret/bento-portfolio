import React, { useEffect } from "react";
import Header from "../../Regions/Header";
import { Link } from "react-router-dom";
import transition from "../../../transition";
import FavIcon from "../../../Assets/Favicon/favicon.ico";
import FavIconOutline from "../../../Assets/Favicon/outlinefavicon.ico";

import Image1 from "../../../Assets/Images/Full_img/cett/1.png";
import Image2 from "../../../Assets/Images/Full_img/cett/2.png";
import Image3 from "../../../Assets/Images/Full_img/cett/3.png";

import Figma from "../../../Assets/Images/Icons/Logiciels/figma.png";

import Arrow from "../../../Assets/Images/arrow.svg";

function ColinNTheo() {
  useEffect(() => {
    document.title = "C&T (projet) — Colin LALLAURET";

    const handleVisibilityChange = () => {
      const favicon = document.querySelector("link[rel='icon']");
      if (document.visibilityState === "hidden") {
        document.title = "Où allez-vous ? 💻✨";
        favicon.href = FavIconOutline;
      } else {
        document.title = "C&T (projet) — Colin LALLAURET";
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
            <h1>C&T</h1>
            <p>#UI / UX Design</p>
          </div>
          <div className="tags">
            <p className="tag">SEO</p>
            <p className="tag">Figma</p>
            <p className="tag">Article</p>
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
            <h3>C&T</h3>
            <p>
              Dans ce projet en duo, nous avions pour objectif de créer une page
              web et un article fictif sur le SEO. L&apos;idée était de
              maximiser la visibilité de notre contenu sur les moteurs de
              recherche. Nous avons donc conçu un article optimisé intégrant des
              mots-clés, des backlinks et d&apos;autres techniques de
              référencement pour assurer une meilleure portée et pertinence.
            </p>
            <div>
              <h4>Déroulé du projet</h4>
              <p>
                <b>Recherche :</b> Étude de l&apos;existant pour comprendre les
                enjeux du SEO et l&apos;organisation des articles web.
              </p>
              <p>
                <b>Rédaction :</b> Création des titres principaux et rédaction
                en appliquant les principes du référencement naturel.
              </p>
              <p>
                <b>Maquettage :</b> Élaboration d&apos;une direction artistique
                (couleurs, nom du site, typographie...), puis mise en page de
                l&apos;article sur une maquette desktop.
              </p>
              <p>
                <b>Amélioration :</b> Relecture et optimisation du contenu,
                ajout de backlinks, intégration d&apos;interactions et
                réorganisation des sections si nécessaire.
              </p>
            </div>
            <div>
              <h4>Acquis</h4>
              <p>
                <b>Hard skill :</b> Référencement naturel (SEO), Rédaction web
                optimisée, Maquettage et design UI/UX
              </p>
              <p>
                <b>Soft skills :</b> Travail en équipe, Communication efficace,
                Sens de l&apos;analyse
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
          <Link to="/projet/ui-ux/bleep" className="btn-next-project">
            <img src={Arrow} alt="arrow" />
            Projet précédent (Bleep)
          </Link>
          <Link to="/projet/ui-ux/kult" className="btn-next-project">
            <img src={Arrow} alt="arrow" />
            Projet suivant (Kult)
          </Link>
        </div>
      </main>
    </>
  );
}

export default transition(ColinNTheo);
