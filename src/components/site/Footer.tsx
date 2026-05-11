import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import logo from "@/assets/jit-logo.jpg";

const MAPS_EMBED =
  "https://www.google.com/maps?q=Konark+Vihar+Sambhajinagar+Dhankawadi+Pune+411043&output=embed";

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden text-ivory">
      {/* Layered cinematic background — bridges from any preceding royal/ivory section */}
      <div className="absolute inset-0 -z-10 bg-[color:var(--midnight)]" />
      <div
        className="absolute inset-x-0 top-0 -z-10 h-[55%] bg-gradient-to-b from-[color:var(--royal)] via-[color:var(--midnight)]/85 to-[color:var(--midnight)]"
      />
      <div className="absolute inset-0 -z-10 ambient-glow opacity-80" />
      <div className="absolute inset-0 -z-10 grain pointer-events-none" />

      {/* Gold seam */}
      <div className="relative h-px w-full bg-gradient-to-r from-transparent via-[color:var(--gold)]/70 to-transparent" />

      <div className="relative mx-auto max-w-[1400px] px-6 pt-24 pb-10 md:px-10 md:pt-32">
        {/* Studio invitation */}
        <div className="mb-20 grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
          <div>
            <p className="eyebrow text-[color:var(--gold)]">Visit the Studio</p>
            <h3 className="mt-5 font-display text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.05] text-balance">
              A doorway in <em className="not-italic text-[color:var(--gold)]">Dhankawadi</em>,
              <br className="hidden md:block" /> a city in your imagination.
            </h3>
            <p className="mt-7 max-w-md text-ivory/65 leading-[1.85] font-light">
              Walk in for a slow conversation over chai, swatches and a few stories. We meet by
              appointment so we can give you our full attention.
            </p>

            <div className="mt-9 space-y-3.5 text-sm">
              <a href="tel:+919657339991" className="group inline-flex items-center gap-3 text-ivory/85 hover:text-[color:var(--gold)] transition-colors">
                <Phone size={15} className="text-[color:var(--gold)]" /> +91 96573 39991
                <ArrowUpRight size={13} className="opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
              </a><br/>
              <a href="mailto:contact@jitdesignstudios.com" className="group inline-flex items-center gap-3 text-ivory/85 hover:text-[color:var(--gold)] transition-colors">
                <Mail size={15} className="text-[color:var(--gold)]" /> contact@jitdesignstudios.com
                <ArrowUpRight size={13} className="opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
              </a><br/>
              <a
                href="https://www.instagram.com/jit_design_studio/"
                target="_blank" rel="noreferrer"
                className="group inline-flex items-center gap-3 text-ivory/85 hover:text-[color:var(--gold)] transition-colors"
              >
                <Instagram size={15} className="text-[color:var(--gold)]" /> @jit_design_studio
                <ArrowUpRight size={13} className="opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
              </a>
              <p className="flex items-start gap-3 text-ivory/75 max-w-md pt-2">
                <MapPin size={15} className="mt-1 text-[color:var(--gold)] shrink-0" />
                Pune – Satara Rd, Konark Vihar, Sambhajinagar, Dhankawadi, Pune, Maharashtra 411043
              </p>
            </div>

            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-3 border border-[color:var(--gold)]/55 bg-[color:var(--gold)]/[0.04] px-7 py-3.5 text-[0.7rem] uppercase tracking-[0.3em] text-[color:var(--gold)] hover:bg-[color:var(--gold)] hover:text-[color:var(--midnight)] transition-all"
            >
              Schedule a Visit <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[420px] overflow-hidden">
            <iframe
              title="JIT Design Studio location"
              src={MAPS_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full grayscale-[0.4] contrast-110 brightness-90"
            />
            <div className="pointer-events-none absolute inset-0 mix-blend-multiply bg-[color:var(--royal)]/35" />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[color:var(--gold)]/35" />
            {/* Corner brackets — editorial detail */}
            <span className="pointer-events-none absolute top-2 left-2 h-4 w-4 border-t border-l border-[color:var(--gold)]" />
            <span className="pointer-events-none absolute top-2 right-2 h-4 w-4 border-t border-r border-[color:var(--gold)]" />
            <span className="pointer-events-none absolute bottom-2 left-2 h-4 w-4 border-b border-l border-[color:var(--gold)]" />
            <span className="pointer-events-none absolute bottom-2 right-2 h-4 w-4 border-b border-r border-[color:var(--gold)]" />
          </div>
        </div>

        <div className="gold-rule opacity-40" />

        <div className="mt-14 grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Link to="/" className="inline-flex items-center gap-3.5">
              <img src={logo} alt="" className="h-12 w-12 rounded-full ring-1 ring-[color:var(--gold)]/45 object-cover" />
              <span>
                <span className="block font-display text-xl tracking-wide">JIT Design Studio</span>
                <span className="eyebrow !text-[0.6rem] text-[color:var(--gold)]/85">Designing for the way you live</span>
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-sm text-ivory/55 leading-[1.8] font-light">
              A Pune-based interior design studio crafting warm, contemporary Indian homes — one
              detail, one room, one family at a time.
            </p>
          </div>

          <div>
            <p className="eyebrow text-[color:var(--gold)]/85">Explore</p>
            <ul className="mt-5 space-y-2.5 text-sm">
              {["studio", "services", "portfolio", "faq", "contact"].map((p) => (
                <li key={p}>
                  <Link to={`/${p}`} className="link-underline text-ivory/70 hover:text-[color:var(--gold)] capitalize transition-colors">
                    {p === "faq" ? "Journal & FAQ" : p}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-[color:var(--gold)]/85">Studio Hours</p>
            <ul className="mt-5 space-y-2.5 text-sm text-ivory/70 font-light">
              <li>Mon — Sat · 10:30 am – 7:30 pm</li>
              <li>Sun · By appointment</li>
            </ul>
            <p className="mt-7 inline-flex items-center gap-2 text-[0.6rem] uppercase tracking-[0.3em] text-[color:var(--gold)]/85">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--gold)] animate-pulse" />
              Accepting projects · 2026
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-[color:var(--gold)]/15 pt-7 text-xs text-ivory/45 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} JIT Design Studio. Crafted in Pune.</p>
          <p className="font-display italic text-[color:var(--gold)]/75 text-sm tracking-wide">Designing for the way you live.</p>
        </div>
      </div>
    </footer>
  );
}
