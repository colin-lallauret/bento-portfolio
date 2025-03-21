import React, { useEffect } from "react";
import Header from "../../Regions/Header";
import { Link } from "react-router-dom";
import transition from "../../../transition";
import FavIcon from "../../../Assets/Favicon/favicon.ico";
import FavIconOutline from "../../../Assets/Favicon/outlinefavicon.ico";

import Image1 from "../../../Assets/Images/Full_img/mmi/1.png";
import Image2 from "../../../Assets/Images/Full_img/mmi/2.png";
import Image3 from "../../../Assets/Images/Full_img/mmi/3.png";

import Php from "../../../Assets/Images/Icons/Logiciels/php.png";
import Js from "../../../Assets/Images/Icons/Logiciels/js.png";
import Css from "../../../Assets/Images/Icons/Logiciels/css.png";

import Arrow from "../../../Assets/Images/arrow.svg";

function WebdocMMI() {
  useEffect(() => {
    document.title = "WebdocMMI (projet) — Colin LALLAURET";

    const handleVisibilityChange = () => {
      const favicon = document.querySelector("link[rel='icon']");
      if (document.visibilityState === "hidden") {
        document.title = "Où allez-vous ? 💻✨";
        favicon.href = FavIconOutline;
      } else {
        document.title = "WebdocMMI (projet) — Colin LALLAURET";
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
            <h1>Webdoc MMI</h1>
            <p>#Web</p>
          </div>
          <div className="tags">
            <p className="tag">From scratch</p>
            <p className="tag">PHP</p>
            <p className="tag">Équipe</p>
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
            <h3>WebdocMMI</h3>
            <p>
              Dans le cadre d’une SAE, nous avons créé un Webdoc présentant la
              formation Métiers du Multimédia et de l’Internet de l’IUT de
              Lannion. Ce site interactif intègre des vidéos, interviews et
              documents téléchargeables. Répartis en pôles (Graphisme,
              UX/Gestion, Audiovisuel, Développement Web), j’ai pris en charge
              la partie développement.
            </p>
            <div>
              <h4>Déroulé du projet</h4>
              <p>
                <b>Recherche :</b> Étude des Webdocs existants et analyse de
                leur structure.
              </p>
              <p>
                <b>Gestion de projet :</b> Répartition des tâches en équipes et
                définition des rôles.
              </p>
              <p>
                <b>Développement :</b> Intégration from scratch en PHP, CSS et
                JavaScript des maquettes conçues par l’équipe UX.
              </p>
              <p>
                <b>Hébergement :</b> Collaboration avec le C.R.I pour déployer
                le projet sur les serveurs de l&#39;Université de Rennes.
              </p>
            </div>
            <div>
              <h4>Acquis</h4>
              <p>
                <b>Hard skill :</b> Développement web (PHP, CSS, JavaScript),
                Hébergement et gestion de serveur, Intégration de maquettes UX
              </p>
              <p>
                <b>Soft skills :</b> Travail en équipe, Organisation et gestion
                du temps, Adaptabilité aux contraintes techniques
              </p>
            </div>
          </div>
          <div className="info-wrapper">
            <div className="group-solo">
              <h3>Réaliser en groupe</h3>
              <p>Colin LALLAURET (moi)</p>
              <p>Théo LE GOURRIEREC</p>
              <p>Nathanael PEAN</p>
              <p>Alex ROHO</p>
            </div>
            <div className="used">
              <img src={Php} alt="rdm" />
              <img src={Js} alt="rdm" />
              <img src={Css} alt="rdm" />
            </div>
          </div>
        </div>
        <div className="btns-wrapper">
          <Link to="/projet/web/runner" className="btn-next-project">
            <img src={Arrow} alt="arrow" />
            Projet précédent (Runner)
          </Link>
          <Link to="/projet/3d-game/ile-perdu" className="btn-next-project">
            <img src={Arrow} alt="arrow" />
            Projet suivant (Île Perdu)
          </Link>
        </div>
      </main>
    </>
  );
}

export default transition(WebdocMMI);
