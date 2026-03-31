import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TextReveal from "@/components/animations/TextReveal";
import FadeIn from "@/components/animations/FadeIn";

/* ------------------------------------------------------------------ */
/*  Metadata                                                           */
/* ------------------------------------------------------------------ */
export const metadata: Metadata = {
  title: "How We Work | RZAK Financial Operations",
  description:
    "We re-engineer financial operations through a three-phase framework: Assess, Build, Run. From chaos to structured growth with clarity and control.",
};

/* ------------------------------------------------------------------ */
/*  Image URLs                                                         */
/* ------------------------------------------------------------------ */
const HERO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBp9HOJ4Qprmrkcj-01c3gypWE77D3l3x4rtLWxnH2UYe5sXMWisA5A_d4Gnc8qcDOOr7e8dLz5cESMN_k6_Lia1itjJpZnkb0FVEjg28oFfq2CJQreAtzOfkNun_bOxN4KM_tngL3u7ThlMsp8u-p4JJ8JPHy0g-2T3vyoSjZPbh5gqAIV6aUh4GPwyIie2ouxZReVeNJO8K35MY03RHrPQNdRvBIm68Vqv6QJTczIpIRQVMWQgRqG5zx4yGMnqyiZ0jRjvJlhX6Q";

const RESULTS_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAiFGDi_g-FRF24TWtKOu_wPI9MzbpQTQ2fyK4LwWnCAKC2qgyOXfYtTUAgTdc1ENxL0pTs1rpVyz9xMJrFuTuXhciiDaX18a_75n4MitxQJ-nnfUWVXLuar7DvNSwiy-ujZa3HsAvem8A98yqzSTUcr-NXj0KxF2AzzwQlIe8ohYME5AT8TMfPY2HmoMX46tqwkFciYwm4qrLrMvZEdVv4SFazCO8jTBJeclLRUsFhVgfWKD0fmpeUJtgz0_dWyvqttLFBZqEeE-s";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */
const phases = [
  {
    num: "01",
    icon: "troubleshoot",
    title: "Assess",
    desc: "We review your current structure, vendors, and financial flow. We identify: where money is leaking, where things are inefficient, where opportunities are being missed.",
    items: ["Vendor Contract Audits", "Leakage Detection", "Cash-Flow Mapping"],
  },
  {
    num: "02",
    icon: "architecture",
    title: "Build",
    desc: "We implement systems, controls, and accountability. Everything becomes clear, structured, and trackable.",
    items: [
      "Reporting Infrastructure",
      "Operational Controls",
      "Accountability Maps",
    ],
  },
  {
    num: "03",
    icon: "monitoring",
    title: "Run",
    desc: "We manage it ongoing. Not just to maintain it. To make it better over time. Continuous optimization is our standard.",
    items: [
      "Monthly Oversight",
      "Performance Iteration",
      "Strategic Tuning",
    ],
  },
];

const resultsItems = [
  {
    title: "Eliminate Friction",
    desc: "We remove the administrative and logistical hurdles that prevent partners from focusing on core growth.",
    highlight: true,
  },
  {
    title: "Deep Transparency",
    desc: "Real-time data visualization and clear reporting lines mean no more guessing on financial health.",
    highlight: false,
  },
  {
    title: "Sustainable Scale",
    desc: "Processes that grow with you, ensuring the foundation remains solid regardless of volume.",
    highlight: false,
  },
];

