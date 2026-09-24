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
    <div className="theme-switcher">
      <div
        className={`btn ${theme === "day" ? "active" : ""}`}
        onClick={() => handleThemeSwitch("day")}
      >
        <img src={Day} alt="day" />
      </div>
      <div
        className={`btn ${theme === "night" ? "active" : ""}`}
        onClick={() => handleThemeSwitch("night")}
      >
        <img src={Night} alt="night" />
      </div>
    </div>
  );
}

export default ThemeSwitcher;
