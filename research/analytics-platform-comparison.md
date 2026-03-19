# Vercel Analytics vs Plausible vs PostHog vs Umami

**Obelus Labs Research Document #7**
**Date:** March 2026
**Category:** Tooling & Infrastructure

---

## Overview

Obelus Labs recently installed Vercel Analytics on the landing page. This document evaluates whether that is the right long-term choice by comparing it against three alternatives: Plausible, PostHog, and Umami. The comparison covers pricing, privacy compliance, features, and fit for different stages of growth.

---

## Comparison Table

| Feature | Vercel Analytics | Plausible | PostHog | Umami |
|---------|-----------------|-----------|---------|-------|
| **Free Tier** | 50K events/mo (Hobby) | None ($9/mo minimum) | 1M events/mo | Self-host: unlimited / Cloud: 1M events/mo |
| **Paid Pricing** | $3 per 100K events (Pro) | From $9/mo (10K pageviews) | Usage-based after free tier | Cloud: usage-based after free tier |
| **Cookies** | No | No | Configurable | No |
| **GDPR Compliant** | Yes | Yes | Yes | Yes |
| **CCPA Compliant** | Yes | Yes | Yes | Yes |
| **EU Data Residency** | No | Yes (EU hosted) | Yes (EU hosting available) | Self-host: you control location |
| **Script Size** | Built-in (no extra script for Vercel projects) | ~1KB | ~5KB | ~2KB |
| **Real-time Dashboard** | Yes | Yes | Yes | Yes |
| **Pageviews** | Yes | Yes | Yes | Yes |
| **Referrers** | Yes | Yes | Yes | Yes |
| **Country/Device** | Yes | Yes | Yes | Yes |
| **Custom Events** | Yes (limited) | Yes | Yes | Yes |
| **Goals/Conversions** | No | Yes | Yes | Yes (funnels) |
| **Funnels** | No | No | Yes | Yes |
| **User Journeys** | No | No | Yes | Yes |
| **Session Replay** | No | No | Yes (5K free/mo) | No |
| **Feature Flags** | No | No | Yes (1M free/mo) | No |
| **A/B Testing** | No | No | Yes | No |
| **Surveys** | No | No | Yes | No |
| **Heatmaps** | No | No | Yes | No |
| **Email/Slack Reports** | No | Yes | Yes | No |
| **API Access** | Yes | Yes | Yes | Yes |
| **Self-Host Option** | No | Yes (AGPL, community edition) | Yes (MIT) | Yes (MIT) |
| **SOC 2** | Yes (Vercel platform) | No | Yes | No |
| **HIPAA Ready** | No | No | Yes | No |

---

## Detailed Analysis

### Vercel Analytics

**What it is:** A built-in analytics service for Vercel-deployed projects. Zero-config for Vercel users.

**Strengths:**
- No additional setup required for Vercel projects
- No cookies, no PII collection
- Integrated into the Vercel dashboard
- Web Vitals tracking (Core Web Vitals performance data)
- No impact on bundle size for Next.js projects

**Limitations:**
- 50K events/month on Hobby plan (sufficient for a landing page, tight for growth)
- No funnels, session replays, or user journey analysis
- No EU data residency option
- Basic feature set — pageviews, referrers, countries, devices
- Locked into Vercel ecosystem

**Best for:** Teams already on Vercel that need basic, privacy-compliant analytics with zero setup effort.

---

### Plausible

**What it is:** A privacy-first, cookieless analytics platform with a focus on simplicity and compliance.

**Strengths:**
- Beautiful, minimal dashboard — everything on one page
- Fully cookieless, no consent banners needed
- EU hosted by default (data never leaves the EU)
- Lightweight script (~1KB)
- Goal tracking and custom events
- Email and Slack report scheduling
- Open source (AGPL) with self-host option

**Limitations:**
- No free tier ($9/month minimum)
- No session replay, heatmaps, or product analytics
- No A/B testing or feature flags
- Self-hosted community edition has limitations compared to cloud
- Less suited for complex product analytics needs

**Best for:** Teams that prioritize simplicity and privacy above all else and want a clean, focused dashboard.

---

### PostHog

**What it is:** An all-in-one product analytics platform that combines analytics, session replay, feature flags, A/B testing, and surveys.

