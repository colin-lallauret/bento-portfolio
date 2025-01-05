import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Lenis from "lenis";

import All from "./Pages/All";
import Projects from "./Pages/Projects";
import Me from "./Pages/Me";

function App() {
  const lenis = new Lenis();

  const scrollSpeed = 1;

  function raf(time) {
    lenis.raf(time * scrollSpeed);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<All />}></Route>
          <Route path="/projets" element={<Projects />}></Route>
          <Route path="/moi" element={<Me />}></Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
