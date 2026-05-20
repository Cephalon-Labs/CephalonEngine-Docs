import { spawnSync } from 'node:child_process';
import {
  cpSync,
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  readdirSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { basename, dirname, extname, join, relative, resolve } from 'node:path';

import { parse as parseYaml, stringify as stringifyYaml } from 'yaml';

import {
  referenceHrefToSlug,
  repoRoot,
  versionReferenceDir,
  versionSourceDir,
  versions,
} from '../docs.site.mjs';

const defaultSourceRepoUrl = 'https://github.com/Cephalon-Labs/CephalonEngine';
const defaultSourceRef = 'main';

main();

function main() {
  ensureDirectory(resolve(repoRoot, 'src', 'content', 'docs'));

  for (const version of versions) {
    syncVersion(version);
  }

  // Hand-authored curated content lives at:
  //   src/content/docs/<versionId>/guide/
  //   src/content/docs/<versionId>/tutorials/
  //   src/content/docs/<versionId>/technology/
  //   src/content/docs/<versionId>/migration/
  //   src/content/docs/<versionId>/reference/{architecture,configuration,cli}/
  //   src/content/docs/<versionId>/contributing/
  // and at the root (non-versioned):
  //   src/content/docs/about/
  //   src/content/docs/index.mdx
  //   src/content/docs/404.md
  // Sync never touches any of those — it only owns:
  //   src/content/docs/<versionId>/source/        (engine repo docs/* dump)
  //   src/content/docs/<versionId>/reference/api/ (DocFX-generated API reference)
}

function syncVersion(version) {
  const sourceDocsDir = resolvePath(version.sourceDocsDir);
  const sourceCodeDir = resolvePath(version.sourceCodeDir);
  const sourceDir = versionSourceDir(version.id);
  const referenceDir = versionReferenceDir(version.id);

  if (!existsSync(sourceDocsDir)) {
    throw new Error(`Source docs directory does not exist: ${sourceDocsDir}`);
  }
  if (!existsSync(sourceCodeDir)) {
    throw new Error(`Source code directory does not exist: ${sourceCodeDir}`);
  }

  // Clear only the sync-owned subdirectories so hand-authored content under
  // the version root is preserved.
  rmSync(sourceDir, { force: true, recursive: true });
  rmSync(referenceDir, { force: true, recursive: true });
  ensureDirectory(sourceDir);
  ensureDirectory(referenceDir);

  copyManualDocs(version, sourceDocsDir);
  generateDocfxReference(version, sourceCodeDir, referenceDir);
  generateReferenceHelperPages(version, referenceDir);
  writeSourceIndex(version, sourceDir);
}

function copyManualDocs(version, sourceDocsDir) {
  walkDirectory(sourceDocsDir, (absoluteSourcePath, relativeSourcePath) => {
    const normalizedRelativePath = toPosix(relativeSourcePath);

    if (normalizedRelativePath.startsWith('reference/')) {
      return;
    }

    if (normalizedRelativePath === 'README.md' || normalizedRelativePath === 'reference-docs.md') {
      return;
    }

    if (extname(absoluteSourcePath).toLowerCase() !== '.md') {
      return;
    }

    const outputFilePath = mapSourceDocToOutputPath(version, absoluteSourcePath);
    if (!outputFilePath) return;

    const rawMarkdown = readFileSync(absoluteSourcePath, 'utf8').replace(/^﻿/, '');
    const transformed = transformCopiedMarkdown({
      markdown: rawMarkdown,
      sourceDocsDir,
      sourceFilePath: absoluteSourcePath,
      outputFilePath,
      version,
    });

    writeTextFile(outputFilePath, transformed);
  });
}

function generateDocfxReference(version, sourceCodeDir, referenceTargetDir) {
  const tempDir = mkdtempSync(join(tmpdir(), 'cephalon-docfx-'));
  const configPath = resolve(tempDir, 'docfx.json');
  const tempReferenceDir = resolve(tempDir, 'reference');
  const docfxConfig = {
    metadata: [
      {
        src: [
          {
            src: sourceCodeDir,
            files: ['**/*.csproj'],
            exclude: ['**/bin/**', '**/obj/**'],
          },
        ],
        dest: 'reference',
        outputFormat: 'markdown',
        namespaceLayout: 'nested',
        memberLayout: 'samePage',
      },
    ],
  };

  writeTextFile(configPath, JSON.stringify(docfxConfig, null, 2));

  const result = spawnSync('docfx', ['metadata', configPath, '--disableGitFeatures'], {
    cwd: repoRoot,
    stdio: 'inherit',
  });

  if (result.status !== 0) {
    throw new Error(`DocFX metadata generation failed for version ${version.id}.`);
  }

  ensureDirectory(referenceTargetDir);
  cpSync(tempReferenceDir, referenceTargetDir, { force: true, recursive: true });
  rmSync(tempDir, { force: true, recursive: true });
}

function generateReferenceHelperPages(version, referenceDir) {
  const tocPath = resolve(referenceDir, 'toc.yml');
  const tocDocument = existsSync(tocPath) ? parseYaml(readFileSync(tocPath, 'utf8')) ?? [] : [];
  const generatedPages = getGeneratedReferencePages(referenceDir);
  const topLevelItems = Array.isArray(tocDocument) ? tocDocument : [];
  const topLevelLinks = topLevelItems
    .filter((item) => item?.href)
    .map((item) => ({ name: item.name, href: item.href }));

  /* Resolve a DocFX-emitted filename (e.g. `Cephalon.Abstractions.md`) to
     the absolute docs-site URL (`/0-1-0-preview/reference/api/cephalon-abstractions/`).
     Used everywhere we'd otherwise emit a `.md` link — Astro doesn't
     auto-rewrite those, so they ship to HTML as broken hrefs. */
  const hrefToUrl = (filename) => `/${referenceHrefToSlug(version.id, filename)}/`;

  const namespacePages = generatedPages.filter((page) => page.kind === 'namespace');
  const typePages = generatedPages.filter((page) => page.kind !== 'namespace');
  const generatedAt = new Date().toISOString();
  const manifest = {
    version: version.label,
    slug: version.id,
    generatedAt,
    sourceDocsDir: version.sourceDocsDir,
    sourceCodeDir: version.sourceCodeDir,
    sourceRepoUrl: version.sourceRepoUrl ?? defaultSourceRepoUrl,
    sourceRef: version.sourceRef ?? defaultSourceRef,
    counts: {
      pages: generatedPages.length,
      namespaces: namespacePages.length,
      types: typePages.length,
    },
    rootItems: topLevelLinks,
    namespaces: namespacePages.map((page) => ({ href: page.href, name: page.name })),
    types: typePages.map((page) => ({ href: page.href, kind: page.kind, name: page.name })),
  };

  writeTextFile(resolve(referenceDir, 'reference-manifest.json'), JSON.stringify(manifest, null, 2));

  writeGeneratedMarkdown(
    resolve(referenceDir, 'index.md'),
    {
      title: 'API Reference',
      description: `Auto-generated reference for every public type in CephalonEngine ${version.label} — ${generatedPages.length} pages across ${namespacePages.length} namespaces and ${typePages.length} types.`,
      editUrl: false,
      sidebar: { order: 0 },
    },
    [
      `This is the **auto-generated API reference** for CephalonEngine \`${version.label}\` — every public type in every shipped \`Cephalon.*\` package, with member docs (methods, properties, events) inlined on each type page.`,
      '',
      '## How to navigate',
      '',
      '| You\'re looking for | Use |',
      '| --- | --- |',
      `| **A specific type by name** | [Type index](${hrefToUrl('types.md')}) — alphabetical, includes the kind (class, interface, record, struct, enum, delegate). |`,
      `| **All types in a namespace** | [Namespace index](${hrefToUrl('namespaces.md')}) — sorted by namespace; click any to see its types. |`,
      `| **The full namespace tree** | Open [Cephalon](${hrefToUrl('Cephalon.md')}) and drill in via the sidebar. |`,
      `| **Member docs (methods, props, events)** | They live on the containing type page — see [Member notes](${hrefToUrl('members.md')}). |`,
      '',
      '## Sections',
      '',
      `- **[Cephalon (root namespace)](${hrefToUrl('Cephalon.md')})** — every shipped namespace, hierarchical view.`,
      `- **[Namespace index](${hrefToUrl('namespaces.md')})** — alphabetical namespace list (flat).`,
      `- **[Type index](${hrefToUrl('types.md')})** — alphabetical type list, with kind annotation.`,
      `- **[Member notes](${hrefToUrl('members.md')})** — why members live on the type page, not standalone.`,
      ...topLevelLinks
        .filter((item) => !['Cephalon', 'Namespace index', 'Type index', 'Member notes'].includes(item.name))
        .map((item) => `- [${item.name}](${hrefToUrl(item.href)})`),
      '',
      '## Reference contract',
      '',
      'API pages describe the **public contract** of this version. Stability follows the per-package maturity label:',
      '',
      '- **`M3` (adoption-ready)** — surface frozen within the preview minor; additive only.',
      '- **`M2` (broad)** — surface may evolve between preview minors.',
      '- **`M1` (narrow)** — single-scenario surface; expect churn.',
      '- **`Internal.*` namespaces** — not part of the public contract; may break without notice.',
      '',
      'Per-package labels: **[Reference → Architecture → Maturity audit](../architecture/maturity/)**.',
      '',
      '## Adopter-friendly views',
      '',
      'The API reference is *exhaustive*. For browsable, use-case-first navigation:',
      '',
      '- **[Reference → Components](../components/)** — every package grouped by domain (Hosts, Data, Eventing, Identity, …) with install commands + Engine:* config keys.',
      '- **[Reference → Configuration](../configuration/)** — every `Engine:*` configuration option with examples.',
      '- **[Technology overview](../../technology/)** — narrative tour with scenarios + tips.',
      '',
      '## Provenance',
      '',
      '| Field | Value |',
      '| --- | --- |',
      `| Generator | \`docfx metadata\` → Markdown export |`,
      `| Source repository | \`${version.sourceRepoUrl ?? defaultSourceRepoUrl}\` |`,
      `| Source ref | \`${version.sourceRef ?? defaultSourceRef}\` |`,
      `| Source path | \`${version.sourceCodeDir}\` |`,
      `| Generated at | \`${generatedAt}\` |`,
      `| Page count | ${generatedPages.length} total · ${namespacePages.length} namespace · ${typePages.length} type |`,
      '',
      '> Regenerate locally with `npm run sync-docs`. Re-runs are idempotent — only the `reference/api/` and `source/` directories are touched.',
    ].join('\n')
  );

  writeGeneratedMarkdown(
    resolve(referenceDir, 'namespaces.md'),
    { title: 'Namespace Index', editUrl: false },
    [
      `Namespace pages generated for Cephalon Engine ${version.label}.`,
      '',
      ...namespacePages.map((page) => `- [${page.name}](${hrefToUrl(page.href)})`),
    ].join('\n')
  );

  writeGeneratedMarkdown(
    resolve(referenceDir, 'types.md'),
    { title: 'Type Index', editUrl: false },
    [
      `Type pages generated for Cephalon Engine ${version.label}.`,
      '',
      ...typePages.map((page) => `- [${page.name}](${hrefToUrl(page.href)})${page.kind ? ` (${page.kind})` : ''}`),
    ].join('\n')
  );

  writeGeneratedMarkdown(
    resolve(referenceDir, 'members.md'),
    { title: 'Member Notes', editUrl: false },
    [
      'This documentation build keeps member documentation on the same page as the containing type.',
      '',
      'Use the type pages for constructors, methods, properties, fields, events, and operators.',
      '',
      `- [Open the type index](${hrefToUrl('types.md')})`,
      `- [Open the namespace index](${hrefToUrl('namespaces.md')})`,
    ].join('\n')
  );

  normalizeReferenceMarkdown(version, referenceDir);
}

function writeSourceIndex(version, sourceDir) {
  writeGeneratedMarkdown(
    resolve(sourceDir, 'index.md'),
    {
      title: `Engine source docs (${version.label})`,
      description: 'Read-only snapshot of the engine repository\'s docs/ folder for this version.',
      editUrl: false,
      sidebar: { order: 99 },
    },
    [
      `This folder is a verbatim snapshot of the engine repository's \`docs/\` directory for ${version.label}.`,
      '',
      `- Source path: \`${version.sourceDocsDir}\``,
      `- Source ref: \`${version.sourceRef ?? defaultSourceRef}\``,
      '',
      'It is preserved for cross-reference and historical context. The curated guides, tutorials,',
      'technology catalogue, migration playbooks, reference, and contributing pages are the',
      'authoritative documentation set for this version — find them in the sidebar.',
    ].join('\n')
  );
}

function transformCopiedMarkdown({ markdown, outputFilePath, sourceDocsDir, sourceFilePath, version }) {
  const normalized = markdown.replace(/\r\n/g, '\n').trim();
  const { title, body } = extractTitleAndBody(normalized, basename(sourceFilePath));
  const rewrittenBody = rewriteMarkdownLinks(body, {
    outputFilePath,
    sourceDocsDir,
    sourceFilePath,
    sourceRepoRoot: resolvePath(resolve(sourceDocsDir, '..')),
    sourceRepoUrl: version.sourceRepoUrl ?? defaultSourceRepoUrl,
    sourceRef: version.sourceRef ?? defaultSourceRef,
    version,
  });
  const frontmatter = { title, editUrl: false };

  if (basename(outputFilePath).toLowerCase() === 'index.md') {
    frontmatter.sidebar = { order: 0 };
  }

  return wrapWithFrontmatter(frontmatter, rewrittenBody.trim());
}

function rewriteMarkdownLinks(markdown, context) {
  return markdown.replace(/(?<!!)\[([^\]]+)\]\(([^)]+)\)/g, (fullMatch, label, rawTarget) => {
    const target = rawTarget.trim();

    if (isExternalLink(target)) {
      return fullMatch;
    }

    const { pathPart, suffix } = splitLinkTarget(target);
    if (!pathPart) {
      return fullMatch;
    }

    const absoluteSourceTarget = resolve(dirname(context.sourceFilePath), pathPart);
    if (isSubPath(context.sourceDocsDir, absoluteSourceTarget)) {
      const mappedOutputTarget = mapSourceDocToOutputPath(context.version, absoluteSourceTarget);
      if (!mappedOutputTarget) {
        return fullMatch;
      }

      const relativeTarget = toPosix(relative(dirname(context.outputFilePath), mappedOutputTarget));
      const normalizedRelativeTarget = relativeTarget.length === 0 ? '.' : relativeTarget;
      return `[${label}](${normalizedRelativeTarget}${suffix})`;
    }

    if (isSubPath(context.sourceRepoRoot, absoluteSourceTarget)) {
      const repoRelativeTarget = toPosix(relative(context.sourceRepoRoot, absoluteSourceTarget));
      return `[${label}](${context.sourceRepoUrl}/blob/${context.sourceRef}/${repoRelativeTarget}${suffix})`;
    }

    return fullMatch;
  });
}

