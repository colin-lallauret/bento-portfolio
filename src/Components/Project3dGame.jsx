import React from "react";
import { Link } from "react-router-dom";

import MinecraftVR from "../Assets/Images/Projects/MinecraftVR.png";
import IlePerdu from "../Assets/Images/Projects/IlePerdu.png";
import NinjaCut from "../Assets/Images/Projects/NinjaCut.png";
import LavalVirtual from "../Assets/Images/Projects/laval.png";
import { useLang } from "../i18n";

function Project3dGame() {
  const { t } = useLang();
  return (
    <>
      <Link to="/projet/3d-game/minecraft-vr" className="project-item left">
        <img src={MinecraftVR} alt="MinecraftVR" />
        <div className="project-text">
          <h5>MinecraftVR</h5>
          <p>
            {t(
              <>
                La réalisation d’un environnement interactif en réalité
                virtuelle sur le thème du meilleur jeu au monde... nommé «
                Minecraft » 🥁.
              </>,
              <>
                Building an interactive virtual reality environment themed on
                the best game in the world... called “Minecraft” 🥁.
              </>,
            )}
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
          <h5>{t("Île perdu", "Lost Island")}</h5>
          <p>
            {t(
              <>
                L’imagination et la conception d’une île abandonnée, figée dans
                le temps, qui s’est fait piller par des pirates.
              </>,
              <>
                Imagining and designing an abandoned island, frozen in time,
                that was looted by pirates.
              </>,
            )}
          </p>
          <div className="tags">
            <span>Blender</span>
            <span>3D</span>
            <span>{t("Créativité", "Creativity")}</span>
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
            {t(
              <>
                Le développement d’un jeu sur Unity, inspiré du célèbre jeu
                nommé « Fruit Ninja ».
              </>,
              <>
                Developing a Unity game inspired by the famous “Fruit Ninja”.
              </>,
            )}
          </p>
          <div className="tags">
            <span>Game</span>
            <span>Unity</span>
            <span>{t("Mini-Projet", "Mini-project")}</span>
          </div>
        </div>
      </Link>

      <div className="separator"></div>
      <Link to="/projet/3d-game/laval-virtual" className="project-item right">
        <div className="project-text">
          <h5>Laval Virtual</h5>
          <p>
            {t(
              <>
                Un marathon technologique de 30 heures, appelé « hackathon » !
              </>,
              <>A 30-hour tech marathon, a.k.a. a “hackathon”!</>,
            )}
          </p>
          <div className="tags">
            <span>Hackathon</span>
            <span>30h</span>
            <span>VR / AR</span>
          </div>
        </div>
        <img src={LavalVirtual} alt="Laval Virtual" />
      </Link>
    </>
  );
}

export default Project3dGame;
