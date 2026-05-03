# Meadows Oil & Gas — Website Redesign

## Project Overview
This is a professional website redesign for **Meadows Oil & Gas Corporation**, a land brokerage and energy services company based in Edmond, Oklahoma. Founded in 2009 by Zach Meadows. Services include leasehold acquisitions, title opinions, right-of-way, wind leasing, and GIS mapping across Oklahoma, Kansas, Texas, and beyond.

**GitHub:** https://github.com/jacobhackbirth/meadows-oil-gas-redesign  
**Owner:** Jacob (jacobhackbirth63@gmail.com)  
**Local dev:** Run `npm run dev` from the project folder, then open http://localhost:3000

---

## Tech Stack
- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (utility classes + inline styles with CSS variables)
- **Fonts:** Oswald (display/headings) + DM Sans (body) via next/font/google
- **Forms:** react-hook-form + zod validation
- **Maps:** react-simple-maps (service area), Mapbox GL JS (location map)
- **Hosting:** Vercel (intended)
- **Forms backend:** Formspree

---

## Design System

### Brand Colors (CSS variables in globals.css)
- `--color-brand-gold: #c8921a` — primary accent, CTAs, borders
- `--color-brand-navy: #0a0a0a` — dark backgrounds
- `--color-brand-green: #2d7d3a` — wind/renewable energy accent
- `--color-brand-gray: #6b7280` — body text
- Black `#000` / `#111` for section backgrounds
- White / `#f5f5f5` for light sections

### Typography
- Headings: `font-family: var(--font-display)` — Oswald, uppercase, letter-spacing
- Body: `font-family: var(--font-sans)` — DM Sans, normal case

### Reusable CSS Classes
- `.section-padding` — consistent vertical padding
- `.container-max` — max-width 80rem, centered
- `.section-label` — small gold uppercase label above headings
- `.section-title` — large display heading
- `.btn-primary` / `.btn-outline` — button styles
- `.reveal-up` + `.is-visible` — scroll reveal animation
- `.hero-animate` — hero entry animation

### Design Patterns
- Dark black/charcoal headers with gold radial gradient glow
- Light gray `#f5f5f5` or white for content sections
- Gold `border-top: 3px solid var(--color-brand-gold)` on cards
- `border-left: 3px solid var(--color-brand-gold)` on accent panels
- All headings uppercase with `letter-spacing: 0.02em`
- Rounded pills (`border-radius: 9999px`) only on CTA buttons
- No rounded corners on cards/panels

---

## Project Structure

### App Pages (`app/`)
- `/` — Homepage
- `/about` — About page (history, service area map, affiliations, process)
- `/services` — Services overview (core, technical, wind, FAQ)
- `/contact` — Contact form + office info
- `/gallery` — Photo gallery with lightbox
- `/faq` — Full FAQ with 5 sections, 20 questions
- `/careers` — Careers page
- `/privacy` — Privacy policy
- `/projects` — Projects page
- `/resources` — Resources page

### Components Built
**Layout:**
- `components/layout/Navbar.tsx` — fixed header, mobile slide menu, active link highlighting
- `components/layout/Footer.tsx` — nav links, contact info, AAPL/OCAPL affiliations

**UI:**
- `components/ui/BackToTop.tsx` — floating scroll-to-top button (desktop only)
- `components/ui/MobileStickyBar.tsx` — bottom sticky bar on mobile (Call + Contact)
- `components/ui/ScrollReveal.tsx` — intersection observer wrapper for .reveal-up
- `components/ui/AnimatedCounter.tsx` — animated number counter on scroll
- `components/ui/PageHeader.tsx` — reusable dark page header
- `components/ui/accordion.tsx` — details/summary accordion component

**Home page sections:**
- `components/home/HeroSection.tsx` — full-screen dark hero with animated text
- `components/home/StatsBar.tsx` — stats bar (15+ years, 3 states, etc.)
- `components/home/WhySection.tsx` — why choose us with checklist
- `components/home/ServicesPreview.tsx` — 5-service card grid
- `components/home/ClientTypesSection.tsx` — 6 client types on black background
- `components/home/ProcessSection.tsx` — 4-step process
- `components/home/TestimonialsSection.tsx` — 3 testimonial cards
- `components/home/LinkedInStrip.tsx` — LinkedIn follow strip
- `components/home/CTASection.tsx` — final call-to-action section

**About:**
- `components/about/Timeline.tsx` — company history timeline (takes `events` prop)
- `components/about/ServiceAreaMap.tsx` — react-simple-maps US map (OK/KS/TX highlighted)

**Contact:**
- `components/contact/ContactForm.tsx` — react-hook-form + zod, posts to Formspree

**Services:**
- `components/services/ServiceAccordion.tsx` — FAQ accordion (takes `services` prop)
- `components/services/ServicesNav.tsx` — sticky anchor nav strip
- `components/services/TechnicalServices.tsx` — GIS & mapping section
- `components/services/WindLeasingBanner.tsx` — wind leasing section with green accent

**Gallery:**
- `components/gallery/GalleryClient.tsx` — masonry grid with lightbox, keyboard nav

---

## Environment Variables
File: `.env.local` (not committed to GitHub — create from `.env.local.example`)

```
NEXT_PUBLIC_MAPBOX_TOKEN=    # from mapbox.com — needed for location map
NEXT_PUBLIC_SANITY_PROJECT_ID=  # from sanity.io — needed for CMS
NEXT_PUBLIC_SANITY_DATASET=production
FORMSPREE_ENDPOINT=          # from formspree.io — needed for contact form
```

Currently using placeholder values locally. The contact form and map won't work until real keys are added.

---

## What's Still Needed
- Real photos for `public/images/` (gallery is currently placeholder cards)
- Real Mapbox token for the service area / location maps
- Real Formspree endpoint for contact form submissions
- Sub-pages: `/about/history`, `/about/reach`, `/about/affiliations`, `/about/process`
- Sub-pages: `/services/brokerage`, `/services/technical`, `/services/wind`
- Logo image at `public/images/logo.png`

---

## Company Info
- **Name:** Meadows Oil & Gas Corporation
- **Founder:** Zach Meadows
- **Address:** 609 S. Kelly Ave., Suite G3, Edmond, OK 73003
- **Phone:** 405.285.8500
- **Fax:** 405.285.8598
- **Email:** info@meadowsoilandgas.com
- **LinkedIn:** https://www.linkedin.com/company/meadowsoil
- **Founded:** 2009
- **Affiliations:** AAPL (landman.org), OCAPL (ocapl.org)
- **Primary states:** Oklahoma, Kansas, Texas
