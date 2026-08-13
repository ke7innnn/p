"use client";

import { motion } from "framer-motion";
import { Cpu, Zap, Code2, Layers, ShieldCheck, Activity } from "lucide-react";
import TiltCard from "./TiltCard";

const TECH_ITEMS = [
  {
    name: "NEXT.JS 16 & TURBOPACK",
    desc: "Sub-second server rendering, instant Turbopack compilation & zero CLS layout stability.",
    icon: Zap,
    metric: "0.18s FCP",
    color: "text-amber-400 border-amber-400/30 bg-amber-500/10"
  },
  {
    name: "GSAP SCROLLTRIGGER 3D",
    desc: "Precision timeline scrubbing, 3D viewport zoom sequences & GPU-accelerated pins.",
    icon: Layers,
    metric: "60 FPS SCRUB",
    color: "text-red-500 border-red-500/30 bg-red-500/10"
  },
  {
    name: "WEBGL & THREE.JS",
    desc: "Photorealistic 3D product renders, spatial canvas shaders & interactive lighting matrices.",
    icon: Cpu,
    metric: "WEBGL 2.0",
    color: "text-purple-400 border-purple-400/30 bg-purple-500/10"
  },
  {
    name: "TAILWIND CSS V4",
    desc: "Zero-runtime utility CSS, custom glassmorphism design tokens & responsive breakpoints.",
    icon: Code2,
    metric: "100% RESPONSIVE",
    color: "text-blue-400 border-blue-400/30 bg-blue-500/10"
  },
  {
    name: "SYNTHETIC AI MODELS",
    desc: "Custom diffusion pipelines for photorealistic 8K product campaign generation.",
    icon: Activity,
    metric: "8K CAMPAIGN",
    color: "text-emerald-400 border-emerald-400/30 bg-emerald-500/10"
  },
  {
    name: "ENTERPRISE SECURITY",
    desc: "Strict Content Security Policies, TLS 1.3 encryption & edge CDN deployment.",
    icon: ShieldCheck,
    metric: "A+ SECURITY",
    color: "text-yellow-400 border-yellow-400/30 bg-yellow-500/10"
  }
];

export default function TechStackGrid() {
  return (
    <section className="relative py-24 sm:py-32 w-full bg-[#030305] text-white overflow-hidden border-t border-white/10 z-20" id="tech-stack">
      
      <div className="max-w-[1500px] mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold text-xs uppercase tracking-[0.3em] mb-4">
            <Cpu className="w-4 h-4" /> ENGINEERING INFRASTRUCTURE
          </div>
          <h2 className="text-3xl sm:text-6xl font-heading-syne font-black uppercase tracking-tight text-white leading-tight">
            BUILT ON THE WORLD&apos;S MOST <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">
              ADVANCED STACK.
            </span>
          </h2>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECH_ITEMS.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <TiltCard key={idx} className="luxury-card p-8 rounded-3xl flex flex-col justify-between gap-6 group">
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-2xl border ${item.color} group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80">
                    {item.metric}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-heading-syne font-bold uppercase tracking-wide text-white group-hover:text-amber-400 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs font-sans-jakarta font-light text-white/60 leading-relaxed mt-2">
                    {item.desc}
                  </p>
                </div>
              </TiltCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}
