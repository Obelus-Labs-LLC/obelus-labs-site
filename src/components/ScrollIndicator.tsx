"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

export default function ScrollIndicator() {
  return (
    <motion.div
      variants={fadeIn(2)}
      initial="hidden"
      animate="visible"
      className="absolute bottom-12 left-12 md:left-24 xl:left-40 flex items-start gap-4"
    >
      <div
        className="w-px h-12"
        style={{
          background: "linear-gradient(to bottom, rgba(34, 211, 238, 0.5), transparent)",
        }}
      />
      <span className="font-mono text-sm text-zinc-600 uppercase tracking-[0.1em]">
        Initialize Sequence
      </span>
    </motion.div>
  );
}
