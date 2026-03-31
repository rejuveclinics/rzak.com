"use client";
export default function Marquee({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div className="flex animate-marquee">
        {children}
        {children}
      </div>
    </div>
  );
}
