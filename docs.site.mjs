import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export const repoRoot = fileURLToPath(new URL('.', import.meta.url));
export const docsVersionConfigPath = resolve(repoRoot, 'docs.versions.json');
export const docsConfig = JSON.parse(readFileSync(docsVersionConfigPath, 'utf8'));
export const versions = docsConfig.versions;

/**
 * The "current" version that defaults are pinned to when the user has not
 * picked one explicitly. Resolution order:
 *   1. The version whose `id` matches `docs.versions.json#currentVersion`.
 *   2. The version flagged `status: "current"`.
 *   3. The first version in the array (so the site always boots).
 */
export const currentVersion =
  versions.find((version) => version.id === docsConfig.currentVersion) ??
  versions.find((version) => version.status === 'current') ??
  versions[0];

/** The slug segment used to mount the current version at the URL root. */
export const currentVersionId = currentVersion.id;

export const supportedLocales = [
  { code: 'en', tag: 'root', label: 'English', dir: 'ltr' },
  { code: 'th', tag: 'th', label: 'ภาษาไทย', dir: 'ltr' },
];

export const guideDocOrder = [
  'architecture',
  'compatibility',
  'app-models',
  'module-authoring',
  'technology-packs',
];

export const operationsDocOrder = [
  'operations',
  'operational-hardening-gap-inventory',
  'runtime-failure-policy',
  'benchmarking',
  'reference-docs',
];

export const planningDocOrder = ['engine-roadmap', 'engine-backlog'];

export const referenceSummaryPages = ['index', 'namespaces', 'types', 'members'];

/**
 * Every version's full doc set (curated + synced source dump + DocFX API
 * reference) lives under `src/content/docs/<versionId>/`. The synced source
 * dump (engine docs/*) is written by the sync script into `<versionId>/source/`
 * and the generated API reference into `<versionId>/reference/api/`.
 * The curated content (guide, tutorials, …) is hand-authored alongside them
 * under the same version folder.
 */
export function versionDocsDir(versionId) {
  return resolve(repoRoot, 'src', 'content', 'docs', versionId);
}

export function versionSourceDir(versionId) {
  return resolve(versionDocsDir(versionId), 'source');
}

export function versionReferenceDir(versionId) {
  return resolve(versionDocsDir(versionId), 'reference', 'api');
}

export function versionPublicDir(versionId) {
  return resolve(repoRoot, 'public', versionId);
}

export function contentPathToSlug(contentPath) {
  const normalized = contentPath.replace(/\\/g, '/').replace(/\.mdx?$/i, '');
  return normalized.replace(/\/index$/i, '');
}

export function versionPathToSlug(versionId, versionRelativePath) {
  const cleanRelativePath = versionRelativePath.replace(/\\/g, '/');
  return contentPathToSlug(`${versionId}/${cleanRelativePath}`);
}

export function versionSourcePathToSlug(versionId, sourceRelativePath) {
  const cleanRelativePath = sourceRelativePath.replace(/\\/g, '/');
  return contentPathToSlug(`${versionId}/source/${cleanRelativePath}`);
}

export function referenceHrefToSlug(versionId, href) {
  const slugSegment = href
    .replace(/\.md$/i, '')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase();

  return `${versionId}/reference/api/${slugSegment}`;
}

export function versionLabel(version) {
  return version.status === 'current' ? `${version.label} (Current)` : version.label;
}
