import { useState, useEffect, useCallback } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Ambient } from "@/components/site/Ambient";
import { Reveal } from "@/components/site/Reveal";
import { BackButton } from "@/components/site/BackButton";
import { DESIGN_PROJECTS } from "@/lib/site-data";

export const Route = createFileRoute("/projects/$slug")({
  head: ({ params }) => {
    const project = DESIGN_PROJECTS.find((p) => p.slug === params.slug);
    return {
      meta: [
        { title: `${project ? project.title : "Project"} — Nico Centeno` },
        {
          name: "description",
          content: project ? project.summary : "UI/UX Case Study by Nico Centeno",
        },
      ],
    };
  },
  component: ProjectDetail,
});

function ProjectDetail() {
  const { slug } = Route.useParams();
  const navigate = useNavigate();

  const project = DESIGN_PROJECTS.find((p) => p.slug === slug);

  // Active selected screen index for grid / preview
  const [activeScreenIndex, setActiveScreenIndex] = useState<number>(0);

  // Full-screen high-res lightbox state
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

  // Fallback redirect if slug is invalid
  useEffect(() => {
    if (!project) {
      navigate({ to: "/projects" });
    }
  }, [project, navigate]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const nextLightboxImage = useCallback(() => {
    if (!project) return;
    setLightboxIndex((prev) => (prev + 1) % project.screens.length);
  }, [project]);

  const prevLightboxImage = useCallback(() => {
    if (!project) return;
    setLightboxIndex((prev) => (prev - 1 + project.screens.length) % project.screens.length);
  }, [project]);

  // Keyboard navigation for full-screen lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextLightboxImage();
      if (e.key === "ArrowLeft") prevLightboxImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, closeLightbox, nextLightboxImage, prevLightboxImage]);

  if (!project) return null;

  const currentActiveScreen = project.screens[activeScreenIndex] || project.screens[0];
  const currentLightboxScreen = project.screens[lightboxIndex] || project.screens[0];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* ── HEADER & PROJECT METADATA ── */}
      <section className="relative overflow-hidden pt-24 pb-12">
        <Ambient />
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mb-6">
              <BackButton />
            </div>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-mono text-xs uppercase tracking-[0.2em] text-accent bg-accent/10 px-3 py-1 rounded border border-accent/20">
                {project.tag}
              </span>
              <span className="text-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {project.screens.length} {project.screens.length === 1 ? "Artifact Screen" : "High-Res Screens"}
              </span>
            </div>

            <h1 className="text-display text-4xl font-medium sm:text-6xl text-foreground mb-6">
              {project.title}
            </h1>

            <p className="max-w-3xl text-sm sm:text-base leading-relaxed text-muted-foreground mb-8">
              {project.summary}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── FEATURED PREVIEW CANVAS & SCREEN SELECTOR ── */}
      <section className="relative mx-auto max-w-7xl px-6 py-4">
        <Reveal>
          <div className="glass-card rounded-2xl border border-white/10 p-4 sm:p-6 overflow-hidden">
            {/* Top Bar Label & Action */}
            <div className="flex items-center justify-between mb-4 px-2">
              <div className="flex items-center gap-2">
                <span className="pulse-dot size-1.5 rounded-full bg-accent" />
                <span className="text-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Active Screen: <strong className="text-foreground">{currentActiveScreen.label}</strong>
                </span>
              </div>
              <button
                onClick={() => openLightbox(activeScreenIndex)}
                className="text-mono text-xs uppercase tracking-widest text-accent hover:underline flex items-center gap-1.5"
              >
                🔍 Expand Fullscreen Mode
              </button>
            </div>

            {/* Main Interactive Screen Showcase */}
            <div
              onClick={() => openLightbox(activeScreenIndex)}
              className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden rounded-xl bg-black/80 cursor-zoom-in group border border-white/10"
            >
              <img
                src={currentActiveScreen.src}
                alt={currentActiveScreen.label}
                className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-mono text-xs uppercase tracking-widest text-background bg-accent px-4 py-2 rounded-md font-semibold shadow-lg">
                  Click for Full-Screen View
                </span>
              </div>
            </div>

            {/* Thumbnail Navigation Strip */}
            {project.screens.length > 1 && (
              <div className="mt-6">
                <span className="text-mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-3 px-1">
                  Select Screen Artifact ({activeScreenIndex + 1} of {project.screens.length})
                </span>
                <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-3">
                  {project.screens.map((screen, idx) => {
                    const isSelected = activeScreenIndex === idx;
                    return (
                      <button
                        key={`${screen.label}-${idx}`}
                        onClick={() => setActiveScreenIndex(idx)}
                        className={`relative aspect-[4/3] overflow-hidden rounded-lg border transition-all text-left ${isSelected
                            ? "border-accent ring-2 ring-accent/30 shadow-lg scale-105 z-10"
                            : "border-white/10 opacity-60 hover:opacity-100 hover:border-white/30"
                          }`}
                      >
                        <img
                          src={screen.src}
                          alt={screen.label}
                          className="h-full w-full object-cover object-top"
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-black/80 px-1.5 py-0.5 truncate text-[8px] text-mono text-white/80">
                          {screen.label}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </Reveal>
      </section>

      {/* ── ALL SCREEN ARTIFACTS GALLERY GRID ── */}
      <section className="relative mx-auto max-w-7xl px-6 py-16">
        <Reveal>
          <div className="text-mono mb-2 text-xs uppercase tracking-[0.25em] text-accent">
            / 02 — Screen Artifacts
          </div>
          <h2 className="text-display text-2xl sm:text-3xl font-medium text-foreground mb-8">
            Complete Screen Showcase ({project.screens.length})
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.screens.map((screen, idx) => (
            <Reveal key={`${screen.label}-grid-${idx}`} delay={idx * 50}>
              <div
                onClick={() => openLightbox(idx)}
                className="glass-card glass-card-hover group cursor-pointer overflow-hidden rounded-xl border border-white/10 flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-black/60">
                  <img
                    src={screen.src}
                    alt={screen.label}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-mono text-[10px] uppercase tracking-widest text-accent bg-background/90 border border-accent/30 px-3 py-1.5 rounded backdrop-blur">
                      Expand Lightbox 🔍
                    </span>
                  </div>
                </div>

                <div className="p-4 flex items-center justify-between border-t border-white/5 bg-black/40">
                  <span className="text-mono text-xs text-foreground font-medium truncate">
                    {screen.label}
                  </span>
                  <span className="text-mono text-[10px] text-accent">
                    0{idx + 1}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── NAVIGATION FOOTER ── */}
      <section className="relative mx-auto max-w-7xl px-6 py-12 mb-12">
        <Reveal>
          <div className="glass-card rounded-xl border border-white/10 p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <span className="text-mono text-xs uppercase tracking-widest text-accent block mb-1">
                Explore More Works
              </span>
              <h3 className="text-display text-xl font-bold text-foreground">
                Looking for another case study or custom design system?
              </h3>
            </div>
            <div className="flex items-center gap-4">
              <Link
                to="/projects"
                className="text-mono inline-flex h-11 items-center rounded-md border border-white/20 bg-transparent px-5 text-xs uppercase tracking-[0.2em] text-foreground transition-colors hover:border-accent/40"
              >
                All Projects
              </Link>
              <Link
                to="/contact"
                className="text-mono inline-flex h-11 items-center rounded-md bg-accent px-5 text-xs uppercase tracking-[0.2em] text-background font-semibold transition-transform hover:-translate-y-0.5"
              >
                Hire Nico
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── FULL-SCREEN HIGH-RES LIGHTBOX MODAL ── */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-8 animate-fade-in">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            aria-label="Close Lightbox"
            className="absolute top-6 right-6 z-50 text-white/70 hover:text-accent text-sm text-mono bg-white/10 border border-white/20 px-4 py-2 rounded-lg transition-colors"
          >
            ✕ ESC
          </button>

          {/* Navigation Prev Button */}
          {project.screens.length > 1 && (
            <button
              onClick={prevLightboxImage}
              aria-label="Previous Image"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white/70 hover:text-accent text-2xl bg-black/60 border border-white/10 p-3 rounded-full transition-all hover:scale-110"
            >
              ←
            </button>
          )}

          {/* Lightbox High-Res Container */}
          <div className="relative max-w-6xl max-h-[85vh] flex flex-col items-center justify-center">
            <img
              src={currentLightboxScreen.src}
              alt={currentLightboxScreen.label}
              className="max-h-[75vh] w-auto object-contain rounded-lg border border-white/20 shadow-2xl"
            />

            {/* Screen Caption Bar */}
            <div className="mt-4 flex items-center justify-between gap-6 w-full max-w-2xl px-4 py-2 rounded-lg bg-black/60 border border-white/10 text-mono text-xs">
              <span className="text-accent font-semibold">
                {currentLightboxScreen.label}
              </span>
              <span className="text-white/60">
                {lightboxIndex + 1} of {project.screens.length}
              </span>
            </div>
          </div>

          {/* Navigation Next Button */}
          {project.screens.length > 1 && (
            <button
              onClick={nextLightboxImage}
              aria-label="Next Image"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white/70 hover:text-accent text-2xl bg-black/60 border border-white/10 p-3 rounded-full transition-all hover:scale-110"
            >
              →
            </button>
          )}
        </div>
      )}

      <Footer />
    </div>
  );
}