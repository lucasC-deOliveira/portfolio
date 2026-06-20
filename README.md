<h1 align="center">lucas.dev — Portfólio</h1>

<p align="center">
  Portfólio pessoal de <strong>Lucas Carvalho de Oliveira</strong> — Desenvolvedor de Sistemas & Full Stack.<br/>
  Tema hacker/terminal em verde-neon, bilíngue (PT/EN) e com um boot intro estilo <em>"ACCESS GRANTED"</em>.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-000?style=for-the-badge&logo=nextdotjs" alt="Next.js"/>
  <img src="https://img.shields.io/badge/React-19-149ECA?style=for-the-badge&logo=react&logoColor=white" alt="React"/>
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Tailwind-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind"/>
  <img src="https://img.shields.io/badge/Motion-12-2bff88?style=for-the-badge" alt="Motion"/>
</p>

---

## ✨ Funcionalidades

- **Boot intro "ACCESS GRANTED"** — sequência de terminal glitchada que toca uma vez por sessão (`UNAUTHORIZED → breaching → AUTHORIZED`).
- **Bilíngue PT/EN** — toggle de idioma com persistência em `localStorage`.
- **Tema hacker verde** — paleta verde-neon, grid "blueprint", grão de filme e chuva de código estilo Matrix no fundo.
- **Efeitos de scramble** — decodificação de texto no nome, nos links do menu e nos títulos dos projetos.
- **Animações on-scroll** com [Motion](https://motion.dev).
- **Acessível** — respeita `prefers-reduced-motion` (desliga animações pesadas).
- **SEO** — metadata e Open Graph configurados.

## 🧱 Stack

| Camada | Tecnologia |
|--------|------------|
| Framework | Next.js 16 (App Router) |
| UI | React 19 · Tailwind CSS v4 |
| Animação | Motion |
| Linguagem | TypeScript |
| Fontes | Clash Display · Satoshi · JetBrains Mono |
| Deploy | Vercel |

## 🗂️ Estrutura

```
src/
├── app/
│   ├── layout.tsx        # fontes, metadata, providers, boot
│   ├── page.tsx          # composição das seções
│   └── globals.css       # tema, tokens e efeitos (grid, grain, glitch)
├── components/           # Hero, About, Skills, Experience, Projects, Contact…
│   ├── BootSequence.tsx  # intro "ACCESS GRANTED"
│   ├── MatrixRain.tsx    # chuva de código no fundo
│   └── ScrambleText.tsx  # efeito de decodificação de texto
└── lib/
    ├── i18n.tsx          # conteúdo e contexto bilíngue
    └── projects.ts       # lista de projetos
```

## 🚀 Rodando localmente

```bash
npm install
npm run dev      # http://localhost:3000
```

Outros scripts:

```bash
npm run build    # build de produção
npm run start    # serve o build
npm run lint     # eslint
```

> Dica: o boot intro só roda uma vez por sessão. Para revê-lo, abra uma aba anônima
> ou rode `sessionStorage.removeItem('booted')` no console e recarregue.

## 📬 Contato

- **GitHub:** [@lucasC-deOliveira](https://github.com/lucasC-deOliveira)
- **LinkedIn:** [lucas-c-oliveira](https://www.linkedin.com/in/lucas-c-oliveira/)
- **E-mail:** lucascdoliveira.dev@gmail.com

---

<p align="center"><sub>Feito com Next.js, Tailwind & cafeína. 💚</sub></p>
