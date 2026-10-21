import React from "react";
import { Link } from "react-router-dom";

import Webdoc from "../Assets/Images/Projects/Webdoc.png";
import Runner from "../Assets/Images/Projects/Runner.png";
import Portfolio from "../Assets/Images/Projects/Portfolio.png";
import { useLang } from "../i18n";

function ProjectWeb() {
  const { t } = useLang();
  return (
    <>
      <Link to="/projet/web/webdoc-mmi" className="project-item left">
        <img src={Webdoc} alt="Webdoc MMI" />
        <div className="project-text">
          <h5>Webdoc MMI</h5>
          <p>
            {t(
              <>
                Le développement du site web de la formation MMI à Lannion, sous
                la forme d’un « Webdoc », une réalisation faite en équipe.
              </>,
              <>
                Developing the website of the MMI programme in Lannion as a “web
                documentary”, built as a team.
              </>,
            )}
          </p>
          <div className="tags">
            <span>From scratch</span>
            <span>PHP</span>
            <span>{t("Équipe", "Team")}</span>
          </div>
        </div>
      </Link>
      <div className="separator"></div>
      <Link to="/projet/web/runner" className="project-item right">
        <div className="project-text">
          <h5>Runner</h5>
          <p>
            {t(
              <>
                La conception technique d’un jeu de type Runner, où esquiver les
                obstacles est l’objectif pour accumuler le plus de points.
              </>,
              <>
                The technical design of a runner game where dodging obstacles is
                how you rack up the most points.
              </>,
            )}
          </p>
          <div className="tags">
            <span>Game</span>
            <span>React</span>
            <span>{t("Mini-Projet", "Mini-project")}</span>
          </div>
        </div>
        <img src={Runner} alt="Runner" />
      </Link>
      <div className="separator"></div>

      <Link to="/projet/web/portfolio" className="project-item left">
        <img src={Portfolio} alt="Portfolio" />
        <div className="project-text">
          <h5>Portfolio</h5>
          <p>
            {t(
              <>
                La réalisation de mon nouveau portfolio, en passant du
                développement à la rédaction de contenu jusqu'à sa mise en
                ligne.
              </>,
              <>
                Building my new portfolio, from development and copywriting all
                the way to going live.
              </>,
            )}
          </p>
          <div className="tags">
            <span>React</span>
            <span>Vercel</span>
            <span>Bento</span>
          </div>
        </div>
      </Link>
    </>
  );
}

export default ProjectWeb;
