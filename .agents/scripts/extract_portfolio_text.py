from pathlib import Path

import fitz


pdf_path = Path("attached_assets/portfolio_(3)_1788547219249.pdf")
output_path = Path(".agents/outputs/portfolio-text.txt")

document = fitz.open(pdf_path)
with output_path.open("w", encoding="utf-8") as output:
    for page_number, page in enumerate(document, start=1):
        output.write(f"\n\n===== PAGE {page_number} =====\n")
        output.write(page.get_text("text"))

print(output_path)