"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Line = { text: string; tone?: string; pause?: number; breach?: boolean };

const LINES: Line[] = [
  { text: "> booting lucas.dev kernel ...", pause: 140 },
  { text: "> mounting /dev/portfolio ........ [OK]", tone: "ok" },
  { text: "> loading modules [react · next · motion] ... [OK]", tone: "ok" },
  { text: "> establishing secure uplink ...... [OK]", tone: "ok" },
  { text: "> scanning credentials ...", pause: 360 },
  { text: "> ACCESS: UNAUTHORIZED", tone: "danger", pause: 520 },
  { text: ">>> bypassing firewall ...", tone: "warn", pause: 160 },
  { text: ">>> b r e a c h i n g . . .", breach: true, pause: 620 },
  { text: "> ACCESS: AUTHORIZED ✓", tone: "ok2", pause: 380 },
  { text: "> welcome, Lucas Carvalho.", tone: "fg", pause: 280 },
  { text: "", pause: 120 },
  { text: "   [ ENTERING SYSTEM ]", tone: "enter", pause: 600 },
];

const toneClass: Record<string, string> = {
  ok: "text-[var(--accent-2)]",
  ok2: "text-accent glow-accent font-semibold",
  danger: "text-[#ff3b5c]",
  warn: "text-[#ffd23b]",
  fg: "text-fg",
  enter: "text-accent glow-accent text-lg sm:text-xl tracking-[0.3em]",
};

export function BootSequence() {
  const [active, setActive] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [done, setDone] = useState(false);
  const [printed, setPrinted] = useState<string[]>([]);
  const [typing, setTyping] = useState("");
  const [lineIdx, setLineIdx] = useState(0);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const finish = useCallback(() => {
    timers.current.forEach(clearTimeout);
    sessionStorage.setItem("booted", "1");
    setExiting(true);
    setTimeout(() => {
      setDone(true);
      document.body.style.overflow = "";
    }, 700);
  }, []);

  // decide whether to show — once per session, and never with reduced motion
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (sessionStorage.getItem("booted") || reduce) {
      setDone(true);
      return;
    }
    setActive(true);
    document.body.style.overflow = "hidden";
  }, []);

  // typewriter driver
  useEffect(() => {
    if (!active || exiting) return;
    if (lineIdx >= LINES.length) {
      const t = setTimeout(finish, 200);
      timers.current.push(t);
      return;
    }
    const line = LINES[lineIdx];
    let char = 0;
    const type = () => {
      if (char <= line.text.length) {
        setTyping(line.text.slice(0, char));
        char++;
        const t = setTimeout(type, 16 + Math.random() * 22);
        timers.current.push(t);
      } else {
        setPrinted((p) => [...p, line.text]);
        setTyping("");
        const t = setTimeout(() => setLineIdx((i) => i + 1), line.pause ?? 90);
        timers.current.push(t);
      }
    };
    type();
    return () => timers.current.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, lineIdx, exiting]);

  useEffect(() => {
    if (!active) return;
    const skip = () => finish();
    window.addEventListener("keydown", skip);
    return () => window.removeEventListener("keydown", skip);
  }, [active, finish]);

  if (done || !active) return null;

  const currentLine = LINES[Math.min(lineIdx, LINES.length - 1)];

  return (
    <div
      onClick={finish}
      className={`fixed inset-0 z-[200] flex items-center justify-center bg-[#020604] ${
        exiting ? "boot-exit" : ""
      }`}
    >
      <div className="boot-scanlines pointer-events-none absolute inset-0 opacity-60" />
      <div className="glow-orb absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 opacity-30" />

      <div className="relative w-full max-w-xl px-6 font-mono text-sm leading-relaxed sm:text-base">
        <div className="mb-4 flex items-center justify-between border-b border-line pb-2 text-xs text-muted">
          <span className="text-accent-2">SECURE TERMINAL // lucas.dev</span>
          <span>v4.8</span>
        </div>

        {printed.map((l, i) => {
          const tone = LINES[i]?.tone;
          const isBreach = LINES[i]?.breach;
          return (
            <p
              key={i}
              className={isBreach ? "boot-breach" : tone ? toneClass[tone] : "text-fg-dim"}
            >
              {l || " "}
            </p>
          );
        })}

        {typing !== "" || lineIdx < LINES.length ? (
          <p
            className={
              currentLine?.breach
                ? "boot-breach"
                : currentLine?.tone
                  ? toneClass[currentLine.tone]
                  : "text-fg-dim"
            }
          >
            {typing}
            <span className="cursor-blink text-accent">▌</span>
          </p>
        ) : null}

        <p className="mt-8 text-center text-[0.7rem] uppercase tracking-[0.25em] text-muted">
          [ press any key to skip ]
        </p>
      </div>
    </div>
  );
}
