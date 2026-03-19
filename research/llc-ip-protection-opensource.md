# LLC Intellectual Property Protection for Open-Source Companies

**Obelus Labs Research Document #6**
**Date:** March 2026
**Category:** Legal & IP Strategy

---

## Overview

Obelus Labs operates a mixed portfolio: proprietary products (Guardian) and open-source projects (WeThePeople, Veritas). This creates specific intellectual property challenges that require deliberate structuring in the LLC operating agreement, licensing strategy, and trademark registration. This document covers the key legal and strategic considerations.

**Disclaimer:** This document is for research and informational purposes only. It is not legal advice. Consult a qualified attorney for decisions about IP protection, licensing, and LLC structuring.

---

## LLC Operating Agreement IP Clauses

The operating agreement is the foundational document for IP ownership within an LLC. It should address four key areas:

### 1. IP Ownership
- Clearly state that all IP created by members in the course of company work is owned by the LLC, not by individual members
- Define what constitutes "company work" vs. personal projects
- Address pre-existing IP that members bring into the company (document it, license it to the LLC, or assign it)

### 2. Confidentiality
- All members and contractors must agree to confidentiality provisions
- Define what constitutes confidential information (trade secrets, proprietary code, business strategy, customer data)
- Specify duration of confidentiality obligations (typically survives departure)

### 3. IP Assignment on Departure
- If a member leaves, all IP created during their tenure remains with the LLC
- Require a formal assignment agreement upon departure
- Address any ongoing royalty or compensation arrangements if applicable

### 4. Non-Compete / Non-Solicit
- Define reasonable non-compete scope (geography, duration, industry)
- Note: Non-competes are increasingly restricted or unenforceable in many states (California bans them entirely, FTC has proposed a federal ban)
- Non-solicitation clauses (cannot recruit company employees or clients) are generally more enforceable

---

## Licensing Strategy for a Mixed Portfolio

### Proprietary: Guardian
- **License:** Standard proprietary / All Rights Reserved
- **Terms:** No source code distribution. Users receive a license to use the software, not to modify or redistribute it.
- **Enforcement:** Copyright infringement claims if code is leaked or stolen
- **Considerations:** Keep source code in private repositories. Use code obfuscation for distributed binaries if applicable.

### Open Source: Choosing the Right License

| License | Type | Patent Grant | Key Characteristic |
|---------|------|-------------|-------------------|
| **MIT** | Permissive | No | Maximum freedom. Anyone can do anything with the code, including making proprietary forks. |
| **Apache 2.0** | Permissive | Yes | Like MIT but includes explicit patent grant, protecting users from patent claims. |
| **AGPL v3** | Copyleft | Yes | Strong copyleft. Any derivative work (including network/SaaS use) must be open-sourced under AGPL. |

### Recommended Licensing

| Project | Recommended License | Rationale |
|---------|-------------------|-----------|
| **Veritas** | AGPL v3 | Prevents competitors from forking the code and running a proprietary version without contributing back. If someone builds on Veritas, their version must also be open source. |
| **WeThePeople** | MIT | Maximum adoption. No barriers to use. Encourages the widest possible community and integration. |
| **Guardian** | Proprietary | Revenue-generating product. Full IP protection. |

---

## Dual Licensing Model

Dual licensing offers an open-source license (typically AGPL) alongside a commercial license:

- **AGPL track (free):** Anyone can use, modify, and distribute the code, but all derivatives must be open-sourced under AGPL
- **Commercial track (paid):** Companies that want to use the code in proprietary products without open-sourcing can purchase a commercial license

### Precedents
- MongoDB (SSPL, a modified approach to the same concept)
- Redis (moved to dual licensing)
- Elasticsearch (SSPL + Elastic License)
- GitLab (MIT core + proprietary enterprise features)

### When It Makes Sense
- When the project has commercial value and companies would pay to avoid AGPL obligations
- When Obelus Labs wants to maintain a community edition while monetizing enterprise use
- Requires a Contributor License Agreement (CLA) to work

