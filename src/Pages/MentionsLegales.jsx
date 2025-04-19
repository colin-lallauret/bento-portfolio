import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import transition from "../transition";

import Header from "../Components/Regions/Header";
import Footer from "../Components/Regions/Footer";

import FavIcon from "../Assets/Favicon/favicon.ico";
import FavIconOutline from "../Assets/Favicon/outlinefavicon.ico";
function MentionsLegales() {
  useEffect(() => {
    document.title = "Mentions légales — Colin LALLAURET";

    const handleVisibilityChange = () => {
      const favicon = document.querySelector("link[rel='icon']");
      if (document.visibilityState === "hidden") {
        document.title = "Où allez-vous ? 💻✨";
        favicon.href = FavIconOutline;
      } else {
        document.title = "Mentions légales — Colin LALLAURET";
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
      <main className="project">
        <div className="title-wrapper">
          <div className="title">
            <h1>Mentions légales</h1>
          </div>
        </div>
        <div className="content-wrapper">
          <div className="text" style={{ width: "100%" }}>
            <div>
              <h4>Éditeur du site</h4>
              <p>
                <b>Nom et Prénom :</b> Lallauret Colin
              </p>
              <p>
                <b>Adresse :</b> 29270 Carhaix-Plouguer
              </p>
              <p>
                <b>Email :</b> colinlallauret1@gmail.com
              </p>
              <p>
                <b>Statut :</b> Particulier
              </p>
            </div>
            <div>
              <h4>Hébergeur</h4>
              <p>
                <b>Nom :</b> Vercel Inc.
              </p>
              <p>
                <b>Adresse :</b> 440 N Barranca Ave #4133 Covina, CA 91723
              </p>
              <p>
                <b>Email :</b> aprivacy@vercel.com
              </p>
              <p>
                <b>Site web :</b> https://vercel.com
              </p>
            </div>
            <div>
              <h4>Propriété intellectuelle</h4>
              <p>
                L&apos;ensemble de ce site relève de la législation française et
                internationale sur le droit d&apos;auteur et la propriété
                intellectuelle. Tous les droits de reproduction sont réservés, y
                compris pour les documents téléchargeables et les
                représentations iconographiques et photographiques.
              </p>
            </div>
            <div>
              <h4>Conditions d&apos;utilisation</h4>
              <p>
                L&apos;utilisation de ce site implique l&apos;acceptation pleine
                et entière des conditions générales d&apos;utilisation décrites
                ci-dessus. Ces conditions d&apos;utilisation sont susceptibles
                d&apos;être modifiées ou complétées à tout moment.
              </p>
            </div>
            <div>
              <h4>Contact</h4>
              <p>
                Pour toute question relative au site et à son contenu, vous
                pouvez me contacter via ce mail : colinlallauret1@gmail.com.
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
