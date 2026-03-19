"use client";

import { motion } from "framer-motion";
import { Github, Mail } from "lucide-react";

export default function AboutFooterSection() {
  return (
    <section className="relative font-display px-8 py-16 overflow-hidden">
      {/* Wireframe Hexagon Background */}
      <svg
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.05] pointer-events-none"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <polygon
          points="100,10 190,55 190,145 100,190 10,145 10,55"
          stroke="white"
          strokeWidth="0.5"
          fill="none"
        />
      </svg>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative max-w-4xl mx-auto"
      >
        {/* Diamond Crest */}
        <div className="w-16 h-16 rotate-45 border-2 border-brand-cyan flex items-center justify-center mb-12">
          <div className="w-8 h-8 bg-brand-cyan -rotate-45" />
        </div>

        {/* Company Name */}
        <h2 className="font-display font-bold text-[48px] md:text-[72px] tracking-tight mb-24">
          Obelus Labs LLC
        </h2>

        {/* Footer */}
        <footer>
          {/* Divider */}
          <div className="border-t border-zinc-800 pt-12">
            {/* Links */}
            <div className="flex flex-col md:flex-row gap-2 md:gap-16">
              <a
                href="https://github.com/Obelus-Labs-LLC"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-mono text-xl text-zinc-300 transition-colors duration-300 hover:text-brand-cyan"
              >
                <Github size={24} />
                GitHub
              </a>
              <a
                href="mailto:info@ObelusLabs.online"
                className="inline-flex items-center gap-3 font-mono text-xl text-zinc-300 transition-colors duration-300 hover:text-brand-cyan"
              >
                <Mail size={24} />
                Email
              </a>
            </div>

            {/* Copyright */}
            <p className="font-mono text-sm text-zinc-600 mt-16">
              &copy; 2026 Obelus Labs LLC. All rights reserved.
            </p>
          </div>
        </footer>
      </motion.div>
    </section>
  );
}
