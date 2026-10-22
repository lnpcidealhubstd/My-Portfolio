import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { PORTFOLIO_PROJECTS } from "@/lib/portfolio-projects";

const focusClass = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects | Nico Centeno" },
      { name: "description", content: "UI/UX design and project management work, featuring Lodging Technologies and Everest Energy Solutions." },
    ]
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const featuredProjects = PORTFOLIO_PROJECTS.filter((project) => project.hasCaseStudy);
  const ongoingProjects = PORTFOLIO_PROJECTS.filter((project) => !project.hasCaseStudy);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-24">
        <Reveal>
          <p className="text-xs uppercase tracking-widest text-accent">Selected Work</p>
          <h1 className="text-display mt-4 text-4xl font-medium sm:text-6xl">Projects & Case Studies</h1>
          <p className="mb-10 mt-5 max-w-2xl text-base leading-8 text-muted-foreground">UI/UX design and project management across phased implementations and completed digital experiences.</p>
        </Reveal>
        <div className="space-y-6">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 80}>
              <article className="project-card group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
                <div className="grid lg:grid-cols-5">
                  <div className="flex min-w-0 items-center overflow-hidden bg-white/[0.03] p-3 sm:p-5 lg:col-span-3">
                    {project.cover ? (
                      <img src={project.cover} alt={`${project.title} — ${project.previewNote ? "temporary design preview" : "website preview"}`} loading="lazy" className="project-preview aspect-[16/10] w-full rounded-lg object-contain" />
                    ) : (
                      <p className="flex aspect-[16/10] w-full items-center justify-center p-8 text-center text-sm text-muted-foreground">Project screenshots coming soon.</p>
                    )}
                  </div>
                  <div className="flex flex-col justify-center p-6 sm:p-8 lg:col-span-2">
                    <p className="text-xs font-medium uppercase tracking-widest text-accent">{index === 0 ? "01 / Lead Project" : "02 / Completed Project"}</p>
                    <h3 className="text-display mt-4 text-2xl font-medium sm:text-3xl">{project.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-muted-foreground">{project.summary}</p>
                    <dl className="mt-6 space-y-4 border-t border-white/10 pt-5">
                      <div><dt className="text-xs text-muted-foreground">My Role</dt><dd className="mt-1 text-sm font-medium">{project.role}</dd></div>
                      <div><dt className="text-xs text-muted-foreground">Status</dt><dd className="mt-1 text-sm text-accent">{project.status}</dd></div>
                    </dl>
                    <Link to="/projects/$slug" params={{ slug: project.slug }} className={`mt-6 inline-flex min-h-11 w-fit items-center gap-2 rounded-lg text-sm font-medium text-accent ${focusClass}`}>
                      View Case Study <ArrowUpRight aria-hidden="true" className="project-arrow size-4" />
                    </Link>
                  </div>
                </div>
                {project.previewNote && <p className="border-t border-white/10 px-6 py-4 text-xs leading-6 text-muted-foreground">{project.previewNote}</p>}
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-display text-2xl font-medium">More Work in Progress</h3>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">A preview of ongoing design projects. Full case studies will follow.</p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ongoingProjects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 70} className="h-full">
                <article className="project-card group h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
                  <div className="overflow-hidden bg-white/[0.03] p-3">
                    <img src={project.cover} alt={`${project.title} design preview`} loading="lazy" className="project-preview aspect-[16/10] w-full rounded-lg object-contain" />
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 p-5">
                    <h4 className="text-base font-medium">{project.title}</h4>
                    <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs text-accent">Ongoing</span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
