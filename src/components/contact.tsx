"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { ArrowRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-surface-elevated/10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="text-xs font-mono uppercase tracking-[0.3em] text-foreground/90 mb-8">
            06 — Contact
          </div>
          <h2 className="font-heading text-5xl md:text-7xl font-bold tracking-tighter text-foreground mb-8">
            Let's build something <br className="hidden md:block"/>
            <span className="text-accent">meaningful.</span>
          </h2>
          <p className="text-xl md:text-2xl text-foreground/90 font-light max-w-2xl mx-auto mb-16">
            Have an opportunity, project, or interesting problem? I'd love to hear about it.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href={`mailto:${profile.email}`} 
              className="group flex items-center justify-center gap-3 bg-foreground text-background px-8 py-4 w-full sm:w-auto font-semibold hover:bg-accent transition-colors duration-300"
            >
              Email Me 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href={profile.socials.linkedin} 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 border border-border-subtle bg-transparent px-8 py-4 w-full sm:w-auto font-semibold text-foreground hover:border-accent hover:text-accent transition-colors duration-300"
            >
              LinkedIn 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href={profile.socials.github} 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 border border-border-subtle bg-transparent px-8 py-4 w-full sm:w-auto font-semibold text-foreground hover:border-accent hover:text-accent transition-colors duration-300"
            >
              GitHub 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
