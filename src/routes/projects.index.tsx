import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { DESIGN_PROJECTS } from "@/lib/site-data";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — Lorenzo Nicholas Centeno" },
      { name: "description", content: "Featured UI/UX, design, and technical operations case studies." },
    ],
  }),
  component: ProjectsPage,
});

function DesignCard({ p, i }: { p: (typeof DESIGN_PROJECTS)[number]; i: number }) {
  return (
    <Reveal delay={i * 60}>
      <Link
        to="/projects/$slug"
        params={{ slug: p.slug }}
        className="glass-card glass-card-hover group block overflow-hidden rounded-xl"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-surface-elevated">
          <img
            src={p.cover}
            alt={p.title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-md border hairline bg-background/70 px-3 py-1.5 text-mono text-[10px] uppercase tracking-[0.2em] text-foreground backdrop-blur">
            {p.tag}
          </div>
          <div className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-md border hairline bg-background/60 px-3 py-1.5 text-mono text-[10px] uppercase tracking-[0.2em] text-foreground opacity-0 backdrop-blur transition-opacity duration-500 group-hover:opacity-100">
            View Case Study →
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-display text-xl font-medium">{p.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{p.summary}</p>
        </div>
      </Link>
    </Reveal>
  );
}

function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <section className="mx-auto max-w-7xl px-6 pt-28 pb-12">
        <Reveal>
          <div className="text-mono mb-6 text-xs uppercase tracking-[0.25em] text-accent">Projects</div>
          <h1 className="text-display max-w-4xl text-5xl font-medium leading-[1.02] sm:text-7xl">
            Selected work.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            A working archive of UI/UX and product design work.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <Reveal>
          <div className="text-mono mb-8 flex items-baseline gap-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            <span className="text-accent">A</span>
            <span>UI/UX & Design</span>
            <span className="ml-auto hidden text-muted-foreground/60 sm:inline">Hover to preview internal flow</span>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {DESIGN_PROJECTS.map((p, i) => (
            <DesignCard key={p.slug} p={p} i={i} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
