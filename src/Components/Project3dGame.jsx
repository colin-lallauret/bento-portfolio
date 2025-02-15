import React from "react";
import { Link } from "react-router-dom";

import MinecraftVR from "../Assets/Images/Projects/MinecraftVR.png";
import IlePerdu from "../Assets/Images/Projects/IlePerdu.png";
import NinjaCut from "../Assets/Images/Projects/NinjaCut.png";

function Project3dGame() {
  return (
    <>
      <Link to="/projet/3d-game/minecraft-vr" className="project-item left">
        <img src={MinecraftVR} alt="MinecraftVR" />
        <div className="project-text">
          <h5>MinecraftVR</h5>
          <p>
            La réalisation d’un environnement interactif en réalité virtuelle
            sur le thème du meilleur jeu au monde... nommé « Minecraft » 🥁.
          </p>
          <div className="tags">
            <span>Unity</span>
            <span>VR</span>
            <span>Interaction</span>
          </div>
        </div>
      </Link>
      <div className="separator"></div>
      <Link to="/projet/3d-game/ile-perdu" className="project-item right">
        <div className="project-text">
          <h5>Île perdu</h5>
          <p>
            L’imagination et la conception d’une île abandonnée, figée dans le
            temps, qui s’est fait piller par des pirates.
          </p>
          <div className="tags">
            <span>Blender</span>
            <span>3D</span>
            <span>Créativité</span>
          </div>
        </div>
        <img src={IlePerdu} alt="Île perdu" />
      </Link>
      <div className="separator"></div>

      <Link to="/projet/3d-game/ninjacut" className="project-item left">
        <img src={NinjaCut} alt="NinjaCut" />
        <div className="project-text">
          <h5>NinjaCut</h5>
          <p>
            Le développement d’un jeu sur Unity, inspiré du célèbre jeu nommé «
            Fruit Ninja ».
          </p>
          <div className="tags">
            <span>Game</span>
            <span>Unity</span>
            <span>Mini-Projet</span>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Project3dGame;
