# QA checklist

Run it after every publish. The final run is on Tue 3 Nov, before submitting.

## Automated (Claude)

- [ ] `node qa/match-reference.mjs`: 40/40, target 90% or more
- [ ] `SITE_URL=… npm run smoke`: sections in order, one h1, long versions open, typed ask works, no
      console errors, no horizontal scroll at 375px, external links resolve
- [ ] Site matcher matches the reference on all 40 utterances (`?debug=intents`)
- [ ] Claims audit: every number in the site copy matches a row in `CLAIMS.md` or `evidence/results.md`

## Manual (you)

| Browser | Loads logged out | Unsqueeze works | Typed ask works | Mic (if shipped) |
|---|---|---|---|---|
| Chrome, Mac, incognito | ☐ | ☐ | ☐ | ☐ |
| Safari, Mac | ☐ | ☐ | ☐ | ☐ |
| Firefox, Mac | ☐ | ☐ | ☐ | shows typed fallback ☐ |
| Android Chrome | ☐ | ☐ | ☐ | ☐ |
| iPhone Safari | ☐ | ☐ | ☐ | ☐ |
| LinkedIn in-app browser (open the link from a LinkedIn message) | ☐ | ☐ | ☐ | shows typed fallback ☐ |

- [ ] Keyboard only: Tab reaches every control, the focus ring is visible, Enter unsqueezes
- [ ] VoiceOver: the status line announces the result of an ask
- [ ] Reduced motion (System Settings → Accessibility → Display → Reduce motion): nothing animates,
      everything still works
- [ ] Zoom to 200%: nothing overlaps or gets cut off
- [ ] Start date and "relocating to Bangalore" are visible without scrolling, and match the form
- [ ] No phone number, proxy IP or anyone else's personal details anywhere on the page
- [ ] Lighthouse (mobile): LCP under 2.5s, accessibility score noted
