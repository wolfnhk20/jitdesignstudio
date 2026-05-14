import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { IMG } from "@/lib/images";
const workspace = IMG.workspace;
const nook = IMG.nook;
const dining = IMG.dining;

export const Route = createFileRoute("/studio")({
  head: () => ({
    meta: [
      { title: "The Studio - JIT Design Studio, Pune" },
      { name: "description", content: "Inside JIT Design Studio: a small Pune practice designing warm, lived-in contemporary Indian homes with cinematic detail." },
      { property: "og:title", content: "The Studio - JIT Design Studio, Pune" },
      { property: "og:description", content: "An intimate Pune-based interior design studio." },
      { property: "og:image", content: workspace },
    ],
  }),
  component: Studio,
});

const VALUES = [
  { n: "01", t: "Slow conversations", d: "Before we sketch a wall, we sit with you. Tea, stories, the way light falls through your old window - these become the brief." },
  { n: "02", t: "Materials with memory", d: "Brass that ages, wood with grain, hand-block textiles, terrazzo from Maharashtra. Materials that gather a patina over the years you live with them." },
  { n: "03", t: "Designed for evenings", d: "We design rooms for the quiet hours - for after-dinner readings, weekend long lunches, the way your child curls up on the sofa. The everyday is the brief." },
  { n: "04", t: "One project at a time", d: "We take on a small number of homes each year. Every drawer pull, every hinge, every shadow line is considered by the same hands." },
];

function Studio() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-44 pb-20 md:pt-56 md:pb-28 bg-[color:var(--midnight)] text-ivory overflow-hidden">
        <div className="absolute inset-0 ambient-glow opacity-70" />
        <div className="absolute inset-0 grain pointer-events-none" />
        <div className="relative mx-auto max-w-[1300px] px-6 md:px-10 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow text-[color:var(--gold)]">The Studio</p>
              <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[1.02] text-balance">
                A small Pune studio designing homes the way one writes a
                <em className="not-italic text-[color:var(--gold)]"> letter</em> - slowly, by hand, to someone we know.
              </h1>
            </Reveal>
          </div>
          <Reveal delay={0.15} className="lg:col-span-4 lg:col-start-9 self-end">
            <p className="text-ivory/75 text-lg leading-relaxed font-light">
              We are a contemporary Indian interior design practice based in Dhankawadi, Pune.
              Our work sits between the cinematic and the lived-in - interiors that look like
              they have always belonged to you.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WORKSPACE IMAGE */}
      <section className="relative bg-ivory">
        <div className="mx-auto max-w-[1500px] px-0 md:px-10 -mt-10 md:-mt-20 relative z-10">
          <div className="relative aspect-[16/9] overflow-hidden md:rounded-sm ring-1 ring-[color:var(--gold)]/20">
            <img src={workspace} alt="Inside the JIT design studio" className="h-full w-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="relative bg-ivory py-28 md:py-40">
        <div className="mx-auto max-w-[1300px] px-6 md:px-10 grid lg:grid-cols-12 gap-14">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow">Our Story</p>
            <div className="gold-rule mt-5 w-12" />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7 lg:col-start-6 space-y-7 text-charcoal/85 text-lg leading-[1.75] font-light">
            <p className="font-display text-3xl md:text-4xl text-[color:var(--royal)] not-italic leading-[1.2]">
              Started in Pune, in a sunlit room that smelled of teakwood and turpentine.
            </p>
            <p>
              JIT Design Studio began with a simple idea - that a home should not look like a magazine,
              it should feel like a Sunday morning. From a quiet apartment in Dhankawadi, we work with
              families across Pune to design interiors that are confidently modern yet
              unmistakably Indian.
            </p>
            <p>
              Our clients are people building their first or forever home - homeowners who want
              warmth without nostalgia, luxury without coldness, and detail without ostentation.
              We design to make the everyday feel a little more cinematic.
            </p>
            <p>
              We work in a small, deliberate way: a single point of contact, a calm process, and
              honesty at every stage - about timelines, budgets, and what a space can truly become.
            </p>
          </Reveal>
        </div>
      </section>

      {/* VALUES */}
      <section className="relative bg-[color:var(--royal)] text-ivory py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 grain pointer-events-none opacity-50" />
        <div className="relative mx-auto max-w-[1300px] px-6 md:px-10">
          <Reveal>
            <p className="eyebrow text-[color:var(--gold)]">How We Work</p>
            <h2 className="mt-5 font-display text-4xl md:text-6xl max-w-3xl text-balance">
              Four quiet beliefs that shape every room we touch.
            </h2>
          </Reveal>
          <div className="mt-20 grid gap-x-12 gap-y-16 md:grid-cols-2">
            {VALUES.map((v, i) => (
              <Reveal key={v.n} delay={i * 0.08}>
                <div className="flex items-baseline gap-5">
                  <span className="font-display text-[color:var(--gold)] text-2xl">{v.n}</span>
                  <h3 className="font-display text-2xl md:text-3xl">{v.t}</h3>
                </div>
                <div className="gold-rule mt-5 opacity-40" />
                <p className="mt-5 text-ivory/70 leading-relaxed font-light">{v.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE PAIR */}
      <section className="bg-ivory py-24 md:py-32">
        <div className="mx-auto max-w-[1300px] px-6 md:px-10 grid md:grid-cols-2 gap-8 md:gap-14 items-end">
          <Reveal>
            <div className="relative aspect-[3/4] overflow-hidden">
              <img src={nook} alt="A reading nook designed by the studio" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative aspect-[4/3] overflow-hidden md:mt-24">
              <img src={dining} alt="Dining room interior" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="mt-10 max-w-md">
              <p className="font-display italic text-2xl text-[color:var(--royal)] leading-snug">
                "The most beautiful room in the world is one you forget you decorated."
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.3em] text-charcoal/60">- Studio Notebook</p>
            </div>
          </Reveal>
        </div>

        <div className="mx-auto mt-24 max-w-[1300px] px-6 md:px-10 text-center">
          <Link to="/contact" className="inline-flex items-center gap-3 border border-[color:var(--royal)] px-8 py-4 text-xs uppercase tracking-[0.3em] text-[color:var(--royal)] hover:bg-[color:var(--royal)] hover:text-ivory transition-colors">
            Visit Our Studio
          </Link>
        </div>
      </section>
    </>
  );
}
