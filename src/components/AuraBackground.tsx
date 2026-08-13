"use client";

import { useEffect, useRef, useState } from "react";

export default function AuraBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLowPower, setIsLowPower] = useState(false);

  useEffect(() => {
    // Detect mobile or low concurrency devices for ultra-smooth performance
    const isMobile = window.innerWidth < 768;
    const isLowConcurrency = typeof navigator !== "undefined" && navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;
    const prefersReducedMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isMobile || isLowConcurrency || prefersReducedMotion) {
      setIsLowPower(true);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    const updateSize = () => {
      if (!canvas) return;
      const targetWidth = Math.min(window.innerWidth, 800);
      const scale = targetWidth / window.innerWidth;
      width = canvas.width = Math.floor(window.innerWidth * scale);
      height = canvas.height = Math.floor(window.innerHeight * scale);
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    // Muted Luxury Aurora Nodes
    const nodes = [
      { x: width * 0.2, y: height * 0.3, vx: 0.3, vy: 0.2, radius: 450, color: "rgba(229, 149, 0, " },
      { x: width * 0.8, y: height * 0.7, vx: -0.2, vy: -0.3, radius: 550, color: "rgba(180, 40, 45, " },
      { x: width * 0.5, y: height * 0.5, vx: 0.2, vy: -0.2, radius: 500, color: "rgba(110, 50, 160, " },
      { x: width * 0.3, y: height * 0.8, vx: -0.3, vy: 0.2, radius: 400, color: "rgba(200, 80, 40, " },
      { x: width * 0.7, y: height * 0.2, vx: 0.2, vy: 0.4, radius: 480, color: "rgba(212, 175, 55, " },
    ];

    let time = 0;

    const render = () => {
      time += 0.005;

      ctx.fillStyle = "#030305";
      ctx.fillRect(0, 0, width, height);

      nodes.forEach((node, i) => {
        node.x += Math.sin(time + i) * 0.5 + node.vx;
        node.y += Math.cos(time + i * 1.5) * 0.5 + node.vy;

        if (node.x < -100 || node.x > width + 100) node.vx *= -1;
        if (node.y < -100 || node.y > height + 100) node.vy *= -1;

        const pulseOpacity = 0.12 + Math.sin(time * 1.2 + i) * 0.03;

        const gradient = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          node.radius
        );

        gradient.addColorStop(0, `${node.color}${pulseOpacity})`);
        gradient.addColorStop(0.5, `${node.color}${pulseOpacity * 0.3})`);
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", updateSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none transform-gpu">
      
      {/* 1. HTML5 Canvas / CSS Fallback */}
      {!isLowPower ? (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover filter blur-[50px] opacity-45 transform-gpu"
        />
      ) : (
        <div className="absolute inset-0 bg-[#030305] bg-gradient-to-tr from-[#05040a] via-[#0c0816] to-[#030305]" />
      )}

      {/* 2. Floating CSS Animated Aurora Mesh Orbs for Layered Depth */}
      <div className="absolute -top-[15%] -left-[10%] w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-full bg-gradient-to-br from-[#E59500]/15 via-[#E55934]/10 to-transparent blur-[140px] animate-aura-1 transform-gpu" />
      <div className="absolute -bottom-[20%] -right-[15%] w-[75vw] h-[75vw] max-w-[1000px] max-h-[1000px] rounded-full bg-gradient-to-tl from-[#6E32A0]/15 via-[#B4282D]/10 to-transparent blur-[160px] animate-aura-2 transform-gpu" />

      {/* 3. Subtle Film Grain Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* 4. Bottom Vignette */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />

    </div>
  );
}
