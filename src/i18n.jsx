import React, { createContext, useContext, useEffect, useState } from "react";

import FavIcon from "./Assets/Favicon/favicon.ico";
import FavIconOutline from "./Assets/Favicon/outlinefavicon.ico";

const LANGS = ["fr", "en"];

const LanguageContext = createContext({ lang: "fr", setLang: () => {} });

// French stays the default (site and SEO are French-first); only an explicit
// choice switches to English, and it is remembered across visits.
function readSavedLang() {
  try {
    const saved = localStorage.getItem("lang");
    return LANGS.includes(saved) ? saved : "fr";
  } catch (e) {
    return "fr";
  }
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(readSavedLang);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (next) => {
    setLangState(next);
    try {
      localStorage.setItem("lang", next);
    } catch (e) {}
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

// t(fr, en) picks the version for the current language; works for strings and JSX.
export function useLang() {
  const { lang, setLang } = useContext(LanguageContext);
  const t = (fr, en) => (lang === "en" ? en : fr);
  return { lang, setLang, t };
}

// Sets the tab title and swaps title + favicon while the tab is in the background.
export function usePageTitle(fr, en) {
  const { lang, t } = useLang();
  const title = t(fr, en);

  useEffect(() => {
    document.title = title;
    const awayTitle = t("Où allez-vous ? 💻✨", "Where are you going? 💻✨");

    const handleVisibilityChange = () => {
      const favicon = document.querySelector("link[rel='icon']");
      if (document.visibilityState === "hidden") {
        document.title = awayTitle;
        favicon.href = FavIconOutline;
      } else {
        document.title = title;
        favicon.href = FavIcon;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [lang, title]);
}
