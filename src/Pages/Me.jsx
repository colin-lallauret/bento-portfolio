import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import transition from "../transition";

import Header from "../Components/Regions/Header";

import FavIcon from "../Assets/Favicon/favicon.ico";
import FavIconOutline from "../Assets/Favicon/outlinefavicon.ico";

function Me() {
  useEffect(() => {
    document.title = "À Propos — Colin LALLAURET";

    const handleVisibilityChange = () => {
      const favicon = document.querySelector("link[rel='icon']");
      if (document.visibilityState === "hidden") {
        document.title = "Où allez-vous ? 💻✨";
        favicon.href = FavIconOutline;
      } else {
        document.title = "À Propos — Colin LALLAURET";
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
      <main className="me">
        <div className="container about">
          <div className="title">
            <span>BESOINS D’UN PEU PLUS D’INFORMATION SUR MOI ?</span>
            <p>À PROPOS</p>
          </div>
        </div>

        <div className="container studies">
          <div className="title">
            <span>PLUS DE DÉTAILS SUR MES ÉTUDES ?</span>
            <p>FORMATIONS</p>
          </div>
        </div>

        <div className="container experiences">
          <div className="title">
            <span>MES DÉBUTS DANS LE MONDE PROFESSIONNEL</span>
            <p>EXPÉRIENCE</p>
          </div>
        </div>
      </main>
    </>
  );
}

export default transition(Me);
