"use client";

import { motion } from "framer-motion";
import { RollLink } from "@/components/ui/roll-link";

export function Navbar() {
  const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Skills", href: "#skills" },
  ];

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 w-full z-50 bg-background/70 backdrop-blur-xl border-b border-border-subtle transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <RollLink href="#" className="font-heading text-xl font-bold tracking-tight text-foreground">
          Prem Kumar.
        </RollLink>
        
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <RollLink 
              key={item.name} 
              href={item.href}
              className="text-xs uppercase tracking-[0.2em] font-semibold text-foreground/90"
            >
              {item.name}
            </RollLink>
          ))}
        </nav>

        <RollLink 
          href="/resume.pdf" 
          target="_blank"
          className="hidden md:inline-flex text-xs uppercase tracking-[0.2em] font-bold text-foreground items-center gap-2"
        >
          Resume <span className="text-accent text-sm ml-1">↗</span>
        </RollLink>
      </div>
    </motion.header>
  );
}
