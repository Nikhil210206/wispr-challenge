// Smoke test for the published portfolio.
//
// It relies on the contract in build-log/briefs.md ("section contract"):
// section ids, the lv-* ids, the ask-* test ids and window.__match under
// ?debug=intents. If the site breaks the contract, these tests say where.
//
//   SITE_URL=https://<appname>.emergent.host npm run smoke

import { test, expect } from "@playwright/test";
import { readFileSync } from "node:fs";
import { match } from "./match-reference.mjs";

const SITE = process.env.SITE_URL ?? "";
const SECTIONS = ["squeezed", "long-versions", "setbacks", "principles", "exam-week", "wispr-ideas", "how-built", "logistics"];
const LONG_VERSIONS = ["lv-skipp", "lv-drishti", "lv-recoup"];
const intents = JSON.parse(readFileSync(new URL("../content/intents.json", import.meta.url), "utf8"));

test.skip(!SITE, "Set SITE_URL to the published emergent.host address");

test("every section is present, in order, under a single h1", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("console", (m) => {
    if (m.type() === "error") errors.push(m.text());
  });
  await page.goto(SITE, { waitUntil: "networkidle" });

  await expect(page.locator("h1")).toHaveCount(1);
  const positions = await page.evaluate((ids) => {
    const all = [...document.querySelectorAll("*")];
    return ids.map((id) => {
      const el = document.getElementById(id);
      return el ? all.indexOf(el) : -1;
    });
  }, SECTIONS);
  const missing = SECTIONS.filter((_, i) => positions[i] < 0);
  expect(missing, "sections missing").toEqual([]);
  expect(positions, "sections out of order").toEqual([...positions].sort((a, b) => a - b));
  expect(errors, "console errors").toEqual([]);
});

test("each long version opens from its line in the squeezed resume", async ({ page }) => {
  await page.goto(SITE, { waitUntil: "networkidle" });
  for (const id of LONG_VERSIONS) {
    const line = page.locator(`#squeezed [aria-controls="${id}"]`);
    await expect(line, `no resume line controls #${id}`).toHaveCount(1);
    if ((await line.getAttribute("aria-expanded")) !== "true") await line.click();
    await expect(line).toHaveAttribute("aria-expanded", "true");
    await expect(page.locator(`#${id}`)).toBeVisible();
  }
});

test("a typed question opens the matching section", async ({ page }) => {
  await page.goto(SITE, { waitUntil: "networkidle" });
  await page.getByTestId("ask-input").fill("what did you build that students actually use");
  await page.getByTestId("ask-submit").click();
  await expect(page.getByTestId("ask-status")).toContainText(/skipp/i);
  await expect(page.locator("#lv-skipp")).toBeVisible();
});

test("the site's matcher agrees with the reference matcher", async ({ page }) => {
  await page.goto(`${SITE}${SITE.includes("?") ? "&" : "?"}debug=intents`, { waitUntil: "networkidle" });
  const exposed = await page.evaluate(() => typeof (window as any).__match === "function");
  test.skip(!exposed, "window.__match is not exposed yet (brief step 7)");
  for (const t of intents.tests) {
    const site = await page.evaluate((s) => (window as any).__match(s), t.say);
    expect.soft(site?.id ?? null, t.say).toBe(match(t.say).id);
  }
});

test("external links resolve", async ({ page, request }) => {
  await page.goto(SITE, { waitUntil: "networkidle" });
  const links = await page
    .locator('a[href^="http"]')
    .evaluateAll((as) => [...new Set(as.map((a) => (a as HTMLAnchorElement).href))]);
  for (const href of links) {
    // LinkedIn answers automated requests with 999; the Recoup demo can take a minute to wake.
    const res = await request.get(href, { maxRedirects: 5, timeout: 90_000 }).catch(() => null);
    const status = res?.status() ?? 0;
    const tolerated = href.includes("linkedin.com") && status === 999;
    expect.soft(status > 0 && (status < 400 || tolerated), `${href} → ${status}`).toBe(true);
  }
});

test.describe("on a phone", () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test("nothing scrolls sideways at 375px", async ({ page }) => {
    await page.goto(SITE, { waitUntil: "networkidle" });
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    expect(overflow, "page is wider than the screen").toBeLessThanOrEqual(0);
  });
});
