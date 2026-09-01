import type { CSSProperties, ReactNode } from "react";

type Tone = "neutral" | "accent" | "info" | "success" | "inverse" | "solid";

const TONE: Record<Tone, { bg: string; fg: string; bd: string }> = {
  neutral: { bg: "var(--status-neutral-subtle)", fg: "var(--text-secondary)", bd: "var(--border-subtle)" },
  accent: { bg: "var(--status-attention-subtle)", fg: "#a8461a", bd: "var(--mag-orange-50)" },
  info: { bg: "var(--status-info-subtle)", fg: "var(--status-info)", bd: "var(--mag-sky-75)" },
  success: { bg: "var(--status-success-subtle)", fg: "var(--status-success)", bd: "var(--mag-sage-75)" },
  inverse: { bg: "var(--surface-inverse)", fg: "var(--text-inverse)", bd: "transparent" },
  solid: { bg: "var(--surface-accent)", fg: "var(--text-on-accent)", bd: "transparent" },
};

export interface BadgeProps {
  tone?: Tone;
  children: ReactNode;
  style?: CSSProperties;
}

export function Badge({ tone = "neutral", children, style }: BadgeProps) {
  const t = TONE[tone] ?? TONE.neutral;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--space-1)",
        height: "20px",
        padding: "0 var(--space-2)",
        font: "var(--type-label)",
        fontWeight: "var(--weight-semibold)",
        letterSpacing: "var(--tracking-label)",
        textTransform: "uppercase",
        color: t.fg,
        background: t.bg,
        border: `var(--border-hairline) solid ${t.bd}`,
        borderRadius: "var(--radius-xs)",
        ...style,
      }}
    >
      {children}
    </span>
  );
}
