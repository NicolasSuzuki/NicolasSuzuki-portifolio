# Origem das evidências dos cases

## Skills Lab

Os três recortes publicados foram selecionados dos arquivos fornecidos pelo Nicolas e incluídos após sua autorização para implementar a evolução visual do case.

| Arquivo | Origem | Uso |
| --- | --- | --- |
| `public/cases/skills-lab/as-is.png` | [Frame 5:3 do arquivo inicial](https://www.figma.com/design/ETxeJ5InqQAXxoVXFCCrLV?node-id=5-3) | Mapeamento em baixa fidelidade do frontend recebido |
| `public/cases/skills-lab/journey.png` | [Frame 10:2 da versão posterior](https://www.figma.com/design/wHIxu3tb3m60tluuLrCozb?node-id=10-2) | Proposta de jornada do usuário naquele estágio |
| `public/cases/skills-lab/onboarding.png` | [Frame 47:4 da versão posterior](https://www.figma.com/design/wHIxu3tb3m60tluuLrCozb?node-id=47-4) | Detalhamento do primeiro acesso |

São exportações reais do Figma, sem gerar ou reconstruir telas. A página explica que o feedback externo, obrigatório no mapa histórico, tornou-se opcional em uma etapa posterior. Os wireframes não comprovam implementação. O resumo das verificações funcionais usa os relatórios de QA fornecidos e consultados localmente; esses relatórios, dados de contas e endereços internos não integram o repositório.

## Awaken

Foi consultado o histórico “Criar especificação UI/UX fitness”, em especial os pedidos do Nicolas para comparar documento, sprints e implementação, separar pendências e atribuir frontend e infraestrutura. A narrativa também foi cruzada com documentação local de arquitetura, Design System, estratégia offline e checklist de beta. Ela distingue decisões, verificações locais e integração pendente. Não publica o histórico bruto, tarefas privadas ou documentação interna.

O diagrama de separação entre domínio e apresentação é uma representação técnica original do portfólio, não uma tela da aplicação. A colaboração com o irmão e a divisão de responsabilidades permanecem explícitas.

## Portfólio com IA

O case descreve decisões registradas nesta conversa e aponta para os commits públicos `69cbe96` e `3033eeb`. Eles permitem comparar o redesign editorial e a recuperação da identidade anterior. Não são atribuídas métricas de produtividade ou resultados comerciais ao uso de IA.

## Fontes

Os arquivos locais DM Sans e Manrope foram obtidos do Google Fonts. As licenças SIL Open Font License estão junto dos arquivos em `public/fonts/`. As fontes foram preservadas para manter a identidade visual e eliminar a dependência de CSS e fontes em servidores externos durante a navegação.

## Revisão de engenharia - 25/11/2026

- Skills Lab: conferidos DevelopmentPlanPage.tsx, contrato da API, DTOs, controller, serviço, repositório e testes do PDI. Executados 7 testes unitários, todos aprovados. Os dois cenários Playwright de rascunho foram revisados, sem execução nesta revisão; usam API simulada e não comprovam isolamento em banco real.
- Awaken: conferidos provider, normalização, modos de apresentação, dicionários e testes de preferências. Executados 16 testes em 4 arquivos, todos aprovados. A auditoria de 23/11/2026 registra integração local real e bloqueios antes do beta, sem ter sido repetida nesta revisão.
- O código atual de rascunhos do Awaken usa IndexedDB e outbox com sincronização na reconexão, divergindo da documentação offline anterior. O case acompanha o comportamento observado e não apresenta os bloqueios de dados locais, recuperação e teclado como corrigidos.
- Formulário assistido: relato e implementação confirmados diretamente por Nicolas em 25/11/2026. O cliente não é identificado nem associado à plataforma educacional anterior. A composição com título do evento e frase predefinida foi sugerida como caminho inicial; backend, personalização e métricas são propostas posteriores. Código corporativo e medições não foram auditados.
- A demonstração do formulário foi criada no próprio portfólio com dados fictícios; não copia telas ou código do cliente e não executa IA.
- As descrições públicas resumem decisões e verificações. Código privado, relatórios brutos, contas e endereços internos não são publicados.

## Capturas reais e evolução editorial - 25/11/2026

| Arquivo publicado | Origem local | Contexto |
| --- | --- | --- |
| `public/cases/skills-lab/application-pdi.png` | `artifacts/skills-lab-screenshots-2026-10-08/desktop/56-pdi.png` do Skills Lab | Captura real de 08/10/2026 com conteúdo de teste e plano concluído; anterior à evolução de rascunhos descrita no case |
| `public/cases/awaken/application-checkin.png` | `.dev-runtime/audit-checkin.png` do Awaken | Captura real da auditoria local de 23/11/2026, conta sintética Auditoria |

As duas imagens foram inspecionadas e copiadas sem reconstrução ou geração por IA. O usuário autorizou o uso de capturas dos projetos para estas melhorias. As legendas preservam o idioma original da interface e traduzem o contexto na versão inglesa.

A história técnica do PDI foi cruzada com as versões `66783fc` e `6ce0757` do frontend do Skills Lab. A versão anterior mantinha título e ação no estado da página até confirmar o item. A evolução acrescenta contrato de rascunho, retomada, salvamento após 650 ms e coordenação com confirmação e descarte. O serviço e seus testes também foram revisados. Os identificadores servem como registro da fonte privada consultada; código e histórico bruto não são publicados.

Os resultados públicos descrevem comportamentos e escopo implementados. Não foram acrescentadas estimativas de produtividade, crescimento, satisfação ou redução de erros. A narrativa visível prioriza a participação de Nicolas; detalhes de testes e da revisão ficam em seções expansíveis.
