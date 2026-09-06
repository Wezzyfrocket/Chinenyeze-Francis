from pathlib import Path

import fitz


PDF_PATH = Path("attached_assets/Chinenyeze_Francis_Onyema_CV_1788684896034.pdf")
OUTPUT_DIR = Path(".agents/outputs/cv-latest-pages")
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

document = fitz.open(PDF_PATH)
print(f"pages={document.page_count}")

for page_number, page in enumerate(document, start=1):
    pixmap = page.get_pixmap(matrix=fitz.Matrix(1.35, 1.35), alpha=False)
    output_path = OUTPUT_DIR / f"page-{page_number:02d}.png"
    pixmap.save(output_path)
    text = page.get_text("text").replace("\n", " ").strip()
    print(f"page={page_number:02d} text={text[:180]}")