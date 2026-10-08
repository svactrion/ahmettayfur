// UI labels and links around the ScanStash privacy policy and terms. The
// policy text itself is src/legal/scanstash/*.md, rendered as-is.

import privacyEn from '../legal/scanstash/privacy.en.md?raw';
import privacyTr from '../legal/scanstash/privacy.tr.md?raw';
import termsEn from '../legal/scanstash/terms.en.md?raw';
import termsTr from '../legal/scanstash/terms.tr.md?raw';
import { scanstash } from '../data.js';

const url = {
  en: { privacy: scanstash.privacyUrl, terms: scanstash.termsUrl },
  tr: { privacy: `/tr${scanstash.privacyUrl}`, terms: `/tr${scanstash.termsUrl}` },
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
    footerPrivacy: 'Privacy',
    footerTerms: 'Terms',
    docLabel: { privacy: 'Privacy', terms: 'Terms' },
    related: 'Related',
    otherLanguage: { privacy: 'Gizlilik Politikası (Türkçe)', terms: 'Kullanım Koşulları (Türkçe)' },
    description: {
      privacy: 'Privacy policy for QR: ScanStash, the iPhone app.',
      terms: 'Terms of use for QR: ScanStash, the iPhone app.',
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
    footerPrivacy: 'Gizlilik',
    footerTerms: 'Koşullar',
    docLabel: { privacy: 'Gizlilik', terms: 'Koşullar' },
    related: 'İlgili',
    otherLanguage: { privacy: 'Privacy Policy (English)', terms: 'Terms of Use (English)' },
    description: {
      privacy: 'QR: ScanStash iPhone uygulamasının gizlilik politikası.',
      terms: 'QR: ScanStash iPhone uygulamasının kullanım koşulları.',
    },
  },
};

const sources = {
  privacy: { en: privacyEn, tr: privacyTr },
  terms: { en: termsEn, tr: termsTr },
};

// Everything MarkdownLegalPage needs for one document in one language.
export function scanstashLegalProps(doc, lang) {
  const t = ui[lang];
  const other = lang === 'en' ? 'tr' : 'en';
  const otherDoc = doc === 'privacy' ? 'terms' : 'privacy';
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
    ],
    related: {
      label: t.related,
      links: [
        { text: t[otherDoc], href: url[lang][otherDoc] },
        { text: t.otherLanguage[doc], href: url[other][doc], hreflang: other },
      ],
    },
  };
}
