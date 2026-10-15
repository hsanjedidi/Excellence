import {
  BadgeCheck,
  Building2,
  Handshake,
  Megaphone,
  Presentation,
  Trophy,
  ArrowRight,
  Sparkles,
  GraduationCap,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  Globe2,
  Users,
  BookOpen,
} from "lucide-react";

import { Reveal } from "../components/Animated";
import SectionHeader from "../components/SectionHeader";
import { Lang } from "../data/content";

export default function Partners({ t, currentLang }: { t: any; currentLang: Lang }) {
  const categories = [
    { key: "institutional", Icon: Building2 },
    { key: "academic", Icon: GraduationCap },
    { key: "strategic", Icon: Handshake },
    { key: "sponsors", Icon: Trophy },
    { key: "workshop", Icon: Presentation },
    { key: "technology", Icon: Cpu },
    { key: "media", Icon: Megaphone },
  ];

  const benefits = [
    { key: "visibility", Icon: Globe2 },
    { key: "access", Icon: Users },
    { key: "exhibition", Icon: Presentation },
    { key: "thoughtLeadership", Icon: BookOpen },
    { key: "brandPresence", Icon: BadgeCheck },
    { key: "impact", Icon: Sparkles },
  ];

  return (
    <main className="page-bg" dir={currentLang === "ar" ? "rtl" : "ltr"}>
      {/* HERO */}
      <section
        className="relative isolate flex min-h-[580px] items-center overflow-hidden bg-cover bg-center md:min-h-[680px]"
        style={{
          backgroundImage: "url('/image/hero/Leaders.jpg')",
        }}
      >
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-r from-[#071A2B]/95 via-[#071A2B]/80 to-[#071A2B]/35"
          aria-hidden="true"
        />

        <div
          className="absolute inset-0 -z-10 bg-gradient-to-t from-[#071A2B]/65 via-transparent to-[#071A2B]/20"
          aria-hidden="true"
        />

        <div
          className="pointer-events-none absolute -right-20 top-20 -z-10 h-72 w-72 rounded-full border border-white/10"
          aria-hidden="true"
        />

        <div
          className="pointer-events-none absolute -right-8 top-32 -z-10 h-48 w-48 rounded-full border border-[#C6A75E]/25"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 md:py-32">
          <Reveal>
            <div className="max-w-3xl">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-12 bg-[#C6A75E]" />
                <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#D8BD78]">
                  {t.partners.eyebrow}
                </span>
              </div>

              <h1 className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-7xl">
                {t.partners.title}
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
                {t.partners.intro}
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#partnership-contact"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#C6A75E] px-7 py-4 text-xs font-bold uppercase tracking-wider text-[#071A2B] transition duration-300 hover:-translate-y-1 hover:bg-white"
                >
                  {t.partners.deckButton}
                  <ArrowRight size={16} />
                </a>

                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-white/30 bg-white/5 px-7 py-4 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#C6A75E] hover:bg-white/10"
                >
                  {t.partners.sponsorButton}
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-[#C6A75E] to-transparent" />
      </section>

      {/* PARTNERSHIP CATEGORIES */}
      <section
        id="partnership-opportunities"
        className="relative overflow-hidden py-20 md:py-28"
      >
        <div
          className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl"
          aria-hidden="true"
        />

        <div
          className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-amber-100/40 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionHeader
              eyebrow={t.partners.categoriesEyebrow}
              title={t.partners.categoriesTitle}
              text={t.partners.categoriesIntro}
            />
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map(({ key, Icon }, i) => {
              const category = t.partners.categories[key];

              return (
                <Reveal key={key} delay={i * 0.05}>
                  <article className="group relative flex h-full min-h-[270px] flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-7 shadow-[0_8px_30px_rgba(7,26,43,0.04)] transition-all duration-500 hover:-translate-y-2 hover:border-[#C6A75E]/60 hover:shadow-[0_20px_50px_rgba(7,26,43,0.10)] md:p-8">
                    <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-slate-50 transition-colors duration-500 group-hover:bg-amber-50" />

                    <div className="relative flex items-center justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#C6A75E]/25 bg-[#C6A75E]/10 text-[#A78337] transition-all duration-500 group-hover:bg-[#071A2B] group-hover:text-[#D8BD78]">
                        <Icon size={26} strokeWidth={1.7} />
                      </div>

                      <span className="font-display text-sm font-semibold tracking-widest text-slate-300">
                        0{i + 1}
                      </span>
                    </div>

                    <h3 className="relative mt-7 font-display text-xl font-semibold leading-snug text-[#071A2B]">
                      {category.title}
                    </h3>

                    <div className="mt-5 h-px w-12 bg-[#C6A75E] transition-all duration-500 group-hover:w-20" />

                    <p className="mt-5 flex-1 text-sm leading-7 text-slate-500">
                      {category.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* PARTNER VALUE */}
      <section className="relative overflow-hidden bg-[#071A2B] py-20 text-white md:py-28">
        <div
          className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"
          aria-hidden="true"
        />

        <div
          className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[#C6A75E]/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionHeader
              eyebrow={t.partners.valueEyebrow}
              title={t.partners.valueTitle}
              text={t.partners.valueIntro}
              light
            />
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map(({ key, Icon }, i) => (
              <Reveal key={key} delay={i * 0.04}>
                <article className="group flex h-full gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#C6A75E]/40 hover:bg-white/[0.07] md:p-7">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#C6A75E]/25 bg-[#C6A75E]/10 text-[#D8BD78] transition duration-300 group-hover:bg-[#C6A75E] group-hover:text-[#071A2B]">
                    <Icon size={22} strokeWidth={1.7} />
                  </div>

                  <div>
                    <h3 className="font-display text-lg font-semibold text-white">
                      {t.partners.benefits[key].title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      {t.partners.benefits[key].description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EDITORIAL INDEPENDENCE */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-[#C6A75E]/30 bg-white p-8 shadow-[0_15px_50px_rgba(7,26,43,0.06)] md:p-12">
              <div className="absolute right-0 top-0 h-40 w-40 rounded-bl-full bg-amber-50/80" />

              <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#071A2B] text-[#D8BD78]">
                  <ShieldCheck size={28} strokeWidth={1.7} />
                </div>

                <div>
                  <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#A78337]">
                    <CheckCircle2 size={15} />
                    {t.partners.independenceEyebrow}
                  </div>

                  <h2 className="font-display text-2xl font-semibold leading-tight text-[#071A2B] md:text-3xl">
                    {t.partners.independenceTitle}
                  </h2>

                  <p className="mt-5 text-sm leading-8 text-slate-600 md:text-base">
                    {t.partners.independenceText}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section id="partnership-contact" className="scroll-mt-20 pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-[#071A2B] px-7 py-12 text-center shadow-[0_20px_60px_rgba(7,26,43,0.15)] md:px-16 md:py-16">
              <div className="absolute -right-16 -top-24 h-72 w-72 rounded-full border border-white/10" />

              <div className="absolute -left-16 -bottom-24 h-64 w-64 rounded-full border border-[#C6A75E]/20" />

              <div className="relative mx-auto max-w-3xl">
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#C6A75E]/30 bg-[#C6A75E]/10 text-[#D8BD78]">
                  <Handshake size={28} strokeWidth={1.6} />
                </div>

                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#D8BD78]">
                  {t.partners.ctaEyebrow}
                </p>

                <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-white md:text-5xl">
                  {t.partners.ctaTitle}
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-slate-300 md:text-base">
                  {t.partners.ctaText}
                </p>

                <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
                  <a
                    href="/contact?subject=Partnership%20Deck"
                    className="inline-flex items-center justify-center gap-3 rounded-full bg-[#C6A75E] px-7 py-4 text-xs font-bold uppercase tracking-wider text-[#071A2B] transition duration-300 hover:-translate-y-1 hover:bg-white"
                  >
                    {t.partners.deckButton}
                    <ArrowRight size={16} />
                  </a>

                  <a
                    href="/contact?subject=Sponsorship"
                    className="inline-flex items-center justify-center gap-3 rounded-full border border-[#C6A75E]/60 px-7 py-4 text-xs font-bold uppercase tracking-wider text-[#D8BD78] transition duration-300 hover:-translate-y-1 hover:bg-[#C6A75E] hover:text-[#071A2B]"
                  >
                    {t.partners.sponsorButton}
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
