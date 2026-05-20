/*
 * Cross-platform clean script.
 *
 * Removes every cache and build-artifact directory the site uses so the
 * next `npm run dev` / `npm run build` starts from a clean slate. Works on
 * Windows, macOS, and Linux because it uses Node's `fs.rmSync` instead of
 * a shell-specific `rm -rf` / `Remove-Item`.
 *
 * Add new entries to TARGETS below when more caches appear (e.g. Pagefind
 * intermediate output or Expressive Code's renderer cache if EC ever ships
 * one).
 */

import { existsSync, rmSync, statSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = fileURLToPath(new URL('..', import.meta.url));

/** Each entry is a path relative to the repo root that should be removed. */
const TARGETS = [
  '.astro',                 // Astro content/types cache
  'dist',                   // Astro build output
  'node_modules/.vite',     // Vite dependency cache
  'node_modules/.astro',    // Astro integration cache
  'node_modules/.cache',    // generic tooling cache
  'src/content/.astro',     // Starlight content-collection cache (older Astro)
];

const removed = [];
const skipped = [];

for (const relativePath of TARGETS) {
  const absolute = resolve(repoRoot, relativePath);
  if (!existsSync(absolute)) {
    skipped.push(relativePath);
    continue;
  }

  try {
    const stat = statSync(absolute);
    rmSync(absolute, { recursive: true, force: true });
    removed.push({ path: relativePath, kind: stat.isDirectory() ? 'dir' : 'file' });
  } catch (error) {
    console.error(`Failed to remove ${relativePath}: ${error.message}`);
    process.exitCode = 1;
  }
}

if (removed.length === 0) {
  console.log('Nothing to clean — all cache directories already absent.');
} else {
  console.log(`Cleaned ${removed.length} item(s):`);
  for (const { path, kind } of removed) {
    console.log(`  - ${path} (${kind})`);
  }
}

if (skipped.length > 0) {
  console.log(`Skipped (not present): ${skipped.join(', ')}`);
}
