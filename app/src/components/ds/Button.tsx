import { useState } from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const HEIGHT: Record<Size, string> = {
  sm: "var(--control-sm)",
  md: "var(--control-md)",
  lg: "var(--control-lg)",
};
const PAD: Record<Size, string> = {
  sm: "0 var(--space-4)",
  md: "0 var(--space-6)",
  lg: "0 var(--space-8)",
};
const FONT: Record<Size, string> = {
  sm: "var(--text-label)",
  md: "var(--text-body-sm)",
  lg: "var(--text-body-md)",
};

const TONE: Record<Variant, { background: string; color: string; border: string; hover: string; press: string }> = {
  primary: {
    background: "var(--interactive-accent)",
    color: "var(--text-on-accent)",
    border: "1px solid transparent",
    hover: "var(--interactive-accent-hover)",
    press: "var(--interactive-accent-press)",
  },
  secondary: {
    background: "var(--interactive-inverse)",
    color: "var(--text-inverse)",
    border: "1px solid transparent",
    hover: "var(--interactive-inverse-hover)",
    press: "var(--interactive-inverse-press)",
  },
  outline: {
    background: "transparent",
    color: "var(--text-primary)",
    border: "1px solid var(--border-inverse)",
    hover: "var(--interactive-ghost-hover)",
    press: "var(--interactive-ghost-press)",
  },
  ghost: {
    background: "transparent",
    color: "var(--text-primary)",
    border: "1px solid transparent",
    hover: "var(--interactive-ghost-hover)",
    press: "var(--interactive-ghost-press)",
  },
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
  fullWidth?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  iconStart,
  iconEnd,
  fullWidth = false,
  disabled = false,
  type = "button",
  children,
  style,
  ...rest
}: ButtonProps) {
  const t = TONE[variant] ?? TONE.primary;
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);
  const bg = disabled ? "var(--surface-muted)" : press ? t.press : hover ? t.hover : t.background;

  return (
    <button
      type={type}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        setPress(false);
      }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      style={{
        display: fullWidth ? "flex" : "inline-flex",
        width: fullWidth ? "100%" : undefined,
        alignItems: "center",
        justifyContent: "center",
        gap: "var(--space-2)",
        height: HEIGHT[size],
        padding: PAD[size],
        fontFamily: "var(--font-body)",
        fontSize: FONT[size],
        fontWeight: "var(--weight-semibold)",
        letterSpacing: "var(--tracking-label)",
        textTransform: "uppercase",
        color: disabled ? "var(--text-disabled)" : t.color,
        background: bg,
        border: disabled ? "1px solid transparent" : t.border,
        borderRadius: "var(--radius-xs)",
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "var(--transition-control)",
        ...style,
      }}
      {...rest}
    >
      {iconStart}
      <span>{children}</span>
      {iconEnd}
    </button>
  );
}
