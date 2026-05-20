/**
 * Performance budget tests.
 *
 * Sets caps on output sizes so a runaway regression (e.g. someone embeds
 * a 50 MB image in a doc page, or a code block gets injected with the
 * full DocFX namespace tree) fails CI instead of shipping silently.
 *
 * Budgets are intentionally generous — they catch ORDER-OF-MAGNITUDE
 * problems, not micro-regressions.
 */

import { describe, it, expect } from 'vitest';
import { statSync } from 'node:fs';
import { join } from 'node:path';
import { DIST_ROOT, distExists, walkFiles, formatBytes, dirSize } from './helpers.mjs';

/* Page-size budgets, calibrated to the current site shape:
   • Authored content pages should stay under ~1.5 MB.
   • Synced engine-source pages (under `source/`) can be larger — they're
     dumps of long internal-planning docs we don't slim ourselves. We
     allow them up to 2.5 MB before flagging.
   • Individual asset files (images, fonts, etc.) cap at 5 MB.
   • Total JS budget covers Pagefind (~1 MB) + Astro client islands. */
const AUTHORED_PAGE_BUDGET = 1_500 * 1024;
const SYNCED_PAGE_BUDGET = 2_500 * 1024;
const ASSET_FILE_BUDGET = 5 * 1024 * 1024;
const TOTAL_JS_BUDGET = 5 * 1024 * 1024;

describe('performance budgets', () => {
  if (!distExists()) {
    it.skip('dist/ does not exist — run `npx astro build` first', () => {});
    return;
  }

  it(`authored pages stay under ${formatBytes(AUTHORED_PAGE_BUDGET)}; synced source pages under ${formatBytes(SYNCED_PAGE_BUDGET)}`, () => {
    const overBudget = [];
    const htmlFiles = walkFiles(DIST_ROOT, (f) => f.endsWith('.html'));
    for (const f of htmlFiles) {
      const size = statSync(f).size;
      const isSynced = /[\\\/]source[\\\/]/.test(f);
      const budget = isSynced ? SYNCED_PAGE_BUDGET : AUTHORED_PAGE_BUDGET;
      if (size > budget) {
        const label = isSynced ? 'synced' : 'authored';
        overBudget.push(`[${label}] ${f.replace(DIST_ROOT, '')}: ${formatBytes(size)}`);
      }
    }
    expect(
      overBudget,
      `Pages over budget:\n  ${overBudget.slice(0, 10).join('\n  ')}`
    ).toEqual([]);
  });

  it(`no single asset is larger than ${formatBytes(ASSET_FILE_BUDGET)}`, () => {
    const overBudget = [];
    const assetFiles = walkFiles(
      DIST_ROOT,
      (f) =>
        !f.endsWith('.html') &&
        !f.endsWith('.xml') &&
        !f.endsWith('.txt') &&
        !f.endsWith('.json')
    );
    for (const f of assetFiles) {
      const size = statSync(f).size;
      if (size > ASSET_FILE_BUDGET) {
        overBudget.push(`${f.replace(DIST_ROOT, '')}: ${formatBytes(size)}`);
      }
    }
    expect(
      overBudget,
      `Assets exceeding ${formatBytes(ASSET_FILE_BUDGET)}:\n  ${overBudget.join('\n  ')}`
    ).toEqual([]);
  });

  it(`total JS output is under ${formatBytes(TOTAL_JS_BUDGET)}`, () => {
    const astroDir = join(DIST_ROOT, '_astro');
    const jsSize = walkFiles(astroDir, (f) => f.endsWith('.js')).reduce(
      (sum, f) => sum + statSync(f).size,
      0
    );
    expect(
      jsSize,
      `Total JS (in _astro/): ${formatBytes(jsSize)} — over budget. Likely a heavy dependency added unintentionally.`
    ).toBeLessThan(TOTAL_JS_BUDGET);
  });

  it('reports the breakdown by category (informational, never fails)', () => {
    const htmlSize = walkFiles(DIST_ROOT, (f) => f.endsWith('.html')).reduce(
      (s, f) => s + statSync(f).size,
      0
    );
    const cssSize = walkFiles(DIST_ROOT, (f) => f.endsWith('.css')).reduce(
      (s, f) => s + statSync(f).size,
      0
    );
    const jsSize = walkFiles(DIST_ROOT, (f) => f.endsWith('.js')).reduce(
      (s, f) => s + statSync(f).size,
      0
    );
    const imgSize = walkFiles(DIST_ROOT, (f) => /\.(png|jpe?g|webp|avif|svg|gif)$/.test(f)).reduce(
      (s, f) => s + statSync(f).size,
      0
    );
    const pagefindSize = dirSize(join(DIST_ROOT, 'pagefind'));
    const totalSize = dirSize(DIST_ROOT);
    // eslint-disable-next-line no-console
    console.log(`
  dist/ breakdown:
    HTML       ${formatBytes(htmlSize).padStart(10)}
    CSS        ${formatBytes(cssSize).padStart(10)}
    JS         ${formatBytes(jsSize).padStart(10)}
    Images     ${formatBytes(imgSize).padStart(10)}
    Pagefind   ${formatBytes(pagefindSize).padStart(10)}
    --
    Total      ${formatBytes(totalSize).padStart(10)}
`);
    expect(totalSize).toBeGreaterThan(0); // trivially true; we use this as a print step
  });
});
