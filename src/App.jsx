import React, { lazy, Suspense } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Lenis from "lenis";

const All = lazy(() => import("./Pages/All"));
const Projects = lazy(() => import("./Pages/Projects"));
const Me = lazy(() => import("./Pages/Me"));

const Bleep = lazy(() => import("./Components/Projects/UI_UX/Bleep"));
const Kult = lazy(() => import("./Components/Projects/UI_UX/Kult"));
const CnT = lazy(() => import("./Components/Projects/UI_UX/ColinNTheo"));

const WebdocMMI = lazy(() => import("./Components/Projects/Web/WebdocMMI"));
const Runner = lazy(() => import("./Components/Projects/Web/Runner"));
const Portfolio = lazy(() => import("./Components/Projects/Web/Portfolio"));

const MinecraftVR = lazy(() =>
  import("./Components/Projects/3D_Game/MinecraftVR")
);
const IlePerdu = lazy(() => import("./Components/Projects/3D_Game/IlePerdu"));
const NinjaCut = lazy(() => import("./Components/Projects/3D_Game/NinjaCut"));
const LavalVirtual = lazy(() => import("./Components/Projects/3D_Game/LavalVirtual"));

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
    <Suspense fallback={<div className="loading"></div>}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<All />} />
          <Route path="/projets" element={<Projects />} />
          <Route path="/moi" element={<Me />} />

          <Route path="/projet/ui-ux/bleep" element={<Bleep />} />
          <Route path="/projet/ui-ux/cnt" element={<CnT />} />
          <Route path="/projet/ui-ux/kult" element={<Kult />} />

          <Route path="/projet/web/webdoc-mmi" element={<WebdocMMI />} />
          <Route path="/projet/web/runner" element={<Runner />} />
          <Route path="/projet/web/portfolio" element={<Portfolio />} />

          <Route
            path="/projet/3d-game/minecraft-vr"
            element={<MinecraftVR />}
          />
          <Route path="/projet/3d-game/ile-perdu" element={<IlePerdu />} />
          <Route path="/projet/3d-game/ninjacut" element={<NinjaCut />} />
          <Route path="/projet/3d-game/laval-virtual" element={<LavalVirtual />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}

export default App;
