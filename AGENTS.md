# Website development

- Follow the existing editorial style: cream/ink backgrounds, bold sans headings, serif accents, monospace labels, and the established accent palette.
- Use Node.js 24 or newer and pnpm 10. Install dependencies with `pnpm install --frozen-lockfile`.
- Run `pnpm lint` and `pnpm build` before publishing changes. TypeScript 5.9 is retained for compatibility with the Astro checker’s language-service API.
- Prefer native semantic HTML for navigation, disclosures, and dialogs. Verify keyboard operation and mobile layout, including navigation back from case studies and notes.
- Production is `main` at `https://ponytojas.dev`. Improvement work belongs on a separate branch and Coolify application. Do not merge, push to `main`, or redeploy production without the user's explicit instruction.
- Build staging with `SITE_ENV=staging`; set the staging domain's Coolify `noindex_domains` too. Never copy production credentials or shared data into previews.
- Deployment details and checks belong in `docs/staging.md`. Never commit credentials or generated review screenshots.
