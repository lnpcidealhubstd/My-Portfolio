import { WORK_PROCESS } from "@/lib/site-data";
import { Reveal } from "@/components/site/Reveal";

export function Process() {
  return (
    <section className="relative py-24 bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal>
          <div className="mb-12">
            <p className="text-mono text-xs uppercase tracking-[0.25em] text-accent mb-3">
              / 02 — WORK PROCESS
            </p>
            <h2 className="text-display text-3xl md:text-5xl font-bold text-white tracking-tight mb-3">
              How the work <span className="text-accent neon-text">gets done.</span>
            </h2>
            <p className="text-white/60 text-sm max-w-xl">
              A repeatable four-step system — from first brief to final deployment.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="glass-card rounded-2xl border border-white/5 bg-white/[0.02] p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 divide-y lg:divide-y-0 lg:divide-x divide-white/5">
              {WORK_PROCESS.map((item, idx) => (
                <div
                  key={item.step}
                  className={`flex flex-col justify-between ${
                    idx !== 0 ? "pt-8 lg:pt-0 lg:pl-8" : ""
                  }`}
                >
                  <div>
                    <span className="text-mono text-xs font-bold text-accent tracking-widest block mb-6">
                      {item.step}
                    </span>
                    <h3 className="text-display text-lg font-bold text-white mb-3 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-white/50 text-xs leading-relaxed mb-8">
                      {item.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-mono text-[10px] px-2.5 py-1 rounded-md bg-white/[0.03] text-white/70 border border-white/10 tracking-wider"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="w-8 h-[2px] bg-accent/60" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
