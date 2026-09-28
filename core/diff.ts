const MAX_LINES = 250;

const GREEN = "\x1b[32m";
const RED = "\x1b[31m";
const RESET = "\x1b[0m";

export function diffLines(oldText: string, newText: string): string {
  const a = oldText.split("\n");
  const b = newText.split("\n");
  const n = a.length;
  const m = b.length;

  const dp: number[][] = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      dp[i][j] = a[i] === b[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
    }
  }

  const out: string[] = [];
  let i = 0;
  let j = 0;
  let skipped = 0;
  while (i < n && j < m) {
    if (a[i] === b[j]) {
      i++;
      j++;
    } else if (dp[i + 1][j] >= dp[i][j + 1]) {
      out.push("- " + a[i++]);
    } else {
      out.push("+ " + b[j++]);
    }
  }
  while (i < n) out.push("- " + a[i++]);
  while (j < m) out.push("+ " + b[j++]);

  if (out.length > MAX_LINES) {
    skipped = out.length - MAX_LINES;
    out.length = MAX_LINES;
  }

  const color = Boolean(process.stdout.isTTY);
  const body = out
    .map((l) => {
      if (!color) return l;
      if (l.startsWith("+ ")) return GREEN + l + RESET;
      if (l.startsWith("- ")) return RED + l + RESET;
      return l;
    })
    .join("\n");

  const stats = { add: 0, del: 0 };
  for (const l of out) {
    if (l.startsWith("+ ")) stats.add++;
    else if (l.startsWith("- ")) stats.del++;
  }
  const footer = `\x1b[2m${stats.add} added, ${stats.del} removed${skipped ? `, ${skipped} more lines hidden` : ""}\x1b[0m`;
  const plainFooter = `${stats.add} added, ${stats.del} removed${skipped ? `, ${skipped} more lines hidden` : ""}`;

  return color ? body + "\n" + footer : body + "\n" + plainFooter;
}