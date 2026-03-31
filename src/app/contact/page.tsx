import type { Metadata } from "next";
import Image from "next/image";
import TextReveal from "@/components/animations/TextReveal";
import FadeIn from "@/components/animations/FadeIn";

/* ------------------------------------------------------------------ */
/*  Metadata                                                           */
/* ------------------------------------------------------------------ */
export const metadata: Metadata = {
  title: "Contact | RZAK Financial Operations",
  description:
    "Start a confidential conversation about your financial infrastructure. Our partners engage directly with select high-income individuals and family offices.",
};

/* ------------------------------------------------------------------ */
/*  Image URLs                                                         */
/* ------------------------------------------------------------------ */
const ARCHITECTURE_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB-Fl7mHhjAOVG7c8cxUR-hzxdU5RUVGAiEqQ6On422G1melJqYdC5E0t1o-sn86titRmeP2Yq0Y0GBxQu8YOxei3MDYmh93CPQtiGGEZouDdPUvlQetgBWEvrnLIYgJqkprXvvhvDVN4gWSgdVyfcxtGGmI3QXfww5J1FuF61rJa51XgiZ2AgdncIMrEayfqS8SW66B3_rBLs_935b8ojF_ic8IK87FG2P0oBn3nFR6i5s6iHijlfElALXaKR0fFkw-UeMtX5vRSQ";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */
const offices = [
  { city: "ZURICH", label: "Operations Center" },
  { city: "SINGAPORE", label: "Regional Hub" },
  { city: "LONDON", label: "Strategic Liaison" },
  { city: "NEW YORK", label: "Advisory Desk" },
];

/* ================================================================== */
/*  Contact Page                                                       */
/* ================================================================== */
export default function ContactPage() {
  return (
    <>
      {/* ---------------------------------------------------------- */}
      {/* SECTION 1 : HERO SPLIT                                      */}
      {/* ---------------------------------------------------------- */}
      <section className="max-w-[1440px] mx-auto px-8 md:px-12 py-24 grid grid-cols-12 gap-12">
        {/* Left column */}
        <div className="col-span-12 md:col-span-7">
          <FadeIn>
            <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-6 block">
              Direct Access
            </span>
          </FadeIn>

          <TextReveal as="h1" className="text-[3.5rem] font-bold tracking-[-0.02em] leading-[1.1] text-primary mb-8">
            Discreet Consultation
          </TextReveal>

          <FadeIn delay={0.2}>
            <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed">
              Start a confidential conversation about your financial
              infrastructure. Our partners engage directly with select
              high-income individuals and family offices.
            </p>
          </FadeIn>

          <div className="mt-16 space-y-12">
            <FadeIn delay={0.3}>
              <div className="group">
                <p className="text-on-surface-variant opacity-60 uppercase tracking-widest text-sm mb-2">
                  Primary Liaison
                </p>
                <a
                  className="text-2xl font-semibold text-primary hover:text-secondary transition-colors underline decoration-outline-variant underline-offset-8 decoration-1 hover:decoration-secondary"
                  href="mailto:inquiries@rzak.com"
                >
                  inquiries@rzak.com
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="p-8 bg-surface-container-low rounded-lg border-l-4 border-secondary max-w-md">
                <div className="flex items-start gap-4">
                  <span
                    className="material-symbols-outlined text-secondary mt-1"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    lock
                  </span>
                  <div>
                    <h4 className="font-bold text-primary mb-1">
                      Encrypted Channels
                    </h4>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      All communications are handled through secure,
                      high-encryption protocols. We respect the absolute
                      sovereignty of your financial data.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Right column — form */}
        <div className="col-span-12 md:col-span-5 flex flex-col justify-center">
          <FadeIn delay={0.3} direction="right">
            <div className="bg-surface-container-lowest p-10 shadow-[0_20px_40px_rgba(28,28,25,0.06)] rounded-lg">
              <form className="space-y-8">
                <div className="relative">
                  <label
                    className="text-primary font-bold uppercase tracking-wider block mb-2 text-sm"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="w-full bg-transparent border-0 border-b border-outline-variant/40 focus:ring-0 focus:border-secondary transition-all py-3 px-0 placeholder:text-outline"
                    id="name"
                    placeholder="Full Legal Name"
                    type="text"
                  />
                </div>

                <div className="relative">
                  <label
                    className="text-primary font-bold uppercase tracking-wider block mb-2 text-sm"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="w-full bg-transparent border-0 border-b border-outline-variant/40 focus:ring-0 focus:border-secondary transition-all py-3 px-0 placeholder:text-outline"
                    id="email"
                    placeholder="direct@address.com"
                    type="email"
                  />
                </div>

                <div className="relative">
                  <label
                    className="text-primary font-bold uppercase tracking-wider block mb-2 text-sm"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className="w-full bg-transparent border-0 border-b border-outline-variant/40 focus:ring-0 focus:border-secondary transition-all py-3 px-0 placeholder:text-outline resize-none"
                    id="message"
                    placeholder="Brief overview of your requirements"
                    rows={4}
                  />
                </div>

                <button
                  className="w-full bg-secondary text-on-secondary py-5 font-bold tracking-tight text-lg rounded-lg hover:opacity-90 active:scale-[0.98] transition-all flex justify-center items-center gap-2"
                  type="submit"
                >
                  Initialize Protocol
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* SECTION 2 : FULL-BLEED IMAGE                                */}
      {/* ---------------------------------------------------------- */}
      <section className="w-full h-[500px] relative overflow-hidden">
        <Image
          src={ARCHITECTURE_IMG}
          alt="Monochrome architectural detail of a modern steel and glass skyscraper with sharp lines and high contrast shadows"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-40" />
        <div className="absolute bottom-12 left-12">
          <FadeIn>
            <div className="bg-primary-container text-on-primary p-6 inline-block">
              <p className="font-headline font-bold text-2xl tracking-tight">
                Built for Sovereignty.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* SECTION 3 : GLOBAL PRESENCE STRIP                           */}
      {/* ---------------------------------------------------------- */}
      <section className="bg-primary-container py-12">
        <FadeIn
          className="max-w-[1440px] mx-auto px-8 md:px-12 flex flex-wrap justify-between items-center gap-8"
          stagger={0.1}
        >
          {offices.map((office) => (
            <div key={office.city} className="flex flex-col">
              <span className="text-secondary-fixed font-bold tracking-widest text-sm">
                {office.city}
              </span>
              <span className="text-on-primary text-sm opacity-60">
                {office.label}
              </span>
            </div>
          ))}
        </FadeIn>
      </section>
    </>
  );
}
