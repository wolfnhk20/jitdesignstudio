import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { ArrowUpRight, Compass, Hammer, Sparkles, Home as HomeIcon } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { IMG } from "@/lib/images";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — JIT Design Studio, Pune" },
      { name: "description", content: "Full-home interiors, turnkey apartment design, kitchen and bath, and consultation services for homeowners across Pune." },
      { property: "og:title", content: "Services — JIT Design Studio" },
      { property: "og:description", content: "Considered interior design services for modern Indian homes." },
    ],
  }),
  component: Services,
});

const SERVICES = [
  {
    no: "01",
    title: "Full Home Interiors",
    img: IMG.dining,
    tagline: "From bare shell to first evening tea.",
    summary:
      "Turnkey design and execution for apartments and independent homes — layout reimagination to the last brass handle.",
    bullets: ["Concept & moodboards", "Custom millwork", "Lighting choreography", "Project management"],
    icon: HomeIcon,
  },
  {
    no: "02",
    title: "Kitchens & Wardrobes",
    img: IMG.kitchen,
    tagline: "Joinery designed around your rituals.",
    summary:
      "Bespoke modular kitchens and walk-ins designed around the way your family actually cooks, dresses and lives.",
    bullets: ["Bespoke modular kitchens", "Walk-ins & wardrobes", "Hardware curation", "Lifetime servicing"],
    icon: Hammer,
  },
  {
    no: "03",
    title: "Bedrooms & Sanctuaries",
    img: IMG.bedroom,
    tagline: "The rooms you return to.",
    summary:
      "Personal rooms designed for slow mornings, soft evenings and the quiet rituals you keep coming home to.",
    bullets: ["Master & guest suites", "Children's rooms", "Wellness corners", "Layered lighting"],
    icon: Sparkles,
  },
  {
    no: "04",
    title: "Bath & Wet Areas",
    img: IMG.bath,
    tagline: "The everyday, made ritual.",
    summary:
      "Atmospheric bathrooms — stone, brass, soft light — that turn the smallest moments into something worth pausing for.",
    bullets: ["Material sourcing", "Fixture design", "Waterproofing oversight", "Custom vanities"],
    icon: Compass,
  },
];

const PROCESS = [
  ["Conversation", "We meet over chai. We listen more than we speak."],
  ["Brief & Site", "Site visits, light study, family rituals decoded."],
  ["Concept", "Mood, material palette, the soul of the home in one room."],
  ["Drawing", "Joinery, electrical, lighting choreography — every line."],
  ["Make", "Trusted craftsmen, daily site presence, weekly walkthroughs."],
  ["Move-in", "We style the first evening. You live the rest."],
] as const;

const MARQUEE = [
  "Bespoke",
  "Crafted in Pune",
  "Cinematic",
  "Turnkey",
  "Hand-drawn",
  "Considered",
  "Warm",
  "Heirloom",
];

