"use client";

import Image from "next/image";
import { useLang } from "@/context/LangContext";
import { content } from "@/data/content";

export function Hero() {
  const { lang } = useLang();
  const t = content[lang].hero;

  return (
    <section className="flex flex-col items-center text-center px-6 pt-18 pb-16">
      <div className="relative w-30 h-30 rounded-full overflow-hidden border-4 border-muted mb-5">
        <Image
          src="/images/profile.jpg"
          alt={t.name}
          fill
          className="object-cover"
          priority
        />
      </div>

      <h1 className="font-heading text-4xl font-bold">{t.name}</h1>
      <p className="text-muted text-lg mt-2">{t.title}</p>
      <p className="max-w-md mt-4 text-foreground/80 leading-relaxed text-lg">
        {t.description}
      </p>
    </section>
  );
}
