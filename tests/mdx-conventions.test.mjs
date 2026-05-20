/**
 * MDX-convention tests.
 *
 * MDX has stricter syntax than plain Markdown — characters that work fine
 * in Markdown can break the parser. The most common foot-guns:
 *
 *   • `<UPPERCASE>` outside of code spans → parsed as a JSX component
 *     reference. Undefined component → render error at request time.
 *     We hit this in `<N>` (release notes versioning) and `<1s>` (latency
 *     callouts) before. Catch them at the source.
 *
 *   • `{...}` outside of code spans → JSX expression. Same failure mode.
 *
 *   • Bare `<` followed by digit inside a table cell → parser thinks it's
 *     starting a JSX tag.
 *
 * The check excludes code blocks (fenced + inline backticks) because
 * those legitimately contain `<T>`, `{key}`, `<1s` etc.
 */

import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { handAuthoredContentFiles, relativeToRepo } from './helpers.mjs';

/** Strip every region of an MDX file where MDX does NOT parse JSX —
   code blocks, template literals, JSX attribute strings, comments. */
function stripCode(text) {
  return text
    // Frontmatter YAML at the top — MDX leaves this opaque.
    .replace(/^---\n[\s\S]*?\n---\n/, '')
    // Fenced code blocks (```...```).
    .replace(/```[\s\S]*?```/g, '')
    // Inline backtick code (`...`).
    .replace(/`[^`\n]*`/g, '')
    // Multi-line JS template literals (used in JSX props like
    // `code={\`...\`}` to pass code snippets to components like CodeShowcase).
    // MDX treats the contents as a JS string, so `<Foo>` inside is literal.
    .replace(/=\{`[\s\S]*?`\}/g, '')
    .replace(/:\s*`[\s\S]*?`/g, '')
    // JSX attribute string values — `attr='...'` or `attr="..."`. Multi-line
    // because deployment.mdx etc. use multi-line description: '...' strings.
    .replace(/=\s*"[^"]*"/g, '')
    .replace(/=\s*'[^']*'/g, '')
    // JSX prop string values inside arrays of objects: `description: '...'`
    // or `description: "..."` (without `=` sign).
    .replace(/:\s*'[^']*'/g, '')
    .replace(/:\s*"[^"]*"/g, '')
    // HTML/JSX comments.
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, '');
}

/* Match patterns that look like accidental JSX. Excludes valid HTML-like
   constructs we use intentionally (e.g. `<div>`, `<span>`, lowercase tags). */
const JSX_LIKE_UPPERCASE = /<[A-Z][a-zA-Z0-9]*(\s|>|\/)/g;
const JSX_LIKE_DIGIT = /<\d/g;

const ALLOWED_JSX_COMPONENTS = new Set([
  // Astro components we deliberately use in MDX
  'CardGrid',
  'LinkCard',
  'PathCards',
  'StatStrip',
  'FeatureGrid',
  'CodeShowcase',
  'HomeHero',
  'Code',
  'Tabs',
  'TabItem',
  'Aside',
  'Steps',
  'Icon',
  'Badge',
  'Astro', // fragments etc.
]);

describe('MDX content uses no accidental JSX-like patterns', () => {
  for (const file of handAuthoredContentFiles()) {
    const relPath = relativeToRepo(file);
    it(relPath, () => {
      const stripped = stripCode(readFileSync(file, 'utf8'));

      // Find <Uppercase tags that AREN'T in the allowed component list.
      const uppercaseMatches = [...stripped.matchAll(JSX_LIKE_UPPERCASE)];
      const unexpectedComponents = [];
      for (const m of uppercaseMatches) {
        const componentName = m[0].match(/<([A-Z][a-zA-Z0-9]*)/)[1];
        if (!ALLOWED_JSX_COMPONENTS.has(componentName)) {
          unexpectedComponents.push(componentName);
        }
      }
      expect(
        [...new Set(unexpectedComponents)],
        `Accidental JSX-like uppercase pattern in ${relPath} — wrap in backticks if it's meant to be literal text:\n  ${unexpectedComponents.join(', ')}`
      ).toEqual([]);

      // Find `<digit` patterns — these always break MDX (digits can't start
      // a tag name in any spec, so MDX errors out).
      const digitMatches = [...stripped.matchAll(JSX_LIKE_DIGIT)];
      expect(
        digitMatches.map((m) => m[0]),
        `\`<\` followed by a digit in ${relPath} — wrap in backticks (e.g. \`<1s\`). MDX parses this as a JSX tag and fails:`
      ).toEqual([]);
    });
  }
});
