# mgmt-concept

A job-facing reference on leadership, management, and the technique for translating
high-level direction into owned, funded, measurable work.

The content is published as a VitePress site under `docs/`.

## Read it

```bash
npm install
npm run docs:dev
```

Open the local URL that VitePress prints.

## Build and preview

```bash
npm run docs:build
npm run docs:preview
```

## Run with Docker

```bash
docker compose up -d --build
```

Open `http://localhost:3300`. The container serves the production build and restarts
automatically (`unless-stopped`). Re-run the same command after content changes.

## Content map

- `docs/index.md` — site home and situation-based cookbook index.
- `docs/strategy-to-action/` — the reference set, starting at its
  [hub page](docs/strategy-to-action/index.md).
- `AGENTS.md` — conventions for AI agents working in this repo.

## Editing rules

Do not fabricate citations, page numbers, quotes, targets, owners, or dates. Tag claims
with `[FACT]`, `[INFERENCE]`, `[ASSUMPTION]`, `[VERIFY]`, or `[DESIGN]`. See
[`AGENTS.md`](AGENTS.md) for the full contract.
