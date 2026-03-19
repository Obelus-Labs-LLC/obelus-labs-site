# Session Summary — March 19, 2026

**Project:** Obelus Labs LLC Website (obelus-labs-site)
**Session Duration:** Full working session
**Status:** All changes committed and pushed to GitHub

---

## What Was Accomplished

### 1. Full-Page RippleGrid Background
- Moved the RippleGrid WebGL canvas from the HeroSection to a fixed full-page background component (`PageBackground.tsx`)
- Dynamically imported with `next/dynamic` and `ssr: false` to avoid hydration issues
- Removed opaque `bg-brand-bg` backgrounds from all sections so the grid shows through
- All section content sits above the grid via `z-10`

### 2. Link Updates & Content Fixes
- **Guardian**: Link updated to `https://www.guardianonline.net` (private repo, has its own website)
- **WeThePeople**: Link set to `https://github.com/Obelus-Labs-LLC/WeThePeople`
- **Veritas**: Link set to `https://github.com/Obelus-Labs-LLC/Veritas`
- **Email**: Confirmed as `info@ObelusLabs.online`
- **"Founded by D'Shon S."**: Removed from About/Footer section

### 3. Vercel Analytics
- Installed `@vercel/analytics`
- Added `<Analytics />` component to root layout
- Committed and pushed

### 4. SEO & Metadata (Open Graph, Twitter Cards, JSON-LD)
- Added full Open Graph meta tags (`og:title`, `og:description`, `og:url`, `og:type`, `og:site_name`, `og:locale`)
- Added Twitter Card meta tags (`summary_large_image`)
- Added JSON-LD Organization schema with GitHub org link
- Set `metadataBase` to `https://obeluslabs.online`
- All verified via browser eval before pushing

### 5. Vercel Speed Insights
- Installed `@vercel/speed-insights`
- Added `<SpeedInsights />` component to root layout for real-user Core Web Vitals monitoring

### 6. robots.txt & Sitemap
- Created `src/app/robots.ts` — allows all crawlers, references sitemap
- Created `src/app/sitemap.ts` — lists homepage with monthly change frequency
- Both verified serving correctly via fetch

### 7. Research Documents (7 Files)
Created `research/` directory with comprehensive research on:

| # | File | Topic |
|---|------|-------|
| 1 | `vercel-webgl-performance.md` | ISR strategy, lazy-load WebGL, INP optimization, Edge Functions |
| 2 | `open-graph-structured-data.md` | Full OG tag reference, Twitter cards, JSON-LD, social crawler config |
| 3 | `non-technical-founder-positioning.md` | How Blakely, Neumann, Chesky, Hurley position themselves; language guide |
| 4 | `ai-assisted-development-landscape.md` | Agentic Engineering, AI Systems Architect role, Microsoft certs, industry data |
| 5 | `brand-identity-system.md` | Extracting brand from landing page, 6 core assets, omnichannel consistency |
| 6 | `llc-ip-protection-opensource.md` | AGPL/MIT/Proprietary licensing strategy, CLA, trademark registration |
| 7 | `analytics-platform-comparison.md` | Vercel Analytics vs Plausible vs PostHog vs Umami |

### 8. LinkedIn Profile Strategy
Developed full LinkedIn profile content:
- **Headline**: `Founder, Obelus Labs LLC | Systems Architect | Building FabricOS — a bare-metal OS from scratch`
- **Positioning**: Architect and visionary, not coder. "I design and build systems." No disclaimers about AI tools or not writing code.
- **Experience**: Grouped by domain (OS, Civic Tech, Quant Finance, Infrastructure)
- **Education**: Associate's Degree, Project Management — ITT Technical Institute
- **Skills**: Rust, Python, TypeScript, React, bare-metal programming, ML, etc.

### 9. Project Portfolio Scan
Scanned all 13 active projects to inform LinkedIn and understand full scope:

| Project | What It Is | Tech | Maturity |
|---------|-----------|------|----------|
| **FabricOS** | Bare-metal x86_64 microkernel | Rust no_std, 58K lines | 27 stress gates passing |
| **Covenant** | Constitutional AI layer for FabricOS | Rust no_std | 1,172 tests, Phase 27 |
| **Loom** | Bare-metal browser engine | Rust, 16 crates | Phase S complete, 1.9MB binary |
| **Weave** | Desktop shell/compositor | Rust no_std | Phase 16, 123KB binary |
| **Genesis** | Multi-project orchestrator | Directives/governance | 70 directives complete |
| **Guardian Desktop** | Crypto threat detection | Python + Electron + React Native | MVP |
| **WeThePeople** | Civic transparency platform | Python/FastAPI + React 19 | Production, live |
| **Veritas** | Deterministic fact-checking | Python, zero LLM | Alpha, 20 APIs |
| **HedgeBrain** | ML algorithmic trading | Python/FastAPI + React Native | Production on GCP |
| **HB Futures** | Automated futures trading | Python, asyncio | 187 tests, production |
| **Ouroboros** | DeFi yield farming + DePIN | Python/FastAPI | Paper trading + DePIN active |
| **GPU Research** | Bare-metal GPU driver research | Markdown/docs | 60+ research docs |
| **STRESS** | Resilience benchmarking framework | Python | v0.2 frozen spec |

### 10. DNS Troubleshooting
- Diagnosed `www.obeluslabs.online` resolving to wrong IP (34.10.118.17 instead of Vercel)
- Root domain `obeluslabs.online` confirmed working through Vercel
- Advised on Namecheap nameserver configuration (no IP needed, just ns1/ns2 hostnames)

### 11. Domain & Namecheap Guidance
- Clarified two Namecheap line items: domain registration vs. WhoisGuard privacy protection
- Recommended auto-renew on both (domain expires April 9, 2026)

---

## Git History After This Session

```
330e42f Add SEO metadata, Speed Insights, robots.txt, sitemap, and research docs
3405a3e Add Vercel Analytics to layout
87246bb Initial commit: Obelus Labs landing page
```

---

## Still Outstanding

- **OG Image**: Need a 1200x630px branded image for social link previews (dark bg, cyan accent, company name)
- **Favicon**: Need proper favicon files (currently just `/favicon.ico` reference)
- **DNS**: `www.obeluslabs.online` may still need CNAME fix at Namecheap
- **Licensing**: Apply AGPL to Veritas repo, MIT to WeThePeople repo, proprietary headers to Guardian
- **Trademarks**: Consider USPTO filings for Obelus Labs, Guardian, Veritas, WeThePeople ($250-350 each)
- **Microsoft Certs**: AB-100 (Agentic AI Business Solutions Architect) and AB-730 (AI Business Professional) for LinkedIn credentials
- **Brand Assets**: Logo files, social media templates, pitch deck template, email signature

---

## Memories Saved

- `user_profile.md` — D'Shon Smith, systems architect, directs AI to build projects
- `feedback_wethepeople_description.md` — Don't use specific data source counts, use qualitative descriptions

---

*Generated by Claude Code — Obelus Labs working session*
