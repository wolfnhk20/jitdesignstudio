import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { IMG } from "@/lib/images";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const hero = IMG.hero;
const bedroom = IMG.bedroom;
const dining = IMG.dining;
const kitchen = IMG.kitchen;
const nook = IMG.nook;
const foyer = IMG.foyer;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JIT Design Studio — Cinematic Indian Interiors in Pune" },
      { name: "description", content: "We design warm, contemporary Indian homes in Pune — cinematic, lived-in and crafted around the way your family actually lives." },
      { property: "og:title", content: "JIT Design Studio — Cinematic Indian Interiors in Pune" },
      { property: "og:description", content: "Warm, cinematic, contemporary Indian interiors crafted in Pune." },
    ],
  }),
  component: Home,
});

const TESTIMONIALS = [
  { quote: "Every corner feels intentional. Our mornings genuinely feel slower now — it's the home we didn't know we needed.", name: "Aditya & Rhea Kulkarni", place: "Baner · 3 BHK" },
  { quote: "Honest pricing, drawings on time, and craftsmen who actually cared. That trio is rare in Pune.", name: "Sanjay Deshpande", place: "Kothrud · Apartment" },
  { quote: "They translated vague Pinterest boards into a home that feels like ours, not a showroom. Six stars if I could.", name: "Priya Nair", place: "Wakad · Villa" },
  { quote: "The kitchen alone changed how our family eats together. JIT understood our rituals before our walls.", name: "Neha & Karan Mehta", place: "Aundh · 4 BHK" },
  { quote: "Detailing on the brass, the stone, the joinery — every inch felt loved. We still find new things months later.", name: "Rohan Bhosale", place: "Koregaon Park" },
  { quote: "Calm, organised and deeply respectful of our budget. The trust we built will last decades.", name: "Anjali Patil", place: "Hinjewadi · Apartment" },
];

const FEATURED = [
  { img: bedroom, title: "The Indigo Suite", place: "Baner · Pune", year: "2024", tag: "Residence" },
  { img: dining, title: "House of Long Suppers", place: "Kothrud · Pune", year: "2024", tag: "Apartment" },
  { img: kitchen, title: "Brass & Midnight", place: "Wakad · Pune", year: "2025", tag: "Kitchen" },
  { img: foyer, title: "A Quiet Welcome", place: "Aundh · Pune", year: "2023", tag: "Foyer" },
];

