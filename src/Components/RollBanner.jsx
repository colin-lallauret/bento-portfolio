import React from "react";

import Logo from "../Assets/Images/Logo/logo-black.svg";
import { useLang } from "../i18n";

function RollBanner() {
  const { t } = useLang();
  return (
    <div className="banner" aria-hidden="true">
      <div className="scroll-content">
        {[...Array(10)].map((_, index) => (
          <div className="text-roll" key={index}>
            <img className="icon-adaptive" src={Logo} alt="" />
            {t(
              <div>
                <p>PORTFOLIO</p>
                <span>PERSONNEL</span>
              </div>,
              <div>
                <span>PERSONAL</span>
                <p>PORTFOLIO</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default RollBanner;
