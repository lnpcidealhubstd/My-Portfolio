import { useEffect, useRef, useState, type ReactNode } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  FaFacebook,
  FaFigma,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Code2,
  Layers3,
  Network,
  Sparkles,
  Triangle,
  Workflow,
} from "lucide-react";

import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Ambient } from "@/components/site/Ambient";
import { Reveal } from "@/components/site/Reveal";
import { PORTFOLIO_PROJECTS } from "@/lib/portfolio-projects";
import nicolasAsset from "@/assets/nicolas.png";
import nicoLogo from "@/assets/nico-logo.png";
import { usePortfolioMotion } from "@/hooks/usePortfolioMotion";
import "@/portfolio-motion.css";
import { HeroUniverse } from "@/components/site/HeroUniverse";
import "@/hero-universe.css";

/*
 * CONTACT AND RESUME CONFIGURATION
 *
 * Add your real GitHub and Facebook profile URLs below.
 *
 * For the resume:
 * 1. Put your PDF inside the project's public folder.
 * 2. Set resume to its public path, for example:
 *    "/Nico-Centeno-Resume.pdf"
 *
 * Leave missing values empty until the actual asset or URL is available.
 */
const PROFILE = {
  email: "lorenz.centeno@gmail.com",
  linkedin:
    "https://www.linkedin.com/in/lorenzo-nicholas-centeno-b07a52106/",
  github: "https://github.com/lnpcidealhubstd",
  facebook:
    "https://www.facebook.com/lorenznicholas.centeno/directory_links",
  resume: "/Nico-Centeno-Resume.pdf",
};

const SOCIALS = [
  { label: "LinkedIn", href: PROFILE.linkedin, Icon: FaLinkedin },
  { label: "GitHub", href: PROFILE.github, Icon: FaGithub },
  { label: "Facebook", href: PROFILE.facebook, Icon: FaFacebook },
];

const TECHNOLOGIES = [
  {
    number: "01",
    title: "Design & Prototyping",
    description:
      "Planning user journeys and turning ideas into clear, consistent interfaces.",
    tools: [
      {
        label: "Figma",
        detail: "Wireframes, UI design & interactive prototypes",
        Icon: FaFigma,
      },
      {
        label: "FigJam",
        detail: "Discovery, information architecture & user flows",
        Icon: Network,
      },
      {
        label: "Design Systems & Tokens",
        detail: "Reusable components & consistent visual styles",
        Icon: Layers3,
      },
      {
        label: "Responsive Design",
        detail: "Layouts for desktop, tablet & mobile",
        Icon: Code2,
      },
    ],
  },
  {
    number: "02",
    title: "AI-Assisted Prototyping",
    description:
      "Using AI to explore concepts, clarify ideas, and support prototype development.",
    tools: [
      {
        label: "Lovable",
        detail: "Interactive product concepts & rapid prototypes",
        Icon: Sparkles,
      },
      {
        label: "Claude",
        detail: "Design exploration & coding assistance",
        Icon: Code2,
      },
      {
        label: "ChatGPT",
        detail: "Requirements clarification, UX copy & code refinement",
        Icon: Sparkles,
      },
    ],
  },
  {
    number: "03",
    title: "Development & Handoff",
    description:
      "Connecting design decisions with implementation, collaboration, and delivery.",
    tools: [
      {
        label: "Visual Studio Code",
        detail: "Frontend editing & code refinement",
        Icon: Code2,
      },
      {
        label: "GitHub",
        detail: "Version control & collaboration",
        Icon: FaGithub,
      },
      {
        label: "Vercel",
        detail: "Deployment & preview sharing",
        Icon: Triangle,
      },
    ],
  },
];

const SKILLS = [
  {
    title: "UI/UX Design",
    Icon: Layers3,
    description: "Turning requirements into clear, usable experiences.",
    items: [
      "Requirements discovery",
      "User flows & information architecture",
      "Wireframing",
      "Interface design",
      "Interactive prototyping",
      "Responsive design",
      "Design systems",
      "Developer handoff",
    ],
  },
  {
    title: "Project Management",
    Icon: BriefcaseBusiness,
    description: "Keeping people, priorities, and delivery aligned.",
    items: [
      "Project scoping",
      "Requirements documentation",
      "Task prioritization",
      "Milestone planning",
      "Stakeholder communication",
      "Design & development coordination",
      "Feedback management",
      "Delivery tracking",
    ],
  },
  {
    title: "Supporting Capabilities",
    Icon: Workflow,
    description: "Making ideas tangible for feedback and implementation.",
    items: [
      "AI-assisted rapid prototyping",
      "GitHub collaboration",
      "Frontend implementation support",
      "Vercel deployment workflows",
    ],
  },
];

