"""Build RUNBOOK.pdf from the working files, so the PDF can never drift from them.

    python3 scripts/build_runbook.py

Reads the files listed in PARTS, in order, turns them into one HTML page and prints it to
RUNBOOK.pdf with headless Chrome. `{{table path}}` inserts the first Markdown table from another file.
"""

import re
import subprocess
import sys
from pathlib import Path

import markdown

ROOT = Path(__file__).resolve().parent.parent
CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

# (file, the heading it gets in the runbook, or None to keep its own)
PARTS = [
    ("runbook/intro.md", None),
    ("runbook/day-by-day.md", None),
    ("build-log/briefs.md", "Part 3 · Emergent prompts, ready to speak"),
    ("runbook/evidence.md", None),
    ("video/script.md", "Part 5 · The video"),
    ("application/form-answers.md", "Part 6 · The form"),
    ("application/setup-answer.md", "Part 7 · The $3,000 answer"),
    ("application/post.md", "Part 8 · The posts"),
    ("runbook/troubleshooting.md", None),
    ("content/site-copy.md", "Appendix · Every word on the site"),
]

CSS = """
@page { size: A4; margin: 16mm 15mm 18mm 15mm;
        @bottom-right { content: counter(page); font: 9pt -apple-system, Helvetica, Arial, sans-serif; color: #6b665c; } }
html { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
body { font: 10.5pt/1.5 -apple-system, "Helvetica Neue", Helvetica, Arial, sans-serif; color: #16140F; }
h1 { font-size: 21pt; line-height: 1.15; margin: 0 0 10pt; padding-bottom: 6pt; border-bottom: 3px solid #16140F;
     break-before: page; letter-spacing: -0.01em; }
h1:first-of-type { break-before: auto; font-size: 30pt; border-bottom: 6px solid #FFE14A; }
h2 { font-size: 13.5pt; margin: 16pt 0 6pt; break-after: avoid; }
h3 { font-size: 11.5pt; margin: 12pt 0 4pt; break-after: avoid; }
p, li { orphans: 3; widows: 3; }
ul, ol { padding-left: 18pt; }
li { margin: 2pt 0; }
blockquote { margin: 6pt 0 8pt; padding: 7pt 10pt; background: #EEF1FB; border-left: 4px solid #2643C4;
             color: #16140F; break-inside: avoid; border-radius: 2px; }
blockquote p { margin: 0 0 4pt; } blockquote p:last-child { margin-bottom: 0; }
pre { background: #FFF6C2; border-left: 4px solid #D9B300; padding: 7pt 10pt; white-space: pre-wrap;
      word-break: break-word; font: 8.6pt/1.45 Menlo, Monaco, monospace; break-inside: avoid; border-radius: 2px; }
code { font: 0.9em Menlo, Monaco, monospace; background: #F4EFE4; padding: 0 2pt; border-radius: 2px; }
pre code { background: none; padding: 0; font: inherit; }
table { width: 100%; border-collapse: collapse; margin: 6pt 0 10pt; font-size: 9.2pt; break-inside: auto; }
th, td { border: 1px solid #CFC8B8; padding: 4pt 6pt; vertical-align: top; text-align: left; }
th { background: #F4EFE4; }
tr { break-inside: avoid; }
hr { border: 0; border-top: 1px solid #CFC8B8; margin: 12pt 0; }
.contents ul { columns: 2; font-size: 10pt; list-style: none; padding-left: 0; }
/* Keep a "Say:" or "Paste:" label on the same page as the box it introduces. */
p:has(+ blockquote), p:has(+ pre), p:has(+ table) { break-after: avoid; }
"""


LIST_ITEM = re.compile(r"^\s*(?:[-*+]|\d+\.)\s")


def separate_lists(text: str) -> str:
    """Python-Markdown needs a blank line before a list that follows a paragraph; GitHub doesn't.

    The source files are written for GitHub, so add the blank line here rather than in every file.
    """
    out: list[str] = []
    fenced = False
    for line in text.split("\n"):
        if line.lstrip().startswith("```"):
            fenced = not fenced
        if not fenced and LIST_ITEM.match(line) and out:
            prev = out[-1]
            if prev.strip() and not LIST_ITEM.match(prev) and not prev[:1].isspace() and not prev.lstrip().startswith(("|", ">")):
                out.append("")
        out.append(line)
    return "\n".join(out)


def first_table(path: Path) -> str:
    lines, table = path.read_text().splitlines(), []
    for line in lines:
        if line.startswith("|"):
            table.append(line)
        elif table:
            break
    return "\n".join(table)


def load(path: str, heading: str | None) -> str:
    text = (ROOT / path).read_text()
    text = re.sub(r"\{\{table (\S+)\}\}", lambda m: first_table(ROOT / m.group(1)), text)
    if heading:
        text = re.sub(r"^# .*$", f"# {heading}", text, count=1, flags=re.M)
    return separate_lists(text)


def main() -> int:
    chunks = [load(path, heading) for path, heading in PARTS]
    titles = [t for c in chunks for t in re.findall(r"^# (.*)$", c, re.M)][1:]
    contents = "\n".join(f"- {t}" for t in titles)
    # The contents list goes straight after the cover's first paragraph.
    intro, rest = chunks[0].split("\n## ", 1)
    chunks[0] = f"{intro}\n## Contents\n\n<div class=\"contents\" markdown=\"1\">\n\n{contents}\n\n</div>\n\n## {rest}"

    body = markdown.markdown(
        "\n\n".join(chunks),
        extensions=["tables", "fenced_code", "sane_lists", "md_in_html"],
        tab_length=2,
    )
    html = f"<!doctype html><html><head><meta charset='utf-8'><title>Wispr challenge runbook</title><style>{CSS}</style></head><body>{body}</body></html>"
    out_html = ROOT / "runbook" / "RUNBOOK.html"
    out_html.write_text(html)

    out_pdf = ROOT / "RUNBOOK.pdf"
    subprocess.run(
        [CHROME, "--headless=new", "--disable-gpu", "--no-pdf-header-footer", "--print-to-pdf-no-header",
         f"--print-to-pdf={out_pdf}", out_html.as_uri()],
        check=True, capture_output=True,
    )
    print(f"wrote {out_pdf.relative_to(ROOT)} ({out_pdf.stat().st_size // 1024} KB)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
