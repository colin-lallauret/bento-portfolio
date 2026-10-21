import React from "react";
import Header from "../../Regions/Header";
import { Link } from "react-router-dom";
import transition from "../../../transition";

import Image1 from "../../../Assets/Images/Full_img/laval/1.mp4";
import Image2 from "../../../Assets/Images/Full_img/laval/2.jpg";
import Image3 from "../../../Assets/Images/Full_img/laval/3.jpg";

import Unity from "../../../Assets/Images/Icons/Logiciels/unity.png";
import MetaQuest from "../../../Assets/Images/Icons/Logiciels/metaquest.png";
import Blender from "../../../Assets/Images/Icons/Logiciels/blender.png";

import Arrow from "../../../Assets/Images/arrow.svg";
import { useLang, usePageTitle } from "../../../i18n";

function LavalVirtual() {
  const { t } = useLang();
  usePageTitle(
    "Laval Virtual (projet) — Colin LALLAURET",
    "Laval Virtual (project) — Colin LALLAURET",
  );

  return (
    <>
      <Header />
      <main className="project">
        <div className="title-wrapper">
          <div className="title">
            <h1>Laval Virtual</h1>
            <p>{t("#Hackaton", "#Hackathon")}</p>
          </div>
          <div className="tags">
            <p className="tag">{t("Hackaton", "Hackathon")}</p>
            <p className="tag">{t("30 heures", "30 hours")}</p>
            <p className="tag">VR / AR</p>
          </div>
        </div>
        <div className="img-wrapper">
          <video className="video" controls loop muted>
            <source src={Image1} type="video/mp4" />
            {t(
              "Votre navigateur ne prend pas en charge la vidéo.",
              "Your browser does not support the video tag.",
            )}
          </video>
          <div className="img-group">
            <img className="img-laval" src={Image2} alt="rdm" />
            <img className="img-laval" src={Image3} alt="rdm" />
          </div>
        </div>
        <div className="content-wrapper">
          <div className="text">
            <h3>{t("Hackaton de Laval Virtual", "Laval Virtual Hackathon")}</h3>
            <a
              target="_blank"
              style={{
                color: "#3043FE",
                textDecoration: "underline",
                fontStyle: "italic",
              }}
              href="https://www.linkedin.com/posts/youenn-thirion-2b555037_lavalvirtual-activity-7315482730044022784-6a-f/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEDRNa8BKIK61iSl6MWqYZSMuiQJ5ymRddY"
            >
              {t(
                <>
                  Pour commencer, un grand merci à Laval Virtual d&apos;avoir
                  organisé cet événement auquel mon école et moi avons pu
                  participer.{" "}
                </>,
                <>
                  First of all, a big thank you to Laval Virtual for organising
                  this event that my school and I were able to take part in.
                </>,
              )}
            </a>
            <p>
              {t(
                <>
                  30 heures, 12 équipes, 1 gagnant !<br />
                  Écoles et étudiants de différents pays viennent s’affronter
                  dans une compétition unique : un marathon technologique de 30
                  heures, appelé « hackathon » !<br />
                  <br />
                  Deux jours avant le salon Laval Virtual, 12 équipes (pilotées
                  par le mentor de leur choix) se défient dans les locaux du
                  Laval Virtual Center. Chaque équipe doit développer une
                  application 3D en temps réel sur un sujet imposé. Les
                  participants bénéficieront des conseils d’experts VR/AR et de
                  tout le matériel nécessaire.
                  <br />
                  <br />
                  Au bout de 30 heures de hackathon, le lauréat remporte le
                  droit de présenter sa solution sur le salon Laval Virtual.
                </>,
                <>
                  30 hours, 12 teams, 1 winner!
                  <br />
                  Schools and students from different countries go head to head
                  in a unique competition: a 30-hour tech marathon called a
                  “hackathon”!
                  <br />
                  <br />
                  Two days before the Laval Virtual trade show, 12 teams (each
                  led by the mentor of their choice) compete at the Laval
                  Virtual Center. Each team must build a real-time 3D
                  application on a set topic. Participants get advice from VR/AR
                  experts and all the equipment they need.
                  <br />
                  <br />
                  After 30 hours of hackathon, the winner earns the right to
                  present their solution at the Laval Virtual show.
                </>,
              )}
            </p>
            <div>
              <h4>{t("Déroulé de l&apos;événement", "How the event went")}</h4>
              <p>
                {t(
                  <>
                    <b>Début Lundi à 8h30 (07/04/2025) :</b> Jeu de course en
                    VR, 1 participant par équipe, dans l&apos;objectif de
                    réaliser un positionnement pour le choix du sujet entre les
                    différentes équipes participant au hackathon.
                  </>,
                  <>
                    <b>Kick-off Monday at 8:30 am (04/07/2025):</b> A VR racing
                    game, 1 player per team, to set the order in which the
                    hackathon teams pick their topic.
                  </>,
                )}
              </p>
              <p>
                {t(
                  <>
                    <b>Choix du sujet :</b> Le thème est &quot;Prove me
                    wrong&quot;, et le sujet que nous avons choisi est
                    &quot;Humankind lives in a simulation&quot;.
                  </>,
                  <>
                    <b>Choosing the topic:</b> The theme is &quot;Prove me
                    wrong&quot;, and the topic we picked is &quot;Humankind
                    lives in a simulation&quot;.
                  </>,
                )}
              </p>
              <p>
                {t(
                  <>
                    <b>Choix du matériel et installation :</b> Ensuite vient le
                    choix du matériel : nous avons choisi de travailler sur un
                    Meta Quest 3, car nous le connaissons bien et avons déjà
                    travaillé dessus. Juste après ce choix, nous avons commencé
                    à nous installer : ordinateur, casque VR, etc.
                  </>,
                  <>
                    <b>Choosing the hardware and setting up:</b> Next came the
                    hardware: we chose to work on a Meta Quest 3, since we know
                    it well and had already worked with it. Right after, we
                    started setting up: computer, VR headset, etc.
                  </>,
                )}
              </p>
              <p>
                <b>Brainstorming{t(" : ", ": ")}</b>
                {t(
                  <>
                    Le début de l&apos;aventure commence, nous cherchons une
                    idée &quot;drôle&quot; pour essayer de nous démarquer dans
                    ce challenge.
                  </>,
                  <>
                    The adventure begins: we look for a &quot;funny&quot; idea
                    to try to stand out in this challenge.
                  </>,
                )}{" "}
                <a
                  target="_blank"
                  style={{
                    color: "#3043FE",
                    textDecoration: "underline",
                    fontStyle: "italic",
                  }}
                  href="https://www.youtube.com/watch?v=Z8yW5cyXXRc"
                >
                  {t(
                    "(la ref de notre idée)",
                    "(the reference behind our idea)",
                  )}
                </a>
              </p>
              <p>
                {t(
                  <>
                    <b>Phase de création :</b> C’est parti ! La phase de
                    création / développement de notre idée est lancée.
                    Maintenant, nous avons moins de 30 heures (le sommeil a été
                    court) pour réaliser un prototype fonctionnel.
                  </>,
                  <>
                    <b>Creation phase:</b> Here we go! The creation /
                    development of our idea kicks off. We now have less than 30
                    hours (sleep was short) to build a working prototype.
                  </>,
                )}
              </p>
              <p>
                {t(
                  <>
                    <b>Les présentations :</b> Notre prototype est enfin
                    terminé, il est temps de découvrir ce que les autres équipes
                    ont réalisé et de présenter notre projet. Chaque équipe a eu
                    7 minutes pour présenter son travail.
                  </>,
                  <>
                    <b>Presentations:</b> Our prototype is finally done; time to
                    see what the other teams built and present our project. Each
                    team had 7 minutes to present its work.
                  </>,
                )}
              </p>
              <p>
                {t(
                  <>
                    <b>Discours de fin :</b> Remerciements et félicitations de
                    la part de l&apos;équipe organisatrice du hackathon, suivis
                    de l&apos;annonce de l&apos;équipe gagnante :
                  </>,
                  <>
                    <b>Closing speech:</b> Thanks and congratulations from the
                    hackathon organisers, followed by the announcement of the
                    winning team:
                  </>,
                )}{" "}
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
              <h4>{t("Acquis", "Skills gained")}</h4>
              <p>
                {t(
                  <>
                    <b>Hard skills :</b>Prototypage rapide en réalité virtuelle,
                    développement 3D temps réel sur Meta Quest 3, gestion de
                    matériel immersif, présentation technique d’un projet.
                  </>,
                  <>
                    <b>Hard skills:</b> Rapid VR prototyping, real-time 3D
                    development on Meta Quest 3, handling immersive hardware,
                    technical project presentation.
                  </>,
                )}
              </p>
              <p>
                {t(
                  <>
                    <b>Soft skills :</b>Travail en équipe, créativité, gestion
                    du stress, communication efficace, esprit d’analyse,
                    adaptabilité.
                  </>,
                  <>
                    <b>Soft skills:</b> Teamwork, creativity, stress management,
                    effective communication, analytical thinking, adaptability.
                  </>,
                )}
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
            <img className="icon-adaptive" src={Arrow} alt="" />
            {t("Projet précédent", "Previous project")} (Minecraft VR)
          </Link>
          <Link to="/projet/ui-ux/bleep" className="btn-next-project">
            <img className="icon-adaptive" src={Arrow} alt="" />
            {t("Projet suivant", "Next project")} (Bleep)
          </Link>
        </div>
      </main>
    </>
  );
}

export default transition(LavalVirtual);
