from pathlib import Path

path = Path('styles.css')
text = path.read_text(encoding='utf-8')
old = ".featured-brand-content {\n    padding: var(--spacing-4xl);\n    position: relative; \n    z-index: 2;\n} \n    overflow: hidden;\n    box-shadow: var(--shadow-xl);\n    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n    border: 3px solid transparent;\n    position: relative; \n    transform: translateY(0) scale(1);\n    backdrop-filter: blur(10px);\n}\n\n.featured-brand-card:hover {"
new = ".featured-brand-content {\n    padding: var(--spacing-4xl);\n    position: relative;\n    z-index: 2;\n}\n\n.featured-brand-card:hover {"

if old not in text:
    raise SystemExit('old text not found')

path.write_text(text.replace(old, new, 1), encoding='utf-8')
print('patched')
