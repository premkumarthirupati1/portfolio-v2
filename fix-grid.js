const fs = require('fs');

let content = fs.readFileSync('src/components/about.tsx', 'utf8');

// Replace the flex container with a grid container
content = content.replace(
  'className="flex flex-col lg:flex-row items-start gap-12"',
  'className="grid grid-cols-1 lg:grid-cols-12 items-center gap-16 lg:gap-24"'
);

// Update max width to 6xl
content = content.replace(
  'className="max-w-5xl"',
  'className="max-w-6xl mx-auto"'
);

// Make left side span 7 columns
content = content.replace(
  'className="w-full lg:max-w-3xl"',
  'className="lg:col-span-7"'
);

// Make right side span 5 columns and remove flex-shrink, width, ml-auto
content = content.replace(
  'className="w-full lg:w-96 flex-shrink-0 mt-12 lg:mt-24"',
  'className="lg:col-span-5 mt-12 lg:mt-0 w-full"'
);

fs.writeFileSync('src/components/about.tsx', content);

console.log("Updated layout to grid");
