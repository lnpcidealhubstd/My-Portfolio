import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { SERVICES } from "@/lib/site-data";

type Phase = {
  k: string;
  t: string;
  b: string;
};

type Detail = {
  phases: Phase[];
  outcome: string;
};

const DETAILS: Record<string, Detail> = {
  "ui-ux-prototyping": {
    phases: [
      {
        k: "01",
        t: "Discovery & Requirements",
        b: "Understand business objectives, user needs, existing challenges, and the scope of the experience.",
      },
      {
        k: "02",
        t: "User Flows & Wireframes",
        b: "Organize information, map key journeys, and explore layouts before committing to visual design.",
      },
      {
        k: "03",
        t: "Interface & Design System",
        b: "Create responsive interfaces, reusable components, and consistent visual foundations in Figma.",
      },
      {
        k: "04",
        t: "Prototype & Feedback",
        b: "Connect key screens into interactive prototypes, gather stakeholder feedback, and refine important interactions.",
      },
      {
        k: "05",
        t: "Developer Handoff",
        b: "Prepare design assets, component states, and implementation notes. Coordinate with development to clarify design decisions.",
      },
    ],
    outcome:
      "Clear interface designs, interactive prototypes, and reusable design foundations, with handoff documentation matched to the agreed scope.",
  },
  "ai-native-architecture": {
    phases: [
      {
        k: "01",
        t: "Discovery & Alignment",
        b: "Clarify the project goals, stakeholders, requirements, and expected deliverables.",
      },
      {
        k: "02",
        t: "Scope & Milestones",
        b: "Break the work into manageable phases, define priorities, and agree on milestones and dependencies.",
      },
      {
        k: "03",
        t: "Team Coordination",
        b: "Coordinate design and development tasks, communicate decisions, and keep responsibilities clear.",
      },
      {
        k: "04",
        t: "Progress & Feedback",
        b: "Track delivery progress, organize reviews, document feedback, and surface blockers or scope changes.",
      },
      {
        k: "05",
        t: "Review & Handover",
        b: "Review deliverables against agreed requirements, coordinate revisions, and document the next steps for handover.",
      },
    ],
    outcome:
      "An organized delivery process with documented scope, clear priorities, stakeholder visibility, and coordinated handover.",
  },
};

const focusClass =
  "focus-visible:outline-none focus-visible:ring-2 " +
  "focus-visible:ring-accent focus-visible:ring-offset-4 " +
  "focus-visible:ring-offset-background";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = SERVICES.find((item) => item.slug === params.slug);
    const detail = DETAILS[params.slug];

    if (!service || !detail) {
      throw notFound();
    }

    return { service, detail };
  },

  head: ({ loaderData }) =>
    loaderData
      ? {
        meta: [
          { title: `${loaderData.service.title} | Nico Centeno` },
          {
            name: "description",
            content: loaderData.service.short,
          },
        ],
      }
      : {},

  notFoundComponent: ServiceNotFound,
  errorComponent: ServiceError,
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service, detail } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      <main>
        <section className="mx-auto max-w-7xl px-5 pb-12 pt-12 sm:px-6 sm:pt-20">
          <Reveal>
            <Link
              to="/services"
              className={`inline-flex min-h-11 items-center gap-2 rounded-md text-sm text-muted-foreground hover:text-accent ${focusClass}`}
            >
              <ArrowLeft aria-hidden="true" className="size-4" />
              Back to Services
            </Link>

            <p className="mt-8 text-xs font-medium uppercase tracking-widest text-accent">
              Service · {service.index}
            </p>

            <h1 className="text-display mt-4 max-w-4xl text-4xl font-medium leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {service.title}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              {service.short}
            </p>
          </Reveal>
        </section>

        <section
          aria-labelledby="workflow-heading"
          className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-16"
        >
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-widest text-accent">
              The Process
            </p>
            <h2
              id="workflow-heading"
              className="text-display mt-4 text-3xl font-medium sm:text-4xl"
            >
              How we move forward.
            </h2>
          </Reveal>

          <ol className="mt-8 grid gap-5 md:grid-cols-2">
            {detail.phases.map((phase, index) => (
              <li key={phase.k}>
                <Reveal delay={index * 50} className="h-full">
                  <article className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
                    <p className="text-sm font-medium text-accent">
                      {phase.k}
                    </p>
                    <h3 className="text-display mt-5 text-xl font-medium">
                      {phase.t}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {phase.b}
                    </p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>
        </section>

        <section
          aria-labelledby="deliverables-heading"
          className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-16"
        >
          <Reveal>
            <div className="rounded-2xl border border-accent/20 bg-accent/[0.04] p-7 sm:p-12">
              <h2
                id="deliverables-heading"
                className="text-sm font-medium uppercase tracking-widest text-accent"
              >
                What We Work Toward
              </h2>

              <p className="text-display mt-5 max-w-4xl text-2xl font-medium leading-relaxed sm:text-3xl">
                {detail.outcome}
              </p>

              <Link
                to="/"
                hash="contact"
                className={`mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-background hover:bg-accent/90 ${focusClass}`}
              >
                Let’s Talk
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </Link>
            </div>
          </Reveal>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function ServiceNotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-display text-3xl font-medium">
          Service not found.
        </h1>
        <p className="mt-4 text-muted-foreground">
          Explore the available services below.
        </p>
        <Link
          to="/services"
          className={`mt-6 inline-flex min-h-11 items-center rounded-lg px-4 text-accent ${focusClass}`}
        >
          View Services
        </Link>
      </main>
      <Footer />
    </div>
  );
}

function ServiceError({ reset }: { reset: () => void }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-display text-3xl font-medium">
          Unable to load this service.
        </h1>
        <button
          type="button"
          onClick={reset}
          className={`mt-6 inline-flex min-h-11 items-center rounded-lg bg-accent px-5 text-sm font-semibold text-background ${focusClass}`}
        >
          Try Again
        </button>
      </main>
      <Footer />
    </div>
  );
}