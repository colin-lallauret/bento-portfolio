import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import transition from "../transition";

import Header from "../Components/Regions/Header";
import Footer from "../Components/Regions/Footer";
import KnowMore from "../Components/KnowMore";
import RollBanner from "../Components/RollBanner";
import Cv from "../Components/Cv";
import ThemeSwitcher from "../Components/ThemeSwitcher";
import SocialsMedia from "../Components/SocialsMedia";

import Mail from "../Assets/Images/mail.svg";

import FavIcon from "../Assets/Favicon/favicon.ico";
import FavIconOutline from "../Assets/Favicon/outlinefavicon.ico";
import Map from "../../public/map.webp";
import Random from "../Assets/Images/random.svg";

import Software from "../Components/Software";
import Timeline from "../Components/Timeline";
import ProjectUIUX from "../Components/ProjectUIUX";
import Experiences from "../Components/Experiences";
import ProjectWeb from "../Components/ProjectWeb";
import Project3dGame from "../Components/Project3dGame";

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

  const [activeProject, setActiveProject] = React.useState("UI / UX Design");

  const renderProject = () => {
    switch (activeProject) {
      case "UI / UX Design":
        return <ProjectUIUX />;
      case "Web":
        return <ProjectWeb />;
      case "3D / Game":
        return <Project3dGame />;
      default:
        return null;
    }
  };

  const navigate = useNavigate();

  const handleRandomClick = () => {
    const urls = [
      "/projet/ui-ux/bleep",
      "/projet/ui-ux/cnt",
      "/projet/ui-ux/kult",
      "/projet/web/webdoc-mmi",
      "/projet/web/runner",
      "/projet/web/portfolio",
      "/projet/3d-game/minecraft-vr",
      "/projet/3d-game/ile-perdu",
      "/projet/3d-game/ninjacut",
    ];
    const randomUrl = urls[Math.floor(Math.random() * urls.length)];
    navigate(randomUrl);
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
              <img
                className="map"
                src={Map}
                alt="Carte interactive"
                width="800"
                height="600"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
              {/* <div className="map"></div> */}

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
              <Software />
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
            <div>
              <Timeline />
            </div>
            <div>
              <span>
                <i style={{ opacity: 0 }}>*</i>*BUT : <em>B</em>achelor{" "}
                <em>U</em>niversitaire <em>T</em>
                echnologique
              </span>
              <span>
                **MMI : <em>M</em>étiers du <em>M</em>ultimédia et de l’
                <em>I</em>
                nternet
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
            <div className="btns">
              <div
                className={`btn ${
                  activeProject === "UI / UX Design" ? "active" : ""
                }`}
                onClick={() => setActiveProject("UI / UX Design")}
              >
                UI / UX Design
              </div>
              <div
                className={`btn ${activeProject === "Web" ? "active" : ""}`}
                onClick={() => setActiveProject("Web")}
              >
                Web
              </div>
              <div
                className={`btn ${
                  activeProject === "3D / Game" ? "active" : ""
                }`}
                onClick={() => setActiveProject("3D / Game")}
              >
                3D / Game
              </div>
            </div>
            <div className="projects-wrapper">{renderProject()}</div>

            <div className="btn-random" onClick={handleRandomClick}>
              <img src={Random} alt="Random" />
            </div>
          </div>

          <Experiences />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default transition(All);