/* ================================================================== */
/*  How We Work Page                                                   */
/* ================================================================== */
export default function HowWeWorkPage() {
  return (
    <>
      {/* ---------------------------------------------------------- */}
      {/* HERO SECTION                                                */}
      {/* ---------------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-7">
            <FadeIn>
              <span className="text-label-md text-secondary tracking-[0.2em] block mb-4">
                Our Methodology
              </span>
            </FadeIn>
            <TextReveal
              as={"h1" as unknown as React.ElementType}
              className="text-6xl font-bold font-display tracking-tighter text-primary leading-tight mb-8"
              delay={0.1}
            >
              <span className="reveal-line block">
                The Architecture of
              </span>
              <span className="reveal-line block text-secondary">
                Financial Sovereignty
              </span>
              <span className="reveal-line block">.</span>
            </TextReveal>
            <FadeIn delay={0.3}>
              <p className="text-xl text-on-surface-variant leading-relaxed max-w-xl">
                We don&rsquo;t just advise. We re-engineer. Our process is
                designed for clarity, moving from chaos to structured growth
                through a three-phase operational framework.
              </p>
            </FadeIn>
          </div>

          <div className="hidden md:block col-span-5 relative">
            <FadeIn delay={0.2} direction="right">
              <div className="relative">
                <div className="absolute inset-0 bg-surface-container-high translate-x-8 translate-y-8 -z-10" />
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={HERO_IMG}
                    alt="High-angle architectural view of a modern glass skyscraper reflecting the sky with sharp geometric lines and deep shadows"
                    fill
                    sizes="(max-width: 768px) 100vw, 42vw"
                    className="object-cover grayscale contrast-125"
                    priority
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* PROCESS STRIP (BENTO STYLE)                                 */}
      {/* ---------------------------------------------------------- */}
      <section className="bg-primary-container py-24 text-on-primary">
        <div className="max-w-7xl mx-auto px-8">
          <FadeIn
            className="grid grid-cols-1 md:grid-cols-3 gap-1"
            stagger={0.12}
          >
            {phases.map((phase, i) => (
              <div
                key={phase.num}
                className={`bg-primary-container p-12 rounded-xl group card-lift hover:bg-zinc-900 transition-all duration-500${
                  i < phases.length - 1
                    ? " border-r border-zinc-800"
                    : ""
                }`}
              >
                <div className="flex items-center justify-between mb-16">
                  <span className="text-5xl font-black text-zinc-800 group-hover:text-secondary transition-colors">
                    {phase.num}
                  </span>
                  <span className="material-symbols-outlined text-secondary-container text-4xl">
                    {phase.icon}
                  </span>
                </div>
                <h3 className="text-3xl font-bold font-display mb-6 tracking-tight">
                  {phase.title}
                </h3>
                <p className="text-on-primary-container text-lg leading-relaxed mb-8">
                  {phase.desc}
                </p>
                <div className="space-y-4">
                  {phase.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm font-medium"
                    >
                      <span className="material-symbols-outlined text-secondary text-base">
                        check_circle
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* EDITORIAL QUOTE SECTION                                     */}
      {/* ---------------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-8 py-32">
        <FadeIn>
          <div className="bg-surface-container-low p-16 rounded-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-10">
              <span className="material-symbols-outlined text-[120px]">
                format_quote
              </span>
            </div>
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-4xl font-bold font-display tracking-tight text-primary mb-12 leading-snug">
                &ldquo;Financial operational excellence isn&rsquo;t a one-time
                event; it&rsquo;s a structural discipline that allows
                high-growth entities to scale without losing control.&rdquo;
              </h2>
              <div className="flex items-center gap-6">
                <div className="w-12 h-px bg-secondary" />
                <span className="font-bold text-sm tracking-widest uppercase">
                  The RZAK Philosophy
                </span>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* RESULTS ENGINEERING SPLIT LAYOUT                            */}
      {/* ---------------------------------------------------------- */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
              <FadeIn>
                <h2 className="text-4xl font-bold font-display tracking-tighter mb-8">
                  Results-Focused Engineering
                </h2>
              </FadeIn>
              <FadeIn delay={0.1} className="space-y-8">
                {resultsItems.map((item) => (
                  <div
                    key={item.title}
                    className={`border-l-4 pl-8 py-4 rounded-lg transition-colors${
                      item.highlight
                        ? " border-secondary-container bg-surface-container-low"
                        : " border-surface-container-high hover:border-secondary"
                    }`}
                  >
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-on-surface-variant">{item.desc}</p>
                  </div>
                ))}
              </FadeIn>
            </div>
            <div className="w-full md:w-1/2">
              <FadeIn delay={0.2} direction="right">
                <div className="h-[500px] bg-zinc-900 p-1">
                  <div className="relative w-full h-full">
                    <Image
                      src={RESULTS_IMG}
                      alt="Abstract digital visualization of complex data networks with glowing green nodes and interconnected lines on a dark background"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover opacity-80"
                    />
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* FINAL CTA                                                   */}
      {/* ---------------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-8 py-32 text-center">
        <FadeIn>
          <h2 className="text-5xl font-black font-display tracking-tighter mb-8">
            Ready to stabilize your growth?
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-on-surface-variant text-xl mb-12 max-w-2xl mx-auto">
            Our consultation process is discreet, comprehensive, and designed to
            identify immediate wins within 48 hours.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-primary px-12 py-5 font-bold tracking-tight text-lg"
            >
              Book Operational Audit
            </Link>
            <button className="btn-accent px-12 py-5 font-bold tracking-tight text-lg">
              Download Methodology PDF
            </button>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
