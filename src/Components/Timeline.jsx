import React from "react";

import { Link } from "react-router-dom";
import { useLang } from "../i18n";

function Timeline() {
  const { t } = useLang();
  return (
    <div className="timeline">
      <section>
        <article className="now">
          <Link to="/moi#master-cn-dedi">
            <div className="content">
              <h3>
                {t("Master Création Numérique", "Master’s in Digital Creation")}
                <em></em>
              </h3>
              <p>
                {t(
                  "Parcours Design d'Expérience et Design d'Interface",
                  "Experience Design & Interface Design track",
                )}
              </p>
              <p>
                <span>UX</span>
                <span>UI</span>
                <span>Design System</span>
              </p>
            </div>
            <div className="time">
              <h4>
                2027 <br />— <br />
                2025
              </h4>
            </div>
          </Link>
        </article>
        <article>
          <Link to="/moi#but-mmi">
            <div className="content">
              <h3>
                BUT MMI<em>**</em>
              </h3>
              <p>
                {t(
                  "Parcours développement web et dispositifs interactifs",
                  "Web development & interactive media track",
                )}
              </p>
              <p>
                <span>{t("Développement web", "Web development")}</span>
                <span>{t("Audiovisuel", "Audiovisual")}</span>
                <span>Communication</span>
              </p>
            </div>
            <div className="time">
              <h4>
                2025 <br />— <br />
                2022
              </h4>
            </div>
          </Link>
        </article>
        <article>
          <Link to="/moi#but-info">
            <div className="content">
              <h3>
                BUT<em>*</em> {t("Informatique", "Computer Science")}
              </h3>
              <p>
                <span>{t("Développement web", "Web development")}</span>
                <span>{t("Algorithmie", "Algorithms")}</span>
                <span>{t("Programmation", "Programming")}</span>
              </p>
            </div>
            <div className="time">
              <h4>2022</h4>
            </div>
          </Link>
        </article>
        <article>
          <Link to="/moi#bac">
            <div className="content">
              <h3>
                {t(
                  "Baccalauréat série générale",
                  "French Baccalaureate (general)",
                )}
              </h3>
              <p>
                <span>
                  {t(
                    "Numérique et Sciences Informatique",
                    "Digital & Computer Science",
                  )}
                </span>
                <span>
                  {t(
                    "Sciences Économiques et Sociales",
                    "Economics & Social Sciences",
                  )}
                </span>
              </p>
            </div>
            <div className="time">
              <h4>2021</h4>
            </div>
          </Link>
        </article>
        <div style={{ clear: "both" }}></div>
      </section>
    </div>
  );
}

export default Timeline;
