# RZAK.com Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development to implement this plan task-by-task.

**Goal:** Build a 6-page production Next.js website for RZAK financial operations firm with bold GSAP animations.

**Architecture:** Next.js 15 App Router with shared layout (Navbar + Footer), reusable GSAP animation components ("use client"), and static page content. All styling via Tailwind v3 with the exported design system colors.

**Tech Stack:** Next.js 15, Tailwind CSS v3, GSAP 3 + ScrollTrigger, TypeScript, Vercel

**Spec:** `docs/superpowers/specs/2026-03-31-rzak-website-design.md`

**Source HTML:** `E:/Downloads/rzak/stitch/` (6 pages of HTML + 1 DESIGN.md)

---

## Task Overview

1. Project Scaffolding & Configuration
2. GSAP Animation Components
3. Shared UI & Layout Components (Navbar, Footer, Marquee)
4. Home Page
5. What We Do Page
6. How We Work Page
7. Who We Work With Page
8. Insights Page
9. Contact Page
10. Final Build Verification & Cleanup

---

### Task 1: Project Scaffolding & Configuration

Scaffold Next.js project at E:/rzak.com with Tailwind v3, GSAP, and the full RZAK color system.

**Steps:**
1. Run `npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm` (scaffold in temp dir if needed to preserve existing files)
2. Install GSAP: `npm install gsap`
3. Downgrade to Tailwind v3 if create-next-app ships v4 (install `tailwindcss@^3 postcss autoprefixer`, update postcss config)
4. Create `tailwind.config.ts` with full RZAK color system from the spec (all surface, primary, secondary, tertiary, on-* tokens), fontFamily (Inter only), borderRadius (DEFAULT 0.125rem, lg 0.25rem, xl 0.5rem, full 0.75rem)
5. Create `src/styles/globals.css` with Tailwind directives, base styles, custom utility classes (`.text-display-lg`, `.text-headline-lg`, `.text-title-md`, `.text-label-md`, `.shadow-ambient`, `.material-symbols-outlined`)
6. Update `next.config.ts` with remote image patterns for `lh3.googleusercontent.com`
7. Update `src/app/layout.tsx` to import Inter font, globals.css, and Material Symbols link
8. Verify build, commit

---

### Task 2: GSAP Animation Components

Create the same animation component pattern as Rockesh but adapted for RZAK:

**Files:**
- `src/components/animations/GSAPProvider.tsx` — registers ScrollTrigger
- `src/components/animations/TextReveal.tsx` — line-by-line text reveal
- `src/components/animations/FadeIn.tsx` — fade + translate with stagger support
- `src/components/animations/Marquee.tsx` — CSS-animated scrolling text strip (signature component)

The GSAPProvider, TextReveal, and FadeIn components should be identical to the Rockesh versions. The Marquee is new:

```tsx
// Marquee.tsx
"use client";
export default function Marquee({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div className="flex animate-marquee">
        {children}
        {children}
      </div>
    </div>
  );
}
```

Add marquee keyframes to globals.css:
```css
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.animate-marquee {
  display: flex;
  width: 200%;
  animation: marquee 30s linear infinite;
}
```

Verify build, commit.

---

### Task 3: Shared UI & Layout Components

**Files:**
- `src/components/layout/Navbar.tsx` — glassmorphic sticky nav with active link states
- `src/components/layout/Footer.tsx` — dark footer
- `src/app/layout.tsx` — update with Navbar, Footer, GSAPProvider

**Navbar:** Sticky, `bg-stone-50/80 backdrop-blur-xl`, logo "RZAK", 5 nav links (What We Do, How We Work, Who We Work With, Insights, Contact), active state = `text-emerald-800 border-b-2 border-emerald-800`, CTA button `bg-secondary text-on-secondary`. Mobile hamburger menu.

**Footer:** Dark bg `#0b0f11`, 4-col grid (brand, services, company, contact), bottom copyright row. Link hover = `#6ffe97`.

