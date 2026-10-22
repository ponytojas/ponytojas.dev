# Design refinement staging

The review site is configured at **https://staging.ponytojas.dev** in Coolify. It is a separate application and environment; the live site continues to deploy from `main`.

| Setting | Value |
| --- | --- |
| Source branch | `security/dependencies-runtime-20261021` |
| Coolify dashboard | `https://admin.ponytojas.dev` |
| Project UUID | `ngkoow8s8wk4swkc8gkwg88c` |
| Staging environment UUID | `3z8fgskc4iipaoqlkybywhxj` |
| Staging application UUID | `byklmsauj3b0shso2zr5shg2` |
| Build | Repository multi-stage `Dockerfile`; frozen pnpm install, then `pnpm build` |
| Output | Static `/dist`, served on container port 80 |
| Build variables | `SITE_ENV=staging`; Node 24 and pnpm 10.34.6 are defined in the Dockerfile |
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

## iPhone layout and design refinement

The viewport uses `viewport-fit=auto` so Safari reserves its default safe area. The header and cream content sections have solid backgrounds; the homepage canvas matches the dark footer, while reading pages retain cream backgrounds. The homepage header is fixed at mobile widths; any additional `env(safe-area-inset-top)` is included in its height, reserved page spacing, and section anchor offsets. Shared left/right insets protect content in landscape; case studies and notes also inset their top navigation. The browser theme stays cream to match the header and switches to acid while the mobile menu is open. This follows [WebKit's safe-area guidance](https://webkit.org/blog/7929/designing-websites-for-iphone-x/).

The skip link is clipped to one pixel with zero opacity until keyboard navigation reveals it. Tab enables its focused appearance; pointer input clears that state, so restored touch focus cannot leave a black button visible. Navigation without JavaScript uses native `:focus-visible`. Do not hide it by translating it above the viewport: an offscreen painted element may still show in Safari's surrounding browser area. Earlier simulated inset checks passed while the owner still saw the black skip-link block on a physical iPhone; geometry checks alone do not establish that the browser chrome is clear.

The owner confirmed the skip-link button correction but still reported content above the navbar. The remaining suspect was the full-screen grain texture: it was fixed at `z-index: 9999`, covering even the opaque header. The texture now sits below the header and begins below its complete height on the homepage, leaving the top edge solid cream while retaining the grain on page content. [WebKit’s color sampler](https://github.com/WebKit/WebKit/blob/main/Source/WebCore/page/PageColorSampler.cpp) treats background images and nonuniform fixed layers differently from solid header colors; this supports the diagnosis but does not establish the physical iPhone result. Verify on the owner’s device before considering the issue resolved.

The homepage’s outer `html`/`body` background now matches the dark contact footer, so Safari’s inset area and the page canvas do not expose a cream strip below it. The fixed header remains opaque cream. At mobile widths the footer fills the dynamic viewport below the complete header, rather than using the previous `70svh` height. Its bottom padding uses the shared safe-area variable, and its flex layout includes that padding in the available height. These background rules apply only while the contact footer is present, preserving cream reading pages after Astro navigation. Desktop footer sizing is retained. Physical Safari browser chrome still requires device review.

The separate `verify-safe-area.mjs` runner checks Chromium and WebKit with simulated portrait and landscape insets, section anchors, menu controls, accessibility, and return navigation. Results and screenshots are in `/home/ubuntu/website-review`. Desktop WebKit does not reproduce the physical iPhone's Safari toolbar; confirm the final notch appearance on an actual iPhone during review.

The latest design pass adds an active-section navigation indicator, softer project preview grids, larger mobile project labels and previews, numbered About principle rows, keyboard focus treatments for cards, and a visible footer email address. It preserves the original hero scroll cue, animated name, and mobile menu entrance animation.

## Future changes

Keep work on the improvement branch. Run checks, push that branch, and deploy only the staging UUID above. Credentials belong in Coolify or a private local credential store. Do not place tokens in commands that print them, in repository files, or in PR descriptions.

The owner must explicitly request production promotion before merging into `main` or deploying the production application (`u44ckosccsoc8k8ggoo4ccc8`). Review the changes on staging first. Do not copy `SITE_ENV=staging` or the indexing exclusions to production.

## Dependency review (2026-10-03)

Compatible dependency updates bring Astro to 7.3.5 and address 32 of the 33 advisory entries reported by the original lockfile, including the critical Astro advisory. One high advisory remains in `http-cache-semantics@4.2.0`, a direct Astro development dependency: [GHSA-ch52-4w7c-c8xp](https://github.com/advisories/GHSA-ch52-4w7c-c8xp). The package audit currently lists no patched release. This deployment serves static files through Nginx; it does not run Astro's Node server or HTTP cache in production. Reassess the advisory before enabling server rendering or shared HTTP caching, and update the lockfile when a patch is available.

## Security refresh (2026-10-21)

The staging resource now tracks `security/dependencies-runtime-20261021` and uses the repository Dockerfile, with `is_static=false` in Coolify because the Dockerfile already produces the final static Nginx image. It continues to expose port 80 with its original resource limits and indexing exclusions. Production remains on `main` with its existing deployment configuration.

Astro is updated to 7.4.2, React/React DOM to 19.3.1, the React integration to 7.1.1, the checker to 0.9.12, and Lucide to 1.61.0. TypeScript remains pinned at 5.9.3. The targeted `@tailwindcss/typography>postcss-selector-parser` override selects patched version 7.1.6; generated CSS was byte-identical before and after that override. The frozen install, Astro check, and staging build pass; pnpm audit reports zero advisories.

The Dockerfile pins official Node/Nginx base digests, upgrades available Alpine packages during the build, and copies only generated static files into the runtime image. The refreshed runtime scan reports zero findings, compared with five high and eight medium findings in the existing deployed image. These are point-in-time package scan results, not a guarantee that the application has no vulnerabilities. No automatic rebuild or maintenance job is installed.

Local browser checks cover eight content routes at 320, 390, 768, and 1440 pixels, accessibility at 390/1440 pixels, images, disclosures, the mobile menu, project controls, lightbox, return navigation, and operation without JavaScript. Review artifacts are outside Git under `/home/ubuntu/website-review/security-20261021` and `/home/ubuntu/website-review/security-*`.

Before an explicitly authorized production promotion, merge the reviewed branch and change the production build pack to `dockerfile`, Dockerfile location `/Dockerfile`, and `is_static=false`; preserve port 80, domain, proxy, limits, and production indexing. Ensure `SITE_ENV` is absent or `production`, never `staging`. A merge alone triggers the existing production auto-deploy, so coordinate that switch only with owner approval.

The previous staging settings are backed up in the private host directory `/root/ponytojas-security-20261021`. Staging rollback restores branch `improve/site-design`, build pack `nixpacks`, `is_static=true`, and `/dist`, retaining `SITE_ENV=staging` and noindex exclusions, then explicitly redeploys staging. Do not apply those settings to production.
