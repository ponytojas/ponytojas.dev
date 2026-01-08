# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A personal portfolio website for Daniel Villalobos built with Next.js 16, showcasing experiences, projects, publications, and experiments. The site features advanced GSAP animations, MDX-based content management, and a custom design system with Tailwind CSS v4.

## Development Commands

```bash
# Install dependencies (uses pnpm)
pnpm install

# Development server with Turbopack
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint
```

## Architecture

### Directory Structure

- **`src/app/`**: Next.js App Router structure
  - **`(site)/`**: Route group for main portfolio pages
    - `layout.tsx`: Adds TopBar and main container
    - `page.tsx`: Homepage with Hero, Experience, Projects, Publications, and About sections
  - **`experiences/`**: MDX files for work experience entries
  - **`projects/`**: MDX files for project entries
  - **`publications/`**: MDX files for publication entries
  - **`about/`**: MDX file for about section
  - **`experiments/`**: Standalone page for visual experiments (Globe, GeometricSymbol, etc.)
  - `layout.tsx`: Root layout with font loading and ThemeProvider
  - `globals.css`: Tailwind v4 configuration with CSS variables

- **`src/components/`**: Organized by feature/domain
  - **`hero/`**: Landing section components (LetterCollision, Rabbit, Hero)
  - **`experience/`**: ExperienceComponent that imports and renders MDX files
  - **`projects/`**: ProjectsComponent that imports and renders MDX files
  - **`publications/`**: PublicationsComponent that imports and renders MDX files
  - **`about/`**: AboutComponents that imports and renders MDX files
  - **`experiments/`**: Interactive visual components (Globe, HarmonicCircles, RadialGraph, etc.)
  - **`ui/`**: Radix UI-based components (dialog, tooltip, accordion, button, badge)
  - **`theme/`**: Theme provider and mode toggle
  - **`top-bar/`**: Fixed header with theme toggle

- **`src/static/index.ts`**: Site navigation index structure with sections and subsections

- **`src/lib/utils.ts`**: Utility functions (e.g., `cn` for class merging)

- **`src/hooks/`**: Custom React hooks (e.g., `useIsMobile`)

- **`src/store/`**: Zustand stores (e.g., sidebar state)

### MDX Content Pattern

Content is authored in MDX files with frontmatter-style metadata exports:

```tsx
// experiences/example.mdx
export const metadata = {
    title: "Company Name",
    position: "Job Title",
    color: "#DA0D3A",
    darkColor: "#DA0D3A",
    tags: [
        { technology: "React", color: "#0A7EA4" },
        // ...
    ],
    time: "2024 - Present",
    link: "https://example.com",
};

// MDX content here...
```

Component files (e.g., `ExperienceComponent.tsx`) import these MDX files directly and render them in a loop, accessing both the `Content` component and the `metadata` export.

### Animation System

- **GSAP with ScrollTrigger**: Used extensively in Hero section (`LetterCollision.tsx`)
  - Letters animate with individual speeds and rotations on scroll
  - `data-speed` attributes control parallax effect intensity
  - ScrollTrigger scrub creates smooth, physics-based scroll animations

- **Framer Motion**: Used for micro-interactions (e.g., `motion` library)

- **CSS Animations**: Defined in `globals.css` using Tailwind v4's `@theme` directive (`fadeIn`, `fadeInUp`)

### Design System

Refer to `DESIGN_SYSTEM.md` for detailed theming and customization guidelines:

- **Colors**: CSS variable-based system (`--brand-primary`, `--brand-secondary`, etc.)
- **Typography**: Space Grotesk (headings) and Inter (body text)
- **Tailwind v4**: Uses `@theme` directive in `globals.css` to map CSS variables
- **Dark Mode**: Managed via `next-themes` with custom variant `@custom-variant dark (&:is(.dark *))`

### Custom MDX Components

Custom components are registered in `src/mdx-component.tsx` and can be used in any MDX file:

```tsx
export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        ...components,
        RotatingTooltipText
    }
}
```

## Key Implementation Details

### Scroll Animations

The Hero section's `LetterCollision` component uses GSAP to animate individual letters:
- Each letter has a random speed (`data-speed`) between values, creating depth
- ScrollTrigger animates letters vertically and rotates them as user scrolls
- Animation respects `prefers-reduced-motion` (check `LetterDisplay.tsx`)

### Path Aliases

TypeScript uses `@/*` to reference `src/*`. Always import using this alias:

```tsx
import { Hero } from "@/components/hero/Hero";
```

### Content Management

When adding new experiences/projects/publications:
1. Create a new `.mdx` file in the appropriate `src/app/` subfolder
2. Export a `metadata` object with required fields (see existing files for schema)
3. Import the file in the corresponding component (e.g., `ExperienceComponent.tsx`)
4. Add to the component's array for rendering

### Experiments Page

The `/experiments` route is a standalone page showcasing interactive visual components (Globe with COBE library, custom canvas animations). These are kept separate from the main portfolio layout.

## Tech Stack Notes

- **Next.js 16** with App Router and Turbopack
- **React 19.2.3** (note: uses overrides in pnpm config for react types)
- **Tailwind CSS v4** (uses new `@theme` directive and `@custom-variant`)
- **MDX** via `@next/mdx` for content authoring
- **GSAP** for scroll-based animations
- **Radix UI** for accessible components
- **Zustand** for client-side state management
- **next-themes** for dark mode support

## Deployment

Designed for Vercel deployment. Uses `@vercel/speed-insights` for monitoring.
