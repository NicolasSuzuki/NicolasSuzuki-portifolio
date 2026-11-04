"use client";

import { useEffect, useRef } from "react";
import { content, demoCopy, profile, type Locale, type Project } from "@/content/portfolio";

const decisions: Record<Locale, Record<string, string>> = {
  pt: {
    awaken: "Separar os temas visuais das regras de progressão. Trabalhar com contratos e mocks permite desenvolver a interface enquanto a integração com o backend evolui.",
    "skills-lab": "Organizar a experiência em etapas de aprendizagem e prática, conectando a interface à API e preservando a sessão ao recarregar a página.",
    "education-platform": "Reutilizar componentes e tratar estados de erro e carregamento, preservando o conteúdo durante falhas de exportação.",
  },
  en: {
    awaken: "Separate visual themes from progression rules. Contracts and mocks allow interface development while backend integration evolves.",
    "skills-lab": "Organize the experience into learning and practice stages, connect the interface to the API and preserve sessions across page reloads.",
    "education-platform": "Reuse components and handle error and loading states, preserving content when exports fail.",
  },
};

export default function ProjectDialog({ project, locale, onClose }: { project: Project | undefined; locale: Locale; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  const c = content[locale];
  useEffect(() => {
    const dialog = ref.current;
    if (!project || !dialog) return;
    dialog.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { dialog.close(); document.body.style.overflow = previousOverflow; };
  }, [project]);

  return <dialog ref={ref} className="project-dialog" aria-labelledby="dialog-title" onCancel={event => { event.preventDefault(); onClose(); }} onClick={event => { if (event.target === event.currentTarget) onClose(); }}>
    {project && <div className="dialog-content"><div className="dialog-top"><span className="eyebrow">{c.projectDetails}</span><button className="dialog-close" onClick={onClose} aria-label={c.close} autoFocus>×</button></div><span className="project-kind">{project.kind}</span><h2 id="dialog-title">{project.name}</h2><p className="dialog-subtitle">{project.description}</p><span className="project-status">{project.statusLabel}</span><div className="dialog-sections">{[[c.context, project.context], [c.contribution, project.contribution], [demoCopy[locale].decisions, decisions[locale][project.id]], [c.scope, project.scope], [c.status, project.status]].map(([title, text]) => <section key={title}><h3>{title}</h3><p>{text}</p></section>)}</div><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><a className="button-primary" href={`mailto:${profile.email}?subject=${encodeURIComponent(project.name + " — Portfolio")}`}>{c.nextProject}<span aria-hidden="true">↗</span></a><p className="dialog-note">{c.detailNote}</p></div>}
  </dialog>;
}
