"use client";

import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import nicoLogo from "@/assets/nico-logo.png";
import "@/portfolio-theme.css";

type Theme = "light" | "dark";
const THEME_KEY = "nico-portfolio-theme";
const links = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
] as const;
const focusClass = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background";

function getSavedTheme(): Theme | null {
  try {
    const value = localStorage.getItem(THEME_KEY);
    return value === "light" || value === "dark" ? value : null;
  } catch { return null; }
}
function preferredTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  return getSavedTheme() ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
}
function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.dataset.theme = theme;
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
}

export function Nav() {
  const [theme, setTheme] = useState<Theme>(preferredTheme);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const { pathname, hash } = useLocation();

  useEffect(() => { applyTheme(theme); }, [theme]);
  useEffect(() => {
    const query = window.matchMedia("(prefers-color-scheme: dark)");
    const onSystemChange = () => { if (!getSavedTheme()) setTheme(query.matches ? "dark" : "light"); };
    const onStorage = (event: StorageEvent) => {
      if (event.key === THEME_KEY || event.key === null) setTheme(preferredTheme());
    };
    query.addEventListener("change", onSystemChange);
    window.addEventListener("storage", onStorage);
    return () => {
      query.removeEventListener("change", onSystemChange);
      window.removeEventListener("storage", onStorage);
    };
  }, []);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => { setMenuOpen(false); }, [pathname, hash]);
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setMenuOpen(false); toggleRef.current?.focus(); }
    };
    const query = window.matchMedia("(min-width: 768px)");
    const onBreakpointChange = () => { if (query.matches) setMenuOpen(false); };
    document.addEventListener("keydown", onKeyDown);
    query.addEventListener("change", onBreakpointChange);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      query.removeEventListener("change", onBreakpointChange);
    };
  }, [menuOpen]);

  const switchTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    applyTheme(next);
    setTheme(next);
    try { localStorage.setItem(THEME_KEY, next); } catch { /* Theme still works without storage. */ }
  };

  return (
    <header className={`portfolio-nav sticky top-0 z-50 border-b backdrop-blur-xl transition-colors duration-300 motion-reduce:transition-none ${scrolled || menuOpen ? "border-border bg-background/95" : "border-transparent bg-background/80"}`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-2 px-5 sm:px-6">
        <Link to="/" aria-label="Nico Centeno — Home" onClick={() => setMenuOpen(false)} className={`inline-flex size-16 shrink-0 items-center justify-center rounded-lg ${focusClass}`}>
          <img src={nicoLogo} alt="" width={64} height={64} className="portfolio-nav-logo block size-16 object-contain" />
        </Link>
        <div className="flex items-center gap-2">
          <nav aria-label="Main navigation" className="hidden md:block">
            <ul className="flex items-center gap-1">
              {links.map(({ id, label }) => (
                <li key={id}><Link to="/" hash={id} hashScrollIntoView={{ behavior: "instant", block: "start" }} className={`inline-flex min-h-11 items-center rounded-lg px-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-accent ${focusClass}`}>{label}</Link></li>
              ))}
            </ul>
          </nav>
          <button type="button" onClick={switchTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`} title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`} className={`inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-accent hover:text-accent ${focusClass}`}>
            {theme === "dark" ? <Sun aria-hidden="true" className="size-5" /> : <Moon aria-hidden="true" className="size-5" />}
          </button>
          <button ref={toggleRef} type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen((open) => !open)} className={`inline-flex size-11 items-center justify-center rounded-lg border border-border text-foreground hover:bg-secondary md:hidden ${focusClass}`}>
            {menuOpen ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
          </button>
          <span role="status" className="sr-only">{theme === "dark" ? "Dark" : "Light"} mode</span>
        </div>
      </div>
      <nav id="mobile-navigation" aria-label="Mobile navigation" hidden={!menuOpen} className="border-t border-border bg-background px-5 py-3 md:hidden">
        <ul className="mx-auto max-w-7xl space-y-1">
          {links.map(({ id, label }) => <li key={id}><Link to="/" hash={id} hashScrollIntoView={{ behavior: "instant", block: "start" }} onClick={() => setMenuOpen(false)} className={`flex min-h-12 items-center rounded-lg px-4 text-base text-muted-foreground transition-colors hover:bg-secondary hover:text-accent ${focusClass}`}>{label}</Link></li>)}
        </ul>
      </nav>
    </header>
  );
}
