import React, { useEffect } from "react";

import Vidon from "../Assets/Images/vidon.svg";
import Deligel from "../Assets/Images/deligel.png";
import VieillesCharrues from "../Assets/Images/vieillescharrues.png";

function ExperiencesMore() {
  return (
    <div className="container experiences" id="experiences">
      <div className="title">
        <span>MES DÉBUTS DANS LE MONDE PROFESSIONNEL</span>
        <p>EXPÉRIENCE</p>
      </div>
      <div className="experiences-wrapper">
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
                <h4>Développeur web</h4>
                <span>(en alternance)</span>
              </div>
              <div className="paragraphs">
                <p>
                  Ce <em>premier contrat</em>, d’une durée de <em>2 ans</em>,
                  m’a permis de découvrir le monde de l’
                  <em>entreprise</em> dans tous ses aspects. J’ai pris
                  conscience que les <em>soft skills</em>, tout autant que les{" "}
                  <em>hard skills</em>, étaient attendus dans le milieu
                  professionnel.
                </p>
                <p>
                  Recruté pour le poste de{" "}
                  <em>développeur web en alternance</em>, avec comme{" "}
                  <em>mission principale</em> de réaliser un <em>intranet</em>{" "}
                  dont l’objectif est de centraliser et faciliter l'accès aux
                  informations, outils et communications internes pour améliorer
                  la collaboration et l'efficacité.
                </p>
                <p>
                  Pour réaliser cela, une{" "}
                  <em>petite équipe de deux personnes</em>. De mon côté, j’ai
                  réalisé les <em>maquettes</em> de toute la plateforme avant
                  son développement. En parallèle, afin de mener à bien ce
                  projet, une solution de <em>versioning</em> et de{" "}
                  <em>déploiement</em> était nécessaire; <em>GitLab</em> ainsi
                  qu’une <em>CI/CD</em> ont été mis en place par mon tuteur.
                  Ensuite, la solution technique choisie et utilisée pour
                  développer l’intranet a été <em>Drupal</em>, incluant toute sa
                  stack technique : <em>Symfony</em> et <em>Twig</em>.
                </p>
                <span>
                  *pour des raisons de confidentialité (contrat), ni détails, ni
                  captures d’écrans de cette plateforme interne ne seront
                  disponibles.{" "}
                </span>
              </div>
            </div>
            <img src={Vidon} alt="Groupe Vidon" />
          </div>
        </div>
      </div>

      <div className="separator"></div>

      <div className="title">
        <span>LES « P’TITS » D’</span>
        <p>JOBS D’ÉTÉ</p>
      </div>
      <div className="experiences-wrapper">
        <div id="deligel" className="experience">
          <div className="company">
            <div className="name-date">
              <p>SARL Deligel</p>
              <span>juin - août 2022</span>
            </div>
            <div className="tags">
              <span>Communication</span>
              <span>Organisation</span>
            </div>
          </div>
          <div className="text-logo">
            <div className="text">
              <h4>
                Vendeur / Livreur <br />
                en porte à porte
              </h4>
              <div className="paragraphs">
                <p>
                  De la <em>route</em>, de la <em>relation client</em> jusqu’à
                  la <em>gestion du stock</em> dans le camion en tant que{" "}
                  <em>vendeur</em> et <em>livreur</em> en porte à porte de
                  produits surgelés j’ai su m’adapter pour satisfaire les{" "}
                  <em>besoins des clients</em>.
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
                Association <br />
                <span>« Les Vieilles Charrues »</span>
              </p>
              <span>juillet 2023</span>
            </div>
            <div className="tags">
              <span>Travail de groupe</span>
              <span>Nettoyage</span>
              <span>Recyclage</span>
            </div>
          </div>
          <div className="text-logo">
            <div className="text">
              <h4>
                Agent de propreté <br />
                événementiel
              </h4>
              <div className="paragraphs">
                <p>
                  « Les Vieilles Charrues » un festival représentant environ{" "}
                  <em>130 hectares</em> : des scènes, des campings, des bars et
                  restaurants en extérieur. Cela provoque forcément de nombreux{" "}
                  <em>déchets</em>, et pour cela de grands moyens sont mis en
                  place. Notamment une grande <em>équipe de nettoyage</em> dont
                  j’ai fait partie. <br />
                  Notre seul objectif : <em>ramasser</em> et <em>trier</em> les
                  déchets pour que les terres redeviennent <em>propres</em> et
                  que l’herbe y retrouve vie.
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
