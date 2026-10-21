import React from "react";
import Header from "../../Regions/Header";
import { Link } from "react-router-dom";
import transition from "../../../transition";

import Image1 from "../../../Assets/Images/Full_img/portfolio/1.png";
import Image2 from "../../../Assets/Images/Full_img/portfolio/2.png";
import Image3 from "../../../Assets/Images/Full_img/portfolio/3.png";

import Reactt from "../../../Assets/Images/Icons/Logiciels/react.png";
import Vite from "../../../Assets/Images/Icons/Logiciels/vite.png";
import Scss from "../../../Assets/Images/Icons/Logiciels/scss.png";
import Vercel from "../../../Assets/Images/Icons/Logiciels/vercel.png";
import Infomaniak from "../../../Assets/Images/Icons/Logiciels/infomaniak.png";

import Arrow from "../../../Assets/Images/arrow.svg";
import { useLang, usePageTitle } from "../../../i18n";

function Portfolio() {
  const { t } = useLang();
  usePageTitle(
    "Portfolio (projet) — Colin LALLAURET",
    "Portfolio (project) — Colin LALLAURET",
  );

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
              {t(
                <>
                  Après un premier site portfolio en MMI (2023), j’ai décidé de
                  repartir de zéro pour concevoir une version plus
                  professionnelle et reflétant mieux mes compétences actuelles.
                  Ce nouveau site vitrine devait allier design moderne et
                  performances optimales.
                </>,
                <>
                  After a first portfolio site during MMI (2023), I decided to
                  start from scratch and design a more professional version that
                  better reflects my current skills. This new showcase site had
                  to combine modern design with top performance.
                </>,
              )}
            </p>
            <div>
              <h4>{t("Déroulé du projet", "How it went")}</h4>
              <p>
                {t(
                  <>
                    <b>Analyse :</b> Étude des portfolios existants pour
                    identifier les meilleures pratiques.
                  </>,
                  <>
                    <b>Analysis:</b> Studying existing portfolios to identify
                    best practices.
                  </>,
                )}
              </p>
              <p>
                {t(
                  <>
                    <b>Création :</b> Définition d’une identité visuelle et
                    conception des maquettes desktop et mobile.
                  </>,
                  <>
                    <b>Creation:</b> Defining a visual identity and designing
                    desktop and mobile mockups.
                  </>,
                )}
              </p>
              <p>
                {t(
                  <>
                    <b>Rédaction :</b> Rédaction des pages principales (Accueil,
                    À propos, Projets).
                  </>,
                  <>
                    <b>Writing:</b> Writing the main pages (Home, About,
                    Projects).
                  </>,
                )}
              </p>
              <p>
                {t(
                  <>
                    <b>Développement :</b> Intégration from scratch avec Vite +
                    React.
                  </>,
                  <>
                    <b>Development:</b> Built from scratch with Vite + React.
                  </>,
                )}
              </p>
              <p>
                {t(
                  <>
                    <b>Hébergement :</b> Déploiement via Vercel et Infomaniak.
                  </>,
                  <>
                    <b>Hosting:</b> Deployed with Vercel and Infomaniak.
                  </>,
                )}
              </p>
            </div>
            <div>
              <h4>{t("Acquis", "Skills gained")}</h4>
              <p>
                {t(
                  <>
                    <b>Hard skills :</b> Développement front-end (React, SCSS),
                    Hébergement et déploiement web, Rédaction et structuration
                    de contenu
                  </>,
                  <>
                    <b>Hard skills:</b> Front-end development (React, SCSS), Web
                    hosting and deployment, Content writing and structuring
                  </>,
                )}
              </p>
              <p>
                {t(
                  <>
                    <b>Soft skills :</b> Gestion du temps et autonomie,
                    Créativité et sens du détail, Capacité d’apprentissage
                    rapide
                  </>,
                  <>
                    <b>Soft skills:</b> Time management and autonomy, Creativity
                    and attention to detail, Fast learning
                  </>,
                )}
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
            <img className="icon-adaptive" src={Arrow} alt="" />
            {t("Projet précédent", "Previous project")} (Kult)
          </Link>
          <Link to="/projet/web/runner" className="btn-next-project">
            <img className="icon-adaptive" src={Arrow} alt="" />
            {t("Projet suivant", "Next project")} (Runner)
          </Link>
        </div>
      </main>
    </>
  );
}

export default transition(Portfolio);
