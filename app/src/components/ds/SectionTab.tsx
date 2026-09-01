import type { CSSProperties, ReactNode } from "react";

export interface SectionTabProps {
  number?: string;
  children: ReactNode;
  tone?: "accent" | "inverse";
  trail?: number | string;
  style?: CSSProperties;
}

/**
 * MAG's signature graphic device: an open orange pill whose baseline runs on
 * past the label. Appears at the top of every guideline page.
 */
export function SectionTab({ number, children, tone = "accent", trail = 64, style }: SectionTabProps) {
  const line = tone === "inverse" ? "var(--mag-white)" : "var(--border-accent)";
  const text = tone === "inverse" ? "var(--mag-white)" : "var(--text-secondary)";
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--space-2)",
        position: "relative",
        font: "var(--type-label)",
        letterSpacing: "var(--tracking-tab)",
        textTransform: "uppercase",
        color: text,
        padding: "var(--space-2) var(--space-4)",
        border: `var(--border-hairline) solid ${line}`,
        borderRight: 0,
        borderRadius: "var(--radius-pill) 0 0 var(--radius-pill)",
        ...style,
      }}
    >
      {number != null && <span style={{ color: text }}>{number}</span>}
      {number != null && <span style={{ opacity: 0.6 }}>.</span>}
      <span>{children}</span>
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "100%",
          bottom: -1,
          width: trail,
          borderBottom: `var(--border-hairline) solid ${line}`,
        }}
      />
    </span>
  );
}
