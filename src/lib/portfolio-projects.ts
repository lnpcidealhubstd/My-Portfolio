import everestPreview from "@/assets/everest-preview.png";
import saudiCover from "@/assets/Saudi.png";
import healthcareCover from "@/assets/Healthcare.png";
import aquabuildCover from "@/assets/Aquabuild.png";
import lodgingCover from "@/assets/lodging-preview.png";
import cabalenPreview from "@/assets/cabalen-preview.png";
import kapekoPreview from "@/assets/kapeko-preview.png";

// Temporary text previews; replace these with project screenshot imports when ready.
function projectPreview(name: string, subtitle: string, color: string): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="675" viewBox="0 0 1200 675"><rect width="1200" height="675" fill="#101923"/><rect x="64" y="64" width="1072" height="547" rx="24" fill="none" stroke="${color}" stroke-opacity=".45"/><text x="100" y="290" fill="${color}" font-family="Arial,sans-serif" font-size="68" font-weight="700">${name}</text><text x="100" y="355" fill="#d4e1e8" font-family="Arial,sans-serif" font-size="28">${subtitle}</text><text x="100" y="540" fill="#a8bdc8" font-family="Arial,sans-serif" font-size="22">LIVE DEMO · SCREENSHOT COMING SOON</text></svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}
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
  liveUrl?: string;
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
 * 3. Cabalen Resto
 * 4. Kapeko
 * 5. Other ongoing projects
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
      "A hospitality energy-management website shaped through discovery, UI/UX design, client feedback, and delivery coordination. Phase 1 is completed; Phase 2 CRM scope is under review and finalization.",
    cover: lodgingCover,
    screens: [
      {
        label: "Lodging Technologies — Project Preview",
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
    tag: "Website Redesign · Wix to Next.js",
    summary:
      "A complete redesign of Everest Energy Solutions’ Wix website, rebuilt by our team using Next.js, Tailwind CSS, and TypeScript as a foundation for future projects and planned CRM integration.",
    cover: everestPreview,
    screens: [
      {
        label: "Everest Energy Solutions — Project Preview",
        src: everestPreview,
      },
    ],
    role: "UI/UX Designer",
    status: "Redesign & rebuild completed · CRM planned",
    hasCaseStudy: true,
  },
  {
    slug: "cabalen-resto",
    title: "Cabalen Resto",
    tag: "Digital Ordering · Operations",
    summary:
      "A scan-to-order restaurant platform connecting menu browsing, payment selection, live order tracking, kitchen preparation, and management views.",
    cover: cabalenPreview,
    screens: [{ label: "Cabalen Resto — Temporary Preview", src: cabalenPreview }],
    role: "Role to be confirmed",
    status: "Live demo",
    hasCaseStudy: true,
    previewNote: "Temporary preview. Project screenshots will be added separately.",
    liveUrl: "https://resto-cabalen.vercel.app/",
  },
  {
    slug: "kapeko",
    title: "Kapeko",
    tag: "Digital Ordering · Operations",
    summary:
      "A scan-to-order coffee shop platform connecting menu browsing, payment selection, live order tracking, kitchen preparation, and management views.",
    cover: kapekoPreview,
    screens: [{ label: "Kapeko — Temporary Preview", src: kapekoPreview }],
    role: "Role to be confirmed",
    status: "Live demo",
    hasCaseStudy: true,
    previewNote: "Temporary preview. Project screenshots will be added separately.",
    liveUrl: "https://kapco.vercel.app/",
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
  "cabalen-resto": {
    role: "Role to be confirmed",
    status: "Live demo",
    sections: [
      {
        title: "Overview",
        body: "Cabalen Resto connects the restaurant ordering process from table-side scanning through payment, preparation, and service.",
      },
      {
        title: "Challenge",
        body: "The experience brings customer ordering and behind-the-counter activity into one connected workflow, so diners can follow their orders while the team coordinates payments, preparation, and service.",
      },
      {
        title: "My Role",
        body: "Personal design, development, and project management responsibilities will be confirmed before this section is finalized.",
        draft: true,
      },
      {
        title: "Process",
        body: "The demo follows the customer and team workflow described below.",
        items: [
          "Scan a table QR code and browse the menu.",
          "Choose items and place an order.",
          "Select GCash, bank, Maya / PayMaya, or over-the-counter payment.",
          "After payment clears, the kitchen receives the order for preparation.",
          "Track cooking, preparing, and serving status.",
          "Use management views to monitor sales, active tables, and inventory.",
        ],
      },
      {
        title: "Deliverables",
        body: "Demo interfaces cover the customer ordering journey and operational views.",
        items: [
          "Digital menu and ordering flow",
          "Payment options and order-status tracking",
          "Kitchen preparation workflow",
          "Administrative management views",
        ],
      },
      {
        title: "Outcome / Current Status",
        body: "A live demo is available for exploration. Production deployment, live payment processing, and business results have not been confirmed.",
      },
    ],
  },
  kapeko: {
    role: "Role to be confirmed",
    status: "Live demo",
    sections: [
      {
        title: "Overview",
        body: "Kapeko connects the coffee shop ordering process from table-side scanning through payment, preparation, and service.",
      },
      {
        title: "Challenge",
        body: "The experience brings customer ordering and behind-the-counter activity into one connected workflow, so diners can follow their orders while the team coordinates payments, preparation, and service.",
      },
      {
        title: "My Role",
        body: "Personal design, development, and project management responsibilities will be confirmed before this section is finalized.",
        draft: true,
      },
      {
        title: "Process",
        body: "The demo follows the customer and team workflow described below.",
        items: [
          "Scan a table QR code and browse the menu.",
          "Choose items and place an order.",
          "Select GCash, bank, Maya / PayMaya, or over-the-counter payment.",
          "After payment clears, the kitchen receives the order for preparation.",
          "Track cooking, preparing, and serving status.",
          "Use management views to monitor sales, active tables, and inventory.",
        ],
      },
      {
        title: "Deliverables",
        body: "Demo interfaces cover the customer ordering journey and operational views.",
        items: [
          "Digital menu and ordering flow",
          "Payment options and order-status tracking",
          "Kitchen preparation workflow",
          "Administrative management views",
        ],
      },
      {
        title: "Outcome / Current Status",
        body: "A live demo is available for exploration. Production deployment, live payment processing, and business results have not been confirmed.",
      },
    ],
  },

  "lodging-technologies": {
    role: "UI/UX Designer & Project Manager",
    status: "Phase 1 completed · CRM ongoing",
    sections: [
      {
        title: "Overview",
        body: "Lodging Technologies provides energy-management solutions for hospitality properties. The project focused on a clear, modern website that introduces its systems, explains their value, and guides potential customers toward a project inquiry. My role combined UI/UX design with requirements alignment, client collaboration, and delivery coordination from discovery through Phase 1 completion.",
      },
      {
        title: "Challenge",
        body: "The website needed to present a broader energy-management offering rather than position the business as a thermostat supplier alone. Hospitality decision-makers needed to understand HVAC, lighting, and appliance-control solutions without overly technical explanations. The client wanted a minimal visual direction, clear product presentation, and a straightforward path to requesting a proposal.",
      },
      {
        title: "My Role",
        body: "As UI/UX Designer and Project Manager, I connected interface planning with project priorities and delivery. Project administration and communication were supported by other team members.",
        items: [
          "UI/UX design and interface planning",
          "Discovery and requirements alignment",
          "Client collaboration and feedback coordination",
          "Scope alignment and phased delivery coordination",
        ],
      },
      {
        title: "Process",
        body: "I translated discovery findings into an early landing-page concept, then refined the experience through client review.",
        items: [
          "Discovery: reviewed business goals, audience, products, visual preferences, and inquiry requirements.",
          "Rapid prototyping: developed an initial landing-page prototype within 24 hours to establish a concrete direction for review.",
          "Interface planning: brought together a hero, problem statement, product showcase, gallery, and clear calls to action.",
          "Inquiry experience: planned the request-for-proposal interface around relevant property and system requirements.",
        ],
      },
      {
        title: "Client Feedback & Refinement",
        body: "Client-requested revisions have been applied. Feedback helped refine how the website explains products and collects proposal information.",
        items: [
          "Updated hospitality imagery and incorporated marketing-supplied product imagery.",
          "Refined HVAC options and product selections in the request-for-proposal form.",
          "Replaced unfamiliar technical shorthand with clearer product language.",
          "Adjusted telephone input behavior.",
          "Refined trademark sizing and company-name consistency.",
        ],
      },
      {
        title: "Project Management",
        body: "I supported the connection between discovery, design review, revision priorities, and phased delivery. My contribution included requirements clarification, proposal preparation, client collaboration, and delivery alignment.",
        items: [
          "Translated discovery findings into a focused first-phase website direction.",
          "Organized client comments into actionable revision priorities.",
          "Coordinated design decisions around content and branding inputs.",
          "Supported planning for client-owned infrastructure and handover considerations.",
        ],
      },
      {
        title: "Deliverables",
        body: "Phase 1 is completed, with the client-requested website revisions applied. The branded project preview introduces the project; the live website link provides access to the interface.",
        items: [
          "Initial landing-page prototype for direction and review.",
          "Website interface and product-presentation design.",
          "Request-for-proposal interface and revised field selections.",
          "Client feedback refinements and Phase 1 website delivery.",
        ],
      },
      {
        title: "Phase 2 — CRM Review & Finalization",
        body: "The CRM scope, requirements, and implementation approach are under review and finalization. The earlier proposal outlined a light inquiry-management dashboard, but the final platform, workflows, integrations, and delivery scope are not yet confirmed. This phase is not presented as an implemented CRM.",
      },
      {
        title: "Outcome / Current Status",
        body: "Phase 1 established the website foundation for presenting Lodging Technologies’ energy-management solutions and guiding prospective customers toward an inquiry. Client-requested revisions have been applied. Phase 2 CRM scope remains under review and finalization. Conversion results and other performance metrics have not yet been documented.",
      },
    ],
  },
  "everest-energy-solutions": {
    role: "UI/UX Designer",
    status: "Website redesign & rebuild completed · CRM integration planned",
    sections: [
      {
        title: "Overview",
        body: "Everest Energy Solutions’ existing Wix website was completely redesigned and rebuilt by our team using Next.js, Tailwind CSS, and TypeScript. The engagement created a refreshed website foundation intended to support future digital projects and planned CRM integration.",
      },
      {
        title: "Challenge",
        body: "The project required a complete website redesign alongside a move from Wix to a custom implementation. The direction needed to address the current website while considering how future functionality and CRM integration could connect to it.",
      },
      {
        title: "My Role",
        body: "My role was UI/UX Designer. I contributed to the website redesign as part of the team responsible for the rebuild. The development stack describes the team’s implementation; my portfolio contribution is presented through the interface designs and supporting design artifacts.",
      },
      {
        title: "Process",
        body: "The engagement combined a complete visual redesign with a website rebuild. Supporting design work covered interface layouts, reusable components, a sitemap, and user-flow planning.",
      },
      {
        title: "Deliverables",
        body: "The website redesign and rebuild are completed. Supporting work includes design-system assets, UI components, sitemap and user-flow documentation, and mobile and dashboard interface designs.",
        items: [
          "Website interface redesign",
          "Team website rebuild using Next.js, Tailwind CSS, and TypeScript",
          "Design-system and UI-component assets",
          "Sitemap and user-flow diagrams",
          "Mobile and dashboard interface designs",
        ],
      },
      {
        title: "Future Integration — CRM",
        body: "CRM integration is planned for a future phase. The website was rebuilt with future digital projects in mind. CRM workflows, platform selection, and implementation outcomes are not presented as completed deliverables.",
      },
      {
        title: "Outcome / Current Status",
        body: "The project moved the website from its previous Wix implementation to a redesigned Next.js website using Tailwind CSS and TypeScript. The redesign and rebuild are completed; CRM integration remains planned. No launch date, conversion improvements, or measured performance results are claimed.",
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
