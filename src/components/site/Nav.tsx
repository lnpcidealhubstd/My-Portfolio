"use client";
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "oklch(0.10 0.008 240 / 85%)"
          : "oklch(0.10 0.008 240 / 40%)",
        backdropFilter: "blur(24px) saturate(180%)",
        borderBottom: scrolled
          ? "1px solid oklch(1 0 0 / 8%)"
          : "1px solid transparent",
        boxShadow: scrolled
          ? "0 1px 0 oklch(0.82 0.18 195 / 5%), 0 8px 32px -8px oklch(0 0 0 / 40%)"
          : "none",
      }}
    >
      {/* Top accent line */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, oklch(0.82 0.18 195 / 60%) 30%, oklch(0.82 0.18 195 / 80%) 50%, oklch(0.82 0.18 195 / 60%) 70%, transparent 100%)",
          opacity: scrolled ? 1 : 0,
          transition: "opacity 500ms ease",
        }}
      />

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          to="/"
          className="group relative text-mono text-sm uppercase tracking-[0.25em] text-foreground transition-all duration-300"
        >
          <span className="relative z-10">
            LNC
            <span
              className="text-accent transition-all duration-300 group-hover:text-shadow-[0_0_20px_oklch(0.82_0.18_195)]"
              style={{ textShadow: "0 0 12px oklch(0.82 0.18 195 / 60%)" }}
            >
              .
            </span>
          </span>
          {/* Hover glow */}
          <span
            aria-hidden
            className="absolute -inset-2 rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{ background: "radial-gradient(ellipse at center, oklch(0.82 0.18 195 / 8%), transparent 70%)" }}
          />
        </Link>

        {/* Nav links */}
        <nav className="flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="relative rounded-md px-3 py-1.5 text-sm transition-all duration-300"
              activeProps={{
                className:
                  "relative rounded-md px-3 py-1.5 text-sm text-foreground transition-all duration-300",
                style: { color: "oklch(0.97 0.005 240)" },
              }}
              inactiveProps={{
                className:
                  "relative rounded-md px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-all duration-300",
              }}
            >
              {({ isActive }: { isActive: boolean }) => (
                <>
                  {l.label}
                  {/* Active underline */}
                  <span
                    aria-hidden
                    className="absolute inset-x-3 -bottom-px h-px transition-all duration-500"
                    style={{
                      background: isActive
                        ? "linear-gradient(90deg, transparent, oklch(0.82 0.18 195), transparent)"
                        : "transparent",
                      boxShadow: isActive ? "0 0 8px oklch(0.82 0.18 195 / 80%)" : "none",
                      opacity: isActive ? 1 : 0,
                    }}
                  />
                  {/* Hover bg */}
                  <span
                    aria-hidden
                    className="absolute inset-0 rounded-md opacity-0 transition-opacity duration-300 hover:opacity-100"
                    style={{ background: "oklch(1 0 0 / 4%)" }}
                  />
                </>
              )}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
