import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaFacebook,
  FaFigma,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiVite } from "react-icons/si";
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
import "@/tech-ecosystem.css";
import codebilityLogo from "@/assets/codebility-logo.png";
import ideahubLogo from "@/assets/ideahub-logo.png";
import gmxAcademyLogo from "@/assets/gmx-academy-logo.png";
import udemyLogo from "@/assets/udemy-logo.png";
import { HeroPortrait } from "@/components/site/HeroPortrait";
/* Verified profile links. Resume PDF lives in the public folder. */
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
    description: "From user journeys to consistent, interactive interfaces.",
    tools: [
      { label: "Figma", detail: "Interface design & interactive prototypes", Icon: FaFigma },
      { label: "FigJam", detail: "Discovery, information architecture & user flows", Icon: Network },
      { label: "Design Systems & Tokens", detail: "Reusable components & visual foundations", Icon: Layers3 }
    ],
  },
  {
    number: "02",
    title: "Frontend Development",
    description: "Building responsive interfaces and supporting implementation.",
    tools: [
      { label: "HTML", detail: "Semantic page structure", Icon: FaHtml5 },
      { label: "CSS", detail: "Layouts, styling & responsive behavior", Icon: FaCss3Alt },
      { label: "JavaScript", detail: "Interactions & application behavior", Icon: FaJsSquare },
      { label: "React", detail: "Reusable interface components", Icon: FaReact },
      { label: "Tailwind CSS", detail: "Utility-based styling", Icon: SiTailwindcss },
      { label: "TypeScript", detail: "Typed components & application code", Icon: SiTypescript }
    ],
  },
  {
    number: "03",
    title: "Frameworks & Build Tools",
    description: "The foundations behind portfolio and client implementations.",
    tools: [
      { label: "Next.js", detail: "Website framework used for the Everest rebuild", Icon: SiNextdotjs },
      { label: "Vite", detail: "Development tooling for this portfolio", Icon: SiVite }
    ],
  },
  {
    number: "04",
    title: "Collaboration & Delivery",
    description: "Connecting local development with reviews and deployment.",
    tools: [
      { label: "Visual Studio Code", detail: "Frontend editing & code refinement", Icon: Code2 },
      { label: "GitHub", detail: "Version control & collaboration", Icon: FaGithub },
      { label: "Vercel", detail: "Deployment & preview sharing", Icon: Triangle }
    ],
  }
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
      "Responsive frontend implementation",
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

function TypewriterTagline() {
  const message =
    "Thoughtful design. Clear direction. Meaningful digital experiences.";

  const [text, setText] = useState(message);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    let timer: ReturnType<typeof setTimeout> | undefined;

    if (preference.matches) return;

    let position = 0;
    setText("");
    setTyping(true);

    const typeNext = () => {
      position += 1;
      setText(message.slice(0, position));

      if (position < message.length) {
        timer = setTimeout(
          typeNext,
          message[position - 1] === "." ? 320 : 40,
        );
      } else {
        setTyping(false);
      }
    };

    timer = setTimeout(typeNext, 700);

    const onPreferenceChange = () => {
      if (preference.matches) {
        clearTimeout(timer);
        setText(message);
        setTyping(false);
      }
    };

    preference.addEventListener("change", onPreferenceChange);

    return () => {
      clearTimeout(timer);
      preference.removeEventListener("change", onPreferenceChange);
    };
  }, []);

  return (
    <span className="relative block">
      <span className="sr-only">{message}</span>

      {/* Reserve the full paragraph height while typing. */}
      <span aria-hidden="true" className="invisible block">
        {message}
      </span>

      <span aria-hidden="true" className="absolute inset-0">
        {text}
        {typing && (
          <span className="ml-1 inline-block h-[0.8em] w-[2px] translate-y-[0.05em] bg-accent" />
        )}
      </span>
    </span>
  );
}

// Set this to the verified public form endpoint after delivery is configured.
// Never add private API keys or your email password here.
const CONTACT_FORM_ENDPOINT = "https://formspree.io/f/xljjgdwz";

