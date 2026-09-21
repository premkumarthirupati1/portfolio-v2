"use client";

import { motion } from "framer-motion";

export function Currently() {
  return (
    <section className="py-24 border-b border-border-subtle bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-12"
        >
          <div className="md:w-1/3">
            <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground flex items-center gap-4">
              Currently <span className="relative flex h-3 w-3"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span><span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span></span>
            </h2>
            <p className="text-sm text-foreground-secondary mt-2 font-light">What I'm focused on right now.</p>
          </div>
          
          <div className="md:w-2/3 border-l border-border-subtle pl-8 space-y-4">
            <div className="flex items-center gap-4 group">
              <span className="text-accent font-mono">{'>'}</span>
              <span className="text-foreground-secondary group-hover:text-foreground transition-colors font-light">
                Building production-grade backend architectures<span className="animate-pulse text-accent font-bold">_</span>
              </span>
            </div>
            <div className="flex items-center gap-4 group">
              <span className="text-accent font-mono">{'>'}</span>
              <span className="text-foreground-secondary group-hover:text-foreground transition-colors font-light">Solving complex DSA problems daily</span>
            </div>
            <div className="flex items-center gap-4 group">
              <span className="text-accent font-mono">{'>'}</span>
              <span className="text-foreground-secondary group-hover:text-foreground transition-colors font-light">Exploring scalable AI/ML deployments</span>
            </div>
            <div className="flex items-center gap-4 group">
              <span className="text-accent font-mono">{'>'}</span>
              <span className="text-foreground font-medium">Looking for software engineering opportunities</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
