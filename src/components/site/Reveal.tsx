import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
  hero = false,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: ElementType;
  hero?: boolean;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -20px 0px" },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  const Component = Tag;
  const duration = hero ? 900 : 600;
  const easing = hero
    ? "cubic-bezier(0.16, 1, 0.3, 1)"
    : "cubic-bezier(0.22, 1, 0.36, 1)";
  const translateY = hero ? "36px" : "22px";
  const scale = hero ? (visible ? "scale(1)" : "scale(0.97)") : "";

  return (
    <Component
      ref={ref as any}
      style={{
        transition: `opacity ${duration}ms ${easing}, transform ${duration}ms ${easing}`,
        transitionDelay: `${delay}ms`,
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateY(0) scale(1)"
          : `translateY(${translateY}) ${scale}`,
        willChange: "opacity, transform",
      }}
      className={className}
    >
      {children}
    </Component>
  );
}
