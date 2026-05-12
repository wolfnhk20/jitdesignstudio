import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — JIT Design Studio, Pune" },
      { name: "description", content: "Answers to the questions homeowners most often ask us — about timelines, budgets, and what working with JIT Design Studio feels like." },
      { property: "og:title", content: "FAQ — JIT Design Studio" },
      { property: "og:description", content: "Honest answers about working with our Pune interior design studio." },
    ],
  }),
  component: FaqPage,
});

const FAQS = [
  {
    q: "What does a typical project look like?",
    a: "Most of our projects are full-home interiors for 2 to 4 BHK apartments and independent homes across Pune. We start with a few unhurried conversations, walk through the space, study the light, and only then begin to design. From handover of drawings to move-in, most homes take between 14 and 22 weeks.",
  },
  {
    q: "What is the investment range to work with the studio?",
    a: "Our full-home interiors typically begin around ₹15–18 lakhs and scale up depending on scope, finishes and bespoke joinery. We always share a transparent estimate before any work begins, with line-item clarity so you know exactly what you are paying for.",
  },
  {
    q: "Do you only take on luxury projects?",
    a: "Not at all. We design for upper-middle-class Indian families — homeowners who want warmth, intention and craft, not loud opulence. Many of our most loved homes are deeply considered apartments, not vast villas.",
  },
  {
    q: "Are you involved on-site, or only in design?",
    a: "We are fully involved end-to-end. Our team visits the site multiple times each week, supervises every craftsman, and handles vendor co-ordination so you don't have to. You'll have one main point of contact through the entire project.",
  },
  {
    q: "Can we use our existing furniture and pieces?",
    a: "Of course — and we encourage it. The most beautiful homes are layered with personal history. We help re-context older pieces, restore family heirlooms, and weave them into the new design with care.",
  },
  {
    q: "Do you work outside Pune?",
    a: "Pune is home, and most of our work is here. We occasionally take on projects in Mumbai, Lonavala and Goa — these are case-by-case, depending on scope and our calendar.",
  },
  {
    q: "How do we begin?",
    a: "Write to us, call, or send a WhatsApp. We'll set up a slow, no-pressure first conversation — usually at the studio in Dhankawadi or at your home — to understand what you're imagining.",
  },
];

function FaqPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <section className="relative pt-44 pb-20 md:pt-56 md:pb-28 bg-[color:var(--midnight)] text-ivory overflow-hidden">
        <div className="absolute inset-0 ambient-glow opacity-70" />
        <div className="absolute inset-0 grain pointer-events-none" />
        <div className="relative mx-auto max-w-[1300px] px-6 md:px-10 grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-8">
            <p className="eyebrow text-[color:var(--gold)]">Frequently Asked</p>
            <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[1.02] text-balance">
              Honest answers — the way we'd give them
              <em className="not-italic text-[color:var(--gold)]"> over chai.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-4 self-end">
            <p className="text-ivory/70 font-light leading-relaxed">
              The questions homeowners ask us most often, answered without the usual jargon — so
              you know exactly what working together looks like.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative bg-ivory py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <ul className="divide-y divide-[color:var(--gold)]/20 border-y border-[color:var(--gold)]/20">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={f.q}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="group w-full flex items-start justify-between gap-6 py-7 md:py-9 text-left"
                  >
                    <span className="font-display text-2xl md:text-[1.7rem] leading-snug text-[color:var(--midnight)] group-hover:text-[color:var(--gold-deep)] transition-colors text-balance">
                      {f.q}
                    </span>
                    <span className={`mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all ${isOpen ? "bg-[color:var(--royal)] border-[color:var(--royal)] text-ivory rotate-180" : "border-[color:var(--gold)] text-[color:var(--royal)]"}`}>
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-8 pr-12 text-charcoal/85 leading-[1.85] text-[1.02rem] font-light">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>

          <div className="mt-20 text-center">
            <p className="font-display italic text-2xl text-[color:var(--royal)]">Still wondering about something?</p>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-3 border border-[color:var(--royal)] px-7 py-3.5 text-xs uppercase tracking-[0.28em] text-[color:var(--royal)] hover:bg-[color:var(--royal)] hover:text-ivory transition-colors">
              Ask us directly
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
