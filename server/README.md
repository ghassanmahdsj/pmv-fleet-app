# PMV Fleet — database

Database for the MAG PMV Fleet & Asset Lifecycle app's asset process: the
asset register, new asset requests + approval, VOR job cards, and disposal
cases. Scope matches `project/uploads/MAG_PMV_Fleet_App_Design_Spec.md` —
purchase requisition (LOA), petty cash and HR/manpower are out of scope.

Stack: PostgreSQL + [Prisma](https://www.prisma.io/) (schema, migrations,
typed client). No API layer yet — this is the data layer the future asset
service (see `app/README.md`) will sit on top of.

## Schema

`prisma/schema.prisma` models:

- **Lookups**: `Department`, `Site`, `User`
- **Asset** — the register (Screen 5): status, site, MAG ID tag, last
  service date
- **AssetRequest** + `AssetRequestStep` — new asset request (Screen 2) and
  its 4-step approval tracker (section head → director support → committee
  → purchase order)
- **JobCard** + `JobCardPart` + `JobCardStep` — VOR board and job card
  detail (Screens 3–4), with its 6-step workshop tracker
- **DisposalCase** + `DisposalQuotation` + `DisposalCaseStep` — disposal
  queue and case detail (Screens 6–7), with the 3 required quotations and
  6-step committee tracker
- **ActivityLogEntry** — feeds the dashboard's recent-activity list
  (Screen 1); loosely references whichever entity the activity is about

Each of the three approval trackers (asset request, job card, disposal
case) is its own table sharing the same shape (`stepOrder`, `name`,
`status`, `actedBy`, `actedAt`, `note`) — same component in the UI, but
kept as separate tables here since Prisma/Postgres don't do polymorphic
foreign keys cleanly.

Human-readable IDs (`PMV-0876`, `AR-0142`, `JC-0231`, `DS-0053`) are stored
as a unique `code` string alongside the normal auto-increment primary key.

## Setup

```bash
cp .env.example .env   # point DATABASE_URL at your Postgres instance
npm install
npm run db:migrate     # create the DB schema
npm run db:seed        # load sample data (assets, one request, two job cards, one disposal case)
```

Other scripts: `npm run db:studio` (Prisma Studio, a data browser),
`npm run db:reset` (drop + re-migrate + re-seed), `npm run db:deploy`
(apply migrations without prompting — for CI/production).