const focusClass =
  "focus-visible:outline-none focus-visible:ring-2 " +
  "focus-visible:ring-accent focus-visible:ring-offset-4 " +
  "focus-visible:ring-offset-background";

const primaryButton =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-lg " +
  "bg-accent px-6 py-3 text-sm font-semibold text-background " +
  "transition-colors hover:bg-accent/90 " +
  focusClass;

const secondaryButton =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-lg " +
  "border border-white/20 px-6 py-3 text-sm font-medium " +
  "transition-colors hover:border-accent/60 hover:text-accent " +
  focusClass;

const panelClass =
  "rounded-2xl border border-white/10 bg-white/[0.02]";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nico Centeno | UI/UX Designer & Project Manager" },
      {
        name: "description",
        content:
          "Portfolio of Nico Centeno, UI/UX Designer, Project Manager, " +
          "and Co-Founder of Ideahub Studio. Explore interface design, " +
          "interactive prototypes, and collaborative project delivery.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const motionRef = usePortfolioMotion();

  const heroRef = useRef<HTMLElement | null>(null);
  const [heroVisible, setHeroVisible] = useState(true);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry) setHeroVisible(entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "-64px 0px 0px 0px" },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  const featuredProjects = PORTFOLIO_PROJECTS.filter((project) => project.hasCaseStudy);
  const ongoingProjects = PORTFOLIO_PROJECTS.filter((project) => !project.hasCaseStudy);

  return (
    <div className="relative isolate min-h-screen bg-background text-foreground">
      {/* Fixed decorative logo: stronger blur while the hero is visible. */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center overflow-hidden select-none"
      >
        <img
          src={nicoLogo}
          alt=""
          className="w-[85vw] max-w-[800px] transition-[filter,opacity] duration-700 ease-out motion-reduce:transition-none sm:w-[65vw]"
          style={{
            filter: heroVisible ? "blur(24px)" : "blur(6px)",
            opacity: heroVisible ? 0.07 : 0.1,
          }}
        />
      </div>

      <a
        href="#main-content"
        className="sr-only fixed left-4 top-4 z-[100] rounded-lg bg-accent px-5 py-3 font-medium text-background focus:not-sr-only"
      >
        Skip to content
      </a>

      <HeroUniverse />
      <Nav />

      <main
        ref={motionRef}
        id="main-content"
        tabIndex={-1}
        className="relative z-10"
      >
        {/* HERO: keep the observer ref on this section. */}
        <section
          ref={heroRef}
          aria-labelledby="hero-heading"
          className="relative isolate overflow-hidden"
        >
          <Ambient />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-6 sm:py-24 lg:grid-cols-12 lg:gap-12">
            <div className="min-w-0 lg:col-span-7">
              <p className="hero-enter hero-step-1 text-sm font-medium tracking-wide text-accent">
                UI/UX Designer & Project Manager
              </p>

              <h1
                id="hero-heading"
                className="hero-enter hero-step-2 text-display mt-5 text-5xl font-medium leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl"
              >
                Nico{" "}
                <span className="hero-name-accent text-accent">
                  Centeno
                </span>
              </h1>

              <p className="hero-enter hero-step-3 text-display mt-7 max-w-xl text-2xl font-medium leading-snug sm:text-3xl">
                Thoughtful design. Clear direction. Meaningful digital
                experiences.
              </p>

              <p className="hero-enter hero-step-4 mt-6 max-w-xl text-base leading-8 text-muted-foreground">
                I turn complex requirements into intuitive digital experiences
                and guide projects from discovery to delivery. My work combines
                user-centered design, collaborative planning, and rapid
                prototyping to connect business goals with user needs.
              </p>

              <div className="hero-enter hero-step-5 mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#projects"
                  className={`${primaryButton} hero-action`}
                >
                  View Projects
                  <ArrowDown
                    aria-hidden="true"
                    className="hero-action-arrow size-4"
                  />
                </a>

                <a
                  href={PROFILE.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${secondaryButton} hero-action`}
                >
                  View Resume
                  <ArrowUpRight
                    aria-hidden="true"
                    className="hero-action-arrow size-4"
                  />
                </a>
              </div>

              <div className="hero-enter hero-step-6 mt-7">
                <SocialLinks />
              </div>
            </div>

            <div className="min-w-0 lg:col-span-5">
              <figure className="hero-portrait-enter mx-auto w-full max-w-sm">
                <div className="hero-portrait-frame overflow-hidden rounded-3xl border border-accent/25 bg-gradient-to-b from-accent/10 to-white/[0.02]">
                  <img
                    src={nicolasAsset}
                    alt="Portrait of Nico Centeno"
                    fetchPriority="high"
                    className="aspect-[4/5] w-full origin-bottom scale-95 object-contain object-bottom"
                  />
                </div>

                <figcaption className="mt-5 flex flex-wrap justify-between gap-2 text-xs text-muted-foreground">
                  <span>Design with purpose.</span>
                  <span className="text-accent">
                    Deliver with direction.
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <Section id="about" label="01 / Introduction" title="About Me">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
            <h3 className="text-display text-2xl font-medium leading-snug sm:text-3xl lg:col-span-5">
              Bringing design clarity and project direction together.
            </h3>

            <div className="space-y-5 text-base leading-8 text-muted-foreground lg:col-span-7">
              <p>
                I’m Lorenzo Nicholas “Nico” Centeno, a UI/UX Designer and
                Project Manager, and Co-Founder of Ideahub Studio. I help
                transform ideas into clear, usable digital products through
                discovery, user flows, interface design, and collaborative
                delivery.
              </p>
              <p>
                My approach connects user needs with business objectives. I
                work across design and project coordination to clarify
                requirements, align stakeholders, organize priorities, and
                support a smooth transition from concept to implementation.
              </p>
              <p>
                I also use AI-assisted prototyping to explore ideas quickly,
                communicate design decisions, and create interactive concepts
                for feedback.
              </p>
            </div>
          </div>
        </Section>

        {/* TECHNOLOGIES */}
        <Section
          id="technologies"
          label="02 / My Toolkit"
          title="Technologies I Work With"
          description="A focused toolkit for thoughtful design, faster exploration, and collaborative delivery."
        >
          <div className="grid gap-5 md:grid-cols-3">
            {TECHNOLOGIES.map((group) => (
              <article
                key={group.number}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6 transition-colors duration-300 hover:border-accent/35 motion-reduce:transition-none sm:p-7"
              >
                {/* Subtle top accent */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"
                />

                <div className="mb-6 flex items-center justify-between gap-3">
                  <span className="text-mono text-xs tracking-widest text-accent">
                    {group.number}
                  </span>

                  <span
                    aria-hidden="true"
                    className="h-px w-12 bg-white/10 transition-colors group-hover:bg-accent/40"
                  />
                </div>

                <h3 className="text-display text-xl font-medium leading-snug tracking-tight">
                  {group.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {group.description}
                </p>

                <ul className="mt-6 space-y-2 border-t border-white/10 pt-5">
                  {group.tools.map(({ label, detail, Icon }) => (
                    <li
                      key={label}
                      className="flex items-center gap-3 rounded-xl border border-transparent bg-white/[0.02] p-3"
                    >
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-accent/15 bg-accent/[0.06] text-accent">
                        <Icon
                          aria-hidden="true"
                          className="size-5"
                        />
                      </span>

                      <div className="min-w-0">
                        <p className="text-sm font-medium leading-6 text-foreground">
                          {label}
                        </p>
                        <p className="mt-0.5 text-xs leading-5 text-muted-foreground">
                          {detail}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        {/* AFFILIATIONS */}
        <Section
          id="affiliations"
          label="03 / Community & Collaboration"
          title="Affiliations & Organizations"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <a
              href="https://www.codebility.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${panelClass} p-7 transition-colors hover:border-accent/40 ${focusClass}`}
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-display text-2xl font-medium">
                  Codebility
                </h3>
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-5 shrink-0 text-accent"
                />
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Visit Codebility
              </p>
            </a>

            <article className={`${panelClass} p-7`}>
              <h3 className="text-display text-2xl font-medium">
                Ideahub Studio
              </h3>
              <p className="mt-3 text-sm leading-6 text-accent">
                Co-Founder · UI/UX Designer & Project Manager
              </p>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                Connecting product design, client collaboration, and project
                delivery.
              </p>
            </article>
          </div>
        </Section>

        {/* PROJECTS */}
        <section
          id="projects"
          aria-labelledby="projects-heading"
          className="mx-auto max-w-7xl scroll-mt-24 px-5 py-16 sm:px-6 sm:py-24"
        >
          <Reveal>
            <div className="mb-10 sm:mb-12">
              <p className="text-xs font-medium uppercase tracking-widest text-accent">
                04 / Selected Work
              </p>

              <h2
                id="projects-heading"
                className="text-display mt-4 text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl"
              >
                Featured Projects
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground">
                A selection of interface design, digital experiences, and
                projects guided from discovery toward delivery.
              </p>
            </div>
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

          <div className="mt-9 flex justify-center">
            <Link to="/projects" className={secondaryButton}>
              Explore All Projects
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </section>

        {/* SKILLS */}
        <Section
          id="skills"
          label="05 / What I Bring"
          title="Skills"
          description="Design thinking, project coordination, and practical implementation support."
        >
          <div className="grid gap-6 lg:grid-cols-3">
            {SKILLS.map(({ title, Icon, description, items }) => (
              <article
                key={title}
                className={`${panelClass} p-6 sm:p-8`}
              >
                <Icon aria-hidden="true" className="size-7 text-accent" />
                <h3 className="text-display mt-6 text-xl font-medium">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {description}
                </p>
                <ul className="mt-6 space-y-3">
                  {items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6">
                      <Check
                        aria-hidden="true"
                        className="mt-1 size-4 shrink-0 text-accent"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        {/* EXPERIENCE */}
        <Section
          id="experience"
          label="06 / Professional Background"
          title="Experience"
        >
          <div className="divide-y divide-white/10 border-y border-white/10">
            <ExperienceItem
              company="Ideahub Studio"
              role="Co-Founder · UI/UX Designer & Project Manager"
            >
              Leading discovery, interface design, and client collaboration.
              Aligning project scope, organizing priorities, and coordinating
              design and development through delivery.
            </ExperienceItem>

            <ExperienceItem
              company="Invictus Energy Solutions"
              role="UI/UX Designer"
            >
              Working on UI/UX design for digital experiences.
            </ExperienceItem>
          </div>
        </Section>

        {/* CONTACT */}
        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="scroll-mt-24 px-5 py-16 sm:px-6 sm:py-24"
        >
          <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-accent/20 bg-gradient-to-br from-accent/[0.08] to-transparent p-7 sm:p-12 lg:p-16">
            <Reveal>
              <p className="text-xs font-medium uppercase tracking-widest text-accent">
                07 / Get in Touch
              </p>

              <h2
                id="contact-heading"
                className="text-display mt-5 max-w-3xl text-4xl font-medium leading-tight tracking-tight sm:text-5xl lg:text-6xl"
              >
                Let’s build something together.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
                Have a product idea, a website to improve, or a project that
                needs clear design and direction? Let’s talk about how we can
                bring it to life.
              </p>

              <div className="mt-8 flex flex-col items-start gap-7 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
                <a
                  href={`mailto:${PROFILE.email}`}
                  className={primaryButton}
                >
                  Let’s Talk
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                </a>
                <SocialLinks />
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}

function Section({
  id,
  label,
  title,
  description,
  children,
}: {
  id: string;
  label: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="mx-auto max-w-7xl scroll-mt-24 px-5 py-16 sm:px-6 sm:py-24"
    >
      <Reveal>
        <div className="mb-9 sm:mb-12">
          <p className="text-xs font-medium uppercase tracking-widest text-accent">
            {label}
          </p>
          <h2
            id={`${id}-heading`}
            className="text-display mt-4 max-w-4xl text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:text-5xl"
          >
            {title}
          </h2>
          {description && (
            <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground">
              {description}
            </p>
          )}
        </div>
        {children}
      </Reveal>
    </section>
  );
}

function SocialLinks() {
  return (
    <ul aria-label="Social profiles" className="flex flex-wrap gap-2">
      {SOCIALS.map(({ label, href, Icon }) => (
        <li key={label}>
          {href ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${label} profile (opens in a new tab)`}
              className={`inline-flex min-h-11 items-center gap-2 rounded-lg px-3 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-accent ${focusClass}`}
            >
              <Icon aria-hidden="true" className="size-4" />
              {label}
            </a>
          ) : (
            <span
              title={`${label} profile is not available yet`}
              className="inline-flex min-h-11 items-center gap-2 rounded-lg px-3 text-sm text-muted-foreground opacity-50"
            >
              <Icon aria-hidden="true" className="size-4" />
              {label}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}

function ExperienceItem({
  company,
  role,
  children,
}: {
  company: string;
  role: string;
  children: ReactNode;
}) {
  return (
    <article className="grid gap-5 py-8 sm:py-10 md:grid-cols-12 md:gap-12">
      <div className="md:col-span-5">
        <h3 className="text-display text-2xl font-medium">{company}</h3>
        <p className="mt-3 text-sm leading-6 text-accent">{role}</p>
      </div>
      <p className="text-base leading-8 text-muted-foreground md:col-span-7">
        {children}
      </p>
    </article>
  );
}