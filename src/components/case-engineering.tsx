import type { Locale } from "@/content/portfolio";
import type { EngineeringCase } from "@/content/case-engineering";

export default function CaseEngineering({ content, locale }: { content: EngineeringCase; locale: Locale }) {
  const pt = locale === "pt";
  const decisions = <div className="engineering-decisions">
    {([["problem", pt ? "O desafio" : "The challenge"], ["decision", pt ? "O que fiz" : "What I did"], ["tradeoff", pt ? "A escolha envolvida" : "The tradeoff"]] as const).map(([key, label]) =>
      <article key={key}><h3>{label}</h3><p>{content[key]}</p></article>
    )}
  </div>;

  return <section id="engineering" className="case-section case-engineering" aria-labelledby="engineering-title">
    <h2 id="engineering-title">{content.title}</h2>
    <p className="engineering-intro">{content.intro}</p>
    {content.story ? <div className="engineering-story" aria-label={content.story.title}>
      <h3>{content.story.title}</h3>
      <div>{([["before", pt ? "Antes" : "Before"], ["change", pt ? "Minha mudança" : "My change"], ["after", pt ? "Depois" : "After"]] as const).map(([key, label]) =>
        <article key={key}><h4>{label}</h4><p>{content.story![key]}</p></article>
      )}</div>
    </div> : decisions}
    <details className="engineering-details">
      <summary>{pt ? "Ver implementação e testes" : "Explore implementation and tests"}</summary>
      {content.story && decisions}
      <h3 className="engineering-subtitle">{content.flowTitle}</h3>
      <ol className="engineering-flow">{content.flow.map(step =>
        <li key={step.title}><h4>{step.title}</h4><p>{step.text}</p></li>
      )}</ol>
      <h3 className="engineering-subtitle">{pt ? "Verificações" : "Checks"}</h3>
      <ul className="engineering-checks">{content.checks.map(check =>
        <li key={check.title}><span className="engineering-check-kind">{check.kind}</span><h4>{check.title}</h4><p>{check.text}</p></li>
      )}</ul>
      <p className="engineering-review">{content.review}</p>
    </details>
  </section>;
}
