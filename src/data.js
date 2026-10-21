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
  privacyUrl: '/products/grammarlens/privacy/',
  termsUrl: '/products/grammarlens/terms/',
  supportUrl: '/products/grammarlens/support/',
  caseStudyUrl: '/products/grammarlens/case-study/',
  sourceUrl: 'https://github.com/svactrion/GrammarLens',

  // Card icon on the home page. Source: design/icons/grammarlens-icon.png
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
  // In App Store review. There is no product page and no App Store link
  // yet; set these once the app is approved.
  released: false,
  appStoreUrl: '',

  // English is the default; each legal page links to its Turkish version
  // under /tr. Meant as the stable addresses for a future App Store listing.
  privacyUrl: '/products/scanstash/privacy/',
  termsUrl: '/products/scanstash/terms/',
  supportUrl: '/products/scanstash/support/',
  sourceUrl: 'https://github.com/svactrion/ScanStash',

  // Source: design/icons/scanstash-icon.png (1254×1254). Same 112×112 WebP +
  // PNG pair as the GrammarLens icon above.
  icon: {
    webp: '/img/scanstash-icon-112.webp',
    png: '/img/scanstash-icon-112.png',
  },
};

export const birdperch = {
  name: 'BirdPerch',
  // In development, not submitted for review. There is no product page and
  // no App Store link yet; set these once the app is approved.
  released: false,
  appStoreUrl: '',

  // Same EN/TR legal pages as ScanStash. The app's paywall and settings
  // link to the short /birdperch/{privacy,terms,support} addresses, which
  // public/_redirects sends here; don't move these without updating it.
  privacyUrl: '/products/birdperch/privacy/',
  termsUrl: '/products/birdperch/terms/',
  supportUrl: '/products/birdperch/support/',
  // Opened straight from the app (Profile › Sound credits), no redirect.
  creditsUrl: '/products/birdperch/credits/',

  // The legal texts give this address rather than me.email; the BirdPerch
  // legal pages check against it instead.
  email: 'ahmet@ahmettayfur.com',

  // Source: design/icons/birdperch-icon.png (1024×1024). Same 112×112 WebP +
  // PNG pair as the icons above.
  icon: {
    webp: '/img/birdperch-icon-112.webp',
    png: '/img/birdperch-icon-112.png',
  },
};
