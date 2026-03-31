"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  duration?: number;
  delay?: number;
  stagger?: number;
  as?: React.ElementType;
}

export default function FadeIn({ children, className = "", direction = "up", distance = 60, duration = 1, delay = 0, stagger = 0, as: Tag = "div" }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const axis = direction === "up" || direction === "down" ? "y" : "x";
    const value = direction === "up" || direction === "left" ? distance : -distance;
    const targets = stagger > 0 ? el.children : el;
    gsap.set(targets, { [axis]: value, opacity: 0 });
    const anim = gsap.to(targets, { [axis]: 0, opacity: 1, duration, delay, stagger: stagger > 0 ? stagger : undefined, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 85%", once: true } });
    return () => { anim.kill(); };
  }, [direction, distance, duration, delay, stagger]);
  return <Tag ref={ref as React.Ref<any>} className={className}>{children}</Tag>;
}
