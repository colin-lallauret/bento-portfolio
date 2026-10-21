import React from "react";
import { Link, useNavigate } from "react-router-dom";
import transition from "../transition";

import Header from "../Components/Regions/Header";
import Footer from "../Components/Regions/Footer";
import { useLang, usePageTitle } from "../i18n";

function MentionsLegales() {
  const { t } = useLang();
  usePageTitle(
    "Mentions légales — Colin LALLAURET",
    "Legal notice — Colin LALLAURET",
  );

  return (
    <>
      <Header />
      <main className="project" id="main-content" tabIndex={-1}>
        <div className="title-wrapper">
          <div className="title">
            <h1>{t("Mentions légales", "Legal notice")}</h1>
          </div>
        </div>
        <div className="content-wrapper">
          <div className="text" style={{ width: "100%" }}>
            <div>
              <h4>{t("Éditeur du site", "Site publisher")}</h4>
              <p>
                {t(
                  <>
                    <b>Nom et Prénom :</b> Lallauret Colin
                  </>,
                  <>
                    <b>Full name:</b> Colin Lallauret
                  </>,
                )}
              </p>
              <p>
                {t(
                  <>
                    <b>Adresse :</b> 29270 Carhaix-Plouguer
                  </>,
                  <>
                    <b>Address:</b> 29270 Carhaix-Plouguer, France
                  </>,
                )}
              </p>
              <p>
                {t(
                  <>
                    <b>Email :</b> colinlallauret1@gmail.com
                  </>,
                  <>
                    <b>Email:</b> colinlallauret1@gmail.com
                  </>,
                )}
              </p>
              <p>
                {t(
                  <>
                    <b>Statut :</b> Particulier
                  </>,
                  <>
                    <b>Status:</b> Private individual
                  </>,
                )}
              </p>
            </div>
            <div>
              <h4>{t("Hébergeur", "Hosting provider")}</h4>
              <p>
                {t(
                  <>
                    <b>Nom :</b> Vercel Inc.
                  </>,
                  <>
                    <b>Name:</b> Vercel Inc.
                  </>,
                )}
              </p>
              <p>
                {t(
                  <>
                    <b>Adresse :</b> 440 N Barranca Ave #4133 Covina, CA 91723
                  </>,
                  <>
                    <b>Address:</b> 440 N Barranca Ave #4133 Covina, CA 91723
                  </>,
                )}
              </p>
              <p>
                {t(
                  <>
                    <b>Email :</b> aprivacy@vercel.com
                  </>,
                  <>
                    <b>Email:</b> aprivacy@vercel.com
                  </>,
                )}
              </p>
              <p>
                {t(
                  <>
                    <b>Site web :</b> https://vercel.com
                  </>,
                  <>
                    <b>Website:</b> https://vercel.com
                  </>,
                )}
              </p>
            </div>
            <div>
              <h4>{t("Propriété intellectuelle", "Intellectual property")}</h4>
              <p>
                {t(
                  <>
                    L&apos;ensemble de ce site relève de la législation
                    française et internationale sur le droit d&apos;auteur et la
                    propriété intellectuelle. Tous les droits de reproduction
                    sont réservés, y compris pour les documents téléchargeables
                    et les représentations iconographiques et photographiques.
                  </>,
                  <>
                    This entire site is governed by French and international
                    copyright and intellectual property law. All reproduction
                    rights are reserved, including for downloadable documents
                    and iconographic and photographic representations.
                  </>,
                )}
              </p>
            </div>
            <div>
              <h4>{t("Conditions d&apos;utilisation", "Terms of use")}</h4>
              <p>
                {t(
                  <>
                    L&apos;utilisation de ce site implique l&apos;acceptation
                    pleine et entière des conditions générales
                    d&apos;utilisation décrites ci-dessus. Ces conditions
                    d&apos;utilisation sont susceptibles d&apos;être modifiées
                    ou complétées à tout moment.
                  </>,
                  <>
                    Using this site implies full acceptance of the terms of use
                    described above. These terms may be changed or supplemented
                    at any time.
                  </>,
                )}
              </p>
            </div>
            <div>
              <h4>Contact</h4>
              <p>
                {t(
                  <>
                    Pour toute question relative au site et à son contenu, vous
                    pouvez me contacter via ce mail : colinlallauret1@gmail.com.
                  </>,
                  <>
                    For any question about the site and its content, you can
                    reach me at: colinlallauret1@gmail.com.
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

export default transition(MentionsLegales);
