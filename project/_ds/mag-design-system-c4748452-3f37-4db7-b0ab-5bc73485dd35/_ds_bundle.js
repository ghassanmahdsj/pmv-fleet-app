/* @ds-bundle: {"format":4,"namespace":"MAGDesignSystem_c47484","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"SectionTab","sourcePath":"components/brand/SectionTab.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"4d5864fe5f3d","components/brand/SectionTab.jsx":"688a1ae77426","components/core/Badge.jsx":"83bc5e9b41ec","components/core/Button.jsx":"62a51bbe34ea","components/core/Card.jsx":"57b8b0e684aa","components/core/Icon.jsx":"10b936200e1f","components/core/IconButton.jsx":"e2a11062c127","components/core/Tag.jsx":"6ebe5d2cc6d6","components/feedback/Dialog.jsx":"38c18b0bb1fa","components/feedback/Toast.jsx":"ca99b278586b","components/feedback/Tooltip.jsx":"91b9e8d9dd49","components/forms/Checkbox.jsx":"a868b98932f4","components/forms/Field.jsx":"3183fc8674a7","components/forms/Input.jsx":"dff19647ddbc","components/forms/Radio.jsx":"4cc9d24e3546","components/forms/Select.jsx":"ff3c4061c19b","components/forms/Switch.jsx":"75e78b40e3b7","components/navigation/Tabs.jsx":"c949575000d3"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MAGDesignSystem_c47484 = window.MAGDesignSystem_c47484 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const FILES = {
  "arabic-orange": "mag-logo-arabic-orange.png",
  "english-orange": "mag-logo-english-orange.png",
  "arabic-black": "mag-logo-arabic-black.png",
  "english-black": "mag-logo-english-black.png",
  "arabic-white": "mag-logo-arabic-white.png",
  "english-white": "mag-logo-english-white.png"
};
const RATIO = {
  arabic: 1120 / 454,
  english: 1120 / 420
};

/**
 * The MAG brandmark. Two wordmark versions (Arabic, English) x three colourways.
 * Minimum reproduction size per the guidelines is 80px wide on screen.
 */
