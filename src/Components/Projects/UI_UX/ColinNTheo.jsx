import React from "react";
import Header from "../../Regions/Header";
import { Link } from "react-router-dom";
import transition from "../../../transition";

import Image1 from "../../../Assets/Images/Full_img/cett/1.png";
import Image2 from "../../../Assets/Images/Full_img/cett/2.png";
import Image3 from "../../../Assets/Images/Full_img/cett/3.png";

import Figma from "../../../Assets/Images/Icons/Logiciels/figma.png";

import Arrow from "../../../Assets/Images/arrow.svg";
import { useLang, usePageTitle } from "../../../i18n";

function ColinNTheo() {
  const { t } = useLang();
  usePageTitle(
    "C&T (projet) — Colin LALLAURET",
    "C&T (project) — Colin LALLAURET",
  );

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
              {t(
                <>
                  Dans ce projet en duo, nous avions pour objectif de créer une
                  page web et un article fictif sur le SEO. L&apos;idée était de
                  maximiser la visibilité de notre contenu sur les moteurs de
                  recherche. Nous avons donc conçu un article optimisé intégrant
                  des mots-clés, des backlinks et d&apos;autres techniques de
                  référencement pour assurer une meilleure portée et pertinence.
                </>,
                <>
                  In this duo project, our goal was to create a web page and a
                  mock article about SEO. The idea was to maximise our content’s
                  visibility on search engines, so we designed an optimised
                  article using keywords, backlinks and other SEO techniques to
                  improve its reach and relevance.
                </>,
              )}
            </p>
            <div>
              <h4>{t("Déroulé du projet", "How it went")}</h4>
              <p>
                {t(
                  <>
                    <b>Recherche :</b> Étude de l&apos;existant pour comprendre
                    les enjeux du SEO et l&apos;organisation des articles web.
                  </>,
                  <>
                    <b>Research:</b> Studying existing work to understand what
                    is at stake in SEO and how web articles are structured.
                  </>,
                )}
              </p>
              <p>
                {t(
                  <>
                    <b>Rédaction :</b> Création des titres principaux et
                    rédaction en appliquant les principes du référencement
                    naturel.
                  </>,
                  <>
                    <b>Writing:</b> Crafting the main headings and writing the
                    content following organic SEO principles.
                  </>,
                )}
              </p>
              <p>
                {t(
                  <>
                    <b>Maquettage :</b> Élaboration d&apos;une direction
                    artistique (couleurs, nom du site, typographie...), puis
                    mise en page de l&apos;article sur une maquette desktop.
                  </>,
                  <>
                    <b>Mockups:</b> Defining an art direction (colours, site
                    name, typography...), then laying out the article on a
                    desktop mockup.
                  </>,
                )}
              </p>
              <p>
                {t(
                  <>
                    <b>Amélioration :</b> Relecture et optimisation du contenu,
                    ajout de backlinks, intégration d&apos;interactions et
                    réorganisation des sections si nécessaire.
                  </>,
                  <>
                    <b>Improvement:</b> Proofreading and optimising the content,
                    adding backlinks, adding interactions and reorganising
                    sections where needed.
                  </>,
                )}
              </p>
            </div>
            <div>
              <h4>{t("Acquis", "Skills gained")}</h4>
              <p>
                {t(
                  <>
                    <b>Hard skills :</b> Référencement naturel (SEO), Rédaction
                    web optimisée, Maquettage et design UI/UX
                  </>,
                  <>
                    <b>Hard skills:</b> Organic SEO, Optimised web copywriting,
                    Mockups and UI/UX design
                  </>,
                )}
              </p>
              <p>
                {t(
                  <>
                    <b>Soft skills :</b> Travail en équipe, Communication
                    efficace, Sens de l&apos;analyse
                  </>,
                  <>
                    <b>Soft skills:</b> Teamwork, Effective communication,
                    Analytical mindset
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
          <Link to="/projet/ui-ux/bleep" className="btn-next-project">
            <img className="icon-adaptive" src={Arrow} alt="" />
            {t("Projet précédent", "Previous project")} (Bleep)
          </Link>
          <Link to="/projet/ui-ux/kult" className="btn-next-project">
            <img className="icon-adaptive" src={Arrow} alt="" />
            {t("Projet suivant", "Next project")} (Kult)
          </Link>
        </div>
      </main>
    </>
  );
}

export default transition(ColinNTheo);
