"use client";

import { useI18n } from "@/lib/i18n";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function Experience() {
  const { c } = useI18n();
  const e = c.experience;

  return (
    <Section id="experience" label={e.label} title={e.title}>
      <Reveal delay={0.1}>
        <div className="card rounded-2xl p-7 sm:p-9">
          <div className="flex flex-wrap items-start justify-between gap-4 border-b border-line pb-6">
            <div>
              <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-fg">
                {e.role} ·{" "}
                <span className="text-accent-gradient">{e.company}</span>
              </h3>
            </div>
            <span className="rounded-full border border-line px-3 py-1 font-mono text-xs text-fg-dim">
              {e.period}
            </span>
          </div>

          <div className="mt-7 grid gap-8 md:grid-cols-2">
            {e.blocks.map((b) => (
              <div key={b.heading}>
                <h4 className="mb-4 flex items-center gap-2 font-mono text-sm text-accent">
                  <span className="text-accent-2">▹</span>
                  {b.heading}
                </h4>
                <ul className="space-y-3">
                  {b.points.map((p, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm leading-relaxed text-fg-dim"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
