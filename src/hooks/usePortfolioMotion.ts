import { useCallback, useEffect, useState } from "react";

export function usePortfolioMotion() {
    const [root, setRoot] = useState<HTMLElement | null>(null);

    const motionRef = useCallback((node: HTMLElement | null) => {
        setRoot(node);
    }, []);

    useEffect(() => {
        if (!root) return;

        const reducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        );

        let cleanupEffects: (() => void) | undefined;

        function activate() {
            cleanupEffects?.();

            if (!root) return;

            if (reducedMotion.matches) {
                root.setAttribute("data-motion-status", "reduced");
                cleanupEffects = () => {
                    root.removeAttribute("data-motion-status");
                };
                return;
            }

            root.setAttribute("data-portfolio-motion", "true");
            root.setAttribute("data-motion-status", "active");

            const cards = Array.from(
                root.querySelectorAll<HTMLElement>(
                    [
                        ".hero-portrait-frame",
                        ".project-card",
                        "#technologies article",
                        "#affiliations a",
                        "#affiliations article",
                        "#skills article",
                    ].join(", "),
                ),
            );

            const sections = Array.from(
                root.querySelectorAll<HTMLElement>("section"),
            );

            const disposers: Array<() => void> = [];

            let scrollFrame = 0;

            for (const card of cards) {
                card.setAttribute("data-motion-tilt", "true");

                let pointerFrame = 0;
                let pointerX = 0;
                let pointerY = 0;

                function reset() {
                    cancelAnimationFrame(pointerFrame);
                    pointerFrame = 0;

                    card.removeAttribute("data-pointer-active");
                    card.style.removeProperty("--tilt-x");
                    card.style.removeProperty("--tilt-y");
                    card.style.removeProperty("--spot-x");
                    card.style.removeProperty("--spot-y");
                }

                function move(event: PointerEvent) {
                    if (
                        event.pointerType !== "mouse" ||
                        card.contains(document.activeElement)
                    ) {
                        return;
                    }

                    pointerX = event.clientX;
                    pointerY = event.clientY;

                    if (pointerFrame) return;

                    pointerFrame = requestAnimationFrame(() => {
                        pointerFrame = 0;

                        const rect = card.getBoundingClientRect();

                        if (!rect.width || !rect.height) return;

                        const x = Math.max(
                            0,
                            Math.min(1, (pointerX - rect.left) / rect.width),
                        );

                        const y = Math.max(
                            0,
                            Math.min(1, (pointerY - rect.top) / rect.height),
                        );

                        card.style.setProperty(
                            "--tilt-x",
                            `${(0.5 - y) * 10}deg`,
                        );

                        card.style.setProperty(
                            "--tilt-y",
                            `${(x - 0.5) * 10}deg`,
                        );

                        card.style.setProperty("--spot-x", `${x * 100}%`);
                        card.style.setProperty("--spot-y", `${y * 100}%`);
                        card.setAttribute("data-pointer-active", "true");
                    });
                }

                card.addEventListener("pointermove", move);
                card.addEventListener("pointerleave", reset);
                card.addEventListener("pointercancel", reset);
                card.addEventListener("focusin", reset);
                window.addEventListener("blur", reset);

                disposers.push(() => {
                    card.removeEventListener("pointermove", move);
                    card.removeEventListener("pointerleave", reset);
                    card.removeEventListener("pointercancel", reset);
                    card.removeEventListener("focusin", reset);
                    window.removeEventListener("blur", reset);

                    reset();
                    card.removeAttribute("data-motion-tilt");
                });
            }

            function updateScroll() {
                scrollFrame = 0;

                const viewportHeight = window.innerHeight || 1;

                const measurements = sections.map((section) => {
                    const rect = section.getBoundingClientRect();

                    const progress = Math.max(
                        -1,
                        Math.min(
                            1,
                            (rect.top + rect.height / 2 - viewportHeight / 2) /
                            viewportHeight,
                        ),
                    );

                    return { section, progress };
                });

                for (const { section, progress } of measurements) {
                    section.style.setProperty(
                        "--section-parallax",
                        `${-progress * 32}px`,
                    );
                }
            }

            function scheduleScroll() {
                if (!scrollFrame) {
                    scrollFrame = requestAnimationFrame(updateScroll);
                }
            }

            window.addEventListener("scroll", scheduleScroll, {
                passive: true,
            });

            window.addEventListener("resize", scheduleScroll);

            scheduleScroll();

            cleanupEffects = () => {
                cancelAnimationFrame(scrollFrame);

                window.removeEventListener("scroll", scheduleScroll);
                window.removeEventListener("resize", scheduleScroll);

                disposers.forEach((dispose) => dispose());

                sections.forEach((section) => {
                    section.style.removeProperty("--section-parallax");
                });

                root.removeAttribute("data-portfolio-motion");
                root.removeAttribute("data-motion-status");
            };
        }

        activate();

        reducedMotion.addEventListener("change", activate);

        return () => {
            reducedMotion.removeEventListener("change", activate);
            cleanupEffects?.();
        };
    }, [root]);

    return motionRef;
}