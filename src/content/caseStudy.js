// Copy for /products/grammarlens/case-study, in both languages.
//
// src/components/CaseStudyPage.astro renders whichever of these matches
// Astro.currentLocale. Both languages are the v2 case study
// (docs/grammarlens-case-study-v2.md), written as a list of typed blocks per
// section, in the same shape and block order; the Turkish text is the
// approved translation in docs/grammarlens-case-study-v2-tr.md.
//
// Paragraph entries are trusted HTML strings (bold, italic and the
// provenance tags come straight from the source copy) rendered with
// set:html, since the prose has inline formatting mid-sentence that a
// plain string can't carry.
//
// Block types:
//   { type: 'p', html, clear? }    a paragraph; clear: true starts it below
//                                  a floated screenshot
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
const measuredTr = '<span class="tag tag-neutral prov">ölçüldü</span>';
const estimatedTr = '<span class="tag tag-neutral prov">tahmin</span>';

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

    // Labels the case study components draw themselves (Reframe, the chart
    // frame and data tables). {n}, {worst} and {limit} are filled in by
    // the component; `locale` lowercases the C3 table steps.
    ui: {
      locale: 'en',
      then: ', then ',
      showChartData: 'Show chart data',
      firstFraming: 'First framing',
      actualProblem: 'Actual problem',
      timeline: { date: 'Date (2026)', event: 'Event' },
      modelCalls: {
        flow: 'Flow',
        steps: 'Steps',
        calls: 'Model calls',
        callOne: '1 model call',
        callMany: '{n} model calls',
        model: ' (model)',
      },
      freeCost: { user: 'Free user, 30 days', cost: 'Cost per month', provenance: 'Provenance' },
      capMath: {
        sessions: 'Sessions per day',
        cost: 'Model cost per month (estimated)',
        note: 'Note',
        about: 'about {n}',
      },
      tokenBudget: {
        version: 'Version',
        limit: 'Limit',
        worst: 'Worst response',
        headroom: 'Headroom',
        value: '{worst} of {limit} tokens, {n}% headroom',
      },
    },

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

    // Props for each { type: 'figure' } block, by name. Every number here
    // is the one given in the brief (Part C); nothing is derived from a
    // guess.
    figures: {
      timeline: {
        label: 'Project timeline, 19 July to 24 September 2026',
        caption: 'About ten weeks from first commit to submission.',
        // The C2 table, in two groups. Order only: no scale, and nothing
        // between the groups (brief, Part E26).
        groups: [
          {
            title: 'July: the MVP week',
            events: [
              { date: '19 Jul', label: 'First commit' },
              { date: '20–25 Jul', label: 'MVP week: first build, interviews, iteration 2' },
            ],
          },
          {
            title: 'August–September: to the App Store',
            events: [
              { date: '24 Aug', label: 'Onboarding, Home and Premium screen' },
              { date: '2 Sep', label: 'Free and paid split' },
              { date: '6 Sep', label: 'API key moved behind a server proxy' },
              { date: '14 Sep', label: 'First run on a physical iPhone' },
              { date: '15 Sep', label: 'Paywall leak closed; free tier defined' },
              { date: '19 Sep', label: 'Monthly Climb moves into the first release' },
              { date: '21–22 Sep', label: 'Cap 10 → 5, AI permission, fixed first test, paywall after the climb' },
              { date: '23 Sep', label: 'Merged; first TestFlight build' },
              { date: '24 Sep', label: 'Submitted to App Store review' },
            ],
          },
        ],
      },

      modelCalls: {
        label: 'Where each flow calls the language model',
        caption:
          'Every model call is a cost that scales with users. The free modes make at most one; the paid mode makes two.',
        legend: { model: 'Model call', device: 'On the device' },
        flows: [
          {
            name: 'First Daily Test',
            calls: 0,
            steps: [
              { text: 'Hand-written questions', model: false },
              { text: 'Answers graded on the device', model: false },
            ],
          },
          {
            name: 'Daily Test',
            calls: 1,
            steps: [
              { text: 'Model generates questions and explanations', model: true },
              { text: 'Answers graded on the device', model: false },
            ],
            note: "Finishing a test prepares tomorrow's set in the background.",
          },
          {
            name: 'Topic Practice',
            calls: 2,
            steps: [
              { text: 'Model generates questions', model: true },
              { text: 'User answers', model: false },
              { text: 'Model grades and explains', model: true },
            ],
          },
        ],
      },

      freeCost: {
        label: 'Monthly cost of a free user who opens the app every day',
        caption: 'The daily free practice session more than doubles what an engaged free user costs.',
        legend: { measured: 'measured', estimated: 'estimated' },
        xMax: 2,
        xStep: 0.5,
        bars: [
          {
            label: 'Daily Test only',
            measured: [0.7, 0.84],
            provenance: 'Measured token counts × list price',
          },
          {
            label: 'Daily Test + one free practice session a day',
            measured: [0.7, 0.84],
            // One practice session a day for 30 days at the estimated
            // $0.034 a session.
            estimatedAdd: 1.02,
            provenance: 'Daily Test part measured, practice part estimated',
          },
        ],
      },

      capMath: {
        label: 'Model cost per month against practice sessions per day',
        caption:
          'At about $0.034 a session (estimated), the old cap let a heavy subscriber cost roughly three times what the annual plan brings in.',
        costPerSession: 0.034,
        days: 30,
        xMax: 10,
        yMax: 11,
        yStep: 2,
        // Label lines are the brief's text, broken where the chart needs it.
        plans: [
          { label: ['Annual plan, net', 'per month: $3.54'], value: 3.54, style: 'solid' },
          { label: ['Monthly plan, net: $5.09'], value: 5.09, style: 'dashed' },
        ],
        caps: [
          { label: 'New cap: 5', value: 5, current: true },
          { label: 'Old cap: 10', value: 10 },
        ],
        text: {
          yAxis: 'Model cost per month (USD)',
          xAxis: 'Practice sessions per day',
          line: 'Cost at $0.034 a session',
          estimated: 'estimated',
          breakEven: ['Break-even: about', '3.5 sessions a day'],
        },
      },

      // Screenshots: web copies made by scripts/make-case-study-images.mjs
      // from the owner's raw shots. The Premium frame was shot from the
      // Premium button on Home, so its caption only claims what is
      // verified about the post-climb moment (brief, Part E11).
      storyboard: {
        label: 'The first day, in order',
        frames: [
          {
            src: '/img/case-study/grammarlens/day0-1-test.webp',
            width: 600,
            height: 1298,
            alt: 'The first Daily Test, showing a fill-in-the-blank question.',
            caption: 'A hand-written first test, no loading.',
          },
          {
            src: '/img/case-study/grammarlens/day0-2-result.webp',
            width: 600,
            height: 1298,
            alt: 'First test results with a Start my climb button at the bottom.',
            caption: 'One button: Start my climb.',
          },
          {
            src: '/img/case-study/grammarlens/day0-3-climb.webp',
            width: 600,
            height: 1298,
            alt: 'Home screen with the avatar on the first step of the mountain trail.',
            caption: 'The avatar takes its first step.',
          },
          {
            src: '/img/case-study/grammarlens/day0-4-paywall.webp',
            width: 600,
            height: 1298,
            alt: 'The Premium screen with monthly and annual plans.',
            caption: 'The Premium screen. On day one it opens once, right after the climb.',
          },
        ],
      },

      offerCard: {
        src: '/img/case-study/grammarlens/practice-offer-card.webp',
        width: 600,
        height: 1298,
        alt: 'Practice results screen with a Premium offer card and a Back to topics button below it.',
        caption: 'The offer card shows what Premium adds. Back to topics stays where it was.',
      },

      explanation: {
        src: '/img/case-study/grammarlens/daily-test-explanation.webp',
        width: 600,
        height: 1298,
        alt: 'A Daily Test result card showing a wrong answer, the correct answer and a one-sentence explanation.',
        caption: 'Every answer now comes with a reason.',
      },

      tokenBudget: {
        label: 'Daily Test output-token limit and worst measured response',
        caption: 'Five test runs each, measured on the local server.',
        rows: [
          { label: 'Before explanations', limit: 2048, worst: 1632 },
          { label: 'With explanations, own limit', limit: 3072, worst: 1496 },
        ],
      },
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
          { type: 'figure', name: 'explanation' },
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
          { type: 'figure', name: 'offerCard' },
          {
            type: 'p',
            html: '<strong>An exit stays an exit.</strong> A free user who has used the day\'s practice session lands on a results screen whose only way out was "Back to topics". The obvious move was to make that button open the paywall. I didn\'t: a button that says one thing and does another is a dark pattern, and someone who wants to leave shouldn\'t have to get past a sales pitch to do it. Instead, the screen got an offer card showing what Premium adds, with its own "See Premium" button. "Back to topics" stays exactly as it was, underneath.',
          },
          {
            type: 'p',
            html: `A smaller cut belongs here too. I added a row to the Premium comparison table showing the daily session difference, free versus Premium. On a 375-point-wide phone it pushed the plan cards almost off the screen: their visible part fell from 78 points to about 30 at default text size, and to nothing at large text ${measured}. I reverted it the same day. Hiding the thing people buy to explain the thing they'd get is the wrong trade. The cost is a real gap: the offer card promises more daily sessions, and the Premium screen can't show it yet.`,
          },
          {
            type: 'p',
            // The next decision: starts below the offer card, never beside it.
            clear: true,
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

  // Turkish: the same shape and block order as en. Every string is the
  // owner-approved translation in docs/grammarlens-case-study-v2-tr.md,
  // applied verbatim.
  tr: {
    meta: {
      title: 'GrammarLens case study — Ahmet Emin Tayfur',
      description:
        "GrammarLens'i geliştirmek: bir haftalık MVP'den App Store'a, her yapay zekâ çağrısının bir fiyatı varken problemi doğru tanımlamak.",
    },
    aside: {
      label: 'Case study',
      lines: [
        'Tek kişilik proje.',
        'Temmuz–Eylül 2026.',
        'Araştırma, PRD, geliştirme, test, iterasyon, App Store başvurusu.',
      ],
      status: "24 Eylül 2026'da App Store incelemesine gönderildi. Henüz onaylanmadı.",
      updated: "Eylül 2026'da güncellendi. Bu sayfanın önceki sürümü yalnızca MVP'yi anlatıyordu.",
    },
    title: "GrammarLens'i geliştirmek",
    subtitle:
      "Bir haftalık MVP'den App Store'a: her yapay zekâ çağrısının bir fiyatı varken problemi doğru tanımlamak.",
    backLinkText: 'Ürüne dön',
    endLinkText: 'Ürün sayfası',
    ui: {
      locale: 'tr',
      then: ', ardından ',
      showChartData: 'Grafik verisini göster',
      firstFraming: 'İlk bakış',
      actualProblem: 'Asıl problem',
      timeline: { date: 'Tarih (2026)', event: 'Olay' },
      modelCalls: {
        flow: 'Akış',
        steps: 'Adımlar',
        calls: 'Model çağrısı',
        callOne: '1 model çağrısı',
        callMany: '{n} model çağrısı',
        model: ' (model)',
      },
      freeCost: {
        user: 'Ücretsiz kullanıcı, 30 gün',
        cost: 'Aylık maliyet',
        provenance: 'Veri kaynağı',
      },
      capMath: {
        sessions: 'Günlük oturum',
        cost: 'Aylık model maliyeti (tahmin)',
        note: 'Not',
        about: 'yaklaşık {n}',
      },
      tokenBudget: {
        version: 'Sürüm',
        limit: 'Sınır',
        worst: 'En uzun yanıt',
        headroom: 'Boş pay',
        value: '{worst} / {limit} token, {n}% boş pay',
      },
    },
    summary: {
      label: 'Özet',
      blocks: [
        {
          type: 'p',
          html: 'GrammarLens; İngilizceyi oyunlar, diziler ve arkadaşları sayesinde akıcı konuşur hâle gelmiş ama IELTS gibi bir sınavın istediği dilbilgisini güvenle uygulayamayanlar için bir iOS uygulaması. Kullanıcının kendi hatalarından yola çıkarak alıştırma üretiyor ve bu hataları kural adlarıyla değil, sade bir dille açıklıyor.',
        },
        {
          type: 'p',
          html: "Her şeyi tek başıma yaptım: araştırmayı, PRD'yi, bütün ürün kararlarını ve kodu. Kodu, yazılı karar raporlarıyla yönlendirdiğim yapay zekâ kodlama ajanları yazdı. Proje Temmuz 2026'da, yedi kişiyle test edilen bir haftalık bir MVP olarak başladı. Sonraki iki ayda bir abonelik ürününe dönüştü: cihazda puanlanan ücretsiz bir Daily Test, bir yapay zekâ modelinin üretip puanladığı ücretli Topic Practice ve bunların üzerinde aylık bir alışkanlık katmanı.",
        },
        {
          type: 'p',
          html: "1.0 sürümü 24 Eylül 2026'da App Store incelemesine gönderildi. Henüz onaylanmadı ve elimde kullanıcı verisi yok. Bu yüzden bu sayfa sonuçların değil, kararların kaydı.",
        },
        {
          type: 'p',
          html: 'Geriye dönüp baktığımda, değerli olan nadiren bir problemi daha hızlı çözmekti; çoğu zaman önümdeki problemin asıl problem olmadığını fark etmekti. Aşağıdaki her karar aynı yapıyı izliyor: problem ilk bakışta neye benziyordu, aslında ne çıktı, neyi seçtim, bunun bedeli ne oldu ve yanıldıysam bunu nasıl anlayacağım. Her rakam "ölçüldü" ya da "tahmin" olarak işaretli.',
        },
        { type: 'figure', name: 'timeline' },
      ],
    },
    figures: {
      timeline: {
        label: 'Proje zaman çizelgesi, 19 Temmuz – 24 Eylül 2026',
        caption: "İlk commit'ten başvuruya yaklaşık on hafta.",
        groups: [
          {
            title: 'Temmuz: MVP haftası',
            events: [
              { date: '19 Tem', label: 'İlk commit' },
              {
                date: '20–25 Tem',
                label: 'MVP haftası: ilk build, görüşmeler, 2. iterasyon',
              },
            ],
          },
          {
            title: "Ağustos–Eylül: App Store'a doğru",
            events: [
              { date: '24 Ağu', label: 'Onboarding, Home ve Premium ekranı' },
              { date: '2 Eyl', label: 'Ücretsiz ve ücretli ayrımı' },
              {
                date: '6 Eyl',
                label: "API anahtarı bir sunucu proxy'sinin arkasına taşındı",
              },
              { date: '14 Eyl', label: "Gerçek bir iPhone'da ilk çalıştırma" },
              {
                date: '15 Eyl',
                label: 'Paywall açığı kapatıldı; ücretsiz katman tanımlandı',
              },
              { date: '19 Eyl', label: 'Monthly Climb ilk sürüme alındı' },
              {
                date: '21–22 Eyl',
                label: 'Sınır 10 → 5, yapay zekâ izni, sabit ilk test, tırmanıştan sonra paywall',
              },
              { date: '23 Eyl', label: "Birleştirildi; ilk TestFlight build'i" },
              { date: '24 Eyl', label: 'App Store incelemesine gönderildi' },
            ],
          },
        ],
      },
      modelCalls: {
        label: 'Her akış dil modelini nerede çağırıyor',
        caption:
          'Her model çağrısı, kullanıcı sayısıyla büyüyen bir maliyet. Ücretsiz modlar en fazla bir çağrı yapıyor, ücretli mod iki.',
        legend: { model: 'Model çağrısı', device: 'Cihazda' },
        flows: [
          {
            name: 'İlk Daily Test',
            calls: 0,
            steps: [
              { text: 'Elle yazılmış sorular', model: false },
              { text: 'Cevaplar cihazda puanlanır', model: false },
            ],
          },
          {
            name: 'Daily Test',
            calls: 1,
            steps: [
              { text: 'Model soruları ve açıklamaları üretir', model: true },
              { text: 'Cevaplar cihazda puanlanır', model: false },
            ],
            note: 'Bir testi bitirmek, ertesi günün setini arka planda hazırlar.',
          },
          {
            name: 'Topic Practice',
            calls: 2,
            steps: [
              { text: 'Model soruları üretir', model: true },
              { text: 'Kullanıcı cevaplar', model: false },
              { text: 'Model puanlar ve açıklar', model: true },
            ],
          },
        ],
      },
      freeCost: {
        label: 'Uygulamayı her gün açan ücretsiz bir kullanıcının aylık maliyeti',
        caption:
          'Günlük ücretsiz pratik oturumu, aktif bir ücretsiz kullanıcının maliyetini iki katından fazlasına çıkarıyor.',
        legend: { measured: 'ölçüldü', estimated: 'tahmin' },
        xMax: 2,
        xStep: 0.5,
        bars: [
          {
            label: 'Yalnızca Daily Test',
            measured: [0.7, 0.84],
            provenance: 'Ölçülen token sayıları × liste fiyatı',
          },
          {
            label: 'Daily Test + günde bir ücretsiz pratik oturumu',
            measured: [0.7, 0.84],
            estimatedAdd: 1.02,
            provenance: 'Daily Test kısmı ölçüldü, pratik kısmı tahmin',
          },
        ],
      },
      capMath: {
        label: 'Günlük pratik oturumu sayısına göre aylık model maliyeti',
        caption:
          'Oturum başına yaklaşık $0.034 ile (tahmin), eski sınırda yoğun kullanan bir abone, yıllık planın getirdiğinin kabaca üç katına mal olabiliyordu.',
        costPerSession: 0.034,
        days: 30,
        xMax: 10,
        yMax: 11,
        yStep: 2,
        plans: [
          { label: ['Yıllık plan, net', 'aylık: $3.54'], value: 3.54, style: 'solid' },
          { label: ['Aylık plan, net: $5.09'], value: 5.09, style: 'dashed' },
        ],
        caps: [
          { label: 'Yeni sınır: 5', value: 5, current: true },
          { label: 'Eski sınır: 10', value: 10 },
        ],
        text: {
          yAxis: 'Aylık model maliyeti (USD)',
          xAxis: 'Günlük pratik oturumu',
          line: 'Oturum başına $0.034 ile maliyet',
          estimated: 'tahmin',
          breakEven: ['Başa baş: yaklaşık', 'günde 3.5 oturum'],
        },
      },
      storyboard: {
        label: 'İlk gün, sırasıyla',
        frames: [
          {
            src: '/img/case-study/grammarlens/day0-1-test.webp',
            width: 600,
            height: 1298,
            alt: 'Boşluk doldurma sorusu gösteren ilk Daily Test.',
            caption: 'Elle yazılmış ilk test, yükleme yok.',
          },
          {
            src: '/img/case-study/grammarlens/day0-2-result.webp',
            width: 600,
            height: 1298,
            alt: 'Altında Start my climb butonu olan ilk test sonuçları.',
            caption: 'Tek buton: Start my climb.',
          },
          {
            src: '/img/case-study/grammarlens/day0-3-climb.webp',
            width: 600,
            height: 1298,
            alt: 'Avatarın dağ patikasının ilk basamağında durduğu Home ekranı.',
            caption: 'Avatar ilk adımını atıyor.',
          },
          {
            src: '/img/case-study/grammarlens/day0-4-paywall.webp',
            width: 600,
            height: 1298,
            alt: 'Aylık ve yıllık planları gösteren Premium ekranı.',
            caption: 'Premium ekranı. İlk gün, tırmanışın hemen ardından bir kez açılıyor.',
          },
        ],
      },
      offerCard: {
        src: '/img/case-study/grammarlens/practice-offer-card.webp',
        width: 600,
        height: 1298,
        alt: 'Premium teklif kartı ve altında Back to topics butonu olan pratik sonuç ekranı.',
        caption:
          "Teklif kartı Premium'un neler kattığını gösteriyor. Back to topics yerinde duruyor.",
      },
      explanation: {
        src: '/img/case-study/grammarlens/daily-test-explanation.webp',
        width: 600,
        height: 1298,
        alt:
          'Yanlış bir cevabı, doğru cevabı ve tek cümlelik bir açıklamayı gösteren Daily Test sonuç kartı.',
        caption: 'Artık her cevabın bir gerekçesi var.',
      },
      tokenBudget: {
        label: 'Daily Test çıktı token sınırı ve ölçülen en uzun yanıt',
        caption: 'Her biri için beş test çalıştırması, yerel sunucuda ölçüldü.',
        rows: [
          { label: 'Açıklamalardan önce', limit: 2048, worst: 1632 },
          { label: 'Açıklamalarla, kendi sınırıyla', limit: 3072, worst: 1496 },
        ],
      },
    },
    sections: [
      {
        label: 'Araştırma',
        heading: '1. Araştırmanın çürüttüğü varsayım',
        blocks: [
          {
            type: 'p',
            html: "İşe kullanıcı olarak başladım. IELTS'e hazırlanırken hep aynı birkaç hatayı yapıyordum: gerund mu infinitive mi, modal'lar, modal'ların geçmiş biçimleri. Doğru bir cümleyi sezgiyle kurabiliyor ama neden doğru olduğunu açıklayamıyordum. Akıcılık dilin içinde yaşayarak gelmişti; dilbilgisi bilgisi ise örtük kalmıştı. IELTS ise açık olanını istiyor.",
          },
          {
            type: 'p',
            html: 'Bu bana bir problem tanımı verdi, ama bir ürün vermedi. İlk sürümüm, yaptığımı fark etmediğim bir varsayımı içinde taşıyordu: dilbilgisi kuralının adını vermek bir özelliktir. Uygulama kural adlarını ana etiket olarak öne çıkarıyordu.',
          },
          {
            type: 'p',
            html: `Yedi kişi buna katılmadı: dört görüşme ve üç kullanılabilirlik testi. Görüşmelerden biri kendimleydi; bunu PRD'de belirttim, burada da belirtiyorum. Bir katılımcı, kendisine "Past Perfect Continuous kullan" denmesinin hiçbir şey ifade etmediğini söyledi, oysa bu yapıyı her gün kullanıyor. Bir başkası, "noun clause" gibi terimlerin anlattıkları hatadan daha zor anlaşıldığını söyledi.`,
          },
          {
            type: 'reframe',
            first: 'Öğrenenler dilbilgisi kurallarını bilmiyor.',
            actual: 'Kuralları zaten kullanıyorlar. Engel olan, kuralların adları.',
          },
          {
            type: 'p',
            html: 'Ben de bunu tersine çevirdim. Önce sade dilde açıklama geliyor; kural adı, isteyenler için ikincil bir alt yazıya indi. Ardından yapılan üç kullanılabilirlik testinde üç katılımcının üçü de, sorulmadan, sade dildeki geri bildirimi övdü. Projenin en güçlü ve en çok tekrarlanan bulgusu bu.',
          },
          {
            type: 'p',
            html: 'Aynı turlar ikinci bir varsayımı da çürüttü. Soru karışımım çoğunlukla boşluk doldurma ve çoktan seçmeliydi, yani geliştirmesi ve puanlaması en kolay biçimler. Yedi kişiden beşi bunları istemedi. Bir katılımcı bunu benim gerekçemden daha iyi açıkladı: seçenekler olsa tahmin edeceğini, seçenekler olmadığında ise gerçekten bildiğini kanıtlamak zorunda kaldığını söyledi.',
          },
          {
            type: 'p',
            html: 'Serbest metin cevaplarını puanlamak hem daha pahalı hem de doğru yapması daha zor. Yine de onları tuttum, çünkü kanıtlar ucuz biçimin yanlış şeyi ölçtüğünü söylüyordu.',
          },
          {
            type: 'p',
            html: 'Yedi kişi bir örneklem değil. Ama hangi yönde yanıldığımı görmeme yetti ve o aşamada ihtiyacım olan da buydu.',
          },
        ],
      },
      {
        label: 'Maliyet',
        heading: '2. Her çağrının bir fiyatı varken alınan kararlar',
        blocks: [
          {
            type: 'p',
            html: 'GrammarLens, ürettiği her alıştırma ve puanladığı her cevap için bir dil modeline çağrı yapıyor. Bu da maliyeti bir mühendislik ayrıntısı olmaktan çıkarıp bir ürün kısıtına dönüştürüyor. Problemi doğru tanımlamanın bu kadar önemli olmasının sebebi de bu: bu üründe yanlış bir çerçeve sadece daha kötü bir özellik değil, her ay gelen bir fatura demek.',
          },
          { type: 'figure', name: 'modelCalls' },
          { type: 'h3', text: 'Neyi ücretsiz vermeli' },
          {
            type: 'reframe',
            first: "Paywall'dan önce kaç ücretsiz oturum olmalı?",
            actual: 'Ürünün hangi parçaları, her kullanıldığında para harcatıyor?',
          },
          {
            type: 'p',
            html: `İlk soruya genelde verilen cevap, ücretli ürünün sınırlı bir sürümüdür. Ama Topic Practice her oturumda dil modeline iki kez çağrı yapıyor: bir kez üretmek, bir kez puanlamak için. Ücretsiz ve sınırsız bir sürümde maliyet kullanıcı sayısıyla büyür, gelir ise hiç gelmez. Günde 100 kullanıcıda bu, ayda kabaca $90–270 ediyor ${estimatedTr}; o dönem çıkardığım kaba bir rakam. Her şeyin önüne konan katı bir paywall'ın sorunu ise tam tersiydi: hiç kimse, bütün test kullanıcılarının övdüğü sade dildeki geri bildirimle karşılaşmazdı.`,
          },
          {
            type: 'p',
            html: 'Bu yüzden sınırı olan tek bir mod yerine yapısal olarak farklı iki mod kurdum. Ücretsiz Daily Test tek bir üretim çağrısı yapıyor ve cevapları model kullanmadan cihazda puanlıyor. Ücretli ürün ise modelin ürettiği ve puanladığı Topic Practice.',
          },
          {
            type: 'p',
            html: 'İki hafta sonra, Review ekranındaki bir hatadan ulaşılabilen, günde bir ücretsiz Topic Practice oturumu ekledim. Ürünü satan şey geri bildirim; o oturum olmasa ücretsiz kullanıcı bunu hiç görmezdi.',
          },
          {
            type: 'p',
            html: `Bu tek oturum, aktif bir ücretsiz kullanıcının maliyetini iki katından fazlasına çıkarıyor: ayda yaklaşık $0.70–0.84 iken yaklaşık $1.72–1.86 oluyor. Daily Test kısmı ölçülmüş token sayılarına dayanıyor ${measuredTr}; pratik oturumu ise hâlâ bir tahmin ${estimatedTr}.`,
          },
          { type: 'figure', name: 'freeCost' },
          {
            type: 'p',
            html: '<strong>Nasıl anlayacağım.</strong> İki analitik olayı, ücretsiz bir kullanıcının bu oturumu ne zaman kullandığını ve sınıra ne zaman ulaştığını kaydediyor. Dört haftanın sonunda soru basit: bu oturumu kullanan ücretsiz kullanıcılar, kullanmayanlardan daha sık aboneye dönüşüyor mu? Dönüşmüyorsa bu hak azaltılır. Kodda bu tek bir sabit.',
          },
          { type: 'h3', text: 'Orada olmayan paywall' },
          {
            type: 'reframe',
            first: 'Review ekranı, kullanıcının Premium olup olmadığını kontrol etmeyi unutmuş.',
            actual: 'Kontrol paranın harcandığı yerde değil, navigasyonda duruyordu.',
          },
          {
            type: 'p',
            html: `15 Eylül'de bir cihaz testi, ücretsiz bir kullanıcının ücretli pratiğe ulaşabildiğini gösterdi. Review ekranında zayıf bir noktaya, ardından "Practice this"e dokunmak, hiçbir abonelik kontrolü yapmadan gerçek ve faturalanan bir üretim başlatıyordu. Bu riski on gün önce fark etmiş, not almış ve ertelemiştim.`,
          },
          {
            type: 'p',
            html: 'Hızlı çözüm, kontrolün bir kopyasını da Review ekranına koymaktı. Ama Home ekranındaki kilitli kartlar yalnızca bir navigasyon korumasıydı: dokunuşu durduruyor, para harcatan şeyi korumuyordu. Uygulamada pratik seti üreten tek bir fonksiyon var. Kontrol bu fonksiyonun içine taşındı. Fonksiyon artık abonelik servisini, çağıranın unutabileceği isteğe bağlı bir bayrak olarak değil, zorunlu bir bağımlılık olarak istiyor. Henüz var olmayanlar da dahil, her yol aynı kapıdan geçiyor.',
          },
          {
            type: 'p',
            html: "Bu yaklaşım bir hafta sonra karşılığını verdi. Apple'ın App Review kuralları, kişisel veriler üçüncü taraf bir yapay zekâya gitmeden önce açık izin alınmasını istiyor. İzin ekranı aynı fonksiyona, aynı kapının önüne yerleşti; bütün giriş noktalarını yeniden aramam gerekmedi.",
          },
          {
            type: 'p',
            html: '<strong>Maliyeti.</strong> Bilinen bir açıkla geçen on gün; üstelik iki ekranı da kapsayan bir test yoktu. <strong>Nasıl anlayacağım.</strong> Bu konu ölçümle değil, yapıyla ilgili: iki giriş noktasının da artık kapıyı sınayan testleri var.',
          },
          { type: 'h3', text: 'Aslında bir kâr marjı olan sınır' },
          {
            type: 'reframe',
            first:
              'İki sınır çakışıyor. Sunucu sınırını mı yükseltmeli, oturum sınırını mı düşürmeli?',
            actual: 'Planlanan sınırda, yoğun kullanan bir abone ödediğinden fazlasına mal oluyor.',
          },
          {
            type: 'p',
            html: `Premium günde 10 pratik oturumuna izin veriyordu. Her oturum iki sunucu çağrısı kullanıyor; API anahtarını koruyan proxy ise cihaz başına günde 15 çağrıya izin veriyor. Yani yoğun kullanan bir abone, yaklaşık yedi oturumdan sonra genel bir "come back tomorrow" mesajına takılacaktı. Masadaki seçenekler, sunucu sınırını 25 civarına çıkarmak ya da oturum sınırını 7'ye indirmekti.`,
          },
          {
            type: 'p',
            html: `Böyle bakınca bu bir yapılandırma sorusuydu. Para açısından bakınca değildi. Oturum başına yaklaşık $0.034 ile ${estimatedTr}, günde 10 oturum ayda yaklaşık $10.20 ediyor. Yıllık plan ayda net yaklaşık $3.54 bırakıyor. Bu hesap, Apple'ın Small Business Program'ındaki 15% komisyonu varsayıyor; programa başvurdum ama henüz kabul almadım. Başa baş noktası günde yaklaşık 3.5 oturum.`,
          },
          { type: 'figure', name: 'capMath' },
          {
            type: 'p',
            html: "İlk içgüdüm 3'tü. 5'te karar kıldım ve fiyatlara dokunmadım: ayda $5.99, yılda $49.99. Bir sınırı lansmandan sonra yükseltmek, düşürmekten daha kolay. Beş, her gün sonuna kadar kullanan yıllık bir abone için hâlâ başa baş noktasının üzerinde. Bahsim, neredeyse kimsenin bunu yapmayacağı ve kâr marjını en yüksek kullanımın değil ortalamanın belirleyeceği.",
          },
          {
            type: 'p',
            html: 'Buradan bir kural çıktı: "unlimited" kelimesi Premium metinlerinde hiç geçmiyor. Sınır gerçek; öyle bir iddia yalan olurdu.',
          },
          {
            type: 'p',
            html: '<strong>Nasıl anlayacağım.</strong> Proxy artık her çağrının token sayısını kaydediyor. Gerçek bir oturum tahminden ucuza geliyorsa sınır yükselir.',
          },
          { type: 'h3', text: 'İlk Daily Test' },
          {
            type: 'reframe',
            first: 'İlk testin yüklenmesi 20 saniyeden uzun sürüyor.',
            actual: 'İlk test neden üretiliyor ki?',
          },
          {
            type: 'p',
            html: 'Her yeni kullanıcı aynı ilk ekranla karşılaşıyor ve bu ekranın yüklenmesi 20 saniyeden uzun sürüyordu. Bu bir gecikme sorunu gibi görünüyor ve ilk çözümüm de onu öyle ele aldı: kullanıcı "Get started"a dokunduğu anda seti arka planda üretmeye başlamak. Yine de yeterince hızlı olmadı.',
          },
          {
            type: 'p',
            html: 'Daha iyi soru, bu setin neden üretildiğiydi. Burası her kullanıcının gördüğü tek ekran; tuhaf bir sorunun ya da yanlış bir cevap anahtarının en pahalıya patladığı yer de burası. Onu üretmek, bir bekleme, bir API çağrısı ve kimsenin okumadığı bir cevap anahtarı demekti.',
          },
          {
            type: 'p',
            html: 'Bunun yerine ilk testi elle yazdım: beş soru, anında açılıyor, API çağrısı yok. O sabah kurduğum arka plan ön yüklemesi de aynı gün kaldırıldı.',
          },
          {
            type: 'p',
            html: `Tasarruf göründüğünden küçük çıktı. Bir testi bitirmek, ertesi günün setini arka planda hazırlamayı başlatıyor; böylece ertesi gün test anında açılıyor. Bu da bir daha hiç geri dönmeyen her kurulumun yine de bir üretimin bedelini ödediği anlamına geliyor. Ölçülen token sayılarıyla bu yaklaşık $0.025 ${measuredTr}.`,
          },
          {
            type: 'p',
            html: '<strong>Nasıl anlayacağım.</strong> Sabit setteki tamamlanma oranı ve puanlar, üretilen setlerle karşılaştırılacak. Uygulama her testin hangi tür set olduğunu kaydediyor.',
          },
          { type: 'h3', text: 'Ürünün tutmadığı bir söz' },
          {
            type: 'reframe',
            first: 'Yanlış bir cevapta açıklama görünmüyor. Eksik metin.',
            actual: 'Mağaza sayfası, ürünün yapmadığı bir şeyi vaat ediyor.',
          },
          { type: 'figure', name: 'explanation' },
          {
            type: 'p',
            html: "Başvuru günü, Daily Test'te yanlış bir cevabın yalnızca doğru cevabı gösterdiğini, başka hiçbir şey göstermediğini fark ettim. İlk yorumum bir metin parçasının eksik olduğuydu. Değildi. Daily Test cihazda puanlanıyor ve üretilen set yalnızca modelin önceden tahmin ettiği yanlış cevaplar için yorum taşıyordu. Doğru cevaplar, atlananlar ve beklenmedik her hata hiçbir açıklama almıyordu.",
          },
          {
            type: 'p',
            html: 'Oysa App Store açıklaması, kullanıcının her cevabın neden doğru ya da yanlış olduğunu gördüğünü söylüyordu. Bu sayfanın ilk sürümü de öyle. Bu sözü, ürünle karşılaştırmadan iki kez yazmıştım.',
          },
          {
            type: 'p',
            html: `Çözüm, soru başına bir açıklamaydı: sorularla aynı çağrıda üretilen, 25 kelimenin altında bir açıklama. Bunun için daha fazla alan gerekiyordu, bu yüzden Daily Test'e kendi çıktı bütçesi verildi. En uzun yanıtın kullandığı pay, 2,048 token'lık sınırda 80% iken 3,072 token'lık sınırda 49% oldu ${measuredTr}. Ortalama açıklama yaklaşık 29 kelimeden 20'ye indi. 25 açıklamanın beşi hâlâ sınırı biraz aşıyordu; bunu kabul ettim, çünkü hiçbir şey tam uzunluğa bağlı değil.`,
          },
          { type: 'figure', name: 'tokenBudget' },
          {
            type: 'p',
            html: `<strong>Maliyeti.</strong> Bir Daily Test seti artık yaklaşık $0.023–0.028 tutuyor ${measuredTr}; bu, daha önceki $0.021 tahminimin üzerinde. <strong>Nasıl anlayacağım.</strong> Yeni açıklamaları cihazda şimdiye kadar yalnızca elle yazılmış ilk testte gördüm. Bir sonraki kontrol, gerçek bir cihazda üretilen ilk set.`,
          },
        ],
      },
      {
        label: 'Paywall',
        heading: '3. Parayı nerede istemeli',
        blocks: [
          {
            type: 'p',
            html: "Paywall'ın yerini belirlemek üç karar ve bir hata doğurdu.",
          },
          {
            type: 'p',
            html: '<strong>Sonuç listesinden sonra değil, başarı anından sonra.</strong> İlk test eskiden sonuç ekranındaki bir paywall kartıyla bitiyordu: ilk puanın hemen ardından, henüz gözle görülür hiçbir şey değişmeden önce. Onu taşıdım. Artık sonuç ekranı tek bir butonla bitiyor: "Start my climb". Kullanıcının avatarı Home ekranında ilk basamağını çıkıyor ve Premium ekranı yaklaşık 600 ms sonra, bir kez açılıyor. Hipotez şu: görünür bir başarının hemen sonrası, bir sonuç listesinin sonrasından daha iyi dönüşüm getirir. Bu bir hipotez, bulgu değil.',
          },
          { type: 'figure', name: 'storyboard' },
          { type: 'figure', name: 'offerCard' },
          {
            type: 'p',
            html: `<strong>Çıkış, çıkış olarak kalır.</strong> Günün pratik oturumunu kullanmış ücretsiz bir kullanıcı, tek çıkışı "Back to topics" olan bir sonuç ekranına düşüyordu. Akla gelen ilk hamle, bu butonun paywall'ı açmasını sağlamaktı. Bunu yapmadım: bir şey söyleyip başka bir şey yapan bir buton dark pattern'dir ve çıkmak isteyen biri bunun için bir satış konuşmasını aşmak zorunda kalmamalı. Bunun yerine ekrana, Premium'un neler kattığını gösteren ve kendi "See Premium" butonu olan bir teklif kartı eklendi. "Back to topics" ise altında, olduğu gibi duruyor.`,
          },
          {
            type: 'p',
            html: `Daha küçük bir geri alma kararı da buraya ait. Premium karşılaştırma tablosuna, ücretsiz ile Premium arasındaki günlük oturum farkını gösteren bir satır ekledim. 375 pt genişliğindeki bir telefonda bu satır, plan kartlarını neredeyse ekranın dışına itti. Kartların görünen kısmı varsayılan yazı boyutunda 78 pt iken yaklaşık 30 pt kaldı, büyük yazı boyutunda ise tamamen kayboldu ${measuredTr}. Aynı gün geri aldım. İnsanların satın aldığı şeyi, alacakları şeyi anlatmak için gizlemek yanlış bir takas. Bunun bedeli gerçek bir boşluk: teklif kartı daha fazla günlük oturum vaat ediyor, ama Premium ekranı bunu henüz gösteremiyor.`,
          },
          {
            type: 'p',
            clear: true,
            html: "<strong>Hata: tek sürümde iki değişken.</strong> Yeni ilk gün paywall'ı, alışkanlık katmanı olan Monthly Climb ile aynı sürümde yayına çıktı. Kendi oyunlaştırma spesifikasyonum tam olarak buna karşı uyarmıştı: birlikte yayına çıkarlarsa etkileri birbirinden ayrılamaz. Karşılaştırma yapabileceğim önceki bir referans değer de yok. Bu yüzden lansmandan sonra ilk gün dönüşümünü okuduğumda onu raporlayabileceğim, ama ne kadarının zamanlamadan geldiğini söyleyemeyeceğim. Neyi öğrenmem gerektiğini tanımlamadan önce neyi geliştireceğimi tanımlamıştım.",
          },
        ],
      },
      {
        label: 'Geriye bakış',
        heading: '4. Baştan yapsam neyi farklı yapardım',
        blocks: [
          {
            type: 'p',
            html: '<strong>Ölçümü düzelttim, başka bir yerde bozdum.</strong> Bu sayfanın ilk sürümü, ölçümün en başta gelmesi gerektiğini söylüyordu. Bu sefer öyle oldu: yazılı bir plana dayanan analitik ve her API çağrısında token kaydı, hepsi başvurudan önce çalışıyordu. Sonra etkisini ölçmek istediğim iki değişikliği aynı sürümde yayına çıkardım. Ölçüm altyapısı şart, ama ölçülebilir bir planla aynı şey değil.',
          },
          {
            type: 'p',
            html: '<strong>Eskimiş belgeler tek bir yerde kalmıyor.</strong> Bu sayfanın ilk sürümü, kendi belgelerimdeki bir satırı anlatıyordu: ücretsiz katmanın neredeyse hiçbir maliyeti olmadığını iddia eden ve arkasındaki gerekçe çürütüldükten sonra da yerinde kalan bir satır. Aynı iddia, başvuru gününe kadar projenin README dosyasında da duruyordu. Başvurudan sonra yaptığım bir belge denetimi, belgelerin genelinde artık gerçeği yansıtmayan 21 durum satırı buldu. Benimsediğim çözüm yapısal: güncel durum tek bir belgede tutuluyor; eski planlar ise kimsenin sürdürmediği satır satır düzeltmeler yerine tarihli bir "historical" notu alıyor.',
          },
          {
            type: 'p',
            html: "<strong>Geri dönüşü olmayan kararları erken ver.</strong> Bundle identifier aylarca yer tutucu olarak kaldı ve lansmanı engelleyen bir sorun olarak karşıma çıktı. Ürün kimlikleri bir kez oluşturulduktan sonra yeniden adlandırılamıyor. Aynısı sonda da geçerliydi. Apple, bir sürüm yayınlandıktan sonra uygulamanın iPad desteğini kaldırmasına izin vermiyor. Bu yüzden iPad desteğini bilerek tuttum, çünkü eğitim uygulamaları okul tabletlerinde kullanılıyor; uygulamayı da dikey moda kilitledim. Bunun bedeli iPad'de Split View. Bunların hiçbiri zor değil. Hepsi geç fark edildiğinde can sıkıcı.",
          },
          {
            type: 'p',
            html: "<strong>Bir kararı geri almak, onu savunmaktan daha ucuz.</strong> Planladığım kapalı bir test turunu iptal ettim, çünkü yedi kişi temel döngüyü zaten kullanmıştı. Satın alma ekranından, duyurulmuş ama geliştirilmemiş iki özelliği çıkardım. Var olmayan şeyleri listeleyen ücretli bir ekran hem App Store'dan ret riski hem de bir yalan. Karşılaştırma tablosuna eklediğim satırı bir gün içinde geri aldım. Her geri dönüş, tarihiyle ve eski gerekçenin yerini alan yeni gerekçeyle birlikte proje günlüğünde yazılı.",
          },
          {
            type: 'p',
            html: '<strong>Nasıl çalıştım.</strong> Kodu yapay zekâ kodlama ajanları yazdı; benim işim kararlardı. Muhakeme gerektiren her değişiklik, ajanın hazırladığı salt okunur bir raporla başladı (seçenekler, ölçümler, riskler) ve ben karar verene kadar kod yazılmadı. Başvuru anında projede 883 uygulama testi ve 70 sunucu testi vardı. Karar kaydını tutmak, hiçbir şeyini değiştirmeden tekrar edeceğim kısım.',
          },
        ],
      },
      {
        label: 'Durum',
        heading: '5. Mevcut durum ve nasıl anlayacağım',
        blocks: [
          {
            type: 'p',
            html: "GrammarLens 1.0, iki aboneliğiyle birlikte 24 Eylül 2026'da App Store incelemesine gönderildi. Henüz onaylanmadı. Yayın manuel olduğu için onay, uygulamayı kendiliğinden yayına çıkarmayacak.",
          },
          {
            type: 'p',
            html: 'Yayından sonraki ilk dört hafta geliştirmeye değil, veriyi okumaya ayrıldı. Sorular:',
          },
          {
            type: 'ol',
            items: [
              'Bir Daily Test ve bir pratik oturumu gerçekte ne kadara mal oluyor? Token kaydı, bu sayfadaki bütün tahminlerin yerini alacak.',
              'Günlük pratik oturumunu kullanan ücretsiz kullanıcılar, kullanmayanlardan daha sık aboneye dönüşüyor mu?',
              'Elle yazılmış ilk test, üretilen testlerden farklı bir performans gösteriyor mu?',
              "Dönüşüm, paywall'ın göründüğü yere göre nasıl değişiyor? Bu soru, 3. bölümdeki çekinceyle birlikte okunmalı.",
            ],
          },
          {
            type: 'p',
            html: "Bir sonraki ürün kararı şimdiden çerçevelendi: her cihazın kendi Daily Test'ini üretmesi yerine, herkes için günde tek bir set üretmek. Bu, Daily Test maliyetinin büyük kısmını ortadan kaldırır. Hâlâ açık olan konular şunlar: cevapların nasıl açıklanacağı, farklı saat dilimlerinde günün hangi saatte başlayacağı ve günlük üretim başarısız olursa ne olacağı. Bu karar token verisini bekliyor.",
          },
          {
            type: 'p',
            html: 'Sonuçlar geldiğinde bu sayfaya bir sonuçlar bölümü eklenecek.',
          },
        ],
      },
    ],
  },
};
