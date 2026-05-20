import { pluginCollapsibleSections } from '@expressive-code/plugin-collapsible-sections';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';

/**
 * Expressive Code configuration extracted from `astro.config.mjs` so that
 * Starlight's `<Code>` component (used by `src/components/CodeShowcase.astro`)
 * can build its own runtime renderer. EC requires this split because the
 * config contains non-JSON-serializable values (functions, plugin instances).
 *
 * Astro auto-detects this file at project root and merges it into the
 * starlight integration's `expressiveCode` option.
 */
export default {
  /* Theme pair — Visual Studio "Light+" and "Dark+" (the defaults shipped
     with VS Code / Visual Studio). C# developers see these palettes daily
     in their editor, so code blocks here feel native:
       • blue       — types & primitives (string, int, IModule)
       • purple     — control-flow keywords (if, foreach, return)
       • light blue — local variables & params
       • teal/dark-cyan — method names
       • orange     — string literals
       • green      — comments
     `github-light/dark` (previous default) is more conservative and
     under-differentiates types vs methods for C# specifically — easy
     to misread. */
  themes: ['light-plus', 'dark-plus'],
  useStarlightDarkModeSwitch: true,
  useStarlightUiThemeColors: true,
  plugins: [pluginCollapsibleSections(), pluginLineNumbers()],
  defaultProps: {
    showLineNumbers: false,
    wrap: false,
    overridesByLang: {
      'bash,sh,shell,powershell,ps,ps1,zsh,fish,cmd,console': {
        frame: 'terminal',
      },
      'csharp,cs,fsharp,fs,vb,xml,json,jsonc,yaml,yml': {
        showLineNumbers: true,
      },
    },
  },
  styleOverrides: {
    borderRadius: '0.75rem',
    codeFontFamily:
      "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
    codeFontSize: '0.9rem',
    codeLineHeight: '1.65',
    frames: {
      shadowColor: 'rgba(7, 47, 58, 0.18)',
      /* Active editor tab — hide the orange GitHub-theme top stripe.
         Keep the bottom brand-accent stripe so the active tab is still
         visually marked. */
      editorActiveTabIndicatorTopColor: 'transparent',
      editorActiveTabIndicatorBottomColor: 'var(--ce-brand-400, #34b6dc)',
      /* 1px stripe — matches the header's hairline so they form one
         continuous edge across the full width. */
      editorActiveTabIndicatorHeight: '1px',
      /* Flush tab against the frame's left edge — no inset, no visible
         gap between the tab's left border and the frame's left border. */
      editorTabsMarginInlineStart: '0',
      editorTabsMarginBlockStart: '0',
      terminalTitlebarBackground: 'linear-gradient(180deg, #0c1f29, #07151b)',
      terminalBackground: '#050d12',
    },
    textMarkers: {
      markBackground: 'rgba(52, 182, 220, 0.18)',
      markBorderColor: 'var(--ce-brand-400, #34b6dc)',
      insBackground: 'rgba(22, 163, 74, 0.18)',
      insBorderColor: 'var(--ce-success, #16a34a)',
      delBackground: 'rgba(220, 38, 38, 0.18)',
      delBorderColor: 'var(--ce-danger, #dc2626)',
    },
  },
};
