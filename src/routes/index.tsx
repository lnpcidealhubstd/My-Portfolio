import type { ReactNode } from "react";
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
  Terminal,
  Triangle,
  Workflow,
} from "lucide-react";

import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Ambient } from "@/components/site/Ambient";
import { Reveal } from "@/components/site/Reveal";
import { DESIGN_PROJECTS } from "@/lib/site-data";
import nicolasAsset from "@/assets/nicolas.png";

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
    title: "Design & Prototyping",
    tools: [
      { label: "Figma", Icon: FaFigma },
      { label: "FigJam", Icon: Network },
      { label: "Design Systems & Tokens", Icon: Layers3 },
    ],
  },
  {
    title: "AI-Assisted Prototyping",
    tools: [
      { label: "Lovable", Icon: Sparkles },
      { label: "Claude", Icon: Sparkles },
    ],
  },
  {
    title: "Development & Handoff",
    tools: [
      { label: "Visual Studio Code", Icon: Code2 },
      { label: "GitHub", Icon: FaGithub },
      { label: "Vercel", Icon: Triangle },
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
  const [featuredProject, ...gridProjects] = DESIGN_PROJECTS;

  const hasLodgingProject = DESIGN_PROJECTS.some((project) =>
    /lodging/i.test(`${project.slug} ${project.title}`),
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#main-content"
        className="sr-only fixed left-4 top-4 z-[100] rounded-lg bg-accent px-5 py-3 font-medium text-background focus:not-sr-only"
      >
        Skip to content
      </a>

      <Nav />

      <main id="main-content" tabIndex={-1}>
        {/* HERO */}
        <section
          aria-labelledby="hero-heading"
          className="relative isolate overflow-hidden"
        >
          <Ambient />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-6 sm:py-24 lg:grid-cols-12 lg:gap-12">
            <div className="min-w-0 lg:col-span-7">
              <Reveal>
                <p className="text-sm font-medium tracking-wide text-accent">
                  UI/UX Designer & Project Manager
                </p>

                <h1
                  id="hero-heading"
                  className="text-display mt-5 text-5xl font-medium leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl"
                >
                  Nico <span className="text-accent">Centeno</span>
                </h1>

                <p className="text-display mt-7 max-w-xl text-2xl font-medium leading-snug sm:text-3xl">
                  Thoughtful design. Clear direction. Meaningful digital
                  experiences.
                </p>

                <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground">
                  I turn complex requirements into intuitive digital experiences
                  and guide projects from discovery to delivery. My work
                  combines user-centered design, collaborative planning, and
                  rapid prototyping to connect business goals with user needs.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a href="#projects" className={primaryButton}>
                    View Projects
                    <ArrowDown aria-hidden="true" className="size-4" />
                  </a>

                  {PROFILE.resume ? (
                    <a
                      href={PROFILE.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={secondaryButton}
                    >
                      View Resume
                      <ArrowUpRight aria-hidden="true" className="size-4" />
                    </a>
                  ) : (
                    <button
                      type="button"
                      disabled
                      title="Resume will be available soon"
                      className={`${secondaryButton} cursor-not-allowed opacity-50`}
                    >
                      View Resume
                    </button>
                  )}
                </div>

                <div className="mt-7">
                  <SocialLinks />
                </div>
              </Reveal>
            </div>

            <div className="min-w-0 lg:col-span-5">
              <Reveal delay={120}>
                <figure className="mx-auto w-full max-w-sm">
                  <div className="overflow-hidden rounded-3xl border border-accent/25 bg-gradient-to-b from-accent/10 to-white/[0.02]">
                    <img
                      src={nicolasAsset}
                      alt="Portrait of Nico Centeno"
                      fetchPriority="high"
                      className="aspect-[4/5] w-full origin-bottom scale-100 object-contain object-bottom" />
                  </div>

                  <figcaption className="mt-5 flex flex-wrap justify-between gap-2 text-xs text-muted-foreground">
                    <span>Design with purpose.</span>
                    <span className="text-accent">
                      Deliver with direction.
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
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
          description="Tools that support design exploration, collaboration, and implementation."
        >
          <div className="grid gap-5 md:grid-cols-3">
            {TECHNOLOGIES.map((group) => (
              <article
                key={group.title}
                className={`${panelClass} p-6 sm:p-7`}
              >
                <h3 className="text-lg font-medium">{group.title}</h3>

                <ul className="mt-5 space-y-3">
                  {group.tools.map(({ label, Icon }) => (
                    <li
                      key={label}
                      className="flex items-center gap-3 text-sm leading-6 text-muted-foreground"
                    >
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-accent">
                        <Icon aria-hidden="true" className="size-4" />
                      </span>
                      {label}
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
        <Section
          id="projects"
          label="04 / Selected Work"
          title="Featured Projects"
          description="A selection of interface design, digital experiences, and projects guided from discovery toward delivery."
        >
          {featuredProject && (
            <Link
              to="/projects/$slug"
              params={{ slug: featuredProject.slug }}
              className={`group mb-6 grid overflow-hidden ${panelClass} transition-colors hover:border-accent/40 lg:grid-cols-5 ${focusClass}`}
            >
              <div className="min-w-0 bg-white/[0.03] lg:col-span-3">
                <img
                  src={featuredProject.cover}
                  alt={`${featuredProject.title} interface preview`}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-contain object-top"
                />
              </div>

              <div className="flex flex-col justify-center p-6 sm:p-9 lg:col-span-2">
                <p className="text-xs font-medium uppercase tracking-widest text-accent">
                  {featuredProject.tag}
                </p>
                <h3 className="text-display mt-4 text-2xl font-medium sm:text-3xl">
                  {featuredProject.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {featuredProject.summary}
                </p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-accent">
                  View Project
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                </span>
              </div>
            </Link>
          )}

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {gridProjects.map((project) => (
              <Link
                key={project.slug}
                to="/projects/$slug"
                params={{ slug: project.slug }}
                className={`group flex h-full flex-col overflow-hidden ${panelClass} transition-colors hover:border-accent/40 ${focusClass}`}
              >
                <div className="bg-white/[0.03]">
                  <img
                    src={project.cover}
                    alt={`${project.title} interface preview`}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-contain object-top"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs text-accent">{project.tag}</p>
                  <h3 className="text-display mt-3 text-xl font-medium">
                    {project.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">
                    {project.summary}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent">
                    View Project
                    <ArrowUpRight aria-hidden="true" className="size-4" />
                  </span>
                </div>
              </Link>
            ))}

            {!hasLodgingProject && (
              <article className="flex h-full flex-col rounded-2xl border border-accent/20 bg-accent/[0.04] p-6 sm:p-8">
                <BriefcaseBusiness
                  aria-hidden="true"
                  className="size-7 text-accent"
                />
                <p className="mt-6 text-xs font-medium uppercase tracking-widest text-accent">
                  Design & Project Management
                </p>
                <h3 className="text-display mt-4 text-2xl font-medium">
                  Lodging Technologies
                </h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-muted-foreground">
                  Discovery, requirements alignment, interface planning, and
                  delivery coordination across a phased implementation.
                </p>
                <div className="mt-6 space-y-3 border-t border-white/10 pt-5 text-sm leading-6">
                  <p>UI/UX Designer & Project Manager</p>
                  <p className="text-muted-foreground">
                    Phase 1 completed; Phase 2 CRM implementation ongoing.
                  </p>
                </div>
              </article>
            )}
          </div>

          <div className="mt-8">
            <Link to="/projects" className={secondaryButton}>
              All Projects
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </Section>

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

      <Footer />
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