import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';

import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';
import icon from 'astro-icon';
import { defineConfig } from 'astro/config';
import { parse as parseYaml } from 'yaml';

import {
  currentVersionId,
  referenceHrefToSlug,
  repoRoot,
  versions,
} from './docs.site.mjs';
import rehypeBaseLinks from './rehype-base-links.mjs';

const defaultSiteUrl = 'https://cephalon-labs.github.io';
const defaultBasePath = '';
const basePath = process.env.DOCS_BASE_PATH ?? defaultBasePath;

/**
 * Sections that live inside a version folder. Visiting their non-versioned
 * URL (e.g. `/guide/quickstart/`) should forward to the current version's
 * equivalent (e.g. `/0-1-0-preview/guide/quickstart/`), so "no version
 * selected" always falls through to current.
 */
const VERSIONED_SECTIONS = ['guide', 'tutorials', 'technology', 'migration', 'reference', 'contributing'];

/**
 * Walk every Markdown / MDX file under the current-version section folders and
 * emit a redirect from the un-versioned URL to the versioned one. Astro does
 * not support dynamic `[...slug]` destinations, so we have to enumerate.
 */
function buildVersionRedirects() {
  const redirects = {};
  const docsDir = resolve(repoRoot, 'src', 'content', 'docs');

  for (const localePrefix of ['', '/th']) {
    /* Always walk the ENGLISH content tree to enumerate routes — Starlight
       auto-falls-back to English when a Thai translation is missing, so
       every English route is reachable under `/th/...` too. Walking only
       the Thai folder (which has a fraction of the content) misses most
       of the redirects users actually click on. */
    const localeRoot = resolve(docsDir, currentVersionId);

    for (const section of VERSIONED_SECTIONS) {
      const sectionDir = resolve(localeRoot, section);
      if (!existsSync(sectionDir)) continue;

      // Section root → versioned root. Emit ONLY the trailing-slash form:
      // Astro normalises `/section` and `/section/` to the same route, so
      // defining both keys triggers a "route collision" warning (a hard
      // error in future Astro versions). The single `/section/` key still
      // catches no-slash requests via that same normalisation.
      redirects[`${localePrefix}/${section}/`] = `${localePrefix}/${currentVersionId}/${section}/`;

      walkContentFiles(sectionDir, (relativeFromSection) => {
        const normalized = relativeFromSection.replace(/\\/g, '/');
        /* Skip DocFX-generated API reference files. Their filenames have
           dots (Cephalon.Foo.Bar.md) and a custom slug in frontmatter
           (cephalon-foo-bar) — using the filename as the redirect target
           produces wrong destinations. Users don't bookmark deep namespace
           pages anyway. */
        if (/^api\//.test(normalized)) return;

        const route = normalized
          // Strip `index.md(x)` at the start OR after a slash — without the
          // `(^|\/)` anchor the regex only matched NESTED indexes like
          // `installation/index.mdx` and left top-level `index.mdx` as
          // `index/`, producing broken `/section/index/` redirects.
          .replace(/(^|\/)index\.(md|mdx)$/i, '$1')
          .replace(/\.(md|mdx)$/i, '/');
        const cleaned = route === '/' ? '' : route.replace(/\/$/, '/');
        const from = `${localePrefix}/${section}${cleaned === '' ? '' : `/${cleaned}`}`;
        const to = `${localePrefix}/${currentVersionId}/${section}${cleaned === '' ? '' : `/${cleaned}`}`;
        // Emit ONLY the trailing-slash form. Astro treats `/x` and `/x/` as
        // the same route — defining both is a collision warning (→ hard
        // error in future Astro). The `/x/` key still matches `/x` requests.
        const fromSlash = `${from.replace(/\/+$/, '')}/`;
        const toSlash = `${to.replace(/\/+$/, '')}/`;
        redirects[fromSlash] = toSlash;
      });
    }
  }

  return redirects;
}

function walkContentFiles(dir, onRelativePath, prefix = '') {
  if (!existsSync(dir)) return;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const absolute = resolve(dir, entry.name);
    const relative = prefix ? `${prefix}/${entry.name}` : entry.name;
    if (entry.isDirectory()) {
      walkContentFiles(absolute, onRelativePath, relative);
    } else if (/\.(md|mdx)$/i.test(entry.name)) {
      onRelativePath(relative);
    }
  }
}

