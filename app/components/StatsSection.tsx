"use client";

import { useState, useEffect, useRef } from "react";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="stat-number">
      {count}{suffix}
    </div>
  );
}

export default function StatsSection() {
  const stats = [
    { number: 30, suffix: "+", label: "NBFCs Optimized Across India" },
    { number: 98, suffix: "%", label: "Process Automation Rate" },
    { number: 50, suffix: "%", label: "Faster Loan Disbursal Turnaround" },
  ];

  return (
    <section className="stats-section" id="about">
      <div className="stats-container">
        <h2 className="stats-heading">
          POWERING FINTECH WITH SCALABLE FINANCIAL OPERATIONS
        </h2>
        <p className="stats-description">
          At EcoPlanet, we simplify growth for fintechs and NBFCs through 
          automation, compliance, and secure operations — purpose-built 
          for modern lending institutions.
        </p>
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <div key={i} className="stat-item">
              <AnimatedCounter target={stat.number} suffix={stat.suffix} />
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
