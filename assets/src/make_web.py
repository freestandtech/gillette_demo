"""Build web-sized WebP copies of the PNG masters into assets/web/ (used by index.html).
Run from anywhere: python3 assets/src/make_web.py"""
from pathlib import Path
from PIL import Image

ASSETS = Path(__file__).resolve().parent.parent
OUT = ASSETS / "web"
OUT.mkdir(exist_ok=True)
# max long edge per file; everything else defaults to 900
SIZES = {"avatar-": 160, "rohan-avatar": 200, "gillette-ig-dp": 160, "freestand-": 600, "gillette-logo": 600,
         "og-image": 1200, "sample-ad-1x1": 900, "delivery": 720, "sample-kit": 800}
for src in sorted(ASSETS.glob("*.png")):
    size = next((v for k, v in SIZES.items() if src.name.startswith(k)), 900)
    im = Image.open(src)
    im.thumbnail((size, size), Image.LANCZOS)
    dest = OUT / (src.stem + ".webp")
    im.save(dest, "WEBP", quality=82, method=6)
    print(f"{dest.name:32s} {im.size[0]}x{im.size[1]} {dest.stat().st_size // 1024}K")
