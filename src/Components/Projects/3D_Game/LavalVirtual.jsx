import React, { useEffect } from "react";
import Header from "../../Regions/Header";
import { Link } from "react-router-dom";
import transition from "../../../transition";
import FavIcon from "../../../Assets/Favicon/favicon.ico";
import FavIconOutline from "../../../Assets/Favicon/outlinefavicon.ico";

import Image1 from "../../../Assets/Images/Full_img/laval/1.mp4";
import Image2 from "../../../Assets/Images/Full_img/laval/2.jpg";
import Image3 from "../../../Assets/Images/Full_img/laval/3.jpg";

import Unity from "../../../Assets/Images/Icons/Logiciels/unity.png";
import MetaQuest from "../../../Assets/Images/Icons/Logiciels/metaquest.png";
import Blender from "../../../Assets/Images/Icons/Logiciels/blender.png";

import Arrow from "../../../Assets/Images/arrow.svg";

function LavalVirtual() {
  useEffect(() => {
    document.title = "NinjaCut (projet) — Colin LALLAURET";

    const handleVisibilityChange = () => {
      const favicon = document.querySelector("link[rel='icon']");
      if (document.visibilityState === "hidden") {
        document.title = "Où allez-vous ? 💻✨";
        favicon.href = FavIconOutline;
      } else {
        document.title = "Laval Virtual (projet) — Colin LALLAURET";
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
      <main className="project">
        <div className="title-wrapper">
          <div className="title">
            <h1>Laval Virtual</h1>
            <p>#Hackaton</p>
          </div>
          <div className="tags">
            <p className="tag">Hackaton</p>
            <p className="tag">30 heures</p>
            <p className="tag">VR / AR</p>
          </div>
        </div>
        <div className="img-wrapper">
          <video className="video" controls loop muted>
            <source src={Image1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="img-group">
            <img className="img-laval" src={Image2} alt="rdm" />
            <img className="img-laval" src={Image3} alt="rdm" />
          </div>
        </div>
        <div className="content-wrapper">
          <div className="text">
            <h3>Hackaton de Laval Virtual</h3>
            <a
              target="_blank"
              style={{
                color: "#3043FE",
                textDecoration: "underline",
                fontStyle: "italic",
              }}
              href="https://www.linkedin.com/posts/youenn-thirion-2b555037_lavalvirtual-activity-7315482730044022784-6a-f/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEDRNa8BKIK61iSl6MWqYZSMuiQJ5ymRddY"
            >
              Pour commencer, un grand merci à Laval Virtual d&apos;avoir
              organisé cet événement auquel mon école et moi avons pu
              participer.{" "}
            </a>
            <p>
              30 heures, 12 équipes, 1 gagnant !<br />
              Écoles et étudiants de différents pays viennent s’affronter dans
              une compétition unique : un marathon technologique de 30 heures,
              appelé « hackathon » !<br />
              <br />
              Deux jours avant le salon Laval Virtual, 12 équipes (pilotées par
              le mentor de leur choix) se défient dans les locaux du Laval
              Virtual Center. Chaque équipe doit développer une application 3D
              en temps réel sur un sujet imposé. Les participants bénéficieront
              des conseils d’experts VR/AR et de tout le matériel nécessaire.
              <br />
              <br />
              Au bout de 30 heures de hackathon, le lauréat remporte le droit de
              présenter sa solution sur le salon Laval Virtual.
            </p>
            <div>
              <h4>Déroulé de l&apos;événement</h4>
              <p>
                <b>Début Lundi à 8h30 (07/04/2025) :</b> Jeu de course en VR, 1
                participant par équipe, dans l&apos;objectif de réaliser un
                positionnement pour le choix du sujet entre les différentes
                équipes participant au hackathon.
              </p>
              <p>
                <b>Choix du sujet :</b> Le thème est &quot;Prove me wrong&quot;,
                et le sujet que nous avons choisi est &quot;Humankind lives in a
                simulation&quot;.
              </p>
              <p>
                <b>Choix du matériel et installation :</b> Ensuite vient le
                choix du matériel : nous avons choisi de travailler sur un Meta
                Quest 3, car nous le connaissons bien et avons déjà travaillé
                dessus. Juste après ce choix, nous avons commencé à nous
                installer : ordinateur, casque VR, etc.
              </p>
              <p>
                <b>Brainstorming : </b>Le début de l&apos;aventure commence,
                nous cherchons une idée &quot;drôle&quot; pour essayer de nous
                démarquer dans ce challenge.
                <a
                  target="_blank"
                  style={{
                    color: "#3043FE",
                    textDecoration: "underline",
                    fontStyle: "italic",
                  }}
                  href="https://www.youtube.com/watch?v=Z8yW5cyXXRc"
                >
                  (la ref de notre idée)
                </a>
              </p>
              <p>
                <b>Phase de création :</b> C’est parti ! La phase de création /
                développement de notre idée est lancée. Maintenant, nous avons
                moins de 30 heures (le sommeil a été court) pour réaliser un
                prototype fonctionnel.
              </p>
              <p>
                <b>Les présentations :</b> Notre prototype est enfin terminé, il
                est temps de découvrir ce que les autres équipes ont réalisé et
                de présenter notre projet. Chaque équipe a eu 7 minutes pour
                présenter son travail.
              </p>
              <p>
                <b>Discours de fin :</b> Remerciements et félicitations de la
                part de l&apos;équipe organisatrice du hackathon, suivis de
                l&apos;annonce de l&apos;équipe gagnante :{" "}
                <a
                  target="_blank"
                  style={{
                    color: "#3043FE",
                    textDecoration: "underline",
                    fontStyle: "italic",
                  }}
                  href="https://www.linkedin.com/feed/update/urn:li:activity:7316810595196932096/"
                >
                  Institute of Art and Technology at NTHU (國立清華大學)
                </a>
              </p>
            </div>
            <div>
              <h4>Acquis</h4>
              <p>
                <b>Hard skills :</b>Prototypage rapide en réalité virtuelle,
                développement 3D temps réel sur Meta Quest 3, gestion de
                matériel immersif, présentation technique d’un projet.
              </p>
              <p>
                <b>Soft skills :</b>Travail en équipe, créativité, gestion du
                stress, communication efficace, esprit d’analyse, adaptabilité.
              </p>
            </div>
          </div>
          <div className="info-wrapper">
            <div className="used">
              <img src={Unity} alt="rdm" />
              <img src={MetaQuest} alt="rdm" />
              <img src={Blender} alt="rdm" />
            </div>
          </div>
        </div>
        <div className="btns-wrapper">
          <Link to="/projet/3d-game/minecraft-vr" className="btn-next-project">
            <img src={Arrow} alt="arrow" />
            Projet précédent (Minecraft VR)
          </Link>
          <Link to="/projet/ui-ux/bleep" className="btn-next-project">
            <img src={Arrow} alt="arrow" />
            Projet suivant (Bleep)
          </Link>
        </div>
      </main>
    </>
  );
}

export default transition(LavalVirtual);
