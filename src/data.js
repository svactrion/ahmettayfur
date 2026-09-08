// Every personal detail the site uses lives here.
// Edit this one file and it updates everywhere.

export const me = {
  name: 'Ahmet Emin Tayfur',

  // The address shown on the site and used for every "email me" link.
  //
  // TODO: once Cloudflare Email Routing forwards support@ahmettayfur.com to
  // your inbox, change this one line to 'support@ahmettayfur.com'. Do not
  // change it before the forwarding works — a dead address on an App Store
  // support page is a review problem.
  email: 'aet78@outlook.com',

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
};