function Services() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <>
      {/* HERO — cinematic with parallax cover image */}
      <section
        ref={heroRef}
        className="relative min-h-[92svh] flex items-end pt-36 pb-20 md:pt-44 md:pb-28 bg-[color:var(--midnight)] text-ivory overflow-hidden"
      >
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0">
          <img src={IMG.detail2} alt="" className="h-full w-full object-cover opacity-35" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--midnight)]/70 via-[color:var(--midnight)]/80 to-[color:var(--midnight)]" />
        <div className="absolute inset-0 ambient-glow opacity-70" />
        <div className="absolute inset-0 grain pointer-events-none" />

        <div className="relative mx-auto max-w-[1400px] w-full px-6 md:px-10 grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <Reveal className="lg:col-span-8">
            <p className="eyebrow text-[color:var(--gold)]">Services · Vol. I</p>
            <h1 className="mt-7 font-display text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[6rem] leading-[0.98] text-balance">
              <span className="block text-[color:var(--champagne)]">An intimate</span>
              <span className="block text-[color:var(--champagne)]">practice. A handful</span>
              <span className="block">of services —</span>
              <span className="block shimmer-text italic">obsessively considered.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2} className="lg:col-span-4">
            <div className="gold-rule w-16 mb-6" />
            <p className="text-ivory/80 text-base md:text-lg font-light leading-relaxed">
              We don't sell packages. We design homes — slowly, end to end, by people who care
              what your morning kitchen looks like and how the evening light falls in your hallway.
            </p>
            <div className="mt-8 flex items-center gap-6 text-[0.62rem] uppercase tracking-[0.32em] text-ivory/60">
              <span><span className="text-[color:var(--gold)] font-display text-base">06</span> Homes / Year</span>
              <span className="h-3 w-px bg-ivory/20" />
              <span><span className="text-[color:var(--gold)] font-display text-base">12</span> Yrs</span>
            </div>
          </Reveal>
        </div>

        {/* Marquee ribbon */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden border-y border-[color:var(--gold)]/20 bg-[color:var(--midnight)]/60 backdrop-blur-sm py-4">
          <div className="flex marquee-track w-max gap-12 whitespace-nowrap">
            {[...MARQUEE, ...MARQUEE, ...MARQUEE].map((w, i) => (
              <span key={i} className="font-display italic text-2xl md:text-3xl text-ivory/40 flex items-center gap-12">
                {w}
                <span className="text-[color:var(--gold)]">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE CHAPTERS — large editorial */}
      <section className="relative bg-ivory">
        {SERVICES.map((s, i) => (
          <ServiceChapter key={s.no} s={s} flipped={i % 2 === 1} />
        ))}
      </section>

      {/* PROCESS — vertical cinematic timeline */}
      <section className="relative bg-[color:var(--midnight)] text-ivory py-28 md:py-40 overflow-hidden">
        <div className="absolute inset-0 ambient-glow opacity-50" />
        <div className="absolute inset-0 grain pointer-events-none opacity-50" />
        <div className="relative mx-auto max-w-[1300px] px-6 md:px-10">
          <Reveal>
            <p className="eyebrow text-[color:var(--gold)]">How a Project Unfolds</p>
            <h2 className="mt-5 font-display text-4xl md:text-6xl lg:text-7xl max-w-3xl text-balance text-[color:var(--champagne)]">
              A calm, six-act process. <em className="not-italic shimmer-text">No surprises.</em>
            </h2>
          </Reveal>

          <div className="relative mt-20 md:mt-28">
            {/* spine */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 2, ease: [0.16, 0.84, 0.24, 1] }}
              style={{ originY: 0 }}
              className="absolute left-[34px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[color:var(--gold)]/55 to-transparent"
            />
            <div className="space-y-14 md:space-y-24">
              {PROCESS.map(([t, d], i) => (
                <Reveal key={t} delay={i * 0.05}>
                  <div className={`relative grid md:grid-cols-2 gap-6 md:gap-16 items-center ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}>
                    <div className={`pl-20 md:pl-0 ${i % 2 === 1 ? "md:text-left md:pl-16" : "md:text-right md:pr-16"}`}>
                      <p className="font-display text-[color:var(--gold)]/70 text-sm tracking-[0.3em]">ACT {String(i + 1).padStart(2, "0")}</p>
                      <h3 className="mt-2 font-display text-3xl md:text-5xl text-ivory">{t}</h3>
                      <p className="mt-4 text-ivory/65 font-light leading-relaxed max-w-md md:inline-block">{d}</p>
                    </div>
                    {/* node */}
                    <span className="absolute left-0 md:left-1/2 top-2 md:top-1/2 -translate-y-1/2 md:-translate-x-1/2 grid place-items-center h-[68px] w-[68px] rounded-full bg-[color:var(--midnight)] border border-[color:var(--gold)]/55 font-display text-[color:var(--gold)] text-lg z-10">
                      <span className="absolute inset-0 rounded-full pulse-ring border border-[color:var(--gold)]/40" />
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="hidden md:block" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRICING TIERS */}
      <section className="bg-ivory py-24 md:py-32">
        <div className="mx-auto max-w-[1300px] px-6 md:px-10">
          <Reveal>
            <p className="eyebrow">Engagement</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-[color:var(--midnight)] max-w-2xl text-balance">
              Three ways to begin a conversation.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              { name: "Consultation", price: "₹ 25,000", note: "Per session", lines: ["2-hour studio visit", "Concept direction", "Vendor recommendations"] },
              { name: "Single Room", price: "₹ 1,800/sqft", note: "Onwards", lines: ["End-to-end design", "Custom millwork", "Styling & handover"], featured: true },
              { name: "Full Home", price: "Bespoke", note: "On invitation", lines: ["Turnkey execution", "Daily site presence", "Concierge sourcing"] },
            ].map((t) => (
              <Reveal key={t.name}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.7, ease: [0.16, 0.84, 0.24, 1] }}
                  className={`relative h-full p-8 md:p-10 border ${t.featured ? "bg-[color:var(--midnight)] text-ivory border-[color:var(--gold)]/50 gold-glow" : "bg-white border-[color:var(--midnight)]/10"}`}
                >
                  {t.featured && <span className="absolute -top-3 left-8 bg-[color:var(--gold)] text-[color:var(--midnight)] text-[0.6rem] tracking-[0.3em] uppercase px-3 py-1">Most Chosen</span>}
                  <p className={`eyebrow ${t.featured ? "text-[color:var(--gold)]" : ""}`}>{t.name}</p>
                  <div className="mt-6 flex items-baseline gap-3">
                    <span className={`font-display text-4xl md:text-5xl ${t.featured ? "text-[color:var(--champagne)]" : "text-[color:var(--midnight)]"}`}>{t.price}</span>
                    <span className={`text-xs uppercase tracking-[0.2em] ${t.featured ? "text-ivory/55" : "text-charcoal/60"}`}>{t.note}</span>
                  </div>
                  <div className="gold-rule mt-6 w-12" />
                  <ul className="mt-6 space-y-3">
                    {t.lines.map((l) => (
                      <li key={l} className={`flex items-start gap-3 text-sm font-light ${t.featured ? "text-ivory/80" : "text-charcoal/85"}`}>
                        <span className="mt-2 h-px w-4 bg-[color:var(--gold)] shrink-0" />
                        {l}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-[color:var(--royal)] text-ivory py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 grain pointer-events-none opacity-50" />
        <div className="absolute inset-0 ambient-glow opacity-40" />
        <div className="relative mx-auto max-w-[1100px] px-6 md:px-10 text-center">
          <Reveal>
            <p className="eyebrow text-[color:var(--gold)]">Begin</p>
            <h2 className="mt-5 font-display text-4xl md:text-6xl text-balance text-[color:var(--champagne)]">
              The right home begins with the <em className="not-italic shimmer-text">right conversation</em>.
            </h2>
            <Link to="/contact" className="mt-12 inline-flex items-center gap-3 bg-[color:var(--gold)] px-8 py-4 text-xs uppercase tracking-[0.28em] text-[color:var(--midnight)] hover:bg-ivory transition-colors hover-rise">
              Schedule a Consultation <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ServiceChapter({ s, flipped }: { s: typeof SERVICES[number]; flipped: boolean }) {
  const [hover, setHover] = useState(false);
  const Icon = s.icon;

  return (
    <article
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative border-b border-[color:var(--midnight)]/10 py-20 md:py-32 overflow-hidden"
    >
      {/* Massive ghost number */}
      <motion.span
        aria-hidden
        animate={{ y: hover ? -10 : 0, opacity: hover ? 0.12 : 0.05 }}
        transition={{ duration: 1.2, ease: [0.16, 0.84, 0.24, 1] }}
        className={`pointer-events-none absolute font-display text-[18rem] md:text-[28rem] leading-none text-[color:var(--midnight)] -top-10 ${flipped ? "right-[-2rem]" : "left-[-2rem]"} select-none`}
      >
        {s.no}
      </motion.span>

      <div className="relative mx-auto max-w-[1300px] px-6 md:px-10 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Image */}
        <Reveal className={`lg:col-span-7 ${flipped ? "lg:order-2" : ""}`}>
          <Link to="/portfolio" className="group block relative overflow-hidden aspect-[5/4] bg-[color:var(--royal)]">
            <motion.img
              src={s.img}
              alt={s.title}
              loading="lazy"
              animate={{ scale: hover ? 1.06 : 1 }}
              transition={{ duration: 1.6, ease: [0.16, 0.84, 0.24, 1] }}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--midnight)]/60 via-transparent to-transparent" />
            <div className="absolute top-5 left-5 text-[0.6rem] uppercase tracking-[0.32em] text-[color:var(--gold)] flex items-center gap-3">
              <span className="h-px w-10 bg-[color:var(--gold)]" />
              Chapter {s.no}
            </div>
            <div className="absolute bottom-5 right-5 grid place-items-center h-12 w-12 rounded-full bg-[color:var(--gold)] text-[color:var(--midnight)]">
              <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>
          </Link>
        </Reveal>

        {/* Copy */}
        <Reveal delay={0.15} className={`lg:col-span-5 ${flipped ? "lg:order-1" : ""}`}>
          <div className="flex items-center gap-3 text-[color:var(--gold-deep)]">
            <Icon size={18} />
            <span className="eyebrow !text-[color:var(--gold-deep)]">{s.tagline}</span>
          </div>
          <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl text-[color:var(--midnight)] text-balance leading-[1.05]">
            {s.title}
          </h2>
          <div className="gold-rule mt-6 w-16" />
          <p className="mt-6 text-charcoal/85 text-base md:text-lg font-light leading-relaxed">{s.summary}</p>
          <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3">
            {s.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm text-charcoal/85 font-light">
                <span className="mt-[0.55rem] inline-block h-px w-4 bg-[color:var(--gold)] shrink-0" />
                {b}
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[color:var(--royal)] hover:text-[color:var(--gold-deep)] link-underline"
          >
            Enquire about this service <ArrowUpRight size={14} />
          </Link>
        </Reveal>
      </div>
    </article>
  );
}
