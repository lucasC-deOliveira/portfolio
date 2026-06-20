import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";
import { BootSequence } from "@/components/BootSequence";

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lucascarvalho.dev"),
  title: "Lucas Carvalho — Desenvolvedor de Sistemas & Full Stack",
  description:
    "Engenheiro de Software de Brasília-DF. Desenvolvimento de sistemas, automação de processos, microsserviços e aplicações full-stack em Python, Java e JavaScript.",
  keywords: [
    "Lucas Carvalho",
    "desenvolvedor",
    "software engineer",
    "full stack",
    "Python",
    "Java",
    "JavaScript",
    "microsserviços",
    "Brasília",
  ],
  authors: [{ name: "Lucas Carvalho de Oliveira" }],
  openGraph: {
    title: "Lucas Carvalho — Desenvolvedor de Sistemas & Full Stack",
    description:
      "Engenheiro de Software. Sistemas, automação de processos e aplicações full-stack.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${jetbrains.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@500,600,700&f[]=satoshi@400,500,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="grain min-h-screen" suppressHydrationWarning>
        <LanguageProvider>
          <BootSequence />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
