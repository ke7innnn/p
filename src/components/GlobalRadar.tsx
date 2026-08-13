"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Globe, Clock, Radio } from "lucide-react";

const CITIES = [
  { name: "MUMBAI (HQ)", tz: "Asia/Kolkata", status: "ACTIVE COMMISSIONS" },
  { name: "NEW YORK", tz: "America/New_York", status: "COMMERCIAL LAUNCH" },
  { name: "LONDON", tz: "Europe/London", status: "BRAND STRATEGY" },
  { name: "DUBAI", tz: "Asia/Dubai", status: "AI CAMPAIGN" },
  { name: "TOKYO", tz: "Asia/Tokyo", status: "DIGITAL DEPLOYMENT" },
];

export default function GlobalRadar() {
  const [times, setTimes] = useState<Record<string, string>>({});

  useEffect(() => {
    const updateTimes = () => {
      const newTimes: Record<string, string> = {};
      CITIES.forEach((city) => {
        try {
          newTimes[city.name] = new Date().toLocaleTimeString("en-US", {
            timeZone: city.tz,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
          });
        } catch {
          newTimes[city.name] = "12:00 PM";
        }
      });
      setTimes(newTimes);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 w-full bg-[#040406] text-white border-t border-white/10 z-20 overflow-hidden" id="global-radar">
      
      <div className="max-w-[1500px] mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-12 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <Radio className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-white/50">LIVE GLOBAL AGENCY RADAR</h3>
              <div className="text-xl sm:text-2xl font-heading-syne font-black uppercase text-white">SYSTEMS ONLINE &amp; DEPLOYING</div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/40 px-4 py-2 rounded-full border border-emerald-500/30">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>GLOBAL NETWORK RUNNING 24/7</span>
          </div>
        </div>

        {/* Global Cities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-8">
          {CITIES.map((city, idx) => (
            <div
              key={idx}
              className="luxury-card p-5 rounded-2xl flex flex-col justify-between gap-4 border-white/10 hover:border-amber-400/40 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-heading-syne font-extrabold tracking-wider text-white group-hover:text-amber-400 transition-colors">
                  {city.name}
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>

              <div>
                <div className="text-2xl font-mono font-bold text-amber-400">
                  {times[city.name] || "--:--"}
                </div>
                <div className="text-[10px] font-mono tracking-widest text-white/40 uppercase mt-1">
                  {city.status}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
