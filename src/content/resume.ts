import type { Locale } from "./portfolio";

// Résumé wording expands the published cases. Identity, roles, dates and project
// stages are reused from portfolio.ts by the generator.
type ResumeContent = {
  summary: string;
  skillsTitle: string;
  educationTitle: string;
  skillGroups: { label: string; text: string }[];
  experienceHighlights: Record<string, string[]>;
  projects: { id: "skills-lab" | "awaken"; bullets: string[] }[];
  volunteer: string;
};

export const resumeContent: Record<Locale, ResumeContent> = {
  pt: {
    summary: "Desenvolvedor frontend com atuação desde 2020 em aplicações web, produtos educacionais e sistemas corporativos. Foco em React, Next.js, TypeScript, micro-frontends e Design Systems, com vivência full stack em projeto freelance. Colaboração com produto, design e backend, além de code reviews e mentoria. Uso de IA no desenvolvimento com revisão de código e validação de comportamento.",
    skillsTitle: "Competências técnicas",
    educationTitle: "Formação",
    skillGroups: [
      { label: "Frontend", text: "React, Next.js, TypeScript, JavaScript, HTML, CSS e interfaces responsivas." },
      { label: "Arquitetura e qualidade", text: "Micro-frontends, Design Systems, Storybook, acessibilidade, performance e code review." },
      { label: "Backend e integrações", text: "APIs REST e GraphQL; vivência com Node.js, NestJS, Prisma e PostgreSQL." },
      { label: "Entrega e cloud", text: "Vivência com Docker, CI/CD, AWS e Google Cloud." },
    ],
    experienceHighlights: {
      Sevenred: [
        "Desenvolvimento frontend em projeto corporativo com React e TypeScript, em arquitetura de micro-frontends.",
        "Atuação com Design Systems, performance e acessibilidade na evolução das interfaces.",
      ],
      "Pixel Breeders": [
        "Desenvolvimento de aplicações web e mobile e de componentes documentados em Storybook.",
        "Participação em code reviews, mentoria e colaboração com designers.",
      ],
      Magroove: [
        "Desenvolvimento com React e integrações com APIs; uso de Docker e participação em projeto com Flask e Elasticsearch.",
      ],
      "Necto Systems": [
        "Desenvolvimento com React, Vue.js e GraphQL; prototipação no Figma, planejamento de sprints e contato com clientes.",
      ],
      Kuadro: [
        "Desenvolvimento com JavaScript, React e Node.js e modernização de aplicações para TypeScript; base em Linux e Git.",
      ],
    },
    projects: [
      {
        id: "skills-lab",
        bullets: [
          "Atuação full stack com React, TypeScript, NestJS, Prisma e PostgreSQL em autenticação, persistência da jornada e backoffice.",
          "Definição do MVP com as clientes e revisão de fluxos de progresso, retomada de rascunhos e certificado, validados com API e banco reais.",
        ],
      },
      {
        id: "awaken",
        bullets: [
          "Frontend e infraestrutura em projeto desenvolvido em dupla. Separação entre temas visuais e regras de progressão, com tokens semânticos e contratos de API. Integração local com API real; beta em preparação.",
        ],
      },
    ],
    volunteer: "Voluntariado: ensino de lógica de programação para crianças no Decolar.",
  },
  en: {
    summary: "Frontend engineer working in software development since 2020 across web applications, education products and corporate systems. Focused on React, Next.js, TypeScript, micro-frontends and Design Systems, with full-stack experience on a freelance project. Experience collaborating with product, design and backend teams, contributing to code reviews and mentoring, and using AI coding tools with code review and behavior validation.",
    skillsTitle: "Technical skills",
    educationTitle: "Education",
    skillGroups: [
      { label: "Frontend", text: "React, Next.js, TypeScript, JavaScript, HTML, CSS and responsive interfaces." },
      { label: "Architecture and quality", text: "Micro-frontends, Design Systems, Storybook, accessibility, performance and code review." },
      { label: "Backend and integrations", text: "REST and GraphQL APIs; experience with Node.js, NestJS, Prisma and PostgreSQL." },
      { label: "Delivery and cloud", text: "Experience with Docker, CI/CD, AWS and Google Cloud." },
    ],
    experienceHighlights: {
      Sevenred: [
        "Develop frontend features for a corporate project using React and TypeScript in a micro-frontend architecture.",
        "Work with Design Systems, performance and accessibility as interfaces evolve.",
      ],
      "Pixel Breeders": [
        "Developed web and mobile applications and components documented in Storybook.",
        "Contributed to code reviews, mentoring and collaboration with designers.",
      ],
      Magroove: [
        "Developed React interfaces and API integrations; used Docker and contributed to a project with Flask and Elasticsearch.",
      ],
      "Necto Systems": [
        "Developed with React, Vue.js and GraphQL; contributed to Figma prototypes, sprint planning and client communication.",
      ],
      Kuadro: [
        "Developed with JavaScript, React and Node.js and modernized applications with TypeScript, building on Linux and Git.",
      ],
    },
    projects: [
      {
        id: "skills-lab",
        bullets: [
          "Full-stack work with React, TypeScript, NestJS, Prisma and PostgreSQL across authentication, persisted learning workflows and the backoffice.",
          "Defined MVP scope with the clients and reviewed learning progress, saved drafts and certificate workflows validated against a real API and database.",
        ],
      },
      {
        id: "awaken",
        bullets: [
          "Frontend and infrastructure in a two-person project. Separated visual themes from progression rules through semantic tokens and API contracts. Local integration with a real API; beta preparation ongoing.",
        ],
      },
    ],
    volunteer: "Volunteer experience: taught programming logic to children at Decolar.",
  },
};
