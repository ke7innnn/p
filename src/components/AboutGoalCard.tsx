"use client";

import React from "react";
import { PinnacleLogoMark } from "./PinnacleLogo";

interface AboutGoalCardProps {
  className?: string;
}

/**
 * Hardcoded 1:1 Design Component for "We actually care for your digital goals"
 * Based on user reference graphic:
 * - Left side: Golden amber radial glow + "pinnacle studios" brand title + headline statement.
 * - Center: Metallic curved arch separator.
 * - Right side: Pure black section with white mountain peak "P" logo mark.
 */
export default function AboutGoalCard({ className = "" }: AboutGoalCardProps) {
  return (
    <div
      className={`relative w-full rounded-3xl sm:rounded-[36px] overflow-hidden bg-black text-white border border-white/15 shadow-[0_25px_70px_rgba(0,0,0,0.9)] flex flex-col md:flex-row items-stretch select-none ${className}`}
    >
      {/* LEFT PANEL: Golden Amber Radial Glow & Text */}
      <div className="relative flex-1 p-8 sm:p-12 md:p-14 flex flex-col justify-between overflow-hidden bg-black z-10 min-h-[320px] sm:min-h-[380px]">
        
        {/* Warm Golden Amber Background Radial Glow (Pixel-perfect match to reference) */}
        <div
          className="absolute -top-[30%] -left-[20%] w-[130%] h-[160%] pointer-events-none transform-gpu"
          style={{
            background:
              "radial-gradient(ellipse at 15% 35%, rgba(225, 140, 10, 0.95) 0%, rgba(180, 100, 5, 0.6) 30%, rgba(90, 45, 0, 0.3) 55%, rgba(0, 0, 0, 0) 80%)",
          }}
        />

        {/* Small Brand Header Tag: pinnacle studios */}
        <div className="relative z-20 font-sans-jakarta font-extrabold text-lg sm:text-2xl tracking-tight text-white/95">
          pinnacle studios
        </div>

        {/* Main Headline Statement: We actually care for your digital goals */}
        <h3 className="relative z-20 text-3xl sm:text-5xl lg:text-6xl font-sans-jakarta font-normal leading-[1.1] text-white tracking-tight max-w-lg mt-8 mb-2">
          We actually <br />
          care for your <br />
          digital goals
        </h3>

        {/* Metallic Glass Curved Arch Separator (Right border of left panel) */}
        <div className="hidden md:block absolute top-0 bottom-0 right-0 w-[120px] pointer-events-none overflow-hidden">
          <div className="absolute top-[-20%] bottom-[-20%] right-0 w-[240px] rounded-l-full border-l border-white/40 bg-gradient-to-r from-transparent via-white/5 to-transparent shadow-[inset_10px_0_20px_rgba(255,255,255,0.1)]" />
        </div>
      </div>

      {/* RIGHT PANEL: Pure Black with Central White Mountain Peak 'P' Logo */}
      <div className="relative w-full md:w-[40%] bg-black p-8 sm:p-12 flex items-center justify-center border-t md:border-t-0 md:border-l border-white/10 z-10 min-h-[200px] sm:min-h-[260px]">
        {/* Subtle Ambient Backlight for Logo */}
        <div className="absolute w-40 h-40 rounded-full bg-white/5 blur-3xl pointer-events-none" />

        {/* White Pinnacle Mountain Peak 'P' Logo Mark */}
        <PinnacleLogoMark className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 text-white drop-shadow-[0_10px_30px_rgba(255,255,255,0.15)] relative z-20" />
      </div>
    </div>
  );
}
