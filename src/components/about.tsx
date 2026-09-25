
"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-32 border-b border-border-subtle relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Side: Typography */}
          <div className="w-full lg:w-[60%] xl:w-[65%] relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-xs font-mono uppercase tracking-[0.3em] text-foreground/90 mb-8">
                01 / About
              </div>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-12">
                A developer who prefers <br/>
                <span className="text-accent-iris">building over talking.</span>
              </h2>
              
              <div className="text-lg md:text-xl text-foreground/90 leading-relaxed font-light space-y-6">
                <p>
                  My foundation in Computer Science is built on a genuine curiosity about how complex systems operate under the hood. I am driven by the process of taking an abstract idea, designing a scalable architecture, and building a practical application to solve the problem.
                </p>
                <p>
                  I focus heavily on building resilient backend architectures and integrating AI models into functional platforms. I also maintain a relentless approach to algorithmic problem solving. To me, code is simply a tool. The ultimate goal is always delivering impact and finding the right solution.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Side: GIF */}
          <div className="w-full lg:w-[40%] xl:w-[35%] flex justify-center lg:justify-end relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full max-w-[320px] md:max-w-[400px] lg:max-w-full"
            >
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-border-subtle shadow-[0_0_40px_rgba(124,108,255,0.05)] group">
                <Image 
                  src="/about-code.gif" 
                  alt="Abstract tech visual" 
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  unoptimized
                />
              </div>
            </motion.div>
          </div>

        </div>

        {/* Bottom Section: How I Think */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 pt-16 border-t border-border-subtle relative z-10"
        >
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
        </motion.div>

      </div>
    </section>
  );
}
