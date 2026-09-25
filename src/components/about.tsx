
"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-32 border-b border-border-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-16 lg:gap-24">
            
            {/* Left Side: Original Text (Max Width to match exactly how it was before) */}
            <div className="lg:col-span-7">
              <div className="text-xs font-mono uppercase tracking-[0.3em] text-foreground/90 mb-8">
                01 / About
              </div>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-12 leading-[1.1]">
                A developer who prefers <br/>
                <span className="text-accent-iris">building over talking.</span>
              </h2>
              
              <div className="text-lg md:text-xl text-foreground/90 leading-relaxed font-light space-y-6">
                <p>
                  My foundation in Computer Science is built on a deep curiosity for how complex systems operate under the hood. I am driven by the process of taking an abstract problem, designing a scalable architecture, and engineering a practical, real-world application to solve it.
                </p>
                <p>
                  I focus heavily on building resilient backend architectures, integrating AI/ML models into functional platforms, and maintaining a relentless approach to algorithmic problem-solving. Code is just a tool; the goal is always execution and impact.
                </p>
              </div>
            </div>

            {/* Right Side: The GIF (Pushed completely to the end) */}
            <div className="lg:col-span-5 mt-12 lg:mt-0 w-full">
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden border border-border-subtle shadow-[0_0_40px_rgba(124,108,255,0.05)] group">
                
                <Image 
                  src="/about-code.gif" 
                  alt="Abstract tech visual" 
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  unoptimized
                />
              </div>
            </div>

          </div>

          {/* How I Think section */}
          <div className="mt-20 pt-16 border-t border-border-subtle">
            <div className="text-xs font-mono uppercase tracking-[0.3em] text-foreground/90 mb-12">
              How I Think
            </div>
            
            {/* Animated Drawing Timeline */}
            <div className="relative">
              {/* The background static line */}
              <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-px bg-border-subtle"></div>
              
              {/* The animated drawing line */}
              <motion.div 
                className="absolute top-1/2 -translate-y-1/2 left-0 h-px bg-accent-iris"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              ></motion.div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 relative z-10">
                {["Understand", "Break Down", "Design", "Build", "Test", "Improve"].map((step, index) => (
                  <motion.div 
                    key={step}
                    className="flex flex-col items-center gap-4 bg-background px-2"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <div className="text-[10px] font-mono text-foreground/90 uppercase tracking-widest">
                      0{index + 1}
                    </div>
                    <div className="w-2 h-2 rounded-full bg-background border border-accent-iris"></div>
                    <div className="text-sm font-semibold text-foreground/90">{step}</div>
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
