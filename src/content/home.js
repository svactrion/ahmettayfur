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

const productDocsTr = [
  { label: 'Gizlilik', href: grammarlens.privacyUrl },
  { label: 'Koşullar', href: grammarlens.termsUrl },
  { label: 'Destek', href: grammarlens.supportUrl },
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
    },

    nav: { who: 'Who am I', products: 'Products', articles: 'Articles', contact: 'Contact' },

    eyebrow: 'Product management · new graduate',
    heroTitle: ['I ship the products', 'I want to use.'],
    heroTagline:
      'Building for myself is where it starts; shipping is where I learn what the market actually wants.',
    heroBody:
      'I finished my statistics degree this June 2026 and I am building my own products to grow into product management: user research, PRD, MVP, testing and iteration, all of it hands-on. Looking for a role where I can keep learning at that pace.',
    cta1: 'See the products',
    cta2: 'Read the articles',

    prodTitle: 'Products',
    prodCount: 'One in the works · more to come',
    caseStudy: 'Read how it was built',
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

    byeTitle: 'That is the whole site.',
    byeNote: 'If any of it was worth a conversation, the address above reaches me.',
    backToTopHint: 'Tap to go back to the top.',

    products: [
      {
        name: 'GrammarLens',
        status: 'Not yet released',
        kicker: 'AI-powered learning app',
        desc: "GrammarLens explains why an English sentence is wrong instead of just marking it wrong. It's built in Flutter and calls a language model to generate the explanation in context. I did the user research, wrote the PRD, built the app, tested it with four people, and made two rounds of changes based on what they said. Gamified practice is next on the roadmap.",
        facts: ['4 user interviews', '2 iteration rounds', 'Built solo'],
        stack: ['Flutter / Dart', 'Claude API', 'Material 3'],
        caseHref: grammarlens.caseStudyUrl,
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
      skip: 'İçeriğe geç',
      langSwitchAria: 'İngilizceye geç',
    },

    nav: { who: 'Ben kimim', products: 'Ürünler', articles: 'Yazılar', contact: 'İletişim' },

    eyebrow: 'Ürün yönetimi · yeni mezun',
    heroTitle: ['Kullanmak istediğim', 'ürünleri yapıyorum.'],
    heroTagline:
      'Kendim için üretmek başlangıç noktası; piyasanın gerçekte ne istediğini asıl yayına aldığımda öğreniyorum.',
    heroBody:
      'Bu yılın haziran ayında istatistik bölümünden mezun oldum ve ürün yöneticiliğine kendi ürünlerimi geliştirerek hazırlanıyorum: kullanıcı araştırması, PRD, MVP, test ve iterasyon — hepsini bizzat yürütüyorum. Aynı hızda öğrenmeye devam edebileceğim bir ürün rolü arıyorum.',
    cta1: 'Ürünlere bak',
    cta2: 'Yazıları oku',

    prodTitle: 'Ürünler',
    prodCount: 'Biri geliştirmede · yenileri yolda',
    caseStudy: 'Nasıl geliştirdiğimi oku',
    nextKicker: 'Sıradaki',
    nextTitle: 'İkinci ürün keşif aşamasında',
    nextBody:
      'Sıradaki de aynı şekilde başlıyor: kendimin sürekli takıldığı bir problem, sonra tek satır kod yazmadan önce araştırma.',

    whoTitle: 'Ben kimim',
    whoBody: [
      "Haziran 2026'da istatistik bölümünden mezun oldum. Dört yılın bana bıraktığı en kalıcı alışkanlık şu: bir sayıya inanmadan önce nasıl toplandığını sormak. Ürün işine getirdiğim şeyin büyük kısmı buradan geliyor.",
      "Geri kalanını geliştirerek öğrendim. GrammarLens kendi problemim olarak başladı: İngilizcemi sürekli düzeltiyordum ama neyi yanlış yaptığımı bir türlü anlamıyordum. Aynı sorunu yaşayan insanlarla konuştum, PRD'yi yazdım, Flutter'ı kendi kendime öğrendim ve uygulamayı tek başıma geliştirdim. Dört test kullanıcısı, çok sevdiğim iki özelliği kesmemi sağladı.",
      'Bu site kısa versiyon. Amacı yaptığım her şeyi sıralamak değil, nasıl çalıştığımı göstermek. Düzenli kullandığım araçlar: Flutter ve Dart, SQL, Power BI, Excel, istatistiksel modelleme. Öğrenmenin bu hızda kaldığı bir ürün yöneticiliği rolü arıyorum.',
    ],

    principlesLabel: 'Nasıl çalışıyorum',
    backgroundLabel: 'Geçmiş',
    scrollHint: 'Kaydır',

    articlesTitle: 'Yazılar',
    artFeed: "Medium'dan",
    artSub:
      'Ne geliştirdiğim, ne öğrendiğim ve hâlâ nerede yanıldığım üzerine notlar — Medium ve LinkedIn’de.',
    artEmpty:
      "Akıştan gösterilecek bir şey henüz yok. Medium'da bir yazı yayına girdikten sonra, bir sonraki yayında bu listede görünür.",
    artAll: "Medium'daki her şey",

    contactTitle: 'İletişim',
    contactNote:
      'Uygulamalarla ilgili destek talepleri, iş görüşmeleri ve geri kalan her şey. İlk olarak buradan yanıt veriyorum.',

    byeTitle: 'Sitenin tamamı bu kadar.',
    byeNote: 'Buradaki bir şey konuşmaya değerse, yukarıdaki adresten bana ulaşabilirsin.',
    backToTopHint: 'Başa dönmek için dokun.',

    products: [
      {
        name: 'GrammarLens',
        status: 'Henüz yayında değil',
        kicker: 'Yapay zekâ destekli öğrenme uygulaması',
        desc: "GrammarLens bir İngilizce cümleyi yanlış diye işaretlemekle kalmıyor, neden yanlış olduğunu açıklıyor. Flutter ile yazıldı ve açıklamayı bağlam içinde üretmek için bir dil modeline başvuruyor. Kullanıcı araştırmasını ben yaptım, PRD'yi ben yazdım, uygulamayı ben geliştirdim, dört kişiyle test ettim ve söylediklerine göre iki tur değişiklik yaptım. Yol haritasındaki sıradaki adım oyunlaştırılmış pratik.",
        facts: ['4 kullanıcı görüşmesi', '2 iterasyon turu', 'Tek kişi geliştirdi'],
        stack: ['Flutter / Dart', 'Claude API', 'Material 3'],
        caseHref: grammarlens.caseStudyUrl,
        docs: productDocsTr,
        icon: { ...grammarlens.icon, alt: 'GrammarLens uygulama simgesi' },
      },
    ],

    principles: [
      {
        title: 'Özellikten değil problemden başlarım',
        body: "GrammarLens, aynı İngilizce hatalarını sürekli yapıp bunlardan hiçbir şey öğrenmediğim için başladı. Editörü açmadan önce aynı alışkanlığa sahip insanlarla konuştum; PRD benim istek listemden değil, o konuşmalardan çıktı.",
      },
      {
        title: 'Gerçek sayıyı söylerim',
        body: 'Kırk kişiyle değil, dört kişiyle test ettim. Dört, gerçekten ulaşabildiğim sayıydı ve çok sevdiğim iki özelliği kesmeye yetti. Kulağa daha iyi gelen bir sayıya yuvarlamak yerine gerçek örneklem büyüklüğünü söylemeyi tercih ederim.',
      },
      {
        title: 'Maliyeti bir ürün kararı olarak görürüm',
        body: 'Her dilbilgisi kontrolü bir dil modeline istek atıyor ve her istek para demek. Değerlendirmeleri toplu hâle getirmek ve soru uzunluğunu kullanıcıya bırakmak teknik bir detay değildi; ürünün var olup olamayacağını belirledi.',
      },
      {
        title: 'İşi bitiririm',
        body: 'Amaç Flutter öğrenmek değildi, ürünü yayına hazır hâle getirmekti. Gerçek bir ekrana ulaşmamış bir fikir test edilmiş sayılmaz, yalnızca anlatılmış olur.',
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
            what: 'SAP Danışmanlığı Stajyeri',
            note: 'GOERZ-IT — SD ve MM modül konfigürasyonu, B2B süreç akışlarının belgelenmesi.',
          },
          {
            when: '2023',
            what: 'Veri Analisti Stajyeri',
            note: 'Konak İlçe Milli Eğitim Müdürlüğü — resmî raporlama öncesinde büyük eğitim veri setlerinin işlenmesi ve doğrulanması.',
          },
        ],
      },
      {
        title: 'Öğrenme',
        items: [
          {
            when: 'Haziran 2026',
            what: 'İstatistik Lisansı',
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
            note: 'Intellica — gerçek iş zekâsı vakalarında SQL ve Oracle Data Integrator.',
          },
        ],
      },
    ],
  },
};
