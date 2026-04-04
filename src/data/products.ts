import { Shield, Scale, Eye, Radio, Brain, Gauge, TrendingUp } from "lucide-react";
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
      "Civic transparency platform tracking corporate influence on Congress across 9 sectors and all 50 states. 40+ government APIs, 4,600+ congressional trades tracked, 14 automated story detection patterns, and a 3-site ecosystem with research tools and verified data investigations.",
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
      "Real-time market threat detection platform monitoring 326 assets across crypto and equities. 9-signal weighted fusion engine with Bayesian scoring, 7 systemic risk amplifiers, and a self-improving AI research agent. Desktop, mobile, web, and Telegram delivery.",
    icon: Shield,
    status: "Live",
    links: [
      { text: "Website", href: "https://www.guardianonline.net" },
    ],
  },
  {
    name: "Veritas",
    description:
      "Deterministic claim extraction and fact-verification engine with zero LLM dependency. Ingests audio, video, and text, then verifies against 82 structured evidence APIs with BM25 scoring and cross-source consensus detection.",
    icon: Eye,
    status: "Active",
    links: [
      { text: "GitHub", href: "https://github.com/Obelus-Labs-LLC/Veritas" },
    ],
  },
  {
    name: "Proprietary Quant Systems",
    description:
      "Autonomous trading systems covering equities, futures, and cryptocurrency markets. Multi-signal fusion engines with ML-driven predictions, 75+ financial data providers, and institutional-grade risk management.",
    icon: TrendingUp,
    status: "Proprietary",
    links: [],
  },
  {
    name: "Nexus",
    description:
      "Semantic codebase graph engine that gives AI instant awareness of entire codebases. Tree-sitter parsing across 7 languages, BM25 + PageRank ranked retrieval, and cross-project dependency resolution.",
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
      "Reliability benchmarking framework that evaluates how systems behave when foundational operating assumptions are violated. Dual Rust and Python reference implementations with a frozen v0.2 specification.",
    icon: Gauge,
    status: "Active",
    links: [
      { text: "GitHub", href: "https://github.com/Obelus-Labs-LLC/STRESS" },
    ],
  },
];
