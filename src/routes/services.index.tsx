import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { SERVICES } from "@/lib/site-data";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Lorenzo Nicholas Centeno" },
      { name: "description", content: "High-velocity UI/UX, AI-native product architecture, and technical operations consulting." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <section className="mx-auto max-w-7xl px-6 pt-28 pb-16">
        <Reveal>
          <div className="text-mono mb-6 text-xs uppercase tracking-[0.25em] text-accent">Services</div>
          <h1 className="text-display max-w-4xl text-5xl font-medium leading-[1.02] sm:text-7xl">
            Three practices, one operating system.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            Each engagement is scoped around a clear deliverable and an explicit velocity target. No retainer fluff.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="divide-y hairline border-y hairline">
          {SERVICES.map((svc, i) => (
            <Reveal key={svc.slug} delay={i * 60}>
              <Link
                to="/services/$slug"
                params={{ slug: svc.slug }}
                className="group grid grid-cols-12 items-center gap-6 py-10 transition-colors hover:bg-surface/50"
              >
                <div className="text-mono col-span-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  {svc.index}
                </div>
                <div className="col-span-7">
                  <h2 className="text-display text-2xl font-medium leading-tight transition-colors group-hover:text-accent sm:text-4xl">
                    {svc.title}
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm text-muted-foreground">{svc.short}</p>
                </div>
                <div className="text-mono col-span-3 text-right text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  <span className="inline-block transition-transform group-hover:translate-x-2">View →</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
