import { useState } from "react";
import type { InputHTMLAttributes, ReactNode } from "react";
import { Field } from "./Field";

const FIELD_STYLE = {
  width: "100%",
  height: "var(--control-md)",
  padding: "0 var(--space-3)",
  font: "var(--type-body-md)",
  color: "var(--text-primary)",
  background: "var(--surface-page)",
  border: "var(--border-hairline) solid var(--border-default)",
  borderRadius: "var(--radius-xs)",
  outline: "none",
  transition: "var(--transition-control)",
} as const;

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  error?: string;
  iconStart?: ReactNode;
}

export function Input({ label, hint, error, required, iconStart, id, style, onFocus, onBlur, ...rest }: InputProps) {
  const [focus, setFocus] = useState(false);

  const inner = (
    <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
      {iconStart && (
        <span
          style={{
            position: "absolute",
            left: "var(--space-3)",
            display: "flex",
            color: "var(--text-tertiary)",
            pointerEvents: "none",
          }}
        >
          {iconStart}
        </span>
      )}
      <input
        id={id}
        onFocus={(e) => {
          setFocus(true);
          onFocus?.(e);
        }}
        onBlur={(e) => {
          setFocus(false);
          onBlur?.(e);
        }}
        style={{
          ...FIELD_STYLE,
          paddingLeft: iconStart ? "var(--space-10)" : undefined,
          borderColor: error ? "var(--mag-orange)" : focus ? "var(--border-accent)" : "var(--border-default)",
          boxShadow: focus ? "0 0 0 3px var(--focus-ring)" : "none",
          ...style,
        }}
        {...rest}
      />
    </div>
  );

  if (label == null && hint == null && error == null) return inner;
  return (
    <Field label={label} hint={hint} error={error} required={required} htmlFor={id}>
      {inner}
    </Field>
  );
}
