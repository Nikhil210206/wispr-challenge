# Site copy: the text you paste into Emergent (step 3)

This is every word on the site, ready to paste. The truth check was answered on 30 Oct 2026, and every line below is confirmed or uses your
own words.

Section ids in backticks are a contract with the QA test. Keep them exactly as written.

The numbers come from `CLAIMS.md` (checked 29 Oct 2026). The exam-week results get filled in on
Monday from `evidence/results.md`.

---

## Top bar

- **Name:** Nikhil Balamurugan
- **Line:** starts 9 Dec 2026 · relocating to Bangalore
- **Button:** ask

---

## `squeezed`: the short version (hero)

**Eyebrow:** THE SHORT VERSION

**Headline, line 1:** 2,000 people sent you this.

**Headline, line 2 (italic, ballpoint blue):** ask for the long version.

**Under the headline:** This is my resume, squeezed the way resumes squeeze people. Tap any line for the
story behind it, or just ask.

**The squeezed resume (each line on its own row; the three marked → open a long version):**

- NIKHIL BALAMURUGAN · Chennai · nikhilbalamurugan@gmail.com · linkedin.com/in/nikhilb21 · github.com/Nikhil210206
- B.Tech Computer Science, SRM Institute of Science and Technology, Kattankulathur · 2024–2028 · CGPA 9.21
- → Skipp: attendance, marks and timetable app for SRM students · Jul 2026–now
- → Drishti: voice web agent for blind users, 11 Indian languages · Sep 2026–now
- → Recoup: payment recovery agent for Razorpay merchants · Aug–Sep 2026
- OneClick: Samsung PRISM GenAI Hackathon 2026 · WSF: Women Safety Framework (team)
- 93 merged pull requests · FitYou maintainer, 65 contributor PRs merged · GSSoC 2025 mentor
- Amazon ML Summer School 2026 · Samsung Innovation Campus · Web team head, SRM Insider Community
- Vision2Web 2026, 2nd place (Allotiq) · InnoHack 2026, 2nd in AI/ML · HackFusion 2026 finalist · Social Winter of Code, top 100
- NVIDIA LLM Evaluation · Oracle OCI AI Foundations · NPTEL Java (Elite + Gold) · NPTEL OOP (Elite + Silver)

**Ask box placeholder:** ask anything, like "what did you build that students use?"

**Chips:**
- something students actually use
- something with voice
- what failed
- how you decide
- what you'd do for Wispr India
- when can you start

**Under the ask box (small):** There's no AI behind this box. It matches your words against a list of
phrases I wrote. If you use the mic, your browser's speech service turns speech into text (Chrome uses
Google), and this site stores nothing.

---

## `long-versions`: the long versions

**Eyebrow:** THE LONG VERSIONS

**Headline, line 1:** three things I built, told properly.

**Headline, line 2 (italic):** the problem, the choices, the evidence, and what didn't work.

### `lv-skipp`: Skipp

**Subtitle:** know before you bunk · live at skipp.life

1. **The problem.** SRM's portal shows your attendance as a record. It doesn't answer the question
   students actually ask: how many more classes can I miss and still stay above 75%?
2. **Why I chose it.** On the Student Portal, none of this is easy to see. So I built an easier way.
3. **What I owned.** All of it, solo: the product, the design, the scraper, the app and the privacy
   model. 249 commits since 21 July 2026.
4. **What I built.**
   - An app that installs to your home screen and tells you, subject by subject, how many classes you
     can still skip.
   - A leave planner that shows what a day off will cost before you take it.
   - A grade forecast, and a timetable that runs on SRM's day orders.
   - When SRM's Student Portal refused requests from servers outside India, I routed those calls
     through a small server in Hyderabad.
   - Passwords are never stored on a server. They're encrypted on the student's own phone.
5. **The evidence** *(Vercel Web Analytics, as of 29 Oct 2026)*.
   - On a typical day last week, 7 to 14 people opened Skipp.
   - 84% of visits are on phones.
   - Over 92% of visits are direct, from the home screen or a bookmark.
   - 1,642 visitor-days since launch. Vercel resets its visitor ID every day, so I can't tell you how
     many distinct students that is, by design.
6. **What didn't work.** I built a habit, not a way to spread. Almost nobody arrives from a share, a
   search or a post. And the privacy choice I'm proud of means my own analytics can't count distinct
   students.
7. **What I'd do differently.** Skipp lets you save your week as a picture, and that picture carries
   no way back to Skipp. Next time, everything a student can share carries the way in.

### `lv-drishti`: Drishti

**Subtitle:** a voice agent for blind Indians · working prototype

1. **The problem.** Screen readers make blind users step through a website one element at a time, and
   they're English-first. Indian sites are full of unlabelled icons and buttons, so booking a train
   ticket can take hundreds of keystrokes.
2. **Why I chose it.** For most people, voice is a convenience. For a blind user on an Indian website,
   it's the whole interface. I wanted to build for that case.
