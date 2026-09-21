"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";

export function Skills() {
  const categories = [
    { title: "Languages", items: profile.skills.languages },
    { title: "Frontend", items: profile.skills.frontend },
    { title: "Backend", items: profile.skills.backend },
    { title: "Databases", items: profile.skills.databases },
    { title: "AI / ML", items: profile.skills.ai_ml },
    { title: "Tools", items: profile.skills.tools },
  ];

  return (
    <section id="skills" className="py-32 border-b border-border-subtle bg-surface-elevated/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 max-w-2xl"
        >
          <div className="text-xs font-mono uppercase tracking-[0.3em] text-foreground-muted mb-8">
            04 — Technical Stack
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            The toolkit.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-accent mb-6 border-b border-border-subtle pb-4">
                {category.title}
              </h3>
              <ul className="space-y-4">
                {category.items.map(item => (
                  <li key={item} className="text-foreground-secondary font-light tracking-wide">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
