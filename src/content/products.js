// Copy for /products and /products/grammarlens, in both languages.
//
// The GrammarLens legal pages (privacy, terms, support) stay English-only
// — see src/i18n.js — so their copy is not here, it lives straight in their
// .astro files as before. ScanStash's and BirdPerch's legal pages are in
// both languages; see src/content/scanstashLegal.js and birdperchLegal.js.
//
// src/components/ProductsPage.astro and GrammarLensPage.astro render
// whichever of these matches Astro.currentLocale.

import { grammarlens, scanstash, birdperch } from '../data.js';

export const productsCopy = {
  en: {
    meta: {
      title: 'Products — Ahmet Emin Tayfur',
      description: 'Products built and put in front of real users by Ahmet Emin Tayfur.',
    },
    intro: {
      note: { label: 'Products', line1: '3 products', line2: '1 in the App Store' },
      title: 'Products',
      lede: "Things I've built far enough to put in front of someone who wasn't obliged to be nice about it.",
    },
    grammarlensEntry: {
      note: { label: '01', line1: 'Flutter · iOS', line2: 'Live on the App Store' },
      cardTitle: 'GrammarLens',
      cardText:
        'An English grammar app that explains why a sentence is wrong, in context, instead of just flagging it.',
      cardStatus: 'Live on the App Store — 1.3.0',
      storeLinkText: 'Download on the App Store',
    },
    // No product page yet, so this card links nowhere; only its legal
    // pages do.
    scanstashEntry: {
      note: { label: '02', line1: 'Flutter · Swift · iOS', line2: 'In App Store review' },
      cardTitle: scanstash.name,
      cardText:
        'An iPhone app that scans QR codes with the camera or from a photo and saves the web links in a personal visual library. You can name your links, search them and reopen them with one tap from a Home Screen widget.',
      cardStatus: 'Submitted for App Store review',
      docs: [
        { label: 'Privacy', href: scanstash.privacyUrl },
        { label: 'Terms', href: scanstash.termsUrl },
        { label: 'Support', href: scanstash.supportUrl },
      ],
    },
    // Same as ScanStash: no product page yet, only the legal pages.
    birdperchEntry: {
      note: { label: '03', line1: 'Swift · iOS', line2: 'In development' },
      cardTitle: birdperch.name,
      cardText:
        'An iPhone app where you create your own bird in 3D, interact with it, track its care and get AI-assisted suggestions.',
      cardStatus: 'In development',
      docs: [
        { label: 'Privacy', href: birdperch.privacyUrl },
        { label: 'Terms', href: birdperch.termsUrl },
        { label: 'Support', href: birdperch.supportUrl },
      ],
    },
  },

  tr: {
    meta: {
      title: 'Ürünler — Ahmet Emin Tayfur',
      description: 'Ahmet Emin Tayfur’ın geliştirip gerçek kullanıcıların önüne çıkardığı ürünler.',
    },
    intro: {
      note: { label: 'Ürünler', line1: '3 ürün', line2: "1'i App Store'da" },
      title: 'Ürünler',
      lede: 'Bana nazik davranmak zorunda olmayan birinin önüne koyabilecek kadar ilerlettiğim işler.',
    },
    grammarlensEntry: {
      note: { label: '01', line1: 'Flutter · iOS', line2: "App Store'da yayında" },
      cardTitle: 'GrammarLens',
      cardText:
        'Bir cümlenin neden yanlış olduğunu, sadece işaretlemek yerine bağlamı içinde açıklayan bir İngilizce dilbilgisi uygulaması.',
      cardStatus: "App Store'da yayında — 1.3.0",
      storeLinkText: "App Store'dan indir",
    },
    scanstashEntry: {
      note: { label: '02', line1: 'Flutter · Swift · iOS', line2: 'App Store incelemesinde' },
      cardTitle: scanstash.name,
      cardText:
        "QR kodlarını kameradan veya fotoğraftan tarayarak web bağlantılarını kişisel bir görsel kütüphanede saklamanı sağlayan iPhone uygulaması. Bağlantılarını adlandırabilir, arayabilir ve ana ekran widget'ından tek dokunuşla yeniden açabilirsin.",
      cardStatus: 'App Store incelemesine gönderildi',
      docs: [
        { label: 'Gizlilik', href: scanstash.privacyUrl },
        { label: 'Kullanım koşulları', href: scanstash.termsUrl },
        { label: 'Destek', href: scanstash.supportUrl },
      ],
    },
    birdperchEntry: {
      note: { label: '03', line1: 'Swift · iOS', line2: 'Geliştirme aşamasında' },
      cardTitle: birdperch.name,
      cardText:
        'Kendi kuşunu 3D olarak oluşturduğun, onunla etkileşime girdiğin, bakımını takip ettiğin ve yapay zekâ destekli öneriler alabildiğin bir iPhone uygulaması.',
      cardStatus: 'Geliştirme aşamasında',
      docs: [
        { label: 'Gizlilik', href: birdperch.privacyUrl },
        { label: 'Kullanım koşulları', href: birdperch.termsUrl },
        { label: 'Destek', href: birdperch.supportUrl },
      ],
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
    status: 'Live on the App Store — version 1.3.0, released 2 November 2026',
    title: 'GrammarLens',
    lede: "Most grammar tools tell you a sentence is wrong and hand you a correction. GrammarLens builds practice around the mistakes you actually make and explains every answer in plain language. The rule's name is there only if you want it.",
    downloadLink: 'Download on the App Store',
    badge: { src: '/img/grammarlens/app-store-badge-en.svg', width: 144, height: 48 },
    reviewNote: 'Update 1.4.0 (seven interface languages) is in App Store review.',
    // Unpublished until grammarlens.v140Released is true (src/data.js).
    v140Note: 'Interface available in English, Turkish, German, Spanish, Portuguese, Japanese, Korean and Arabic. Change it in Profile → Appearance → Language.',

    gallery: {
      label: 'Screenshots',
      dir: '/img/grammarlens/en',
      items: [
        { file: '01-results', alt: 'Daily Test results. Caption: Every answer explained. A wrong answer shows what you wrote, "have seen", the correction, "saw", and the reason: with a finished time like "yesterday", use the simple past.' },
        { file: '04-question', alt: 'A Daily Test question. Caption: Write your own answer. Five questions, one small daily habit. The question reads "Yesterday I ___ a great film", with a box to type the answer.' },
        { file: '02-hint', alt: 'A topic hint held open on a question. Caption: See the grammar pattern. A slider labelled "Slide for a hint" reveals a Tense Selection reminder of when to use each past form.' },
        { file: '03-home', alt: 'The Home screen. Caption: Watch your progress climb. A new mountain each month, a step each day. A completed Daily Test card sits above the Mountain of Learning, with a fox character beside the phone.' },
        { file: '05-review', alt: 'The Review screen. Caption: Your weak spots, in one place. Cards for Tense Selection and Modal Verbs show the rule to remember and how many times each mistake came up.' },
        { file: '07-onboarding', alt: 'The first onboarding step. Caption: Pick your learning companion. A fox is selected from a row of characters, with a box below for a nickname.' },
      ],
    },

    whatItDoes: {
      label: 'What it does',
      items: [
        {
          title: 'Daily Test',
          body: 'A fresh set of questions every day. Fill in the blanks, correct the errors, and get an explanation for every answer.',
        },
        {
          title: 'Real explanations, not just checkmarks',
          body: 'Instead of "wrong", you get the reasoning: which rule applies, why your answer doesn\'t fit, and what to remember next time.',
        },
        {
          title: 'Topic hints',
          body: 'Stuck on a question? Slide to see the grammar pattern for its topic — a reminder of the rule, never the answer.',
        },
        {
          title: 'Your weak spots, tracked',
          body: 'The app remembers which grammar points you keep missing and collects them in Review, so you always know what to work on.',
        },
        {
          title: 'Topic Practice',
          body: 'Focus on a specific area — Articles, Tense Selection, Modal Verbs, Modal Past Forms, and Gerund vs. Infinitive — with sessions of 3, 5 or 10 questions.',
        },
        {
          title: 'Mountain of Learning',
          body: "Every Daily Test takes your character one step up this month's mountain. Earn medals for the month and build a habit that sticks.",
        },
        {
          title: 'Sixteen study buddies',
          body: 'Pick the character that climbs with you.',
        },
        {
          title: 'Free and Premium',
          body: 'Free includes one Daily Test and one practice session every day. Premium unlocks Topic Practice across all five areas and more practice sessions each day. Premium is available as a monthly or annual subscription. Both include a free trial for new subscribers. Prices are shown in the app before you subscribe.',
        },
        {
          title: 'Privacy',
          body: 'There is no account and no sign-up. Your name, your progress and your practice history stay on your device. The app sends anonymous usage data, never your name. To give you feedback, the answers you type are sent to our AI provider, Anthropic. The app asks your permission before this happens for the first time, and you can withdraw it at any time from the Data screen.',
          linkText: 'Full privacy policy',
        },
      ],
    },

    whoFor: {
      label: "Who it's for",
      body: "English learners who became fluent through games, series and friends, but can't reliably apply the grammar an exam like IELTS asks for: gerunds versus infinitives, modals, modal past forms. If you're starting from zero, a course will serve you better than this app.",
    },

    more: {
      label: 'More',
      links: [
        { label: 'Process', text: 'How GrammarLens was researched and built', href: grammarlens.caseStudyUrl },
        { label: 'Support', text: 'Get help or report a problem', href: grammarlens.supportUrl },
        { label: 'Privacy', text: 'Privacy policy', href: grammarlens.privacyUrl },
      ],
    },

    lastUpdated: 'Last updated: 5 November 2026',
  },

  tr: {
    meta: {
      title: 'GrammarLens — Yapay zekâ destekli dilbilgisi koçu',
      description:
        "Kullanıcı araştırması ve problem keşfinden MVP'ye, test ve iterasyona kadar adım adım geliştirilen, yapay zekâ destekli bir mobil dilbilgisi koçu.",
    },
    note: { label: 'GrammarLens', line1: 'iOS', line2: 'Flutter ile geliştirildi', line3: 'Tek kişilik proje' },
    status: "App Store'da yayında — sürüm 1.3.0, 2 Kasım 2026'da yayınlandı",
    title: 'GrammarLens',
    lede: 'Çoğu dilbilgisi aracı bir cümlenin yanlış olduğunu söyler ve sana bir düzeltme sunar. GrammarLens ise gerçekten yaptığın hatalardan alıştırma üretir ve her cevabı sade bir dille açıklar. Kuralın adı yalnızca istersen karşına çıkar.',
    downloadLink: "App Store'dan indir",
    badge: { src: '/img/grammarlens/app-store-badge-tr.svg', width: 182, height: 48 },
    reviewNote: '1.4.0 güncellemesi (yedi arayüz dili) App Store incelemesinde.',
    // Unpublished until grammarlens.v140Released is true (src/data.js).
    v140Note: "Arayüz İngilizce, Türkçe, Almanca, İspanyolca, Portekizce, Japonca, Korece ve Arapça olarak kullanılabilir. Dili Profil → Görünüm → Dil'den değiştirebilirsin.",

    gallery: {
      label: 'Ekran görüntüleri',
      // English screenshots: the live 1.3.0 is English-only. The alt text is
      // Turkish but quotes the English on screen.
      dir: '/img/grammarlens/en',
      items: [
        { file: '01-results', alt: 'Daily Test sonuçları ekranı. Başlık: "Every answer explained." Yanlış bir cevapta yazılan "have seen", düzeltilmiş hali "saw" ve nedeni görünüyor: "yesterday" gibi bitmiş bir zamanla simple past kullanılır.' },
        { file: '04-question', alt: 'Bir Daily Test sorusu. Başlık: "Write your own answer." Soru "Yesterday I ___ a great film" diyor, altında cevabı yazmak için bir kutu var.' },
        { file: '02-hint', alt: 'Bir soruda açık tutulan konu ipucu. Başlık: "See the grammar pattern." "Slide for a hint" düğmesi, geçmiş zaman biçimlerinin ne zaman kullanıldığını hatırlatan bir Tense Selection notu açıyor.' },
        { file: '03-home', alt: 'Home ekranı. Başlık: "Watch your progress climb." Tamamlanmış Daily Test kartının altında Mountain of Learning görünüyor, telefonun yanında bir tilki karakteri duruyor.' },
        { file: '05-review', alt: 'Review ekranı. Başlık: "Your weak spots, in one place." Tense Selection ve Modal Verbs kartları, hatırlanacak kuralı ve her hatanın kaç kez yapıldığını gösteriyor.' },
        { file: '07-onboarding', alt: 'İlk tanışma adımı. Başlık: "Pick your learning companion." Karakterler arasından bir tilki seçili, altında takma ad için bir kutu var.' },
      ],
    },

    // Unpublished until grammarlens.v140Released is true (src/data.js): the
    // Turkish interface only exists from 1.4.0.
    v140Gallery: {
      dir: '/img/grammarlens/tr',
      items: [
        { file: '01-results', alt: 'Günlük Test sonuçları. Başlık: Her cevap açıklanır. Yanlış bir cevapta yazdığın "have seen", düzeltilmiş hali "saw" ve nedeni görünüyor: "yesterday" gibi bitmiş bir zamanla simple past kullanılır.' },
        { file: '04-question', alt: 'Bir Günlük Test sorusu. Başlık: Kendi cevabını yaz. Beş soru, küçük bir günlük alışkanlık. Soru "Yesterday I ___ a great film" diyor, altında cevabı yazmak için bir kutu var.' },
        { file: '02-hint', alt: 'Bir soruda açık tutulan konu ipucu. Başlık: Gramer kalıbını gör. "İpucu için kaydır" düğmesi, geçmiş zaman biçimlerinin ne zaman kullanıldığını hatırlatan bir Tense Selection notu açıyor.' },
        { file: '03-home', alt: 'Ana Sayfa ekranı. Başlık: İlerlemenin yükselişini izle. Her ay yeni bir dağ, her gün bir adım. Tamamlanmış Günlük Test kartının altında Öğrenme Dağı görünüyor, telefonun yanında bir tilki karakteri duruyor.' },
        { file: '05-review', alt: 'Tekrar ekranı. Başlık: Zayıf noktaların, tek bir yerde. Tense Selection ve Modal Verbs kartları, hatırlanacak kuralı ve her hatanın kaç kez yapıldığını gösteriyor.' },
        { file: '07-onboarding', alt: 'İlk tanışma adımı. Başlık: Öğrenme arkadaşını seç. Karakterler arasından bir tilki seçili, altında takma ad için bir kutu var.' },
      ],
    },

    // English feature names with a Turkish gloss: the live 1.3.0 is English-only.
    whatItDoes: {
      label: 'Ne işe yarar',
      items: [
        {
          title: 'Daily Test (Günlük Test)',
          body: 'Her gün yeni bir soru seti. Boşlukları doldur, hataları düzelt ve her cevap için bir açıklama al.',
        },
        {
          title: 'Sadece işaret değil, gerçek açıklama',
          body: '"Yanlış" yerine nedenini görürsün: hangi kural geçerli, cevabın neden uymuyor ve bir dahaki sefere neyi hatırlamalısın.',
        },
        {
          title: 'Topic hints (Konu ipuçları)',
          body: 'Bir soruda takıldın mı? Konusunun gramer kalıbını görmek için kaydır: kuralı hatırlatır, cevabı asla vermez.',
        },
        {
          title: 'Zayıf noktaların takipte',
          body: 'Uygulama sürekli kaçırdığın gramer konularını hatırlar ve Review (Tekrar) ekranında toplar; neye çalışman gerektiğini hep bilirsin.',
        },
        {
          title: 'Topic Practice (Konu Pratiği)',
          body: 'Belirli bir alana odaklan (Articles, Tense Selection, Modal Verbs, Modal Past Forms, Gerund vs. Infinitive); 3, 5 ya da 10 soruluk oturumlarla.',
        },
        {
          title: 'Mountain of Learning (Öğrenme Dağı)',
          body: 'Her Daily Test karakterini bu ayın dağında bir adım yukarı taşır. Ayın madalyalarını kazan, kalıcı bir alışkanlık edin.',
        },
        {
          title: 'On altı çalışma arkadaşı',
          body: 'Seninle tırmanacak karakteri seç.',
        },
        {
          title: 'Ücretsiz ve Premium',
          body: "Ücretsiz sürümde her gün bir Daily Test ve bir pratik oturumu var. Premium, beş alanın hepsinde Topic Practice'i ve her gün daha fazla pratik oturumunu açar. Premium aylık ya da yıllık abonelik olarak sunulur. İkisi de yeni aboneler için ücretsiz deneme içerir. Fiyatlar abone olmadan önce uygulamada gösterilir.",
        },
        {
          title: 'Gizlilik',
          body: "Hesap yok, kayıt yok. Adın, ilerlemen ve pratik geçmişin cihazında kalır. Uygulama anonim kullanım verileri gönderir, adını asla göndermez. Sana geri bildirim verebilmek için yazdığın cevaplar yapay zekâ sağlayıcımız Anthropic'e gönderilir. Uygulama bunu ilk kez yapmadan önce iznini ister; iznini istediğin zaman Data (Veriler) ekranından geri çekebilirsin.",
          linkText: 'Gizlilik politikasının tamamı (İngilizce)',
        },
      ],
    },

    // Unpublished until grammarlens.v140Released is true (src/data.js): the
    // Turkish feature names only exist in the app from 1.4.0.
    v140WhatItDoes: {
      label: 'Ne işe yarar',
      items: [
        {
          title: 'Günlük Test',
          body: 'Her gün yeni bir soru seti. Boşlukları doldur, hataları düzelt ve her cevap için bir açıklama al.',
        },
        {
          title: 'Sadece işaret değil, gerçek açıklama',
          body: '"Yanlış" yerine nedenini görürsün: hangi kural geçerli, cevabın neden uymuyor ve bir dahaki sefere neyi hatırlamalısın.',
        },
        {
          title: 'Konu ipuçları',
          body: 'Bir soruda takıldın mı? Konusunun gramer kalıbını görmek için kaydır: kuralı hatırlatır, cevabı asla vermez.',
        },
        {
          title: 'Zayıf noktaların takipte',
          body: "Uygulama sürekli kaçırdığın gramer konularını hatırlar ve Tekrar'da toplar; neye çalışman gerektiğini hep bilirsin.",
        },
        {
          title: 'Konu Pratiği',
          body: 'Belirli bir alana odaklan (Articles, Tense Selection, Modal Verbs, Modal Past Forms, Gerund vs. Infinitive); 3, 5 ya da 10 soruluk oturumlarla.',
        },
        {
          title: 'Öğrenme Dağı',
          body: 'Her Günlük Test karakterini bu ayın dağında bir adım yukarı taşır. Ayın madalyalarını kazan, kalıcı bir alışkanlık edin.',
        },
        {
          title: 'On altı çalışma arkadaşı',
          body: 'Seninle tırmanacak karakteri seç.',
        },
        {
          title: 'Ücretsiz ve Premium',
          body: "Ücretsiz sürümde her gün bir Günlük Test ve bir pratik oturumu var. Premium, beş alanın hepsinde Konu Pratiği'ni ve her gün daha fazla pratik oturumunu açar. Premium aylık ya da yıllık abonelik olarak sunulur. İkisi de yeni aboneler için ücretsiz deneme içerir. Fiyatlar abone olmadan önce uygulamada gösterilir.",
        },
        {
          title: 'Gizlilik',
          body: "Hesap yok, kayıt yok. Adın, ilerlemen ve pratik geçmişin cihazında kalır. Uygulama anonim kullanım verileri gönderir, adını asla göndermez. Sana geri bildirim verebilmek için yazdığın cevaplar yapay zekâ sağlayıcımız Anthropic'e gönderilir. Uygulama bunu ilk kez yapmadan önce iznini ister; iznini istediğin zaman Veriler ekranından geri çekebilirsin.",
          linkText: 'Gizlilik politikasının tamamı (İngilizce)',
        },
      ],
    },

    whoFor: {
      label: 'Kimin için',
      body: "İngilizceyi oyunlar, diziler ve arkadaşları sayesinde akıcı konuşur hâle gelmiş ama IELTS gibi bir sınavın istediği dilbilgisini güvenle uygulayamayanlar için: gerund mu infinitive mi, modal'lar, modal'ların geçmiş biçimleri. Sıfırdan başlıyorsan bir kurs bu uygulamadan daha işine yarar.",
    },

    more: {
      label: 'Daha fazlası',
      links: [
        { label: 'Süreç', text: 'GrammarLens nasıl araştırıldı ve geliştirildi', href: grammarlens.caseStudyUrl },
        { label: 'Destek', text: 'Yardım al ya da bir sorun bildir (İngilizce)', href: grammarlens.supportUrl },
        { label: 'Gizlilik', text: 'Gizlilik politikası (İngilizce)', href: grammarlens.privacyUrl },
      ],
    },

    lastUpdated: 'Son güncelleme: 5 Kasım 2026',
  },
};
