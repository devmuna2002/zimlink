#!/usr/bin/env node
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { createInterface } from "node:readline";
import { loadConfig } from "../core/config.js";
import { Agent } from "./agent.js";

const HELP = `ZimLink - AI coding assistant CLI

USAGE
  zimlink [task] [options]

  task      Describe what to build or change in natural language.
            If omitted, reads from stdin or prompts interactively.

OPTIONS
  --model <name>   OpenAI model to use (default: gpt-4o-mini or $OPENAI_MODEL)
  --dir <path>     Target working directory (default: current directory)
  --yes            Apply file changes without asking for confirmation
  -q, --quiet      Don't print diffs, only confirmations
  -v, --version    Print version
  -h, --help       Show this help

ENVIRONMENT
  OPENAI_API_KEY   Required. Set it in your shell or in a .env file.

EXAMPLES
  zimlink "write a python flask REST API with a health endpoint"
  zimlink "add dark mode to my react app" --dir ./web --model gpt-4o
  echo "create a node cli tool" | zimlink --yes
`;

interface Args {
  task?: string;
  model?: string;
  dir?: string;
  yes: boolean;
  quiet: boolean;
}

function getVersion(): string {
  const url = new URL("../../package.json", import.meta.url);
  return JSON.parse(readFileSync(url, "utf8")).version;
}

function parseArgs(argv: string[]): Args {
  const args: Args = { yes: false, quiet: false };
  const positionals: string[] = [];
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    switch (a) {
      case "-h":
      case "--help":
        console.log(HELP);
        process.exit(0);
      case "-v":
      case "--version":
        console.log(getVersion());
        process.exit(0);
      case "--yes":
        args.yes = true;
        break;
      case "-q":
      case "--quiet":
        args.quiet = true;
        break;
      case "--model":
        args.model = argv[++i];
        if (!args.model) fail("--model requires a value");
        break;
      case "--dir":
        args.dir = argv[++i];
        if (!args.dir) fail("--dir requires a value");
        break;
      default:
        if (a.startsWith("--model=")) args.model = a.slice(8);
        else if (a.startsWith("--dir=")) args.dir = a.slice(6);
        else if (a.startsWith("-")) fail(`Unknown option: ${a}`);
        else positionals.push(a);
    }
  }
  args.task = positionals.join(" ");
  return args;
}

function fail(msg: string): never {
  console.error(msg);
  process.exit(2);
}

async function readStdin(): Promise<string> {
  const chunks: Buffer[] = [];
  for await (const chunk of process.stdin) chunks.push(Buffer.from(chunk));
  return Buffer.concat(chunks).toString("utf8").trim();
}

function promptLine(prompt: string): Promise<string> {
  const rl = createInterface({ input: process.stdin, output: process.stdout });
  return new Promise((resolve) =>
    rl.question(prompt, (answer) => {
      rl.close();
      resolve(answer);
    })
  );
}

async function main(): Promise<void> {
  const args = parseArgs(process.argv.slice(2));

  let task = args.task;
  if (!task) {
    if (process.stdin.isTTY) {
      task = await promptLine("ZimLink: what should I build or change? ");
    } else {
      task = await readStdin();
    }
  }
  task = (task ?? "").trim();
  if (!task) {
    console.error("No task given. Run `zimlink --help` for usage.");
    process.exit(2);
  }

  const config = loadConfig({ model: args.model, cwd: args.dir });
  const cwd = resolve(config.cwd);

  console.log(
    `\x1b[2mZimLink v${getVersion()} · model ${config.model} · dir ${cwd}\x1b[0m`
  );

  const agent = new Agent(
    { apiKey: config.apiKey, model: config.model, cwd, baseUrl: config.baseUrl },
    task,
    { yes: args.yes, quiet: args.quiet }
  );
  await agent.run();
}

main().catch((err) => {
  console.error(`\nZimLink error: ${err?.message ?? err}`);
  process.exit(1);
});