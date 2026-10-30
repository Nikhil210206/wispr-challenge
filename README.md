# wispr-challenge

Private workspace for my application to the Wispr Flow India hiring challenge (India Growth Intern).
Submissions close **Wed 4 Nov 2026**. I'm submitting on **Tue 3 Nov by 21:00 IST**.

The portfolio itself is built in **Emergent, by voice, with Wispr Flow**. This repo holds everything
around it: the claims ledger, the evidence, the build log, QA, the video script and the form answers.

**Start here: [RUNBOOK.pdf](RUNBOOK.pdf).** It has every step, day by day, with the exact lines to say.
It's generated from the files in this repo; rebuild it after any change with
`python3 scripts/build_runbook.py`.

## Status

| Deliverable | State |
|---|---|
| Toolkit form sent (Emergent credits, Flow account email) | ☐ |
| Flow uncapped (student offer or Pro trial) | ☐ |
| Voice baseline recorded (`build-log/voice-log.md`) | ☐ |
| Pre-registration committed (`evidence/hypotheses.md`) | ☐ |
| Emergent: credits arrived, Publish enabled | ☐ |
| Portfolio v0 published | ☐ |
| Portfolio v1 (all sections) | ☐ |
| Evidence E-1 to E-4 done | ☐ |
| Video recorded and uploaded (unlisted) | ☐ |
| Form submitted (screenshot in `application/`) | ☐ |
| LinkedIn/X post live | ☐ |

## Links

- Challenge: https://wispr-seven-day-challenge.wispr-flow-5934.chatgpt.site/
- Portfolio: `TBD.emergent.host` (the subdomain can never be renamed, so choose it once)
- Video: TBD
- Plan: `~/.claude/plans/users-nikhil-documents-wispr-flow-chall-linear-patterson.md`

## Rules

1. **No number ships without a row in [CLAIMS.md](CLAIMS.md)**: a source, n and the date checked.
2. **Anything not done is labelled "not run".** Nothing is estimated or made up.
3. **Every portfolio code change happens in Emergent, spoken with Flow.** Claude writes briefs, not
   portfolio code. What I actually said goes in `build-log/prompts/`.
4. **Raw data, recordings and anything personal stay out of git** (see `.gitignore`). Never commit the
   Skipp proxy IP or anyone's contact details.

## Who did what

| Piece | How | Disclosed on the site as |
|---|---|---|
| Portfolio code | Emergent; every step spoken by me in my own words from a short brief | "Built in Emergent by voice; planned with an AI assistant" |
| Site copy | Drafted by Claude from my repos and resume; I confirm the truth-check lines and approve it | "Planned with an AI assistant, which drafted the copy from my projects" |
| Exact strings (tokens, hex values, URLs, content file) | Flow Snippets or a paste | Part of the "where voice broke" story |
| Evidence tooling, QA, analysis | Claude Code in this repo, instructed by voice | "Tooling built with Claude Code" |

## Layout

```
RUNBOOK.pdf                start here: every step and every line to say
runbook/                   the runbook's own sections (intro, day by day, tests, troubleshooting)
scripts/build_runbook.py   rebuilds RUNBOOK.pdf from the files below
CLAIMS.md                  every public claim, its status and source
content/
  brain-dump-questions.md  what to answer out loud on Day 1
  raw/                     dictated transcripts, verbatim
  site-copy.md             approved copy, section by section
  intents.json             what visitors can ask, plus the 40-utterance test set
evidence/
  hypotheses.md            pre-registration: commit before any data
  e1-diary.md              exam-week voice diary
  e2-tanglish/             phrases, outputs, scoring
  e3-onboarding.md         Android onboarding audit
  e4-voc/                  public voice-of-customer scan
  e5-protocol.md           campus trial, designed, not run
  results.md               the only source for numbers in the video and on the site
build-log/
  briefs.md                Claude's brief for each Emergent step
  prompts/                 what I actually said, per step
  voice-log.md             what voice did well, where it broke, what I changed
qa/                        checklist, reference matcher, Playwright smoke test
video/                     script and shot list
application/               form answers, $3,000 answer (char-counted), post
assets/                    screenshots (Skipp dashboard, Flow Hub)
```
