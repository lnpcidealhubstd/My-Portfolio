import { useRef, useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight, Maximize2, X } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import {
  findProject,
  getCaseStudy,
  type Project,
  type CaseStudy,
  type Screen,
} from "@/lib/portfolio-projects";

const focusClass = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background";

// Shared styles keep actions consistent across the case-study page.
const actionClass = `inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-accent/30 bg-accent/[0.08] px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent/60 hover:bg-accent/15 motion-reduce:transition-none ${focusClass}`;
const iconClass = `inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-white/15 text-foreground transition-colors hover:border-accent/50 hover:bg-accent/10 disabled:cursor-not-allowed disabled:opacity-30 motion-reduce:transition-none ${focusClass}`;
const hasPlaceholders = (study: CaseStudy) => study.sections.some((section) => section.draft || section.body.includes("Placeholder:") || section.items?.some((item) => item.includes("Placeholder:")));

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = findProject(params.slug);
    if (!project) throw notFound();
    return { project, study: getCaseStudy(project) };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.project.title ?? "Project"} | Nico Centeno` },
      { name: "description", content: loaderData?.project.summary ?? "Design project by Nico Centeno." },
    ],
  }),
  notFoundComponent: ProjectNotFound,
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project, study } = Route.useLoaderData();
  if (!study) return <OngoingPreview project={project} />;
  return <ProjectContent key={project.slug} project={project} study={study} />;
}

function ProjectContent({ project, study }: { project: Project; study: CaseStudy }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const screens: readonly Screen[] = project.screens.length
    ? project.screens
    : [{ label: "Project Preview", src: project.cover }];
  const activeScreen = screens[activeIndex] ?? screens[0]!;

  function openImage(index: number) {
    setActiveIndex(index);
    dialogRef.current?.showModal();
  }

  function changeImage(direction: number) {
    setActiveIndex((current) => (current + direction + screens.length) % screens.length);
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-20">
        <Reveal>
          <Link to="/projects" className={actionClass}>
            <ArrowLeft aria-hidden="true" className="size-4" /> All Projects
          </Link>
          <div className="mt-8 flex flex-wrap gap-3 text-xs font-medium">
            <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-2 text-accent">{project.tag}</span>
            {hasPlaceholders(study) && <span className="rounded-full border border-white/10 px-3 py-2 text-muted-foreground">Case study draft</span>}
          </div>
          <h1 className="text-display mt-6 max-w-4xl text-4xl font-medium leading-tight sm:text-6xl">{project.title}</h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground">{project.summary}</p>
          {project.slug === "lodging-technologies" && (
            <a
              href="https://lodgingtechnologies.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${actionClass} mt-6`}
            >
              View Live Website
              <ArrowUpRight aria-hidden="true" className="size-4" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          )}
          <dl className="mt-8 grid gap-6 border-y border-white/10 py-6 sm:grid-cols-2">
            <div><dt className="text-xs text-muted-foreground">My Role</dt><dd className="mt-2 text-sm font-medium">{study.role}</dd></div>
            <div><dt className="text-xs text-muted-foreground">Current Status</dt><dd className="mt-2 text-sm font-medium">{study.status}</dd></div>
          </dl>
          {hasPlaceholders(study) && <p className="mt-5 text-sm leading-7 text-muted-foreground">Some case-study details are still being documented. Unfinished sections are marked as placeholders.</p>}
        </Reveal>

        {project.previewNote && <p className="mt-6 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm leading-7 text-muted-foreground">{project.previewNote}</p>}

        <div className="mt-10">
          <Reveal>
            <button type="button" onClick={() => openImage(activeIndex)} aria-label={`Expand ${activeScreen.label}`} className={`group block w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-3 sm:p-5 ${focusClass}`}>
              <img src={activeScreen.src} alt={`${project.title} — ${activeScreen.label}`} className="max-h-[70vh] w-full rounded-lg object-contain" />
              <span className="mt-4 flex items-center justify-between gap-3 text-left text-sm"><span>{activeScreen.label}</span><span className="inline-flex items-center gap-2 text-accent"><Maximize2 aria-hidden="true" className="size-4" /> Expand</span></span>
            </button>
            {screens.length > 1 && (
              <div aria-label="Choose project preview" className="mt-4 flex flex-wrap gap-2">
                {screens.map((screen, index) => (
                  <button key={`${screen.label}-${index}`} type="button" aria-pressed={activeIndex === index} onClick={() => setActiveIndex(index)} className={`min-h-12 rounded-full border px-4 py-3 text-sm ${focusClass} ${activeIndex === index ? "border-accent/40 bg-accent/10 text-accent" : "border-white/10 text-muted-foreground hover:text-foreground"}`}>{screen.label}</button>
                ))}
              </div>
            )}
          </Reveal>
        </div>

        <div className="mt-16 lg:grid lg:grid-cols-12 lg:gap-12">
          <aside className="mb-8 lg:col-span-3">
            <nav aria-label="Case study sections" className="lg:sticky lg:top-24">
              <p className="mb-4 text-xs font-medium uppercase tracking-widest text-accent">Inside the Case Study</p>
              <ol className="flex flex-wrap gap-2 lg:flex-col">
                {study.sections.map((section, index) => (
                  <li key={section.title}><a href={`#case-section-${index}`} className={`inline-flex min-h-11 items-center rounded-lg px-3 text-sm text-muted-foreground hover:bg-white/5 hover:text-accent ${focusClass}`}>{String(index + 1).padStart(2, "0")} · {section.title}</a></li>
                ))}
              </ol>
            </nav>
          </aside>
          <div className="min-w-0 lg:col-span-9">
            {study.sections.map((section, index) => (
              <section key={section.title} id={`case-section-${index}`} aria-labelledby={`case-heading-${index}`} className="scroll-mt-24 border-t border-white/10 py-8 first:pt-0 first:border-t-0 sm:py-10">
                <Reveal>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs text-accent">{String(index + 1).padStart(2, "0")}</span>
                    <h2 id={`case-heading-${index}`} className="text-display text-2xl font-medium">{section.title}</h2>
                    {section.draft && <span className="rounded-full border border-white/15 px-2.5 py-1 text-xs text-muted-foreground">Placeholder</span>}
                  </div>
                  <p className="mt-5 text-base leading-8 text-muted-foreground">{section.body}</p>
                  {section.items && <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-muted-foreground">{section.items.map((item) => <li key={item}>{item}</li>)}</ul>}
                  {section.title === "Deliverables" && screens.length > 1 && <ul className="mt-5 flex flex-wrap gap-2">{screens.map((screen, screenIndex) => <li key={`${screen.label}-${screenIndex}`}><button type="button" onClick={() => openImage(screenIndex)} className={actionClass}>{screen.label} ↗</button></li>)}</ul>}
                </Reveal>
              </section>
            ))}
          </div>
        </div>

        {screens.length > 1 && <section aria-labelledby="gallery-heading" className="mt-16">
          <h2 id="gallery-heading" className="text-display text-3xl font-medium">Project Gallery</h2>
          <p className="mt-3 text-sm text-muted-foreground">Select a preview to view it at a larger size.</p>
          <div className={`mt-7 grid gap-5 sm:grid-cols-2 ${screens.length > 2 ? "lg:grid-cols-3" : ""}`}>
            {screens.map((screen, index) => (
              <Reveal key={`${screen.label}-gallery-${index}`} delay={(index % 3) * 60}>
                <button type="button" onClick={() => openImage(index)} className={`project-card group block h-full w-full overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] text-left ${focusClass}`}>
                  <div className="overflow-hidden p-3"><img src={screen.src} alt={`${project.title} — ${screen.label}`} loading="lazy" className="project-preview aspect-[16/10] w-full rounded-md object-contain" /></div>
                  <span className="flex items-center justify-between gap-3 border-t border-white/10 p-4 text-sm"><span>{screen.label}</span><Maximize2 aria-hidden="true" className="size-4 shrink-0 text-accent" /></span>
                </button>
              </Reveal>
            ))}
          </div>
        </section>}

        <div className="mt-16 flex flex-wrap items-center justify-between gap-5 border-t border-white/10 pt-8">
          <Link to="/projects" className={actionClass}><ArrowLeft aria-hidden="true" className="size-4" /> All Projects</Link>
          <Link to="/" hash="contact" className={actionClass}>Let’s Talk <ArrowUpRight aria-hidden="true" className="size-4" /></Link>
        </div>
      </main>
      <Footer />

      {/* Native dialog provides Escape handling, focus containment and restoration. */}
      <dialog ref={dialogRef} aria-label={`${project.title} image viewer`} onKeyDown={(event) => {
        if (event.key === "ArrowRight") { event.preventDefault(); changeImage(1); }
        if (event.key === "ArrowLeft") { event.preventDefault(); changeImage(-1); }
      }} className="fixed inset-0 m-auto max-h-[94dvh] w-[calc(100%-2rem)] max-w-6xl overflow-auto rounded-2xl border border-white/20 bg-background p-4 text-foreground shadow-2xl backdrop:bg-black/90 sm:p-6">
        <div className="mb-4 flex items-center justify-between gap-3">
          <p className="text-sm font-medium">{activeScreen.label}</p>
          <button type="button" autoFocus onClick={() => dialogRef.current?.close()} aria-label="Close image viewer" className={iconClass}><X aria-hidden="true" className="size-5" /></button>
        </div>
        <img src={activeScreen.src} alt={`${project.title} — ${activeScreen.label}`} className="max-h-[70dvh] w-full object-contain" />
        <div className="mt-4 flex items-center justify-between gap-3">
          <button type="button" disabled={screens.length < 2} onClick={() => changeImage(-1)} aria-label="Previous image" className={iconClass}><ArrowLeft aria-hidden="true" className="size-4" /></button>
          <p aria-live="polite" className="text-xs text-muted-foreground">{activeIndex + 1} of {screens.length}</p>
          <button type="button" disabled={screens.length < 2} onClick={() => changeImage(1)} aria-label="Next image" className={iconClass}><ArrowRight aria-hidden="true" className="size-4" /></button>
        </div>
      </dialog>
    </div>
  );
}

function ProjectNotFound() {
  return <div className="min-h-screen bg-background text-foreground"><Nav /><main className="mx-auto max-w-3xl px-6 py-24 text-center"><h1 className="text-display text-3xl">Project not found.</h1><Link to="/projects" className={`mt-6 inline-flex min-h-11 items-center rounded-lg px-4 text-accent ${focusClass}`}>View All Projects</Link></main><Footer /></div>;
}

function OngoingPreview({ project }: { project: Project }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="mx-auto max-w-5xl px-5 py-16 sm:px-6">
        <Link to="/projects" className={`inline-flex min-h-11 items-center gap-2 rounded-lg text-sm text-accent ${focusClass}`}><ArrowLeft aria-hidden="true" className="size-4" /> All Projects</Link>
        <p className="mt-8 text-sm text-accent">Ongoing</p>
        <h1 className="text-display mt-4 text-4xl font-medium">{project.title}</h1>
        <img src={project.cover} alt={`${project.title} design preview`} className="mt-8 h-auto w-full rounded-2xl border border-white/10" />
        <p className="mt-6 text-sm text-muted-foreground">This project is ongoing. A full case study will be added later.</p>
      </main>
      <Footer />
    </div>
  );
}
