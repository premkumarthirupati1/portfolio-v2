"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";

export function About() {
  return (
    <section id="about" className="py-32 border-b border-border-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-xs font-mono uppercase tracking-[0.3em] text-foreground-muted mb-8">
              01 — About
            </div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-12">
              A developer who prefers <br/>
              <span className="text-accent">building over talking.</span>
            </h2>
            
            <div className="text-lg md:text-xl text-foreground-secondary leading-relaxed font-light space-y-6 max-w-3xl">
              <p>
                My foundation in Computer Science is built on a deep curiosity for how complex systems operate under the hood. I am driven by the process of taking an abstract problem, designing a scalable architecture, and engineering a practical, real-world application to solve it.
              </p>
              <p>
                I focus heavily on building resilient backend architectures, integrating AI/ML models into functional platforms, and maintaining a relentless approach to algorithmic problem-solving. Code is just a tool; the goal is always execution and impact.
              </p>
            </div>

            <div className="mt-20 pt-16 border-t border-border-subtle">
              <div className="text-xs font-mono uppercase tracking-[0.3em] text-foreground-muted mb-12">
                How I Think
              </div>
              
              {/* Animated Drawing Timeline */}
              <div className="relative">
                {/* The background static line */}
                <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-px bg-border-subtle"></div>
                
                {/* The animated drawing line */}
                <motion.div 
                  className="absolute top-1/2 -translate-y-1/2 left-0 h-px bg-accent"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                ></motion.div>

                <div className="flex justify-between relative z-10">
                  {["Understand", "Break Down", "Design", "Build", "Test", "Improve"].map((step, index) => (
                    <motion.div 
                      key={step}
                      className="flex flex-col items-center gap-4 bg-background px-2"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                      <div className="text-[10px] font-mono text-foreground-muted uppercase tracking-widest">
                        0{index + 1}
                      </div>
                      <div className="w-2 h-2 rounded-full bg-background border border-accent"></div>
                      <div className="text-sm font-semibold text-foreground-secondary">{step}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
