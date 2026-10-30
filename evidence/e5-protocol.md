# E-5 Campus trial: "Talk, don't type: 72 hours at SRM"

**Status: designed 29 Oct 2026, not run.** I have exams every day until 4 Nov. It can run between 5 and
19 Nov. It will be reported only if it actually runs, with whatever it finds, including zero.

## Question

Once an Indian student actually tries voice dictation for real tasks, does it stick? And which breaks
it first: setup, social awkwardness, or language?

## Hypotheses (fixed before any data)

- **H1, setup.** On Android, the biggest single drop is between "installed" and "first successful
  dictation". *Falsified* if another step loses more people.
- **H2, use case.** By Day 3, more people repeat messaging unprompted than academic writing.
  *Falsified* if academic writing ≥ messaging.
- **H3, language.** Code-mixed Tamil-English is the most-cited failure. *Falsified* if another reason
  is cited more.
- **H4, awkwardness (directional only).** People who rate "dictating in front of others" 4 or 5 out
  of 5 at the start report less unprompted use on Day 3.

## Who and how (no spam, no incentives)

- 18+ SRM students who opt in.
- **Channels:**
  - 1:1 messages to people I know;
  - community leads sharing one message, with their permission;
  - one post of my own;
  - class or hostel groups only with an admin's written yes.
- **Never:**
  - group blasts;
  - anything inside Skipp;
  - Skipp user data;
  - any suggestion that SRM, Wispr Flow or Emergent is involved.

## What participants do

1. Open a Google Form. Page 1 is consent: who I am, what this is, that I'm not affiliated, that it's
   voluntary, 18+, what's collected, how to withdraw. It also says: Flow processes audio in the cloud;
   read its privacy settings, and never dictate passwords or OTPs.
2. Baseline questions: phone, current voice-typing use, awkwardness 1–5, the languages they text in.
3. Install Flow (official link), optionally signing up with their SRM email. Note whether a student
   offer appears.
4. Within 72 hours: one real WhatsApp message they'd have typed anyway; one paragraph of notes, an
   assignment or an email; one Tamil-English message.
5. A three-tap check-in on Day 1, and a 2-minute survey on Day 3.

## Day-3 survey (8 questions)

1. Did you install Flow? (yes / stopped at ___ / no, and why)
2. Which tasks did you do?
3. For each: send-as-is / small edit / retyped
4. In the last 24 hours, did you use Flow for anything that wasn't one of my tasks? If so, what?
5. Where did it fail? (setup / wrong words / language mixing / noise / awkward around others / battery or
   data / other)
6. Best use case, in one line (optional)
7. Did the student offer apply with your SRM email?
8. May I quote you? (first name / anonymous / no)

## Funnel and how each step is measured

| Step | Source | Type |
|---|---|---|
| Invited | My log, per channel | Count |
| Clicked | Prefilled form links per channel | Measured |
| Signed up | Form responses by channel | Measured |
| Installed | Day-1 and Day-3 answers | Self-report |
| First dictation | Day-1 answers | Self-report |
| Unprompted use on Day 3 | Survey Q4 | Self-report |

## Decision rule

- **40% or more** of those who completed a first dictation report unprompted use on Day 3: voice sticks
  once tried, so test distribution next (the campus referral loop).
- **Otherwise:** the most-cited failure decides the next test:
  - setup → onboarding;
  - language → a language-readiness gate;
  - awkwardness → private-use positioning.

## Privacy

- No names required.
- Optional contact details for reminders only, deleted 14 days after the trial.
- No dictated content is collected.
- Only aggregates are published.
- Quotes need opt-in.
- Raw exports go in `data/`, which is never committed.
