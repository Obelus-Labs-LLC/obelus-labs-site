import { Shield, Scale, Eye, Radio, Brain, Gauge } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ProductLink {
  text: string;
  href: string;
}

export interface Product {
  name: string;
  description: string;
  icon: LucideIcon;
  status: string;
  links: ProductLink[];
}

export const products: Product[] = [
  {
    name: "WeThePeople",
    description:
      "Civic transparency platform tracking corporate influence on Congress across 8 sectors. Pulls from verified government APIs covering lobbying, contracts, enforcement, trades, and donations.",
    icon: Scale,
    status: "Live",
    links: [
      { text: "Website", href: "https://wethepeopleforus.com" },
      { text: "GitHub", href: "https://github.com/Obelus-Labs-LLC/WeThePeople" },
      { text: "@WTPForUs", href: "https://twitter.com/WTPForUs" },
    ],
  },
  {
    name: "Guardian",
    description:
      "Real-time market threat detection platform monitoring crypto and equities with a 9-signal fusion engine and systemic risk amplifiers. Desktop, mobile, and Telegram alerts.",
    icon: Shield,
    status: "Live",
    links: [
      { text: "Website", href: "https://www.guardianonline.net" },
    ],
  },
  {
    name: "Veritas",
    description:
      "Deterministic claim extraction and fact-verification engine. Zero LLM dependency. Extracts claims from audio, video, and text, then verifies against verified public APIs.",
    icon: Eye,
    status: "Active",
    links: [
      { text: "GitHub", href: "https://github.com/Obelus-Labs-LLC/Veritas" },
    ],
  },
  {
    name: "Nexus",
    description:
      "Semantic codebase graph engine that gives AI instant awareness of entire codebases. Tree-sitter parsing, BM25 + PageRank ranked retrieval, and cross-project dependency resolution.",
    icon: Brain,
    status: "Active",
    links: [
      { text: "GitHub", href: "https://github.com/Obelus-Labs-LLC/Nexus" },
    ],
  },
  {
    name: "Aether",
    description:
      "Policy-driven uplink arbitration framework for deterministic, auditable control-plane coordination in multi-provider networks. Built for critical infrastructure and satellite-terrestrial hybrid environments.",
    icon: Radio,
    status: "Active",
    links: [
      { text: "GitHub", href: "https://github.com/Obelus-Labs-LLC/Aether" },
    ],
  },
  {
    name: "STRESS",
    description:
      "Reliability benchmarking framework that evaluates how systems behave when foundational operating assumptions are violated. Measures resilience under extreme environmental and systemic constraints.",
    icon: Gauge,
    status: "Active",
    links: [
      { text: "GitHub", href: "https://github.com/Obelus-Labs-LLC/STRESS" },
    ],
  },
];
