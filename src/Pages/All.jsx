import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import transition from "../transition";

import Header from "../Components/Regions/Header";
import KnowMore from "../Components/KnowMore";
import RollBanner from "../Components/RollBanner";

import FavIcon from "../Assets/Favicon/favicon.ico";
import FavIconOutline from "../Assets/Favicon/outlinefavicon.ico";
import Map from "../Assets/Images/map.png";
import Download from "../Assets/Images/download.png";
import Visuel from "../Assets/Images/visuel.svg";
import Night from "../Assets/Images/night.svg";
import Day from "../Assets/Images/day.svg";

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

  const handleThemeSwitch = (e) => {
    const buttons = document.querySelectorAll(".theme-switcher .btn");
    buttons.forEach((btn) => btn.classList.remove("active"));
    e.currentTarget.classList.add("active");
  };

  return (
    <>
      <Header />
      <main className="home">
        <div className="item" id="first">
          <KnowMore />

          <div className="know-more-wrapper">
            <RollBanner />

            <div className="map-others-wrapper">
              <img className="map" src={Map} alt="map" />

              <div className="others">
                <div className="cv">
                  <div className="cv-content">
                    <span>2025 CV</span>
                    <p>RESUME</p>
                  </div>
                  <div className="cv-btns">
                    <img src={Download} alt="download" />
                    <img src={Visuel} alt="visuel" />
                  </div>
                </div>
                <div className="theme-switcher">
                  <div className="btn active" onClick={handleThemeSwitch}>
                    <img src={Day} alt="day" />
                  </div>
                  <div className="btn" onClick={handleThemeSwitch}>
                    <img src={Night} alt="night" />
                  </div>
                </div>
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
