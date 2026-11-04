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
- `src/components/portfolio.tsx`: página, navegação, previews ilustrativos e dialog de detalhes.
- `src/components/case-study.tsx` e `src/content/case-studies.ts`: páginas completas, etapas, evidências e traduções dos cases.
- `src/app/cases/[slug]/` e `src/app/en/cases/[slug]/`: exportação estática dos cases em português e inglês.
- `public/cases/skills-lab/`: recortes reais dos wireframes do Figma, com contexto e origem no case.
- `public/fonts/`: fontes locais e licenças SIL Open Font License.
- `public/downloads/`: currículos em português e inglês, com texto selecionável e links.
- `scripts/generate-resumes.mjs` e `scripts/generate_resumes.py`: geração dos currículos a partir do conteúdo público do site.
- `src/app/globals.css`: identidade visual, tokens e breakpoints.
- `src/app/layout.tsx`: metadados, idioma inicial e configurações de indexação.
- `public/icon.svg`: ícone original do site.
- `scripts/serve.mjs`: prévia do build estático.
- `render.yaml`: configuração de publicação como Static Site no Render.

## Direção visual

Fundo grafite, contraste em verde claro, tipografia editorial, monograma construído em código e projetos com composições visuais próprias. DM Sans e Manrope são servidas localmente, com preload, fontes de sistema como fallback e licenças em `public/fonts/`.

Os previews dos projetos são ilustrações, identificadas como tal. Não representam screenshots nem comprovam entregas. Os detalhes de cada case informam contexto, participação, escopo e estado atual.

Skills Lab e Awaken têm modais resumidos e páginas completas. Skills Lab apresenta cinco etapas e três recortes de wireframes; as legendas distinguem propostas históricas das regras posteriores. Awaken apresenta decisões de frontend, temas e infraestrutura com limites de integração. O case deste portfólio mostra uso de IA, revisão de direção e commits públicos. Todos possuem versões em português e inglês, links de retorno e navegação por seções.

As imagens dos wireframes preservam o idioma original. A versão inglesa contém descrição e contexto traduzidos. Os arquivos internos e o histórico bruto dos projetos não são distribuídos.

A seleção distingue Skills Lab (freelance), uma plataforma educacional (experiência corporativa anonimizada) e Awaken (projeto pessoal com o irmão de Nicolas). Os cases corporativos não são associados aos empregadores da timeline.

A seção **IA no processo. Critério na entrega.** apresenta como uso IA em investigação, prototipação, desenvolvimento e revisão, com definição de contexto, critérios de aceite e verificação técnica das entregas.

A revisão para recrutamento preserva essa base visual e destaca especialidade, contribuição individual, estágio dos projetos, decisões e validações. O idioma pode ser compartilhado por `?lang=pt` ou `?lang=en`; a URL tem precedência sobre a preferência salva. Currículo e atalhos para experiência e código público ficam na abertura.

Os currículos usam os mesmos textos do site, com experiência selecionada e os anos já publicados. Não afirmam conclusão universitária, métricas de impacto, disponibilidade ou autorização de trabalho por país. Para regenerar após revisar o conteúdo, instale `reportlab` e `pypdf` em um ambiente Python e execute `npm run resumes`. A variável opcional `PORTFOLIO_PYTHON` aponta para o executável desejado. Os PDFs finais são gerados em `output/pdf/` e copiados para `public/downloads/`; o Render usa os arquivos versionados e não precisa executar Python.

A avaliação editorial e as informações ainda pendentes estão em [RECRUITING_REVIEW.md](RECRUITING_REVIEW.md).

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

As notas editoriais locais, os documentos pessoais e as configurações locais de hospedagem não fazem parte deste repositório.

## Fontes do conteúdo

Currículo e exportação do LinkedIn fornecidos pelo Nicolas, resumo consolidado do ChatGPT e registros das conversas dos projetos Skills Lab, uma plataforma educacional anonimizada e Awaken. Os documentos pessoais não são distribuídos no site.
