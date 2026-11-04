# Portfólio · Nicolas Suzuki

Portfólio profissional de Nicolas Suzuki, feito com Next.js, React, TypeScript e CSS com tokens. Conteúdo em português e inglês, responsividade, navegação por teclado e respeito a `prefers-reduced-motion`.

Repositório: [NicolasSuzuki/NicolasSuzuki-portifolio](https://github.com/NicolasSuzuki/NicolasSuzuki-portifolio).

## Executar

Requer Node.js 22.x, a versão principal usada para desenvolvimento e publicação.

```sh
npm install
npm run dev
```

Abra http://127.0.0.1:3030.

```sh
npm run typecheck
npm run build
npm start
```

O build gera um site estático em `dist/`. `npm start` serve esse build localmente. Não há banco, formulário, rastreadores ou credenciais no frontend.

## Estrutura

- `src/content/portfolio.ts`: dados, textos, idiomas e cases.
- `src/components/portfolio.tsx`: composição da página e navegação.
- `src/components/project-visual.tsx`: capturas e diagramas dos projetos.
- `src/components/project-dialog.tsx`: detalhes dos cases em dialog nativo.
- `src/components/interface-demo.tsx`: demonstração interativa com estados locais.
- `src/app/globals.css`: identidade visual, tokens e breakpoints.
- `src/app/layout.tsx`: metadados, idioma inicial e configurações de indexação.
- `public/icon.svg`: ícone original do site.
- `scripts/serve.mjs`: prévia do build estático.
- `render.yaml`: configuração de publicação como Static Site no Render.

## Direção visual

Fundo grafite, texto claro e verde contido em ações e detalhes. A composição editorial dá destaque ao nome e aos projetos, com Manrope carregada do Google Fonts e fontes de sistema como fallback.

Awaken apresenta capturas reais da tela de acesso em desktop e celular, obtidas no ambiente local de demonstração com campos vazios. Elas não mostram fluxos autenticados nem um produto finalizado. Skills Lab e a plataforma educacional usam diagramas identificados como representações do escopo. Os detalhes de cada case informam contexto, participação, decisões técnicas, escopo e estado atual.

A seleção distingue Skills Lab (freelance), uma plataforma educacional (experiência corporativa anonimizada) e Awaken (projeto pessoal com o irmão de Nicolas). Os cases corporativos não são associados aos empregadores da timeline.

A seção **Como trabalho com IA** apresenta definição de contexto, avaliação de alternativas e verificação técnica. A demonstração **Como uma interface reage** permite combinar duas larguras e três estados de um cartão do próprio portfólio. O layout se reorganiza conforme o espaço disponível; carregamento mantém a estrutura e a recuperação de erro retorna o foco para a ação do cartão. Essa demonstração não representa uma entrega do aplicativo Awaken.

## Publicação

O projeto foi preparado para exportação estática. A indexação está desativada em `src/app/layout.tsx` enquanto o conteúdo está em revisão; antes de publicar um site, definir o endereço definitivo e atualizar metadados e indexação.

O projeto pode ser hospedado em qualquer plataforma compatível com os arquivos de `dist/`, mantendo os assets de `_next/`.

### Publicar no Render

[Abrir o serviço no Render](https://dashboard.render.com/static/srv-dbkoo23ncjis73euedc0)

O serviço existente usa a branch `main` e publica a pasta `dist`. O `render.yaml` descreve a mesma configuração para manter a hospedagem reproduzível. A exportação é configurada nativamente no Next.js com `output: "export"` e `distDir: "dist"`.

Se preferir criar pelo painel, escolha **New → Static Site** e informe:

| Campo | Valor |
| --- | --- |
| Repositório | `NicolasSuzuki/NicolasSuzuki-portifolio` |
| Branch | `main` |
| Root Directory | Em branco: o projeto está na raiz do repositório |
| Build Command | `npm ci --include=dev && npm run build` |
| Publish Directory | `dist` |
| Variável de ambiente opcional | `NEXT_TELEMETRY_DISABLED=1` |

O Node é definido pelo campo `engines` do `package.json`. O Static Site publica diretamente o conteúdo de `dist/`, sem executar um comando de inicialização.

Deploys automáticos estão habilitados: cada push para `main` dispara uma nova publicação. Para repetir um deploy sem alterar o código, use **Manual Deploy → Deploy latest commit** no painel.

Referências: [Next.js no Render](https://render.com/docs/deploy-nextjs-app), [Blueprints](https://render.com/docs/blueprint-spec) e [versão do Node](https://render.com/docs/node-version).

## Verificação

```sh
npm run typecheck
npm run build
```

Conferir a prévia em 390, 768 e 1280 px, as seis combinações da demonstração, navegação por teclado, fechamento dos dialogs com retorno de foco, os dois idiomas e contato. As transições respeitam `prefers-reduced-motion`.

As notas editoriais locais, os documentos pessoais e as configurações locais de hospedagem não fazem parte deste repositório.

## Fontes do conteúdo

Currículo e exportação do LinkedIn fornecidos pelo Nicolas, resumo consolidado do ChatGPT e registros das conversas dos projetos Skills Lab, uma plataforma educacional anonimizada e Awaken. Os documentos pessoais não são distribuídos no site.
