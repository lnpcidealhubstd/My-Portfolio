import React, { useState } from "react";
import { DESIGN_TOKENS, PLAYGROUND_METRICS } from "@/lib/site-data";
import { Reveal } from "@/components/site/Reveal";

export function DesignPlayground() {
    const [activeToken, setActiveToken] = useState(DESIGN_TOKENS[1].name);
    const [copied, setCopied] = useState(false);
    const [buttonState, setButtonState] = useState<"default" | "loading" | "success">("default");

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
                <Reveal>
                    <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <p className="text-mono text-xs uppercase tracking-[0.25em] text-accent mb-3 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent pulse-dot" />
                                / 03 — DESIGN SYSTEMS & ARTIFACTS
                            </p>
                            <h2 className="text-display text-3xl md:text-5xl font-bold text-white tracking-tight">
                                Scalable systems built for <span className="text-accent neon-text">precision.</span>
                            </h2>
                        </div>
                        <p className="text-white/60 text-sm max-w-md leading-relaxed">
                            Interactive components, spatial tokens, and reusable UI architectures engineered for seamless hand-off.
                        </p>
                    </div>
                </Reveal>

                <Reveal delay={100}>
                    <div className="glass-card glass-card-hover rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:p-10 backdrop-blur-xl relative group">

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
                                        Click any token below to preview and test system color variables.
                                    </p>

                                    <div className="space-y-3 mb-8">
                                        {DESIGN_TOKENS.map((token) => (
                                            <button
                                                key={token.name}
                                                onClick={() => handleCopy(token.name)}
                                                className={`w-full flex items-center justify-between p-3.5 rounded-xl border transition-all duration-300 text-left ${activeToken === token.name
                                                    ? "bg-white/10 border-accent text-white shadow-[0_0_20px_rgba(34,211,238,0.15)] translate-x-1"
                                                    : "bg-white/[0.02] border-white/5 text-white/60 hover:border-white/20 hover:text-white"
                                                    }`}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <span
                                                        className="w-5 h-5 rounded-full border border-white/20 shadow-inner"
                                                        style={{ backgroundColor: token.value.includes("rgba") ? "#ffffff10" : token.value }}
                                                    />
                                                    <span className="text-mono text-xs font-semibold">{token.name}</span>
                                                </div>
                                                <span className="text-mono text-[10px] text-accent/80 font-medium">{token.label}</span>
                                            </button>
                                        ))}
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

                            {/* Right Column: Live Interactive Component Playground */}
                            <div className="bg-black/50 rounded-xl p-6 border border-white/10 relative flex flex-col justify-between overflow-hidden shadow-2xl">

                                {/* Motion Figma Constraint Grid Overlay */}
                                <div
                                    aria-hidden
                                    className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"
                                />

                                <div className="relative z-10 flex items-center justify-between mb-8">
                                    <span className="text-mono text-[10px] uppercase tracking-widest text-white/40">
                                        Interactive State Tester
                                    </span>
                                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent/10 border border-accent/20">
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent pulse-dot" />
                                        <span className="text-mono text-[10px] text-accent uppercase font-bold tracking-wider">
                                            Auto-Layout 5.0
                                        </span>
                                    </div>
                                </div>

                                {/* Interactive State Demo */}
                                <div className="relative z-10 my-auto py-8">
                                    <span className="text-mono text-[10px] text-white/50 block mb-4">
                                        Click button to trigger component interaction state:
                                    </span>

                                    <div className="flex flex-wrap items-center gap-4">
                                        <button
                                            onClick={handleButtonClick}
                                            className={`px-6 py-3 rounded-lg text-xs font-bold transition-all duration-300 flex items-center gap-2 ${buttonState === "loading"
                                                ? "bg-accent/20 text-accent border border-accent/40"
                                                : buttonState === "success"
                                                    ? "bg-green-500 text-black shadow-[0_0_20px_rgba(34,197,94,0.4)]"
                                                    : "bg-accent text-background hover:brightness-110 shadow-[0_0_25px_rgba(34,211,238,0.3)] hover:scale-[1.02]"
                                                }`}
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

                                        <button className="px-5 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium text-xs hover:bg-white/10 transition-all hover:border-white/20">
                                            Ghost Secondary
                                        </button>
                                    </div>
                                </div>

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
            </div>
        </section>
    );
}