export type Project = {
  name: string;
  category: string;
  tags: string[];
  repo: string;
  featured?: boolean;
  desc: { pt: string; en: string };
};

export const projects: Project[] = [
  {
    name: "disrupt",
    category: "Full Stack",
    tags: ["TypeScript", "React", "Next.js"],
    repo: "https://github.com/lucasC-deOliveira/disrupt",
    featured: true,
    desc: {
      pt: "Front-end da plataforma Disrupt, construído com React/Next e TypeScript, consumindo a API própria do projeto.",
      en: "Front-end of the Disrupt platform, built with React/Next and TypeScript, consuming the project's own API.",
    },
  },
  {
    name: "disrupt-backend",
    category: "Back-end / API",
    tags: ["TypeScript", "Node.js", "REST"],
    repo: "https://github.com/lucasC-deOliveira/disrupt-backend",
    featured: true,
    desc: {
      pt: "API back-end da Disrupt em TypeScript, responsável pela regra de negócio, autenticação e persistência de dados.",
      en: "Disrupt back-end API in TypeScript, handling business logic, authentication and data persistence.",
    },
  },
  {
    name: "backendTecnowdente",
    category: "Back-end / API",
    tags: ["TypeScript", "Node.js", "REST"],
    repo: "https://github.com/lucasC-deOliveira/backendTecnowdente",
    featured: true,
    desc: {
      pt: "Back-end de aplicação para o setor odontológico, com endpoints REST e arquitetura organizada em camadas.",
      en: "Back-end for a dental-tech application, with REST endpoints and a layered, organized architecture.",
    },
  },
  {
    name: "rockelivery",
    category: "Back-end / Elixir",
    tags: ["Elixir", "Phoenix", "REST"],
    repo: "https://github.com/lucasC-deOliveira/rockelivery",
    desc: {
      pt: "API de delivery escrita em Elixir, explorando concorrência, ecossistema Phoenix e boas práticas funcionais.",
      en: "Delivery API written in Elixir, exploring concurrency, the Phoenix ecosystem and functional best practices.",
    },
  },
  {
    name: "Clean-Node-API",
    category: "Arquitetura",
    tags: ["Node.js", "Clean Architecture", "TDD"],
    repo: "https://github.com/lucasC-deOliveira/Clean-Node-API",
    desc: {
      pt: "API Node.js construída sob os princípios de Clean Architecture, SOLID e desenvolvimento orientado a testes.",
      en: "Node.js API built on the principles of Clean Architecture, SOLID and test-driven development.",
    },
  },
  {
    name: "gofinances",
    category: "Mobile",
    tags: ["React Native", "TypeScript"],
    repo: "https://github.com/lucasC-deOliveira/gofinances",
    desc: {
      pt: "App mobile de controle financeiro em React Native, com categorização de transações e dashboards.",
      en: "Mobile finance-tracking app in React Native, with transaction categorization and dashboards.",
    },
  },
];
