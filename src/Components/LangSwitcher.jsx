import React from "react";
import { useLang } from "../i18n";

function LangSwitcher() {
  const { lang, setLang, t } = useLang();

  return (
    <div
      className="lang-switcher"
      role="group"
      aria-label={t("Choix de la langue", "Language selection")}
    >
      {["fr", "en"].map((code) => (
        <button
          key={code}
          type="button"
          lang={code}
          className={`item ${lang === code ? "active" : ""}`}
          aria-pressed={lang === code}
          aria-label={code === "fr" ? "Français" : "English"}
          onClick={() => setLang(code)}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default LangSwitcher;
