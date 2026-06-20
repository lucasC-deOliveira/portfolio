import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Section({
  id,
  label,
  title,
  children,
}: {
  id: string;
  label: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <Reveal>
        <p className="label-mono mb-3">{label}</p>
        <h2 className="max-w-3xl font-[family-name:var(--font-display)] text-3xl font-semibold leading-tight text-gradient sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>
      <div className="mt-12">{children}</div>
    </section>
  );
}
