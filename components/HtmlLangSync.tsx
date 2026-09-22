"use client";

import { useEffect } from "react";
import { useLang } from "@/context/LangContext";

export function HtmlLangSync() {
  const { lang } = useLang();

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
  }, [lang]);

  return null;
}
