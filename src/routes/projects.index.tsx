import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Ambient } from "@/components/site/Ambient";
import { Reveal } from "@/components/site/Reveal";
import { DESIGN_PROJECTS } from "@/lib/site-data";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — Nico Centeno" },
      {
        name: "description",
        content: "Archive of UI/UX design case studies and digital product architecture by Nico Centeno.",
      },
    ],
  }),
  component: ProjectsIndex,
});

function ProjectsIndex() {
  const featuredProject = DESIGN_PROJECTS[0];
  const gridProjects = DESIGN_PROJECTS.slice(1);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* ── HEADER SECTION ── */}
      <section className="relative overflow-hidden pt-24 pb-16">
        <Ambient />
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="text-mono mb-4 text-xs uppercase tracking-[0.25em] text-accent flex items-center gap-2">
              <span className="pulse-dot size-1.5 rounded-full bg-accent" />
              / 03 — Artifacts &amp; Case Studies
            </div>
            <h1 className="text-display text-4xl font-medium leading-tight sm:text-6xl lg:text-7xl">
              Selected <span className="neon-text text-accent">Projects.</span>
            </h1>
            <p className="mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-muted-foreground">
              A comprehensive showcase of high-precision UI/UX systems, web application interfaces, mobile app concepts, and design system registries engineered in Figma.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── FEATURED WIDE PROJECT SHOWCASE (EES) ── */}
      <section className="relative mx-auto max-w-7xl px-6 py-8">
        <Reveal>
          <div className="text-mono mb-6 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Featured Case Study
          </div>
          <Link
            to="/projects/$slug"
            params={{ slug: featuredProject.slug }}
            className="glass-card glass-card-hover group block overflow-hidden rounded-2xl border border-white/10"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-8 relative aspect-[16/9] lg:aspect-auto overflow-hidden bg-black/60">
                <img
                  src={featuredProject.cover}
                  alt={featuredProject.title}
                  loading="eager"
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent lg:hidden" />
              </div>
              <div className="lg:col-span-4 p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <span className="text-mono text-[10px] uppercase tracking-[0.2em] text-accent bg-accent/10 px-2.5 py-1 rounded border border-accent/20 block w-fit mb-4">
                    {featuredProject.tag}
                  </span>
                  <h2 className="text-display text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {featuredProject.title}
                  </h2>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                    {featuredProject.summary}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-mono text-[11px] text-accent font-semibold flex items-center gap-2">
                    Explore Case Study &amp; 9 Screen Artifacts →
                  </span>
                  <span className="text-mono text-[10px] text-muted-foreground">Complete</span>
                </div>
              </div>
            </div>
          </Link>
        </Reveal>
      </section>

      {/* ── PROJECT ARCHIVE GRID ── */}
      <section className="relative mx-auto max-w-7xl px-6 py-16">
        <Reveal>
          <div className="text-mono mb-8 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            A · UI/UX &amp; Active Projects
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {gridProjects.map((project, idx) => (
            <Reveal key={project.slug} delay={idx * 80}>
              <Link
                to="/projects/$slug"
                params={{ slug: project.slug }}
                className="glass-card glass-card-hover group block overflow-hidden rounded-xl border border-white/10 h-full flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[4/3] overflow-hidden bg-black/50">
                    <img
                      src={project.cover}
                      alt={project.title}
                      loading="lazy"
                      className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute left-3 top-3 rounded bg-background/80 px-2.5 py-1 text-mono text-[9px] uppercase tracking-wider text-foreground backdrop-blur border border-white/10">
                      {project.tag}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-display text-lg font-medium text-foreground group-hover:text-accent transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                      {project.summary}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <span className="text-mono text-[10px] text-accent uppercase tracking-widest group-hover:underline flex items-center gap-1">
                    View Project Screens →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── FOOTER CALLOUT ── */}
      <section className="relative mx-auto max-w-7xl px-6 py-16 mb-12">
        <Reveal>
          <div className="glass-card rounded-xl border border-white/10 p-8 sm:p-12 text-center">
            <div className="text-mono mb-2 text-xs uppercase tracking-[0.25em] text-accent">
              / 04 — Need a custom design system?
            </div>
            <h2 className="text-display text-2xl sm:text-3xl font-medium text-foreground mb-4">
              Let's turn your product ideas into production-ready interfaces.
            </h2>
            <Link
              to="/contact"
              className="text-mono inline-flex h-11 items-center rounded-md bg-accent px-6 text-xs uppercase tracking-[0.2em] text-background font-semibold transition-transform hover:-translate-y-0.5"
            >
              Start a Conversation →
            </Link>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}