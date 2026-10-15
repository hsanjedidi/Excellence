import { useEffect, useMemo, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { AmbientCursor, ScrollProgress } from "./components/LuxuryMotion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { translations } from "./translations";
import { Lang } from "./data/content";
import Home from "./pages/Home";
import About from "./pages/About";
import Program from "./pages/Program";
import Speakers from "./pages/Speakers";
import Workshops from "./pages/Workshops";
import Audience from "./pages/Audience";
import Partners from "./pages/Partners";
import Register from "./pages/Register";
import Contact from "./pages/Contact";

function AppShell() {
  const [lang, setLang] = useState<Lang>(
    () => (localStorage.getItem("fse-lang") as Lang) || "en",
  );
  const t = useMemo(() => translations[lang], [lang]);
  const location = useLocation();

  const isRtl = lang === "ar";

  useEffect(() => {
    localStorage.setItem("fse-lang", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = isRtl ? "rtl" : "ltr";
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [lang, isRtl, location.pathname]);

  return (
    <div
      dir={isRtl ? "rtl" : "ltr"}
      className={`min-h-screen flex flex-col ${isRtl ? "font-ar rtl text-right" : "text-left"}`}
    >
      <ScrollProgress />
      <AmbientCursor />
      <Navbar t={t} lang={lang} setLang={setLang} />

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          >
            <Routes>
              <Route path="/" element={<Home t={t} currentLang={lang} />} />
              <Route path="/about" element={<About t={t}  currentLang={lang}/>} />
              <Route path="/program" element={<Program t={t} currentLang={lang} />} />
              <Route path="/speakers" element={<Speakers t={t} currentLang={lang} />} />
              <Route path="/workshops" element={<Workshops t={t} currentLang={lang} />} />
              <Route path="/audience" element={<Audience t={t} currentLang={lang} />} />
              <Route path="/partners" element={<Partners t={t} currentLang={lang} />} />
              <Route path="/register" element={<Register t={t} currentLang={lang} />} />
              <Route path="/contact" element={<Contact t={t} currentLang={lang} />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer t={t} />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
