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

export type CoreServiceChip = { label: string; icon: string; kind?: "tool" | "feature" };

export type CoreService = {
  slug: string;
  index: string;
  kicker: string;
  title: string;
  description: string;
  chips: CoreServiceChip[];
};

export const CORE_SERVICES: CoreService[] = [
  {
    slug: "design-architecture",
    index: "01",
    kicker: "Visual Architecture",
    title: "UI/UX Systems",
    description:
      "High-fidelity user interfaces, experience mapping, and production-ready component blueprints engineered for scale.",
    chips: [
      { label: "Figma", icon: "figma", kind: "tool" },
      { label: "Canva", icon: "canva", kind: "tool" },
      { label: "Blender", icon: "blender", kind: "tool" },
    ],
  },
  {
    slug: "ai-native-architecture",
    index: "02",
    kicker: "AI Orchestration",
    title: "AI-Native Products",
    description:
      "Proprietary AI orchestration layer for rapid UX auditing, feature mapping, and complex system logic at extreme velocity.",
    chips: [
      { label: "Prompt Engineering", icon: "ai", kind: "feature" },
      { label: "Agent Workflows", icon: "cpu", kind: "feature" },
      { label: "UX Auditing", icon: "shield", kind: "feature" },
    ],
  },
  {
    slug: "production-deployment",
    index: "03",
    kicker: "Production & Deployment",
    title: "Edge Delivery",
    description:
      "High-performance local and edge pipeline with 100% version control ownership and instant global deployment.",
    chips: [
      { label: "GitHub", icon: "github", kind: "tool" },
      { label: "Vercel", icon: "vercel", kind: "tool" },
      { label: "VS Code", icon: "vscode", kind: "tool" },
    ],
  },
];

export const SERVICES = [
  {
    slug: "ui-ux-prototyping",
    index: "01",
    title: "High-Velocity UI/UX & Rapid Prototyping",
    short: "Figma Auto-Layout, component systems engineering, and fast sync to live code.",
  },
  {
    slug: "ai-native-architecture",
    index: "02",
    title: "AI-Native Product Architecture",
    short: "Custom advanced AI orchestration for UX auditing, feature mapping, and complex technical logic.",
  },
] as const;

export const DESIGN_PROJECTS = [
  {
    slug: "everest-energy-solutions",
    title: "Everest Energy Solutions",
    tag: "Figma · Web App & Mobile App",
    summary:
      "Full product design for a smart energy solutions company — responsive web app and mobile app covering renewable energy services, project showcases, and client engagement flows.",
    cover: eesWebApp,
    screens: [
      { label: "Web App", src: eesWebApp },
      { label: "Mobile App", src: eesMobileApp },
      { label: "Dashboard", src: eesDashboard },
      { label: "Design System", src: eesDesignSystem },
      { label: "UI Components", src: eesUiComponents },
      { label: "Sitemap", src: eesSitemap },
      { label: "User Flow — Public User", src: eesUserFlowPublic },
      { label: "User Flow — Client Portal", src: eesUserFlowClient },
      { label: "User Flow", src: eesUserFlow },
    ],
  },
  {
    slug: "saudi-project",
    title: "Saudi Project",
    tag: "Figma · Ongoing",
    summary: "Ongoing UI/UX design project for a Saudi-based client — currently in active development.",
    cover: saudiCover,
    screens: [{ label: "Preview", src: saudiCover }],
  },
  {
    slug: "healthcare-project",
    title: "Healthcare Project",
    tag: "Figma · Ongoing",
    summary: "Ongoing UI/UX design for a healthcare platform — currently in active development.",
    cover: healthcareCover,
    screens: [{ label: "Preview", src: healthcareCover }],
  },
  {
    slug: "aquabuild-project",
    title: "Aquabuild Project",
    tag: "Figma · Ongoing",
    summary: "Ongoing UI/UX design for Aquabuild — currently in active development.",
    cover: aquabuildCover,
    screens: [{ label: "Preview", src: aquabuildCover }],
  },
] as const;

export type Slug<T extends readonly { slug: string }[]> = T[number]["slug"];

export const WORK_PROCESS = [
  {
    step: "01",
    title: "Discovery & Architecture",
    description:
      "Analyzing system requirements, mapping user flows, and defining information architecture before writing code or drawing frames.",
    tags: ["UX RESEARCH", "SITEMAPS", "WIREFRAMING"],
  },
  {
    step: "02",
    title: "High-Fidelity Interface Design",
    description:
      "Crafting scalable design systems, interactive components, and visual layouts built with auto-layout precision in Figma.",
    tags: ["FIGMA SYSTEMS", "UI COMPONENTS", "INTERACTIVE PROTOTYPES"],
  },
  {
    step: "03",
    title: "AI-Accelerated Workflows",
    description:
      "Leveraging custom prompt orchestration and AI logic to rapidly prototype features and audit user experiences at high velocity.",
    tags: ["PROMPT ENGINEERING", "UX AUDITING", "RAPID PROTOTYPING"],
  },
  {
    step: "04",
    title: "Production Hand-off & Delivery",
    description:
      "Translating design specs into clean code standards with version control and seamless deployment pipelines.",
    tags: ["GITHUB", "VERCEL", "FRONT-END READY"],
  },
];

export const DESIGN_TOKENS = [
  { name: "--bg-background", value: "oklch(0.10 0.008 240)", label: "Deep Canvas" },
  { name: "--accent-cyan", value: "oklch(0.82 0.18 195)", label: "Neon Cyan Glow" },
  { name: "--surface-card", value: "oklch(0.13 0.009 240)", label: "Glass Surface" },
  { name: "--border-hairline", value: "rgba(255, 255, 255, 0.08)", label: "Subtle Stroke" },
];

export const PLAYGROUND_METRICS = [
  { label: "Spatial Grid", value: "8px / 16px Strict Base" },
  { label: "Auto-Layout", value: "Version 5.0 Responsive Frames" },
  { label: "WCAG Contrast", value: "AAA Compliant Dark Palette" },
  { label: "Component Tokens", value: "100+ Scalable Figma Variables" },
];