import React, { useState } from "react";
import { Reveal } from "@/components/site/Reveal";

// Asset Diagrams
import figmaCardImg from "@/assets/figmacard.png";
import aiCardImg from "@/assets/aicard.png";

interface ResourceItem {
    name: string;
    description: string;
    tag: string;
    url: string;
    icon: string;
    isOfficialDownload?: boolean;
}

interface ResourceCategoryGroup {
    id: string;
    title: string;
    categoryIcon: string;
    badgeColor: string;
    items: ResourceItem[];
}

const RESOURCE_GROUPS: ResourceCategoryGroup[] = [
    {
        id: "deployment-optimization",
        title: "Deployment & Optimization Resources",
        categoryIcon: "⚡",
        badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
        items: [
            { name: "Vercel", description: "Global edge platform for instant React & Next.js frontend deployments.", tag: "Edge Hosting", url: "https://vercel.com", icon: "▲", isOfficialDownload: true },
            { name: "Netlify", description: "Automated CI/CD deployment pipeline and web hosting for modern static sites.", tag: "Cloud Hosting", url: "https://netlify.com", icon: "🌐", isOfficialDownload: true },
            { name: "Google PageSpeed Insights", description: "Official web performance audit tool analyzing Core Web Vitals.", tag: "Performance Audit", url: "https://pagespeed.web.dev", icon: "⚡" },
            { name: "GTmetrix", description: "Analyze web page speed performance, waterfalls, and optimization scores.", tag: "Speed Analysis", url: "https://gtmetrix.com", icon: "📈" },
            { name: "Google Analytics 4", description: "Official web user analytics, traffic attribution, and conversion tracking.", tag: "User Analytics", url: "https://analytics.google.com", icon: "📊" },
            { name: "Optimizilla", description: "Ultimate image optimizer for lossless PNG, JPEG, and WebP compression.", tag: "Image Compressor", url: "https://imagecompressor.com", icon: "🖼️" },
        ],
    },
    {
        id: "dev-tools",
        title: "Development & Editor Tools",
        categoryIcon: "🛠️",
        badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
        items: [
            { name: "Visual Studio Code", description: "Industry-standard code editor with rich extension ecosystem for web development.", tag: "Code Editor", url: "https://code.visualstudio.com", icon: "💻", isOfficialDownload: true },
            { name: "Cursor AI Editor", description: "The AI-first code editor built on VS Code with direct prompt-to-code orchestration.", tag: "AI IDE", url: "https://cursor.com", icon: "🤖", isOfficialDownload: true },
            { name: "GitHub Desktop / Web", description: "Version control platform for code repositories, branches, and collaboration.", tag: "Version Control", url: "https://github.com", icon: "🐙", isOfficialDownload: true },
            { name: "Tailwind CSS Documentation", description: "Utility-first CSS framework for rapid UI component development.", tag: "CSS Framework", url: "https://tailwindcss.com", icon: "🎨" },
        ],
    },
    {
        id: "ui-ux-design",
        title: "Design Systems & UI/UX Software",
        categoryIcon: "🎨",
        badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
        items: [
            { name: "Figma", description: "The collaborative interface design tool for auto-layout, prototyping, and systems.", tag: "Primary UI Tool", url: "https://figma.com", icon: "🎨", isOfficialDownload: true },
            { name: "Tokens Studio for Figma", description: "Figma plugin for managing multi-brand design tokens and code sync.", tag: "Token Manager", url: "https://tokens.studio", icon: "⚙️" },
            { name: "Relume AI", description: "AI sitemap builder, wireframe generator, and website copy orchestrator.", tag: "AI Wireframing", url: "https://relume.io", icon: "🕸️" },
            { name: "Mobbin", description: "Real-world iOS, Android & Web app UI patterns and user flow inspiration.", tag: "UI Flows", url: "https://mobbin.com", icon: "📱" },
        ],
    },
    {
        id: "ai-prototyping-mcp",
        title: "AI Prototyping & MCP Servers",
        categoryIcon: "🤖",
        badgeColor: "bg-violet-500/10 text-violet-400 border-violet-500/20",
        items: [
            { name: "Claude 3.5 Sonnet", description: "Primary AI model for complex UI architecture, component logic, and prompt tuning.", tag: "AI Reasoner", url: "https://claude.ai", icon: "🧠" },
            { name: "Replit", description: "Cloud dev environment with Replit Agent for rapid full-stack app prototyping.", tag: "AI Cloud IDE", url: "https://replit.com", icon: "⚡", isOfficialDownload: true },
            { name: "Lovable", description: "AI web builder generating production-ready React + Tailwind interfaces rapidly.", tag: "AI Prototyper", url: "https://lovable.dev", icon: "❤️" },
            { name: "Figma Context MCP", description: "Feeds Figma variable tokens, frame layouts, and component specs to Cursor & Claude.", tag: "Figma MCP", url: "https://modelcontextprotocol.io", icon: "🔌" },
        ],
    },
    {
        id: "colors-typography",
        title: "Colors, Fonts & Asset Libraries",
        categoryIcon: "🔤",
        badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
        items: [
            { name: "Google Fonts", description: "Open-source variable typography web library directly integrated into Figma.", tag: "Typography", url: "https://fonts.google.com", icon: "🔤" },
            { name: "Fontshare", description: "Free modern professional quality fonts by Indian Type Foundry.", tag: "Variable Fonts", url: "https://fontshare.com", icon: "✍️" },
            { name: "Coolors", description: "Superfast color palette generator and WCAG contrast checker.", tag: "Color Palette", url: "https://coolors.co", icon: "🎨" },
            { name: "Realtime Colors", description: "Test system colors and UI themes live on a mock website canvas.", tag: "Live Theme Test", url: "https://realtimecolors.com", icon: "🌈" },
            { name: "Lucide Icons", description: "Clean, consistent vector icon library for modern React & Figma setups.", tag: "Vector Icons", url: "https://lucide.dev", icon: "💎" },
            { name: "Unsplash", description: "High-resolution royalty-free imagery for web and app hero mockups.", tag: "Photography", url: "https://unsplash.com", icon: "📷" },
        ],
    },
];

