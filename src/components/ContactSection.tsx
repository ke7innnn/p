"use client";

import React, { useState, useRef } from "react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });
  const [isShaking, setIsShaking] = useState(false);
  const submitBtnRef = useRef<HTMLButtonElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.consent) {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 400);
      return;
    }

    setSubmitted(true);
  };

  return (
    <section className="contact" id="contact">
      {/* Subtle Aurora Mesh Glow Backdrop */}
      <div className="contact-aurora-wrap">
        <div className="contact-aurora-blob contact-blob-1"></div>
        <div className="contact-aurora-blob contact-blob-2"></div>
        <div className="contact-aurora-blob contact-blob-3"></div>
        <div className="contact-aurora-grid"></div>
      </div>

      {/* Frosted Glassmorphism Canvas */}
      <div className="contact-glass-wrapper">
        {/* Left Column: Info & Direct Touchpoint */}
        <div className="contact-info">
          <span className="contact-pill-tag">✦ INITIATE A PROJECT</span>
          <h2 className="contact-headline">
            Let&apos;s <em>build.</em>
          </h2>
          <p className="contact-body">
            Whether you need a bespoke website, an enterprise CRM/ERP system, or
            a high-performance web app, we&apos;re here to engineer your vision
            with dedicated 1-on-1 client care.
          </p>

          <div className="contact-details">
            <a
              href="mailto:pinnaclestudios4u@gmail.com"
              className="contact-email-card"
            >
              <span className="email-dot"></span>
              <span className="email-address">pinnaclestudios4u@gmail.com</span>
              <span className="email-arrow">↗</span>
            </a>
          </div>
        </div>

        {/* Right Column: Glassmorphic Interactive Form */}
        {submitted ? (
          <div className="form-success visible" id="form-success">
            <p>Thank you! We&apos;ll be in touch shortly.</p>
          </div>
        ) : (
          <form
            className="contact-form"
            id="contact-form"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                required
                placeholder="Your full name"
                autoComplete="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                required
                placeholder="your.email@company.com"
                autoComplete="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="form-input"
                placeholder="+1 (555) 000-0000"
                autoComplete="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="form-input form-textarea"
                rows={4}
                placeholder="Tell us about your project, timeline, or requirements..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              ></textarea>
            </div>
            <div className="form-consent">
              <label className="consent-label">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  className="consent-checkbox"
                  required
                  checked={formData.consent}
                  onChange={(e) =>
                    setFormData({ ...formData, consent: e.target.checked })
                  }
                />
                <span className="consent-checkmark"></span>
                <span className="consent-text">
                  I agree to the{" "}
                  <a href="#" className="consent-link">
                    privacy policy
                  </a>{" "}
                  and consent to being contacted.
                </span>
              </label>
            </div>
            <button
              type="submit"
              className="form-submit"
              id="form-submit"
              ref={submitBtnRef}
              style={{
                animation: isShaking ? "shake 0.4s ease" : undefined,
              }}
            >
              <span>Send Message</span>
              <span className="btn-arrow">→</span>
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