function ContactForm() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const fieldClass = "mt-2 w-full rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="dialog"
        onClick={() => {
          setStatus("idle");
          dialogRef.current?.showModal();
        }}
        className={`${primaryButton} hero-action mt-8`}
      >
        Let’s Talk
        <ArrowUpRight aria-hidden="true" className="hero-action-arrow size-4" />
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby="inquiry-title"
        aria-describedby="inquiry-description"
        onClose={() => triggerRef.current?.focus()}
        className="nico-contact-dialog fixed inset-0 m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-xl overflow-y-auto rounded-3xl border border-accent/20 bg-[#0d151b] p-0 text-foreground shadow-2xl backdrop:bg-black/80 backdrop:backdrop-blur-sm"
        style={{ colorScheme: "dark" }}
      >
        <div className="p-6 sm:p-9">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-accent">Start a Conversation</p>
              <h2 id="inquiry-title" className="text-display mt-3 text-3xl font-medium">Tell me about your project.</h2>
            </div>
            <button type="button" onClick={() => dialogRef.current?.close()} aria-label="Close contact form" className={`inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-white/15 text-xl hover:bg-white/5 ${focusClass}`}>
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <p id="inquiry-description" className="mt-4 text-sm leading-7 text-muted-foreground">Share what you’re working on and where you need support.</p>

          {status === "success" ? (
            <div role="status" className="py-9">
              <Check aria-hidden="true" className="size-9 text-accent" />
              <h3 className="mt-5 text-2xl font-medium">Thanks for reaching out.</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">Your inquiry has been submitted successfully.</p>
              <button type="button" onClick={() => dialogRef.current?.close()} className={`${secondaryButton} mt-7`}>Close</button>
            </div>
          ) : (
            <form className="mt-7 space-y-5" onSubmit={async (event) => {
              event.preventDefault();
              if (!CONTACT_FORM_ENDPOINT || status === "sending") return;
              const form = event.currentTarget;
              const data = new FormData(form);
              setStatus("sending");
              try {
                const response = await fetch(CONTACT_FORM_ENDPOINT, {
                  method: "POST",
                  body: data,
                  headers: { Accept: "application/json" },
                  signal: AbortSignal.timeout(20000),
                });
                if (!response.ok) throw new Error("Submission failed");
                form.reset();
                setStatus("success");
              } catch {
                setStatus("error");
              }
            }}>
              <fieldset disabled={status === "sending"} className="space-y-5 disabled:opacity-70">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="inquiry-name" className="text-sm font-medium">Name <span className="text-accent">*</span></label>
                    <input id="inquiry-name" name="name" type="text" autoComplete="name" maxLength={100} required className={fieldClass} />
                  </div>
                  <div>
                    <label htmlFor="inquiry-email" className="text-sm font-medium">Email <span className="text-accent">*</span></label>
                    <input id="inquiry-email" name="email" type="email" autoComplete="email" maxLength={254} required className={fieldClass} />
                  </div>
                </div>
                <div>
                  <label htmlFor="inquiry-service" className="text-sm font-medium">Service needed</label>
                  <select id="inquiry-service" name="service" defaultValue="" className={fieldClass}>
                    <option value="">Select a service</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Project Management">Project Management</option>
                    <option value="Both">UI/UX Design & Project Management</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="inquiry-message" className="text-sm font-medium">Project details <span className="text-accent">*</span></label>
                  <textarea id="inquiry-message" name="message" rows={5} maxLength={5000} required placeholder="What are you building or looking to improve?" className={`${fieldClass} resize-y`} />
                </div>
              </fieldset>
              {status === "error" && <p role="alert" className="text-sm leading-6 text-red-300">Your inquiry couldn’t be sent. Try again or email me directly. Your message is still here.</p>}
              {!CONTACT_FORM_ENDPOINT && <p className="text-sm leading-6 text-muted-foreground">Online submissions are being set up. For now, please <a href={`mailto:${PROFILE.email}`} className={`rounded text-accent underline underline-offset-4 ${focusClass}`}>email me directly</a>.</p>}
              <button type="submit" disabled={!CONTACT_FORM_ENDPOINT || status === "sending"} className={`${primaryButton} w-full disabled:cursor-not-allowed disabled:opacity-40`}>
                {status === "sending" ? "Sending…" : "Send Inquiry"}
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </button>
              <p role="status" className="sr-only">{status === "sending" ? "Sending your inquiry." : ""}</p>
            </form>
          )}
        </div>
      </dialog>
    </>
  );
}


