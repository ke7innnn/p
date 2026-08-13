"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ExternalLink, Sparkles } from "lucide-react";

export default function OurWorkPage() {
  const [activeCategory, setActiveCategory] = useState<"Website" | "Creatives" | "Social" | "Films">("Website");

  const categoryDetails = {
    Website: {
      title: "Website Design",
      bullets: [
        "Custom Website Design & Development Services",
        "SEO-Optimized Landing Page Design",
        "UI/UX Design for Better User Experience",
        "E-commerce Website Development Solutions",
        "Website Speed Optimization & Performance"
      ]
    },
    Creatives: {
      title: "Brand & Visual Creatives",
      bullets: [
        "AI Product Photography & Synthetic Campaign Creation",
        "3D CGI Modeling & Photorealistic Renderings",
        "Luxury Brand Systems & Typography Architecture",
        "High-Impact Marketing Assets & Digital Art Direction"
      ]
    },
    Social: {
      title: "Social Media Experiences",
      bullets: [
        "Viral Short-Form Reel & Motion Video Editing",
        "Strategic Brand Narrative & Content System",
        "Social Media Identity & Aesthetic Guidelines",
        "Community Growth & High-Engagement Campaigns"
      ]
    },
    Films: {
      title: "Commercial Films & CGI",
      bullets: [
        "High-Octane Cinematic Brand Commercials",
        "3D Product Teaser Animations & Visual FX",
        "Art Direction, Storyboarding & Color Grading",
        "Immersive Spatial Sound Design & Composition"
      ]
    }
  };

  const projects = [
    {
      id: "inner-space",
      title: "INNER SPACE",
      category: "Website",
      type: "Architecture & Luxury Interiors",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
      logo: "/ourwork logo/lxry.png",
      url: "https://pinnaclestudios.in"
    },
    {
      id: "tilcony",
      title: "TILCONY LOGISTICS",
      category: "Website",
      type: "Industrial & Supply Chain Automation",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
      logo: "/ourwork logo/froven.png",
      url: "https://pinnaclestudios.in"
    },
    {
      id: "archroom",
      title: "ARCHROOM DESIGNS",
      category: "Website",
      type: "Bespoke Interior Studio",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
      logo: "/ourwork logo/1327.png",
      url: "https://pinnaclestudios.in"
    },
    {
      id: "pragaty",
      title: "PRAGATY POLYMERS",
      category: "Website",
      type: "Clean Packaging Solutions",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop",
      url: "https://pinnaclestudios.in"
    },
    {
      id: "spice-express",
      title: "SPICE EXPRESS",
      category: "Website",
      type: "Hospitality & Fine Dining",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
      url: "https://pinnaclestudios.in"
    },
    {
      id: "froven-cyber",
      title: "FROVEN CYBER",
      category: "Creatives",
      type: "AI & Synthetic Product Visuals",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
      logo: "/ourwork logo/froven.png",
      url: "https://pinnaclestudios.in"
    },
    {
      id: "apparel-1327",
      title: "1327 APPAREL",
      category: "Creatives",
      type: "Luxury Streetwear & Brand System",
      image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1200&auto=format&fit=crop",
      logo: "/ourwork logo/1327.png",
      url: "https://pinnaclestudios.in"
    },
    {
      id: "social-campaign",
      title: "VIRTUE SOCIAL",
      category: "Social",
      type: "Reel Motion & Social Narrative",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop",
      url: "https://pinnaclestudios.in"
    },
    {
      id: "cgi-teaser",
      title: "CHRONO 3D FILM",
      category: "Films",
      type: "Cinematic CGI Product Teaser",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
      url: "https://pinnaclestudios.in"
    }
  ];

  const filteredProjects = projects.filter(
    (project) => project.category === activeCategory || activeCategory === "Website"
  );

  return (
    <main className="relative min-h-screen bg-[#050507] text-white overflow-x-hidden selection:bg-amber-500 selection:text-black">
      
      {/* Background Ambient Glow */}
      <div className="fixed -top-[20%] -left-[10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full bg-amber-600/10 blur-[150px] pointer-events-none" />

      <div className="max-w-[1700px] mx-auto px-4 sm:px-8 py-8 sm:py-12 flex flex-col lg:flex-row gap-8 lg:gap-16">
        
        {/* LEFT SIDEBAR PANEL (Matching beingloop.com 1:1 layout) */}
        <aside className="w-full lg:w-[360px] xl:w-[420px] flex-shrink-0 flex flex-col justify-between min-h-[calc(100vh-6rem)] lg:sticky lg:top-12">
          
          <div className="flex flex-col gap-8">
            
            {/* Category Filter Drawer Card */}
            <div className="p-6 rounded-3xl bg-[#0e0e14]/90 backdrop-blur-2xl border border-white/15 flex flex-col gap-6 shadow-2xl">
              
              {/* Back to Home Link */}
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-white/70 hover:text-amber-400 transition-colors w-fit group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span>Home</span>
              </Link>

              {/* Filter List */}
              <nav className="flex flex-col gap-2 pt-2 border-t border-white/10">
                {(["Website", "Creatives", "Social", "Films"] as const).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`text-left text-sm sm:text-base font-extrabold uppercase tracking-[0.25em] px-4 py-3 rounded-2xl transition-all duration-300 ${
                      activeCategory === cat
                        ? "bg-amber-500/15 text-amber-400 border border-amber-500/30 shadow-[0_0_20px_rgba(255,159,28,0.2)]"
                        : "text-white/60 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </nav>

            </div>

            {/* Category Details Block (Matches bottom-left section in screenshot) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="p-6 rounded-3xl bg-[#0e0e14]/60 backdrop-blur-xl border border-white/10 flex flex-col gap-4"
              >
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-widest">
                  <Sparkles className="w-4 h-4" /> CAPABILITY OVERVIEW
                </div>
                <h2 className="text-2xl font-black uppercase tracking-tight text-white">
                  {categoryDetails[activeCategory].title}
                </h2>
                <ul className="flex flex-col gap-2.5 text-xs text-white/70 font-light leading-relaxed">
                  {categoryDetails[activeCategory].bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-amber-400 font-bold">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>

          </div>

          {/* Bottom Brand Mark */}
          <div className="pt-8 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-red-600 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-4 h-4 text-black fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13.5h-13L12 6.5z" />
              </svg>
            </div>
            <span className="text-xs font-extrabold uppercase tracking-[0.3em] text-white/40">
              PINNACLE STUDIOS · 2026
            </span>
          </div>

        </aside>

        {/* RIGHT SIDE SHOWCASE GRID (Matching beingloop.com 1:1 multi-column grid) */}
        <section className="flex-1 w-full">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative rounded-3xl overflow-hidden bg-[#0e0e14] border border-white/10 hover:border-amber-500/50 transition-all duration-500 shadow-2xl flex flex-col cursor-pointer"
              >
                {/* Project Image Viewport */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-black">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Logo Badge Overlay if available */}
                  {project.logo && (
                    <div className="absolute top-4 left-4 z-20 w-10 h-10 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 p-2 flex items-center justify-center">
                      <Image src={project.logo} alt="Client Logo" width={30} height={30} className="object-contain" />
                    </div>
                  )}

                  {/* Category Pill */}
                  <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-extrabold uppercase tracking-widest text-amber-400">
                    {project.category}
                  </div>
                </div>

                {/* Card Footer Info */}
                <div className="p-6 flex items-center justify-between gap-4 bg-[#0e0e14]/90 backdrop-blur-xl border-t border-white/10">
                  <div>
                    <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight text-white group-hover:text-amber-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-white/50 font-light tracking-wider mt-0.5">
                      {project.type}
                    </p>
                  </div>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-amber-500 group-hover:text-black transition-colors flex items-center justify-center flex-shrink-0"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

              </motion.div>
            ))}
          </div>

        </section>

      </div>
    </main>
  );
}