**Layout:** Import Inter from next/font/google (weights 400-900), wrap children with GSAPProvider, Navbar, Footer. Material Symbols link in head.

Verify build, commit.

---

### Task 4: Home Page

**File:** `src/app/page.tsx`

Build all 6 sections from the home HTML export. Key sections:
1. **Hero** — full-screen with dark gradient overlay (`from-primary via-primary/95 to-transparent`), background image, "Sovereign Financial Oversight" label, "Most money isn't lost in big decisions..." headline, description, CTA button + italic tagline
2. **Problem** — sticky headline left col, scrolling text right col with image
3. **Core Capabilities** — "Strategic Financial Infrastructure" with 5-col grid (Oversight, Control, Execution, Protection, Growth) using Material icons
4. **How We Work Preview** — dark `primary-container` bg, headline left, 3-card grid (Assess/Build/Run) with ghost numbers
5. **Insights Preview** — 3 article cards with hover image scale
6. **CTA** — dark bg, "Ready to secure your financial infrastructure?"

Use TextReveal for hero headline, FadeIn with stagger for grid items. Include all image URLs from the export HTML.

Verify build, commit.

---

### Task 5: What We Do Page

**File:** `src/app/what-we-do/page.tsx`

Build from the what_we_do_rzak HTML export:
1. **Hero** — "Precision Operational Oversight." headline, 21:9 image with gradient overlay
2. **Services Bento Grid** — Oversight (7-col, light bg), Control (5-col, dark bg), Execution (4-col), Protection (4-col), green texture panel (4-col), Growth & Optimization (12-col with green left border + icon grid)
3. **CTA** — dark rounded card, "Ready to institutionalize your personal operations?"

Verify build, commit.

---

### Task 6: How We Work Page

**File:** `src/app/how-we-work/page.tsx`

Build from the how_we_work_rzak HTML export:
1. **Hero** — "The Architecture of Financial Sovereignty." with offset grayscale image
2. **Process Strip** — dark bg, 3-col (Assess/Build/Run) with large numbers, checklist items, hover bg change
3. **Editorial Quote** — large italic quote in light bg container
4. **Results Engineering** — split layout with bordered items left + image right
5. **CTA** — "Ready to stabilize your growth?" with dual buttons

Verify build, commit.

---

### Task 7: Who We Work With Page

**File:** `src/app/who-we-work-with/page.tsx`

Build from the who_we_work_with_rzak HTML export:
1. **Hero** — "Who We Work With" headline
2. **Client Bento Grid** — Founders (7-col light with bg image), Public Figures (5-col dark), Operators (5-col), High-Income (7-col with side image)
3. **Marquee Strip** — dark bg scrolling text
4. **CTA** — "We are the backbone for the modern sovereign."

Verify build, commit.

---

### Task 8: Insights Page

**File:** `src/app/insights/page.tsx`

Build from the insights_rzak HTML export:
1. **Hero** — "Critical Insights" with efficiency stat card
2. **Bento Grid** — 5 articles in asymmetric grid (large feature 7-col, dark 5-col, three 4-col cards)
3. **Newsletter Form** — dark section with email input + submit
4. **Data Ticker** — scrolling strip with icons and stats using Marquee component

Verify build, commit.

---

### Task 9: Contact Page

**File:** `src/app/contact/page.tsx`

Build from the contact_rzak HTML export:
1. **Hero Split** — left: "Discreet Consultation" headline, email link, encrypted channels notice / right: form with bottom-border inputs
2. **Full-bleed Image** — "Built for Sovereignty." overlay
3. **Global Presence Strip** — dark bg with 4 cities

Verify build, commit.

---

### Task 10: Final Build Verification & Cleanup

1. Remove boilerplate SVGs from public/
2. Add `.superpowers/` to .gitignore
3. Full production build — verify all 6 routes statically generated
4. Commit
