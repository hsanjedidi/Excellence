import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowUpRight, ChevronDown, Check } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

type Lang = "en" | "fr" | "ar";

type Props = {
  t: any;
  lang: Lang;
  setLang: (l: Lang) => void;
};

/* ─────────────────────────────────────────────
   TAILLE DU LOGO : modifiez uniquement ici
   h-*      = hauteur
   max-w-*  = largeur maximale (évite d'écraser les boutons sur mobile)
   Écrivez toujours les classes en entier (Tailwind ne lit pas les classes construites dynamiquement)
   ───────────────────────────────────────────── */
const LOGO_SIZE = {
  // En haut de page
  top: "h-14 max-w-[130px] min-[400px]:max-w-[150px] sm:h-16 sm:max-w-[190px] lg:h-20 lg:max-w-[230px]",
  // Après défilement (légèrement plus petit)
  scrolled:
    "h-12 max-w-[120px] min-[400px]:max-w-[135px] sm:h-14 sm:max-w-[170px] lg:h-16 lg:max-w-[200px]",
};

const LANGUAGES: { code: Lang; label: string; name: string; flag: string }[] = [
  { code: "en", label: "EN", name: "English", flag: "gb" },
  { code: "fr", label: "FR", name: "Français", flag: "fr" },
  { code: "ar", label: "AR", name: "العربية", flag: "sa" },
];

const Flag = ({
  code,
  className = "",
}: {
  code: string;
  className?: string;
}) => (
  <img
    src={`https://flagcdn.com/${code}.svg`}
    alt=""
    aria-hidden="true"
    className={`h-3.5 w-5 shrink-0 rounded-[2px] object-cover shadow-sm ring-1 ring-black/5 ${className}`}
  />
);

function LanguageSelector({
  lang,
  setLang,
  isSolid,
  mobile = false,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
  isSolid: boolean;
  mobile?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0];

  // Fermer au clic extérieur ou avec Échap
  useEffect(() => {
    if (!open) return;

    const onClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-label="Select language"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className={`flex items-center gap-1.5 rounded-full border font-bold transition-all ${
          mobile ? "h-9 px-2.5 text-[11px]" : "px-3 py-2 text-xs"
        } ${
          isSolid
            ? "border-slate-200 text-navy hover:bg-slate-50"
            : "border-white/30 text-white hover:bg-white/10"
        }`}
      >
        <Flag code={current.flag} />
        <span>{current.label}</span>
        <ChevronDown
          size={mobile ? 12 : 14}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="absolute end-0 top-full z-50 mt-2 min-w-[170px] overflow-hidden rounded-2xl bg-white p-1.5 shadow-xl shadow-slate-900/10 ring-1 ring-slate-900/5"
          >
            {LANGUAGES.map((l) => {
              const active = l.code === lang;

              return (
                <li key={l.code}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={active}
                    onClick={() => {
                      setLang(l.code);
                      setOpen(false);
                    }}
                    className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition ${
                      active
                        ? "bg-royal/10 text-royal"
                        : "text-navy hover:bg-slate-50"
                    }`}
                  >
                    <Flag code={l.flag} className="h-4 w-6" />
                    <span className="flex-1 text-start">{l.name}</span>
                    {active && <Check size={15} />}
                  </button>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar({ t, lang, setLang }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isSolid = scrolled || open || location.pathname !== "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fermer le menu lors d'un changement de page
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

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

  const registerButton = (mobile = false) => (
    <Link
      to="/register"
      onClick={() => setOpen(false)}
      className={`group flex shrink-0 items-center justify-center gap-1.5 rounded-full bg-royal font-bold uppercase text-white shadow-lg shadow-royal/20 transition hover:bg-deepblue ${
        mobile
          ? "min-h-9 px-3 text-[10px] tracking-wide sm:px-4 sm:text-[11px]"
          : "gap-2 px-5 py-2.5 text-xs tracking-wider"
      }`}
    >
      <span>{t.nav.register}</span>
      <ArrowUpRight
        size={mobile ? 12 : 14}
        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </Link>
  );

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isSolid
          ? "bg-white/95 shadow-lg shadow-slate-900/5 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      {/* NAVBAR PRINCIPALE */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 py-1.5 sm:px-6 lg:px-6">
        {/* LOGO */}
        <Link
          to="/"
          onClick={() => setOpen(false)}
          aria-label="Future Schools Excellence Summit - Home"
          className="flex min-w-0 shrink items-center"
        >
          <img
            src="/image/logo2.png"
            alt="Future Schools Excellence Summit"
            className={`w-auto object-contain transition-all duration-300 ${
              scrolled ? LOGO_SIZE.scrolled : LOGO_SIZE.top
            } ${isSolid ? "opacity-100" : "brightness-0 invert"}`}
          />
        </Link>

        {/* NAVIGATION DESKTOP */}
        <nav className="hidden items-center gap-4 lg:flex">
          {links.map(([href, label]) => (
            <Link
              key={href}
              to={href}
              className={`whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.08em] transition ${
                location.pathname === href
                  ? "text-royal"
                  : isSolid
                    ? "text-slate-600 hover:text-royal"
                    : "text-white/90 hover:text-white"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* ACTIONS DESKTOP */}
        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <LanguageSelector lang={lang} setLang={setLang} isSolid={isSolid} />
          {registerButton()}
        </div>

        {/* ACTIONS MOBILE : LANGUE + REGISTER + MENU */}
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2 lg:hidden">
          <LanguageSelector
            lang={lang}
            setLang={setLang}
            isSolid={isSolid}
            mobile
          />
          {registerButton(true)}

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition ${
              isSolid
                ? "text-navy hover:bg-slate-100"
                : "text-white hover:bg-white/10"
            }`}
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>

      {/* MENU MOBILE DÉROULANT */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-slate-100 bg-white shadow-xl lg:hidden"
          >
            <nav className="mx-auto flex max-w-7xl flex-col gap-0 px-5 pb-5 pt-2 sm:px-6">
              {links.map(([href, label]) => {
                const active = location.pathname === href;

                return (
                  <Link
                    key={href}
                    to={href}
                    onClick={() => setOpen(false)}
                    className={`border-b border-slate-100 py-3.5 text-sm font-semibold transition ${
                      active
                        ? "ps-3 text-royal"
                        : "text-navy hover:ps-3 hover:text-royal"
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
