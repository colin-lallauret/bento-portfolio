import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import transition from "../transition";

import Header from "../Components/Regions/Header";
import KnowMore from "../Components/KnowMore";
import RollBanner from "../Components/RollBanner";

import FavIcon from "../Assets/Favicon/favicon.ico";
import FavIconOutline from "../Assets/Favicon/outlinefavicon.ico";
import Map from "../Assets/Images/map.png";

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

          <div className="know-more-wrapper">
            <RollBanner />

            <div className="map-others-wrapper">
              <div className="map">
                <img src={Map} alt="map" />
              </div>

              <div className="others">
                <div className="cv">
                  <div className="cv-content">
                    <span>2025 CV</span>
                    <p>RESUME</p>
                  </div>
                  <div className="cv-btns"></div>
                </div>
                <div className="theme-switcher"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="item" id="second"></div>
        <div className="item" id="third"></div>
      </main>
    </>
  );
}

export default transition(All);
