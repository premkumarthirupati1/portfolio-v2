const fs = require('fs');

let content = fs.readFileSync('src/components/projects.tsx', 'utf8');

// Ensure next/image is imported
if (!content.includes('import Image from "next/image";')) {
  content = content.replace(
    'import { TextReveal } from "@/components/ui/text-reveal";',
    'import { TextReveal } from "@/components/ui/text-reveal";\nimport Image from "next/image";'
  );
}

// 1. Featured Project Image Replacement
const oldFeaturedPreview = `<div className="flex-1 bg-background relative flex items-center justify-center">
                    <span className="font-mono text-xs text-foreground/90">PREVIEW: {featuredProject.title.toUpperCase()}</span>
                 </div>`;
                 
const newFeaturedPreview = `<div className="flex-1 bg-background relative flex items-center justify-center overflow-hidden">
                    <Image src="/skillforge.jpg" alt="SkillForge Dashboard" fill className="object-cover" />
                 </div>`;

content = content.replace(oldFeaturedPreview, newFeaturedPreview);

// 2. Remaining Projects Map & Image Replacement
const oldMapStart = `{remainingProjects.map((project, index) => {
            const isImageLeft = index % 2 === 0;

            return (`;

const newMapStart = `{remainingProjects.map((project, index) => {
            const isImageLeft = index % 2 === 0;
            const projectImage = index === 0 ? '/deepfake.jpg' : '/ecommerce.jpg';

            return (`;

content = content.replace(oldMapStart, newMapStart);

const oldRemainingPreview = `<span className="font-mono text-xs text-foreground/90 opacity-50">VISUAL: {project.title.toUpperCase()}</span>`;

const newRemainingPreview = `<Image src={projectImage} alt={project.title} fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" />`;

content = content.replace(oldRemainingPreview, newRemainingPreview);

fs.writeFileSync('src/components/projects.tsx', content);
