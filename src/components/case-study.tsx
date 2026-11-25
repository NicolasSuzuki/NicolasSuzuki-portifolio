import type { Metadata } from "next";
import { profile, type Locale } from "@/content/portfolio";
import { studies, studyPath, type StudySlug } from "@/content/case-studies";
import { engineering } from "@/content/case-engineering";
import CaseLanguage from "./case-language";
import CaseEngineering from "./case-engineering";
import AssistedFormDemo from "./assisted-form-demo";

export function caseMetadata(slug: StudySlug, locale: Locale): Metadata {
  const c = studies[locale][slug];
  return {
    title: `${c.name} — Nicolas Suzuki`, description: c.intro,
    alternates: { canonical: studyPath(slug, locale), languages: { "pt-BR": studyPath(slug, "pt"), en: studyPath(slug, "en") } },
    openGraph: { title: `${c.name} — Nicolas Suzuki`, description: c.intro, url: studyPath(slug, locale), locale: locale === "pt" ? "pt_BR" : "en_US" },
  };
}

export default function CaseStudy({ slug, locale }: { slug: StudySlug; locale: Locale }) {
  const c = studies[locale][slug];
  const pt = locale === "pt";
  const detail = engineering[locale][slug];
  const home = `/?lang=${locale}#projetos`;
  const back = pt ? "Voltar aos projetos" : "Back to projects";
  const stages = <ol className="case-stages">{c.stages.map(stage =>
    <li key={stage.title}><h3>{stage.title}</h3><p>{stage.text}</p></li>
  )}</ol>;

  return <>
    <CaseLanguage locale={locale}/>
    <a className="skip-link" href="#case-main">{pt ? "Pular para o conteúdo" : "Skip to content"}</a>
    <header className="case-header container">
      <a className="wordmark" href={`/?lang=${locale}`} aria-label="Nicolas Suzuki — home">nicolas suzuki<span>.</span></a>
      <a href={studyPath(slug, pt ? "en" : "pt")} lang={pt ? "en" : "pt-BR"} className="case-language">{pt ? "Read in English" : "Ler em português"}</a>
    </header>
    <main id="case-main" className="case-main container" lang={pt ? "pt-BR" : "en"}>
      <a href={home} className="case-back">← {back}</a>
      <section className="case-hero" aria-labelledby="case-title">
        <span className="eyebrow">{c.kind}</span><p className="case-name">{c.name}</p>
        <h1 id="case-title">{c.title}</h1><p className="case-intro">{c.intro}</p>
        <dl className="case-facts">
          <div><dt>{pt ? "Minha participação" : "My contribution"}</dt><dd>{c.role}</dd></div>
          <div><dt>{pt ? "Estágio do projeto" : "Project stage"}</dt><dd>{c.status}</dd></div>
        </dl>
        <ul className="case-stack" aria-label={pt ? "Tecnologias e temas" : "Technologies and topics"}>{c.stack.map(s=><li key={s}>{s}</li>)}</ul>
      </section>
      <nav className="case-index" aria-label={pt ? "Nesta página" : "On this page"}>
        {c.productImages && <a href="#product">{pt ? "Telas" : "Screens"}</a>}
        {detail && <a href="#engineering">{pt ? "Decisões" : "Decisions"}</a>}
        {slug === "assisted-form" && <a href="#demo">{pt ? "Demonstração" : "Demonstration"}</a>}
        <a href="#outcome">{pt ? "Resultados" : "Outcomes"}</a>
        <a href="#process">{pt ? "Contexto" : "Background"}</a>
        {c.evidence && <a href="#evidence">Wireframes</a>}
      </nav>
      {c.productImages && <section id="product" className="case-product-gallery" aria-labelledby="product-title">
        <h2 id="product-title">{pt ? "Telas do projeto" : "Project screens"}</h2>
        {c.productImages.map(e=><figure key={e.src}>
          <a className="product-image" href={e.src} target="_blank" rel="noopener noreferrer" aria-label={`${pt ? "Ampliar captura" : "Enlarge screenshot"}: ${e.title}`}>
            <img src={e.src} width={e.width} height={e.height} alt={e.alt} loading="lazy" decoding="async"/>
          </a>
          <figcaption><h3>{e.title}</h3><p>{e.text}</p><a href={e.src} target="_blank" rel="noopener noreferrer">{pt ? "Ampliar captura" : "Enlarge screenshot"}</a></figcaption>
        </figure>)}
      </section>}
      {detail && <CaseEngineering content={detail} locale={locale}/>}
      {slug === "assisted-form" && <AssistedFormDemo locale={locale}/>}
      <section id="outcome" className="case-section case-outcome" aria-labelledby="outcome-title">
        <h2 id="outcome-title">{pt ? "O que mudou" : "What changed"}</h2><p>{c.result}</p>
        {c.outcomes && <ul className="case-outcome-list">{c.outcomes.map(item=><li key={item.title}><h3>{item.title}</h3><p>{item.text}</p></li>)}</ul>}
      </section>
      {detail
        ? <details id="process" className="case-background"><summary>{pt ? "Contexto e evolução do projeto" : "Project background and evolution"}</summary>{stages}</details>
        : <section id="process" className="case-section" aria-labelledby="process-title"><h2 id="process-title">{pt ? "Como conduzi o trabalho" : "How I approached the work"}</h2>{stages}</section>}
      {c.evidence && <details id="evidence" className="case-wireframes">
        <summary>{pt ? "Wireframes que usei no projeto" : "Wireframes I used on the project"}</summary>
        <div className="case-gallery">{c.evidence.map(e=><figure key={e.src}>
          <div className="case-evidence-copy"><h3>{e.title}</h3><p>{e.text}</p></div>
          <a className="case-image-link" href={e.src} target="_blank" rel="noopener noreferrer" aria-label={`${pt ? "Ampliar imagem" : "Enlarge image"}: ${e.title}`}><img src={e.src} width={e.width} height={e.height} alt={e.alt} loading="lazy" decoding="async"/></a>
          <figcaption><a href={e.src} target="_blank" rel="noopener noreferrer">{pt ? "Ampliar imagem" : "Enlarge image"}</a>{e.source && <a href={e.source} target="_blank" rel="noopener noreferrer">{pt ? "Consultar no Figma" : "View in Figma"}</a>}</figcaption>
        </figure>)}</div>
      </details>}
      <section id="limitations" className="case-section case-limits" aria-labelledby="limits-title"><h2 id="limits-title">{pt ? "Estágio atual" : "Current stage"}</h2><p>{c.limits}</p></section>
      {c.links && <section className="case-section"><h2>{pt ? "Código e histórico" : "Code and history"}</h2><ul className="case-sources">{c.links.map(link=><li key={link.href}><a href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a></li>)}</ul></section>}
      <div className="case-actions"><a href={`mailto:${profile.email}?subject=${encodeURIComponent(c.name+" — Portfolio")}`} className="button-primary">{pt ? "Conversar sobre este projeto" : "Discuss this project"}</a><a className="case-back" href={home}>← {back}</a></div>
    </main>
    <footer className="site-footer container"><span>Nicolas Suzuki</span><span>© {new Date().getFullYear()}</span></footer>
  </>;
}
