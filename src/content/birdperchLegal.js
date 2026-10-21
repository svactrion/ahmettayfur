// UI labels and links around the BirdPerch privacy policy, terms, support
// and sound credits pages. The text itself is src/legal/birdperch/*.md, rendered as-is.

import privacyEn from '../legal/birdperch/privacy.en.md?raw';
import privacyTr from '../legal/birdperch/privacy.tr.md?raw';
import termsEn from '../legal/birdperch/terms.en.md?raw';
import termsTr from '../legal/birdperch/terms.tr.md?raw';
import supportEn from '../legal/birdperch/support.en.md?raw';
import supportTr from '../legal/birdperch/support.tr.md?raw';
import creditsEn from '../legal/birdperch/credits.en.md?raw';
import creditsTr from '../legal/birdperch/credits.tr.md?raw';
import { birdperch } from '../data.js';

const url = {
  en: { privacy: birdperch.privacyUrl, terms: birdperch.termsUrl, support: birdperch.supportUrl, credits: birdperch.creditsUrl },
  tr: {
    privacy: `/tr${birdperch.privacyUrl}`,
    terms: `/tr${birdperch.termsUrl}`,
    support: `/tr${birdperch.supportUrl}`,
    credits: `/tr${birdperch.creditsUrl}`,
  },
};

const ui = {
  en: {
    homeHref: '/',
    navLink: { label: 'Products', href: '/products/' },
    switchAria: 'Switch to Turkish',
    productLine: 'BirdPerch for iPhone',
    contentsLabel: 'Contents',
    privacy: 'Privacy Policy',
    terms: 'Terms of Use',
    support: 'Support',
    footerPrivacy: 'Privacy',
    footerTerms: 'Terms',
    footerSupport: 'Support',
    docLabel: { privacy: 'Privacy', terms: 'Terms', support: 'Support', credits: 'Sound credits' },
    related: 'Related',
    otherLanguage: {
      privacy: 'Gizlilik Politikası (Türkçe)',
      terms: 'Kullanım Şartları (Türkçe)',
      support: 'Destek (Türkçe)',
      credits: 'Ses kaynakları (Türkçe)',
    },
    description: {
      privacy: 'Privacy policy for BirdPerch, the iPhone app.',
      terms: 'Terms of use for BirdPerch, the iPhone app.',
      support: 'Help and contact for BirdPerch, the iPhone app.',
      credits: 'Credits and licenses for the bird sounds in BirdPerch, the iPhone app.',
    },
  },
  tr: {
    homeHref: '/tr/',
    navLink: { label: 'Ürünler', href: '/tr/products/' },
    switchAria: 'İngilizceye geç',
    productLine: 'iPhone için BirdPerch',
    contentsLabel: 'İçindekiler',
    privacy: 'Gizlilik Politikası',
    terms: 'Kullanım Şartları',
    support: 'Destek',
    footerPrivacy: 'Gizlilik',
    footerTerms: 'Şartlar',
    footerSupport: 'Destek',
    docLabel: { privacy: 'Gizlilik', terms: 'Şartlar', support: 'Destek', credits: 'Ses kaynakları' },
    related: 'İlgili',
    otherLanguage: {
      privacy: 'Privacy Policy (English)',
      terms: 'Terms of Use (English)',
      support: 'Support (English)',
      credits: 'Sound credits (English)',
    },
    description: {
      privacy: 'BirdPerch iPhone uygulamasının gizlilik politikası.',
      terms: 'BirdPerch iPhone uygulamasının kullanım şartları.',
      support: 'BirdPerch iPhone uygulaması için yardım ve iletişim.',
      credits: 'BirdPerch iPhone uygulamasındaki kuş seslerinin kaynakları ve lisansları.',
    },
  },
};

const sources = {
  privacy: { en: privacyEn, tr: privacyTr },
  terms: { en: termsEn, tr: termsTr },
  support: { en: supportEn, tr: supportTr },
  credits: { en: creditsEn, tr: creditsTr },
};

// Linked from each other's Related section. The credits page links to all
// three but isn't in this list itself.
const docs = ['privacy', 'terms', 'support'];

// Everything MarkdownLegalPage needs for one document in one language.
export function birdperchLegalProps(doc, lang) {
  const t = ui[lang];
  const other = lang === 'en' ? 'tr' : 'en';
  return {
    source: sources[doc][lang],
    lang,
    noindex: doc === 'privacy' || doc === 'terms',
    email: birdperch.email,
    // The support and credits pages have no effective-date line.
    dated: doc === 'privacy' || doc === 'terms',
    description: t.description[doc],
    docLabel: t.docLabel[doc],
    productLine: t.productLine,
    contentsLabel: t.contentsLabel,
    alternate: { lang: other, href: url[other][doc] },
    switchAria: t.switchAria,
    homeHref: t.homeHref,
    navLink: t.navLink,
    footerLinks: [
      { label: t.footerPrivacy, href: url[lang].privacy },
      { label: t.footerTerms, href: url[lang].terms },
      { label: t.footerSupport, href: url[lang].support },
    ],
    related: {
      label: t.related,
      links: [
        ...docs.filter((d) => d !== doc).map((d) => ({ text: t[d], href: url[lang][d] })),
        { text: t.otherLanguage[doc], href: url[other][doc], hreflang: other },
      ],
    },
  };
}
