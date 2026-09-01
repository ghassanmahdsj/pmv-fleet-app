import type { CSSProperties, ReactNode } from "react";

export interface FieldProps {
  label?: string;
  hint?: string;
  error?: string;
  required?: boolean;
  htmlFor?: string;
  children: ReactNode;
  style?: CSSProperties;
}

/** Shared label / hint / error scaffold behind Input and Select. */
export function Field({ label, hint, error, required = false, htmlFor, children, style }: FieldProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)", ...style }}>
      {label && (
        <label
          htmlFor={htmlFor}
          style={{
            font: "var(--type-label)",
            letterSpacing: "var(--tracking-label)",
            textTransform: "uppercase",
            color: "var(--text-secondary)",
          }}
        >
          {label}
          {required && <span style={{ color: "var(--text-accent)", marginLeft: 4 }}>*</span>}
        </label>
      )}
      {children}
      {(error || hint) && (
        <span style={{ font: "var(--type-body-sm)", color: error ? "var(--mag-orange)" : "var(--text-tertiary)" }}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
