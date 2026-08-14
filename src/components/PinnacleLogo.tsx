"use client";

import React from "react";

interface PinnacleLogoProps {
  variant?: "icon" | "full" | "horizontal";
  className?: string;
  iconClassName?: string;
  textClassName?: string;
  size?: number;
}

/**
 * Official Pinnacle Studios Mountain Peak "P" Logo
 * Sharp luxury mountain silhouette with integrated "P" initial
 */
export function PinnacleLogoMark({ className = "w-8 h-8 text-[#FF5E62]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 120"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Pinnacle Studios Mountain Logo"
    >
      {/* Mountain Ridge Peaks with Embedded 'P' Cutout */}
      <path
        d="
          M 100 15
          L 116 42
          L 110 42
          C 122 42 128 50 128 62
          C 128 75 118 82 104 82
          L 104 95
          L 92 95
          L 92 38
          L 80 58
          L 70 45
          L 55 68
          L 42 55
          L 15 95
          L 40 95
          L 52 78
          L 68 95
          L 82 95
          L 82 82
          L 82 72
          L 92 72
          L 92 28
          L 100 15 Z

          M 104 52
          L 104 70
          C 112 70 116 66 116 61
          C 116 56 112 52 104 52 Z

          M 124 55
          L 142 82
          L 130 82
          L 148 95
          L 185 95
          L 152 62
          L 138 72
          L 124 55 Z
        "
      />
    </svg>
  );
}

export default function PinnacleLogo({
  variant = "full",
  className = "",
  iconClassName = "w-10 h-10 text-white",
  textClassName = "",
}: PinnacleLogoProps) {
  if (variant === "icon") {
    return <PinnacleLogoMark className={iconClassName} />;
  }

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      {/* Mountain Peak Icon */}
      <PinnacleLogoMark className={iconClassName} />

      {/* Typography: PINNACLE STUDIOS */}
      <div className={`flex flex-col items-center text-center mt-2 ${textClassName}`}>
        <span className="font-heading-syne font-black uppercase tracking-[0.25em] text-lg sm:text-xl leading-none text-white">
          PINNACLE
        </span>
        <span className="font-sans-jakarta font-light uppercase tracking-[0.45em] text-[10px] sm:text-xs text-white/70 leading-tight mt-1">
          STUDIOS
        </span>
      </div>
    </div>
  );
}
