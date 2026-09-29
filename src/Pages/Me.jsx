import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import transition from "../transition";

import Header from "../Components/Regions/Header";
import Footer from "../Components/Regions/Footer";

import FavIcon from "../Assets/Favicon/favicon.ico";
import FavIconOutline from "../Assets/Favicon/outlinefavicon.ico";
import About from "../Components/About";
import Studies from "../Components/Studies";
import ExperiencesMore from "../Components/ExperiencesMore";

function Me() {
  useEffect(() => {
    document.title = "À propos — Colin Lallauret";

    const handleVisibilityChange = () => {
      const favicon = document.querySelector("link[rel='icon']");
      if (document.visibilityState === "hidden") {
        document.title = "Où allez-vous ? 💻✨";
        favicon.href = FavIconOutline;
      } else {
        document.title = "À propos — Colin Lallauret";
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
      <main className="me" id="main-content" tabIndex={-1}>
        <About />
        <Studies />
        <ExperiencesMore />
      </main>
      <Footer />
    </>
  );
}

export default transition(Me);
