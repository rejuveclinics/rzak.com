import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TextReveal from "@/components/animations/TextReveal";
import FadeIn from "@/components/animations/FadeIn";
import Marquee from "@/components/animations/Marquee";

/* ------------------------------------------------------------------ */
/*  Metadata                                                           */
/* ------------------------------------------------------------------ */
export const metadata: Metadata = {
  title: "Who We Work With | RZAK Financial Operations",
  description:
    "We serve as the primary architect for complex financial lives. Founders, public figures, operators, and high-income individuals trust RZAK for institutional-grade oversight.",
};

/* ------------------------------------------------------------------ */
/*  Image URLs                                                         */
/* ------------------------------------------------------------------ */
const FOUNDERS_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCXbdympOcOlZXkwNhGMDCyN-67_wXxbWM5agk6QTuET3bBx7F22t9xTctqU3HbD-Tt8-1Bi5toOok8905zEz3WJeqtpQ6ceC_7i-6Dm_IL9p8upcJ87QQwXOEmK_Nb-Qowqdb6DbQsgv4SwE_5JAI5hmXTeZF7pm8-6A2OysdjDQHvtCyzJ4ffnb33Tu8-78UL89t1ms_VPa4BiE1AnfdzhWFeRyordOKTLDZIYsLzpsAUeXqSm8pjagFaBvFCJbYpdsD6_KapLUg";

const HIGH_INCOME_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCF3bwJsqt82eOQdsDJM4zpGAysnxW-Frt-13I8nGY8bM1_UCkHz5-2a4_BDWyM6CkW5dAh8QNt-38jeE2houMgvB3G5eq90WvJ85eX7-M0L9-zFW0IEY82CplMQjct7TqIITOLJzC4zJCiBiO7OKb5z0p7N8QwTfH-DNEZ8xUM60mpKjZSE2yNm31SdTX2Bjh9wyyH0TP-d0K4b8BQzTESsI-Yob8wJFsiZDrH7VQ5nkakp9rkanBQddt2sqQZkgSZaSpan9F_C6Y";

