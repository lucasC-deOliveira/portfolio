"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&/<>{}[]=+*^?$";

export function ScrambleText({
  text,
  trigger = "mount",
  duration = 850,
  className,
}: {
  text: string;
  trigger?: "mount" | "hover";
  duration?: number;
  className?: string;
}) {
  const [display, setDisplay] = useState(text);
  const raf = useRef<number | null>(null);

  const run = useCallback(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setDisplay(text);
      return;
    }
    const start = performance.now();
    const total = text.length;

    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const revealed = Math.floor(p * total);
      let out = "";
      for (let i = 0; i < total; i++) {
        if (i < revealed || text[i] === " ") out += text[i];
        else out += CHARS[Math.floor(Math.random() * CHARS.length)];
      }
      setDisplay(out);
      if (p < 1) raf.current = requestAnimationFrame(tick);
      else setDisplay(text);
    };
    if (raf.current) cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(tick);
  }, [text, duration]);

  useEffect(() => {
    setDisplay(text);
    if (trigger === "mount") run();
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [text, trigger, run]);

  return (
    <span
      className={className}
      onMouseEnter={trigger === "hover" ? run : undefined}
    >
      {display}
    </span>
  );
}
