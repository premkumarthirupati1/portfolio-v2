"use client";

import { motion } from "framer-motion";

export function Marquee({ text }: { text: string }) {
  // Duplicate text to ensure infinite scrolling without gaps
  const marqueeText = Array(4).fill(text).join(" · ");

  return (
    <div className="w-full overflow-hidden bg-accent text-background py-3 md:py-4 border-y border-border-subtle flex items-center">
      <motion.div
        className="flex whitespace-nowrap font-heading text-lg md:text-2xl font-bold uppercase tracking-widest"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20,
        }}
      >
        <span className="pr-4">{marqueeText}</span>
        <span className="pr-4">{marqueeText}</span>
      </motion.div>
    </div>
  );
}
