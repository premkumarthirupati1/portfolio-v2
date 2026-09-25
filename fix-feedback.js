const fs = require('fs');

// 1. Fix About GIF distance
let aboutContent = fs.readFileSync('src/components/about.tsx', 'utf8');
// Remove justify-between and lg:ml-auto. Change gap-16 to gap-12.
// Change max-w-6xl to max-w-5xl so the container isn't excessively wide.
aboutContent = aboutContent.replace(
  'className="flex flex-col lg:flex-row justify-between items-start gap-16"',
  'className="flex flex-col lg:flex-row items-start gap-12"'
);
aboutContent = aboutContent.replace(
  'className="max-w-6xl"',
  'className="max-w-5xl"'
);
aboutContent = aboutContent.replace(
  'className="w-full lg:w-96 flex-shrink-0 mt-12 lg:mt-24 lg:ml-auto"',
  'className="w-full lg:w-96 flex-shrink-0 mt-12 lg:mt-24"'
);
fs.writeFileSync('src/components/about.tsx', aboutContent);

// 2. Fix Hero CGPA
let heroContent = fs.readFileSync('src/components/hero.tsx', 'utf8');
// Replace RollingNumber for CGPA with static text to prevent Hydration/useInView bugs
heroContent = heroContent.replace(
  '<RollingNumber value={8.86} decimals={2} />',
  '8.86'
);
fs.writeFileSync('src/components/hero.tsx', heroContent);

console.log('Fixed both');
