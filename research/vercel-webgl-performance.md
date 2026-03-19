# Vercel Edge Network + WebGL Performance

**Author:** Obelus Labs Research
**Date:** 2026-03-19
**Status:** Reference Document

---

## Core Web Vitals (2026 Standards)

The current Core Web Vitals thresholds that Google uses for ranking:

| Metric | Good | Needs Improvement | Poor |
|--------|------|-------------------|------|
| **LCP** (Largest Contentful Paint) | < 2.5s | 2.5s - 4.0s | > 4.0s |
| **INP** (Interaction to Next Paint) | < 200ms | 200ms - 500ms | > 500ms |
| **CLS** (Cumulative Layout Shift) | < 0.1 | 0.1 - 0.25 | > 0.25 |

INP replaced First Input Delay (FID) as the responsiveness metric. TTFB (Time to First Byte) under 200ms is the gold standard for server response time.

---

## ISR for Landing Pages

Incremental Static Regeneration (ISR) is the optimal rendering strategy for landing pages that include WebGL or Canvas elements:

- The static HTML shell is served instantly from the CDN edge — no server-side rendering delay
- The WebGL canvas initializes asynchronously after the shell loads
- ISR pages revalidate on a configurable interval, so content stays fresh without full rebuilds
- This separation means LCP is measured against the static shell, not the WebGL content

ISR reads and writes are metered by Vercel, so revalidation intervals should be tuned to balance freshness against cost.

---

## Edge Functions

Edge Functions run on Cloudflare's network (Vercel's edge infrastructure partner), placing compute close to users globally. Adding the edge runtime to an API route or server component:

```typescript
export const runtime = 'edge';
```

This reduces latency by 40-70% compared to a single-region serverless function. Edge Functions are ideal for lightweight API responses, redirects, A/B testing, and geo-personalization. They are not suitable for heavy computation or large database queries.

---

## WebGL and Canvas Performance Patterns

For pages that render WebGL or Canvas content alongside standard HTML:

1. **Lazy-load the WebGL context.** Do not initialize WebGL during the critical rendering path. The canvas should not block initial paint.
2. **Use `requestAnimationFrame`** for all render loops. Never use `setInterval` or `setTimeout` for animation.
3. **Offload computation to Web Workers.** Particle systems, physics calculations, and data processing should run off the main thread to protect INP.
4. **Code-split the WebGL bundle.** The Three.js or raw WebGL code should load separately from the landing page shell.

---

## INP: The Key Risk for Interactive Pages

INP measures the latency of every interaction on the page, not just the first one. For SaaS landing pages with interactive elements, INP is the most likely metric to fail.

A documented case: a SaaS landing page reduced INP from 450ms to 120ms by code-splitting heavy JavaScript and replacing heavyweight analytics with lightweight tracking scripts. The result was a 15% increase in conversion rate.

Common INP killers on landing pages:
- Third-party analytics and tracking scripts blocking the main thread
- Synchronous WebGL initialization
- Unoptimized event handlers on scroll and click
- Large JavaScript bundles parsed on the main thread

---

## Recommended Architecture for RippleGrid

For the Obelus Labs RippleGrid component (WebGL particle canvas on the landing page):

1. **SSG the HTML shell.** Use Static Site Generation for the page structure. The shell includes the header, hero text, CTAs, and a placeholder `<canvas>` element.
2. **Lazy-initialize the canvas after LCP.** Use an intersection observer or a `requestIdleCallback` to begin WebGL initialization only after the largest contentful paint has fired.
3. **Apply `loading="lazy"` pattern.** The canvas component should follow the lazy loading pattern — invisible until the browser is ready.
4. **Use a Web Worker for particle calculations.** If the particle system is computationally heavy, run the physics in a Web Worker and pass vertex data back to the main thread for rendering.
5. **Pre-render a static fallback.** Show a CSS gradient or static image in the canvas area until WebGL is ready, preventing CLS.

---

## Real-Time Monitoring

Use `@vercel/speed-insights` for real-time field data (Real User Monitoring). This reports actual Core Web Vitals from production users, not synthetic lab data. Field data is what Google uses for ranking decisions.

```bash
npm install @vercel/speed-insights
```

```typescript
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function Layout({ children }) {
  return (
    <>
      {children}
      <SpeedInsights />
    </>
  );
}
```

---

## Vercel Pricing Considerations

Vercel meters the following on Pro and Enterprise plans:

| Resource | Cost |
|----------|------|
| Edge Requests | $2 per million |
| Bandwidth | $0.15 per GB |
| Edge Function CPU Time | Metered per ms |
| ISR Reads | Metered |
| ISR Writes | Metered (revalidation) |

For a landing page with moderate traffic, ISR is cost-efficient because most requests are served from the CDN cache (edge requests) without triggering ISR writes. The WebGL assets (JavaScript bundles, textures) count toward bandwidth.

---

## Summary

The optimal stack for an Obelus Labs landing page with WebGL: ISR for the HTML shell, Edge Functions for any dynamic API routes, lazy-loaded WebGL canvas, Web Workers for computation, and `@vercel/speed-insights` for monitoring. This architecture targets sub-2.5s LCP, sub-200ms INP, and sub-0.1 CLS while keeping Vercel costs predictable.
