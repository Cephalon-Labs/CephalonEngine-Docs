/**
 * Post-build link tests — every internal `<a href>` in every built HTML
 * page must resolve to an actual file under `dist/`.
 *
 * Catches issues invisible at source-level:
 *   • DocFX cross-references that survive slug normalization wrong.
 *   • Redirect-builder edge cases (e.g. `/section/index/` routes).
 *   • Starlight i18n auto-fallback paths that don't exist.
 *   • Slug-name mismatches in synced content.
 *
 * Requires `dist/` to exist (run `npx astro build` first). Skips
 * gracefully if absent so dev-machines without a fresh build don't fail.
 */

import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { DIST_ROOT, distExists } from './helpers.mjs';

/** Index every routable HTML file under dist/. */
function indexRoutes(dir, prefix = '/', acc = new Set()) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const abs = join(dir, entry.name);
    if (entry.isDirectory()) {
      indexRoutes(abs, prefix + entry.name + '/', acc);
    } else if (entry.name === 'index.html') {
      acc.add(prefix);
      const noSlash = prefix.replace(/\/$/, '');
      if (noSlash) acc.add(noSlash + '/');
    } else if (entry.name.endsWith('.html')) {
      acc.add(prefix + entry.name);
    }
  }
  return acc;
}

/** Scan one HTML file for broken internal hrefs. */
function findBrokenInFile(file, routes) {
  const text = readFileSync(file, 'utf8');
  const HREF_RE = /<a\b[^>]*\shref=["']([^"'#?]+)(?:[?#][^"']*)?["'][^>]*>/g;
  const broken = [];
  let m;
  while ((m = HREF_RE.exec(text)) !== null) {
    let href = m[1];
    if (/^([a-z]+:|\/\/|mailto:|tel:|#)/i.test(href)) continue;
    if (!href.startsWith('/')) continue;
    const hrefSlash = href.endsWith('/') ? href : href + '/';
    const hrefBare = href.replace(/\/$/, '');
    if (routes.has(href) || routes.has(hrefSlash) || routes.has(hrefBare + '/')) continue;
    const fsPath = join(DIST_ROOT, href);
    if (existsSync(fsPath) && !statSync(fsPath).isDirectory()) continue;
    broken.push(href);
  }
  return broken;
}

describe('built HTML has zero broken internal links', () => {
  if (!distExists()) {
    it.skip('dist/ does not exist — run `npx astro build` first', () => {});
    return;
  }

  const routes = indexRoutes(DIST_ROOT);

  it('indexed at least 100 routes (build looks complete)', () => {
    expect(routes.size).toBeGreaterThan(100);
  });

  it('every <a href> resolves to a real route or file', () => {
    const allBroken = new Map(); // href → file[]
    function walk(dir) {
      for (const entry of readdirSync(dir, { withFileTypes: true })) {
        if (entry.name === '_astro' || entry.name === 'pagefind') continue;
        const abs = join(dir, entry.name);
        if (entry.isDirectory()) {
          walk(abs);
        } else if (entry.name.endsWith('.html')) {
          const broken = findBrokenInFile(abs, routes);
          for (const href of broken) {
            if (!allBroken.has(href)) allBroken.set(href, []);
            allBroken.get(href).push(relative(DIST_ROOT, abs));
          }
        }
      }
    }
    walk(DIST_ROOT);

    const sortedByHref = [...allBroken.entries()].sort(
      (a, b) => b[1].length - a[1].length
    );
    const message = sortedByHref
      .slice(0, 30)
      .map(([href, files]) => `  ${href}  (${files.length} pages)`)
      .join('\n');

    expect(
      allBroken.size,
      `${allBroken.size} unique broken hrefs found in built HTML:\n${message}`
    ).toBe(0);
  });
});
