/**
 * Helpers shared across header / sidebar / footer / version-switcher.
 *
 * All paths returned here are STRIPPED of the configured `base` URL — they
 * are joined to it again at render time via `withBase(...)`.
 *
 *   / (root)              → marketing homepage
 *   /<versionId>/...      → versioned curated content (guide, tutorials, …)
 *   /about/...            → non-versioned site-wide pages
 *
 * The known "section" inside a version (`guide`, `tutorials`, `technology`,
 * `migration`, `reference`, `contributing`, `source`) is what we try to
 * preserve when the user switches versions in the header.
 */

import docsVersionsConfig from '../../docs.versions.json';

interface VersionDef {
  id: string;
  label: string;
  status?: string;
}

interface DocsVersionsConfig {
  currentVersion: string;
  versions: VersionDef[];
}

const config = docsVersionsConfig as DocsVersionsConfig;

export const versions: VersionDef[] = config.versions;
export const currentVersion: VersionDef =
  versions.find((v) => v.id === config.currentVersion) ?? versions[0];

/** Sections that live inside a version folder. About is intentionally absent. */
export const VERSIONED_SECTIONS = [
  'guide',
  'tutorials',
  'technology',
  'migration',
  'reference',
  'contributing',
  'source',
] as const;
export type VersionedSection = (typeof VERSIONED_SECTIONS)[number];

/** Sections that live at the site root. */
export const ROOT_SECTIONS = ['about'] as const;
export type RootSection = (typeof ROOT_SECTIONS)[number];

const baseUrl = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');

/**
 * Prepend the configured base URL to a site-internal path.
 *
 * Safe to call on ANY href value — external URLs (`https:`, `mailto:` …),
 * protocol-relative URLs (`//…`) and fragment links (`#…`) are returned
 * untouched, and a path that already carries the base is not double-prefixed.
 * That lets components pass user-authored hrefs straight through it.
 */
export function withBase(path: string): string {
  if (!path) return path;
  // External URLs, protocol-relative URLs, fragments and bare queries: as-is.
  if (/^([a-z][a-z0-9+.-]*:|\/\/|#|\?)/i.test(path)) return path;
  if (!path.startsWith('/')) path = `/${path}`;
  // Already carries the base — don't double up.
  if (baseUrl && (path === baseUrl || path.startsWith(`${baseUrl}/`))) return path;
  return `${baseUrl}${path}`;
}

export function stripBase(pathname: string): string {
  if (baseUrl && pathname.startsWith(baseUrl)) {
    return pathname.slice(baseUrl.length) || '/';
  }
  return pathname;
}

/** "/th/0-1-0-preview/guide/" → "/0-1-0-preview/guide/" */
export function stripLocale(path: string): { path: string; locale: 'en' | 'th' } {
  if (/^\/th(?=\/|$)/.test(path)) {
    return { path: path.replace(/^\/th(?=\/|$)/, '') || '/', locale: 'th' };
  }
  return { path, locale: 'en' };
}

/** Detect which version (if any) the user is currently inside. */
export function detectVersion(strippedPath: string): VersionDef | null {
  for (const v of versions) {
    if (strippedPath === `/${v.id}` || strippedPath.startsWith(`/${v.id}/`)) {
      return v;
    }
  }
  return null;
}

/** Detect which section the user is browsing. Returns null for /, /about, etc. */
export function detectSection(
  strippedPath: string,
  version: VersionDef | null
): VersionedSection | RootSection | null {
  if (version) {
    const inner = strippedPath.slice(`/${version.id}`.length).replace(/^\//, '');
    const first = inner.split('/')[0] as VersionedSection | '';
    if (VERSIONED_SECTIONS.includes(first as VersionedSection)) {
      return first as VersionedSection;
    }
    return null;
  }
  const first = strippedPath.replace(/^\//, '').split('/')[0] as RootSection | '';
  if (ROOT_SECTIONS.includes(first as RootSection)) {
    return first as RootSection;
  }
  return null;
}

/** Build a URL inside a specific version (e.g. `/0-1-0-preview/guide/`). */
export function versionHref(
  versionId: string,
  innerPath = '',
  locale: 'en' | 'th' = 'en'
): string {
  const localePrefix = locale === 'th' ? '/th' : '';
  const clean = innerPath ? `/${innerPath.replace(/^\/+|\/+$/g, '')}/` : '/';
  return withBase(`${localePrefix}/${versionId}${clean === '/' ? '/' : clean}`);
}

/** Build a URL at the site root (e.g. `/about/roadmap/`). */
export function rootHref(innerPath = '', locale: 'en' | 'th' = 'en'): string {
  const localePrefix = locale === 'th' ? '/th' : '';
  const clean = innerPath ? `/${innerPath.replace(/^\/+|\/+$/g, '')}/` : '/';
  return withBase(`${localePrefix}${clean === '/' ? '/' : clean}`);
}

/**
 * When the user switches to a different version, try to land on the same
 * logical page in the new version.
 *
 * - If the user is INSIDE a versioned section (e.g. `/0-1-0-preview/guide/x`),
 *   swap just the version segment so they stay on the same logical page.
 * - If the user is OUTSIDE any versioned section (e.g. on `/` or `/about/*`),
 *   send them to the per-version section of the release notes (cleanest
 *   "what does selecting this version mean from outside docs?" answer —
 *   they're picking a release, so we show what's in that release).
 */
export function switchVersionHref(
  targetVersionId: string,
  currentPath: string,
  locale: 'en' | 'th' = 'en'
): string {
  const { path: localeStripped } = stripLocale(currentPath);
  const currentVersionDef = detectVersion(localeStripped);
  if (!currentVersionDef) {
    return rootHref(`about/release-notes/${targetVersionId}`, locale);
  }
  const inner = localeStripped.slice(`/${currentVersionDef.id}`.length);
  return versionHref(targetVersionId, inner, locale);
}
