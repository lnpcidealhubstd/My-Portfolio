import eesWebApp from "@/assets/EES Web App.png";
import eesMobileApp from "@/assets/EES Mobile App.png";
import eesDashboard from "@/assets/EES Dashboard.png";
import eesDesignSystem from "@/assets/Design System.png";
import eesUiComponents from "@/assets/UI Components.png";
import eesSitemap from "@/assets/Sitemap.png";
import eesUserFlowPublic from "@/assets/User Flow - Public User.png";
import eesUserFlowClient from "@/assets/User Flow - Client Portal.png";
import eesUserFlow from "@/assets/User Flow.png";
import saudiCover from "@/assets/Saudi.png";
import healthcareCover from "@/assets/Healthcare.png";
import aquabuildCover from "@/assets/Aquabuild.png";
import lodgingCover from "@/assets/lodgingtech.png";

export type Screen = {
  label: string;
  src: string;
};

export type Project = {
  slug: string;
  title: string;
  tag: string;
  summary: string;
  cover: string;
  screens: readonly Screen[];
  role: string;
  status: string;
  hasCaseStudy: boolean;
  previewNote?: string;
};

export type CaseSection = {
  title: string;
  body: string;
  draft?: boolean;
  items?: readonly string[];
};

export type CaseStudy = {
  role: string;
  status: string;
  sections: readonly CaseSection[];
};

/*
 * PROJECT ORDER
 * 1. Lodging Technologies
 * 2. Everest Energy Solutions
 * 3. Other ongoing projects
 *
 * This file exports PORTFOLIO_PROJECTS.
 * Do not import PORTFOLIO_PROJECTS into this same file.
 */

export const PORTFOLIO_PROJECTS: readonly Project[] = [
  {
    slug: "lodging-technologies",
    title: "Lodging Technologies",
    tag: "UI/UX Design · Project Management",
    summary:
      "A phased engagement spanning discovery, UI/UX design, requirements alignment, and project delivery coordination. Phase 1 is complete; CRM implementation is ongoing.",
    cover: lodgingCover,
    screens: [
      {
        label: "Website Homepage",
        src: lodgingCover,
      },
    ],
    role: "UI/UX Designer & Project Manager",
    status: "Phase 1 completed · CRM ongoing",
    hasCaseStudy: true,
  },
  {
    slug: "everest-energy-solutions",
    title: "Everest Energy Solutions",
    tag: "Web App · Mobile App · Dashboard",
    summary:
      "A completed UI/UX design project covering the web app, mobile app, and dashboard for Everest Energy Solutions.",
    cover: eesWebApp,
    screens: [
      {
        label: "Web App",
        src: eesWebApp,
      },
      {
        label: "Mobile App",
        src: eesMobileApp,
      },
      {
        label: "Dashboard",
        src: eesDashboard,
      },
      {
        label: "Design System",
        src: eesDesignSystem,
      },
      {
        label: "UI Components",
        src: eesUiComponents,
      },
      {
        label: "Sitemap",
        src: eesSitemap,
      },
      {
        label: "User Flow — Public User",
        src: eesUserFlowPublic,
      },
      {
        label: "User Flow — Client Portal",
        src: eesUserFlowClient,
      },
      {
        label: "User Flow",
        src: eesUserFlow,
      },
    ],
    role: "UI/UX Designer",
    status: "Completed",
    hasCaseStudy: true,
  },
  {
    slug: "saudi-project",
    title: "Saudi Project",
    tag: "UI/UX Design · Ongoing",
    summary: "An ongoing UI/UX design project for a Saudi-based client.",
    cover: saudiCover,
    screens: [
      {
        label: "Preview",
        src: saudiCover,
      },
    ],
    role: "UI/UX Designer",
    status: "Ongoing",
    hasCaseStudy: false,
  },
  {
    slug: "healthcare-project",
    title: "Healthcare Project",
    tag: "UI/UX Design · Ongoing",
    summary: "Ongoing UI/UX design for a healthcare platform.",
    cover: healthcareCover,
    screens: [
      {
        label: "Preview",
        src: healthcareCover,
      },
    ],
    role: "UI/UX Designer",
    status: "Ongoing",
    hasCaseStudy: false,
  },
  {
    slug: "aquabuild-project",
    title: "Aquabuild Project",
    tag: "UI/UX Design · Ongoing",
    summary: "Ongoing UI/UX design for Aquabuild.",
    cover: aquabuildCover,
    screens: [
      {
        label: "Preview",
        src: aquabuildCover,
      },
    ],
    role: "UI/UX Designer",
    status: "Ongoing",
    hasCaseStudy: false,
  },
];

