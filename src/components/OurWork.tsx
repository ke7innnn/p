"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const PROJECTS = [
  {
    id: 1,
    title: "LXRY BRAND",
    category: "Luxury E-Commerce & Brand Identity",
    link: "https://fullstack-brand-website.vercel.app",
    image: "/ourwork logo/lxry.png",
    description: "Bespoke digital luxury experience featuring WebGL 3D product renders and high-conversion purchase flows."
  },
  {
    id: 2,
    title: "THIRTEEN TWENTY SEVEN (1327)",
    category: "Streetwear & Digital Lifestyle",
    link: "https://1327-thirteentwentyseven.vercel.app",
    image: "/ourwork logo/1327.png",
    description: "High-octane apparel ecommerce platform built with Next.js 16, GSAP animation sequences & custom audio tracks."
  },
  {
    id: 3,
    title: "FROVEN INNOVATIONS",
    category: "Industrial Engineering & Equipment",
    link: "https://froveninnovations.com",
    image: "/ourwork logo/froven.png",
    description: "Corporate digital identity and interactive equipment catalog showcasing industrial refrigeration engineering."
  }
];

export default function OurWork() {
  return (
    <section id="our-work" className="relative z-50 w-full bg-[#050507] text-white py-24 sm:py-32 px-4 sm:px-8 border-t border-white/10">
      
      <div className="max-w-[1600px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-12 mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 text-red-500 font-bold text-xs uppercase tracking-[0.3em] mb-4">
              <Sparkles className="w-4 h-4" /> FEATURED PROJECTS
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white">
              OUR WORKS.
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <p className="max-w-md text-sm sm:text-base text-white/60 font-light leading-relaxed">
              A curated collection of luxury brand identities, high-speed web apps, AI visual campaigns, and digital commerce systems.
            </p>
            <Link
              href="/work"
              className="px-6 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs uppercase tracking-widest transition-transform hover:scale-105 flex items-center gap-2 shadow-lg shadow-amber-500/20 whitespace-nowrap"
            >
              <span>EXPLORE ALL WORKS</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl overflow-hidden bg-[#0e0e14]/90 border border-white/10 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.8)] hover:border-white/30 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e14] via-transparent to-black/30" />
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] uppercase font-bold tracking-widest text-white/90">
                  {project.category}
                </div>
              </div>

              {/* Text Info */}
              <div className="p-6 sm:p-8 flex flex-col gap-4">
                <h3 className="text-xl sm:text-2xl font-extrabold tracking-wide uppercase text-white group-hover:text-red-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed">
                  {project.description}
                </p>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-white/40 tracking-widest uppercase">CASE STUDY</span>
                  <Link
                    href={project.link}
                    target="_blank"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-red-600 hover:text-white border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  >
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

    </section>
  );
}

