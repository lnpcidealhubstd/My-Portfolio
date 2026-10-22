"use client";

import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import nicoLogo from "@/assets/nico-logo.png";

const links = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
] as const;

const focusClass =
  "focus-visible:outline-none focus-visible:ring-2 " +
  "focus-visible:ring-accent focus-visible:ring-offset-4 " +
  "focus-visible:ring-offset-background";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname, hash]);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };

    const desktopQuery = window.matchMedia("(min-width: 768px)");

    const onBreakpointChange = () => {
      if (desktopQuery.matches) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    desktopQuery.addEventListener("change", onBreakpointChange);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      desktopQuery.removeEventListener("change", onBreakpointChange);
    };
  }, [menuOpen]);

  return (
    <header
      className={[
        "sticky top-0 z-50 border-b backdrop-blur-xl",
        "transition-colors duration-300 motion-reduce:transition-none",
        scrolled || menuOpen
          ? "border-white/10 bg-background/95"
          : "border-transparent bg-background/80",
      ].join(" ")}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6">
        {/* Portfolio logo */}
        <Link
          to="/"
          aria-label="Nico Centeno — Home"
          onClick={() => setMenuOpen(false)}
          className={`inline-flex size-16 shrink-0 items-center justify-center rounded-lg ${focusClass}`}
        >
          <img
            src={nicoLogo}
            alt=""
            width={64}
            height={64}
            className="block size-16 object-contain"
          />
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {links.map(({ id, label }) => (
              <li key={id}>
                <Link
                  to="/"
                  hash={id}
                  hashScrollIntoView={{
                    behavior: "instant",
                    block: "start",
                  }}
                  className={`inline-flex min-h-11 items-center rounded-lg px-4 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-accent ${focusClass}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile menu toggle */}
        <button
          ref={toggleRef}
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className={`inline-flex size-11 items-center justify-center rounded-lg border border-white/10 text-foreground hover:bg-white/5 md:hidden ${focusClass}`}
        >
          {menuOpen ? (
            <X aria-hidden="true" className="size-5" />
          ) : (
            <Menu aria-hidden="true" className="size-5" />
          )}
        </button>
      </div>

      {/* Mobile navigation */}
      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        hidden={!menuOpen}
        className="border-t border-white/10 bg-background px-5 py-3 md:hidden"
      >
        <ul className="mx-auto max-w-7xl space-y-1">
          {links.map(({ id, label }) => (
            <li key={id}>
              <Link
                to="/"
                hash={id}
                hashScrollIntoView={{
                  behavior: "instant",
                  block: "start",
                }}
                onClick={() => setMenuOpen(false)}
                className={`flex min-h-12 items-center rounded-lg px-4 text-base text-muted-foreground transition-colors hover:bg-white/5 hover:text-accent ${focusClass}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
