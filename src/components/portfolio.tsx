"use client";

import { useEffect, useRef, useState } from "react";
import { content, profile, type Locale } from "@/content/portfolio";

function Arrow({ diagonal = false, className = "" }: { diagonal?: boolean; className?: string }) {
  return <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={diagonal ? "M5 19 19 5M5 5h14v14" : "M4 12h16m-6-6 6 6-6 6"} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function Monogram() {
  return <div className="monogram-scene" aria-hidden="true">
    <span className="scene-coordinate coordinate-top">NS / ENGINEERING</span>
    <div className="scene-grid" />
    <div className="monogram-shadow">N</div><div className="monogram-outline outline-one">N</div><div className="monogram-outline outline-two">N</div><div className="monogram-letter">N<span>.</span></div>
    <div className="scene-tech tech-react"><span className="tiny-star">✳</span> React</div><div className="scene-tech tech-ts">TS <span>TypeScript</span></div>
    <span className="scene-coordinate coordinate-bottom">CRAFTED WITH INTENTION ↗</span>
    <span className="scene-corner top-left"/><span className="scene-corner bottom-right"/>
  </div>;
}

function ProjectPreview({ type, locale }: { type: string; locale: Locale }) {
  const p = content[locale].preview;
  if (type === "learning") return <div className="project-visual learning-visual" aria-hidden="true">
    <div className="learning-orbit orbit-a"/><div className="learning-orbit orbit-b"/>
    <div className="learning-window"><div className="window-bar"><div className="window-dots"><i/><i/><i/></div><span>skills lab<span className="brand-star">✳</span></span><div className="avatar-dot">N</div></div>
      <div className="learning-body"><div className="mock-sidebar"><span className="sidebar-square active"/><span className="sidebar-square"/><span className="sidebar-square"/><span className="sidebar-square"/><span className="sidebar-square last"/></div><div className="lesson-content"><span className="mock-greeting">{p.lesson} <span>↗</span></span><div className="lesson-banner"><span className="mock-small-label">{p.module}</span><strong>{p.lessonTitle}</strong><div className="lesson-art"><i/><i/><i/><i/></div><div className="mock-continue">{p.continue} <Arrow/></div></div><div className="lesson-bottom"><div><span className="practice-symbol">↗</span><span>{p.practice}</span></div><div className="mock-progress"><i/><i/><i/><i/><i/></div></div></div></div>
    </div><span className="preview-corner">LEARNING, BY DESIGN.</span>
  </div>;
  if (type === "education") return <div className="project-visual education-visual" aria-hidden="true"><div className="education-word">Ideias.</div><div className="document-sheet sheet-back"/><div className="document-sheet"><div className="document-brand">{p.educationBrand}<span>{p.educationBrandSub}</span><span className="document-spark">✦</span></div><span className="document-type">{p.document}</span><strong>{p.documentSub}</strong><div className="document-rule"/><div className="document-lines"><i/><i/><i/><i/></div><div className="document-box"><span/><div><i/><i/></div></div><div className="document-lines short"><i/><i/><i/></div><span className="document-foot">ENSINAR TRANSFORMA.</span></div><div className="education-floating">PDF <Arrow diagonal/></div></div>;
  return <div className="project-visual fitness-visual" aria-hidden="true"><div className="fitness-orbit"/><span className="fitness-background">A</span><div className="fitness-device"><div className="device-island"/><span className="fitness-brand">{p.fitness} <span>✧</span></span><div className="fitness-symbol">A<span>↗</span></div><strong>{p.fitnessTitle}</strong><span className="fitness-sub">{p.fitnessSub}</span><div className="fitness-bars"><i/><i/><i/><i/><i/><i/><i/></div><div className="fitness-cta">{p.fitnessAction}<Arrow/></div><div className="device-home"/></div><span className="fitness-coordinate">CONSISTENCY → PROGRESS</span></div>;
}

export default function Portfolio() {
  const [locale, setLocale] = useState<Locale>("pt");
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const copyTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const c = content[locale];
  const selectedProject = c.projects.find(project => project.id === selected);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("nicolas-portfolio-language");
      if (saved === "en" || saved === "pt") setLocale(saved);
    } catch { /* The page also works when browser storage is unavailable. */ }
    return () => { if (copyTimeout.current) clearTimeout(copyTimeout.current); };
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale === "pt" ? "pt-BR" : "en";
    try { localStorage.setItem("nicolas-portfolio-language", locale); } catch { /* Language remains available for this visit. */ }
  }, [locale]);

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setMenuOpen(false); };
    document.addEventListener("keydown", onEscape);
    return () => document.removeEventListener("keydown", onEscape);
  }, []);

  useEffect(() => {
    if (selected && dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
      document.body.style.overflow = "hidden";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  const closeProject = () => {
    dialogRef.current?.close();
    setSelected(null);
    triggerRef.current?.focus();
  };

  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(profile.email); setCopyState("copied"); }
    catch { setCopyState("failed"); }
    if (copyTimeout.current) clearTimeout(copyTimeout.current);
    copyTimeout.current = setTimeout(() => setCopyState("idle"), 3500);
  };

  return <>
    <a href="#main" className="skip-link">{c.skip}</a>
    <header className="site-header"><div className="container header-inner">
      <a className="wordmark" href="#top" aria-label="Nicolas Suzuki — home">nicolas suzuki<span>.</span></a>
      <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label={locale === "pt" ? "Navegação principal" : "Main navigation"} id="main-navigation">
        {["projetos", "sobre", "processo-ia", "experiencia"].map((id, i) => <a href={`#${id}`} key={id} onClick={() => setMenuOpen(false)}>{c.nav[i]}</a>)}
      </nav>
      <div className="header-actions"><button className="language-switch" onClick={() => setLocale(locale === "pt" ? "en" : "pt")} aria-label={c.language}><span className={locale === "pt" ? "active" : ""}>PT</span><span className="language-divider">/</span><span className={locale === "en" ? "active" : ""}>EN</span></button><a href="#contato" className="header-contact">{c.contactNav}<Arrow diagonal/></a><button className="menu-toggle" aria-label={menuOpen ? c.close : c.menu} aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}><span/><span/></button></div>
    </div></header>

    <main id="main">
      <section id="top" className="hero container" aria-labelledby="hero-title"><div className="hero-main"><div className="hero-copy"><div className="eyebrow hero-eyebrow"><span className="status-dot"/>{c.role}</div><h1 id="hero-title">{c.hero[0]}<br/>{c.hero[1]}<br/><em>{c.hero[2]}</em></h1><p className="hero-intro">{c.intro}</p><div className="hero-links"><a href="#projetos" className="button-primary">{c.seeProjects}<Arrow diagonal/></a><a href="#sobre" className="text-link">{c.aboutLink}<Arrow/></a></div></div><Monogram/></div><div className="hero-foot"><span className="location"><svg width="13" height="16" viewBox="0 0 14 18" fill="none" aria-hidden="true"><path d="M12.5 7c0 4-5.5 9-5.5 9S1.5 11 1.5 7a5.5 5.5 0 1 1 11 0Z" stroke="currentColor"/><circle cx="7" cy="7" r="1.7" stroke="currentColor"/></svg>{c.location}</span><span className="hero-since">{c.since}</span><a href="#projetos" className="scroll-link">{c.scroll}<span>↓</span></a></div></section>

      <div className="technology-strip" aria-label={locale === "pt" ? "Especialidades" : "Specialties"}><div className="container technology-inner"><span>REACT</span><i>✳</i><span>NEXT.JS</span><i>✳</i><span>TYPESCRIPT</span><i>✳</i><span>DESIGN SYSTEMS</span><i>✳</i><span>MICRO-FRONTENDS</span></div></div>

      <section id="projetos" className="section container" aria-labelledby="projects-title"><div className="section-heading"><div><div className="eyebrow"><span className="section-index">01 /</span>{c.selected}</div><h2 id="projects-title">{c.projectsTitle}</h2></div><p>{c.projectsIntro}</p></div><div className="projects-grid">{c.projects.map((project, i) => <article key={project.id} className={`project-card ${i === 0 ? "featured-project" : ""}`}><button className="project-button" aria-label={`${c.openProject}: ${project.name}`} aria-haspopup="dialog" onClick={event => { triggerRef.current = event.currentTarget; setSelected(project.id); }}><div className="project-image-wrap"><ProjectPreview type={project.preview} locale={locale}/><span className="illustration-label">{locale === "pt" ? "ILUSTRAÇÃO" : "ILLUSTRATION"}</span><span className="project-image-arrow"><Arrow diagonal/></span></div><div className="project-info"><div className="project-kind">{project.kind}<span>/{project.number}</span></div><h3>{project.name}<Arrow diagonal/></h3><p>{project.description}</p><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>{i === 0 && <div className="featured-link">{c.openProject}<Arrow/></div>}</div></button></article>)}</div></section>

      <section id="sobre" className="about-section" aria-labelledby="about-title"><div className="container about-grid"><div className="about-copy"><div className="eyebrow"><span className="section-index">02 /</span>{c.aboutEyebrow}</div><h2 id="about-title">{c.aboutTitle[0]}<br/><em>{c.aboutTitle[1]}</em></h2><div className="about-paragraphs">{c.aboutText.map(text => <p key={text}>{text}</p>)}</div><div className="about-facts"><span>{c.education}</span><span>{c.educationExtra}</span><span>{c.languages}</span></div><p className="volunteer-note">↳ {c.volunteer}</p></div><div className="expertise-list">{c.expertise.map(item => <article className="expertise-item" key={item.number}><span className="expertise-number">{item.number}</span><div><h3>{item.title}</h3><p>{item.description}</p></div><Arrow diagonal/></article>)}</div></div></section>

      <section id="processo-ia" className="section container ai-section" aria-labelledby="ai-title">
        <div className="ai-heading">
          <div><div className="eyebrow"><span className="section-index">03 /</span>{c.aiEyebrow}</div><h2 id="ai-title">{c.aiTitle[0]}<br/><em>{c.aiTitle[1]}</em></h2></div>
          <div className="ai-intro">{c.aiText.map(text => <p key={text}>{text}</p>)}</div>
        </div>
        <ol className="ai-steps">{c.aiSteps.map(step => <li key={step.number}><span className="ai-step-number">{step.number} /</span><h3>{step.title}</h3><p>{step.description}</p></li>)}</ol>
        <p className="ai-principle">{c.aiPrinciple}</p>
      </section>

      <section id="experiencia" className="section container experience-grid" aria-labelledby="experience-title"><div className="experience-intro"><div className="eyebrow"><span className="section-index">04 /</span>{c.experienceEyebrow}</div><h2 id="experience-title">{c.experienceTitle.map((line, i) => <span key={line} className={i === 2 ? "accent-text" : ""}>{line}<br/></span>)}</h2><p>{c.experienceIntro}</p></div><div className="timeline">{c.jobs.map((job, i) => <article className="job" key={job.company}><div className="job-marker"/><div className="job-top"><span className="job-period">{job.period}</span>{i === 0 && <span className="current-mark">{locale === "pt" ? "ATUAL" : "CURRENT"}</span>}</div><h3>{job.company}</h3><div className="job-role">{job.role}</div><p>{job.detail}</p></article>)}</div></section>

      <section id="contato" className="contact-section" aria-labelledby="contact-title"><div className="container"><div className="eyebrow"><span className="status-dot"/>{c.contactEyebrow}</div><div className="contact-heading"><h2 id="contact-title">{c.contactTitle[0]}<br/><em>{c.contactTitle[1]}</em></h2><a className="contact-arrow" href={`mailto:${profile.email}`} aria-label={c.emailAction}><Arrow diagonal/></a></div><div className="contact-bottom"><div><p>{c.contactText}</p><div className="email-row"><a href={`mailto:${profile.email}`}>{profile.email}</a><button className="copy-button" onClick={copyEmail} aria-label={c.copyEmail}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="8" y="8" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M15 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3" stroke="currentColor" strokeWidth="1.5"/></svg></button></div><span className="copy-feedback" role="status">{copyState === "copied" ? c.copied : copyState === "failed" ? c.copyFailed : ""}</span></div><div className="social-links"><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub<Arrow diagonal/></a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn<Arrow diagonal/></a></div></div></div></section>
    </main>

    <footer className="site-footer container"><a href="#top" className="footer-name">nicolas suzuki<span>.</span></a><span>© {new Date().getFullYear()} · {c.footer}</span><a href="#top" className="back-top">{c.backTop}<span>↑</span></a></footer>

    <dialog ref={dialogRef} className="project-dialog" aria-labelledby="dialog-title" onCancel={event => { event.preventDefault(); closeProject(); }} onClick={event => { if (event.target === event.currentTarget) closeProject(); }} onClose={() => setSelected(null)}>
      {selectedProject && <div className="dialog-content"><div className="dialog-top"><span className="eyebrow">{c.projectDetails} / {selectedProject.number}</span><button className="dialog-close" onClick={closeProject} aria-label={c.close}>×</button></div><span className="project-kind">{selectedProject.kind}</span><h2 id="dialog-title">{selectedProject.name}</h2><p className="dialog-subtitle">{selectedProject.subtitle}</p><span className="project-status"><span className="status-dot"/>{selectedProject.statusLabel}</span><div className="dialog-sections">{[[c.context, selectedProject.context], [c.contribution, selectedProject.contribution], [c.scope, selectedProject.scope], [c.status, selectedProject.status]].map(([title, text]) => <section key={title}><h3>{title}</h3><p>{text}</p></section>)}</div><div className="eyebrow">{c.stack}</div><div className="project-tags dialog-tags">{selectedProject.tags.map(tag => <span key={tag}>{tag}</span>)}</div><a className="button-primary" href={`mailto:${profile.email}?subject=${encodeURIComponent(`${selectedProject.name} — Portfolio`)}`}>{c.nextProject}<Arrow diagonal/></a><p className="dialog-note">{c.detailNote}</p></div>}
    </dialog>
  </>;
}
