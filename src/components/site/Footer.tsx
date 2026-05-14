import { Link } from "@tanstack/react-router";
import { Instagram, Mail, Phone, MapPin, Clock } from "lucide-react";
import { OwlMark } from "@/components/site/Logo";

const MAPS_EMBED =
  "https://www.google.com/maps?q=Konark+Vihar+Sambhajinagar+Dhankawadi+Pune+411043&output=embed";

export function Footer() {
  return (
    <footer className="relative bg-[color:var(--midnight)] text-ivory">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[color:var(--gold)]/50 to-transparent" />

      <div className="mx-auto max-w-[1300px] px-6 md:px-10 py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand + description */}
          <div className="md:col-span-4">
            <Link to="/" className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center">
                <OwlMark size={40} />
              </span>
              <span className="leading-tight">
                <span className="block font-display text-lg tracking-wide">JIT Design Studio</span>
                <span className="eyebrow !text-[0.55rem] text-[color:var(--gold)]/80">Pune · Interiors</span>
              </span>
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-ivory/65 font-light max-w-xs">
              A Pune-based interior design studio crafting calm, considered homes — where heritage,
              material and everyday living meet with quiet precision.
            </p>
            <div className="mt-5 flex items-center gap-4 text-ivory/70">
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

          {/* Explore */}
          <div className="md:col-span-2">
            <p className="eyebrow text-[color:var(--gold)]">Explore</p>
            <ul className="mt-5 space-y-3 text-sm text-ivory/75">
              {[
                ["studio", "Studio"],
                ["services", "Services"],
                ["portfolio", "Portfolio"],
                ["faq", "FAQ"],
                ["contact", "Contact"],
              ].map(([slug, label]) => (
                <li key={slug}>
                  <Link to={`/${slug}`} className="hover:text-[color:var(--gold)] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + address */}
          <div className="md:col-span-3">
            <p className="eyebrow text-[color:var(--gold)]">Get in touch</p>
            <ul className="mt-5 space-y-4 text-sm text-ivory/75">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="mt-0.5 text-[color:var(--gold)] shrink-0" />
                <span className="leading-relaxed">
                  Pune – Satara Rd, Konark Vihar,<br />
                  Sambhajinagar, Dhankawadi,<br />
                  Pune, Maharashtra 411043
                </span>
              </li>
              <li>
                <a href="tel:+919657339991" className="flex items-center gap-3 hover:text-[color:var(--gold)] transition-colors">
                  <Phone size={15} className="text-[color:var(--gold)]" /> +91 96573 39991
                </a>
              </li>
              <li>
                <a href="mailto:contact@jitdesignstudios.com" className="flex items-center gap-3 hover:text-[color:var(--gold)] transition-colors">
                  <Mail size={15} className="text-[color:var(--gold)]" /> contact@jitdesignstudios.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={15} className="mt-0.5 text-[color:var(--gold)] shrink-0" />
                <span className="leading-relaxed">
                  Mon – Sat · 10:30 am – 7:30 pm<br />
                  Sun · By appointment
                </span>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div className="md:col-span-3">
            <p className="eyebrow text-[color:var(--gold)]">Find the studio</p>
            <a
              href="https://www.google.com/maps?q=Konark+Vihar+Sambhajinagar+Dhankawadi+Pune+411043"
              target="_blank"
              rel="noreferrer"
              className="mt-5 block aspect-[4/3] overflow-hidden ring-1 ring-[color:var(--gold)]/25 hover:ring-[color:var(--gold)]/60 transition"
            >
              <iframe
                title="JIT Design Studio location"
                src={MAPS_EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full grayscale-[0.4] contrast-110 pointer-events-none"
              />
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-[color:var(--gold)]/15 pt-6 text-[0.7rem] text-ivory/50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} JIT Design Studio · All rights reserved.</p>
          <p className="font-display italic text-[color:var(--gold)]/70">Designing for the way you live.</p>
        </div>
      </div>
    </footer>
  );
}
