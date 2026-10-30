# E-4 Public voice-of-customer scan: method

**Who:** Claude reads and codes; Nikhil hand-checks 20 items picked at random.

**Goal:** what do Indian users publicly say about Wispr Flow, grouped into themes and counted?

## Sources and rules

- Only pages anyone can read **without logging in**, read the way a person would read them.
- No scraping tools, no APIs, no bulk downloads. If a site blocks access or its terms forbid automated
  reading, skip it and note that it was skipped.
- Starting points:
  - the Google Play listing in the India store view (`gl=IN`);
  - public Reddit threads that mention Wispr Flow in an Indian context;
  - other public review pages found by search.
- **Indian user** means the review itself shows it: the India store view, ₹ prices, Hinglish or Tamil,
  an Indian city or college, an Indian bank or app. Unclear items are coded `country_signal = unclear`
  and reported separately.
- **No usernames, no profile links, no verbatim quotes longer than a few words.** Each item is
  summarised in my own words.
- Window: posts from 2026 where a date is shown. Up to about 150 items.

## Codebook (an item can have more than one theme)

| Theme | Covers |
|---|---|
| `language_accent` | Indian accent, Hindi or Hinglish, Tamil or other Indian languages, code-mixing |
| `android_setup` | Install, permissions, keyboard or bubble setup, getting it to work in an app |
| `accuracy_general` | Wrong words not tied to language (names, jargon, noise) |
| `latency_reliability` | Slow, crashes, stops listening, needs internet |
| `pricing_value` | Price, free-plan limits, ₹ pricing, worth paying |
| `privacy_trust` | Data, recording, screen access, trust |
| `use_case_praise` | What it's good for: messaging, email, notes, code, writing |
| `other` | Anything else, with a short note |

## Agreement check

Claude picks 20 items with a fixed random seed. Nikhil codes them **without looking at Claude's codes**,
in `check.csv`. We report the share of items where the main theme matches. If it's below 70%, the
codebook is unclear: fix it and recode, or publish the counts as "unchecked".

## What gets published

- Total items, by source and by `country_signal`.
- Theme counts and shares, with n.
- Date range and the agreement rate.
- Two or three paraphrased examples.
- The limitations listed in `../hypotheses.md`.
