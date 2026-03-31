"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/what-we-do", label: "What We Do" },
  { href: "/how-we-work", label: "How We Work" },
  { href: "/who-we-work-with", label: "Who We Work With" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-stone-50/80 backdrop-blur-xl shadow-sm">
      <div className="flex justify-between items-center w-full px-8 py-4 max-w-7xl mx-auto">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-zinc-900">RZAK</Link>
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link key={link.href} href={link.href}
                className={`font-semibold transition-colors duration-300 ${
                  isActive ? "text-emerald-800 border-b-2 border-emerald-800 pb-1" : "text-zinc-600 hover:text-zinc-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        <Link href="/contact" className="hidden md:block bg-secondary text-on-secondary px-6 py-2 font-semibold hover:opacity-90 transition-all">
          Consultation
        </Link>
        <button className="md:hidden text-primary" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          <span className="material-symbols-outlined">{mobileOpen ? "close" : "menu"}</span>
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-surface border-t border-outline-variant/20 px-8 py-8 space-y-6">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
              className={`block font-semibold ${pathname === link.href ? "text-emerald-800" : "text-zinc-600"}`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setMobileOpen(false)}
            className="block bg-secondary text-on-secondary px-6 py-2 font-semibold text-center"
          >
            Consultation
          </Link>
        </div>
      )}
    </nav>
  );
}