function extractTitleAndBody(markdown, fallbackFileName) {
  const headingMatch = markdown.match(/^#\s+(.+)$/m);

  if (!headingMatch || headingMatch.index === undefined) {
    return {
      title: fallbackFileName.replace(/\.md$/i, '').replace(/[-_]/g, ' '),
      body: markdown,
    };
  }

  const title = headingMatch[1].replace(/<[^>]+>/g, '').trim();
  const beforeHeading = markdown.slice(0, headingMatch.index);
  const afterHeading = markdown.slice(headingMatch.index + headingMatch[0].length);
  const body = `${beforeHeading}${afterHeading}`.replace(/^\s+/, '');

  return { title, body };
}

function wrapWithFrontmatter(frontmatter, body) {
  return `---\n${stringifyYaml(frontmatter).trimEnd()}\n---\n\n${body.trim()}\n`;
}

function writeGeneratedMarkdown(filePath, frontmatter, body) {
  writeTextFile(filePath, wrapWithFrontmatter(frontmatter, body));
}

function writeTextFile(filePath, content) {
  ensureDirectory(dirname(filePath));
  writeFileSync(filePath, content, 'utf8');
}

function mapSourceDocToOutputPath(version, absoluteSourcePath) {
  const sourceDocsDir = resolvePath(version.sourceDocsDir);
  const relativeSourcePath = toPosix(relative(sourceDocsDir, absoluteSourcePath));
  const sourceDir = versionSourceDir(version.id);

  if (relativeSourcePath === 'README.md') {
    return null;
  }

  if (relativeSourcePath === 'reference-docs.md') {
    return null;
  }

  if (relativeSourcePath.startsWith('reference/')) {
    return null;
  }

  const mappedRelativePath = relativeSourcePath.replace(/(^|\/)README\.md$/i, '$1index.md');
  return resolve(sourceDir, mappedRelativePath);
}

function getGeneratedReferencePages(referenceDir) {
  return readdirSync(referenceDir, { withFileTypes: true })
    .filter((entry) => entry.isFile() && extname(entry.name).toLowerCase() === '.md')
    .filter((entry) => !['index.md', 'namespaces.md', 'types.md', 'members.md'].includes(entry.name))
    .map((entry) => {
      const filePath = resolve(referenceDir, entry.name);
      const content = readFileSync(filePath, 'utf8');
      const firstLine = content.split(/\r?\n/, 1)[0] ?? '';
      const headingLine = content.split(/\r?\n/).find((line) => line.startsWith('# ')) ?? firstLine;
      const name = headingLine
        .replace(/^#\s+/, '')
        .replace(/<[^>]+>/g, '')
        .replace(/^(Namespace|Class|Interface|Enum|Struct|Record|Delegate)\s+/i, '')
        .trim();

      return {
        href: entry.name,
        kind: inferReferenceKind(content),
        name,
      };
    })
    .sort((left, right) => left.name.localeCompare(right.name));
}

function normalizeReferenceMarkdown(version, referenceDir) {
  for (const entry of readdirSync(referenceDir, { withFileTypes: true })) {
    if (!entry.isFile() || extname(entry.name).toLowerCase() !== '.md') {
      continue;
    }

    if (['index.md', 'namespaces.md', 'types.md', 'members.md'].includes(entry.name)) {
      continue;
    }

    const filePath = resolve(referenceDir, entry.name);
    const rawMarkdown = readFileSync(filePath, 'utf8').replace(/^﻿/, '').replace(/\r\n/g, '\n').trim();
    const { title, body } = extractTitleAndBody(rawMarkdown, entry.name);

    /* DocFX emits cross-references as `[Type](Cephalon.Foo.Bar.md)`. Astro
       doesn't auto-resolve `.md` relative links — they ship to the HTML as
       broken hrefs. Rewrite every `*.md` link to the slug-form absolute URL
       so cross-namespace navigation actually works. */
    const rewrittenBody = body.replace(
      /\]\(([A-Za-z0-9_.-]+\.md)(#[^)]*)?\)/g,
      (_match, file, anchor = '') => {
        const slug = referenceHrefToSlug(version.id, file);
        return `](/${slug}/${anchor})`;
      }
    );

    writeTextFile(
      filePath,
      wrapWithFrontmatter(
        {
          title,
          slug: referenceHrefToSlug(version.id, entry.name),
          editUrl: false,
        },
        rewrittenBody.trim()
      )
    );
  }
}

function inferReferenceKind(content) {
  const firstHeading = content.split(/\r?\n/).find((line) => line.startsWith('# ')) ?? '';

  if (/Namespace\s+/i.test(firstHeading)) return 'namespace';
  if (/Class\s+/i.test(firstHeading)) return 'class';
  if (/Interface\s+/i.test(firstHeading)) return 'interface';
  if (/Enum\s+/i.test(firstHeading)) return 'enum';
  if (/Struct\s+/i.test(firstHeading)) return 'struct';
  if (/Record\s+/i.test(firstHeading)) return 'record';
  if (/Delegate\s+/i.test(firstHeading)) return 'delegate';
  return 'type';
}

function walkDirectory(rootDir, onFile) {
  for (const entry of readdirSync(rootDir, { withFileTypes: true })) {
    if (entry.name.startsWith('.$')) continue;

    const absolutePath = resolve(rootDir, entry.name);
    const relativePath = relative(rootDir, absolutePath);

    if (entry.isDirectory()) {
      walkDirectory(absolutePath, (filePath, childRelativePath) =>
        onFile(filePath, join(entry.name, childRelativePath))
      );
      continue;
    }

    onFile(absolutePath, relativePath);
  }
}

function splitLinkTarget(target) {
  const hashIndex = target.indexOf('#');
  if (hashIndex === -1) return { pathPart: target, suffix: '' };
  return { pathPart: target.slice(0, hashIndex), suffix: target.slice(hashIndex) };
}

function isExternalLink(target) {
  return (
    target.startsWith('#') ||
    target.startsWith('/') ||
    /^[a-z]+:/i.test(target) ||
    target.startsWith('//')
  );
}

function isSubPath(rootPath, targetPath) {
  const relativePath = relative(rootPath, targetPath);
  return relativePath === '' || (!relativePath.startsWith('..') && !relativePath.includes(':'));
}

function ensureDirectory(dirPath) {
  mkdirSync(dirPath, { recursive: true });
}

function resolvePath(inputPath) {
  return resolve(inputPath);
}

function toPosix(filePath) {
  return filePath.replace(/\\/g, '/');
}
