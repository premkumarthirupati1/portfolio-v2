"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";

export function RollingNumber({ 
  value, 
  decimals = 0,
  suffix = ""
}: { 
  value: number; 
  decimals?: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: [0.16, 1, 0.3, 1], // Custom cubic bezier
        onUpdate(v) {
          setDisplayValue(v.toFixed(decimals));
        }
      });
      return () => controls.stop();
    }
  }, [isInView, value, decimals]);

  return (
    <span ref={ref} className="inline-block relative">
      <motion.span 
        initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
        animate={isInView ? { filter: "blur(0px)", opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        {displayValue}{suffix}
      </motion.span>
    </span>
  );
}
