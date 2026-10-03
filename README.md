# Personal Website (Astro)

This project is now built with [Astro](https://astro.build), React components, and Tailwind CSS v4.

## Requirements

Node.js 24 or newer and pnpm 10. The package manager version is recorded in `package.json`.

## Development

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Open [http://localhost:4321](http://localhost:4321).

## Build

```bash
pnpm build
pnpm start
```

## Tech Stack

- Astro
- React 19
- Tailwind CSS v4
- MDX (via Vite `@mdx-js/rollup`)

## Source layout

- `src/pages` — Astro routes
- `src/content` — authored MDX grouped by domain (`projects`, `experiences`, `publications`, and `notes`)
- `src/components` — reusable Astro and React UI components
- `src/layouts` — shared page layouts
- `src/data` — presentation metadata and content indexes
- `src/lib` — shared utilities
- `src/styles` — global styles

## Checks and staging

Run `pnpm lint` and `pnpm build` before deployment. The separate Coolify review site and VPS setup are documented in [docs/staging.md](docs/staging.md).
