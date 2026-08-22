import React, { useState } from "react";
import { DESIGN_TOKENS, PLAYGROUND_METRICS } from "@/lib/site-data";
import { Reveal } from "@/components/site/Reveal";

// Asset Diagrams
import figmaCardImg from "@/assets/figmacard.png";
import aiCardImg from "@/assets/aicard.png";

// ── CURATED MODERN 2026 UI/UX RESOURCE REGISTRY ──
interface ResourceItem {
    name: string;
    category:
    | "Inspiration"
    | "AI & Prototyping"
    | "Research & Testing"
    | "Typography"
    | "Icons & Systems"
    | "Colors & Gradients"
    | "Assets & Imagery";
    description: string;
    tag: string;
    url: string;
    isFavorite?: boolean;
}

const UI_RESOURCE_LIBRARY: ResourceItem[] = [
    // AI & Generative UI Prototyping (2026 Modern Standard)
    { name: "Lovable", category: "AI & Prototyping", description: "AI web builder generating production-ready React + Tailwind interfaces rapidly.", tag: "AI Prototyper", url: "https://lovable.dev", isFavorite: true },
    { name: "v0 by Vercel", category: "AI & Prototyping", description: "Generative UI system rendering accessible Shadcn + Tailwind code snippets.", tag: "Generative UI", url: "https://v0.dev", isFavorite: true },
    { name: "Relume AI", category: "AI & Prototyping", description: "AI-powered sitemap builder, wireframe generator, and website copy orchestrator.", tag: "AI Wireframing", url: "https://relume.io", isFavorite: true },
    { name: "Recraft AI", category: "AI & Prototyping", description: "Generative AI vector canvas for custom brand illustrations and iconography.", tag: "AI Vector Graphics", url: "https://recraft.ai" },

    // User Research & Prototype Testing
    { name: "Maze", category: "Research & Testing", description: "Rapid prototype testing, user mission analytics, and usability metrics.", tag: "User Testing", url: "https://maze.co", isFavorite: true },
    { name: "Lyssna", category: "Research & Testing", description: "Usability testing platform for 5-second preference tests and navigation flows.", tag: "UX Research", url: "https://lyssna.com" },

    // Design Inspiration & Flows
    { name: "Mobbin", category: "Inspiration", description: "Real-world iOS, Android & Web app UI patterns and user flows.", tag: "Patterns & Flows", url: "https://mobbin.com", isFavorite: true },
    { name: "Dribbble", category: "Inspiration", description: "Visual design inspiration, micro-interactions, and visual shots.", tag: "Visual Shots", url: "https://dribbble.com" },
    { name: "Behance", category: "Inspiration", description: "In-depth case studies, branding architecture, and product design showcase.", tag: "Case Studies", url: "https://behance.net" },
    { name: "Webframe", category: "Inspiration", description: "Categorized collection of web app design frames and dashboard layouts.", tag: "Web App UI", url: "https://webframe.xyz" },

    // Fonts & Typography
    { name: "Google Fonts", category: "Typography", description: "Open-source variable typography web library directly integrated into Figma.", tag: "Web Fonts", url: "https://fonts.google.com", isFavorite: true },
    { name: "Fontshare", category: "Typography", description: "Free modern professional quality fonts by Indian Type Foundry.", tag: "Variable Fonts", url: "https://fontshare.com", isFavorite: true },

    // Icons & Design Systems
    { name: "Lucide Icons", category: "Icons & Systems", description: "Clean, consistent vector icon library for modern React & Figma setups.", tag: "Vector Icons", url: "https://lucide.dev", isFavorite: true },
    { name: "Iconify", category: "Icons & Systems", description: "Universal vector icon framework with 100,000+ open-source icons for Figma.", tag: "Figma Plugin", url: "https://iconify.design", isFavorite: true },
    { name: "Tokens Studio", category: "Icons & Systems", description: "Figma plugin for managing multi-brand design tokens and code variables.", tag: "Token Manager", url: "https://tokens.studio", isFavorite: true },
    { name: "Shadcn UI", category: "Icons & Systems", description: "Re-usable component architecture mapped from Figma to React + Tailwind.", tag: "Design Tokens", url: "https://ui.shadcn.com" },

    // Colors & Gradients
    { name: "Coolors", category: "Colors & Gradients", description: "Superfast color palette generator and WCAG contrast checker.", tag: "Color Palette", url: "https://coolors.co", isFavorite: true },
    { name: "Realtime Colors", category: "Colors & Gradients", description: "Test system colors and UI themes live on a mock website canvas.", tag: "Live Theme Test", url: "https://realtimecolors.com", isFavorite: true },

    // Assets & Imagery
    { name: "Unsplash", category: "Assets & Imagery", description: "High-resolution royalty-free imagery for web and app hero mockups.", tag: "Photography", url: "https://unsplash.com", isFavorite: true },
    { name: "Storyset", category: "Assets & Imagery", description: "Customizable vector illustrations for onboarding and empty states.", tag: "Vector Illustrations", url: "https://storyset.com" },
];

