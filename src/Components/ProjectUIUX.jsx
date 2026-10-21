import React from "react";
import { Link } from "react-router-dom";

import CnT from "../Assets/Images/Projects/CnT.webp";
import Bleep from "../Assets/Images/Projects/Bleep.webp";
import Kult from "../Assets/Images/Projects/Kult.webp";
import { useLang } from "../i18n";

function ProjectUIUX() {
  const { t } = useLang();
  return (
    <>
      <Link to="/projet/ui-ux/cnt" className="project-item left">
        <img src={CnT} alt="C&T" loading="lazy" width="252" height="150" />
        <div className="project-text">
          <h5>C&T</h5>
          <p>
            {t(
              <>
                La création d’une page type d’un site réalisant des articles en
                ligne et la rédaction de son contenu portant sur le Search
                Engine Optimization.
              </>,
              <>
                Designing a template page for an online articles site and
                writing its content about Search Engine Optimization.
              </>,
            )}
          </p>
          <div className="tags">
            <span>SEO</span>
            <span>Figma</span>
            <span>Article</span>
          </div>
        </div>
      </Link>
      <div className="separator"></div>
      <Link to="/projet/ui-ux/bleep" className="project-item right">
        <div className="project-text">
          <h5>BLEEP.</h5>
          <p>
            {t(
              <>
                La simplification et l’accessibilité mises en oeuvre pour
                réaliser une application « mailbox » sécurisée sur la
                blockchain.
              </>,
              <>
                Simplicity and accessibility put to work to build a secure
                “mailbox” app on the blockchain.
              </>,
            )}
          </p>
          <div className="tags">
            <span>Mobile</span>
            <span>Email</span>
            <span>Figma</span>
          </div>
        </div>
        <img src={Bleep} alt="Bleep" loading="lazy" width="252" height="150" />
      </Link>
      <div className="separator"></div>

      <Link to="/projet/ui-ux/kult" className="project-item left">
        <img src={Kult} alt="Kult" loading="lazy" width="252" height="150" />
        <div className="project-text">
          <h5>KULT’</h5>
          <p>
            {t(
              <>
                Le design d’une application pour faciliter les sorties
                culturelles dans le Trégor.
              </>,
              <>
                Designing an app that makes cultural outings in the Trégor
                region easier.
              </>,
            )}
          </p>
          <div className="tags">
            <span>{t("Réservation", "Booking")}</span>
            <span>Figma</span>
            <span>Mobile</span>
          </div>
        </div>
      </Link>
    </>
  );
}

export default ProjectUIUX;
