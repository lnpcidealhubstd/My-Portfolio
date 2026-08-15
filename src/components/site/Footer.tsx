export function Footer() {
  return (
    <footer className="relative mt-32 overflow-hidden">
      {/* Gradient separator */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, oklch(1 0 0 / 6%) 20%, oklch(0.82 0.18 195 / 40%) 50%, oklch(1 0 0 / 6%) 80%, transparent 100%)",
        }}
      />

      {/* Subtle glow above footer */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-32 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 100% at 50% 0%, oklch(0.82 0.18 195 / 5%), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          {/* Left */}
          <div className="flex items-center gap-4">
            <span
              className="pulse-dot inline-block size-1.5 rounded-full bg-accent"
              aria-hidden
            />
            <span className="text-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Nico Centeno — © {new Date().getFullYear()}
            </span>
          </div>

          {/* Right */}
          <div className="flex items-center gap-6">
            <span className="text-mono text-xs uppercase tracking-[0.2em] text-muted-foreground/60">
              UI UX Designer
            </span>
            <span
              aria-hidden
              className="hidden h-3 w-px bg-hairline sm:block"
            />
            <span
              className="text-mono text-[10px] uppercase tracking-[0.2em]"
              style={{ color: "oklch(0.82 0.18 195 / 70%)" }}
            >
              Available · 2026
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
