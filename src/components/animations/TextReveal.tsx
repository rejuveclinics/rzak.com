"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface TextRevealProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  delay?: number;
  duration?: number;
  stagger?: number;
  trigger?: boolean;
}

export default function TextReveal({ children, className = "", as: Tag = "div", delay = 0, duration = 1.2, stagger = 0.08, trigger = true }: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const lines = el.querySelectorAll(".reveal-line");
    if (lines.length === 0) {
      gsap.set(el, { y: 60, opacity: 0 });
      const anim = gsap.to(el, { y: 0, opacity: 1, duration, delay, ease: "power4.out", scrollTrigger: trigger ? { trigger: el, start: "top 85%", once: true } : undefined });
      return () => { anim.kill(); };
    }
    gsap.set(lines, { y: "100%", opacity: 0 });
    const anim = gsap.to(lines, { y: "0%", opacity: 1, duration, stagger, delay, ease: "power4.out", scrollTrigger: trigger ? { trigger: el, start: "top 85%", once: true } : undefined });
    return () => { anim.kill(); };
  }, [delay, duration, stagger, trigger]);
  return <Tag ref={containerRef as React.Ref<any>} className={className}>{children}</Tag>;
}
