// Which pages exist in both languages, given as their English path.
//
// Add a path here once its Turkish counterpart exists at the matching
// location under src/pages/tr/. Everything not listed here — the legal
// pages — stays English-only, and the language switch shows as disabled on
// those pages instead of linking to a Turkish page that doesn't exist.
export const translatedPaths = [
  '/',
  '/products/',
  '/products/grammarlens/',
  '/products/grammarlens/case-study/',
];

// Strips a leading /tr (or /tr/) prefix, returning the English form of a
// path. '/tr/' and '/tr' both become '/'; '/products' is unaffected.
export function toEnPath(path) {
  return path.replace(/^\/tr(\/|$)/, '/') || '/';
}

export function isTranslated(path) {
  return translatedPaths.includes(toEnPath(path));
}

// The same page's address in the other language, or null if it doesn't
// have one there. `lang` is the language of `path` itself.
export function otherLocalePath(path, lang) {
  const enPath = toEnPath(path);
  if (!translatedPaths.includes(enPath)) return null;
  if (lang === 'tr') return enPath;
  return enPath === '/' ? '/tr/' : `/tr${enPath}`;
}

// hreflang for a link on a page in `lang`: "en" when a Turkish page links
// to an internal page that has no Turkish version (the legal pages), so the
// link says it leads to English. Undefined otherwise, which Astro leaves
// out of the markup.
export function hreflangFor(href, lang) {
  if (lang !== 'tr' || !href.startsWith('/')) return undefined;
  return isTranslated(href.endsWith('/') ? href : `${href}/`) ? undefined : 'en';
}

// Resolves an internal English path (e.g. a constant like
// grammarlens.caseStudyUrl, or a plain path such as '/products/grammarlens')
// to the address a link should actually point to for the given language.
//
// This is the one place that decides "does this link get a /tr prefix" —
// every internal link in the site should be built through this function
// instead of hand-rolling a `lang === 'tr' ? ... : ...` ternary at the call
// site. A route only ever gets the /tr prefix once its Turkish page exists
// and its path is added to translatedPaths above; anything else (privacy,
// terms, support — pages with no Turkish version) is returned unchanged,
// automatically, with no per-callsite exceptions to remember.
export function localizeHref(enPath, lang) {
  if (lang !== 'tr') return enPath;
  const normalized = enPath.endsWith('/') ? enPath : `${enPath}/`;
  return translatedPaths.includes(normalized) ? `/tr${normalized}` : enPath;
}
