"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

interface Project {
  title: string;
  sub: string;
  category: "websites" | "crm" | "apps";
  img: string;
  href?: string;
  isExternal?: boolean;
}

const projects: Project[] = [
  {
    title: "UKA",
    sub: "A portfolio for a renowned architect",
    category: "websites",
    img: "/work-uka.png",
    href: "https://umeshkekreandassociates.com",
    isExternal: true,
  },
  {
    title: "The Deutsch Hub",
    sub: "A website for a German institute",
    category: "websites",
    img: "/work-thedeutschhub.png",
    href: "https://www.thedeutschhub.com",
    isExternal: true,
  },
  {
    title: "Health 360",
    sub: "A website for a physiotherapy clinic",
    category: "websites",
    img: "/work-health360-web.png",
    href: "https://thehealth360.in",
    isExternal: true,
  },
  {
    title: "Health 360 CRM",
    sub: "A CRM specifically for doctors",
    category: "crm",
    img: "/work-health360.png",
  },
  {
    title: "UKA App",
    sub: "Staff, paperwork & billing CRM for architects",
    category: "crm",
    img: "/work-uka-app.png",
    href: "/uka-app",
    isExternal: false,
  },
  {
    title: "Froven Innovations",
    sub: "A commercial refrigeration company",
    category: "websites",
    img: "/work-froven.png",
    href: "https://froveninnovations.com",
    isExternal: true,
  },
  {
    title: "DNA 360 Fitness",
    sub: "Biometric Performance Hub & Member Portal",
    category: "apps",
    img: "/work-dna360.png",
    href: "https://dna360.in",
    isExternal: true,
  },
];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div style={{ background: "#141210", minHeight: "100vh" }}>
      {/* Main 2-Column Grid Composition */}
      <div className="work-grid-wrap">
        {/* Left Column: Our WORK + Vertical Filters */}
        <aside className="work-sidebar">
          <div className="work-title-box">
            <span
              style={{
                fontFamily: "var(--font-caveat), 'Caveat', cursive",
                fontSize: "3.2rem",
                fontWeight: 700,
                color: "#F08C38",
                transform: "rotate(-6deg) translateX(4px)",
                display: "block",
                lineHeight: 0.9,
              }}
            >
              Our
            </span>
            <h1
              style={{
                fontFamily: "var(--font-syne), 'Syne', sans-serif",
                fontSize: "3.4rem",
                fontWeight: 900,
                textTransform: "uppercase",
                color: "#F5F2ED",
                margin: "-0.1em 0 0 0",
                lineHeight: 0.92,
              }}
            >
              WORK
            </h1>
          </div>

          <div className="work-filter-group">
            <span className="filter-eyebrow">Filter by Category</span>
            <button
              type="button"
              className={`work-filter-tab ${activeFilter === "all" ? "active" : ""}`}
              onClick={() => setActiveFilter("all")}
            >
              All Projects
            </button>
            <button
              type="button"
              className={`work-filter-tab ${
                activeFilter === "websites" ? "active" : ""
              }`}
              onClick={() => setActiveFilter("websites")}
            >
              Websites
            </button>
            <button
              type="button"
              className={`work-filter-tab ${
                activeFilter === "crm" ? "active" : ""
              }`}
              onClick={() => setActiveFilter("crm")}
            >
              Enterprise CRM / ERP
            </button>
            <button
              type="button"
              className={`work-filter-tab ${
                activeFilter === "apps" ? "active" : ""
              }`}
              onClick={() => setActiveFilter("apps")}
            >
              Custom Web &amp; AI Apps
            </button>
          </div>
        </aside>

        {/* Right Column: Rectangular Cards Grid */}
        <main className="work-cards-grid">
          {filteredProjects.map((project) => {
            const cardContent = (
              <>
                <div style={{ position: "relative", width: "100%", height: "100%" }}>
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                </div>
                <div className="project-card-overlay"></div>
                <div className="project-card-content">
                  <div className="project-card-text">
                    <h2 className="project-card-title">{project.title}</h2>
                    <p className="project-card-sub">{project.sub}</p>
                  </div>
                  <span className="project-card-arrow">→</span>
                </div>
              </>
            );

            if (project.href) {
              if (project.isExternal) {
                return (
                  <a
                    key={project.title}
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card-item"
                  >
                    {cardContent}
                  </a>
                );
              }

              return (
                <Link
                  key={project.title}
                  href={project.href}
                  className="project-card-item"
                >
                  {cardContent}
                </Link>
              );
            }

            return (
              <article key={project.title} className="project-card-item">
                {cardContent}
              </article>
            );
          })}
        </main>
      </div>

      <Footer />
    </div>
  );
}