function Logo({
  wordmark = "english",
  tone = "orange",
  width = 160,
  assetPath = "assets",
  alt,
  style,
  ...rest
}) {
  const key = wordmark + "-" + tone;
  const file = FILES[key] || FILES["english-orange"];
  const w = Math.max(80, width);
  return /*#__PURE__*/React.createElement("img", _extends({
    src: assetPath.replace(/\/$/, "") + "/" + file,
    alt: alt ?? "MAG — Almajal Alarabi",
    width: w,
    height: Math.round(w / RATIO[wordmark === "arabic" ? "arabic" : "english"]),
    style: {
      display: "block",
      width: w + "px",
      height: "auto",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/SectionTab.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The open orange pill that labels every section of the MAG guidelines:
 * a hairline rule that caps left and runs on past the label.
 */
function SectionTab({
  number,
  children,
  tone = "accent",
  trail = 64,
  style,
  ...rest
}) {
  const line = tone === "inverse" ? "var(--mag-white)" : "var(--border-accent)";
  const text = tone === "inverse" ? "var(--mag-white)" : "var(--text-secondary)";
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      position: "relative",
      font: "var(--type-label)",
      letterSpacing: "var(--tracking-tab)",
      textTransform: "uppercase",
      color: text,
      padding: "var(--space-2) var(--space-4)",
      border: "var(--border-hairline) solid " + line,
      borderRight: 0,
      borderRadius: "var(--radius-pill) 0 0 var(--radius-pill)",
      ...style
    }
  }, rest), number != null && /*#__PURE__*/React.createElement("span", {
    style: {
      color: text
    }
  }, number), number != null && /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.6
    }
  }, "."), /*#__PURE__*/React.createElement("span", null, children), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: "100%",
      bottom: -1,
      width: trail + "px",
      borderBottom: "var(--border-hairline) solid " + line
    }
  }));
}
Object.assign(__ds_scope, { SectionTab });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/SectionTab.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONE = {
  neutral: {
    bg: "var(--status-neutral-subtle)",
    fg: "var(--text-secondary)",
    bd: "var(--border-subtle)"
  },
  accent: {
    bg: "var(--status-attention-subtle)",
    fg: "#a8461a",
    bd: "var(--mag-orange-50)"
  },
  info: {
    bg: "var(--status-info-subtle)",
    fg: "var(--status-info)",
    bd: "var(--mag-sky-75)"
  },
  success: {
    bg: "var(--status-success-subtle)",
    fg: "var(--status-success)",
    bd: "var(--mag-sage-75)"
  },
  inverse: {
    bg: "var(--surface-inverse)",
    fg: "var(--text-inverse)",
    bd: "transparent"
  },
  solid: {
    bg: "var(--surface-accent)",
    fg: "var(--text-on-accent)",
    bd: "transparent"
  }
};
function Badge({
  tone = "neutral",
  children,
  style,
  ...rest
}) {
  const t = TONE[tone] || TONE.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
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
      border: "var(--border-hairline) solid " + t.bd,
      borderRadius: "var(--radius-xs)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const HEIGHT = {
  sm: "var(--control-sm)",
  md: "var(--control-md)",
  lg: "var(--control-lg)"
};
const PAD = {
  sm: "0 var(--space-4)",
  md: "0 var(--space-6)",
  lg: "0 var(--space-8)"
};
const FONT = {
  sm: "var(--text-label)",
  md: "var(--text-body-sm)",
  lg: "var(--text-body-md)"
};
const TONE = {
  primary: {
    background: "var(--interactive-accent)",
    color: "var(--text-on-accent)",
    border: "1px solid transparent",
    hover: "var(--interactive-accent-hover)",
    press: "var(--interactive-accent-press)"
  },
  secondary: {
    background: "var(--interactive-inverse)",
    color: "var(--text-inverse)",
    border: "1px solid transparent",
    hover: "var(--interactive-inverse-hover)",
    press: "var(--interactive-inverse-press)"
  },
  outline: {
    background: "transparent",
    color: "var(--text-primary)",
    border: "1px solid var(--border-inverse)",
    hover: "var(--interactive-ghost-hover)",
    press: "var(--interactive-ghost-press)"
  },
  ghost: {
    background: "transparent",
    color: "var(--text-primary)",
    border: "1px solid transparent",
    hover: "var(--interactive-ghost-hover)",
    press: "var(--interactive-ghost-press)"
  }
};
function Button({
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
}) {
  const t = TONE[variant] || TONE.primary;
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const bg = disabled ? "var(--surface-muted)" : press ? t.press : hover ? t.hover : t.background;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
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
      ...style
    }
  }, rest), iconStart, /*#__PURE__*/React.createElement("span", null, children), iconEnd);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PAD = {
  none: 0,
  sm: "var(--space-4)",
  md: "var(--space-6)",
  lg: "var(--space-8)"
};
function Card({
  tone = "default",
  padding = "md",
  accentEdge = false,
  children,
  style,
  ...rest
}) {
  const tones = {
    default: {
      background: "var(--surface-card)",
      border: "var(--border-hairline) solid var(--border-subtle)",
      color: "var(--text-primary)"
    },
    subtle: {
      background: "var(--surface-subtle)",
      border: "var(--border-hairline) solid transparent",
      color: "var(--text-primary)"
    },
    inverse: {
      background: "var(--surface-inverse)",
      border: "var(--border-hairline) solid transparent",
      color: "var(--text-inverse)"
    },
    accent: {
      background: "var(--surface-accent)",
      border: "var(--border-hairline) solid transparent",
      color: "var(--text-on-accent)"
    }
  };
  const t = tones[tone] || tones.default;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: tone === "inverse" ? "mag-inverse" : undefined,
    style: {
      padding: PAD[padding],
      background: t.background,
      border: t.border,
      borderTop: accentEdge ? "var(--border-thick) solid var(--border-accent)" : t.border,
      borderRadius: "var(--radius-none)",
      color: t.color,
      boxShadow: "var(--shadow-none)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CDN = "https://cdn.jsdelivr.net/npm/lucide-static@0.460.0/icons/";

/**
 * Icon wrapper. MAG supplied no icon set, so Lucide (1.5px stroke, square-ish
 * geometry) stands in — see readme.md → Iconography. Rendered as a CSS mask so
 * the glyph inherits currentColor.
 */
function Icon({
  name = "circle",
  size = 18,
  strokeWidth,
  label,
  style,
  ...rest
}) {
  const url = "url(" + CDN + name + ".svg)";
  return /*#__PURE__*/React.createElement("span", _extends({
    role: label ? "img" : "presentation",
    "aria-label": label,
    "aria-hidden": label ? undefined : "true",
    style: {
      display: "inline-block",
      flex: "none",
      width: size + "px",
      height: size + "px",
      backgroundColor: "currentColor",
      maskImage: url,
      WebkitMaskImage: url,
      maskRepeat: "no-repeat",
      WebkitMaskRepeat: "no-repeat",
      maskPosition: "center",
      WebkitMaskPosition: "center",
      maskSize: "contain",
      WebkitMaskSize: "contain",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZE = {
  sm: "var(--control-sm)",
  md: "var(--control-md)",
  lg: "var(--control-lg)"
};
const TONE = {
  primary: {
    background: "var(--interactive-accent)",
    color: "var(--text-on-accent)",
    border: "1px solid transparent",
    hover: "var(--interactive-accent-hover)",
    press: "var(--interactive-accent-press)"
  },
  secondary: {
    background: "var(--interactive-inverse)",
    color: "var(--text-inverse)",
    border: "1px solid transparent",
    hover: "var(--interactive-inverse-hover)",
    press: "var(--interactive-inverse-press)"
  },
  outline: {
    background: "transparent",
    color: "var(--text-primary)",
    border: "1px solid var(--border-default)",
    hover: "var(--interactive-ghost-hover)",
    press: "var(--interactive-ghost-press)"
  },
  ghost: {
    background: "transparent",
    color: "var(--text-secondary)",
    border: "1px solid transparent",
    hover: "var(--interactive-ghost-hover)",
    press: "var(--interactive-ghost-press)"
  }
};
function IconButton({
  variant = "ghost",
  size = "md",
  label,
  children,
  disabled = false,
  style,
  ...rest
}) {
  const t = TONE[variant] || TONE.ghost;
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: SIZE[size],
      height: SIZE[size],
      color: disabled ? "var(--text-disabled)" : t.color,
      background: disabled ? "transparent" : press ? t.press : hover ? t.hover : t.background,
      border: t.border,
      borderRadius: "var(--radius-xs)",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "var(--transition-control)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  selected = false,
  onRemove,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      height: "28px",
      padding: "0 var(--space-3)",
      font: "var(--type-body-sm)",
      fontWeight: "var(--weight-medium)",
      letterSpacing: 0,
      textTransform: "none",
      color: selected ? "var(--text-on-accent)" : "var(--text-primary)",
      background: selected ? "var(--surface-accent)" : hover ? "var(--interactive-ghost-hover)" : "transparent",
      border: "var(--border-hairline) solid " + (selected ? "transparent" : "var(--border-default)"),
      borderRadius: "var(--radius-xs)",
      transition: "var(--transition-control)",
      ...style
    }
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Remove",
    onClick: onRemove,
    style: {
      display: "inline-flex",
      alignItems: "center",
      padding: 0,
      margin: 0,
      border: 0,
      background: "none",
      color: "inherit",
      cursor: "pointer",
      opacity: 0.6
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 12
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Dialog({
  open = false,
  title,
  onClose,
  footer,
  width = 480,
  children,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "var(--space-6)",
      background: "var(--surface-scrim)",
      backdropFilter: "blur(var(--scrim-blur))",
      zIndex: 100
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    "aria-label": typeof title === "string" ? title : undefined,
    onClick: e => e.stopPropagation(),
    style: {
      width: "100%",
      maxWidth: width + "px",
      background: "var(--surface-card)",
      border: "var(--border-hairline) solid var(--border-subtle)",
      borderTop: "var(--border-thick) solid var(--border-accent)",
      borderRadius: "var(--radius-none)",
      boxShadow: "var(--shadow-dialog)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: "var(--space-4)",
      padding: "var(--space-6) var(--space-6) var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: "var(--type-title-sm)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-title)"
    }
  }, title), onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    label: "Close",
    size: "sm",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 var(--space-6)",
      font: "var(--type-body-md)",
      color: "var(--text-secondary)"
    }
  }, children), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: "var(--space-3)",
      padding: "var(--space-6)"
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONE = {
  neutral: {
    bar: "var(--mag-black)",
    icon: "info"
  },
  success: {
    bar: "var(--status-success)",
    icon: "check"
  },
  info: {
    bar: "var(--status-info)",
    icon: "info"
  },
  attention: {
    bar: "var(--status-attention)",
    icon: "triangle-alert"
  }
};
function Toast({
  tone = "neutral",
  title,
  children,
  onClose,
  style,
  ...rest
}) {
  const t = TONE[tone] || TONE.neutral;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "var(--space-3)",
      minWidth: "280px",
      maxWidth: "420px",
      padding: "var(--space-4)",
      background: "var(--surface-card)",
      border: "var(--border-hairline) solid var(--border-subtle)",
      borderLeft: "var(--border-thick) solid " + t.bar,
      boxShadow: "var(--shadow-overlay)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      color: t.bar,
      marginTop: "2px"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 16
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-label)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: "var(--text-primary)",
      marginBottom: "2px"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-secondary)"
    }
  }, children)), onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    label: "Dismiss",
    size: "sm",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 14
  })));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tooltip({
  content,
  placement = "top",
  children,
  style,
  ...rest
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: "calc(100% + 6px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    bottom: {
      top: "calc(100% + 6px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    left: {
      right: "calc(100% + 6px)",
      top: "50%",
      transform: "translateY(-50%)"
    },
    right: {
      left: "calc(100% + 6px)",
      top: "50%",
      transform: "translateY(-50%)"
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, rest), children, show && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      ...pos,
      zIndex: 50,
      whiteSpace: "nowrap",
      padding: "var(--space-2) var(--space-3)",
      font: "var(--type-body-sm)",
      color: "var(--text-inverse)",
      background: "var(--surface-inverse)",
      borderRadius: "var(--radius-xs)"
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  checked = false,
  indeterminate = false,
  disabled = false,
  label,
  hint,
  onChange,
  id,
  style,
  ...rest
}) {
  const on = checked || indeterminate;
  return /*#__PURE__*/React.createElement("label", _extends({
    htmlFor: id,
    style: {
      display: "inline-flex",
      alignItems: "flex-start",
      gap: "var(--space-3)",
      cursor: disabled ? "not-allowed" : "pointer",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("input", {
    id: id,
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "none",
      width: "18px",
      height: "18px",
      marginTop: "1px",
      color: "var(--text-on-accent)",
      background: disabled ? "var(--surface-muted)" : on ? "var(--surface-accent)" : "var(--surface-page)",
      border: "var(--border-hairline) solid " + (disabled ? "var(--border-subtle)" : on ? "transparent" : "var(--border-strong)"),
      borderRadius: "var(--radius-xs)",
      transition: "var(--transition-control)"
    }
  }, indeterminate ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "minus",
    size: 12
  }) : checked ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 12
  }) : null), (label || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "2px"
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-md)",
      color: disabled ? "var(--text-disabled)" : "var(--text-primary)"
    }
  }, label), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-tertiary)"
    }
  }, hint)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Shared label / hint / error scaffold for the form controls. */
