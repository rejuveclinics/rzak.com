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
  const isHome = pathname === "/";

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isHome
        ? "bg-transparent backdrop-blur-none"
        : "bg-surface/80 backdrop-blur-2xl shadow-sm"
    }`}>
      <div className="flex justify-between items-center w-full px-8 py-5 max-w-7xl mx-auto">
        <Link href="/" className={`text-2xl font-black tracking-tighter transition-colors duration-300 ${
          isHome ? "text-white" : "text-primary"
        }`}>
          RZAK
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link key={link.href} href={link.href}
                className={`text-sm font-medium transition-all duration-300 link-underline ${
                  isActive
                    ? `${isHome ? "text-white" : "text-secondary"} after:!w-full after:!bg-secondary`
                    : `${isHome ? "text-white/70 hover:text-white" : "text-on-surface-variant hover:text-primary"}`
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        <Link href="/contact" className={`hidden md:block btn-primary text-sm ${
          isHome ? "!bg-secondary-container !text-on-secondary-container" : ""
        }`}>
          Get Started
        </Link>
        <button
          className={`md:hidden ${isHome ? "text-white" : "text-primary"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-2xl">{mobileOpen ? "close" : "menu"}</span>
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-surface/95 backdrop-blur-2xl border-t border-outline-variant/10 px-8 py-8 space-y-6">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
              className={`block font-medium ${pathname === link.href ? "text-secondary" : "text-on-surface-variant"}`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setMobileOpen(false)}
            className="block btn-primary text-center text-sm"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}
