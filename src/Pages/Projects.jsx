import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import transition from "../transition";

import Header from "../Components/Regions/Header";
import Footer from "../Components/Regions/Footer";
import FavIcon from "../Assets/Favicon/favicon.ico";
import FavIconOutline from "../Assets/Favicon/outlinefavicon.ico";
import Random from "../Assets/Images/random.svg";

import ProjectUIUX from "../Components/ProjectUIUX";
import ProjectWeb from "../Components/ProjectWeb";
import Project3dGame from "../Components/Project3dGame";

function Projects() {
  useEffect(() => {
    document.title = "Projets — Colin LALLAURET";

    const handleVisibilityChange = () => {
      const favicon = document.querySelector("link[rel='icon']");
      if (document.visibilityState === "hidden") {
        document.title = "Où allez-vous ? 💻✨";
        favicon.href = FavIconOutline;
      } else {
        document.title = "Projets — Colin LALLAURET";
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
      <main className="projects" id="main-content" tabIndex={-1}>
        <div className="projects internal-link">
          <div className="up-title">
            <span>UN PETIT TEASING DE MES</span>
            <p>PROJETS</p>
          </div>
          <div className="btns" role="tablist" aria-label="Filtrer les projets">
            <button
              type="button"
              role="tab"
              aria-selected={activeProject === "UI / UX Design"}
              className={`btn ${
                activeProject === "UI / UX Design" ? "active" : ""
              }`}
              onClick={() => setActiveProject("UI / UX Design")}
            >
              UI / UX Design
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeProject === "Web"}
              className={`btn ${activeProject === "Web" ? "active" : ""}`}
              onClick={() => setActiveProject("Web")}
            >
              Web
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeProject === "3D / Game"}
              className={`btn ${activeProject === "3D / Game" ? "active" : ""}`}
              onClick={() => setActiveProject("3D / Game")}
            >
              3D / Game
            </button>
          </div>
          <div className="projects-wrapper" role="tabpanel">{renderProject()}</div>

          <button
            type="button"
            className="btn-random"
            aria-label="Voir un projet au hasard"
            onClick={handleRandomClick}
          >
            <img src={Random} alt="" />
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default transition(Projects);
