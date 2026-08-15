import { createFileRoute, notFound } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { BackButton } from "@/components/site/BackButton";
import { Reveal } from "@/components/site/Reveal";
import { SERVICES } from "@/lib/site-data";

type Phase = { k: string; t: string; b: string };
type Detail = { phases: Phase[]; outcome: string };
const DETAILS: Record<string, Detail> = {
  "ui-ux-prototyping": {
    phases: [
      { k: "01", t: "Discovery & Audit", b: "Map current surface, IA, and component debt. Identify the single highest-leverage redesign target." },
      { k: "02", t: "Auto-Layout Foundation", b: "Engineer a Figma base with strict tokens, responsive frames, and a documented component spec." },
      { k: "03", t: "Component System", b: "Build a typed, variant-driven library — buttons, fields, surfaces, navigation — designed for code parity." },
      { k: "04", t: "High-Fidelity Flows", b: "Production-quality screens for every critical state: empty, loading, error, success, edge." },
      { k: "05", t: "Live Code Sync", b: "Hand-off to a working React + Tailwind implementation with the same token graph as Figma." },
    ],
    outcome: "A shipped, observable product surface with a maintainable design system — not a deck.",
  },
  "ai-native-architecture": {
    phases: [
      { k: "01", t: "UX Audit at Velocity", b: "Run an AI-augmented audit across flows, copy, and accessibility in hours, not weeks." },
      { k: "02", t: "Feature Mapping", b: "Translate ambiguous product intent into a structured map of features, surfaces, and data contracts." },
      { k: "03", t: "Prompt & Logic Layer", b: "Design the proprietary orchestration — routing, tools, guardrails, evals — that powers the product." },
      { k: "04", t: "Security & Boundaries", b: "Define trust boundaries, secret handling, and rate posture before a single token is spent in production." },
      { k: "05", t: "Production Wiring", b: "Ship the AI surface integrated with auth, persistence, and observable feedback loops." },
    ],
    outcome: "An AI product that is fast, safe, and explainable — owned end-to-end.",
  },
  "technical-operations": {
    phases: [
      { k: "01", t: "Baseline & Inventory", b: "Document hardware, OS, network topology, and service dependencies." },
      { k: "02", t: "OS Install / Reformat", b: "Clean provisioning of Windows, macOS, or Linux with hardened defaults and verified driver stacks." },
      { k: "03", t: "Diagnostics", b: "Targeted hardware and performance diagnostics — disk, memory, thermals, network throughput." },
      { k: "04", t: "Optimization", b: "Kernel, service, and pipeline tuning for measurable throughput and latency gains." },
      { k: "05", t: "Network Configuration", b: "Routing, VLANs, firewall posture, and remote-access setup with documented runbooks." },
    ],
    outcome: "A measurably faster, more reliable operating environment with documentation you can hand to anyone.",
  },
};

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const svc = SERVICES.find((s) => s.slug === params.slug);
    const detail = DETAILS[params.slug];
    if (!svc || !detail) throw notFound();
    return { svc, detail };
  },
  head: ({ loaderData }) =>
    loaderData
      ? {
          meta: [
            { title: `${loaderData.svc.title} — Lorenzo Nicholas Centeno` },
            { name: "description", content: loaderData.svc.short },
          ],
        }
      : {},
  notFoundComponent: () => (
    <div className="min-h-screen bg-background">
      <Nav />
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="text-display text-3xl">Service not found.</h1>
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
  component: ServiceDetail,
});

function ServiceDetail() {
  const { svc, detail } = Route.useLoaderData() as { svc: (typeof SERVICES)[number]; detail: Detail };
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <BackButton to="/services" label="Back to Services" />

      <section className="mx-auto max-w-7xl px-6 pt-16 pb-12">
        <Reveal>
          <div className="text-mono mb-6 text-xs uppercase tracking-[0.25em] text-accent">
            Service · {svc.index}
          </div>
          <h1 className="text-display max-w-5xl text-5xl font-medium leading-[1.02] sm:text-7xl">{svc.title}</h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">{svc.short}</p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <Reveal>
          <div className="text-mono mb-10 text-xs uppercase tracking-[0.25em] text-muted-foreground">Workflow</div>
        </Reveal>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border hairline bg-hairline md:grid-cols-2 lg:grid-cols-5">
          {detail.phases.map((p, i) => (
            <Reveal key={p.k} delay={i * 50}>
              <div className="glass-card glass-card-hover h-full p-6">
                <div className="text-mono text-xs uppercase tracking-[0.25em] text-accent">{p.k}</div>
                <h3 className="text-display mt-8 text-xl font-medium">{p.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <Reveal>
          <div className="glass-card rounded-xl p-10 sm:p-14">
            <div className="text-mono mb-4 text-xs uppercase tracking-[0.25em] text-accent">Outcome</div>
            <p className="text-display text-2xl leading-snug sm:text-4xl">{detail.outcome}</p>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}
