# Emergent prompts, ready to speak

Each step has the same parts:

- **Do:** what to set up first.
- **Say:** the lines in the blue box. Hold your Flow key and speak them into Emergent's chat. You can
  read them out as they are; adding your own words is fine.
- **Paste:** exact text from a file, in Emergent's chat box after you've spoken.
- **Check:** how to know it worked.
- **If it goes wrong:** a line to say back to Emergent.

**When a line contains a snippet name** (*exam hall tokens*, *section contract*, *matcher rules*,
*debug contract*), just say the name and Flow types the full text for you. Create the snippets first
(the last section of this file). If snippets don't work for you, paste the snippet text at that point
instead.

**After every step:**
1. Copy what Flow actually typed into `build-log/prompts/NN-step.md`.
2. Note the credits before and after.
3. Add one line to `voice-log.md` if voice got something wrong or made something easier.

Keep the screen recording running the whole time. These clips go in the video.

---

## Step 0: before you start (5 minutes, no speaking)

**Do:**
1. Sign in to Emergent with the **same email as your Wispr Flow account**.
2. Check the credits arrived, and that a **Publish** option exists for your account. Emergent's Free
   plan can't publish. If you can't find Publish, stop and tell me.
3. Start a new job in the **Fullstack Builder** window.
4. When it asks for an app or project name, use **nikhil-long-version**. The address becomes
   `nikhil-long-version.emergent.host` and can never be renamed.
5. Start the Mac screen recording: Cmd + Shift + 5 → Options → Microphone: MacBook microphone →
   Record Entire Screen.

---

## Step 1: talk the idea through first (Friday, 5 minutes)

Use the **Brainstorm** window if it's offered and cheap; otherwise say this as your first message in
the Fullstack Builder.

**Say:**

> Hi. Before we build anything, I want to plan a one-page portfolio site for the Wispr Flow India
> hiring challenge. The idea is called "the long version". The first thing a visitor sees is my real
> resume, squeezed sideways so it's almost too dense to read, under a headline that says: 2,000 people
> sent you this, ask for the long version. Three lines of the resume can be tapped. When you tap one, it
> un-squeezes back to normal width and opens the full story behind it. Below that are sections for my
> setbacks, how I make decisions, my exam-week evidence, three growth experiments for Wispr Flow India,
> how I built this site by voice, and logistics. Visitors can type a question or tap a suggestion, and
> the page opens the right section. Later they can say it out loud. There is no AI behind that, just a
> list of phrases I'll give you. It must be frontend only: no backend, no database, no login, no
> analytics, and no AI calls. Mobile first, accessible, and fully usable with a keyboard. Don't build
> anything yet. Ask me your questions first.

**If it asks these, say:**

| It asks | You say |
|---|---|
| Universal LLM key or your own key? | "Neither. There's no AI in this site at all." |
| Should I add a backend or database? | "No. Frontend only. Everything is static." |
| Do you want login or authentication? | "No login of any kind." |
| Any design preferences? | "Yes: *exam hall tokens*." |
| Which framework? | "Your default for frontend is fine. React with Tailwind is fine." |
| Anything else | Answer in one or two sentences. If you don't know, say "keep it simple, you choose." |

**Check:** it plays back a plan with the eight sections, frontend only, no AI.

---

## Step 2: the skeleton, then publish v0 (Friday, 30–45 minutes)

**Say:**

> Build the skeleton of the site now. It's a single page, frontend only: no backend calls, no
> database, no authentication, no AI, and no analytics. *section contract*. Each section gets a
> heading and one line of placeholder text for now. The page has exactly one h1, which is my name,
> Nikhil Balamurugan, in a slim top bar. The top bar also says: starts 9 December 2026, dot,
> relocating to Bangalore. It has an Ask button that jumps to the ask box in the first section. Use
> these design tokens: *exam hall tokens*. Make it mobile first. At 375 pixels wide, nothing should
> scroll sideways. Add a skip-to-content link for keyboard users. Don't add anything I haven't asked
> for.

**Do:** when it says it's done, click **Publish**. It takes 10–15 minutes.

**Check:**
- Open the published URL in an incognito window, and on your phone.
- All eight sections are there, and the top bar shows your name, the date and Bangalore.
- Nothing scrolls sideways on the phone.
- **Send me the URL.**

**If it goes wrong, say:**

> Remove the backend and the database. This site is static: frontend only, no API calls.

> Remove the [thing it added]. Only build what I asked for.

> Load Roboto Flex from Google Fonts with the width axis from 25 to 151 and the weight axis from 100
> to 1000, plus Instrument Serif italic and Geist Mono, and use them the way the design tokens say.

---

## Step 3: put in the real words (Saturday, 15 minutes)

**Do:** finish the truth check first (runbook, Part 1). I update `content/site-copy.md` with your
answers.

**Say:**

