import React from "react";
import { useLang } from "../i18n";

function Studies() {
  const { t } = useLang();
  return (
    <div className="container studies" id="studies">
      <div className="title">
        <span>
          {t(
            "PLUS DE DÉTAILS SUR MES ÉTUDES ?",
            "MORE DETAILS ABOUT MY STUDIES?",
          )}
        </span>
        <p>{t("FORMATIONS", "EDUCATION")}</p>
      </div>
      <div className="studies-wrapper">
        <div className="study" id="master-cn-dedi">
          <div className="date">2025 - 2027</div>
          <div className="text">
            <div className="title">
              <h4>
                {t("Master Création Numérique", "Master’s in Digital Creation")}
              </h4>
              <span>
                {t(
                  <>Parcours Design d'Expérience et Design d'Interface</>,
                  <>Experience Design & Interface Design track</>,
                )}
              </span>
            </div>
            <div className="tags-wrapper">
              <div className="tags">
                <span>{t("Recherche UX", "UX Research")}</span>
                <span>{t("Ergonomie", "Ergonomics")}</span>
                <span>Design System</span>
              </div>
              <div className="tags">
                <span>{t("Prototypage", "Prototyping")}</span>
                <span>
                  {t("Psychologie cognitive", "Cognitive psychology")}
                </span>
                <span>
                  {t("Gestion de projet agile", "Agile project management")}
                </span>
              </div>
            </div>
            <div className="paragraphs">
              <p>
                {t(
                  <>
                    Ce <em>Master</em>, axé sur l’articulation entre{" "}
                    <em>sciences humaines</em> et{" "}
                    <em>design numérique interactif</em>, développe une maîtrise
                    concrète de la <em>sociologie des usages</em> et de la{" "}
                    <em>psychologie cognitive</em> pour analyser les
                    comportements humains, cadrer les besoins et piloter la{" "}
                    <em>recherche utilisateur (UX)</em>.
                  </>,
                  <>
                    This <em>Master’s</em>, built at the crossroads of{" "}
                    <em>human sciences</em> and{" "}
                    <em>interactive digital design</em>, develops a hands-on
                    command of <em>usage sociology</em> and{" "}
                    <em>cognitive psychology</em> to analyse human behaviour,
                    frame needs and lead <em>user research (UX)</em>.
                  </>,
                )}
              </p>
              <p>
                {t(
                  <>
                    Le cursus approfondit l’<em>ergonomie</em>, la conception
                    d’interfaces (<em>UI</em>), l’élaboration de{" "}
                    <em>design systems</em> et le{" "}
                    <em>prototypage interactif</em>, tout en intégrant la{" "}
                    <em>gestion de projet agile</em> et l’
                    <em>éco-conception</em>.
                  </>,
                  <>
                    The programme goes deep into <em>ergonomics</em>, interface
                    design (<em>UI</em>), building <em>design systems</em> and{" "}
                    <em>interactive prototyping</em>, while covering{" "}
                    <em>agile project management</em> and <em>eco-design</em>.
                  </>,
                )}
              </p>
              <p>
                {t(
                  <>
                    C’est dans ce cadre que je suis parti en stage chez{" "}
                    <em>Groupe Seb</em>, pour mettre en pratique cette double
                    casquette <em>recherche utilisateur</em> /{" "}
                    <em>conception d’interface</em> sur des produits
                    industriels.
                  </>,
                  <>
                    That is what led me to an internship at <em>Groupe Seb</em>,
                    to put this dual <em>user research</em> /{" "}
                    <em>interface design</em> role into practice on industrial
                    products.
                  </>,
                )}
              </p>
            </div>
          </div>
        </div>
        <div className="study" id="but-mmi">
          <div className="date">2022 - 2025</div>
          <div className="text">
            <div className="title">
              <h4>
                {t(
                  <>
                    Bachelor Universitaire Technologique <br />
                    Métiers du Multimédia et de l’Internet
                  </>,
                  <>
                    BUT (3-year technology bachelor’s) <br />
                    Multimedia and Internet Professions
                  </>,
                )}
              </h4>
              <span>
                {t(
                  <>Parcours développement web et dispositifs interactifs</>,
                  <>Web development & interactive media track</>,
                )}
              </span>
            </div>
            <div className="tags-wrapper">
              <div className="tags">
                <span>{t("Développement web", "Web development")}</span>
                <span>{t("Gestion de projet", "Project management")}</span>
                <span>UI / UX Design</span>
              </div>
              <div className="tags">
                <span>Communication</span>
                <span>{t("Entreprenariat", "Entrepreneurship")}</span>
                <span>{t("Audiovisuel", "Audiovisual")}</span>
              </div>
            </div>
            <div className="paragraphs">
              <p>
                {t(
                  <>
                    <em>MMI</em>, une formation <em>polyvalente</em> et{" "}
                    <em>professionnalisante</em> qui lors de ma première année,
                    m’a ouvert les yeux sur de nombreux <em>métiers</em> passant
                    du <em>marketing</em>, à la <em>gestion de projet</em>, aux
                    métiers dans <em>l’audiovisuel</em>; j’ai pu acquérir des
                    bases dans de nombreuses disciplines.
                  </>,
                  <>
                    <em>MMI</em> is a <em>versatile</em>,{" "}
                    <em>career-focused</em> programme. In my first year it
                    opened my eyes to many <em>professions</em>, from{" "}
                    <em>marketing</em> and <em>project management</em> to jobs
                    in <em>audiovisual</em> production; I picked up the basics
                    of many disciplines.
                  </>,
                )}
              </p>
              <p>
                {t(
                  <>
                    Mais moi... dans cette première année ce qui m’a{" "}
                    <em>le plus plu</em> c’est le <em>domaine du web</em>. Dès
                    la deuxième année j’ai souhaité partir en{" "}
                    <em>alternance</em> et réaliser le{" "}
                    <em>
                      parcours développement web et dispositifs interactifs
                    </em>{" "}
                    afin d’approfondir mes compétences.
                  </>,
                  <>
                    But for me... what I <em>enjoyed most</em> that first year
                    was the <em>web</em>. From the second year on I chose a{" "}
                    <em>work-study</em> programme and the{" "}
                    <em>web development & interactive media track</em> to deepen
                    my skills.
                  </>,
                )}
              </p>
              <p>
                {t(
                  <>
                    Au cours de ma deuxième et troisième année, j'ai développé
                    une expertise dans divers domaines du{" "}
                    <em>développement web</em> et du <em>design interactif</em>.
                    J'ai exploré le <em>SEO</em>, l'
                    <em>UI/UX</em> design, et créé une boutique avec PrestaShop.
                    J'ai également conçu des projets ludiques comme le jeu
                    NinjaCut et une galerie interactive sur <em>Unity</em>.
                    L’utilisation de <em>React</em> pour réaliser un « runner »,
                    ce qui m'a permis de renforcer mes compétences en
                    développement front-end. Ma pratique de{" "}
                    <em>frameworks JavaScript</em> (tels qu'Impress.js, D3.js,
                    Chart.js...) ainsi que mon utilisation de <em>Node.js</em>,
                    m'ont permis d'aborder des projets techniques variés. Ces
                    compétences ont été consolidées grâce à des{" "}
                    <em>heures de formation</em> et de <em>pratique</em> sur des
                    projets concrets.
                  </>,
                  <>
                    During my second and third years, I built expertise across{" "}
                    <em>web development</em> and <em>interactive design</em>. I
                    explored <em>SEO</em> and <em>UI/UX</em> design, and built
                    an online shop with PrestaShop. I also designed playful
                    projects such as the NinjaCut game and an interactive
                    gallery in <em>Unity</em>. Using <em>React</em> to build a
                    “runner” game strengthened my front-end skills. Working with{" "}
                    <em>JavaScript frameworks</em> (Impress.js, D3.js,
                    Chart.js...) and <em>Node.js</em> let me take on a wide
                    range of technical projects. These skills were reinforced by{" "}
                    <em>hours of training</em> and <em>practice</em> on real
                    projects.
                  </>,
                )}
              </p>
            </div>
          </div>
        </div>
        <div className="study" id="but-info">
          <div className="date">2021 - 2022</div>
          <div className="text">
            <h4>
              {t(
                <>
                  Bachelor Universitaire Technologique <br />
                  Informatique
                </>,
                <>
                  BUT (3-year technology bachelor’s) <br />
                  Computer Science
                </>,
              )}
            </h4>
            <div className="tags-wrapper">
              <div className="tags">
                <span>{t("Algorithmie", "Algorithms")}</span>
                <span>{t("Programmation", "Programming")}</span>
                <span>{t("Développement web", "Web development")}</span>
              </div>
            </div>
            <div className="paragraphs">
              <p>
                {t(
                  <>
                    Ma <em>première année</em> d’étude supérieure, qui m’a
                    appris la <em>rigueur</em> ainsi que l'<em>assiduité</em>{" "}
                    dans un environnement tout nouveau pour moi; l’<em>I</em>
                    nstitut <em>U</em>niversitaire de <em>T</em>echnologie. Avec
                    l’enrichissement de cette première année j’ai pu apprendre
                    la <em>programmation</em> pure et dur (le côté back-end)
                    avec le <em>langage C</em>, mais aussi les{" "}
                    <em>bases de données</em> et enfin le <em>web</em> avec des
                    bases avancées en <em>HTML</em> et <em>CSS</em>.
                  </>,
                  <>
                    My <em>first year</em> of higher education taught me{" "}
                    <em>rigour</em> and <em>diligence</em> in a brand-new
                    environment: the University Institute of Technology (IUT).
                    That year I learned hardcore <em>programming</em> (the
                    back-end side) with the <em>C language</em>, as well as{" "}
                    <em>databases</em> and finally the <em>web</em>, with solid
                    foundations in <em>HTML</em> and <em>CSS</em>.
                  </>,
                )}
              </p>
              <p>
                {t(
                  <>
                    Mais... personnellement, j’ai trouvé que cela manquait de{" "}
                    <em>créativité</em>. C’est ce qui m’a conduit à une légère
                    bifurcation, pour une filière moins connue du grand public.
                    La fameuse filière « <em>MMI</em> » 🌟 ⭐
                  </>,
                  <>
                    But... personally, I felt it lacked <em>creativity</em>.
                    That led me to change course slightly, towards a programme
                    less known to the general public: the famous “<em>MMI</em>”
                    track 🌟 ⭐
                  </>,
                )}
              </p>
            </div>
          </div>
        </div>
        <div className="study" id="bac">
          <div className="date">2021</div>
          <div className="text">
            <h4>
              {t(
                "Baccalauréat série générale",
                "French Baccalaureate (general track)",
              )}
            </h4>
            <div className="tags-wrapper">
              <div className="tags">
                <span>{t("Découverte du web", "Discovering the web")}</span>
                <span>NSI</span>
                <span>SES</span>
              </div>
            </div>
            <div className="paragraphs">
              <p>
                {t(
                  <>
                    Obtention de mon baccalauréat série générale spécialités{" "}
                    <br />
                    <em>N</em>umérique <em>S</em>ciences <em>I</em>nformatique
                    et <em>S</em>ciences <em>É</em>conomiques <em>S</em>ociales.
                  </>,
                  <>
                    Graduated from the general Baccalaureate, majoring in <br />
                    Digital & Computer Science (NSI) and Economics & Social
                    Sciences (SES).
                  </>,
                )}
              </p>
              <p>
                {t(
                  <>
                    La spécialité NSI, m’ayant permis de mettre un{" "}
                    <em>premier pas</em> et de découvrir le monde du{" "}
                    <em>web</em>. En commençant par un petit projet de
                    Questions/Réponses sur les capitales et drapeaux du monde
                    dans un but éducatif.
                  </>,
                  <>
                    The NSI major was my <em>first step</em> into the world of
                    the <em>web</em>, starting with a small educational quiz
                    project on world capitals and flags.
                  </>,
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Studies;
