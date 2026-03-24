export interface EcosystemItem {
  title: string;
  tag: string;
  description: string;
  metric: string;
}

export const ecosystemItems: EcosystemItem[] = [
  {
    title: "FabricOS",
    tag: "Kernel",
    description:
      "Bare-metal x86_64 microkernel with capability-based security, V8 JavaScript runtime, and AI governance built into the kernel.",
    metric: "58K lines of Rust, 27 stress gates passing",
  },
  {
    title: "Loom",
    tag: "Browser",
    description:
      "Bare-metal browser engine built from scratch. HTML/CSS parsing, flexbox/grid layout, Canvas, WebSocket, and Service Workers — all running on FabricOS.",
    metric: "1.9MB binary, 16 crates",
  },
  {
    title: "Covenant",
    tag: "AI Layer",
    description:
      "Constitutional AI governance system with persistent identity, value-driven decision making, and agent orchestration. Ships with the OS, runs on local hardware.",
    metric: "1,172 tests passing, 27 phases complete",
  },
  {
    title: "Weave",
    tag: "Desktop Shell",
    description:
      "Native desktop compositor and window manager for FabricOS. Window management, theming, built-in applications, and accessibility — all in a 123KB binary.",
    metric: "9,612 lines of bare-metal Rust",
  },
];