/*
 * CASE STUDIES
 * Confirmed roles and statuses are included.
 * Missing details are explicitly marked as placeholders.
 */

const CASE_STUDIES: Record<string, CaseStudy> = {
  "lodging-technologies": {
    role: "UI/UX Designer & Project Manager",
    status: "Phase 1 completed · Phase 2 CRM implementation ongoing",
    sections: [
      {
        title: "Overview",
        body: "My role on Lodging Technologies combines UI/UX design and project management. The engagement covers discovery, requirements alignment, interface planning, and delivery coordination across implementation phases.",
      },
      {
        title: "Challenge",
        draft: true,
        body: "Placeholder: add the original client problem, business objectives, target users, and confirmed project constraints.",
      },
      {
        title: "My Role",
        body: "I worked as the UI/UX Designer and Project Manager, connecting interface planning with client collaboration and delivery coordination.",
        items: [
          "Discovery and requirements alignment",
          "UI/UX design and interface planning",
          "Client collaboration",
          "Project delivery coordination",
        ],
      },
      {
        title: "UI/UX Design Process",
        draft: true,
        body: "Placeholder: document the actual user flows, wireframes, interface decisions, prototypes, and feedback iterations. Add the relevant screenshots and explain your contribution to each artifact.",
      },
      {
        title: "Project Management",
        body: "My project management contribution included requirements alignment, client collaboration, and delivery coordination.",
        items: [
          "Placeholder: add the agreed scope and milestones",
          "Placeholder: describe how tasks and feedback were coordinated",
          "Placeholder: add an example of a project decision or delivery challenge",
        ],
      },
      {
        title: "CRM Implementation",
        body: "Phase 2 CRM implementation is ongoing. The scope, workflows, and implementation details below will be documented as the phase progresses.",
        items: [
          "Placeholder: confirmed CRM objectives and scope",
          "Placeholder: workflows and integrations",
          "Placeholder: implementation milestones and current progress",
        ],
      },
      {
        title: "Deliverables",
        body: "The website homepage preview is included in the gallery. Phase 1 is completed; the detailed deliverables and handover record will be added here.",
        items: [
          "Placeholder: confirmed Phase 1 deliverables",
          "Placeholder: design and project documentation",
          "Placeholder: CRM deliverables as they are completed",
        ],
      },
      {
        title: "Outcome / Current Status",
        body: "Phase 1 is completed. Phase 2 CRM implementation is ongoing. Client feedback, project learnings, and any verified outcomes can be added when available.",
      },
    ],
  },
  "everest-energy-solutions": {
    role: "UI/UX Designer",
    status: "Completed · Web app, mobile app & dashboard",
    sections: [
      {
        title: "Overview",
        body: "A completed project for Everest Energy Solutions covering the web app, mobile app, and dashboard. My role was UI/UX Designer.",
      },
      {
        title: "Challenge",
        draft: true,
        body: "Placeholder: add the original design brief, intended users, business goals, and the problems the interfaces needed to address.",
      },
      {
        title: "My Role",
        body: "I worked as the UI/UX Designer for the web app, mobile app, and dashboard.",
        items: ["Web app UI/UX design", "Mobile app UI/UX design", "Dashboard UI/UX design"],
      },
      {
        title: "Process",
        draft: true,
        body: "Placeholder: describe the actual requirements, user flows, wireframes, visual design decisions, prototype iterations, and handoff process. Include research or testing only if it was performed.",
      },
      {
        title: "Deliverables",
        body: "Completed design work covered three product surfaces.",
        items: [
          "Web app",
          "Mobile app",
          "Dashboard",
          "Placeholder: add confirmed supporting artifacts and final screenshots",
        ],
      },
      {
        title: "Outcome / Current Status",
        body: "The project is completed. Client feedback, launch details, design learnings, and measurable results remain to be documented separately.",
      },
    ],
  },
};

export function findProject(slug: string): Project | undefined {
  return PORTFOLIO_PROJECTS.find((project) => project.slug === slug);
}

export function getCaseStudy(project: Project): CaseStudy | undefined {
  return CASE_STUDIES[project.slug];
}
