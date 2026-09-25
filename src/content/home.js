// All home page copy, in both languages.
//
// src/components/HomePage.astro renders whichever of these matches
// Astro.currentLocale — copy.en at "/", copy.tr at "/tr/". Edit text here,
// never in HomePage.astro.

import { grammarlens } from '../data.js';

const productDocsEn = [
  { label: 'Privacy', href: grammarlens.privacyUrl },
  { label: 'Terms', href: grammarlens.termsUrl },
  { label: 'Support', href: grammarlens.supportUrl },
];

// The legal pages are English only. "(EN)" keeps the three links on one
// line in the card; the accessible name spells it out.
const productDocsTr = [
  { label: 'Gizlilik (EN)', aria: 'Gizlilik (İngilizce)', href: grammarlens.privacyUrl },
  { label: 'Koşullar (EN)', aria: 'Koşullar (İngilizce)', href: grammarlens.termsUrl },
  { label: 'Destek (EN)', aria: 'Destek (İngilizce)', href: grammarlens.supportUrl },
];

export const copy = {
  en: {
    meta: {
      title: 'Ahmet Emin Tayfur — product management',
      description:
        'Statistics graduate building his own products to grow into product management: user research, PRD, MVP, testing and iteration.',
    },

    chrome: {
      skip: 'Skip to content',
      langSwitchAria: 'Switch to Turkish',
      navAria: 'Primary',
      grammarlensOgAlt: 'GrammarLens — AI-Powered Grammar Coach',
    },

    nav: { who: 'Who am I', products: 'Products', articles: 'Articles', contact: 'Contact' },

    eyebrow: 'Product management · new graduate',
    heroTitle: ['I ship the products', 'I want to use.'],
    heroTagline:
      'Building for myself is where it starts; shipping is where I learn what the market actually wants.',
    heroBody:
      'I finished my statistics degree in June 2026 and I am building my own products to grow into product management: user research, PRD, MVP, testing and iteration, all of it hands-on. Looking for a role where I can keep learning at that pace.',
    heroAlt: 'Illustrated portrait of Ahmet Emin Tayfur',
    cta1: 'See the products',
    cta2: 'Read the articles',

    prodTitle: 'Products',
    prodCount: 'One in the works · more to come',
    caseStudy: 'Read the case study',
    source: 'GitHub',
    sourceLabel: 'GrammarLens source code on GitHub (opens in a new tab)',
    nextKicker: 'Next',
    nextTitle: 'Product 02 is in discovery',
    nextBody:
      'The next one starts the same way: a problem I keep running into myself, then research before a line of code.',

    whoTitle: 'Who am I',
    whoBody: [
      'I finished a statistics degree in June 2026. Four years of it left me with one habit that stuck: before believing a number, ask how it was collected. Most of what I bring to product work comes from that.',
      "The rest I learned by building. GrammarLens started as my own problem: I kept correcting my English without understanding what I was getting wrong. I wrote the PRD, built the app with AI coding agents that I directed through written decision reports, and tested it with seven people. They showed me that the feature I'd built the app around, naming the grammar rule, was the thing getting in their way.",
      'This site is the short version. It is here to show how I work rather than list everything I have done. Tools I use regularly: Flutter and Dart, SQL, Power BI, Excel, statistical modelling. I am looking for a product management role where the learning stays this fast.',
    ],

    principlesLabel: 'How I work',
    backgroundLabel: 'Background',
    scrollHint: 'Swipe',
    trackPrev: 'Previous',
    trackNext: 'Next',

    articlesTitle: 'Articles',
    artFeed: 'From Medium',
    artSub:
      "Notes on what I'm building, what I'm learning, and where I'm still wrong — on Medium and LinkedIn.",
    artEmpty:
      'Nothing to show from the feed yet. Once a post is live on Medium, it appears in this list after the next deploy.',
    artAll: 'Everything on Medium',

    contactTitle: 'Contact',
    contactNote:
      'Support requests for the apps, work conversations and everything else. I answer from here first.',
    directContact: 'Direct contact',

    byeTitle: 'That is the whole site.',
    byeNote: 'If any of it was worth a conversation, the address above reaches me.',
    backToTopHint: 'Tap to go back to the top.',
    backToTop: 'Back to top',

    products: [
      {
        name: 'GrammarLens',
        status: 'In App Store review',
        kicker: 'AI-powered learning app',
        desc: "GrammarLens is an iOS app for English learners who speak fluently but can't reliably apply the grammar an exam like IELTS asks for. It builds practice around your own mistakes and explains them in plain language, not rule names. I did the research, wrote the PRD and made every product decision; AI coding agents wrote the code. Version 1.0 went to App Store review on 24 September 2026.",
        facts: ['4 interviews', '3 usability tests', 'Solo project'],
        stack: ['Flutter / Dart', 'Claude API', 'Material 3'],
        caseHref: grammarlens.caseStudyUrl,
        sourceHref: grammarlens.sourceUrl,
        docs: productDocsEn,
        icon: { ...grammarlens.icon, alt: 'GrammarLens app icon' },
      },
    ],

    principles: [
      {
        title: 'I start from the problem, not the feature',
        body: "GrammarLens started because I kept making the same English mistakes and learning nothing from them. My first version still carried an assumption I hadn't noticed: that naming the grammar rule was the feature. Seven people showed me it wasn't, and the product changed around what they said.",
      },
      {
        title: 'I state the real number',
        body: "I tested with seven people, not seventy, and one of the interviews was with myself. Seven is not a sample, but it was enough to show me which way I was wrong. I'd rather state the real sample size than round up to one that sounds better.",
      },
      {
        title: 'I treat cost as a product decision',
        body: "Every generated practice set and every graded answer calls a language model, and every call has a price. Grading the free Daily Test on the device, writing the first test by hand and capping paid practice at five sessions a day weren't technical details; they decided whether the product could exist.",
      },
      {
        title: 'I finish things',
        body: "Writing the code myself was never the goal; shipping was. AI coding agents wrote it from my written decision reports, and my job was the decisions. An idea that hasn't reached a real screen hasn't been tested, only described.",
      },
    ],

    groups: [
      {
        title: 'Projects',
        items: [
          {
            when: '2026 –',
            what: 'GrammarLens',
            note: 'My own mobile product: user research, PRD, MVP, testing with seven people. Submitted for App Store review on 24 September 2026.',
          },
        ],
      },
      {
        title: 'Experience',
        items: [
          {
            when: '2024 – 2025',
            what: 'Junior Business Development Specialist',
            note: 'Auratech Consultancy — B2B sales funnel, HubSpot, data collection and cleaning.',
          },
          {
            when: '2024',
            what: 'SAP Consulting Intern',
            note: 'GOERZ-IT — SD and MM module configuration, documenting B2B process flows.',
          },
          {
            when: '2023',
            what: 'Data Analyst Intern',
            note: 'Konak İlçe Milli Eğitim Müdürlüğü — processing and validating large educational datasets before official reporting.',
          },
        ],
      },
      {
        title: 'Learning',
        items: [
          {
            when: 'June 2026',
            what: 'BSc Statistics',
            note: 'Ege Üniversitesi — graduated in June 2026. Thesis modelled Consumer Price Index trends through regression analysis.',
          },
          {
            when: '2025',
            what: 'Product Management Bootcamp',
            note: 'Coderspace — discovery, prioritisation, A/B testing and experiment design.',
          },
          {
            when: '2025',
            what: 'Flutter and Digital Marketing Bootcamps',
            note: 'Techcareer.net — mobile development, plus acquisition, conversion and retention metrics across the user journey.',
          },
          {
            when: '2024',
            what: 'Data Summer Camp',
            note: 'Intellica — SQL and Oracle Data Integrator applied to real business intelligence cases.',
          },
        ],
      },
    ],
  },

  tr: {
    meta: {
      title: 'Ahmet Emin Tayfur — ürün yönetimi',
      description:
        'Kendi ürünlerini geliştirerek ürün yönetimine hazırlanan bir istatistik mezunu: kullanıcı araştırması, PRD, MVP, test ve iterasyon.',
    },

    chrome: {
      skip: 'İçeriğe atla',
      langSwitchAria: 'İngilizceye geç',
      navAria: 'Ana menü',
      grammarlensOgAlt: 'GrammarLens — yapay zekâ destekli dilbilgisi koçu',
    },

    nav: { who: 'Ben kimim', products: 'Ürünler', articles: 'Yazılar', contact: 'İletişim' },

    eyebrow: 'Ürün yönetimi · yeni mezun',
    heroTitle: ['Kullanmak istediğim', 'ürünleri hayata geçiriyorum.'],
    heroTagline:
      'Her şey kendim için üretmekle başlıyor; piyasanın gerçekte ne istediğini ise ürünü yayına aldığımda öğreniyorum.',
    heroBody:
      "Haziran 2026'da istatistik bölümünden mezun oldum. Ürün yöneticiliğine kendi ürünlerimi geliştirerek hazırlanıyorum; kullanıcı araştırmasından PRD'ye, MVP'den test ve iterasyona kadar her adımı kendim yürütüyorum. Bu hızla öğrenmeye devam edebileceğim bir ürün rolü arıyorum.",
    heroAlt: "Ahmet Emin Tayfur'un illüstrasyon portresi",
    cta1: 'Ürünlere bak',
    cta2: 'Yazıları oku',

    prodTitle: 'Ürünler',
    prodCount: 'Biri geliştirmede · yenileri yolda',
    caseStudy: "Case study'yi oku",
    source: 'GitHub',
    sourceLabel: "GrammarLens kaynak kodu GitHub'da (yeni sekmede açılır)",
    nextKicker: 'Sıradaki',
    nextTitle: 'İkinci ürün keşif aşamasında',
    nextBody:
      'O da aynı yoldan başlıyor: önce benim de sürekli karşılaştığım bir problem, sonra tek satır kod yazmadan önce araştırma.',

    whoTitle: 'Ben kimim',
    whoBody: [
      "Haziran 2026'da istatistik bölümünden mezun oldum. Dört yıllık eğitimden bana kalan en kalıcı alışkanlık şu: bir sayıya inanmadan önce nasıl toplandığını sormak. Ürün tarafında yaptığım işlerin çoğu bu alışkanlıktan besleniyor.",
      "Gerisini ürün geliştirirken öğrendim. GrammarLens kendi problemim olarak başladı: İngilizcemi sürekli düzeltiyordum ama neyi yanlış yaptığımı bir türlü anlamıyordum. PRD'yi yazdım, uygulamayı yazılı karar raporlarıyla yönlendirdiğim yapay zekâ kodlama ajanlarıyla geliştirdim ve yedi kişiyle test ettim. Uygulamayı etrafında kurduğum özelliğin, yani dilbilgisi kuralının adını vermenin, onların önündeki asıl engel olduğunu gösterdiler.",
      'Bu site işin kısa hâli. Amacı yaptığım her şeyi sıralamak değil, nasıl çalıştığımı göstermek. Düzenli kullandığım araçlar: Flutter ve Dart, SQL, Power BI, Excel, istatistiksel modelleme. Öğrenmeye bu hızla devam edebileceğim bir ürün yöneticiliği rolü arıyorum.',
    ],

    principlesLabel: 'Nasıl çalışırım',
    backgroundLabel: 'Özgeçmiş',
    scrollHint: 'Kaydır',
    trackPrev: 'Önceki',
    trackNext: 'Sonraki',

    articlesTitle: 'Yazılar',
    artFeed: "Medium'dan",
    artSub:
      'Ne geliştirdiğim, ne öğrendiğim ve hâlâ nerede yanıldığım üzerine notlar — Medium ve LinkedIn’de.',
    artEmpty:
      "Henüz gösterilecek bir yazı yok. Medium'da yayımlanan yazılar, sitenin bir sonraki güncellemesinde bu listede görünür.",
    artAll: "Medium'daki tüm yazılar",

    contactTitle: 'İletişim',
    contactNote:
      'Uygulamalarla ilgili destek talepleri, iş görüşmeleri ya da başka her şey için. En hızlı buradan dönüyorum.',
    directContact: 'Doğrudan iletişim',

    byeTitle: 'Sitede anlatacaklarım bu kadar.',
    byeNote: 'Konuşmaya değer bir şey bulduysan yukarıdaki adresten bana ulaşabilirsin.',
    backToTopHint: 'Başa dönmek için dokun.',
    backToTop: 'Başa dön',

    products: [
      {
        name: 'GrammarLens',
        status: 'App Store incelemesinde',
        kicker: 'Yapay zekâ destekli öğrenme uygulaması',
        desc: "GrammarLens, İngilizceyi akıcı konuşan ama IELTS gibi bir sınavın istediği dilbilgisini güvenle uygulayamayanlar için bir iOS uygulaması. Kullanıcının kendi hatalarından yola çıkarak alıştırma üretiyor ve bu hataları kural adlarıyla değil, sade bir dille açıklıyor. Araştırmayı yaptım, PRD'yi yazdım ve bütün ürün kararlarını verdim; kodu yapay zekâ kodlama ajanları yazdı. 1.0 sürümü 24 Eylül 2026'da App Store incelemesine gönderildi.",
        facts: ['4 görüşme', '3 kullanılabilirlik testi', 'Tek kişilik proje'],
        stack: ['Flutter / Dart', 'Claude API', 'Material 3'],
        caseHref: grammarlens.caseStudyUrl,
        sourceHref: grammarlens.sourceUrl,
        docs: productDocsTr,
        icon: { ...grammarlens.icon, alt: 'GrammarLens uygulama simgesi' },
      },
    ],

    principles: [
      {
        title: 'Özellikten değil, problemden başlarım',
        body: 'GrammarLens, aynı İngilizce hataları tekrar tekrar yapıp bunlardan hiçbir şey öğrenmediğimi fark ettiğimde başladı. İlk sürümüm yine de fark etmediğim bir varsayımı taşıyordu: dilbilgisi kuralının adını vermenin asıl özellik olduğu. Yedi kişi bunun böyle olmadığını gösterdi ve ürün onların söyledikleri etrafında değişti.',
      },
      {
        title: 'Gerçek sayıyı söylerim',
        body: 'Yetmiş kişiyle değil, yedi kişiyle test ettim; görüşmelerden biri de kendimleydi. Yedi kişi bir örneklem değil, ama hangi yönde yanıldığımı görmeme yetti. Kulağa daha iyi gelen bir sayıya yuvarlamaktansa gerçek örneklem büyüklüğünü söylemeyi tercih ederim.',
      },
      {
        title: 'Maliyeti bir ürün kararı olarak görürüm',
        body: "Üretilen her pratik seti ve puanlanan her cevap bir dil modeline çağrı yapıyor ve her çağrının bir fiyatı var. Ücretsiz Daily Test'i cihazda puanlamak, ilk testi elle yazmak ve ücretli pratiği günde beş oturumla sınırlamak teknik ayrıntılar değildi; ürünün var olup olamayacağını bu kararlar belirledi.",
      },
      {
        title: 'İşi bitiririm',
        body: 'Kodu kendim yazmak hiçbir zaman amaç değildi; amaç ürünü yayına çıkarmaktı. Kodu, yazılı karar raporlarımdan yola çıkarak yapay zekâ kodlama ajanları yazdı; benim işim kararlardı. Gerçek bir ekrana ulaşmamış bir fikir test edilmiş sayılmaz, yalnızca anlatılmış olur.',
      },
    ],

    groups: [
      {
        title: 'Projeler',
        items: [
          {
            when: '2026 –',
            what: 'GrammarLens',
            note: "Kendi mobil ürünüm: kullanıcı araştırması, PRD, MVP, yedi kişiyle test. 24 Eylül 2026'da App Store incelemesine gönderildi.",
          },
        ],
      },
      {
        title: 'Deneyim',
        items: [
          {
            when: '2024 – 2025',
            what: 'Junior Business Development Specialist',
            note: "Auratech Consultancy — B2B satış funnel'ı, HubSpot, veri toplama ve temizleme.",
          },
          {
            when: '2024',
            what: 'SAP Danışmanlık Stajyeri',
            note: 'GOERZ-IT — SD ve MM modüllerinin konfigürasyonu, B2B süreç akışlarının belgelenmesi.',
          },
          {
            when: '2023',
            what: 'Veri Analisti Stajyeri',
            note: 'Konak İlçe Milli Eğitim Müdürlüğü — resmî raporlama öncesinde büyük eğitim veri setlerinin işlenmesi ve doğrulanması.',
          },
        ],
      },
      {
        title: 'Eğitim',
        items: [
          {
            when: 'Haziran 2026',
            what: 'İstatistik, Lisans',
            note: "Ege Üniversitesi — Haziran 2026'da mezun oldum. Tezimde TÜFE eğilimlerini regresyon analiziyle modelledim.",
          },
          {
            when: '2025',
            what: "Ürün Yönetimi Bootcamp'i",
            note: 'Coderspace — keşif, önceliklendirme, A/B testi ve deney tasarımı.',
          },
          {
            when: '2025',
            what: "Flutter ve Dijital Pazarlama Bootcamp'leri",
            note: 'Techcareer.net — mobil geliştirme; kullanıcı yolculuğu boyunca kazanım, dönüşüm ve elde tutma metrikleri.',
          },
          {
            when: '2024',
            what: 'Data Summer Camp',
            note: 'Intellica — gerçek iş zekâsı projelerinde SQL ve Oracle Data Integrator kullanımı.',
          },
        ],
      },
    ],
  },
};
