# GrammarLens — case study copy (final)

Target length ~950 words, three sections. Every fact below is traceable to the
project's own documents (PRD v0.1 and v2, roadmap, build log, design audit).
Nothing has been invented to fill a gap.

---

## Lede

GrammarLens is an English grammar practice app for iOS. It generates exercises
on demand, scores what you write, and explains the mistake in plain language
instead of naming a rule at you.

I built it alone over seven weeks. I planned for one. What follows is not a
feature tour — it's three decisions that changed the product, and what each one
cost me to learn.

---

## 1. The assumption research broke

I started as the user. During IELTS preparation I kept making the same handful
of mistakes — gerund versus infinitive, modals, modal past forms — and I could
produce a correct sentence by feel without being able to explain why it was
correct. Fluency from immersion, grammar knowledge left implicit. IELTS asks for
the explicit kind.

That gave me a problem statement. It did not give me a product, and my first
version encoded an assumption I hadn't noticed I was making: that naming the
grammar rule is a feature. The app surfaced rule names as primary labels.

Seven people disagreed. Across four interviews and three usability tests, the
pattern was consistent. One participant pointed out that telling him to "use
Past Perfect Continuous" meant nothing to him — despite using that structure
daily. Another said terms like "noun clause" were harder than the mistake they
described.

So I inverted it. Plain-language explanation first, rule name demoted to a
secondary caption for anyone who wants it. In the three usability tests that
followed, all three participants praised the plain-language feedback without
being asked about it. It is the strongest and most repeated finding in the
project.

The same rounds killed a second assumption. My question mix was mostly
fill-in-the-blank and multiple choice — the formats that are easiest to build
and score. Five of seven people rejected them. One sentence explains why better
than my own reasoning did: with options, she said, she would have guessed;
without them, she had to prove she actually knew.

Free-text answers cost more to score and are harder to get right. I kept them
anyway, because the evidence said the cheap format was measuring the wrong
thing.

---

## 2. What cost decided

GrammarLens calls a language model for every exercise it generates and every
answer it scores. That makes cost a product constraint, not an engineering
detail, and it changed several decisions.

The unit economics, derived from the deployed service rather than guessed:

- A topic practice session — generation plus scoring — costs about $0.034
- A daily test generation costs about $0.021
- A typical premium user costs about $1.43 a month against $5.09 net revenue,
  a margin of roughly 72%
- A free user who opens the app every day costs about $0.63 a month and
  generates nothing

That last line is the one that matters. A free tier that scales cost with users
and revenue with nobody is not a growth strategy, it's a leak. So the free tier
was designed as a structurally different mechanic rather than a limited version
of the paid one: the daily test uses a single generation call and no
model-based scoring at all, with the explanation of each wrong answer produced
inside that same call rather than in a second one.

Cost also set the ceiling. The proxy enforces a per-device and a global daily
cap, and the cap is reserved *before* the upstream call — it counts attempts,
not successes, which is the only version that actually limits spend. At a
per-device limit of 30, a single installation could run roughly 14 sessions a
day and cost about $30 a month against $5.09 of revenue. I lowered it to 15,
which is still about twice any real usage pattern and caps the worst case
between $8 and $15. The global limit of 300 binds total spend to roughly $300
a month until I choose to raise it.

The honest caveat belongs here rather than in a footnote: these figures are
modelled, not measured. The system prompt sizes are real, read from the deployed
code. The rest is estimated. Anthropic returns exact token counts on every
response and my proxy currently discards them. Logging those two numbers would
replace this entire section with data, and I haven't done it.

---

## 3. What I'd do differently

**Measurement should have come first.** Every unmeasured bet in this project
traces back to the same missing layer. I deferred instrumentation because it
felt like overhead before launch; the result is that a section of this case
study has to open with "estimated."

**Cost estimates should have been checked against the deployed reality
sooner.** One of my pricing calculations ran on the wrong model price for weeks,
and a "free tier costs approximately nothing" line survived in my own document
after the reasoning behind it had already been disproved elsewhere in the same
document.

**Irreversible identity decisions should have been made on day one.** The bundle
identifier sat as Flutter's `com.example` placeholder for months and surfaced as
a launch blocker. Product identifiers and entitlement names have to match App
Store Connect exactly and cannot be renamed once created — none of which is
hard, all of which is annoying to discover late.

**Reversing a decision is cheaper than defending it.** I cancelled a planned
private testing round because seven people had already used the core loop and a
second small round would only repeat what I knew. I reversed the launch ordering
so that the one validated thing shipped before the unvalidated bets. I cut two
advertised-but-unbuilt features from the purchase screen, because a paid surface
listing things that don't exist is both an App Store rejection risk and a lie.

Each of those is written down in the project log as a deliberate reversal, with
the date and the reasoning that replaced the old one. Keeping that record is the
part I'd repeat without changing anything.
