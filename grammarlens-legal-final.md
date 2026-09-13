# GrammarLens — Privacy, Terms & Support (final copy)

Last updated date on all three pages: **13 September 2026**

URLs (unchanged, trailing slashes deliberate — compiled into the shipped app):

- `https://ahmettayfur.com/products/grammarlens/privacy/`
- `https://ahmettayfur.com/products/grammarlens/terms/`
- `https://ahmettayfur.com/products/grammarlens/support/`

Verified facts this copy is based on:

- Proxy logs no user content; error logs retained ~3 days (Cloudflare Workers Logs, free plan). No Logpush.
- KV quota counters carry a 48-hour TTL and delete automatically.
- Firebase Analytics and Crashlytics are live. Three custom events, none carrying personal data.
- RevenueCat is configured and connected.
- Controller: Ahmet Tayfur, Istanbul, Turkey. Contact: support@ahmettayfur.com.
- Minimum age 13. Governing law: Turkey. Support response: 5 business days.

---

# 1. Privacy Policy

**Last updated: 13 September 2026**

## The short version

GrammarLens has no accounts, never asks for your email, and shows no ads. Your
name, your learning goal and your entire practice history stay on your phone.
What leaves your device is the practice text itself — the sentence you typed and
the exercise it belongs to — which goes to our server and then to Anthropic so
that Claude can generate exercises and explain your mistakes. Nothing you write
is used to train an AI model.

## Who is responsible

GrammarLens is made by Ahmet Tayfur, Istanbul, Turkey. For anything in this
policy, write to support@ahmettayfur.com.

## What stays on your device only

The following never leaves your phone. It is stored in the app's local database
and is removed when you delete the app.

- Your first name and your stated learning goal, from onboarding
- Your chosen avatar and your app settings, including the theme
- Every practice session, question, answer and score
- Your weak-spot profile — which grammar topics you get wrong and how often

## What is sent when you practise

When you start an exercise or submit an answer, the app sends a small,
structured request to our own server at `api.ahmettayfur.com`, which then calls
Anthropic's Claude API. The request contains:

- The name of the operation (generate a practice set, generate a daily test, or
  score answers)
- A grammar topic identifier and the number of questions
- Which grammar topics you have been getting wrong, as topic identifiers and
  counts
- For scoring: the exercise prompt and **the answer you typed**
- An anonymous device identifier, used only for daily usage limits (see below)

That is the complete list. The app does not send your name, your learning goal,
your practice history, your contacts, your location, or any advertising
identifier.

## The anonymous device identifier

The app generates a random identifier the first time it runs. It is not your
device's serial number, advertising ID, or any other hardware or system value —
it is a random string the app makes up, and it identifies nothing about you or
your phone.

It exists for one reason: to enforce a daily cap on how many exercises a single
installation can generate, which is what keeps the service affordable to run. It
is stored on our server only as a counter for the current day, and it is **never
sent to Anthropic** — the request that reaches Anthropic does not contain it.

Deleting and reinstalling the app produces a new identifier.

## What our server keeps

Our server does not store your practice text. It passes the request to Anthropic
and returns the result.

Two things are kept, briefly:

- **Usage counters.** The daily cap is counted against the anonymous identifier
  and the calendar day. These counters delete themselves automatically 48 hours
  after they are written. They are not a record of what you practised.
- **Error logs.** When something goes wrong — the AI service is unreachable, or
  returns something the app cannot read — our server records the failure so the
  problem can be found and fixed. These records do not contain the text you
  wrote. They are retained for roughly three days by our hosting provider,
  Cloudflare, and are then deleted.

## Anthropic as a processor

Your typed answers and the exercise text are processed by Anthropic in order to
generate exercises and produce feedback. Under Anthropic's commercial terms, API
inputs and outputs are **not used to train models**, and are retained for a
limited period under Anthropic's own data retention policy. See Anthropic's
privacy policy at https://www.anthropic.com/legal/privacy for the current terms.

## Analytics and crash reporting

GrammarLens uses Google's Firebase Analytics and Firebase Crashlytics to
understand how the app is used and to find crashes.

**What we send deliberately.** Three events, and nothing else:

- That onboarding was completed
- Which mode you opened (daily test, topic practice, or the premium screen)
- That a practice session finished, with the topic identifier and how many
  questions it had

None of these contain your name, your learning goal, the sentences you write, or
any of your answers.

**What Firebase collects automatically.** Independently of the events above,
Firebase records a randomly generated app instance identifier, your device model
and operating system version, your app version, your approximate region and
language, and session counts and durations. Crashlytics additionally records
technical details about a crash when one happens — what the app was doing and
where the failure occurred.

This is not linked to your identity, and we do not use it to track you across
other apps or websites. If you would rather not send this, iOS settings let you
limit app tracking and diagnostics at the system level.

## Subscriptions

GrammarLens Premium is sold through Apple's App Store. **We never see your
payment details** — your card, your Apple ID and your billing address stay with
Apple.

To know whether your subscription is active, the app uses RevenueCat, a
subscription management service. RevenueCat receives an anonymous app user
identifier, the purchase and renewal status of your subscription, and basic
device and operating system information. It does not receive your name, your
answers, or your practice history.

## What we do not do

- No advertising, and no advertising identifiers
- No selling or sharing of personal data with anyone
- No tracking of you across other apps or websites
- No account, no password, no email address required to use the app

## Keeping and deleting data

