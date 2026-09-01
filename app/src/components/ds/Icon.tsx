import type { CSSProperties } from "react";

const CDN = "https://cdn.jsdelivr.net/npm/lucide-static@0.460.0/icons/";

export interface IconProps {
  name?: string;
  size?: number;
  label?: string;
  style?: CSSProperties;
}

/**
 * MAG's brand guidelines define no icon set; Lucide stands in as a CSS mask
 * so glyphs inherit currentColor (see design system readme, Iconography).
 */
export function Icon({ name = "circle", size = 18, label, style }: IconProps) {
  const url = `url(${CDN}${name}.svg)`;
  return (
    <span
      role={label ? "img" : "presentation"}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      style={{
        display: "inline-block",
        flex: "none",
        width: size,
        height: size,
        backgroundColor: "currentColor",
        maskImage: url,
        WebkitMaskImage: url,
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskPosition: "center",
        maskSize: "contain",
        WebkitMaskSize: "contain",
        ...style,
      }}
    />
  );
}
