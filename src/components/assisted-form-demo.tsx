"use client";

import { useState } from "react";
import type { Locale } from "@/content/portfolio";

export default function AssistedFormDemo({ locale }: { locale: Locale }) {
  const pt = locale === "pt";
  const copy = pt ? {
    title: "Experimente um preenchimento editável",
    note: "Demonstração local com dados fictícios. O texto é montado por uma regra simples, sem executar um modelo de IA.",
    event: "Título do evento", prompt: "Texto sugerido para o formulário",
    initial: "Encontro de planejamento", phrase: "Prepare uma proposta para o evento",
    hint: "Este texto é uma sugestão. Você pode alterá-lo antes de continuar.",
    changed: "Sua edição foi mantida. Você decide se quer usar a nova sugestão.",
    fresh: "A sugestão acompanha o título do evento enquanto você não editar o texto.",
    replace: "Usar nova sugestão", applied: "Nova sugestão aplicada. O texto continua editável.",
  } : {
    title: "Try an editable starting point",
    note: "Local demonstration with fictional data. A simple rule assembles the text; no AI model is executed.",
    event: "Event title", prompt: "Suggested form text",
    initial: "Planning meeting", phrase: "Prepare a proposal for the event",
    hint: "This text is a suggestion. You can edit it before continuing.",
    changed: "Your edit was preserved. You decide whether to use the new suggestion.",
    fresh: "The suggestion follows the event title until you edit the text.",
    replace: "Use new suggestion", applied: "New suggestion applied. The text remains editable.",
  };
  const suggest = (value: string) => value.trim() ? `${copy.phrase} "${value.trim()}".` : "";
  const [eventTitle, setEventTitle] = useState(copy.initial);
  const [draft, setDraft] = useState(() => suggest(copy.initial));
  const [edited, setEdited] = useState(false);
  const [applied, setApplied] = useState(false);

  return <section id="demo" className="case-section assisted-demo" aria-labelledby="demo-title">
    <h2 id="demo-title">{copy.title}</h2>
    <p className="demo-note">{copy.note}</p>
    <div className="demo-form">
      <label htmlFor="demo-event">{copy.event}</label>
      <input id="demo-event" value={eventTitle} maxLength={120} onChange={event => {
        const next = event.target.value;
        setEventTitle(next);
        setApplied(false);
        if (!edited) setDraft(suggest(next));
      }}/>
      <label htmlFor="demo-prompt">{copy.prompt}</label>
      <p id="demo-hint" className="demo-hint">{copy.hint}</p>
      <textarea id="demo-prompt" value={draft} rows={4} maxLength={2000} aria-describedby="demo-hint" onChange={event => {
        setDraft(event.target.value); setEdited(true); setApplied(false);
      }}/>
      <div className="demo-actions">
        <button type="button" disabled={!eventTitle.trim()} onClick={() => {
          setDraft(suggest(eventTitle)); setEdited(false); setApplied(true);
        }}>{copy.replace}</button>
        <p role="status">{edited ? copy.changed : applied ? copy.applied : copy.fresh}</p>
      </div>
    </div>
  </section>;
}