const referenceCategoryLabels = new Set([
  'Classes',
  'Constructors',
  'Delegates',
  'Enums',
  'Events',
  'Fields',
  'Interfaces',
  'Methods',
  'Operators',
  'Properties',
  'Records',
  'Structs',
]);

function buildReferenceTreeItems(versionId, tocItems = []) {
  return tocItems
    .filter((item) => item?.name && !referenceCategoryLabels.has(item.name))
    .map((item) => {
      const nestedItems = buildReferenceTreeItems(versionId, item.items ?? []);
      const href = typeof item.href === 'string' ? item.href : null;

      if (nestedItems.length > 0) {
        const groupItems = href
          ? [{ slug: referenceHrefToSlug(versionId, href), label: 'Overview' }, ...nestedItems]
          : nestedItems;

        return {
          label: item.name,
          items: groupItems,
        };
      }

      if (!href) {
        return null;
      }

      return {
        slug: referenceHrefToSlug(versionId, href),
        label: item.name,
      };
    })
    .filter(Boolean);
}

function buildVersionedApiNamespaceTree(versionId) {
  const tocPath = resolve(
    repoRoot,
    'src',
    'content',
    'docs',
    versionId,
    'reference',
    'api',
    'toc.yml'
  );

  if (!existsSync(tocPath)) return [];

  const tocDocument = parseYaml(readFileSync(tocPath, 'utf8')) ?? [];
  return buildReferenceTreeItems(versionId, Array.isArray(tocDocument) ? tocDocument : []);
}

/**
 * Build a version-scoped sidebar tree. Every version gets the same per-version
 * sections (Guide, Tutorials, Technology, Migration, Reference, Contributing,
 * Engine source docs). The Sidebar.astro override picks just the relevant slice
 * based on the current URL so users only see one set at a time.
 */
