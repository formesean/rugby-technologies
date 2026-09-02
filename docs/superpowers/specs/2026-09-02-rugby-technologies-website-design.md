# Rugby Technologies Website Design

## Purpose

Build a fast, approachable one-page business website for Rugby Technologies. The site should explain the business clearly, establish credibility without a portfolio or testimonials, and turn interested visitors into project conversations through email.

The structure may take inspiration from XYLVIR's clear studio narrative, but the copy, visual identity, and implementation must be original to Rugby Technologies.

## Audience

- Startups and small businesses
- Nonprofits, communities, and other organizations of any size
- Clients in the Philippines and international clients working remotely

The site must not position Rugby Technologies toward established corporate or enterprise buyers.

## Positioning

Rugby Technologies is an accessible long-term technology partner that communicates clearly and delivers practical solutions quickly. Its four service categories are:

1. Websites
2. Custom software and web applications
3. Workflow automation and system integrations
4. IT and technology consulting

The site speaks as Rugby Technologies. It must not name Sean Aguilar, describe a founder, show a personal portrait, link to a personal portfolio, imply a larger team, or use sports-related language or imagery.

## Goals

- Let visitors understand the offer within the hero and services sections.
- Make the intended audience and global availability explicit.
- Establish trust through clear principles, a transparent process, and a factual technology capability list.
- Make starting a conversation easy from every major page stage.
- Ship as a small, fast static site with minimal maintenance.

## Non-goals

- Portfolio or case studies
- Testimonials, client logos, or unverified metrics
- Founder or team profiles
- Blog, CMS, database, or authentication
- Contact form or server-side email delivery
- Analytics, scheduling, pricing calculator, or customer portal
- Separate service, contact, privacy, or terms pages
- A custom image logo, mascot, or sports motif

## Content Architecture

The page follows this order:

1. Sticky header
2. Hero
3. Services
4. Principles
5. Process
6. Technology capabilities
7. Frequently asked questions
8. Final call to action
9. Footer

Header navigation links scroll to Services, Approach, and FAQ. The header and final call to action use the label `Start Your Project`.

### Hero

- Eyebrow: `Websites • Software • Automation • Consulting`
- Heading: `Practical technology, built around your business.`
- Body: `Rugby Technologies helps startups, small businesses, nonprofits, and organizations turn ideas and repetitive work into clear, reliable digital solutions—across the Philippines and worldwide.`
- Primary action: `Start Your Project`
- Secondary action: `Explore Services`, linking to the Services section

The hero includes decorative geometric shapes and a subtle grid. These are presentational only and hidden from assistive technology.

### Services

Heading: `Useful technology, without the unnecessary complexity.`

Four numbered cards:

1. `Websites` — `Fast, responsive websites that explain your work clearly and make it easy for customers to take the next step.`
2. `Custom Software` — `Purpose-built web applications that replace awkward processes and fit the way your organization actually works.`
3. `Automation` — `Connected tools and reliable workflows that reduce repetitive work, manual handoffs, and avoidable errors.`
4. `IT Consulting` — `Practical guidance on technology choices, system improvements, integrations, and the clearest path from idea to launch.`

### Principles

Heading: `A straightforward way to build.`

Four principles:

1. `Clear communication` — Direct updates and explanations without unnecessary jargon.
2. `Practical delivery` — Technology choices follow the business need, not trends.
3. `Accessible partnership` — Scope and pricing stay understandable for smaller organizations.
4. `Built for the long term` — Solutions should remain reliable, maintainable, and useful after launch.

Do not promise a response time, fixed price, or delivery duration.

### Process

Heading: `From problem to useful solution.`

Three steps:

1. `Understand` — Clarify the problem, users, constraints, and most valuable first release.
2. `Build` — Work in focused milestones with clear communication and visible progress.
3. `Launch & support` — Release carefully, document the result, and agree on any continuing support.

### Technology Capabilities

Heading: `A production-ready toolkit.`

Show a compact text-based strip for Next.js, TypeScript, React, Node.js, PostgreSQL, Supabase, REST APIs, Docker, Google Cloud, Make.com, and Xano. These are factual capability signals, not promises that every project will use every tool. Do not use third-party logos.

### Frequently Asked Questions

Use native `details` and `summary` elements so the section works without client-side JavaScript.

1. `What can Rugby Technologies build?`
   `Websites, custom web applications, workflow automations, system integrations, and practical technology improvements shaped around a real business need.`
2. `Who do you work with?`
   `Startups, small businesses, nonprofits, communities, and organizations that want a clear, dependable technology partner.`
3. `How long does a project take?`
   `Every project is different. After a short discovery conversation, you will receive a recommended scope, milestones, and a realistic timeline.`
4. `How does pricing work?`
   `Pricing depends on scope, complexity, and support needs. You will receive a clear proposal before project work begins.`
5. `Can you improve or connect existing systems?`
   `Yes. Rugby Technologies can review an existing setup, improve a workflow, and connect tools through APIs and automation where appropriate.`
6. `Do you work with clients outside the Philippines?`
   `Yes. Projects can be delivered remotely for clients in the Philippines and worldwide.`
7. `What happens after launch?`
   `The project includes an agreed handoff, documentation where needed, and optional continuing support based on the scope.`

