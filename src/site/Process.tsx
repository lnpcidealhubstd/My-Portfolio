import React, { useState } from "react";
import { WORK_PROCESS } from "@/lib/site-data";
import { Reveal } from "@/components/site/Reveal";

// Direct asset imports following project conventions
import sitemapImg from "@/assets/Sitemap.png";
import figmaWorkspaceImg from "@/assets/phase02.png";
import aiImg from "@/assets/ai-workflows.png";
import gitImg from "@/assets/phase04.png";

const PROCESS_ARTIFACTS = [sitemapImg, figmaWorkspaceImg, aiImg, gitImg];

export function Process() {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <section className="relative py-24 bg-background border-t border-white/5 overflow-hidden">
            {/* Background Glow */}
            <div
                aria-hidden
                className="pointer-events-none absolute -left-32 top-1/2 -translate-y-1/2 size-96 rounded-full bg-accent/5 blur-[120px]"
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <Reveal>
                    <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <p className="text-mono text-xs uppercase tracking-[0.25em] text-accent mb-3 flex items-center gap-2">
                                <span className="pulse-dot size-1.5 rounded-full bg-accent" />
                                / 02 — WORK PROCESS
                            </p>
                            <h2 className="text-display text-3xl md:text-5xl font-medium text-foreground tracking-tight">
                                How the work <span className="neon-text text-accent">gets done.</span>
                            </h2>
                        </div>
                        <p className="text-muted-foreground text-sm max-w-md leading-relaxed">
                            A repeatable four-step system bridging strategic UX discovery, spatial component systems, AI workflows, and edge delivery.
                        </p>
                    </div>
                </Reveal>

                {/* Dynamic Pipeline Selector Bar */}
                <Reveal delay={80}>
                    <div className="relative mb-8">
                        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-white/10 -translate-y-1/2 z-0" />
                        <div
                            className="hidden md:block absolute top-1/2 left-0 h-px bg-accent transition-all duration-500 -translate-y-1/2 z-0 shadow-[0_0_12px_oklch(0.82_0.18_195)]"
                            style={{ width: `${(activeStep / (WORK_PROCESS.length - 1)) * 100}%` }}
                        />

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
                            {WORK_PROCESS.map((item, idx) => {
                                const isActive = activeStep === idx;
                                return (
                                    <button
                                        key={item.step}
                                        onClick={() => setActiveStep(idx)}
                                        className={`group flex items-center gap-3 p-4 rounded-xl border transition-all duration-300 text-left ${isActive
                                            ? "bg-surface border-accent text-foreground shadow-[0_0_24px_rgba(0,255,255,0.15)]"
                                            : "bg-surface/30 border-white/5 text-muted-foreground hover:border-white/20 hover:text-foreground"
                                            }`}
                                    >
                                        <span
                                            className={`text-mono text-xs font-bold px-2.5 py-1 rounded transition-colors ${isActive
                                                ? "bg-accent text-background"
                                                : "bg-white/5 text-accent/80 group-hover:bg-white/10"
                                                }`}
                                        >
                                            {item.step}
                                        </span>
                                        <span className="text-display text-xs font-medium truncate">
                                            {item.title}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </Reveal>

                {/* Active Phase Showcase Container */}
                <Reveal delay={140}>
                    <div className="glass-card rounded-2xl border hairline p-6 md:p-10 relative overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                            {/* Left Column — Execution Details */}
                            <div className="lg:col-span-6 flex flex-col justify-between h-full">
                                <div>
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="text-mono text-xs text-accent font-semibold tracking-wider">
                                            PHASE {WORK_PROCESS[activeStep].step}
                                        </span>
                                        <span className="text-white/20">•</span>
                                        <span className="text-mono text-xs text-muted-foreground uppercase tracking-widest">
                                            Execution Architecture
                                        </span>
                                    </div>

                                    <h3 className="text-display text-2xl md:text-3xl font-medium text-foreground mb-4">
                                        {WORK_PROCESS[activeStep].title}
                                    </h3>

                                    <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                                        {WORK_PROCESS[activeStep].description}
                                    </p>
                                </div>

                                <div>
                                    <span className="text-mono text-[10px] uppercase text-muted-foreground/70 block mb-3 tracking-[0.2em]">
                                        Deliverables &amp; Tooling Stack
                                    </span>
                                    <div className="flex flex-wrap gap-2">
                                        {WORK_PROCESS[activeStep].tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-mono text-[10px] px-3 py-1 rounded-md bg-surface/60 text-accent border hairline tracking-wider uppercase transition-colors hover:border-accent/40"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right Column — Full-Bleed Uniform Viewport */}
                            <div className="group lg:col-span-6 bg-surface-elevated/80 rounded-xl border hairline relative h-[280px] md:h-[340px] flex items-center justify-center overflow-hidden cursor-pointer">
                                <div
                                    aria-hidden
                                    className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none z-10"
                                />

                                <div className="absolute top-3 left-3 z-20 flex items-center gap-2 rounded-md border hairline bg-background/80 px-2.5 py-1 text-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground backdrop-blur">
                                    <span className="size-1.5 rounded-full bg-accent animate-pulse" />
                                    SPEC_NODE_0{activeStep + 1}
                                </div>

                                <img
                                    key={activeStep}
                                    src={PROCESS_ARTIFACTS[activeStep]}
                                    alt={WORK_PROCESS[activeStep].title}
                                    className="h-full w-full object-cover object-center relative z-0 transition-transform duration-500 ease-out group-hover:scale-105"
                                />

                                <div className="absolute bottom-3 right-3 z-20 text-mono text-[9px] uppercase tracking-[0.2em] text-accent bg-background/90 px-3 py-1 rounded border hairline backdrop-blur transition-colors group-hover:border-accent/40">
                                    Phase {WORK_PROCESS[activeStep].step} Spec Sheet
                                </div>
                            </div>

                        </div>
                    </div>
                </Reveal>

            </div>
        </section>
    );
}