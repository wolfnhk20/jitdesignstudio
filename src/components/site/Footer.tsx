import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/jit-logo.jpg";

const MAPS_EMBED =
  "https://www.google.com/maps?q=Konark+Vihar+Sambhajinagar+Dhankawadi+Pune+411043&output=embed";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[color:var(--midnight)] text-ivory ambient-glow">
      <div className="absolute inset-0 grain pointer-events-none" />

      <div className="relative mx-auto max-w-[1400px] px-6 pt-24 pb-10 md:px-10">
        {/* Map */}
        <div className="mb-20 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <p className="eyebrow text-[color:var(--gold)]/90">Visit the Studio</p>
            <h3 className="mt-4 font-display text-4xl md:text-5xl text-balance">
              A doorway in <em className="not-italic text-[color:var(--gold)]">Dhankawadi</em>,
              <br className="hidden md:block" /> a city in your imagination.
            </h3>
            <p className="mt-6 max-w-md text-ivory/65 leading-relaxed font-light">
              Walk in for a slow conversation over chai, swatches and a few stories. We meet by
              appointment so we can give you our full attention.
            </p>
            <div className="mt-8 space-y-3 text-sm">
              <a href="tel:+919657339991" className="flex items-center gap-3 text-ivory/85 hover:text-[color:var(--gold)] transition-colors">
                <Phone size={15} className="text-[color:var(--gold)]" /> +91 96573 39991
              </a>
              <a href="mailto:contact@jitdesignstudios.com" className="flex items-center gap-3 text-ivory/85 hover:text-[color:var(--gold)] transition-colors">
                <Mail size={15} className="text-[color:var(--gold)]" /> contact@jitdesignstudios.com
              </a>
              <a
                href="https://www.instagram.com/jit_design_studio/"
                target="_blank" rel="noreferrer"
                className="flex items-center gap-3 text-ivory/85 hover:text-[color:var(--gold)] transition-colors"
              >
                <Instagram size={15} className="text-[color:var(--gold)]" /> @jit_design_studio
              </a>
              <p className="flex items-start gap-3 text-ivory/85">
                <MapPin size={15} className="mt-1 text-[color:var(--gold)] shrink-0" />
                Pune – Satara Rd, Konark Vihar, Sambhajinagar, Dhankawadi, Pune, Maharashtra 411043
              </p>
            </div>
          </div>

          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[380px] overflow-hidden rounded-sm ring-1 ring-[color:var(--gold)]/25">
            <iframe
              title="JIT Design Studio location"
              src={MAPS_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full grayscale-[0.35] contrast-110 brightness-90"
            />
            <div className="pointer-events-none absolute inset-0 mix-blend-multiply bg-[color:var(--royal)]/25" />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[color:var(--gold)]/30" />
          </div>
        </div>

        <div className="gold-rule opacity-50" />

        <div className="mt-12 grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="" className="h-12 w-12 rounded-full ring-1 ring-[color:var(--gold)]/40 object-cover" />
              <span>
                <span className="block font-display text-xl">JIT Design Studio</span>
                <span className="eyebrow !text-[0.6rem] text-[color:var(--gold)]/80">Designing for the way you live</span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm text-ivory/55 leading-relaxed">
              A Pune-based interior design studio crafting warm, contemporary Indian homes — one
              detail, one room, one family at a time.
            </p>
          </div>

          <div>
            <p className="eyebrow text-[color:var(--gold)]/80">Explore</p>
            <ul className="mt-5 space-y-2 text-sm">
              {["studio", "services", "portfolio", "faq", "contact"].map((p) => (
                <li key={p}>
                  <Link to={`/${p}`} className="text-ivory/70 hover:text-[color:var(--gold)] capitalize transition-colors">
                    {p === "faq" ? "Journal & FAQ" : p}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-[color:var(--gold)]/80">Studio Hours</p>
            <ul className="mt-5 space-y-2 text-sm text-ivory/70">
              <li>Mon — Sat · 10:30 am – 7:30 pm</li>
              <li>Sun · By appointment</li>
            </ul>
            <p className="mt-6 text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]/70">
              Currently accepting projects for 2026
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/5 pt-6 text-xs text-ivory/45 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} JIT Design Studio. Crafted in Pune.</p>
          <p className="font-display italic text-[color:var(--gold)]/70">Designing for the way you live.</p>
        </div>
      </div>
    </footer>
  );
}
