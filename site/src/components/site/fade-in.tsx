"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Entrance animation wrapper — reveals children with a subtle fade + slide.
 * Use `staggerIndex` on repeated items (cards, list items) for a 40ms
 * stagger between siblings (A4 micro-polish).
 */
export function FadeIn({
  children,
  delay = 0,
  staggerIndex,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  /** When set, adds (staggerIndex × 40ms) to the base delay for stagger effect */
  staggerIndex?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  const totalDelay = delay + (staggerIndex ?? 0) * 0.04;

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: totalDelay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
