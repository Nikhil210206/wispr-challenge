# Claims ledger

Every number or factual claim that appears on the site, in the video, in the form or in the post must
have a row here. If it isn't here, it doesn't ship.

**Status:** ✅ verified from a primary source · 🟡 supplied by me or a third party, not yet verified ·
🔴 wrong or unsupported, never use · 🧪 planned, not yet a result.

Last full check: 29 Oct 2026.

## About me and my work

| ID | Public wording | Status | Source | Checked |
|---|---|---|---|---|
| S1 | Skipp is live for SRM students: attendance, marks, timetable, leave planner, grade forecast. | ✅ | skipp.life; `Skipp/README.md` | 29 Oct |
| S2 | Built solo since 21 Jul 2026; 249 commits as of 28 Oct. | ✅ | `git log` in the Skipp repo | 29 Oct |
| S3 | On a typical day in the last week, 7–14 people opened Skipp (23–29 Oct). | 🟡 | My Vercel summary; screenshot to `assets/skipp/` | 29 Oct |
| S4 | Last 30 days: 261 visitor-days, 2,118 page views; 84% of visits on phones. | 🟡 | Same | 29 Oct |
| S5 | Over 92% of visits are direct (home screen or bookmark); the rest come from Google, Instagram and WhatsApp. | 🟡 | Same | 29 Oct |
| S6 | Since launch: 1,642 visitor-days. Vercel resets its visitor ID daily, so a returning student counts once per day. The number of distinct students is unknown, by design. | 🟡 | Same; [Vercel docs](https://vercel.com/docs/analytics) | 29 Oct |
| S7 | The India proxy handled 3,858 Student Portal requests in 5 days. | 🟡 | My proxy summary. Never publish the IP. | 29 Oct |
| S8 | Skipp never stores a password on a server; credentials are encrypted on the device (AES-GCM, non-exportable key). | ✅ | `Skipp/README.md` Privacy section | 29 Oct |
| S9 | SRM's Student Portal blocks foreign servers, so Skipp routes those calls through a server in India. | ✅ | `Skipp/AGENTS.md` §4 | 29 Oct |
| S10 | Skipp lets students save their week as a picture. | ✅ | `Skipp/README.md` ("save the whole week as a picture") | 30 Oct |
| A1 | Allotiq places every request at once; on the brief's example, first come, first served placed 2 of 3 and Allotiq placed 3 of 3. | ✅ | Allotiq README | 30 Oct |
| A2 | OneClick turns a vague phone complaint into a verified one-tap fix; built at the Samsung PRISM GenAI Hackathon 2026. | ✅ | Old site; resume | 30 Oct |
| A3 | WSF: a women's safety app with on-device audio threat detection; a team project. | ✅ | Resume; WSF repo | 30 Oct |
| K1 | Wispr Flow has a referral program. | ✅ | docs.wisprflow.ai, "Wispr Flow Referral Program" article | 30 Oct |
| D1 | Drishti is a working prototype of a voice web agent for blind users, in 11 Indian languages, built on Sarvam. | ✅ | `Drishti/README.md` | 29 Oct |
| D2 | Latest fresh live evaluation: 35/40 tasks, 0 safety incidents. | ✅ | `Drishti/docs/phase-1.md` | 29 Oct |
| D3 | A recorded replay scored 40/40, but a fresh live run on 5 Oct scored 32/40. I publish the live number. | ✅ | `Drishti/docs/phase-1.md` | 29 Oct |
| D4 | For spoken yes/no in many languages, a simple keyword gate scored 47/50 with 0 unsafe "yes", vs 31/50 with 9 unsafe for a multilingual model. | ✅ | Drishti commit "Spike 5" | 29 Oct |
| D5 | Not yet tested with blind users. | ✅ | No sessions on record | 29 Oct |
| R1 | Recoup chooses how to recover a failed payment. On a **synthetic** benchmark of 12,004 cases, choosing the action by failure cause recovered about 5× more than a fixed retry (+512%). | ✅ | `Recoup/README.md`, `EVALUATION.md` | 29 Oct |
| R2 | A 20-line rule beat my machine-learning model at picking the right action: 9 of 11 failure causes vs 3 of 11. | ✅ | `Recoup/ARCHITECTURE.md`, `INCIDENTS.md` | 29 Oct |
| R3 | Contacting everyone "recovers" 44% but only causes 22%; a naive dashboard overstates impact about 2× (simulation). | ✅ | `Recoup/README.md` | 29 Oct |
| R4 | Two real recoveries end to end on Razorpay **test mode**. | ✅ | `Recoup/docs/evidence/` | 29 Oct |
| R5 | An early version credited itself with a recovery it hadn't caused; I added `matched_by` so the trail shows why a payment counts. | ✅ | `Recoup/docs/evidence/README.md` | 29 Oct |
| O1 | 93 merged pull requests (59 in other people's repos) and 46 PRs reviewed, as of 29 Oct 2026. | ✅ | GitHub search API, 29 Oct | 29 Oct |
| O2 | As FitYou's maintainer, I merged 65 pull requests from other contributors. | ✅ | GitHub search: `repo:Nikhil210206/FitYou is:pr is:merged -author:Nikhil210206` | 29 Oct |
| O3 | Vision2Web 2026: Echo qualified in round one; Allotiq was the finals project, 2nd place. | 🟡 | Your answer (30 Oct) plus the resume ("2nd Place"). 2nd place confirmed 30 Oct. The Allotiq README still says "Winner": change it after submitting. | 30 Oct |
| L1 | Start 9 Dec 2026, after end-semester exams (25 Nov–7 Dec); full time through next semester; relocating to Bangalore. | 🟡 | Your answers (29–30 Oct). Confirmed with the HOD only after an offer. | 30 Oct |
| O4 | CGPA 9.21; Amazon ML Summer School 2026; Samsung Innovation Campus; hackathon placings; certifications | 🟡 | Resume. Use only inside the squeezed resume. | 29 Oct |

## About Wispr Flow and the market

| ID | Public wording | Status | Source | Checked |
|---|---|---|---|---|
| W1 | India was 14% of Wispr Flow's installs but about 2% of in-app revenue (Oct 2025–Apr 2026, Sensor Tower). | ✅ | [TechCrunch, 9 May 2026](https://techcrunch.com/2026/05/09/voice-ai-in-india-is-hard-wispr-flow-is-betting-on-it-anyway/) | 29 Oct |
| W2 | India is Wispr's second-largest market; growth went from about 60% to about 100% month on month after the India launch campaign (CEO). | ✅ | Same | 29 Oct |
| W3 | India pricing ₹320/month on annual plans; the aim is ₹10–20/month to reach beyond urban professionals. | ✅ | Same | 29 Oct |
| W4 | In India usage is about 50:50 desktop to mobile (US about 80:20); Android launched in 2026. | ✅ | Same | 29 Oct |
| W5 | Students and older users are adopting it, older users often onboarded by younger family members; use in WhatsApp and social apps is growing. | ✅ | Same | 29 Oct |
| W6 | Hinglish came first; switching between English and more Indian languages is planned within 12 months. | ✅ | Same | 29 Oct |
| W7 | Free plan: 2,000 words/week on desktop; "limited weekly use" on mobile. | ✅ | [wisprflow.ai/pricing](https://wisprflow.ai/pricing) | 29 Oct |
| W8 | Wispr's earlier India growth job: "5-8 different channels" in 6 months; "test 10 things, kill 7, scale 3". | ✅ | [Built In listing](https://builtin.com/job/growth-marketer-india/8484117) (removed Apr 2026) | 29 Oct |

## Never use (wrong or unsupported)

| ID | Claim | Why | Replace with |
|---|---|---|---|
| X1 | "Recoup's rules beat the LLM, 9/11 vs 3/11" | It was the fitted ML (uplift) model, and 11 failure *causes*, not cases | R2 |
| X2 | "Drishti scored 40/40" | Replay, not live | D2 / D3 |
| X3 | "1,642 Skipp users" | Visitor-days, not people | S3 / S6 |
| X4 | "Engagement tripled on 26 Oct" | Page views per visitor jumped when the new front door shipped; not yet checked for extra redirects | Nothing, until checked |
| X5 | "1000+ contributions" | Undefined | O1 |
| X6 | "Wispr wants India pricing at ₹1020" | A garble of ₹10–20 | W3 |
| X7 | Pagdandi | No artifact found | Nothing, unless one exists |
| X8 | Any participant count, conversion rate or quote from the campus trial | It has not been run | "Designed, not run" |
