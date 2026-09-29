import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import transition from "../transition";

import Header from "../Components/Regions/Header";
import Footer from "../Components/Regions/Footer";

import FavIcon from "../Assets/Favicon/favicon.ico";
import FavIconOutline from "../Assets/Favicon/outlinefavicon.ico";
function PolitiqueDeConfidentialite() {
  useEffect(() => {
    document.title = "Politique de confidentialité — Colin LALLAURET";

    const handleVisibilityChange = () => {
      const favicon = document.querySelector("link[rel='icon']");
      if (document.visibilityState === "hidden") {
        document.title = "Où allez-vous ? 💻✨";
        favicon.href = FavIconOutline;
      } else {
        document.title = "Politique de confidentialité — Colin LALLAURET";
        favicon.href = FavIcon;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <>
      <Header />
      <main className="project" id="main-content" tabIndex={-1}>
        <div className="title-wrapper">
          <div className="title">
            <h1>Politique de confidentialité</h1>
          </div>
        </div>
        <div className="content-wrapper">
          <div className="text" style={{ width: "100%" }}>
            <div>
              <h4>Introduction</h4>
              <p>
                Cette politique de confidentialité a pour but d'informer les
                utilisateurs de ce site des données personnelles collectées et
                de leur utilisation.
              </p>
            </div>
            <div>
              <h4>Données collectées</h4>
              <h5>Données de navigation (via Umami)</h5>
              <p>
                Nous utilisons Umami Analytics, une solution de mesure
                d&apos;audience respectueuse de la vie privée, qui collecte :
              </p>
              <p>
                <b>Pages visitées</b>
              </p>
              <p>
                <b>Durée de la visite</b>
              </p>
              <p>
                <b>Type d&apos;appareil utilisé</b>
              </p>
              <p>
                <b>Pays d&apos;origine</b>
              </p>
              <p>
                Ces données sont anonymisées et ne permettent pas
                d&apos;identifier personnellement les visiteurs.
              </p>
            </div>
            <div>
              <h4>Utilisation des données</h4>
              <p>
                Les données de navigation sont utilisées uniquement à des fins
                statistiques pour améliorer l&apos;expérience utilisateur. Les
                données du formulaire de contact sont utilisées exclusivement
                pour répondre à vos demandes
              </p>
            </div>
            <div>
              <h4>Durée de conservation</h4>
              <p>
                <b>Données de navigation :</b> 12 mois
              </p>
              <p>
                <b>Données de contact :</b> 3 ans maximum après le dernier
                contact
              </p>
            </div>
            <div>
              <h4>Vos droits</h4>
              <p>Conformément au RGPD, vous disposez des droits suivants :</p>
              <p>
                <b>Droit d&apos;accès à vos données</b>
              </p>
              <p>
                <b>Droit de rectification</b>
              </p>
              <p>
                <b>Droit d&apos;effacement</b>
              </p>
              <p>
                <b>Droit à la limitation du traitement</b>
              </p>
              <p>
                <b>Droit à la portabilité des données</b>
              </p>
              <p>
                <b>Droit d&apos;opposition</b>
              </p>
              <p>
                Pour exercer ces droits, contactez-moi via
                colinlallauret1@gmail.com
              </p>
            </div>
            <div>
              <h4>Sécurité des données</h4>
              <p>
                Nous nous engageons à protéger vos données personnelles en :
              </p>
              <p>
                <b>
                  Utilisant des services respectueux de la vie privée (Umami) :
                </b>
              </p>
              <p>
                <b>Limitant l&apos;accès aux données personnelles</b>
              </p>
              <p>
                <b>Sécurisant l&apos;accès à l&apos;administration du site</b>
              </p>
            </div>
            <div>
              <h4>Mise à jour</h4>
              <p>
                Cette politique de confidentialité peut être mise à jour à tout
                moment. La date de dernière mise à jour sera toujours indiquée
                en bas de cette page.
              </p>
              <p>
                <b>Dernière mise à jour : </b> 19 avril 2025
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
