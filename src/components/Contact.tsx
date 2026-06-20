"use client";

import { useI18n } from "@/lib/i18n";
import { Reveal } from "./Reveal";
import { Socials } from "./Socials";

export function Contact() {
  const { c } = useI18n();
  const k = c.contact;

  return (
    <section id="contact" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-28">
      <Reveal>
        <div className="card relative overflow-hidden rounded-3xl p-10 text-center sm:p-16">
          <div className="glow-orb absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 opacity-40" />

          <p className="label-mono mb-4">{k.label}</p>
          <h2 className="mx-auto max-w-2xl font-[family-name:var(--font-display)] text-3xl font-semibold leading-tight text-gradient sm:text-5xl">
            {k.title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-fg-dim">{k.text}</p>

          <div className="mt-9 flex flex-col items-center gap-6">
            <a
              href="mailto:lucascdoliveira.dev@gmail.com"
              className="group rounded-xl bg-accent px-7 py-3.5 font-mono text-sm font-semibold text-[#04140b] transition-transform hover:-translate-y-0.5"
            >
              {k.cta}{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <Socials size={20} />
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-1 border-t border-line pt-6 font-mono text-xs text-muted">
            <span className="text-accent-2">{k.locationLabel}</span>
            <span className="text-fg-dim">{k.location}</span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
