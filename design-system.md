# Dani Villalobos — Visual Design System

A reference document for refactoring the portfolio toward the screenshots' aesthetic: editorial serif display, monospace UI, hand-drawn illustration, restrained palette with one bold accent.

---

## 1. Design Principles

1. **Print sensibility, web execution.** Treat the layout like a zine spread — generous whitespace, intentional asymmetry, decorative marks that earn their place.
2. **Two voices, one page.** Serif handles personality and scale; monospace handles information and structure. Never blur the roles.
3. **Illustration is content, not garnish.** Custom line work is the soul of the design — budget for it like you would copy.
4. **Restraint over richness.** One accent blue, one secondary warm. No gradients, no shadows beyond hairline rules.
5. **Texture is non-negotiable.** Paper grain and slight ink imperfection separate this from generic Tailwind output.

---

## 2. Color Tokens

| Token       | Value     | Role                                         |
| ----------- | --------- | -------------------------------------------- |
| `--paper`   | `#F5F1E8` | Page background, card fills                  |
| `--paper-2` | `#EDE7D6` | Subtle banded sections (footer strip)        |
| `--ink`     | `#1A1A1A` | All primary text, borders, line illustration |
| `--ink-mut` | `#5A5A57` | Secondary text, metadata                     |
| `--cobalt`  | `#1E3FE8` | Accent: links, highlights, sparkles          |
| `--brick`   | `#D94A2D` | Secondary accent: mascot, rare emphasis      |
| `--rule`    | `#1A1A1A` | Card borders (1px, full opacity)             |

Verify `--paper` × `--ink` reaches WCAG AA (it should — roughly 14:1).

---

## 3. Typography

### Stacks

- **Display serif:** `"Domaine Display"`, `"Canela"`, or open-source `"DM Serif Display"` / `"Source Serif 4"` Black. Needs a high-contrast cut with strong terminals.
- **Body / UI mono:** `"Berkeley Mono"`, `"JetBrains Mono"`, `"IBM Plex Mono"`, or `"Geist Mono"`. Pick one that has a bold weight you actually like — many monos go ugly at 700.
- **Long-form body (notes only):** A pairing serif like `"Source Serif 4"` regular, OR keep mono but bump to 16px / 1.7 leading.

### Scale

| Role        | Size           | Family | Weight | Tracking | Notes                           |
| ----------- | -------------- | ------ | ------ | -------- | ------------------------------- |
| Display XL  | clamp(72, 12vw, 180px) | Serif  | 800    | -0.02em  | Hero name only                  |
| Display L   | 48–64px        | Serif  | 700    | -0.01em  | Card titles (project names)     |
| Heading M   | 24–32px        | Serif  | 700    | normal   | Section headers within content  |
| Body        | 14–15px        | Mono   | 400    | normal   | Default UI / descriptions       |
| Label       | 11–12px        | Mono   | 500    | 0.06em   | UPPERCASE eyebrow labels        |
| Meta        | 12px           | Mono   | 400    | normal   | Dates, read times, tech tags    |

---

## 4. Spacing & Layout

**Scale (px):** `4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128`

**Container:**
- Max-width `1280px`, gutter `24px` mobile / `40px` desktop.
- 12-col grid on desktop, single-col on mobile.

**Card pattern:**
- `1px solid var(--rule)`
- Border-radius `4–6px` (subtle, not friendly)
- Inner padding `24px`
- No shadow. Ever.

**Breakpoints:** `640 · 768 · 1024 · 1280`

---

## 5. Component Inventory

1. **`<NavBar>`** — Logo (eye glyph) + wordmark left, horizontal nav right. Hamburger + bottom tab bar on mobile.
2. **`<Hero>`** — Display name, monospace subtitle with one underlined phrase, tag chip row, illustration absolutely positioned right.
3. **`<TagChip>`** — Pill, 1px border, icon + mono label, ~36px tall.
4. **`<ProjectCard>`** — Title (serif), description (mono), tech list (mono · separated), 4-quadrant illustration grid, year top-right, category bottom-right.
5. **`<NoteRow>`** — Sparkle bullet, title + subtitle (Spanish), date stack right, arrow link.
6. **`<PersonalCard>`** — Mascot illustration left (brick color), bio paragraph, location line in cobalt.
7. **`<SectionEyebrow>`** — Mono uppercase label + sparkle, small underline rule.
8. **`<TerminalSnippet>`** — Boxed, mono, ASCII-feeling. `$ whoami` style.
9. **`<MobileTabBar>`** — Fixed bottom on mobile only: Work / Notes / Experiments / About with icons.

---

## 6. Illustration System

The single most important production decision. Without consistent custom illustration, the design fails.

**Style rules:**
- Single line weight (~1.5–2px stroke)
- Hand-drawn imperfection — wobble, broken lines, intentional gaps
- Black ink primary, cobalt fill on select shapes (the big star, the O), brick reserved for the personal mascot
- Decorative motifs: 4-point stars, dot-bursts, dashed motion paths, small sparkles

**Texture:**
- SVG noise overlay on `--paper` at ~3% opacity
- Optional: slight cobalt offset (1–2px) on illustration outlines for risograph effect — apply via duplicate SVG layer with `mix-blend-mode: multiply`

**Sourcing options (pick one and commit):**
- Commission an illustrator (best result, ~$500–2000 for a set)
- License from Streamline's "Sketch" or "Hand Drawn" family
- Draw yourself in Procreate / Excalidraw and SVG-export
- Avoid generative AI — the inconsistency between pieces will break the system

---

## 7. Motion

Minimal. The design is print-feeling; respect that.

- Hover: 100ms ease, only color shifts (no scale, no shadow)
- Card hover: border darkens or accent rule appears on left edge
- Page transitions: simple fade or none
- Honor `prefers-reduced-motion: reduce` and disable any flourishes

---

## 8. Accessibility

- All decorative SVGs: `aria-hidden="true"` and `role="presentation"`
- Focus state: `2px solid var(--cobalt)` with `2px` offset
- Mono body never below 14px
- Provide a "reader mode" or serif fallback for `/notes` long-form
- Ensure tab order survives the absolutely-positioned hero illustration

---

## 9. Tech Stack Recommendation

- **Framework:** Next.js (App Router) or Astro — both excel for content-led portfolios. Astro wins on shipped JS, Next wins if you want any interactive experiments.
- **Styling:** Tailwind with custom token layer in `@theme`, OR vanilla CSS with the variables above. Avoid CSS-in-JS for this — overkill.
- **Fonts:** Self-host with `next/font` or `@fontsource`, `font-display: swap`.
- **Illustrations:** Inline SVG for the hero (full control), `<Image>` with `priority` for raster fallbacks.
- **Content:** MDX for `/notes`, single source of truth for project metadata in a `projects.ts` file.
- **Deploy:** Vercel or Netlify.

---

## 10. Checklist for First Pass

- [ ] Lock exact hex values, don't drift
- [ ] Source / commission illustration set before building cards
- [ ] Self-host both fonts, verify weights load
- [ ] Build `<Hero>` with real type scale before any other component
- [ ] Add paper-grain noise overlay early — easier than retrofitting
- [ ] Test mobile tab bar with real touch targets (44px minimum)
- [ ] Audit contrast and focus states before shipping
