import { Link } from "@tanstack/react-router";

export function BackButton({ to = "/", label = "Back to Home" }: { to?: string; label?: string }) {
  return (
    <div className="sticky top-16 z-30 border-b hairline bg-background/70 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-3">
        <Link
          to={to}
          className="text-mono group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
        >
          <span className="transition-transform group-hover:-translate-x-0.5">←</span>
          {label}
        </Link>
      </div>
    </div>
  );
}