function Field({
  label,
  hint,
  error,
  required = false,
  htmlFor,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      ...style
    }
  }, rest), label && /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      font: "var(--type-label)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: "var(--text-secondary)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-accent)",
      marginLeft: "4px"
    }
  }, "*")), children, (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: error ? "var(--mag-orange)" : "var(--text-tertiary)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const FIELD = {
  width: "100%",
  height: "var(--control-md)",
  padding: "0 var(--space-3)",
  font: "var(--type-body-md)",
  color: "var(--text-primary)",
  background: "var(--surface-page)",
  border: "var(--border-hairline) solid var(--border-default)",
  borderRadius: "var(--radius-xs)",
  outline: "none",
  transition: "var(--transition-control)"
};
function Input({
  label,
  hint,
  error,
  required,
  iconStart,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inner = /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center"
    }
  }, iconStart && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: "var(--space-3)",
      display: "flex",
      color: "var(--text-tertiary)",
      pointerEvents: "none"
    }
  }, iconStart), /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...FIELD,
      paddingLeft: iconStart ? "var(--space-10)" : FIELD.padding.split(" ")[1],
      borderColor: error ? "var(--mag-orange)" : focus ? "var(--border-accent)" : "var(--border-default)",
      boxShadow: focus ? "0 0 0 3px var(--focus-ring)" : "none",
      ...style
    }
  }, rest)));
  if (label == null && hint == null && error == null) return inner;
  return /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: label,
    hint: hint,
    error: error,
    required: required,
    htmlFor: id
  }, inner);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  checked = false,
  disabled = false,
  label,
  hint,
  name,
  value,
  onChange,
  id,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    htmlFor: id,
    style: {
      display: "inline-flex",
      alignItems: "flex-start",
      gap: "var(--space-3)",
      cursor: disabled ? "not-allowed" : "pointer",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("input", {
    id: id,
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "none",
      width: "18px",
      height: "18px",
      marginTop: "1px",
      background: "var(--surface-page)",
      border: "var(--border-hairline) solid " + (disabled ? "var(--border-subtle)" : checked ? "var(--border-accent)" : "var(--border-strong)"),
      borderRadius: "var(--radius-circle)",
      transition: "var(--transition-control)"
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: "9px",
      height: "9px",
      borderRadius: "var(--radius-circle)",
      background: disabled ? "var(--text-disabled)" : "var(--surface-accent)"
    }
  })), (label || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "2px"
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-md)",
      color: disabled ? "var(--text-disabled)" : "var(--text-primary)"
    }
  }, label), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-tertiary)"
    }
  }, hint)));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const FIELD = {
  width: "100%",
  height: "var(--control-md)",
  padding: "0 var(--space-3)",
  font: "var(--type-body-md)",
  color: "var(--text-primary)",
  background: "var(--surface-page)",
  border: "var(--border-hairline) solid var(--border-default)",
  borderRadius: "var(--radius-xs)",
  outline: "none",
  transition: "var(--transition-control)"
};
function Select({
  label,
  hint,
  error,
  required,
  options = [],
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inner = /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: id,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...FIELD,
      appearance: "none",
      paddingRight: "var(--space-10)",
      borderColor: error ? "var(--mag-orange)" : focus ? "var(--border-accent)" : "var(--border-default)",
      boxShadow: focus ? "0 0 0 3px var(--focus-ring)" : "none",
      ...style
    }
  }, rest), options.map(o => {
    const value = typeof o === "string" ? o : o.value;
    const text = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, text);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: "var(--space-3)",
      display: "flex",
      color: "var(--text-secondary)",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16
  })));
  if (label == null && hint == null && error == null) return inner;
  return /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: label,
    hint: hint,
    error: error,
    required: required,
    htmlFor: id
  }, inner);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  checked = false,
  disabled = false,
  label,
  onChange,
  id,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    htmlFor: id,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-3)",
      cursor: disabled ? "not-allowed" : "pointer",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("input", {
    id: id,
    type: "checkbox",
    role: "switch",
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "relative",
      flex: "none",
      width: "40px",
      height: "20px",
      background: disabled ? "var(--surface-muted)" : checked ? "var(--surface-accent)" : "var(--mag-cool-gray)",
      borderRadius: "var(--radius-pill)",
      transition: "background-color var(--duration-fast) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: "2px",
      left: checked ? "22px" : "2px",
      width: "16px",
      height: "16px",
      background: "var(--mag-white)",
      borderRadius: "var(--radius-circle)",
      transition: "left var(--duration-fast) var(--ease-standard)"
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-md)",
      color: disabled ? "var(--text-disabled)" : "var(--text-primary)"
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  items = [],
  value,
  onChange,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(null);
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: "flex",
      gap: "var(--space-6)",
      borderBottom: "var(--border-hairline) solid var(--border-subtle)",
      ...style
    }
  }, rest), items.map(it => {
    const id = typeof it === "string" ? it : it.value;
    const text = typeof it === "string" ? it : it.label;
    const active = id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      role: "tab",
      "aria-selected": active,
      onClick: () => onChange && onChange(id),
      onMouseEnter: () => setHover(id),
      onMouseLeave: () => setHover(null),
      style: {
        padding: "0 0 var(--space-3)",
        marginBottom: "-1px",
        font: "var(--type-label)",
        fontWeight: "var(--weight-semibold)",
        letterSpacing: "var(--tracking-label)",
        textTransform: "uppercase",
        color: active ? "var(--text-primary)" : hover === id ? "var(--text-primary)" : "var(--text-tertiary)",
        background: "none",
        border: 0,
        borderBottom: "var(--border-thick) solid " + (active ? "var(--border-accent)" : "transparent"),
        cursor: "pointer",
        transition: "var(--transition-control)"
      }
    }, text);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.SectionTab = __ds_scope.SectionTab;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
