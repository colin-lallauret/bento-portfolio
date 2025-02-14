import React from "react";

import LinkedIn from "../Assets/Images/linkedin.svg";
import Github from "../Assets/Images/github.svg";
import Cal from "../Assets/Images/calcom.svg";

function SocialsMedia() {
  return (
    <div className="socials-media">
      <a target="_blank" href="https://www.linkedin.com/in/colinlallauret/">
        <img src={LinkedIn} alt="LinkedIn" />
      </a>

      <a target="_blank" href="https://github.com/colin-lallauret">
        <img src={Github} alt="Github" />
      </a>

      <a target="_blank" href="https://cal.com/colin-lallauret">
        <img src={Cal} alt="Cal.com" />
      </a>
    </div>
  );
}

export default SocialsMedia;
