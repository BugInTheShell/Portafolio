"""Genera el retrato en pixel art (fósforo, dither Bayer 4x4) a partir de la foto.

Uso: python3 -I scripts/retrato.py src/assets/EstebanPhoto.jpg src/assets [tamaño] [gamma] [--preview]
Escribe <out_dir>/retrato-<tamaño>.png; con --preview también vistas x2/x3 sobre tinta.
"""
import sys
from collections import deque
from PIL import Image, ImageFilter, ImageOps

PREVIEW = "--preview" in sys.argv
sys.argv = [a for a in sys.argv if a != "--preview"]
src, out = sys.argv[1], sys.argv[2]
N = int(sys.argv[3]) if len(sys.argv) > 3 else 96

PAL = {  # level -> RGB
    0: (0x0a, 0x0c, 0x0b),  # tinta (darkest subject tone)
    1: (0x17, 0x3d, 0x25),  # fosforo-profundo
    2: (0x2f, 0x8a, 0x4f),  # fosforo-medio
    3: (0x5a, 0xf7, 0x8e),  # fosforo
    4: (0xc4, 0xec, 0xce),  # texto (highlights)
}
BAYER4 = [[0, 8, 2, 10], [12, 4, 14, 6], [3, 11, 1, 9], [15, 7, 13, 5]]

im = Image.open(src).convert("RGB")
# head + shoulders crop (photo is 1080x1080; face centred ~x565)
im = im.crop((255, 150, 875, 770))  # 620x620
small = im.resize((N, N), Image.Resampling.LANCZOS)

# --- background mask: flood fill from the border over light, low-saturation pixels
W = H = N
px = small.load()
def is_bg(p):
    r, g, b = p
    mx, mn = max(p), min(p)
    return (r + g + b) / 3 > 118 and (mx - mn) < 16
mask = [[False] * W for _ in range(H)]
q = deque([(x, 0) for x in range(W)] + [(x, y) for y in range(H) for x in (0, W - 1)])
while q:
    x, y = q.popleft()
    if not (0 <= x < W and 0 <= y < H) or mask[y][x] or not is_bg(px[x, y]):
        continue
    mask[y][x] = True
    q.extend([(x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)])

# --- tone: grayscale, levels stretched on subject pixels only, gamma lift for the dark jacket
gray = ImageOps.grayscale(small)
g = gray.load()
vals = sorted(g[x, y] for y in range(H) for x in range(W) if not mask[y][x])
lo, hi = vals[int(len(vals) * 0.03)], vals[int(len(vals) * 0.999)]
GAMMA = float(sys.argv[4]) if len(sys.argv) > 4 else 0.9

outimg = Image.new("RGBA", (W, H), (0, 0, 0, 0))
o = outimg.load()
for y in range(H):
    for x in range(W):
        if mask[y][x]:
            continue
        v = min(1.0, max(0.0, (g[x, y] - lo) / max(1, hi - lo))) ** GAMMA
        t = v * 4  # 0..4 across 5 levels
        base = int(t)
        frac = t - base
        thr = (BAYER4[y % 4][x % 4] + 0.5) / 16
        lvl = min(4, base + (1 if frac > thr else 0))
        o[x, y] = PAL[lvl] + (255,)

# --- 1px rim light on the silhouette edge (subject pixels touching background)
for y in range(H):
    for x in range(W):
        if mask[y][x]:
            continue
        edge = any(0 <= x + dx < W and 0 <= y + dy < H and mask[y + dy][x + dx] for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1)))
        if edge and o[x, y][:3] in (PAL[0], PAL[1]):
            o[x, y] = PAL[2] + (255,)

outimg.save(f"{out}/retrato-{N}.png", optimize=True)
# previews: x2/x3 nearest on tinta
for scale in ((2, 3) if PREVIEW else ()):
    big = outimg.resize((N * scale, N * scale), Image.Resampling.NEAREST)
    bg = Image.new("RGBA", big.size, PAL[0] + (255,))
    bg.alpha_composite(big)
    bg.save(f"{out}/preview-{N}-x{scale}.png")
print("ok", lo, hi, sum(r.count(True) for r in mask), "bg px")
