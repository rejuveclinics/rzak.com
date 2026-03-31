import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TextReveal from "@/components/animations/TextReveal";
import FadeIn from "@/components/animations/FadeIn";

/* ------------------------------------------------------------------ */
/*  Metadata                                                           */
/* ------------------------------------------------------------------ */
export const metadata: Metadata = {
  title: "What We Do | RZAK Financial Operations",
  description:
    "Precision operational oversight. We track, control, execute, protect, and grow your financial operations with institutional-grade discipline.",
};

/* ------------------------------------------------------------------ */
/*  Image URLs                                                         */
/* ------------------------------------------------------------------ */
const HERO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA40y0fLF39Pjj8ChYcejR4rgefBnbZyrVqUUlo1zoYKeDDXYeekQ9oMRPgyWb1Sg7Iltab1ZLqKvBjqET7jG1D5-hUenMfjBls0C0Tmzy4RAtiqQM_df-xHZ7IahPCoSN0vgWgCDvR6PC47SZiKoLnHDU_kugMLvsx8R5PUrkrXyWO9Hidf5E5oRMgkQYabDMZxTfh2pr4d0SBUJtU5yjcpS5NN85dpYkIrc8uznXPwbNen6lTSE97d7p-nFFiJfseHmN05UAiglw";

/* ------------------------------------------------------------------ */
/*  Growth bullet items                                                */
/* ------------------------------------------------------------------ */
const growthItems = [
  { icon: "arrow_downward", label: "Reducing unnecessary spend" },
  { icon: "handshake", label: "Restructuring vendor relationships" },
  { icon: "trending_up", label: "Identifying better financial decisions" },
  { icon: "lightbulb", label: "Surfacing new investment opportunities" },
];