function buildVersionSidebar(version) {
  const namespaceTree = buildVersionedApiNamespaceTree(version.id);

  /*
   * Flatten the namespace tree:
   *   • Drop the "Namespace tree" wrapper level.
   *   • Drop the single top-level "Cephalon" wrapper (every shipped
   *     namespace starts with `Cephalon.*` so the prefix carries no info).
   *   • The Cephalon-namespace landing page (Cephalon.md → "Overview") sits
   *     as the FIRST item under API Reference — merging the two redundant
   *     "Overview" entries (API ref index + Cephalon namespace) into one.
   */
  let apiReferenceItems;
  if (
    namespaceTree.length === 1 &&
    namespaceTree[0].label === 'Cephalon' &&
    Array.isArray(namespaceTree[0].items)
  ) {
    apiReferenceItems = namespaceTree[0].items;
  } else {
    apiReferenceItems = [
      { slug: `${version.id}/reference/api`, label: 'Overview' },
      ...namespaceTree,
    ];
  }

  /* Starlight 0.39+: `autogenerate` is no longer a direct property of a
     group — it has to live INSIDE the group's `items` array. The shape:
       { label, collapsed, items: [{ autogenerate: { directory } }] } */
  const referenceItems = [
    { slug: `${version.id}/reference`, label: 'Overview' },
    {
      label: 'Architecture',
      collapsed: true,
      items: [{ autogenerate: { directory: `${version.id}/reference/architecture` } }],
    },
    {
      label: 'Configuration',
      collapsed: true,
      items: [{ autogenerate: { directory: `${version.id}/reference/configuration` } }],
    },
    {
      label: 'Components',
      collapsed: true,
      items: [{ autogenerate: { directory: `${version.id}/reference/components` } }],
    },
    {
      label: 'CLI',
      collapsed: true,
      items: [{ autogenerate: { directory: `${version.id}/reference/cli` } }],
    },
    {
      label: 'API Reference',
      collapsed: true,
      items: apiReferenceItems,
    },
  ];

  return {
    label: `${version.label}${version.status === 'current' ? ' · Current' : ''}`,
    collapsed: false,
    items: [
      {
        label: 'Guide',
        collapsed: false,
        items: [
          { slug: `${version.id}/guide`, label: 'Overview' },
          { slug: `${version.id}/guide/quickstart` },
          {
            // Capitalized group label — otherwise Starlight uses the
            // directory name `installation` (lowercase) verbatim.
            label: 'Installation',
            collapsed: true,
            items: [
              { slug: `${version.id}/guide/installation`, label: 'Overview' },
              { slug: `${version.id}/guide/installation/cli` },
              { slug: `${version.id}/guide/installation/manual` },
              { slug: `${version.id}/guide/installation/ide` },
              { slug: `${version.id}/guide/installation/ci` },
            ],
          },
          { slug: `${version.id}/guide/concepts` },
          { slug: `${version.id}/guide/architecture` },
          { slug: `${version.id}/guide/compatibility` },
          { slug: `${version.id}/guide/deployment` },
          { slug: `${version.id}/guide/operations` },
        ],
      },
      {
        label: 'Tutorials',
        collapsed: true,
        items: [{ autogenerate: { directory: `${version.id}/tutorials` } }],
      },
      {
        label: 'Technology',
        collapsed: true,
        items: [{ autogenerate: { directory: `${version.id}/technology` } }],
      },
      {
        label: 'Migration',
        collapsed: true,
        items: [{ autogenerate: { directory: `${version.id}/migration` } }],
      },
      { label: 'Reference', items: referenceItems, collapsed: true },
      {
        label: 'Contributing',
        collapsed: true,
        items: [{ autogenerate: { directory: `${version.id}/contributing` } }],
      },
      {
        label: 'Engine source docs',
        collapsed: true,
        items: [{ autogenerate: { directory: `${version.id}/source` } }],
      },
    ],
  };
}

function buildSidebar() {
  return [
    ...versions.map(buildVersionSidebar),
    {
      label: 'About',
      collapsed: false,
      items: [
        { slug: 'about' },
        { slug: 'about/roadmap' },
        { slug: 'about/backlog' },
        {
          // Capitalized group label — autogenerate would use the
          // directory name `release-notes` (lowercase) verbatim.
          label: 'Release notes',
          collapsed: true,
          items: [
            { slug: 'about/release-notes', label: 'Overview' },
            // Newer versions first (top of the list).
            { slug: 'about/release-notes/0-2-0-preview' },
            { slug: 'about/release-notes/0-1-0-preview' },
          ],
        },
        { slug: 'about/governance' },
        { slug: 'about/faq' },
        { slug: 'about/license' },
        { slug: 'about/press-kit' },
      ],
    },
  ];
}

