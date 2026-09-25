// Reads the Medium RSS feed ONCE, while the site is being built.
//
// Why at build time and not in the browser: Medium blocks cross-origin
// requests, so a browser-side version needs a third-party proxy service.
// That means the writing list breaks whenever that service is down, is
// invisible to Google, and sends every visitor's IP to a company neither
// of us chose. Reading the feed here removes all three problems.
//
// The trade-off: a new Medium post appears on the site after the next
// deploy, not the second it is published.
//
// If the feed cannot be read, this returns an empty list. The build must
// never fail because Medium was slow.

const FEEDS = (handle) => [
  `https://${handle}.medium.com/feed`,
  `https://medium.com/feed/@${handle}`,
];

function firstTag(block, tag) {
  const m = block.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, 'i'));
  if (!m) return '';
  return m[1]
    .replace(/^\s*<!\[CDATA\[/, '')
    .replace(/\]\]>\s*$/, '')
    .trim();
}

function stripTags(html) {
  return (html || '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

async function readFeed(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 8000);
  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: { 'user-agent': 'ahmettayfur.com build' },
    });
    if (!res.ok) return null;
    const xml = await res.text();
    const items = xml.split(/<item[\s>]/).slice(1);
    if (!items.length) return null;
    return items.slice(0, 5).map((raw) => {
      const body = firstTag(raw, 'content:encoded') || firstTag(raw, 'description');
      return {
        title: stripTags(firstTag(raw, 'title')),
        link: firstTag(raw, 'link'),
        excerpt: stripTags(body).slice(0, 185),
        date: firstTag(raw, 'pubDate'),
        source: 'Medium',
      };
    });
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

// LinkedIn has no public feed or API for member posts. Add entries by hand:
// { title: '', link: '', excerpt: '', date: '2026-09-01', source: 'LinkedIn' }
export const manualPosts = [];

// Dates read in the page's language: "29 July 2026" (en-GB) or
// "29 Temmuz 2026" (tr-TR).
export async function getPosts(handle, lang = 'en') {
  let fetched = [];
  for (const url of FEEDS(handle)) {
    const items = await readFeed(url);
    if (items && items.length) {
      fetched = items;
      break;
    }
  }
  if (!fetched.length) {
    console.warn('[medium] feed unavailable at build time — writing section will be empty');
  }
  const fmt = (d) => {
    const t = new Date(d);
    return isNaN(t)
      ? ''
      : t.toLocaleDateString(lang === 'tr' ? 'tr-TR' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  };
  return [...fetched, ...manualPosts]
    .sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0))
    .map((p) => ({ ...p, dateLabel: fmt(p.date) }));
}
