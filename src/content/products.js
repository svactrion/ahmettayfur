// Copy for /products and /products/grammarlens, in both languages.
//
// The legal pages (privacy, terms, support) and the case study stay
// English-only — see src/i18n.js — so their copy is not here, it lives
// straight in their .astro files as before.
//
// src/components/ProductsPage.astro and GrammarLensPage.astro render
// whichever of these matches Astro.currentLocale.

import { grammarlens } from '../data.js';

export const productsCopy = {
  en: {
    meta: {
      title: 'Products — Ahmet Emin Tayfur',
      description: 'Products built and put in front of real users by Ahmet Emin Tayfur.',
    },
    intro: {
      note: { label: 'Products', line1: '1 shipped to testers', line2: '0 in the App Store' },
      title: 'Products',
      lede: "Things I've built far enough to put in front of someone who wasn't obliged to be nice about it.",
    },
    grammarlensEntry: {
      note: { label: '01', line1: 'Flutter · iOS', line2: 'In review prep' },
      cardTitle: 'GrammarLens',
      cardText:
        'An English grammar app that explains why a sentence is wrong, in context, instead of just flagging it.',
      cardStatus: 'Preparing App Store submission',
    },
  },

  tr: {
    meta: {
      title: 'Ürünler — Ahmet Emin Tayfur',
      description: 'Ahmet Emin Tayfur’ın geliştirip gerçek kullanıcıların önüne çıkardığı ürünler.',
    },
    intro: {
      note: { label: 'Ürünler', line1: '1 ürün test aşamasında', line2: "App Store'da henüz yok" },
      title: 'Ürünler',
      lede: 'Bana nazik davranmak zorunda olmayan birinin önüne koyabilecek kadar ilerlettiğim işler.',
    },
    grammarlensEntry: {
      note: { label: '01', line1: 'Flutter · iOS', line2: 'İnceleme hazırlığında' },
      cardTitle: 'GrammarLens',
      cardText:
        'Bir cümlenin neden yanlış olduğunu, sadece işaretlemek yerine bağlamı içinde açıklayan bir İngilizce dilbilgisi uygulaması.',
      cardStatus: 'App Store başvurusu hazırlanıyor',
    },
  },
};

export const grammarlensPageCopy = {
  en: {
    meta: {
      title: 'GrammarLens — AI-Powered Grammar Coach',
      description:
        'An AI-powered mobile grammar coach built from user research and problem discovery through MVP, testing, and iteration.',
    },
    note: { label: 'GrammarLens', line1: 'iOS', line2: 'Built in Flutter', line3: 'Solo project' },
    status: 'Not released yet',
    title: 'GrammarLens',
    lede: 'Most grammar tools tell you a sentence is wrong and hand you a correction. GrammarLens tells you which rule you broke and why the correct version works — so the next sentence is easier.',
    downloadLink: 'Download on the App Store',
    notReleasedNote: "The app is finished and being prepared for App Store review. There's nothing to download yet.",

    whatItDoes: {
      label: 'What it does',
      items: [
        {
          title: 'Explains, not just corrects',
          body: 'You write or paste a sentence. GrammarLens identifies the mistake, names the rule behind it, and shows a corrected version alongside a short explanation of the difference.',
        },
        {
          title: 'Practice that adapts to your time',
          body: "You choose how long a practice set should be. A short set when you have five minutes, a longer one when you don't.",
        },
        {
          title: 'Your work stays on your phone',
          body: 'Practice history is stored locally on your device, not on a server.',
          linkText: 'Full privacy policy',
        },
      ],
    },

    whoFor: {
      label: "Who it's for",
      body: "People who already speak some English and keep making the same handful of mistakes — usually articles, tenses, and prepositions. If you're starting from zero, a course will serve you better than this app.",
    },

    more: {
      label: 'More',
      links: [
        { label: 'Process', text: 'How GrammarLens was researched and built', href: grammarlens.caseStudyUrl },
        { label: 'Support', text: 'Get help or report a problem', href: grammarlens.supportUrl },
        { label: 'Privacy', text: 'Privacy policy', href: grammarlens.privacyUrl },
      ],
    },
  },

  tr: {
    meta: {
      title: 'GrammarLens — Yapay zekâ destekli dilbilgisi koçu',
      description:
        "Kullanıcı araştırması ve problem keşfinden MVP'ye, test ve iterasyona kadar adım adım geliştirilen, yapay zekâ destekli bir mobil dilbilgisi koçu.",
    },
    note: { label: 'GrammarLens', line1: 'iOS', line2: 'Flutter ile geliştirildi', line3: 'Tek kişilik proje' },
    status: 'Henüz yayında değil',
    title: 'GrammarLens',
    lede: 'Çoğu dilbilgisi aracı bir cümlenin yanlış olduğunu söyler ve sana bir düzeltme sunar. GrammarLens ise hangi kuralı çiğnediğini ve doğru hâlinin neden doğru olduğunu anlatır; böylece bir sonraki cümleyi kurmak kolaylaşır.',
    downloadLink: "App Store'dan indir",
    notReleasedNote: 'Uygulama tamamlandı ve App Store incelemesine hazırlanıyor. Şu an indirilecek bir şey yok.',

    whatItDoes: {
      label: 'Ne işe yarar',
      items: [
        {
          title: 'Sadece düzeltmez, açıklar',
          body: 'Bir cümle yazar ya da yapıştırırsın. GrammarLens hatayı bulur, arkasındaki kuralın adını verir ve cümlenin düzeltilmiş hâlini, farkı açıklayan kısa bir notla birlikte gösterir.',
        },
        {
          title: 'Vaktine göre ayarlanan pratik',
          body: 'Pratik setinin ne kadar süreceğini sen seçersin. Beş dakikan varsa kısa bir set, daha fazla vaktin varsa uzun bir set.',
        },
        {
          title: 'Çalışmaların telefonunda kalır',
          body: 'Pratik geçmişin bir sunucuda değil, kendi cihazında saklanır.',
          linkText: 'Tam gizlilik politikası',
        },
      ],
    },

    whoFor: {
      label: 'Kimin için',
      body: "Biraz İngilizce konuşabilen ama aynı birkaç hatayı tekrar tekrar yapanlar için; bu hatalar genellikle article'lar (a/an/the), zamanlar ve edatlarla ilgili. Sıfırdan başlıyorsan bir kurs bu uygulamadan daha işine yarar.",
    },

    more: {
      label: 'Daha fazlası',
      links: [
        { label: 'Süreç', text: 'GrammarLens nasıl araştırıldı ve geliştirildi', href: grammarlens.caseStudyUrl },
        { label: 'Destek', text: 'Yardım al ya da bir sorun bildir', href: grammarlens.supportUrl },
        { label: 'Gizlilik', text: 'Gizlilik politikası', href: grammarlens.privacyUrl },
      ],
    },
  },
};
