import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join, relative, resolve } from "node:path";

// The ZimLink IDE's own install/dev directory. Never shown in the sidebar.
function detectAppRoot(): string {
  let dir = fileURLToPath(new URL(".", import.meta.url));
  for (let i = 0; i < 10; i++) {
    if (existsSync(join(dir, "package.json"))) return resolve(dir);
    const parent = resolve(dir, "..");
    if (parent === dir) break;
    dir = parent;
  }
  return resolve(dir);
}
const APP_ROOT = detectAppRoot();
const APP_ROOT_L = APP_ROOT.toLowerCase();

const SKIP_DIRS = new Set([
  ".git",
  "node_modules",
  "dist",
  "build",
  "out",
  "release",
  ".next",
  ".nuxt",
  ".cache",
  ".vscode",
  ".vscode-server",
  ".idea",
  ".history",
  ".settings",
  ".venv",
  "venv",
  "__pycache__",
  ".pytest_cache",
  ".mypy_cache",
  ".ruff_cache",
  ".sass-cache",
  ".parcel-cache",
  ".turbo",
  ".gradle",
  ".terraform",
  "coverage",
  "target",
  "vendor",
  "logs",
  "log",
  "tmp",
  "temp",
]);

// Project scaffolding / config / lock files that clutter the sidebar tree.
const SKIP_FILES = new Set([
  "package.json",
  "package-lock.json",
  "yarn.lock",
  "pnpm-lock.yaml",
  "tsconfig.json",
  "jsconfig.json",
  ".gitignore",
  ".gitattributes",
  ".DS_Store",
  "Thumbs.db",
  "desktop.ini",
]);

export function readFile(path: string): string | null {
  try {
    return readFileSync(path, "utf8");
  } catch {
    return null;
  }
}

export function isIdeRoot(p: string): boolean {
  return resolve(p).toLowerCase() === APP_ROOT_L;
}

export function listTree(root: string): string[] {
  const out: string[] = [];
  const norm = (p: string) => resolve(p).toLowerCase();
  const isIdeRoot = norm(root) === APP_ROOT_L;
  const walk = (dir: string) => {
    let entries;
    try {
      entries = readdirSync(dir, { withFileTypes: true });
    } catch {
      return;
    }
    entries.sort((a, b) => {
      if (a.isDirectory() !== b.isDirectory()) return a.isDirectory() ? -1 : 1;
      return a.name.localeCompare(b.name);
    });
    for (const e of entries) {
      if (e.name === ".git") continue;
      const p = join(dir, e.name);
      const rel = relative(root, p);
      if (e.isDirectory()) {
        if (SKIP_DIRS.has(e.name)) continue;
        if (norm(p) === APP_ROOT_L) continue;
        out.push(rel + "/");
        walk(p);
      } else {
        if (SKIP_FILES.has(e.name) || looksUnnecessary(e.name)) continue;
        out.push(rel);
      }
    }
  };
  if (!isIdeRoot) walk(root);
  return out;
}

// Transient / tool-generated files that just clutter the sidebar tree.
function looksUnnecessary(name: string): boolean {
  if (name.startsWith(".env")) return true;
  if (/^npm-debug\.log/.test(name)) return true;
  if (/\.(log|tmp|temp|tsbuildinfo|cache|bak|orig)$/i.test(name)) return true;
  if (/^\.eslintcache$|^\.stylelintcache$|^\.prettiercache$/.test(name)) return true;
  if (name.endsWith("~") || name.endsWith(".swp")) return true;
  return false;
}

export function writeFile(path: string, content: string): void {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, content, "utf8");
}

function dirname(path: string): string {
  const i = path.lastIndexOf("/");
  const j = path.lastIndexOf("\\");
  return path.slice(0, Math.max(i, j));
}