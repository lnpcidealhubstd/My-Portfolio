import React, { useState } from "react";
import { DESIGN_TOKENS, PLAYGROUND_METRICS } from "@/lib/site-data";
import { Reveal } from "@/components/site/Reveal";

// AI Engineering & Handoff Pipeline Step Data
const WORKFLOW_STEPS = [
    {
        step: "01",
        title: "Figma AI & Token Setup",
        tool: "Figma / FigJam",
        desc: "Structuring auto-layout 5.0 components, spatial variables, and interactive design tokens.",
    },
    {
        step: "02",
        title: "AI Code Scaffolding",
        tool: "Lovable / Claude",
        desc: "Generating functional React component prototypes and Tailwind structural logic rapidly.",
    },
    {
        step: "03",
        title: "VS Code & Git Refinement",
        tool: "VS Code + AI / GitHub",
        desc: "Cloning repo locally, prompt-tuning production code, and managing feature branches.",
    },
    {
        step: "04",
        title: "Edge Deployment",
        tool: "Vercel",
        desc: "Automated CI/CD pipeline shipping production-ready interfaces directly to live edge servers.",
    },
];

export function DesignPlayground() {
    const [activeToken, setActiveToken] = useState(DESIGN_TOKENS[1]?.name || "--accent-cyan");
    const [copied, setCopied] = useState(false);
    const [buttonState, setButtonState] = useState<"default" | "loading" | "success">("default");
    const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");

    // Find selected token or fallback to the second token in system registry
    const selectedTokenObj = DESIGN_TOKENS.find((t) => t.name === activeToken) || DESIGN_TOKENS[1];

    const handleCopy = (tokenName: string) => {
        setActiveToken(tokenName);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleButtonClick = () => {
        setButtonState("loading");
        setTimeout(() => {
            setButtonState("success");
            setTimeout(() => setButtonState("default"), 2000);
        }, 1200);
    };

    return (
        <section className="relative py-24 bg-background border-t border-white/5 overflow-hidden">
            {/* Motion Ambient Glows */}
            <div
                aria-hidden
                className="pointer-events-none absolute -left-20 top-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-accent/10 blur-[120px] transition-all duration-700"
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
                                / 03 — DESIGN SYSTEMS & AI WORKFLOW
                            </p>
                            <h2 className="text-display text-3xl md:text-5xl font-bold text-white tracking-tight">
                                Scalable systems built for <span className="text-accent neon-text">precision.</span>
                            </h2>
                        </div>
                        <p className="text-white/60 text-sm max-w-md leading-relaxed">
                            Interactive components, spatial tokens, and reusable UI architectures engineered for high-velocity AI workflows and seamless developer hand-off.
                        </p>
                    </div>
                </Reveal>

                {/* Main Interactive Token Registry & Live State Tester */}
                <Reveal delay={100}>
                    <div className="glass-card glass-card-hover rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:p-10 backdrop-blur-xl relative group mb-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                            {/* Left Column: Interactive Design Tokens */}
                            <div className="flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-display text-lg font-bold text-white">
                                            Design Tokens & Variable Registry
                                        </h3>
                                        {copied && (
                                            <span className="text-mono text-[10px] text-accent bg-accent/10 px-2 py-0.5 rounded border border-accent/30 animate-fade-in">
                                                Copied Variable!
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-white/50 text-xs mb-6">
                                        Click any token below to preview and test live system color variables.
                                    </p>

                                    <div className="space-y-3 mb-8">
                                        {DESIGN_TOKENS.map((token) => {
                                            const isActive = activeToken === token.name;
                                            return (
                                                <button
                                                    key={token.name}
                                                    onClick={() => handleCopy(token.name)}
                                                    className={`w-full flex items-center justify-between p-3.5 rounded-xl border transition-all duration-300 text-left ${isActive
                                                            ? "bg-white/10 border-accent text-white shadow-[0_0_20px_rgba(34,211,238,0.15)] translate-x-1"
                                                            : "bg-white/[0.02] border-white/5 text-white/60 hover:border-white/20 hover:text-white"
                                                        }`}
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <span
                                                            className="w-5 h-5 rounded-full border border-white/20 shadow-inner transition-transform duration-300"
                                                            style={{
                                                                backgroundColor: token.value.includes("rgba") ? "#ffffff10" : token.value,
                                                                transform: isActive ? "scale(1.15)" : "scale(1)",
                                                            }}
                                                        />
                                                        <span className="text-mono text-xs font-semibold">{token.name}</span>
                                                    </div>
                                                    <span className="text-mono text-[10px] text-accent/80 font-medium">{token.label}</span>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/5">
                                    {PLAYGROUND_METRICS.slice(0, 2).map((m) => (
                                        <div key={m.label}>
                                            <span className="text-mono text-[10px] uppercase text-white/40 block mb-1">{m.label}</span>
                                            <span className="text-display text-xs font-bold text-accent">{m.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right Column: Live Interactive Component & Handoff Code Preview */}
                            <div className="bg-black/50 rounded-xl p-6 border border-white/10 relative flex flex-col justify-between overflow-hidden shadow-2xl min-h-[360px]">

                                {/* Figma Constraint Grid Overlay */}
                                <div
                                    aria-hidden
                                    className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"
                                />

                                {/* Card Top Bar & View Mode Toggle */}
                                <div className="relative z-10 flex items-center justify-between mb-6">
                                    <span className="text-mono text-[10px] uppercase tracking-widest text-white/40">
                                        Interactive State Tester
                                    </span>

                                    <div className="flex items-center gap-3">
                                        <div className="flex bg-black/60 p-1 rounded-lg border border-white/10 text-mono text-[10px]">
                                            <button
                                                onClick={() => setActiveTab("preview")}
                                                className={`px-2.5 py-1 rounded transition-colors ${activeTab === "preview" ? "bg-white/15 text-white font-semibold" : "text-white/40 hover:text-white"
                                                    }`}
                                            >
                                                Live Preview
                                            </button>
                                            <button
                                                onClick={() => setActiveTab("code")}
                                                className={`px-2.5 py-1 rounded transition-colors ${activeTab === "code" ? "bg-white/15 text-white font-semibold" : "text-white/40 hover:text-white"
                                                    }`}
                                            >
                                                Tailwind Code
                                            </button>
                                        </div>

                                        <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent/10 border border-accent/20">
                                            <span className="w-1.5 h-1.5 rounded-full bg-accent pulse-dot" />
                                            <span className="text-mono text-[10px] text-accent uppercase font-bold tracking-wider">
                                                Auto-Layout 5.0
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Tab 1: Live Interactive Components */}
                                {activeTab === "preview" ? (
                                    <div className="relative z-10 my-auto py-6">
                                        <span className="text-mono text-[10px] text-white/50 block mb-4">
                                            Active Token Accent: <strong className="text-accent">{selectedTokenObj.value}</strong>
                                        </span>

                                        <div className="flex flex-wrap items-center gap-4">
                                            {/* Primary Dynamic CTA Button */}
                                            <button
                                                onClick={handleButtonClick}
                                                className={`px-6 py-3 rounded-lg text-xs font-bold transition-all duration-300 flex items-center gap-2 ${buttonState === "loading"
                                                        ? "bg-accent/20 text-accent border border-accent/40"
                                                        : buttonState === "success"
                                                            ? "bg-emerald-500 text-black shadow-[0_0_20px_rgba(16,185,129,0.4)]"
                                                            : "bg-accent text-background hover:brightness-110 shadow-[0_0_25px_rgba(34,211,238,0.3)] hover:scale-[1.02]"
                                                    }`}
                                                style={{
                                                    backgroundColor:
                                                        buttonState === "default" && !selectedTokenObj.value.includes("rgba")
                                                            ? selectedTokenObj.value
                                                            : undefined,
                                                }}
                                            >
                                                {buttonState === "loading" && (
                                                    <span className="w-3 h-3 rounded-full border-2 border-accent border-t-transparent animate-spin" />
                                                )}
                                                {buttonState === "loading"
                                                    ? "Processing..."
                                                    : buttonState === "success"
                                                        ? "✓ Action Complete"
                                                        : "Test Interactive CTA"}
                                            </button>

                                            {/* Secondary Ghost Button */}
                                            <button className="px-5 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium text-xs hover:bg-white/10 transition-all hover:border-white/20">
                                                Ghost Secondary
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    /* Tab 2: Code Handoff Snippet */
                                    <div className="relative z-10 my-auto py-2">
                                        <p className="text-mono text-[10px] text-white/40 mb-2">// Frontend Handoff — React + Tailwind CSS Token Mapping</p>
                                        <pre className="bg-black/80 border border-white/10 rounded-lg p-4 font-mono text-[11px] text-accent/90 overflow-x-auto">
                                            {`const PrimaryCTA = ({ label, onClick }) => (
  <button 
    onClick={onClick}
    className="px-6 py-3 rounded-lg text-xs font-bold text-background 
               bg-[var(${selectedTokenObj.name})] 
               shadow-[0_0_25px_rgba(34,211,238,0.3)]
               hover:brightness-110 transition-all">
    {label}
  </button>
);`}
                                        </pre>
                                    </div>
                                )}

                                <div className="relative z-10 pt-6 border-t border-white/5 grid grid-cols-2 gap-4">
                                    {PLAYGROUND_METRICS.slice(2, 4).map((m) => (
                                        <div key={m.label}>
                                            <span className="text-mono text-[10px] uppercase text-white/40 block mb-1">{m.label}</span>
                                            <span className="text-display text-xs font-bold text-white">{m.value}</span>
                                        </div>
                                    ))}
                                </div>

                            </div>

                        </div>
                    </div>
                </Reveal>

                {/* AI-Driven Engineering & Handoff Pipeline Card Grid */}
                <Reveal delay={200}>
                    <div className="glass-card rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:p-10 backdrop-blur-xl">
                        <h3 className="text-display font-bold text-xl text-white mb-2">
                            End-to-End AI Engineering & Handoff Pipeline
                        </h3>
                        <p className="text-xs text-white/50 mb-8 max-w-2xl leading-relaxed">
                            From initial wireframes to live Vercel deployment: rapid prototyping with Figma AI, automated code generation via Lovable & Claude, local prompt engineering in VS Code, and version control on GitHub.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {WORKFLOW_STEPS.map((item) => (
                                <div
                                    key={item.step}
                                    className="p-5 rounded-xl bg-black/40 border border-white/5 relative group hover:border-accent/40 transition-colors duration-300"
                                >
                                    <span className="text-mono text-2xl font-bold text-accent/30 group-hover:text-accent transition-colors block mb-2">
                                        {item.step}
                                    </span>
                                    <h4 className="text-display font-semibold text-sm text-white mb-1">{item.title}</h4>
                                    <p className="text-mono text-[10px] text-accent mb-3">{item.tool}</p>
                                    <p className="text-xs text-white/60 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Reveal>

            </div>
        </section>
    );
}