export function DesignPlayground() {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategoryFilter, setActiveCategoryFilter] = useState("all");

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
                                Developer &amp; Designer <span className="text-accent neon-text">Resources.</span>
                            </h2>
                        </div>
                        <p className="text-white/60 text-sm max-w-md leading-relaxed">
                            Curated stack of deployment pipelines, development tools, Figma plugins, AI prototypers, and typography libraries with official download links.
                        </p>
                    </div>
                </Reveal>

                {/* ── ARCHITECTURE DIAGRAM CARDS ── */}
                <Reveal delay={80}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
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

                {/* ── GMX ACADEMY STYLE CATEGORIZED RESOURCE GROUPS ── */}
                <Reveal delay={120}>
                    <div className="space-y-16">

                        {/* Top Quick Filter Bar & Search */}
                        <div className="glass-card rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-4">
                            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto scrollbar-none">
                                <button
                                    onClick={() => setActiveCategoryFilter("all")}
                                    className={`px-4 py-2 rounded-xl text-mono text-xs transition-all whitespace-nowrap ${activeCategoryFilter === "all"
                                            ? "bg-accent text-background font-bold shadow-[0_0_15px_rgba(34,211,238,0.3)]"
                                            : "bg-white/5 text-white/60 hover:text-white border border-white/10"
                                        }`}
                                >
                                    All Categories
                                </button>
                                {RESOURCE_GROUPS.map((group) => (
                                    <button
                                        key={group.id}
                                        onClick={() => setActiveCategoryFilter(group.id)}
                                        className={`px-4 py-2 rounded-xl text-mono text-xs transition-all whitespace-nowrap flex items-center gap-1.5 ${activeCategoryFilter === group.id
                                                ? "bg-accent text-background font-bold shadow-[0_0_15px_rgba(34,211,238,0.3)]"
                                                : "bg-white/5 text-white/60 hover:text-white border border-white/10"
                                            }`}
                                    >
                                        <span>{group.categoryIcon}</span>
                                        <span>{group.title.split("&")[0]}</span>
                                    </button>
                                ))}
                            </div>

                            <div className="relative w-full md:w-64">
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search resources..."
                                    className="w-full px-4 py-2 rounded-xl bg-black/60 border border-white/10 text-xs text-white placeholder:text-white/30 focus:border-accent focus:outline-none transition-colors font-mono"
                                />
                            </div>
                        </div>

                        {/* RESOURCE SECTIONS (GMX Visual Style) */}
                        {RESOURCE_GROUPS.filter(
                            (group) => activeCategoryFilter === "all" || activeCategoryFilter === group.id
                        ).map((group) => {
                            const matchingItems = group.items.filter(
                                (item) =>
                                    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                    item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                    item.tag.toLowerCase().includes(searchQuery.toLowerCase())
                            );

                            if (matchingItems.length === 0) return null;

                            return (
                                <div key={group.id} className="relative">

                                    {/* Floating Category Icon Badge (GMX Visual Style) */}
                                    <div className="flex flex-col items-center justify-center mb-8">
                                        <div className="w-16 h-16 rounded-2xl bg-black/80 border border-white/15 flex items-center justify-center text-3xl shadow-[0_0_30px_rgba(255,255,255,0.05)] mb-3">
                                            {group.categoryIcon}
                                        </div>
                                        <h3 className="text-display font-bold text-xl md:text-2xl text-white text-center">
                                            {group.title}
                                        </h3>
                                    </div>

                                    {/* Resource Item Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                                        {matchingItems.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="glass-card glass-card-hover rounded-2xl border border-white/10 p-6 bg-white/[0.02] backdrop-blur-xl flex flex-col justify-between group transition-all duration-300 hover:border-accent/40 hover:-translate-y-1 relative overflow-hidden"
                                            >
                                                <div>
                                                    <div className="flex items-center justify-between mb-4">
                                                        <div className="flex items-center gap-3">
                                                            <span className="w-10 h-10 rounded-xl bg-black/60 border border-white/10 flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                                                                {item.icon}
                                                            </span>
                                                            <div>
                                                                <h4 className="text-display font-bold text-base text-white group-hover:text-accent transition-colors">
                                                                    {item.name}
                                                                </h4>
                                                                <span className="text-mono text-[10px] text-accent/80">
                                                                    {item.tag}
                                                                </span>
                                                            </div>
                                                        </div>

                                                        <span className="text-mono text-xs text-white/30 group-hover:text-accent transition-colors">
                                                            ↗
                                                        </span>
                                                    </div>

                                                    <p className="text-xs text-white/60 leading-relaxed mb-6">
                                                        {item.description}
                                                    </p>
                                                </div>

                                                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-mono text-[10px]">
                                                    <span className="text-white/40">Official Website</span>
                                                    {item.isOfficialDownload ? (
                                                        <span className="text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                                                            ✓ Direct App / Download
                                                        </span>
                                                    ) : (
                                                        <span className="text-accent underline">Visit Site</span>
                                                    )}
                                                </div>
                                            </a>
                                        ))}
                                    </div>

                                </div>
                            );
                        })}

                    </div>
                </Reveal>

            </div>
        </section>
    );
}