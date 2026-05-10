import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const PHONE = "919657339991";
const MSG = encodeURIComponent("Hello JIT Design Studios, I'd like to discuss an interior design project.");
const URL = `https://wa.me/${PHONE}?text=${MSG}`;

export function WhatsAppFloat() {
  return (
    <motion.a
      href={URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, y: 30, scale: 0.85 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      className="group fixed bottom-5 right-5 md:bottom-8 md:right-8 z-50 inline-flex items-center gap-3 rounded-full bg-[color:var(--midnight)] pl-4 pr-5 py-3 text-ivory shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] ring-1 ring-[color:var(--gold)]/40 backdrop-blur-md transition-all hover:ring-[color:var(--gold)]"
    >
      <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--gold)] text-[color:var(--midnight)]">
        <MessageCircle size={18} strokeWidth={2.2} />
        <span className="pointer-events-none absolute inset-0 rounded-full bg-[color:var(--gold)] opacity-60 animate-ping" />
      </span>
      <span className="hidden sm:flex flex-col leading-tight">
        <span className="text-[0.65rem] uppercase tracking-[0.3em] text-[color:var(--gold)]/85">Consult</span>
        <span className="text-sm font-light">Chat with the studio</span>
      </span>
    </motion.a>
  );
}
