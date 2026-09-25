const fs = require('fs');

let content = fs.readFileSync('src/components/about.tsx', 'utf8');

// Change text to span 8 columns
content = content.replace(
  'className="lg:col-span-7"',
  'className="lg:col-span-8"'
);

// Change GIF to span 4 columns
content = content.replace(
  'className="lg:col-span-5 mt-12 lg:mt-0 w-full"',
  'className="lg:col-span-4 mt-12 lg:mt-0 w-full"'
);

// Make GIF container smaller and use 4/3 aspect ratio
content = content.replace(
  'className="relative aspect-square w-full max-w-sm rounded-2xl overflow-hidden border border-border-subtle shadow-[0_0_40px_rgba(124,108,255,0.05)] group mx-auto lg:ml-auto"',
  'className="relative aspect-[4/3] w-full max-w-[280px] rounded-2xl overflow-hidden border border-border-subtle shadow-[0_0_40px_rgba(124,108,255,0.05)] group mx-auto lg:ml-auto"'
);

fs.writeFileSync('src/components/about.tsx', content);
