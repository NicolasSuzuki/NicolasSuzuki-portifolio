import type { Locale } from "./portfolio";

type Evidence = { src: string; width: number; height: number; alt: string; title: string; text: string; source?: string };
export type Study = { name: string; title: string; kind: string; intro: string; role: string; status: string; stack: string[]; stages: { title: string; text: string }[]; evidence?: Evidence[]; flow?: string[]; productImages?: Evidence[]; outcomes?: { title: string; text: string }[]; result: string; limits: string; links?: { label: string; href: string }[] };
export const slugs = ["skills-lab", "assisted-form", "awaken", "portfolio-com-ia"] as const;
export type StudySlug = typeof slugs[number];
export const studyPath = (slug: string, locale: Locale) => `${locale === "en" ? "/en" : ""}/cases/${slug}/`;
export const studies: Record<Locale, Record<StudySlug, Study>> = {
  "pt": {
    "skills-lab": {
      "name": "Skills Lab",
      "title": "De um protótipo a uma jornada que guarda o progresso.",
      "kind": "Freelance · Produto e desenvolvimento fullstack",
      "intro": "Recebi um frontend com telas demonstrativas e dados simulados. No freelance, ajudei a definir o MVP com as fundadoras e trabalhei na evolução da jornada para uma aplicação com API, banco e retomada de atividades.",
      "role": "Desenvolvimento full stack, definição do MVP, wireframes e alinhamento com as clientes, com apoio de IA na implementação e revisão.",
      "status": "MVP em desenvolvimento e testes",
      "stack": [
        "React",
        "TypeScript",
        "NestJS",
        "Prisma",
        "PostgreSQL",
        "Figma"
      ],
      "stages": [
        {
          "title": "Entender o que já existia",
          "text": "Mapeei o frontend recebido em wireframes para conversar sobre os fluxos com as fundadoras. A partir dessas conversas, transformei decisões de produto em requisitos e tarefas."
        },
        {
          "title": "Conectar as etapas",
          "text": "Trabalhei na evolução de autenticação, persistência da jornada, integrações e backoffice com React, NestJS, Prisma e PostgreSQL."
        },
        {
          "title": "Revisar o comportamento",
          "text": "Além das telas, revisei o que acontece ao salvar, sair, voltar e concluir uma etapa. O PDI é um exemplo dessa ligação entre interface, API e regras da jornada."
        }
      ],
      "evidence": [
        {
          "src": "/cases/skills-lab/as-is.png",
          "width": 1024,
          "height": 735,
          "title": "Mapeamento do que foi recebido",
          "alt": "Wireframe de baixa fidelidade do hub público existente, com apresentação e catálogo de verticais",
          "text": "Página ComoEsta hoje: representação do frontend recebido para entender a estrutura. É um wireframe de análise, não uma captura da aplicação.",
          "source": "https://www.figma.com/design/ETxeJ5InqQAXxoVXFCCrLV?node-id=5-3"
        },
        {
          "src": "/cases/skills-lab/journey.png",
          "width": 2700,
          "height": 1760,
          "title": "Da lista de telas à jornada",
          "alt": "Mapa da jornada proposta em seis etapas: descoberta, compra, acesso, primeiro acesso, aprendizado e conclusão",
          "text": "A versão posterior explicita os papéis e a próxima ação do aluno. O feedback externo aparece como requisito nesta versão do wireframe; depois tornou-se opcional, conforme o relatório de QA. O mapa representa uma etapa do processo.",
          "source": "https://www.figma.com/design/wHIxu3tb3m60tluuLrCozb?node-id=10-2"
        },
        {
          "src": "/cases/skills-lab/onboarding.png",
          "width": 760,
          "height": 560,
          "title": "Uma conversa transformada em fluxo",
          "alt": "Wireframe Me conheça com pergunta sobre desafios de comunicação, alternativas e opções de continuar ou salvar para depois",
          "text": "O primeiro acesso detalha perguntas, escolhas e retomada. Esse nível de definição ajuda a discutir comportamento com as clientes antes da implementação.",
          "source": "https://www.figma.com/design/wHIxu3tb3m60tluuLrCozb?node-id=47-4"
        }
      ],
      "result": "A jornada evoluiu de telas demonstrativas para fluxos com persistência e verificações funcionais. No PDI, o aluno passou a poder retomar uma edição parcial em vez de depender apenas do foco já confirmado.",
      "limits": "O MVP continua em desenvolvimento. Pagamentos e e-mails reais, operação definitiva de mídia e parte da validação pedagógica ainda estavam pendentes no recorte apresentado.",
      "productImages": [
        {
          "src": "/cases/skills-lab/application-pdi.png",
          "width": 1440,
          "height": 1000,
          "title": "O PDI na aplicação",
          "alt": "Tela real do Skills Lab mostrando um plano de desenvolvimento concluído com uma ação de exemplo",
          "text": "Captura de 08/10/2026, em ambiente de teste, com conteúdo de exemplo. Mostra o plano concluído nessa etapa do projeto; a evolução posterior dos rascunhos está descrita abaixo."
        }
      ],
      "outcomes": [
        {
          "title": "Continuar depois",
          "text": "O rascunho é recuperado ao abrir o PDI, incluindo o item que estava sendo editado."
        },
        {
          "title": "Concluir no momento certo",
          "text": "A API verifica os pré-requisitos e impede finalizar o plano com edição pendente."
        },
        {
          "title": "Uma referência comum",
          "text": "Wireframes e requisitos ajudaram a discutir escopo e comportamento com as fundadoras."
        }
      ]
    },
    "assisted-form": {
      "name": "Formulário assistido",
      "title": "Preencher como sugestão. Deixar a decisão com o usuário.",
      "kind": "Experiência corporativa · Recorte anonimizado",
      "intro": "O cliente pediu que um evento preenchesse o formulário inteiro. Propus manter os valores editáveis e avisar que eram sugestões. Implementei esse comportamento.",
      "role": "Proposta e implementação do preenchimento editável, com aviso para o usuário.",
      "status": "Implementado em projeto de cliente",
      "stack": [
        "Frontend",
        "Formulários",
        "Preenchimento assistido",
        "Visão de produto"
      ],
      "stages": [
        {
          "title": "Rever o pedido",
          "text": "Sugeri oferecer o preenchimento como um começo útil, sem impedir que o usuário adaptasse o conteúdo."
        },
        {
          "title": "Dar contexto ao prompt",
          "text": "Propus combinar o título do evento com uma frase predefinida e começar essa composição no frontend."
        },
        {
          "title": "Planejar a evolução",
          "text": "Para ampliar a personalização e avaliar alternativas com métricas, propus uma evolução no backend. Essa parte ficou como próximo passo."
        }
      ],
      "result": "O formulário ganhou um preenchimento inicial que o usuário pode revisar. Minha contribuição foi propor esse comportamento e implementá-lo, preservando espaço para a decisão de quem usa.",
      "limits": "Preservo a identidade, as telas e o código do cliente. O exemplo interativo deste portfólio usa texto fictício e não executa IA. Não há métricas de impacto para este recorte.",
      "outcomes": [
        {
          "title": "Um começo editável",
          "text": "Os valores iniciais ajudam a iniciar o preenchimento e continuam disponíveis para revisão."
        },
        {
          "title": "Uma indicação clara",
          "text": "O aviso explica que o conteúdo é uma sugestão."
        }
      ]
    },
    "awaken": {
      "name": "Awaken",
      "title": "Universos diferentes. A mesma experiência de treino.",
      "kind": "Projeto pessoal · Em colaboração com meu irmão",
      "intro": "Desenvolvo o frontend e cuido da infraestrutura do Awaken com meu irmão, responsável pelo backend. O aplicativo combina treinos, progressão e diferentes identidades visuais.",
      "role": "Frontend, infraestrutura, contratos de integração e decisões sobre experiência e temas.",
      "status": "Integração local validada · Preparação para beta",
      "stack": [
        "Next.js",
        "TypeScript",
        "Design System",
        "PWA",
        "API contracts"
      ],
      "stages": [
        {
          "title": "Construir com contratos",
          "text": "Usei contratos e mocks para avançar nas interfaces enquanto o backend evoluía. Depois, a auditoria local percorreu o fluxo principal com API e PostgreSQL reais."
        },
        {
          "title": "Separar o que muda do que permanece",
          "text": "Organizei a aparência em tokens semânticos e o vocabulário em dicionários tipados. Assim, os componentes podem adaptar a apresentação sem concentrar regras de treino."
        },
        {
          "title": "Usar falhas para definir o próximo passo",
          "text": "A auditoria também encontrou ajustes de recuperação de falhas, dados locais e teclado. Esses cenários passaram a fazer parte dos critérios antes de liberar o beta."
        }
      ],
      "result": "O frontend tem quatro universos visuais, com preferências e linguagem separadas. A integração principal já foi exercitada localmente; agora o trabalho é corrigir os cenários que bloqueiam o beta e validar nos aparelhos reais.",
      "limits": "O aplicativo ainda não está pronto para o beta. Recuperação de falhas, isolamento de dados locais e teclado têm ajustes; aparelhos reais e infraestrutura publicada continuam pendentes.",
      "productImages": [
        {
          "src": "/cases/awaken/application-checkin.png",
          "width": 1082,
          "height": 2202,
          "title": "Registro de atividade no celular",
          "alt": "Tela real do Awaken em conta sintética de auditoria, com opções de check-in rápido, exercícios e plano",
          "text": "Captura da auditoria local de 23/11/2026 com conta e dados fictícios. A tela oferece caminhos diferentes para registrar um treino."
        }
      ],
      "outcomes": [
        {
          "title": "Quatro identidades",
          "text": "Fitness, Caçador, Spotlight e Vigília compartilham componentes e contratos."
        },
        {
          "title": "Preferência independente",
          "text": "Tema visual e linguagem são tratados separadamente, com compatibilidade para valores antigos."
        },
        {
          "title": "Um fluxo integrado",
          "text": "Cadastro, plano, treino e publicação foram verificados com API e PostgreSQL em ambiente local."
        }
      ]
    },
    "portfolio-com-ia": {
      "name": "Este portfólio",
      "title": "Como revisei uma entrega feita com IA.",
      "kind": "Código público · Processo de desenvolvimento",
      "intro": "Usei IA para construir este portfólio, mas também precisei avaliar o resultado e corrigir a direção. O histórico público permite acompanhar essa mudança.",
      "role": "Definição do objetivo, referências, conteúdo e revisão visual e técnica.",
      "status": "Publicado · Código público",
      "stack": [
        "Next.js",
        "TypeScript",
        "Português / English",
        "Static export"
      ],
      "stages": [
        {
          "title": "Dar contexto",
          "text": "Forneci meu histórico, referências e os limites do que poderia apresentar sobre cada projeto."
        },
        {
          "title": "Rever a proposta",
          "text": "Depois de avaliar um redesign editorial, preferi recuperar a identidade anterior. Mantive as melhorias de recrutamento que faziam sentido, como currículo bilíngue e contribuição individual nos cases."
        },
        {
          "title": "Conferir a entrega",
          "text": "Revisei a implementação, os idiomas, a navegação por teclado e os tamanhos de tela. Os commits abaixo registram as duas direções visuais."
        }
      ],
      "result": "O código público mostra como transformei referências e feedback em uma entrega revisada, incluindo uma mudança de direção durante o desenvolvimento.",
      "limits": "A IA participou da implementação. A escolha do que manter e os critérios de aceite continuaram sob minha responsabilidade.",
      "links": [
        {
          "label": "Comparar o redesign editorial",
          "href": "https://github.com/NicolasSuzuki/NicolasSuzuki-portifolio/commit/69cbe9699d9bb663d271abd5e176731984038438"
        },
        {
          "label": "Ver a recuperação da identidade e os ajustes",
          "href": "https://github.com/NicolasSuzuki/NicolasSuzuki-portifolio/commit/3033eebe8082ffc82986b46d8d2cfb1367ac7793"
        }
      ]
    }
  },
  "en": {
    "skills-lab": {
      "name": "Skills Lab",
      "title": "From a prototype to a journey that saves progress.",
      "kind": "Freelance · Product and full-stack development",
      "intro": "I inherited a frontend with demonstration screens and simulated data. As a freelancer, I helped define the MVP with the founders and worked on evolving the journey into an application with an API, database and resumable activities.",
      "role": "Full-stack development, MVP definition, wireframes and client alignment, using AI during implementation and review.",
      "status": "MVP in development and testing",
      "stack": [
        "React",
        "TypeScript",
        "NestJS",
        "Prisma",
        "PostgreSQL",
        "Figma"
      ],
      "stages": [
        {
          "title": "Understand the starting point",
          "text": "I mapped the inherited frontend through wireframes to discuss workflows with the founders. I turned those product decisions into requirements and tasks."
        },
        {
          "title": "Connect the stages",
          "text": "I worked on authentication, journey persistence, integrations and the backoffice using React, NestJS, Prisma and PostgreSQL."
        },
        {
          "title": "Review behavior",
          "text": "Alongside the screens, I reviewed what happens when someone saves, leaves, returns and completes a stage. The development plan connects interface, API and journey rules."
        }
      ],
      "evidence": [
        {
          "src": "/cases/skills-lab/as-is.png",
          "width": 1024,
          "height": 735,
          "title": "Mapping the inherited experience",
          "alt": "Low-fidelity wireframe of the existing public hub with an introduction and learning verticals",
          "text": "The ComoEsta hoje page maps the inherited frontend. This is an analysis wireframe, not an application screenshot.",
          "source": "https://www.figma.com/design/ETxeJ5InqQAXxoVXFCCrLV?node-id=5-3"
        },
        {
          "src": "/cases/skills-lab/journey.png",
          "width": 2700,
          "height": 1760,
          "title": "From screens to a journey",
          "alt": "Proposed journey map: discovery, purchase, access, onboarding, learning and completion",
          "text": "The later version makes user roles and next actions explicit. External feedback is a requirement in this wireframe; it later became optional according to QA records. The map represents a stage of the process. Original wireframe text is in Portuguese.",
          "source": "https://www.figma.com/design/wHIxu3tb3m60tluuLrCozb?node-id=10-2"
        },
        {
          "src": "/cases/skills-lab/onboarding.png",
          "width": 760,
          "height": 560,
          "title": "Turning a conversation into a workflow",
          "alt": "Me conheça onboarding wireframe with a communication-challenge question, choices, continue and save-for-later actions",
          "text": "Onboarding details questions, choices and resumption. This makes behavior discussable with the clients before implementation. Original wireframe text is in Portuguese.",
          "source": "https://www.figma.com/design/wHIxu3tb3m60tluuLrCozb?node-id=47-4"
        }
      ],
      "result": "The journey evolved from demonstration screens into persisted workflows with functional checks. In the development plan, learners can resume a partial edit rather than relying only on a confirmed item.",
      "limits": "The MVP remains in development. Live payments and email, production media operations and part of the pedagogical validation were still outstanding in this selection.",
      "productImages": [
        {
          "src": "/cases/skills-lab/application-pdi.png",
          "width": 1440,
          "height": 1000,
          "title": "The development plan in the application",
          "alt": "Real Skills Lab screen showing a completed development plan with an example action",
          "text": "Captured on 8 October 2026 in a test environment with example content. It shows the completed plan at that stage; the subsequent draft evolution is described below. The original interface is in Portuguese."
        }
      ],
      "outcomes": [
        {
          "title": "Continue later",
          "text": "Opening the plan restores its draft, including the item being edited."
        },
        {
          "title": "Finalize at the right time",
          "text": "The API checks prerequisites and prevents finalization while an edit remains unfinished."
        },
        {
          "title": "A shared reference",
          "text": "Wireframes and requirements supported scope and behavior discussions with the founders."
        }
      ]
    },
    "assisted-form": {
      "name": "Assisted form",
      "title": "Suggest the initial values. Leave the decision to the user.",
      "kind": "Corporate experience · Anonymized selection",
      "intro": "The client requested a form populated entirely from an event. I proposed keeping the values editable and explaining that they were suggestions. I implemented that behavior.",
      "role": "Proposed and implemented editable initial values with a user notice.",
      "status": "Implemented on a client project",
      "stack": [
        "Frontend",
        "Forms",
        "Assisted input",
        "Product thinking"
      ],
      "stages": [
        {
          "title": "Reconsider the request",
          "text": "I suggested offering the initial values as a useful starting point while letting users adapt the content."
        },
        {
          "title": "Give the prompt context",
          "text": "I proposed combining the event title with a predefined phrase and starting this composition in the frontend."
        },
        {
          "title": "Plan the evolution",
          "text": "For broader personalization and comparison through metrics, I proposed a backend evolution. That remained a next step."
        }
      ],
      "result": "The form gained initial values that users can review. My contribution was to propose and implement that behavior while preserving the user's decision.",
      "limits": "I keep the client's identity, screens and code private. The portfolio's interactive example uses fictional text and does not execute AI. No impact metrics are available for this selection.",
      "outcomes": [
        {
          "title": "An editable start",
          "text": "Initial values help users begin and remain available for review."
        },
        {
          "title": "A clear notice",
          "text": "The notice explains that the content is a suggestion."
        }
      ]
    },
    "awaken": {
      "name": "Awaken",
      "title": "Different universes. The same workout experience.",
      "kind": "Personal project · Built with my brother",
      "intro": "I develop Awaken's frontend and handle infrastructure with my brother, who owns the backend. The application brings together workouts, progression and distinct visual identities.",
      "role": "Frontend, infrastructure, integration contracts, experience and theme decisions.",
      "status": "Local integration validated · Preparing for beta",
      "stack": [
        "Next.js",
        "TypeScript",
        "Design System",
        "PWA",
        "API contracts"
      ],
      "stages": [
        {
          "title": "Build against contracts",
          "text": "I used contracts and mocks to advance the interfaces while the backend evolved. A later local audit exercised the main flow with a real API and PostgreSQL."
        },
        {
          "title": "Separate change from continuity",
          "text": "I organized appearance into semantic tokens and vocabulary into typed dictionaries. Components can adapt presentation without owning workout rules."
        },
        {
          "title": "Use failures to define the next step",
          "text": "The audit also identified failure-recovery, local-data and keyboard issues. Those scenarios became criteria to address before beta."
        }
      ],
      "result": "The frontend supports four visual universes with separate preferences and language. The main integration has been exercised locally; the next step is to fix beta blockers and validate on real devices.",
      "limits": "The application is not yet beta-ready. Failure recovery, local-data isolation and keyboard behavior need work; real devices and deployed infrastructure remain outstanding.",
      "productImages": [
        {
          "src": "/cases/awaken/application-checkin.png",
          "width": 1082,
          "height": 2202,
          "title": "Recording activity on mobile",
          "alt": "Real Awaken screen with a synthetic audit account showing quick check-in, exercise and plan options",
          "text": "Captured during the 23 November 2026 local audit using fictional account data. The screen offers different ways to record a workout. The original interface is in Portuguese."
        }
      ],
      "outcomes": [
        {
          "title": "Four identities",
          "text": "Fitness, Hunter, Spotlight and Vigil share components and contracts."
        },
        {
          "title": "Independent preferences",
          "text": "Visual theme and language are handled separately, with compatibility for legacy values."
        },
        {
          "title": "An integrated flow",
          "text": "Registration, plans, workouts and publishing were checked against an API and PostgreSQL locally."
        }
      ]
    },
    "portfolio-com-ia": {
      "name": "This portfolio",
      "title": "How I reviewed an AI-assisted delivery.",
      "kind": "Public code · Development process",
      "intro": "I used AI to build this portfolio, and also needed to evaluate the result and change direction. The public history records that evolution.",
      "role": "Defined the goal, references and content, and reviewed the visual and technical delivery.",
      "status": "Published · Public code",
      "stack": [
        "Next.js",
        "TypeScript",
        "Português / English",
        "Static export"
      ],
      "stages": [
        {
          "title": "Provide context",
          "text": "I shared my background, references and the boundaries of what I could present about each project."
        },
        {
          "title": "Review the proposal",
          "text": "After evaluating an editorial redesign, I preferred restoring the earlier identity. I retained useful recruitment improvements such as bilingual résumés and individual contributions in the cases."
        },
        {
          "title": "Check the delivery",
          "text": "I reviewed the implementation, languages, keyboard navigation and screen sizes. The commits below preserve both visual directions."
        }
      ],
      "result": "The public code shows how I turned references and feedback into a reviewed delivery, including a change of direction during development.",
      "limits": "AI contributed to implementation. What to keep and the acceptance criteria remained my responsibility.",
      "links": [
        {
          "label": "Inspect the editorial redesign",
          "href": "https://github.com/NicolasSuzuki/NicolasSuzuki-portifolio/commit/69cbe9699d9bb663d271abd5e176731984038438"
        },
        {
          "label": "Inspect the identity restoration and improvements",
          "href": "https://github.com/NicolasSuzuki/NicolasSuzuki-portifolio/commit/3033eebe8082ffc82986b46d8d2cfb1367ac7793"
        }
      ]
    }
  }
};
