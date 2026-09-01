# MAG Design System

A design system for **MAG — Almajal Alarabi** (المجال العربي), derived from the company's
short-form brand guidelines. MAG is a Saudi/Gulf group operating under the Almajal Alarabi
name; the guidelines document is a brand manual rather than a product spec, so this system
is a **brand foundation** — logo, colour, type, and a UI layer built on top of them in the
brand's own visual language.

## Sources given

| Source | What it is | What was usable |
| --- | --- | --- |
| `brand mag/MAG Brand Guidelines Short.pdf` (mounted folder) | The original file. **Exceeded the 30 MB import limit and could not be read.** | Nothing — see Caveats. |
| `uploads/pdf_reupload-1788216136219-abyc.pdf` ("ghassan print.pdf") | Re-exported 8-page copy of the same guidelines. | Everything below. It is entirely vector-outlined artwork with no extractable text layer, so every value here was read off rendered pages or sampled from the rendered artwork pixel-by-pixel. |

No codebase, Figma file, product screenshots, website, or app were provided. There is **no
product surface in the sources**, so this system contains no UI-kit recreations — see Caveats.

### What the 8 pages cover

1. Logo versions (Arabic and English wordmarks)
2. Logo monochrome (black, and reversed white on #232323)
3. Minimum size (80 px digital / 20 mm print)
4. Logo colours (orange + black)
5. Brand colours (3 primary, 4 secondary, with Pantone/CMYK/RGB/HEX)
6. Colour opacity ladder (25 / 50 / 75 / 100 % for every hue)
7. English typefaces
8. Arabic typefaces

---

## CONTENT FUNDAMENTALS

The only copy in the sources is the guidelines' own body text, so the voice below is read
directly from it. It is **specification prose**: neutral, declarative, third-person, and
concerned with rules rather than persuasion.

**Voice.** Impersonal and instructive. No "we", no "you". The subject is the artefact, not
the reader or the company: *"The logo should not be reproduced smaller than the specified
minimum size, as doing so compromises its readability."* Rules are stated as obligations
using *should* and *should not*, not *must* — firm but not shouty.

**Register.** Plain, technical, unadorned. Adjectives appear only where they do descriptive
work: *"a strong vibrant orange and a sharp black"*. There is no marketing language, no
superlatives, no metaphor, no rhetorical questions, no "this, not that" constructions.

**Sentence shape.** Short to medium declaratives, one idea each, often stacked as separate
lines rather than joined into paragraphs:

> MAG Brandmark has two versions:
> The first version includes the Arabic wordmark and the second is with English wordmark.
>
> Both Arabic and English versions share an identical design and proportion.
>
> All proportions of the elements should remain the same and should not be altered in any way.

Note the slightly formal, non-idiomatic English ("the second is with English wordmark") —
the document is bilingual in origin. When writing new English copy, keep the plainness but
write it correctly; do not imitate the grammatical slips.

**Casing.** This is the strongest content rule in the brand:

- Page and section titles: **ALL CAPS** — `LOGO VERSIONS`, `BRAND COLORS`, `MINIMUM SIZE`.
- Section tabs: ALL CAPS, widely tracked, prefixed with a zero-padded number and a spaced
  period — `01 . LOGO GUIDELINES`, `02 . COLOR PALETTE`.
- Small labels and specimen captions: Title Case or ALL CAPS — `Color Hues`, `Primary
  Colors`, `Digital`, `Print`, `PANTONE`, `HEX`.
- Body copy: normal sentence case.
- Never Title Case a full sentence; never sentence-case a page title.

**Spelling.** US English — `color`, `monochrome`, `gray` (the guidelines say "Cool Gray",
following the Pantone name). Keep `color`/`gray` in copy and in token names.

**Numbers and units.** Numerals always, with a space before the unit: `80 px`, `20 mm`.
Section numbers are zero-padded: `01`, `02`, `03`.

**Emoji.** None anywhere. Do not introduce them — not in UI, not in decks, not in docs.

**Vibe.** Engineered and quiet. The document is confident enough to leave most of every page
empty. Copy earns its place or is cut; captions are two words where two words will do.

**Arabic.** The brand is genuinely bilingual — the Arabic wordmark is the *first* version
listed, not an afterthought. When a surface supports Arabic, set `dir="rtl"` and
`lang="ar"`; the `[lang="ar"]` scope in `tokens/base.css` swaps the type stack automatically.
Do not machine-translate marketing copy; leave Arabic strings to a native writer.

---

## VISUAL FOUNDATIONS

**Overall character.** Engineered, flat, print-native, and extremely airy. Two colours do
almost all the work — vibrant orange and near-black — on white, with generous margins. Every
edge is hard; the only curve in the entire document is the section tab.

**Colour.**
- Primary: black `#232323` (Pantone 419 C), orange `#EF6A27` (Pantone 165), cool gray
  `#D9D9D6` (Pantone Cool Gray 1C).
- Secondary: blue `#3D5265` (Pantone 2965 U), sky `#ACC9D6`, forest `#2C3D2F`, sage `#AAC1AF`
  — muted, desaturated, cool. They support; they never compete with the orange.
- Every hue carries a 25 / 50 / 75 / 100 % opacity ladder, pre-flattened on white in
  `tokens/colors.css` (`--mag-orange-50`, `--mag-blue-25`, …). Tints are the system's only
  way to add colour variety — there is no separate light/dark scale.
- Orange is an *accent*, not a background. It appears as the logo fill, a hairline, a 2 px
  rule, a small solid fill, or one full-bleed statement panel. Large orange areas are rare
  and deliberate.
- No red, no amber, no green outside the two muted secondaries. Status colours are mapped
  onto the secondary palette in `tokens/colors.css`, with orange doubling as attention.

**Type.** Four roles, mirrored across Latin and Arabic:
- *Logo face* — Good Times HV, wordmark only, never for headings or copy.
- *Titles* — Prometo Bold / Regular: set ALL CAPS, very large (48–88 px), leading ~1.0–1.1,
  tracking near zero.
- *Body* — Gotham Book / Light: unusually small (12–16 px), light weight, line-height ~1.6–1.75,
  held to a narrow ~46-character measure. The contrast between a 72 px title and 13 px light
  body copy is the brand's most recognisable typographic move.
- *Small labels* — 11 px uppercase, tracked 0.12 em; section tabs 0.16 em.
- Arabic: Cairo Bold/Regular for titles, DIN Next LT Arabic for body.

**Layout.** A wide print grid: ~64–96 px page margins, content starting on the left margin,
title block in the upper-left or centre-left, specimens ranged right, and the bottom half of
the page frequently left empty. Left-aligned throughout (Latin), right-aligned in Arabic.
Nothing is centred except a closing/title lockup. Nothing is sticky or fixed — the source is
print; for screens, keep headers static rather than sticky unless a real product need argues
otherwise.

**Backgrounds.** Flat white, flat `#232323`, or flat orange. No gradients anywhere. No
patterns, no textures, no grain, no hand-drawn illustration, no photography in the supplied
material. If imagery is added later, expect it to sit full-bleed and be treated cool and
neutral to sit beside the muted secondaries — but the guidelines are silent on this, so
**ask before introducing photography**.

**Shape and corners.** Square is the default (`--radius-none`). Interactive controls get
2 px (`--radius-xs`) so they read as UI without breaking the print feel. The pill
(`--radius-pill`) is reserved for the section tab. The circle (`--radius-circle`) is reserved
for colour swatches and radio buttons. No 8/12/16 px "soft card" radii.

**Cards.** Flat: white fill, 1 px `--border-subtle` hairline, square corners, **no shadow**.
Emphasis comes from a 2 px orange rule along the *top* edge (`accentEdge`). Do not use a
coloured left-border-only accent bar; the one leading-edge rule in the system is the Toast
status bar, where it carries meaning.

**Shadows.** None appear in the guidelines. `--shadow-overlay` and `--shadow-dialog` exist
only so overlays can separate from the page, and are deliberately soft and warm-neutral.
Prefer a hairline border over a shadow in every other case.

**Borders and rules.** 1 px hairlines in cool gray for structure; 2 px orange or black rules
for emphasis and for underlining an active tab. Rules that run past their label (the section
tab's trailing line) are a signature move — use it once per page, not decoratively.

**Transparency and blur.** Transparency is used as the *tint ladder*, not as glassmorphism.
Blur appears in exactly one place: the 75 % black dialog scrim (`--scrim-blur: 6px`). Never
blur a card, a nav bar, or a background panel.

**Animation.** The source is print, so nothing is specified. The interpretation here is
deliberately restrained: 140 ms for control state changes, 220 ms for entrances, easing
`cubic-bezier(0.2,0,0.2,1)`. Fades and short slides only — **no bounce, no overshoot, no
spring, no scale-in**. `prefers-reduced-motion` zeroes all durations.

**Hover states.** Filled controls darken 10 % (`--interactive-accent-hover: #D75F23`).
Bare/ghost controls pick up a cool-gray 25 % wash. Text links move from orange to
`#D75F23`. Never lighten, never change hue, never move the element.

**Press states.** Darken 20 % (`--interactive-accent-press: #BF5520`). No shrink, no
translate, no shadow change.

**Focus states.** Border turns orange plus a 3 px `--focus-ring` (orange at 25 %). Never
remove the focus ring.

**Disabled states.** `--surface-muted` fill with `--text-disabled` (black 25 %) text; no
opacity fade on the whole element.

**Density.** Controls at 32 / 40 / 48 px. Generous vertical rhythm — the brand would rather
scroll than compress.

---

## ICONOGRAPHY

**The sources contain no icons.** The 8-page guidelines define a logo, a colour palette and
a type system, and nothing else — no icon set, no icon font, no sprite sheet, no SVG library,
no illustration, no photography. There is likewise no emoji and no use of unicode glyphs as
icons; the only non-alphabetic marks in the document are the spaced period in section tabs
(`01 . LOGO GUIDELINES`) and the required-field asterisk convention.

**Substitution (flagged).** `components/core/Icon.jsx` renders **Lucide** 0.460.0 from
jsDelivr as a CSS mask, so glyphs inherit `currentColor`. Lucide was chosen because its
1.5–2 px stroke, open geometry and square-ish terminals sit closest to the squared,
engineered feel of the wordmark. This is a **substitution, not brand truth** — if MAG has an
icon library, send it and it will replace Lucide wholesale.

**Rules while the substitution stands.**
- Line icons only, uniform stroke. No filled, duotone, or multi-colour glyphs.
- 16 px inside `size="sm"` controls, 18 px default, 20 px at `size="lg"`. Never above 24 px
  in UI; use type or the logo for scale instead.
- Icons take `currentColor`. Never colour an icon independently of its label.
- Never use an icon alone to carry meaning without a label or `aria-label`.
- Do not hand-draw SVG marks to fill gaps, and do not use emoji as icons.

**Logo assets** (extracted from the PDF's vector artwork at high resolution, alpha
knocked out, in `assets/`):

| File | Use |
| --- | --- |
| `mag-logo-arabic-orange.png` | Arabic lockup, primary colourway |
| `mag-logo-english-orange.png` | English lockup, primary colourway |
| `mag-logo-arabic-black.png` | Arabic lockup, monochrome print |
| `mag-logo-english-black.png` | English lockup, monochrome print |
| `mag-logo-arabic-white.png` | Arabic lockup, reversed on dark |
| `mag-logo-english-white.png` | English lockup, reversed on dark |

Always place them via `<Logo>`. Minimum width 80 px on screen. Never recolour, stretch,
outline, add effects to, or rebuild the mark.

---

## Files

```
styles.css                  single entry point — @import list only
tokens/
  fonts.css                 webfont loading + substitution note
  colors.css                base hues, opacity ladders, semantic aliases, .mag-inverse scope
  typography.css            families, weights, size scale, tracking, composed roles
  spacing.css               4px grid, layout framing, control heights
  shape.css                 radii, border widths, the two shadows
  motion.css                durations, easings, reduced-motion
  base.css                  element defaults, RTL scope, .mag-section-tab
assets/                     six logo lockups (PNG, transparent)
guidelines/                 23 foundation specimen cards (Design System tab)
components/                 18 React components (see below)
templates/brand-slides/     MAG Slide Deck template (7 layouts, 16:9)
thumbnail.html              homepage tile
readme.md                   this file
SKILL.md                    Agent Skills front-matter for use in Claude Code
```

## Components

Import from the compiled bundle; every component is a named PascalCase export.

**`components/brand/`** — `Logo`, `SectionTab`
**`components/core/`** — `Button`, `IconButton`, `Icon`, `Badge`, `Tag`, `Card`
**`components/forms/`** — `Field`, `Input`, `Select`, `Checkbox`, `Radio`, `Switch`
**`components/navigation/`** — `Tabs`
**`components/feedback/`** — `Dialog`, `Toast`, `Tooltip`

Each has a sibling `.d.ts` (props contract) and `.prompt.md` (what & when, usage example,
variant notes). Each directory has one `@dsCard` HTML showing its states.

### Origin of the inventory

No source defined a component inventory, so this is the standard primitive set, sized to the
brand. Two **intentional additions** are brand-specific rather than generic:

- `Logo` — because the mark must never be typeset by hand, and the guidelines' minimum-size
  and colourway rules are enforced in code.
- `SectionTab` — the open orange pill with a trailing rule is the brand's single most
  distinctive graphic device; it appears on every page of the guidelines.

One further addition is a substitution wrapper: `Icon` (Lucide — see Iconography). `Field`
exists as the shared label/hint/error scaffold behind `Input` and `Select`.

## Templates

- `templates/brand-slides/BrandSlides.dc.html` — **MAG Slide Deck**. Seven 16:9 layouts
  copied from the guidelines' own page rhythm: dark title, section divider with tab + huge
  uppercase title, two-column with specimen panel, colour specimen, full-bleed orange
  statement, three-column comparison, dark closing. Tweak: Arabic or English wordmark.

---

## Font substitutions — action needed

None of the four licensed brand faces were supplied. Each is substituted with the nearest
Google Font, loaded in `tokens/fonts.css`:

| Brand face | Role | Substitute | Note |
| --- | --- | --- | --- |
| GoodTimesHV-Regular | Logo / display | **Michroma** | Wide, squared, techno — closest free match to the wordmark's geometry. |
| Prometo Bold / Regular | Titles | **Saira** | Squared grotesque; slightly narrower than Prometo. |
| Gotham Book / Light | Body | **Montserrat** | Geometric sans; the conventional free Gotham stand-in. |
| Cairo Bold / Regular | Arabic titles | **Cairo** | *Not a substitution* — Cairo is the real brand face and is on Google Fonts. |
| DIN Next LT Arabic W23 | Arabic body | **IBM Plex Sans Arabic** | Closest DIN-like Arabic available free. |

**Please send the licensed WOFF2/OTF files** (Good Times HV, Prometo, Gotham, DIN Next LT
Arabic) and they will be self-hosted with real `@font-face` rules, replacing the CDN import.

## Known source discrepancies

On the "BRAND COLORS" page the four **secondary** swatches carry copy-pasted labels: the
light blue is labelled `PANTONE 165 / #EF6A27` (the orange's values) and both greens are
labelled `PANTONE 423 C / #898989 / R137 G137 B137`. Those labels cannot be correct — the
printed swatches are visibly blue and green. The values in `tokens/colors.css` for
`--mag-sky`, `--mag-forest` and `--mag-sage` are therefore **sampled from the rendered
artwork**, not read from the labels. `--mag-blue` (`#3D5265`, Pantone 2965 U) is the one
secondary whose label is self-consistent and is used verbatim.

Please confirm the intended hex/Pantone values for sky, forest and sage.

## Caveats

- The originally attached `brand mag/MAG Brand Guidelines Short.pdf` was never readable
  (over the import size limit). Everything here comes from the smaller re-export. If the two
  files differ in content, this system reflects the re-export.
- **No UI kits.** UI kits are recreations of real product screens, and no product,
  codebase, Figma file or screenshot was provided. Building one would mean inventing MAG
  screens, which would then be trusted as brand truth. Send a codebase, a Figma file, or
  even a live URL and the kits get built properly.
- No icon set, imagery, illustration, photography, motion spec, or long-form product copy
  exists in the sources. Iconography and motion are documented interpretations, flagged as
  such above.
- No logo clear-space/exclusion-zone rule appears in the short guidelines — only minimum
  size. If a clear-space rule exists in the full manual, send that page.
- Logo assets are high-resolution PNGs recovered from the PDF's vector artwork. **Vector
  originals (SVG/EPS/AI) would be better** — please send them if available.
