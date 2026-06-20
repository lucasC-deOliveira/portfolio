"use client";

import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { c } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 font-mono text-xs text-muted sm:flex-row">
        <span>© {year} Lucas Carvalho de Oliveira</span>
        <span>{c.footer}</span>
      </div>
    </footer>
  );
}
