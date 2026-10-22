import { useEffect, useRef, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: ElementType;
  hero?: boolean;
};

export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Component = "div",
  hero = false,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;

    if (!node) return;

    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (
      motionPreference.matches ||
      !("IntersectionObserver" in window) ||
      typeof node.animate !== "function"
    ) {
      return;
    }

    let animation: Animation | undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;

        observer.disconnect();

        // Keep focused links and controls visible immediately.
        if (motionPreference.matches || node.contains(document.activeElement)) {
          return;
        }

        animation = node.animate(
          [
            {
              opacity: 0,
              transform: hero ? "translateY(24px) scale(0.99)" : "translateY(16px)",
            },
            {
              opacity: 1,
              transform: "translateY(0) scale(1)",
            },
          ],
          {
            duration: hero ? 700 : 450,
            delay: Math.max(0, delay),
            easing: "cubic-bezier(0.22, 1, 0.36, 1)",
            fill: "backwards",
          },
        );
      },
      { threshold: 0 },
    );

    const showImmediately = () => {
      animation?.cancel();
    };

    const onMotionChange = () => {
      if (motionPreference.matches) {
        observer.disconnect();
        showImmediately();
      }
    };

    observer.observe(node);
    node.addEventListener("focusin", showImmediately);
    motionPreference.addEventListener("change", onMotionChange);

    return () => {
      observer.disconnect();
      animation?.cancel();
      node.removeEventListener("focusin", showImmediately);
      motionPreference.removeEventListener("change", onMotionChange);
    };
  }, [delay, hero, Component]);

  return (
    <Component ref={ref} className={className}>
      {children}
    </Component>
  );
}
