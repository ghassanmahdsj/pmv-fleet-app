import { useMemo, useState } from "react";
import { SectionTab } from "../../components/ds/SectionTab";
import { Badge } from "../../components/ds/Badge";
import { Select } from "../../components/ds/Select";
import { Field } from "../../components/ds/Field";
import { Input } from "../../components/ds/Input";
import { Button } from "../../components/ds/Button";
import { ApprovalTracker, type ApprovalStep } from "../../components/ds/ApprovalTracker";
import { formatRelativeTime } from "../../lib/formatRelativeTime";
import { saveAssetRequestDraft, submitAssetRequest } from "./api";
import type { AssetRequestSummary, NewAssetRequestFormData } from "./types";
import "./NewAssetRequestPage.css";

const ASSET_TYPE_OPTIONS = [
  { value: "", label: "Select asset type" },
  { value: "crane", label: "Mobile crane" },
  { value: "tipper", label: "Tipper truck" },
  { value: "loader", label: "Wheel loader" },
  { value: "bus", label: "Staff bus" },
  { value: "genset", label: "Generator set" },
];

const DEPARTMENT_OPTIONS = [
  { value: "", label: "Select department" },
  { value: "pmv", label: "PMV — plant, machinery & vehicles" },
  { value: "ops", label: "Operations — Site 2" },
  { value: "fm", label: "Facilities management" },
  { value: "logistics", label: "Logistics" },
];

const APPROVAL_STEPS: ApprovalStep[] = [
  { label: "Section head approval", caption: "Approved 28 Aug 2026", status: "done" },
  { label: "Director support approval", caption: "Current step — with A. Nasser", status: "current" },
  { label: "Committee selects vendor", caption: "Pending", status: "pending" },
  { label: "Purchase order issued", caption: "Pending", status: "pending" },
];

const REQUEST_SUMMARY: AssetRequestSummary = {
  id: "AR-0142",
  status: "in_review",
  raisedBy: "M. Haddad — PMV workshop, Site 2",
  raisedOn: "27 Aug 2026",
};

const EMPTY_FORM: NewAssetRequestFormData = {
  assetType: "",
  department: "",
  justification: "",
  estimatedCostSar: "",
  requiredBy: "",
};

export function NewAssetRequestPage() {
  const [form, setForm] = useState<NewAssetRequestFormData>(EMPTY_FORM);
  const [lastSavedAt, setLastSavedAt] = useState<Date | null>(null);
  const [isSavingDraft, setIsSavingDraft] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isComplete = useMemo(
    () =>
      form.assetType !== "" &&
      form.department !== "" &&
      form.justification.trim() !== "" &&
      form.estimatedCostSar.trim() !== "",
    [form],
  );

  function updateField<K extends keyof NewAssetRequestFormData>(key: K, value: NewAssetRequestFormData[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSaveDraft() {
    setIsSavingDraft(true);
    try {
      const { savedAt } = await saveAssetRequestDraft(form);
      setLastSavedAt(new Date(savedAt));
    } finally {
      setIsSavingDraft(false);
    }
  }

  async function handleSubmit() {
    setIsSubmitting(true);
    try {
      await submitAssetRequest(form);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="asset-request-page">
      <header className="asset-request-page__header">
        <div className="asset-request-page__heading">
          <SectionTab number="02" trail="clamp(40px, 30vw, 120px)">
            Asset induction
          </SectionTab>
          <h1 className="asset-request-page__title">New asset request</h1>
          <p className="asset-request-page__lede">
            Raise a request for a new PMV asset. The request follows the induction chain from section head through
            to purchase order.
          </p>
        </div>
        <div className="asset-request-page__meta">
          <span className="asset-request-page__meta-label">Request</span>
          <span className="asset-request-page__meta-id">{REQUEST_SUMMARY.id}</span>
          <Badge tone="accent">In review</Badge>
        </div>
      </header>

      <div className="asset-request-page__body">
        <section className="asset-request-card asset-request-card--accent">
          <h2 className="asset-request-card__title">Request details</h2>
          <p className="asset-request-card__subtitle">All fields are required before submission.</p>

          <div className="asset-request-form__row">
            <Select
              id="asset-type"
              label="Asset type"
              required
              options={ASSET_TYPE_OPTIONS}
              value={form.assetType}
              onChange={(e) => updateField("assetType", e.target.value)}
            />
            <Select
              id="department"
              label="Department"
              required
              options={DEPARTMENT_OPTIONS}
              value={form.department}
              onChange={(e) => updateField("department", e.target.value)}
            />
          </div>

          <div className="asset-request-form__field">
            <Field
              label="Justification"
              required
              htmlFor="justification"
              hint="Reference the site, the operation it supports, and why existing assets cannot cover it."
            >
              <textarea
                id="justification"
                rows={5}
                className="asset-request-textarea"
                placeholder="Site 2 crane fleet cannot cover the Q4 lifting schedule; two units are VOR awaiting parts."
                value={form.justification}
                onChange={(e) => updateField("justification", e.target.value)}
              />
            </Field>
          </div>

          <div className="asset-request-form__row">
            <Input
              id="estimated-cost"
              label="Estimated cost (SAR)"
              required
              placeholder="185,000"
              value={form.estimatedCostSar}
              onChange={(e) => updateField("estimatedCostSar", e.target.value)}
            />
            <div className="asset-request-field--desktop-only">
              <Input
                id="required-by"
                label="Required by"
                placeholder="15 Oct 2026"
                value={form.requiredBy}
                onChange={(e) => updateField("requiredBy", e.target.value)}
              />
            </div>
          </div>

          <div className="asset-request-form__footer">
            <span className="asset-request-form__footer-caption">
              {lastSavedAt ? `Draft saved ${formatRelativeTime(lastSavedAt)}` : "Not yet saved"}
            </span>
            <div className="asset-request-form__actions">
              <Button variant="outline" onClick={handleSaveDraft} disabled={isSavingDraft}>
                {isSavingDraft ? "Saving…" : "Save draft"}
              </Button>
              <Button variant="primary" onClick={handleSubmit} disabled={!isComplete || isSubmitting}>
                {isSubmitting ? "Submitting…" : "Submit for approval"}
              </Button>
            </div>
          </div>
        </section>

        <section className="asset-request-card">
          <h2 className="asset-request-card__title" style={{ marginBottom: 28 }}>
            Approval progress
          </h2>
          <ApprovalTracker steps={APPROVAL_STEPS} />

          <div className="asset-request-page__raised-by">
            <span className="asset-request-page__meta-label">Raised by</span>
            <span className="asset-request-page__raised-by-name">{REQUEST_SUMMARY.raisedBy}</span>
            <span className="asset-request-page__raised-by-date">{REQUEST_SUMMARY.raisedOn}</span>
          </div>
        </section>
      </div>
    </div>
  );
}
