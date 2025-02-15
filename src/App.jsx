import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Lenis from "lenis";

import All from "./Pages/All";
import Projects from "./Pages/Projects";
import Me from "./Pages/Me";
import Bleep from "./Components/Projects/UI_UX/Bleep";
import Kult from "./Components/Projects/UI_UX/Kult";
import CnT from "./Components/Projects/UI_UX/ColinNTheo";
import WebdocMMI from "./Components/Projects/Web/WebdocMMI";
import Runner from "./Components/Projects/Web/Runner";
import Portfolio from "./Components/Projects/Web/Portfolio";
import MinecraftVR from "./Components/Projects/3D_Game/MinecraftVR";
import IlePerdu from "./Components/Projects/3D_Game/IlePerdu";
import NinjaCut from "./Components/Projects/3D_Game/NinjaCut";

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
          <Route path="/projet/ui-ux/cnt" element={<CnT />}></Route>
          <Route path="/projet/ui-ux/kult" element={<Kult />}></Route>

          <Route path="/projet/web/webdoc-mmi" element={<WebdocMMI />}></Route>
          <Route path="/projet/web/runner" element={<Runner />}></Route>
          <Route path="/projet/web/portfolio" element={<Portfolio />}></Route>

          <Route path="/projet/3d-game/minecraft-vr" element={<MinecraftVR />}></Route>
          <Route path="/projet/3d-game/ile-perdu" element={<IlePerdu />}></Route>
          <Route path="/projet/3d-game/ninjacut" element={<NinjaCut />}></Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