3. **What I owned.** A solo build, on Sarvam's speech, language and translation models.
4. **What I built.** You say what you want, in any of 11 Indian languages. Drishti then:
   - operates the website for you;
   - reads the options back in your language;
   - asks for a spoken "yes" before paying, submitting or deleting anything;
   - never types a password, an OTP or a card number, and never attempts a CAPTCHA.
5. **The evidence.**
   - Latest fresh live evaluation: 35 of 40 tasks completed, 0 safety incidents.
   - For spoken yes or no across languages, a simple keyword list beat a multilingual model: 47 of 50
     with 0 unsafe "yes", against 31 of 50 with 9.
6. **What didn't work.** My first headline number was 40 out of 40, from a replay of recorded runs.
   A fresh live run said 32, so 32 is what I published. And no blind user has tried it yet.
7. **What I'd do differently.** Put it in front of three blind users before adding a single feature.

### `lv-recoup`: Recoup

**Subtitle:** count what you caused · synthetic benchmark plus real test-mode payments

1. **The problem.** When a payment fails, most recovery systems retry on a fixed schedule, even when
   the error already says a retry can't work. An expired card needs a different card, not another
   attempt.
2. **Why I chose it.** Razorpay publishes what every error means. I wanted to see what happens when a
   system actually listens to it.
3. **What I owned.** A solo build.
4. **What I built.** A system that reads Razorpay's error and picks the action that fits the cause: a
   retry, a payment link, a different method, or nothing at all. It runs under hard limits: a contact
   budget, caps per customer, quiet hours, and an audit log that can only be added to.
5. **The evidence.**
   - On a synthetic benchmark of 12,004 cases, choosing the action by cause recovered about 5× more
     than a fixed retry (+512%).
   - Two real recoveries, end to end, in Razorpay test mode.
   - Contacting everyone "recovers" 44% of the money but causes only 22% of it. A naive dashboard
     would claim double.
6. **What didn't work.** My machine-learning model lost to a 20-line rule: it picked the right action
   for 3 of 11 failure causes, and the rule got 9. And an early version credited itself with a
   recovery it hadn't caused, because the customer had paid through the original checkout.
7. **What I'd do differently.** Every number here comes from a simulation, and I say so. The next
   step is real merchant data.

### More work

- **FitYou.** As maintainer, I merged 65 pull requests from other contributors.
- **Open source.** 93 merged pull requests, 59 of them in other people's repositories (29 Oct 2026).
- **Allotiq.** Campus room booking that places every request at once instead of first come, first
  served. On the brief's own example, first come, first served placed 2 of 3 requests and Allotiq
  placed all 3. Built for the Vision2Web 2026 finals (2nd place), after my first-round project,
  Echo, qualified.
- **OneClick.** Turns a vague phone complaint into a verified one-tap fix. Built at the Samsung PRISM
  GenAI Hackathon 2026.
- **WSF.** A women's safety app with on-device audio threat detection. A team project.

---

## `setbacks`: what doesn't fit on a resume

**Eyebrow:** WHAT DOESN'T FIT ON A RESUME

**Headline, line 1:** three times it went wrong.

**Headline, line 2 (italic):** and what I changed.

1. **Recoup lost to a simple rule, three times.**
   - *What happened:* the allocator, the part the whole project is named for, lost to a simple
     cause-aware baseline on its first three attempts.
   - *What I decided:* treat every loss as a bug, not a tuning problem. One was a model picking
     actions it shouldn't. One was a threshold quietly blocking free retries. One was a comparison
     where only my system had to respect the budget.
   - *What changed:* every approach now runs under the same budget, and the write-up says plainly
     where my own machinery adds almost nothing.
2. **Skipp got shut out of the university's portal.**
   - *What happened:* SRM's Student Portal refuses requests from servers outside India. Skipp's
     server was abroad, so attendance stopped loading for students using the Student Portal.
   - *What I decided:* keep the server where it was, and only send those portal calls through
     India.
   - *What changed:* a small server in Hyderabad on Oracle's free tier now carries just those
     requests, and attendance loads again.
3. **Drishti's perfect score wasn't real.**
   - *What happened:* my evaluation said 40 out of 40. It was a replay of runs recorded at different
     times.
   - *What I decided:* run everything fresh, live, on one version of the code.
   - *What changed:* it scored 32. I fixed the failures, and the latest fresh run is 35 of 40. That's
     the number I publish.

---

## `principles`: how I decide

**Eyebrow:** HOW I DECIDE

**Headline, line 1:** three rules.

**Headline, line 2 (italic):** each one learned the hard way.

1. **Count what you caused.** Contacting every customer "recovers" 44% of the money, but only 22%
   happened because of the contact. The rest was coming anyway. In Recoup, a recovery only counts if
   the trail shows why.
2. **Publish the real number.** Drishti's replay said 40 out of 40 and the live run said 32, so I
   published 32. Skipp's dashboard says 1,642 visitors, but they're really visitor-days, so that's
   what I call them.
3. **Use the simplest thing that works, then measure it.** A 20-line rule beat my ML model in Recoup.
   A keyword list beat a multilingual model for spoken yes or no in Drishti. That's why the ask box on
   this page is a list of phrases I wrote, not an AI.

---

## `exam-week`: exam week

