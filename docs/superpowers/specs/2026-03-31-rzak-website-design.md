# RZAK.com Website Design Spec

## Overview

Production website for RZAK, a financial operations firm serving high-income individuals and multi-entity businesses. Converting a Google Sites (Stitch) export into a Next.js application with bold GSAP animations.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v3
- **Animations:** GSAP 3 (ScrollTrigger)
- **Fonts:** Inter (all weights 400-900)
- **Icons:** Material Symbols Outlined
- **Deployment:** Vercel
- **Language:** TypeScript

## Pages

6 pages:
1. **Home** (`/`) — Hero with dark gradient overlay, problem statement, core capabilities, how we work preview, insights preview, CTA
2. **What We Do** (`/what-we-do`) — Hero, bento grid of services (Oversight, Control, Execution, Protection, Growth), CTA
3. **How We Work** (`/how-we-work`) — Hero with offset image, 3-phase process strip (Assess/Build/Run), editorial quote, results engineering, CTA
4. **Who We Work With** (`/who-we-work-with`) — Hero, client bento grid (Founders, Public Figures, Operators, High-Income), marquee strip, CTA
5. **Insights** (`/insights`) — Hero with efficiency stat, bento grid of 5 articles, newsletter/analysis form, data ticker strip
6. **Contact** (`/contact`) — Hero with form, encrypted channels notice, full-bleed image, global presence strip

## Design System

### Colors

| Token | Hex | Usage |
|---|---|---|
| `surface` | `#fcf9f5` | Page background (warm cream) |
| `surface-container-low` | `#f6f3ef` | Secondary sections |
| `surface-container` | `#f0ede9` | Content groupings |
| `surface-container-high` | `#ebe8e4` | Distinct blocks |
| `surface-container-highest` | `#e5e2de` | Prominent callouts |
| `surface-container-lowest` | `#ffffff` | Cards, forms |
| `surface-dim` | `#dcdad6` | Image placeholders |
| `primary` | `#0b0f11` | Headlines, ink black |
| `primary-container` | `#212427` | Dark section backgrounds |
| `secondary` | `#006d32` | Green accent, CTAs, active states |
| `secondary-container` | `#6ffe97` | Vibrant lime green CTAs |
| `on-primary` | `#ffffff` | Text on dark |
| `on-primary-container` | `#898b8f` | Secondary text on dark |
| `on-secondary` | `#ffffff` | Text on green |
| `on-secondary-container` | `#007436` | Text on lime green |
| `on-surface` | `#1c1c19` | Body text |
| `on-surface-variant` | `#44474a` | Secondary body text |
| `outline` | `#75777a` | Input borders |
| `outline-variant` | `#c5c6ca` | Ghost borders |
| `secondary-fixed` | `#6ffe97` | Bright green accent |
| `secondary-fixed-dim` | `#4fe07e` | Muted green |
| `error` | `#ba1a1a` | Form validation |

### Typography

All Inter font:
- **Display:** 3.5rem, weight 700, tracking -0.02em — hero statements
- **Headline:** 2.0rem, weight 600, tracking -0.02em — section headers
- **Title:** 1.125rem, weight 600 — card titles
- **Body:** 1rem, weight 400 — paragraphs
- **Label:** 0.75rem, weight 700, uppercase, tracking 0.05em — metadata tags

### Design Rules

1. **Subtle rounded corners** — DEFAULT 0.125rem, lg 0.25rem, xl 0.5rem (NOT zero like Rockesh)
2. **No 1px borders for sectioning** — use background color shifts
3. **Ghost borders** — `outline-variant` at 20% opacity for accessibility
4. **Glassmorphic nav** — `bg-stone-50/80 backdrop-blur-xl`
5. **Ambient shadows** — `box-shadow: 0 20px 40px rgba(28,28,25,0.06)` for floating elements
6. **Tonal layering** — depth via surface container tiers
7. **Signature gradient** — primary to primary-container for hero sections
8. **Green accent sparingly** — secondary (#006d32) for CTAs, active states, icons
9. **Marquee strip** — scrolling text bar as signature component

### GSAP Animations

| Animation | Where Used |
|---|---|
| Text reveal (lines) | Hero headlines on every page |
| Staggered fade-up | Service cards, bento grid items, process phases |
| Parallax | Hero background images |
| Counter animation | Stats (efficiency percentages) |
| Marquee | Insight strip ticker |
| Hover scale + grayscale removal | Insight article images |
| Clip-path reveal | Full-bleed image sections |

## Page Content (summarized from HTML export)

### Home
1. Hero — full-screen dark with gradient overlay, "Most money isn't lost in big decisions..." headline, CTA + italic tagline
2. Problem — sticky headline left, scrolling text right with image
3. Core Capabilities — 5-col grid (Oversight, Control, Execution, Protection, Growth) with Material icons
4. How We Work Preview — dark section, 3-card grid (Assess/Build/Run) with ghost numbers
5. Insights Preview — 3 article cards with hover effects
6. CTA — dark bg, "Ready to secure your financial infrastructure?"

### What We Do
1. Hero — "Precision Operational Oversight." with 21:9 image overlay
2. Services Bento Grid — Oversight (7-col), Control (5-col dark), Execution (4-col), Protection (4-col), green texture (4-col), Growth & Optimization (12-col with green left border)
3. CTA — "Ready to institutionalize your personal operations?"

### How We Work
1. Hero — "The Architecture of Financial Sovereignty." with offset grayscale image
2. Process Strip — 3 dark phases (Assess/Build/Run) with checklist items, hover effects
3. Editorial Quote — "Financial operational excellence isn't a one-time event..."
4. Results Engineering — split layout with bordered items + dark image
5. CTA — "Ready to stabilize your growth?"

### Who We Work With
1. Hero — "Who We Work With" headline
2. Client Bento Grid — Founders (7-col), Public Figures (5-col dark), Operators (5-col), High-Income (7-col with image)
3. Marquee Strip — scrolling text
4. CTA — "We are the backbone for the modern sovereign."

### Insights
1. Hero — "Critical Insights" with efficiency stat card
2. Bento Grid — 5 articles (7-col feature, 5-col dark, three 4-col cards)
3. Newsletter Form — dark section with email input
4. Data Ticker — scrolling strip with icons and stats

### Contact
1. Hero Split — left: headline, email, encrypted channels notice / right: form (name, email, message, submit)
2. Full-bleed Image — "Built for Sovereignty." overlay
3. Global Presence — dark strip with 4 cities (Zurich, Singapore, London, New York)

## Shared Components

### Navbar
- Sticky, glassmorphic (`bg-stone-50/80 backdrop-blur-xl`)
- Logo: "RZAK" bold tracking-tighter
- Links: Inter semibold, active = emerald-800 with bottom border
- CTA: "Consultation" / "Get Started" green bg
- Mobile hamburger

### Footer
- Dark bg (`#0b0f11`), border-top
- 4-col: brand, services links, company links, contact
- Bottom row: copyright + legal links
- Link hover: lime green (#6ffe97)

### Marquee Strip
- `primary-container` bg, scrolling text with CSS animation
- Used on Who We Work With and Insights pages

## SEO
- Per-page metadata via Next.js Metadata API
- Semantic HTML
- next/image with remote patterns for lh3.googleusercontent.com

## Contact Form
- Frontend-only (no backend)
- Fields: Name, Email, Message
- Minimalist bottom-border inputs, focus → green border
- "Initialize Protocol" submit button
