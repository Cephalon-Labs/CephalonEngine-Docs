/**
 * Source-level link tests.
 *
 * Walks every hand-authored MDX/MD page and asserts that every internal
 * link (`/0-1-0-preview/...`, `/about/...`) and every external link
 * (`https://...`) is well-formed.
 *
 * For SOURCE-level scanning we trust slug-name mapping from the content
 * collection — the comprehensive `built-links.test.mjs` covers the
 * post-build (`dist/`) reality.
 *
 * What this test catches that built-links can't:
 *   • Typos in MDX before `astro build` runs (no rebuild needed to detect).
 *   • Patterns that look right in MDX but blow up at parse time
 *     (e.g. unescaped `<UPPERCASE>` JSX-like text outside backticks —
 *     covered separately in mdx-conventions.test.mjs).
 *   • External URLs that aren't valid HTTPS / typo'd protocols.
 */

import { describe, it, expect } from 'vitest';
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { handAuthoredContentFiles, CONTENT_ROOT, relativeToRepo } from './helpers.mjs';

/** Returns true if the absolute URL looks well-formed for external linking. */
function isWellFormedExternal(url) {
  try {
    const u = new URL(url);
    return u.protocol === 'http:' || u.protocol === 'https:';
  } catch {
    return false;
  }
}

/**
 * Build the set of valid internal slugs by walking the content collection.
 * Mirrors Astro's slug logic: lowercase + replace dots/non-alphanum with
 * dashes for DocFX-style filenames.
 */
function buildSlugSet() {
  const slugs = new Set();
  const { readdirSync } = require('node:fs');
  function walk(dir, prefix = '') {
    if (!existsSync(dir)) return;
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const abs = resolve(dir, entry.name);
      const rel = prefix ? `${prefix}/${entry.name}` : entry.name;
      if (entry.isDirectory()) {
        walk(abs, rel);
      } else if (/\.(md|mdx)$/i.test(entry.name)) {
        let slug = rel
          .replace(/\\/g, '/')
          .replace(/(^|\/)index\.(md|mdx)$/i, '$1')
          .replace(/\.(md|mdx)$/i, '/');
        slug = slug
          .split('/')
          .map((seg) => seg.replace(/\./g, '-').toLowerCase())
          .join('/');
        if (!slug.endsWith('/')) slug += '/';
        slugs.add(`/${slug}`);
      }
    }
  }
  walk(CONTENT_ROOT);
  // Root + section-level redirects are always valid.
  slugs.add('/');
  for (const section of ['guide', 'tutorials', 'technology', 'migration', 'reference', 'contributing', 'source']) {
    slugs.add(`/${section}/`);
    slugs.add(`/0-1-0-preview/${section}/`);
  }
  return slugs;
}

// Pre-build the slug set once — re-used across every assertion.
const VALID_SLUGS = buildSlugSet();

// Capture absolute internal links: `[X](/path)` or `<a href="/path">`.
const INTERNAL_MD_LINK = /\]\((\/(?:0-1-0-preview|about)\/[^)\s#"]*)(#[^)\s"]*)?\)/g;
const INTERNAL_HREF = /href=["'](\/(?:0-1-0-preview|about)\/[^"'#]*)(#[^"']*)?["']/g;
// Capture external URLs: `[X](https://...)` or `href="https://..."`.
const EXTERNAL_MD_LINK = /\]\((https?:\/\/[^)\s"]*)\)/g;
const EXTERNAL_HREF = /href=["'](https?:\/\/[^"']*)["']/g;

describe('internal links resolve to real content pages', () => {
  for (const file of handAuthoredContentFiles()) {
    it(relativeToRepo(file), () => {
      const text = readFileSync(file, 'utf8');
      const matches = [
        ...text.matchAll(INTERNAL_MD_LINK),
        ...text.matchAll(INTERNAL_HREF),
      ];
      const broken = [];
      for (const m of matches) {
        let target = m[1];
        if (!target.endsWith('/')) target += '/';
        if (!VALID_SLUGS.has(target)) {
          broken.push(target);
        }
      }
      expect(broken, `Broken internal links in ${relativeToRepo(file)}:\n  ${broken.join('\n  ')}`).toEqual([]);
    });
  }
});

describe('external URLs are well-formed', () => {
  for (const file of handAuthoredContentFiles()) {
    it(relativeToRepo(file), () => {
      const text = readFileSync(file, 'utf8');
      const matches = [
        ...text.matchAll(EXTERNAL_MD_LINK),
        ...text.matchAll(EXTERNAL_HREF),
      ];
      const malformed = [];
      for (const m of matches) {
        const url = m[1].replace(/[.,;:!?]+$/, ''); // strip trailing punctuation
        if (!isWellFormedExternal(url)) {
          malformed.push(url);
        }
      }
      expect(malformed, `Malformed external URLs in ${relativeToRepo(file)}:\n  ${malformed.join('\n  ')}`).toEqual([]);
    });
  }
});
