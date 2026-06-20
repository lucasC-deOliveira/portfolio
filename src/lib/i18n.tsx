"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "pt" | "en";

export const content = {
  pt: {
    nav: {
      about: "Sobre",
      skills: "Stack",
      experience: "Experiência",
      projects: "Projetos",
      contact: "Contato",
    },
    hero: {
      status: "Disponível para novas oportunidades",
      greeting: "Olá, eu sou o",
      name: "Lucas Carvalho",
      roles: [
        "Desenvolvedor de Sistemas",
        "Automação de Processos",
        "Full Stack · Python, Java & JavaScript",
      ],
      tagline:
        "Engenheiro de Software de Brasília-DF. Construo sistemas confiáveis, automatizo processos e migro monolitos para microsserviços — com foco em código limpo e entregas que escalam.",
      ctaProjects: "Ver projetos",
      ctaContact: "Falar comigo",
    },
    about: {
      label: "// sobre mim",
      title: "Transformo problemas complexos em sistemas simples.",
      p1: "Sou Engenheiro de Software com experiência no desenvolvimento de sistemas e na automação de processos, com domínio de Python e Java. Atuo em integração de sistemas via APIs (REST e GraphQL), migração de arquiteturas monolíticas para microsserviços e desenvolvimento de aplicações full-stack.",
      p2: "Tenho vivência em monitoramento, testes e correção de erros para garantir a estabilidade e o desempenho das aplicações, além de conhecimento em geração de relatórios e análise de dados com Power BI e Excel.",
      p3: "Meu foco é otimizar fluxos de trabalho, elevar a eficiência operacional e assegurar a qualidade das entregas.",
      factsLabel: "Idiomas",
      languages: [
        { name: "Português", level: "Nativo" },
        { name: "Inglês", level: "Avançado · C1" },
        { name: "Espanhol", level: "Básico" },
      ],
    },
    skills: {
      label: "// stack técnica",
      title: "Tecnologias com que trabalho",
      categories: [
        { name: "Linguagens", items: ["Python", "Java", "JavaScript", "TypeScript", "PHP", "C", "C++", "Elixir"] },
        { name: "Front-end", items: ["React", "Next.js", "React Native", "Angular", "jQuery", "HTML", "CSS"] },
        { name: "Back-end & APIs", items: ["Node.js", "NestJS", "Spring Boot", "REST", "GraphQL", "WebSockets", "WebHooks"] },
        { name: "Banco de Dados", items: ["PostgreSQL", "MySQL", "MongoDB", "Neo4j"] },
        { name: "Cloud & DevOps", items: ["AWS", "Azure", "Docker", "Nginx", "Apache"] },
        { name: "Arquitetura & Práticas", items: ["Microsserviços", "Clean Architecture", "SOLID", "DDD", "TDD", "Scrum"] },
        { name: "Dados & BI", items: ["Power BI", "Excel"] },
        { name: "3D & Criativo", items: ["Unreal Engine 5", "Blender", "Three.js"] },
      ],
    },
    experience: {
      label: "// experiência",
      title: "Onde eu já atuei",
      role: "Desenvolvedor",
      company: "SdInnovation",
      period: "2022 — 2023",
      blocks: [
        {
          heading: "Microsserviços críticos em tempo real",
          points: [
            "Desenvolvimento e manutenção de microsserviços críticos em tempo real, garantindo estabilidade e desempenho das aplicações.",
            "Refatoração de código legado aplicando SOLID, Clean Code e Clean Architecture, melhorando a manutenibilidade dos sistemas.",
            "Integração de sistemas com WhatsApp e diversas APIs externas, assegurando a troca eficiente de dados entre plataformas.",
            "Migração de sistemas monolíticos para arquitetura de microsserviços.",
            "Integração e monitoramento de ambientes com Zabbix.",
          ],
        },
        {
          heading: "Desenvolvimento full-stack",
          points: [
            "Integração com APIs web, como a Canvas, para automação de fluxos e troca de dados.",
            "Desenvolvimento de um sistema de edição de imagens.",
            "Prototipação de interfaces e desenvolvimento de microfrontends.",
          ],
        },
      ],
    },
    projects: {
      label: "// projetos selecionados",
      title: "Coisas que eu construí",
      subtitle: "Uma seleção de projetos. Veja mais no GitHub.",
      viewRepo: "Repositório",
      all: "Ver todos no GitHub",
    },
    contact: {
      label: "// contato",
      title: "Vamos construir algo juntos?",
      text: "Estou aberto a novas oportunidades e colaborações. Me mande uma mensagem — respondo rápido.",
      cta: "Enviar e-mail",
      locationLabel: "Localização",
      location: "Brasília, DF — Brasil",
    },
    footer: "Feito com Next.js, Tailwind & cafeína.",
  },

  en: {
    nav: {
      about: "About",
      skills: "Stack",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      status: "Available for new opportunities",
      greeting: "Hi, I'm",
      name: "Lucas Carvalho",
      roles: [
        "Systems Developer",
        "Process Automation",
        "Full Stack · Python, Java & JavaScript",
      ],
      tagline:
        "Software Engineer based in Brasília, Brazil. I build reliable systems, automate processes and migrate monoliths to microservices — with a focus on clean code and deliveries that scale.",
      ctaProjects: "View projects",
      ctaContact: "Get in touch",
    },
    about: {
      label: "// about me",
      title: "I turn complex problems into simple systems.",
      p1: "I'm a Software Engineer with experience in systems development and process automation, proficient in Python and Java. I work on system integration via APIs (REST and GraphQL), migrating monolithic architectures to microservices and building full-stack applications.",
      p2: "I have hands-on experience in monitoring, testing and bug fixing to ensure application stability and performance, plus knowledge in reporting and data analysis with Power BI and Excel.",
      p3: "My focus is optimizing workflows, raising operational efficiency and ensuring the quality of every delivery.",
      factsLabel: "Languages",
      languages: [
        { name: "Portuguese", level: "Native" },
        { name: "English", level: "Advanced · C1" },
        { name: "Spanish", level: "Basic" },
      ],
    },
    skills: {
      label: "// tech stack",
      title: "Technologies I work with",
      categories: [
        { name: "Languages", items: ["Python", "Java", "JavaScript", "TypeScript", "PHP", "C", "C++", "Elixir"] },
        { name: "Front-end", items: ["React", "Next.js", "React Native", "Angular", "jQuery", "HTML", "CSS"] },
        { name: "Back-end & APIs", items: ["Node.js", "NestJS", "Spring Boot", "REST", "GraphQL", "WebSockets", "WebHooks"] },
        { name: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "Neo4j"] },
        { name: "Cloud & DevOps", items: ["AWS", "Azure", "Docker", "Nginx", "Apache"] },
        { name: "Architecture & Practices", items: ["Microservices", "Clean Architecture", "SOLID", "DDD", "TDD", "Scrum"] },
        { name: "Data & BI", items: ["Power BI", "Excel"] },
        { name: "3D & Creative", items: ["Unreal Engine 5", "Blender", "Three.js"] },
      ],
    },
    experience: {
      label: "// experience",
      title: "Where I've worked",
      role: "Developer",
      company: "SdInnovation",
      period: "2022 — 2023",
      blocks: [
        {
          heading: "Real-time critical microservices",
          points: [
            "Built and maintained real-time critical microservices, ensuring application stability and performance.",
            "Refactored legacy code applying SOLID, Clean Code and Clean Architecture, improving system maintainability.",
            "Integrated systems with WhatsApp and several external APIs, ensuring efficient data exchange across platforms.",
            "Migrated monolithic systems to a microservices architecture.",
            "Integrated and monitored environments with Zabbix.",
          ],
        },
        {
          heading: "Full-stack development",
          points: [
            "Integrated web APIs such as Canvas to automate workflows and exchange data.",
            "Developed an image editing system.",
            "Prototyped interfaces and developed microfrontends.",
          ],
        },
      ],
    },
    projects: {
      label: "// selected work",
      title: "Things I've built",
      subtitle: "A selection of projects. See more on GitHub.",
      viewRepo: "Repository",
      all: "See all on GitHub",
    },
    contact: {
      label: "// contact",
      title: "Let's build something together?",
      text: "I'm open to new opportunities and collaborations. Drop me a message — I reply fast.",
      cta: "Send an email",
      locationLabel: "Location",
      location: "Brasília, DF — Brazil",
    },
    footer: "Built with Next.js, Tailwind & caffeine.",
  },
};

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  c: (typeof content)["pt"];
};

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("pt");

  useEffect(() => {
    const saved = window.localStorage.getItem("lang") as Lang | null;
    if (saved === "pt" || saved === "en") setLang(saved);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("lang", lang);
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [lang]);

  const toggle = () => setLang((p) => (p === "pt" ? "en" : "pt"));

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, c: content[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useI18n must be used within LanguageProvider");
  return ctx;
}
