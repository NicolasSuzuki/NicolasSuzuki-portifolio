import type { ProjectVisual as Visual } from "@/content/portfolio";

export default function ProjectVisual({ visual, eager = false }: { visual: Visual; eager?: boolean }) {
  return <figure className={`project-visual visual-${visual.type}`}>
    {visual.type === "screenshots" ? <div className="screen-composition">
      {/* These are actual local application captures, not product mockups. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="screen-desktop" src={visual.desktop} width={1280} height={800} alt={visual.alt} loading={eager ? "eager" : "lazy"}/>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="screen-mobile" src={visual.mobile} width={390} height={844} alt="" loading="lazy"/>
    </div> : <ol className="flow-diagram" aria-label={visual.alt}>{visual.steps.map((step, i) => <li key={step}><span className="flow-node"><span className="flow-index">{String(i + 1).padStart(2, "0")}</span><span>{step}</span></span>{i < visual.steps.length - 1 && <span className="flow-connector" aria-hidden="true">→</span>}</li>)}</ol>}
    <figcaption>{visual.caption}</figcaption>
  </figure>;
}
