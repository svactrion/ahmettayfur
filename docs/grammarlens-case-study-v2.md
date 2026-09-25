# GrammarLens case study v2 — content and implementation brief

This file is self-contained. It is the full brief for updating the GrammarLens
case study on ahmettayfur.com. Part A says how to work. Part B is the page
copy, final unless the owner edits it. Part C specifies the visuals. Part D
lists what changed from the current page and why, so nothing is "fixed back"
by accident.

---

## Part A — How to implement

### A1. Scope

- Update the **existing** GrammarLens case study page in place. Same URL:
  the link is printed on the owner's CVs and must not break or redirect.
- **English only** in this pass. Do not translate. On the Turkish version of
  the page, leave the existing content untouched and add one line at the top,
  linking to the English page: "Bu yazının güncel sürümü şimdilik yalnızca
  İngilizce." (If the site's i18n structure makes this awkward, report it in
  Batch 0 instead of improvising.)
- Replace the current English body with Part B. Keep the page's existing
  header area, navigation, "Back to the product" and "Product page" links, and
  footer, unless Batch 0 finds a reason to change them.

### A2. Design rules

- Use the site's **existing** typography, colors, spacing and components. Do
  not introduce new fonts, a new palette, or a chart library. If the site
  supports light and dark themes, every visual must work in both, driven by
  the site's own CSS variables.
- Charts and diagrams are **hand-written inline SVG** in Astro components, with
  data passed as props, not images.
- Spend visual boldness in one place: the **Reframe block** (C1), which repeats
  in every decision and is the page's signature. Everything else stays quiet.
- No scroll-triggered or entrance animations. Motion only in answer to a user
  action, and `prefers-reduced-motion` respected.
- No all-caps labels, no eyebrow labels above headings, no middle-dot meta
  strings, no "→" appended to links.
- Every chart has a `<figure>` with a `<figcaption>`, and its data is available
  as text (an accessible table, visually hidden or in a `<details>`).
- Responsive down to 375 px wide. Wide visuals scroll inside their own
  `overflow-x: auto` container; the page body never scrolls sideways.
- Keep body line length under ~75 characters.
- Figures carry a provenance marker where Part B shows `[measured]` or
  `[estimated]`: render these as a small, quiet inline tag in sentence case
  ("measured", "estimated"), not as literal brackets. It is information, not
  decoration: the owner's rule is that nothing unmeasured reads as measured.

### A3. Images

- Screenshots come **only** from files the owner provides. Never mock up,
  redraw or generate phone screens. If a listed image is missing, leave that
  visual out, keep the text, and list the missing file in your report.
- The owner has placed the raw screenshots in
  **`docs/case-study-screenshots/`**, named exactly:
  - `day0-1-test` — the first Daily Test, a question on screen
  - `day0-2-result` — the first Daily Test result with the "Start my climb" button
  - `day0-3-climb` — Home, avatar on the trail after the climb
  - `day0-4-paywall` — the Premium screen that opens after the climb
  - `practice-offer-card` — practice results screen: the Premium offer card with "Back to topics" below it
  - `daily-test-explanation` — a Daily Test result card showing a wrong answer with its explanation
- In Batch 0, list what is actually in that folder (file names, formats,
  pixel sizes) and flag any file that is missing, misnamed, in dark theme,
  or shows personal information (e-mail addresses, notifications, anything
  in the status bar beyond time/battery/signal). The in-app greeting with the
  owner's first name is fine.
- In Batch 3, create web-sized copies (~600 px wide, the format the site's
  image pipeline prefers) in the location Batch 0 proposed, and use those.
  Do not delete or move the originals in `docs/case-study-screenshots/`;
  ask the owner in the final report whether to remove them.
- Alt text and captions are given in Part C.

### A4. Batches (each one built, checked and committed separately)

- **Batch 0 — read and report, no code.** Report: how the case study page is
  built (Astro page, MDX, content collection, data file), where the EN and TR
  versions live, what shared components and CSS variables exist, whether the
  site has light/dark, how images are handled, the screenshot inventory from
  A3, where the web-sized copies should live, and your file plan for Batches
  1–3. Flag anything in this brief that conflicts with the site. Stop and wait
  for approval.
- **Batch 1 — copy.** Part B as structured text, with the Reframe block (C1)
  and the provenance tag. No charts yet.
- **Batch 2 — diagrams and charts.** C2–C6 in the priority order given in
  Part C.
