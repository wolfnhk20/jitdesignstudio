import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight, MapPin, Calendar } from "lucide-react";

export type LightboxProject = {
  title: string;
  place: string;
  year: string;
  tag: string;
  description?: string;
  images: string[];
};

const EASE = [0.22, 1, 0.36, 1] as const;

export function ProjectLightbox({
  project,
  onClose,
}: {
  project: LightboxProject | null;
  onClose: () => void;
}) {
  const [i, setI] = useState(0);

  useEffect(() => { setI(0); }, [project]);

  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setI((p) => (p + 1) % project.images.length);
      if (e.key === "ArrowLeft") setI((p) => (p - 1 + project.images.length) % project.images.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="lb"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="fixed inset-0 z-[80] bg-[color:var(--midnight)]/96 backdrop-blur-2xl"
        >
          <div className="absolute inset-0 ambient-glow opacity-40 pointer-events-none" />
          <div className="absolute inset-0 grain pointer-events-none" />

          {/* Top bar */}
          <div className="relative z-10 flex items-start justify-between gap-6 px-5 md:px-10 pt-6 md:pt-8">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.7, ease: EASE }}
              className="text-ivory max-w-2xl"
            >
              <p className="eyebrow text-[color:var(--gold)]">{project.tag}</p>
              <h3 className="mt-2 font-display text-2xl md:text-4xl text-balance leading-tight">
                {project.title}
              </h3>
              <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1 text-xs text-ivory/65 uppercase tracking-[0.22em]">
                <span className="inline-flex items-center gap-1.5"><MapPin size={12} className="text-[color:var(--gold)]" /> {project.place}</span>
                <span className="inline-flex items-center gap-1.5"><Calendar size={12} className="text-[color:var(--gold)]" /> {project.year}</span>
              </div>
            </motion.div>

            <button
              onClick={onClose}
              aria-label="Close gallery"
              className="group grid place-items-center h-11 w-11 rounded-full border border-[color:var(--gold)]/40 text-[color:var(--gold)] hover:bg-[color:var(--gold)] hover:text-[color:var(--midnight)] transition-colors"
            >
              <X size={18} className="transition-transform group-hover:rotate-90 duration-500" />
            </button>
          </div>

          {/* Main image */}
          <div className="relative h-[calc(100svh-220px)] md:h-[calc(100svh-240px)] mt-6 mx-5 md:mx-10 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={project.images[i]}
                src={project.images[i]}
                alt={`${project.title} - ${i + 1}`}
                initial={{ opacity: 0, scale: 1.04, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.99, filter: "blur(6px)" }}
                transition={{ duration: 0.8, ease: EASE }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[color:var(--gold)]/20" />
            {/* Corner brackets */}
            <span className="pointer-events-none absolute top-3 left-3 h-5 w-5 border-t border-l border-[color:var(--gold)]/70" />
            <span className="pointer-events-none absolute top-3 right-3 h-5 w-5 border-t border-r border-[color:var(--gold)]/70" />
            <span className="pointer-events-none absolute bottom-3 left-3 h-5 w-5 border-b border-l border-[color:var(--gold)]/70" />
            <span className="pointer-events-none absolute bottom-3 right-3 h-5 w-5 border-b border-r border-[color:var(--gold)]/70" />

            {/* Nav arrows */}
            <button
              onClick={() => setI((p) => (p - 1 + project.images.length) % project.images.length)}
              aria-label="Previous"
              className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 grid place-items-center h-12 w-12 rounded-full bg-[color:var(--midnight)]/70 backdrop-blur border border-[color:var(--gold)]/40 text-[color:var(--gold)] hover:bg-[color:var(--gold)] hover:text-[color:var(--midnight)] transition-colors"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={() => setI((p) => (p + 1) % project.images.length)}
              aria-label="Next"
              className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 grid place-items-center h-12 w-12 rounded-full bg-[color:var(--midnight)]/70 backdrop-blur border border-[color:var(--gold)]/40 text-[color:var(--gold)] hover:bg-[color:var(--gold)] hover:text-[color:var(--midnight)] transition-colors"
            >
              <ChevronRight size={22} />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-display text-[color:var(--champagne)] text-sm tracking-[0.3em]">
              {String(i + 1).padStart(2, "0")} <span className="text-[color:var(--gold)]/60">/</span> {String(project.images.length).padStart(2, "0")}
            </div>
          </div>

          {/* Thumbnails */}
          <div className="absolute bottom-5 left-0 right-0 px-5 md:px-10">
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
              {project.images.map((src, idx) => (
                <button
                  key={src + idx}
                  onClick={() => setI(idx)}
                  className={`relative shrink-0 h-14 w-20 md:h-16 md:w-24 overflow-hidden border transition-all ${
                    idx === i
                      ? "border-[color:var(--gold)] opacity-100"
                      : "border-transparent opacity-50 hover:opacity-90"
                  }`}
                >
                  <img src={src} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
