# Figma PoC — Frontend Code Generation

Time-boxed PoC to validate the architecture and workflow for using Figma as the source of truth for NXD frontend development.

**Spec:** [PoC — Figma Integration: Frontend Code Generation](https://nordicexperiencedesign.atlassian.net/wiki/spaces/NSME/pages/36405249)
**Timebox:** 04–06 Mar 2026
**Figma file ID:** `BlRu0kV5dk7Tu1ZJD9aWf5`
**Org:** NXD-Solutions/figma-poc

---

## Before you start

Read the Concerns section of the spec page. The two concerns — Figma/code version separation and the absence of tight GitHub integration — are known and accepted. You are not expected to solve them. You are expected to surface findings that inform how NXD addresses them in production.

The Figma MCP connector available via Claude.ai does **not** carry over to Claude Code. The MCP must be configured locally (see Setup below).

---

## Setup

### 1. Generate a Figma personal access token

1. Open Figma → click your avatar (top-left) → **Settings**
2. Go to **Security** → **Personal access tokens**
3. Click **Generate new token**
4. Give it a description (e.g. `Claude Code PoC`)
5. Grant the following scopes:

| Category | Scope | Required |
|---|---|---|
| **Files** | Read the contents of and render images from files | Yes |
| **Files** | Read metadata of files | Yes |
| **Files** | Read comments in accessible files | No |
| **Files** | Create, modify, and delete comments in accessible files | No |
| **Files** | Read version history of files | No |
| **Design systems** | Read data about individual components and styles | No — useful if inspecting a component library |
| **Development** | Read and list dev resources in accessible files | No |
| **Projects** | Read team project structure | No |
| **Webhooks** | Read and list webhooks | No |

6. Copy the token immediately — it is only shown once

### 2. Create your local `.env`

```bash
cp .env.example .env
# Then edit .env and replace your_token_here with the token from step 1
```

### 3. Configure Figma MCP in Claude Code

The `.claude/settings.json` in this repo already wires the Figma MCP using `FIGMA_API_KEY` from your environment. On Windows, set the variable in your shell before launching Claude Code:

```powershell
$env:FIGMA_API_KEY = "your_token_here"
claude  # start Claude Code from the same shell
```

### 4. Install dependencies and run

```bash
npm install
npm run dev
```

---

## Stack

- React 19 + Vite 6 + TypeScript
- Tailwind CSS v4
- Vitest + React Testing Library

---

## Git workflow

- Never commit directly to `main` — feature branch + PR
- Branch naming: `feature/<description>`, `fix/<description>`, `chore/<description>`

---

## Architecture decisions

Recorded here as they are made during the PoC. Each becomes a Decision Log entry.

| # | Question | Decision | Rationale |
|---|---|---|---|
| 1 | Design tokens pipeline | TBD | |
| 2 | Codegen vs manual React | TBD | |
| 3 | Figma MCP sufficiency | TBD | |
| 4 | Sync model | TBD | |
| 5 | Frontend framework | React/Vite (NXD standard) | No tooling reason to deviate found |
| 6 | Responsive strategy | TBD | |
| 7 | Figma/code governance | TBD | |
