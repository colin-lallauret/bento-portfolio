import React from "react";
import Header from "../../Regions/Header";
import { Link } from "react-router-dom";
import transition from "../../../transition";

import Image1 from "../../../Assets/Images/Full_img/mmi/1.png";
import Image2 from "../../../Assets/Images/Full_img/mmi/2.png";
import Image3 from "../../../Assets/Images/Full_img/mmi/3.png";

import Php from "../../../Assets/Images/Icons/Logiciels/php.png";
import Js from "../../../Assets/Images/Icons/Logiciels/js.png";
import Css from "../../../Assets/Images/Icons/Logiciels/css.png";

import Arrow from "../../../Assets/Images/arrow.svg";
import { useLang, usePageTitle } from "../../../i18n";

function WebdocMMI() {
  const { t } = useLang();
  usePageTitle(
    "WebdocMMI (projet) — Colin LALLAURET",
    "WebdocMMI (project) — Colin LALLAURET",
  );

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
            <p className="tag">{t("Équipe", "Team")}</p>
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
              {t(
                <>
                  Dans le cadre d’une SAE, nous avons créé un Webdoc présentant
                  la formation Métiers du Multimédia et de l’Internet de l’IUT
                  de Lannion. Ce site interactif intègre des vidéos, interviews
                  et documents téléchargeables. Répartis en pôles (Graphisme,
                  UX/Gestion, Audiovisuel, Développement Web), j’ai pris en
                  charge la partie développement.
                </>,
                <>
                  As part of a university project (SAE), we created a web
                  documentary presenting the Multimedia and Internet Professions
                  programme at the IUT of Lannion. This interactive site
                  features videos, interviews and downloadable documents. The
                  team was split into groups (Graphic design, UX/Management,
                  Audiovisual, Web development), and I handled the development
                  side.
                </>,
              )}
            </p>
            <div>
              <h4>{t("Déroulé du projet", "How it went")}</h4>
              <p>
                {t(
                  <>
                    <b>Recherche :</b> Étude des Webdocs existants et analyse de
                    leur structure.
                  </>,
                  <>
                    <b>Research:</b> Studying existing web documentaries and
                    analysing their structure.
                  </>,
                )}
              </p>
              <p>
                {t(
                  <>
                    <b>Gestion de projet :</b> Répartition des tâches en équipes
                    et définition des rôles.
                  </>,
                  <>
                    <b>Project management:</b> Splitting tasks across teams and
                    defining roles.
                  </>,
                )}
              </p>
              <p>
                {t(
                  <>
                    <b>Développement :</b> Intégration from scratch en PHP, CSS
                    et JavaScript des maquettes conçues par l’équipe UX.
                  </>,
                  <>
                    <b>Development:</b> Building the UX team’s mockups from
                    scratch in PHP, CSS and JavaScript.
                  </>,
                )}
              </p>
              <p>
                {t(
                  <>
                    <b>Hébergement :</b> Collaboration avec le C.R.I pour
                    déployer le projet sur les serveurs de l&#39;Université de
                    Rennes.
                  </>,
                  <>
                    <b>Hosting:</b> Working with the university IT department
                    (C.R.I) to deploy the project on the University of Rennes
                    servers.
                  </>,
                )}
              </p>
            </div>
            <div>
              <h4>{t("Acquis", "Skills gained")}</h4>
              <p>
                {t(
                  <>
                    <b>Hard skills :</b> Développement web (PHP, CSS,
                    JavaScript), Hébergement et gestion de serveur, Intégration
                    de maquettes UX
                  </>,
                  <>
                    <b>Hard skills:</b> Web development (PHP, CSS, JavaScript),
                    Hosting and server management, UX mockup integration
                  </>,
                )}
              </p>
              <p>
                {t(
                  <>
                    <b>Soft skills :</b> Travail en équipe, Organisation et
                    gestion du temps, Adaptabilité aux contraintes techniques
                  </>,
                  <>
                    <b>Soft skills:</b> Teamwork, Organisation and time
                    management, Adapting to technical constraints
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
            <img className="icon-adaptive" src={Arrow} alt="" />
            {t("Projet précédent", "Previous project")} (Runner)
          </Link>
          <Link to="/projet/3d-game/ile-perdu" className="btn-next-project">
            <img className="icon-adaptive" src={Arrow} alt="" />
            {t("Projet suivant", "Next project")} (
            {t("Île Perdu", "Lost Island")})
          </Link>
        </div>
      </main>
    </>
  );
}

export default transition(WebdocMMI);
