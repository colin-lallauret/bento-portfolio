import React, { useEffect } from "react";

import Vidon from "../Assets/Images/vidon.svg";
import UnivRennes from "../Assets/Images/UNIRENNES_LOGO.svg";
import GroupeSeb from "../Assets/Images/groupeseb.png";
import Deligel from "../Assets/Images/deligel.png";
import VieillesCharrues from "../Assets/Images/vieillescharrues.png";
import { useLang } from "../i18n";

function ExperiencesMore() {
  const { t } = useLang();
  return (
    <div className="container experiences" id="experiences">
      <div className="title">
        <span>
          {t(
            <>MES DÉBUTS DANS LE MONDE PROFESSIONNEL</>,
            <>MY FIRST STEPS IN THE WORKING WORLD</>,
          )}
        </span>
        <p>{t("EXPÉRIENCE", "EXPERIENCE")}</p>
      </div>
      <div className="experiences-wrapper">
        <div id="groupe-seb" className="experience">
          <div className="company">
            <div className="name-date">
              <p>Groupe Seb</p>
              <span>{t("mars - août 2026", "Mar - Aug 2026")}</span>
            </div>
            <div className="tags">
              <span>UX</span>
              <span>UI</span>
              <span>Figma</span>
            </div>
          </div>
          <div className="text-logo">
            <div className="text">
              <div className="title">
                <h4>UX/UI Designer</h4>
                <span>{t("(en stage)", "(internship)")}</span>
              </div>
              <div className="paragraphs">
                <p>
                  {t(
                    <>
                      Une <em>immersion</em> au sein du pôle Design, au cœur de
                      l’équipe <em>Design d’Expérience</em> dédiée à la
                      conception d’<em>interfaces homme-machine (IHM)</em> pour
                      les produits de petit électroménager.
                    </>,
                    <>
                      An <em>immersion</em> in the Design department, at the
                      heart of the <em>Experience Design</em> team dedicated to
                      designing <em>human-machine interfaces (HMI)</em> for
                      small household appliances.
                    </>,
                  )}
                </p>
                <p>
                  {t(
                    <>
                      Ma mission a porté sur la <em>refonte</em> et la{" "}
                      <em>modélisation de parcours utilisateurs</em> articulant
                      commandes physiques et écrans embarqués, avec un équilibre
                      permanent entre <em>rigueur ergonomique</em>{" "}
                      (dimensionnement des zones tactiles, lisibilité, retours
                      d’état) et <em>contraintes techniques industrielles</em>{" "}
                      (spécificités matérielles, formats d’écran).
                    </>,
                    <>
                      My mission focused on <em>redesigning</em> and{" "}
                      <em>modelling user journeys</em> that combine physical
                      controls and embedded screens, constantly balancing{" "}
                      <em>ergonomic rigour</em> (touch target sizing,
                      legibility, state feedback) with{" "}
                      <em>industrial technical constraints</em> (hardware
                      specifics, screen formats).
                    </>,
                  )}
                </p>
                <p>
                  {t(
                    <>
                      Au-delà de la structuration d’un{" "}
                      <em>Design System modulaire</em>, je me suis appuyé sur la{" "}
                      <em>recherche utilisateur</em> : animation d’ateliers d’
                      <em>idéation</em>, co-animation de <em>tests terrain</em>{" "}
                      et <em>cartographie de parcours</em>.
                    </>,
                    <>
                      Beyond structuring a <em>modular Design System</em>, I
                      relied on <em>user research</em>: running{" "}
                      <em>ideation</em> workshops, co-facilitating{" "}
                      <em>field tests</em> and <em>journey mapping</em>.
                    </>,
                  )}
                </p>
              </div>
            </div>
            <img src={GroupeSeb} alt="Groupe Seb" />
          </div>
        </div>

        <div id="stage-rennes" className="experience">
          <div className="company">
            <div className="name-date">
              <p>{t("Université de Rennes", "University of Rennes")}</p>
              <span>{t("juillet 2025", "July 2025")}</span>
            </div>
            <div className="tags">
              <span>Supabase</span>
              <span>Vercel</span>
              <span>React</span>
              <span>SASS</span>
              <span>Git</span>
              <span>UX</span>
              <span>UI</span>
            </div>
          </div>
          <div className="text-logo">
            <div className="text">
              <div className="title">
                <h4>{t("Developpeur web", "Web Developer")}</h4>
                <span>{t("(en stage)", "(internship)")}</span>
              </div>
              <div className="paragraphs">
                <p>
                  {t(
                    <>
                      <em>Modernisation ergonomique</em> et rafraîchissement
                      visuel d’un site web existant, dans un calendrier
                      resserré. Le projet a consisté à optimiser les{" "}
                      <em>parcours utilisateurs (UX)</em> et à ajuster l’
                      <em>interface (UI)</em> pour gagner en lisibilité, aussi
                      bien sur le site public que sur le panneau
                      d’administration.
                    </>,
                    <>
                      <em>Ergonomic modernisation</em> and visual refresh of an
                      existing website on a tight schedule. The project meant
                      optimising <em>user journeys (UX)</em> and adjusting the{" "}
                      <em>interface (UI)</em> for better legibility, on both the
                      public site and the admin panel.
                    </>,
                  )}
                </p>
                <p>
                  {t(
                    <>
                      En parallèle, j’ai pris en charge la{" "}
                      <em>mise en ligne</em> : suivi des versions du code sur{" "}
                      <em>GitHub</em>, automatisation du déploiement via{" "}
                      <em>Vercel</em> et configuration <em>DNS</em> du nom de
                      domaine.
                    </>,
                    <>
                      Alongside that, I handled <em>going live</em>: code
                      versioning on <em>GitHub</em>, automated deployment via{" "}
                      <em>Vercel</em> and <em>DNS</em> setup for the domain
                      name.
                    </>,
                  )}
                </p>
              </div>
            </div>
            <img src={UnivRennes} alt="Université de Rennes" />
          </div>
        </div>

        <div id="groupe-vidon" className="experience">
          <div className="company">
            <div className="name-date">
              <p>Groupe Vidon</p>
              <span>2023 - 2025</span>
            </div>
            <div className="tags">
              <span>JavaScript</span>
              <span>Symfony</span>
              <span>Drupal</span>
              <span>Figma</span>
              <span>CI/CD</span>
              <span>SASS</span>
              <span>Twig</span>
              <span>Git</span>
            </div>
          </div>
          <div className="text-logo">
            <div className="text">
              <div className="title">
                <h4>{t("Développeur web", "Web Developer")}</h4>
                <span>{t("(en alternance)", "(work-study)")}</span>
              </div>
              <div className="paragraphs">
                <p>
                  {t(
                    <>
                      Ce <em>premier contrat</em>, d’une durée de <em>2 ans</em>
                      , m’a permis de découvrir le monde de l’
                      <em>entreprise</em> dans tous ses aspects. J’ai pris
                      conscience que les <em>soft skills</em>, tout autant que
                      les <em>hard skills</em>, étaient attendus dans le milieu
                      professionnel.
                    </>,
                    <>
                      This <em>first contract</em>, lasting <em>2 years</em>,
                      showed me every side of the <em>business</em> world. I
                      realised that <em>soft skills</em> are expected in the
                      workplace just as much as <em>hard skills</em>.
                    </>,
                  )}
                </p>
                <p>
                  {t(
                    <>
                      Recruté pour le poste de{" "}
                      <em>développeur web en alternance</em>, avec comme{" "}
                      <em>mission principale</em> de réaliser un{" "}
                      <em>intranet</em> dont l’objectif est de centraliser et
                      faciliter l'accès aux informations, outils et
                      communications internes pour améliorer la collaboration et
                      l'efficacité.
                    </>,
                    <>
                      Hired as a <em>work-study web developer</em>, my{" "}
                      <em>main mission</em> was to build an <em>intranet</em> to
                      centralise and ease access to internal information, tools
                      and communications, improving collaboration and
                      efficiency.
                    </>,
                  )}
                </p>
                <p>
                  {t(
                    <>
                      Pour réaliser cela, une{" "}
                      <em>petite équipe de deux personnes</em>. De mon côté,
                      j’ai réalisé les <em>maquettes</em> de toute la plateforme
                      avant son développement. En parallèle, afin de mener à
                      bien ce projet, une solution de <em>versioning</em> et de{" "}
                      <em>déploiement</em> était nécessaire; <em>GitLab</em>{" "}
                      ainsi qu’une <em>CI/CD</em> ont été mis en place par mon
                      tuteur. Ensuite, la solution technique choisie et utilisée
                      pour développer l’intranet a été <em>Drupal</em>, incluant
                      toute sa stack technique : <em>Symfony</em> et{" "}
                      <em>Twig</em>.
                    </>,
                    <>
                      To do this, a <em>small team of two</em>. On my side, I
                      designed the <em>mockups</em> for the whole platform
                      before development. To deliver the project, a{" "}
                      <em>versioning</em> and <em>deployment</em> solution was
                      needed; my mentor set up <em>GitLab</em> and a{" "}
                      <em>CI/CD</em> pipeline. The intranet was then built with{" "}
                      <em>Drupal</em> and its whole tech stack: <em>Symfony</em>{" "}
                      and <em>Twig</em>.
                    </>,
                  )}
                </p>
                <span>
                  {t(
                    <>
                      *pour des raisons de confidentialité (contrat), ni
                      détails, ni captures d’écrans de cette plateforme interne
                      ne seront disponibles.{" "}
                    </>,
                    <>
                      *for confidentiality reasons (contract), no details or
                      screenshots of this internal platform can be shared.
                    </>,
                  )}
                </span>
              </div>
            </div>
            <img src={Vidon} alt="Groupe Vidon" />
          </div>
        </div>
      </div>

      <div className="separator"></div>

      <div className="title">
        <span>{t("LES « P’TITS » D’", "MY LITTLE")}</span>
        <p>{t("JOBS D’ÉTÉ", "SUMMER JOBS")}</p>
      </div>
      <div className="experiences-wrapper">
        <div id="deligel" className="experience">
          <div className="company">
            <div className="name-date">
              <p>SARL Deligel</p>
              <span>{t("juin - août 2022", "Jun - Aug 2022")}</span>
            </div>
            <div className="tags">
              <span>Communication</span>
              <span>Organisation</span>
            </div>
          </div>
          <div className="text-logo">
            <div className="text">
              <h4>
                {t(
                  <>
                    Vendeur / Livreur <br />
                    en porte à porte
                  </>,
                  <>
                    Door-to-Door Salesman <br /> / Delivery Driver
                  </>,
                )}
              </h4>
              <div className="paragraphs">
                <p>
                  {t(
                    <>
                      De la <em>route</em>, de la <em>relation client</em>{" "}
                      jusqu’à la <em>gestion du stock</em> dans le camion en
                      tant que <em>vendeur</em> et <em>livreur</em> en porte à
                      porte de produits surgelés j’ai su m’adapter pour
                      satisfaire les <em>besoins des clients</em>.
                    </>,
                    <>
                      From the <em>road</em> and <em>customer relations</em> to{" "}
                      <em>stock management</em> in the truck, as a door-to-door{" "}
                      <em>salesman</em> and <em>delivery driver</em> for frozen
                      food, I adapted to meet <em>customers’ needs</em>.
                    </>,
                  )}
                </p>
              </div>
            </div>
            <img src={Deligel} alt="Deligel" />
          </div>
        </div>
        <div id="vieilles-charrues" className="experience">
          <div className="company">
            <div className="name-date">
              <p>
                {t(
                  <>
                    Association <br />
                    <span>« Les Vieilles Charrues »</span>
                  </>,
                  <>
                    Non-profit <br /> <span>“Les Vieilles Charrues”</span>
                  </>,
                )}
              </p>
              <span>{t("juillet 2023", "July 2023")}</span>
            </div>
            <div className="tags">
              <span>{t("Travail de groupe", "Teamwork")}</span>
              <span>{t("Nettoyage", "Cleaning")}</span>
              <span>{t("Recyclage", "Recycling")}</span>
            </div>
          </div>
          <div className="text-logo">
            <div className="text">
              <h4>
                {t(
                  <>
                    Agent de propreté <br />
                    événementiel
                  </>,
                  <>
                    Event Cleaning <br /> Staff
                  </>,
                )}
              </h4>
              <div className="paragraphs">
                <p>
                  {t(
                    <>
                      « Les Vieilles Charrues » un festival représentant environ{" "}
                      <em>130 hectares</em> : des scènes, des campings, des bars
                      et restaurants en extérieur. Cela provoque forcément de
                      nombreux <em>déchets</em>, et pour cela de grands moyens
                      sont mis en place. Notamment une grande{" "}
                      <em>équipe de nettoyage</em> dont j’ai fait partie. <br />
                      Notre seul objectif : <em>ramasser</em> et <em>trier</em>{" "}
                      les déchets pour que les terres redeviennent{" "}
                      <em>propres</em> et que l’herbe y retrouve vie.
                    </>,
                    <>
                      “Les Vieilles Charrues” is a festival covering about{" "}
                      <em>130 hectares</em>: stages, campsites, outdoor bars and
                      restaurants. That inevitably means a lot of <em>waste</em>
                      , so big resources are deployed, including a large{" "}
                      <em>cleaning team</em> that I was part of. <br />
                      Our one goal: <em>pick up</em> and <em>sort</em> the waste
                      so the land is <em>clean</em> again and the grass comes
                      back to life.
                    </>,
                  )}
                </p>
              </div>
            </div>
            <img src={VieillesCharrues} alt="Les Vielles Charrues" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperiencesMore;
