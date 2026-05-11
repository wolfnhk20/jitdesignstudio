import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Reveal } from "@/components/site/Reveal";
import { ArrowUpRight } from "lucide-react";
import { IMG } from "@/lib/images";
const bedroom = IMG.bedroom;
const dining = IMG.dining;
const kitchen = IMG.kitchen;
const nook = IMG.nook;
const foyer = IMG.foyer;
const bath = IMG.bath;
const hero = IMG.hero;

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — JIT Design Studio, Pune" },
      { name: "description", content: "A selection of contemporary Indian interiors — apartments, residences, kitchens and bath sanctuaries crafted by JIT Design Studio." },
      { property: "og:title", content: "Portfolio — JIT Design Studio" },
      { property: "og:description", content: "Selected interior projects from Pune." },
      { property: "og:image", content: hero },
    ],
  }),
  component: Portfolio,
});

type Project = {
  img: string; title: string; place: string; year: string; tag: string; ratio: string; span: string;
};

const PROJECTS: Project[] = [
  { img: hero, title: "Arched at Golden Hour", place: "Baner · Pune", year: "2024", tag: "Residence", ratio: "aspect-[16/10]", span: "md:col-span-8" },
  { img: bedroom, title: "The Indigo Suite", place: "Wakad · Pune", year: "2024", tag: "Bedroom", ratio: "aspect-[4/5]", span: "md:col-span-4 md:row-span-2" },
  { img: kitchen, title: "Brass & Midnight", place: "Aundh · Pune", year: "2025", tag: "Kitchen", ratio: "aspect-[5/4]", span: "md:col-span-4" },
  { img: foyer, title: "A Quiet Welcome", place: "Kothrud · Pune", year: "2023", tag: "Foyer", ratio: "aspect-[4/5]", span: "md:col-span-4" },
  { img: dining, title: "House of Long Suppers", place: "Kothrud · Pune", year: "2024", tag: "Dining", ratio: "aspect-[16/10]", span: "md:col-span-8" },
  { img: nook, title: "The Reading Alcove", place: "Sahakar Nagar · Pune", year: "2023", tag: "Library Nook", ratio: "aspect-[4/5]", span: "md:col-span-5" },
  { img: bath, title: "Zellige & Stone", place: "Bavdhan · Pune", year: "2025", tag: "Bath", ratio: "aspect-[16/10]", span: "md:col-span-7" },
];

function Portfolio() {
  return (
    <>
      <section className="relative pt-44 pb-20 md:pt-56 md:pb-28 bg-[color:var(--midnight)] text-ivory overflow-hidden">
        <div className="absolute inset-0 ambient-glow opacity-70" />
        <div className="absolute inset-0 grain pointer-events-none" />
        <div className="relative mx-auto max-w-[1300px] px-6 md:px-10 grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-8">
            <p className="eyebrow text-[color:var(--gold)]">The Portfolio</p>
            <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[1.02] text-balance">
              Quiet, cinematic Indian homes — <em className="not-italic text-[color:var(--gold)]">told one room at a time.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-4 self-end">
            <p className="text-ivory/70 leading-relaxed font-light">
              A small, evolving archive of homes designed for modern families across Pune. Each
              project here is a story we lived inside for many months.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Editorial mosaic */}
      <section className="bg-ivory py-20 md:py-28">
        <div className="mx-auto max-w-[1500px] px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-auto">
            {PROJECTS.map((p, i) => (
              <ProjectTile key={i} p={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[color:var(--royal)] text-ivory py-24 md:py-32">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10 text-center">
          <Reveal>
            <p className="eyebrow text-[color:var(--gold)]">Looking ahead</p>
            <h2 className="mt-6 font-display text-4xl md:text-6xl text-balance">
              Could the next page of this portfolio be
              <em className="not-italic text-[color:var(--gold)]"> your home?</em>
            </h2>
            <Link to="/contact" className="mt-10 inline-flex items-center gap-3 bg-[color:var(--gold)] px-8 py-4 text-xs uppercase tracking-[0.28em] text-[color:var(--midnight)] hover:bg-ivory transition-colors">
              Start a project <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ProjectTile({ p, index }: { p: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, delay: (index % 4) * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden bg-[color:var(--royal)] ${p.ratio} col-span-1 ${p.span}`}
    >
      <img
        src={p.img}
        alt={p.title}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.06]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[color:var(--midnight)]/85 via-[color:var(--midnight)]/0 to-transparent opacity-90" />
      <div className="pointer-events-none absolute inset-0 ring-0 group-hover:ring-1 ring-inset ring-[color:var(--gold)]/40 transition-all" />
      <div className="absolute left-5 right-5 bottom-5 md:left-7 md:bottom-7 flex items-end justify-between gap-4">
        <div>
          <p className="eyebrow text-[color:var(--gold)]/90">{p.tag} · {p.year}</p>
          <h3 className="mt-2 font-display text-2xl md:text-[1.7rem] text-ivory text-balance">{p.title}</h3>
          <p className="text-ivory/65 text-sm mt-1 font-light">{p.place}</p>
        </div>
        <ArrowUpRight className="text-[color:var(--gold)] transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
      </div>
    </motion.div>
  );
}
