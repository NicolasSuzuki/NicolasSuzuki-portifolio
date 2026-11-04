export type Locale = "pt" | "en";
export type ProjectVisual =
  | { type: "screenshots"; desktop: string; mobile: string; alt: string; caption: string }
  | { type: "diagram"; steps: string[]; alt: string; caption: string };
const visuals: Record<Locale, Record<string, ProjectVisual>> = {
  pt: {
    awaken: { type: "screenshots", desktop: "/projects/awaken-desktop.jpg", mobile: "/projects/awaken-mobile.jpg", alt: "Tela real de acesso do Awaken no tema Fitness, em desktop e celular, sem dados preenchidos", caption: "Awaken / tela de acesso / ambiente local de demonstração" },
    learning: { type: "diagram", steps: ["Diagnóstico", "Aprendizagem", "Prática", "Evolução"], alt: "Diagrama da jornada: diagnóstico, aprendizagem, prática e acompanhamento de evolução", caption: "Jornada de aprendizagem / diagrama do escopo" },
    education: { type: "diagram", steps: ["Editar", "Validar", "Exportar"], alt: "Diagrama técnico dos fluxos de edição, validação e exportação de materiais", caption: "Fluxo de materiais / representação técnica anonimizada" },
  },
  en: {
    awaken: { type: "screenshots", desktop: "/projects/awaken-desktop.jpg", mobile: "/projects/awaken-mobile.jpg", alt: "Real Awaken sign-in screen in the Fitness theme, on desktop and mobile, with empty fields", caption: "Awaken / sign-in screen / local demonstration environment" },
    learning: { type: "diagram", steps: ["Assessment", "Learning", "Practice", "Progress"], alt: "Learning journey diagram: assessment, learning, practice and progress tracking", caption: "Learning journey / scope diagram" },
    education: { type: "diagram", steps: ["Edit", "Validate", "Export"], alt: "Technical diagram of editing, validation and document export workflows", caption: "Materials workflow / anonymized technical representation" },
  },
};

export const profile = {
  name: "Nicolas Suzuki",
  email: "nicolas.suzuki@gmail.com",
  github: "https://github.com/NicolasSuzuki",
  linkedin: "https://www.linkedin.com/in/nicolas-alves-suzuki/",
};

