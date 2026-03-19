"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeLeft } from "@/lib/animations";
import ProductCard from "./ProductCard";
import { products } from "@/data/products";

export default function ActiveProductsSection() {
  return (
    <section className="font-display px-8 py-16 md:px-16 xl:px-24 xl:py-24">
      {/* Header */}
      <motion.div
        variants={fadeLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mb-12 xl:mb-20"
      >
        <h2 className="text-[36px] md:text-[60px] font-bold tracking-tight mb-4">
          Production Systems
        </h2>
        <p className="font-mono text-brand-cyan text-[20px] md:text-[24px] uppercase tracking-[0.1em]">
          Shipped &amp; Active
        </p>
      </motion.div>

      {/* Product Grid */}
      <motion.div
        variants={staggerContainer(0.1, 0.15)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-8"
      >
        {products.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </motion.div>
    </section>
  );
}