- Everything stored on your device is deleted when you delete the app.
- Usage counters on our server delete themselves after 48 hours.
- Error logs are deleted after roughly three days.
- We do not hold a copy of your practice history, so there is nothing for us to
  send you or delete on request.
- Analytics and crash data are held by Google under Firebase's own retention
  settings.

## Children

GrammarLens is not directed at children and is intended for users aged 13 and
over. We do not knowingly collect personal data from children.

## Your rights

Depending on where you live, you may have the right to access, correct, delete
or export your personal data, to object to processing, or to complain to a
supervisory authority. Because the app holds your practice data on your own
device and we do not maintain an account for you, most of these rights you can
exercise directly — deleting the app deletes the data. For anything else, write
to support@ahmettayfur.com.

## Changes

If this policy changes in a way that affects what we do with your data, we will
update the date at the top of this page and, where the change is significant,
note it in the app.

## Contact

support@ahmettayfur.com

---

# 2. Terms of Service

**Last updated: 13 September 2026**

## 1. Agreement

By downloading or using GrammarLens ("the app"), you agree to these terms. If
you do not agree, do not use the app. The app is provided by Ahmet Tayfur,
Istanbul, Turkey.

## 2. What GrammarLens is

GrammarLens is an English grammar practice app. It generates exercises and
explains mistakes using an AI language model.

**AI-generated feedback can be wrong.** Explanations, corrections and scores are
produced automatically and are not reviewed by a person. GrammarLens is a
practice tool, not a substitute for a teacher, a proofreader, or professional
language certification. Do not rely on it for anything where being wrong has a
cost.

## 3. Who can use it

You must be at least 13 years old to use GrammarLens.

## 4. Free use and usage limits

Part of GrammarLens is free to use. Because each exercise is generated on demand
and costs money to produce, the app applies a daily limit to how many exercises
a single installation can generate. This limit may change over time.

## 5. Premium subscriptions

GrammarLens Premium is an auto-renewing subscription sold through the Apple App
Store.

- Current prices and the free trial length are shown in the app before you
  confirm any purchase, and vary by country.
- Payment is charged to your Apple ID at confirmation of purchase.
- A subscription renews automatically unless you cancel at least 24 hours before
  the end of the current period. Your Apple ID is charged for the renewal within
  24 hours before the period ends.
- If a free trial is offered, any unused part of it is forfeited when you buy a
  subscription.
- You manage and cancel your subscription in your Apple ID account settings, not
  in the app. Deleting the app does not cancel a subscription.
- Refunds are handled by Apple under Apple's own policy. We cannot issue refunds
  for App Store purchases.

## 6. Acceptable use

Do not use GrammarLens to break the law, to attempt to extract or misuse the
underlying AI model, to send content you do not have the right to send, or to
work around the app's usage limits — including by automating requests or
tampering with the app or its server.

## 7. Availability and changes

We may change, suspend or discontinue any part of GrammarLens, including
features that are currently free. The service depends on third parties (Apple
and Anthropic) and may be unavailable when they are.

## 8. Termination

We may suspend access if these terms are broken. You may stop using the app at
any time by deleting it; see section 5 for cancelling a subscription.

## 9. No warranty

GrammarLens is provided "as is", without warranties of any kind, to the extent
permitted by law. We do not warrant that it will be uninterrupted, error-free,
or that its feedback will be accurate.

## 10. Limitation of liability

To the extent permitted by law, we are not liable for indirect or consequential
loss, and our total liability is limited to the amount you paid for GrammarLens
in the twelve months before the claim.

## 11. Governing law

These terms are governed by the laws of Turkey, and disputes are subject to the
courts of Istanbul, Turkey. This does not remove any mandatory consumer rights
you have where you live.

## 12. Contact

support@ahmettayfur.com

---

# 3. Support

**Last updated: 13 September 2026**

## Getting help

Write to support@ahmettayfur.com. Include your device model and iOS version — it
usually saves a round trip. Expect a reply within five business days.

## Common questions

**How do I cancel my subscription?**
In iOS Settings, tap your name, then Subscriptions, then GrammarLens, then
Cancel Subscription. Cancelling in the app is not possible — Apple handles all
subscriptions. Deleting the app does not cancel it.

**I subscribed but the app says I am not Premium.**
Open the app, go to Settings and tap Restore Purchases. If that does not work,
make sure you are signed in to the same Apple ID you subscribed with, then write
to us.

**Was I charged after the free trial?**
The trial converts to a paid subscription unless you cancel at least 24 hours
before it ends. Refunds are handled by Apple: report a problem at
https://reportaproblem.apple.com.

**The app says I have reached my daily limit.**
Each installation can generate a limited number of exercises per day, which is
what keeps the service running. The limit resets at midnight UTC.

**I think the app marked my correct answer as wrong.**
It happens — feedback is AI-generated and is not always right. Send us the
sentence and what you typed and we will look at it; that is how the scoring gets
better.

**Does GrammarLens work offline?**
No. Exercises are generated on demand, so an internet connection is required.
Your past sessions and progress are stored on your device and are readable
offline.

**How do I delete my data?**
Everything the app knows about you is on your phone. Deleting the app deletes it
all. There is no account to close.

**What is free and what needs Premium?**
The app shows the full comparison on its Premium screen, and it always reflects
what exists today — nothing is listed that is not built.

## Privacy and terms

Privacy Policy · Terms of Service
