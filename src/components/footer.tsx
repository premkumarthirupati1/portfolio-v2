"use client";

import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="py-12 border-t border-border-subtle bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="font-heading text-lg font-bold tracking-tighter text-foreground">
            PREM KUMAR
          </div>
          
          <div className="flex items-center gap-6">
            <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-foreground/90 hover:text-accent transition-colors">
              GitHub
            </a>
            <span className="text-border-subtle">·</span>
            <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-foreground/90 hover:text-accent transition-colors">
              LinkedIn
            </a>
            <span className="text-border-subtle">·</span>
            <a href={`mailto:${profile.email}`} className="text-sm font-semibold text-foreground/90 hover:text-accent transition-colors">
              Email
            </a>
          </div>
          
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-foreground/90 flex flex-col items-center md:items-end gap-2">
            <div>© {new Date().getFullYear()} Prem Kumar</div>
            <div>Built with curiosity and code.</div>
          </div>

        </div>
      </div>
    </footer>
  );
}
