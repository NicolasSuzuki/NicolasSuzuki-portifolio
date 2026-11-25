import type { Locale } from "./portfolio";
import type { StudySlug } from "./case-studies";

export type EngineeringCase = {
  title: string; intro: string; problem: string; decision: string; tradeoff: string;
  story?: { title: string; before: string; change: string; after: string };
  flowTitle: string; flow: { title: string; text: string }[];
  checks: { title: string; kind: string; text: string }[]; review: string;
};

export const engineering: Record<Locale, Partial<Record<StudySlug, EngineeringCase>>> = {
  "pt": {
    "skills-lab": {
      "title": "Sair do formulário sem perder o que já escreveu",
      "intro": "No Skills Lab, trabalhei na evolução do PDI, o plano de desenvolvimento do aluno. Um dos desafios foi permitir que a pessoa começasse um objetivo, saísse da tela e continuasse depois.",
      "problem": "Na versão anterior, título e plano de ação ficavam no estado da página até o aluno salvar um foco completo. Recarregar a tela descartava essa edição.",
      "decision": "Separei a edição parcial do item confirmado. Acrescentei o contrato de rascunho na API, a retomada dos campos e os estados de salvamento. Para organizar o salvamento automático junto das ações manuais, encadeei as gravações e fiz Salvar e Descartar aguardarem a operação em andamento.",
      "tradeoff": "O salvamento depende da rede. A tela precisa avisar quando a API ainda não confirmou a gravação. O fluxo não trata conflitos de edição entre várias abas.",
      "story": {
        "title": "Da edição temporária ao rascunho na conta",
        "before": "O formulário só persistia um foco completo. Ao recarregar, o texto ainda em edição desaparecia.",
        "change": "Passei a salvar o rascunho separadamente, recuperar os campos ao abrir a tela e coordenar o salvamento automático com as ações de confirmar e descartar.",
        "after": "O aluno pode continuar uma edição parcial depois de recarregar e decidir quando transformar o rascunho em um foco do PDI."
      },
      "flowTitle": "Como organizei esse fluxo",
      "flow": [
        {
          "title": "Editar",
          "text": "O aluno começa pelo título ou pelo plano de ação, mesmo sem ter um foco completo."
        },
        {
          "title": "Salvar o rascunho",
          "text": "Após 650 ms sem digitação, a gravação entra na sequência de requisições e a tela informa o resultado."
        },
        {
          "title": "Retomar",
          "text": "Ao abrir o PDI, recupero da API os campos do rascunho da jornada ativa."
        },
        {
          "title": "Confirmar",
          "text": "Salvar foco aguarda a gravação pendente. A API também verifica as regras para finalizar o plano."
        }
      ],
      "checks": [
        {
          "title": "Conteúdo parcial e acesso",
          "kind": "Testes unitários",
          "text": "Os testes cobrem rascunho de um caractere, referência a item de outro participante e bloqueio após a finalização."
        },
        {
          "title": "Regras de conclusão",
          "kind": "Testes unitários",
          "text": "A conclusão é recusada sem o desafio final ou com uma edição ainda pendente."
        },
        {
          "title": "Retomada e descarte",
          "kind": "Cenários de navegador",
          "text": "Os testes existentes usam API simulada para recarregar, recuperar campos, descartar e trocar de conta."
        }
      ],
      "review": "Na revisão de 25/11/2026, os 7 testes unitários do serviço passaram. Os cenários de navegador foram lidos, mas não executados novamente. A comparação entre versões confirma a evolução do estado local para o contrato de rascunho."
    },
    "awaken": {
      "title": "Mudar a aparência sem reescrever a experiência",
      "intro": "No Awaken, desenvolvo o frontend e cuido da infraestrutura em parceria com meu irmão, que trabalha no backend. Quero que a pessoa escolha a identidade do aplicativo sem precisar reaprender a rotina de treino.",
      "problem": "Trocar cores não era suficiente para diferenciar os universos. Ao mesmo tempo, misturar estilo, textos e regras de progressão tornaria os componentes difíceis de manter.",
      "decision": "Separei o tema visual do modo de linguagem. Uso tokens semânticos para a aparência, dicionários tipados para os textos e normalização para preservar preferências antigas. A progressão continua sendo responsabilidade da API.",
      "tradeoff": "Cada universo exige coerência entre tokens e vocabulário. A preferência local funciona se a API de perfil falhar, mas a sincronização entre dispositivos ainda precisa ser tratada separadamente.",
      "flowTitle": "O caminho de uma preferência",
      "flow": [
        {
          "title": "Escolher",
          "text": "O usuário define o tema e, quando permitido, a linguagem Fitness ou RPG."
        },
        {
          "title": "Normalizar",
          "text": "Converto preferências antigas e aplico as combinações disponíveis."
        },
        {
          "title": "Aplicar",
          "text": "Tokens e dicionários adaptam os componentes compartilhados."
        },
        {
          "title": "Manter as regras",
          "text": "Treinos e progressão seguem os contratos da API, independentemente do tema."
        }
      ],
      "checks": [
        {
          "title": "Preferências e linguagem",
          "kind": "Testes unitários",
          "text": "Cobrem valores legados, combinações permitidas e os textos dos universos."
        },
        {
          "title": "Aplicar ou cancelar",
          "kind": "Testes de interface",
          "text": "Cobrem abertura, confirmação, cancelamento e fechamento do modal por Escape."
        },
        {
          "title": "Jornada integrada",
          "kind": "Verificação local",
          "text": "A auditoria de novembro percorreu cadastro, plano, treino e publicação com API e PostgreSQL reais."
        }
      ],
      "review": "Na revisão de 25/11/2026, passaram 16 testes de preferências e apresentação. A auditoria integrada de 23/11 foi consultada, sem nova execução. Recuperação de falhas, dados locais e teclado ainda têm ajustes antes do beta."
    },
    "assisted-form": {
      "title": "Uma sugestão inicial que o usuário pode mudar",
      "intro": "O cliente queria que um evento preenchesse o formulário inteiro. Sugeri manter os valores editáveis e avisar que eram sugestões. Implementei esse comportamento.",
      "problem": "O preenchimento automático oferecia um começo rápido, mas deixava pouco espaço para adaptar o conteúdo à situação do usuário.",
      "decision": "Mantive o preenchimento inicial e acrescentei uma indicação de que o texto poderia ser revisado. Também sugeri montar o prompt a partir do título do evento e de uma frase predefinida.",
      "tradeoff": "Propus começar com a composição no frontend. Para personalizar mais, comparar alternativas e acompanhar métricas, a evolução seria levar essa parte para o backend.",
      "flowTitle": "A decisão na prática",
      "flow": [
        {
          "title": "Partir do evento",
          "text": "Usar o título como contexto inicial."
        },
        {
          "title": "Sugerir um texto",
          "text": "Combinar esse contexto com uma frase predefinida."
        },
        {
          "title": "Permitir edição",
          "text": "Explicar a sugestão e deixar o usuário ajustar o conteúdo."
        },
        {
          "title": "Evoluir depois",
          "text": "Levar personalização e métricas para uma próxima etapa no backend."
        }
      ],
      "checks": [
        {
          "title": "Minha contribuição",
          "kind": "Experiência corporativa",
          "text": "Propus e implementei o preenchimento editável e o aviso. A evolução para backend foi uma proposta posterior."
        }
      ],
      "review": "Preservo o código e a identidade do cliente. A demonstração abaixo foi criada para este portfólio com dados fictícios; ela mostra a interação sem executar um modelo de IA."
    }
  },
  "en": {
    "skills-lab": {
      "title": "Leave the form without losing your work",
      "intro": "On Skills Lab, I worked on the learner's development plan. One challenge was letting someone start a goal, leave the screen and continue later.",
      "problem": "In the earlier version, the title and action plan stayed in page state until the learner saved a complete item. Reloading discarded that unfinished edit.",
      "decision": "I separated partial edits from confirmed items. I added the draft API contract, field restoration and save states. To coordinate autosave with manual actions, I chained writes and made Save and Discard wait for the pending operation.",
      "tradeoff": "Saving depends on connectivity. The interface must say when the API has not yet confirmed a write. This flow does not resolve editing conflicts across multiple tabs.",
      "story": {
        "title": "From temporary edits to an account draft",
        "before": "The form only persisted a complete item. Reloading lost the text still being edited.",
        "change": "I added a separate draft, restored fields when opening the page and coordinated autosave with confirmation and discard actions.",
        "after": "A learner can resume a partial edit after reloading and choose when to turn it into a development-plan item."
      },
      "flowTitle": "How I organized the flow",
      "flow": [
        {
          "title": "Edit",
          "text": "The learner starts with a title or action plan, even before the item is complete."
        },
        {
          "title": "Save the draft",
          "text": "After a 650 ms typing pause, the write joins the request sequence and the interface reports its result."
        },
        {
          "title": "Resume",
          "text": "Opening the plan retrieves the active journey's draft fields from the API."
        },
        {
          "title": "Confirm",
          "text": "Saving an item waits for the pending write. The API also checks plan-finalization rules."
        }
      ],
      "checks": [
        {
          "title": "Partial content and access",
          "kind": "Unit tests",
          "text": "Cover a one-character draft, another learner's item and updates after finalization."
        },
        {
          "title": "Completion rules",
          "kind": "Unit tests",
          "text": "Finalization is rejected before the final challenge or while an edit remains unfinished."
        },
        {
          "title": "Resume and discard",
          "kind": "Browser scenarios",
          "text": "Existing tests use a mocked API to cover reloading, field restoration, discarding and switching accounts."
        }
      ],
      "review": "All 7 service unit tests passed in the 25 November 2026 review. Browser scenarios were inspected but not rerun. The version comparison confirms the move from page state to a draft API contract."
    },
    "awaken": {
      "title": "Change the appearance without rewriting the experience",
      "intro": "I develop Awaken's frontend and handle infrastructure with my brother, who works on the backend. I want people to choose the app's identity without relearning their workout routine.",
      "problem": "Changing colors was not enough to distinguish the universes. Mixing styles, copy and progression rules would also make shared components harder to maintain.",
      "decision": "I separated visual theme from language mode. Semantic tokens drive appearance, typed dictionaries provide copy, and normalization preserves older preferences. Progression remains the API's responsibility.",
      "tradeoff": "Each universe needs consistent tokens and vocabulary. The local preference works if the profile API fails, but cross-device synchronization still needs separate handling.",
      "flowTitle": "How a preference reaches the interface",
      "flow": [
        {
          "title": "Choose",
          "text": "The user selects a theme and, where supported, Fitness or RPG language."
        },
        {
          "title": "Normalize",
          "text": "I convert older preferences and apply supported combinations."
        },
        {
          "title": "Apply",
          "text": "Tokens and dictionaries adapt shared components."
        },
        {
          "title": "Keep the rules",
          "text": "Workouts and progression follow API contracts regardless of theme."
        }
      ],
      "checks": [
        {
          "title": "Preferences and language",
          "kind": "Unit tests",
          "text": "Cover legacy values, supported combinations and universe copy."
        },
        {
          "title": "Apply or cancel",
          "kind": "Interface tests",
          "text": "Cover opening, confirmation, cancellation and closing the modal with Escape."
        },
        {
          "title": "Integrated journey",
          "kind": "Local verification",
          "text": "November's audit exercised registration, plans, workouts and publishing with a real API and PostgreSQL."
        }
      ],
      "review": "All 16 preference and presentation tests passed on 25 November 2026. The 23 November integrated audit was consulted, not rerun. Failure recovery, local data and keyboard behavior still need work before beta."
    },
    "assisted-form": {
      "title": "A starting suggestion the user can change",
      "intro": "The client wanted an event to populate the entire form. I suggested keeping the values editable and explaining that they were suggestions. I implemented that behavior.",
      "problem": "Automatic input offered a quick start but left little room to adapt the content to the user's situation.",
      "decision": "I kept the initial values and added a notice that the text could be reviewed. I also proposed composing the prompt from the event title and a predefined phrase.",
      "tradeoff": "I proposed frontend composition as the initial approach. Greater personalization, comparison of alternatives and metrics would be a later backend evolution.",
      "flowTitle": "The decision in practice",
      "flow": [
        {
          "title": "Start from the event",
          "text": "Use the title as the initial context."
        },
        {
          "title": "Suggest text",
          "text": "Combine that context with a predefined phrase."
        },
        {
          "title": "Allow editing",
          "text": "Explain the suggestion and let the user adjust the content."
        },
        {
          "title": "Evolve later",
          "text": "Move personalization and metrics into a later backend phase."
        }
      ],
      "checks": [
        {
          "title": "My contribution",
          "kind": "Corporate experience",
          "text": "I proposed and implemented editable initial values and the notice. Backend evolution was a later proposal."
        }
      ],
      "review": "I keep the client's code and identity private. The demonstration below was built for this portfolio with fictional data; it shows the interaction without executing an AI model."
    }
  }
};