**Eyebrow:** EXAM WEEK

**Headline, line 1:** I had exams every day.

**Headline, line 2 (italic):** so I tested voice on the busiest student I know: me.

**Intro:** I couldn't run sessions this week. So I wrote down what I expected before I started,
measured what I could, and kept the campus trial for after exams. Every result below says how many
people it covers. Mostly, that's one.

**Cards** (results filled on Monday from `evidence/results.md`):

1. **Voice diary.** A week of using Wispr Flow for every message, note and prompt.
   *Result:* [MONDAY]
2. **Tanglish test.** 12 everyday Tamil-English sentences, each said once into Wispr Flow and once
   into Gboard voice typing. *Result:* [MONDAY]
3. **Android setup.** From the Play Store to a first dictation, screen-recorded and counted step by
   step. *Result:* [MONDAY]
4. **What Indian users say.** Public reviews and posts about Wispr Flow, grouped by theme, with a
   sample checked by hand. *Result:* [MONDAY]
5. **The campus trial: designed, not run.**
   - 72 hours, three real tasks (a WhatsApp message, a paragraph of notes, a Tamil-English message),
     consent first, no incentives.
   - It tests whether students keep using voice once they've tried it, and what stops them first:
     setup, awkwardness or language.
   - Ready to run after 4 November.

**Limits (small text):** One speaker, one phone, one campus, and no access to Wispr's own data. Read
it as a first look, not a finding about India.

---

## `wispr-ideas`: what I'd test first at Wispr India

**Eyebrow:** WHAT I'D TEST FIRST

**Headline, line 1:** three experiments.

**Headline, line 2 (italic):** none of them run yet, each with a reason to stop.

### 1. Campus referral loop

- **Who:** college students in South India, starting with one or two campuses.
- **Why:** Wispr says students are now picking up Flow, and Flow already rewards referrals. Skipp
  taught me campus reach doesn't happen on its own: over 92% of its visits come from people who
  already have it.
- **The test:** ten student ambassadors, one campus, two weeks. Invites tied to a real moment, like
  assignment week.
- **Measured by:** activated users per invite, meaning people who dictated on 2 or more days in their
  first week.
- **Guardrail:** whether referred users are still around at day 14.
- **Stop if:** ambassadors stop inviting, or the people they bring don't stick.

### 2. Regional creators, only when the language is ready

- **Who:** Tamil, Kannada and Telugu speakers who mix in English, on Reels and Shorts.
- **Why:** Hinglish came first, and India growth sped up after it. More Indian languages are planned
  within a year (TechCrunch). My Tanglish test is a first look at where Tamil-English stands today.
- **The test:** three micro-creators race a friend who's typing the same code-mixed message, and the
  video ends on Flow's unedited output. It runs only after the language passes a 50-sentence check.
- **Measured by:** activated installs per 1,000 views.
- **Guardrail:** comments about accuracy, and uninstalls.
- **Stop if:** accuracy complaints pass 10% of comments. That's a product fix, not a marketing problem.

### 3. First message home

- **Who:** new Android users on budget phones.
- **Why:** in India, about half of Flow's use is on mobile; Android only launched in 2026; and older
  users are often set up by younger family members (TechCrunch). 84% of Skipp's visits are on phones.
- **The test:** a guided first task: send your family group your first voice-typed message. Ten
  moderated tests on three budget phones, then a two-week A/B test.
- **Measured by:** the share of new installs with a successful dictation within 10 minutes.
- **Guardrail:** microphone-permission refusals, and uninstalls.
- **Stop if:** it doesn't lift first-session success by 10 points.

**Note (small):** None of these has been tested. They're where I'd start, and how I'd know to stop.

---

## `how-built`: how I said this site into existence

**Eyebrow:** HOW THIS WAS BUILT

**Headline, line 1:** how I said this site into existence.

**Headline, line 2 (italic):** every instruction spoken, during exam week.

**Who built what:** I planned this site with an AI assistant, Claude, which drafted the copy from my own
projects and notes. I spoke every build instruction into Emergent with Wispr Flow, and Emergent wrote
the code. Exact strings like colour codes, ids and the phrase list went in as Flow snippets or a paste.

**Numbers** (filled from `build-log/voice-log.md`):
- I type at [N] words a minute. I dictated at [N].
- [N] instructions spoken into Emergent.

**What voice did better:** [MONDAY: two real observations from `voice-log.md`]

**Where voice broke:** [MONDAY: the real moment and the fix, for example adding project names to Flow's
dictionary]

---

## `logistics`: logistics

**Eyebrow:** LOGISTICS

**Headline, line 1:** the boring part.

**Headline, line 2 (italic):** answered up front.

- **Start:** 9 December 2026, right after my end-semester exams (25 Nov–7 Dec). Full time
  from then, including through next semester.
- **Location:** relocating to Bangalore for the full internship
- **Email:** nikhilbalamurugan@gmail.com
- **LinkedIn:** linkedin.com/in/nikhilb21
- **GitHub:** github.com/Nikhil210206
- **Video:** [TUESDAY: the link]

**Sign-off:** Built out loud in Chennai, during exam week.