export function DesignPlayground() {
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const [searchQuery, setSearchQuery] = useState("");

    const categories = [
        "All",
        "AI & Prototyping",
        "Research & Testing",
        "Inspiration",
        "Typography",
        "Icons & Systems",
        "Colors & Gradients",
        "Assets & Imagery",
    ];

    const filteredResources = UI_RESOURCE_LIBRARY.filter((item) => {
        const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
        const matchesSearch =
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.tag.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <section className="relative py-24 bg-background border-t border-white/5 overflow-hidden">
            {/* Ambient Lighting */}
            <div
                aria-hidden
                className="pointer-events-none absolute -left-20 top-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-accent/10 blur-[120px]"
            />
            <div
                aria-hidden
                className="pointer-events-none absolute -right-20 top-1/3 h-80 w-80 rounded-full bg-accent/5 blur-[100px]"
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

                {/* Section Header */}
                <Reveal>
                    <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <p className="text-mono text-xs uppercase tracking-[0.25em] text-accent mb-3 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent pulse-dot" />
                                / 03 — DESIGN SYSTEMS &amp; AI WORKFLOW
                            </p>
                            <h2 className="text-display text-3xl md:text-5xl font-bold text-white tracking-tight">
                                Curated Design <span className="text-accent neon-text">Stack.</span>
                            </h2>
                        </div>
                        <p className="text-white/60 text-sm max-w-md leading-relaxed">
                            A handpicked registry of industry-standard Figma tools, generative AI prototypers, usability testing suites, variable typography, and design workflow inspiration.
                        </p>
                    </div>
                </Reveal>

                {/* ── ARCHITECTURE DIAGRAM CARDS ── */}
                <Reveal delay={80}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        <div className="glass-card rounded-2xl border border-white/10 overflow-hidden p-6 bg-black/40 flex flex-col justify-between group">
                            <div>
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-mono text-xs uppercase tracking-[0.2em] text-accent font-semibold">
                    // Figma Auto-Layout 5.0 Mechanics
                                    </span>
                                    <span className="text-mono text-[10px] text-white/40">Visual Spec</span>
                                </div>
                                <p className="text-xs text-white/60 leading-relaxed mb-4">
                                    Spatial padding, 8px grid alignment, and constraint logic engineered for developer handoff.
                                </p>
                            </div>
                            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-black/60 border border-white/10 p-2">
                                <img
                                    src={figmaCardImg}
                                    alt="Auto-Layout Specs Diagram"
                                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>

                        <div className="glass-card rounded-2xl border border-white/10 overflow-hidden p-6 bg-black/40 flex flex-col justify-between group">
                            <div>
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-mono text-xs uppercase tracking-[0.2em] text-accent font-semibold">
                    // Design Token &amp; Code Translation Engine
                                    </span>
                                    <span className="text-mono text-[10px] text-white/40">System Sync</span>
                                </div>
                                <p className="text-xs text-white/60 leading-relaxed mb-4">
                                    Translating OKLCH variables and spatial tokens directly into CSS custom properties and Tailwind config.
                                </p>
                            </div>
                            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-black/60 border border-white/10 p-2">
                                <img
                                    src={aiCardImg}
                                    alt="Token Translation Engine Diagram"
                                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </div>
                </Reveal>

                {/* ── RESOURCE LIBRARY SEARCH & FILTER CONTROLS ── */}
                <Reveal delay={120}>
                    <div className="glass-card rounded-2xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl mb-12">

                        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
                            {/* Category Filter Chips */}
                            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
                                {categories.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setSelectedCategory(cat)}
                                        className={`px-3.5 py-1.5 rounded-lg text-mono text-xs transition-all whitespace-nowrap ${selectedCategory === cat
                                                ? "bg-accent text-background font-bold shadow-[0_0_15px_rgba(34,211,238,0.3)]"
                                                : "bg-white/5 text-white/60 hover:text-white border border-white/10"
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>

                            {/* Search Bar */}
                            <div className="relative min-w-[240px]">
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search tools, AI engines, fonts..."
                                    className="w-full px-4 py-2 rounded-xl bg-black/60 border border-white/10 text-xs text-white placeholder:text-white/30 focus:border-accent focus:outline-none transition-colors font-mono"
                                />
                            </div>
                        </div>

                        {/* Resource Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {filteredResources.map((res) => (
                                <a
                                    key={res.name}
                                    href={res.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-5 rounded-xl bg-black/40 border border-white/5 hover:border-accent/40 transition-all duration-300 flex flex-col justify-between group hover:translate-y-[-2px]"
                                >
                                    <div>
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-2">
                                                <h4 className="text-display font-bold text-sm text-white group-hover:text-accent transition-colors">
                                                    {res.name}
                                                </h4>
                                                {res.isFavorite && (
                                                    <span className="text-[10px] text-accent bg-accent/10 px-1.5 py-0.2 rounded border border-accent/20 font-mono">
                                                        Top Choice
                                                    </span>
                                                )}
                                            </div>
                                            <span className="text-mono text-[10px] text-white/40 group-hover:text-accent transition-colors">
                                                ↗
                                            </span>
                                        </div>

                                        <p className="text-xs text-white/60 leading-relaxed mb-4">
                                            {res.description}
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-between pt-3 border-t border-white/5 text-mono text-[10px]">
                                        <span className="text-accent/80 font-medium">{res.tag}</span>
                                        <span className="text-white/30 uppercase">{res.category}</span>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {filteredResources.length === 0 && (
                            <div className="text-center py-12 text-mono text-xs text-white/40">
                                No design resources found matching "{searchQuery}".
                            </div>
                        )}

                    </div>
                </Reveal>

            </div>
        </section>
    );
}