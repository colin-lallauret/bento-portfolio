import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import transition from "../transition";

import Header from "../Components/Regions/Header";
import KnowMore from "../Components/KnowMore";
import RollBanner from "../Components/RollBanner";
import Cv from "../Components/Cv";
import ThemeSwitcher from "../Components/ThemeSwitcher";
import SocialsMedia from "../Components/SocialsMedia";

import Mail from "../Assets/Images/mail.svg";

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
              <img className="map" src={Map} alt="map" />

              <div className="others">
                <Cv />
                <ThemeSwitcher />
              </div>
            </div>
          </div>
        </div>
        <div className="item" id="second">
          <div className="socialsmedia--software-mail">
            <SocialsMedia />
            <div className="software-mail">
              <div className="software"></div>
              <a className="mail" href="mailto:colinlallauret1@gmail.com">
                <img src={Mail} alt="mail" />
              </a>
            </div>
          </div>
          <div className="studies internal-link">
            <div>
              <span>BIENTÔT UN BAC+3</span>
              <p>FORMATIONS</p>
            </div>
            <div></div>
            <div>
              <span>
                *BUT : <em>B</em>achelor <em>U</em>niversitaire <em>T</em>
                echnologique
              </span>
              <span>
                **MMI : <em>M</em>étiers du <em>M</em>ultimédia et de l’
                <em>I</em>nternet
              </span>
            </div>
          </div>
        </div>
        <div className="item" id="third">
          <div className="projects internal-link">
            <div className="up-title">
              <span>UN PETIT TEASING DE MES</span>
              <p>PROJETS</p>
            </div>
          </div>
          <div className="experiences internal-link">
            <div className="dev-web">
              <div className="up-title">
                <span>2 ANS</span>
                <p>EXPÉRIENCE</p>
              </div>

              <div className="exp">
                <div className="title">
                  <p>Développeur web</p>
                  <span>(en alternance)</span>
                </div>

                <div className="company">
                  <p>Groupe Vidon</p>
                  <span>2023 - 2025</span>
                </div>
              </div>
            </div>

            <div className="separator"></div>

            <div className="summer-job">
              <div className="up-title">
                <span>LE MONDE PROFESSIONNEL</span>
                <p>JOBS D’ÉTÉ</p>
              </div>

              <div className="exp">
                <div className="title">
                  <p>Agent de propreté événementiel</p>
                </div>

                <div className="company">
                  <p>
                    Association <br />
                    <i>« Les Vieilles Charrues »</i>
                  </p>
                  <span>juillet 2023</span>
                </div>
              </div>

              <div className="exp">
                <div className="title">
                  <p>Vendeur / Livreur en porte à porte</p>
                </div>

                <div className="company">
                  <p>SARL Deligel</p>
                  <span>juin - août 2022</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default transition(All);
