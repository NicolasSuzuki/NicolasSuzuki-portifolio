"use client";

import { useEffect, useRef, useState } from "react";
import { content, demoCopy, profile, type Locale } from "@/content/portfolio";
import ProjectVisual from "./project-visual";
import ProjectDialog from "./project-dialog";
import InterfaceDemo from "./interface-demo";

export default function Portfolio() {
  const [locale, setLocale] = useState<Locale>("pt");
  const [localeLoaded, setLocaleLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const copyTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const c = content[locale];
  const d = demoCopy[locale];
  const order = ["awaken", "skills-lab", "education-platform"];
  const projects = [...c.projects].sort((a,b) => order.indexOf(a.id) - order.indexOf(b.id));
  const openProject = (id: string, trigger: HTMLButtonElement) => { triggerRef.current = trigger; setSelected(id); };
  const closeProject = () => { setSelected(null); requestAnimationFrame(() => triggerRef.current?.focus()); };

  useEffect(() => {
    try { const saved = localStorage.getItem("nicolas-portfolio-language"); if (saved === "en" || saved === "pt") setLocale(saved); } catch { /* Optional browser storage. */ }
    setLocaleLoaded(true);
    return () => { if (copyTimeout.current) clearTimeout(copyTimeout.current); };
  }, []);
  useEffect(() => {
    document.documentElement.lang = locale === "pt" ? "pt-BR" : "en";
    if (localeLoaded) { try { localStorage.setItem("nicolas-portfolio-language", locale); } catch { /* Language still works for this visit. */ } }
  }, [locale, localeLoaded]);
  useEffect(() => {
    const escape = (event: KeyboardEvent) => { if (event.key === "Escape") setMenuOpen(false); };
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, []);
  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(profile.email); setCopyState("copied"); } catch { setCopyState("failed"); }
    if (copyTimeout.current) clearTimeout(copyTimeout.current);
    copyTimeout.current = setTimeout(() => setCopyState("idle"), 3500);
  };

  return <>
    <a href="#main" className="skip-link">{c.skip}</a>
    <header className="site-header container"><a className="wordmark" href="#top" aria-label="Nicolas Suzuki — home">ns<span>.</span></a>
      <nav id="main-navigation" className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label={locale === "pt" ? "Navegação principal" : "Main navigation"}>
        {["projetos", "sobre", "processo-ia", "experiencia"].map((id,i) => <a href={`#${id}`} key={id} onClick={() => setMenuOpen(false)}>{c.nav[i]}</a>)}
      </nav>
      <div className="header-actions"><button className="language-switch" onClick={() => setLocale(locale === "pt" ? "en" : "pt")} aria-label={c.language}><span className={locale === "pt" ? "active" : ""}>PT</span><span aria-hidden="true">/</span><span className={locale === "en" ? "active" : ""}>EN</span></button><a className="header-contact" href={`mailto:${profile.email}`}>{c.contactNav} <span aria-hidden="true">↗</span></a><button className="menu-toggle" aria-label={menuOpen ? c.close : c.menu} aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "×" : "☰"}</button></div>
    </header>
    <main id="main">
      <section id="top" className="hero container" aria-labelledby="hero-title"><div className="hero-meta"><span>PORTFOLIO / {new Date().getFullYear()}</span><span>{c.location}</span></div><h1 id="hero-title"><span>Nicolas</span> <span>Suzuki<span className="name-dot">.</span></span></h1><div className="hero-bottom"><div className="hero-role"><p>{c.role}</p><span>React / Next.js / TypeScript</span></div><div className="hero-description"><p>{c.intro}</p><div className="hero-links"><a className="button-primary" href="#projetos">{c.seeProjects}<span aria-hidden="true">↓</span></a><a className="text-link" href={`mailto:${profile.email}`}>{d.contact}<span aria-hidden="true">↗</span></a></div></div></div></section>

      <section id="projetos" className="projects-section container" aria-labelledby="projects-title"><div className="section-heading"><h2 id="projects-title">{c.projectsTitle}</h2><span className="eyebrow">{d.projectCount}</span></div>
        <div className="projects-list">{projects.map((project,i) => <article className={`project project-${project.id}`} key={project.id}>
          <div className="project-heading"><div><span className="project-kind">{project.kind}</span><h3>{project.name}</h3></div><span className="project-number">{String(i+1).padStart(2,"0")}</span></div>
          <ProjectVisual visual={project.visual} eager={i === 0}/>
          <div className="project-summary"><p>{project.description}</p><div><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><button className="text-link project-open" aria-haspopup="dialog" onClick={event => openProject(project.id,event.currentTarget)}>{c.openProject}<span aria-hidden="true">↗</span><span className="sr-only">: {project.name}</span></button></div></div>
        </article>)}</div>
      </section>

      <section id="processo-ia" className="ai-section" aria-labelledby="ai-title"><div className="container"><div className="ai-heading"><div><span className="eyebrow">{c.aiEyebrow}</span><h2 id="ai-title">{c.aiTitle[0]}</h2></div><div className="ai-intro">{c.aiText.map(text => <p key={text}>{text}</p>)}</div></div><InterfaceDemo locale={locale} onOpenProject={trigger => openProject("awaken",trigger)}/><ol className="ai-method">{c.aiSteps.slice(0,3).map(step => <li key={step.number}><h3>{step.title}</h3><p>{step.description}</p></li>)}</ol></div></section>

      <section id="sobre" className="about-section container" aria-labelledby="about-title"><div className="about-copy"><span className="eyebrow">{c.since}</span><h2 id="about-title">{c.aboutTitle[0]}</h2>{c.aboutText.slice(0,2).map(text => <p key={text}>{text}</p>)}<p className="volunteer-note">{c.volunteer}</p><div className="about-facts"><span>{c.education}</span><span>{c.educationExtra}</span><span>{c.languages}</span></div></div><div className="expertise-list">{c.expertise.map(item => <article key={item.number}><h3>{item.title}</h3><p>{item.description}</p></article>)}</div></section>

      <section id="experiencia" className="experience-section container" aria-labelledby="experience-title"><div className="experience-intro"><span className="eyebrow">{c.experienceEyebrow}</span><h2 id="experience-title">{c.experienceTitle[0]}</h2><p>{c.experienceIntro}</p></div><div className="timeline">{c.jobs.map(job => <article className="job" key={job.company}><span className="job-period">{job.period}</span><div><h3>{job.company}</h3><p className="job-role">{job.role}</p><p>{job.detail}</p></div></article>)}</div></section>

      <section id="contato" className="contact-section container" aria-labelledby="contact-title"><div><span className="eyebrow">{locale === "pt" ? "CONTATO" : "CONTACT"}</span><h2 id="contact-title">{c.contactTitle[0]}<br/>{c.contactTitle[1]}</h2><p>{c.contactText}</p><div className="email-row"><a href={`mailto:${profile.email}`}>{profile.email}</a><button onClick={copyEmail} className="copy-button" aria-label={c.copyEmail}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="8" y="8" width="12" height="12" rx="2" stroke="currentColor"/><path d="M15 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3" stroke="currentColor"/></svg></button></div><span className="copy-feedback" role="status">{copyState === "copied" ? c.copied : copyState === "failed" ? c.copyFailed : ""}</span></div><div className="social-links"><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href="#top">{c.backTop} ↑</a></div></section>
    </main>
    <footer className="site-footer container"><span>Nicolas Suzuki</span><span>© {new Date().getFullYear()}</span></footer>
    <ProjectDialog locale={locale} project={c.projects.find(project => project.id === selected)} onClose={closeProject}/>
  </>;
}
