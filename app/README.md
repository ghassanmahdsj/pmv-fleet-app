# PMV Fleet — New Asset Request

Frontend implementation of the "New asset request" screen from the MAG PMV
Fleet & Asset Lifecycle app, built from the Claude Design handoff bundle at
the repo root (`README.md`, `chats/`, `project/`).

Stack: React + TypeScript + Vite. No API layer yet — see `../server/` for
the database (PostgreSQL + Prisma) that backs the asset process, and the
repo-root conversation for the planned wider architecture (a separate API
service owning the app's data plus an integration façade to Oracle Asset
Management and the GPS/telematics provider).

## Layout

- `src/components/ds/` — MAG design system primitives (Button, Badge,
  Select, Input, Field, Icon, SectionTab, ApprovalTracker), ported from the
  design bundle's `_ds_bundle.js` into typed React components.
- `src/features/asset-request/` — the screen itself: `NewAssetRequestPage`,
  its data types, and `api.ts` (a stubbed service layer — swap its bodies
  for real HTTP calls once the backend exists; callers only depend on the
  function signatures).
- `src/styles/tokens/` — MAG's design tokens (colors, type, spacing, shape,
  motion), copied verbatim from the design bundle.

## Development

```bash
npm install
npm run dev      # start the dev server
npm run build    # typecheck + production build
npm run lint      # oxlint
```
