# Pre-registration: exam-week evidence

Written 29 Oct 2026, before any data was collected. **Commit this file before running E-1 to E-4.**
The commit timestamp is the pre-registration. Results are judged against what is written here, not
against what I'd like them to say.

## Question

For an Indian student with no spare time, where does voice dictation actually help, and what breaks
first: setup, the places you can't speak, or code-mixed language?

## What's measured

| Part | Subject | n | Evidence type |
|---|---|---|---|
| E-1 Exam-week voice diary | Me, 29 Oct to 3 Nov | 1 | Flow's own stats (measured) + my daily line (self-report) |
| E-2 Tanglish self-test | Me; 12 fixed phrases in Flow and in Gboard voice typing | 1 speaker × 12 phrases × 2 tools | Manually checked against a reference |
| E-3 Android onboarding audit | My phone (and optionally one family member's, with their OK) | 1–2 devices | Measured from a screen recording |
| E-4 Public voice-of-customer scan | Public reviews and posts about Wispr Flow from Indian users | up to ~150 | Public, re-checkable; 20 items hand-checked |
| E-5 Campus trial | SRM students | 0 | **Designed, not run** (see `e5-protocol.md`) |

## Hypotheses

- **H1 (E-1).** Voice saves me the most time on messages and notes. It fails most often on code-mixed
  speech and in places where I can't speak aloud (library, exam hall, a shared room).
  - *Supported* if messages and notes are the top uses by word count or by days used, and the top
    failure reason is language or "couldn't speak here".
- **H2 (E-2).** Flow produces a send-as-is result for **fewer than 6 of 12** Tanglish phrases.
  - *Falsified* at 6 or more.
  - Gboard is reported alongside, with no hypothesis about which tool wins.
- **H3 (E-3).** Going from installing Flow to the first successful dictation on Android takes more steps
  than starting Gboard voice typing (which comes preinstalled). The step most likely to lose someone is
  a permission or keyboard-setup screen.
  - *Supported* if the step count is higher, and the slowest or most confusing step is a
    permission or setup screen.
- **H4 (E-4).** Language and accent is the most common complaint theme among Indian reviewers, and
  Android setup is second.
  - *Falsified* if another theme ranks first.

## What each result changes (decided now)

- **E-2: 6 or more send-as-is.** Lead my Wispr ideas with regional creators (F2).
- **E-2: 3 to 5.** Market only English-dominant code-mixing for now.
- **E-2: fewer than 3.** Regional campaigns wait: "fix before marketing". The phrase set goes to the
  product team.
- **E-3: setup is the friction.** Lead with the Android "first message home" activation test (F3).
- **E-4.** The top theme becomes the insight line on the matching Wispr idea card.

## Limitations (these will be published with the results)

- E-1 to E-3 have n = 1, and the subject is me, the person who wants the result to look good.
- E-2 uses phrases I wrote, spoken by one speaker in one accent, in a quiet room.
- E-4 public reviews skew toward strong opinions, aren't a random sample, and "Indian user" is inferred
  from the review itself (₹, Hinglish, Indian place names, the India store page).
- I have no access to Wispr Flow's internal data, so nothing here estimates its real funnel.
