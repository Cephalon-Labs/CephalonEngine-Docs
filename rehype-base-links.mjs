/**
 * rehype-base-links — prefix the configured Astro `base` onto root-absolute,
 * site-internal links in Markdown / MDX content.
 *
 * WHY THIS EXISTS
 * ───────────────
 * Astro applies `base` automatically to built ASSET URLs (`/_astro/…`, the
 * site-ui script, styles) but NOT to `<a href>` / `<img src>` authored inside
 * page content. This site's content is written with root-absolute links such
 * as `/0-1-0-preview/guide/quickstart/`. With an empty `base` those are
 * correct, but under a non-empty `base` (e.g. `/CephalonEngine-Docs` on
 * GitHub Pages) they resolve to the wrong path and 404.
 *
 * This rehype plugin runs at build time and rewrites those links to include
 * the base. It is driven entirely by the `base` value passed from
 * astro.config.mjs, so it stays correct for ANY base — including `''` (custom
 * domain at the root), where it is a no-op.
 *
 * WHAT IT REWRITES
 *   • `href` / `src` on standard HTML elements — Markdown links (`[x](/y)`),
 *     Markdown images, and raw HTML in `.md` / `.mdx`.
 *   • `href` / `src` string attributes on JSX-syntax elements in `.mdx` —
 *     raw `<a>` / `<img>` and Starlight components such as `<LinkCard>`.
 *
 * WHAT IT DOES NOT TOUCH
 *   • External URLs, protocol-relative URLs (`//…`), fragment links (`#…`).
 *   • Links already carrying the base — idempotent, safe to re-run.
 *   • Expression attributes (`href={…}`) — value is not statically known.
 *   • Custom-component props not literally named `href` / `src` (HomeHero's
 *     `primaryCtaHref`, FeatureGrid's `features` array, …) — those are
 *     base-prefixed inside the components themselves via `withBase()`.
 */

const URL_KEYS = ['href', 'src'];

export default function rehypeBaseLinks(options = {}) {
  const prefix = String(options.base || '').replace(/\/+$/, '');

  // Empty base (site served from a domain root) → nothing to rewrite.
  if (!prefix) return () => {};

  /** True for a root-absolute, site-internal URL not already base-prefixed. */
  const needsPrefix = (url) =>
    typeof url === 'string' &&
    url.startsWith('/') &&
    !url.startsWith('//') &&
    url !== prefix &&
    !url.startsWith(`${prefix}/`);

  const walk = (node) => {
    if (!node || typeof node !== 'object') return;

    // Standard HTML elements: Markdown links/images + raw HTML in .md/.mdx.
    if (node.type === 'element' && node.properties) {
      for (const key of URL_KEYS) {
        if (needsPrefix(node.properties[key])) {
          node.properties[key] = prefix + node.properties[key];
        }
      }
    }
    // JSX-syntax elements in .mdx — raw `<a>`/`<img>` and components whose
    // first-class URL prop is literally `href`/`src` (e.g. `<LinkCard>`).
    else if (
      (node.type === 'mdxJsxFlowElement' || node.type === 'mdxJsxTextElement') &&
      Array.isArray(node.attributes)
    ) {
      for (const attr of node.attributes) {
        if (
          attr &&
          attr.type === 'mdxJsxAttribute' &&
          URL_KEYS.includes(attr.name) &&
          needsPrefix(attr.value)
        ) {
          attr.value = prefix + attr.value;
        }
      }
    }

    if (Array.isArray(node.children)) {
      for (const child of node.children) walk(child);
    }
  };

  return (tree) => {
    walk(tree);
  };
}
