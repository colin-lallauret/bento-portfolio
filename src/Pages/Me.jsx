import React from "react";
import { Link, useNavigate } from "react-router-dom";
import transition from "../transition";

import Header from "../Components/Regions/Header";
import Footer from "../Components/Regions/Footer";

import About from "../Components/About";
import Studies from "../Components/Studies";
import ExperiencesMore from "../Components/ExperiencesMore";
import { usePageTitle } from "../i18n";

function Me() {
  usePageTitle("À propos — Colin Lallauret", "About me — Colin Lallauret");

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
