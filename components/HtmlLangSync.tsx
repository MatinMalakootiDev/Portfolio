"use client";

import { useEffect } from "react";
import { useLang } from "@/context/LangContext";

export function HtmlLangSync() {
  const { lang } = useLang();

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";

    if (lang === "fa") {
      document.body.classList.add("font-fa");
      document.body.classList.remove("font-sans");
    } else {
      document.body.classList.add("font-sans");
      document.body.classList.remove("font-fa");
    }
  }, [lang]);

  return null;
}
