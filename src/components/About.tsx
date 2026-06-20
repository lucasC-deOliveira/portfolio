"use client";

import { useI18n } from "@/lib/i18n";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function About() {
  const { c } = useI18n();
  const a = c.about;

  return (
    <Section id="about" label={a.label} title={a.title}>
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <Reveal delay={0.1}>
          <div className="space-y-5 text-base leading-relaxed text-fg-dim">
            <p>{a.p1}</p>
            <p>{a.p2}</p>
            <p className="border-l-2 border-accent/60 pl-4 text-fg">{a.p3}</p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="card rounded-2xl p-6">
            <p className="label-mono mb-5">{a.factsLabel}</p>
            <ul className="space-y-4">
              {a.languages.map((l) => (
                <li key={l.name} className="flex items-baseline justify-between gap-4">
                  <span className="font-[family-name:var(--font-display)] text-lg text-fg">
                    {l.name}
                  </span>
                  <span className="flex-1 translate-y-[-3px] border-b border-dashed border-line" />
                  <span className="font-mono text-xs text-accent">{l.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
