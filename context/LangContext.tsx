"use client";

import { createContext, useContext, useState, useEffect } from "react";


type Lang = "fa" | "en";

interface LangContextType {
  lang: Lang;
  toggleLang: () => void;
}

const LangContext = createContext<LangContextType | undefined>(undefined);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("fa");

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved === "fa" || saved === "en") {
      setLang(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const toggleLang = () => {
    setLang((prev) => (prev === "fa" ? "en" : "fa"));
  };

  return (
    <LangContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error("useLang must be used within a LangProvider");
  }
  return context;
}
