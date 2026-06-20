"use client";

import { useI18n } from "@/lib/i18n";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { projects } from "@/lib/projects";
import { ScrambleText } from "./ScrambleText";

export function Projects() {
  const { c, lang } = useI18n();
  const p = c.projects;

  return (
    <Section id="projects" label={p.label} title={p.title}>
      <Reveal>
        <p className="-mt-6 mb-10 text-fg-dim">{p.subtitle}</p>
      </Reveal>

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((proj, i) => (
          <Reveal key={proj.name} delay={(i % 2) * 0.08}>
            <a
              href={proj.repo}
              target="_blank"
              rel="noreferrer"
              className="card group flex h-full flex-col rounded-2xl p-6"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="font-mono text-[0.7rem] uppercase tracking-wider text-accent-2">
                  {proj.category}
                </span>
                <span className="text-fg-dim transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>

              <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-fg transition-colors group-hover:text-accent">
                <ScrambleText text={proj.name} trigger="hover" duration={500} />
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-fg-dim">
                {proj.desc[lang]}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {proj.tags.map((t) => (
                  <li key={t} className="chip rounded-md px-2 py-0.5">
                    {t}
                  </li>
                ))}
              </ul>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-10 text-center">
          <a
            href="https://github.com/lucasC-deOliveira"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm text-fg-dim transition-colors hover:text-accent"
          >
            {p.all}
            <span aria-hidden>→</span>
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
