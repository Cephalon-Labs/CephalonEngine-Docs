# CephalonEngine Docs

The official documentation site for **CephalonEngine** — a modular .NET 10 framework for building production-grade modular monoliths, microservices, and event-driven applications.

Built with [Astro](https://astro.build) + [Starlight](https://starlight.astro.build/), deployed to GitHub Pages on release.

## What this site is

A marketing-grade, multi-language, **multi-version** documentation site. Every shipped CephalonEngine version owns its own folder of curated guides, tutorials, technology catalogue, migration playbooks, reference, and contributing docs. A few site-wide pages (homepage, About) live at the root, outside the version model.

## URL structure

| Path | Versioned? | What's there |
| --- | --- | --- |
| `/` | no | Marketing homepage — hero with animated blob background, feature grid, path cards, code showcase |
| `/<versionId>/guide/...` | yes | Quickstart, installation, concepts, architecture, deployment, operations, compatibility |
| `/<versionId>/tutorials/...` | yes | End-to-end tutorials — `first-app` (8 steps), microservice suite, multi-tenant SaaS, gRPC, GraphQL, eventing, observability, testing, CI/CD, edge, retrieval, agentic |
| `/<versionId>/technology/...` | yes | Companion-package catalogue by domain — core, hosts, data, eventing, identity, multi-tenancy, observability, edge, agentics, retrieval, tooling, identifiers |
| `/<versionId>/migration/...` | yes | Playbooks for moving onto CephalonEngine and upgrading between versions |
| `/<versionId>/reference/...` | yes | Architecture, configuration, CLI, and DocFX-generated API reference (`reference/api/...`) |
| `/<versionId>/contributing/...` | yes | Engineering standards, module/provider authoring, package lifecycle, testing strategy, release process |
| `/<versionId>/source/...` | yes | Read-only synced snapshot of the engine repo's `docs/` folder |
| `/about/...` | **no** | Roadmap, backlog, release notes, governance, FAQ, license, press kit. Site-wide, not tied to a version. |
| `/th/...` | (mirror) | Thai locale mirror of the structure above |

### Default-version redirects

Visiting an un-versioned URL like `/guide/quickstart/` or `/th/tutorials/` automatically forwards to the current version's equivalent (`/0-1-0-preview/guide/quickstart/`, `/th/0-1-0-preview/tutorials/`). This means "no version selected" always falls through to current — bookmarks and shared links keep working when a new version becomes current.

The redirects are generated at build time by walking the current version's section folders ([`astro.config.mjs#buildVersionRedirects`](astro.config.mjs)).

### Languages

- **English** (root locale) — fully populated.
- **ภาษาไทย / Thai** (`/th/`) — landing pages and key entry points translated; untranslated pages fall back to English automatically.

## Architecture

```text
.github/
└── workflows/
    └── deploy.yml              # GitHub Actions: on release published → build + deploy to Pages

docs.versions.json              # Single source of truth for versions + current pointer
docs.site.mjs                   # Version helpers (paths, slugs, current resolver)
ec.config.mjs                   # Expressive Code config (shared by markdown + <Code> component)
astro.config.mjs                # Astro + Starlight + sitemap + astro-icon + redirects

scripts/
├── sync-docs.mjs               # Pulls engine docs/* + DocFX API ref into <version>/source/ + <version>/reference/api/
└── clean.mjs                   # Cross-platform cache cleaner

src/
├── assets/                     # Brand logo SVGs referenced by Starlight
├── components/
│   ├── Head.astro              # SEO meta tags override
│   ├── SiteTitle.astro         # Header with logo + nav links + mobile dropdown
│   ├── SocialIcons.astro       # Header right-group with VersionSwitcher + GitHub
│   ├── VersionSwitcher.astro   # Dropdown that preserves path when switching versions
│   ├── Sidebar.astro           # Filters sidebar to one section set per URL
│   ├── Footer.astro            # Site-wide footer with link columns + GitHub status badges
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
│   │   │   │   ├── cli/            # ← curated
│   │   │   │   └── api/            # ← sync-owned (DocFX output)
│   │   │   ├── contributing/   # ← curated
│   │   │   └── source/         # ← sync-owned (engine docs/* dump)
│   │   └── th/                 # Thai mirror (same structure)
│   │       ├── index.mdx
│   │       ├── about/
│   │       └── 0-1-0-preview/...
│   └── i18n/                   # UI string overrides per locale (en.json, th.json)
├── lib/
│   └── version-routing.ts      # Pure helpers: detectVersion, versionHref, switchVersionHref, …
└── styles/
    ├── tokens.css              # Design tokens (colours, type scale, motion, shadows)
    ├── custom.css              # Component styles (namespaced ce-*)
    └── print.css               # Print / Save-as-PDF stylesheet
```

## Design system

- **Typography**: IBM Plex Sans (Latin) + IBM Plex Sans Thai paired so both scripts render at matched x-height and weight axis — no layout shift between locales. JetBrains Mono for code. All loaded from Google Fonts.
- **Palette**: teal/cyan brand scale (`--ce-brand-*`), warm orange accent for kickers, semantic green/orange/red for status.
- **Dark/light mode**: Starlight's built-in switch. Every component flips cleanly via `[data-theme='dark']` tokens. The hero preview window and code showcase track the active theme.
- **Icons**: Bootstrap Icons via [`astro-icon`](https://www.astroicon.dev/) (`<Icon name="bi:..." />`). SVGs inlined at build time — no font load, no runtime CSS, only the icons actually used end up in the bundle.
- **Animated background**: SVG goo-filter blob animation behind the hero, MQqMyo-style, restyled with brand colours. Respects `prefers-reduced-motion`.
- **Code highlighting**: Expressive Code with `github-light` / `github-dark` Shiki themes. Line numbers on for C#/JSON/YAML/XML by default; terminal frame for bash/PowerShell. Used both for markdown code blocks and the homepage `<Code>` showcase via [`ec.config.mjs`](ec.config.mjs).
- **Print**: dedicated `print.css` strips chrome, expands URLs into footnotes, keeps code blocks unbroken. Use the browser's "Print" or "Save as PDF".
- **Search**: Pagefind index built automatically over every locale.
- **SEO**: per-page `<canonical>`, OG tags, Twitter Card meta, JSON-LD `SoftwareApplication` schema, sitemap, robots.txt.

## Header & sidebar behaviour

- **Header nav** — five links (Get start, Tutorial, Contribute, API Reference, About). Versioned links target the active version; About links are root-relative.
- **Mobile dropdown** — at viewports < 72rem the inline header nav collapses into a centred "Menu" dropdown sitting between the logo and the search/hamburger icons. Position is `position: absolute` with auto-margin centring to avoid `transform` containing-block issues for the panel.
- **Version switcher** — sits in the header (before the GitHub icon on desktop, in the mobile drawer below). Preserves your current section when switching: on `/0-1-0-preview/guide/quickstart/`, picking another version takes you to `/<that-version>/guide/quickstart/`, falling back to the version's home if the page doesn't exist.
- **Sidebar** — filtered per-section by a custom override ([`src/components/Sidebar.astro`](src/components/Sidebar.astro)) so each page sees only its own set:
  - Guide / Tutorials / Technology / Migration → Set 1 (the four together)
  - Reference → Reference's sub-groups promoted to top level
  - Contributing → flat list of contributing pages
  - About → flat list of about pages
- **Footer** — brand block (logo, tagline) + live GitHub status badges (stars, forks, release, issues, last commit, license — all from shields.io) + 4 link columns. Container queries adapt the column count to the *footer's* rendered width, so doc pages with a narrow content panel get a tighter 2-column layout automatically.

## Local workflow

Install dependencies:

```powershell
npm install
```

Start the dev server:

```powershell
npm run dev
```

Build the static site:

```powershell
npm run build
```

Preview the built output:

```powershell
npm run preview
```

Sync versioned source docs + DocFX API reference from the engine repo:

```powershell
npm run sync-docs
```

Clear all caches (Astro, Vite, dist, integration caches) — useful when the dev server gets into a stale state, especially around virtual modules (`virtual:astro-icon`, content-collection types):

```powershell
npm run clean
```

Full clean rebuild in one step:

```powershell
npm run clean:build
```

## Editing rules

- **Curated content** lives under `src/content/docs/<versionId>/{guide,tutorials,technology,migration,reference,contributing}/` and `src/content/docs/about/`. Hand-authored — edit freely.
- **Sync-owned content** lives under `src/content/docs/<versionId>/source/` and `src/content/docs/<versionId>/reference/api/`. **Never edit by hand** — the sync script rewrites these on every run.
- The sync workflow is read-only against the engine repo (default `D:\SaaS\CephalonEngine\`). This repo never edits files there.

## Adding a new version

1. Add a new entry to [`docs.versions.json`](docs.versions.json) with a URL-safe `id` (e.g. `0-2-0-preview`), human-facing `label` (e.g. `0.2.0-preview`), and source paths.
2. If the new version becomes current, set `"currentVersion": "<new-id>"` at the top of the file — the default-version redirects regenerate to point at it on the next build.
3. Create the curated content folder: `src/content/docs/<new-id>/` with `guide/`, `tutorials/`, etc. (you can copy from the previous version as a starting point).
4. Run `npm run sync-docs` to write the synced `<new-id>/source/` and `<new-id>/reference/api/` content.
5. Commit everything (hand-authored + synced) and cut a release.

## Adding a new locale

1. Add an entry to `locales` in [`astro.config.mjs`](astro.config.mjs):

   ```js
   locales: {
     root: { label: 'English', lang: 'en' },
     th: { label: 'ภาษาไทย', lang: 'th' },
     ja: { label: '日本語', lang: 'ja' },   // ← new
   }
   ```

2. Add a JSON file at `src/content/i18n/<lang>.json` with Starlight UI string overrides (search prompt, theme switch labels, etc.).
3. Create `src/content/docs/<lang>/` and mirror the folder structure (`<lang>/index.mdx`, `<lang>/about/...`, `<lang>/<versionId>/...`). Translate page-by-page — untranslated pages fall back to English automatically.
4. If your new locale needs different fonts or vertical leading (Thai-style diacritic clearance), add `:lang(<code>) { ... }` rules in [`src/styles/custom.css`](src/styles/custom.css) — see the existing `:lang(th)` rules for reference.

## Deployment

[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) runs on:

- **`release: published`** — the primary trigger. Create a GitHub release in `github.com/Cephalon-Labs/CephalonEngine/releases/new`, give it a tag, publish. The workflow checks out the tag's commit, runs `npm ci && npm run build`, uploads `dist/` as the Pages artifact, and deploys.
- **`workflow_dispatch`** — manual trigger from the Actions tab. Useful for redeploys after a config tweak.

Push-to-`main` is **not** a trigger — every merge stays in the repo until you cut a release, at which point Pages picks it up.

### Production URLs baked into the build

```yaml
DOCS_SITE_URL: https://cephalon-labs.github.io
DOCS_BASE_PATH: /CephalonEngine
```

These flow into [`astro.config.mjs`](astro.config.mjs) which reads `process.env.DOCS_SITE_URL` / `DOCS_BASE_PATH`. All canonical tags, sitemap entries, and internal links will use `https://cephalon-labs.github.io/CephalonEngine/...`.

If you later bind a custom domain via a `CNAME` in `public/`, set `DOCS_BASE_PATH: ''` in the workflow.

### One-time setup on GitHub

Enable Pages with the source set to **GitHub Actions**:

```
Settings → Pages → Build and deployment → Source: GitHub Actions
```

After that, the first published release will deploy automatically.

## Key configuration files

| File | Purpose |
| --- | --- |
| [`astro.config.mjs`](astro.config.mjs) | Astro + Starlight integration, locales, components overrides, redirects, sitemap |
| [`ec.config.mjs`](ec.config.mjs) | Expressive Code shared config (themes, plugins, style overrides) — required separately so Starlight's `<Code>` component can use it |
| [`docs.versions.json`](docs.versions.json) | Versions list + `currentVersion` pointer |
| [`docs.site.mjs`](docs.site.mjs) | Version-helper exports consumed by Astro config + sync script |
| [`src/lib/version-routing.ts`](src/lib/version-routing.ts) | Runtime URL helpers used by header / sidebar / footer / version switcher |
| [`scripts/sync-docs.mjs`](scripts/sync-docs.mjs) | Engine docs + DocFX → `<version>/source/` + `<version>/reference/api/` |
| [`scripts/clean.mjs`](scripts/clean.mjs) | Cross-platform cache cleaner |
