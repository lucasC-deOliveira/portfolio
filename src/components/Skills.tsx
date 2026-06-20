"use client";

import { useI18n } from "@/lib/i18n";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function Skills() {
  const { c } = useI18n();
  const s = c.skills;

  return (
    <Section id="skills" label={s.label} title={s.title}>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {s.categories.map((cat, i) => (
          <Reveal key={cat.name} delay={(i % 3) * 0.08}>
            <div className="card group h-full rounded-2xl p-6">
              <div className="mb-4 flex items-center gap-2">
                <span className="font-mono text-xs text-accent-2">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-[family-name:var(--font-display)] text-lg font-medium text-fg">
                  {cat.name}
                </h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <li key={item} className="chip rounded-md px-2.5 py-1">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
