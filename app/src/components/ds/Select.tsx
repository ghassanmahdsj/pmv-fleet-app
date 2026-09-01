import { useState } from "react";
import type { SelectHTMLAttributes } from "react";
import { Field } from "./Field";
import { Icon } from "./Icon";

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

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "children"> {
  label?: string;
  hint?: string;
  error?: string;
  options: SelectOption[];
}

export function Select({ label, hint, error, required, options, id, style, onFocus, onBlur, ...rest }: SelectProps) {
  const [focus, setFocus] = useState(false);

  const inner = (
    <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
      <select
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
          appearance: "none",
          paddingRight: "var(--space-10)",
          borderColor: error ? "var(--mag-orange)" : focus ? "var(--border-accent)" : "var(--border-default)",
          boxShadow: focus ? "0 0 0 3px var(--focus-ring)" : "none",
          ...style,
        }}
        {...rest}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      <span
        style={{
          position: "absolute",
          right: "var(--space-3)",
          display: "flex",
          color: "var(--text-secondary)",
          pointerEvents: "none",
        }}
      >
        <Icon name="chevron-down" size={16} />
      </span>
    </div>
  );

  if (label == null && hint == null && error == null) return inner;
  return (
    <Field label={label} hint={hint} error={error} required={required} htmlFor={id}>
      {inner}
    </Field>
  );
}
