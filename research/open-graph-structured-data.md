# Open Graph & Structured Data for Company Sites

**Author:** Obelus Labs Research
**Date:** 2026-03-19
**Status:** Reference Document

---

## Open Graph Tags

The minimum OG tag set for every page on the Obelus Labs site:

```html
<!-- Primary Open Graph -->
<meta property="og:title" content="Obelus Labs — Building the Future of Computing" />
<meta property="og:description" content="GPU systems research and bare-metal operating system development. Creators of FabricOS." />
<meta property="og:image" content="https://obeluslabs.com/og-image.png" />
<meta property="og:url" content="https://obeluslabs.com/" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Obelus Labs" />
```

### OG Image Requirements

- **Dimensions:** 1200x630px (1.91:1 aspect ratio)
- **Format:** PNG or JPEG, absolute HTTPS URL
- **Design for Obelus Labs:** Dark background (#0a0a0a or similar), cyan accent (#00e5ff or brand cyan), JetBrains Mono for any text, logo prominently placed
- **Do not use relative URLs.** Every platform requires the full `https://` path.
- **`og:url` must be canonical.** No UTM parameters, no query strings. The clean URL only.

---

## Twitter Card Tags

```html
<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@obeluslabs" />
<meta name="twitter:title" content="Obelus Labs — Building the Future of Computing" />
<meta name="twitter:description" content="GPU systems research and bare-metal operating system development. Creators of FabricOS." />
<meta name="twitter:image" content="https://obeluslabs.com/og-image.png" />
```

`summary_large_image` displays the full-width image preview on Twitter/X. The `twitter:site` handle should be the company account, not a personal account.

---

## JSON-LD Organization Schema

Place this in the `<head>` of the homepage (or in a Next.js layout component):

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Obelus Labs",
  "url": "https://obeluslabs.com",
  "logo": "https://obeluslabs.com/logo.png",
  "description": "GPU systems research and bare-metal operating system development.",
  "foundingDate": "2025",
  "sameAs": [
    "https://twitter.com/obeluslabs",
    "https://github.com/obeluslabs",
    "https://linkedin.com/company/obeluslabs"
  ]
}
</script>
```

The `sameAs` array tells search engines and AI systems which social profiles belong to the organization. Update with actual URLs when accounts are established.

---

## Favicons and PWA Manifest

```html
<!-- Favicons -->
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="icon" href="/favicon.ico" />
<link rel="manifest" href="/manifest.json" />
<meta name="theme-color" content="#00e5ff" />
```

The `manifest.json` enables PWA install prompts and defines the app's appearance when added to a home screen:

```json
{
  "name": "Obelus Labs",
  "short_name": "Obelus",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#0a0a0a",
  "theme_color": "#00e5ff",
  "icons": [
    { "src": "/icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/icon-512.png", "sizes": "512x512", "type": "image/png" }
  ]
}
```

---

## Robots.txt: Do Not Block Social Crawlers

The `robots.txt` must allow the following user agents to crawl OG metadata:

```
User-agent: Twitterbot
Allow: /

User-agent: LinkedInBot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: FacebookExternalHit
Allow: /

User-agent: Slackbot
Allow: /

User-agent: Discordbot
Allow: /
```

Blocking any of these prevents link previews from rendering on the respective platform. If using a restrictive default `Disallow`, add explicit `Allow` rules for these bots.

---

## Cache Clearing After Updates

When OG tags or images are updated, platforms serve stale cached versions until manually cleared:

| Platform | Tool |
|----------|------|
| Facebook / Meta | [Sharing Debugger](https://developers.facebook.com/tools/debug/) |
| LinkedIn | [Post Inspector](https://www.linkedin.com/post-inspector/) |
| Twitter / X | [Card Validator](https://cards-dev.twitter.com/validator) |

After deploying OG tag changes, run each URL through these tools to force a re-scrape.

---

## 2026 Trend: OG Tags and AI Discoverability

OG tags now influence more than social previews. LLM training pipelines and AI search systems (Perplexity, SearchGPT, Google AI Overviews) use structured metadata — including OG tags, JSON-LD, and meta descriptions — to understand and index web content. Well-structured metadata increases the likelihood that an organization appears in AI-generated answers and recommendations.

This makes OG tags and JSON-LD a form of "AI SEO." Sites with clear, accurate structured data are more discoverable by both traditional search engines and AI systems.

---

## Complete Head Tag Block for Obelus Labs

A full reference implementation for the site's `<head>`:

```html
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <title>Obelus Labs — Building the Future of Computing</title>
  <meta name="description" content="GPU systems research and bare-metal operating system development. Creators of FabricOS." />

  <!-- Open Graph -->
  <meta property="og:title" content="Obelus Labs — Building the Future of Computing" />
  <meta property="og:description" content="GPU systems research and bare-metal operating system development. Creators of FabricOS." />
  <meta property="og:image" content="https://obeluslabs.com/og-image.png" />
  <meta property="og:url" content="https://obeluslabs.com/" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Obelus Labs" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@obeluslabs" />
  <meta name="twitter:title" content="Obelus Labs — Building the Future of Computing" />
  <meta name="twitter:description" content="GPU systems research and bare-metal operating system development. Creators of FabricOS." />
  <meta name="twitter:image" content="https://obeluslabs.com/og-image.png" />

  <!-- Favicons -->
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  <link rel="icon" href="/favicon.ico" />
  <link rel="manifest" href="/manifest.json" />
  <meta name="theme-color" content="#00e5ff" />

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />

  <!-- JSON-LD -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Obelus Labs",
    "url": "https://obeluslabs.com",
    "logo": "https://obeluslabs.com/logo.png",
    "description": "GPU systems research and bare-metal operating system development.",
    "foundingDate": "2025",
    "sameAs": [
      "https://twitter.com/obeluslabs",
      "https://github.com/obeluslabs",
      "https://linkedin.com/company/obeluslabs"
    ]
  }
  </script>
</head>
```

This block covers social sharing previews, search engine structured data, AI discoverability, favicons, PWA support, and the JetBrains Mono font load for the dark-themed Obelus Labs design system.
