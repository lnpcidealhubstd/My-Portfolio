import { useEffect, useRef } from "react";
import "@/hero-portrait.css";

export function HeroPortrait({ src }: { src: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const fine = matchMedia("(hover: hover) and (pointer: fine)");
    const reset = () => {
      node.style.setProperty("--portrait-x", "0px");
      node.style.setProperty("--portrait-y", "0px");
    };
    const move = (event: PointerEvent) => {
      if (reduced.matches || !fine.matches || event.pointerType !== "mouse") return;
      const bounds = node.getBoundingClientRect();
      if (!bounds.width || !bounds.height) return;
      const x = Math.max(-1, Math.min(1, ((event.clientX - bounds.left) / bounds.width) * 2 - 1));
      const y = Math.max(-1, Math.min(1, ((event.clientY - bounds.top) / bounds.height) * 2 - 1));
      node.style.setProperty("--portrait-x", `${x * 5}px`);
      node.style.setProperty("--portrait-y", `${y * 4}px`);
    };
    node.addEventListener("pointermove", move);
    node.addEventListener("pointerleave", reset);
    node.addEventListener("pointercancel", reset);
    window.addEventListener("blur", reset);
    reduced.addEventListener("change", reset);
    fine.addEventListener("change", reset);
    return () => {
      node.removeEventListener("pointermove", move);
      node.removeEventListener("pointerleave", reset);
      node.removeEventListener("pointercancel", reset);
      window.removeEventListener("blur", reset);
      reduced.removeEventListener("change", reset);
      fine.removeEventListener("change", reset);
      reset();
    };
  }, []);
  return (
    <div ref={ref} className="nico-portrait-scene">
      <div aria-hidden="true" className="nico-portrait-aura" />
      <div className="nico-portrait-depth">
        <div className="nico-portrait-float">
          <img
            src={src}
            alt=""
            aria-hidden="true"
            className="nico-portrait-ghost nico-portrait-ghost-cyan"
          />

          <img
            src={src}
            alt=""
            aria-hidden="true"
            className="nico-portrait-ghost nico-portrait-ghost-purple"
          />

          <img
            src={src}
            alt="Portrait of Nico Centeno"
            fetchPriority="high"
            className="nico-portrait-image"
          />
        </div>
      </div>
    </div>
  );
}
