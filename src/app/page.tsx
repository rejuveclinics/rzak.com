import Image from "next/image";
import Link from "next/link";
import TextReveal from "@/components/animations/TextReveal";
import FadeIn from "@/components/animations/FadeIn";

/* ------------------------------------------------------------------ */
/*  Image URLs                                                         */
/* ------------------------------------------------------------------ */
const HERO_BG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBSXsHsqRIgGmh-OCqlOe8YvE-D34PPPuk6Uabw0dXohJeFVxQD1UKEF8VFpi5bli65ZDyGH29HhCkthIzhPWt4LuPdOXb_Zv58b-bl6USOn6VbvvBtCpSvvHy4A_5v6xbJUGREZtgrUCyOIN_54q2pmVbzszDBZUYEuvrdVDJjDb3CUNyCyA8J9nqDAlnrYQGlc5gvLiFujkUOgEDqLhY5FDaYfSzm8MR8JxRPIUI1K_bYMAHRjVMgCQXz4Iqm8eVm52-7IIuuvgo";

const PROBLEM_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD49-Lm57j8wNZIITvJst-nRRWLZd9xdU4mOpMyQRJVZOeB1DmlodbuykMQX81kdAnhhxWPT5zjycUKmR0XStLk18WF40VeQg6NHfOEO-nsl8Wepz3jiMHpFGrFJ3cJ_kx0b7IImlebefoqCGkN3BFgdt2NCeFnls8okse-xcYFyJYJJNyVimCEbDsZ3G6ks2E9X_G1sIMAx5c-wM-zSkFWV-k-zVhCyWK7jLjxxUcjunSyhXoA1BL0gK4kShCQ-qpgMNp88DA9x0A";

const INSIGHT_IMGS = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDma1lyJDU-IYPkaA5Qjxc9YZ3YP9ahkhibhp0wlQM2acCaTqNLzHp4W6t1ORULYTPzw56ujkN0Rsguxng5PHe3nz5HE1Yh5_Y4ZzLzmqGr4t6NbNuvYRLrTeAt2mhAk67QP2-j-758sMKiI2VTDJR90sXRY2PzbEoi-rMnbjy89cjwt8Qb0tPi4Q_M4a8694jR8jyEEM4DQ_1ugaAGJNd4zRhvwLkhtCsWgrr-yzvTs9SVK1g26UpIXVojwjfOLeg2ZUrWDu9a-Vc",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAxfd9yFOZnAAFFe6q2GfgmrVZJvFpljKPgBdaty1H-AMNj2VJNxvmlwA7gdYsN2bY17iEQQL0UVTYIpWAasHwEuVU_qJ-gMcXN719memnkElY2TVLdt34FjK1viGZIWsZj4m1gl6Cc2ascyePwudzL7qriu4scRZIeshma5p6Wy1QfV1C7e10JjJV0XBZNv83R7jN0v74UFkCThJHuitw5KF61tBC9zLzohFUhBau-X8r93_apmwHMzQdqcqpKErsUNrEs9PtLa6c",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCOxNIV4Xftw1GuY5G9VysTQAROWNhuRuiis6RydHYQqQLbYX_bZ1MSt6WutAlsOjxS1RVlhVRMqEzrqV1JtLn5eKjfo0GPR-pApsl6FehjmciukWAdqvEE81LyIv_Gtotnep68WbmPAqqpMxMkjGk5DBLAAbUCyCuw8KAB3ZyYGrosWPTnRnFECxp6tB5J0RI3WvcIJs0xxfay4EIWeoqiiTPu2k4ddbhvsbhhTUmOCHGhK4WPQmY4Cjzr35QMyE0DRPwvGXOHBzU",
];

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */
const capabilities = [
  {
    icon: "visibility",
    title: "Oversight",
    desc: "We track where money is actually going, identifying hidden costs and patterns.",
  },
  {
    icon: "settings_input_component",
    title: "Control",
    desc: "We implement structure so spending is intentional and aligned with objectives.",
  },
  {
    icon: "bolt",
    title: "Execution",
    desc: "We manage the day-to-day operations so nothing slips through the cracks.",
  },
  {
    icon: "shield",
    title: "Protection",
    desc: "We review contracts and prevent costly mistakes before they are finalized.",
  },
  {
    icon: "trending_up",
    title: "Growth",
    desc: "We identify opportunities to save, optimize, and generate more revenue.",
  },
];

