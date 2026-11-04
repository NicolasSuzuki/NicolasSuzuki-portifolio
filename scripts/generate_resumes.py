"""Generate text-based, single-column résumés from the portfolio's public content."""
import json
import re
import shutil
import sys
from pathlib import Path
from xml.sax.saxutils import escape

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, KeepTogether
from pypdf import PdfReader

sys.stdin.reconfigure(encoding="utf-8")
sys.stdout.reconfigure(encoding="utf-8")
data = json.loads(sys.stdin.read())
root = Path(__file__).resolve().parents[1]
output = root / "output" / "pdf"
public = root / "public" / "downloads"
output.mkdir(parents=True, exist_ok=True)
public.mkdir(parents=True, exist_ok=True)

def clean(value):
    return value.replace("—", "-").replace("–", "-").replace("−", "-").replace("→", " / ")

def text(value):
    return escape(clean(value))

body = ParagraphStyle("body", fontName="Helvetica", fontSize=9.6, leading=13, textColor=colors.HexColor("#28312d"), spaceAfter=4, alignment=TA_LEFT)
small = ParagraphStyle("small", parent=body, fontSize=9, leading=12)
section = ParagraphStyle("section", parent=body, fontName="Helvetica-Bold", fontSize=10.3, leading=14, textColor=colors.HexColor("#315927"), spaceBefore=10, spaceAfter=6)
name = ParagraphStyle("name", parent=body, fontName="Helvetica-Bold", fontSize=24, leading=29, spaceAfter=4, textColor=colors.HexColor("#111211"))
role = ParagraphStyle("role", parent=body, fontName="Helvetica-Bold", fontSize=11, leading=15, spaceAfter=5)

for locale in ("pt", "en"):
    c, r, profile = data["content"][locale], data["recruitingCopy"][locale], data["profile"]
    filename = Path(r["resumePath"]).name
    target = output / filename
    story = []
    def para(value, style=body):
        return Paragraph(value, style)
    def heading(value):
        story.append(para(text(value).upper(), section))
    story.append(para(text(profile["name"]), name))
    job_title = "Desenvolvedor Frontend Pleno | React, Next.js, TypeScript" if locale == "pt" else "Frontend Engineer | React, Next.js, TypeScript"
    story.append(para(text(job_title), role))
    story.append(para(text(c["location"] + " | UTC-3 | " + r["language"]), small))
    story.append(para(f'<link href="mailto:{profile["email"]}" color="#315927">{text(profile["email"])}</link> | <link href="{profile["github"]}" color="#315927">github.com/NicolasSuzuki</link> | <link href="{profile["linkedin"]}" color="#315927">LinkedIn</link>', small))
    story.append(para('<link href="https://nicolassuzuki-portifolio.onrender.com/?lang=' + locale + '" color="#315927">nicolassuzuki-portifolio.onrender.com</link>', small))
    heading(r["resumeTitle"])
    story.append(para(text(c["intro"])))
    story.append(para(text(c["aiPrinciple"])))
    heading(r["resumeSkills"])
    story.append(para(text(r["resumeFocus"])))
    story.append(para(text(r["resumeSupporting"])))
    heading(r["resumeExperience"])
    for job in c["jobs"]:
        story.append(KeepTogether([
            para("<b>" + text(job["company"]) + "</b> | " + text(job["role"]) + " | " + text(job["period"])),
            para(text(job["detail"])), Spacer(1, 3),
        ]))
    heading(r["resumeProjects"])
    for project in c["projects"]:
        case = r["cases"][project["id"]]
        story.append(para("<b>" + text(project["name"]) + "</b> - " + text(project["kind"].lower()) + ": " + text(case["role"]) + " " + text(project["statusLabel"]) + "."))
    heading(r["resumeEducation"])
    story.append(para(text(c["education"] + " | " + c["educationExtra"])))
    story.append(para(text(c["volunteer"])))
    def footer(canvas, doc):
        canvas.saveState()
        canvas.setStrokeColor(colors.HexColor("#d9e1d3"))
        canvas.line(36, 28, A4[0]-36, 28)
        canvas.setFont("Helvetica", 8)
        canvas.setFillColor(colors.HexColor("#596253"))
        canvas.drawString(36, 17, "Nicolas Suzuki | " + ("Experiência selecionada" if locale == "pt" else "Selected experience"))
        canvas.drawRightString(A4[0]-36, 17, str(doc.page))
        canvas.restoreState()
    doc = SimpleDocTemplate(str(target), pagesize=A4, leftMargin=36, rightMargin=36, topMargin=32, bottomMargin=40, title=profile["name"] + " - " + job_title, author=profile["name"])
    doc.build(story, onFirstPage=footer, onLaterPages=footer)
    pdf = PdfReader(target)
    extracted = "\n".join(page.extract_text() or "" for page in pdf.pages)
    if re.search(r"Ã[\u00a0-\u00bf]|â€", extracted):
        raise RuntimeError("Invalid text encoding in résumé")
    if len(pdf.pages) != 1:
        raise RuntimeError(f"Expected a one-page résumé, got {len(pdf.pages)}: {filename}")
    if not all(value in extracted for value in ("Nicolas Suzuki", "Sevenred", "Skills Lab", "Awaken", "B2")):
        raise RuntimeError("Résumé content is incomplete")
    shutil.copy2(target, public / filename)
    print(json.dumps({"file": str(target), "public": str(public / filename), "pages": len(pdf.pages), "characters": len(extracted)}, ensure_ascii=False))
