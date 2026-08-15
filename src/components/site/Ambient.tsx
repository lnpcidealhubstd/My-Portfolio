export function Ambient() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Grid */}
      <div className="absolute inset-0 ambient-grid opacity-30" />

      {/* Deep background orb — blue-violet */}
      <div
        className="ambient-orb"
        style={{
          width: 700,
          height: 700,
          top: -200,
          left: -200,
          background: "oklch(0.45 0.16 260 / 20%)",
          animationDuration: "22s",
        }}
      />

      {/* Primary accent orb — cyan */}
      <div
        className="ambient-orb"
        style={{
          width: 500,
          height: 500,
          top: -80,
          right: -100,
          background: "oklch(0.82 0.18 195 / 18%)",
          animationDuration: "16s",
          animationDelay: "3s",
        }}
      />

      {/* Mid orb — teal */}
      <div
        className="ambient-orb"
        style={{
          width: 360,
          height: 360,
          top: "40%",
          left: "30%",
          background: "oklch(0.65 0.20 185 / 10%)",
          animationDuration: "20s",
          animationDelay: "7s",
          animationName: "drift-slow",
        }}
      />

      {/* Bottom right orb — indigo */}
      <div
        className="ambient-orb"
        style={{
          width: 420,
          height: 420,
          bottom: -100,
          right: "10%",
          background: "oklch(0.55 0.18 240 / 14%)",
          animationDuration: "25s",
          animationDelay: "11s",
        }}
      />

      {/* Scan line */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent 0%, oklch(0.82 0.18 195 / 30%) 30%, oklch(0.82 0.18 195 / 60%) 50%, oklch(0.82 0.18 195 / 30%) 70%, transparent 100%)",
          animation: "scan-line 12s linear infinite",
          animationDelay: "2s",
        }}
      />

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-b from-transparent to-background" />

      {/* Top vignette */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background/60 to-transparent" />
    </div>
  );
}
