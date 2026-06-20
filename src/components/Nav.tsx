"use client";

import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { ScrambleText } from "./ScrambleText";

export function Nav() {
  const { c, lang, toggle } = useI18n();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links: { id: string; label: string }[] = [
    { id: "about", label: c.nav.about },
    { id: "skills", label: c.nav.skills },
    { id: "experience", label: c.nav.experience },
    { id: "projects", label: c.nav.projects },
    { id: "contact", label: c.nav.contact },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-line bg-bg/70 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="group flex items-center gap-2 font-mono text-sm">
          <span className="text-accent">{"</>"}</span>
          <span className="font-semibold tracking-tight text-fg">lucas.dev</span>
          <span className="cursor-blink text-accent">_</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className="font-mono text-[0.8rem] text-fg-dim transition-colors hover:text-accent"
              >
                <ScrambleText text={l.label} trigger="hover" duration={420} />
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={toggle}
          aria-label="Toggle language"
          className="flex items-center gap-1 rounded-full border border-line px-2.5 py-1 font-mono text-xs text-fg-dim transition-colors hover:border-[var(--border-strong)] hover:text-accent"
        >
          <span className={lang === "pt" ? "text-accent" : ""}>PT</span>
          <span className="text-muted">/</span>
          <span className={lang === "en" ? "text-accent" : ""}>EN</span>
        </button>
      </nav>
    </header>
  );
}