> Now replace all the placeholder text with my real content. I'm pasting it below. Put every piece of
> text into one content data file, and have the page read from it, so I can change the words later in
> one place. Use my words exactly. Don't rewrite, shorten, or add anything. Where it says MONDAY or
> TUESDAY in square brackets, show a small grey "coming soon" label instead.

**Paste:** everything in `content/site-copy.md` from the line "## Top bar" to the end.

**Check:** open the site.
- All ten resume lines are there.
- Skipp's "what didn't work" reads exactly as in the file.
- Nothing sounds rewritten.

**If it goes wrong, say:**

> You changed my wording in the [section name] section. Put back the exact text from the content I
> pasted, and don't edit my words again.

---

## Step 4: the squeezed resume and the unsqueeze (Saturday, 30 minutes)

**Say:**

> Now the main interaction, in the first section. Show the resume lines squeezed horizontally, so they
> look compressed and almost too dense to read. Use Roboto Flex with the width axis set to 30. The
> three lines for Skipp, Drishti and Recoup are buttons. Each one has aria-expanded, and aria-controls
> pointing at its long version: lv-skipp, lv-drishti and lv-recoup. When someone clicks, taps or presses
> Enter on one, three things happen. First, that line animates from squeezed to normal width over about
> 700 milliseconds, with the easing cubic-bezier 0.16, 1, 0.3, 1. Second, the highlighter colour sweeps
> in behind it. Third, its long version opens, and keyboard focus moves to that long version's heading.
> The headline above the resume has two lines: "2,000 people sent you this." in heavy lowercase, then
> "ask for the long version." in Instrument Serif italic, in ballpoint blue. If the visitor prefers
> reduced motion, skip the animations, but everything should still open.

**Check:**
- Press Tab until the Skipp line is highlighted, then press Enter. It un-squeezes and Skipp's long
  version opens.
- Tap it on your phone; that works too.
- Turn on reduced motion (System Settings → Accessibility → Display → Reduce motion). Nothing
  animates, and lines still open.

**If it goes wrong, say:**

> The squeeze isn't showing. Instead of the font width axis, use transform scaleX 0.55 with
> transform-origin left on the squeezed lines, and animate back to scaleX 1.

> Focus doesn't move when a long version opens. After it opens, move keyboard focus to its heading.

> On my phone the squeezed lines run off the screen. Let them wrap instead of overflowing.

---

## Step 5: the long versions (Saturday, 20 minutes)

**Say:**

> Now style the three long versions in the long-versions section. Each has the same seven labelled
> parts, in this order: the problem, why I chose it, what I owned, what I built, the evidence, what
> didn't work, and what I'd do differently. Put the part labels in Geist Mono, small and uppercase.
> Each evidence line keeps its small source and date note. The "what didn't work" label uses the red
> pen colour, and always keeps its words next to it. Behind the long versions only, add very faint
> ruled lines like an exam answer sheet, with a thin red margin line on the left. The text must stay
> easy to read.

**Check:** all three read comfortably on your phone, and the ruled lines are barely visible.

**If it goes wrong, say:**

> The ruled lines are too strong. Make them much fainter, so they're barely visible behind the text.

---

## Step 6: the other sections, then re-publish v1 (Saturday, 20 minutes)

**Say:**

> Now style the remaining sections the same way: setbacks, principles, exam week, wispr ideas, how
> built and logistics. Each section starts with a small uppercase eyebrow in Geist Mono, then a
> two-line headline. The first line is heavy and lowercase; the second is in Instrument Serif italic,
> in ballpoint blue. In setbacks, each entry shows its three parts: what happened, what I decided, and
> what changed. In exam week, the "coming soon" results should look clearly unfinished, not hidden.
> The three Wispr ideas are cards, each with the same six labelled rows. In logistics, show the start
> date and the Bangalore line in large text. Then make sure nothing scrolls sideways at 375 pixels.