**Strengths:**
- Generous free tier: 1M events/month, 5K session replays, 1M feature flag evaluations
- 90% of users reportedly pay nothing
- All-in-one platform eliminates need for multiple tools
- Session replay for debugging user experience issues
- Feature flags for gradual rollouts
- A/B testing built in
- SOC 2 certified, HIPAA ready
- EU hosting available
- Self-hostable (MIT license)
- Strong API and integrations

**Limitations:**
- More complex than simple analytics tools
- Heavier script (~5KB)
- Can be overwhelming if you only need pageview counts
- Learning curve for the full feature set

**Best for:** Engineering teams that want a single platform for analytics, experimentation, and user research. Especially valuable when building product dashboards (Guardian, Veritas).

---

### Umami

**What it is:** A lightweight, self-hostable, open-source analytics platform.

**Strengths:**
- Self-hosted version is completely free with unlimited events (MIT license)
- Cloud version offers 1M events/month free
- Extremely lightweight (~2KB script)
- GDPR compliant, cookieless
- Includes user journeys and funnels (more than Vercel or Plausible)
- Simple, clean interface
- Full data ownership when self-hosted
- Easy to deploy (Docker, Vercel, Railway, etc.)

**Limitations:**
- No session replay
- No feature flags or A/B testing
- No heatmaps
- Smaller community and ecosystem than PostHog
- Self-hosting requires maintenance

**Best for:** Budget-conscious teams that want more than basic analytics without paying, especially those comfortable with self-hosting.

---

## Recommendation for Obelus Labs

### Current State (Landing Page Only)

**Keep Vercel Analytics.** It is already installed, requires zero additional configuration, and provides adequate data for a landing page. At the landing page stage, you primarily need:

- How many people visit
- Where they come from
- What devices they use
- Basic geographic distribution

Vercel Analytics covers all of these. The 50K events/month free tier is sufficient for a landing page.

### Next Phase (Product Dashboards for Guardian / Veritas)

**Switch to PostHog.** When Obelus Labs begins shipping product interfaces, the analytics needs change significantly:

- **Funnels:** Where do users drop off in onboarding?
- **Session Replay:** What are users doing when they encounter bugs?
- **Feature Flags:** Roll out new features to 10% of users first
- **A/B Testing:** Which dashboard layout converts better?
- **Custom Events:** Track specific actions (query submitted, report generated, alert configured)

PostHog covers all of this with 1M free events/month. The SOC 2 certification matters for enterprise sales (Guardian). EU hosting is available for compliance.

### Alternative: Simple and Cheap

If the goal is purely simple, privacy-first analytics without product analytics needs, **Plausible at $9/month** provides the cleanest experience. It is worth considering if PostHog feels like overkill.

### Migration Path

1. **Now:** Continue with Vercel Analytics (no action needed)
2. **When building product UIs:** Install PostHog alongside Vercel Analytics
3. **Evaluate after 30 days:** Compare data, assess whether both are needed
4. **Consolidate:** Drop Vercel Analytics if PostHog covers everything

---

## Cost Comparison at Scale

| Monthly Events | Vercel Analytics | Plausible | PostHog | Umami (Cloud) | Umami (Self-Host) |
|---------------|-----------------|-----------|---------|---------------|-------------------|
| 10K | Free | $9/mo | Free | Free | Free |
| 50K | Free | $19/mo | Free | Free | Free |
| 100K | $3/mo (Pro required) | $19/mo | Free | Free | Free |
| 500K | $15/mo | $39/mo | Free | Free | Free |
| 1M | $30/mo | $69/mo | Free | Free | Free |
| 5M | $150/mo | ~$169/mo | Usage-based | Usage-based | Free |

*Note: Vercel Analytics Pro pricing requires a Vercel Pro plan ($20/mo base). PostHog pricing is for analytics events only; session replays and other features have separate usage tiers after free allowances.*

---

## Privacy and Compliance Summary

All four platforms can be configured to operate without cookies and without collecting personally identifiable information (PII). All claim GDPR and CCPA compliance. Key differentiators:

- **EU data residency:** Plausible (default), PostHog (available), Umami (self-host), Vercel (not available)
- **SOC 2:** Vercel (platform-level), PostHog (yes), Plausible (no), Umami (no)
- **HIPAA:** PostHog only
- **Self-host for full control:** PostHog (MIT), Umami (MIT), Plausible (AGPL, limited)

---

*Obelus Labs — Research & Strategy*
