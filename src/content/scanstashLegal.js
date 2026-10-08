// UI labels and links around the ScanStash privacy policy, terms and
// support page. The text itself is src/legal/scanstash/*.md, rendered as-is.

import privacyEn from '../legal/scanstash/privacy.en.md?raw';
import privacyTr from '../legal/scanstash/privacy.tr.md?raw';
import termsEn from '../legal/scanstash/terms.en.md?raw';
import termsTr from '../legal/scanstash/terms.tr.md?raw';
import supportEn from '../legal/scanstash/support.en.md?raw';
import supportTr from '../legal/scanstash/support.tr.md?raw';
import { scanstash } from '../data.js';

const url = {
  en: { privacy: scanstash.privacyUrl, terms: scanstash.termsUrl, support: scanstash.supportUrl },
  tr: {
    privacy: `/tr${scanstash.privacyUrl}`,
    terms: `/tr${scanstash.termsUrl}`,
    support: `/tr${scanstash.supportUrl}`,
  },
};

const ui = {
  en: {
    homeHref: '/',
    navLink: { label: 'Products', href: '/products/' },
    switchAria: 'Switch to Turkish',
    productLine: 'QR: ScanStash for iPhone',
    contentsLabel: 'Contents',
    privacy: 'Privacy Policy',
    terms: 'Terms of Use',
    support: 'Support',
    footerPrivacy: 'Privacy',
    footerTerms: 'Terms',
    footerSupport: 'Support',
    docLabel: { privacy: 'Privacy', terms: 'Terms', support: 'Support' },
    related: 'Related',
    otherLanguage: {
      privacy: 'Gizlilik Politikası (Türkçe)',
      terms: 'Kullanım Koşulları (Türkçe)',
      support: 'Destek (Türkçe)',
    },
    description: {
      privacy: 'Privacy policy for QR: ScanStash, the iPhone app.',
      terms: 'Terms of use for QR: ScanStash, the iPhone app.',
      support: 'Help and contact for QR: ScanStash, the iPhone app.',
    },
  },
  tr: {
    homeHref: '/tr/',
    navLink: { label: 'Ürünler', href: '/tr/products/' },
    switchAria: 'İngilizceye geç',
    productLine: 'iPhone için QR: ScanStash',
    contentsLabel: 'İçindekiler',
    privacy: 'Gizlilik Politikası',
    terms: 'Kullanım Koşulları',
    support: 'Destek',
    footerPrivacy: 'Gizlilik',
    footerTerms: 'Koşullar',
    footerSupport: 'Destek',
    docLabel: { privacy: 'Gizlilik', terms: 'Koşullar', support: 'Destek' },
    related: 'İlgili',
    otherLanguage: {
      privacy: 'Privacy Policy (English)',
      terms: 'Terms of Use (English)',
      support: 'Support (English)',
    },
    description: {
      privacy: 'QR: ScanStash iPhone uygulamasının gizlilik politikası.',
      terms: 'QR: ScanStash iPhone uygulamasının kullanım koşulları.',
      support: 'QR: ScanStash iPhone uygulaması için yardım ve iletişim.',
    },
  },
};

const sources = {
  privacy: { en: privacyEn, tr: privacyTr },
  terms: { en: termsEn, tr: termsTr },
  support: { en: supportEn, tr: supportTr },
};

const docs = ['privacy', 'terms', 'support'];

// Everything MarkdownLegalPage needs for one document in one language.
export function scanstashLegalProps(doc, lang) {
  const t = ui[lang];
  const other = lang === 'en' ? 'tr' : 'en';
  return {
    source: sources[doc][lang],
    lang,
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
