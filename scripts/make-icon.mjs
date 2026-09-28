import { deflateSync } from "node:zlib";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const outDir = join(root, "build");
mkdirSync(outDir, { recursive: true });
const out = join(outDir, "icon.png");

const S = 512;
const px = Buffer.alloc(S * S * 4);

function lerp(a, b, t) {
  return Math.round(a + (b - a) * t);
}

const cTop = [12, 99, 156];
const cBottom = [0, 122, 204];

function distToSeg(px_, py_, ax, ay, bx, by) {
  const dx = bx - ax, dy = by - ay;
  const len2 = dx * dx + dy * dy;
  let t = len2 ? ((px_ - ax) * dx + (py_ - ay) * dy) / len2 : 0;
  t = Math.max(0, Math.min(1, t));
  const cx = ax + t * dx, cy = ay + t * dy;
  return Math.hypot(px_ - cx, py_ - cy);
}

function inRoundedRect(x, y, r) {
  if (x < r || y < r || x > S - r || y > S - r) {
    const cx = Math.max(r, Math.min(S - r, x));
    const cy = Math.max(r, Math.min(S - r, y));
    return Math.hypot(x - cx, y - cy) <= r;
  }
  return true;
}

const R = 96;
const zTopY0 = 176, zTopY1 = 232;
const zBotY0 = 280, zBotY1 = 336;
const zX0 = 164, zX1 = 348;
const diagA = { x: 348, y: 232 };
const diagB = { x: 164, y: 280 };
const stroke = 26;

for (let y = 0; y < S; y++) {
  for (let x = 0; x < S; x++) {
    const i = (y * S + x) * 4;
    let inside = inRoundedRect(x, y, R);
    if (!inside) {
      px[i + 3] = 0;
      continue;
    }
    const t = (x + y) / (2 * S);
    const r = lerp(cTop[0], cBottom[0], t);
    const g = lerp(cTop[1], cBottom[1], t);
    const b = lerp(cTop[2], cBottom[2], t);
    const inZ =
      (x >= zX0 && x <= zX1 && y >= zTopY0 && y <= zTopY1) ||
      (x >= zX0 && x <= zX1 && y >= zBotY0 && y <= zBotY1) ||
      distToSeg(x, y, diagA.x, diagA.y, diagB.x, diagB.y) <= stroke;
    if (inZ) {
      px[i] = 255; px[i + 1] = 255; px[i + 2] = 255; px[i + 3] = 255;
    } else {
      px[i] = r; px[i + 1] = g; px[i + 2] = b; px[i + 3] = 255;
    }
  }
}

const CRCTable = Array(256).fill(0).map((_, n) => {
  let c = n;
  for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  return c >>> 0;
});
function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) c = CRCTable[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}
function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const t = Buffer.from(type, "ascii");
  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(crc32(Buffer.concat([t, data])));
  return Buffer.concat([len, t, data, crcBuf]);
}

const ihdr = Buffer.alloc(13);
ihdr.writeUInt32BE(S, 0);
ihdr.writeUInt32BE(S, 4);
ihdr[8] = 8;
ihdr[9] = 6;
const raw = Buffer.alloc(S * (S * 4 + 1));
for (let y = 0; y < S; y++) {
  raw[y * (S * 4 + 1)] = 0;
  px.copy(raw, y * (S * 4 + 1) + 1, y * S * 4, (y + 1) * S * 4);
}
const png = Buffer.concat([
  Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
  chunk("IHDR", ihdr),
  chunk("IDAT", deflateSync(raw, { level: 9 })),
  chunk("IEND", Buffer.alloc(0)),
]);
writeFileSync(out, png);
console.log("wrote", out, png.length, "bytes");