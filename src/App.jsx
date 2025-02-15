import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Lenis from "lenis";

import All from "./Pages/All";
import Projects from "./Pages/Projects";
import Me from "./Pages/Me";
import Bleep from "./Components/Projects/UI_UX/Bleep";

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

          <Route path="/projet/ui-ux/bleep" element={<Bleep />}></Route>
          <Route path="/projet/ui-ux/cnt" element={<Bleep />}></Route>
          <Route path="/projet/ui-ux/kult" element={<Bleep />}></Route>

          <Route path="/projet/web/webdoc-mmi" element={<Bleep />}></Route>
          <Route path="/projet/web/runner" element={<Bleep />}></Route>
          <Route path="/projet/web/portfolio" element={<Bleep />}></Route>

          <Route path="/projet/3d-game/minecraft-vr" element={<Bleep />}></Route>
          <Route path="/projet/3d-game/ile-perdu" element={<Bleep />}></Route>
          <Route path="/projet/3d-game/ninjacut" element={<Bleep />}></Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
