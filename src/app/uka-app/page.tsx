import React from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata = {
  title: "UKA App — Custom Architecture Management CRM | Pinnacle Studios",
  description:
    "A private, end-to-end management portal built specifically for Umesh Kekre & Associates to manage staff, project paperwork, and automated billing.",
};

export default function UkaAppCaseStudy() {
  return (
    <div style={{ background: "#141210", minHeight: "100vh" }}>
      {/* HERO SECTION */}
      <header className="case-study-hero">
        <Link href="/work" className="back-btn-link">
          ← Back to All Projects
        </Link>

        <div>
          <h1 className="case-title">
            UKA <em>Architecture</em> Portal
          </h1>
          <p className="case-lead">
            A custom, end-to-end enterprise CRM built specifically for{" "}
            <strong>Umesh Kekre &amp; Associates</strong> to manage their
            architectural staff coordination, project documentation, site
            paperwork, drawing revisions, and automated client billing.
          </p>
        </div>

        {/* Hero Screenshot Card */}
        <div className="case-preview-card">
          <Image
            src="/work-uka-app.png"
            alt="UKA Architecture CRM Portal Interface"
            width={1400}
            height={780}
            style={{ width: "100%", height: "auto", display: "block" }}
            priority
          />
        </div>
      </header>

      {/* APP CAPABILITIES & FEATURES SECTION */}
      <section className="features-section">
        <div className="features-header">
          <span className="features-sub">Engineered For Architects</span>
          <h2 className="features-headline">System Highlights &amp; Core Modules</h2>
        </div>

        <div className="features-grid">
          {/* Feature 1: Staff & Team Workflows */}
          <article className="feature-card">
            <div className="feature-icon-box">🏛️</div>
            <h3 className="feature-title">Staff &amp; Draftsperson Workflow</h3>
            <p className="feature-desc">
              Automated task delegation and workload balancing tailored for
              architects, interior designers, and drafting engineers.
            </p>
            <ul className="feature-points">
              <li>Daily timesheet &amp; active site logbook</li>
              <li>Junior draftsperson task review pipelines</li>
              <li>Billable vs non-billable hours auditing</li>
            </ul>
          </article>

          {/* Feature 2: Paperwork & Drawing Vault */}
          <article className="feature-card">
            <div className="feature-icon-box">📐</div>
            <h3 className="feature-title">Drawing &amp; Paperwork Vault</h3>
            <p className="feature-desc">
              Centralized cloud repository for municipal approvals, CAD
              revisions, site NOCs, and structural engineering submittals.
            </p>
            <ul className="feature-points">
              <li>Version-controlled drawing revisions (R1, R2, GFC)</li>
              <li>Contractor handoff &amp; sign-off tracking</li>
              <li>Instant client approval signatures</li>
            </ul>
          </article>

          {/* Feature 3: Automated Milestone Billing */}
          <article className="feature-card">
            <div className="feature-icon-box">💳</div>
            <h3 className="feature-title">Milestone Invoicing &amp; Billing</h3>
            <p className="feature-desc">
              Architecture billing structured around project phases—from
              conceptual schematics to foundation casting and final handover.
            </p>
            <ul className="feature-points">
              <li>Phase-wise automated retainer invoices</li>
              <li>GST compliant PDF receipts generation</li>
              <li>Payment aging &amp; overdue alerts</li>
            </ul>
          </article>

          {/* Feature 4: Site Inspection & Punch Lists */}
          <article className="feature-card">
            <div className="feature-icon-box">📱</div>
            <h3 className="feature-title">On-Site Inspection Logs</h3>
            <p className="feature-desc">
              Mobile &amp; tablet-optimized inspection module allowing site
              supervisors to document field photos and log structural punch lists.
            </p>
            <ul className="feature-points">
              <li>Real-time photo uploads with timestamping</li>
              <li>Contractor corrective action tickets</li>
              <li>Offline-ready syncing upon reconnection</li>
            </ul>
          </article>

          {/* Feature 5: Client Communication Portal */}
          <article className="feature-card">
            <div className="feature-icon-box">🤝</div>
            <h3 className="feature-title">Client Milestone Tracker</h3>
            <p className="feature-desc">
              A dedicated, clean portal for clients to inspect material
              palettes, render previews, and approve change orders without
              endless emails.
            </p>
            <ul className="feature-points">
              <li>Real-time project stage roadmap</li>
              <li>Material specification approvals</li>
              <li>Integrated billing summary view</li>
            </ul>
          </article>

          {/* Feature 6: Enterprise Security & RBAC */}
          <article className="feature-card">
            <div className="feature-icon-box">🔒</div>
            <h3 className="feature-title">Role-Based Access &amp; Privacy</h3>
            <p className="feature-desc">
              Multi-tiered permission architecture safeguarding proprietary
              blueprints, client budgets, and financial statements.
            </p>
            <ul className="feature-points">
              <li>Principal architect executive dashboard</li>
              <li>Encrypted session management &amp; 2FA</li>
              <li>Detailed audit logs for compliance</li>
            </ul>
          </article>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="cta-banner">
        <div className="cta-banner-inner">
          <h2 className="cta-banner-title">Need a Bespoke CRM for Your Firm?</h2>
          <p className="cta-banner-sub">
            We design and build bespoke enterprise software, internal ERPs, and
            workflow engines tailored to your exact industry requirements.
          </p>
          <Link
            href="/#contact"
            className="btn-hero-lime"
            style={{ padding: "0.9rem 2.25rem", fontSize: "1rem" }}
          >
            <span>Discuss Your Project</span>
            <span className="btn-arrow">→</span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