**Do:** **Re-publish** (it's free).

**Check:** incognito and phone. **Send me the URL** and I run the automated check.

---

## Step 7: the ask box (Sunday, 30 minutes)

**Say:**

> Now the ask box in the first section. It has a text input, a submit button, a row of suggestion
> chips, and a status line, with the test ids from the section contract. The status line is an
> aria-live polite region. Use the intents data I'm pasting below. Each chip shows an intent's chip
> text, and tapping it opens that intent. When someone submits text, match it with these rules:
> *matcher rules*. On a match, scroll to the intent's target, open it if it's a long version, and set
> the status line to "opening" followed by the intent's label. Also: *debug contract*.

**Paste:** the whole of `content/intents.json`. To copy it: open it in TextEdit or VS Code, then Cmd + A,
Cmd + C.

**Check:**
- Type "what failed" → the setbacks section opens.
- Tap "when can you start" → logistics opens.
- **Send me a message.** I run all 40 test questions against your site.

**If it goes wrong, say:**

> The matcher isn't following the rules exactly. Use the phrases, keywords, aliases, stopwords,
> threshold and noMatchBelow from the intents data, with the scoring I described, and nothing else.

---

## Step 8 (only if Step 7 took under 45 minutes): the microphone (Sunday, 30 minutes)

**Say:**

> Now add a microphone button next to the ask box, as an extra, not a replacement. Use the browser's
> built-in speech recognition, SpeechRecognition or webkitSpeechRecognition, with the language set to
> English India, interim results on, and up to three alternatives. If the browser doesn't support it,
> the mic button says so, and the typed box stays. The visitor can hold the button to talk, or click
> once to start and again to stop. While listening, show the live words in ballpoint blue and the
> message "listening, let go to send". Send the final words through the same matcher as the typed box.
> The status line shows each state: listening, processing, matched, did you mean, didn't catch that,
> microphone blocked so type instead, not supported in this browser, and speech service unreachable.
> Under the button, show this line exactly: Your browser's speech service turns speech into text
> (Chrome uses Google). This site stores nothing.

**Check:** on the **published** URL, not the preview (previews can block the microphone):
- Chrome on your Mac;
- Chrome on your Android phone;
- Safari on an iPhone, if you can borrow one;
- Firefox shows the "not supported" message.

**If it goes wrong, say:**

> Remove the microphone feature completely and keep the typed ask box exactly as it was.

The mic is optional. Typed plus chips is enough.

---

## Step 9: the exam-week results (Monday, 20 minutes)

**Do:** I prepare `content/monday-update.md` from your real results.

**Say:**

> I'm pasting the final text for the exam week section and the how-built section. Replace the "coming
> soon" labels with it, using my words exactly.

**Paste:** all of `content/monday-update.md`.

**Check:** every number on the page matches the file.

---

## Step 10: final polish, then re-publish and freeze (Monday, 20 minutes)

**Say:**

> Final polish, without changing any text or adding features. Every button, link and input needs a
> visible focus ring: a 3-pixel outline in the highlighter colour. Check every text colour against
> its background for at least 4.5 to 1 contrast. Respect reduced motion everywhere. Every image needs
> alt text, and images below the first screen should lazy-load. Nothing should scroll sideways at 375
> pixels. When you're done, tell me what you changed in three bullet points.

**Do:** **Re-publish.** After this, **no new features**. Only text and results changes.

---

## Lines to say whenever something goes wrong

> Undo your last change. Keep everything else exactly as it was.

> Before you change anything, tell me in two sentences what you're going to do.

> Stop. Only fix the problem I described. Don't redesign anything.

> Something on the page is wider than a 375-pixel screen. Find it and fix only that.

**Do:** if a publish breaks the site, open **Manage Publishing** and roll back. Emergent keeps the last
3 versions.

---

## The four Flow snippets (create these on Friday, before Step 1)

In Flow, open **Snippets** and add each one. The trigger is the short name; the text is what Flow
types when you say it.

**Trigger: exam hall tokens**

```
Design tokens. Background paper #F4EFE4. Text ink #16140F. Accent highlighter #FFE14A, used only for the selected line, the focus ring and the main button. Ballpoint blue #2643C4, used for spoken text and the live transcript. Red pen #B82D22, used only on "what didn't work" labels and always next to a word. Fonts from Google Fonts: Roboto Flex (variable, width axis 25 to 151, weight 100 to 1000) for headings and body; Instrument Serif italic for accent lines; Geist Mono for small uppercase labels. Body text 18px, 17px on mobile, line height 1.55. No gradients, no drop shadows, no glassmorphism, no emoji.
```

**Trigger: section contract**

```
Use these exact section ids, in this order: squeezed, long-versions, setbacks, principles, exam-week, wispr-ideas, how-built, logistics. The three long versions use ids lv-skipp, lv-drishti and lv-recoup. The ask box: the input has data-testid ask-input, the submit button ask-submit, the chips container ask-chips, and the status line ask-status, which is an aria-live polite region.
```

**Trigger: matcher rules**

```
Ask-box matching rules, with no AI and no network calls. Lowercase the text, remove punctuation, and replace any alias from the aliases list in the data. For each intent: the phrase score is 1 if any of its phrases appears inside the text; otherwise it is the best word overlap between the text and any phrase (shared words divided by all distinct words, ignoring the stopwords list). The keyword score is the number of the intent's keywords present, divided by 2, capped at 1. The final score is 0.6 times the phrase score plus 0.4 times the keyword score. Take the highest. Below the threshold in the data, show the top three intents as "did you mean" chips. If nothing scores at least noMatchBelow, say "didn't catch that: tap a chip or type".
```

**Trigger: debug contract**

```
When the page address contains ?debug=intents, show a small panel with the top three intent scores for the last question, and expose window.__match(text), which returns an object with id, score, state and alternatives, using exactly the same matcher.
```
