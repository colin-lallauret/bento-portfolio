import React, { useEffect, useState } from "react";

import Night from "../Assets/Images/night.svg";
import Day from "../Assets/Images/day.svg";
import { useLang } from "../i18n";

function ThemeSwitcher() {
  const [theme, setTheme] = useState("day");
  const { t } = useLang();

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const initial =
      saved || (document.body.classList.contains("dark") ? "night" : "day");
    setTheme(initial);
    document.body.classList.toggle("dark", initial === "night");
  }, []);

  const handleThemeSwitch = (nextTheme) => {
    setTheme(nextTheme);
    document.body.classList.toggle("dark", nextTheme === "night");
    localStorage.setItem("theme", nextTheme);
  };

  return (
    <div
      className="theme-switcher"
      role="group"
      aria-label={t("Choix du thème", "Theme selection")}
    >
      <button
        type="button"
        className={`btn ${theme === "day" ? "active" : ""}`}
        aria-pressed={theme === "day"}
        aria-label={t("Thème clair", "Light theme")}
        onClick={() => handleThemeSwitch("day")}
      >
        <img className="icon-adaptive" src={Day} alt="" />
      </button>
      <button
        type="button"
        className={`btn ${theme === "night" ? "active" : ""}`}
        aria-pressed={theme === "night"}
        aria-label={t("Thème sombre", "Dark theme")}
        onClick={() => handleThemeSwitch("night")}
      >
        <img className="icon-adaptive" src={Night} alt="" />
      </button>
    </div>
  );
}

export default ThemeSwitcher;
