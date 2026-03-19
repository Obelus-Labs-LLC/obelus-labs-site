"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/animations";
import ScrollIndicator from "./ScrollIndicator";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Main Content */}
      <motion.div
        variants={staggerContainer(0.2, 0.3)}
        initial="hidden"
        animate="visible"
        className="relative pl-12 md:pl-24 xl:pl-40 pr-8"
      >
        {/* Kicker */}
        <motion.div variants={fadeUp} className="flex items-center gap-4 mb-6">
          <div className="w-12 h-1 bg-brand-cyan" />
          <span className="font-mono font-bold text-brand-cyan uppercase tracking-[0.1em] text-[20px] md:text-[24px]">
            Obelus Labs LLC
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.h1
          variants={fadeUp}
          className="font-display font-bold text-[48px] md:text-[72px] xl:text-[96px] leading-[1.1] tracking-tight mb-12"
        >
          Tools that put power
          <br />
          back in people&apos;s hands.
        </motion.h1>

        {/* Mission Statement */}
        <motion.p
          variants={fadeUp}
          className="font-mono max-w-4xl text-zinc-400 text-[24px] md:text-[30px] leading-relaxed"
        >
          We build open-source software that makes systems transparent,
          accountable, and accessible to everyone.
        </motion.p>
      </motion.div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
}