export const content = {
  pt: {
    skip: "Pular para o conteúdo", nav: ["Projetos", "Sobre", "Com IA", "Experiência"], contactNav: "Vamos conversar",
    menu: "Abrir navegação", close: "Fechar", language: "Mudar para inglês",
    role: "Desenvolvedor frontend", location: "São José dos Campos, Brasil",
    hero: ["Nicolas", "Suzuki"],
    intro: "Trabalho com React, Next.js e TypeScript em produtos educacionais e sistemas corporativos. Uso IA para investigar, implementar e revisar, com contexto e verificação técnica.",
    seeProjects: "Ver projetos", aboutLink: "Um pouco sobre mim", scroll: "ROLE PARA EXPLORAR", since: "CONSTRUINDO PARA A WEB DESDE 2020",
    selected: "TRABALHOS SELECIONADOS", projectsTitle: "Projetos selecionados", projectsIntro: "Experiências corporativas, trabalho freelance e um projeto pessoal em colaboração. Contextos diferentes, o mesmo cuidado com a engenharia e a experiência de uso.",
    openProject: "Explorar projeto", concept: "Visualização ilustrativa · não é uma captura do produto",
    projectDetails: "Detalhes do projeto", context: "O contexto", contribution: "Minha participação", scope: "O que o case explora", status: "Estágio do projeto", stack: "TECNOLOGIAS E TEMAS", nextProject: "Conversar sobre este projeto",
    projects: [
      { id: "skills-lab", number: "01", kind: "FREELANCE · EDUCAÇÃO", name: "Skills Lab", subtitle: "Aprender. Praticar. Evoluir.", description: "Projeto freelance de uma plataforma de aprendizagem que aproxima conteúdo, prática e evolução pessoal.", tags: ["React", "TypeScript", "APIs", "PostgreSQL"], visual: visuals.pt.learning, statusLabel: "MVP em evolução", context: "Trabalho freelance para uma plataforma de desenvolvimento de comunicação, reunindo aprendizagem, práticas e acompanhamento de evolução.", contribution: "Atuação como desenvolvedor freelance no planejamento e na implementação da plataforma, da estruturação do MVP à integração entre interface, autenticação e API.", scope: "Organização da experiência de aprendizagem; integração frontend e backend; autenticação JWT; documentação da API com Swagger; validação de login e persistência de sessão em desktop e celular emulado.", status: "MVP em evolução. Os registros do projeto incluem API e banco operacionais e validações de autenticação." },
      { id: "education-platform", number: "02", kind: "EXPERIÊNCIA CORPORATIVA · EDUCAÇÃO", name: "Plataforma educacional", subtitle: "Tecnologia a favor de quem ensina.", description: "Engenharia de interfaces para fluxos de criação de atividades, planos e materiais educacionais.", tags: ["Next.js", "React", "TypeScript"], visual: visuals.pt.education, statusLabel: "Experiência profissional", context: "Uma plataforma educacional com fluxos de criação e edição de materiais, planos e exportação de documentos.", contribution: "Trabalho no frontend, com foco em integrações, estados de interface e tratamento de falhas nos fluxos de geração e exportação.", scope: "Componentes reutilizáveis; integração com APIs; estados de carregamento e erro; edição de conteúdo; exportação de documentos; acessibilidade e qualidade da interface.", status: "Recorte técnico da minha experiência em produtos educacionais. Os detalhes são apresentados em nível geral, com diagrama técnico, preservando informações internas e a identidade das organizações envolvidas." },
      { id: "awaken", number: "03", kind: "PROJETO PESSOAL · FITNESS", name: "Awaken", subtitle: "Consistência vira progressão.", description: "Projeto pessoal criado com meu irmão: uma experiência de treinos com identidade visual e mecânicas de progressão.", tags: ["Frontend", "Design System", "PWA"], visual: visuals.pt.awaken, statusLabel: "Em desenvolvimento", context: "Projeto pessoal criado em parceria com meu irmão para explorar um aplicativo fitness com treinos, progressão, grupos e rankings em universos visuais distintos.", contribution: "Na colaboração com meu irmão, minha atuação abrange frontend e infraestrutura, além das decisões de experiência, tematização e planejamento de entregas.", scope: "Design System e temas semânticos; jornadas de treino; experiência responsiva; integração planejada com backend; organização do backlog por sprints e critérios de aceite.", status: "Em desenvolvimento. As interfaces e os contratos avançaram com uso de mocks; integração completa com backend e QA ainda fazem parte do trabalho pendente. O portfólio não apresenta esses fluxos como um produto finalizado." },
    ],
    aboutEyebrow: "UM POUCO SOBRE MIM", aboutTitle: ["Sobre"],
    aboutText: ["Gosto de entender o problema antes de abrir o editor. Minha especialidade é frontend, mas meu trabalho vai além de transformar um layout em código.", "Desde 2020, participo da construção e evolução de aplicações web, plataformas educacionais e sistemas corporativos. Colaboro com produto, design e backend para conectar decisões técnicas às necessidades de quem usa.", "Acredito em interfaces que fazem sentido, componentes que podem evoluir e software que o próximo desenvolvedor consegue entender."],
    education: "Ciências e Tecnologia · UNIFESP", educationExtra: "Técnico em Mecatrônica · ETEP", languages: "Português nativo · Inglês B2", volunteer: "Também já ensinei lógica de programação para crianças, como professor voluntário no Decolar.",
    expertise: [
      { number: "01", title: "Frontend engineering", description: "React, Next.js, TypeScript e interfaces responsivas. Performance e acessibilidade desde a construção." },
      { number: "02", title: "Arquitetura & Design Systems", description: "Micro-frontends, componentes reutilizáveis e documentação com Storybook para sustentar a evolução do produto." },
      { number: "03", title: "Integrações & infraestrutura", description: "Vivência com APIs REST e GraphQL, Node.js, Docker, CI/CD e ambientes AWS e Google Cloud." },
      { number: "04", title: "Produto & colaboração", description: "Refinamento técnico, planejamento de sprints, code reviews, mentoria e colaboração próxima com design." },
    ],
    aiEyebrow: "MEU JEITO DE TRABALHAR", aiTitle: ["Como trabalho com IA"],
    aiText: ["Uso IA para ampliar minha capacidade de investigar, prototipar e desenvolver. Estruturo o contexto, defino o escopo e os critérios de aceite e conduzo a implementação em ciclos curtos.", "Meu trabalho inclui avaliar as sugestões, revisar o código e verificar o comportamento com testes e validação no navegador. Cuido do contexto compartilhado e da confidencialidade das informações de cada projeto."],
    aiPrinciple: "Combino a capacidade de exploração da IA com minha responsabilidade técnica sobre as decisões e a entrega.",
    aiSteps: [
      { number: "01", title: "Dar contexto", description: "Investigo o código existente, explico o problema e estabeleço restrições e critérios de aceite antes da implementação." },
      { number: "02", title: "Conduzir a construção", description: "Divido o trabalho em etapas, exploro alternativas e uso a IA em análise de código, prototipação, refatoração e revisão." },
      { number: "03", title: "Verificar a entrega", description: "Cruzo as sugestões com o código e os contratos reais. Uso testes, revisão de alterações e validação visual e de interação." },
      { number: "04", title: "Aplicar critério", description: "Avalio o contexto que pode ser compartilhado, os limites de cada ferramenta e o que depende de confirmação antes de avançar." },
    ],
    experienceEyebrow: "EXPERIÊNCIA SELECIONADA", experienceTitle: ["Experiência"], experienceIntro: "Uma seleção da minha trajetória em desenvolvimento de software, com foco nas competências e contribuições de cada experiência.",
    jobs: [
      { company: "Sevenred", role: "Desenvolvedor Frontend Pleno", period: "2025 — atual", detail: "Atuação em um projeto corporativo com React e TypeScript, arquitetura de micro-frontends, Design Systems, performance e acessibilidade." },
      { company: "Pixel Breeders", role: "Desenvolvedor de Software", period: "2023 — 2025", detail: "Aplicações web e mobile, componentes documentados em Storybook, code reviews, mentoria e colaboração com designers." },
      { company: "Magroove", role: "Desenvolvedor Júnior", period: "2023", detail: "Frontend com React, integrações com APIs, Docker e participação em projeto com Flask e Elasticsearch." },
      { company: "Necto Systems", role: "Desenvolvimento de Software", period: "2022 — 2023", detail: "React, Vue.js, GraphQL, prototipação no Figma e participação no planejamento de sprints e no contato com clientes." },
      { company: "Kuadro", role: "Estágio em TI → Desenvolvedor Júnior", period: "2020 — 2022", detail: "Base em Linux, Git, JavaScript e React. Desenvolvimento com Node.js e modernização de aplicações para TypeScript." },
    ],
    contactEyebrow: "O PRÓXIMO PROJETO COMEÇA COM UMA CONVERSA", contactTitle: ["Tem um projeto", "ou uma oportunidade?"], contactText: "Tem um desafio, uma ideia ou uma oportunidade? Vou gostar de conhecer.", emailAction: "Me envie um e-mail", copyEmail: "Copiar e-mail", copied: "E-mail copiado", copyFailed: "Não foi possível copiar. Use o link de e-mail.", footer: "Feito com Next.js e atenção aos detalhes.", backTop: "Voltar ao topo", detailNote: "Cada case descreve minha participação. As capturas do Awaken são de ambiente local; os demais visuais são diagramas técnicos.",
  },
  en: {
    skip: "Skip to content", nav: ["Work", "About", "With AI", "Experience"], contactNav: "Let's talk",
    menu: "Open navigation", close: "Close", language: "Switch to Portuguese",
    role: "Frontend developer", location: "São José dos Campos, Brazil",
    hero: ["Nicolas", "Suzuki"],
    intro: "I work with React, Next.js and TypeScript on education products and corporate systems. I use AI to investigate, implement and review, with context and technical verification.",
    seeProjects: "Explore my work", aboutLink: "A little about me", scroll: "SCROLL TO EXPLORE", since: "BUILDING FOR THE WEB SINCE 2020",
    selected: "SELECTED WORK", projectsTitle: "Selected projects", projectsIntro: "Corporate experience, freelance work and a collaborative personal project. Different contexts, with the same care for engineering and the user experience.",
    openProject: "Explore project", concept: "Illustrative preview · not a product screenshot",
    projectDetails: "Project details", context: "The context", contribution: "My contribution", scope: "What the case explores", status: "Project stage", stack: "TECHNOLOGIES & TOPICS", nextProject: "Let's talk about this project",
    projects: [
      { id: "skills-lab", number: "01", kind: "FREELANCE · EDUCATION", name: "Skills Lab", subtitle: "Learn. Practice. Grow.", description: "A freelance learning platform project bringing content, practice and personal development together.", tags: ["React", "TypeScript", "APIs", "PostgreSQL"], visual: visuals.en.learning, statusLabel: "Evolving MVP", context: "Freelance work on a communication-skills platform bringing together learning, practice and progress tracking.", contribution: "Freelance development work on planning and implementing the platform, from defining the MVP to connecting the interface, authentication and API.", scope: "Learning experience design; frontend and backend integration; JWT authentication; API documentation with Swagger; login and session-persistence checks on desktop and an emulated mobile device.", status: "An evolving MVP. Project records include an operational API and database and authentication checks." },
      { id: "education-platform", number: "02", kind: "CORPORATE EXPERIENCE · EDUCATION", name: "Education platform", subtitle: "Technology for the people who teach.", description: "Interface engineering for creating activities, lesson plans and educational materials.", tags: ["Next.js", "React", "TypeScript"], visual: visuals.en.education, statusLabel: "Professional experience", context: "An education platform with workflows for creating and editing materials, planning lessons and exporting documents.", contribution: "Frontend work focused on integrations, interface states and failure handling in generation and export workflows.", scope: "Reusable components; API integration; loading and error states; content editing; document exports; accessibility and interface quality.", status: "A technical selection from my experience with education products. Details are presented at a general level with a technical diagram, preserving internal information and the identity of the organizations involved." },
      { id: "awaken", number: "03", kind: "PERSONAL PROJECT · FITNESS", name: "Awaken", subtitle: "Turning consistency into progression.", description: "A personal project created with my brother: a workout experience with a distinct visual identity and progression mechanics.", tags: ["Frontend", "Design System", "PWA"], visual: visuals.en.awaken, statusLabel: "In development", context: "A personal project created with my brother to explore a fitness app with workouts, progression, groups and rankings across distinct visual universes.", contribution: "In this collaboration with my brother, my work covers frontend and infrastructure, alongside experience, theming and delivery-planning decisions.", scope: "Design System and semantic themes; workout journeys; responsive experience; planned backend integration; sprint-based backlog and acceptance criteria.", status: "In development. Interfaces and contracts have progressed using mocks; full backend integration and QA remain outstanding. These workflows are not presented as a finished product." },
    ],
    aboutEyebrow: "A LITTLE ABOUT ME", aboutTitle: ["About"],
    aboutText: ["I like to understand the problem before opening the editor. Frontend is my specialty, but my work goes beyond translating a layout into code.", "Since 2020, I've contributed to building and evolving web applications, education platforms and corporate systems. I collaborate with product, design and backend teams to connect technical decisions with people's needs.", "I believe in interfaces that make sense, components that can evolve and software the next developer can understand."],
    education: "Science and Technology · UNIFESP", educationExtra: "Technical degree in Mechatronics · ETEP", languages: "Native Portuguese · English B2", volunteer: "I also taught programming logic to children as a volunteer teacher at Decolar.",
    expertise: [
      { number: "01", title: "Frontend engineering", description: "React, Next.js, TypeScript and responsive interfaces. Performance and accessibility built in from the start." },
      { number: "02", title: "Architecture & Design Systems", description: "Micro-frontends, reusable components and Storybook documentation that support product evolution." },
      { number: "03", title: "Integrations & infrastructure", description: "Experience with REST and GraphQL APIs, Node.js, Docker, CI/CD and AWS and Google Cloud environments." },
      { number: "04", title: "Product & collaboration", description: "Technical refinement, sprint planning, code reviews, mentoring and close collaboration with design." },
    ],
    aiEyebrow: "HOW I WORK", aiTitle: ["How I work with AI"],
    aiText: ["I use AI to expand my ability to investigate, prototype and develop. I structure the context, define the scope and acceptance criteria, and guide implementation through short iterations.", "My work includes evaluating suggestions, reviewing code and checking behavior through tests and browser validation. I consider the context being shared and the confidentiality of each project's information."],
    aiPrinciple: "I combine AI's capacity for exploration with my technical responsibility for decisions and delivery.",
    aiSteps: [
      { number: "01", title: "Establish context", description: "I investigate the existing code, explain the problem and define constraints and acceptance criteria before implementation." },
      { number: "02", title: "Guide the work", description: "I break work into stages, explore alternatives and use AI for code analysis, prototyping, refactoring and review." },
      { number: "03", title: "Verify the delivery", description: "I check suggestions against real code and contracts, using tests, change reviews, and visual and interaction checks." },
      { number: "04", title: "Exercise judgment", description: "I assess what context can be shared, the limits of each tool and what requires confirmation before proceeding." },
    ],
    experienceEyebrow: "SELECTED EXPERIENCE", experienceTitle: ["Experience"], experienceIntro: "A selection from my software development journey, focusing on the skills and contributions of each experience.",
    jobs: [
      { company: "Sevenred", role: "Mid-level Frontend Developer", period: "2025 — present", detail: "Work on a corporate project with React and TypeScript, micro-frontend architecture, Design Systems, performance and accessibility." },
      { company: "Pixel Breeders", role: "Software Developer", period: "2023 — 2025", detail: "Web and mobile applications, components documented in Storybook, code reviews, mentoring and collaboration with designers." },
      { company: "Magroove", role: "Junior Developer", period: "2023", detail: "React frontend, API integrations, Docker and contribution to a project using Flask and Elasticsearch." },
      { company: "Necto Systems", role: "Software Development", period: "2022 — 2023", detail: "React, Vue.js, GraphQL, Figma prototyping, sprint planning and communication with clients." },
      { company: "Kuadro", role: "IT Intern → Junior Developer", period: "2020 — 2022", detail: "Foundations in Linux, Git, JavaScript and React. Node.js development and modernizing applications with TypeScript." },
    ],
    contactEyebrow: "THE NEXT PROJECT STARTS WITH A CONVERSATION", contactTitle: ["A project", "or an opportunity?"], contactText: "A challenge, an idea or an opportunity? I'd love to hear about it.", emailAction: "Send me an email", copyEmail: "Copy email", copied: "Email copied", copyFailed: "Unable to copy. Please use the email link.", footer: "Made with Next.js and attention to detail.", backTop: "Back to top", detailNote: "Each case describes my contribution. Awaken captures come from a local environment; other visuals are technical diagrams.",
  },
};