### Contact

Every `Start Your Project` action uses this pre-addressed link:

```text
mailto:seanaguilar698@gmail.com?subject=Project%20inquiry%20for%20Rugby%20Technologies&body=Hi%20Rugby%20Technologies%2C%0A%0AI%27d%20like%20help%20with%3A%0A%0AMy%20goal%20is%3A%0A%0AIdeal%20timeline%3A%0A%0AThanks%21
```

The final section uses:

- Heading: `Have a problem technology could make simpler?`
- Body: `Tell Rugby Technologies what you are trying to improve. We will start with the problem and find the smallest useful path forward.`
- Action: `Start Your Project`
- Visible fallback: `seanaguilar698@gmail.com`

The footer shows `© 2026 Rugby Technologies` and the email address. It does not include privacy or terms links because the site collects no data and has no form or analytics.

## Visual Design

### Identity

Use a text-only `Rugby Technologies` wordmark. `Rugby` has no relationship to the sport, so the design must not use balls, fields, stripes, crests, sports typography, or athletic language.

### Palette

- Warm canvas: `#F7F4EC`
- White surface: `#FFFDF8`
- Deep charcoal: `#17191F`
- Muted dark text: `#62656F`
- Electric blue: `#4F6BFF`
- Lime highlight: `#C9F06B`
- Coral highlight: `#FF7A68`

Electric blue is the primary action color. Lime and coral appear only in small decorative details, labels, or section markers so the site remains professional.

### Typography and Layout

- Use the existing Geist Sans and Geist Mono fonts.
- Use a centered content width of approximately 72rem with fluid side padding.
- Alternate warm light sections with deep charcoal sections to create a balanced light/dark rhythm.
- Use large headings, generous whitespace, rounded cards, oversized numbers, and offset geometric details.
- Preserve a clear reading order and avoid decorative elements that overlap text.

### Motion

- Use CSS transitions for buttons, links, cards, and FAQ indicators.
- Decorative hero shapes may drift slowly using CSS keyframes.
- Avoid scroll-jacking, carousels, canvas, animation libraries, and motion needed to understand content.
- Under `prefers-reduced-motion: reduce`, disable decorative animation and nonessential transitions.

## Technical Architecture

- Keep Next.js 16.3.4, React 19.2.8, TypeScript, Tailwind CSS 4, and the App Router already installed in the repository.
- Keep `app/page.tsx` as a Server Component. No `use client` boundary is needed.
- Keep all static page copy and markup in `app/page.tsx`; the page is too small to justify a component directory or content layer.
- Define the visual system and the few reusable CSS patterns in `app/globals.css` alongside Tailwind utilities.
- Update `app/layout.tsx` with the Rugby Technologies metadata and existing Geist font setup.
- Do not add packages, runtime data fetching, environment variables, API routes, or deployment-specific configuration.
- Use native anchor links and native `details` elements for interaction.

## Metadata

- Title: `Rugby Technologies | Websites, Software & Automation`
- Description: `Practical websites, custom software, workflow automation, and IT consulting for startups, small businesses, nonprofits, and organizations in the Philippines and worldwide.`
- Keep the existing favicon for this first release; a custom favicon belongs to a later logo task.
- Do not add canonical, Open Graph URL, or sitemap values until a production domain is known.

## Accessibility

- Use one `h1` and sequential section headings.
- Include a skip link to the main content.
- Give navigation and section landmarks accessible labels where needed.
- Keep all text and controls above WCAG AA contrast targets.
- Use visible `:focus-visible` styles for links and interactive FAQ summaries.
- Keep touch targets at least 44px tall where practical.
- Mark decorative shapes `aria-hidden="true"`.
- Ensure the sticky header does not cover anchored headings.
- Keep the email address visible when a visitor cannot or does not want to open a mail client.

## Responsive Behavior

- Mobile uses a compact wrapping header without a JavaScript menu.
- Service and principle cards stack on small screens and become two columns when space permits.
- Process steps remain vertical on mobile and form three columns on larger screens.
- Technology labels wrap naturally without a marquee.
- Hero text and decorative geometry scale with `clamp()` and never create horizontal scrolling.

## Verification

Run only after the user approves verification:

1. `pnpm lint`
2. `pnpm build`
3. Inspect the page at narrow mobile, tablet, and desktop widths.
4. Navigate the full page by keyboard and confirm visible focus.
5. Confirm reduced-motion behavior.
6. Confirm every section link reaches the correct heading without header overlap.
7. Confirm every `Start Your Project` link contains the approved recipient, subject, and body.
8. Confirm the page contains no Sean Aguilar reference, sports language, portfolio, testimonials, fabricated metrics, or corporate/enterprise positioning.

## Acceptance Criteria

- The site is a polished, original one-page Rugby Technologies website with the approved balanced dark/light and playful aesthetic.
- A first-time visitor can identify all four services, intended clients, and service area from the page.
- The design contains no sports associations and no personal founder identity.
- The page has no portfolio section or invented credibility claims.
- Every primary call to action opens a pre-addressed email to `seanaguilar698@gmail.com`.
- The page remains usable without client-side JavaScript and respects reduced-motion preferences.
- No dependency, backend, form service, or unnecessary abstraction is added.
