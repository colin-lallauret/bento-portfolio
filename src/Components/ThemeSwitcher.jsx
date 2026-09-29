import React, { useEffect, useState } from "react";

import Night from "../Assets/Images/night.svg";
import Day from "../Assets/Images/day.svg";

function ThemeSwitcher() {
  const [theme, setTheme] = useState("day");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const initial = saved || "day";
    setTheme(initial);
    document.body.classList.toggle("dark", initial === "night");
  }, []);

  const handleThemeSwitch = (nextTheme) => {
    setTheme(nextTheme);
    document.body.classList.toggle("dark", nextTheme === "night");
    localStorage.setItem("theme", nextTheme);
  };

  return (
    <div className="theme-switcher" role="group" aria-label="Choix du thème">
      <button
        type="button"
        className={`btn ${theme === "day" ? "active" : ""}`}
        aria-pressed={theme === "day"}
        aria-label="Thème clair"
        onClick={() => handleThemeSwitch("day")}
      >
        <img src={Day} alt="" />
      </button>
      <button
        type="button"
        className={`btn ${theme === "night" ? "active" : ""}`}
        aria-pressed={theme === "night"}
        aria-label="Thème sombre"
        onClick={() => handleThemeSwitch("night")}
      >
        <img src={Night} alt="" />
      </button>
    </div>
  );
}

export default ThemeSwitcher;
