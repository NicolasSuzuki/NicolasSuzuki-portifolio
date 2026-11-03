# Portfólio · Nicolas Suzuki

Portfólio profissional de Nicolas Suzuki, feito com Next.js, React, TypeScript e CSS com tokens. Conteúdo em português e inglês, responsividade, navegação por teclado e respeito a `prefers-reduced-motion`.

Repositório: [NicolasSuzuki/NicolasSuzuki-portifolio](https://github.com/NicolasSuzuki/NicolasSuzuki-portifolio).

## Executar

Requer Node.js 20.9 ou superior.

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

O build gera um site estático em `out/`. `npm start` serve esse build localmente. Não há banco, formulário, rastreadores ou credenciais no frontend.

## Estrutura

- `src/content/portfolio.ts`: dados, textos, idiomas e cases.
- `src/components/portfolio.tsx`: página, navegação, previews ilustrativos e dialog de detalhes.
- `src/app/globals.css`: identidade visual, tokens e breakpoints.
- `src/app/layout.tsx`: metadados, idioma inicial e configurações de indexação.
- `public/icon.svg`: ícone original do site.
- `scripts/serve.mjs`: prévia do build estático.

## Direção visual

Fundo grafite, contraste em verde claro, tipografia editorial, monograma construído em código e projetos com composições visuais próprias. DM Sans e Manrope são carregadas do Google Fonts, com fontes de sistema como fallback. Nenhuma fotografia é necessária para a primeira versão.

Os previews dos projetos são ilustrações, identificadas como tal. Não representam screenshots nem comprovam entregas. Os detalhes de cada case informam contexto, participação, escopo e estado atual.

A seleção distingue Skills Lab (freelance), uma plataforma educacional (experiência corporativa anonimizada) e Awaken (projeto pessoal com o irmão de Nicolas). Os cases corporativos não são associados aos empregadores da timeline.

A seção **IA no processo. Critério na entrega.** apresenta como uso IA em investigação, prototipação, desenvolvimento e revisão, com definição de contexto, critérios de aceite e verificação técnica das entregas.

## Publicação

O projeto foi preparado para exportação estática. A indexação está desativada em `src/app/layout.tsx` enquanto o conteúdo está em revisão; antes de publicar um site, definir o endereço definitivo e atualizar metadados e indexação.

O projeto pode ser hospedado em qualquer plataforma compatível com os arquivos de `out/`, mantendo os assets de `_next/`.

## Verificação

```sh
npm run typecheck
npm run build
```

As notas editoriais locais, os documentos pessoais e as configurações locais de hospedagem não fazem parte deste repositório.

## Fontes do conteúdo

Currículo e exportação do LinkedIn fornecidos pelo Nicolas, resumo consolidado do ChatGPT e registros das conversas dos projetos Skills Lab, uma plataforma educacional anonimizada e Awaken. Os documentos pessoais não são distribuídos no site.
