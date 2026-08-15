import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import nicolasPng from "@/assets/nicolas.png";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

const COMPETENCIES = [
  { label: "Rapid Prototyping (AI)", icon: "⚡" },
  { label: "Interactive Wireframing", icon: "🎨" },
  { label: "Design Systems", icon: "🧩" },
  { label: "UX Research", icon: "🔍" },
  { label: "Component Architecture", icon: "⚙️" },
  { label: "Figma Auto-Layout", icon: "📐" },
];

const EXPERIENCE = [
  {
    year: "Now",
    title: "UI/UX Designer — AI-Native Products",
    body: "End-to-end product design across web and mobile — wireframes, design systems, and high-fidelity prototypes ready for engineering hand-off.",
  },
  {
    year: "Prior",
    title: "Product Design & Visual Architecture",
    body: "Figma-first design workflows, component systems engineering, and rapid iteration cycles across fintech, healthcare, and energy sectors.",
  },
  {
    year: "Always",
    title: "AI-Augmented Design",
    body: "Leveraging advanced AI orchestration for UX auditing, feature mapping, and accelerating design velocity at scale.",
  },
];

function AboutPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen w-full bg-zinc-950 text-zinc-100 selection:bg-zinc-800 selection:text-zinc-100">
      <Nav />

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 pt-28 pb-12">
        <Reveal>
          <div className="mb-6 text-xs uppercase tracking-[0.25em] text-zinc-400">
            Profile
          </div>
          <h1 className="max-w-5xl text-5xl font-medium leading-[1.05] tracking-tight sm:text-7xl">
            Designing experiences that are fast, focused, and built to last.
          </h1>
        </Reveal>
      </section>

      {/* Biography & Main Copy Section */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-12 md:grid-cols-12">
        {/* Fixed Profile Image Section (No hover filter / color shifts) */}
        <Reveal className="md:col-span-4">
          <div className="relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-2 backdrop-blur-sm shadow-2xl">
            <div className="overflow-hidden rounded-xl border border-zinc-800/50">
              <img
                src={nicolasPng}
                alt="Nico Centeno"
                className="w-full object-cover object-top"
              />
            </div>
          </div>
        </Reveal>

        {/* Content Section */}
        <Reveal delay={80} className="md:col-span-7 md:col-start-6">
          <div className="space-y-6 text-lg leading-relaxed text-zinc-300">
            <p className="transition-colors duration-300 hover:text-zinc-100">
              I design high-fidelity user interfaces and product experiences using
              <strong className="text-zinc-100 font-semibold"> Figma</strong> — from early wireframes to
              production-ready design systems and interactive prototypes.
            </p>
            <p className="transition-colors duration-300 hover:text-zinc-100">
              I combine design craft with <strong className="text-zinc-100 font-semibold">AI-native workflows</strong> to
              accelerate UX auditing, feature mapping, and rapid iteration — delivering polished products at unusual velocity.
            </p>
            <p className="transition-colors duration-300 hover:text-zinc-100">
              Every project is approached with strict documentation, clear component architecture, and a focus on seamless engineering hand-off.
            </p>
          </div>

          {/* Key Competencies Badges */}
          <div className="mt-12 pt-8 border-t border-zinc-800/80">
            <div className="mb-6 text-xs uppercase tracking-[0.25em] text-zinc-500">
              Key Competencies
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {COMPETENCIES.map((c, i) => (
                <div
                  key={c.label}
                  className="group flex items-center gap-3 rounded-lg border border-zinc-800/80 bg-zinc-900/40 p-3 text-xs font-medium text-zinc-300 backdrop-blur-sm transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/80 hover:translate-y-[-2px]"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  <span className="text-base transition-transform duration-300 group-hover:scale-110">
                    {c.icon}
                  </span>
                  <span>{c.label}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Experience Section */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <Reveal>
          <div className="mb-10 text-xs uppercase tracking-[0.25em] text-zinc-500">
            Experience
          </div>
        </Reveal>
        <div className="divide-y divide-zinc-800/80 border-y border-zinc-800/80">
          {EXPERIENCE.map((e, i) => (
            <Reveal key={e.title} delay={i * 60}>
              <div className="group grid grid-cols-12 gap-6 py-8 transition-colors duration-300 hover:bg-zinc-900/20 px-2 rounded-lg">
                <div className="col-span-12 text-xs uppercase tracking-[0.25em] text-zinc-400 sm:col-span-2">
                  {e.year}
                </div>
                <div className="col-span-12 sm:col-span-6">
                  <h3 className="text-xl font-medium text-zinc-100 transition-colors duration-300 group-hover:text-white sm:text-2xl">
                    {e.title}
                  </h3>
                </div>
                <p className="col-span-12 text-sm text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300 sm:col-span-4">
                  {e.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <Reveal>
          <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-8 backdrop-blur-sm transition-all duration-500 hover:border-zinc-700 sm:p-12">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
              <div className="md:col-span-5">
                <div className="mb-4 text-xs uppercase tracking-[0.25em] text-zinc-400">
                  Contact
                </div>
                <h2 className="text-3xl font-medium leading-tight text-zinc-100 sm:text-4xl">
                  Have a project? Start the conversation.
                </h2>
                <p className="mt-4 text-sm text-zinc-400">
                  Outline the scope, constraints, and hardware or design requirements. I respond within two business days.
                </p>
              </div>

              <form
                className="md:col-span-6 md:col-start-7"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                {sent ? (
                  <div className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-8 text-center animate-fade-in">
                    <div className="mb-2 text-xs uppercase tracking-[0.25em] text-zinc-400">
                      Received
                    </div>
                    <p className="text-xl text-zinc-100">
                      Thanks. I&apos;ll be in touch shortly.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <Field label="Name" name="name" placeholder="Jane Doe" />
                      <Field
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="you@company.com"
                      />
                    </div>
                    <Field
                      label="Company / Org"
                      name="company"
                      placeholder="Acme Inc."
                    />
                    <Field
                      label="Project Details"
                      name="project"
                      textarea
                      placeholder="Scope, design requirements, and deadline."
                    />
                    <button
                      type="submit"
                      className="inline-flex h-11 w-full items-center justify-center rounded-md bg-zinc-100 px-5 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-950 transition-all duration-300 hover:bg-white hover:shadow-lg hover:shadow-zinc-100/10 active:scale-[0.98]"
                    >
                      Send Inquiry →
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea = false,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  placeholder?: string;
}) {
  const base =
    "w-full rounded-md border border-zinc-800 bg-zinc-900/50 px-4 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none transition-all duration-200 focus:border-zinc-500 focus:bg-zinc-900/80 focus:ring-1 focus:ring-zinc-500";

  return (
    <label className="block">
      <span className="mb-2 block text-[10px] uppercase tracking-[0.25em] text-zinc-400">
        {label}
      </span>
      {textarea ? (
        <textarea
          name={name}
          required
          rows={5}
          placeholder={placeholder}
          className={`${base} resize-none py-3`}
        />
      ) : (
        <input
          name={name}
          type={type}
          required
          placeholder={placeholder}
          className={`${base} h-11`}
        />
      )}
    </label>
  );
}