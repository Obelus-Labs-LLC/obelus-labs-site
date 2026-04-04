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
      "Bare-metal x86_64 microkernel with capability-based security, V8 JavaScript runtime, 50+ syscalls, TLS 1.3, and 5 hardware drivers. Boots on real hardware.",
    metric: "103K lines of Rust, 45 boot gates passing",
  },
  {
    title: "Loom",
    tag: "Browser",
    description:
      "Bare-metal browser engine built from scratch. HTML5, 60+ CSS properties, Canvas 2D, WebSocket, SVG, Service Workers, and flexbox/grid layout.",
    metric: "112K lines of Rust, 4,022 tests, 16 crates",
  },
  {
    title: "Covenant",
    tag: "AI Layer",
    description:
      "Constitutional AI governance with 5 non-bypassable ethical floors compiled into Rust. Persistent identity, graduated autonomy, and cryptographic audit trail.",
    metric: "82K lines of Rust, 1,550 tests passing",
  },
  {
    title: "Weave",
    tag: "Desktop Shell",
    description:
      "Native desktop compositor with window management, 8 system applications, 4 virtual desktops, theming, and accessibility — in a single binary.",
    metric: "51K lines of Rust, 397KB binary",
  },
];
