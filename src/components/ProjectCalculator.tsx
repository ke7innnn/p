"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, CheckCircle2, ArrowUpRight, Sparkles, Layers } from "lucide-react";
import TiltCard from "./TiltCard";

const SERVICES = [
  { id: "web", name: "Next.js Web Systems", basePrice: 4500, time: "3 Weeks" },
  { id: "ai", name: "AI Product Photography", basePrice: 2800, time: "1 Week" },
  { id: "brand", name: "Luxury Brand Identity", basePrice: 3200, time: "2 Weeks" },
  { id: "cgi", name: "3D CGI Commercial Film", basePrice: 5500, time: "3 Weeks" },
];

export default function ProjectCalculator({ onOpenContact }: { onOpenContact: () => void }) {
  const [selectedServices, setSelectedServices] = useState<string[]>(["web"]);
  const [timeline, setTimeline] = useState<"express" | "standard" | "enterprise">("standard");
  const [monthlyScale, setMonthlyScale] = useState<number>(50);

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? (prev.length > 1 ? prev.filter((s) => s != id) : prev) : [...prev, id]
    );
  };

  const totalPrice = selectedServices.reduce((sum, id) => {
    const service = SERVICES.find((s) => s.id === id);
    return sum + (service ? service.basePrice : 0);
  }, 0) * (timeline === "express" ? 1.3 : timeline === "enterprise" ? 1.5 : 1);

  return (
    <section className="relative py-24 sm:py-32 w-full bg-[#030305] text-white overflow-hidden border-t border-white/10 z-20" id="calculator">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1500px] mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold text-xs uppercase tracking-[0.3em] mb-4">
            <Calculator className="w-4 h-4" /> INTERACTIVE ESTIMATOR
          </div>
          <h2 className="text-3xl sm:text-6xl font-heading-syne font-black uppercase tracking-tight text-white leading-tight">
            ESTIMATE YOUR <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">
              PROJECT INVESTMENT.
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/70 font-sans-jakarta font-light">
            Select your required capabilities and project timeline to calculate estimated deliverables and launch timeline.
          </p>
        </div>

        {/* Interactive Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Controls */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            
            {/* Service Selectors */}
            <div>
              <h3 className="text-xs uppercase tracking-widest text-white/50 font-bold mb-4 flex items-center gap-2">
                <Layers className="w-4 h-4 text-amber-400" /> SELECT CAPABILITIES
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SERVICES.map((s) => {
                  const isSelected = selectedServices.includes(s.id);
                  return (
                    <div
                      key={s.id}
                      onClick={() => toggleService(s.id)}
                      className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? "bg-amber-500/15 border-amber-400 text-white shadow-[0_0_25px_rgba(255,159,28,0.2)]"
                          : "bg-white/[0.03] border-white/10 text-white/70 hover:bg-white/[0.08]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className={`w-5 h-5 ${isSelected ? "text-amber-400" : "text-white/20"}`} />
                        <div>
                          <div className="text-sm font-extrabold font-heading-syne uppercase">{s.name}</div>
                          <div className="text-[10px] text-white/40 font-mono uppercase mt-0.5">{s.time} TURNAROUND</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Timeline Multiplier */}
            <div>
              <h3 className="text-xs uppercase tracking-widest text-white/50 font-bold mb-4">PROJECT TIMELINE SPEED</h3>
              <div className="grid grid-cols-3 gap-3">
                {(["express", "standard", "enterprise"] as const).map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setTimeline(mode)}
                    className={`py-3.5 px-4 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all border ${
                      timeline === mode
                        ? "bg-white text-black border-white shadow-lg"
                        : "bg-white/[0.04] border-white/10 text-white/60 hover:bg-white/10"
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>

            {/* Monthly Visitor Scale Slider */}
            <div>
              <div className="flex justify-between items-center text-xs uppercase tracking-widest font-bold mb-2">
                <span className="text-white/50">TARGET AUDIENCE SCALE</span>
                <span className="text-amber-400">{monthlyScale}K+ VISITORS/MO</span>
              </div>
              <input
                type="range"
                min="10"
                max="500"
                step="10"
                value={monthlyScale}
                onChange={(e) => setMonthlyScale(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
            </div>

          </div>

          {/* Right Summary Card */}
          <div className="lg:col-span-5">
            <TiltCard className="luxury-card p-8 rounded-3xl flex flex-col gap-6 border-amber-500/30">
              
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-white/40">ESTIMATED PROPOSAL</span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              </div>

              <div>
                <div className="text-xs text-white/50 uppercase tracking-widest font-bold">ESTIMATED INVESTMENT RANGE</div>
                <div className="text-4xl sm:text-5xl font-heading-syne font-black text-amber-400 mt-2">
                  ${Math.round(totalPrice).toLocaleString()} <span className="text-sm font-sans-jakarta font-normal text-white/50">USD</span>
                </div>
              </div>

              <div className="space-y-3 pt-2 border-t border-white/10 text-xs text-white/70 font-sans-jakarta">
                <div className="flex justify-between">
                  <span className="text-white/40">Included Services</span>
                  <span className="font-bold text-white">{selectedServices.length} Selected</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/40">Est. Delivery</span>
                  <span className="font-bold text-amber-400">
                    {timeline === "express" ? "2 Weeks Express" : timeline === "enterprise" ? "6-8 Weeks Enterprise" : "3-4 Weeks"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/40">Performance Target</span>
                  <span className="font-bold text-white">99.8% Speed Benchmark</span>
                </div>
              </div>

              <button
                onClick={onOpenContact}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-400 hover:from-amber-400 hover:to-orange-400 text-black font-sans-jakarta font-black text-xs uppercase tracking-widest transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(255,159,28,0.4)] flex items-center justify-center gap-2 mt-4"
              >
                <span>REQUEST DETAILED PROPOSAL</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

            </TiltCard>
          </div>

        </div>

      </div>
    </section>
  );
}
