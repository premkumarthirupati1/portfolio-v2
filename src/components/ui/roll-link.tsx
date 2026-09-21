"use client";

import React from "react";

interface RollLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

export function RollLink({ children, className = "", ...props }: RollLinkProps) {
  return (
    <a 
      className={`group relative overflow-hidden inline-flex ${className}`}
      {...props}
    >
      <div className="transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
        {children}
      </div>
      <div className="absolute top-0 left-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-full group-hover:translate-y-0 text-accent">
        {children}
      </div>
    </a>
  );
}