- **Batch 3 — screenshots.** C7–C9, with whatever images exist.

After each batch: the site builds with no errors or warnings introduced;
check the page at 375 px and 1280 px, in light and dark if the site has both.
Report what you checked. Commit messages in English. Do not deploy; the owner
deploys.

---

## Part B — Page copy

Markup notes in `{curly braces}` are instructions, not copy.

---

### Header

**Title:** Building GrammarLens

**Subtitle:** From a one-week MVP to the App Store: defining the problem when every AI call has a price.

**Meta (keep the current page's meta style):** Solo project. July to September 2026. Research, PRD, build, test, iterate, App Store submission.

**Status line (visible near the top):** Submitted for App Store review on 24 September 2026. Not yet approved.

**Updated line:** Updated September 2026. An earlier version of this page covered the MVP only.

---

### Summary

GrammarLens is an iOS app for English learners who became fluent through games, series and friends, but can't reliably apply the grammar an exam like IELTS asks for. It generates practice around your own mistakes and explains them in plain language, not rule names.

I built it alone: the research, the PRD, every product decision, and the code, written with AI coding agents that I directed through written decision reports. It started in July 2026 as a one-week MVP tested with seven people. Over the next two months it became a subscription product: a free Daily Test graded on the device, paid Topic Practice that an AI model generates and grades, and a monthly habit layer on top.

Version 1.0 was submitted to App Store review on 24 September 2026. It is not approved yet, and there is no user data. So this is a record of decisions, not results.

Looking back, the useful work was rarely solving a problem faster. It was noticing that the problem in front of me wasn't the real one. Each decision below follows the same shape: what the problem first looked like, what it turned out to be, what I chose, what it cost, and how I'll find out whether I was wrong. Every figure is marked as measured or estimated.

{C2 — Project timeline}

---

### 1. The assumption research broke

I started as the user. During IELTS preparation I kept making the same handful of mistakes: gerund versus infinitive, modals, modal past forms. I could produce a correct sentence by feel without being able to explain why it was correct. Fluency from immersion, grammar knowledge left implicit. IELTS asks for the explicit kind.

That gave me a problem statement. It did not give me a product, and my first version encoded an assumption I hadn't noticed I was making: that naming the grammar rule is a feature. The app surfaced rule names as primary labels.

Seven people disagreed, across four interviews and three usability tests. One of the interviews was with myself; I flagged it in the PRD, and I'm flagging it here. One participant pointed out that being told to "use Past Perfect Continuous" meant nothing to him, even though he uses that structure every day. Another said terms like "noun clause" were harder to understand than the mistake they described.

{C1 — Reframe block}
- First framing: Learners don't know the grammar rules.
- Actual problem: They already use the rules. The rule names are what's in the way.

So I inverted it. Plain-language explanation first, the rule name demoted to a secondary caption for anyone who wants it. In the three usability tests that followed, all three participants praised the plain-language feedback without being asked about it. It is the strongest and most repeated finding in the project.

The same rounds killed a second assumption. My question mix was mostly fill-in-the-blank and multiple choice, the formats that are easiest to build and score. Five of seven people rejected them. One participant explained it better than my own reasoning did: with options, she said, she would have guessed; without them, she had to prove she actually knew.

Free-text answers cost more to score and are harder to get right. I kept them anyway, because the evidence said the cheap format was measuring the wrong thing.

Seven people is not a sample. It was enough to show me which way I was wrong, and that was what I needed at that stage.

---

### 2. Decisions under a per-call price

GrammarLens calls a language model for every exercise it generates and every answer it scores. That makes cost a product constraint, not an engineering detail. It is also why defining the problem mattered so much: in this product, the wrong framing isn't only a worse feature, it's a recurring bill.

{C3 — Where the model is called}

#### What to give away

{C1 — Reframe block}
- First framing: How many free sessions before the paywall?
- Actual problem: Which parts of the product cost money every time someone uses them?

The usual answer to the first question is a limited version of the paid product. But Topic Practice calls a language model twice per session, once to generate and once to grade. A free, unlimited version would scale cost with users and revenue with nobody: roughly $90–270 a month at 100 daily users `[estimated]`, a rough figure I worked out at the time. A hard paywall in front of everything had the opposite problem. Nobody would ever meet the plain-language feedback that every tester had praised.

So I built two structurally different modes instead of one mode with a limit. The free Daily Test makes a single generation call and grades answers on the device, with no model involved. The paid product is Topic Practice, generated and graded by the model.

Two weeks later I added one free Topic Practice session a day, reachable from a mistake in Review. The feedback is what sells the product, and without that session a free user would never see it.

That one session more than doubles what an engaged free user costs: from about $0.70–0.85 to about $1.70–1.90 a month. The Daily Test part uses measured token counts `[measured]`; the practice session is still an estimate `[estimated]`.

{C4 — Free-user monthly cost}

**How I'll know.** Two analytics events record when a free user spends the session and when they hit the limit. After four weeks the question is simple: do free users who use it convert more often than those who don't? If not, the allowance goes down. It is a single constant in the code.

#### The paywall that wasn't there

{C1 — Reframe block}
- First framing: The Review screen forgot to check whether the user has Premium.
- Actual problem: The check lived in navigation, not where the money is spent.

On 15 September a device test showed that a free user could reach paid practice. From Review, tapping a weak spot and then "Practice this" started a real, billed generation with no subscription check at all. I had noticed the risk ten days earlier, written it down, and deferred it.

The quick fix was another copy of the check, this time on the Review screen. But the Home screen's locked cards were only a navigation guard: they stopped a tap, they didn't protect the thing that costs money. There is exactly one function in the app that generates a practice set. The check moved inside it, and that function now requires the subscription service as a mandatory dependency, not an optional flag a caller can forget. Every path goes through the same gate, including paths that don't exist yet.

The pattern paid off a week later. Apple's App Review rules require explicit permission before personal data goes to a third-party AI. The permission screen went into the same function, in front of the same gate, and I didn't have to find every entry point again.

**What it cost.** Ten days with a known leak, and no test had covered either screen. **How I'll know.** This one is structural rather than measured: both entry points now have tests that exercise the gate.

#### The cap that was really a margin

{C1 — Reframe block}
- First framing: Two limits conflict. Raise the server limit, or lower the session cap?
- Actual problem: At the planned cap, a heavy subscriber costs more than they pay.

Premium allowed 10 practice sessions a day. Each session uses two server calls, and the proxy that protects the API key allows 15 calls per device per day. So a heavy subscriber would hit a generic "come back tomorrow" after about seven sessions. The options on the table were to raise the server limit to about 25 or lower the cap to 7.

Framed that way, it was a configuration question. Framed as money, it wasn't. At about $0.034 per session `[estimated]`, 10 sessions a day is about $10.20 a month. The annual plan nets about $3.54 a month at the 15% commission of Apple's Small Business Program, which approved GrammarLens in September 2026. Break-even is about 3.5 sessions a day.

{C5 — Cap math}

My first instinct was 3. I settled on 5 and left prices unchanged at $5.99 a month and $49.99 a year. A cap is easier to raise after launch than to cut. Five is still above break-even for an annual subscriber who maxes it out every day. The bet is that almost nobody does, and that the average, not the maximum, sets the margin.

One rule came out of this: the word "unlimited" never appears in Premium copy. The cap is real, so the claim would be false.

**How I'll know.** The proxy now logs token counts for every call. If a real session costs less than the estimate, the cap goes up.

#### The first Daily Test

{C1 — Reframe block}
- First framing: The first test takes more than 20 seconds to load.
- Actual problem: Why generate the first test at all?

Every new user meets the same first screen, and it took more than 20 seconds to load. That looks like a latency problem, and my first fix treated it as one: start generating the set in the background the moment the user taps "Get started". It still wasn't fast enough.

The better question was why this set was generated at all. It is the one screen every user sees, so it is where an odd question or a wrong answer key costs the most. Generating it meant a wait, an API call, and an answer key nobody had read.

I wrote the first test by hand instead: five questions, instant, no API call. The background preload I had built that morning was removed the same day.

The saving turned out smaller than it looked. Finishing a test starts preparing the next day's set in the background, so the next day opens instantly. That means every install that never comes back still pays for one generation, about $0.025 at measured token counts `[measured]`.

**How I'll know.** Completion and scores on the fixed set compared with generated ones. The app records which kind of set each test was.

#### A promise the product didn't keep

{C1 — Reframe block}
- First framing: A wrong answer shows no explanation. Missing text.
- Actual problem: The store page promises something the product doesn't do.

On the day of submission I noticed that a wrong Daily Test answer showed the correct answer and nothing else. My first read was a missing piece of text. It wasn't. The Daily Test is graded on the device, and the generated set only carried comments for the wrong answers the model had predicted. Correct answers, skipped ones and any unexpected mistake got no explanation at all.

Meanwhile the App Store description said you see why each answer was right or wrong. So did the first version of this page. I had written that promise twice without checking it against the product.

The fix was one explanation per question, generated in the same call as the questions, under 25 words. That needed more room, so the Daily Test got its own output budget: the worst response went from using 80% of a 2,048-token limit to using 49% of a 3,072-token one `[measured]`. The average explanation dropped from about 29 words to 20. Five of 25 still ran slightly over the limit, which I accepted: nothing depends on the exact length.

{C6 — Explanation budget}

{C9 — Screenshot: daily-test-explanation}

**What it cost.** A Daily Test set now costs about $0.023–0.028 `[measured]`, above my earlier $0.021 estimate. **How I'll know.** I've seen the new explanations on a device only on the hand-written first test so far; the first generated set on a real device is the next check.

---

### 3. Where to ask for money

Placing the paywall produced three decisions, and one mistake.

**After the win, not after the list.** The first test used to end in a paywall card on the result screen, right after the first score and before anything had visibly changed. I moved it. Now the result screen ends in one button, "Start my climb". The user's avatar climbs its first step on Home, and the Premium screen appears about 600 ms later, once. The hypothesis is that the moment after a visible win converts better than the moment after a list of results. It is a hypothesis, not a finding.

{C7 — Day-0 storyboard}

**An exit stays an exit.** A free user who has used the day's practice session lands on a results screen whose only way out was "Back to topics". The obvious move was to make that button open the paywall. I didn't: a button that says one thing and does another is a dark pattern, and someone who wants to leave shouldn't have to get past a sales pitch to do it. Instead, the screen got an offer card showing what Premium adds, with its own "See Premium" button. "Back to topics" stays exactly as it was, underneath.

{C8 — Screenshot: practice-offer-card}

A smaller cut belongs here too. I added a row to the Premium comparison table showing the daily session difference, free versus Premium. On a 375-point-wide phone it pushed the plan cards almost off the screen: their visible part fell from 78 points to about 30 at default text size, and to nothing at large text `[measured]`. I reverted it the same day. Hiding the thing people buy to explain the thing they'd get is the wrong trade. The cost is a real gap: the offer card promises more daily sessions, and the Premium screen can't show it yet.

**The mistake: two variables in one release.** The new first-day paywall shipped in the same release as Monthly Climb, the habit layer. My own gamification spec had warned against exactly this: launched together, their effects can't be separated. There is no earlier baseline to compare against. So when I read first-day conversion after launch, I'll be able to report it, but not to say how much of it comes from the timing. I defined what to build before I defined what I needed to learn.

---

### 4. What I'd do differently

**I fixed measurement and broke it somewhere else.** The first version of this page said measurement should have come first. This time it did: analytics with a written plan, and token logging on every API call, all live before submission. Then I shipped two changes whose effects I wanted to measure in the same release. Instrumentation is necessary, but it isn't the same as a measurable plan.

**Stale documents don't stay in one place.** The first version of this page described a line in my own documents claiming the free tier cost approximately nothing, which had survived after the reasoning behind it was disproved. The same claim survived in the project's README until the day I submitted. A documentation audit after submission found 21 status lines across the docs that no longer matched reality. The fix I've adopted is structural: the current state lives in one document, and old plans get a dated "historical" note instead of line-by-line edits nobody keeps up.

**Make the irreversible decisions early.** The bundle identifier sat as a placeholder for months and surfaced as a launch blocker. Product identifiers can't be renamed once created. The same applied at the end: Apple doesn't let an app drop iPad support after a version ships, so I kept iPad on purpose, because education apps live on school tablets, and locked the app to portrait. The price is Split View on iPad. None of these is hard. All of them are annoying to discover late.

**Reversing a decision is cheaper than defending it.** I cancelled a planned private testing round because seven people had already used the core loop. I cut two advertised but unbuilt features from the purchase screen, because a paid surface listing things that don't exist is both an App Store rejection risk and a lie. I reverted the comparison-table row within a day. Each reversal is written in the project log with its date and the reasoning that replaced the old one.

**How I worked.** AI coding agents wrote the code; my job was the decisions. Any change that involved a judgment call started with a read-only report from the agent (the options, the measurements, the risks) and no code until I'd decided. At submission the project had 883 app tests and 70 server tests. Keeping the decision record is the part I'd repeat without changing anything.

---

### 5. Status, and how I'll know

GrammarLens 1.0 was submitted to App Store review on 24 September 2026, together with its two subscriptions. It is not approved yet. Release is manual, so approval won't publish it on its own.

The first four weeks after release are for reading, not building. The questions:

1. What does a Daily Test and a practice session really cost? The token log replaces every estimate on this page.
2. Do free users who use the daily practice session convert more often than those who don't?
3. Does the hand-written first test perform differently from generated ones?
4. How does conversion differ by where the paywall appeared? Read with the caveat from section 3.

The next product decision is already framed. Instead of every device generating its own Daily Test, one set a day would be generated for everyone, which removes most of the Daily Test's cost. What's still open is how answers get explained, which day boundary to use across time zones, and what happens if the daily generation fails. That decision waits for the token data.

This page will get a results section once there are results.

---

## Part C — Visuals

Priority for Batch 2: C1 (Batch 1), then C3, C5, C4, C2, C6.
Batch 3: C7, C8, C9, depending on which images exist.

### C1. Reframe block (signature component, used 6 times)

Two stacked parts inside one block: "First framing" and "Actual problem".
The first framing is visually subordinate (muted color, lighter weight); the
actual problem is the strongest text in its section, larger or heavier. A
clear directional connection from the first to the second (a rule, an
indent, a connecting line — choose what fits the site). Do not strike through
the first framing: it wasn't wrong to see it, it was incomplete. Labels in
sentence case: "First framing", "Actual problem". On mobile, stays stacked.
This is where the page's visual boldness goes; keep it consistent all 6
times.

### C2. Project timeline

Horizontal on desktop, vertical on mobile. Dates are the sequence, so ordered
markers are appropriate. Data:

| Date | Label |
|---|---|
| 19 Jul | First commit |
| 20–25 Jul | MVP week: first build, interviews, iteration 2 |
| 24 Aug | Onboarding, Home and Premium screen |
| 2 Sep | Free and paid split |
| 6 Sep | API key moved behind a server proxy |
| 14 Sep | First run on a physical iPhone |
| 15 Sep | Paywall leak closed; free tier defined |
| 19 Sep | Monthly Climb moves into the first release |
| 21–22 Sep | Cap 10 → 5, AI permission, fixed first test, paywall after the climb |
| 23 Sep | Merged; first TestFlight build |
| 24 Sep | Submitted to App Store review |

Do not add markers or labels that aren't in this table. The gap between
25 July and 24 August is real; show it with honest spacing, no filler label.
Caption: "About ten weeks from first commit to submission."

### C3. Where the model is called

A three-row diagram, one row per user flow, showing the steps and which
steps call the model. Model calls visually distinct from on-device steps.

| Flow | Steps | Model calls |
|---|---|---|
| First Daily Test | Hand-written questions → answers graded on the device | 0 |
| Daily Test | Model generates questions and explanations → answers graded on the device | 1 |
| Topic Practice | Model generates questions → user answers → model grades and explains | 2 |

Add one dashed annotation on the Daily Test row: "Finishing a test prepares
tomorrow's set in the background." Caption: "Every model call is a cost that
scales with users. The free modes make at most one; the paid mode makes two."

### C4. Free-user monthly cost

Two horizontal range bars (a range, not a single value), same scale, USD per
month, for a free user who opens the app every day for 30 days.

| Bar | Range | Provenance |
|---|---|---|
| Daily Test only | $0.70–0.84 | measured token counts × list price |
| Daily Test + one free practice session a day | $1.72–1.86 | Daily Test part measured, practice part estimated |

Show the estimated portion of the second bar differently from the measured
portion (for example a hatch pattern), with a small legend: "measured",
"estimated". Caption: "The daily free practice session more than doubles
what an engaged free user costs."

### C5. Cap math

A simple line chart. X axis: practice sessions per day, 0 to 10. Y axis:
model cost per month in USD, 0 to 11. One line: cost = sessions × $0.034 ×
30 (so 1 → $1.02, 3.5 → $3.57, 5 → $5.10, 10 → $10.20). Two horizontal
reference lines: "Annual plan, net per month: $3.54" and "Monthly plan, net:
$5.09" (both at 15% commission). Two vertical markers: "Old cap: 10" and
"New cap: 5". Mark the break-even point with the annual line at about 3.5
sessions. The whole cost line is an estimate: style or label it as such.
Caption: "At about $0.034 a session (estimated), the old cap let a heavy
subscriber cost roughly three times what the annual plan brings in."

### C6. Explanation budget (small)

Two horizontal bars, each the full output-token limit, filled to the worst
measured response:

| Version | Limit | Worst response | Headroom |
|---|---|---|---|
| Before explanations | 2,048 | 1,632 | 20% |
| With explanations, own limit | 3,072 | 1,496 | 51% |

Caption: "Five test runs each, measured on the local server."

### C7. Day-0 storyboard

Four screenshots in order, left to right on desktop (horizontal scroll inside
its container on mobile if needed), each with a one-line caption:

1. `day0-1-test` — "A hand-written first test, no loading." Alt: "The first Daily Test, showing a fill-in-the-blank question."
2. `day0-2-result` — "One button: Start my climb." Alt: "First test results with a Start my climb button at the bottom."
3. `day0-3-climb` — "The avatar takes its first step." Alt: "Home screen with the avatar on the first step of the mountain trail."
4. `day0-4-paywall` — "Premium appears once, after the win." Alt: "The Premium screen with monthly and annual plans."

### C8. Offer card

One screenshot, `practice-offer-card`, with caption: "The offer card shows
what Premium adds. Back to topics stays where it was." Alt: "Practice results
screen with a Premium offer card and a Back to topics button below it."

### C9. Explanation

One screenshot, `daily-test-explanation`, caption: "Every answer now comes
with a reason." Alt: "A Daily Test result card showing a wrong answer, the
correct answer and a one-sentence explanation."

---

## Part D — What changed from the current page, and why

Do not restore any of the removed claims below.

- "I built it alone over seven weeks. I planned for one." → about ten weeks
  from first commit (19 July) to submission (24 September). The one-week plan
  is still true of the MVP.
- "Seven people disagreed" now discloses that one interview was a
  self-interview, as the PRD always did.
- The old cost section described unit economics as "derived from the deployed
  service" and, in the same section, "modelled, not measured". The second is
  the accurate one for most figures; every figure is now tagged.
- "My proxy currently discards them" (token counts) is no longer true: token
  logging has run since 21 September.
- "$0.021 per Daily Test" → $0.023–0.028 measured. "$0.63 a month" free user
  → $0.70–0.84, or $1.72–1.86 with the daily free practice session.
- "The explanation of each wrong answer produced inside that same call" was
  true only for predicted wrong answers until 24 September. The new text says
  so openly.
- "$1.43 a month / 72% margin" for a typical premium user is removed: it is an
  estimate built on the old session cap and unmeasured session cost.
- "At a per-device limit of 30 … 14 sessions a day" is removed; the page now
  explains the session cap decision instead.

---

## Part E — Batch 0 decisions (approved)

Approved by the owner after the Batch 0 report. Where Part E conflicts with
Parts A–D, Part E wins.

1. **Layout.** Keep the existing `.row` / `.note` / `.body` grid. On this
   page the aside labels are sentence case via scoped CSS: no all-caps, no
   "01 — X" labels, no "→". The header's meta, status and updated lines go
   in the top aside. Section headings keep their 1–5 numbers (the sections
   really are sequential).
2. **Motion.** The scroll-triggered `.row` fade-in from `Base.astro` is
   switched off on this page only, with scoped styles. The site-wide
   behavior is not touched.
3. **Wide visuals.** Visuals C2–C9 span both grid columns on desktop. On
   narrow screens they scroll inside their own `overflow-x: auto`
   container.
4. **Theme.** The site is dark only. Visuals are built with the Nocturne
   CSS variables for that one theme and tested in it.
5. **Provenance tag.** Uses the existing `.tag .tag-neutral` classes, in
   sentence case.
6. **Cost ranges.** The body copy matches the chart (C4): "from about
   $0.70–0.84 to about $1.72–1.86 a month".
7. **Head meta.** `<title>` follows the site's existing pattern; the meta
   description is derived from the subtitle.
8. **Turkish page.** Content unchanged. One line at the top: "Bu yazının
   güncel sürümü şimdilik yalnızca İngilizce.", linking straight to
   `/products/grammarlens/case-study` (not through `localizeHref`).
9. **Screenshots.**
   - `practice-offer-card` and `day0-4-paywall` were re-shot in the light
     theme and replace the old files. Re-check both against the A3 checks
     (theme, personal information, size) before Batch 3 and report.
   - `day0-4-paywall` was opened from the Premium button on Home. It may
     be used as the fourth storyboard frame (C7) only if it shows neither
     a topic-specific subtitle (such as "Practice <topic>") nor a daily
     session / "a day" row in the comparison table. If either is present,
     do not use it: the storyboard has three frames, the third caption
     becomes "The avatar takes its first step. Premium opens once, right
     after.", and the component is built so a fourth frame can be added
     later. Report which was chosen and why.
   - `daily-test-explanation` comes from the hand-written first test; it
     matches the copy and is used as is.
   - Web-sized copies: `scripts/make-case-study-images.mjs` writes
     `public/img/case-study/grammarlens/<name>.webp`, 600 px wide,
     lowercase `.webp`; `<img>` carries `width`/`height` and
     `loading="lazy"`.
10. **Git.** This brief is committed. `docs/case-study-screenshots/` is
    added to `.gitignore`; the raw PNGs are not committed. The old root
    files `grammarlens-case-study-final.md` and
    `grammarlens-case-study-tr.md` move to `docs/archive/` with `git mv`.
11. **Correction to 9.** The "Practice your weak spots | 1 a day" row ships in 1.0 (the reverted row was "Practice sessions", 1 vs 5), so `day0-4-paywall` is the fourth storyboard frame, captioned "The Premium screen. On day one it opens once, right after the climb." (it was shot from Home, so the caption claims only what is verified); the third caption returns to "The avatar takes its first step."

### Visual revision (owner review)

Decided after the owner reviewed the page at 1280 px. The copy does not
change.

12. **One alignment rule.** Wide visuals (C7 storyboard, C2 timeline, C3
    model calls, C5 cap chart) span both columns: left edge at the aside
    column's left edge, right edge at the body column's right edge. Narrow
    visuals (C4 free cost bars, C6 token budget, C8 and C9 single
    screenshots) sit in the body column, left edge flush with the body
    text. No visual starts anywhere else. Below 768 px everything is one
    column, as before.
13. **Single screenshots (C8, C9).** In the body column, about 280–300 px
    wide, caption below the image and left-aligned, in the same style as
    the storyboard captions. The same thin border on every screenshot.
14. **Body text** on this page is left-aligned (`text-align: left`,
    `hyphens: none`). Other pages are not touched.
15. **Chart data disclosure.** Directly under each caption, in the same
    style, visibly expandable (marker or chevron, hover and focus states,
    keyboard operable). Its label is "Show chart data".
16. **Vertical rhythm.** Every figure has the same space above and below,
    one value taken from the site's tokens. The figure-to-caption gap and
    the caption-to-disclosure gap are also the same everywhere.
17. **Aside section labels** (Summary, Research, … Status) grow to a step
    of the site's type scale above body text (about 20–24 px), sentence
    case, so they read as the section's heading. The header aside's
    meta, status and updated lines stay small.
18. **Consistency pass.** After applying 12–17, any other element whose
    alignment, spacing, caption style or font size stands apart is brought
    under the same rules. The Reframe block (C1) looks the same in all six
    places.

### Layout rebuild

Decided after the owner reviewed the page on `npm run dev`. Where these
conflict with 12–18, these win.

19. **One content column.** Body text, every visual (C2–C9), Reframe
    blocks, captions and "Show chart data" share the same left and right
    edges. Nothing reaches into the aside column, which holds only the
    section labels and the header meta lines; each section label sits on
    the baseline of its body's first line.
20. **Charts are drawn for the column's width** (viewBox, `width: 100%`),
    and no text inside them renders below the caption size (14 px).
21. **Screenshots.** The storyboard (C7) is a 2×2 grid in the body column
    on desktop. Single screenshots (C8, C9) sit in the body column,
    left-aligned, about 280–300 px wide, caption below.
22. **Text alignment.** Body paragraphs follow the site rule (justified,
    hyphenation on, page `lang="en"`); the case study's left-align
    override is removed. Captions, Reframe text, labels and text inside
    charts are left-aligned.
23. **Vertical rhythm.** Space above and below a figure, figure to
    caption, and caption to "Show chart data" use the same tokens
    everywhere.
24. **Mobile (below 768 px).** The aside label sits above the body;
    everything is one column with the body's side gutter. No sideways
    scrolling on the page or in charts: C3 and C5 switch to their own
    stacked, simplified layouts rather than shrinking text; C2 stays
    vertical. The one exception is the storyboard, a scroll-snap row
    where each frame is about 75% of the screen and the next one peeks in
    from the edge. Touch targets are at least 44 px; body text never
    drops below 16 px.
25. **Same result in dev and build.** Page styles never rely on
    stylesheet order: in `astro dev` the site CSS loads before component
    styles, in the build after them, so every page rule must out-rank
    the site rule it overrides by specificity.

### Owner review 2

Where these conflict with earlier items, these win. Copy is unchanged;
only the positions named below move.

26. **Timeline (C2), redesigned.** A vertical, unscaled timeline (order
    only): one continuous vertical line at the left of the body column,
    a dot per event on it, then the date (bold, fixed-width column) and
    the label, all labels starting on one edge. Two groups, each under a
    small title: "July: the MVP week" (19 Jul, 20–25 Jul) and
    "August–September: to the App Store" (the nine events from 24 Aug to
    24 Sep). The line runs unbroken between the groups: no gap, no
    in-between label, no scale, so the unlogged stretch between late July
    and late August is not implied to be idle. The last event (24 Sep) has
    the accented dot and color; the others stay plain. Same layout on
    desktop and mobile, labels wrap in place, no sideways scrolling. The
    events are exactly the C2 table; the caption and "Show chart data"
    stay. Semantic HTML (`<ol>` + CSS) is allowed instead of SVG.
27. **Single screenshots (C8, C9) float beside the text** at 768 px and
    up: `float: left`, 240 px wide, caption under the image inside the
    float, about 32 px of space on the right and the figure spacing token
    below. Body text flows to the right of the image and continues at
    full width below it, keeping the site's justified, hyphenated text.
    Floats are cleared by Reframe blocks, every chart figure, the
    storyboard, subheadings and the section end, so a float never runs
    into the next decision or section. Below 768 px: no float, the image
    centered at about 70% width (at most 280 px) with its caption centered
    below, text after it at full width. If the text beside the image
    gets too narrow (under about 35 characters a line), the float starts
    at a higher width.
28. **Screenshot positions.** C9 (`daily-test-explanation`) moves to
    directly after the Reframe block of "A promise the product didn't
    keep", before "On the day of submission…"; C6 stays after "The fix
    was one explanation per question…" and clears the float. C8
    (`practice-offer-card`) moves to directly before "An exit stays an
    exit.", so that paragraph and "A smaller cut belongs here too…" flow
    beside it; "The mistake: two variables in one release." starts clear
    of it, as the next decision.

### Owner review 3

Where these conflict with earlier items, these win. Copy is unchanged.

29. **One screenshot size.** Every screenshot on the page (the four
    storyboard frames, C8, C9) shows at the same width at any given
    screen width: 300 px from 768 px up, `min(300px, 76vw)` below. Frame,
    corner radius and caption style are the same everywhere. No image is
    shrunk on its own to fit a column; when it doesn't fit, the layout
    changes instead (30, 31).
30. **Storyboard (C7).** When the body column holds two 300 px frames and
    the gap between them: a 2×2 grid, left edge on the body text, each
    caption led by its frame number (1–4) in the caption style.
    Otherwise (narrow tablet widths, and below 768 px): a scroll-snap
    row of same-width frames with the next one peeking in.
31. **Single screenshots (C8, C9)** float as in E27, now 300 px wide, and
    only when at least about 320 px of text column remains beside them.
    Otherwise no float: the image stays 300 px (or the mobile width),
    left-aligned, caption below, text continuing underneath. This
    replaces E27's centered 70% mobile layout.
32. **Section 3 flow:** intro → "After the win" → storyboard → C8 floated
    before "An exit stays an exit." → "A smaller cut belongs here too…"
    beside it → "The mistake: two variables in one release." clearing
    the float at full width. A more balanced placement may be tried
    without breaking 29 or reordering the text.

### Content updates

33. **Small Business Program (26 September 2026).** Apple approved GrammarLens for the Small Business Program in September 2026; the cap-margin paragraph now states the 15% commission as fact instead of pending (EN and TR).
