"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";

export function Achievements() {
  return (
    <section id="achievements" className="py-32 border-b border-border-subtle bg-surface-elevated/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-xs font-mono uppercase tracking-[0.3em] text-foreground/90 mb-8">
            02 — Achievements
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Proof of Progress.
          </h2>
          <p className="text-xl text-foreground/90 font-light">
            Milestones that reflect consistency, learning, and execution.
          </p>
        </motion.div>

        <div className="flex flex-col">
          {profile.achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col md:flex-row md:items-baseline py-10 border-t border-border-subtle first:border-t-0 hover:bg-surface transition-colors duration-300 px-6 -mx-6"
            >
              <div className="md:w-1/4 mb-4 md:mb-0 shrink-0">
                <div className="text-xs font-mono tracking-[0.2em] text-foreground/90 uppercase">
                  {item.year} • {item.category}
                </div>
              </div>
              <div className="md:w-3/4 md:pl-12">
                <h3 className="font-heading text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-300 mb-3">
                  {item.title}
                </h3>
                <p className="text-foreground/90 leading-relaxed max-w-2xl font-light">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
