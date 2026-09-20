from pathlib import Path
import re

import fitz


PDF_PATH = Path("attached_assets/Portfolio_2026-09-20_1789914687517.pdf")
OUTPUT_DIR = Path(".agents/outputs/portfolio-latest")
PAGE_DIR = OUTPUT_DIR / "pages"
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
PAGE_DIR.mkdir(parents=True, exist_ok=True)

KEYWORDS = re.compile(
    r"cpd|continuing professional|india|training|instalimb|alimco|jaipur|"
    r"prosthetic foot|hours|reflection|certificate|certification|publication|"
    r"experience|curriculum|portfolio",
    re.IGNORECASE,
)

document = fitz.open(PDF_PATH)
summary_lines = [f"pages={document.page_count}"]
keyword_pages = []

for page_number, page in enumerate(document, start=1):
    text = " ".join(page.get_text("text").split())
    first_lines = " | ".join(page.get_text("text").splitlines()[:5])
    summary_lines.append(f"PAGE {page_number:02d}: {first_lines[:360]}")
    if KEYWORDS.search(text):
        keyword_pages.append((page_number, text[:1200]))
        pixmap = page.get_pixmap(matrix=fitz.Matrix(1.1, 1.1), alpha=False)
        pixmap.save(PAGE_DIR / f"page-{page_number:02d}.png")

with (OUTPUT_DIR / "page-summary.txt").open("w", encoding="utf-8") as handle:
    handle.write("\n".join(summary_lines))

with (OUTPUT_DIR / "keyword-pages.txt").open("w", encoding="utf-8") as handle:
    for page_number, text in keyword_pages:
        handle.write(f"\n--- PAGE {page_number:02d} ---\n{text}\n")

print(f"pages={document.page_count}")
print(f"keyword_pages={len(keyword_pages)}")
print("keyword_page_numbers=" + ",".join(str(page) for page, _ in keyword_pages))