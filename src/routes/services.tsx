import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { ArrowUpRight, Compass, Hammer, Sparkles, Home as HomeIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
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
];

function Services() {
  return (
    <>
      {/* HERO — split editorial */}
      <section className="relative pt-36 pb-20 md:pt-48 md:pb-28 bg-[color:var(--midnight)] text-ivory overflow-hidden">
        <div className="absolute inset-0 ambient-glow opacity-60" />
        <div className="absolute inset-0 grain pointer-events-none" />
        <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow text-[color:var(--gold)]">Services · Vol. I</p>
            <h1 className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] leading-[1.02] text-balance text-[color:var(--champagne)]">
              An intimate practice.<br />
              A handful of services.<br />
              <em className="not-italic text-[color:var(--gold)]">Each obsessively considered.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-5">
            <div className="gold-rule w-16 mb-6" />
            <p className="text-ivory/80 text-lg font-light leading-relaxed">
              We don't sell packages. We design homes — slowly, end to end, by people who care about
              what your morning kitchen looks like and how the evening light falls in your hallway.
            </p>
            <div className="mt-8 flex items-center gap-6 text-xs uppercase tracking-[0.28em] text-ivory/60">
              <span><span className="text-[color:var(--gold)]">06</span> Homes / Year</span>
              <span className="h-3 w-px bg-ivory/20" />
              <span><span className="text-[color:var(--gold)]">12</span> Yrs Practice</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICE INDEX — interactive list */}
      <section className="relative bg-ivory py-20 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="flex items-end justify-between mb-12 md:mb-16">
            <Reveal>
              <p className="eyebrow">The Index</p>
              <h2 className="mt-4 font-display text-3xl md:text-5xl text-[color:var(--midnight)]">
                Four chapters, one home.
              </h2>
            </Reveal>
          </div>

          <ServiceIndex />
        </div>
      </section>

      {/* PROCESS — horizontal timeline */}
      <section className="relative bg-[color:var(--midnight)] text-ivory py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0 ambient-glow opacity-40" />
        <div className="absolute inset-0 grain pointer-events-none opacity-50" />
        <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
          <Reveal>
            <p className="eyebrow text-[color:var(--gold)]">How a Project Unfolds</p>
            <h2 className="mt-5 font-display text-4xl md:text-6xl max-w-3xl text-balance text-[color:var(--champagne)]">
              A calm, six-act process. <em className="not-italic text-[color:var(--gold)]">No surprises.</em>
            </h2>
          </Reveal>

          <div className="relative mt-20">
            <div className="absolute left-0 right-0 top-[34px] hidden md:block h-px bg-gradient-to-r from-transparent via-[color:var(--gold)]/40 to-transparent" />
            <div className="grid gap-12 md:grid-cols-3 lg:grid-cols-6">
              {PROCESS.map(([t, d], i) => (
                <Reveal key={t} delay={i * 0.07}>
                  <div className="relative">
                    <div className="flex items-center gap-4 md:block">
                      <span className="relative z-10 grid place-items-center h-[68px] w-[68px] rounded-full bg-[color:var(--midnight)] border border-[color:var(--gold)]/50 font-display text-[color:var(--gold)] text-xl">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-display text-xl md:text-2xl md:mt-6 text-ivory">{t}</h3>
                    </div>
                    <p className="mt-3 md:mt-3 text-ivory/65 text-sm font-light leading-relaxed">{d}</p>
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
                <div className={`relative h-full p-8 md:p-10 border ${t.featured ? "bg-[color:var(--midnight)] text-ivory border-[color:var(--gold)]/50" : "bg-white border-[color:var(--midnight)]/10"}`}>
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
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-[color:var(--royal)] text-ivory py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 grain pointer-events-none opacity-50" />
        <div className="relative mx-auto max-w-[1100px] px-6 md:px-10 text-center">
          <Reveal>
            <p className="eyebrow text-[color:var(--gold)]">Begin</p>
            <h2 className="mt-5 font-display text-4xl md:text-6xl text-balance text-[color:var(--champagne)]">
              The right home begins with the <em className="not-italic text-[color:var(--gold)]">right conversation</em>.
            </h2>
            <Link to="/contact" className="mt-12 inline-flex items-center gap-3 bg-[color:var(--gold)] px-8 py-4 text-xs uppercase tracking-[0.28em] text-[color:var(--midnight)] hover:bg-ivory transition-colors">
              Schedule a Consultation <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ServiceIndex() {
  const [active, setActive] = useState(0);
  return (
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
      {/* List */}
      <div className="lg:col-span-7 divide-y divide-[color:var(--midnight)]/10">
        {SERVICES.map((s, i) => {
          const Icon = s.icon;
          const isActive = i === active;
          return (
            <button
              key={s.no}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className="group w-full text-left py-7 md:py-9 grid grid-cols-12 items-center gap-4 transition-colors"
            >
              <span className={`col-span-2 md:col-span-1 font-display text-2xl md:text-3xl transition-colors ${isActive ? "text-[color:var(--gold-deep)]" : "text-[color:var(--midnight)]/40"}`}>
                {s.no}
              </span>
              <div className="col-span-10 md:col-span-9">
                <h3 className={`font-display text-2xl md:text-4xl transition-colors ${isActive ? "text-[color:var(--midnight)]" : "text-[color:var(--midnight)]/55 group-hover:text-[color:var(--midnight)]"}`}>
                  {s.title}
                </h3>
                <p className="mt-1 text-sm md:text-base text-charcoal/65 font-light italic">{s.tagline}</p>
                {/* Mobile-only image preview */}
                <div className={`lg:hidden mt-4 overflow-hidden transition-all duration-700 ${isActive ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="aspect-[5/4] overflow-hidden">
                    <img src={s.img} alt={s.title} loading="lazy" className="h-full w-full object-cover" />
                  </div>
                  <p className="mt-4 text-charcoal/85 font-light text-[0.95rem] leading-relaxed">{s.summary}</p>
                  <ul className="mt-4 space-y-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm text-charcoal/80">
                        <span className="mt-2 inline-block h-px w-5 bg-[color:var(--gold)] shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className={`hidden md:flex col-span-2 justify-end transition-all ${isActive ? "text-[color:var(--gold-deep)] translate-x-0" : "text-[color:var(--midnight)]/30 -translate-x-2"}`}>
                <Icon size={22} />
              </div>
            </button>
          );
        })}
      </div>

      {/* Sticky Preview (desktop) */}
      <div className="hidden lg:block lg:col-span-5 sticky top-28">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: [0.16, 0.84, 0.24, 1] }}
        >
          <div className="relative aspect-[4/5] overflow-hidden bg-[color:var(--royal)]">
            <img src={SERVICES[active].img} alt={SERVICES[active].title} className="h-full w-full object-cover" />
            <div className="absolute top-5 left-5 font-display text-[color:var(--gold)] text-5xl drop-shadow-lg">{SERVICES[active].no}</div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[color:var(--midnight)]/90 to-transparent p-6 pt-16">
              <h4 className="font-display text-2xl text-ivory">{SERVICES[active].title}</h4>
              <p className="mt-2 text-ivory/75 text-sm font-light leading-relaxed">{SERVICES[active].summary}</p>
              <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
                {SERVICES[active].bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-[0.78rem] text-ivory/70">
                    <span className="mt-[0.55rem] inline-block h-px w-3 bg-[color:var(--gold)] shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
