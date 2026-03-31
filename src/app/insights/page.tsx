import type { Metadata } from "next";
import Image from "next/image";
import TextReveal from "@/components/animations/TextReveal";
import FadeIn from "@/components/animations/FadeIn";
import Marquee from "@/components/animations/Marquee";

/* ------------------------------------------------------------------ */
/*  Metadata                                                           */
/* ------------------------------------------------------------------ */
export const metadata: Metadata = {
  title: "Critical Insights | RZAK Financial Operations",
  description:
    "Understanding the invisible forces that shape financial sovereignty. Deep analysis of where money gets lost, vendor oversight, contracts, spending structure, and scaling financial systems.",
};

/* ------------------------------------------------------------------ */
/*  Image URLs                                                         */
/* ------------------------------------------------------------------ */
const FEATURE_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBIQ9nAqotX3wdq3sa_znRXLhZC6thih2Hd9Dg1PbmEu1J6N4EqRabeKy1eKmoHg5VKbMzTN0xZqe_y5k_Y-2GOLoufZhAc2xCpneZQPhGTue8aHFZwWQCCNibv7BOwDn10mOHMdxr5Z95L8PGDtGYe8smsUvVZH6Wm5KzYSHFslq82dFeB-aN4e8Q-oCo6KgVM6eTya2DeUQsC34d66H4aPa0QjQ4HSohroz3tHJ72_1S9TfiScpVj7fRIiUnoP7SKVwnQp8eaM0M";

/* ------------------------------------------------------------------ */
/*  Data ticker items                                                  */
/* ------------------------------------------------------------------ */
const tickerItems = [
  { icon: "emergency_share", label: "SYSTEM RISK: LOW" },
  { icon: "verified_user", label: "AUDIT COMPLIANCE: 100%" },
  { icon: "trending_up", label: "AVG LEAKAGE RECOVERY: 14.2%" },
];