function TechEcosystem() {
  const [paused, setPaused] = useState(false);
  const rings = [
    TECHNOLOGIES[0].tools,
    TECHNOLOGIES[1].tools,
    [...TECHNOLOGIES[2].tools, ...TECHNOLOGIES[3].tools],
  ];

  return (
    <div className="tech-ecosystem" data-paused={paused}>
      <div className="tech-orbit-stage" role="img" aria-label="Technology ecosystem: design, frontend development, frameworks, and delivery tools">
        <div className="tech-orbit-core" aria-hidden="true">
          <Layers3 className="size-6 text-accent" />
          <span>Design to<br />delivery</span>
        </div>
        {rings.map((tools, ringIndex) => (
          <div key={ringIndex} className={`tech-orbit-ring tech-orbit-ring-${ringIndex + 1}`} aria-hidden="true">
            {tools.map(({ label, Icon }, index) => (
              <div key={label} className="tech-orbit-position" style={{ "--node-angle": `${(index / tools.length) * 360}deg` } as CSSProperties}>
                <div className="tech-orbit-node">
                  <Icon className="tech-orbit-icon" />
                  <span>{label === "Design Systems & Tokens" ? "Design systems" : label === "Visual Studio Code" ? "VS Code" : label}</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
        <p className="text-xs text-muted-foreground">Design · Frontend · Delivery</p>
        <button type="button" aria-pressed={paused} onClick={() => setPaused((value) => !value)} className={`tech-orbit-toggle inline-flex min-h-11 items-center justify-center rounded-full border border-white/15 px-4 text-xs text-foreground hover:border-accent/40 ${focusClass}`}>
          {paused ? "Resume animation" : "Pause animation"}
        </button>
      </div>
    </div>
  );
}

function useHeroPointerEffect() {
  useEffect(() => {
    const hero = document.querySelector<HTMLElement>('section[aria-labelledby="hero-heading"]');
    if (!hero) return;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const fine = matchMedia("(hover: hover) and (pointer: fine)");
    let frame = 0;
    let x = 0;
    let y = 0;
    const reset = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      hero.removeAttribute("data-mouse-active");
    };
    const move = (event: PointerEvent) => {
      if (reduced.matches || !fine.matches || event.pointerType !== "mouse") return;
      x = event.clientX;
      y = event.clientY;
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const bounds = hero.getBoundingClientRect();
        hero.style.setProperty("--hero-pointer-x", `${x - bounds.left}px`);
        hero.style.setProperty("--hero-pointer-y", `${y - bounds.top}px`);
        hero.setAttribute("data-mouse-active", "true");
      });
    };
    hero.addEventListener("pointermove", move);
    hero.addEventListener("pointerleave", reset);
    hero.addEventListener("pointercancel", reset);
    window.addEventListener("blur", reset);
    window.addEventListener("scroll", reset, { passive: true });
    reduced.addEventListener("change", reset);
    fine.addEventListener("change", reset);
    return () => {
      reset();
      hero.removeEventListener("pointermove", move);
      hero.removeEventListener("pointerleave", reset);
      hero.removeEventListener("pointercancel", reset);
      window.removeEventListener("blur", reset);
      window.removeEventListener("scroll", reset);
      reduced.removeEventListener("change", reset);
      fine.removeEventListener("change", reset);
    };
  }, []);
}

/* Kept in this file so the update needs no additional stylesheet. */
const HERO_EFFECT_CSS = `
#main-content > section[aria-labelledby="hero-heading"] .hero-pointer-spotlight {
  position: absolute; inset: 0; z-index: 0; pointer-events: none;
  opacity: 0; transition: opacity 500ms ease;
  background: radial-gradient(280px circle at var(--hero-pointer-x, 50%) var(--hero-pointer-y, 50%), rgb(34 211 238 / 9%), transparent 75%);
}
#main-content > section[data-mouse-active="true"] .hero-pointer-spotlight { opacity: 1; }
#hero-heading { transition: text-shadow 400ms ease; }
section[data-mouse-active="true"] #hero-heading { text-shadow: 0 0 28px rgb(34 211 238 / 10%); }
#hero-heading .hero-name-accent, #hero-heading > span.text-accent {
  display: inline-block;
  background-image: linear-gradient(110deg, #55dddd 15%, #b8fbff 35%, #a5b4fc 50%, #55dddd 70%) !important;
  background-size: 250% 100% !important;
  background-clip: text !important; -webkit-background-clip: text !important;
  color: transparent !important; -webkit-text-fill-color: transparent !important;
  animation: nico-heading-shimmer 9s ease-in-out infinite !important;
}
@keyframes nico-heading-shimmer {
  0%, 100% { background-position: 100% 50%; }
  50% { background-position: 0% 50%; }
}
html[data-theme="light"] #hero-heading .hero-name-accent,
html[data-theme="light"] #hero-heading > span.text-accent {
  background-image: linear-gradient(110deg, #006d73 15%, #245982 35%, #6550a0 50%, #006d73 70%) !important;
}
html[data-theme="light"] #main-content > section[aria-labelledby="hero-heading"] .hero-pointer-spotlight {
  background: radial-gradient(280px circle at var(--hero-pointer-x, 50%) var(--hero-pointer-y, 50%), rgb(0 109 115 / 6%), transparent 75%);
}
@media (prefers-reduced-motion: reduce) {
  #main-content > section[aria-labelledby="hero-heading"] .hero-pointer-spotlight { display: none; }
  #hero-heading { transition: none; text-shadow: none !important; }
  #hero-heading .hero-name-accent, #hero-heading > span.text-accent { animation: none !important; }
}
`;

function BackgroundMouseEcho() {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const fine = matchMedia("(hover: hover) and (pointer: fine)");
    const echoes = new Set<Animation>();
    let lastTime = 0;
    let lastX = -1000;
    let lastY = -1000;

    const clear = () => {
      for (const animation of Array.from(echoes)) animation.cancel();
      echoes.clear();
      layer.replaceChildren();
      lastX = -1000;
      lastY = -1000;
    };
    const move = (event: PointerEvent) => {
      if (reduced.matches || !fine.matches || event.pointerType !== "mouse" || document.hidden) return;
      const now = performance.now();
      if (now - lastTime < 90 || Math.hypot(event.clientX - lastX, event.clientY - lastY) < 35) return;
      lastTime = now;
      lastX = event.clientX;
      lastY = event.clientY;
      if (echoes.size >= 12) return;
      const echo = document.createElement("span");
      echo.className = "background-mouse-echo";
      echo.style.left = `${event.clientX}px`;
      echo.style.top = `${event.clientY}px`;
      layer.appendChild(echo);
      const animation = echo.animate([
        { opacity: 0, transform: "translate(-50%, -50%) scale(0.65)" },
        { opacity: 0.24, offset: 0.15 },
        { opacity: 0, transform: "translate(-50%, -50%) scale(1.5)" },
      ], { duration: 950, easing: "ease-out", fill: "forwards" });
      echoes.add(animation);
      const remove = () => { echoes.delete(animation); echo.remove(); };
      animation.onfinish = remove;
      animation.oncancel = remove;
    };
    const onVisibility = () => { if (document.hidden) clear(); };
    const onExit = (event: PointerEvent) => { if (!event.relatedTarget) clear(); };
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("blur", clear);
    window.addEventListener("scroll", clear, { passive: true });
    document.addEventListener("pointerout", onExit);
    document.addEventListener("visibilitychange", onVisibility);
    reduced.addEventListener("change", clear);
    fine.addEventListener("change", clear);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("blur", clear);
      window.removeEventListener("scroll", clear);
      document.removeEventListener("pointerout", onExit);
      document.removeEventListener("visibilitychange", onVisibility);
      reduced.removeEventListener("change", clear);
      fine.removeEventListener("change", clear);
      clear();
    };
  }, []);

  return (
    <>
      <style>{`
        .background-echo-layer {
          position: fixed; inset: 0; z-index: 0;
          overflow: hidden; pointer-events: none;
        }
        .background-mouse-echo {
          position: absolute; width: 90px; height: 90px;
          border: 1px solid #5ee5e1; border-radius: 18px;
          box-shadow: 5px 0 0 -1px rgb(165 180 252 / 40%), 0 0 22px rgb(34 211 238 / 8%);
          clip-path: polygon(0 0,100% 0,100% 35%,85% 35%,85% 65%,100% 65%,100% 100%,0 100%,0 65%,15% 65%,15% 35%,0 35%);
        }
        html[data-theme="light"] .background-mouse-echo {
          border-color: #006d73;
          box-shadow: 5px 0 0 -1px rgb(101 80 160 / 30%), 0 0 18px rgb(0 109 115 / 6%);
        }
        @media (hover: none), (pointer: coarse), (prefers-reduced-motion: reduce) {
          .background-echo-layer { display: none; }
        }
      `}</style>
      <div ref={layerRef} aria-hidden="true" className="background-echo-layer" />
    </>
  );
}

