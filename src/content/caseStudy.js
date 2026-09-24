// Copy for /products/grammarlens/case-study, in both languages.
//
// src/components/CaseStudyPage.astro renders whichever of these matches
// Astro.currentLocale. The two languages have different shapes on purpose:
// the English page is the v2 case study (docs/grammarlens-case-study-v2.md),
// written as a list of typed blocks per section; the Turkish page still
// carries the earlier MVP-only text in its original shape, plus a notice
// pointing to the English version.
//
// Paragraph entries are trusted HTML strings (bold, italic and the
// provenance tags come straight from the source copy) rendered with
// set:html, since the prose has inline formatting mid-sentence that a
// plain string can't carry.
//
// English block types:
//   { type: 'p', html }            a paragraph
//   { type: 'h3', text }           a subsection heading
//   { type: 'reframe', first, actual }
//                                  the "First framing / Actual problem"
//                                  block (src/components/case-study/Reframe.astro)
//   { type: 'ol', items }          an ordered list of HTML strings
//   { type: 'figure', name }       a chart, diagram or screenshot, looked up
//                                  by name in the component; spans both
//                                  grid columns
//
// The "back to product" / "product page" links only carry translated
// *text* here — their href is resolved by the component via localizeHref,
// so the target locale is never hand-coded in content.

// Provenance markers. Nothing unmeasured may read as measured, so every
// figure in the copy carries one of these right after it.
const measured = '<span class="tag tag-neutral prov">measured</span>';
const estimated = '<span class="tag tag-neutral prov">estimated</span>';

