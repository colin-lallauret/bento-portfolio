import React, { useState } from "react";

import Orca from "../Assets/Images/Software/orca.svg";
import Claude from "../Assets/Images/Software/claude.svg";
import Figma from "../Assets/Images/Software/figma.svg";
import ComfyUI from "../Assets/Images/Software/comfyui.svg";
import Vercel from "../Assets/Images/Software/vercel.svg";

const tools = [
  {
    key: "orca",
    src: Orca,
    name: "Orca",
    desc: "Environnement de dev pour piloter plusieurs agents IA en parallèle sur mes projets de code.",
  },
  {
    key: "claude",
    src: Claude,
    name: "Claude Code",
    desc: "Mon assistant IA en ligne de commande pour coder, débugger et refactorer plus vite.",
  },
  {
    key: "figma",
    src: Figma,
    name: "Figma",
    desc: "Outil de design UI/UX pour mes maquettes, prototypes et systèmes de composants.",
  },
  {
    key: "comfyui",
    src: ComfyUI,
    name: "ComfyUI",
    desc: "Génération d'images par workflows IA pour mes visuels et assets créatifs.",
  },
  {
    key: "vercel",
    src: Vercel,
    name: "Vercel",
    desc: "Hébergement et déploiement continu de mes projets web.",
  },
];

function Software() {
  const [hovered, setHovered] = useState(null);

  const handleEnter = (uid, tool, e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHovered({
      uid,
      name: tool.name,
      desc: tool.desc,
      top: rect.top,
      left: rect.left + rect.width / 2,
    });
  };

  return (
    <div className="software">
      <div className="logo-slider">
        <div className={`img-wrapper${hovered ? " paused" : ""}`}>
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              {tools.map((tool) => {
                const uid = `${tool.key}-${i}`;
                return (
                  <div
                    className="img-container"
                    key={uid}
                    aria-hidden={i === 1 ? "true" : undefined}
                    onMouseEnter={(e) => handleEnter(uid, tool, e)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <img src={tool.src} alt={i === 1 ? "" : tool.name} />
                  </div>
                );
              })}
            </React.Fragment>
          ))}
        </div>
      </div>
      {hovered && (
        <div
          className="tooltip"
          style={{ top: hovered.top, left: hovered.left }}
        >
          <p>{hovered.name}</p>
          <span>{hovered.desc}</span>
        </div>
      )}
      <div className="software-text">
        <span>J'UTILISE ACTUELLEMENT</span>
        <p>ET J'❤️ ÇA</p>
      </div>
    </div>
  );
}

export default Software;
