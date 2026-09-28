import { copyFileSync, cpSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const src = join(root, "ide", "renderer");
const out = join(root, "dist", "ide", "renderer");

for (const f of ["index.html", "styles.css", "renderer.js"]) {
  mkdirSync(dirname(join(out, f)), { recursive: true });
  copyFileSync(join(src, f), join(out, f));
}
cpSync(join(src, "vendor"), join(out, "vendor"), { recursive: true });
console.log("copied renderer assets to dist/ide/renderer");