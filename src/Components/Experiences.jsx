import React from "react";
import { Link } from "react-router-dom";
import { useLang } from "../i18n";

function Experiences() {
  const { t } = useLang();
  return (
    <div className="experiences internal-link">
      <div className="dev-web">
        <div className="up-title">
          <span>{t("MES", "MY")}</span>
          <p>{t("EXPÉRIENCES", "EXPERIENCE")}</p>
        </div>

        <Link to="/moi#groupe-seb" className="exp">
          <div className="title">
            <p>UX/UI Designer</p>
            <span>{t("(en Stage)", "(Internship)")}</span>
          </div>

          <div className="company">
            <p>Groupe Seb</p>
            <span>{t("mars - août 2026", "Mar - Aug 2026")}</span>
          </div>
        </Link>

        <Link to="/moi#stage-rennes" className="exp">
          <div className="title">
            <p>{t("Developpeur web", "Web Developer")}</p>
            <span>{t("(en Stage)", "(Internship)")}</span>
          </div>

          <div className="company">
            <p>{t("Université de Rennes", "University of Rennes")}</p>
            <span>{t("juillet 2025", "July 2025")}</span>
          </div>
        </Link>

        <Link to="/moi#groupe-vidon" className="exp">
          <div className="title">
            <p>{t("Développeur web", "Web Developer")}</p>
            <span>{t("(en alternance)", "(Work-study)")}</span>
          </div>

          <div className="company">
            <p>Groupe Vidon</p>
            <span>2023 - 2025</span>
          </div>
        </Link>
      </div>

      <div className="separator"></div>

      <div className="summer-job">
        <div className="up-title">
          <span>{t("LE MONDE PROFESSIONNEL", "THE WORKING WORLD")}</span>
          <p>{t("JOBS D’ÉTÉ", "SUMMER JOBS")}</p>
        </div>

        <Link to="/moi#vieilles-charrues" className="exp">
          <div className="title">
            <p>{t("Agent de propreté événementiel", "Event Cleaning Staff")}</p>
          </div>

          <div className="company">
            <p>
              {t("Association", "Non-profit")} <br />
              <i>{t("« Les Vieilles Charrues »", "“Les Vieilles Charrues”")}</i>
            </p>
            <span>{t("juillet 2023", "July 2023")}</span>
          </div>
        </Link>

        <Link to="/moi#deligel" className="exp">
          <div className="title">
            <p>
              {t(
                "Vendeur / Livreur en porte à porte",
                "Door-to-Door Salesman / Delivery Driver",
              )}
            </p>
          </div>

          <div className="company">
            <p>SARL Deligel</p>
            <span>{t("juin - août 2022", "Jun - Aug 2022")}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Experiences;
