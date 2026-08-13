"use client";

import { useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function SoundToggle() {
  const [muted, setMuted] = useState(true);

  const toggleSound = () => {
    const nextState = !muted;
    setMuted(nextState);

    // Play subtle champagne chime SFX if enabling
    if (!nextState && typeof window !== "undefined") {
      try {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (AudioCtx) {
          const ctx = new AudioCtx();
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = "sine";
          osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5 note
          gain.gain.setValueAtTime(0.08, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start();
          osc.stop(ctx.currentTime + 0.3);
        }
      } catch {
        // Fallback guard
      }
    }
  };

  return (
    <button
      onClick={toggleSound}
      className="fixed bottom-6 left-6 z-[9980] p-3 rounded-full bg-[#0c0c12]/90 backdrop-blur-2xl border border-white/15 text-white/80 hover:text-amber-400 hover:border-amber-400/40 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.8)] cursor-pointer group flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase"
      aria-label="Toggle sound FX"
    >
      {muted ? (
        <>
          <VolumeX className="w-4 h-4 text-white/40 group-hover:text-amber-400 transition-colors" />
          <span className="hidden sm:inline text-white/40">SFX OFF</span>
        </>
      ) : (
        <>
          <Volume2 className="w-4 h-4 text-amber-400 animate-pulse" />
          <span className="hidden sm:inline text-amber-400 font-bold">SFX ON</span>
        </>
      )}
    </button>
  );
}