export const caseStudyCopy = {
  en: {
    meta: {
      title: 'GrammarLens case study — Ahmet Emin Tayfur',
      description:
        'Building GrammarLens, from a one-week MVP to the App Store: defining the problem when every AI call has a price.',
    },
    aside: {
      label: 'Case study',
      lines: ['Solo project.', 'July to September 2026.', 'Research, PRD, build, test, iterate, App Store submission.'],
      status: 'Submitted for App Store review on 24 September 2026. Not yet approved.',
      updated: 'Updated September 2026. An earlier version of this page covered the MVP only.',
    },
    title: 'Building GrammarLens',
    subtitle: 'From a one-week MVP to the App Store: defining the problem when every AI call has a price.',
    backLinkText: 'Back to the product',
    endLinkText: 'Product page',

    summary: {
      label: 'Summary',
      blocks: [
        {
          type: 'p',
          html: "GrammarLens is an iOS app for English learners who became fluent through games, series and friends, but can't reliably apply the grammar an exam like IELTS asks for. It generates practice around your own mistakes and explains them in plain language, not rule names.",
        },
        {
          type: 'p',
          html: 'I built it alone: the research, the PRD, every product decision, and the code, written with AI coding agents that I directed through written decision reports. It started in July 2026 as a one-week MVP tested with seven people. Over the next two months it became a subscription product: a free Daily Test graded on the device, paid Topic Practice that an AI model generates and grades, and a monthly habit layer on top.',
        },
        {
          type: 'p',
          html: 'Version 1.0 was submitted to App Store review on 24 September 2026. It is not approved yet, and there is no user data. So this is a record of decisions, not results.',
        },
        {
          type: 'p',
          html: "Looking back, the useful work was rarely solving a problem faster. It was noticing that the problem in front of me wasn't the real one. Each decision below follows the same shape: what the problem first looked like, what it turned out to be, what I chose, what it cost, and how I'll find out whether I was wrong. Every figure is marked as measured or estimated.",
        },
        { type: 'figure', name: 'timeline' },
      ],
    },

    sections: [
      {
        label: 'Research',
        heading: '1. The assumption research broke',
        blocks: [
          {
            type: 'p',
            html: 'I started as the user. During IELTS preparation I kept making the same handful of mistakes: gerund versus infinitive, modals, modal past forms. I could produce a correct sentence by feel without being able to explain why it was correct. Fluency from immersion, grammar knowledge left implicit. IELTS asks for the explicit kind.',
          },
          {
            type: 'p',
            html: "That gave me a problem statement. It did not give me a product, and my first version encoded an assumption I hadn't noticed I was making: that naming the grammar rule is a feature. The app surfaced rule names as primary labels.",
          },
          {
            type: 'p',
            html: 'Seven people disagreed, across four interviews and three usability tests. One of the interviews was with myself; I flagged it in the PRD, and I\'m flagging it here. One participant pointed out that being told to "use Past Perfect Continuous" meant nothing to him, even though he uses that structure every day. Another said terms like "noun clause" were harder to understand than the mistake they described.',
          },
          {
            type: 'reframe',
            first: "Learners don't know the grammar rules.",
            actual: "They already use the rules. The rule names are what's in the way.",
          },
          {
            type: 'p',
            html: 'So I inverted it. Plain-language explanation first, the rule name demoted to a secondary caption for anyone who wants it. In the three usability tests that followed, all three participants praised the plain-language feedback without being asked about it. It is the strongest and most repeated finding in the project.',
          },
          {
            type: 'p',
            html: 'The same rounds killed a second assumption. My question mix was mostly fill-in-the-blank and multiple choice, the formats that are easiest to build and score. Five of seven people rejected them. One participant explained it better than my own reasoning did: with options, she said, she would have guessed; without them, she had to prove she actually knew.',
          },
          {
            type: 'p',
            html: 'Free-text answers cost more to score and are harder to get right. I kept them anyway, because the evidence said the cheap format was measuring the wrong thing.',
          },
          {
            type: 'p',
            html: 'Seven people is not a sample. It was enough to show me which way I was wrong, and that was what I needed at that stage.',
          },
        ],
      },

      {
        label: 'Cost',
        heading: '2. Decisions under a per-call price',
        blocks: [
          {
            type: 'p',
            html: "GrammarLens calls a language model for every exercise it generates and every answer it scores. That makes cost a product constraint, not an engineering detail. It is also why defining the problem mattered so much: in this product, the wrong framing isn't only a worse feature, it's a recurring bill.",
          },
          { type: 'figure', name: 'modelCalls' },

          { type: 'h3', text: 'What to give away' },
          {
            type: 'reframe',
            first: 'How many free sessions before the paywall?',
            actual: 'Which parts of the product cost money every time someone uses them?',
          },
          {
            type: 'p',
            html: `The usual answer to the first question is a limited version of the paid product. But Topic Practice calls a language model twice per session, once to generate and once to grade. A free, unlimited version would scale cost with users and revenue with nobody: roughly $90–270 a month at 100 daily users ${estimated}, a rough figure I worked out at the time. A hard paywall in front of everything had the opposite problem. Nobody would ever meet the plain-language feedback that every tester had praised.`,
          },
          {
            type: 'p',
            html: 'So I built two structurally different modes instead of one mode with a limit. The free Daily Test makes a single generation call and grades answers on the device, with no model involved. The paid product is Topic Practice, generated and graded by the model.',
          },
          {
            type: 'p',
            html: 'Two weeks later I added one free Topic Practice session a day, reachable from a mistake in Review. The feedback is what sells the product, and without that session a free user would never see it.',
          },
          {
            type: 'p',
            html: `That one session more than doubles what an engaged free user costs: from about $0.70–0.84 to about $1.72–1.86 a month. The Daily Test part uses measured token counts ${measured}; the practice session is still an estimate ${estimated}.`,
          },
          { type: 'figure', name: 'freeCost' },
          {
            type: 'p',
            html: "<strong>How I'll know.</strong> Two analytics events record when a free user spends the session and when they hit the limit. After four weeks the question is simple: do free users who use it convert more often than those who don't? If not, the allowance goes down. It is a single constant in the code.",
          },

          { type: 'h3', text: "The paywall that wasn't there" },
          {
            type: 'reframe',
            first: 'The Review screen forgot to check whether the user has Premium.',
            actual: 'The check lived in navigation, not where the money is spent.',
          },
          {
            type: 'p',
            html: 'On 15 September a device test showed that a free user could reach paid practice. From Review, tapping a weak spot and then "Practice this" started a real, billed generation with no subscription check at all. I had noticed the risk ten days earlier, written it down, and deferred it.',
          },
          {
            type: 'p',
            html: "The quick fix was another copy of the check, this time on the Review screen. But the Home screen's locked cards were only a navigation guard: they stopped a tap, they didn't protect the thing that costs money. There is exactly one function in the app that generates a practice set. The check moved inside it, and that function now requires the subscription service as a mandatory dependency, not an optional flag a caller can forget. Every path goes through the same gate, including paths that don't exist yet.",
          },
          {
            type: 'p',
            html: "The pattern paid off a week later. Apple's App Review rules require explicit permission before personal data goes to a third-party AI. The permission screen went into the same function, in front of the same gate, and I didn't have to find every entry point again.",
          },
          {
            type: 'p',
            html: "<strong>What it cost.</strong> Ten days with a known leak, and no test had covered either screen. <strong>How I'll know.</strong> This one is structural rather than measured: both entry points now have tests that exercise the gate.",
          },

          { type: 'h3', text: 'The cap that was really a margin' },
          {
            type: 'reframe',
            first: 'Two limits conflict. Raise the server limit, or lower the session cap?',
            actual: 'At the planned cap, a heavy subscriber costs more than they pay.',
          },
          {
            type: 'p',
            html: 'Premium allowed 10 practice sessions a day. Each session uses two server calls, and the proxy that protects the API key allows 15 calls per device per day. So a heavy subscriber would hit a generic "come back tomorrow" after about seven sessions. The options on the table were to raise the server limit to about 25 or lower the cap to 7.',
          },
          {
            type: 'p',
            html: `Framed that way, it was a configuration question. Framed as money, it wasn't. At about $0.034 per session ${estimated}, 10 sessions a day is about $10.20 a month. The annual plan nets about $3.54 a month, assuming the 15% commission of Apple's Small Business Program, which I've applied for and not yet received. Break-even is about 3.5 sessions a day.`,
          },
          { type: 'figure', name: 'capMath' },
          {
            type: 'p',
            html: 'My first instinct was 3. I settled on 5 and left prices unchanged at $5.99 a month and $49.99 a year. A cap is easier to raise after launch than to cut. Five is still above break-even for an annual subscriber who maxes it out every day. The bet is that almost nobody does, and that the average, not the maximum, sets the margin.',
          },
          {
            type: 'p',
            html: 'One rule came out of this: the word "unlimited" never appears in Premium copy. The cap is real, so the claim would be false.',
          },
          {
            type: 'p',
            html: "<strong>How I'll know.</strong> The proxy now logs token counts for every call. If a real session costs less than the estimate, the cap goes up.",
          },

          { type: 'h3', text: 'The first Daily Test' },
          {
            type: 'reframe',
            first: 'The first test takes more than 20 seconds to load.',
            actual: 'Why generate the first test at all?',
          },
          {
            type: 'p',
            html: 'Every new user meets the same first screen, and it took more than 20 seconds to load. That looks like a latency problem, and my first fix treated it as one: start generating the set in the background the moment the user taps "Get started". It still wasn\'t fast enough.',
          },
          {
            type: 'p',
            html: 'The better question was why this set was generated at all. It is the one screen every user sees, so it is where an odd question or a wrong answer key costs the most. Generating it meant a wait, an API call, and an answer key nobody had read.',
          },
          {
            type: 'p',
            html: 'I wrote the first test by hand instead: five questions, instant, no API call. The background preload I had built that morning was removed the same day.',
          },
          {
            type: 'p',
            html: `The saving turned out smaller than it looked. Finishing a test starts preparing the next day's set in the background, so the next day opens instantly. That means every install that never comes back still pays for one generation, about $0.025 at measured token counts ${measured}.`,
          },
          {
            type: 'p',
            html: "<strong>How I'll know.</strong> Completion and scores on the fixed set compared with generated ones. The app records which kind of set each test was.",
          },

          { type: 'h3', text: "A promise the product didn't keep" },
          {
            type: 'reframe',
            first: 'A wrong answer shows no explanation. Missing text.',
            actual: "The store page promises something the product doesn't do.",
          },
          {
            type: 'p',
            html: "On the day of submission I noticed that a wrong Daily Test answer showed the correct answer and nothing else. My first read was a missing piece of text. It wasn't. The Daily Test is graded on the device, and the generated set only carried comments for the wrong answers the model had predicted. Correct answers, skipped ones and any unexpected mistake got no explanation at all.",
          },
          {
            type: 'p',
            html: 'Meanwhile the App Store description said you see why each answer was right or wrong. So did the first version of this page. I had written that promise twice without checking it against the product.',
          },
          {
            type: 'p',
            html: `The fix was one explanation per question, generated in the same call as the questions, under 25 words. That needed more room, so the Daily Test got its own output budget: the worst response went from using 80% of a 2,048-token limit to using 49% of a 3,072-token one ${measured}. The average explanation dropped from about 29 words to 20. Five of 25 still ran slightly over the limit, which I accepted: nothing depends on the exact length.`,
          },
          { type: 'figure', name: 'tokenBudget' },
          { type: 'figure', name: 'explanation' },
          {
            type: 'p',
            html: `<strong>What it cost.</strong> A Daily Test set now costs about $0.023–0.028 ${measured}, above my earlier $0.021 estimate. <strong>How I'll know.</strong> I've seen the new explanations on a device only on the hand-written first test so far; the first generated set on a real device is the next check.`,
          },
        ],
      },

      {
        label: 'Paywall',
        heading: '3. Where to ask for money',
        blocks: [
          {
            type: 'p',
            html: 'Placing the paywall produced three decisions, and one mistake.',
          },
          {
            type: 'p',
            html: '<strong>After the win, not after the list.</strong> The first test used to end in a paywall card on the result screen, right after the first score and before anything had visibly changed. I moved it. Now the result screen ends in one button, "Start my climb". The user\'s avatar climbs its first step on Home, and the Premium screen appears about 600 ms later, once. The hypothesis is that the moment after a visible win converts better than the moment after a list of results. It is a hypothesis, not a finding.',
          },
          { type: 'figure', name: 'storyboard' },
          {
            type: 'p',
            html: '<strong>An exit stays an exit.</strong> A free user who has used the day\'s practice session lands on a results screen whose only way out was "Back to topics". The obvious move was to make that button open the paywall. I didn\'t: a button that says one thing and does another is a dark pattern, and someone who wants to leave shouldn\'t have to get past a sales pitch to do it. Instead, the screen got an offer card showing what Premium adds, with its own "See Premium" button. "Back to topics" stays exactly as it was, underneath.',
          },
          { type: 'figure', name: 'offerCard' },
          {
            type: 'p',
            html: `A smaller cut belongs here too. I added a row to the Premium comparison table showing the daily session difference, free versus Premium. On a 375-point-wide phone it pushed the plan cards almost off the screen: their visible part fell from 78 points to about 30 at default text size, and to nothing at large text ${measured}. I reverted it the same day. Hiding the thing people buy to explain the thing they'd get is the wrong trade. The cost is a real gap: the offer card promises more daily sessions, and the Premium screen can't show it yet.`,
          },
          {
            type: 'p',
            html: "<strong>The mistake: two variables in one release.</strong> The new first-day paywall shipped in the same release as Monthly Climb, the habit layer. My own gamification spec had warned against exactly this: launched together, their effects can't be separated. There is no earlier baseline to compare against. So when I read first-day conversion after launch, I'll be able to report it, but not to say how much of it comes from the timing. I defined what to build before I defined what I needed to learn.",
          },
        ],
      },

      {
        label: 'Retrospective',
        heading: "4. What I'd do differently",
        blocks: [
          {
            type: 'p',
            html: "<strong>I fixed measurement and broke it somewhere else.</strong> The first version of this page said measurement should have come first. This time it did: analytics with a written plan, and token logging on every API call, all live before submission. Then I shipped two changes whose effects I wanted to measure in the same release. Instrumentation is necessary, but it isn't the same as a measurable plan.",
          },
          {
            type: 'p',
            html: "<strong>Stale documents don't stay in one place.</strong> The first version of this page described a line in my own documents claiming the free tier cost approximately nothing, which had survived after the reasoning behind it was disproved. The same claim survived in the project's README until the day I submitted. A documentation audit after submission found 21 status lines across the docs that no longer matched reality. The fix I've adopted is structural: the current state lives in one document, and old plans get a dated \"historical\" note instead of line-by-line edits nobody keeps up.",
          },
          {
            type: 'p',
            html: "<strong>Make the irreversible decisions early.</strong> The bundle identifier sat as a placeholder for months and surfaced as a launch blocker. Product identifiers can't be renamed once created. The same applied at the end: Apple doesn't let an app drop iPad support after a version ships, so I kept iPad on purpose, because education apps live on school tablets, and locked the app to portrait. The price is Split View on iPad. None of these is hard. All of them are annoying to discover late.",
          },
          {
            type: 'p',
            html: '<strong>Reversing a decision is cheaper than defending it.</strong> I cancelled a planned private testing round because seven people had already used the core loop. I cut two advertised but unbuilt features from the purchase screen, because a paid surface listing things that don\'t exist is both an App Store rejection risk and a lie. I reverted the comparison-table row within a day. Each reversal is written in the project log with its date and the reasoning that replaced the old one.',
          },
          {
            type: 'p',
            html: "<strong>How I worked.</strong> AI coding agents wrote the code; my job was the decisions. Any change that involved a judgment call started with a read-only report from the agent (the options, the measurements, the risks) and no code until I'd decided. At submission the project had 883 app tests and 70 server tests. Keeping the decision record is the part I'd repeat without changing anything.",
          },
        ],
      },

      {
        label: 'Status',
        heading: "5. Status, and how I'll know",
        blocks: [
          {
            type: 'p',
            html: "GrammarLens 1.0 was submitted to App Store review on 24 September 2026, together with its two subscriptions. It is not approved yet. Release is manual, so approval won't publish it on its own.",
          },
          {
            type: 'p',
            html: 'The first four weeks after release are for reading, not building. The questions:',
          },
          {
            type: 'ol',
            items: [
              'What does a Daily Test and a practice session really cost? The token log replaces every estimate on this page.',
              "Do free users who use the daily practice session convert more often than those who don't?",
              'Does the hand-written first test perform differently from generated ones?',
              'How does conversion differ by where the paywall appeared? Read with the caveat from section 3.',
            ],
          },
          {
            type: 'p',
            html: "The next product decision is already framed. Instead of every device generating its own Daily Test, one set a day would be generated for everyone, which removes most of the Daily Test's cost. What's still open is how answers get explained, which day boundary to use across time zones, and what happens if the daily generation fails. That decision waits for the token data.",
          },
          {
            type: 'p',
            html: 'This page will get a results section once there are results.',
          },
        ],
      },
    ],
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
    // The v2 rewrite is English only for now. The link goes straight to
    // the English page (the component does not pass it through
    // localizeHref, which would send it back to /tr).
    notice: {
      before: 'Bu yazının ',
      linkText: 'güncel sürümü',
      after: ' şimdilik yalnızca İngilizce.',
      href: '/products/grammarlens/case-study',
    },

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