---

## Contributor License Agreement (CLA)

A CLA is required if Obelus Labs wants to dual-license a project that accepts community contributions.

### Why It Is Needed
- Without a CLA, each contributor retains copyright over their contributions
- Obelus Labs cannot relicense community contributions under a commercial license without the contributor's permission
- A CLA grants Obelus Labs the right to relicense contributions

### CLA Structure
- Use the Apache Individual Contributor License Agreement as a template (widely recognized, legally vetted)
- Contributors grant a perpetual, worldwide, non-exclusive license to Obelus Labs to use, reproduce, and sublicense their contributions
- Contributors retain their own copyright (they are granting a license, not assigning ownership)

### Community Considerations
- CLAs can be perceived as unfriendly by open-source contributors
- Some contributors refuse to sign CLAs on principle
- Mitigate by keeping the CLA simple and transparent about its purpose
- Use automated CLA signing tools (CLA Assistant on GitHub) to reduce friction

---

## Trademark Protection

Trademark protection is separate from copyright and licensing. Even if code is open source, the brand names are protectable.

### What to Register
- "Obelus Labs" (company name)
- "Guardian" (product name)
- "Veritas" (project name)
- "WeThePeople" (project name)
- The ÷ symbol / logo (if used as a brand mark)

### What Trademark Protects
- Someone can fork open-source code but **cannot use the trademarked name**
- Prevents confusion in the market
- Protects brand equity regardless of license

### Registration Process
- File with the USPTO (United States Patent and Trademark Office)
- Cost: approximately $250-$350 per class per mark (using TEAS Plus)
- Timeline: 8-12 months for registration
- Consider international registration (Madrid Protocol) if operating globally

---

## What Happens When Someone Forks Your Code

| Scenario | MIT License | AGPL License | Proprietary License |
|----------|------------|-------------|-------------------|
| Can they fork? | Yes | Yes | No |
| Can they make it proprietary? | Yes | No — must open-source | No |
| Can they compete with you? | Yes | Yes, but openly | No (legal action) |
| Can they use your name? | No (trademark) | No (trademark) | No (trademark + license) |
| Must they credit you? | Yes (include license) | Yes (include license) | N/A |

---

## Patent Considerations

| License | Patent Grant | Implication |
|---------|-------------|------------|
| **MIT** | None | No patent protection for users. If Obelus Labs holds patents on the technology, MIT users could theoretically be sued. |
| **Apache 2.0** | Explicit grant | Users receive a license to any patents held by contributors that cover the code. Includes a patent retaliation clause. |
| **AGPL v3** | Implicit grant | Includes patent grant provisions similar to Apache 2.0. |

If patent protection is a concern for contributors or users, Apache 2.0 or AGPL v3 are preferred over MIT.

---

## Best Practices for Managing a Mixed IP Portfolio

1. **Maintain an inventory** of all open-source components used across all projects (including dependencies)
2. **Implement an approval process** for adopting new open-source dependencies (check license compatibility)
3. **Educate developers** on license compliance — what each license requires and prohibits
4. **Separate proprietary and open-source code** clearly in repositories and build systems
5. **Use SPDX license identifiers** in source files for clarity
6. **Conduct periodic license audits** using tools like FOSSA, Snyk, or WhiteSource
7. **Document everything** — which code is under which license, who contributed what, which CLAs are signed

---

## Action Items

1. Review and update the LLC operating agreement to include explicit IP ownership, confidentiality, and assignment clauses
2. Apply AGPL v3 license to Veritas repository
3. Apply MIT license to WeThePeople repository
4. Ensure Guardian repositories are private with proprietary license headers
5. Draft and implement a CLA for open-source projects (use Apache Individual CLA as template)
6. File trademark applications for "Obelus Labs," "Guardian," "Veritas," and "WeThePeople"
7. Set up automated license compliance scanning in CI/CD pipelines
8. Create an internal policy document for open-source contribution and dependency adoption

---

*Obelus Labs — Research & Strategy*
