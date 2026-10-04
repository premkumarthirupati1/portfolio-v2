const fs = require('fs');

let content = fs.readFileSync('src/components/hero.tsx', 'utf8');

// Replace GraduationCap with FolderGit2 in imports if needed, or just Briefcase
content = content.replace(
  'import { ArrowRight, ArrowDown, GraduationCap, Code2 } from "lucide-react";',
  'import { ArrowRight, ArrowDown, FolderGit2, Code2 } from "lucide-react";'
);

const oldBlock = `              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full border border-border-subtle bg-surface/30">
                  <GraduationCap className="w-5 h-5 text-foreground/90" />
                </div>
                <div>
                  <div className="font-heading text-xl font-bold text-foreground">
                    8.86
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-foreground/90 mt-0.5">CGPA</div>
                </div>
              </div>`;

const newBlock = `              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full border border-border-subtle bg-surface/30">
                  <FolderGit2 className="w-5 h-5 text-foreground/90" />
                </div>
                <div>
                  <div className="font-heading text-xl font-bold text-foreground flex items-center">
                    <RollingNumber value={3} />
                    <span className="text-accent-iris ml-1">+</span>
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-foreground/90 mt-0.5">Projects Built</div>
                </div>
              </div>`;

content = content.replace(oldBlock, newBlock);

fs.writeFileSync('src/components/hero.tsx', content);
