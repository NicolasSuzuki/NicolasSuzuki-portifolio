import type { Metadata } from "next";
import { profile, type Locale } from "@/content/portfolio";
import { studies, studyPath, type StudySlug } from "@/content/case-studies";
import CaseLanguage from "./case-language";

export function caseMetadata(slug: StudySlug, locale: Locale): Metadata {
  const c = studies[locale][slug];
  return { title: `${c.name} — Nicolas Suzuki`, description: c.intro,
    alternates: { canonical: studyPath(slug, locale), languages: { "pt-BR": studyPath(slug, "pt"), en: studyPath(slug, "en") } },
    openGraph: { title: `${c.name} — Nicolas Suzuki`, description: c.intro, url: studyPath(slug, locale), locale: locale === "pt" ? "pt_BR" : "en_US" },
  };
}

export default function CaseStudy({ slug, locale }: { slug: StudySlug; locale: Locale }) {
  const c = studies[locale][slug];
  const pt = locale === "pt";
  const home = `/?lang=${locale}#projetos`;
  const copy = pt ? { skip: "Pular para o conteúdo", back: "Voltar aos projetos", role: "Minha participação", status: "Estágio documentado", process: "O processo", evidence: "Wireframes e decisões", enlarge: "Abrir imagem ampliada", figma: "Consultar frame no Figma", result: "O que o trabalho demonstra", limits: "Estágio e limites", links: "Evidências públicas", contact: "Conversar sobre este projeto", flow: "Separação entre domínio e apresentação" } : { skip: "Skip to content", back: "Back to projects", role: "My contribution", status: "Documented stage", process: "The process", evidence: "Wireframes and decisions", enlarge: "Open full-size image", figma: "View frame in Figma", result: "What the work demonstrates", limits: "Stage and limitations", links: "Public evidence", contact: "Discuss this project", flow: "Separating domain and presentation" };
  return <>
    <CaseLanguage locale={locale}/><a className="skip-link" href="#case-main">{copy.skip}</a>
    <header className="case-header container"><a className="wordmark" href={`/?lang=${locale}`} aria-label="Nicolas Suzuki — home">nicolas suzuki<span>.</span></a><a href={studyPath(slug, pt ? "en" : "pt")} lang={pt ? "en" : "pt-BR"} className="case-language">{pt ? "Read in English" : "Ler em português"}</a></header>
    <main id="case-main" className="case-main container" lang={pt ? "pt-BR" : "en"}>
      <a href={home} className="case-back">← {copy.back}</a>
      <section className="case-hero" aria-labelledby="case-title"><span className="eyebrow">{c.kind}</span><p className="case-name">{c.name}</p><h1 id="case-title">{c.title}</h1><p className="case-intro">{c.intro}</p>
        <dl className="case-facts"><div><dt>{copy.role}</dt><dd>{c.role}</dd></div><div><dt>{copy.status}</dt><dd>{c.status}</dd></div></dl>
        <ul className="case-stack" aria-label={pt ? "Tecnologias e temas" : "Technologies and topics"}>{c.stack.map(s=><li key={s}>{s}</li>)}</ul>
      </section>
      <nav className="case-index" aria-label={pt ? "Nesta página" : "On this page"}><a href="#process">{copy.process}</a>{c.evidence && <a href="#evidence">{copy.evidence}</a>}<a href="#outcome">{copy.result}</a><a href="#limitations">{copy.limits}</a></nav>
      <section id="process" className="case-section" aria-labelledby="process-title"><h2 id="process-title">{copy.process}</h2><ol className="case-stages">{c.stages.map((stage,i)=><li key={stage.title}><span className="case-step" aria-hidden="true">{String(i+1).padStart(2,"0")}</span><div><h3>{stage.title}</h3><p>{stage.text}</p></div></li>)}</ol></section>
      {c.evidence && <section id="evidence" className="case-section" aria-labelledby="evidence-title"><h2 id="evidence-title">{copy.evidence}</h2><div className="case-gallery">{c.evidence.map(e=><figure key={e.src}><div className="case-evidence-copy"><h3>{e.title}</h3><p>{e.text}</p></div><a className="case-image-link" href={e.src} target="_blank" rel="noopener noreferrer" aria-label={`${copy.enlarge}: ${e.title}`}><img src={e.src} width={e.width} height={e.height} alt={e.alt} loading="lazy" decoding="async"/></a><figcaption><a href={e.src} target="_blank" rel="noopener noreferrer">{copy.enlarge} ↗</a>{e.source && <a href={e.source} target="_blank" rel="noopener noreferrer">{copy.figma} ↗</a>}</figcaption></figure>)}</div></section>}
      {c.flow && <section className="case-section" aria-label={copy.flow}><h2>{copy.flow}</h2><ol className="case-flow">{c.flow.map(step=><li key={step}>{step}</li>)}</ol></section>}
      <section id="outcome" className="case-section case-outcome" aria-labelledby="outcome-title"><h2 id="outcome-title">{copy.result}</h2><p>{c.result}</p></section>
      <section id="limitations" className="case-section case-limits" aria-labelledby="limits-title"><h2 id="limits-title">{copy.limits}</h2><p>{c.limits}</p></section>
      {c.links && <section className="case-section"><h2>{copy.links}</h2><ul className="case-sources">{c.links.map(l=><li key={l.href}><a href={l.href} target="_blank" rel="noopener noreferrer">{l.label} ↗</a></li>)}</ul></section>}
      <div className="case-actions"><a href={`mailto:${profile.email}?subject=${encodeURIComponent(c.name + " — Portfolio")}`} className="button-primary">{copy.contact} ↗</a><a className="case-back" href={home}>← {copy.back}</a></div>
    </main><footer className="site-footer container"><span>Nicolas Suzuki</span><span>© {new Date().getFullYear()}</span></footer>
  </>;
}
