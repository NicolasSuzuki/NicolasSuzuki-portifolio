"""Generate single-column résumés with shared public facts and focused copy."""
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
site = "https://nicolassuzuki-portifolio.onrender.com"
link_color = "#000000"


def clean(value):
    return value.replace("—", "-").replace("–", "-").replace("−", "-").replace("→", " / ")


def text(value):
    return escape(clean(value))


body = ParagraphStyle(
    "body", fontName="Helvetica", fontSize=9.7, leading=12.8,
    textColor=colors.black, spaceAfter=3, alignment=TA_LEFT,
)
small = ParagraphStyle("small", parent=body, fontSize=9, leading=11.8)
bullet = ParagraphStyle(
    "bullet", parent=body, leftIndent=9, firstLineIndent=-7,
    fontSize=9.5, leading=12.4, spaceAfter=2,
)
section = ParagraphStyle(
    "section", parent=body, fontName="Helvetica-Bold", fontSize=10.2,
    leading=13.5, textColor=colors.black, spaceBefore=8, spaceAfter=5,
    keepWithNext=True,
)
name = ParagraphStyle(
    "name", parent=body, fontName="Helvetica-Bold", fontSize=23, leading=28,
    spaceAfter=3, textColor=colors.black,
)
role = ParagraphStyle(
    "role", parent=body, fontName="Helvetica-Bold", fontSize=10.8, leading=14, spaceAfter=4,
)


for locale in ("pt", "en"):
    c = data["content"][locale]
    r = data["recruitingCopy"][locale]
    resume = data["resumeContent"][locale]
    profile = data["profile"]
    filename = Path(r["resumePath"]).name
    target = output / filename
    story = []

    def para(value, style=body):
        return Paragraph(value, style)

    def heading(value):
        story.append(para(text(value).upper(), section))

    def linked(label, href):
        return f'<link href="{escape(href, {chr(34): "&quot;"})}" color="{link_color}">{text(label)}</link>'

    story.append(para(text(profile["name"]), name))
    job_title = (
        "Desenvolvedor Frontend Pleno | React, Next.js, TypeScript"
        if locale == "pt" else "Frontend Engineer | React, Next.js, TypeScript"
    )
    story.append(para(text(job_title), role))
    story.append(para(text(c["location"] + " | UTC-3 | " + r["language"]), small))
    story.append(para(
        linked(profile["email"], "mailto:" + profile["email"]) + " | "
        + linked("github.com/NicolasSuzuki", profile["github"]) + " | "
        + linked("LinkedIn", profile["linkedin"]), small,
    ))
    story.append(para(
        linked("nicolassuzuki-portifolio.onrender.com", site + "/?lang=" + locale), small,
    ))

    heading(r["resumeTitle"])
    story.append(para(text(resume["summary"])))
    heading(resume["skillsTitle"])
    for group in resume["skillGroups"]:
        story.append(para("<b>" + text(group["label"]) + ":</b> " + text(group["text"])))

    heading(r["resumeExperience"])
    for job in c["jobs"]:
        items = [
            para("<b>" + text(job["company"]) + "</b> | "
                 + text(job["role"]) + " | " + text(job["period"])),
        ]
        for line in resume["experienceHighlights"][job["company"]]:
            items.append(para("- " + text(line), bullet))
        items.append(Spacer(1, 3))
        story.append(KeepTogether(items))

    heading(r["resumeProjects"])
    for item in resume["projects"]:
        project = next(p for p in c["projects"] if p["id"] == item["id"])
        case_path = ("/en" if locale == "en" else "") + "/cases/" + project["id"] + "/"
        items = [
            para("<b>" + linked(project["name"], site + case_path) + "</b> | "
                 + text(project["kind"].lower()) + " | " + text(project["statusLabel"])),
        ]
        items.extend(para("- " + text(line), bullet) for line in item["bullets"])
        items.append(Spacer(1, 3))
        story.append(KeepTogether(items))

    heading(resume["educationTitle"])
    story.append(para(text(c["education"] + " | " + c["educationExtra"])))
    story.append(para(text(resume["volunteer"]), small))

    def footer(canvas, doc):
        canvas.saveState()
        canvas.setFont("Helvetica", 8)
        canvas.setFillColor(colors.black)
        canvas.drawString(
            36, 18,
            "Nicolas Suzuki | " + ("Experiência selecionada" if locale == "pt" else "Selected experience"),
        )
        canvas.drawRightString(A4[0] - 36, 18, str(doc.page))
        canvas.restoreState()

    doc = SimpleDocTemplate(
        str(target), pagesize=A4, leftMargin=36, rightMargin=36,
        topMargin=30, bottomMargin=36,
        title=profile["name"] + " - " + job_title, author=profile["name"],
    )
    doc.build(story, onFirstPage=footer, onLaterPages=footer)
    pdf = PdfReader(target)
    extracted = "\n".join(page.extract_text() or "" for page in pdf.pages)
    if re.search(r"Ã[\u00a0-\u00bf]|â€|\ufffd", extracted):
        raise RuntimeError("Invalid text encoding in résumé")
    if len(pdf.pages) != 1:
        raise RuntimeError(f"Expected a one-page résumé, got {len(pdf.pages)}: {filename}")
    if not all(value in extracted for value in (
        "Nicolas Suzuki", "Sevenred", "Skills Lab", "Awaken", "B2", "NestJS", "PostgreSQL",
    )):
        raise RuntimeError("Résumé content is incomplete")
    links = [
        str(annotation.get_object().get("/A", {}).get("/URI", ""))
        for page in pdf.pages for annotation in page.get("/Annots", [])
    ]
    expected_links = [
        "mailto:" + profile["email"], profile["github"], profile["linkedin"],
        site + "/?lang=" + locale,
        site + ("/en" if locale == "en" else "") + "/cases/skills-lab/",
        site + ("/en" if locale == "en" else "") + "/cases/awaken/",
    ]
    if any(href not in links for href in expected_links):
        raise RuntimeError("Résumé links are incomplete")
    shutil.copy2(target, public / filename)
    print(json.dumps({
        "file": str(target), "public": str(public / filename),
        "pages": len(pdf.pages), "characters": len(extracted), "links": len(links),
    }, ensure_ascii=False))
