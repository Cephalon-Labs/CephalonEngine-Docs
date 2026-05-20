/**
 * Build-output integrity tests.
 *
 * After `npx astro build`, certain files MUST exist and have plausible
 * content. If a build silently drops these, search / SEO / sitemap-aware
 * tooling falls over without any visible error in the build log.
 *
 * Requires `dist/`. Skips otherwise.
 */

import { describe, it, expect } from 'vitest';
import { existsSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { DIST_ROOT, distExists, walkFiles, dirSize, formatBytes } from './helpers.mjs';

describe('build output has the expected shape', () => {
  if (!distExists()) {
    it.skip('dist/ does not exist — run `npx astro build` first', () => {});
    return;
  }

  it('homepage HTML is present and non-empty', () => {
    const home = join(DIST_ROOT, 'index.html');
    expect(existsSync(home)).toBe(true);
    expect(statSync(home).size).toBeGreaterThan(1024);
  });

  it('Thai homepage HTML is present', () => {
    expect(existsSync(join(DIST_ROOT, 'th/index.html'))).toBe(true);
  });

  it('sitemap-index.xml is generated', () => {
    expect(existsSync(join(DIST_ROOT, 'sitemap-index.xml'))).toBe(true);
  });

  it('at least one sitemap-N.xml shard is generated', () => {
    const shards = walkFiles(DIST_ROOT, (f) => /sitemap-\d+\.xml$/.test(f));
    expect(shards.length).toBeGreaterThan(0);
  });

  it('Pagefind search index is generated', () => {
    expect(existsSync(join(DIST_ROOT, 'pagefind'))).toBe(true);
    expect(existsSync(join(DIST_ROOT, 'pagefind/pagefind.js'))).toBe(true);
  });

  it('404 page is present (both English and Thai)', () => {
    expect(existsSync(join(DIST_ROOT, '404.html'))).toBe(true);
    expect(existsSync(join(DIST_ROOT, 'th/404/index.html'))).toBe(true);
  });

  it('versioned section landing pages are present', () => {
    const sections = ['guide', 'tutorials', 'technology', 'migration', 'reference', 'contributing'];
    for (const s of sections) {
      const path = join(DIST_ROOT, '0-1-0-preview', s, 'index.html');
      expect(existsSync(path), `Missing: ${s}`).toBe(true);
    }
  });

  it('produces a reasonable number of pages (build looks complete)', () => {
    const htmlFiles = walkFiles(DIST_ROOT, (f) => f.endsWith('.html'));
    expect(htmlFiles.length).toBeGreaterThan(1000);
  });

  it('total dist/ size is within sanity budget (< 3 GB)', () => {
    /* The site currently builds ~3,800 pages × 2 locales × full Starlight
       chrome ≈ 2-2.5 GB. The 3 GB sanity budget catches order-of-magnitude
       regressions (someone committing a multi-GB binary, or a recursive
       redirect loop generating exponential pages) without flagging the
       genuinely-large baseline. */
    const total = dirSize(DIST_ROOT);
    expect(
      total,
      `dist/ is ${formatBytes(total)} — much larger than expected. Check for accidentally-committed binaries.`
    ).toBeLessThan(3 * 1024 * 1024 * 1024);
  });
});