/* ================================================================== */
/*  Insights Page                                                      */
/* ================================================================== */
export default function InsightsPage() {
  return (
    <>
      {/* ---------------------------------------------------------- */}
      {/* SECTION 1 : HERO                                            */}
      {/* ---------------------------------------------------------- */}
      <section className="max-w-[1440px] mx-auto px-12 pt-24 pb-0">
        <div className="grid grid-cols-12 gap-8 mb-24 items-end">
          <div className="col-span-12 md:col-span-8">
            <FadeIn>
              <span className="text-label-md text-secondary mb-4 block">
                Archive 2024
              </span>
            </FadeIn>

            <TextReveal
              as={"h1" as unknown as React.ElementType}
              className="text-display-lg text-primary mb-6"
            >
              Critical Insights
            </TextReveal>

            <FadeIn delay={0.3}>
              <p className="text-xl text-on-surface-variant max-w-2xl font-medium">
                Understanding the invisible forces that shape financial
                sovereignty.
              </p>
            </FadeIn>
          </div>

          <div className="col-span-12 md:col-span-4 hidden md:block">
            <FadeIn delay={0.4}>
              <div className="h-32 w-full bg-surface-container-low relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary to-transparent opacity-5" />
                <div className="p-6">
                  <div className="text-on-surface-variant text-sm font-semibold opacity-40">
                    RZAK INDEX // 04.24
                  </div>
                  <div className="text-2xl font-bold text-secondary mt-2">
                    +12.4% EFFICIENCY
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* SECTION 2 : BENTO GRID                                      */}
      {/* ---------------------------------------------------------- */}
      <section className="max-w-[1440px] mx-auto px-12 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Insight 1: Large Feature (7-col) */}
          <FadeIn className="md:col-span-7">
            <article className="bg-surface-container-low rounded-xl group cursor-pointer h-full card-lift">
              <div className="p-12 h-full flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <span className="text-label-md opacity-60">Insight 01</span>
                    <span className="material-symbols-outlined text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
                      north_east
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold font-display tracking-[-0.02em] mb-6 group-hover:text-secondary transition-colors">
                    Where Money Actually Gets Lost
                  </h2>
                  <p className="text-lg text-on-surface-variant leading-relaxed mb-8">
                    &lsquo;Most people think money disappears in big decisions. It
                    doesn&rsquo;t.&rsquo;
                  </p>
                </div>
                <div className="aspect-video w-full bg-surface-container-high overflow-hidden relative">
                  <Image
                    src={FEATURE_IMG}
                    alt="Close-up of geometric glass and steel skyscraper facade with strong vertical lines and neutral reflections"
                    fill
                    sizes="(max-width: 768px) 100vw, 58vw"
                    className="object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
              </div>
            </article>
          </FadeIn>

          {/* Insight 2: Dark card (5-col) */}
          <FadeIn className="md:col-span-5" delay={0.1}>
            <article className="bg-primary text-on-primary rounded-xl group cursor-pointer h-full card-lift">
              <div className="p-12 h-full flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-12">
                    <span className="text-label-md text-on-primary-container">
                      Insight 02
                    </span>
                    <span className="material-symbols-outlined text-secondary-fixed">
                      lock
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold font-display tracking-[-0.02em] mb-6">
                    Why Vendor Oversight Matters
                  </h2>
                  <p className="text-on-primary-container leading-relaxed">
                    &lsquo;Most vendors aren&rsquo;t aggressively overcharging.
                    They just know no one is checking.&rsquo;
                  </p>
                </div>
                <div className="mt-12 pt-8 border-t border-primary-container">
                  <button className="flex items-center text-secondary-fixed font-bold text-sm uppercase tracking-widest link-underline">
                    Read Report
                    <span className="material-symbols-outlined ml-2 text-xs">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
            </article>
          </FadeIn>

          {/* Insight 3: 4-col with green left border */}
          <FadeIn className="md:col-span-4" delay={0.15}>
            <article className="bg-surface-container-high rounded-xl group cursor-pointer border-l-4 border-secondary h-full card-lift">
              <div className="p-10">
                <div className="mb-6 text-label-md opacity-40">Insight 03</div>
                <h2 className="text-xl font-bold font-display tracking-[-0.02em] mb-4">
                  The Cost of Not Reviewing Contracts
                </h2>
                <p className="text-on-surface-variant mb-6 text-sm">
                  &lsquo;Most contracts don&rsquo;t fail in obvious ways. They
                  fail in the details.&rsquo;
                </p>
                <div className="flex items-center text-secondary font-bold text-xs uppercase tracking-widest link-underline group-hover:translate-x-2 transition-transform">
                  Explore Methodology
                </div>
              </div>
            </article>
          </FadeIn>

          {/* Insight 4: 4-col with progress bar */}
          <FadeIn className="md:col-span-4" delay={0.2}>
            <article className="bg-surface-container-low rounded-xl group cursor-pointer h-full card-lift">
              <div className="p-10 h-full flex flex-col">
                <div className="mb-6 text-label-md opacity-40">Insight 04</div>
                <h2 className="text-xl font-bold font-display tracking-[-0.02em] mb-4">
                  Spending Isn&rsquo;t the Problem
                </h2>
                <p className="text-on-surface-variant mb-8 text-sm flex-grow">
                  &lsquo;High earners don&rsquo;t have a spending problem. They
                  have a structure problem.&rsquo;
                </p>
                <div className="h-1 w-full bg-surface-container-highest">
                  <div className="h-full bg-secondary w-2/3" />
                </div>
              </div>
            </article>
          </FadeIn>

          {/* Insight 5: 4-col with background icon */}
          <FadeIn className="md:col-span-4" delay={0.25}>
            <article className="bg-surface-container-high rounded-xl group cursor-pointer relative overflow-hidden h-full card-lift">
              <div className="absolute right-[-20%] bottom-[-10%] opacity-5 scale-150">
                <span className="material-symbols-outlined text-[12rem]">
                  account_tree
                </span>
              </div>
              <div className="p-10 relative z-10">
                <div className="mb-6 text-label-md opacity-40">Insight 05</div>
                <h2 className="text-xl font-bold font-display tracking-[-0.02em] mb-4">
                  Why Financial Systems Break at Scale
                </h2>
                <p className="text-on-surface-variant mb-6 text-sm">
                  &lsquo;What works at one level doesn&rsquo;t work at the
                  next.&rsquo;
                </p>
                <div className="flex items-center text-primary font-bold text-xs uppercase tracking-widest link-underline">
                  View System Audit
                </div>
              </div>
            </article>
          </FadeIn>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* SECTION 3 : NEWSLETTER / ANALYSIS FORM                      */}
      {/* ---------------------------------------------------------- */}
      <section className="max-w-[1440px] mx-auto px-12">
        <FadeIn>
          <div className="p-16 bg-primary-container text-on-primary rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold font-display tracking-[-0.02em] mb-4">
                  Request Discrete Analysis
                </h3>
                <p className="text-on-primary-container max-w-md">
                  Our insights are just the surface. For a comprehensive audit of
                  your financial operations, connect with our architecture team.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Professional Email"
                  className="bg-primary text-on-primary border-none border-b-2 border-outline focus:border-secondary focus:ring-0 px-4 py-3 flex-grow"
                />
                <button className="btn-primary px-8 py-3 font-bold">
                  Submit Request
                </button>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* SECTION 4 : DATA TICKER STRIP                                */}
      {/* ---------------------------------------------------------- */}
      <div className="mt-32 bg-primary-container text-white py-4 border-y border-white/5">
        <Marquee>
          <div className="flex">
            {tickerItems.map((item) => (
              <span
                key={item.label}
                className="mx-8 font-bold text-sm tracking-widest flex items-center"
              >
                <span className="material-symbols-outlined text-secondary mr-2 text-xs">
                  {item.icon}
                </span>
                {item.label}
              </span>
            ))}
          </div>
        </Marquee>
      </div>
    </>
  );
}
