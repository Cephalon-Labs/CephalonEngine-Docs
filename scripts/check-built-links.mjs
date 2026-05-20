// Comprehensive link checker — parses every built HTML page in dist/ and
// verifies that every internal <a href> resolves to an actual file.
//
// Catches what the source-MDX scanner misses:
//   • relative links rewritten to absolute at build time
//   • DocFX-generated cross-namespace links (.Cephalon.Foo.md → /cephalon-foo/)
//   • synced engine-source docs that link to /docs/X (engine paths, not docs-site paths)
//   • case-sensitivity issues
//   • links that look fine in MDX but resolve weirdly after slug normalization
//
// Usage:
//   npx astro build         # need built output first
//   node scripts/check-built-links.mjs

import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { resolve, relative, join } from 'node:path';

const DIST = resolve('dist');
if (!existsSync(DIST)) {
  console.error('dist/ not found. Run `npx astro build` first.');
  process.exit(2);
}

// 1) Index every built HTML route.
const routes = new Set();
function indexHtml(dir, prefix = '/') {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const abs = join(dir, entry.name);
    if (entry.isDirectory()) {
      indexHtml(abs, prefix + entry.name + '/');
    } else if (entry.name === 'index.html') {
      const route = prefix;
      routes.add(route);
      // Also accept route without trailing slash (Astro emits both via trailingSlash).
      const noSlash = route.replace(/\/$/, '');
      if (noSlash) routes.add(noSlash + '/');
    } else if (entry.name.endsWith('.html')) {
      // pages may emit /path/file.html (rare in Astro static, but possible)
      routes.add(prefix + entry.name);
    }
  }
}
indexHtml(DIST);

// Also treat the existence of /sitemap-index.xml, /404.html, /favicon.svg as valid.
const extraFiles = ['/sitemap-index.xml', '/sitemap-0.xml', '/404.html', '/favicon.svg', '/robots.txt'];
for (const f of extraFiles) {
  if (existsSync(join(DIST, f.slice(1)))) routes.add(f);
}

// 2) Scan every HTML for internal hrefs.
// Capture group 1 = href value (without fragment/query).
const HREF_RE = /<a\b[^>]*\shref=["']([^"'#?]+)(?:[?#][^"']*)?["'][^>]*>/g;

const broken = [];
const skipScanDirs = new Set(['_astro', 'pagefind']);

function scanHtmlFiles(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (skipScanDirs.has(entry.name)) continue;
      scanHtmlFiles(join(dir, entry.name));
    } else if (entry.name.endsWith('.html')) {
      const file = join(dir, entry.name);
      const text = readFileSync(file, 'utf8');
      let m;
      while ((m = HREF_RE.exec(text)) !== null) {
        let href = m[1];
        // Skip external + special schemes.
        if (/^([a-z]+:|\/\/|mailto:|tel:|#)/i.test(href)) continue;
        // Skip in-page anchor or relative non-rooted (shouldn't happen in built HTML, but defensive).
        if (!href.startsWith('/')) continue;
        // Normalise — strip query string already done in regex.
        // Try both with and without trailing slash.
        const hrefSlash = href.endsWith('/') ? href : href + '/';
        const hrefBare = href.replace(/\/$/, '');
        if (routes.has(href) || routes.has(hrefSlash) || routes.has(hrefBare + '/')) continue;
        // Check if a file with extension exists (e.g. /sitemap-index.xml).
        const fsPath = join(DIST, href);
        if (existsSync(fsPath) && !statSync(fsPath).isDirectory()) continue;
        broken.push({ file: relative(DIST, file).replace(/\\/g, '/'), href });
      }
    }
  }
}
scanHtmlFiles(DIST);

// 3) Group by target href for triage.
const byTarget = new Map();
for (const b of broken) {
  if (!byTarget.has(b.href)) byTarget.set(b.href, new Set());
  byTarget.get(b.href).add(b.file);
}

const sorted = [...byTarget.entries()].sort((a, b) => b[1].size - a[1].size);

console.log(`Indexed ${routes.size} routes. Found ${broken.length} broken-link references to ${byTarget.size} unique targets.\n`);

const TOP = 50;
for (const [href, files] of sorted.slice(0, TOP)) {
  console.log(`\x1b[33m${href}\x1b[0m  (${files.size} pages link to this)`);
  const fileList = [...files].slice(0, 4);
  for (const f of fileList) console.log(`   ${f}`);
  if (files.size > 4) console.log(`   …+${files.size - 4} more`);
}
if (byTarget.size > TOP) console.log(`\n…+${byTarget.size - TOP} more unique broken targets (showing top ${TOP})`);

process.exit(broken.length > 0 ? 1 : 0);
