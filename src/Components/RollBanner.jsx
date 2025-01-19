import React from "react";

import Logo from "../Assets/Images/Logo/logo-black.svg";

function RollBanner() {
  return (
    <div className="banner">
      <div className="scroll-content">
        {[...Array(10)].map((_, index) => (
          <div className="text-roll" key={index}>
            <img src={Logo} alt="logo" />
            <div>
              <p>PORTFOLIO</p>
              <span>PERSONNEL</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RollBanner;
