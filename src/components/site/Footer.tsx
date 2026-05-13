import { Link } from "@tanstack/react-router";
import { Instagram, Mail, Phone } from "lucide-react";
import { OwlMark } from "@/components/site/Logo";

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-[color:var(--midnight)] text-ivory">
      <div className="absolute inset-0 -z-10 ambient-glow opacity-60" />
      <div className="absolute inset-0 -z-10 grain pointer-events-none" />
      <div className="relative h-px w-full bg-gradient-to-r from-transparent via-[color:var(--gold)]/60 to-transparent" />

      <div className="mx-auto max-w-[1300px] px-6 md:px-10 py-10 md:py-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <Link to="/" className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center">
              <OwlMark size={44} />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-lg tracking-wide">JIT Design Studio</span>
              <span className="eyebrow !text-[0.55rem] text-[color:var(--gold)]/80">Pune · Interiors</span>
            </span>
          </Link>

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs uppercase tracking-[0.22em] text-ivory/65">
            {["studio", "services", "portfolio", "faq", "contact"].map((p) => (
              <Link key={p} to={`/${p}`} className="hover:text-[color:var(--gold)] transition-colors">
                {p === "faq" ? "FAQ" : p}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-5 text-ivory/70">
            <a href="tel:+919657339991" aria-label="Call" className="hover:text-[color:var(--gold)] transition-colors">
              <Phone size={16} />
            </a>
            <a href="mailto:contact@jitdesignstudios.com" aria-label="Email" className="hover:text-[color:var(--gold)] transition-colors">
              <Mail size={16} />
            </a>
            <a href="https://www.instagram.com/jit_design_studio/" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-[color:var(--gold)] transition-colors">
              <Instagram size={16} />
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-[color:var(--gold)]/15 pt-5 text-[0.7rem] text-ivory/45 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} JIT Design Studio · Crafted in Pune</p>
          <p className="font-display italic text-[color:var(--gold)]/70">Designing for the way you live.</p>
        </div>
      </div>
    </footer>
  );
}
