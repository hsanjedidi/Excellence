import { useState } from "react";
import PageHero, { Reveal } from "../components/Animated";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { h2 } from "framer-motion/client";
import { Lang } from "../data/content";

export default function Register({ t, currentLang }: { t: any; currentLang: Lang }) {
  const [sent, setSent] = useState(false);
  return (
    <main className="page-bg" dir={currentLang === "ar" ? "rtl" : "ltr"}>
      <PageHero
        eyebrow={t.register.eyebrow}
        title={t.register.title}
        text={t.register.text}
      />
      <section className="py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <Reveal>
            <div className="rounded-3xl bg-navy p-9 text-white">
              <div className="text-xs font-bold uppercase tracking-[.2em] text-champagne">
                2027
              </div>
              <h2 className="mt-4 font-display text-4xl">
                Future Schools Excellence Summit
              </h2>
              <p className="mt-5 leading-7 text-slate-300">
                AI • Quality • Accreditation • Digital Transformation
              </p>
              <div className="mt-10 space-y-4 text-sm text-slate-300">
                <div>April 2027</div>
                <div>Sousse, Tunisia</div>
                <div>Two-day professional summit</div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-luxe md:p-10"
            >
              {sent ? (
                <div className="flex min-h-[430px] flex-col items-center justify-center text-center">
                  <CheckCircle2 size={52} className="text-royal" />
                  <h2 className="mt-6 font-display text-3xl text-navy">
                    Thank you
                  </h2>
                  <p className="mt-3 text-slate-600">
                    Your registration interest has been recorded in this demo
                    form.
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid gap-5 sm:grid-cols-2">
                    {[
                      "first",
                      "last",
                      "email",
                      "phone",
                      "organization",
                      "position",
                      "country",
                    ].map((k) => (
                      <label
                        key={k}
                        className="text-xs font-bold text-slate-600"
                      >
                        {t.register.fields[k]}
                        <input
                          required={k === "first" || k === "email"}
                          type={k === "email" ? "email" : "text"}
                          className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-royal focus:bg-white"
                        />
                      </label>
                    ))}
                    <label className="text-xs font-bold text-slate-600">
                      {t.register.fields.type}
                      <select className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none">
                        <option>{t.register.types[0]}</option>
                        {t.register.types.slice(1).map((x: string) => (
                          <option key={x}>{x}</option>
                        ))}
                      </select>
                    </label>
                  </div>
                  <label className="mt-5 block text-xs font-bold text-slate-600">
                    {t.register.fields.message}
                    <textarea
                      rows={4}
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none focus:border-royal focus:bg-white"
                    />
                  </label>
                  <button className="mt-6 flex items-center gap-3 rounded-full bg-royal px-7 py-4 text-xs font-extrabold uppercase tracking-wider text-white">
                    {t.register.button}
                    <ArrowRight size={16} />
                  </button>
                </>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
