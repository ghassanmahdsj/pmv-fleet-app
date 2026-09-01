import { Icon } from "./Icon";
import "./ApprovalTracker.css";

export type ApprovalStepStatus = "done" | "current" | "pending";

export interface ApprovalStep {
  label: string;
  caption: string;
  status: ApprovalStepStatus;
}

export interface ApprovalTrackerProps {
  steps: ApprovalStep[];
}

/**
 * Vertical step tracker reused across the asset request, job card, and
 * disposal case screens (same component, different step labels — see spec).
 */
export function ApprovalTracker({ steps }: ApprovalTrackerProps) {
  return (
    <div className="approval-tracker">
      {steps.map((step, i) => {
        const isLast = i === steps.length - 1;
        return (
          <div className="approval-tracker__row" key={step.label}>
            <div className="approval-tracker__rail">
              <span className={`approval-tracker__node approval-tracker__node--${step.status}`}>
                {step.status === "done" && <Icon name="check" size={12} style={{ color: "#fff" }} />}
              </span>
              {!isLast && <span className="approval-tracker__line" />}
            </div>
            <div className="approval-tracker__body">
              <div
                className="approval-tracker__label"
                style={{ color: step.status === "pending" ? "var(--text-tertiary)" : "var(--text-primary)" }}
              >
                {step.label}
              </div>
              <div
                className="approval-tracker__caption"
                style={{ color: step.status === "current" ? "var(--text-accent)" : "var(--text-tertiary)" }}
              >
                {step.caption}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
