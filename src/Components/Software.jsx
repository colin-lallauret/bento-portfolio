import React, { useState } from "react";

import Figma from "../Assets/Images/Software/figma.svg";
import Miro from "../Assets/Images/Software/miro.svg";
import Illustrator from "../Assets/Images/Software/adobeillustrator.svg";
import Photoshop from "../Assets/Images/Software/adobephotoshop.svg";
import Unity from "../Assets/Images/Software/unity.svg";
import VsCode from "../Assets/Images/Software/visualstudiocode.svg";
import GitHub from "../Assets/Images/Software/github.svg";
import Jira from "../Assets/Images/Software/jira.svg";
import Trello from "../Assets/Images/Software/trello.svg";
import Notion from "../Assets/Images/Software/notion.svg";
import Claude from "../Assets/Images/Software/claude.svg";
import Orca from "../Assets/Images/Software/orca.svg";
import ComfyUI from "../Assets/Images/Software/comfyui.svg";
import N8n from "../Assets/Images/Software/n8n.svg";

const tools = [
  {
    key: "figma",
    src: Figma,
    name: "Figma",
    desc: "Outil de design UI/UX pour mes maquettes, prototypes et systèmes de composants.",
  },
  {
    key: "miro",
    src: Miro,
    name: "Miro",
    desc: "Tableau blanc collaboratif pour mes brainstorms, user flows et ateliers d'idéation.",
  },
  {
    key: "adobeillustrator",
    src: Illustrator,
    name: "Adobe Illustrator",
    desc: "Création et retouche de visuels vectoriels pour mes maquettes et supports graphiques.",
  },
  {
    key: "adobephotoshop",
    src: Photoshop,
    name: "Adobe Photoshop",
    desc: "Retouche photo et compositing pour mes visuels et assets graphiques.",
  },
  {
    key: "unity",
    src: Unity,
    name: "Unity",
    desc: "Moteur de jeu pour mes projets 3D et expériences interactives.",
  },
  {
    key: "vscode",
    src: VsCode,
    name: "VS Code",
    desc: "Mon éditeur de code au quotidien pour tous mes projets de développement.",
  },
  {
    key: "github",
    src: GitHub,
    name: "GitHub",
    desc: "Versioning et hébergement de mon code, suivi de mes projets.",
  },
  {
    key: "jira",
    src: Jira,
    name: "Jira",
    desc: "Suivi de tickets et gestion de projet en méthode agile.",
  },
  {
    key: "trello",
    src: Trello,
    name: "Trello",
    desc: "Organisation de mes tâches et suivi de projet en mode kanban.",
  },
  {
    key: "notion",
    src: Notion,
    name: "Notion",
    desc: "Prise de notes, documentation et organisation de mes projets.",
  },
  {
    key: "claude",
    src: Claude,
    name: "Claude Code",
    desc: "Mon assistant IA en ligne de commande pour coder, débugger et refactorer plus vite.",
  },
  {
    key: "orca",
    src: Orca,
    name: "Orca",
    desc: "Environnement de dev pour piloter plusieurs agents IA en parallèle sur mes projets de code.",
  },
  {
    key: "comfyui",
    src: ComfyUI,
    name: "ComfyUI",
    desc: "Génération d'images par workflows IA pour mes visuels et assets créatifs.",
  },
  {
    key: "n8n",
    src: N8n,
    name: "n8n",
    desc: "Automatisation de workflows entre mes outils et services.",
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