function Home() {
  useHeroPointerEffect();
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
      <style>{HERO_EFFECT_CSS}</style>
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
      <BackgroundMouseEcho />
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
          <div aria-hidden="true" className="hero-pointer-spotlight" />

          <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-6 sm:py-24 lg:grid-cols-12 lg:gap-12">
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
                <TypewriterTagline />
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
                <HeroPortrait src={nicolasAsset} />

              </figure>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <Section
          id="about"
          label="01 / Introduction"
          title="About Me"
        >
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h3 className="text-display max-w-md text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                Bringing design clarity and project direction together.
              </h3>

              <div className="mt-8 flex flex-wrap gap-2">
                {["UI/UX Design", "Project Management", "Prototyping"].map(
                  (label) => (
                    <span
                      key={label}
                      className="rounded-full border border-accent/15 bg-accent/[0.04] px-3 py-1.5 text-xs text-accent"
                    >
                      {label}
                    </span>
                  ),
                )}
              </div>
            </div>

            <div className="lg:col-span-7">
              <p className="text-lg leading-8 text-foreground">
                I’m Lorenzo Nicholas “Nico” Centeno, a UI/UX Designer and
                Project Manager, and Co-Founder of Ideahub Studio.
              </p>

              <p className="mt-5 text-base leading-8 text-muted-foreground">
                I help transform ideas into clear, usable digital products
                through discovery, user flows, interface design, and
                collaborative delivery.
              </p>

              <div className="mt-7 space-y-5 border-l border-accent/25 pl-5 sm:pl-6">
                <p className="text-base leading-8 text-muted-foreground">
                  My approach connects user needs with business objectives.
                  I work across design and project coordination to clarify
                  requirements, align stakeholders, organize priorities,
                  and support a smooth transition from concept to
                  implementation.
                </p>

                <p className="text-base leading-8 text-muted-foreground">
                  I also use AI-assisted prototyping to explore ideas
                  quickly, communicate design decisions, and create
                  interactive concepts for feedback.
                </p>
              </div>
            </div>
          </div>
        </Section>
        {/* TECHNOLOGIES */}
        <Section
          id="technologies"
          label="02 / My Toolkit"
          title="Technologies I Work With"
          description="Technologies I work with—from interface design and prototyping to frontend implementation and deployment."
        >
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <TechEcosystem />
            <div className="min-w-0">
              <div className="divide-y divide-white/10">
                {TECHNOLOGIES.map((group) => (
                  <div key={group.number} className="py-5 first:pt-0">
                    <p className="text-xs uppercase tracking-widest text-accent">{group.number} / {group.title}</p>
                    <p className="mt-3 text-sm leading-7 text-foreground">{group.tools.map((tool) => tool.label).join(" · ")}</p>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">{group.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-start gap-3 border-t border-accent/20 pt-6">
                <Sparkles aria-hidden="true" className="mt-1 size-5 shrink-0 text-accent" />
                <div>
                  <h3 className="text-sm font-medium">AI-assisted workflow</h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">Supporting rapid prototyping, frontend implementation, and code refinement.</p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* AFFILIATIONS */}
        <Section
          id="affiliations"
          label="03 / Community & Growth"
          title="Affiliations & Learning"
        >
          <div className="space-y-8">
            {[
              {
                heading: "Organizations",
                entries: [
                  {
                    name: "Codebility",
                    logo: codebilityLogo,
                    href: "https://www.codebility.tech/",
                    detail: "Explore Codebility and its work.",
                    description: "",
                  },
                  {
                    name: "Ideahub Studio",
                    logo: ideahubLogo,
                    href: "",
                    detail: "Co-Founder · UI/UX Designer & Project Manager",
                    description:
                      "Product design, client collaboration, and delivery.",
                  },
                ],
              },
              {
                heading: "Learning & Development",
                entries: [
                  {
                    name: "GMx Academy",
                    logo: gmxAcademyLogo,
                    href: "https://academy.gringiemarfelix.com/",
                    detail: "Web Development Training",
                    description: "HTML · CSS · JavaScript",
                  },
                  {
                    name: "Udemy",
                    logo: udemyLogo,
                    href: "https://www.udemy.com/",
                    detail: "UI/UX Design Coursework",
                    description: "UI/UX and interface design studies.",
                  },
                ],
              },
            ].map((group) => (
              <div key={group.heading}>
                <h3 className="mb-4 text-sm font-medium text-muted-foreground">
                  {group.heading}
                </h3>

                <div className="grid gap-4 md:grid-cols-2">
                  {group.entries.map((entry) => (
                    <div
                      key={entry.name}
                      className="rounded-xl border border-white/10 bg-[#0b1115] p-5 transition-colors hover:border-accent/25 focus-within:border-accent/40 motion-reduce:transition-none"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-black p-1.5">
                          <img
                            src={entry.logo}
                            alt=""
                            width={44}
                            height={44}
                            loading="lazy"
                            className="h-full w-full object-contain"
                          />
                        </div>

                        <div className="min-w-0 flex-1">
                          <h4 className="text-display text-lg font-medium tracking-tight">
                            {entry.href ? (
                              <a
                                href={entry.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex min-h-7 items-center gap-2 rounded-sm transition-colors hover:text-accent ${focusClass}`}
                              >
                                {entry.name}

                                <ArrowUpRight
                                  aria-hidden="true"
                                  className="size-3.5 shrink-0 text-accent"
                                />

                                <span className="sr-only">
                                  {" "}
                                  (opens in a new tab)
                                </span>
                              </a>
                            ) : (
                              entry.name
                            )}
                          </h4>

                          <p className="mt-1 text-sm leading-6 text-accent">
                            {entry.detail}
                          </p>

                          {entry.description && (
                            <p className="mt-1 text-sm leading-6 text-muted-foreground">
                              {entry.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* PROJECTS */}
        <section
          id="projects"
          aria-labelledby="projects-heading"
          className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 sm:px-6 sm:py-28"
        >
          <Reveal>
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                  04 / Selected Work
                </p>

                <h2
                  id="projects-heading"
                  className="text-display mt-4 text-4xl font-medium tracking-tight sm:text-5xl"
                >
                  Featured Projects
                </h2>
              </div>

              <p className="max-w-md text-sm leading-7 text-muted-foreground">
                A selection of interface design, digital experiences, and
                projects guided from discovery toward delivery.
              </p>
            </div>
          </Reveal>

          {/* Compact bento: full project stories remain on the detail pages. */}
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-12">
            {featuredProjects.map((project, index) => (
              <Reveal
                key={project.slug}
                delay={(index % 2) * 60}
                className={`min-w-0 h-full ${index % 4 === 0 || index % 4 === 3 ? "lg:col-span-7" : "lg:col-span-5"}`}
              >
                <article className={`project-card group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border bg-background transition-colors duration-300 motion-reduce:transition-none ${index === 0 ? "border-accent/30" : "border-foreground/10 hover:border-accent/30"}`}>
                  <Link
                    to="/projects/$slug"
                    params={{ slug: project.slug }}
                    aria-label={`View ${project.title}`}
                    className={`block rounded-t-2xl p-3 ${focusClass}`}
                  >
                    <div className="flex aspect-[16/9] items-center justify-center overflow-hidden rounded-xl bg-foreground/[0.03]">
                      {project.cover ? (
                        <img
                          src={project.cover}
                          alt={`${project.title} — project preview`}
                          loading="lazy"
                          width={1600}
                          height={900}
                          className="project-preview h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.015] motion-reduce:transform-none motion-reduce:transition-none"
                        />
                      ) : (
                        <span className="px-4 text-center text-sm text-muted-foreground">Project preview coming soon.</span>
                      )}
                    </div>
                  </Link>
                  <div className="flex flex-1 flex-col px-5 pb-5 pt-2 sm:px-6 sm:pb-6">
                    <p className="text-xs leading-6 text-accent">{project.role}</p>
                    <h3 className="text-display mt-1 text-xl font-medium tracking-tight sm:text-2xl">{project.title}</h3>
                    <p className="mt-2 text-xs leading-6 text-muted-foreground">{project.status}</p>
                    <div className="mt-auto pt-4">
                      <Link
                        to="/projects/$slug"
                        params={{ slug: project.slug }}
                        aria-label={`View project: ${project.title}`}
                        className={`inline-flex min-h-11 items-center gap-2 rounded-full border border-foreground/15 px-4 text-sm font-medium text-foreground transition-colors hover:border-accent/50 hover:bg-accent/10 hover:text-accent motion-reduce:transition-none ${focusClass}`}
                      >
                        View Project
                        <ArrowUpRight aria-hidden="true" className="size-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Ongoing projects: quieter supporting grid */}
          <div className="mt-10 border-t border-foreground/10 pt-8 sm:mt-12">
            <Reveal>
              <div className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
                <h3 className="text-display text-2xl font-medium">
                  More Work in Progress
                </h3>
                <p className="text-sm text-muted-foreground">
                  A first look at ongoing design projects.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {ongoingProjects.map((project, index) => (
                <Reveal key={project.slug} delay={index * 70}>
                  <article className="group">
                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-3 transition-colors duration-300 hover:border-accent/30">
                      <img
                        src={project.cover}
                        alt={`${project.title} design preview`}
                        loading="lazy"
                        className="aspect-[16/10] w-full rounded-lg object-contain transition-transform duration-500 group-hover:scale-[1.025] motion-reduce:transform-none motion-reduce:transition-none"
                      />
                    </div>

                    <div className="mt-4 flex items-start justify-between gap-3">
                      <h4 className="text-base font-medium">
                        {project.title}
                      </h4>
                      <span className="shrink-0 text-xs leading-6 text-muted-foreground">
                        {project.status}
                      </span>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <Link to="/projects" className={secondaryButton}>
              Explore All Projects
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </section>

        {/* SKILLS */}
        <section
          id="skills"
          aria-labelledby="skills-heading"
          className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 sm:px-6 sm:py-28"
        >
          <Reveal>
            <div className="mb-12 grid gap-6 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-5">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                  05 / What I Bring
                </p>

                <h2
                  id="skills-heading"
                  className="text-display mt-4 text-4xl font-medium tracking-tight sm:text-5xl"
                >
                  Skills
                </h2>
              </div>

              <p className="max-w-xl self-end text-base leading-8 text-muted-foreground lg:col-span-7">
                Thoughtful interfaces, clear priorities, and collaborative
                delivery—from understanding the requirements to supporting
                implementation.
              </p>
            </div>
          </Reveal>

          <div className="border-t border-white/10">
            {SKILLS.map(({ title, Icon, description, items }, index) => (
              <Reveal key={title}>
                <article className="group relative border-b border-white/10 py-8 sm:py-10">
                  {/* A subtle accent appears along the top edge. */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-accent/70 via-accent/20 to-transparent transition-transform duration-500 group-hover:scale-x-100 motion-reduce:transition-none"
                  />

                  <div className="grid gap-7 lg:grid-cols-12 lg:gap-12">
                    {/* Skill category */}
                    <div className="flex items-start gap-4 lg:col-span-5">
                      <span className="pt-1 text-xs tabular-nums text-muted-foreground">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div>
                        <div className="flex items-center gap-3">
                          <Icon
                            aria-hidden="true"
                            className="size-5 shrink-0 text-accent"
                          />

                          <h3 className="text-display text-xl font-medium tracking-tight sm:text-2xl">
                            {title}
                          </h3>
                        </div>

                        <p className="mt-3 max-w-sm text-sm leading-7 text-muted-foreground">
                          {description}
                        </p>
                      </div>
                    </div>

                    {/* Practical capabilities */}
                    <ul className="grid gap-x-7 gap-y-4 sm:grid-cols-2 lg:col-span-7">
                      {items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm leading-6 text-muted-foreground transition-colors duration-300 group-hover:text-foreground motion-reduce:transition-none"
                        >
                          <Check
                            aria-hidden="true"
                            className="mt-1 size-3.5 shrink-0 text-accent/70"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section
          id="experience"
          aria-labelledby="experience-heading"
          className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 sm:px-6 sm:py-28"
        >
          <Reveal>
            <div className="mb-12 grid gap-6 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-5">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                  06 / Professional Background
                </p>

                <h2
                  id="experience-heading"
                  className="text-display mt-4 text-4xl font-medium tracking-tight sm:text-5xl"
                >
                  Experience
                </h2>
              </div>

              <p className="max-w-xl self-end text-base leading-8 text-muted-foreground lg:col-span-7">
                Connecting interface design, client collaboration, and
                project direction.
              </p>
            </div>
          </Reveal>

          <ol className="relative ml-2 border-l border-white/10">
            <li className="relative pb-12 pl-7 sm:pb-16 sm:pl-10">
              <span
                aria-hidden="true"
                className="absolute -left-[5px] top-2 size-[9px] rounded-full border-2 border-background bg-accent"
              />

              <Reveal>
                <article className="group grid gap-6 lg:grid-cols-12 lg:gap-12">
                  <div className="lg:col-span-5">
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      Design & Project Leadership
                    </p>

                    <h3 className="text-display mt-3 text-2xl font-medium tracking-tight sm:text-3xl">
                      Ideahub Studio
                    </h3>

                    <p className="mt-3 max-w-sm text-sm leading-7 text-accent">
                      Co-Founder · UI/UX Designer & Project Manager
                    </p>
                  </div>

                  <div className="lg:col-span-7">
                    <p className="max-w-2xl text-base leading-8 text-muted-foreground">
                      Bringing product ideas into focus through discovery,
                      interface design, and client collaboration. Connecting
                      design decisions with clear priorities and coordinated
                      delivery.
                    </p>

                    <ul className="mt-6 space-y-4">
                      {[
                        "Clarify requirements and align project scope with client objectives.",
                        "Plan user flows and design interfaces for digital products.",
                        "Organize priorities, communicate feedback, and coordinate design and development through delivery.",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm leading-7 text-muted-foreground"
                        >
                          <Check
                            aria-hidden="true"
                            className="mt-1.5 size-3.5 shrink-0 text-accent/70"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            </li>

            <li className="relative pl-7 sm:pl-10">
              <span
                aria-hidden="true"
                className="absolute -left-[5px] top-2 size-[9px] rounded-full border-2 border-background bg-muted-foreground"
              />

              <Reveal>
                <article className="grid gap-6 lg:grid-cols-12 lg:gap-12">
                  <div className="lg:col-span-5">
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      Client Project Engagement
                    </p>

                    <h3 className="text-display mt-3 text-2xl font-medium tracking-tight sm:text-3xl">
                      Lodging Technologies
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-accent">
                      UI/UX Designer & Project Manager
                    </p>
                  </div>

                  <div className="lg:col-span-7">
                    <p className="max-w-2xl text-base leading-8 text-muted-foreground">
                      Supporting the project from discovery through Phase 1
                      delivery, combining UI/UX design with requirements
                      alignment, client collaboration, and delivery coordination.
                    </p>
                    <ul className="mt-6 space-y-4">
                      {[
                        "Discovery, requirements alignment, and interface planning.",
                        "Client collaboration and project delivery coordination.",
                        "Phase 1 completed; CRM ongoing, with scope and requirements under review and finalization.",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm leading-7 text-muted-foreground">
                          <Check aria-hidden="true" className="mt-1.5 size-3.5 shrink-0 text-accent/70" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            </li>
          </ol>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="relative mx-auto max-w-7xl scroll-mt-24 px-5 py-14 sm:px-6 sm:py-20"
        >
          <div className="relative isolate border-t border-white/10 pt-10 sm:pt-12">
            {/* Restrained atmospheric lighting */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10"
              style={{
                background:
                  "radial-gradient(ellipse at 75% 55%, rgb(34 211 238 / 0.06), transparent 65%)",
              }}
            />

            <Reveal>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                07 / Start a Conversation
              </p>

              <div className="mt-6 grid gap-10 lg:grid-cols-12 lg:gap-16">
                <div className="lg:col-span-7">
                  <h2
                    id="contact-heading"
                    className="text-display max-w-3xl text-4xl font-medium leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl"
                  >
                    Let’s build something together.
                  </h2>
                </div>

                <div className="lg:col-span-5 lg:pt-2">
                  <p className="max-w-xl text-base leading-8 text-muted-foreground">
                    Have a product idea, a website to improve, or a project
                    that needs clear design and direction? Let’s talk about
                    how we can bring it to life.
                  </p>

                  <ContactForm />

                  <a
                    href={`mailto:${PROFILE.email}`}
                    className={`mt-6 block w-fit max-w-full break-all rounded-md text-sm text-muted-foreground underline decoration-white/20 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent/50 ${focusClass}`}
                  >
                    {PROFILE.email}
                  </a>
                </div>
              </div>

              <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-6 sm:mt-12 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-muted-foreground">
                  Thoughtful design. Clear direction.
                </p>

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

