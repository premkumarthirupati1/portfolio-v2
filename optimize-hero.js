const fs = require('fs');

let content = fs.readFileSync('src/components/hero.tsx', 'utf8');

// Replace imports and state
content = content.replace(
  'import { useEffect, useState } from "react";',
  'import { useEffect, useState } from "react";\nimport { useMotionValue, useSpring, useMotionTemplate } from "framer-motion";'
);

// Replace mousePos state and useEffect
const oldStateBlock = `  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [lcStats, setLcStats] = useState(1000);
  const [lcRating, setLcRating] = useState(1700); // Default to 1700 before fetch

  useEffect(() => {
    fetch("/api/leetcode")
      .then(res => res.json())
      .then(data => {
        if (data.status === "success") {
          if (data.totalSolved) setLcStats(data.totalSolved);
          if (data.rating) setLcRating(data.rating);
        }
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);`;

const newStateBlock = `  const [lcStats, setLcStats] = useState(1000);
  const [lcRating, setLcRating] = useState(1700);

  // Use highly-performant Framer Motion values instead of React State
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Create smooth springs for the parallax
  const springX = useSpring(mouseX, { damping: 30, stiffness: 200, mass: 0.5 });
  const springY = useSpring(mouseY, { damping: 30, stiffness: 200, mass: 0.5 });
  
  // Motion values for parallax layers (multiplier applied)
  const layer1X = useSpring(useMotionValue(0), { damping: 30, stiffness: 200, mass: 0.5 });
  const layer1Y = useSpring(useMotionValue(0), { damping: 30, stiffness: 200, mass: 0.5 });
  
  const layer2X = useSpring(useMotionValue(0), { damping: 30, stiffness: 200, mass: 0.5 });
  const layer2Y = useSpring(useMotionValue(0), { damping: 30, stiffness: 200, mass: 0.5 });
  
  const layer3X = useSpring(useMotionValue(0), { damping: 30, stiffness: 200, mass: 0.5 });
  const layer3Y = useSpring(useMotionValue(0), { damping: 30, stiffness: 200, mass: 0.5 });

  // Template for the flashlight effect
  const backgroundGradient = useMotionTemplate\`radial-gradient(600px circle at calc(50% + \${mouseX}px) calc(50% + \${mouseY}px), var(--color-accent-iris) 0%, transparent 60%)\`;

  useEffect(() => {
    fetch("/api/leetcode")
      .then(res => res.json())
      .then(data => {
        if (data.status === "success") {
          if (data.totalSolved) setLcStats(data.totalSolved);
          if (data.rating) setLcRating(data.rating);
        }
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized mouse positions (-10 to 10)
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      
      // Update motion values directly (bypasses React render pipeline)
      mouseX.set(x * 20); // Faster updates for flashlight
      mouseY.set(y * 20);
      
      // Update layer parallax values
      layer1X.set(x * -0.5);
      layer1Y.set(y * -0.5);
      
      layer2X.set(x * 1);
      layer2Y.set(y * 1);
      
      layer3X.set(x * -1.5);
      layer3Y.set(y * -1.5);
    };
    
    // Use passive listener for better scroll performance
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, layer1X, layer1Y, layer2X, layer2Y, layer3X, layer3Y]);`;

content = content.replace(oldStateBlock, newStateBlock);


// Fix the Flashlight effect div
const oldFlashlight = `<div 
        className="pointer-events-none absolute inset-0 z-0 opacity-40 mix-blend-screen transition-transform duration-75"
        style={{
          background: \`radial-gradient(600px circle at calc(50% + \${mousePos.x * 20}px) calc(50% + \${mousePos.y * 20}px), var(--color-accent-iris) 0%, transparent 60%)\`,
          opacity: 0.05
        }}
      ></div>`;

const newFlashlight = `<motion.div 
        className="pointer-events-none absolute inset-0 z-0 mix-blend-screen"
        style={{
          background: backgroundGradient,
          opacity: 0.05
        }}
      ></motion.div>`;

content = content.replace(oldFlashlight, newFlashlight);

// Fix the Parallax motion divs
content = content.replace(
  '<motion.div \n              animate={{ x: mousePos.x * -0.5, y: mousePos.y * -0.5 }}\n              className="absolute inset-0 border border-border-subtle rounded-full opacity-20 scale-75"\n            />',
  '<motion.div \n              style={{ x: layer1X, y: layer1Y }}\n              className="absolute inset-0 border border-border-subtle rounded-full opacity-20 scale-75"\n            />'
);

content = content.replace(
  '<motion.div \n              animate={{ x: mousePos.x * 1, y: mousePos.y * 1 }}\n              className="absolute inset-0 border border-border-subtle rounded-full opacity-40 scale-90"\n            />',
  '<motion.div \n              style={{ x: layer2X, y: layer2Y }}\n              className="absolute inset-0 border border-border-subtle rounded-full opacity-40 scale-90"\n            />'
);

content = content.replace(
  '<motion.div \n              animate={{ x: mousePos.x * -1.5, y: mousePos.y * -1.5 }}\n              className="absolute inset-0 rounded-full scale-100 flex items-center justify-center overflow-visible"\n            >',
  '<motion.div \n              style={{ x: layer3X, y: layer3Y }}\n              className="absolute inset-0 rounded-full scale-100 flex items-center justify-center overflow-visible"\n            >'
);

fs.writeFileSync('src/components/hero.tsx', content);
