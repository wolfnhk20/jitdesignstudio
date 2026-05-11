import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

// Cinematic easing — long, slow, decisive. Inspired by film title sequences.
const EASE = [0.16, 0.84, 0.24, 1] as const;

const variants: Variants = {
  hidden: { opacity: 0, y: 42, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.25, ease: EASE },
  },
};

export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: keyof typeof motion;
}) {
  const Comp = motion[Tag] as typeof motion.div;
  return (
    <Comp
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-90px" }}
      variants={variants}
      transition={{ delay, duration: 1.25, ease: EASE }}
      className={className}
    >
      {children}
    </Comp>
  );
}
