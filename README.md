# Toolz

**12 Tools. 90 Days. Built in Public.**

Toolz is a free open-source suite of practical web tools for students, developers, freelancers, and creators.

Toolz works without login, without paid APIs, and without required backend.

## Philosophy

- Free by default
- Open-source from day one
- Local-first
- No required login
- No required paid APIs
- Built in public
- One tool every week

## Tools

| Tool | Status | Path |
|---|---|---|
| TaskFlow | Building | /tools/taskflow |
| LinkBoard | Planned | /tools/linkboard |
| Briefly | Planned | /tools/briefly |
| FormPilot | Planned | /tools/formpilot |
| EventFlow | Planned | /tools/eventflow |
| KanbanFlow Lite | Planned | /tools/kanbanflow |
| StudyPlanner | Planned | /tools/studyplanner |
| CV Forge | Planned | /tools/cvforge |
| InvoiceMini | Planned | /tools/invoicemini |
| PromptVault | Planned | /tools/promptvault |
| ReadmeBuilder | Planned | /tools/readmebuilder |
| MiniCRM | Planned | /tools/minicrm |
| LaunchKit | Planned | /tools/launchkit |

## Stack

React + TypeScript + Vite + Tailwind CSS v4, deployed on Cloudflare Pages (backup: GitHub Pages).
Storage is local-first (`localStorage`, key pattern `toolz.<tool>.data`). Supabase sync and
Cloudflare Workers/D1 are optional, added per-tool only in Phase 2.

## Develop

```bash
cd apps/web
npm install
npm run dev
```

## License

MIT — see [LICENSE](./LICENSE).
