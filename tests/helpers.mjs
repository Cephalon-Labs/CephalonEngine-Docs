/**
 * Shared helpers used across multiple test files.
 *
 * Keeping these in one place avoids duplicating filesystem walking and
 * MDX-frontmatter parsing logic in every test.
 */

import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { parse as parseYaml } from 'yaml';

export const REPO_ROOT = resolve(import.meta.dirname, '..');
export const CONTENT_ROOT = resolve(REPO_ROOT, 'src/content/docs');
export const DIST_ROOT = resolve(REPO_ROOT, 'dist');

/** Walk a directory recursively, yielding every file path. */
export function walkFiles(dir, predicate = () => true) {
  if (!existsSync(dir)) return [];
  const results = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const abs = join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...walkFiles(abs, predicate));
    } else if (predicate(abs)) {
      results.push(abs);
    }
  }
  return results;
}

/** All MDX/MD content pages (handwritten + synced). */
export function allContentFiles() {
  return walkFiles(CONTENT_ROOT, (f) => /\.(md|mdx)$/i.test(f));
}

/** Hand-authored content pages only (excludes synced source/* and DocFX api/*). */
export function handAuthoredContentFiles() {
  return walkFiles(CONTENT_ROOT, (f) => {
    if (!/\.(md|mdx)$/i.test(f)) return false;
    const normalised = f.replace(/\\/g, '/');
    if (/\/source\//.test(normalised)) return false;
    if (/\/reference\/api\//.test(normalised)) return false;
    return true;
  });
}

/** Strip YAML frontmatter from a file and return { frontmatter, body }. */
export function readContent(file) {
  const text = readFileSync(file, 'utf8');
  const match = text.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) {
    return { frontmatter: {}, body: text, raw: text };
  }
  let frontmatter = {};
  try {
    frontmatter = parseYaml(match[1]) ?? {};
  } catch {
    frontmatter = { __invalid: true };
  }
  return { frontmatter, body: match[2], raw: text };
}

/** Format a file path relative to repo root for friendly assertion failures. */
export function relativeToRepo(file) {
  return file.replace(REPO_ROOT, '').replace(/\\/g, '/').replace(/^\//, '');
}

/** Does `dist/` exist? Used to gate built-output tests with a skip. */
export function distExists() {
  return existsSync(DIST_ROOT) && existsSync(join(DIST_ROOT, 'index.html'));
}

/** Sum file sizes (bytes) of a directory, recursively. */
export function dirSize(dir) {
  if (!existsSync(dir)) return 0;
  let total = 0;
  for (const f of walkFiles(dir)) {
    total += statSync(f).size;
  }
  return total;
}

/** Human-readable byte sizes for assertion messages. */
export function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 ** 2) return `${(bytes / 1024).toFixed(1)} KB`;
  if (bytes < 1024 ** 3) return `${(bytes / 1024 ** 2).toFixed(2)} MB`;
  return `${(bytes / 1024 ** 3).toFixed(2)} GB`;
}
