import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Send } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact - JIT Design Studio, Pune" },
      { name: "description", content: "Begin a conversation with JIT Design Studio. Visit us in Dhankawadi, Pune, or write to discuss your home." },
      { property: "og:title", content: "Contact - JIT Design Studio" },
      { property: "og:description", content: "Begin a project with our Pune interior design studio." },
    ],
  }),
  component: Contact,
});

const MAPS_EMBED =
  "https://www.google.com/maps?q=Konark+Vihar+Sambhajinagar+Dhankawadi+Pune+411043&output=embed";

function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`Project enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n- ${name}`);
    window.location.href = `mailto:contact@jitdesignstudios.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <>
      <section className="relative pt-44 pb-20 md:pt-56 md:pb-28 bg-[color:var(--midnight)] text-ivory overflow-hidden">
        <div className="absolute inset-0 ambient-glow opacity-70" />
        <div className="absolute inset-0 grain pointer-events-none" />
        <div className="relative mx-auto max-w-[1300px] px-6 md:px-10 grid lg:grid-cols-12 gap-10">
          <Reveal className="lg:col-span-8">
            <p className="eyebrow text-[color:var(--gold)]">Contact</p>
            <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[1.02] text-balance">
              Tell us about the home you keep
              <em className="not-italic text-[color:var(--gold)]"> picturing.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-4 self-end">
            <p className="text-ivory/70 leading-relaxed font-light">
              We reply to every note ourselves, usually within a working day. Visits to the studio
              are by appointment so we can give you our full attention.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative bg-ivory py-20 md:py-28">
        <div className="mx-auto max-w-[1300px] px-6 md:px-10 grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="font-display text-3xl md:text-4xl text-[color:var(--midnight)]">Begin a conversation</h2>
              <div className="gold-rule mt-5 w-12" />
              <p className="mt-6 text-charcoal/75 font-light leading-relaxed max-w-md">
                A few details help us prepare for our first chat - there's no obligation, only curiosity.
              </p>

              <form onSubmit={onSubmit} className="mt-10 grid gap-6">
                <Field name="name" label="Your Name" required />
                <div className="grid sm:grid-cols-2 gap-6">
                  <Field name="email" label="Email" type="email" required />
                  <Field name="phone" label="Phone" type="tel" />
                </div>
                <Field name="location" label="Project Location (e.g. Baner, Pune)" />
                <Field name="message" label="Tell us about your home" textarea />

                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center gap-3 self-start bg-[color:var(--royal)] px-8 py-4 text-xs uppercase tracking-[0.28em] text-ivory hover:bg-[color:var(--midnight)] transition-colors"
                >
                  {sent ? "Opening your mail…" : "Send Enquiry"} <Send size={14} />
                </motion.button>
                <p className="text-xs text-charcoal/55">
                  Or write directly to{" "}
                  <a className="link-underline text-[color:var(--royal)]" href="mailto:contact@jitdesignstudios.com">
                    contact@jitdesignstudios.com
                  </a>
                </p>
              </form>
            </Reveal>
          </div>

          {/* Details */}
          <Reveal delay={0.15} className="lg:col-span-5">
            <div className="bg-[color:var(--midnight)] text-ivory p-8 md:p-12 relative overflow-hidden">
              <div className="absolute inset-0 ambient-glow opacity-60" />
              <div className="relative">
                <p className="eyebrow text-[color:var(--gold)]">The Studio</p>
                <h3 className="mt-4 font-display text-3xl">Visit us in Dhankawadi</h3>
                <div className="gold-rule mt-5 w-12" />
                <ul className="mt-8 space-y-5 text-sm">
                  <li className="flex items-start gap-4">
                    <MapPin size={16} className="text-[color:var(--gold)] mt-1 shrink-0" />
                    <span className="text-ivory/85 leading-relaxed">
                      Pune – Satara Rd, Konark Vihar, Sambhajinagar, Dhankawadi, Pune, Maharashtra 411043
                    </span>
                  </li>
                  <li>
                    <a href="tel:+919657339991" className="flex items-center gap-4 text-ivory/85 hover:text-[color:var(--gold)] transition-colors">
                      <Phone size={16} className="text-[color:var(--gold)]" /> +91 96573 39991
                    </a>
                  </li>
                  <li>
                    <a href="mailto:contact@jitdesignstudios.com" className="flex items-center gap-4 text-ivory/85 hover:text-[color:var(--gold)] transition-colors">
                      <Mail size={16} className="text-[color:var(--gold)]" /> contact@jitdesignstudios.com
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/jit_design_studio/" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-ivory/85 hover:text-[color:var(--gold)] transition-colors">
                      <Instagram size={16} className="text-[color:var(--gold)]" /> @jit_design_studio
                    </a>
                  </li>
                </ul>

                <div className="gold-rule mt-10 opacity-40" />
                <p className="mt-8 eyebrow text-[color:var(--gold)]/85">Studio Hours</p>
                <p className="mt-3 text-ivory/80 text-sm leading-relaxed font-light">
                  Mon - Sat · 10:30 am – 7:30 pm<br />
                  Sun · By appointment
                </p>
              </div>
            </div>

            <div className="relative aspect-[4/3] mt-8 overflow-hidden ring-1 ring-[color:var(--gold)]/30">
              <iframe
                title="Map to JIT Design Studio"
                src={MAPS_EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full grayscale-[0.3] contrast-110"
              />
              <div className="pointer-events-none absolute inset-0 mix-blend-multiply bg-[color:var(--royal)]/10" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  name, label, type = "text", textarea = false, required = false,
}: { name: string; label: string; type?: string; textarea?: boolean; required?: boolean }) {
  const cls =
    "peer w-full bg-transparent border-b border-[color:var(--charcoal)]/25 pt-6 pb-3 text-[color:var(--midnight)] focus:outline-none focus:border-[color:var(--gold-deep)] transition-colors placeholder-transparent";
  return (
    <label className="relative block">
      {textarea ? (
        <textarea name={name} rows={4} placeholder={label} required={required} className={cls} />
      ) : (
        <input name={name} type={type} placeholder={label} required={required} className={cls} />
      )}
      <span className="pointer-events-none absolute left-0 top-1 eyebrow !text-[0.6rem] text-charcoal/55 transition-all peer-placeholder-shown:top-7 peer-placeholder-shown:!text-sm peer-placeholder-shown:!tracking-normal peer-placeholder-shown:normal-case peer-placeholder-shown:text-charcoal/45 peer-focus:top-1 peer-focus:!text-[0.6rem] peer-focus:!tracking-[0.28em] peer-focus:uppercase peer-focus:text-[color:var(--gold-deep)]">
        {label}
      </span>
    </label>
  );
}
