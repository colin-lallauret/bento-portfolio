import React from "react";
import Header from "../../Regions/Header";
import { Link } from "react-router-dom";
import transition from "../../../transition";

import Image1 from "../../../Assets/Images/Full_img/kult/1.png";
import Image2 from "../../../Assets/Images/Full_img/kult/2.png";
import Image3 from "../../../Assets/Images/Full_img/kult/3.png";

import Figma from "../../../Assets/Images/Icons/Logiciels/figma.png";

import Arrow from "../../../Assets/Images/arrow.svg";
import { useLang, usePageTitle } from "../../../i18n";

function Kult() {
  const { t } = useLang();
  usePageTitle(
    "Kult (projet) — Colin LALLAURET",
    "Kult (project) — Colin LALLAURET",
  );

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
            <p className="tag">{t("Réservation", "Booking")}</p>
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
              {t(
                <>
                  Nous avons développé un concept d&apos;application visant à
                  centraliser tous les événements culturels du Trégor.
                  L&apos;application permettrait aux utilisateurs de découvrir
                  facilement les événements à venir, de filtrer les résultats
                  selon leurs préférences et d&apos;accéder rapidement aux
                  informations essentielles.
                </>,
                <>
                  We developed an app concept that brings together every
                  cultural event in the Trégor region. The app would let users
                  easily discover upcoming events, filter results by their
                  preferences and quickly get to the key information.
                </>,
              )}
            </p>
            <div>
              <h4>{t("Déroulé du projet", "How it went")}</h4>
              <p>
                {t(
                  <>
                    <b>Analyse :</b> Étude des solutions existantes et
                    identification des besoins non couverts.
                  </>,
                  <>
                    <b>Analysis:</b> Studying existing solutions and identifying
                    unmet needs.
                  </>,
                )}
              </p>
              <p>
                {t(
                  <>
                    <b>Création :</b> Conception du flow utilisateur, des
                    wireframes et de l&apos;identité visuelle (nom, couleurs,
                    typographie).
                  </>,
                  <>
                    <b>Creation:</b> Designing the user flow, wireframes and
                    visual identity (name, colours, typography).
                  </>,
                )}
              </p>
              <p>
                {t(
                  <>
                    <b>Maquettage :</b> Réalisation des écrans clés, de
                    l&apos;accueil aux filtres de recherche, en passant par les
                    catalogues d&apos;événements et la page de réservation.
                  </>,
                  <>
                    <b>Mockups:</b> Designing the key screens, from the home
                    page to search filters, event catalogues and the booking
                    page.
                  </>,
                )}
              </p>
            </div>
            <div>
              <h4>{t("Acquis", "Skills gained")}</h4>
              <p>
                {t(
                  <>
                    <b>Hard skills :</b> UX/UI Design, Wireframing et
                    prototypage, Recherche et analyse utilisateur
                  </>,
                  <>
                    <b>Hard skills:</b> UX/UI Design, Wireframing and
                    prototyping, User research and analysis
                  </>,
                )}
              </p>
              <p>
                {t(
                  <>
                    <b>Soft skills :</b> Gestion de projet, Esprit
                    d&apos;analyse, Collaboration interdisciplinaire
                  </>,
                  <>
                    <b>Soft skills:</b> Project management, Analytical thinking,
                    Cross-disciplinary collaboration
                  </>,
                )}
              </p>
            </div>
          </div>
          <div className="info-wrapper">
            <div className="group-solo">
              <h3>{t("Réaliser en groupe", "Group project")}</h3>
              <p>{t("Colin LALLAURET (moi)", "Colin LALLAURET (me)")}</p>
              <p>Théo LE GOURRIEREC</p>
            </div>
            <div className="used">
              <img src={Figma} alt="rdm" />
            </div>
          </div>
        </div>
        <div className="btns-wrapper">
          <Link to="/projet/ui-ux/cnt" className="btn-next-project">
            <img className="icon-adaptive" src={Arrow} alt="" />
            {t("Projet précédent", "Previous project")} (C&T)
          </Link>
          <Link to="/projet/web/portfolio" className="btn-next-project">
            <img className="icon-adaptive" src={Arrow} alt="" />
            {t("Projet suivant", "Next project")} (Portfolio)
          </Link>
        </div>
      </main>
    </>
  );
}

export default transition(Kult);
