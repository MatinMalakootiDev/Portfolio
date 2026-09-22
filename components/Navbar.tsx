"use client";

import { TbHome, TbBriefcase, TbBrandGithub, TbBrandLinkedin, TbSun, TbMoon, TbLanguage, TbBrandTelegram } from "react-icons/tb";
import { useTheme } from "@/context/ThemeContext";
import { useLang } from "@/context/LangContext";

const iconClass =
  "text-muted border-2 border-border rounded-full p-2 cursor-pointer transition-all duration-300 hover:scale-140 hover:bg-border hover:text-foreground";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang } = useLang();

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 sm:gap-4 rounded-full border border-border bg-surface px-4 sm:px-6 py-3 shadow-lg max-w-[calc(100vw-2rem)] overflow-x-auto">
      <a className={iconClass} href="#" title="Home" aria-label="Home">
        <TbHome size={27} />
      </a>

      <button className={iconClass} onClick={toggleTheme} aria-label="Toggle theme">
        {theme === "dark" ? <TbSun size={27} /> : <TbMoon size={27} />}
      </button>

      <button className={iconClass} onClick={toggleLang} aria-label="Toggle language">
        <TbLanguage size={27} />
        <span className="sr-only">Switch to {lang === "fa" ? "English" : "Persian"}</span>
      </button>

      <a className={iconClass} href="#projects" title="Projects" aria-label="Projects">
        <TbBriefcase size={27} />
      </a>

      <a
        className={iconClass}
        href="https://github.com/MatinMalakootiDev"
        title="Github"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <TbBrandGithub size={27} />
      </a>

      <a
        className={iconClass}
        href="https://www.linkedin.com/in/mohammad-matin-malakooti-676703340/"
        title="LinkedIn"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <TbBrandLinkedin size={27} />
      </a>

      <a
        className={iconClass}
        href="https://t.me/matin_mlkti"
        title="Telegram"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Telegram"
      >
        <TbBrandTelegram size={27} />
      </a>

    </nav>
  );
}
