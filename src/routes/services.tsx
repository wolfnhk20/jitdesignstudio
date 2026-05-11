import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { ArrowUpRight } from "lucide-react";
import { IMG } from "@/lib/images";
const dining = IMG.dining;
const kitchen = IMG.kitchen;
const bedroom = IMG.bedroom;
const bath = IMG.bath;

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
    no: "I",
    title: "Full Home Interiors",
    img: dining,
    summary: "Turnkey design and execution for apartments and independent homes — from layout reimagination to the last brass handle.",
    bullets: ["Concept & moodboards", "Custom millwork", "Furniture, lighting, art curation", "Project & site management"],
  },
  {
    no: "II",
    title: "Kitchens & Wardrobes",
    img: kitchen,
    summary: "Modular and bespoke joinery designed around the way your family actually cooks, dresses and lives.",
    bullets: ["Bespoke modular kitchens", "Walk-ins & wardrobes", "Hardware & finish curation", "Lifetime servicing"],
  },
  {
    no: "III",
    title: "Bedrooms & Sanctuaries",
    img: bedroom,
    summary: "The most personal rooms of a home — designed for slow mornings, soft evenings, and the rituals you keep returning to.",
    bullets: ["Master & guest suites", "Children's & nursery rooms", "Wellness corners", "Lighting choreography"],
  },
  {
    no: "IV",
    title: "Bath & Wet Areas",
    img: bath,
    summary: "Atmospheric bathrooms that turn the everyday into a quiet ritual — stone, brass, soft light, lasting craft.",
    bullets: ["Material & tile sourcing", "Fixture & fitting design", "Waterproofing oversight", "Custom vanities"],
  },
];

function Services() {
  return (
    <>
      <section className="relative pt-44 pb-24 md:pt-56 md:pb-32 bg-[color:var(--midnight)] text-ivory overflow-hidden">
        <div className="absolute inset-0 ambient-glow opacity-70" />
        <div className="absolute inset-0 grain pointer-events-none" />
        <div className="relative mx-auto max-w-[1300px] px-6 md:px-10">
          <Reveal>
            <p className="eyebrow text-[color:var(--gold)]">Services</p>
            <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[1.02] max-w-4xl text-balance">
              An intimate practice. A handful of services. Each one
              <em className="not-italic text-[color:var(--gold)]"> obsessively </em>
              considered.
            </h1>
            <p className="mt-8 max-w-xl text-ivory/70 text-lg font-light leading-relaxed">
              We don't sell packages. We design homes — slowly, end to end, by people who care about
              what your morning kitchen looks like.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Editorial alternating service rows */}
      <section className="bg-ivory py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 space-y-32 md:space-y-44">
          {SERVICES.map((s, i) => {
            const flip = i % 2 === 1;
            return (
              <article key={s.no} className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                <Reveal className={`lg:col-span-7 ${flip ? "lg:order-2" : ""}`}>
                  <div className="relative aspect-[4/3] overflow-hidden group">
                    <img
                      src={s.img}
                      alt={s.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                    />
                    <div className="absolute top-5 left-5 font-display text-[color:var(--gold)] text-5xl drop-shadow">{s.no}</div>
                  </div>
                </Reveal>
                <Reveal delay={0.1} className={`lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
                  <p className="eyebrow">Service {s.no}</p>
                  <h2 className="mt-4 font-display text-4xl md:text-5xl text-[color:var(--midnight)] text-balance">{s.title}</h2>
                  <div className="gold-rule mt-6 w-16" />
                  <p className="mt-6 text-charcoal/85 leading-relaxed font-light text-lg">{s.summary}</p>
                  <ul className="mt-8 space-y-3">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-charcoal/80 text-[0.95rem]">
                        <span className="mt-2 inline-block h-px w-6 bg-[color:var(--gold)] shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </article>
            );
          })}
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative bg-[color:var(--royal)] text-ivory py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 grain pointer-events-none opacity-50" />
        <div className="relative mx-auto max-w-[1300px] px-6 md:px-10">
          <Reveal>
            <p className="eyebrow text-[color:var(--gold)]">How a Project Unfolds</p>
            <h2 className="mt-5 font-display text-4xl md:text-6xl max-w-3xl text-balance">
              A calm, six-act process. No surprises, only quiet revelations.
            </h2>
          </Reveal>
          <div className="mt-20 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["01", "Conversation", "We meet over chai. We listen more than we speak."],
              ["02", "Brief & Site", "Site visits, light study, family rituals decoded."],
              ["03", "Concept", "Mood, material palette, the soul of the home — in one room."],
              ["04", "Drawing", "Detailed drawings, joinery, electrical, lighting choreography."],
              ["05", "Make", "Trusted craftsmen, daily site presence, weekly walkthroughs."],
              ["06", "Move-in", "We style the first evening. You live the rest."],
            ].map(([n, t, d], i) => (
              <Reveal key={n} delay={i * 0.06}>
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-[color:var(--gold)] text-3xl">{n}</span>
                  <h3 className="font-display text-2xl">{t}</h3>
                </div>
                <div className="gold-rule mt-4 opacity-40" />
                <p className="mt-4 text-ivory/70 font-light leading-relaxed">{d}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4}>
            <div className="mt-20 text-center">
              <Link to="/contact" className="inline-flex items-center gap-3 bg-[color:var(--gold)] px-8 py-4 text-xs uppercase tracking-[0.28em] text-[color:var(--midnight)] hover:bg-ivory transition-colors">
                Begin the Conversation <ArrowUpRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
