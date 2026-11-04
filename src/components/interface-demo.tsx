"use client";

import { useEffect, useRef, useState } from "react";
import { demoCopy, type Locale } from "@/content/portfolio";

type DemoState = "ready" | "loading" | "error";
export default function InterfaceDemo({ locale, onOpenProject }: { locale: Locale; onOpenProject: (trigger: HTMLButtonElement) => void }) {
  const [width, setWidth] = useState<"wide" | "compact">("wide");
  const [state, setState] = useState<DemoState>("ready");
  const [compactLayout, setCompactLayout] = useState(false);
  const widthRef = useRef<HTMLDivElement>(null);
  const actionRef = useRef<HTMLButtonElement>(null);
  const c = demoCopy[locale];
  useEffect(() => {
    if (!widthRef.current || typeof ResizeObserver === "undefined") { setCompactLayout(width === "compact"); return; }
    const observer = new ResizeObserver(entries => setCompactLayout(entries[0].contentRect.width <= 420));
    observer.observe(widthRef.current);
    return () => observer.disconnect();
  }, [width]);

  return <div className="interface-lab">
    <div className="lab-header"><div><span className="eyebrow">{c.label}</span><h3>{c.title}</h3></div><span className="lab-marker" aria-hidden="true">↔</span></div>
    <p className="lab-intro">{c.intro}</p>
    <div className="lab-controls">
      <fieldset><legend>{c.width}</legend>{(["wide", "compact"] as const).map(value => <label key={value}><input type="radio" name="demo-width" value={value} checked={width === value} onChange={() => setWidth(value)}/><span>{c[value]}</span></label>)}</fieldset>
      <fieldset><legend>{c.state}</legend>{(["ready", "loading", "error"] as const).map(value => <label key={value}><input type="radio" name="demo-state" value={value} checked={state === value} onChange={() => setState(value)}/><span>{c[value]}</span></label>)}</fieldset>
    </div>
    <div className="lab-stage"><div ref={widthRef} className={`demo-width demo-${width}`}>
      <div className="demo-card" data-state={state}>
        <div className="demo-content" aria-busy={state === "loading"}>
          {state === "ready" && <>
            <div className="demo-image" aria-hidden="true"><span>Awaken</span><span className="demo-image-meta">Frontend / PWA</span></div>
            <div className="demo-details"><span className="demo-kind">{c.cardKind}</span><h4>Awaken</h4><p>{c.cardText}</p><button ref={actionRef} className="demo-action" onClick={event => onOpenProject(event.currentTarget)}>{c.cardAction}<span aria-hidden="true">↗</span></button></div>
          </>}
          {state === "loading" && <div className="demo-skeleton"><span className="sr-only">{c.loadingText}</span><div/><div><i/><i/><i/></div></div>}
          {state === "error" && <div className="demo-error"><span className="error-symbol" aria-hidden="true">!</span><h4>{c.errorTitle}</h4><p>{c.errorText}</p><button className="demo-action" onClick={() => { setState("ready"); requestAnimationFrame(() => actionRef.current?.focus()); }}>{c.retry}<span aria-hidden="true">↻</span></button></div>}
        </div>
      </div>
    </div></div>
    <div className="lab-explanation" role="status" aria-live="polite" aria-atomic="true"><p>{c.notes[compactLayout ? "compact" : "wide"]}</p><p>{c.notes[state]}</p></div>
  </div>;
}
