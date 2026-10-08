// Every personal detail the site uses lives here.
// Edit this one file and it updates everywhere.

export const me = {
  name: 'Ahmet Emin Tayfur',

  // Compact form used in the nav brand (top-left on every page), where
  // space is tight. Everywhere else (footer copyright, etc.) uses the full
  // `name` above.
  shortName: 'Ahmet E. Tayfur',

  // The address shown on the site and used for every "email me" link.
  email: 'support@ahmettayfur.com',

  // Personal inbox, kept separate from the support address above. Used only
  // for the "Direct contact" button in the home page contact section.
  directEmail: 'aet78@outlook.com',

  linkedin: 'https://www.linkedin.com/in/ahmettayfur/',
  github: 'https://github.com/svactrion',
  medium: 'https://ahmet-tayfur.medium.com/',

  // Medium account handle, without the @. Used to read the RSS feed at
  // build time for the writing section on the home page.
  mediumHandle: 'ahmet-tayfur',
};

export const grammarlens = {
  name: 'GrammarLens',
  // Set to true and paste the URL once the app is approved.
  released: false,
  appStoreUrl: '',

  // Permanent addresses given to Apple. Do not move these.
  privacyUrl: '/products/grammarlens/privacy',
  termsUrl: '/products/grammarlens/terms',
  supportUrl: '/products/grammarlens/support',
  caseStudyUrl: '/products/grammarlens/case-study',
  sourceUrl: 'https://github.com/svactrion/GrammarLens',

  // Card icon on the home page. Source: public/img/grammarlens-icon.png
  // (the 1024×1024 App Store icon) — these are a 112×112 (2x of the 56px
  // card size) WebP with a PNG fallback, regenerated from that source if
  // it ever changes.
  icon: {
    webp: '/img/grammarlens-icon-112.webp',
    png: '/img/grammarlens-icon-112.png',
  },
};

export const scanstash = {
  name: 'QR: ScanStash',
  // In development, not submitted for review. There is no product page and
  // no App Store link yet; set these once the app is approved.
  released: false,
  appStoreUrl: '',

  // English is the default; each legal page links to its Turkish version
  // under /tr. Meant as the stable addresses for a future App Store listing.
  privacyUrl: '/products/scanstash/privacy/',
  termsUrl: '/products/scanstash/terms/',
  supportUrl: '/products/scanstash/support/',

  // Source: public/img/scanstash-icon.png (1254×1254). Same 112×112 WebP +
  // PNG pair as the GrammarLens icon above.
  icon: {
    webp: '/img/scanstash-icon-112.webp',
    png: '/img/scanstash-icon-112.png',
  },
};
