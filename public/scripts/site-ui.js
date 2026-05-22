/*
 * Shared site-UI scripts — single file shipped from /public/, cached by the
 * browser via a long-lived URL. Loaded once via
 *   <script src="/scripts/site-ui.js" defer>
 * in Head.astro.
 *
 * ── ClientRouter awareness ──────────────────────────────────────────────
 * The site uses Astro's <ClientRouter /> (SPA-like navigation). On a
 * navigation Astro swaps the <body> — so listeners/observers bound to
 * specific ELEMENTS go stale, while listeners on `document` / `window`
 * (which are never swapped) survive.
 *
 * This file is therefore split in two:
 *
 *   ONE-TIME setup — runs once when the script first executes. Holds every
 *     `document` / `window` listener. The script is NOT re-executed on
 *     ClientRouter swaps, so this block runs exactly once.
 *
 *   PER-PAGE setup — `initPage()`, re-run on every `astro:page-load`
 *     (which fires on the initial load AND after every swap). Holds every
 *     element-scoped listener / observer, re-bound to the fresh DOM.
 *
 * If you add new client-side behaviour:
 *   • document/window listener → ONE-TIME block.
 *   • element-scoped listener / observer → inside initPage().
 */

(() => {
  'use strict';

  /* ═══════════════════════════════════════════════════════════════════════
   * ONE-TIME SETUP — document/window listeners, survive ClientRouter swaps.
   * ═══════════════════════════════════════════════════════════════════════ */

  /* ---- Mobile header menu — global reposition + close handlers ----------
   * `repositionOpenMenu` always re-queries the currently-open menu, so a
   * single pair of window listeners works for whatever menu the current
   * page rendered. The per-element `toggle` listener is bound in initPage. */
  function repositionOpenMenu() {
    const details = document.querySelector('.ce-header-menu[open]');
    if (!details) return;
    const panel = details.querySelector('.ce-header-menu__panel');
    const trigger = details.querySelector('.ce-header-menu__trigger');
    if (!panel || !trigger) return;
    // `getBoundingClientRect()` already flushes pending layout itself, so the
    // reads below are fresh without an extra, reflow-causing `offsetHeight`.
    const rect = trigger.getBoundingClientRect();
    const panelWidth = panel.offsetWidth || 224;
    const triggerCenter = rect.left + rect.width / 2;
    let left = triggerCenter - panelWidth / 2;
    left = Math.max(8, Math.min(left, window.innerWidth - panelWidth - 8));
    panel.style.top = `${rect.bottom + 8}px`;
    panel.style.left = `${left}px`;
  }
  window.addEventListener('resize', repositionOpenMenu);
  window.addEventListener('scroll', repositionOpenMenu, { passive: true });

  /* ---- Header priority navigation ---------------------------------------
   * The header nav shows as many links inline as fit; links that overflow
   * are moved into the caret dropdown (`.ce-header-menu`, the last child of
   * `.ce-header-nav`). The caret shows only when something overflowed; below
   * 50rem the whole nav collapses into the (centred) caret.
   *
   * Recomputed on resize, on `astro:page-load`, and once webfonts settle
   * (fallback-font link widths differ from the final ones). Re-queries the
   * DOM each call, so it works for whatever page ClientRouter rendered. */
  function layoutHeaderNav() {
    const nav = document.querySelector('.ce-header-nav');
    const menu = nav && nav.querySelector('.ce-header-menu');
    if (!nav || !menu) return;
    const links = [...nav.querySelectorAll('.ce-header-nav__link')];
    const panelItems = [...menu.querySelectorAll('.ce-header-menu__panel > li')];
    if (links.length === 0) return;

    // Reset to a fully-measurable state — every link + the caret visible.
    links.forEach((a) => { a.style.display = ''; });
    menu.style.display = 'inline-flex';

    let inlineCount;
    if (window.matchMedia('(max-width: 50rem)').matches) {
      inlineCount = 0; // mobile — the whole nav lives in the caret
    } else {
      const siteTitle = nav.parentElement;
      const logo = nav.previousElementSibling;
      const navGap = parseFloat(getComputedStyle(siteTitle).columnGap) || 0;
      const linkGap = parseFloat(getComputedStyle(nav).columnGap) || 0;
      const caretW = menu.offsetWidth;
      const widths = links.map((a) => a.offsetWidth);
      // Space the nav may use: the title row, minus the logo, one gap, and a
      // few px of rounding safety.
      const budget =
        siteTitle.clientWidth - (logo ? logo.offsetWidth : 0) - navGap - 4;
      const allInline =
        widths.reduce((sum, w) => sum + w, 0) + linkGap * (links.length - 1);
      if (allInline <= budget) {
        inlineCount = links.length; // everything fits — no caret needed
      } else {
        // Fit as many as possible, reserving room for the caret + its gap.
        let used = 0;
        inlineCount = 0;
        for (let i = 0; i < links.length; i++) {
          used += widths[i] + (i > 0 ? linkGap : 0);
          if (used + linkGap + caretW > budget) break;
          inlineCount++;
        }
      }
    }

    // Apply — first `inlineCount` links stay inline, the rest move into the
    // caret panel (every link appears in exactly one place).
    links.forEach((a, i) => {
      a.style.display = i < inlineCount ? '' : 'none';
    });
    panelItems.forEach((li, i) => {
      li.style.display = i < inlineCount ? 'none' : '';
    });
    if (inlineCount < links.length) {
      menu.style.display = 'inline-flex';
    } else {
      menu.style.display = 'none';
      menu.removeAttribute('open');
    }
  }

  // rAF-debounced so a resize drag recomputes the nav at most once per frame.
  let headerNavRaf = 0;
  function scheduleHeaderNav() {
    if (headerNavRaf) return;
    headerNavRaf = requestAnimationFrame(() => {
      headerNavRaf = 0;
      layoutHeaderNav();
    });
  }
  window.addEventListener('resize', scheduleHeaderNav);
  // The webfont swap changes link widths — re-measure once fonts have loaded.
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(layoutHeaderNav);
  }

  /* ---- Dropdown close-on-outside + Escape (menu + version switcher) ------
   * Delegated on `document`, so they cover whatever dropdowns the current
   * page rendered without per-page rebinding. */
  const closeOpen = (el) => el && el.removeAttribute('open');

  document.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    const openMenu = document.querySelector('.ce-header-menu[open]');
    if (openMenu && !openMenu.contains(target)) closeOpen(openMenu);
    const openVersion = document.querySelector('.ce-version-switcher[open]');
    if (openVersion && !openVersion.contains(target)) closeOpen(openVersion);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    closeOpen(document.querySelector('.ce-header-menu[open]'));
    closeOpen(document.querySelector('.ce-version-switcher[open]'));
  });

  /* ---- Hero copy-to-clipboard — delegated, so it survives swaps ---------- */
  document.addEventListener('click', (event) => {
    const t = event.target;
    const button = t && t.closest ? t.closest('[data-copy]') : null;
    if (!button) return;
    const text = button.getAttribute('data-copy');
    if (!text || !navigator.clipboard) return;
    navigator.clipboard.writeText(text);
    button.classList.add('is-copied');
    setTimeout(() => button.classList.remove('is-copied'), 1000);
  });

  /* ---- Sidebar click feedback — delegated on `document` -------------------
   * Adds `.ce-nav-pending` to a clicked sidebar link for instant feedback
   * while ClientRouter fetches the destination. The swap discards it; the
   * destination link gets the real `aria-current="page"` state. */
  document.addEventListener('click', (event) => {
    const sidebar = document.getElementById('starlight__sidebar');
    if (!sidebar) return;
    const t = event.target;
    const link = t && t.closest ? t.closest('a[href]') : null;
    if (!link || !sidebar.contains(link)) return;
    if (link.getAttribute('aria-current') === 'page') return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (typeof event.button === 'number' && event.button !== 0) return;
    sidebar
      .querySelectorAll('a.ce-nav-pending')
      .forEach((a) => a.classList.remove('ce-nav-pending'));
    link.classList.add('ce-nav-pending');
  });

  /* ---- Left-sidebar scroll positioning ----------------------------------
   * Two situations to handle:
   *
   *   1. ClientRouter navigation — the sidebar re-renders (its content is
   *      route-dependent; Sidebar.astro shows a different tree per section)
   *      so the fresh sidebar starts at scrollTop 0. Clicking a deep menu
   *      item would jump the sidebar back to the top.
   *
   *   2. Opening a URL directly / full reload — a deep page's active menu
   *      item may sit far down the tree, below the fold, so the reader
   *      can't see where they are in the sidebar.
   *
   * `ensureActiveVisible` scrolls the active item into view ONLY when it's
   * actually off-screen — so a position the reader chose is left alone. */
  function ensureActiveVisible(sidebar) {
    const active = sidebar.querySelector('a[aria-current="page"]');
    if (!active) return;
    const sbRect = sidebar.getBoundingClientRect();
    const aRect = active.getBoundingClientRect();
    if (aRect.height === 0) return; // inside a collapsed group — skip
    // Already comfortably within the sidebar viewport — don't touch scroll.
    if (aRect.top >= sbRect.top && aRect.bottom <= sbRect.bottom) return;
    // Otherwise scroll so the active item sits ~1/3 down the viewport.
    sidebar.scrollTop += aRect.top - sbRect.top - sidebar.clientHeight / 3;
  }

  // (1) ClientRouter swaps — stash scroll before the swap, restore it after.
  // `astro:after-swap` runs after the new DOM is in place but BEFORE paint,
  // so the restore is seamless. Restoring keeps same-section navigation
  // pixel-stable; `ensureActiveVisible` then corrects the cross-section
  // case where the restored position no longer shows the (new) active item.
  let sidebarScrollTop = 0;
  document.addEventListener('astro:before-swap', () => {
    const sb = document.getElementById('starlight__sidebar');
    sidebarScrollTop = sb ? sb.scrollTop : 0;
  });
  document.addEventListener('astro:after-swap', () => {
    const sb = document.getElementById('starlight__sidebar');
    if (!sb) return;
    sb.scrollTop = sidebarScrollTop;
    ensureActiveVisible(sb);
  });

  // (2) Initial direct load / full reload — reveal the active item. Runs in
  // a rAF callback so it lands before the first paint (no visible jump).
  requestAnimationFrame(() => {
    const sb = document.getElementById('starlight__sidebar');
    if (sb) ensureActiveVisible(sb);
  });

  /* ---- Top navigation progress bar — driven by ClientRouter events ------
   * `astro:before-preparation` fires when a navigation starts; we show the
   * bar only if the navigation outlasts a 150 ms grace period (prefetched
   * pages swap near-instantly — no point flashing a bar). `astro:page-load`
   * cancels the pending timer; the swap itself removes the bar element. */
  let progressTimer = 0;
  const showProgressBar = () => {
    let bar = document.querySelector('.ce-progress');
    if (!bar) {
      bar = document.createElement('div');
      bar.className = 'ce-progress';
      bar.setAttribute('aria-hidden', 'true');
      document.body.appendChild(bar);
    }
    // Flip to the loading state on the NEXT frame instead of forcing a
    // synchronous reflow here (`void bar.offsetWidth`): the browser commits
    // the bar's just-appended initial state on the current frame, so the CSS
    // animation still starts cleanly — without the forced layout that reading
    // a geometric property right after `appendChild` triggers.
    requestAnimationFrame(() => bar.classList.add('is-loading'));
  };
  document.addEventListener('astro:before-preparation', () => {
    clearTimeout(progressTimer);
    progressTimer = window.setTimeout(showProgressBar, 150);
  });
  document.addEventListener('astro:page-load', () => {
    clearTimeout(progressTimer);
    const bar = document.querySelector('.ce-progress');
    if (bar) bar.remove();
  });

  /* ═══════════════════════════════════════════════════════════════════════
   * PER-PAGE SETUP — re-run on every `astro:page-load` against fresh DOM.
   * ═══════════════════════════════════════════════════════════════════════ */

  // Module-scoped so each run can disconnect the previous page's observer.
  let tocObserver = null;

  function initPage() {
    /* ---- TOC URL-fragment sync ------------------------------------------
     * Mirror the active "On this page" item into the URL hash as the reader
     * scrolls. Starlight flips `aria-current="true"` on the active TOC link;
     * we observe that and `history.replaceState` the hash. */
    if (tocObserver) {
      tocObserver.disconnect();
      tocObserver = null;
    }
    const toc = document.querySelector('starlight-toc');
    if (toc) {
      let lastHash = '';
      const syncHash = () => {
        const active = toc.querySelector('a[aria-current="true"]');
        if (!active) return;
        const href = active.getAttribute('href') || '';
        if (!href.startsWith('#') || href === lastHash) return;
        lastHash = href;
        const url = window.location.pathname + window.location.search + href;
        window.history.replaceState(null, '', url);
      };
      tocObserver = new MutationObserver(syncHash);
      tocObserver.observe(toc, {
        subtree: true,
        attributes: true,
        attributeFilter: ['aria-current'],
      });
      syncHash();
    }

    /* ---- Mobile header menu — per-element toggle reposition ------------- */
    document.querySelectorAll('.ce-header-menu').forEach((details) => {
      details.addEventListener('toggle', repositionOpenMenu);
    });

    /* ---- Code-showcase tab switcher ------------------------------------- */
    document.querySelectorAll('[data-showcase]').forEach((panel) => {
      const tabs = panel.querySelectorAll('[role="tab"]');
      const codes = panel.querySelectorAll('[data-panel]');
      tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
          const target = tab.getAttribute('data-target');
          tabs.forEach((t) => {
            const active = t.getAttribute('data-target') === target;
            t.classList.toggle('is-active', active);
            t.setAttribute('aria-selected', active ? 'true' : 'false');
          });
          codes.forEach((code) => {
            code.classList.toggle('is-active', code.getAttribute('data-panel') === target);
          });
        });
      });
    });

    /* ---- Header priority navigation — lay the nav out for this page. */
    layoutHeaderNav();
  }

  // Fires on the initial load AND after every ClientRouter navigation.
  document.addEventListener('astro:page-load', initPage);
})();
