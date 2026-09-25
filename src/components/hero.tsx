"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { ArrowRight, ArrowDown, GraduationCap, Code2 } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { TextReveal } from "@/components/ui/text-reveal";
import { RollingNumber } from "@/components/ui/rolling-number";

const LeetCodeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
  </svg>
);

export function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [lcStats, setLcStats] = useState(1000);
  const [lcRating, setLcRating] = useState(1700); // Default to 1700 before fetch

  useEffect(() => {
    fetch("/api/leetcode")
      .then(res => res.json())
      .then(data => {
        if (data.status === "success") {
          if (data.totalSolved) setLcStats(data.totalSolved);
          if (data.rating) setLcRating(data.rating);
        }
      })
      .catch(console.error);
  }, []);

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
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 pt-12">
          
          {/* Left Side: Typography */}
          <div className="w-full lg:w-1/2 flex flex-col pt-4">
            {/* Phase 2: Identity (Masked text reveal) */}
            <div className="overflow-hidden mb-6">
              <motion.div
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
                className="font-heading text-3xl md:text-5xl font-bold text-foreground tracking-tight"
              >
                I&apos;m Prem Kumar.
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
              className="text-lg md:text-xl text-foreground/90 font-light max-w-xl leading-relaxed mb-12"
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

            {/* Quick Stats Block underneath buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12 flex gap-8 md:gap-12 w-full flex-wrap"
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full border border-border-subtle bg-surface/30">
                  <GraduationCap className="w-5 h-5 text-foreground/90" />
                </div>
                <div>
                  <div className="font-heading text-xl font-bold text-foreground">
                    8.86
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-foreground/90 mt-0.5">CGPA</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full border border-border-subtle bg-surface/30">
                  <Code2 className="w-5 h-5 text-foreground/90" />
                </div>
                <div>
                  <div className="font-heading text-xl font-bold text-foreground flex items-center">
                    <RollingNumber value={lcStats} />
                    <span className="text-accent-iris ml-1">+</span>
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-foreground/90 mt-0.5">DSA Solved</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full border border-border-subtle bg-surface/30 group relative">
                  <LeetCodeIcon className="w-5 h-5 text-accent-iris" />
                  <div className="absolute inset-0 rounded-full bg-accent-iris/10 blur-md pointer-events-none group-hover:bg-accent-iris/20 transition-colors"></div>
                </div>
                <div>
                  <div className="font-heading text-xl font-bold text-accent-iris">
                    <RollingNumber value={lcRating} />
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-foreground/90 mt-0.5">LC Rating</div>
                </div>
              </div>
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
              className="absolute inset-0 rounded-full scale-100 flex items-center justify-center overflow-visible"
            >
               {/* Glowing behind image */}
               <div className="absolute w-3/4 h-3/4 bg-accent-iris/20 rounded-full blur-3xl"></div>
               
               {/* The Avatar */}
               <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full border border-border-subtle overflow-hidden shadow-[0_0_40px_rgba(124,108,255,0.2)] group z-10">
                 <Image 
                   src="/avatar.jpg"
                   alt="Prem Kumar"
                   fill
                   priority
                   className="object-cover transition-transform duration-700 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-accent-iris/30 mix-blend-overlay pointer-events-none"></div>
               </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
      
      {/* Tech Stack Marquee Section */}
      <div className="w-full border-t border-border-subtle bg-surface/30 overflow-hidden relative z-10 py-3">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-8 items-center px-4 text-sm font-mono uppercase tracking-[0.2em] text-foreground/90">
              <span>C++</span>
              <span className="text-accent-iris">•</span>
              <span>Python</span>
              <span className="text-accent-iris">•</span>
              <span>JavaScript</span>
              <span className="text-accent-iris">•</span>
              <span>React.js</span>
              <span className="text-accent-iris">•</span>
              <span>Next.js</span>
              <span className="text-accent-iris">•</span>
              <span>Node.js</span>
              <span className="text-accent-iris">•</span>
              <span>Express.js</span>
              <span className="text-accent-iris">•</span>
              <span>Django</span>
              <span className="text-accent-iris">•</span>
              <span>MongoDB</span>
              <span className="text-accent-iris">•</span>
              <span>MySQL</span>
              <span className="text-accent-iris">•</span>
              <span>Redis</span>
              <span className="text-accent-iris">•</span>
              <span>Machine Learning</span>
              <span className="text-accent-iris">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
