"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { ArrowDown } from "lucide-react";

export function Timeline() {
  return (
    <section className="py-32 border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 max-w-2xl mx-auto text-center"
        >
          <div className="text-xs font-mono uppercase tracking-[0.3em] text-foreground/90 mb-8">
            05 — Journey
          </div>
          <h2 className="font-heading text-4xl font-bold tracking-tight text-foreground">
            Development Timeline
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto relative">
          {/* Static background line */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-border-subtle z-0"></div>
          
          {/* Animated drawing line */}
          <motion.div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-px bg-accent z-0"
            initial={{ height: "0%" }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          ></motion.div>

          {profile.timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center text-center group relative z-10"
            >
              <div className="bg-background px-4 font-heading text-4xl md:text-5xl font-bold text-foreground mb-6 group-hover:text-accent transition-colors duration-500">
                {item.year}
              </div>
              <p className="bg-background px-4 text-foreground/90 font-light leading-relaxed max-w-md">
                {item.description}
              </p>
              
              {index < profile.timeline.length - 1 && (
                <div className="py-12 bg-background z-10">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
