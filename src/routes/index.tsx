import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Ambient } from "@/components/site/Ambient";
import { Reveal } from "@/components/site/Reveal";
import { CORE_SERVICES, DESIGN_PROJECTS } from "@/lib/site-data";
import { Process } from "@/site/Process";
import { DesignPlayground } from "@/site/DesignPlayground";
import { ChipIcon } from "@/components/site/ChipIcon";

import nicolasAsset from "@/assets/nicolas.png";
import intelBg from "@/assets/stackbg.png";
import visualArch from "@/assets/figmacard.png";
import aiCard from "@/assets/aicard.png";
import gitCard from "@/assets/gitcard.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nico Centeno — UI UX Designer" },
      {
        name: "description",
        content: "Portfolio of Nico Centeno — UI UX Designer.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        <Ambient />

        <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-28 sm:pt-32 sm:pb-40">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
            {/* LEFT — Copy */}
            <div className="lg:col-span-7">
              <Reveal>
                <div className="text-mono mb-8 inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  <span className="pulse-dot size-1.5 rounded-full bg-accent" />
                  Available for select engagements · 2026
                </div>
              </Reveal>

              <Reveal delay={80}>
                <h1 className="text-display text-6xl font-medium leading-[0.95] sm:text-7xl lg:text-8xl xl:text-[7rem]">
                  Nico{" "}
                  <span className="neon-text text-accent">Centeno</span>
                </h1>

                <div className="mt-4 text-mono text-base uppercase tracking-[0.35em] text-accent/80">
                  UI UX Designer
                </div>

                <div className="mt-8 flex items-center gap-5">
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="text-muted-foreground transition-colors hover:text-accent"
                  >
                    <LinkedInIcon className="size-5" />
                  </a>

                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="text-muted-foreground transition-colors hover:text-accent"
                  >
                    <FacebookIcon className="size-5" />
                  </a>

                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="text-muted-foreground transition-colors hover:text-accent"
                  >
                    <InstagramIcon className="size-5" />
                  </a>

                  <a
                    href="https://www.tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                    className="text-muted-foreground transition-colors hover:text-accent"
                  >
                    <TikTokIcon className="size-5" />
                  </a>

                  <a
                    href="https://www.github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="text-muted-foreground transition-colors hover:text-accent"
                  >
                    <GitHubIcon className="size-5" />
                  </a>

                  <a
                    href="mailto:centeno.lorenzo.nicholas@gmail.com"
                    aria-label="Gmail"
                    className="text-muted-foreground transition-colors hover:text-accent"
                  >
                    <MailIcon className="size-5" />
                  </a>
                </div>
              </Reveal>

              <Reveal delay={180}>
                <p className="mt-8 max-w-xl border-l-2 border-accent/30 pl-4 text-base leading-relaxed text-muted-foreground">
                  A UI/UX Designer crafting high-fidelity interfaces in Figma
                  and leveraging advanced AI workflows to build and deploy
                  production-ready digital products. I bridge the gap between
                  pure design and rapid deployment.
                </p>
              </Reveal>

              <Reveal delay={260}>
                <div className="mt-10 flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="text-mono inline-flex h-11 items-center rounded-md bg-foreground px-5 text-xs uppercase tracking-[0.2em] text-background transition-transform hover:-translate-y-0.5"
                  >
                    Hire Me
                  </Link>

                  <Link
                    to="/services"
                    className="text-mono group inline-flex h-11 items-center gap-2 rounded-md border hairline bg-transparent px-5 text-xs uppercase tracking-[0.2em] text-foreground transition-colors hover:border-accent/40"
                  >
                    Services{" "}
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* RIGHT — Portrait flip card */}
            <div className="lg:col-span-5">
              <Reveal delay={140}>
                <ProfileFlipCard src={nicolasAsset} />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTELLIGENCE STACK ── */}
      <section className="relative w-full overflow-hidden">
        <img
          src={intelBg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-top"
        />

        <div className="absolute inset-0 bg-linear-to-b from-background/10 via-background/60 to-background" />

        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <Reveal>
            <div className="mb-4 text-mono text-xs uppercase tracking-[0.25em] text-accent">
              / 01 — Capabilities
            </div>

            <h2 className="text-display text-4xl font-medium leading-tight sm:text-5xl">
              Design. AI.{" "}
              <span className="neon-text text-accent">Deploy.</span>
            </h2>

            <p className="mt-4 max-w-lg text-sm text-muted-foreground">
              Three focused layers — visual architecture, AI orchestration, and
              edge delivery — producing production-grade software at unusual
              velocity.
            </p>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {CORE_SERVICES.map((svc, i) => (
              <Reveal key={svc.slug} delay={i * 80}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-[oklch(0.13_0.009_240/0.8)]">
                  {svc.index === "01" && (
                    <div className="flex h-70 items-center justify-center p-8">
                      <img
                        src={visualArch}
                        alt="Visual Architecture"
                        className="h-full w-full object-contain"
                      />
                    </div>
                  )}

                  {svc.index === "02" && (
                    <div className="flex h-70 items-center justify-center p-8">
                      <img
                        src={aiCard}
                        alt="AI Orchestration"
                        className="h-full w-full object-contain"
                      />
                    </div>
                  )}

                  {svc.index === "03" && (
                    <div className="flex h-70 items-center justify-center">
                      <img
                        src={gitCard}
                        alt="Edge Delivery"
                        className="h-full w-full object-contain"
                      />
                    </div>
                  )}

                  <div className="flex flex-1 flex-col px-6 py-5">
                    <div className="text-mono mb-4 flex items-center justify-between text-xs uppercase tracking-[0.25em] text-muted-foreground">
                      <span>
                        {svc.index} / {svc.kicker}
                      </span>

                      <span className="pulse-dot size-1.5 rounded-full bg-accent/60" />
                    </div>

                    <h3 className="text-display text-xl font-medium leading-tight">
                      {svc.title}
                    </h3>

                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {svc.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {svc.chips.map((chip) => (
                        <span
                          key={chip.label}
                          className="inline-flex cursor-default items-center gap-2 rounded-md border hairline bg-surface/40 px-3 py-1.5 text-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:border-accent/40 hover:text-foreground"
                        >
                          <ChipIcon
                            name={chip.icon}
                            className="size-3.5 text-accent"
                          />
                          {chip.label}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 h-px w-12 bg-accent/50 transition-all duration-500 group-hover:w-full" />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORK PROCESS ── */}
      <Process />

      {/* ── DESIGN PLAYGROUND & ARTIFACTS ── */}
      <DesignPlayground />

      {/* ── PROJECTS ── */}
      <section className="relative mx-auto max-w-7xl px-6 py-24">
        <Reveal>
          <div className="mb-16 flex items-end justify-between">
            <div>
              <div className="text-mono mb-4 text-xs uppercase tracking-[0.25em] text-accent">
                / 04 — Featured Work
              </div>

              <h2 className="text-display text-4xl font-medium leading-tight sm:text-5xl">
                Featured work.
              </h2>
            </div>

            <Link
              to="/projects"
              className="text-mono hidden text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground sm:inline-flex"
            >
              All projects →
            </Link>
          </div>
        </Reveal>

        <div className="mb-6 text-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
          UI/UX &amp; Design
        </div>

        {/* EES — Featured Wide Card */}
        <div className="mb-6">
          <Reveal>
            <Link
              to="/projects/$slug"
              params={{ slug: DESIGN_PROJECTS[0].slug }}
              className="glass-card glass-card-hover group block overflow-hidden rounded-xl"
            >
              <div className="relative aspect-21/9 overflow-hidden bg-surface-elevated">
                <img
                  src={DESIGN_PROJECTS[0].cover}
                  alt={DESIGN_PROJECTS[0].title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />

                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/60 via-transparent to-transparent" />

                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-md border hairline bg-background/70 px-3 py-1.5 text-mono text-[10px] uppercase tracking-[0.2em] text-foreground backdrop-blur">
                  {DESIGN_PROJECTS[0].tag}
                </div>

                <div className="absolute bottom-4 right-4 text-mono text-[10px] uppercase tracking-[0.25em] text-accent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  View →
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-display text-lg font-medium">
                  {DESIGN_PROJECTS[0].title}
                </h3>

                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                  {DESIGN_PROJECTS[0].summary}
                </p>
              </div>
            </Link>
          </Reveal>
        </div>

        {/* Projects Grid */}
        <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {DESIGN_PROJECTS.slice(1).map((p, i) => (
            <Reveal key={p.slug} delay={i * 60}>
              <Link
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className="glass-card glass-card-hover group block overflow-hidden rounded-xl"
              >
                <div className="relative aspect-4/3 overflow-hidden bg-surface-elevated">
                  <img
                    src={p.cover}
                    alt={p.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/60 via-transparent to-transparent" />

                  <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-md border hairline bg-background/70 px-3 py-1.5 text-mono text-[10px] uppercase tracking-[0.2em] text-foreground backdrop-blur">
                    {p.tag}
                  </div>

                  <div className="absolute bottom-4 right-4 text-mono text-[10px] uppercase tracking-[0.25em] text-accent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    View →
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-display text-lg font-medium">
                    {p.title}
                  </h3>

                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                    {p.summary}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── CONTACT TEASER ── */}
      <section className="relative mx-auto max-w-7xl px-6 py-24">
        <Reveal>
          <div className="glass-card rounded-xl p-8 sm:p-12">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
              <div className="md:col-span-5">
                <div className="text-mono mb-4 text-xs uppercase tracking-[0.25em] text-accent">
                  / 05 — Contact
                </div>

                <h2 className="text-display text-3xl font-medium leading-tight sm:text-4xl">
                  Have a project? Start the conversation.
                </h2>

                <p className="mt-4 text-sm text-muted-foreground">
                  Outline the scope, the constraint, and the deadline. I
                  respond within two business days.
                </p>

                <Link
                  to="/contact"
                  className="text-mono mt-6 inline-flex h-11 items-center rounded-md bg-foreground px-5 text-xs uppercase tracking-[0.2em] text-background transition-transform hover:-translate-y-0.5"
                >
                  Contact Us →
                </Link>
              </div>

              <div className="md:col-span-6 md:col-start-7">
                <div className="text-mono mb-6 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  Connect
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <SocialCard
                    href="https://www.linkedin.com"
                    label="LinkedIn"
                    icon={<LinkedInIcon className="size-4" />}
                  />

                  <SocialCard
                    href="https://www.facebook.com"
                    label="Facebook"
                    icon={<FacebookIcon className="size-4" />}
                  />

                  <SocialCard
                    href="https://www.instagram.com"
                    label="Instagram"
                    icon={<InstagramIcon className="size-4" />}
                  />

                  <SocialCard
                    href="https://www.tiktok.com"
                    label="TikTok"
                    icon={<TikTokIcon className="size-4" />}
                  />

                  <SocialCard
                    href="https://www.github.com"
                    label="GitHub"
                    icon={<GitHubIcon className="size-4" />}
                  />

                  <SocialCard
                    href="mailto:centeno.lorenzo.nicholas@gmail.com"
                    label="Gmail"
                    icon={<MailIcon className="size-4" />}
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── ABOUT TEASER ── */}
      <section className="relative mx-auto max-w-7xl overflow-hidden px-6 py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute left-8 top-16 size-3 rounded-full bg-accent opacity-70 blur-[1px]"
        />

        <div
          aria-hidden
          className="pointer-events-none absolute bottom-32 left-1/2 size-2.5 rounded-full bg-accent opacity-50 blur-[1px]"
        />

        <div
          aria-hidden
          className="pointer-events-none absolute right-6 top-24 size-3.5 rounded-full bg-accent opacity-60 blur-[1px]"
        />

        <div
          aria-hidden
          className="pointer-events-none absolute bottom-16 right-1/4 size-2 rounded-full bg-accent opacity-40"
        />

        <div className="relative mb-16 grid grid-cols-1 items-start gap-6 lg:grid-cols-12">
          {/* LEFT — Floating UI mockup cards */}
          <div className="relative hidden h-[280px] lg:col-span-5 lg:block">
            <div className="absolute left-0 top-0 w-50 rounded-xl border border-white/10 bg-[oklch(0.13_0.009_240/0.9)] p-4 shadow-xl">
              <div className="mb-3 flex items-center gap-2">
                <div className="size-2.5 rounded-full bg-red-500/80" />
                <div className="size-2.5 rounded-full bg-yellow-500/80" />
                <div className="size-2.5 rounded-full bg-green-500/80" />
              </div>

              <div className="space-y-2">
                {["CPU", "Hardware Block"].map((label) => (
                  <div key={label} className="flex items-center gap-2">
                    <div className="flex h-6 w-16 items-center justify-center rounded border border-white/10 bg-white/5">
                      <span className="text-[8px] text-muted-foreground">
                        {label}
                      </span>
                    </div>

                    <div className="h-px w-6 bg-accent/40" />

                    <div className="flex h-6 w-16 items-center justify-center rounded border border-white/10 bg-white/5">
                      <span className="text-[8px] text-muted-foreground">
                        Module
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute left-40 top-4 w-50 rounded-xl border border-white/10 bg-[oklch(0.15_0.009_240/0.95)] p-4 shadow-xl">
              <div className="mb-3 flex items-center gap-2">
                <div className="size-2.5 rounded-full bg-red-500/80" />
                <div className="size-2.5 rounded-full bg-yellow-500/80" />
                <div className="size-2.5 rounded-full bg-green-500/80" />
              </div>

              <div className="flex items-center justify-center gap-3 py-2">
                <div className="size-8 rounded-full bg-orange-500" />
                <div className="size-8 rounded-full bg-purple-500" />
                <div className="size-8 rounded-full bg-green-500" />
              </div>
            </div>

            <div className="absolute bottom-0 left-12 w-55 rounded-xl border border-white/10 bg-[oklch(0.13_0.009_240/0.9)] p-4 shadow-xl">
              <div className="mb-2 flex items-center gap-2">
                <div className="size-2 rounded-full bg-red-500/80" />
                <div className="size-2 rounded-full bg-yellow-500/80" />
                <div className="size-2 rounded-full bg-green-500/80" />
              </div>

              <div className="grid grid-cols-2 gap-1.5">
                {[1, 2, 3, 4].map((n) => (
                  <div
                    key={n}
                    className="flex h-10 items-center justify-center rounded-md border border-white/10 bg-white/5"
                  >
                    <div className="size-4 rounded border border-white/20" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CENTER — Profile photo */}
          <div className="flex justify-center lg:col-span-3">
            <div className="relative">
              <div
                aria-hidden
                className="absolute inset-0 rounded-2xl"
                style={{
                  boxShadow:
                    "0 0 60px oklch(0.82 0.18 195 / 20%), 0 0 120px oklch(0.82 0.18 195 / 10%)",
                }}
              />

              <div
                aria-hidden
                className="absolute -inset-3 rounded-3xl border border-accent/10"
              />

              <div
                aria-hidden
                className="absolute -inset-6 rounded-3xl border border-accent/5"
              />

              <div
                className="relative overflow-hidden rounded-2xl border border-white/15 bg-[oklch(0.13_0.009_240)]"
                style={{ width: 200, height: 260 }}
              >
                <img
                  src={nicolasAsset}
                  alt="Nico Centeno"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/10 bg-[oklch(0.13_0.009_240/0.95)] px-4 py-1.5 text-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground backdrop-blur">
                Read Full Profile →
              </div>
            </div>
          </div>

          {/* RIGHT — Skill chips */}
          <div className="flex flex-col gap-3 lg:col-span-4">
            {[
              { icon: "⚡", label: "Rapid Prototyping (AI)" },
              { icon: "🎨", label: "Interactive Wireframing (Figma)" },
              { icon: "🧩", label: "Design Systems" },
              { icon: "🔍", label: "UX Research" },
              { icon: "📐", label: "Figma Auto-Layout" },
            ].map((skill) => (
              <div
                key={skill.label}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-[oklch(0.13_0.009_240/0.8)] px-4 py-3 backdrop-blur"
              >
                <div className="flex items-center gap-3">
                  <span className="text-base">{skill.icon}</span>

                  <span className="text-sm text-foreground">
                    {skill.label}
                  </span>
                </div>

                <div className="size-5 rounded border border-white/10 bg-white/5" />
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM ROW — Heading | Description + CTA */}
        <Reveal>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="text-mono mb-4 text-xs uppercase tracking-[0.25em] text-accent">
                / 06 — About
              </div>

              <h2 className="text-display text-4xl font-medium leading-tight">
                Operational discipline, applied to software.
              </h2>
            </div>

            <div className="md:col-span-7 md:col-start-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Years of real-world management, team leadership, and logistics
                coordination inject strict engineering discipline, robust
                documentation, and absolute operational reliability into every
                digital product I build.
              </p>

              <Link
                to="/about"
                className="text-mono mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-foreground transition-colors hover:text-accent"
              >
                Read the full profile →
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}

/* ── Profile Flip Card ── */

function ProfileFlipCard({ src }: { src: string }) {
  return (
    <div className="profile-flip-scene mx-auto">
      <div className="profile-flip-card">
        {/* FRONT */}
        <div className="profile-flip-face profile-flip-front">
          <div className="profile-ring" aria-hidden />
          <div className="profile-pulse-ring" aria-hidden />

          <div className="profile-circle">
            <img
              src={src}
              alt="Portrait of Nico Centeno"
              className="profile-img"
              loading="eager"
            />
          </div>

          <div className="mt-6 text-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            <span className="text-accent">◆</span> LNC · Operator
          </div>
        </div>

        {/* BACK */}
        <div className="profile-flip-face profile-flip-back">
          <div className="profile-back-ring" aria-hidden />

          <div className="flex flex-col items-center gap-5 px-8">
            <p className="text-mono text-center text-[10px] uppercase tracking-[0.3em] text-accent">
              ◆ LNC · Operator
            </p>

            <h3 className="text-display text-center text-xl font-medium text-foreground">
              Let’s build something
              <br />
              <span className="neon-text text-accent">remarkable.</span>
            </h3>

            <div className="mt-2 flex w-full flex-col gap-3">
              <Link
                to="/contact"
                className="text-mono inline-flex h-11 w-full items-center justify-center rounded-md bg-accent px-6 text-xs font-semibold uppercase tracking-[0.2em] text-background transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_0_24px_rgba(0,255,255,0.4)]"
              >
                Hire Me
              </Link>

              <a
                href="/cv.pdf"
                download
                className="text-mono inline-flex h-11 w-full items-center justify-center rounded-md border border-accent/50 bg-transparent px-6 text-xs uppercase tracking-[0.2em] text-accent transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:bg-accent/10 hover:shadow-[0_0_20px_rgba(0,255,255,0.2)]"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Social Card ── */

function SocialCard({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 rounded-md border hairline bg-surface/40 px-4 py-3 text-sm text-muted-foreground transition-all hover:border-accent/30 hover:bg-surface hover:text-foreground"
    >
      <span className="text-accent/70 transition-colors group-hover:text-accent">
        {icon}
      </span>

      <span className="text-mono text-xs uppercase tracking-[0.2em]">
        {label}
      </span>

      <span className="ml-auto text-muted-foreground/50 transition-transform group-hover:translate-x-0.5 group-hover:text-accent">
        →
      </span>
    </a>
  );
}

/* ── SVG Icons ── */

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 11-2.882 0 1.441 1.441 0 012.882 0z" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}