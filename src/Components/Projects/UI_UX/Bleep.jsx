import React from "react";
import Header from "../../Regions/Header";
import { Link } from "react-router-dom";
import transition from "../../../transition";

import Image1 from "../../../Assets/Images/Full_img/bleep/1.png";
import Image2 from "../../../Assets/Images/Full_img/bleep/2.png";
import Image3 from "../../../Assets/Images/Full_img/bleep/3.png";

import Figma from "../../../Assets/Images/Icons/Logiciels/figma.png";

import Arrow from "../../../Assets/Images/arrow.svg";
import { useLang, usePageTitle } from "../../../i18n";

function Bleep() {
  const { t } = useLang();
  usePageTitle(
    "Bleep (projet) — Colin LALLAURET",
    "Bleep (project) — Colin LALLAURET",
  );

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
              {t(
                <>
                  L&apos;objectif de ce projet était de repenser
                  l&apos;expérience des emails en proposant des améliorations
                  notables. Nous avons cherché à optimiser la confidentialité,
                  la gestion et l&apos;efficacité des emails en imaginant des
                  concepts innovants visant à moderniser les boîtes mail
                  actuelles tout en apportant une meilleure expérience
                  utilisateur.
                </>,
                <>
                  The goal of this project was to rethink the email experience
                  with meaningful improvements. We set out to improve email
                  privacy, management and efficiency by imagining innovative
                  concepts to modernise today’s inboxes while delivering a
                  better user experience.
                </>,
              )}
            </p>
            <div>
              <h4>{t("Déroulé du projet", "How it went")}</h4>
              <p>
                {t(
                  <>
                    <b>Analyse :</b> Étude des fonctionnalités des boîtes mail
                    actuelles et de leurs limites.
                  </>,
                  <>
                    <b>Analysis:</b> Studying the features of current mailboxes
                    and their limits.
                  </>,
                )}
              </p>
              <p>
                {t(
                  <>
                    <b>Proposition des concepts :</b> Présentation de trois
                    idées : chiffrement de bout en bout, compression automatique
                    et gestion de projet. Après un oral, le premier concept a
                    été retenu.
                  </>,
                  <>
                    <b>Concept proposals:</b> Pitching three ideas: end-to-end
                    encryption, automatic compression and project management.
                    After an oral presentation, the first concept was chosen.
                  </>,
                )}
              </p>
              <p>
                {t(
                  <>
                    <b>Approfondissement des recherches :</b> Étude approfondie
                    du besoin utilisateur et phase d&apos;idéation du concept.
                  </>,
                  <>
                    <b>Deeper research:</b> In-depth study of user needs and the
                    concept’s ideation phase.
                  </>,
                )}
              </p>
              <p>
                {t(
                  <>
                    <b>Réalisation d&apos;un parcours utilisateur :</b>{" "}
                    Simulation complète de l&apos;utilisation de notre
                    application, du déverrouillage du téléphone jusqu&apos;à la
                    lecture et l&apos;envoi sécurisé d&apos;un email.
                  </>,
                  <>
                    <b>Building a user journey:</b> A full simulation of using
                    our app, from unlocking the phone to reading and securely
                    sending an email.
                  </>,
                )}
              </p>
            </div>
            <div>
              <h4>{t("Acquis", "Skills gained")}</h4>
              <p>
                {t(
                  <>
                    <b>Hard skills :</b> Analyse UX/UI, Sécurité et chiffrement
                    des données, Conception d’expérience utilisateur
                  </>,
                  <>
                    <b>Hard skills:</b> UX/UI analysis, Data security and
                    encryption, User experience design
                  </>,
                )}
              </p>
              <p>
                {t(
                  <>
                    <b>Soft skills :</b> Créativité, Prise de parole en public,
                    Esprit critique et prise de décision
                  </>,
                  <>
                    <b>Soft skills:</b> Creativity, Public speaking, Critical
                    thinking and decision-making
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
          <Link to="/projet/3d-game/ninjacut" className="btn-next-project">
            <img className="icon-adaptive" src={Arrow} alt="" />
            {t("Projet précédent", "Previous project")} (NinjaCut)
          </Link>
          <Link to="/projet/ui-ux/cnt" className="btn-next-project">
            <img className="icon-adaptive" src={Arrow} alt="" />
            {t("Projet suivant", "Next project")} (C&T)
          </Link>
        </div>
      </main>
    </>
  );
}

export default transition(Bleep);