/* ================================================================== */
/*  Who We Work With Page                                              */
/* ================================================================== */
export default function WhoWeWorkWithPage() {
  return (
    <>
      {/* ---------------------------------------------------------- */}
      {/* HERO SECTION                                                */}
      {/* ---------------------------------------------------------- */}
      <header className="max-w-7xl mx-auto px-4 sm:px-8 pt-10 md:pt-20 pb-8 md:pb-16">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-8 lg:col-span-7">
            <FadeIn>
              <span className="text-label-md text-secondary tracking-[0.2em] mb-6 block uppercase font-bold text-xs">
                Architectural Oversight
              </span>
            </FadeIn>
            <TextReveal
              as={"h1" as unknown as React.ElementType}
              className="text-[3.5rem] leading-[1.1] font-bold font-display tracking-[-0.04em] text-primary mb-8"
              delay={0.1}
            >
              <span className="reveal-line block">Who We Work With</span>
            </TextReveal>
            <FadeIn delay={0.2}>
              <p className="text-xl text-on-surface-variant font-medium max-w-2xl leading-relaxed">
                If things feel disorganized behind the scenes, this is where we
                come in. We serve as the primary architect for complex financial
                lives.
              </p>
            </FadeIn>
          </div>
        </div>
      </header>

      {/* ---------------------------------------------------------- */}
      {/* CLIENT BENTO GRID                                           */}
      {/* ---------------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 pb-12 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Category 1: Founders — 7 col */}
          <FadeIn className="md:col-span-7 bg-surface-container-low p-6 md:p-12 rounded-xl flex flex-col justify-between group card-lift overflow-hidden relative">
            <div className="relative z-10">
              <span className="material-symbols-outlined text-secondary mb-6 text-3xl">
                account_balance
              </span>
              <h3 className="text-2xl font-semibold font-display tracking-tight mb-4">
                Founders managing multiple entities
              </h3>
              <p className="text-on-surface-variant leading-relaxed max-w-md">
                For those with intricate cap tables, holding companies, and
                cross-border ventures. We provide the operational layer that
                unifies disparate balance sheets into a single, actionable view.
              </p>
            </div>
            <div className="mt-12 relative z-10">
              <button className="flex items-center text-primary font-bold text-sm uppercase tracking-wider link-underline group-hover:text-secondary transition-colors">
                Case Study{" "}
                <span className="material-symbols-outlined ml-2 text-sm">
                  arrow_forward
                </span>
              </button>
            </div>
            <div className="absolute right-0 bottom-0 w-1/2 opacity-10 group-hover:opacity-20 transition-opacity">
              <Image
                src={FOUNDERS_IMG}
                alt="Abstract architectural lines and geometric concrete structures with strong shadows and clean minimalist aesthetic"
                width={400}
                height={256}
                className="object-cover h-64 w-full grayscale"
              />
            </div>
          </FadeIn>

          {/* Category 2: Public Figures — 5 col dark */}
          <FadeIn
            className="md:col-span-5 bg-primary p-6 md:p-12 rounded-xl text-on-primary flex flex-col justify-between card-lift"
            delay={0.1}
          >
            <div>
              <span className="material-symbols-outlined text-secondary-fixed mb-6 text-3xl">
                visibility
              </span>
              <h3 className="text-2xl font-semibold font-display tracking-tight mb-4">
                Public figures with complex financial lives
              </h3>
              <p className="text-primary-fixed-dim leading-relaxed">
                Managing celebrity and public influence requires a unique blend
                of discretion and rigorous oversight. We handle the noise so you
                can focus on your legacy.
              </p>
            </div>
            <div className="mt-12">
              <button className="btn-accent px-6 py-3 font-bold text-xs uppercase tracking-widest">
                Inquire Privately
              </button>
            </div>
          </FadeIn>

          {/* Category 3: Operators — 5 col */}
          <FadeIn
            className="md:col-span-5 bg-surface-container p-6 md:p-12 rounded-xl flex flex-col justify-between card-lift"
            delay={0.15}
          >
            <div>
              <span className="material-symbols-outlined text-secondary mb-6 text-3xl">
                analytics
              </span>
              <h3 className="text-2xl font-semibold font-display tracking-tight mb-4">
                Operators handling high-volume spend
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                Optimizing cash flow and managing high-velocity capital calls. We
                act as the technical infrastructure that ensures no efficiency is
                lost in the friction of operations.
              </p>
            </div>
            <div className="mt-12">
              <div className="h-1 w-12 bg-secondary mb-4" />
              <p className="text-xs font-bold uppercase tracking-widest text-secondary">
                Operational Excellence
              </p>
            </div>
          </FadeIn>

          {/* Category 4: High-Income Individuals — 7 col with image */}
          <FadeIn
            className="md:col-span-7 bg-surface-container-high p-6 md:p-12 rounded-xl flex flex-col md:flex-row gap-8 items-center card-lift"
            delay={0.2}
          >
            <div className="flex-1">
              <span className="material-symbols-outlined text-secondary mb-6 text-3xl">
                monitoring
              </span>
              <h3 className="text-2xl font-semibold font-display tracking-tight mb-4">
                High-income individuals without real oversight
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                Wealth creation often outpaces the systems meant to track it. We
                step in to organize, validate, and protect the assets
                you&rsquo;ve built, providing the institutional-grade reporting
                you lack.
              </p>
              <button className="mt-8 text-secondary font-bold text-sm link-underline">
                View Our Audit Process
              </button>
            </div>
            <div className="w-full md:w-1/3 aspect-[3/4] bg-primary overflow-hidden relative">
              <Image
                src={HIGH_INCOME_IMG}
                alt="Sophisticated minimalist indoor staircase with dramatic architectural lighting and clean stone textures"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover grayscale opacity-80"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* MARQUEE INSIGHT STRIP                                       */}
      {/* ---------------------------------------------------------- */}
      <Marquee className="bg-primary-container text-on-primary py-4 border-y border-outline-variant/10">
        <span className="text-xs font-bold tracking-[0.3em] uppercase px-8 opacity-60">
          Strategic Sovereignty
        </span>
        <span className="text-xs font-bold tracking-[0.3em] uppercase px-8 opacity-60">
          Institutional Discipline
        </span>
        <span className="text-xs font-bold tracking-[0.3em] uppercase px-8 opacity-60">
          Discreet Management
        </span>
        <span className="text-xs font-bold tracking-[0.3em] uppercase px-8 opacity-60">
          Operational Integrity
        </span>
        <span className="text-xs font-bold tracking-[0.3em] uppercase px-8 opacity-60">
          Sovereign Architecture
        </span>
        <span className="text-xs font-bold tracking-[0.3em] uppercase px-8 opacity-60">
          Strategic Sovereignty
        </span>
      </Marquee>

      {/* ---------------------------------------------------------- */}
      {/* BOTTOM CTA / EDITORIAL SECTION                              */}
      {/* ---------------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-16 md:py-32">
        <FadeIn>
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between border-t border-surface-container-highest pt-12 gap-8 md:gap-0">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold font-display text-primary tracking-tighter mb-6 leading-tight">
                We are the backbone for the modern sovereign.
              </h2>
              <p className="text-lg text-on-surface-variant">
                Our clients don&rsquo;t just want wealth management; they want a
                financial operating system that scales with their ambition.
              </p>
            </div>
            <div className="mt-0">
              <Link
                href="/contact"
                className="inline-flex items-center btn-primary px-10 py-5 font-bold tracking-widest text-xs uppercase"
              >
                Apply for an Audit
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
