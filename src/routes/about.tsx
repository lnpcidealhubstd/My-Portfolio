import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Ambient } from "@/components/site/Ambient";
import { Reveal } from "@/components/site/Reveal";
import nicolasAsset from "@/assets/nicolas.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Nico Centeno" },
      {
        name: "description",
        content: "Biography, technical competencies, and AI prototyping workflow of Nico Centeno.",
      },
    ],
  }),
  component: About,
});

const COMPETENCIES = [
  {
    title: "AI Prototyping & Orchestration",
    desc: "Transforming wireframes into functional React and Tailwind prototypes rapidly using Lovable, Claude, and VS Code AI extensions.",
  },
  {
    title: "Figma Auto-Layout 5.0 & Systems",
    desc: "Building production-grade component libraries, spatial tokens, and responsive frames engineered for developer handoff.",
  },
  {
    title: "Interactive Wireframing & Flow Mapping",
    desc: "Mapping complex user journeys, client portals, and web application sitemaps with absolute structural clarity.",
  },
  {
    title: "UX Research & Auditing",
    desc: "Executing heuristic evaluations, WCAG contrast audits, and usability tests for high-converting user interfaces.",
  },
  {
    title: "Frontend Code Sync & Git Control",
    desc: "Managing local repos in VS Code, prompt tuning code structures, and pushing feature branches to GitHub.",
  },
  {
    title: "Edge Deployment Pipelines",
    desc: "Deploying production-ready client prototypes and portfolio artifacts straight to Vercel global edge servers.",
  },
];

const TIMELINE = [
  {
    period: "NOW",
    role: "UI/UX Designer & AI Prototyper",
    company: "Freelance & Independent Practice",
    desc: "Designing scalable interfaces, tokenized design systems, and rapid AI-assisted React prototypes for tech teams and founders.",
  },
  {
    period: "PRIOR",
    role: "Co-Founder",
    company: "IdeaHub Studio",
    desc: "Led digital product strategy, client discovery forms, and UI architecture for regional enterprise clients.",
  },
  {
    period: "ALWAYS",
    role: "Lifelong Student of Systems",
    company: "ACLC College of Apalit (BS CS)",
    desc: "Merging computer science fundamentals with modern visual design, Figma systems, and AI-native development workflows.",
  },
];

function About() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* HEADER SECTION */}
      <section className="relative overflow-hidden pt-24 pb-16">
        <Ambient />
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="text-mono mb-4 text-xs uppercase tracking-[0.25em] text-accent flex items-center gap-2">
              <span className="pulse-dot size-1.5 rounded-full bg-accent" />
              / 01 — Biography
            </div>
            <h1 className="text-display text-4xl font-medium leading-tight sm:text-6xl lg:text-7xl">
              Architecting systems at the <br />
              intersection of <span className="neon-text text-accent">design &amp; AI code.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      {/* BIOGRAPHY SECTION */}
      <section className="relative mx-auto max-w-7xl px-6 py-12">
        <Reveal delay={100}>
          <div className="glass-card rounded-xl border border-white/10 p-8 sm:p-12">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-center">
              <div className="lg:col-span-4 flex justify-center">
                <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[oklch(0.13_0.009_240)] shadow-2xl">
                  <img
                    src={nicolasAsset}
                    alt="Lorenzo Nicholas Centeno"
                    className="w-64 h-80 object-cover object-top"
                  />
                </div>
              </div>
              <div className="lg:col-span-8 space-y-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                <p>
                  Hello, I’m <strong className="text-foreground font-semibold">Lorenzo Nicholas "Nico" Centeno</strong>, a UI/UX Designer dedicated to building high-precision digital products and scalable design systems.
                </p>
                <p>
                  My methodology combines the visual rigor of Figma Auto-Layout 5.0 and spatial token registries with modern AI-accelerated workflows. By utilizing tools like Lovable, Claude, and VS Code AI extensions, I rapidly convert visual designs into clean React code and deploy them directly via Vercel.
                </p>
                <p>
                  This end-to-end fluency ensures that every concept is not just visually compelling, but technically feasible, production-ready, and optimized for developer handoff.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CORE COMPETENCIES GRID */}
      <section className="relative mx-auto max-w-7xl px-6 py-16">
        <Reveal delay={150}>
          <div className="text-mono mb-4 text-xs uppercase tracking-[0.25em] text-accent">
            / 02 — Capabilities
          </div>
          <h2 className="text-display text-3xl font-medium sm:text-4xl mb-12">
            Core Competencies &amp; Technical Stack
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {COMPETENCIES.map((c, i) => (
            <Reveal key={c.title} delay={i * 60}>
              <div className="glass-card h-full rounded-xl border border-white/10 p-6 hover:border-accent/30 transition-colors">
                <h3 className="text-display font-medium text-lg text-foreground mb-2">{c.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TIMELINE SECTION */}
      <section className="relative mx-auto max-w-7xl px-6 py-16">
        <Reveal delay={200}>
          <div className="text-mono mb-4 text-xs uppercase tracking-[0.25em] text-accent">
            / 03 — Experience
          </div>
          <h2 className="text-display text-3xl font-medium sm:text-4xl mb-12">
            Experience &amp; Foundations
          </h2>
        </Reveal>

        <div className="space-y-6">
          {TIMELINE.map((t, i) => (
            <Reveal key={t.period} delay={i * 80}>
              <div className="glass-card rounded-xl border border-white/10 p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="md:w-32">
                  <span className="text-mono text-xs font-semibold text-accent bg-accent/10 px-3 py-1.5 rounded border border-accent/20">
                    {t.period}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-display font-medium text-xl text-foreground">{t.role}</h3>
                  <p className="text-mono text-xs text-muted-foreground mt-0.5 mb-2">{t.company}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{t.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section className="relative mx-auto max-w-7xl px-6 py-16 mb-12">
        <Reveal delay={250}>
          <div className="glass-card rounded-xl border border-white/10 p-8 sm:p-12">
            <div className="text-mono mb-2 text-xs uppercase tracking-[0.25em] text-accent">
              / 04 — Inquiries
            </div>
            <h2 className="text-display text-3xl font-medium text-foreground mb-2">
              Get in Touch
            </h2>
            <p className="text-xs text-muted-foreground mb-8">
              Have a project or design system requirement? Fill out the details below.
            </p>

            {submitted ? (
              <div className="p-6 rounded-lg bg-accent/10 border border-accent/30 text-accent text-xs text-mono uppercase tracking-wider text-center">
                ✓ Message received! Nico will respond back shortly.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-mono text-xs text-muted-foreground block mb-2 uppercase tracking-wider">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Rivera"
                      className="w-full bg-surface/50 border hairline rounded-md px-4 py-3 text-xs text-foreground focus:border-accent focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-mono text-xs text-muted-foreground block mb-2 uppercase tracking-wider">Your Email</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      className="w-full bg-surface/50 border hairline rounded-md px-4 py-3 text-xs text-foreground focus:border-accent focus:outline-none transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-mono text-xs text-muted-foreground block mb-2 uppercase tracking-wider">Project Brief</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your product requirements..."
                    className="w-full bg-surface/50 border hairline rounded-md px-4 py-3 text-xs text-foreground focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="text-mono inline-flex h-11 items-center rounded-md bg-accent px-6 text-xs uppercase tracking-[0.2em] text-background font-semibold transition-transform hover:-translate-y-0.5"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}