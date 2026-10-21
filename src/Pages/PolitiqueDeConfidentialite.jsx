import React from "react";
import { Link, useNavigate } from "react-router-dom";
import transition from "../transition";

import Header from "../Components/Regions/Header";
import Footer from "../Components/Regions/Footer";
import { useLang, usePageTitle } from "../i18n";

function PolitiqueDeConfidentialite() {
  const { t } = useLang();
  usePageTitle(
    "Politique de confidentialité — Colin LALLAURET",
    "Privacy policy — Colin LALLAURET",
  );

  return (
    <>
      <Header />
      <main className="project" id="main-content" tabIndex={-1}>
        <div className="title-wrapper">
          <div className="title">
            <h1>{t("Politique de confidentialité", "Privacy policy")}</h1>
          </div>
        </div>
        <div className="content-wrapper">
          <div className="text" style={{ width: "100%" }}>
            <div>
              <h4>Introduction</h4>
              <p>
                {t(
                  <>
                    Cette politique de confidentialité a pour but d'informer les
                    utilisateurs de ce site des données personnelles collectées
                    et de leur utilisation.
                  </>,
                  <>
                    This privacy policy informs users of this site about the
                    personal data collected and how it is used.
                  </>,
                )}
              </p>
            </div>
            <div>
              <h4>{t("Données collectées", "Data collected")}</h4>
              <h5>
                {t(
                  "Données de navigation (via Umami)",
                  "Browsing data (via Umami)",
                )}
              </h5>
              <p>
                {t(
                  <>
                    Nous utilisons Umami Analytics, une solution de mesure
                    d&apos;audience respectueuse de la vie privée, qui collecte
                    :
                  </>,
                  <>
                    We use Umami Analytics, a privacy-friendly audience
                    measurement tool, which collects:
                  </>,
                )}
              </p>
              <p>
                <b>{t("Pages visitées", "Pages visited")}</b>
              </p>
              <p>
                <b>{t("Durée de la visite", "Visit duration")}</b>
              </p>
              <p>
                <b>{t("Type d&apos;appareil utilisé", "Device type")}</b>
              </p>
              <p>
                <b>{t("Pays d&apos;origine", "Country of origin")}</b>
              </p>
              <p>
                {t(
                  <>
                    Ces données sont anonymisées et ne permettent pas
                    d&apos;identifier personnellement les visiteurs.
                  </>,
                  <>
                    This data is anonymised and cannot be used to personally
                    identify visitors.
                  </>,
                )}
              </p>
            </div>
            <div>
              <h4>{t("Utilisation des données", "How data is used")}</h4>
              <p>
                {t(
                  <>
                    Les données de navigation sont utilisées uniquement à des
                    fins statistiques pour améliorer l&apos;expérience
                    utilisateur. Les données du formulaire de contact sont
                    utilisées exclusivement pour répondre à vos demandes
                  </>,
                  <>
                    Browsing data is used for statistical purposes only, to
                    improve the user experience. Contact data is used solely to
                    answer your requests.
                  </>,
                )}
              </p>
            </div>
            <div>
              <h4>{t("Durée de conservation", "Retention period")}</h4>
              <p>
                {t(
                  <>
                    <b>Données de navigation :</b> 12 mois
                  </>,
                  <>
                    <b>Browsing data:</b> 12 months
                  </>,
                )}
              </p>
              <p>
                {t(
                  <>
                    <b>Données de contact :</b> 3 ans maximum après le dernier
                    contact
                  </>,
                  <>
                    <b>Contact data:</b> up to 3 years after the last contact
                  </>,
                )}
              </p>
            </div>
            <div>
              <h4>{t("Vos droits", "Your rights")}</h4>
              <p>
                {t(
                  <>
                    Conformément au RGPD, vous disposez des droits suivants :
                  </>,
                  <>Under the GDPR, you have the following rights:</>,
                )}
              </p>
              <p>
                <b>
                  {t(
                    "Droit d&apos;accès à vos données",
                    "Right of access to your data",
                  )}
                </b>
              </p>
              <p>
                <b>{t("Droit de rectification", "Right to rectification")}</b>
              </p>
              <p>
                <b>{t("Droit d&apos;effacement", "Right to erasure")}</b>
              </p>
              <p>
                <b>
                  {t(
                    "Droit à la limitation du traitement",
                    "Right to restriction of processing",
                  )}
                </b>
              </p>
              <p>
                <b>
                  {t(
                    "Droit à la portabilité des données",
                    "Right to data portability",
                  )}
                </b>
              </p>
              <p>
                <b>{t("Droit d&apos;opposition", "Right to object")}</b>
              </p>
              <p>
                {t(
                  <>
                    Pour exercer ces droits, contactez-moi via
                    colinlallauret1@gmail.com
                  </>,
                  <>
                    To exercise these rights, contact me at
                    colinlallauret1@gmail.com
                  </>,
                )}
              </p>
            </div>
            <div>
              <h4>{t("Sécurité des données", "Data security")}</h4>
              <p>
                {t(
                  <>
                    Nous nous engageons à protéger vos données personnelles en :
                  </>,
                  <>We are committed to protecting your personal data by:</>,
                )}
              </p>
              <p>
                <b>
                  {t(
                    <>
                      Utilisant des services respectueux de la vie privée
                      (Umami) :
                    </>,
                    <>Using privacy-friendly services (Umami)</>,
                  )}
                </b>
              </p>
              <p>
                <b>
                  {t(
                    <>Limitant l&apos;accès aux données personnelles</>,
                    <>Limiting access to personal data</>,
                  )}
                </b>
              </p>
              <p>
                <b>
                  {t(
                    <>
                      Sécurisant l&apos;accès à l&apos;administration du site
                    </>,
                    <>Securing access to the site administration</>,
                  )}
                </b>
              </p>
            </div>
            <div>
              <h4>{t("Mise à jour", "Updates")}</h4>
              <p>
                {t(
                  <>
                    Cette politique de confidentialité peut être mise à jour à
                    tout moment. La date de dernière mise à jour sera toujours
                    indiquée en bas de cette page.
                  </>,
                  <>
                    This privacy policy may be updated at any time. The date of
                    the last update is always shown at the bottom of this page.
                  </>,
                )}
              </p>
              <p>
                {t(
                  <>
                    <b>Dernière mise à jour : </b> 19 avril 2025
                  </>,
                  <>
                    <b>Last updated:</b> April 19, 2025
                  </>,
                )}
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default transition(PolitiqueDeConfidentialite);
