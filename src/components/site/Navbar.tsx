import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/jit-logo.jpg";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/studio", label: "Studio" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/faq", label: "Journal" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[color:var(--midnight)]/85 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-10 md:py-5">
        <Link to="/" className="group flex items-center gap-3">
          <span className="relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-[color:var(--gold)]/40">
            <img src={logo} alt="JIT Design Studio" className="h-full w-full object-cover" />
          </span>
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-display text-lg tracking-wide text-ivory">JIT Design Studio</span>
            <span className="eyebrow !text-[0.55rem] !tracking-[0.4em] text-[color:var(--gold)]/80">
              Pune · Est. Interiors
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {NAV.map((item) => {
            const active = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`link-underline text-sm font-light tracking-[0.18em] uppercase transition-colors ${
                  active ? "text-[color:var(--gold)]" : "text-ivory/85 hover:text-[color:var(--gold)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center gap-2 border border-[color:var(--gold)]/60 px-5 py-2.5 text-xs uppercase tracking-[0.25em] text-[color:var(--gold)] transition-all hover:bg-[color:var(--gold)] hover:text-[color:var(--midnight)]"
        >
          Begin a Project
        </Link>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="lg:hidden text-ivory p-2"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden bg-[color:var(--midnight)]/98 backdrop-blur-xl border-t border-[color:var(--gold)]/15"
          >
            <div className="flex flex-col px-8 py-8 gap-6">
              {NAV.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                >
                  <Link
                    to={item.to}
                    className="font-display text-3xl text-ivory hover:text-[color:var(--gold)] transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <div className="gold-rule mt-2" />
              <Link
                to="/contact"
                className="self-start border border-[color:var(--gold)]/60 px-5 py-2.5 text-xs uppercase tracking-[0.25em] text-[color:var(--gold)]"
              >
                Begin a Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
