# MAG PMV Fleet & Asset Lifecycle App — Design Spec

Source: Al Majal Alarabi Group (MAG) PMV Standard Operating Procedure (MAG/PMV/SOP/01), Section 7 (PMV Asset Operation) and Section 5 (Workshop Operation, VOR, Disposal).

Scope for this first pass: the fleet/asset lifecycle only — New Asset Induction, Vehicle Off Road (VOR), and Equipment/Vehicle Disposal. Workshop internal/external repair, purchase requisition (LOA), petty cash, and HR/manpower modules are out of scope for now.

## Visual language

- Flat surfaces, no gradients or drop shadows. Clean white/light-gray cards on a page background.
- Cards: white surface, 0.5px hairline border, 12px corner radius, ~16–20px padding.
- Metric tiles: light gray surface, 8px radius, 13px muted label above a 24px/medium-weight number.
- Typography: sentence case everywhere (no Title Case, no ALL CAPS). Two weights only — regular and medium (no bold/black). Card titles ~15px medium, body/table text 13px, muted captions 12px, metric numbers 24px.
- Status color meaning (use consistently across every screen):
  - Green (success): active, completed, approved, in stock
  - Amber (warning): in progress, repair underway, mid-review
  - Red (danger): VOR / awaiting parts / overdue / blocked
  - Blue (accent): the current step in a stepper/tracker, primary CTA button
  - Gray (neutral): draft, not started, informational
- Icons: simple outline icon set (clipboard, alert triangle, trash/scrap, car/vehicle, check, arrow).
- Buttons: outlined by default (secondary style); exactly one filled/accent button per screen for the primary action. Verb-first labels, sentence case, no exclamation marks ("Submit for approval", not "Submit!").
- Approval trackers / progress steppers: vertical list of circular step indicators connected by a thin line — filled green + checkmark for done steps, blue ring for the current step, empty outline for pending steps. Each step has a 13px label and a 12px status caption.

## Data model (for consistency across screens)

- **Asset**: ID (e.g. PMV-0876), MAG ID tag, type, site/location, status (Active / VOR / Disposal pending), last service date.
- **Asset request**: ID (AR-####), asset type requested, department, justification, estimated cost, current approval stage.
- **Job card**: ID (JC-####), linked asset, fault description, parts required (each with a status), linked purchase requisition, internal process stage.
- **Disposal case**: ID (DS-####), linked asset, initiated by/date, current stage, quotations (vendor, amount, pickup time), committee decision.

---

## Screen 1 — Fleet operations dashboard

Purpose: landing screen, one glance at lifecycle health plus what needs the viewer's approval.

Layout:
- Row of 4 metric tiles (equal width, wraps on narrow screens): "Open asset requests" (7), "Vehicles VOR" (12), "Disposal pending CEO" (3), "New assets this month" (4). Each tile has a small icon above the label.
- Below, two cards side by side:
  - Left, wider card "Recent activity": a plain list of 4 short activity lines, each with a relative timestamp on the right (e.g. "PMV-1042 marked VOR at site 2 — 2h ago").
  - Right card "Awaiting your approval": a list of 2 rows, each showing an item ID + short description, a caption for the current stage, and a "Review" button that opens that item's detail screen.

## Screen 2 — New asset request

Purpose: raise a new PMV asset request and track it through approval (matches the induction diagram: section head → director support services → committee → purchase order).

Layout: two columns.
- Left (wider), form card "New asset request":
  - Select: asset type
  - Select: department
  - Textarea: justification
  - Text input: estimated cost (SAR)
  - Two buttons at the bottom: "Save draft" (secondary) and "Submit for approval" (primary/accent)
- Right, "Approval progress" card: a 4-step vertical tracker —
  1. Section head approval (done)
  2. Director support approval (current)
  3. Committee selects vendor (pending)
  4. Purchase order issued (pending)

## Screen 3 — VOR board

Purpose: live list of vehicles currently off road, prioritized by how long they've been down.

Layout:
- 3 metric tiles: "Total VOR" (12), "Avg days down" (5.2), "Overdue 7+ days" (3, shown in red).
- Below, a row-based list (header row + data rows, not a bordered table): columns are Asset, Site, Days VOR, Status badge, and a "View" button.
  - Status badges use the color meanings above: "Awaiting parts" = red, "Repair in progress" = amber, "Marked VOR" = neutral gray.
  - Rows sorted with the most overdue asset first.

## Screen 4 — Job card detail

Purpose: drill-down from the VOR board into one job card's fault, parts, and internal workshop progress.

Layout:
- Header card: asset ID + type, job card ID, site, who opened it, plus two badges (current status, days VOR).
- Two columns below:
  - Left, "Fault & parts" card: fault description as a short paragraph; a small list of required parts, each with its own status badge (e.g. "Ordered, ETA 3 days" in amber, "In stock, released" in green); a footer line showing the linked purchase requisition ID and urgency.
  - Right, "Job card progress" card: a 6-step vertical tracker mirroring the internal workshop process — pre-inspection, job card opened, requisition raised, awaiting parts (current), final inspection & VOR lifted (pending). Two action buttons below it: "Escalate priority" and "Update ETA".

## Screen 5 — Asset register

Purpose: master list of every PMV asset; the source of truth other screens filter down from.

Layout:
- Top bar: search input (by asset ID or type), status filter dropdown, site filter dropdown.
- Row-based list, columns: Asset (ID + type), Site, Status badge, Last service date, MAG ID tag, "Open" button.
  - Status badges: Active = green, VOR = red or amber depending on severity, Disposal pending = neutral gray.

## Screen 6 — Disposal approval queue

Purpose: track every disposal case moving through the review-and-committee chain.

Layout: a vertical stack of case cards (not a dense table, since each case needs a visible current-stage badge). Each card shows:
- Asset ID + type, left-aligned
- Caption: who initiated it and how long ago
- Right-aligned: a stage badge (e.g. "Workshop technical review" = blue/accent, "Committee vs 3 quotes" = red, "CEO consent pending" = amber, "Sold, written off" = green) and a "Review" or "View" button.

## Screen 7 — Disposal case detail

Purpose: the committee-facing screen for one disposal case, showing the required 3 quotations and the full approval chain (matches the disposal diagram through to write-off).

Layout: header card with asset ID, MAG ID, initiator/date, and current stage badge. Two columns below:
- Left, "Case progress" card: a 6-step vertical tracker — workshop technical review, PMV manager recommendation, Group CEO consent, parked & 3 quotes sourced, committee decision (current), ownership transfer & write-off (pending).
- Right, "Quotations" card: 3 vendor quote rows, each showing vendor name, a short note (location/pickup time), and the amount in SAR. The highest bid is visually highlighted (accent-tinted border/background) as the recommended option. Below the quotes, a caption naming the committee ("Procurement, support services & finance directors") and two buttons: "Request more info" (secondary) and "Approve highest bid" (primary/accent).

---

## Notes for whoever builds this next

- All "status" language (VOR, disposal pending, etc.) and all approval-chain step names are taken directly from the SOP text, not invented — keep them verbatim so the app matches what staff already call things.
- The three trackers (asset request, job card, disposal case) are the same visual component reused with different step labels — build it once as a shared component.
- Dashboard counts, the VOR board, and the asset register should all read from the same underlying asset/job-card/disposal-case data rather than being separately maintained lists.
