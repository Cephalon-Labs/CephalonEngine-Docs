# CephalonEngine Docs

The official documentation site for **CephalonEngine** — a modular .NET 10 framework for building production-grade modular monoliths, microservices, and event-driven applications.

Built with [Astro](https://astro.build) 6 + [Starlight](https://starlight.astro.build/) 0.39, deployed to GitHub Pages on release.

## What this site is

A marketing-grade, multi-language, **multi-version** documentation site. Every shipped CephalonEngine version owns its own folder of curated guides, tutorials, technology catalogue, migration playbooks, reference, and contributing docs. A few site-wide pages (homepage, About) live at the root, outside the version model.

## URL structure

| Path | Versioned? | What's there |
| --- | --- | --- |
| `/` | no | Marketing homepage — hero with animated blob background, feature grid, path cards, code showcase |
| `/<versionId>/guide/...` | yes | Quickstart, installation (CLI / manual / IDE / CI), concepts, architecture, deployment, operations, compatibility |
| `/<versionId>/tutorials/...` | yes | End-to-end tutorials — `first-app` (8 steps), microservice suite, multi-tenant SaaS, gRPC, GraphQL, event-driven, **CQRS**, observability, testing, CI/CD, edge, retrieval, agentic |
| `/<versionId>/technology/...` | yes | Companion-package catalogue by domain — core, hosts, data, eventing, identity, multi-tenancy, observability, edge, agentics, retrieval, tooling, identifiers |
| `/<versionId>/migration/...` | yes | Playbooks for moving onto CephalonEngine and upgrading between versions |
| `/<versionId>/reference/...` | yes | Architecture, configuration, **components**, CLI, and DocFX-generated API reference (`reference/api/...`) |
| `/<versionId>/contributing/...` | yes | Engineering standards, module/provider authoring, package lifecycle, testing strategy, release process |
| `/<versionId>/source/...` | yes | Read-only synced snapshot of the engine repo's `docs/` folder |
| `/about/...` | **no** | Roadmap, backlog, release notes (per-version sub-pages), governance, FAQ, license, press kit. Site-wide, not tied to a version. |
| `/th/...` | (mirror) | Thai locale mirror of the structure above |

### Default-version redirects

Visiting an un-versioned URL like `/guide/quickstart/` or `/th/tutorials/` automatically forwards to the current version's equivalent (`/0-1-0-preview/guide/quickstart/`, `/th/0-1-0-preview/tutorials/`). This means "no version selected" always falls through to current — bookmarks and shared links keep working when a new version becomes current.

The redirects are generated at build time by walking the current version's section folders ([`astro.config.mjs#buildVersionRedirects`](astro.config.mjs)). Only the trailing-slash form of each route is emitted — Astro normalises `/x` and `/x/` to one route, so emitting both would collide.

### Languages

- **English** (root locale) — fully populated.
- **ภาษาไทย / Thai** (`/th/`) — landing pages and key entry points translated; untranslated pages fall back to English automatically.

## Architecture

```text
.github/workflows/deploy.yml    # GitHub Actions: on release published → build + deploy to Pages

Dockerfile                      # Multi-stage build — node:22-alpine builder → nginx:1.27-alpine runtime
docker-compose.yml              # Self-host service: port mapping, healthcheck, read-only hardening
docker/nginx.conf               # nginx config — gzip, cache headers, Astro routing, security headers
.dockerignore                   # Keeps the Docker build context lean

docs.versions.json              # Single source of truth for versions + current pointer
docs.site.mjs                   # Version helpers (paths, slugs, current resolver)
ec.config.mjs                   # Expressive Code config (shared by markdown + <Code> component)
astro.config.mjs                # Astro + Starlight + sitemap + astro-icon + redirects + prefetch
tsconfig.json                   # TypeScript config
vitest.config.mjs               # Vitest test-runner config

scripts/
├── sync-docs.mjs               # Pulls engine docs/* + DocFX API ref into <version>/source/ + reference/api/
├── clean.mjs                   # Cross-platform cache cleaner
├── check-links.mjs             # Source-level internal-link scanner (MDX/MD)
└── check-built-links.mjs       # Built-HTML link checker — validates every <a href> in dist/

public/
├── favicon.svg
└── scripts/
    └── site-ui.js              # Single shared, browser-cached UI script (see "Client behaviour")

tests/                          # Vitest suite — see "Testing"
├── helpers.mjs                 # Shared filesystem / frontmatter helpers
├── links.test.mjs              # Internal + external link validity (source MDX)
├── frontmatter.test.mjs        # Every page has title + description; no duplicate slugs
├── mdx-conventions.test.mjs    # No accidental JSX-like patterns that break the MDX parser
├── built-links.test.mjs        # Zero broken <a href> in built HTML
├── build-output.test.mjs       # Sitemap, Pagefind, 404, section roots all present
└── performance.test.mjs        # Per-page + total-output size budgets

src/
├── assets/                     # Brand logo SVGs referenced by Starlight
├── components/                 # 12 Astro components — Starlight overrides + marketing widgets
│   ├── Head.astro              # SEO meta + ClientRouter + the site-ui.js loader
│   ├── SiteTitle.astro         # Header with logo + nav links + mobile dropdown
│   ├── SocialIcons.astro       # Header right-group with VersionSwitcher + GitHub
│   ├── VersionSwitcher.astro   # Dropdown that preserves path when switching versions
│   ├── Sidebar.astro           # Per-section sidebar filter + API-reference tree pruning
│   ├── Footer.astro            # Site-wide footer — link columns + GitHub badges + support link
│   ├── HomeHero.astro          # Marketing hero with animated blobs + code preview
│   ├── FeatureGrid.astro       # Responsive feature cards
│   ├── PathCards.astro         # CTA cards for landing pages
│   ├── StatStrip.astro         # KPI strip
│   ├── CodeShowcase.astro      # Tabbed code showcase with EC highlighting
│   └── Logo.astro              # Inline brand logo SVG
├── content/
│   ├── docs/
│   │   ├── index.mdx           # Marketing homepage (English)
│   │   ├── 404.md
│   │   ├── about/              # Site-wide About section (not versioned)
│   │   ├── 0-1-0-preview/      # Current version's full doc set
│   │   │   ├── guide/          # ← curated
│   │   │   ├── tutorials/      # ← curated
│   │   │   ├── technology/     # ← curated
│   │   │   ├── migration/      # ← curated
│   │   │   ├── reference/
│   │   │   │   ├── architecture/   # ← curated
│   │   │   │   ├── configuration/  # ← curated
│   │   │   │   ├── components/     # ← curated (companion-package catalogue)
│   │   │   │   ├── cli/            # ← curated
│   │   │   │   └── api/            # ← sync-owned (DocFX output)
│   │   │   ├── contributing/   # ← curated
│   │   │   └── source/         # ← sync-owned (engine docs/* dump)
│   │   └── th/                 # Thai mirror (same structure)
│   └── i18n/                   # UI string overrides per locale (en.json, th.json)
├── lib/
│   └── version-routing.ts      # Pure helpers: detectVersion, versionHref, switchVersionHref, …
└── styles/
    ├── tokens.css              # Design tokens (colours, type scale, motion, accent tints, shadows)
    ├── custom.css              # Component styles (namespaced ce-*)
    └── print.css               # Print / Save-as-PDF stylesheet
```

## Design system

- **Typography**: IBM Plex Sans (Latin) + IBM Plex Sans Thai paired so both scripts render at matched x-height — no layout shift between locales. JetBrains Mono for code. Loaded from Google Fonts via a non-blocking pattern (`preload` + `media="print"` swap + `<noscript>` fallback) so the font CSS never blocks first paint.
- **Palette**: teal/cyan brand scale (`--ce-brand-*`), warm orange accent for kickers, semantic green/orange/red for status.
- **Dark/light mode**: Starlight's built-in switch. Every component flips cleanly via `[data-theme='dark']` tokens. Accent tints (`--ce-tint-accent-*`) and motion pairs (`--ce-tween`) are pre-composed tokens so hover/active states stay consistent and tunable in one place.
- **Icons**: Bootstrap Icons via [`astro-icon`](https://www.astroicon.dev/) (`<Icon name="bi:..." />`). SVGs inlined at build time — no font load, only the icons actually used end up in the bundle.
- **Animated background**: SVG goo-filter blob animation behind the hero, restyled with brand colours. Respects `prefers-reduced-motion`.
- **Code highlighting**: Expressive Code with **`light-plus` / `dark-plus`** Shiki themes — the Visual Studio palette C# developers see daily (purple keywords, teal types, yellow methods). Line numbers on for C#/JSON/YAML/XML; terminal frame for bash/PowerShell. Shared by markdown code blocks and the homepage `<Code>` showcase via [`ec.config.mjs`](ec.config.mjs).
- **Print**: dedicated `print.css` strips chrome, expands URLs into footnotes, keeps code blocks unbroken. Use the browser's "Print" or "Save as PDF".
- **Search**: Pagefind index built automatically over every locale.
- **SEO**: per-page `<canonical>`, OG tags, Twitter Card meta, JSON-LD `SoftwareApplication` schema, sitemap, robots.txt.

## Navigation & client behaviour

- **ClientRouter** — Astro's [View Transitions](https://docs.astro.build/en/guides/view-transitions/) router gives SPA-like navigation: a click fetches the next page's HTML and cross-fades the swap instead of a white-flash full reload. Every page is still a fully pre-rendered static HTML file — **no SEO impact**; crawlers fetch complete HTML per URL.
- **Link prefetch** — `prefetch: { defaultStrategy: 'hover' }` pre-downloads a page's HTML when the pointer hovers its link, so the click-to-render gap is mostly hidden.
- **`public/scripts/site-ui.js`** — one shared, long-URL-cached script holding all client behaviour: TOC↔URL-hash sync, mobile menu dropdown, version-switcher dropdown, hero copy-to-clipboard, code-showcase tabs, sidebar click feedback (`.ce-nav-pending`), top progress bar, and left-sidebar scroll preservation. Split into one-time (`document`/`window` listeners) and per-page (`astro:page-load`) setup so it survives ClientRouter swaps.

## Header & sidebar behaviour

- **Header nav** — five links (Get start, Tutorial, Contribute, API Reference, About). Versioned links target the active version; About links are root-relative. Responsive in three steps:
  - **≥ 72rem** — the five links render inline.
  - **50–72rem** — links collapse into a "Menu" dropdown that flows right after the logo (before the search box).
  - **≤ 50rem** — the Menu dropdown is absolutely centred between the logo and the right-side icons.
- **Version switcher** — sits in the header right-group. Inside a versioned page it preserves your section when switching (`/0-1-0-preview/guide/quickstart/` → `/<other>/guide/quickstart/`). From a non-versioned page it links to that version's release-notes page.
- **Sidebar** — a custom override ([`src/components/Sidebar.astro`](src/components/Sidebar.astro)) shows each page only its own section set:
  - Guide / Tutorials / Technology / Migration → Set 1 (the four together)
  - Reference → Reference's sub-groups (Architecture, Configuration, Components, CLI, API Reference) promoted to top level
  - Contributing / About → flat list of that section's pages
  - **API-reference tree pruning** — the DocFX tree is ~1,600 entries; rendering all of them into every page would bloat each API page to ~600 KB. The sidebar prunes it to the path of the current page (ancestors expanded, off-path namespaces collapsed to a link), keeping each API page ~50–160 KB.
- **Footer** — brand block + live GitHub status badges (stars, forks, release, issues, last commit, license — from shields.io) + 4 link columns + a support/sponsor link. Container queries adapt the column count to the *footer's* rendered width.

## Local workflow

Install dependencies:

```powershell
npm install
```

### Develop & build

```powershell
npm run dev          # dev server
npm run build        # astro check && astro build → dist/
npm run preview      # preview the built output
npm run check        # astro check (type-check only)
```

### Quality gates

```powershell
npm test                 # full Vitest suite (source + built-output tests)
npm run test:source      # fast — source MDX tests only (no build needed)
npm run test:built       # built-output tests (run `npm run build` first)
npm run check-links      # source-level internal-link scan
npm run check-built-links # validate every <a href> in dist/ (run after a build)
```

### Docker (self-hosting)

```powershell
npm run docker:build     # docker build -t cephalonengine-docs .
npm run docker:up        # docker compose up -d --build → http://localhost:8080
npm run docker:down      # docker compose down
```

### Maintenance

```powershell
npm run sync-docs        # pull engine docs/* + DocFX API reference into the version folders
npm run clean            # clear Astro / Vite / dist / integration caches
npm run clean:build      # clean + build in one step
```

## Testing

The [`tests/`](tests/) directory holds a [Vitest](https://vitest.dev/) suite (run with `npm test`). Two shapes:

- **Source tests** — run against MDX/MD source, no build required:
  - `links.test.mjs` — every internal link resolves to a real page; every external URL is well-formed.
  - `frontmatter.test.mjs` — every page has a `title` + `description`; no duplicate slugs.
  - `mdx-conventions.test.mjs` — no accidental JSX-like patterns (`<Uppercase>`, `<digit`) that break the MDX parser.
- **Built-output tests** — require `dist/` (`npm run build` first), skip gracefully otherwise:
  - `built-links.test.mjs` — zero broken `<a href>` across every built HTML page.
  - `build-output.test.mjs` — sitemap, Pagefind index, 404, and section landing pages all present.
  - `performance.test.mjs` — per-page and total-output size budgets.

CI-friendly: `npm run build && npm test` runs everything.

## Docker / self-hosting

The site is fully static, so the image is a two-stage build ([`Dockerfile`](Dockerfile)):

1. **builder** (`node:22-alpine`) — `npm ci` + `npm run build`.
2. **runtime** (`nginx:1.27-alpine`) — serves `dist/` with gzip, long-cache headers for hashed assets, Astro directory-format routing, and security headers ([`docker/nginx.conf`](docker/nginx.conf)).

```powershell
docker compose up -d --build      # → http://localhost:8080
```

Build-time config via `--build-arg` (or the compose `args:` block): `DOCS_SITE_URL` (canonical + sitemap) and `DOCS_BASE_PATH` (sub-path; empty for domain root). The synced engine docs are committed to the repo, so the image builds with no access to the CephalonEngine source repository.

## Editing rules

- **Curated content** lives under `src/content/docs/<versionId>/{guide,tutorials,technology,migration,reference,contributing}/` and `src/content/docs/about/`. Hand-authored — edit freely.
- **Sync-owned content** lives under `src/content/docs/<versionId>/source/` and `src/content/docs/<versionId>/reference/api/`. **Never edit by hand** — the sync script rewrites these on every run.
- The sync workflow is read-only against the engine repo (default `D:\SaaS\CephalonEngine\`). This repo never edits files there.

## Adding a new version

1. Add a new entry to [`docs.versions.json`](docs.versions.json) with a URL-safe `id` (e.g. `0-2-0-preview`), human-facing `label` (e.g. `0.2.0-preview`), and source paths.
2. If the new version becomes current, set `"currentVersion": "<new-id>"` at the top of the file — the default-version redirects regenerate to point at it on the next build.
3. Create the curated content folder: `src/content/docs/<new-id>/` with `guide/`, `tutorials/`, etc. (you can copy from the previous version as a starting point).
4. Run `npm run sync-docs` to write the synced `<new-id>/source/` and `<new-id>/reference/api/` content.
5. Add a per-version release-notes page under `src/content/docs/about/release-notes/`.
6. Commit everything (hand-authored + synced) and cut a release.

## Adding a new locale

1. Add an entry to `locales` in [`astro.config.mjs`](astro.config.mjs):

   ```js
   locales: {
     root: { label: 'English', lang: 'en' },
     th: { label: 'ภาษาไทย', lang: 'th' },
     ja: { label: '日本語', lang: 'ja' },   // ← new
   }
   ```

2. Add a JSON file at `src/content/i18n/<lang>.json` with Starlight UI string overrides.
3. Create `src/content/docs/<lang>/` and mirror the folder structure. Translate page-by-page — untranslated pages fall back to English automatically.
4. If the locale needs different fonts or vertical leading, add `:lang(<code>) { ... }` rules in [`src/styles/custom.css`](src/styles/custom.css) — see the existing `:lang(th)` rules.

## Deployment

[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) runs on:

- **`release: published`** — the primary trigger. Create a GitHub release, give it a tag, publish. The workflow runs `npm ci && npm run build`, uploads `dist/` as the Pages artifact, and deploys.
- **`workflow_dispatch`** — manual trigger from the Actions tab.

Push-to-`main` is **not** a trigger — merges stay in the repo until you cut a release.

### Production URLs baked into the build

```yaml
DOCS_SITE_URL: https://cephalon-labs.github.io
DOCS_BASE_PATH: /CephalonEngine
```

These flow into [`astro.config.mjs`](astro.config.mjs) via `process.env`. Canonical tags, sitemap entries, and asset URLs use `https://cephalon-labs.github.io/CephalonEngine/...`. If you later bind a custom domain via a `CNAME` in `public/`, set `DOCS_BASE_PATH: ''`.

### One-time setup on GitHub

Enable Pages with the source set to **GitHub Actions** (`Settings → Pages → Build and deployment → Source: GitHub Actions`). The first published release then deploys automatically.

## Key files

| File | Purpose |
| --- | --- |
| [`astro.config.mjs`](astro.config.mjs) | Astro + Starlight integration, locales, component overrides, redirects, sitemap, prefetch |
| [`ec.config.mjs`](ec.config.mjs) | Expressive Code shared config (themes, plugins, style overrides) |
| [`docs.versions.json`](docs.versions.json) | Versions list + `currentVersion` pointer |
| [`docs.site.mjs`](docs.site.mjs) | Version-helper exports consumed by Astro config + sync script |
| [`vitest.config.mjs`](vitest.config.mjs) | Vitest test-runner config |
| [`Dockerfile`](Dockerfile) / [`docker-compose.yml`](docker-compose.yml) | Self-hosting — multi-stage nginx image |
| [`src/lib/version-routing.ts`](src/lib/version-routing.ts) | Runtime URL helpers used by header / sidebar / footer / version switcher |
| [`public/scripts/site-ui.js`](public/scripts/site-ui.js) | Shared, cached client-behaviour script |
| [`scripts/sync-docs.mjs`](scripts/sync-docs.mjs) | Engine docs + DocFX → `<version>/source/` + `<version>/reference/api/` |
| [`scripts/check-built-links.mjs`](scripts/check-built-links.mjs) | Built-HTML broken-link checker |
