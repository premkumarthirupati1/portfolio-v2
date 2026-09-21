"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

export function MagneticButton({ 
  children, 
  className = "",
  as: Component = "button",
  ...props 
}: { 
  children: React.ReactNode; 
  className?: string;
  as?: any;
  [key: string]: any;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div 
      className="relative cursor-none flex items-center justify-center"
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
    >
      <Component 
        className={`relative ${className}`}
        {...props}
      >
        <motion.div
          animate={{ x: position.x, y: position.y }}
          transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
          className="w-full h-full flex items-center justify-center gap-3"
        >
          {children}
        </motion.div>
      </Component>
    </div>
  );
}
