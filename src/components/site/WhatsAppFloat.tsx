import { motion } from "framer-motion";
import { useState } from "react";

const PHONE = "919657339991";
const MSG = encodeURIComponent("Hello JIT Design Studios, I'd like to discuss an interior design project.");
const URL = `https://wa.me/${PHONE}?text=${MSG}`;

export function WhatsAppFloat() {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.4, duration: 1, ease: [0.16, 0.84, 0.24, 1] }}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-50"
    >
      {/* Outer breathing halo */}
      <motion.span
        aria-hidden
        className="absolute inset-0 rounded-full"
        style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--gold) 45%, transparent) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.45, 1], opacity: [0.55, 0, 0.55] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.a
        href={URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        whileTap={{ scale: 0.94 }}
        className="relative flex items-center"
      >
        {/* Expanding label */}
        <motion.span
          initial={false}
          animate={{
            width: hover ? "auto" : 0,
            paddingLeft: hover ? 22 : 0,
            paddingRight: hover ? 30 : 0,
            opacity: hover ? 1 : 0,
          }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden whitespace-nowrap rounded-full bg-[color:var(--midnight)]/95 backdrop-blur-md ring-1 ring-[color:var(--gold)]/40 -mr-7 py-3 pr-10 flex flex-col leading-none"
          style={{ boxShadow: "0 20px 50px -20px rgba(0,0,0,0.6)" }}
        >
          <span className="text-[0.55rem] uppercase tracking-[0.32em] text-[color:var(--gold)]">Consult</span>
          <span className="mt-1 text-[0.82rem] font-light text-ivory">Chat with the studio</span>
        </motion.span>

        {/* The orb */}
        <motion.span
          className="relative grid h-14 w-14 place-items-center rounded-full"
          style={{
            background: "conic-gradient(from 140deg, var(--gold), color-mix(in oklab, var(--gold-deep) 80%, var(--midnight)) 50%, var(--gold))",
            boxShadow: "0 18px 40px -10px color-mix(in oklab, var(--gold) 55%, transparent), inset 0 1px 0 rgba(255,255,255,0.35)",
          }}
          animate={{ rotate: hover ? 360 : 0 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="absolute inset-[3px] rounded-full bg-[color:var(--midnight)]" />
          {/* WhatsApp glyph */}
          <svg viewBox="0 0 32 32" className="relative h-6 w-6 text-[color:var(--gold)]" fill="currentColor" aria-hidden>
            <path d="M16.001 3.2C8.93 3.2 3.2 8.93 3.2 16c0 2.26.6 4.46 1.74 6.4L3.2 28.8l6.55-1.7A12.74 12.74 0 0 0 16 28.8C23.07 28.8 28.8 23.07 28.8 16S23.07 3.2 16 3.2zm0 23.04c-1.92 0-3.81-.52-5.46-1.5l-.39-.23-3.89 1.01 1.04-3.79-.25-.4A10.21 10.21 0 0 1 5.76 16c0-5.65 4.6-10.24 10.24-10.24 5.65 0 10.24 4.59 10.24 10.24S21.65 26.24 16 26.24zm5.6-7.66c-.31-.16-1.83-.9-2.11-1-.28-.1-.49-.16-.7.16-.2.31-.79.99-.97 1.2-.18.2-.36.23-.66.08-.31-.16-1.31-.48-2.49-1.54-.92-.82-1.55-1.84-1.73-2.15-.18-.31-.02-.48.13-.63.14-.14.31-.36.46-.55.16-.18.21-.31.31-.52.1-.2.05-.39-.03-.55-.08-.16-.7-1.69-.96-2.31-.25-.6-.51-.52-.7-.53-.18-.01-.39-.01-.6-.01a1.15 1.15 0 0 0-.84.39c-.29.31-1.1 1.08-1.1 2.62s1.13 3.04 1.29 3.25c.16.21 2.22 3.4 5.39 4.77.75.32 1.34.51 1.8.66.76.24 1.45.21 2 .13.61-.09 1.83-.75 2.09-1.47.26-.72.26-1.34.18-1.47-.08-.13-.29-.21-.6-.36z"/>
          </svg>
        </motion.span>
      </motion.a>
    </motion.div>
  );
}
