# Revisão do portfólio para recrutamento

Avaliação editorial em 03/11/2026. Trata-se de uma simulação de leitura por recrutadores, sem representar critérios internos de empresas ou prometer aprovação em processos seletivos.

## Perspectiva: instituições financeiras brasileiras

| Prioridade | Oportunidade | Alteração aplicada |
| --- | --- | --- |
| Alta | Identificar rapidamente especialidade e nível | Cargo pleno, React/TypeScript no título e trajetória desde 2020 na abertura |
| Alta | Encontrar experiência corporativa sem percorrer toda a página | Atalho “Ver experiência” na abertura, cargos e períodos mais legíveis |
| Alta | Distinguir participação individual de escopo do produto | Minha atuação e estágio nos cards; contribuição, decisões, validação e limites nos detalhes |
| Alta | Avaliar maturidade de engenharia além de palavras-chave | Exemplos documentados de integração, autenticação e sessão, componentes reutilizáveis e tratamento de falhas |
| Alta | Consultar um currículo consistente com o site | PDF em português, em uma coluna, com texto selecionável e links |
| Média | Compreender o uso de IA e a responsabilidade pela entrega | Processo com contexto, revisão, verificação e cuidado com informações compartilhadas; acesso ao código público do portfólio |

Não foi acrescentada experiência em finanças, sistemas transacionais, regulação, segurança ou alta escala sem evidência.

## Perspectiva: tech recruiter internacional

| Prioridade | Oportunidade | Alteração aplicada |
| --- | --- | --- |
| Alta | Compartilhar o perfil diretamente em inglês | `?lang=en`, precedência do idioma da URL e persistência da escolha |
| Alta | Entender especialidade e comunicação | Frontend Engineer, stack central, inglês B2 e português nativo visíveis |
| Alta | Entender localização e fuso | Brasil e UTC-3 na abertura e no currículo, sem pressupor elegibilidade para contratação em outros países |
| Alta | Avaliar responsabilidade individual e decisões | Cases com papel, escolhas técnicas e validações; distinção entre freelance, experiência corporativa e projeto pessoal em colaboração |
| Alta | Consultar código e histórico profissional | Repositório público deste portfólio destacado e currículo em inglês para download |
| Média | Usar o portfólio em diferentes dispositivos e por teclado | Textos essenciais maiores, ações legíveis, navegação direta dos cases e testes de responsividade |

## Base visual preservada

Monograma, fundo grafite, verde, composição da abertura, cards e identidade tipográfica da versão anterior. Os cards de Skills Lab e Awaken passaram a usar capturas reais de teste. O formulário tem uma demonstração independente identificada. A demonstração de interface do redesign descartado não foi reintroduzida.

## Informações que ainda dependem de evidência

- Resultados mensuráveis: antes/depois, impacto para usuários e métricas de qualidade ou operação.
- Exemplos de testes automatizados profissionais e ferramentas efetivamente utilizadas em cada experiência.
- Meses exatos de experiências com divergência entre documentos; os anos já publicados foram mantidos.

- Preferência de contrato, disponibilidade, mobilidade e autorização de trabalho por país.
- Código ou telas autorizadas dos projetos, quando puderem ser publicados.

Essas lacunas não foram preenchidas com estimativas ou afirmações de domínio.

## Referências públicas

- [Santander — Senior Web Engineer](https://santander.wd3.myworkdayjobs.com/pt-BR/SantanderCareers/job/Senior-Web-Engineer_Req1586939): exemplo de contratação que valoriza React/TypeScript, arquitetura, acessibilidade, CI/CD, revisão e comunicação técnica.
- [Spacelift — Frontend Engineer](https://careers.spacelift.io/jobs/7097984-frontend-engineer-react-remote-europe): exemplo que enfatiza autonomia, colaboração com produto/design/backend, inglês e qualidade de interface. A vaga é restrita à Europa; é referência de competências, não indicação de elegibilidade.

As recomendações são inferências editoriais a partir do conteúdo disponível e desses exemplos, não uma generalização de todas as vagas.

## Revisão dos currículos - 25/11/2026

- Nicolas confirmou diretamente o Bacharelado em Ciências e Tecnologia na UNIFESP, concluído no final de 2025. Formação atualizada no site e nos dois PDFs.
- Currículos em português e inglês revisados com resumo profissional, competências por área, contribuições por experiência e links para os cases Skills Lab e Awaken.
- Cada PDF contém uma página, texto selecionável e seis links. As duas páginas foram renderizadas e inspecionadas visualmente.
- Checagem TypeScript passou. O build compilou e gerou as páginas estáticas, mas encerrou com SecurityFatalError por alerta de segurança da versão instalada do Next.js, inclusive na repetição.
- PDFs em public/downloads e dist/downloads conferidos por SHA-256. Alterações locais, sem commit, push ou deploy nesta revisão.
## Cinco melhorias - 25/11/2026

Textos em primeira pessoa, capturas reais, história técnica do rascunho do PDI e resultados de comportamento tornaram os cases mais específicos. A análise técnica e os testes ficam disponíveis em detalhes expansíveis. O exemplo corporativo preserva o relato confirmado por Nicolas e distingue a implementação editável da evolução proposta para backend.

O bloqueio de build foi resolvido atualizando Next.js para 16.4.6. Typecheck e build passaram, com zero vulnerabilidades reportadas por npm audit. Os currículos mantêm uma página por idioma, texto preto e formação concluída em 2025.
