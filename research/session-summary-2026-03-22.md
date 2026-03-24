# Session Summary — March 22, 2026

## Obelus Labs Site — Session Work

### Changes Made to the Website

1. **Full-page RippleGrid background** — Moved the WebGL RippleGrid animation from the Hero section to a fixed full-page background (`PageBackground.tsx`). All section backgrounds made transparent so the animated grid shows through the entire site. Uses `next/dynamic` with `ssr: false` for client-only rendering.

2. **Removed "Founded by D'Shon S."** — Confirmed already removed from `AboutFooterSection.tsx` in a prior session. No founder credit on the site.

3. **Email corrected** — Confirmed already set to `info@ObelusLabs.online` in footer.

4. **Product links verified** — All three product cards link correctly:
   - Guardian → `https://www.guardianonline.net` (private project, has its own website)
   - WeThePeople → `https://github.com/Obelus-Labs-LLC/WeThePeople` (public GitHub)
   - Veritas → `https://github.com/Obelus-Labs-LLC/Veritas` (public GitHub)

5. **Security audit completed** — Rating: 8.5/10. No vulnerabilities, no exposed secrets, proper security headers configured, zero npm audit issues. Only recommendation: add Content-Security-Policy header.

---

### LinkedIn Profile Strategy

Drafted and refined a LinkedIn profile for D'Shon Smith based on a full scan of 13 Obelus Labs projects. Key decisions:

- **Title:** Founder & Systems Architect (not engineer — architect reflects the actual role)
- **No disclaimers about AI-assisted development** — Steve Jobs never said "I don't solder circuit boards." You built it, how you built it is your business.
- **No "Founded by D'Shon S."** on the website — the company speaks for itself
- **WeThePeople description** uses "verified official data sources" instead of "24+ data sources" — avoids sounding limiting

**About section (final version):**
> I design and build systems — operating systems, civic platforms, trading engines. Obelus Labs is my company.
>
> Our flagship is FabricOS: a bare-metal x86_64 microkernel in Rust with a custom browser engine, desktop shell, and constitutional AI layer. No Linux. No libc. No shortcuts.
>
> We also ship civic tech — WeThePeople (political transparency platform aggregating verified official data sources), Veritas (deterministic fact-checking engine), and Guardian (crypto threat detection).
>
> On the quantitative side — HedgeBrain (ML-powered equity trading) and HB Futures (automated futures trading).

**Certification opportunity:** Microsoft AB-100 (Agentic AI Business Solutions Architect) — $165 exam, no prerequisites, proctored online. Validates designing AI agent systems, which is literally what D'Shon does. AB-730 (AI Business Professional) is the easier entry-level cert, explicitly says "no coding required."

---

### Project Scan Results (13 Projects)

All projects scanned to inform LinkedIn profile and overall portfolio assessment:

| Project | What It Is | Tech | Maturity |
|---------|-----------|------|----------|
| **FabricOS** | Bare-metal x86_64 microkernel | Rust (58K lines), no_std, V8 | 27 stress gates passing, production-capable |
| **Covenant** | AI constitution/governance for FabricOS | Rust no_std | 1,172 tests, Phase 27 complete |
| **Loom** | Bare-metal browser engine | Rust, 16 crates | Phase S complete, 1.9MB binary |
| **Weave** | Desktop compositor/shell | Rust no_std | Phase 16 complete, 123KB binary |
| **Genesis** | Multi-project orchestrator | Rust ecosystem | 70 directives issued, all complete |
| **WeThePeople** | Civic transparency platform | Python/FastAPI + React 19 | Production, live at wethepeopleforus.com |
| **Veritas** | Deterministic fact-checking | Python, 20 APIs | Alpha, active development |
| **Guardian** | Crypto threat detection | Python + Electron + React Native | MVP, 7-signal fusion engine |
| **HedgeBrain** | ML-powered equity trading | Python/FastAPI + React Native | Production on GCP |
| **HB Futures** | Automated futures trading | Python, asyncio | 187 tests, production-ready |
| **Ouroboros** | DeFi yield farming + DePIN | Python/FastAPI | Paper trading + live DePIN |
| **GPU Research** | Bare-metal GPU driver research | Markdown/analysis | 60 documents, early research |
| **STRESS** | Resilience benchmarking framework | Python | v0.2 frozen spec |

---

### Research Documents Generated

7 research documents created in `research/` folder:

1. `vercel-webgl-performance.md` — ISR for static shell, lazy-load WebGL, INP optimization
2. `open-graph-structured-data.md` — Full OG/Twitter/JSON-LD implementation guide
3. `non-technical-founder-positioning.md` — How non-technical founders present themselves
4. `ai-assisted-development-landscape.md` — "Agentic Engineering" as recognized role, AB-100 cert
5. `brand-identity-system.md` — Extending landing page design into full brand system
6. `llc-ip-protection-opensource.md` — AGPL/MIT/proprietary licensing strategy
7. `analytics-platform-comparison.md` — Vercel Analytics vs PostHog vs Plausible vs Umami

Plus: `ai-revolution-state-of-play-2026.md` — Comprehensive state of AI-assisted development landscape

---

### Configuration & Memory Updates

- **autoPort enabled** in `.claude/launch.json` — dev server finds open port instead of conflicting
- **Memory saved:** Never kill processes on ports
- **Memory saved:** Don't run preview servers for this project — user checks live site
- **Memory saved (prior):** Don't use specific data source counts for WeThePeople

---

### Pending / Not Yet Done

- **Commit and push current changes** — RippleGrid move to full-page, transparent section backgrounds
- **DNS setup** — User is configuring Namecheap nameservers to point to Vercel (ns1.vercel-dns.com, ns2.vercel-dns.com). IP addresses are not needed — just the nameserver hostnames.
- **Namecheap domain renewal** — Domain expires April 9, 2026. Auto-renew should be ON for both domain registration and WhoisGuard privacy protection.
- **CSP header** — Recommended but not blocking. Can add to next.config.ts when ready.
