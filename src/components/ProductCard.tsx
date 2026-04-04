"use client";

import { motion } from "framer-motion";
import { ArrowRight, Cpu } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import type { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  const Icon = product.icon;

  return (
    <motion.div
      variants={fadeUp}
      className="group relative bg-zinc-900/40 border border-zinc-800 p-8 xl:p-10 overflow-hidden transition-colors duration-500 hover:border-brand-cyan-dark/50"
    >
      {/* Hover Glow Overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-brand-cyan-dark/5 to-transparent pointer-events-none" />

      {/* Icon Container */}
      <div className="relative p-4 bg-zinc-950 border border-zinc-800 group-hover:border-brand-cyan-dark/50 transition-colors duration-500 w-fit mb-6">
        <Icon size={32} className="text-brand-cyan" strokeWidth={1.5} />
      </div>

      {/* Status Indicator */}
      <div className="absolute top-8 right-8 xl:top-10 xl:right-10 flex items-center gap-2">
        <div className={`w-2 h-2 rounded-full ${product.status === "Coming Soon" ? "bg-yellow-500" : product.status === "Proprietary" ? "bg-blue-500" : "bg-green-500"} animate-pulse-dot`} />
        <span className="font-mono text-xs md:text-sm text-zinc-500 uppercase tracking-[0.1em]">
          {product.status}
        </span>
      </div>

      {/* Product Name */}
      <h3 className="relative text-[30px] md:text-[36px] font-bold mb-4 transition-colors duration-300 group-hover:text-brand-cyan">
        {product.name}
      </h3>

      {/* Description */}
      <p className="relative font-mono text-lg md:text-xl text-zinc-400 leading-relaxed mb-8">
        {product.description}
      </p>

      {/* Action Links */}
      <div className="relative flex flex-wrap items-center gap-x-6 gap-y-2">
        {product.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-lg text-white transition-colors duration-300 hover:text-brand-cyan"
          >
            {link.text}
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </a>
        ))}
      </div>

      {/* Tech Decoration */}
      <Cpu
        size={120}
        className="absolute bottom-4 right-4 text-white/10 pointer-events-none"
        strokeWidth={0.5}
      />
    </motion.div>
  );
}
