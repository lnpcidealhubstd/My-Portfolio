export function Footer() {
  return (
    <footer className="relative mt-8 border-t border-white/10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
      />

      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 sm:px-6 sm:py-10 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()}{" "}
          <span className="font-medium text-foreground">Nico Centeno</span>
        </p>

        <p className="text-sm leading-6 text-muted-foreground">
          UI/UX Designer
          <span aria-hidden="true" className="mx-2 text-accent">
            ·
          </span>
          Project Manager
        </p>
      </div>
    </footer>
  );
}