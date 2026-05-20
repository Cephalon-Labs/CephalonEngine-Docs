import { defineConfig } from 'vitest/config';

/**
 * Vitest configuration for the docs site.
 *
 * Two test "shapes":
 *
 *  • Source tests — run against MDX/MD source files. Fast, no build needed.
 *    Files: tests/{links,frontmatter,mdx-conventions}.test.mjs
 *
 *  • Built-output tests — require `dist/` to exist (run `npx astro build`
 *    first). Slower but catch issues only visible post-build (broken links
 *    after slug normalization, output size budgets).
 *    Files: tests/{built-links,build-output,performance}.test.mjs
 *
 * Both shapes run in the same suite; tests that need `dist/` skip with a
 * helpful message when it's missing.
 */
export default defineConfig({
  test: {
    include: ['tests/**/*.test.mjs'],
    /* Most tests do filesystem walking — generous timeout for the big
       built-output ones. */
    testTimeout: 60_000,
    /* Run tests in parallel where safe — the test files don't share state. */
    pool: 'threads',
    /* Reporter — verbose helps pinpoint which assertion failed in CI logs. */
    reporters: ['verbose'],
    /* Don't watch by default in CI; we rely on `npm test` running once. */
    watch: false,
    /* Coverage isn't relevant for a docs site (no application logic), but
       leaving the door open for future component tests. */
    coverage: { enabled: false },
  },
});