function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const blurOpacity = useTransform(scrollYProgress, [0, 1], [0.45, 0.85]);

  return (
    <>
      {/* HERO */}
      <section ref={heroRef} className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-[color:var(--midnight)]">
        <motion.div style={{ y }} className="absolute inset-0">
          <img src={hero} alt="Cinematic Indian living room" className="h-full w-full object-cover" width={1920} height={1280} />
        </motion.div>
        <motion.div style={{ opacity: blurOpacity }} className="absolute inset-0 bg-gradient-to-b from-[color:var(--midnight)]/85 via-[color:var(--midnight)]/55 to-[color:var(--midnight)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--midnight)]/80 via-transparent to-transparent" />
        <div className="absolute inset-0 grain pointer-events-none" />

        <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-20 md:px-10 md:pb-28">
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.9 }}
            className="eyebrow text-[color:var(--gold)]"
          >
            JIT Design Studio · Pune
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-5xl font-display text-[color:var(--champagne)] text-[2.75rem] leading-[1.02] sm:text-6xl md:text-7xl lg:text-[5.5rem] text-balance drop-shadow-[0_2px_24px_rgba(8,12,30,0.6)]"
          >
            Homes that hold the <em className="not-italic shimmer-text">warmth</em> of who you are.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}
            className="mt-8 max-w-xl text-[color:var(--ivory)]/90 text-base md:text-lg leading-relaxed font-light drop-shadow-[0_1px_12px_rgba(8,12,30,0.5)]"
          >
            We design contemporary Indian interiors with the slow, cinematic detail of a story —
            rooms you walk into the way you walk into a memory.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.25, duration: 0.9 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link to="/portfolio" className="group inline-flex items-center gap-3 bg-[color:var(--gold)] px-7 py-3.5 text-xs uppercase tracking-[0.28em] text-[color:var(--midnight)] transition-all hover:bg-ivory">
              View Our Work <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link to="/contact" className="link-underline text-xs uppercase tracking-[0.28em] text-ivory/85">
              Begin a conversation
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6, duration: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[color:var(--gold)]/70 text-[0.6rem] tracking-[0.5em] uppercase"
        >
          Scroll
          <motion.span
            animate={{ y: [0, 8, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="h-8 w-px bg-[color:var(--gold)]/60"
          />
        </motion.div>
      </section>

      {/* MANIFESTO */}
      <section className="relative bg-ivory py-28 md:py-40">
        <div className="mx-auto grid max-w-[1300px] grid-cols-1 gap-14 px-6 md:px-10 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-4 lg:col-start-1">
            <p className="eyebrow">Our Philosophy</p>
            <div className="gold-rule mt-6 w-16" />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7 lg:col-start-6">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-[color:var(--midnight)] text-balance">
              We don't decorate rooms. We design the
              <em className="not-italic text-[color:var(--gold-deep)]"> small rituals </em>
              that make a house feel like home.
            </h2>
            <p className="mt-8 text-charcoal/85 text-lg leading-relaxed font-light max-w-xl">
              Founded in Pune, JIT Design Studio is an intimate practice for families who want
              their interiors to feel as personal as a handwritten letter — modern Indian living,
              told with cinematic warmth and quiet, considered detail.
            </p>
            <Link to="/studio" className="mt-10 inline-flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-[color:var(--royal)] hover:text-[color:var(--gold-deep)] transition-colors link-underline">
              Inside the studio <ArrowUpRight size={14} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* FEATURED WORK — editorial asymmetric */}
      <section className="relative bg-[color:var(--midnight)] py-28 md:py-36 text-ivory overflow-hidden">
        <div className="absolute inset-0 grain pointer-events-none opacity-60" />
        <div className="absolute inset-0 ambient-glow opacity-50" />

        <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-16 md:mb-24">
            <Reveal>
              <p className="eyebrow text-[color:var(--gold)]">Selected Work</p>
              <h2 className="mt-5 font-display text-5xl md:text-6xl text-balance">
                A few homes <em className="not-italic shimmer-text">we've fallen in love with.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <Link to="/portfolio" className="link-underline text-xs uppercase tracking-[0.28em] text-[color:var(--gold)]">
                The full portfolio →
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-8">
            {FEATURED.map((f, i) => (
              <FeaturedCard key={f.title} className="" data={f} aspect="aspect-[4/5]" index={i} />
            ))}
          </div>

          {/* Kinetic marquee */}
          <div className="relative mt-24 md:mt-32 overflow-hidden border-y border-[color:var(--gold)]/20 py-6">
            <div className="flex marquee-track w-max gap-14 whitespace-nowrap">
              {[..."Bespoke · Crafted in Pune · Cinematic · Turnkey · Hand-drawn · Considered · Warm · Heirloom".split(" · "), ..."Bespoke · Crafted in Pune · Cinematic · Turnkey · Hand-drawn · Considered · Warm · Heirloom".split(" · "), ..."Bespoke · Crafted in Pune · Cinematic · Turnkey · Hand-drawn · Considered · Warm · Heirloom".split(" · ")].map((w, i) => (
                <span key={i} className="font-display italic text-2xl md:text-4xl text-ivory/35 flex items-center gap-14">
                  {w}
                  <span className="text-[color:var(--gold)]">✦</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative bg-ivory py-28 md:py-36 overflow-hidden">
        <div className="mx-auto max-w-[1300px] px-6 md:px-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-16">
            <Reveal>
              <p className="eyebrow">Kind Words</p>
              <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl text-[color:var(--midnight)] text-balance max-w-2xl">
                What our families <em className="not-italic text-[color:var(--gold-deep)]">say</em> after moving in.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-charcoal/70">
                <span className="font-display text-3xl text-[color:var(--gold-deep)]">4.9</span>
                <span className="h-px w-8 bg-[color:var(--gold)]" />
                Across 40+ Pune homes
              </div>
            </Reveal>
          </div>

          <Reveal>
            <figure className="relative bg-[color:var(--midnight)] text-ivory p-10 md:p-16 overflow-hidden">
              <div className="absolute inset-0 ambient-glow opacity-60" />
              <div className="absolute inset-0 grain pointer-events-none" />
              <span className="relative font-display text-[7rem] leading-none text-[color:var(--gold)]/80">"</span>
              <blockquote className="relative -mt-10 font-display italic text-2xl md:text-4xl leading-[1.25] text-[color:var(--champagne)] text-balance max-w-3xl">
                They didn't design a house. They listened to my family for six months — then gave us back our evenings.
              </blockquote>
              <figcaption className="relative mt-8 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">
                <span className="h-px w-10 bg-[color:var(--gold)]/60" />
                Meera Joshi · Aundh
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 px-2 md:px-12">
              <Carousel
                opts={{ align: "start", loop: true }}
                plugins={[Autoplay({ delay: 5500, stopOnInteraction: true })]}
              >
                <CarouselContent className="-ml-6">
                  {TESTIMONIALS.map((t) => (
                    <CarouselItem key={t.name} className="pl-6 md:basis-1/2 lg:basis-1/3">
                      <figure className="h-full bg-[color:var(--card)] ring-1 ring-[color:var(--gold)]/15 p-8 hover-rise transition-all">
                        <div className="flex gap-1 text-[color:var(--gold-deep)] text-sm">
                          {"★★★★★".split("").map((s, idx) => <span key={idx}>{s}</span>)}
                        </div>
                        <blockquote className="mt-5 font-display italic text-lg leading-snug text-[color:var(--royal)] text-pretty">
                          "{t.quote}"
                        </blockquote>
                        <figcaption className="mt-6 pt-5 border-t border-[color:var(--gold)]/20">
                          <p className="font-display text-base text-[color:var(--midnight)]">{t.name}</p>
                          <p className="mt-1 text-xs uppercase tracking-[0.24em] text-charcoal/60">{t.place}</p>
                        </figcaption>
                      </figure>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="border-[color:var(--gold)]/40 text-[color:var(--midnight)] hover:bg-[color:var(--gold)] hover:text-[color:var(--midnight)]" />
                <CarouselNext className="border-[color:var(--gold)]/40 text-[color:var(--midnight)] hover:bg-[color:var(--gold)] hover:text-[color:var(--midnight)]" />
              </Carousel>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[color:var(--royal)] text-ivory">
        <div className="absolute inset-0 opacity-30">
          <img src={nook} alt="" className="h-full w-full object-cover" loading="lazy" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--midnight)] via-[color:var(--midnight)]/85 to-[color:var(--royal)]/40" />
        <div className="relative mx-auto max-w-[1300px] px-6 md:px-10 py-28 md:py-40">
          <Reveal>
            <p className="eyebrow text-[color:var(--gold)]">Begin Your Project</p>
            <h2 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl text-balance max-w-3xl">
              Tell us about the home you keep
              <em className="not-italic text-[color:var(--gold)]"> imagining</em>.
            </h2>
            <p className="mt-8 max-w-xl text-ivory/75 text-lg leading-relaxed font-light">
              We take on a small number of homes each year. The conversations begin over chai —
              there is no obligation, only curiosity.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Link to="/contact" className="group inline-flex items-center gap-3 bg-[color:var(--gold)] px-7 py-3.5 text-xs uppercase tracking-[0.28em] text-[color:var(--midnight)] hover:bg-ivory transition-colors">
                Schedule a Consultation <ArrowUpRight size={16} />
              </Link>
              <Link to="/services" className="link-underline text-xs uppercase tracking-[0.28em] text-ivory/85">
                Explore Services
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function FeaturedCard({
  data, aspect, className = "", index = 0,
}: { data: typeof FEATURED[number]; aspect: string; className?: string; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.1, delay: (index % 2) * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      <Link to="/portfolio" className="group block">
        <div className={`relative ${aspect} overflow-hidden bg-[color:var(--royal)]`}>
          <motion.img
            src={data.img}
            alt={data.title}
            loading="lazy"
            className="h-full w-full object-cover"
            initial={{ scale: 1.08 }}
            whileHover={{ scale: 1.12 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[color:var(--midnight)]/85 via-transparent to-transparent opacity-90" />
          <div className="pointer-events-none absolute inset-0 ring-0 group-hover:ring-1 ring-inset ring-[color:var(--gold)]/40 transition-all" />
          <div className="absolute left-5 right-5 bottom-5 md:left-7 md:bottom-7 flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow text-[color:var(--gold)]/90">{data.tag} · {data.year}</p>
              <h3 className="mt-2 font-display text-2xl md:text-3xl text-ivory">{data.title}</h3>
              <p className="text-ivory/65 text-sm mt-1 font-light">{data.place}</p>
            </div>
            <ArrowUpRight className="text-[color:var(--gold)] transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 shrink-0" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
