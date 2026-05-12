import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { ArrowUpRight, Expand } from "lucide-react";
import { IMG, GALLERY } from "@/lib/images";
import { ProjectLightbox, type LightboxProject } from "@/components/site/ProjectLightbox";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — JIT Design Studio, Pune" },
      { name: "description", content: "A selection of contemporary Indian interiors — apartments, residences, kitchens and bath sanctuaries crafted by JIT Design Studio." },
      { property: "og:title", content: "Portfolio — JIT Design Studio" },
      { property: "og:description", content: "Selected interior projects from Pune." },
      { property: "og:image", content: IMG.hero },
    ],
  }),
  component: Portfolio,
});

type Project = LightboxProject & { cover: string; ratio: string };

const PROJECTS: Project[] = [
  { cover: IMG.hero,    title: "Arched at Golden Hour",  place: "Baner · Pune",          year: "2024", tag: "Residence",   description: "A four-bedroom home built around a single arched window and the way the late sun pours through it.",  images: GALLERY.arched,  ratio: "aspect-[4/5]" },
  { cover: IMG.bedroom, title: "The Indigo Suite",       place: "Wakad · Pune",          year: "2024", tag: "Bedroom",     description: "A moody master suite layered in indigo, brass and warm linen.",                                       images: GALLERY.indigo,  ratio: "aspect-[4/5]" },
  { cover: IMG.kitchen, title: "Brass & Midnight",       place: "Aundh · Pune",          year: "2025", tag: "Kitchen",     description: "A working chef's kitchen, kept calm by hand-finished brass and a deep midnight palette.",            images: GALLERY.brass,   ratio: "aspect-[4/5]" },
  { cover: IMG.foyer,   title: "A Quiet Welcome",        place: "Kothrud · Pune",        year: "2023", tag: "Foyer",       description: "An entry sequence designed to slow you down — stone underfoot, soft light overhead.",                images: GALLERY.foyer,   ratio: "aspect-[4/5]" },
  { cover: IMG.dining,  title: "House of Long Suppers",  place: "Kothrud · Pune",        year: "2024", tag: "Dining",      description: "A dining room built for four-hour dinners, with layered light and a single long oak table.",         images: GALLERY.suppers, ratio: "aspect-[4/5]" },
  { cover: IMG.nook,    title: "The Reading Alcove",     place: "Sahakar Nagar · Pune",  year: "2023", tag: "Library",     description: "A quiet alcove carved out of an unused bay window, lined in walnut and morning light.",              images: GALLERY.alcove,  ratio: "aspect-[4/5]" },
  { cover: IMG.bath,    title: "Zellige & Stone",        place: "Bavdhan · Pune",        year: "2025", tag: "Bath",        description: "A monastic bath in zellige, kota stone and aged brass.",                                              images: GALLERY.zellige, ratio: "aspect-[4/5]" },
];

function Portfolio() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <>
      {/* HERO */}
      <section className="relative pt-44 pb-20 md:pt-56 md:pb-28 bg-[color:var(--midnight)] text-ivory overflow-hidden">
        <div className="absolute inset-0 ambient-glow opacity-70" />
        <div className="absolute inset-0 grain pointer-events-none" />
        <div className="relative mx-auto max-w-[1300px] px-6 md:px-10 grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-8">
            <p className="eyebrow text-[color:var(--gold)]">The Portfolio</p>
            <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[1.02] text-balance">
              Quiet, cinematic Indian homes — <em className="not-italic shimmer-text">told one room at a time.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-4 self-end">
            <p className="text-ivory/70 leading-relaxed font-light">
              A small, evolving archive of homes designed for modern families across Pune. Tap any
              project to step inside its full gallery.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SYMMETRIC GRID */}
      <section className="bg-ivory py-20 md:py-28">
        <div className="mx-auto max-w-[1500px] px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
            {PROJECTS.map((p, i) => (
              <ProjectTile key={p.title} p={p} index={i} onOpen={() => setActive(p)} />
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
              <em className="not-italic shimmer-text"> your home?</em>
            </h2>
            <Link to="/contact" className="mt-10 inline-flex items-center gap-3 bg-[color:var(--gold)] px-8 py-4 text-xs uppercase tracking-[0.28em] text-[color:var(--midnight)] hover:bg-ivory transition-colors">
              Start a project <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      <ProjectLightbox project={active} onClose={() => setActive(null)} />
    </>
  );
}

function ProjectTile({ p, index, onOpen }: { p: Project; index: number; onOpen: () => void }) {
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden bg-[color:var(--royal)] ${p.ratio} text-left w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--gold)]`}
    >
      <img
        src={p.cover}
        alt={p.title}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-[1.08]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[color:var(--midnight)] via-[color:var(--midnight)]/30 to-transparent opacity-90" />
      <div className="pointer-events-none absolute inset-0 ring-0 group-hover:ring-1 ring-inset ring-[color:var(--gold)]/50 transition-all" />

      {/* Image count badge */}
      <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 bg-[color:var(--midnight)]/70 backdrop-blur px-2.5 py-1 text-[0.6rem] uppercase tracking-[0.25em] text-[color:var(--gold)] border border-[color:var(--gold)]/30">
        <Expand size={11} /> {p.images.length} photos
      </div>

      {/* Hover overlay — "Open Gallery" */}
      <div className="pointer-events-none absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <span className="font-display italic text-[color:var(--champagne)] text-xl md:text-2xl tracking-wide drop-shadow-[0_2px_18px_rgba(8,12,30,0.7)]">
          Open the gallery →
        </span>
      </div>

      <div className="absolute left-5 right-5 bottom-5 md:left-7 md:bottom-7 flex items-end justify-between gap-4">
        <div>
          <p className="eyebrow text-[color:var(--gold)]/90">{p.tag} · {p.year}</p>
          <h3 className="mt-2 font-display text-2xl md:text-[1.65rem] text-ivory text-balance leading-tight">{p.title}</h3>
          <p className="text-ivory/65 text-sm mt-1 font-light">{p.place}</p>
        </div>
        <ArrowUpRight className="text-[color:var(--gold)] transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 shrink-0" />
      </div>
    </motion.button>
  );
}
