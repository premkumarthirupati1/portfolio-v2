"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

export function TextReveal({ 
  children, 
  className = "",
  delay = 0 
}: { 
  children: string; 
  className?: string;
  delay?: number;
}) {
  const containerRef = useRef(null);
  
  // Split the text into words so we can wrap them in overflow-hidden spans
  const words = children.split(" ");

  return (
    <div ref={containerRef} className={`flex flex-wrap ${className}`}>
      {words.map((word, index) => (
        <div key={index} className="overflow-hidden pb-2 mr-[-0.05em] last:mr-0">
          <motion.span
            className="inline-block"
            initial={{ y: "100%", opacity: 0, filter: "blur(6px)" }}
            whileInView={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ 
              duration: 0.8, 
              delay: delay + (index * 0.05),
              ease: [0.16, 1, 0.3, 1] 
            }}
          >
            {word}&nbsp;
          </motion.span>
        </div>
      ))}
    </div>
  );
}
