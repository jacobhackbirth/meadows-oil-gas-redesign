---
status: findings
files_reviewed: 52
findings:
  critical: 3
  warning: 8
  info: 4
  total: 15
---

# Code Review Report

## Summary

52 files reviewed. No exposed secrets or XSS vulnerabilities found. Key issues: silent Formspree fallback to placeholder URL, anchor-link slug bug (missing `g` flag on `.replace()`), duplicate GalleryClient/MasonryGrid implementations with the live page using the less-accessible one, mobile nav dialog accessible even when closed, and JSON-LD scripts using React text content instead of raw HTML injection (causes `&amp;` encoding of `&` in brand name strings).

---

## Critical Findings

### [CR-001] Formspree endpoint silently falls back to non-functional placeholder — `app/contact/page.tsx:38`

If `FORMSPREE_ENDPOINT` is not set in Vercel, the form submits to `https://formspree.io/f/placeholder` which returns an error. The form shows a generic error message but no indication to developers that the env var is missing.

**Fix:** Remove the fallback and fail loudly:
```ts
const FORM_ENDPOINT = process.env.FORMSPREE_ENDPOINT
if (!FORM_ENDPOINT) throw new Error('FORMSPREE_ENDPOINT env variable is not set')
```

---

### [CR-002] Anchor slug bug — `.replace()` without global flag — `app/about/process/page.tsx:245`

Only the first space is replaced. Multi-word labels with two spaces would produce broken anchor links.

**Fix:** Use `.replaceAll(' ', '-')` instead of `.replace(' ', '-')`.

---

### [CR-003] `GalleryClient` duplicates lightbox without accessibility features from `MasonryGrid` — `components/gallery/GalleryClient.tsx`

The live gallery page uses `GalleryClient`, which is missing focus management on lightbox open, `tabIndex`/`onKeyDown` on grid items, and uses `document.addEventListener` instead of `window`. `MasonryGrid.tsx` has all of these but is unused.

**Fix:** Migrate focus management, `tabIndex`/`onKeyDown`, and `window` event listener from `MasonryGrid` into `GalleryClient`.

---

## Warning Findings

### [WR-001] Mobile nav overlay always has `role="dialog" aria-modal="true"` — `components/layout/Navbar.tsx:161`

Screen readers will announce the dialog even when it is visually hidden (opacity 0, pointerEvents none).

**Fix:** Add `aria-hidden={!mobileOpen}` to the overlay element.

---

### [WR-002] `scroll-behavior: smooth` applied via `*` selector — `app/globals.css:48`

Causes unintended smooth scrolling in input fields and overflow containers.

**Fix:** Apply to `html` only, not `*`.

---

### [WR-003] `LocationMap` token guard placed after hooks — `components/about/LocationMap.tsx:106`

Early return after hook calls violates rules of hooks. Currently works because token is always set at build time, but will cause runtime errors if token is ever absent.

**Fix:** Move the `if (!MAPBOX_TOKEN)` guard to the top of the component, before any hook calls.

---

### [WR-004] `ServiceAreaMap` tooltip can overflow viewport right edge — `components/about/ServiceAreaMap.tsx:82`

No viewport-clamping on tooltip position.

**Fix:** Clamp: `left: Math.min(tooltip.x + 12, window.innerWidth - tooltipWidth - 16)`.

---

### [WR-005] `OilHistoryTimeline` uses `year` as React list key — `components/about/OilHistoryTimeline.tsx:26`

Two events with the same year would cause duplicate key warnings and rendering bugs.

**Fix:** Use `key={year + '-' + i}` or add a unique `id` field to `TimelineEvent`.

---

### [WR-006] `ContactForm` error detection via brittle style string — `components/contact/ContactForm.tsx:55`

`el.style.borderColor.includes('220,38,38')` will silently fail if the browser normalizes the color with spaces or as hex.

**Fix:** Use `data-error={!!errors.name}` attribute and read `el.dataset.error === 'true'` in the handler.

---

### [WR-007] Accordion renders every trigger in `<h2>` — `components/ui/accordion.tsx:32`

FAQ items on `/services` use `<h2>` triggers while the section heading is already `<h2>`, breaking heading hierarchy.

**Fix:** Change `render={<h2 />}` to `render={<h3 />}`.

---

### [WR-008] Hardcoded `datePosted: '2026-01-01'` in JobPosting schema — `app/careers/page.tsx:13`

Static dates cause Google to deprioritize the rich result over time.

**Fix:** Remove `JobPosting` schema if positions are always open, or generate the date dynamically.

---

## Info / Suggestions

### [IN-001] About page has orphaned `<Link>` breaking 5-column grid — `app/about/page.tsx:318`

The "Our Reach" Link is a direct grid child between col-span-2 and col-span-3 elements, creating 3 items in a 2-item grid at `lg` breakpoints.

---

### [IN-002] Lightbox overflow lock may not clean up on fast navigation — `components/gallery/GalleryClient.tsx:44`

`document.body.style.overflow = 'hidden'` cleanup may not fire before new page renders on client-side navigation.

---

### [IN-003] `robots.ts` indexes all paths including `/privacy` — `app/robots.ts`

The privacy policy page may benefit from `noindex` meta to avoid thin-content indexing.

---

### [IN-004] JSON-LD scripts use React text rendering — `app/layout.tsx` and all page files

React HTML-escapes text children in `<script>` tags. This means `"Meadows Oil & Gas"` becomes `"Meadows Oil &amp; Gas"` in rendered HTML, which may cause Google's structured data parser to flag errors.

**Fix:** Use raw HTML injection (the `__html` prop) instead of React text content for all JSON-LD script tags. This is the pattern documented by Next.js for structured data.

Affected files: `app/layout.tsx` and all page files containing schema definitions.

---

## Clean Files

app/about/affiliations/page.tsx, app/about/history/page.tsx, app/about/reach/page.tsx,
app/faq/page.tsx, app/gallery/page.tsx, app/not-found.tsx, app/page.tsx,
app/privacy/page.tsx, app/projects/page.tsx, app/resources/page.tsx, app/robots.ts,
app/services/brokerage/page.tsx, app/services/page.tsx, app/services/technical/page.tsx,
app/services/wind/page.tsx, app/sitemap.ts, components/about/Timeline.tsx,
components/home/ClientTypesSection.tsx, components/home/CTASection.tsx,
components/home/HeroSection.tsx, components/home/LinkedInStrip.tsx,
components/home/ProcessSection.tsx, components/home/ServicesPreview.tsx,
components/home/StatsBar.tsx, components/home/TestimonialsSection.tsx,
components/home/WhySection.tsx, components/layout/Footer.tsx,
components/services/ServiceAccordion.tsx, components/services/ServicesNav.tsx,
components/services/TechnicalServices.tsx, components/services/WindLeasingBanner.tsx,
components/ui/AnimatedCounter.tsx, components/ui/BackToTop.tsx,
components/ui/MobileStickyBar.tsx, components/ui/PageHeader.tsx,
components/ui/ScrollReveal.tsx, lib/seo.ts, lib/utils.ts
