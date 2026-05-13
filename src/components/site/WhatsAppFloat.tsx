import { motion } from "framer-motion";
import { useState } from "react";

const PHONE = "919657339991";
const MSG = encodeURIComponent("Hello JIT Design Studios, I'd like to discuss an interior design project.");
const URL = `https://wa.me/${PHONE}?text=${MSG}`;

export function WhatsAppFloat() {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-50"
    >
      <motion.a
        href={URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.96 }}
        className="relative flex items-center gap-3 rounded-full bg-[color:var(--midnight)] pl-4 pr-5 py-3 ring-1 ring-[color:var(--gold)]/40 shadow-[0_12px_30px_-12px_rgba(0,0,0,0.5)] transition-colors hover:bg-[color:var(--royal)]"
      >
        <span className="grid h-9 w-9 place-items-center rounded-full bg-[color:var(--gold)]">
          <svg viewBox="0 0 32 32" className="h-5 w-5 text-[color:var(--midnight)]" fill="currentColor" aria-hidden>
            <path d="M16.001 3.2C8.93 3.2 3.2 8.93 3.2 16c0 2.26.6 4.46 1.74 6.4L3.2 28.8l6.55-1.7A12.74 12.74 0 0 0 16 28.8C23.07 28.8 28.8 23.07 28.8 16S23.07 3.2 16 3.2zm5.6 18.58c-.31.72-1.48 1.38-2.09 1.47-.55.08-1.24.11-2-.13-.46-.15-1.05-.34-1.8-.66-3.17-1.37-5.23-4.56-5.39-4.77-.16-.21-1.29-1.71-1.29-3.25s.81-2.31 1.1-2.62a1.15 1.15 0 0 1 .84-.39c.21 0 .42 0 .6.01.19.01.45-.07.7.53.26.62.88 2.15.96 2.31.08.16.13.35.03.55-.1.21-.15.34-.31.52-.15.19-.32.41-.46.55-.15.15-.31.32-.13.63.18.31.81 1.33 1.73 2.15 1.18 1.06 2.18 1.38 2.49 1.54.3.15.48.12.66-.08.18-.21.77-.89.97-1.2.21-.32.42-.26.7-.16.28.1 1.8.84 2.11 1 .31.15.52.23.6.36.08.13.08.75-.18 1.47z"/>
          </svg>
        </span>
        <motion.span
          initial={false}
          animate={{ width: hover ? "auto" : 0, opacity: hover ? 1 : 0, marginRight: hover ? 4 : -8 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden whitespace-nowrap text-[0.72rem] uppercase tracking-[0.24em] text-ivory"
        >
          Chat with us
        </motion.span>
      </motion.a>
    </motion.div>
  );
}