export default defineConfig({
  site: process.env.DOCS_SITE_URL ?? defaultSiteUrl,
  base: basePath,
  redirects: buildVersionRedirects(),

  /* Content-link base rewriting. Astro applies `base` to built asset URLs
     but NOT to `<a href>` / `<img src>` written inside Markdown/MDX content.
     This site's content uses root-absolute links (`/0-1-0-preview/…`); under
     a non-empty `base` they would 404. rehypeBaseLinks rewrites them at
     build time — see ./rehype-base-links.mjs. */
  markdown: {
    rehypePlugins: [[rehypeBaseLinks, { base: basePath }]],
  },

  /* Performance — prefetch link targets on hover so subsequent navigations
     feel instant. Astro's `hover` strategy prefetches the next page's HTML
     when the user mouses over a link. The HTML is typically ~150-660 KB
     but heavily compressible, so a hover-time fetch (~50-200 ms) hides
     most of the network latency by the time the click lands. */
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  integrations: [
    /* astro-icon inlines SVGs from any Iconify collection at build time —
       no runtime CSS, no font load. We use the `bi` collection (Bootstrap
       Icons) by name like `<Icon name="bi:github" />`. Only the icon files
       are pulled in; none of Bootstrap's layout/utility CSS is imported. */
    icon({
      include: { bi: ['*'] },
    }),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', th: 'th' },
      },
    }),
    starlight({
      title: 'CephalonEngine',
      description:
        'CephalonEngine is a modular .NET 10 framework for building production-grade modular monoliths, microservices, and event-driven applications.',
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'English',
          lang: 'en',
        },
        th: {
          label: 'ภาษาไทย',
          lang: 'th',
        },
      },
      logo: {
        light: './src/assets/logo-light.svg',
        dark: './src/assets/logo-dark.svg',
        replacesTitle: true,
      },
      customCss: ['./src/styles/tokens.css', './src/styles/custom.css', './src/styles/print.css'],
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/Cephalon-Labs/CephalonEngine',
        },
      ],
      editLink: {
        baseUrl: 'https://github.com/Cephalon-Labs/CephalonEngine-Docs/edit/main/',
      },
      sidebar: buildSidebar(),
      lastUpdated: true,
      pagination: true,
      favicon: '/favicon.svg',
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 4 },
      head: [
        {
          tag: 'meta',
          attrs: {
            name: 'theme-color',
            content: '#0f5d73',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'twitter:card',
            content: 'summary_large_image',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'twitter:site',
            content: '@CephalonLabs',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:type',
            content: 'website',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:site_name',
            content: 'CephalonEngine Docs',
          },
        },
        /* Font loading — split into preconnect + preload + async stylesheet
           so the font CSS doesn't block first-paint:
             1. `preconnect` — open TCP+TLS to fonts.googleapis.com early
             2. `preload` — fetch the CSS in the background
             3. `stylesheet media="print" onload="this.media='all'"` —
                applies the CSS once it lands without blocking render
             4. `<noscript>` fallback for users with JS disabled
           Result: text remains visible during load (display=swap), and
           the browser doesn't block render waiting for the font CSS. */
        {
          tag: 'link',
          attrs: {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossorigin: 'anonymous',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'preload',
            as: 'style',
            href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Sans+Thai:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Sans+Thai:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap',
            media: 'print',
            onload: "this.media='all'",
          },
        },
        {
          tag: 'noscript',
          content:
            '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Sans+Thai:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap">',
        },
        {
          tag: 'script',
          attrs: { type: 'application/ld+json' },
          content: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'CephalonEngine',
            applicationCategory: 'DeveloperApplication',
            operatingSystem: 'Windows, Linux, macOS',
            description:
              'A modular .NET 10 framework for building production-grade modular monoliths, microservices, and event-driven applications.',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
          }),
        },
      ],
      components: {
        Head: './src/components/Head.astro',
        SiteTitle: './src/components/SiteTitle.astro',
        SocialIcons: './src/components/SocialIcons.astro',
        Sidebar: './src/components/Sidebar.astro',
        Footer: './src/components/Footer.astro',
        // Overridden to fix Pagefind search breaking under <ClientRouter /> —
        // stock Starlight mounts the search UI on `DOMContentLoaded`, which
        // never re-fires on a view-transition navigation. See Search.astro.
        Search: './src/components/Search.astro',
      },
      /* Expressive Code config lives in `./ec.config.mjs` at the project
         root so Starlight's <Code> component (used in CodeShowcase) can
         share the same renderer. Astro auto-loads ec.config.mjs. */
    }),
  ],

  /* Astro built-in minification — runs automatically in production:
       • CSS  — minified via esbuild/lightningcss (single-line, no whitespace)
       • JS   — minified via esbuild (variable mangling, dead-code elimination)
       • HTML — `compressHTML` is on by default (default true in Astro 6+),
                strips inter-tag whitespace and HTML comments.
     We tried adding @playform/compress for tighter HTML output but it
     OOM-crashed at 3,800+ HTML files. The default-on minification + Vite's
     CSS/JS pipeline is sufficient. GitHub Pages serves brotli over the
     wire, which compresses the remaining whitespace away anyway. */
  compressHTML: true,
});
