# Design refinement staging

The review site is configured at **https://staging.ponytojas.dev** in Coolify. It is a separate application and environment; the live site continues to deploy from `main`.

| Setting | Value |
| --- | --- |
| Source branch | `improve/site-design` |
| Coolify dashboard | `https://admin.ponytojas.dev` |
| Project UUID | `ngkoow8s8wk4swkc8gkwg88c` |
| Staging environment UUID | `3z8fgskc4iipaoqlkybywhxj` |
| Staging application UUID | `byklmsauj3b0shso2zr5shg2` |
| Build | Nixpacks; `pnpm install --frozen-lockfile`, then `pnpm build` |
| Output | Static `/dist`, served on container port 80 |
| Build variables | `NIXPACKS_NODE_VERSION=24`, `SITE_ENV=staging` |
| Runtime limits | 256 MiB memory, 0.5 CPU |
| Automatic deployment | Disabled; deploy this resource explicitly after checks |

`SITE_ENV=staging` adds `noindex, nofollow` to HTML and `Disallow: /` to `robots.txt`. Coolify also excludes the staging domain from indexing through its response headers. This public review site uses static authored content and needs no production database or service credentials. Indexing exclusions do not restrict who can open its URL.

## Local development on the VPS

The repository lives at `/home/ubuntu/projects/ponytojas.dev`. Node.js and pnpm are installed under `/home/ubuntu/.local/share/website-tools`, along with separate browser verification tools. If those executables are absent from your shell's PATH:

```sh
export PATH="/home/ubuntu/.local/share/website-tools/node/bin:/home/ubuntu/.local/share/website-tools/node_modules/.bin:$PATH"
cd /home/ubuntu/projects/ponytojas.dev
pnpm install --frozen-lockfile
pnpm dev --host 127.0.0.1
```

Astro uses port 4321. Access it through an SSH tunnel when needed. Astro 7 manages its dev process with `pnpm exec astro dev status`, `pnpm exec astro dev logs`, and `pnpm exec astro dev stop`.

## Validation and review artifacts

Run `pnpm lint` and `pnpm build`; use `SITE_ENV=staging pnpm build` when checking indexing exclusions. TypeScript 5.9.3 is pinned because the repository's Astro checker crashes with TypeScript 7's changed language-service API.

The separate verification runner at `/home/ubuntu/.local/share/website-tools/verify.mjs` checks all eight content routes at 320, 390, 768, and 1440 pixel widths; automated WCAG checks at 390 and 1440 pixels; image loading; disclosures; navigation between pages; modal image zoom; mobile menu behavior; project browsing controls; and navigation without JavaScript. Run it with Node and an optional base URL. Its report and before/after screenshots are stored under `/home/ubuntu/website-review` and are excluded from the repository.

## Future changes

Keep work on the improvement branch. Run checks, push that branch, and deploy only the staging UUID above. Credentials belong in Coolify or a private local credential store. Do not place tokens in commands that print them, in repository files, or in PR descriptions.

The owner must explicitly request production promotion before merging into `main` or deploying the production application (`u44ckosccsoc8k8ggoo4ccc8`). Review the changes on staging first. Do not copy `SITE_ENV=staging` or the indexing exclusions to production.

## Dependency review (2026-10-03)

Compatible dependency updates bring Astro to 7.3.5 and address 32 of the 33 advisory entries reported by the original lockfile, including the critical Astro advisory. One high advisory remains in `http-cache-semantics@4.2.0`, a direct Astro development dependency: [GHSA-ch52-4w7c-c8xp](https://github.com/advisories/GHSA-ch52-4w7c-c8xp). The package audit currently lists no patched release. This deployment serves static files through Nginx; it does not run Astro's Node server or HTTP cache in production. Reassess the advisory before enabling server rendering or shared HTTP caching, and update the lockfile when a patch is available.
