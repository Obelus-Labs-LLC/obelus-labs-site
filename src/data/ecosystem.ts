export interface EcosystemItem {
  title: string;
  tag: string;
  description: string;
  metric: string;
}

export const ecosystemItems: EcosystemItem[] = [
  {
    title: "Loom",
    tag: "Runtime",
    description:
      "The orchestration layer that weaves microservices together into unified workflows with built-in observability.",
    metric: "Target: sub-50ms inter-service latency",
  },
  {
    title: "Covenant",
    tag: "Contracts",
    description:
      "Schema-driven API contracts that enforce type safety and versioning across the entire FabricOS stack.",
    metric: "Zero-drift contract validation",
  },
  {
    title: "Genesis",
    tag: "Scaffolding",
    description:
      "Project bootstrapper that generates production-ready services from templates with CI/CD pipelines pre-configured.",
    metric: "0 to deploy-ready in under 5 minutes",
  },
  {
    title: "HedgeBrain",
    tag: "Intelligence",
    description:
      "ML-powered analytics engine for processing large-scale datasets with automated feature engineering and model selection.",
    metric: "Adaptive model retraining pipeline",
  },
];
