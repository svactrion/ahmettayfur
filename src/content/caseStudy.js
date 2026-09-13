// Copy for /products/grammarlens/case-study, in both languages.
//
// src/components/CaseStudyPage.astro renders whichever of these matches
// Astro.currentLocale. Paragraph entries are trusted HTML strings (bold,
// italic and links come straight from the source copy) rendered with
// set:html, since the prose has inline formatting mid-sentence that a
// plain string can't carry.
//
// The "back to product" / "product page" links only carry translated
// *text* here — their href is resolved by the component via localizeHref,
// so the target locale is never hand-coded in content.

export const caseStudyCopy = {
  en: {
    meta: {
      title: 'GrammarLens case study — Ahmet Emin Tayfur',
      description:
        'How GrammarLens went from a research question to a finished iOS app: interviews, PRD, scope cuts, two iteration rounds, and the constraints that shaped it.',
    },
    aside: {
      label: 'Case study',
      lines: ['Solo project', 'Research → PRD → build', '→ test → 2 iterations'],
    },
    title: 'Building GrammarLens',
    lede: [
      "GrammarLens is an English grammar practice app for iOS. It generates exercises on demand, scores what you write, and explains the mistake in plain language instead of naming a rule at you.",
      "I built it alone over seven weeks. I planned for one. What follows is not a feature tour — it's three decisions that changed the product, and what each one cost me to learn.",
    ],
    backLinkText: 'Back to the product',

    section1: {
      asideLabel: '01 — Research',
      asideLines: ['The assumption', 'research broke'],
      heading: '1. The assumption research broke',
      paragraphs: [
        "I started as the user. During IELTS preparation I kept making the same handful of mistakes — gerund versus infinitive, modals, modal past forms — and I could produce a correct sentence by feel without being able to explain why it was correct. Fluency from immersion, grammar knowledge left implicit. IELTS asks for the explicit kind.",
        "That gave me a problem statement. It did not give me a product, and my first version encoded an assumption I hadn't noticed I was making: that naming the grammar rule is a feature. The app surfaced rule names as primary labels.",
        'Seven people disagreed. Across four interviews and three usability tests, the pattern was consistent. One participant pointed out that telling him to "use Past Perfect Continuous" meant nothing to him — despite using that structure daily. Another said terms like "noun clause" were harder than the mistake they described.',
        "So I inverted it. Plain-language explanation first, rule name demoted to a secondary caption for anyone who wants it. In the three usability tests that followed, all three participants praised the plain-language feedback without being asked about it. It is the strongest and most repeated finding in the project.",
        "The same rounds killed a second assumption. My question mix was mostly fill-in-the-blank and multiple choice — the formats that are easiest to build and score. Five of seven people rejected them. One sentence explains why better than my own reasoning did: with options, she said, she would have guessed; without them, she had to prove she actually knew.",
        "Free-text answers cost more to score and are harder to get right. I kept them anyway, because the evidence said the cheap format was measuring the wrong thing.",
      ],
    },

    section2: {
      asideLabel: '02 — Cost',
      asideLines: ['What cost', 'decided'],
      heading: '2. What cost decided',
      intro: [
        "GrammarLens calls a language model for every exercise it generates and every answer it scores. That makes cost a product constraint, not an engineering detail, and it changed several decisions.",
        "The unit economics, derived from the deployed service rather than guessed:",
      ],
      list: [
        'A topic practice session — generation plus scoring — costs about $0.034',
        'A daily test generation costs about $0.021',
        'A typical premium user costs about $1.43 a month against $5.09 net revenue, a margin of roughly 72%',
        'A free user who opens the app every day costs about $0.63 a month and generates nothing',
      ],
      after: [
        "That last line is the one that matters. A free tier that scales cost with users and revenue with nobody is not a growth strategy, it's a leak. So the free tier was designed as a structurally different mechanic rather than a limited version of the paid one: the daily test uses a single generation call and no model-based scoring at all, with the explanation of each wrong answer produced inside that same call rather than in a second one.",
        'Cost also set the ceiling. The proxy enforces a per-device and a global daily cap, and the cap is reserved <em>before</em> the upstream call — it counts attempts, not successes, which is the only version that actually limits spend. At a per-device limit of 30, a single installation could run roughly 14 sessions a day and cost about $30 a month against $5.09 of revenue. I lowered it to 15, which is still about twice any real usage pattern and caps the worst case between $8 and $15. The global limit of 300 binds total spend to roughly $300 a month until I choose to raise it.',
        "The honest caveat belongs here rather than in a footnote: these figures are modelled, not measured. The system prompt sizes are real, read from the deployed code. The rest is estimated. Anthropic returns exact token counts on every response and my proxy currently discards them. Logging those two numbers would replace this entire section with data, and I haven't done it.",
      ],
    },

    section3: {
      asideLabel: '03 — Retrospective',
      asideLines: ["What I'd do", 'differently'],
      heading: "3. What I'd do differently",
      retroPoints: [
        '<strong>Measurement should have come first.</strong> Every unmeasured bet in this project traces back to the same missing layer. I deferred instrumentation because it felt like overhead before launch; the result is that a section of this case study has to open with "estimated."',
        '<strong>Cost estimates should have been checked against the deployed reality sooner.</strong> One of my pricing calculations ran on the wrong model price for weeks, and a "free tier costs approximately nothing" line survived in my own document after the reasoning behind it had already been disproved elsewhere in the same document.',
        "<strong>Irreversible identity decisions should have been made on day one.</strong> The bundle identifier sat as Flutter's com.example placeholder for months and surfaced as a launch blocker. Product identifiers and entitlement names have to match App Store Connect exactly and cannot be renamed once created — none of which is hard, all of which is annoying to discover late.",
        "<strong>Reversing a decision is cheaper than defending it.</strong> I cancelled a planned private testing round because seven people had already used the core loop and a second small round would only repeat what I knew. I reversed the launch ordering so that the one validated thing shipped before the unvalidated bets. I cut two advertised-but-unbuilt features from the purchase screen, because a paid surface listing things that don't exist is both an App Store rejection risk and a lie.",
      ],
      closing:
        "Each of those is written down in the project log as a deliberate reversal, with the date and the reasoning that replaced the old one. Keeping that record is the part I'd repeat without changing anything.",
      endLinkText: 'Product page',
    },
  },

  tr: {
    meta: {
      title: 'GrammarLens vaka analizi — Ahmet Emin Tayfur',
      description:
        'GrammarLens bir araştırma sorusundan bitmiş bir iOS uygulamasına nasıl geldi: görüşmeler, PRD, kapsam kesintileri, iki iterasyon turu ve ürünü şekillendiren kısıtlar.',
    },
    aside: {
      label: 'Vaka analizi',
      lines: ['Tek kişilik proje', 'Araştırma → PRD → geliştirme', '→ test → 2 iterasyon'],
    },
    title: "GrammarLens'i Geliştirmek",
    lede: [
      'GrammarLens, iOS için bir İngilizce dilbilgisi pratik uygulaması. Alıştırmaları anlık üretiyor, yazdığını puanlıyor ve hatayı bir kural adı söyleyerek değil, sade bir dille açıklıyor.',
      'Tek başıma, yedi haftada geliştirdim. Bir hafta planlamıştım. Aşağıdakiler bir özellik turu değil — ürünü değiştiren üç karar ve her birini öğrenmenin bana neye mal olduğu.',
    ],
    backLinkText: 'Ürüne dön',

    section1: {
      asideLabel: '01 — Araştırma',
      asideLines: ['Araştırmanın', 'çürüttüğü varsayım'],
      heading: '1. Araştırmanın çürüttüğü varsayım',
      paragraphs: [
        "Kullanıcı olarak başladım. IELTS hazırlığı sırasında aynı birkaç hatayı sürekli tekrarlıyordum — gerund ile infinitive ayrımı, modal'lar, modal'ların geçmiş biçimleri — ve doğru cümleyi hissederek kurabiliyor ama neden doğru olduğunu açıklayamıyordum. Daldırma yoluyla gelen akıcılık, örtük kalmış dilbilgisi bilgisi. IELTS ise açık olanını istiyor.",
        'Bu bana bir problem tanımı verdi. Bir ürün vermedi. İlk sürümüm, farkında olmadan kurduğum bir varsayımı içine almıştı: dilbilgisi kuralının adını söylemek bir özelliktir. Uygulama kural adlarını birincil etiket olarak gösteriyordu.',
        'Yedi kişi buna katılmadı. Dört görüşme ve üç kullanılabilirlik testi boyunca desen tutarlıydı. Bir katılımcı, kendisine "Past Perfect Continuous kullan" demenin hiçbir şey ifade etmediğini söyledi — o yapıyı her gün kullanmasına rağmen. Bir diğeri "noun clause" gibi terimlerin, tarif ettikleri hatanın kendisinden daha zor olduğunu belirtti.',
        'Ben de tersine çevirdim. Önce sade dille açıklama, kural adı isteyene ikincil bir alt bilgi olarak geride. Sonrasındaki üç kullanılabilirlik testinin üçünde de katılımcılar sade dildeki geri bildirimi, hiç sorulmadan övdü. Projenin en güçlü ve en çok tekrarlanan bulgusu bu oldu.',
        'Aynı turlar ikinci bir varsayımı da öldürdü. Soru karışımım ağırlıklı olarak boşluk doldurma ve çoktan seçmeliydi — yapması ve puanlaması en kolay formatlar. Yedi kişiden beşi bunları reddetti. Neden olduğunu benim kendi gerekçemden daha iyi anlatan tek bir cümle var: seçenek olsaydı tahmin edeceğini, olmayınca gerçekten bildiğini kanıtlamak zorunda kaldığını söyledi.',
        'Serbest metin cevapları puanlamak daha pahalı ve doğru yapması daha zor. Yine de onlarda kaldım, çünkü kanıt ucuz formatın yanlış şeyi ölçtüğünü söylüyordu.',
      ],
    },

    section2: {
      asideLabel: '02 — Maliyet',
      asideLines: ['Maliyetin verdiği', 'kararlar'],
      heading: '2. Maliyetin verdiği kararlar',
      intro: [
        'GrammarLens ürettiği her alıştırma ve puanladığı her cevap için bir dil modeline istek atıyor. Bu, maliyeti bir mühendislik ayrıntısı değil, bir ürün kısıtı haline getiriyor ve birkaç kararı doğrudan değiştirdi.',
        'Birim ekonomi — tahminden değil, yayındaki servisten türetildi:',
      ],
      list: [
        'Bir konu pratiği seansı (üretim ve puanlama birlikte) yaklaşık $0,034',
        'Bir günlük test üretimi yaklaşık $0,021',
        'Tipik bir premium kullanıcı ayda yaklaşık $1,43 maliyet, buna karşılık $5,09 net gelir — kabaca %72 marj',
        'Uygulamayı her gün açan ücretsiz bir kullanıcı ayda yaklaşık $0,63 maliyet ve sıfır gelir',
      ],
      after: [
        'Asıl önemli satır sonuncusu. Maliyeti kullanıcı sayısıyla büyüyen, geliri kimseyle büyümeyen bir ücretsiz katman bir büyüme stratejisi değil, bir kaçaktır. Bu yüzden ücretsiz katmanı, ücretli olanın kısıtlanmış hali olarak değil, yapısal olarak farklı bir mekanik olarak tasarladım: günlük test tek bir üretim çağrısı kullanıyor ve model tabanlı puanlama hiç yok; her yanlış cevabın açıklaması da ikinci bir çağrıda değil, aynı çağrının içinde üretiliyor.',
        "Maliyet aynı zamanda tavanı belirledi. Proxy hem cihaz başına hem global günlük bir sınır uyguluyor ve sınır, asıl çağrıdan <strong>önce</strong> rezerve ediliyor — yani denemeyi sayıyor, başarıyı değil. Harcamayı gerçekten sınırlayan tek sürüm bu. Cihaz başına sınır 30 iken tek bir kurulum günde yaklaşık 14 seans çalıştırıp ayda yaklaşık $30 maliyet üretebiliyordu; karşılığında $5,09 gelir. Sınırı 15'e indirdim; bu hâlâ gerçek hiçbir kullanım deseninin iki katı ve en kötü durumu $8 ile $15 arasında tutuyor. Global sınır olan 300 ise, yükseltmeye karar edene kadar toplam harcamayı ayda yaklaşık $300 ile bağlıyor.",
        "Dürüst uyarı dipnota değil, tam buraya ait: bu rakamlar modellendi, ölçülmedi. Sistem promptlarının boyutları gerçek, yayındaki koddan okundu. Gerisi tahmin. Anthropic her yanıtta tam token sayılarını döndürüyor ve proxy'm bunları şu an atıyor. O iki sayıyı kaydetmek bu bölümün tamamını veriyle değiştirir ve bunu henüz yapmadım.",
      ],
    },

    section3: {
      asideLabel: '03 — Geri dönüş',
      asideLines: ['Baştan yapsam', 'farklı yapacaklarım'],
      heading: '3. Baştan yapsam farklı yapacaklarım',
      retroPoints: [
        '<strong>Ölçüm en başta kurulmalıydı.</strong> Bu projedeki ölçülmemiş her bahis aynı eksik katmana çıkıyor. Enstrümantasyonu erteledim çünkü launch öncesinde gereksiz bir yük gibi göründü; sonucu, bu case study\'nin bir bölümünün "tahmin" diyerek açılmak zorunda kalması oldu.',
        '<strong>Maliyet tahminleri yayındaki gerçeğe karşı daha erken kontrol edilmeliydi.</strong> Fiyatlandırma hesaplarımdan biri haftalarca yanlış bir model fiyatı üzerinden çalıştı; "ücretsiz katmanın maliyeti neredeyse sıfır" satırı ise, arkasındaki mantık aynı dokümanın başka bir yerinde çürütüldükten sonra bile yerinde kaldı.',
        "<strong>Geri alınamaz kimlik kararları ilk gün verilmeliydi.</strong> Paket tanımlayıcısı aylarca Flutter'ın com.example yer tutucusu olarak durdu ve bir launch engelleyicisi olarak ortaya çıktı. Ürün tanımlayıcılarının ve yetki adlarının App Store Connect ile birebir eşleşmesi gerekiyor ve bir kez oluşturulduktan sonra yeniden adlandırılamıyor — hiçbiri zor değil, hepsini geç fark etmek can sıkıcı.",
        '<strong>Bir kararı geri almak, onu savunmaktan ucuz.</strong> Planladığım özel test turunu iptal ettim, çünkü yedi kişi çekirdek döngüyü zaten kullanmıştı ve ikinci küçük bir tur yalnızca bildiğimi tekrarlayacaktı. Launch sıralamasını tersine çevirdim ki doğrulanmış olan tek şey, doğrulanmamış bahislerden önce yayına çıksın. Satın alma ekranından, reklamı yapılan ama yapılmamış iki özelliği kaldırdım; çünkü var olmayan şeyleri listeleyen bir ödeme ekranı hem App Store ret riski hem de yalan.',
      ],
      closing:
        "Bunların her biri proje kaydında bilinçli bir geri dönüş olarak, tarihiyle ve eskisinin yerine geçen gerekçesiyle yazılı. O kaydı tutmak, hiçbir şeyini değiştirmeden tekrar edeceğim kısım.",
      endLinkText: 'Ürün sayfası',
    },
  },
};
