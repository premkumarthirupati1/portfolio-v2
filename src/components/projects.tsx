"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { ArrowRight } from "lucide-react";
import { TextReveal } from "@/components/ui/text-reveal";

export function Projects() {
  const featuredProject = profile.projects[0]; // SkillForge
  const remainingProjects = [profile.projects[1], profile.projects[2]];

  return (
    <section id="projects" className="py-32 border-b border-border-subtle bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Featured Project */}
        <div className="mb-48">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 flex flex-col md:flex-row md:items-end justify-between border-b border-border-subtle pb-8"
          >
            <div>
              <div className="text-xs font-mono uppercase tracking-[0.3em] text-foreground/90 mb-4">
                01 / Featured Work
              </div>
              <h2 className="font-heading text-5xl md:text-7xl font-bold tracking-tight text-foreground">
                <TextReveal>{featuredProject.title}</TextReveal>
              </h2>
            </div>
            <div className="mt-6 md:mt-0 text-sm font-mono tracking-widest text-accent-iris uppercase">
              {featuredProject.techStack.slice(0, 3).join(" • ")}
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.88, opacity: 0, borderRadius: "24px" }}
            whileInView={{ scale: 1, opacity: 1, borderRadius: "0px" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full aspect-[16/9] bg-surface relative overflow-hidden group cursor-none"
          >
            {/* Cinematic visual placeholder */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-surface-elevated to-surface opacity-80"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
               <div className="w-full max-w-4xl h-full border border-border-subtle/50 flex flex-col shadow-2xl transition-transform duration-700 ease-out group-hover:scale-[1.035]">
                 <div className="h-8 bg-surface-elevated border-b border-border-subtle flex items-center px-4 gap-2">
                   <div className="w-2 h-2 rounded-full bg-border-subtle"></div>
                   <div className="w-2 h-2 rounded-full bg-border-subtle"></div>
                   <div className="w-2 h-2 rounded-full bg-border-subtle"></div>
                 </div>
                 <div className="flex-1 bg-background relative flex items-center justify-center">
                    <span className="font-mono text-xs text-foreground/90">PREVIEW: {featuredProject.title.toUpperCase()}</span>
                 </div>
               </div>
            </div>

            {/* Custom overlay on hover (simulated via CSS since actual cursor is globally handled) */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
              <div className="w-32 h-32 rounded-full bg-foreground text-background flex items-center justify-center font-bold text-xs tracking-widest uppercase shadow-2xl scale-50 group-hover:scale-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                Case Study ↗
              </div>
            </div>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-1">
              <div className="text-xs font-mono tracking-[0.2em] text-foreground/90 mb-2 uppercase">The Problem</div>
              <p className="text-foreground/90 font-light text-sm">{featuredProject.problem}</p>
            </div>
            <div className="col-span-2">
              <div className="text-xs font-mono tracking-[0.2em] text-foreground/90 mb-2 uppercase">Solution & Impact</div>
              <p className="text-foreground/90 font-light text-sm mb-4">{featuredProject.description}</p>
              <a href="#" className="inline-flex items-center gap-2 text-xs font-bold font-mono tracking-widest text-foreground hover:text-accent-iris transition-colors group">
                VIEW FULL CASE STUDY <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Alternating Selected Projects */}
        <div className="space-y-48">
          <div className="text-xs font-mono uppercase tracking-[0.3em] text-foreground/90 border-b border-border-subtle pb-4 mb-24">
            02 / Selected Projects
          </div>

          {remainingProjects.map((project, index) => {
            const isImageLeft = index % 2 === 0;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col lg:flex-row gap-16 lg:gap-24 items-center group`}
              >
                {/* Image Side */}
                <div className={`w-full lg:w-1/2 overflow-hidden bg-surface relative aspect-[4/3] ${!isImageLeft ? 'lg:order-2' : ''}`}>
                  <motion.div 
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full border border-border-subtle relative flex items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-surface-elevated to-surface"
                  >
                    <span className="font-mono text-xs text-foreground/90 opacity-50">VISUAL: {project.title.toUpperCase()}</span>
                  </motion.div>
                </div>

                {/* Content Side */}
                <div className={`w-full lg:w-1/2 flex flex-col justify-center ${!isImageLeft ? 'lg:order-1' : ''}`}>
                  <div className="font-mono text-xs text-accent-aurora mb-4 border border-accent-aurora/20 px-3 py-1 rounded-sm bg-accent-aurora/5 inline-block w-fit">
                    0{index + 2} // {project.subtitle}
                  </div>
                  
                  <h3 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6 group-hover:translate-x-1 transition-transform duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-foreground/90 font-light leading-relaxed mb-8">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.techStack.map(tech => (
                      <span 
                        key={tech} 
                        className="text-xs font-mono tracking-wider text-foreground/90 border border-border-subtle px-3 py-1.5 rounded-sm bg-background-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm font-bold uppercase tracking-[0.1em] text-foreground group-hover:text-accent-iris transition-colors flex items-center gap-2"
                  >
                    VIEW REPOSITORY <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