const phases = [
  {
    num: "01",
    title: "Assess",
    desc: "A deep diagnostic of your current financial architecture and vendor landscape.",
  },
  {
    num: "02",
    title: "Build",
    desc: "Implementing the protocols, controls, and reporting systems needed for total clarity.",
  },
  {
    num: "03",
    title: "Run",
    desc: "Active daily management and oversight by our expert operational team.",
  },
];

const insights = [
  {
    img: INSIGHT_IMGS[0],
    alt: "Macro photography of precision watch gears showing intricate details and craftsmanship",
    title: "Where Money Actually Gets Lost",
    desc: "Identifying the silent eroders of capital in complex family office structures.",
  },
  {
    img: INSIGHT_IMGS[1],
    alt: "Modern office lobby with clean lines and marble surfaces reflecting high-end professional atmosphere",
    title: "Why Vendor Oversight Matters",
    desc: "The compounding cost of unmanaged service level agreements.",
  },
  {
    img: INSIGHT_IMGS[2],
    alt: "Close-up of a fountain pen and a high-quality paper document with elegant typography and deep shadows",
    title: "The Cost of Not Reviewing Contracts",
    desc: "Risk mitigation and leverage lost during standard procurement cycles.",
  },
];

/* ================================================================== */
/*  Home Page                                                          */
/* ================================================================== */
export default function Home() {
  return (
    <>
      {/* ---------------------------------------------------------- */}
      {/* SECTION 1 : HERO                                            */}
      {/* ---------------------------------------------------------- */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden -mt-16">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-transparent z-10" />
          <Image
            src={HERO_BG}
            alt="Cinematic wide shot of a modern brutalist concrete building with sharp angles and dramatic shadows at twilight"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-8 grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 md:col-span-7 lg:col-span-8">
            <FadeIn delay={0.1}>
              <span className="text-secondary-fixed text-label-md mb-6 block">
                Sovereign Financial Oversight
              </span>
            </FadeIn>

            <TextReveal
              as={"h1" as unknown as React.ElementType}
              className="text-display-lg text-on-primary mb-8 max-w-4xl"
              trigger={false}
              delay={0.2}
            >
              <span className="reveal-line block">
                Most money isn&apos;t lost
              </span>
              <span className="reveal-line block">
                in big decisions. It&apos;s lost in
              </span>
              <span className="reveal-line block">
                the details no one is watching.
              </span>
            </TextReveal>

            <FadeIn delay={0.6}>
              <p className="text-xl text-on-primary-container mb-10 max-w-2xl leading-relaxed">
                RZAK builds and runs the systems, vendors, and financial
                operations behind high-income individuals and multi-entity
                businesses. We protect it, manage it, and make it work harder.
              </p>
            </FadeIn>

            <FadeIn delay={0.8}>
              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                <Link
                  href="/contact"
                  className="btn-primary px-8 py-4 text-lg flex items-center gap-2"
                >
                  Contact Us
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </Link>
                <span className="text-on-primary text-lg border-l-2 border-secondary pl-6 italic">
                  We don&rsquo;t just advise. We do the work.
                </span>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* SECTION 2 : PROBLEM                                         */}
      {/* ---------------------------------------------------------- */}
      <section className="py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-12 gap-12 items-start">
          <div className="col-span-12 md:col-span-5">
            <FadeIn>
              <h2 className="text-headline-lg text-primary sticky top-32 font-display">
                The invisible erosion of high-stakes capital.
              </h2>
            </FadeIn>
          </div>

          <div className="col-span-12 md:col-span-7">
            <FadeIn>
              <p className="text-2xl leading-relaxed text-on-surface-variant font-light">
                Most people assume their finances are being handled correctly. In
                reality, things slip through constantly:{" "}
                <span className="text-primary font-medium">
                  vendors overbilling, contracts signed without full review,
                  expenses compounding unnoticed, teams operating without
                  accountability.
                </span>
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="text-2xl leading-relaxed text-on-surface-variant mt-8 font-light">
                Nothing breaks at once. It builds quietly. Then it becomes
                expensive. And while that&rsquo;s happening, opportunities are
                missed. We fix the leaks and the missed upside.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="mt-16 h-[400px] relative overflow-hidden group">
                <Image
                  src={PROBLEM_IMG}
                  alt="Abstract architectural shot of interlocking glass and steel panels with high contrast lighting and deep shadows"
                  fill
                  sizes="(max-width: 768px) 100vw, 58vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/20" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* SECTION 3 : CORE CAPABILITIES                                */}
      {/* ---------------------------------------------------------- */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-8">
          <FadeIn>
            <div className="flex justify-between items-end mb-20">
              <div className="max-w-2xl">
                <span className="text-label-md text-secondary block mb-4">
                  Core Capabilities
                </span>
                <h2 className="text-headline-lg text-primary font-display">
                  Strategic Financial Infrastructure
                </h2>
              </div>
              <Link
                href="/what-we-do"
                className="text-primary font-bold link-underline underline-offset-8 transition-all flex items-center gap-2 mb-2"
              >
                Learn more
                <span className="material-symbols-outlined">east</span>
              </Link>
            </div>
          </FadeIn>

          <FadeIn stagger={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Oversight — large card */}
              <div className="md:col-span-7 bg-surface-container-low p-12 rounded-xl card-lift group">
                <span className="material-symbols-outlined text-secondary text-3xl mb-8 block">visibility</span>
                <h3 className="text-2xl font-bold tracking-tight mb-4 font-display">Oversight</h3>
                <p className="text-on-surface-variant leading-relaxed max-w-xl">
                  We track where money is actually going, identifying hidden costs and patterns across your entire financial landscape.
                </p>
              </div>
              {/* Control — dark card */}
              <div className="md:col-span-5 bg-primary-container p-12 rounded-xl text-on-primary card-lift">
                <span className="material-symbols-outlined text-secondary-container text-3xl mb-8 block">settings_input_component</span>
                <h3 className="text-2xl font-bold tracking-tight mb-4 font-display">Control</h3>
                <p className="text-on-primary-container leading-relaxed">
                  We implement structure so spending is intentional and aligned with objectives.
                </p>
              </div>
              {/* Execution */}
              <div className="md:col-span-4 bg-surface-container p-10 rounded-xl card-lift">
                <div className="w-12 h-12 bg-surface-container-high rounded-lg flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary">bolt</span>
                </div>
                <h3 className="text-xl font-bold tracking-tight mb-3 font-display">Execution</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  We manage the day-to-day operations so nothing slips through the cracks.
                </p>
              </div>
              {/* Protection */}
              <div className="md:col-span-4 bg-surface-container p-10 rounded-xl card-lift">
                <div className="w-12 h-12 bg-surface-container-high rounded-lg flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary">shield</span>
                </div>
                <h3 className="text-xl font-bold tracking-tight mb-3 font-display">Protection</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  We review contracts and prevent costly mistakes before they are finalized.
                </p>
              </div>
              {/* Growth — accent card */}
              <div className="md:col-span-4 bg-secondary p-10 rounded-xl text-on-secondary card-lift relative overflow-hidden">
                <div className="relative z-10">
                  <span className="material-symbols-outlined text-3xl mb-8 block opacity-90">trending_up</span>
                  <h3 className="text-xl font-bold tracking-tight mb-3 font-display">Growth</h3>
                  <p className="text-on-secondary/80 text-sm leading-relaxed">
                    We identify opportunities to save, optimize, and generate more revenue.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* SECTION 4 : HOW WE WORK PREVIEW                             */}
      {/* ---------------------------------------------------------- */}
      <section className="py-32 bg-primary-container text-on-primary">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-12 gap-12">
            <div className="col-span-12 lg:col-span-4">
              <FadeIn>
                <h2 className="text-headline-lg mb-8 font-display">
                  Architecting and running your ecosystem.
                </h2>
                <p className="text-on-primary-container text-lg mb-12">
                  We step in, structure things properly, and manage them ongoing.
                  Not just to keep things clean but to make them better.
                </p>
                <Link
                  href="/how-we-work"
                  className="inline-flex items-center gap-3 text-secondary-fixed font-bold link-underline hover:gap-5 transition-all"
                >
                  How we work
                  <span className="material-symbols-outlined">
                    arrow_right_alt
                  </span>
                </Link>
              </FadeIn>
            </div>

            <FadeIn
              className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8"
              stagger={0.12}
            >
              {phases.map((phase) => (
                <div
                  key={phase.num}
                  className="bg-primary p-10 rounded-xl relative overflow-hidden"
                >
                  <span className="text-6xl font-black text-white/5 absolute -top-4 -right-4">
                    {phase.num}
                  </span>
                  <h4 className="text-xl font-bold mb-6 text-secondary-fixed">
                    {phase.title}
                  </h4>
                  <p className="text-on-primary-container leading-relaxed">
                    {phase.desc}
                  </p>
                </div>
              ))}
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* SECTION 5 : INSIGHTS PREVIEW                                 */}
      {/* ---------------------------------------------------------- */}
      <section className="py-32 bg-surface-container-high/30">
        <div className="max-w-7xl mx-auto px-8">
          <FadeIn>
            <div className="flex justify-between items-center mb-16">
              <h2 className="text-headline-lg text-primary font-display">
                Critical Insights
              </h2>
              <Link
                href="/insights"
                className="text-primary font-bold link-underline underline-offset-8 transition-all"
              >
                View all insights
              </Link>
            </div>
          </FadeIn>

          <FadeIn stagger={0.12}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Featured insight */}
              <div className="md:col-span-7 bg-surface-container-low rounded-xl group cursor-pointer card-lift">
                <div className="h-72 overflow-hidden relative">
                  <Image
                    src={insights[0].img}
                    alt={insights[0].alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 58vw"
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <div className="p-10">
                  <span className="text-label-md text-on-surface-variant/50 block mb-3">Insight 01</span>
                  <h3 className="text-2xl font-bold tracking-tight group-hover:text-secondary transition-colors font-display mb-3">
                    {insights[0].title}
                  </h3>
                  <p className="text-on-surface-variant leading-relaxed">{insights[0].desc}</p>
                </div>
              </div>
              {/* Dark insight */}
              <div className="md:col-span-5 bg-primary text-on-primary rounded-xl group cursor-pointer card-lift flex flex-col justify-between p-10">
                <div>
                  <span className="text-label-md text-on-primary-container block mb-8">Insight 02</span>
                  <h3 className="text-2xl font-bold tracking-tight group-hover:text-secondary-fixed transition-colors font-display mb-4">
                    {insights[1].title}
                  </h3>
                  <p className="text-on-primary-container leading-relaxed">{insights[1].desc}</p>
                </div>
                <div className="mt-10 pt-6 border-t border-white/10">
                  <span className="text-secondary-fixed font-bold text-sm uppercase tracking-widest">Read Report</span>
                </div>
              </div>
              {/* Third insight — accent border */}
              <div className="md:col-span-12 bg-surface-container-high border-l-4 border-secondary rounded-xl p-10 group cursor-pointer card-lift flex items-center gap-12">
                <div className="flex-1">
                  <span className="text-label-md text-on-surface-variant/50 block mb-3">Insight 03</span>
                  <h3 className="text-xl font-bold tracking-tight group-hover:text-secondary transition-colors font-display mb-2">
                    {insights[2].title}
                  </h3>
                  <p className="text-on-surface-variant text-sm">{insights[2].desc}</p>
                </div>
                <span className="material-symbols-outlined text-secondary text-2xl hidden md:block">arrow_forward</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* SECTION 6 : CONTACT CTA                                      */}
      {/* ---------------------------------------------------------- */}
      <section className="py-32 bg-primary rounded-xl">
        <div className="max-w-7xl mx-auto px-8 flex flex-col items-center text-center">
          <FadeIn>
            <h2 className="text-display-lg text-on-primary mb-8 max-w-4xl">
              Ready to secure your financial infrastructure?
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-xl text-on-primary-container mb-12 max-w-2xl">
              RZAK offers professional, high-touch financial operations for
              those who value discretion and excellence.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <Link
              href="/contact"
              className="btn-accent px-12 py-5 text-xl flex items-center gap-3"
            >
              Get in touch
              <span className="material-symbols-outlined">mail</span>
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
