"use client";

import { motion } from "framer-motion";
import { scaleBlurIn } from "@/lib/animations";
import type { EcosystemItem } from "@/data/ecosystem";

export default function EcosystemCard({ item }: { item: EcosystemItem }) {
  return (
    <motion.div
      variants={scaleBlurIn}
      className="group relative bg-zinc-950 border border-zinc-800 p-6 xl:p-8 flex flex-col transition-colors duration-300 hover:bg-zinc-900"
    >
      {/* Left Accent Line */}
      <div className="absolute left-0 top-0 w-1 h-full bg-zinc-800 transition-colors duration-300 group-hover:bg-brand-cyan" />

      {/* Header Row */}
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-[30px] md:text-[36px] font-bold transition-colors duration-300 group-hover:text-brand-cyan">
          {item.title}
        </h3>
        <span className="font-mono text-xs md:text-sm text-zinc-600 border border-zinc-800 px-2 py-1 shrink-0 ml-4">
          {item.tag}
        </span>
      </div>

      {/* Description */}
      <p className="font-mono text-lg md:text-xl text-zinc-400 leading-relaxed mb-6">
        {item.description}
      </p>

      {/* Metric/Status Line */}
      <p className="mt-auto pt-6 font-mono text-sm text-zinc-600">
        <span className="text-brand-cyan-dark">&gt;</span> {item.metric}
      </p>
    </motion.div>
  );
}
