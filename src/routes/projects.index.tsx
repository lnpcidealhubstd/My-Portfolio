import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PORTFOLIO_PROJECTS, type Project } from "@/lib/portfolio-projects";

const focusClass =
  "focus-visible:outline-none focus-visible:ring-2 " +
  "focus-visible:ring-accent focus-visible:ring-offset-4 " +
  "focus-visible:ring-offset-background";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects | Nico Centeno" },
      {
        name: "description",
        content:
          "Explore Nico Centeno’s interface design, project management, and digital ordering projects.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectCard({
  project,
  index,
  compact = false,
}: {
  project: Project;
  index: number;
  compact?: boolean;
}) {
  return (
    <article
      className={[
        "group flex h-full min-w-0 flex-col overflow-hidden",
        "rounded-2xl border bg-background",
        "transition-colors duration-300 motion-reduce:transition-none",
        !compact && index === 0
          ? "border-accent/30"
          : "border-foreground/10 hover:border-accent/30",
      ].join(" ")}
    >
      <Link
        to="/projects/$slug"
        params={{ slug: project.slug }}
        aria-label={`View ${project.title}`}
        className={`block rounded-t-2xl p-3 ${focusClass}`}
      >
        <div className="flex aspect-video items-center justify-center overflow-hidden rounded-xl bg-foreground/[0.03]">
          {project.cover ? (
            <img
              src={project.cover}
              alt={`${project.title} — project preview`}
              loading="lazy"
              width={1600}
              height={900}
              className="h-full w-full object-contain"
            />
          ) : (
            <span className="px-5 text-center text-sm text-muted-foreground">
              Project preview coming soon.
            </span>
          )}
        </div>
      </Link>

      <div className="flex flex-1 flex-col px-5 pb-5 pt-2 sm:px-6 sm:pb-6">
        {!compact && (
          <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
            {String(index + 1).padStart(2, "0")} / {index === 0 ? "Lead Project" : "Selected Work"}
          </p>
        )}

        <h2
          className={[
            "text-display font-medium tracking-tight",
            compact ? "text-lg" : "text-xl sm:text-2xl",
          ].join(" ")}
        >
          {project.title}
        </h2>

        {!compact && <p className="mt-2 text-xs leading-6 text-muted-foreground">{project.role}</p>}

        <p className="mt-2 text-xs leading-6 text-accent">{project.status}</p>

        <div className="mt-auto pt-4">
          <Link
            to="/projects/$slug"
            params={{ slug: project.slug }}
            className={[
              "inline-flex min-h-11 items-center gap-2 rounded-full",
              "border border-foreground/15 px-4 text-sm font-medium",
              "transition-colors hover:border-accent/50",
              "hover:bg-accent/10 hover:text-accent",
              "motion-reduce:transition-none",
              focusClass,
            ].join(" ")}
          >
            {compact ? "View Preview" : "View Project"}
            <ArrowUpRight aria-hidden="true" className="size-4" />
            <span className="sr-only">: {project.title}</span>
          </Link>
        </div>
      </div>
    </article>
  );
}

function ProjectsPage() {
  const featuredProjects = PORTFOLIO_PROJECTS.filter((project) => project.hasCaseStudy);

  const ongoingProjects = PORTFOLIO_PROJECTS.filter((project) => !project.hasCaseStudy);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      <main id="projects-list" className="mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py-16">
        <Link
          to="/"
          hash="projects"
          hashScrollIntoView={{ behavior: "instant", block: "start" }}
          className={`inline-flex min-h-11 items-center gap-2 rounded-lg text-sm text-muted-foreground hover:text-accent ${focusClass}`}
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          Back to Portfolio
        </Link>

        <header className="mb-8 mt-7 sm:mb-10">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Selected Work
          </p>

          <h1 className="text-display mt-4 text-4xl font-medium tracking-tight sm:text-5xl">
            Projects & Case Studies
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
            Interface design, collaborative delivery, and connected digital experiences.
          </p>
        </header>

        <section aria-label="Featured projects">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-12">
            {featuredProjects.map((project, index) => (
              <div
                key={project.slug}
                className={[
                  "min-w-0",
                  index % 4 === 0 || index % 4 === 3 ? "lg:col-span-7" : "lg:col-span-5",
                ].join(" ")}
              >
                <ProjectCard project={project} index={index} />
              </div>
            ))}
          </div>
        </section>

        {ongoingProjects.length > 0 && (
          <section
            aria-labelledby="ongoing-heading"
            className="mt-12 border-t border-foreground/10 pt-8"
          >
            <h2 id="ongoing-heading" className="text-display text-2xl font-medium">
              More Work in Progress
            </h2>

            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              A first look at ongoing design projects.
            </p>

            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {ongoingProjects.map((project, index) => (
                <ProjectCard key={project.slug} project={project} index={index} compact />
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
