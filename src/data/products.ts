import { Shield, Scale, Eye } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Product {
  name: string;
  description: string;
  icon: LucideIcon;
  status: string;
  link: { text: string; href: string };
}

export const products: Product[] = [
  {
    name: "Guardian",
    description:
      "Real-time government spending tracker that monitors federal contracts, budgets, and expenditures for public accountability.",
    icon: Shield,
    status: "Live",
    link: { text: "View Project", href: "https://www.guardianonline.net" },
  },
  {
    name: "WeThePeople",
    description:
      "Civic engagement platform connecting citizens with their representatives, voting records, and legislative activity.",
    icon: Scale,
    status: "Active",
    link: { text: "View Project", href: "https://github.com/Obelus-Labs-LLC/WeThePeople" },
  },
  {
    name: "Veritas",
    description:
      "Transparency engine that aggregates and cross-references public data sources to surface patterns and anomalies.",
    icon: Eye,
    status: "Active",
    link: { text: "View Project", href: "https://github.com/Obelus-Labs-LLC/Veritas" },
  },
];