/* ================================================================== */
/*  What We Do Page                                                    */
/* ================================================================== */
export default function WhatWeDoPage() {
  return (
    <>
      {/* ---------------------------------------------------------- */}
      {/* HERO SECTION                                                */}
      {/* ---------------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-8 mb-24 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <FadeIn>
              <span className="text-label-md text-secondary tracking-[0.2em] mb-6 block">
                Our Mandate
              </span>
            </FadeIn>
            <TextReveal
              as={"h1" as unknown as React.ElementType}
              className="text-5xl md:text-7xl font-bold font-display text-primary tracking-tight leading-[1.1] mb-8"
              delay={0.1}
            >
              <span className="reveal-line block">
                Precision Operational Oversight.
              </span>
            </TextReveal>
          </div>
          <div className="lg:col-span-4 pb-2">
            <FadeIn delay={0.2}>
              <p className="text-xl text-on-surface-variant leading-relaxed font-body">
                Most financial issues don&rsquo;t come from lack of income. They
                come from lack of visibility, structure, and follow-through.
              </p>
            </FadeIn>
          </div>
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-16 relative overflow-hidden rounded-xl aspect-[21/9]">
            <Image
              src={HERO_IMG}
              alt="Monolithic modern architecture with sharp glass and steel angles against a clear sky, symbolizing structure and precision oversight"
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
            <div className="absolute bottom-12 left-12 right-12 flex flex-col md:flex-row justify-between items-end gap-6">
              <p className="text-white text-2xl font-light max-w-2xl">
                At the same time, most people are leaving money on the table
                because no one is looking for better ways to operate.{" "}
                <span className="font-bold text-secondary-container">
                  We handle both.
                </span>
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* SERVICES BENTO GRID                                         */}
      {/* ---------------------------------------------------------- */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Oversight — 7 col */}
            <FadeIn className="md:col-span-7 bg-surface p-12 rounded-xl flex flex-col justify-between group card-lift transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-black/5">
              <div>
                <span className="material-symbols-outlined text-4xl text-secondary mb-8 block">
                  visibility
                </span>
                <h3 className="text-3xl font-bold font-display mb-6 text-primary tracking-tight">
                  Oversight
                </h3>
                <p className="text-lg text-on-surface-variant leading-relaxed max-w-xl">
                  We track where money is actually going across vendors,
                  expenses, and operations. Most loss doesn&rsquo;t come from
                  one bad decision. It comes from things no one is checking.
                </p>
              </div>
              <div className="mt-12 flex items-center gap-2 text-secondary font-bold link-underline">
                <span>Audit &amp; Surveillance</span>
                <span className="material-symbols-outlined">
                  arrow_forward
                </span>
              </div>
            </FadeIn>

            {/* Control — 5 col dark */}
            <FadeIn
              className="md:col-span-5 bg-primary-container p-12 rounded-xl text-white card-lift"
              delay={0.1}
            >
              <span className="material-symbols-outlined text-4xl text-secondary-container mb-8 block">
                tune
              </span>
              <h3 className="text-3xl font-bold font-display mb-6 tracking-tight">
                Control
              </h3>
              <p className="text-lg text-on-primary-container leading-relaxed">
                We implement systems that prevent unnecessary spend and
                eliminate inefficiencies. Without structure, money moves fast
                and without clarity.
              </p>
            </FadeIn>

            {/* Execution — 4 col */}
            <FadeIn
              className="md:col-span-4 bg-surface p-10 rounded-xl flex flex-col gap-6 card-lift"
              delay={0.15}
            >
              <div className="w-12 h-12 bg-surface-container-high rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">
                  terminal
                </span>
              </div>
              <h3 className="text-2xl font-bold font-display text-primary tracking-tight">
                Execution
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                We manage bill pay, vendors, and day-to-day financial
                operations. Things don&rsquo;t stall. Things don&rsquo;t get
                missed.
              </p>
            </FadeIn>

            {/* Protection — 4 col */}
            <FadeIn
              className="md:col-span-4 bg-surface p-10 rounded-xl flex flex-col gap-6 card-lift"
              delay={0.2}
            >
              <div className="w-12 h-12 bg-surface-container-high rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">
                  gavel
                </span>
              </div>
              <h3 className="text-2xl font-bold font-display text-primary tracking-tight">
                Protection
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                We review contracts, structure deals, and ensure nothing is
                signed blindly. One overlooked clause can cost millions.
              </p>
            </FadeIn>

            {/* Green texture — 4 col */}
            <FadeIn
              className="md:col-span-4 bg-secondary p-1 relative overflow-hidden rounded-xl"
              delay={0.25}
            >
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
              <div className="h-full w-full border border-white/10 rounded-lg flex items-center justify-center min-h-[200px]">
                <span className="text-on-secondary font-black tracking-widest text-4xl opacity-10">
                  OPERATIONS
                </span>
              </div>
            </FadeIn>

            {/* Growth — 12 col signature */}
            <FadeIn
              className="md:col-span-12 mt-6 bg-surface-container-highest border-l-[8px] border-secondary p-16 rounded-xl relative overflow-hidden"
              delay={0.1}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
                <div>
                  <span className="text-label-md text-secondary tracking-[0.2em] mb-4 block">
                    Strategic Upside
                  </span>
                  <h3 className="text-4xl font-bold font-display mb-8 text-primary tracking-tight">
                    Growth &amp; Optimization
                  </h3>
                  <p className="text-xl text-on-surface-variant leading-relaxed">
                    We identify ways to improve how money is being used. This
                    is where most of the upside is. Most people never see it.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                  {growthItems.map((item) => (
                    <div key={item.icon} className="flex gap-4">
                      <span className="material-symbols-outlined text-secondary">
                        {item.icon}
                      </span>
                      <p className="font-medium text-primary">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Abstract Background Detail */}
              <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-secondary-container/10 rounded-full blur-[100px]" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* CTA SECTION                                                 */}
      {/* ---------------------------------------------------------- */}
      <section className="py-24 max-w-7xl mx-auto px-8">
        <FadeIn>
          <div className="bg-primary text-white p-16 rounded-xl flex flex-col md:flex-row justify-between items-center gap-12 relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl font-bold font-display mb-6 leading-tight">
                Ready to institutionalize your personal operations?
              </h2>
              <p className="text-on-primary-container text-lg">
                Schedule a private consultation to review your current
                financial structure and identify immediate optimizations.
              </p>
            </div>
            <Link
              href="/contact"
              className="relative z-10 btn-accent px-10 py-5 rounded-lg font-bold text-lg"
            >
              Inquire About Onboarding
            </Link>
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-gradient-to-l from-secondary to-transparent" />
          </div>
        </FadeIn>
      </section>
    </>
  );
}
