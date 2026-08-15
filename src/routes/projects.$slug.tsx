import { createFileRoute, notFound } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { BackButton } from "@/components/site/BackButton";
import { Reveal } from "@/components/site/Reveal";
import { DESIGN_PROJECTS } from "@/lib/site-data";

type DesignProject = (typeof DESIGN_PROJECTS)[number];
type Project = DesignProject;

function findProject(slug: string): { project: Project; kind: "design" } | null {
  const d = DESIGN_PROJECTS.find((p) => p.slug === slug);
  if (d) return { project: d, kind: "design" };
  return null;
}

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const found = findProject(params.slug);
    if (!found) throw notFound();
    return found;
  },
  head: ({ loaderData }) =>
    loaderData
      ? {
          meta: [
            { title: `${loaderData.project.title} — Case Study` },
            { name: "description", content: loaderData.project.summary },
          ],
        }
      : {},
  notFoundComponent: () => (
    <div className="min-h-screen bg-background">
      <Nav />
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="text-display text-3xl">Project not found.</h1>
      </div>
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="min-h-screen bg-background">
      <Nav />
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <button onClick={reset} className="text-mono text-sm uppercase tracking-[0.2em]">Retry</button>
      </div>
    </div>
  ),
  component: ProjectDetail,
});

function DesignBody({ p }: { p: DesignProject }) {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-12">
        <Reveal>
          <div className="relative aspect-[16/9] overflow-hidden rounded-xl border hairline">
            <img
              src={p.cover}
              alt={p.title}
              className="h-full w-full object-cover object-top"
            />
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <Reveal>
          <div className="text-mono mb-8 text-xs uppercase tracking-[0.25em] text-muted-foreground">All Screens</div>
        </Reveal>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {p.screens.map((s, i) => (
            <Reveal key={s.label} delay={i * 60}>
              <div className="overflow-hidden rounded-xl border hairline bg-surface-elevated">
                <img
                  src={s.src}
                  alt={s.label}
                  loading="lazy"
                  className="w-full object-cover object-top"
                />
                <div className="px-4 py-3 text-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}


function ProjectDetail() {
  const { project, kind } = Route.useLoaderData();
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <BackButton to="/projects" label="Back to Projects" />

      <section className="mx-auto max-w-7xl px-6 pt-16 pb-8">
        <Reveal>
          <div className="text-mono mb-6 text-xs uppercase tracking-[0.25em] text-accent">
            {project.tag}
          </div>
          <h1 className="text-display max-w-5xl text-5xl font-medium leading-[1.02] sm:text-7xl">{project.title}</h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">{project.summary}</p>
        </Reveal>
      </section>

  {kind === "design" && <DesignBody p={project as DesignProject} />}

      <Footer />
    </div>
  );
}
