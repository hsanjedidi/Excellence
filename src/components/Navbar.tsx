import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  t: any;
  lang: "en" | "fr" | "ar";
  setLang: (l: "en" | "fr" | "ar") => void;
};

export default function Navbar({ t, lang, setLang }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    ["/", t.nav.home],
    ["/about", t.nav.about],
    ["/program", t.nav.program],
    ["/speakers", t.nav.speakers],
    ["/workshops", t.nav.workshops],
    ["/audience", t.nav.audience],
    ["/partners", t.nav.partners],
    ["/contact", t.nav.contact],
  ];

  return (
    <header
      className={`fixed z-50 w-full transition-all duration-500 ${scrolled || location.pathname !== "/" ? "bg-white/95 shadow-lg backdrop-blur-md" : "bg-transparent"}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
        {" "}
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-3"
        >
          <img
            src="/image/logo-removebg-preview (1).png"
            alt="Future Schools Excellence Summit"
            className={`h-14 w-auto object-contain transition-all duration-300 ${
              scrolled || location.pathname !== "/"
                ? "opacity-100"
                : "brightness-0 invert"
            }`}
          />
        </Link>
        <nav className="hidden items-center gap-4 lg:flex">
          {links.map(([href, label]) => (
            <Link
              key={href}
              to={href}
              className={`text-[11px] font-bold uppercase tracking-[0.1em] transition ${location.pathname === href ? "text-royal" : scrolled || location.pathname !== "/" ? "text-slate-600 hover:text-royal" : "text-white/90 hover:text-white"}`}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value as any)}
            className={`rounded-full border bg-transparent px-3 py-2 text-xs font-bold outline-none ${scrolled || location.pathname !== "/" ? "border-slate-200 text-navy" : "border-white/30 text-white"}`}
          >
            <option className="text-navy" value="en">
              EN
            </option>
            <option className="text-navy" value="fr">
              FR
            </option>
            <option className="text-navy" value="ar">
              AR
            </option>
          </select>
          <Link
            to="/register"
            className="group flex items-center gap-2 rounded-full bg-royal px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-royal/20 transition hover:bg-deepblue"
          >
            {t.nav.register}
            <ArrowUpRight
              size={14}
              className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
        <button
          className={`lg:hidden ${scrolled || location.pathname !== "/" ? "text-navy" : "text-white"}`}
          onClick={() => setOpen(!open)}
          aria-label="menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-white lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 pb-6 pt-2">
              {links.map(([href, label]) => (
                <Link
                  key={href}
                  onClick={() => setOpen(false)}
                  to={href}
                  className="border-b border-slate-100 py-3 text-sm font-semibold text-navy"
                >
                  {label}
                </Link>
              ))}
              <div className="flex items-center justify-between pt-4">
                <select
                  value={lang}
                  onChange={(e) => setLang(e.target.value as any)}
                  className="rounded-full border border-slate-200 px-3 py-2 text-xs font-bold"
                >
                  <option value="en">EN</option>
                  <option value="fr">FR</option>
                  <option value="ar">AR</option>
                </select>
                <Link
                  onClick={() => setOpen(false)}
                  to="/register"
                  className="rounded-full bg-royal px-5 py-2.5 text-xs font-bold uppercase text-white"
                >
                  {t.nav.register}
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
