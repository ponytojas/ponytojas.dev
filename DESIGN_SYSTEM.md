# Design System & Customization Guide

## Theme Tokens

The project uses a CSS variable-based theme system defined in `src/app/globals.css` and mapped via Tailwind v4's `@theme` directive.

### Colors
- **Brand Primary (Living Coral)**: `--brand-primary` (#FA7268) - Used for primary actions, accents, and highlights.
- **Brand Secondary (Deep Blue)**: `--brand-secondary` (#0D5892) - Used for technical details, focus rings, and subtle links.
- **Background**: `--background` (#FAFAF8) - A warm, premium off-white.
- **Surface (Card)**: `--card` (#FFFFFF) - Pure white for cards.
- **Foreground (Text)**: `--foreground` (#0E1116) - Near black for high contrast text.
- **Muted**: `--muted-foreground` (#4B5563) - For secondary text.

### Typography
- **Headings**: `Space Grotesk` (via `--font-heading`).
- **Body**: `Inter` (via `--font-sans`).

To update colors, modify the `:root` block in `src/app/globals.css`.

## Kinetic Text Customization

The kinetic text effect in the Hero section is implemented in `src/components/hero/KineticText.tsx`.

### How to Edit
1. **Change Text**: Pass a new string to the `text` prop in `src/components/hero/Hero.tsx`.
   ```tsx
   <KineticText text="NEW TEXT HERE" />
   ```
2. **Adjust Speed/Chaos**:
   - In `KineticText.tsx`, modify `randomSpeed` (currently 0.5 to 1.5) to change how much letters separate during scroll.
   - Modify `randomRotation` (currently ±12deg) to change the drift angle.
3. **Scroll Distance**: 
   - The drift amount is controlled by `ScrollTrigger.maxScroll(window) * speed * 0.2`. Increase the `0.2` multiplier for more dramatic movement.

### Accessibility
- The component automatically detects `prefers-reduced-motion`. If enabled by the user, the text remains static.
- The text is marked with `aria-hidden="true"` as it is decorative. Ensure the main H1 contains the actual accessible content.

## Component Usage

### Cards
Use the standard card pattern for lists:
```tsx
<div className="border border-border bg-card rounded-lg shadow-sm hover:shadow-md transition-all">
  {/* Content */}
</div>
```
- **Radius**: Large radius (`rounded-lg` which maps to ~20px) is standard.
- **Shadows**: Minimal shadows that grow slightly on hover.
