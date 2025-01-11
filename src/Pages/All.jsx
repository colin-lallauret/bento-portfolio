import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import transition from "../transition";

import Header from "../Components/Regions/Header";
import KnowMore from "../Components/KnowMore";

import FavIcon from "../Assets/Favicon/favicon.ico";
import FavIconOutline from "../Assets/Favicon/outlinefavicon.ico";

function All() {
  useEffect(() => {
    document.title = "Portfolio — Colin LALLAURET";

    const handleVisibilityChange = () => {
      const favicon = document.querySelector("link[rel='icon']");
      if (document.visibilityState === "hidden") {
        document.title = "Où allez-vous ? 💻✨";
        favicon.href = FavIconOutline;
      } else {
        document.title = "Portfolio — Colin LALLAURET";
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
      <main className="home">
        <div className="item" id="first">
          <KnowMore />
          <div className="know-more-wrapper"></div>
        </div>
        <div className="item" id="second"></div>
        <div className="item" id="third"></div>
      </main>
    </>
  );
}

export default transition(All);
