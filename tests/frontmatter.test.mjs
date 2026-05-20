/**
 * Frontmatter tests.
 *
 * Every hand-authored content page must have valid frontmatter with at
 * minimum a `title` and `description`. The description shows up in
 * search results, OpenGraph cards, and the `<meta>` tag — pages without
 * one rank worse and look broken in shares.
 *
 * Also catches:
 *   • Duplicate slugs (Astro will silently overwrite one with another).
 *   • Frontmatter that fails YAML parsing.
 *   • Missing or empty title (page would render with the filename slug
 *     as the page title in some Starlight components).
 */

import { describe, it, expect } from 'vitest';
import { handAuthoredContentFiles, readContent, relativeToRepo } from './helpers.mjs';

const TITLE_LESS_PAGES = new Set([
  // Files that legitimately have no `title` (e.g. 404 page falls back to a
  // Starlight default). None right now, but the set is here for additions.
]);

const DESCRIPTION_LESS_PAGES = new Set([
  // Some auto-generated index pages legitimately don't ship a description.
  // The DocFX reference/api/* pages are excluded by handAuthoredContentFiles.
]);

describe('every hand-authored page has valid frontmatter', () => {
  const files = handAuthoredContentFiles();

  it('the test corpus is non-empty', () => {
    expect(files.length).toBeGreaterThan(50);
  });

  for (const file of files) {
    const relPath = relativeToRepo(file);
    it(relPath, () => {
      const { frontmatter } = readContent(file);

      expect(frontmatter.__invalid, `YAML frontmatter failed to parse in ${relPath}`).toBeFalsy();

      if (!TITLE_LESS_PAGES.has(relPath)) {
        expect(
          frontmatter.title && String(frontmatter.title).trim().length > 0,
          `Missing or empty 'title' in ${relPath}`
        ).toBe(true);
      }

      if (!DESCRIPTION_LESS_PAGES.has(relPath)) {
        expect(
          frontmatter.description && String(frontmatter.description).trim().length > 0,
          `Missing or empty 'description' in ${relPath} — shows up in search results and OG cards`
        ).toBe(true);
      }
    });
  }
});

describe('no duplicate slugs across content', () => {
  it('every slug is unique', () => {
    const slugMap = new Map();
    const duplicates = [];
    for (const file of handAuthoredContentFiles()) {
      const { frontmatter } = readContent(file);
      if (!frontmatter.slug) continue;
      if (slugMap.has(frontmatter.slug)) {
        duplicates.push(`${frontmatter.slug} → ${slugMap.get(frontmatter.slug)} & ${relativeToRepo(file)}`);
      } else {
        slugMap.set(frontmatter.slug, relativeToRepo(file));
      }
    }
    expect(duplicates, `Duplicate slugs found:\n  ${duplicates.join('\n  ')}`).toEqual([]);
  });
});
