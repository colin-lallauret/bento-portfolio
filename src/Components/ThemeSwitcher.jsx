import React, { useEffect } from "react";

import Night from "../Assets/Images/night.svg";
import Day from "../Assets/Images/day.svg";

function ThemeSwitcher() {
  useEffect(() => {
    const handleVisibilityChange = () => {};

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const handleThemeSwitch = (e) => {
    const buttons = document.querySelectorAll(".theme-switcher .btn");
    buttons.forEach((btn) => btn.classList.remove("active"));
    e.currentTarget.classList.add("active");
  };

  return (
    <div className="theme-switcher">
      <div className="btn active" onClick={handleThemeSwitch}>
        <img src={Day} alt="day" />
      </div>
      <div className="btn in-development" onClick={handleThemeSwitch}>
        <img src={Night} alt="night" />
      </div>
    </div>
  );
}

export default ThemeSwitcher;
