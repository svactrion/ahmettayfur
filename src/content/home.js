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
      'I finished my statistics degree this June 2026 and I am building my own products to grow into product management: user research, PRD, MVP, testing and iteration, all of it hands-on. Looking for a role where I can keep learning at that pace.',
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
      'The rest I learned by building. GrammarLens started as my own problem: I kept correcting my English without ever understanding what I had done wrong. So I talked to people with the same problem, wrote the PRD, taught myself Flutter and built the app on my own. Four testers made me cut two features I was attached to.',
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
        status: 'Not yet released',
        kicker: 'AI-powered learning app',
        desc: "GrammarLens explains why an English sentence is wrong instead of just marking it wrong. It's built in Flutter and calls a language model to generate the explanation in context. I did the user research, wrote the PRD, built the app, tested it with four people, and made two rounds of changes based on what they said. Gamified practice is next on the roadmap.",
        facts: ['4 user interviews', '2 iteration rounds', 'Built solo'],
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
        body: 'GrammarLens began because I kept making the same English mistakes without learning anything from them. I talked to people with that habit before I opened an editor, so the PRD came out of those conversations rather than my own wish list.',
      },
      {
        title: 'I state the real number',
        body: 'I tested with four people, not forty. Four was what I could actually reach, and it was enough to cut two features I was attached to. I would rather give you the real sample size than round it into something that sounds better.',
      },
      {
        title: 'I treat cost as a product decision',
        body: 'Every grammar check calls a language model, and every call costs money. Batching the evaluations and letting the user choose question length was not a technical detail; it decided whether the product could exist at all.',
      },
      {
        title: 'I finish things',
        body: 'Learning Flutter was never the goal — shipping was. An idea that has not reached a real screen has not been tested, only described.',
      },
    ],

    groups: [
      {
        title: 'Projects',
        items: [
          {
            when: '2026 –',
            what: 'GrammarLens',
            note: 'My own mobile product: user research, PRD, MVP, testing with four people, two rounds of changes. Not in the App Store yet.',
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
      "Gerisini ürün geliştirirken öğrendim. GrammarLens kendi problemim olarak başladı: İngilizcemi sürekli düzeltiyordum ama neyi yanlış yaptığımı bir türlü anlamıyordum. Aynı sorunu yaşayan insanlarla konuştum, PRD'yi yazdım, Flutter'ı kendi kendime öğrendim ve uygulamayı tek başıma geliştirdim. Dört test kullanıcısı sayesinde çok bağlandığım iki özelliği çıkardım.",
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
        status: 'Henüz yayında değil',
        kicker: 'Yapay zekâ destekli öğrenme uygulaması',
        desc: "GrammarLens, bir İngilizce cümleyi yalnızca yanlış diye işaretlemiyor; neden yanlış olduğunu açıklıyor. Flutter ile geliştirildi; açıklamaları cümlenin bağlamına göre bir dil modeli üretiyor. Kullanıcı araştırmasını yaptım, PRD'yi yazdım, uygulamayı geliştirdim, dört kişiyle test ettim ve geri bildirimlerine göre iki tur değişiklik yaptım. Yol haritasındaki sıradaki adım oyunlaştırılmış pratik.",
        facts: ['4 kullanıcı görüşmesi', '2 iterasyon turu', 'Tek başıma geliştirdim'],
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
        body: 'GrammarLens, aynı İngilizce hataları tekrar tekrar yapıp bunlardan hiçbir şey öğrenmediğimi fark ettiğimde başladı. Kod yazmaya başlamadan önce aynı sorunu yaşayan insanlarla konuştum; PRD benim istek listemden değil, bu konuşmalardan çıktı.',
      },
      {
        title: 'Gerçek sayıyı söylerim',
        body: 'Kırk kişiyle değil, dört kişiyle test ettim. Dört, gerçekten ulaşabildiğim sayıydı ve çok bağlandığım iki özelliği çıkarmama yetti. Kulağa daha iyi gelen bir sayıya yuvarlamaktansa gerçek örneklem büyüklüğünü söylemeyi tercih ederim.',
      },
      {
        title: 'Maliyeti bir ürün kararı olarak görürüm',
        body: 'Her dilbilgisi kontrolü bir dil modeline çağrı yapıyor ve her çağrının bir maliyeti var. Değerlendirmeleri toplu yapmak ve soru uzunluğunu kullanıcının seçimine bırakmak teknik bir ayrıntı değildi; ürünün var olup olamayacağını bu kararlar belirledi.',
      },
      {
        title: 'İşi bitiririm',
        body: 'Amacım Flutter öğrenmek değil, ürünü yayına çıkarmaktı. Gerçek bir ekrana ulaşmamış bir fikir test edilmiş sayılmaz, yalnızca anlatılmış olur.',
      },
    ],

    groups: [
      {
        title: 'Projeler',
        items: [
          {
            when: '2026 –',
            what: 'GrammarLens',
            note: "Kendi mobil ürünüm: kullanıcı araştırması, PRD, MVP, dört kişiyle test ve iki tur değişiklik. Henüz App Store'da değil.",
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
