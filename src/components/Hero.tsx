"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useI18n } from "@/lib/i18n";
import { Socials } from "./Socials";
import { ScrambleText } from "./ScrambleText";

const services = [
  { name: "api-gateway", status: "200 OK" },
  { name: "auth-service", status: "200 OK" },
  { name: "worker-queue", status: "RUNNING" },
  { name: "data-pipeline", status: "SYNCED" },
];

export function Hero() {
  const { c } = useI18n();
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setRoleIdx((i) => (i + 1) % c.hero.roles.length),
      2600,
    );
    return () => clearInterval(id);
  }, [c.hero.roles.length]);

  const ease = [0.21, 0.5, 0.26, 1] as const;

  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pt-28 pb-16"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left: copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 font-mono text-xs text-fg-dim"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {c.hero.status}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease }}
            className="font-mono text-sm text-fg-dim"
          >
            {c.hero.greeting}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease }}
            className="mt-2 font-[family-name:var(--font-display)] text-5xl font-bold leading-[0.95] tracking-tight text-gradient sm:text-7xl"
          >
            <ScrambleText text={c.hero.name} duration={1100} />
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28, ease }}
            className="mt-5 flex h-8 items-center font-mono text-lg sm:text-xl"
          >
            <span className="mr-2 text-accent-2">▹</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIdx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="text-accent-gradient glow-accent"
              >
                {c.hero.roles[roleIdx]}
              </motion.span>
            </AnimatePresence>
            <span className="cursor-blink ml-1 text-accent">_</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease }}
            className="mt-7 max-w-xl text-base leading-relaxed text-fg-dim sm:text-lg"
          >
            {c.hero.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.52, ease }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group relative overflow-hidden rounded-xl bg-accent px-6 py-3 font-mono text-sm font-semibold text-[#04140b] transition-transform hover:-translate-y-0.5"
            >
              <span className="relative z-10">{c.hero.ctaProjects}</span>
              <span className="absolute inset-0 -translate-x-full bg-white/30 transition-transform duration-500 group-hover:translate-x-0" />
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-line px-6 py-3 font-mono text-sm text-fg transition-all hover:-translate-y-0.5 hover:border-[var(--border-strong)] hover:text-accent"
            >
              {c.hero.ctaContact}
            </a>
            <Socials />
          </motion.div>
        </div>

        {/* Right: system monitor card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease }}
          className="card relative overflow-hidden rounded-2xl p-5 shadow-2xl"
        >
          {/* window bar */}
          <div className="mb-4 flex items-center gap-2 border-b border-line pb-3">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]/70" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]/70" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]/70" />
            <span className="ml-2 font-mono text-xs text-muted">system.status</span>
          </div>

          <div className="space-y-2.5 font-mono text-xs">
            {services.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + i * 0.18 }}
                className="flex items-center justify-between rounded-lg border border-line bg-black/20 px-3 py-2"
              >
                <span className="text-fg-dim">
                  <span className="text-accent-2">◆</span> {s.name}
                </span>
                <span className="flex items-center gap-2 text-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_var(--glow)]" />
                  {s.status}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7 }}
            className="mt-4 rounded-lg bg-black/30 p-3 font-mono text-xs leading-relaxed"
          >
            <span className="text-muted">$</span>{" "}
            <span className="text-fg-dim">deploy --env=prod</span>
            <br />
            <span className="text-accent">✓ build passed · 0 errors</span>
            <span className="cursor-blink text-accent">▌</span>
          </motion.div>

          {/* scanline */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-accent/50"
            style={{ animation: "scan 5s linear infinite" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
