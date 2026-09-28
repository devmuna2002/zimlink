# Neox AI

An AI coding assistant: a CLI that plans and writes code from natural language,
plus a cross-platform desktop IDE (Windows / macOS) built on Electron + Monaco.

Describe what you want to build or change in natural language, and Neox AI plans
the work, writes the code (in any language), shows you diffs, and lets you keep
iterating conversationally - just like working with a junior engineer who really
likes reading the spec.

## Features

- **Natural-language tasks**: `neox "write a python REST API with a health endpoint"`
- **Desktop IDE** (`npm run app`): file explorer, Monaco editor, and an AI agent
  panel with live diffs and per-change Apply/Skip controls
- **Any language / any repo**: the model sees the existing repo file tree and writes
  files to match its conventions
- **Live diffs**: every proposed file shows a before/after diff before being written
- **Follow-up loop**: keep chatting after the first pass ("add tests", "make it faster")
- **Zero runtime deps beyond the OpenAI SDK**

## Install

```bash
npm install
npm run build
npm rebuild electron && node node_modules/electron/install.js   # fetch the Electron binary
npm link                                                         # makes `neox` available on your PATH
```

Requires Node 18+ and an [OpenAI API key](https://platform.openai.com/api-keys).

## Setup

```bash
cp .env.example .env   # then put your key in .env
# or
export OPENAI_API_KEY=sk-...
```

## Usage

```bash
neox "describe your task here" [options]

# Examples
neox "write a flask REST API with a health endpoint"
neox "add dark mode to my react app" --dir ./web --model gpt-4o
echo "create a node cli tool" | neox --yes
neox                        # interactive prompt
```

## Desktop IDE

```bash
npm run app
```

The IDE opens the current folder (or use **Open Folder**). It follows the
familiar VS Code arrangement:

- **Activity bar** (far left) - switches the sidebar between **Explorer**,
  **Agent**, and **Settings**.
- **Terminal sign-in** - on first launch a terminal-styled page asks you to
  **create an account** or **sign in** (an optional API key can be set there).
  The local profile persists across runs; use **Settings → Account** to edit it
  or sign out.
- **Dark / light theme** - toggle from **Settings → Theme**, the command palette,
  or `Ctrl/Cmd+Shift+T`; your choice is remembered.
- **Explorer** - a file tree plus an **OPEN EDITORS** list; create files with
  the `+` button and collapse folders with `⤒`.
- **Editor** - multiple files open as **tabs** (switch with click, `Ctrl+Tab`,
  close with `Ctrl+W` or middle-click; big dot marks unsaved changes), with a
  breadcrumb bar showing the file path. Monaco syntax highlighting per file
  type, save with `Ctrl/Cmd+S`.
- **Agent** - type a task and press Enter. Neox AI plans, generates, and streams
  diffs into the panel. With **Auto-apply** on, changes are written immediately;
  with it off, review each diff and click **Apply** or **Skip**. Keep typing
  follow-up requests in the same conversation. **Stop** cancels the run.
- **Status bar** (bottom) - working folder, open tab count, model, and agent
  state.

Set `OPENAI_API_KEY` in `.env` (or your environment) before starting the IDE;
the status bar shows whether a key was found. You can also paste a key when
creating your account on the sign-in page.

### Options

| Option          | Description                                              |
| --------------- | -------------------------------------------------------- |
| `--model <name>`| OpenAI model to use (default: `gpt-4o-mini` / `$OPENAI_MODEL`) |
| `--dir <path>`  | Target working directory (default: current directory)    |
| `--yes`         | Apply changes without per-file confirmation              |
| `-q, --quiet`   | Hide diffs, show only confirmations                      |
| `-v, --version` | Print version                                            |
| `-h, --help`    | Show help                                                |

After the first round of changes you can keep typing follow-up requests ("add
input validation", "write tests") or press Enter to finish.

## How it works

1. **Plan** - the model reads the repo tree and returns a JSON list of files to
   create/edit.
2. **Generate** - each file's complete final content is produced in its own call,
   with existing file contents fed back for edits.
3. **Review** - every change is diffed and confirmed before it is written.
4. **Iterate** - a chat loop lets you refine until it's right.

Both the CLI and the IDE drive the same event-driven `Engine`
(`core/engine.ts`), so behavior is identical whichever surface you use.

## Safety

- File paths are validated to stay inside the target directory; `.git` is off-limits.
- Nothing is written until you approve it (unless you pass `--yes` or tick
  Auto-apply in the IDE).

## Project layout

```
core/        shared, framework-agnostic engine (used by both surfaces)
  engine.ts  event-driven plan → generate → approve → write loop
  config.ts  env / model / directory configuration
  openai.ts  OpenAI streaming client + JSON extraction
  files.ts   safe file I/O and repo tree listing
  diff.ts    line-level diff rendering for the console
cli/         command-line surface
  main.ts    argument parsing, stdin/tty prompt, entry point
  agent.ts   console adapter for the Engine (output + prompts)
ide/         desktop IDE surface (Electron)
  main.ts    main process (windows, IPC, hosts the Engine)
  preload.ts contextBridge API surface
  renderer/  file tree, Monaco editor, agent console, palette
  index.html IDE layout · styles.css · renderer.js
scripts/
  copy-renderer.mjs  copies IDE static assets into dist/ide/renderer
```

Both surfaces are built by a single `tsc` compile (`npm run build`) into `dist/`.