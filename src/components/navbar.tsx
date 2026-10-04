"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RollLink } from "@/components/ui/roll-link";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll to add a background when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Skills", href: "#skills" },
  ];

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled || isMobileMenuOpen ? 'bg-background/90 backdrop-blur-xl border-b border-border-subtle' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <RollLink href="#" className="font-heading text-xl font-bold tracking-tight text-foreground relative z-50">
          Prem Kumar.
        </RollLink>
        
        {/* Desktop Nav */}
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

        {/* Desktop Resume Button */}
        <div className="hidden md:block relative z-50">
          <RollLink 
            href="/resume.pdf" 
            target="_blank"
            className="inline-flex text-xs uppercase tracking-[0.2em] font-bold text-foreground items-center gap-2"
          >
            Resume <span className="text-accent-iris text-sm ml-1">↗</span>
          </RollLink>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 -mr-2 text-foreground relative z-50"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 top-20 bg-background/95 backdrop-blur-3xl border-b border-border-subtle flex flex-col items-center justify-center gap-8 md:hidden h-[calc(100vh-5rem)] z-40"
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={handleNavClick}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="text-2xl font-heading font-bold text-foreground hover:text-accent-iris transition-colors"
              >
                {item.name}
              </motion.a>
            ))}
            
            <motion.a
              href="/resume.pdf"
              target="_blank"
              onClick={handleNavClick}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navItems.length * 0.1, duration: 0.4 }}
              className="mt-4 px-8 py-4 border border-accent-iris text-accent-iris font-bold text-sm tracking-[0.2em] uppercase rounded-none hover:bg-accent-iris hover:text-background transition-colors"
            >
              DOWNLOAD RESUME
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
