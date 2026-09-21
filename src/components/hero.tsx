"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { ArrowRight, ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { TextReveal } from "@/components/ui/text-reveal";
import { RollingNumber } from "@/components/ui/rolling-number";

export function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen flex flex-col relative pt-24 border-b border-border-subtle bg-background overflow-hidden">
      
      {/* Soft Cursor Lighting Effect (Flashlight) */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 opacity-40 mix-blend-screen transition-transform duration-75"
        style={{
          background: `radial-gradient(600px circle at calc(50% + ${mousePos.x * 20}px) calc(50% + ${mousePos.y * 20}px), var(--color-accent-iris) 0%, transparent 60%)`,
          opacity: 0.05
        }}
      ></div>

      <div className="container mx-auto px-6 relative z-10 flex-grow flex flex-col justify-center pb-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 h-full">
          
          {/* Left Side: Typography */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            {/* Phase 2: Identity (Masked text reveal) */}
            <div className="overflow-hidden mb-6">
              <motion.div
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-xs font-mono tracking-widest text-foreground-secondary uppercase"
              >
                PREM KUMAR
              </motion.div>
            </div>

            {/* Phase 3: Eyebrow */}
            <div className="overflow-hidden mb-8">
              <motion.div
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-xs font-mono uppercase tracking-[0.2em] text-accent-iris flex items-center gap-4"
              >
                <span className="w-4 h-px bg-accent-iris"></span>
                Software Developer • Builder • Problem Solver
              </motion.div>
            </div>
            
            {/* Phase 4: Main Headline */}
            <div className="mb-8">
              <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
                <TextReveal delay={1.2}>
                  Building thoughtful software that solves real problems.
                </TextReveal>
              </h1>
            </div>

            {/* Phase 5: Description & Interface */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-foreground-secondary font-light max-w-xl leading-relaxed mb-12"
            >
              {profile.bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <MagneticButton 
                as="a"
                href="#projects" 
                className="group bg-foreground text-background px-8 py-4 rounded-none font-semibold hover:bg-background-secondary hover:text-foreground border border-foreground transition-all duration-300"
              >
                VIEW WORK 
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </MagneticButton>
              <MagneticButton 
                as="a"
                href="/resume.pdf"
                target="_blank"
                className="group bg-transparent border border-border-subtle px-8 py-4 rounded-none font-semibold text-foreground hover:border-accent-iris hover:text-accent-iris transition-colors duration-300"
              >
                DOWNLOAD RESUME 
                <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right Side: Abstract Technological Visual */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.5 }}
            className="w-full lg:w-1/2 h-[500px] relative hidden lg:block"
          >
            {/* Parallax Layers based on mouse movement */}
            <motion.div 
              animate={{ x: mousePos.x * -0.5, y: mousePos.y * -0.5 }}
              className="absolute inset-0 border border-border-subtle rounded-full opacity-20 scale-75"
            />
            <motion.div 
              animate={{ x: mousePos.x * 1, y: mousePos.y * 1 }}
              className="absolute inset-0 border border-border-subtle rounded-full opacity-40 scale-90"
            />
            <motion.div 
              animate={{ x: mousePos.x * -1.5, y: mousePos.y * -1.5 }}
              className="absolute inset-0 border border-accent-iris/20 rounded-full scale-100 flex items-center justify-center"
            >
               <div className="w-1/2 h-1/2 bg-accent-iris/5 rounded-full blur-3xl"></div>
            </motion.div>
            <motion.div 
              animate={{ x: mousePos.x * 2, y: mousePos.y * 2 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="text-[10px] font-mono text-foreground-muted tracking-widest flex flex-col gap-2 opacity-50">
                <span>[ SYS.CORE.INIT ]</span>
                <span>LAT: 47.6062° N</span>
                <span>LNG: 122.3321° W</span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
      
      {/* Credentials / Proof Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="w-full border-t border-border-subtle bg-surface/50 backdrop-blur-md relative z-10"
      >
        <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row gap-8 justify-between items-center">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-foreground-muted hidden md:block">
            Proof, Not Promises.
          </div>
          <div className="flex gap-12 md:gap-24 w-full md:w-auto justify-between md:justify-end">
            <div>
              <div className="font-heading text-2xl font-bold text-foreground">
                <RollingNumber value={8.86} decimals={2} />
              </div>
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-foreground-muted mt-1">CGPA</div>
            </div>
            <div>
              <div className="font-heading text-2xl font-bold text-foreground">
                <RollingNumber value={15} suffix="+" />
              </div>
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-foreground-muted mt-1">Projects</div>
            </div>
            <div>
              <div className="font-heading text-2xl font-bold text-foreground">
                <RollingNumber value={1000} suffix="+" />
              </div>
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-foreground-muted mt-1">DSA Problems</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