export type Project = (typeof content.pt.projects)[number];
export const demoCopy = {
  pt: {
    title: "Como uma interface reage", label: "Demonstração interativa do portfólio", intro: "Experimente mudar a largura e o estado deste cartão. São decisões que também aparecem no meu trabalho: organizar conteúdo, comunicar espera e oferecer recuperação de erro.",
    width: "Largura", wide: "Ampla", compact: "Compacta", state: "Estado", ready: "Conteúdo", loading: "Carregando", error: "Erro", retry: "Tentar novamente", errorTitle: "O projeto não carregou", errorText: "Tente novamente para recuperar o conteúdo.", loadingText: "Carregando projeto", cardKind: "Projeto pessoal · com meu irmão", cardText: "Frontend e infraestrutura de uma experiência fitness com progressão e temas visuais.", cardAction: "Detalhes do Awaken", decisions: "Decisões técnicas", contact: "Falar sobre um projeto", projectCount: "03 projetos / contextos diferentes",
    notes: { ready: "O conteúdo mantém uma hierarquia clara, com ação identificável.", loading: "A estrutura permanece estável enquanto o conteúdo carrega.", error: "Uma mensagem específica oferece uma ação para recuperar o conteúdo.", wide: "Na largura ampla, imagem e informação dividem o espaço.", compact: "Na largura compacta, o conteúdo se reorganiza sem esconder a ação." },
  },
  en: {
    title: "How an interface responds", label: "Interactive portfolio demonstration", intro: "Change this card's width and state. These decisions also appear in my work: organizing content, communicating wait times and providing error recovery.",
    width: "Width", wide: "Wide", compact: "Compact", state: "State", ready: "Content", loading: "Loading", error: "Error", retry: "Try again", errorTitle: "The project could not load", errorText: "Try again to recover the content.", loadingText: "Loading project", cardKind: "Personal project · with my brother", cardText: "Frontend and infrastructure for a fitness experience with progression and visual themes.", cardAction: "Awaken details", decisions: "Technical decisions", contact: "Discuss a project", projectCount: "03 projects / different contexts",
    notes: { ready: "Content keeps a clear hierarchy and an identifiable action.", loading: "The structure stays stable while content loads.", error: "A specific message provides an action to recover the content.", wide: "In the wide layout, image and information share the space.", compact: "In the compact layout, content reorganizes without hiding the action." },
  },
};
