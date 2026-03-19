"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/animations";
import EcosystemCard from "./EcosystemCard";
import { ecosystemItems } from "@/data/ecosystem";

// Fixed binary digits to avoid hydration mismatch
const BINARY_DIGITS = "10110010011101001010110100110010100110101001101010011010100110010110100101101001011001010110010110100101100101011010010110010101100101011010010110100101101001011001010110010101101001011010010110";

export default function FabricOSSection() {
  return (
    <section className="relative font-display px-8 py-16 md:px-16 xl:px-24 xl:py-20 overflow-hidden">
      {/* Matrix Accent Layer */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02] font-mono text-xs p-8 overflow-hidden break-all leading-loose tracking-[0.5em]"
        aria-hidden="true"
      >
        {BINARY_DIGITS}
      </div>

      {/* Header */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 xl:mb-16"
      >
        <div>
          <h2 className="text-[36px] md:text-[60px] font-bold tracking-tight mb-2">
            The FabricOS Ecosystem
          </h2>
          <p className="font-mono text-zinc-500 text-lg md:text-xl uppercase tracking-[0.1em]">
            Coming Soon
          </p>
        </div>
        <span className="mt-4 lg:mt-0 font-mono text-brand-cyan text-sm border border-brand-cyan-dark/30 bg-brand-cyan-dark/5 px-4 py-2 w-fit">
          STATUS: IN_DEVELOPMENT
        </span>
      </motion.div>

      {/* Ecosystem Grid */}
      <motion.div
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-6"
      >
        {ecosystemItems.map((item) => (
          <EcosystemCard key={item.title} item={item} />
        ))}
      </motion.div>
    </section>
  );
}
